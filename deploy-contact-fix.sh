#!/bin/bash
set -e

cd /var/www/immo-annonces-new

echo "🔄 Pulling latest changes..."
git pull

echo ""
echo "🗄️  Creating database migration..."
cd apps/api

# Create migration for ContactRequest model
export DATABASE_URL='postgresql://immotopia_user:SecurePassword123!@localhost:5432/immotopia'
npx --yes pnpm prisma migrate dev --name add_contact_request --create-only

echo ""
echo "📦 Applying migration..."
npx --yes pnpm prisma migrate deploy

echo ""
echo "🔧 Generating Prisma client..."
npx --yes pnpm prisma generate

echo ""
echo "🏗️  Building API..."
cd ../..
npx --yes pnpm --filter @monorepo/contracts build
npx --yes pnpm --filter @monorepo/api build

echo ""
echo "🔄 Restarting API..."
pm2 restart immotopia-api --update-env

echo ""
echo "✅ Contact route deployed!"
echo ""
echo "📊 Checking API status..."
pm2 list
echo ""
echo "🧪 Test the endpoint:"
echo "curl -X POST https://immotopia.immo-annonces.fr/api/contact -H 'Content-Type: application/json' -d '{\"name\":\"Test\",\"email\":\"test@example.com\",\"message\":\"Test message\"}'"

