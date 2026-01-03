#!/bin/bash
# Fix API build issues - Run this on the server

set -e

cd /var/www/immo-annonces-new

echo "🔧 Step 1: Building contracts package..."
cd packages/contracts
pnpm build
cd ../..

echo "🔧 Step 2: Generating Prisma client..."
cd apps/api
pnpm prisma generate
cd ../..

echo "🔧 Step 3: Building API..."
cd apps/api
pnpm build
cd ../..

echo "✅ API build fixed!"



