#!/bin/bash
# PostgreSQL Installation and Setup Script

set -e

echo "🐘 Installing PostgreSQL..."

# Install PostgreSQL
sudo apt update
sudo apt install -y postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Check status
sudo systemctl status postgresql --no-pager

echo ""
echo "✅ PostgreSQL installed and started!"
echo ""
echo "📝 Next steps:"
echo "1. Create database and user:"
echo "   sudo -u postgres psql"
echo ""
echo "2. In psql, run:"
echo "   CREATE DATABASE immotopia;"
echo "   CREATE USER immotopia_user WITH PASSWORD 'your_secure_password';"
echo "   GRANT ALL PRIVILEGES ON DATABASE immotopia TO immotopia_user;"
echo "   \\q"
echo ""
echo "3. Update .env file with:"
echo "   DATABASE_URL=\"postgresql://immotopia_user:your_secure_password@localhost:5432/immotopia\""



