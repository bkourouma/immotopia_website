# ImmoTopia Website - Production Deployment Guide

## Port Assignment
- **Port**: 3007 (confirmed free)
- **Domain**: www.immo-annonces.fr
- **App Directory**: `/var/www/immo-annonces-website`
- **Next.js App**: `/var/www/immo-annonces-website/apps/web`

---

## Issue Analysis

### Why PM2 Failed with `-p 3007`
The command `next start -- -p 3007` was interpreted by PM2 as:
- Project directory: `apps/web/-p` (PM2 thought `-p` was a directory name)
- This caused: "Invalid project directory ... apps/web/-p"

**Solution**: Use environment variable `PORT=3007` instead of command-line flags.

### BUILD_ID Missing
Next.js 15 generates `.next/BUILD_ID` during `next build`. If it's missing:
1. Build may have failed silently
2. Build output directory may be wrong
3. Permissions issue preventing file creation

---

## Step-by-Step Deployment

### Step 1: SSH and Navigate
```bash
ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169
cd /var/www/immo-annonces-website
```

### Step 2: Verify Current State
```bash
# Check if port 3007 is free
ss -lntp | grep 3007

# Check existing PM2 processes (to avoid conflicts)
pm2 list

# Check if build directory exists
ls -la apps/web/.next/ 2>/dev/null || echo "No .next directory found"

# Check pnpm version (must be >= 10)
pnpm --version
```

### Step 3: Clean Previous Attempts
```bash
cd /var/www/immo-annonces-website

# Remove any existing PM2 process for this app
pm2 delete immo-annonces-website 2>/dev/null || true

# Clean build artifacts (optional, but recommended for fresh build)
cd apps/web
rm -rf .next
cd ../..
```

### Step 4: Install Dependencies
```bash
cd /var/www/immo-annonces-website

# Install all dependencies (monorepo)
pnpm install

# Verify installation
pnpm list --depth=0
```

### Step 5: Build the Application
```bash
cd /var/www/immo-annonces-website

# Build only the web app (faster than building all workspaces)
pnpm -C apps/web build

# Verify build output
echo "=== Checking build output ==="
ls -la apps/web/.next/ | head -20
ls -la apps/web/.next/BUILD_ID 2>/dev/null && echo "✓ BUILD_ID exists" || echo "✗ BUILD_ID missing"

# Check build size
du -sh apps/web/.next/
```

**If BUILD_ID is missing after build:**
```bash
# Check build logs for errors
cat apps/web/.next/trace 2>/dev/null || echo "No trace file"

# Check permissions
ls -ld apps/web/.next/
whoami

# Try rebuilding with verbose output
cd apps/web
NODE_ENV=production pnpm next build 2>&1 | tee build.log
cat build.log | grep -i error
```

### Step 6: Fix next.config.js (Remove Deprecated Option)
```bash
cd /var/www/immo-annonces-website/apps/web

# Backup current config
cp next.config.js next.config.js.backup

# Remove swcMinify (deprecated in Next.js 15, but SWC minification is default)
# Edit next.config.js and remove line 17: swcMinify: true,
```

**Manual edit required**: Remove `swcMinify: true,` from line 17 of `apps/web/next.config.js`

After editing, rebuild:
```bash
cd /var/www/immo-annonces-website
pnpm -C apps/web build
```

### Step 7: Start with PM2 (Correct Method)
```bash
cd /var/www/immo-annonces-website

# Create PM2 ecosystem file for better control
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'immo-annonces-website',
    cwd: '/var/www/immo-annonces-website/apps/web',
    script: 'node_modules/.bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: '3007',
      HOSTNAME: '127.0.0.1'
    },
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: '/var/www/immo-annonces-website/logs/pm2-error.log',
    out_file: '/var/www/immo-annonces-website/logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};
EOF

# Create logs directory
mkdir -p /var/www/immo-annonces-website/logs

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Verify PM2 status
pm2 list
pm2 info immo-annonces-website
```

### Step 8: Verify Application is Running
```bash
# Check if port 3007 is listening
ss -lntp | grep 3007

# Test HTTP response
curl -I http://127.0.0.1:3007

# Check PM2 logs
pm2 logs immo-annonces-website --lines 50

# Check process details
pm2 describe immo-annonces-website
```

### Step 9: Monitor and Troubleshoot
```bash
# Real-time logs
pm2 logs immo-annonces-website

# Check system resources (watch for CPU contention)
top -p $(pgrep -f "next start" | tr '\n' ',' | sed 's/,$//')

# Check memory usage
pm2 monit

# If app crashes, check error logs
cat /var/www/immo-annonces-website/logs/pm2-error.log
```

---

## Nginx Configuration

**⚠️ IMPORTANT: Review this configuration before applying. Do NOT edit Nginx until you confirm the app is running on port 3007.**

### Nginx Site Configuration
Create: `/etc/nginx/sites-available/immo-annonces`

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.immo-annonces.fr immo-annonces.fr;

    # Logging
    access_log /var/log/nginx/immo-annonces-access.log;
    error_log /var/log/nginx/immo-annonces-error.log;

    # Security headers (Next.js already sets some, but Nginx can add more)
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Next.js
    location / {
        proxy_pass http://127.0.0.1:3007;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Health check endpoint (if you add one)
    location /health {
        proxy_pass http://127.0.0.1:3007/api/health;
        access_log off;
    }
}
```

### To Apply Nginx Configuration (After Confirmation)
```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/immo-annonces /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx

# Verify Nginx is serving the site
curl -I -H "Host: www.immo-annonces.fr" http://localhost
```

---

## Quick Reference Commands

### Start/Stop/Restart
```bash
pm2 start immo-annonces-website
pm2 stop immo-annonces-website
pm2 restart immo-annonces-website
pm2 reload immo-annonces-website  # Zero-downtime reload
```

### View Logs
```bash
pm2 logs immo-annonces-website
pm2 logs immo-annonces-website --lines 100 --err
```

### Update Deployment
```bash
cd /var/www/immo-annonces-website
git pull
pnpm install
pnpm -C apps/web build
pm2 restart immo-annonces-website
```

### Check Conflicts
```bash
# All listening ports
ss -lntp

# All Node/Next processes
ps aux | grep -E "node|next" | grep -v grep

# PM2 processes
pm2 list
```

---

## Troubleshooting

### BUILD_ID Still Missing
1. Check build logs: `cat apps/web/.next/trace`
2. Verify Node version: `node --version` (should be >= 18)
3. Check disk space: `df -h`
4. Rebuild with clean cache: `rm -rf apps/web/.next && pnpm -C apps/web build`

### Port Already in Use
```bash
# Find what's using port 3007
sudo lsof -i :3007
sudo ss -lntp | grep 3007

# Kill if needed (be careful!)
sudo kill -9 <PID>
```

### High CPU Usage
- Next.js 15 builds are CPU-intensive
- Consider building during low-traffic hours
- Monitor with `pm2 monit` or `htop`

### PM2 Process Keeps Crashing
```bash
# Check error logs
pm2 logs immo-annonces-website --err --lines 100

# Check system resources
free -h
df -h

# Verify build is complete
ls -la apps/web/.next/BUILD_ID
```

---

## Safety Checklist

- [ ] Port 3007 confirmed free (`ss -lntp | grep 3007` returns nothing)
- [ ] No existing PM2 process with same name
- [ ] Build completes successfully with BUILD_ID present
- [ ] App responds on `curl -I http://127.0.0.1:3007`
- [ ] PM2 process shows "online" status
- [ ] Nginx config tested before enabling
- [ ] Existing apps still running (verify ports 3000, 3001, 3004, 3005, 3022)

---

## Next Steps After Deployment

1. Set up SSL certificate (Let's Encrypt) for HTTPS
2. Configure DNS A record for www.immo-annonces.fr → 147.93.44.169
3. Set up PM2 startup script: `pm2 startup` and `pm2 save`
4. Configure log rotation for PM2 logs
5. Set up monitoring/alerting (optional)

