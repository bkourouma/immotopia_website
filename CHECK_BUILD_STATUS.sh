#!/bin/bash
# Quick build status check

echo "=== Build Process Check ==="
ps aux | grep -E "next build|pnpm.*build" | grep -v grep || echo "No build process found"

echo ""
echo "=== BUILD_ID Check ==="
if [ -f /var/www/immo-annonces-website/apps/web/.next/BUILD_ID ]; then
    echo "✓ BUILD_ID EXISTS - Build completed!"
    echo "BUILD_ID: $(cat /var/www/immo-annonces-website/apps/web/.next/BUILD_ID)"
else
    echo "✗ BUILD_ID missing - Build not complete or failed"
fi

echo ""
echo "=== .next Directory Size ==="
du -sh /var/www/immo-annonces-website/apps/web/.next/ 2>/dev/null || echo "No .next directory"

echo ""
echo "=== Last Build Activity (trace file last 30 lines) ==="
tail -30 /var/www/immo-annonces-website/apps/web/.next/trace 2>/dev/null | tail -10 || echo "No trace file or error reading"

echo ""
echo "=== Check for Errors ==="
grep -i "error\|fail" /var/www/immo-annonces-website/apps/web/.next/trace 2>/dev/null | tail -5 || echo "No errors found in trace"


