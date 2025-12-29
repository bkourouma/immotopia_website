# Deployment Summary - Key Issues & Solutions

## 🔴 Problem 1: PM2 Command Error

### What Happened
```bash
# ❌ WRONG (what you tried):
pm2 start apps/web -- next start -- -p 3007
```

**Error**: `Invalid project directory ... apps/web/-p`

### Why It Failed
PM2 interpreted the command as:
- **Project directory**: `apps/web/-p` (PM2 thought `-p` was a directory name)
- PM2 doesn't understand `--` flag separation the same way shell does
- The `-p 3007` argument was treated as part of the directory path

### ✅ Correct Solution
Use environment variable `PORT=3007` instead of command-line flags:

**Option 1: PM2 Ecosystem File (Recommended)**
```bash
pm2 start ecosystem.config.js
```

**Option 2: Direct PM2 with env**
```bash
pm2 start apps/web/node_modules/.bin/next --name immo-annonces-website \
  --cwd /var/www/immo-annonces-website/apps/web \
  -- start \
  --env PORT=3007
```

**Option 3: Environment file**
```bash
# Create .env.production in apps/web/
PORT=3007
NODE_ENV=production

# Then:
pm2 start apps/web/node_modules/.bin/next --name immo-annonces-website \
  --cwd /var/www/immo-annonces-website/apps/web \
  -- start
```

---

## 🔴 Problem 2: Missing BUILD_ID

### What It Means
`.next/BUILD_ID` is a file Next.js creates during `next build` that contains a unique build identifier. If missing:
- Next.js production server won't start
- Error: "Could not find a production build in the '.next' directory"

### Why It Might Be Missing
1. **Build didn't complete** - Check for errors in build output
2. **Wrong directory** - Build ran in wrong location
3. **Permissions issue** - User can't write to `.next/` directory
4. **Disk space** - No space to create files
5. **Build cache corruption** - Stale cache interfering

### ✅ Diagnosis Steps
```bash
# 1. Check if build completed
ls -la apps/web/.next/BUILD_ID

# 2. Check build logs
cat apps/web/.next/trace 2>/dev/null

# 3. Check permissions
ls -ld apps/web/.next/
whoami

# 4. Check disk space
df -h

# 5. Rebuild with clean cache
cd apps/web
rm -rf .next
NODE_ENV=production pnpm next build 2>&1 | tee build.log
```

### ✅ Fix
```bash
# Clean rebuild
cd /var/www/immo-annonces-website
rm -rf apps/web/.next
pnpm -C apps/web build

# Verify BUILD_ID exists
ls -la apps/web/.next/BUILD_ID && echo "✓ BUILD_ID: $(cat apps/web/.next/BUILD_ID)"
```

---

## 🔴 Problem 3: Deprecated `swcMinify` Warning

### What It Means
Next.js 15 removed the `swcMinify` option because:
- SWC minification is now **always enabled** by default
- The option is redundant and causes a warning

### ✅ Fix Applied
Removed `swcMinify: true` from `apps/web/next.config.js`

**Before:**
```javascript
swcMinify: true,  // ❌ Deprecated in Next.js 15
compress: true,
```

**After:**
```javascript
// swcMinify removed: deprecated in Next.js 15 (SWC minification is default)
compress: true,
```

This is safe - minification still works, just no longer configurable.

---

## 📋 Complete Deployment Flow

### Quick Deploy (Automated)
```bash
cd /var/www/immo-annonces-website
chmod +x deploy.sh
./deploy.sh
```

### Manual Deploy (Step-by-Step)
```bash
# 1. Verify port free
ss -lntp | grep 3007

# 2. Clean previous attempts
pm2 delete immo-annonces-website 2>/dev/null || true
cd /var/www/immo-annonces-website/apps/web
rm -rf .next

# 3. Install & build
cd /var/www/immo-annonces-website
pnpm install
pnpm -C apps/web build

# 4. Verify BUILD_ID
ls -la apps/web/.next/BUILD_ID || { echo "Build failed!"; exit 1; }

# 5. Start with PM2
cd /var/www/immo-annonces-website
mkdir -p logs
pm2 start ecosystem.config.js
pm2 save

# 6. Verify
ss -lntp | grep 3007
curl -I http://127.0.0.1:3007
pm2 logs immo-annonces-website --lines 20
```

---

## 🔍 Verification Checklist

After deployment, verify:

- [ ] **Port listening**: `ss -lntp | grep 3007` shows process
- [ ] **HTTP response**: `curl -I http://127.0.0.1:3007` returns 200/301/302
- [ ] **PM2 status**: `pm2 list` shows process as "online"
- [ ] **BUILD_ID exists**: `ls apps/web/.next/BUILD_ID` shows file
- [ ] **No conflicts**: Other apps (ports 3000, 3001, 3004, 3005, 3022) still running
- [ ] **Logs clean**: `pm2 logs immo-annonces-website --lines 50` shows no errors

---

## 🚨 Conflict Prevention

### Port Conflicts
```bash
# Before starting, always check:
ss -lntp | grep 3007

# If port is in use, find the process:
sudo lsof -i :3007
sudo ss -lntp | grep 3007
```

### PM2 Name Conflicts
```bash
# Check existing PM2 processes
pm2 list

# If name exists, delete first:
pm2 delete immo-annonces-website
```

### CPU Contention
Multiple Next.js apps running can cause CPU contention:
- Monitor with: `pm2 monit` or `htop`
- Consider building during low-traffic hours
- Next.js 15 builds are CPU-intensive

---

## 📝 Files Created

1. **`DEPLOYMENT_GUIDE.md`** - Complete step-by-step guide
2. **`ecosystem.config.js`** - PM2 configuration file
3. **`nginx-site-config.conf`** - Nginx site configuration (review before applying)
4. **`deploy.sh`** - Automated deployment script
5. **`DEPLOYMENT_SUMMARY.md`** - This file (quick reference)

---

## 🎯 Next Steps After App is Running

1. **Test locally**: `curl -I http://127.0.0.1:3007`
2. **Review Nginx config**: Check `nginx-site-config.conf`
3. **Apply Nginx** (after confirmation):
   ```bash
   sudo cp nginx-site-config.conf /etc/nginx/sites-available/immo-annonces
   sudo ln -s /etc/nginx/sites-available/immo-annonces /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```
4. **Set up SSL**: Let's Encrypt certificate
5. **Configure DNS**: Point www.immo-annonces.fr to 147.93.44.169

---

## 💡 Key Takeaways

1. **Never use `-p` flag with PM2** - Use `PORT` environment variable
2. **Always verify BUILD_ID** after build
3. **Check port conflicts** before starting
4. **Use PM2 ecosystem files** for production deployments
5. **Test locally first** before configuring Nginx

