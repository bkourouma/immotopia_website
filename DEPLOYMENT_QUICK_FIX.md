# Quick Fix Summary - Deployment Issues

## 🎯 The Main Problem

### What You Tried (Wrong):
```bash
pm2 start apps/web -- next start -- -p 3007
```

### Why It Failed:
1. **PM2 doesn't understand `--` flags** - It interpreted `apps/web/-p` as a directory path
2. **Next.js `next start` doesn't accept `-p` flag** - Only `next dev` accepts `-p`
3. **Wrong approach** - Production server uses `PORT` environment variable, not CLI flags

### The Correct Solution:
Use `PORT` environment variable in PM2 ecosystem config (already configured in `ecosystem.config.js`)

---

## ✅ Correct Deployment Commands

```bash
# 1. SSH to server
ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169

# 2. Navigate and clean
cd /var/www/immo-annonces-website
pm2 delete immo-annonces-website 2>/dev/null || true
cd apps/web && rm -rf .next && cd ../..

# 3. Install dependencies
pnpm install

# 4. Build (VERIFY BUILD_ID AFTER)
pnpm -C apps/web build
cat apps/web/.next/BUILD_ID  # Must show output!

# 5. Create logs dir
mkdir -p logs

# 6. Start with PM2 (uses ecosystem.config.js with PORT=3007)
pm2 start ecosystem.config.js
pm2 save

# 7. Verify (wait 5 seconds first)
sleep 5
ss -lntp | grep 3007  # Should show listener
curl -I http://127.0.0.1:3007  # Should return HTTP 200/301/302
```

---

## 🔍 Key Verification Steps

**After build:**
```bash
cat apps/web/.next/BUILD_ID
# Must output something like: 0.1.2
```

**After PM2 start:**
```bash
pm2 list | grep immo-annonces-website
# Should show: │ immo-annonces-website │ online │ ...

ss -lntp | grep 3007
# Should show: LISTEN ... 127.0.0.1:3007 ...

curl -I http://127.0.0.1:3007
# Should return: HTTP/1.1 200 OK (or 301/302)
```

---

## 📋 Why ecosystem.config.js Works

The `ecosystem.config.js` file (already in repo) sets:
- `env.PORT: '3007'` ← This is how Next.js production server gets the port
- `cwd: '/var/www/immo-annonces-website/apps/web'` ← Where `.next` folder is
- `script: 'node_modules/.bin/next'` ← Next.js binary
- `args: 'start'` ← Production start command

**No CLI flags needed!** Environment variables are the correct way.

---

## 🐛 If BUILD_ID is Missing

```bash
# Rebuild and watch for errors
pnpm -C apps/web build 2>&1 | tee build.log

# Check if BUILD_ID was created
ls -la apps/web/.next/BUILD_ID

# If still missing, check:
# - Build completed without errors
# - Disk space: df -h /var/www
# - Permissions: ls -ld apps/web/.next
```

---

## 📖 Full Guide

See `DEPLOYMENT_DEBUG_GUIDE.md` for complete troubleshooting and step-by-step instructions.

