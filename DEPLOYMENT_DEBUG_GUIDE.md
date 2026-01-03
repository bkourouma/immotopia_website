# Production Deployment Debug Guide
## ImmoTopia Website - Port 3007 Deployment

**VPS**: srv917891 (147.93.44.169)  
**Domain**: www.immo-annonces.fr  
**Port**: 3007 (confirmed free)  
**App Path**: `/var/www/immo-annonces-website`

---

## 🔍 Root Cause Analysis

### Issue 1: PM2 Command Interpretation Error

**What happened:**
```bash
# ❌ WRONG - This was attempted:
pm2 start apps/web -- next start -- -p 3007
```

**Why it failed:**
- PM2 doesn't parse `--` flags the same way shell does
- PM2 interpreted `apps/web/-p` as a directory path (thought `-p` was a directory)
- Next.js `next start` command doesn't accept `-p` flag (only `next dev` does)
- Error: `Invalid project directory ... apps/web/-p`

**✅ Solution:**
Next.js production server (`next start`) uses the `PORT` environment variable, not command-line flags. Use PM2 ecosystem config or env vars.

---

### Issue 2: Missing BUILD_ID

**What it means:**
- `.next/BUILD_ID` is a file Next.js creates during `next build`
- Contains unique build identifier (e.g., `"0.1.2"`)
- If missing, Next.js won't start production server
- Error: `Could not find a production build in the '.next' directory`

**Why it might be missing:**
1. **Build didn't complete** - Check for errors in build output
2. **Build ran in wrong directory** - Verify working directory
3. **Permissions issue** - User can't write to `.next/` directory
4. **Disk space** - No space to create files
5. **Incomplete build** - Build process was interrupted
6. **Monorepo path issue** - Build artifacts in unexpected location

---

### Issue 3: swcMinify Warning

**Status:** ✅ Already fixed in codebase
- `next.config.js` line 26 has comment: `// swcMinify removed: deprecated in Next.js 15`
- This is just a warning, not fatal
- SWC minification is default in Next.js 15.x

---

## 📋 Step-by-Step Debugging & Deployment

### Pre-flight Checks (Run First)

```bash
# SSH to server
ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169

# Navigate to app directory
cd /var/www/immo-annonces-website

# Verify port 3007 is free (CRITICAL - avoid conflicts)
ss -lntp | grep 3007
# Should return nothing, or show existing listeners if in use

# Check existing PM2 processes (to avoid restarting wrong app)
pm2 list

# Verify no existing process with same name
pm2 list | grep immo-annonces-website

# Check pnpm version (must be >= 10)
pnpm --version

# Check Node.js version (must be >= 18)
node --version

# Check disk space
df -h /var/www

# Check current directory structure
ls -la apps/web/ | head -20
```

---

### Step 1: Clean Previous Attempts

```bash
cd /var/www/immo-annonces-website

# Stop and remove any existing PM2 process
pm2 delete immo-annonces-website 2>/dev/null || true

# Wait a moment for process cleanup
sleep 2

# Verify port is released
ss -lntp | grep 3007
# Should be empty now

# Clean build artifacts (fresh start)
cd apps/web
rm -rf .next
rm -rf node_modules/.cache

# Go back to root
cd /var/www/immo-annonces-website
```

**Verification:**
```bash
# Confirm .next directory is gone
ls -la apps/web/.next 2>&1 | grep "No such file" && echo "✓ Cleaned"
```

---

### Step 2: Install Dependencies

```bash
cd /var/www/immo-annonces-website

# Install all dependencies (monorepo root)
pnpm install

# This may take 2-5 minutes depending on network speed
# Watch for any errors during installation

# Verify critical packages
cd apps/web
ls -la node_modules/.bin/next

# Should show: node_modules/.bin/next -> .../next/dist/bin/next
```

**If pnpm install fails:**
```bash
# Check pnpm version
pnpm --version

# If < 10, upgrade:
npm install -g pnpm@latest

# Then retry
pnpm install
```

---

### Step 3: Build Application

```bash
cd /var/www/immo-annonces-website

# Build from monorepo root (this ensures workspace dependencies resolve)
pnpm -C apps/web build

# This will take 3-10 minutes depending on CPU load
# Watch for errors - build should complete with "✓ Compiled successfully"
```

**⚠️ CPU Contention Warning:**
You have multiple Next.js apps running (ports 3000, 3001, 3004, 3005, 3022). If build is very slow:
- Consider building during low-traffic hours
- Monitor CPU: `top` or `htop`
- Build might take 10-15 minutes if CPU is heavily loaded

**Verify BUILD_ID was created:**
```bash
# Check BUILD_ID exists
cat apps/web/.next/BUILD_ID

# Should output something like: 0.1.2 or a hash
# If this fails, build didn't complete successfully

# Additional verification
ls -la apps/web/.next/ | head -20

# Should show:
# - BUILD_ID
# - static/
# - server/
# - routes-manifest.json
# - etc.
```

**If BUILD_ID is missing:**
```bash
# Check build logs for errors
tail -100 apps/web/.next/trace 2>/dev/null || echo "No trace file"

# Check permissions
ls -ld apps/web/.next
# Should show: drwxr-xr-x ... (writable by deployer user)

# Check disk space again
df -h /var/www

# Try manual build test
cd apps/web
NODE_ENV=production node_modules/.bin/next build
# Watch output for errors
```

---

### Step 4: Verify PM2 Configuration

```bash
cd /var/www/immo-annonces-website

# Check ecosystem.config.js exists and is correct
cat ecosystem.config.js

# Verify key settings:
# - cwd: /var/www/immo-annonces-website/apps/web
# - script: node_modules/.bin/next
# - args: start
# - env.PORT: 3007
# - env.NODE_ENV: production
```

**The ecosystem.config.js should look like:**
```javascript
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
```

**Why this works:**
- `cwd` sets working directory to `apps/web` (where `.next` folder is)
- `script` points to the `next` binary in node_modules
- `args: 'start'` passes `start` command to Next.js
- `env.PORT: '3007'` sets port via environment variable (correct way)
- PM2 doesn't misinterpret arguments

---

### Step 5: Create Logs Directory

```bash
cd /var/www/immo-annonces-website

# Create logs directory if it doesn't exist
mkdir -p logs

# Verify
ls -ld logs
```

---

### Step 6: Start with PM2

```bash
cd /var/www/immo-annonces-website

# Start using ecosystem config
pm2 start ecosystem.config.js

# Save PM2 configuration (so it survives server reboot)
pm2 save

# Check status immediately
pm2 list | grep immo-annonces-website
```

**Expected output:**
```
│ immo-annonces-website │ online │ 0    │ 15% │ 45.2 MB │ 0%     │ 0s    │
```

**If status shows "errored" or "stopped":**
```bash
# Check logs immediately
pm2 logs immo-annonces-website --lines 50

# Common issues:
# - Port already in use: ss -lntp | grep 3007
# - BUILD_ID missing: cat apps/web/.next/BUILD_ID
# - Wrong working directory: pm2 describe immo-annonces-website
```

---

### Step 7: Verification

```bash
# Wait 5-10 seconds for app to start
sleep 5

# 1. Check PM2 status
pm2 status immo-annonces-website

# Should show: "online" status

# 2. Check port is listening
ss -lntp | grep 3007

# Should show:
# LISTEN 0    512    127.0.0.1:3007   0.0.0.0:*    users:(("node",pid=XXXX,fd=XX))

# 3. Test HTTP response
curl -I http://127.0.0.1:3007

# Should return HTTP headers:
# HTTP/1.1 200 OK (or 301/302 for redirects)
# Content-Type: text/html; charset=utf-8
# etc.

# 4. Test with full response (first 500 chars)
curl http://127.0.0.1:3007 | head -c 500

# Should show HTML content, not error page

# 5. Check PM2 logs for startup messages
pm2 logs immo-annonces-website --lines 20 --nostream
```

**If port check fails:**
```bash
# Check if process is actually running
pm2 describe immo-annonces-website

# Check error logs
tail -50 /var/www/immo-annonces-website/logs/pm2-error.log

# Check if BUILD_ID exists (common issue)
ls -la apps/web/.next/BUILD_ID
```

**If HTTP test fails:**
```bash
# Check if app is binding to correct interface
ss -lntp | grep 3007

# Should show 127.0.0.1:3007, not 0.0.0.0:3007 (for security)

# Check logs for binding errors
pm2 logs immo-annonces-website --lines 30
```

---

## 🔧 Alternative: Manual PM2 Start (If Ecosystem Config Fails)

If `ecosystem.config.js` approach doesn't work, try direct PM2 command:

```bash
cd /var/www/immo-annonces-website/apps/web

pm2 start node_modules/.bin/next \
  --name immo-annonces-website \
  -- start \
  --env PORT=3007 \
  --env NODE_ENV=production \
  --env HOSTNAME=127.0.0.1 \
  --max-memory-restart 1G \
  --error /var/www/immo-annonces-website/logs/pm2-error.log \
  --output /var/www/immo-annonces-website/logs/pm2-out.log

pm2 save
```

**Key differences:**
- No `--` separator needed
- `--env` flags set environment variables
- Working directory is already `apps/web` (from `cd` command)

---

## 📊 Monitoring Commands

```bash
# Real-time logs
pm2 logs immo-annonces-website

# Monitor resources
pm2 monit

# Detailed process info
pm2 describe immo-annonces-website

# Restart if needed
pm2 restart immo-annonces-website

# Stop
pm2 stop immo-annonces-website

# View all processes
pm2 list

# Check port listeners
ss -lntp | grep -E "(3000|3001|3004|3005|3007|3022)"
```

---

## ⚠️ Safety Checklist Before Nginx Config

**Before applying Nginx configuration, verify:**

- [ ] App is running: `pm2 list | grep immo-annonces-website` shows "online"
- [ ] Port is listening: `ss -lntp | grep 3007` shows listener
- [ ] HTTP test works: `curl -I http://127.0.0.1:3007` returns 200/301/302
- [ ] No port conflicts: `ss -lntp | grep 3007` shows only ONE process
- [ ] BUILD_ID exists: `cat apps/web/.next/BUILD_ID` returns content
- [ ] Logs show no errors: `pm2 logs immo-annonces-website --lines 20` clean

**Only then proceed to Nginx configuration.**

---

## 🌐 Nginx Configuration (Ready, But WAIT)

The Nginx config file is already prepared: `nginx-site-config.conf`

**⚠️ DO NOT apply until app is confirmed working on port 3007**

Once verified, the config will be at:
- Source: `/var/www/immo-annonces-website/nginx-site-config.conf`
- Target: `/etc/nginx/sites-available/immo-annonces`

**To apply (after verification):**
```bash
# Copy config to Nginx sites-available
sudo cp /var/www/immo-annonces-website/nginx-site-config.conf \
        /etc/nginx/sites-available/immo-annonces

# Create symlink to enable
sudo ln -s /etc/nginx/sites-available/immo-annonces \
           /etc/nginx/sites-enabled/immo-annonces

# Test Nginx configuration
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```

---

## 🐛 Troubleshooting Guide

### Problem: BUILD_ID missing after build

**Diagnosis:**
```bash
# Check if build completed
tail -100 apps/web/.next/trace

# Check for errors in build output
grep -i error apps/web/.next/trace 2>/dev/null

# Verify build command ran from correct directory
pwd  # Should be /var/www/immo-annonces-website

# Check disk space
df -h /var/www
```

**Fixes:**
1. **Build didn't complete:** Re-run `pnpm -C apps/web build` and watch for errors
2. **Wrong directory:** Ensure you're in monorepo root when building
3. **Permissions:** `chmod -R u+w apps/web/.next` (if needed)
4. **Disk space:** Free up space if needed
5. **Monorepo workspace issue:** Try building from `apps/web` directly:
   ```bash
   cd apps/web
   pnpm build
   ```

---

### Problem: PM2 shows "errored" status

**Diagnosis:**
```bash
# Check error logs
pm2 logs immo-annonces-website --err --lines 50

# Or check file directly
tail -50 /var/www/immo-annonces-website/logs/pm2-error.log
```

**Common errors:**

1. **"Could not find a production build"**
   - Fix: BUILD_ID is missing, rebuild
   - Check: `ls -la apps/web/.next/BUILD_ID`

2. **"Port 3007 already in use"**
   - Fix: Find and kill process: `ss -lntp | grep 3007`
   - Kill: `kill -9 <PID>` or `pm2 delete <app-name>`

3. **"Cannot find module"**
   - Fix: Dependencies not installed or wrong directory
   - Run: `pnpm install` from monorepo root

4. **"EADDRINUSE" or binding error**
   - Fix: Port conflict or HOSTNAME binding issue
   - Check: `ss -lntp | grep 3007`

---

### Problem: Port 3007 not listening

**Diagnosis:**
```bash
# Check if process is running
pm2 list | grep immo-annonces-website

# Check logs for binding errors
pm2 logs immo-annonces-website --lines 30

# Check if port is in use by another process
ss -lntp | grep 3007
```

**Fixes:**
1. Process not started: `pm2 restart immo-annonces-website`
2. Port conflict: Find other process and stop it
3. Binding error: Check HOSTNAME in ecosystem.config.js (should be 127.0.0.1)
4. Firewall: Check if firewall is blocking (unlikely for localhost)

---

### Problem: Build takes too long (>15 minutes)

**Causes:**
- Multiple Next.js apps running (CPU contention)
- Limited CPU resources
- Large codebase with many dependencies

**Solutions:**
1. Build during low-traffic hours
2. Temporarily stop non-critical apps: `pm2 stop <app-name>`
3. Monitor CPU: `htop` or `top`
4. Check build is actually progressing: `tail -f` on build output

---

## ✅ Success Criteria

You'll know deployment is successful when:

1. ✅ `pm2 list` shows `immo-annonces-website` with status "online"
2. ✅ `ss -lntp | grep 3007` shows process listening on 127.0.0.1:3007
3. ✅ `curl -I http://127.0.0.1:3007` returns HTTP 200/301/302
4. ✅ `cat apps/web/.next/BUILD_ID` returns build identifier
5. ✅ No errors in `pm2 logs immo-annonces-website`
6. ✅ App responds with HTML content (not error page)

---

## 📝 Quick Reference Commands

```bash
# Full deployment (after SSH)
cd /var/www/immo-annonces-website
pm2 delete immo-annonces-website 2>/dev/null || true
cd apps/web && rm -rf .next && cd ../..
pnpm install
pnpm -C apps/web build
cat apps/web/.next/BUILD_ID  # Verify
mkdir -p logs
pm2 start ecosystem.config.js
pm2 save
sleep 5
ss -lntp | grep 3007
curl -I http://127.0.0.1:3007
```

---

## 🔗 Next Steps After Successful Deployment

1. ✅ Verify app is working on port 3007
2. ✅ Test all major routes manually
3. ✅ Review PM2 logs for warnings
4. ⚠️ **Then and only then:** Apply Nginx configuration
5. ✅ Configure SSL certificate (Let's Encrypt)
6. ✅ Set up monitoring/alerting (optional)
7. ✅ Document DNS records (A/AAAA for www.immo-annonces.fr)

---

**Last Updated:** Deployment Guide v1.0  
**Next.js Version:** 15.5.9  
**Port:** 3007 (verified free)



