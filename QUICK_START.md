# 🚀 Guide de Démarrage Rapide - CMS ImmoTopia

## Prérequis

- Node.js 18+ et pnpm installés
- PostgreSQL 16+ en cours d'exécution
- Base de données `immotopiaweb` créée

## Étape 1 : Configuration de l'Environnement

### API (`apps/api/.env`)

Créez le fichier `.env` dans `apps/api/` :

```env
# Database
DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/immotopiaweb

# Admin (changez ces valeurs en production !)
ADMIN_EMAIL=admin@immotopia.com
ADMIN_PASSWORD=ChangeMe123!

# Security (générez des secrets aléatoires en production)
SESSION_SECRET=change-this-secret-in-production-min-32-chars
CSRF_SECRET=change-this-secret-in-production-min-32-chars
JWT_SECRET=change-this-secret-in-production-min-32-chars

# API
PORT=3002
HOST=0.0.0.0
FRONTEND_URL=http://localhost:3003

# Media Storage
UPLOAD_DIR=../web/public/uploads
```

### Web (`apps/web/.env.local`)

Créez le fichier `.env.local` dans `apps/web/` :

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
NEXT_PUBLIC_APP_URL=http://localhost:3003
REVALIDATE_SECRET=change-this-secret-in-production
```

## Étape 2 : Installation des Dépendances

```bash
# À la racine du projet
pnpm install
```

## Étape 3 : Configuration de la Base de Données

```bash
cd apps/api

# Créer les tables
pnpm prisma migrate deploy

# Générer le client Prisma
pnpm prisma generate

# Créer l'admin et les données de base
# (Assurez-vous que ADMIN_EMAIL et ADMIN_PASSWORD sont définis dans .env)
pnpm tsx src/scripts/seed.ts
```

## Étape 4 : Démarrer les Services

### Terminal 1 - API

```bash
cd apps/api
pnpm dev
```

L'API devrait démarrer sur `http://localhost:3002`

### Terminal 2 - Web

```bash
cd apps/web
pnpm dev
```

Le site devrait démarrer sur `http://localhost:3003`

## Étape 5 : Accéder au CMS

1. Ouvrez votre navigateur : `http://localhost:3003/admin/login`
2. Connectez-vous avec :
   - **Email** : `admin@immotopia.com` (ou celui défini dans `ADMIN_EMAIL`)
   - **Password** : `ChangeMe123!` (ou celui défini dans `ADMIN_PASSWORD`)

## ✅ Vérification

### Vérifier que l'API fonctionne

```bash
curl http://localhost:3002/health
```

Devrait retourner : `{"status":"ok","timestamp":"..."}`

### Vérifier que le Web fonctionne

Ouvrez `http://localhost:3003` dans votre navigateur.

## 🎯 Premiers Pas dans le CMS

1. **Dashboard** : Vue d'ensemble des statistiques
2. **Blog** : Créez votre premier article
3. **Media** : Uploadez une image
4. **FAQ** : Ajoutez une question/réponse
5. **Guides** : Créez un guide téléchargeable

## 🛑 Arrêter les Services

### Arrêter normalement

Dans les terminaux où les services tournent, appuyez sur `Ctrl+C` pour arrêter proprement.

### Si les ports sont bloqués

Si les ports 3002 (API) ou 3003 (Web) sont déjà utilisés, voici comment les libérer :

#### Windows (PowerShell)

```powershell
# Trouver le processus sur le port 3002 (API)
netstat -ano | findstr :3002
# Notez le PID (dernier nombre)

# Trouver le processus sur le port 3003 (Web)
netstat -ano | findstr :3003
# Notez le PID (dernier nombre)

# Arrêter le processus (remplacez PID par le numéro trouvé)
taskkill /PID <PID> /F
```

#### Windows (Command Prompt)

```cmd
# Trouver et arrêter le processus sur le port 3002
for /f "tokens=5" %a in ('netstat -aon ^| findstr :3002 ^| findstr LISTENING') do taskkill /F /PID %a

# Trouver et arrêter le processus sur le port 3003
for /f "tokens=5" %a in ('netstat -aon ^| findstr :3003 ^| findstr LISTENING') do taskkill /F /PID %a
```

#### Linux/Mac

```bash
# Trouver le processus sur le port 3002 (API)
lsof -ti:3002
# Notez le PID

# Trouver le processus sur le port 3003 (Web)
lsof -ti:3003
# Notez le PID

# Arrêter le processus (remplacez PID par le numéro trouvé)
kill -9 <PID>
```

Ou en une seule commande :

```bash
# Arrêter tous les processus sur les ports 3002 et 3003
lsof -ti:3002 | xargs kill -9
lsof -ti:3003 | xargs kill -9
```

#### Alternative : Changer les ports

Si vous préférez changer les ports plutôt que d'arrêter les processus :

**API** : Modifiez `PORT=3002` dans `apps/api/.env` (ex: `PORT=3004`)

**Web** : Lancez avec un autre port :
```bash
cd apps/web
pnpm dev -- -p 3004
```

## 🐛 Dépannage

### Erreur de connexion à la base de données

- Vérifiez que PostgreSQL est démarré
- Vérifiez `DATABASE_URL` dans `apps/api/.env`
- Testez la connexion : `psql $DATABASE_URL`

### Erreur "ADMIN_EMAIL not set"

- Vérifiez que `.env` existe dans `apps/api/`
- Vérifiez que `ADMIN_EMAIL` et `ADMIN_PASSWORD` sont définis

### Port déjà utilisé

- Utilisez les commandes ci-dessus pour libérer les ports
- Ou changez `PORT` dans `apps/api/.env` (API)
- Ou changez le port Next.js : `pnpm dev -- -p 3004` (Web)

### Erreur Prisma

```bash
cd apps/api
pnpm prisma generate
pnpm prisma migrate deploy
```

## 📚 Documentation Complète

- Guide utilisateur : `/docs/cms.md`
- Guide de déploiement : `/docs/deploy.md`

## 🎉 C'est Prêt !

Vous pouvez maintenant gérer tout le contenu marketing du site depuis le CMS.

