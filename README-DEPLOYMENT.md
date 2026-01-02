# Guide de Déploiement - ImmoTopia

## Architecture de Déploiement

### Structure
- **Public Site (Astro)**: Fichiers statiques servis par Nginx
- **Admin Panel (Vite)**: Fichiers statiques servis par Nginx
- **API (Fastify)**: Processus Node.js géré par PM2

### Prérequis
- Node.js 18+
- pnpm 10+
- Nginx
- PM2
- PostgreSQL

## Installation

### 1. Préparer les répertoires

```bash
sudo mkdir -p /var/www/immotopia/{public-site,admin-panel}
sudo chown -R $USER:$USER /var/www/immotopia
```

### 2. Cloner et installer

```bash
git clone <repo-url> /var/www/immotopia
cd /var/www/immotopia
pnpm install
```

### 3. Configuration des variables d'environnement

**API** (`apps/api/.env`):
```env
DATABASE_URL="postgresql://user:password@localhost:5432/immotopia"
PORT=3002
HOST=0.0.0.0
NODE_ENV=production
PUBLIC_SITE_URL=https://immotopia.com
ADMIN_PANEL_URL=https://immotopia.com/admin
```

**Public Site** (`apps/public-site/.env`):
```env
PUBLIC_API_URL=https://immotopia.com/api
PUBLIC_APP_URL=https://immotopia.com
PUBLIC_CONTACT_EMAIL=contact@immotopia.com
PUBLIC_CONTACT_PHONE=+225 01 23 45 67 89
```

**Admin Panel** (`apps/admin-panel/.env`):
```env
VITE_API_URL=https://immotopia.com/api
```

### 4. Build des applications

```bash
# Build Astro
cd apps/public-site
pnpm build
# Output: dist/

# Build Vite
cd ../admin-panel
pnpm build
# Output: dist/

# Build API
cd ../api
pnpm build
# Output: dist/
```

### 5. Copier les builds

```bash
# Public Site
sudo cp -r apps/public-site/dist/* /var/www/immotopia/public-site/

# Admin Panel
sudo cp -r apps/admin-panel/dist/* /var/www/immotopia/admin-panel/
```

### 6. Configuration Nginx

```bash
# Copier la configuration
sudo cp nginx.conf.example /etc/nginx/sites-available/immotopia

# Éditer si nécessaire
sudo nano /etc/nginx/sites-available/immotopia

# Activer le site
sudo ln -s /etc/nginx/sites-available/immotopia /etc/nginx/sites-enabled/

# Tester la configuration
sudo nginx -t

# Recharger Nginx
sudo systemctl reload nginx
```

### 7. Configuration PM2

```bash
# Installer PM2 globalement
npm install -g pm2

# Démarrer l'API
pm2 start ecosystem.config.js

# Sauvegarder la configuration PM2
pm2 save

# Configurer PM2 pour démarrer au boot
pm2 startup
```

## Déploiement

### Déploiement manuel

```bash
# Utiliser le script de déploiement
chmod +x deploy.sh
./deploy.sh
```

### Déploiement automatique (CI/CD)

1. Build sur le serveur
2. Copier les fichiers
3. Redémarrer PM2
4. Recharger Nginx

## Monitoring

### PM2

```bash
# Voir les logs
pm2 logs immotopia-api

# Voir les stats
pm2 status
pm2 monit

# Redémarrer
pm2 restart immotopia-api
```

### Nginx

```bash
# Logs d'accès
sudo tail -f /var/log/nginx/access.log

# Logs d'erreur
sudo tail -f /var/log/nginx/error.log
```

## Optimisations

### RAM
- Astro: 0 MB (statique)
- Vite: 0 MB (statique)
- API: ~100-200 MB (PM2)

**Total estimé**: ~200-300 MB (vs ~500 MB avec Next.js)

### Cache
- Images: 1 an
- CSS/JS: 1 an
- HTML: 1 heure

### Compression
- Gzip activé pour tous les fichiers texte

## Maintenance

### Mise à jour

```bash
# Pull les dernières modifications
git pull

# Réinstaller les dépendances si nécessaire
pnpm install

# Rebuild
./deploy.sh
```

### Sauvegarde

```bash
# Base de données
pg_dump immotopia > backup_$(date +%Y%m%d).sql

# Fichiers uploadés (si stockage local)
tar -czf media_backup_$(date +%Y%m%d).tar.gz /var/www/immotopia/media
```

## Troubleshooting

### API ne démarre pas
```bash
pm2 logs immotopia-api
# Vérifier les variables d'environnement
# Vérifier la connexion à la base de données
```

### Nginx erreur 502
- Vérifier que PM2 est démarré: `pm2 status`
- Vérifier les logs Nginx: `sudo tail -f /var/log/nginx/error.log`
- Vérifier que le port 3002 est accessible

### Pages blanches
- Vérifier les permissions: `sudo chown -R www-data:www-data /var/www/immotopia`
- Vérifier les logs Nginx
- Vérifier que les builds sont à jour

