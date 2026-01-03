#!/bin/bash
# Deployment Script for ImmoTopia - Run this on the server
# This script handles the deployment step by step with sudo where needed

set -e  # Exit on error

echo "🚀 Starting ImmoTopia Deployment"
echo "=================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
REPO_URL="https://github.com/bkourouma/immotopia_website.git"
BRANCH="008-intgration-navigation-blog-faq-et-synchronisation-donnes-backoffice"
NEW_DIR="/var/www/immo-annonces-new"
API_PORT=3010

echo -e "${BLUE}📋 Configuration:${NC}"
echo "  Repository: $REPO_URL"
echo "  Branch: $BRANCH"
echo "  New Directory: $NEW_DIR"
echo "  API Port: $API_PORT"
echo ""

# Step 1: Create new directory
echo -e "${BLUE}📁 Step 1: Creating new directory...${NC}"
sudo mkdir -p "$NEW_DIR"
sudo chown -R deployer:deployer "$NEW_DIR"
echo -e "${GREEN}✅ Directory created${NC}"
echo ""

# Step 2: Clone repository
echo -e "${BLUE}📦 Step 2: Cloning repository...${NC}"
cd "$NEW_DIR"
if [ -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Repository already exists, pulling latest...${NC}"
    git fetch origin
    git checkout "$BRANCH"
    git pull origin "$BRANCH"
else
    git clone -b "$BRANCH" "$REPO_URL" .
fi
echo -e "${GREEN}✅ Repository cloned/updated${NC}"
git status -sb | head -1
echo ""

# Step 3: Check pnpm
echo -e "${BLUE}🔧 Step 3: Checking pnpm...${NC}"
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}⚠️  pnpm not found, installing...${NC}"
    npm install -g pnpm@latest
fi
PNPM_VERSION=$(pnpm --version)
echo -e "${GREEN}✅ pnpm version: $PNPM_VERSION${NC}"
echo ""

# Step 4: Install dependencies
echo -e "${BLUE}📦 Step 4: Installing dependencies...${NC}"
echo "This may take several minutes..."
pnpm install
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 5: Build applications
echo -e "${BLUE}🏗️  Step 5: Building applications...${NC}"

echo "  Building Astro public site..."
cd apps/public-site
pnpm build
echo -e "${GREEN}  ✅ Astro build complete${NC}"
cd ../..

echo "  Building Vite admin panel..."
cd apps/admin-panel
pnpm build
echo -e "${GREEN}  ✅ Vite build complete${NC}"
cd ../..

echo "  Building Fastify API..."
cd apps/api
pnpm build
echo -e "${GREEN}  ✅ API build complete${NC}"
cd ../..

echo -e "${GREEN}✅ All builds complete${NC}"
echo ""

# Step 6: Prepare static directories
echo -e "${BLUE}📁 Step 6: Preparing static file directories...${NC}"
mkdir -p public-site admin-panel
cp -r apps/public-site/dist/* public-site/
cp -r apps/admin-panel/dist/* admin-panel/
echo -e "${GREEN}✅ Static files copied${NC}"
echo ""

# Step 7: Update ecosystem.config.js with correct port
echo -e "${BLUE}⚙️  Step 7: Configuring PM2 ecosystem...${NC}"
if [ -f ecosystem.config.js ]; then
    # Update port in ecosystem.config.js if needed
    sed -i "s/PORT: [0-9]*/PORT: $API_PORT/" ecosystem.config.js || true
    echo -e "${GREEN}✅ PM2 config updated${NC}"
else
    echo -e "${RED}❌ ecosystem.config.js not found${NC}"
    exit 1
fi
echo ""

# Step 8: Check API .env file
echo -e "${BLUE}🔐 Step 8: Checking API environment...${NC}"
if [ -f apps/api/.env ]; then
    echo -e "${GREEN}✅ .env file exists${NC}"
    # Check if PORT is set correctly
    if ! grep -q "PORT=$API_PORT" apps/api/.env; then
        echo -e "${YELLOW}⚠️  Updating PORT in apps/api/.env...${NC}"
        if grep -q "^PORT=" apps/api/.env; then
            sed -i "s/^PORT=.*/PORT=$API_PORT/" apps/api/.env
        else
            echo "PORT=$API_PORT" >> apps/api/.env
        fi
    fi
else
    echo -e "${YELLOW}⚠️  .env file not found. You may need to create it.${NC}"
    echo "Required variables:"
    echo "  - DATABASE_URL"
    echo "  - PORT=$API_PORT"
    echo "  - NODE_ENV=production"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi
echo ""

# Step 9: Start API with PM2
echo -e "${BLUE}🚀 Step 9: Starting API with PM2...${NC}"
pm2 stop immotopia-api 2>/dev/null || true
pm2 delete immotopia-api 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
echo -e "${GREEN}✅ API started${NC}"
pm2 list
echo ""

# Step 10: Verify API is running
echo -e "${BLUE}🔍 Step 10: Verifying API...${NC}"
sleep 2
if curl -f http://localhost:$API_PORT/health > /dev/null 2>&1 || curl -f http://localhost:$API_PORT/api/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ API is responding${NC}"
else
    echo -e "${YELLOW}⚠️  API health check failed, but continuing...${NC}"
    echo "Check logs with: pm2 logs immotopia-api"
fi
echo ""

# Step 11: Create Nginx configuration
echo -e "${BLUE}🌐 Step 11: Nginx configuration${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: You need to manually create the Nginx configuration.${NC}"
echo ""
echo "1. Create the config file:"
echo "   sudo nano /etc/nginx/sites-available/immo-annonces-new"
echo ""
echo "2. Use the template from DEPLOYMENT_PRODUCTION_GUIDE.md"
echo "   (Update domain, SSL paths, and API port: $API_PORT)"
echo ""
echo "3. Enable the site:"
echo "   sudo ln -s /etc/nginx/sites-available/immo-annonces-new /etc/nginx/sites-enabled/"
echo ""
echo "4. Test and reload:"
echo "   sudo nginx -t"
echo "   sudo systemctl reload nginx"
echo ""

echo -e "${GREEN}✅ Deployment script completed!${NC}"
echo ""
echo "Next steps:"
echo "1. Configure Nginx (see above)"
echo "2. Test the new site"
echo "3. Monitor logs: pm2 logs immotopia-api"
echo ""
echo "Rollback:"
echo "  sudo rm /etc/nginx/sites-enabled/immo-annonces-new"
echo "  sudo systemctl reload nginx"
echo "  pm2 stop immotopia-api"
echo ""



