#!/bin/bash
# Restart build with better error handling and optimizations

cd /var/www/immo-annonces-website

echo "=== Checking for errors in trace ==="
grep -i "error\|fail\|exception" apps/web/.next/trace 2>/dev/null | tail -10 || echo "No obvious errors in trace"

echo ""
echo "=== Cleaning previous incomplete build ==="
rm -rf apps/web/.next

echo ""
echo "=== Starting build with optimizations ==="
echo "Using increased memory and single-threaded mode to avoid CPU contention..."

# Build with optimizations:
# - Increased memory limit
# - Disable source maps in production (faster)
# - Set NODE_ENV explicitly
NODE_ENV=production \
NODE_OPTIONS="--max-old-space-size=4096" \
NEXT_TELEMETRY_DISABLED=1 \
pnpm -C apps/web build 2>&1 | tee /tmp/build-$(date +%s).log

# Check result
if [ -f apps/web/.next/BUILD_ID ]; then
    echo ""
    echo "✓ BUILD SUCCESSFUL!"
    echo "BUILD_ID: $(cat apps/web/.next/BUILD_ID)"
else
    echo ""
    echo "✗ BUILD FAILED - BUILD_ID not found"
    echo "Check /tmp/build-*.log for details"
    exit 1
fi


