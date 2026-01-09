#!/bin/bash
# Script de déploiement pour le changement de domaine
# À exécuter sur le serveur

set -e

echo "=================================================="
echo "Déploiement - Changement de domaine vers immotopia.cloud"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# Configuration
PROJECT_DIR="/var/www/immo-annonces-new"
DIST_TARGET="/var/www/immo-annonces-new/public-site"
BRANCH="008-intgration-navigation-blog-faq-et-synchronisation-donnes-backoffice"

cd "$PROJECT_DIR"

# Step 1: Pull latest code
echo -e "${YELLOW}[1/6]${NC} Récupération du code..."
git fetch origin
git checkout "$BRANCH"
git reset --hard origin/"$BRANCH"
echo -e "${GREEN}✓ Code mis à jour${NC}"
echo ""

# Step 2: Create .env file with new domain
echo -e "${YELLOW}[2/6]${NC} Configuration du nouveau domaine..."
cd apps/public-site
cat > .env << 'ENVFILE'
PUBLIC_API_URL=http://localhost:3002
PUBLIC_APP_URL=https://immotopia.cloud
ENVFILE
echo -e "${GREEN}✓ Configuration créée${NC}"
cd ../..
echo ""

# Step 3: Check pnpm
echo -e "${YELLOW}[3/6]${NC} Vérification de pnpm..."
if ! command -v pnpm &> /dev/null; then
    PNPM_CMD="npx --yes pnpm"
    echo "Utilisation de npx pour pnpm"
else
    PNPM_CMD="pnpm"
    echo "pnpm version: $($PNPM_CMD --version)"
fi
echo ""

# Step 4: Install dependencies
echo -e "${YELLOW}[4/6]${NC} Installation des dépendances..."
$PNPM_CMD install
echo -e "${GREEN}✓ Dépendances installées${NC}"
echo ""

# Step 5: Build Astro site
echo -e "${YELLOW}[5/6]${NC} Build du site Astro..."
cd apps/public-site

# Prepare dist directory
if [ -d "dist" ]; then
    rm -rf dist 2>/dev/null || sudo rm -rf dist
fi
mkdir -p dist
chmod -R u+w dist 2>/dev/null || true

# Build
$PNPM_CMD build
echo -e "${GREEN}✓ Build terminé${NC}"
cd ../..
echo ""

# Step 6: Deploy
echo -e "${YELLOW}[6/6]${NC} Déploiement..."
if rm -rf "${DIST_TARGET:?}"/* 2>/dev/null && cp -r apps/public-site/dist/* "$DIST_TARGET/" 2>/dev/null; then
    echo -e "${GREEN}✓ Déployé${NC}"
    chown -R www-data:www-data "$DIST_TARGET" 2>/dev/null || chown -R deployer:deployer "$DIST_TARGET" 2>/dev/null || true
else
    echo -e "${YELLOW}⚠️  Déploiement nécessite sudo${NC}"
    echo ""
    echo "Exécutez ces commandes manuellement:"
    echo "  sudo rm -rf ${DIST_TARGET}/*"
    echo "  sudo cp -r $PROJECT_DIR/apps/public-site/dist/* $DIST_TARGET/"
    echo "  sudo chown -R www-data:www-data $DIST_TARGET"
    echo "  sudo nginx -t && sudo systemctl reload nginx"
    exit 0
fi

# Reload Nginx
if sudo nginx -t 2>/dev/null; then
    sudo systemctl reload nginx
    echo -e "${GREEN}✓ Nginx rechargé${NC}"
else
    echo -e "${YELLOW}⚠️  Rechargez Nginx manuellement: sudo systemctl reload nginx${NC}"
fi

echo ""
echo "=================================================="
echo -e "${GREEN}✅ Déploiement terminé!${NC}"
echo "=================================================="
echo ""
echo "Vérifiez le sitemap à:"
echo "https://immotopia.cloud/sitemap.xml"
echo ""
echo "Note: Assurez-vous que le domaine immotopia.cloud pointe vers ce serveur"
echo ""
