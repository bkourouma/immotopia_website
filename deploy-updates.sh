#!/bin/bash
set -e

cd /var/www/immo-annonces-new

echo "🔄 Pulling latest changes..."
git pull

echo ""
echo "🏗️  Building applications..."

# Build contracts package first
echo "📦 Building contracts..."
cd packages/contracts
npx --yes pnpm build
cd ../..

# Generate Prisma client (if schema changed)
echo "🔧 Generating Prisma client..."
cd apps/api
npx --yes pnpm prisma generate
cd ../..

# Build API (if code changed)
echo "🔧 Building API..."
cd apps/api
npx --yes pnpm build
cd ../..

# Build public site (ensure API is running)
echo "🌐 Building public site..."
cd apps/public-site
export PUBLIC_API_URL="http://localhost:3002"
npx --yes pnpm build
cd ../..

# Build admin panel
echo "⚙️  Building admin panel..."
cd apps/admin-panel
npx --yes pnpm build
cd ../..

echo ""
echo "📋 Copying builds to web directories..."

# Copy public site
echo "📁 Copying public site..."
sudo rm -rf public-site/*
sudo cp -r apps/public-site/dist/* public-site/
sudo chown -R www-data:www-data public-site

# Copy admin panel
echo "📁 Copying admin panel..."
sudo rm -rf admin-panel/*
sudo cp -r apps/admin-panel/dist/* admin-panel/
sudo chown -R www-data:www-data admin-panel

echo ""
echo "🔄 Restarting services..."

# Restart API (if code changed)
pm2 restart immotopia-api --update-env

# Reload Nginx
sudo nginx -t
sudo systemctl reload nginx

echo ""
echo "✅ Deployment completed!"
echo ""
echo "📊 Checking status..."
pm2 list
echo ""
echo "🌐 Site should be live at: https://immotopia.immo-annonces.fr"



