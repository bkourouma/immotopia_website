# Guide de Déploiement - ImmoTopia Website

## Variables d'Environnement Requises

### API (`apps/api/.env`)

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/immotopiaweb

# Admin
ADMIN_EMAIL=admin@immotopia.com
ADMIN_PASSWORD=ChangeMe123!

# Security
SESSION_SECRET=random-secret-32-chars-minimum-change-in-production
CSRF_SECRET=random-secret-32-chars-minimum-change-in-production
JWT_SECRET=random-secret-32-chars-minimum-change-in-production

# API
PORT=3002
HOST=0.0.0.0
FRONTEND_URL=https://immotopia.com

# Media Storage
UPLOAD_DIR=../web/public/uploads
```

### Web (`apps/web/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
NEXT_PUBLIC_APP_URL=https://immotopia.com
REVALIDATE_SECRET=random-secret-for-isr-revalidation
```

## Commandes de Déploiement

### 1. Préparation

```bash
# Installer les dépendances
pnpm install

# Build des packages
pnpm --filter @monorepo/contracts build
pnpm --filter @monorepo/ui build
pnpm --filter @monorepo/utils build
```

### 2. Base de Données

```bash
cd apps/api

# Créer les migrations
pnpm prisma migrate deploy

# Générer le client Prisma
pnpm prisma generate

# Seed (créer admin + données baseline)
# Définir ADMIN_EMAIL et ADMIN_PASSWORD dans .env d'abord
pnpm tsx src/scripts/seed.ts

# Migration contenu existant (optionnel)
pnpm tsx src/scripts/migrate-content.ts
```

### 3. Build

```bash
# Build API
cd apps/api
pnpm build

# Build Web
cd apps/web
pnpm build
```

### 4. Démarrage en Production

```bash
# API
cd apps/api
pnpm start

# Web (via PM2 recommandé)
cd apps/web
pm2 start npm --name "immotopia-web" -- start
```

## Déploiement VPS (Multi-Sites)

⚠️ **IMPORTANT** : Ce VPS héberge 5+ applications Nginx. Ne pas modifier la configuration Nginx globale.

### Commandes Sécurisées

```bash
# Se connecter au VPS
ssh root@147.93.44.169

# Aller dans le répertoire du projet
cd /path/to/ImmoTopiaWebsite

# Pull les dernières modifications
git pull

# Installer dépendances (si nécessaire)
pnpm install

# Migrations DB
cd apps/api
pnpm prisma migrate deploy
pnpm prisma generate

# Build
cd ../web
pnpm build

# Redémarrer PM2 (vérifier le nom du process)
pm2 restart immotopia-website
# ou
pm2 restart ecosystem.config.js --only immotopia-website
```

### Vérification

```bash
# Vérifier que l'API répond
curl http://localhost:3002/health

# Vérifier que le site répond
curl http://localhost:3003

# Vérifier les logs PM2
pm2 logs immotopia-website
```

## ISR Revalidation

Pour invalider le cache Next.js après publication de contenu :

```bash
# Depuis le serveur ou via webhook
curl -X POST https://immotopia.com/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"secret":"REVALIDATE_SECRET","type":"blog"}'
```

Types disponibles : `blog`, `guide`, `faq`, `all`

## Sauvegarde

### Base de Données

```bash
# Backup PostgreSQL
pg_dump -U postgres immotopiaweb > backup_$(date +%Y%m%d).sql

# Restore
psql -U postgres immotopiaweb < backup_YYYYMMDD.sql
```

### Médias

Les médias sont stockés dans `apps/web/public/uploads/`. Sauvegardez ce dossier régulièrement.

## Monitoring

- **PM2** : `pm2 status`, `pm2 logs`
- **Nginx** : `nginx -t` (test config), `systemctl status nginx`
- **PostgreSQL** : `systemctl status postgresql`

## Troubleshooting

### Erreur de connexion DB

- Vérifier `DATABASE_URL` dans `.env`
- Vérifier que PostgreSQL est démarré
- Vérifier les permissions utilisateur

### Erreur 500 sur l'API

- Vérifier les logs : `pm2 logs immotopia-api`
- Vérifier que Prisma Client est généré
- Vérifier les variables d'environnement

### Contenu non visible

- Vérifier que le statut est "Publié"
- Appeler `/api/revalidate` pour invalider le cache
- Vérifier les logs Next.js

## Sécurité Production

1. **Changez tous les secrets** dans `.env` :
   - `SESSION_SECRET`
   - `CSRF_SECRET`
   - `JWT_SECRET`
   - `REVALIDATE_SECRET`
   - `ADMIN_PASSWORD`

2. **HTTPS** : Configurez SSL/TLS dans Nginx

3. **Firewall** : Limitez l'accès aux ports nécessaires

4. **Backups** : Automatisez les sauvegardes DB et médias

