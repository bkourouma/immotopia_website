#!/bin/bash
# Script to add SEO rules to Nginx config

CONFIG_FILE="/etc/nginx/sites-available/immo-annonces-new"
BACKUP_FILE="/etc/nginx/sites-available/immo-annonces-new.backup.$(date +%Y%m%d_%H%M%S)"

# Check if rules already exist
if grep -q "SEO critical files" "$CONFIG_FILE"; then
    echo "✅ SEO rules already exist in configuration"
    exit 0
fi

# Create backup
sudo cp "$CONFIG_FILE" "$BACKUP_FILE"
echo "📋 Backup created: $BACKUP_FILE"

# Create temp file with SEO rules
TEMP_FILE="/tmp/nginx_seo_rules.txt"
cat > "$TEMP_FILE" << 'EOF'
    # --- SEO critical files ---
    location = /sitemap.xml {
        root /var/www/immo-annonces-new/public-site;
        try_files $uri =404;
        add_header Content-Type "application/xml";
        expires 1d;
        add_header Cache-Control "public, must-revalidate";
    }

    location = /robots.txt {
        root /var/www/immo-annonces-new/public-site;
        try_files $uri =404;
        add_header Content-Type "text/plain";
        expires 1d;
        add_header Cache-Control "public, must-revalidate";
    }

EOF

# Insert before "# API Proxy" line
sudo sed -i "/# API Proxy - Forward to Fastify/r $TEMP_FILE" "$CONFIG_FILE"

# Cleanup
rm -f "$TEMP_FILE"

echo "✅ SEO rules added to Nginx configuration"
echo "⚠️  Please run: sudo nginx -t && sudo systemctl reload nginx"

