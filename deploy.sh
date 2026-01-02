#!/bin/bash

# Deployment Script for ImmoTopia
# Builds Astro, Vite, and starts PM2

set -e

echo "🚀 Starting deployment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Build Astro (Public Site)
echo -e "${BLUE}📦 Building Astro public site...${NC}"
cd apps/public-site
pnpm build
cd ../..

# Build Vite (Admin Panel)
echo -e "${BLUE}📦 Building Vite admin panel...${NC}"
cd apps/admin-panel
pnpm build
cd ../..

# Build API (if needed)
echo -e "${BLUE}📦 Building API...${NC}"
cd apps/api
pnpm build
cd ../..

# Restart PM2
echo -e "${BLUE}🔄 Restarting PM2...${NC}"
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js

# Show status
pm2 status

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Copy Astro build to /var/www/immotopia/public-site/dist"
echo "2. Copy Vite build to /var/www/immotopia/admin-panel/dist"
echo "3. Reload Nginx: sudo nginx -t && sudo systemctl reload nginx"
