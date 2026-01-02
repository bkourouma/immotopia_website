# Troubleshooting Next.js Build Hang

## Immediate Actions (Run on Server)

### 1. Check if build process is actually running
```bash
# Check for Node/Next processes
ps aux | grep -E "next|node" | grep -v grep

# Check CPU usage
top -bn1 | head -20

# Check memory
free -h
```

### 2. Check build progress (if any output files)
```bash
cd /var/www/immo-annonces-website/apps/web
ls -la .next/ 2>/dev/null | head -20
du -sh .next/ 2>/dev/null
```

### 3. Kill stuck build and try with verbose output
```bash
# Kill any stuck node processes (be careful - only kill build processes)
pkill -f "next build" || true

# Wait a moment
sleep 2

# Try build with more verbose output and timeout
cd /var/www/immo-annonces-website
timeout 600 pnpm -C apps/web build 2>&1 | tee build.log
```

### 4. Check system resources
```bash
# Check disk space
df -h

# Check inodes (if disk is full of small files)
df -i

# Check system load
uptime
```

### 5. Try building with limited concurrency (reduces CPU contention)
```bash
cd /var/www/immo-annonces-website
NODE_OPTIONS="--max-old-space-size=2048" pnpm -C apps/web build
```

### 6. Alternative: Build with standalone output (lighter)
Check if `next.config.js` has `output: 'standalone'` option - this can help.


