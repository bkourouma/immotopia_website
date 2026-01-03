#!/bin/bash
# Verification script for ImmoTopia Website deployment
# Run this AFTER attempting deployment to diagnose issues

APP_DIR="/var/www/immo-annonces-website"
WEB_DIR="$APP_DIR/apps/web"
PORT=3007
APP_NAME="immo-annonces-website"

echo "========================================="
echo "Deployment Verification Checklist"
echo "========================================="
echo ""

# Check 1: Port availability
echo "[1/8] Checking port $PORT..."
if ss -lntp | grep -q ":$PORT "; then
    echo "✓ Port $PORT is in use (expected if app is running)"
    ss -lntp | grep ":$PORT "
else
    echo "❌ Port $PORT is NOT listening (app may not be running)"
fi
echo ""

# Check 2: PM2 process status
echo "[2/8] Checking PM2 process..."
if pm2 list | grep -q "$APP_NAME"; then
    echo "✓ PM2 process found:"
    pm2 list | grep "$APP_NAME"
    STATUS=$(pm2 jlist | jq -r ".[] | select(.name==\"$APP_NAME\") | .pm2_env.status" 2>/dev/null || pm2 list | grep "$APP_NAME" | awk '{print $10}')
    if [ "$STATUS" = "online" ]; then
        echo "  ✓ Status: online"
    else
        echo "  ❌ Status: $STATUS (should be 'online')"
    fi
else
    echo "❌ PM2 process '$APP_NAME' not found"
fi
echo ""

# Check 3: BUILD_ID existence
echo "[3/8] Checking BUILD_ID..."
if [ -f "$WEB_DIR/.next/BUILD_ID" ]; then
    BUILD_ID=$(cat "$WEB_DIR/.next/BUILD_ID")
    echo "✓ BUILD_ID exists: $BUILD_ID"
else
    echo "❌ BUILD_ID NOT FOUND at $WEB_DIR/.next/BUILD_ID"
    echo "   Build may not have completed successfully"
fi
echo ""

# Check 4: .next directory structure
echo "[4/8] Checking .next directory structure..."
if [ -d "$WEB_DIR/.next" ]; then
    echo "✓ .next directory exists"
    FILE_COUNT=$(find "$WEB_DIR/.next" -type f 2>/dev/null | wc -l)
    echo "  Files in .next: $FILE_COUNT"
    
    # Check for critical files
    CRITICAL_FILES=("BUILD_ID" "routes-manifest.json" "server")
    for file in "${CRITICAL_FILES[@]}"; do
        if [ -e "$WEB_DIR/.next/$file" ]; then
            echo "  ✓ Found: $file"
        else
            echo "  ❌ Missing: $file"
        fi
    done
else
    echo "❌ .next directory does not exist"
fi
echo ""

# Check 5: HTTP response
echo "[5/8] Testing HTTP response..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 5 http://127.0.0.1:$PORT 2>/dev/null || echo "000")
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "✓ HTTP response: $HTTP_CODE"
    echo "  Testing full response..."
    RESPONSE=$(curl -s --connect-timeout 5 http://127.0.0.1:$PORT | head -c 100)
    if echo "$RESPONSE" | grep -q "<!DOCTYPE html\|<html"; then
        echo "  ✓ HTML content detected (app is serving pages)"
    else
        echo "  ⚠️  Response doesn't look like HTML: ${RESPONSE:0:50}..."
    fi
elif [ "$HTTP_CODE" = "000" ]; then
    echo "❌ Connection failed (app may not be running or port not accessible)"
else
    echo "⚠️  HTTP response: $HTTP_CODE (unexpected status)"
fi
echo ""

# Check 6: PM2 logs (recent errors)
echo "[6/8] Checking recent PM2 logs for errors..."
if pm2 list | grep -q "$APP_NAME"; then
    ERROR_COUNT=$(pm2 logs "$APP_NAME" --err --lines 20 --nostream 2>/dev/null | grep -i "error\|failed\|cannot\|missing" | wc -l || echo "0")
    if [ "$ERROR_COUNT" -gt 0 ]; then
        echo "⚠️  Found $ERROR_COUNT potential error messages in logs"
        echo "  Run: pm2 logs $APP_NAME --err --lines 20"
    else
        echo "✓ No obvious errors in recent logs"
    fi
else
    echo "⚠️  Cannot check logs (PM2 process not found)"
fi
echo ""

# Check 7: Disk space
echo "[7/8] Checking disk space..."
DISK_USAGE=$(df -h /var/www | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -lt 80 ]; then
    echo "✓ Disk usage: ${DISK_USAGE}% (healthy)"
else
    echo "⚠️  Disk usage: ${DISK_USAGE}% (consider freeing space)"
fi
echo ""

# Check 8: Port conflicts with other apps
echo "[8/8] Checking for port conflicts with other apps..."
CONFLICTING_PORTS=$(ss -lntp | grep -E ":(3000|3001|3004|3005|3007|3022) " | grep -v ":$PORT " | wc -l)
if [ "$CONFLICTING_PORTS" -eq 0 ]; then
    echo "✓ No conflicts detected (other apps on different ports)"
else
    echo "⚠️  Other apps detected on related ports (this is normal):"
    ss -lntp | grep -E ":(3000|3001|3004|3005|3022) " | head -5
fi
echo ""

# Summary
echo "========================================="
echo "Verification Summary"
echo "========================================="
echo ""

ISSUES=0

[ ! -f "$WEB_DIR/.next/BUILD_ID" ] && { echo "❌ BUILD_ID missing"; ISSUES=$((ISSUES+1)); }
! ss -lntp | grep -q ":$PORT " && { echo "❌ Port $PORT not listening"; ISSUES=$((ISSUES+1)); }
! pm2 list | grep -q "$APP_NAME" && { echo "❌ PM2 process not found"; ISSUES=$((ISSUES+1)); }
[ "$HTTP_CODE" != "200" ] && [ "$HTTP_CODE" != "301" ] && [ "$HTTP_CODE" != "302" ] && [ "$HTTP_CODE" != "000" ] && { echo "❌ HTTP test failed"; ISSUES=$((ISSUES+1)); }

if [ "$ISSUES" -eq 0 ]; then
    echo "✅ All critical checks passed!"
    echo ""
    echo "Next steps:"
    echo "1. Test app manually: curl http://127.0.0.1:$PORT"
    echo "2. Check PM2 logs: pm2 logs $APP_NAME"
    echo "3. After verification, configure Nginx (see nginx-site-config.conf)"
else
    echo "❌ Found $ISSUES critical issue(s)"
    echo ""
    echo "Troubleshooting:"
    echo "- Check BUILD_ID: cat $WEB_DIR/.next/BUILD_ID"
    echo "- Check PM2 status: pm2 list"
    echo "- Check PM2 logs: pm2 logs $APP_NAME"
    echo "- Check port: ss -lntp | grep $PORT"
    echo "- See DEPLOYMENT_DEBUG_GUIDE.md for detailed steps"
fi
echo ""



