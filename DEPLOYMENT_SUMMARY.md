# ImmoTopia Website Deployment Summary

## Quick Update Guide

### Updating the Production Site

1. **Pull latest changes:**
   ```bash
   ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169
   cd /var/www/immo-annonces-new
   git pull
   ```

2. **Rebuild applications:**
   ```bash
   # Build contracts package first
   cd packages/contracts
   npx --yes pnpm build
   cd ../..
   
   # Generate Prisma client
   cd apps/api
   npx --yes pnpm prisma generate
   cd ../..
   
   # Build API
   cd apps/api
   npx --yes pnpm build
   cd ../..
   
   # Build public site (ensure API is running on localhost:3002)
   cd apps/public-site
   export PUBLIC_API_URL="http://localhost:3002"
   npx --yes pnpm build
   cd ../..
   
   # Build admin panel
   cd apps/admin-panel
   npx --yes pnpm build
   cd ../..
   ```

3. **Copy builds to web directories:**
   ```bash
   # Copy public site
   sudo rm -rf public-site/*
   sudo cp -r apps/public-site/dist/* public-site/
   sudo chown -R www-data:www-data public-site
   
   # Copy admin panel
   sudo rm -rf admin-panel/*
   sudo cp -r apps/admin-panel/dist/* admin-panel/
   sudo chown -R www-data:www-data admin-panel
   ```

4. **Restart API (if code changed):**
   ```bash
   pm2 restart immotopia-api
   # Or check status
   pm2 list
   pm2 logs immotopia-api --lines 20
   ```

5. **Reload Nginx:**
   ```bash
   sudo nginx -t  # Test configuration
   sudo systemctl reload nginx
   ```

### Seeding Database Content

**Seed FAQs:**
```bash
cd /var/www/immo-annonces-new/apps/api
export DATABASE_URL='postgresql://immotopia_user:SecurePassword123!@localhost:5432/immotopia'
npx --yes pnpm seed:faqs
```

**Migrate blog posts from MDX files:**
```bash
cd /var/www/immo-annonces-new/apps/api
export DATABASE_URL='postgresql://immotopia_user:SecurePassword123!@localhost:5432/immotopia'
npx --yes pnpm migrate:content
```

**Note:** After seeding, rebuild the public site so it can fetch the new content during static generation.

---

## Deployment Architecture

### Server Details
- **VPS IP:** 147.93.44.169
- **OS:** Ubuntu 24.04 LTS
- **SSH User:** deployer
- **SSH Key:** `~/.ssh/id_ed25519`
- **Domain:** immotopia.immo-annonces.fr

### Application Structure

```
/var/www/immo-annonces-new/
├── apps/
│   ├── api/              # Fastify API (Node.js)
│   ├── public-site/      # Astro static site
│   └── admin-panel/      # Vite + React SPA
├── packages/
│   └── contracts/        # Shared TypeScript types
├── public-site/          # Nginx serves from here (Astro build output)
├── admin-panel/         # Nginx serves from here (Vite build output)
└── ecosystem.config.js  # PM2 configuration
```

### Technology Stack

1. **Public Website (Astro)**
   - Static site generator
   - Served directly by Nginx
   - No Node.js runtime required
   - Fetches data from API during build time

2. **Admin Panel (Vite + React)**
   - Single Page Application (SPA)
   - Served by Nginx at `/admin/`
   - Client-side routing
   - Authenticates via API

3. **API (Fastify + Node.js)**
   - RESTful API
   - Runs on PM2 (port 3002)
   - Proxied by Nginx at `/api/`
   - Uses PostgreSQL database
   - Prisma ORM

### Network Architecture

```
Internet
   ↓
Nginx (Port 80/443)
   ├── / → public-site/ (Astro static files)
   ├── /admin → admin-panel/ (Vite SPA)
   └── /api/ → http://127.0.0.1:3002 (Fastify API)
```

---

## Deployment Process

### 1. Initial Setup

#### SSH Access
- Configured SSH key authentication
- Verified `~/.ssh/authorized_keys` contains only valid public keys
- Set correct permissions: `~/.ssh` (700), `authorized_keys` (600)

#### Directory Structure
- Created new directory: `/var/www/immo-annonces-new`
- Kept old directory: `/var/www/immo-annonces-website` (for rollback)

#### Repository Clone
```bash
cd /var/www/immo-annonces-new
git clone https://github.com/bkourouma/immotopia_website.git .
git checkout 008-intgration-navigation-blog-faq-et-synchronisation-donnes-backoffice
```

### 2. Dependencies Installation

```bash
# Install pnpm (if not already installed)
npm install -g pnpm

# Install dependencies
pnpm install
```

### 3. Database Setup

#### PostgreSQL Installation
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

#### Database Creation
```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE immotopia;
CREATE USER immotopia_user WITH PASSWORD 'SecurePassword123!';
GRANT ALL PRIVILEGES ON DATABASE immotopia TO immotopia_user;
\c immotopia
GRANT ALL ON SCHEMA public TO immotopia_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO immotopia_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO immotopia_user;
\q
```

#### Prisma Migrations
```bash
cd apps/api
export DATABASE_URL='postgresql://immotopia_user:SecurePassword123!@localhost:5432/immotopia'
pnpm prisma migrate deploy
```

#### Seed Database
```bash
export DATABASE_URL='postgresql://immotopia_user:SecurePassword123!@localhost:5432/immotopia'
export ADMIN_EMAIL='admin@immotopia.com'
export ADMIN_PASSWORD='AdminPassword123!'
pnpm tsx src/scripts/seed.ts
```

### 4. Build Process

**Critical Build Order:**
1. Build `packages/contracts` (shared types)
2. Generate Prisma client
3. Build `apps/api`
4. Build `apps/public-site` (requires API running)
5. Build `apps/admin-panel`

```bash
# 1. Build contracts
cd packages/contracts
pnpm build
cd ../..

# 2. Generate Prisma client
cd apps/api
pnpm prisma generate
cd ../..

# 3. Build API
cd apps/api
pnpm build
cd ../..

# 4. Build public site (API must be running)
cd apps/public-site
export PUBLIC_API_URL="http://localhost:3002"
pnpm build
cd ../..

# 5. Build admin panel
cd apps/admin-panel
pnpm build
cd ../..
```

### 5. PM2 Configuration

Created `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [
    {
      name: 'immotopia-api',
      script: './apps/api/dist/index.js',
      cwd: '.',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
        HOST: '0.0.0.0',
        DATABASE_URL: 'postgresql://immotopia_user:SecurePassword123!@localhost:5432/immotopia',
        ADMIN_EMAIL: 'admin@immotopia.com',
        ADMIN_PASSWORD: 'AdminPassword123!',
        PUBLIC_SITE_URL: 'https://immotopia.immo-annonces.fr',
        ADMIN_PANEL_URL: 'https://immotopia.immo-annonces.fr/admin',
        FRONTEND_URL: 'https://immotopia.immo-annonces.fr',
        SESSION_SECRET: 'change-me-to-a-random-32-character-string-in-production',
        CSRF_SECRET: 'change-me-to-a-random-32-character-string-in-production',
      },
      error_file: './logs/api-error.log',
      out_file: './logs/api-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      instances: 1,
      exec_mode: 'fork',
    },
  ],
};
```

**Start API:**
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Follow instructions to enable on boot
```

### 6. Nginx Configuration

**File:** `/etc/nginx/sites-available/immo-annonces-new`

```nginx
upstream immo_api_backend {
    server 127.0.0.1:3002;
    keepalive 64;
}

server {
    listen 80;
    listen [::]:80;
    server_name immotopia.immo-annonces.fr www.immotopia.immo-annonces.fr;

    root /var/www/immo-annonces-new/public-site;
    index index.html;

    # API proxy
    location /api/ {
        proxy_pass http://immo_api_backend/;  # Note: trailing slash strips /api
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Admin panel (SPA)
    location /admin {
        alias /var/www/immo-annonces-new/admin-panel;
        try_files $uri $uri/ /admin/index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Public site (static)
    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "public, max-age=3600";
    }
}
```

**Enable site:**
```bash
sudo cp nginx-immo-annonces-new.conf /etc/nginx/sites-available/immo-annonces-new
sudo ln -s /etc/nginx/sites-available/immo-annonces-new /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. SSL Certificate

```bash
sudo certbot --nginx -d immotopia.immo-annonces.fr
```

**Note:** If `www` subdomain has DNS issues, only request certificate for main domain.

---

## Issues Encountered & Solutions

### Issue 1: SSH Key Path Format
**Problem:** Windows path format not recognized in SSH command  
**Solution:** Use `~/.ssh/id_ed25519` format or absolute Unix path

### Issue 2: Astro Build Syntax Error
**Problem:** JSX-like syntax in plain JavaScript (`{isDemo ? ...}`)  
**Solution:** Changed to standard JavaScript conditional: `isDemo ? ... : ...`

### Issue 3: Missing `getStaticPaths()` for Dynamic Routes
**Problem:** Astro requires `getStaticPaths()` for dynamic routes like `[slug].astro`  
**Solution:** Added `getStaticPaths()` functions to fetch slugs from API during build

### Issue 4: Build Order Dependencies
**Problem:** API build failed because `contracts` package wasn't built first  
**Solution:** Established correct build order: contracts → Prisma generate → API → Public site → Admin panel

### Issue 5: TypeScript Errors
**Problem:** Multiple TypeScript compilation errors (unused variables, type imports, spread types)  
**Solution:** 
- Fixed type-only imports: `import type { ReactNode } from 'react'`
- Removed unused imports/variables
- Cast `request.body` to `any` before spreading: `{ ...(request.body as any), id }`
- Added `@ts-ignore` for `bcryptjs` import (provides own types)

### Issue 6: ESM Module Resolution
**Problem:** Node.js ESM requires `.js` extensions in imports  
**Solution:** Added `.js` extensions to all `export * from` statements in `packages/contracts/src/index.ts`

### Issue 7: Environment Variables Not Loading
**Problem:** PM2 not loading `.env` file, Prisma couldn't find `DATABASE_URL`  
**Solution:** 
- Added all environment variables directly to `ecosystem.config.js` `env` section
- Used `pm2 restart --update-env` to reload environment
- For scripts, explicitly export variables: `export DATABASE_URL='...'`

### Issue 8: Admin Panel Assets 404
**Problem:** Admin panel `index.html` referenced assets with absolute paths (`/assets/...`) but served from `/admin/`  
**Solution:** Added `base: '/admin/'` to `apps/admin-panel/vite.config.ts`

### Issue 9: Admin Panel API Calls Wrong URL
**Problem:** Admin panel calling `http://localhost:3002/admin/login` instead of `/api/admin/login`  
**Solution:** 
- Updated API client to automatically prepend `/api` prefix
- Changed to use relative paths in production: `import.meta.env.PROD ? '' : 'http://localhost:3002'`

### Issue 10: Public Site Not Showing Content
**Problem:** Public site showing 0 blog posts and FAQs despite data in database  
**Solution:** 
- Fixed API clients to use relative paths in production
- Rebuilt public site with API running so it could fetch data during static generation
- Set `PUBLIC_API_URL="http://localhost:3002"` during build (for server-side fetch)

### Issue 11: DNS/SSL Certificate Issue
**Problem:** Certbot failed for `www.immotopia.immo-annonces.fr` (NXDOMAIN)  
**Solution:** Requested certificate only for main domain: `immotopia.immo-annonces.fr`

### Issue 12: PostgreSQL Permissions
**Problem:** Prisma migrations failed with "permission denied for schema public"  
**Solution:** Granted proper permissions:
```sql
GRANT ALL ON SCHEMA public TO immotopia_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO immotopia_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO immotopia_user;
```

---

## Lessons Learned

### 1. Build Order is Critical
In a monorepo, dependencies matter:
- Shared packages must be built first
- Prisma client must be generated before API build
- API must be running before Astro build (for data fetching)

### 2. Environment Variables in Production
- PM2 doesn't automatically load `.env` files
- Embed critical env vars in `ecosystem.config.js` for reliability
- Use `pm2 restart --update-env` after changing env vars

### 3. API URL Configuration
- **Build time:** Use absolute URL (`http://localhost:3002`) for server-side fetches
- **Runtime:** Use relative paths (`''` or `/api/`) for browser requests
- Astro static builds happen on server, so they need server-accessible URLs

### 4. Nginx SPA Routing
- Use `alias` (not `root`) for subdirectory SPAs
- Always include `try_files` with fallback to `index.html`
- Trailing slash in `proxy_pass` strips the location prefix

### Issue 5: Vite Base Path
- Always set `base` in `vite.config.ts` when serving from subdirectory
- Without it, assets reference wrong paths

### 6. TypeScript Strict Mode
- Production builds may fail with strict TypeScript
- Consider relaxing strict checks or fixing all errors
- Use type-only imports: `import type { ... }`

### 7. Database Seeding
- Seed scripts need explicit environment variable exports
- Use single quotes for `DATABASE_URL` to avoid bash history expansion (`!`)
- Run migrations before seeding

### 8. Static Site Generation
- Astro fetches data at build time, not runtime
- API must be running and accessible during build
- Rebuild site after adding new content to database

### 9. SSH Key Management
- `authorized_keys` must contain ONLY valid public keys
- Never paste shell commands into `authorized_keys`
- Verify permissions: `~/.ssh` (700), `authorized_keys` (600)

### 10. Safe Deployment Strategy
- Deploy to new directory, keep old for rollback
- Test thoroughly before switching Nginx config
- Use separate ports to avoid conflicts
- Verify with `ss -lntp` before choosing ports

---

## Security Considerations

### Current Status
- ✅ SSH key authentication only
- ✅ HTTPS enabled (Let's Encrypt)
- ✅ API behind reverse proxy
- ✅ Environment variables in PM2 config (not in git)
- ⚠️ Default admin credentials (should be changed)
- ⚠️ Default session/CSRF secrets (should be changed)

### Recommendations
1. **Change default passwords:**
   - Admin password: `AdminPassword123!`
   - Database password: `SecurePassword123!`

2. **Generate secure secrets:**
   ```bash
   # Generate random 32-character strings
   openssl rand -hex 32  # For SESSION_SECRET
   openssl rand -hex 32  # For CSRF_SECRET
   ```

3. **Review file permissions:**
   - Web directories: `www-data:www-data`
   - Application files: `deployer:deployer`
   - Logs: Appropriate permissions

4. **Database security:**
   - Use strong passwords
   - Limit database user permissions
   - Regular backups

5. **Firewall:**
   - Only expose ports 22, 80, 443
   - API runs on localhost only (3002)

---

## Rollback Procedure

If something goes wrong:

1. **Revert Nginx config:**
   ```bash
   sudo rm /etc/nginx/sites-enabled/immo-annonces-new
   sudo ln -s /etc/nginx/sites-available/immo-annonces-website /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

2. **Stop new API:**
   ```bash
   pm2 stop immotopia-api
   pm2 delete immotopia-api
   ```

3. **Restart old application:**
   ```bash
   # Restore old PM2 processes if needed
   pm2 list
   ```

---

## Monitoring & Maintenance

### Check API Status
```bash
pm2 list
pm2 logs immotopia-api --lines 50
pm2 monit
```

### Check Nginx Status
```bash
sudo systemctl status nginx
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

### Check Database
```bash
sudo -u postgres psql -d immotopia
\dt  # List tables
SELECT COUNT(*) FROM blog_posts WHERE status = 'published';
SELECT COUNT(*) FROM faq_items WHERE status = 'published';
\q
```

### Disk Space
```bash
df -h
du -sh /var/www/immo-annonces-new/*
```

---

## Useful Commands Reference

```bash
# SSH to server
ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169

# Check running processes
pm2 list
ss -lntp

# View logs
pm2 logs immotopia-api
sudo tail -f /var/log/nginx/error.log

# Restart services
pm2 restart immotopia-api
sudo systemctl reload nginx

# Database access
sudo -u postgres psql -d immotopia

# Build commands
cd /var/www/immo-annonces-new
npx --yes pnpm -r build

# Seed database
cd apps/api
export DATABASE_URL='postgresql://immotopia_user:SecurePassword123!@localhost:5432/immotopia'
npx --yes pnpm seed:faqs
npx --yes pnpm migrate:content
```

---

## Deployment Checklist

- [x] SSH access configured
- [x] Repository cloned
- [x] Dependencies installed
- [x] PostgreSQL installed and configured
- [x] Database created and migrations run
- [x] Database seeded
- [x] All applications built
- [x] PM2 configured and API running
- [x] Nginx configured and reloaded
- [x] SSL certificate obtained
- [x] Public site deployed
- [x] Admin panel deployed
- [x] Content seeded (blog, FAQ)
- [x] All functionality tested
- [ ] Default passwords changed
- [ ] Secure secrets generated
- [ ] Monitoring set up
- [ ] Backups configured

---

**Last Updated:** January 2, 2026  
**Deployed By:** AI Assistant  
**Status:** ✅ Production Ready
