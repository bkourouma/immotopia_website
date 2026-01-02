#!/bin/bash
# ImmoTopia Website - Production Deployment Script
# Run this from: /var/www/immo-annonces-website

set -e  # Exit on error

APP_DIR="/var/www/immo-annonces-website"
WEB_DIR="$APP_DIR/apps/web"
PORT=3007
APP_NAME="immo-annonces-website"

echo "========================================="
echo "ImmoTopia Website Deployment"
echo "========================================="
echo ""

# Step 1: Verify port is free
echo "[1/8] Checking port $PORT..."
if ss -lntp | grep -q ":$PORT "; then
    echo "❌ ERROR: Port $PORT is already in use!"
    echo "Current listeners on port $PORT:"
    ss -lntp | grep ":$PORT "
    exit 1
fi
echo "✓ Port $PORT is free"

# Step 2: Check for existing PM2 process
echo ""
echo "[2/8] Checking for existing PM2 process..."
if pm2 list | grep -q "$APP_NAME"; then
    echo "⚠️  Existing PM2 process found. Stopping..."
    pm2 delete "$APP_NAME" || true
    sleep 2
fi
echo "✓ PM2 process cleared"

# Step 3: Navigate to app directory
echo ""
echo "[3/8] Navigating to app directory..."
cd "$APP_DIR" || exit 1
echo "✓ Current directory: $(pwd)"

# Step 4: Install dependencies
echo ""
echo "[4/8] Installing dependencies..."
pnpm install
echo "✓ Dependencies installed"

# Step 5: Clean previous build
echo ""
echo "[5/8] Cleaning previous build..."
cd "$WEB_DIR"
rm -rf .next
cd "$APP_DIR"
echo "✓ Build directory cleaned"

# Step 6: Build application
echo ""
echo "[6/8] Building Next.js application..."
echo "This may take several minutes..."
pnpm -C apps/web build

# Verify BUILD_ID exists
if [ ! -f "$WEB_DIR/.next/BUILD_ID" ]; then
    echo "❌ ERROR: BUILD_ID not found after build!"
    echo "Build may have failed. Check logs above."
    exit 1
fi
echo "✓ Build completed successfully"
echo "✓ BUILD_ID found: $(cat $WEB_DIR/.next/BUILD_ID)"

# Step 7: Create logs directory
echo ""
echo "[7/8] Setting up logs directory..."
mkdir -p "$APP_DIR/logs"
echo "✓ Logs directory ready"

# Step 8: Start with PM2
echo ""
echo "[8/8] Starting application with PM2..."
cd "$APP_DIR"

# Copy ecosystem.config.js if it exists in repo, or create it
if [ ! -f "$APP_DIR/ecosystem.config.js" ]; then
    echo "Creating ecosystem.config.js..."
    cat > "$APP_DIR/ecosystem.config.js" << EOF
module.exports = {
  apps: [{
    name: '$APP_NAME',
    cwd: '$WEB_DIR',
    script: 'node_modules/.bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: '$PORT',
      HOSTNAME: '127.0.0.1'
    },
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: '$APP_DIR/logs/pm2-error.log',
    out_file: '$APP_DIR/logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};
EOF
fi

pm2 start ecosystem.config.js
pm2 save
echo "✓ Application started with PM2"

# Final verification
echo ""
echo "========================================="
echo "Deployment Complete - Verification"
echo "========================================="
echo ""

# Check PM2 status
echo "PM2 Status:"
pm2 list | grep "$APP_NAME" || echo "⚠️  Process not found in PM2 list"

# Check port
echo ""
echo "Port $PORT status:"
if ss -lntp | grep -q ":$PORT "; then
    echo "✓ Port $PORT is listening"
    ss -lntp | grep ":$PORT "
else
    echo "❌ Port $PORT is NOT listening"
fi

# Test HTTP response
echo ""
echo "HTTP Response Test:"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:$PORT || echo "000")
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "✓ HTTP response: $HTTP_CODE"
else
    echo "⚠️  HTTP response: $HTTP_CODE (may need a moment to start)"
fi

echo ""
echo "========================================="
echo "Next Steps:"
echo "========================================="
echo "1. Check PM2 logs: pm2 logs $APP_NAME"
echo "2. Monitor: pm2 monit"
echo "3. Test: curl -I http://127.0.0.1:$PORT"
echo "4. After verification, configure Nginx (see nginx-site-config.conf)"
echo ""


