# 🚀 Start Deployment - Quick Start Guide

## Current Status

✅ **Preflight checks completed remotely:**
- SSH connection verified
- Server: srv917891 (147.93.44.169)
- User: deployer
- Node.js v20.19.6 ✅
- npm v10.8.2 ✅
- pnpm v10.27.0 ✅ (installed)
- Port 3010 is FREE (will use for API) ✅
- Old site exists at `/var/www/immo-annonces-website` (untouched)

## ⚠️ What You Need to Do

**Connect to the server and run the commands manually** (sudo password required):

```bash
# 1. Connect to server
ssh deployer@147.93.44.169

# 2. Run the deployment script OR follow commands manually
```

## Option 1: Use the Automated Script

The script `deploy-on-server.sh` is already on the server. However, it needs sudo access.

**Run it interactively:**
```bash
ssh deployer@147.93.44.169
chmod +x ~/deploy-on-server.sh
~/deploy-on-server.sh
# (Enter sudo password when prompted)
```

## Option 2: Follow Step-by-Step Commands

**See `DEPLOYMENT_COMMANDS.md`** for the complete command list.

**Quick version:**
```bash
# Connect
ssh deployer@147.93.44.169

# Step 1: Create directory
sudo mkdir -p /var/www/immo-annonces-new
sudo chown -R deployer:deployer /var/www/immo-annonces-new

# Step 2: Clone repo
cd /var/www/immo-annonces-new
git clone -b 008-intgration-navigation-blog-faq-et-synchronisation-donnes-backoffice \
  https://github.com/bkourouma/immotopia_website.git .

# Step 3: Install deps
pnpm install

# Step 4: Build all apps
cd apps/public-site && pnpm build && cd ../..
cd apps/admin-panel && pnpm build && cd ../..
cd apps/api && pnpm build && cd ../..

# Step 5: Copy static files
cd /var/www/immo-annonces-new
mkdir -p public-site admin-panel
cp -r apps/public-site/dist/* public-site/
cp -r apps/admin-panel/dist/* admin-panel/

# Step 6: Configure API port
sed -i 's/PORT: [0-9]*/PORT: 3010/' ecosystem.config.js
cd apps/api
[ -f .env ] && sed -i "s/^PORT=.*/PORT=3010/" .env || echo "PORT=3010" >> .env
cd ../..

# Step 7: Start API
pm2 start ecosystem.config.js
pm2 save

# Step 8: Create Nginx config (see DEPLOYMENT_COMMANDS.md for full config)
sudo nano /etc/nginx/sites-available/immo-annonces-new

# Step 9: Enable and reload
sudo ln -s /etc/nginx/sites-available/immo-annonces-new /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 📋 Important Configuration Details

- **API Port**: 3010
- **New Directory**: `/var/www/immo-annonces-new`
- **PM2 Process Name**: `imotopia-api`
- **Nginx Config**: `/etc/nginx/sites-available/immo-annonces-new`

## 🔍 Verification Commands

After deployment, verify everything works:

```bash
# Check PM2
pm2 list
pm2 logs immotopia-api

# Test API
curl http://localhost:3010/health

# Test static files
ls -la /var/www/immo-annonces-new/public-site/index.html
ls -la /var/www/immo-annonces-new/admin-panel/index.html

# Check Nginx
sudo nginx -t
sudo systemctl status nginx
```

## 📚 Documentation Files Created

1. **DEPLOYMENT_PRODUCTION_GUIDE.md** - Complete detailed guide
2. **DEPLOYMENT_COMMANDS.md** - Step-by-step commands
3. **DEPLOYMENT_QUICK_REFERENCE.md** - Quick command reference
4. **DEPLOYMENT_STATUS.md** - Current status and next steps
5. **deploy-on-server.sh** - Automated script (on server)

## 🆘 Need Help?

- Check `DEPLOYMENT_PRODUCTION_GUIDE.md` for detailed explanations
- Check `DEPLOYMENT_COMMANDS.md` for exact commands
- Review rollback procedures in the guides if something goes wrong

---

**Ready to deploy?** Connect to the server and start with Step 1!



