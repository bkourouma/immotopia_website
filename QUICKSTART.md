# Guide de démarrage rapide - ImmoTopia

## 🚀 Installation en 5 minutes

### 1. Installer les dépendances

```bash
pnpm install
```

### 2. Configurer la base de données

```bash
# Créer la base de données PostgreSQL
psql -U postgres -c "CREATE DATABASE monorepo;"

# Configurer Prisma
cd apps/api
# Créer .env avec DATABASE_URL="postgresql://postgres:DevMick@2003@localhost:5432/monorepo?schema=public"
pnpm prisma generate
pnpm prisma migrate dev
```

### 3. Lancer le projet

#### Option 1 : Tout lancer (recommandé)
```bash
# Depuis la racine
pnpm dev:all
```

#### Option 2 : Lancer individuellement
```bash
# API (Fastify)
pnpm dev:api          # http://localhost:3002

# Public Site (Astro)
pnpm dev:public-site  # http://localhost:4321

# Admin Panel (Vite)
pnpm dev:admin-panel  # http://localhost:5173
```

#### Option 3 : Script Windows
```bash
# Double-cliquer sur:
000001 - quick-start.bat
```

✅ **API (Fastify)**: http://localhost:3002  
✅ **Public Site (Astro)**: http://localhost:4321  
✅ **Admin Panel (Vite)**: http://localhost:5173

---

## 🏗️ Architecture

### Nouvelle Architecture (Post-Migration)

```
┌─────────────────────────────────────────┐
│         Développement Local             │
├─────────────────────────────────────────┤
│  API (Fastify)      : localhost:3002    │
│  Public Site (Astro): localhost:4321    │
│  Admin Panel (Vite) : localhost:5173    │
└─────────────────────────────────────────┘
```

### Production (Déploiement)

```
┌─────────────────────────────────────────┐
│           Nginx (Reverse Proxy)         │
├─────────────────────────────────────────┤
│  Public Site (Astro) : Fichiers statiques│
│  Admin Panel (Vite)  : Fichiers statiques│
│  API (Fastify/PM2)  : localhost:3002   │
└─────────────────────────────────────────┘
```

---

## 🎯 Utiliser SpectKit

### Créer votre première fonctionnalité

Dans Cursor, tapez :

```
/speckit.specify "Système d'authentification"
```

Cela créera automatiquement :
- ✅ Branche Git `001-systeme-authentification`
- ✅ Dossier `specs/001-systeme-authentification/`
- ✅ Fichier `spec.md` avec template rempli

### Générer le plan

```
/speckit.plan
```

Crée `plan.md` avec la structure d'implémentation.

### Générer les tâches

```
/speckit.tasks
```

Crée `tasks.md` avec toutes les tâches détaillées.

### Implémenter

```
/speckit.implement
```

Implémente toutes les tâches automatiquement.

---

## 📋 Checklist de validation

- [ ] `pnpm install` fonctionne
- [ ] `pnpm dev:all` lance API, Astro et Vite
- [ ] API accessible sur http://localhost:3002
- [ ] Public Site accessible sur http://localhost:4321
- [ ] Admin Panel accessible sur http://localhost:5173
- [ ] `/speckit.specify "test"` crée une spec
- [ ] `/speckit.plan` génère un plan
- [ ] `/speckit.tasks` génère des tâches

---

## 🔧 Commandes utiles

### Développement

```bash
# Lancer tout
pnpm dev:all              # Lance API + Astro + Vite

# Lancer individuellement
pnpm dev:api              # Lance uniquement l'API
pnpm dev:public-site      # Lance uniquement le site public (Astro)
pnpm dev:admin-panel      # Lance uniquement l'admin panel (Vite)

# Legacy (Next.js - à supprimer après migration complète)
pnpm dev:web              # Lance Next.js (legacy)
```

### Build

```bash
# Build tout
pnpm build                # Build tous les packages

# Build individuellement
pnpm build:public-site    # Build Astro (output: apps/public-site/dist)
pnpm build:admin-panel    # Build Vite (output: apps/admin-panel/dist)
pnpm build:api            # Build API (output: apps/api/dist)

# Vérifications
pnpm type-check           # Vérification TypeScript
pnpm lint                 # Linting
```

### Base de données

```bash
cd apps/api
pnpm prisma generate      # Génère le client Prisma
pnpm prisma migrate dev   # Crée une migration
pnpm prisma studio        # Interface graphique Prisma
```

### Déploiement

```bash
# Build et déploiement
./deploy.sh               # Script de déploiement (Linux/Mac)
# ou
pnpm deploy               # Via package.json

# PM2 (sur serveur)
pm2 start ecosystem.config.js
pm2 status
pm2 logs immotopia-api
```

---

## 📁 Structure du projet

```
monorepo-root/
├── apps/
│   ├── api/              # Backend API (Fastify + Prisma)
│   │   ├── src/
│   │   ├── prisma/
│   │   └── package.json
│   ├── public-site/      # Site public (Astro - STATIC)
│   │   ├── src/
│   │   │   ├── pages/    # Routes Astro
│   │   │   ├── components/
│   │   │   └── layouts/
│   │   └── package.json
│   ├── admin-panel/       # Admin CMS (Vite + React - SPA)
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── routes/
│   │   └── package.json
│   └── web/              # Legacy Next.js (à supprimer)
│       └── ...
├── packages/
│   ├── contracts/        # Contrats TypeScript + Zod
│   ├── ui/               # Composants UI réutilisables
│   └── utils/            # Utilitaires partagés
├── specs/                # Spécifications SpectKit
└── package.json
```

---

## 🌐 URLs de développement

| Application | URL | Description |
|------------|-----|-------------|
| **API** | http://localhost:3002 | Backend Fastify |
| **Public Site** | http://localhost:4321 | Site public Astro |
| **Admin Panel** | http://localhost:5173 | CMS Admin Vite |
| **Legacy Web** | http://localhost:3003 | Next.js (à supprimer) |

---

## 📚 Documentation

- [README.md](README.md) - Documentation complète
- [MIGRATION-COMPLETE.md](MIGRATION-COMPLETE.md) - Résumé de la migration
- [README-DEPLOYMENT.md](README-DEPLOYMENT.md) - Guide de déploiement
- [TESTING.md](TESTING.md) - Guide de tests
- [SETUP.md](SETUP.md) - Guide de configuration détaillé

---

## 🆘 Problèmes courants

### Erreur de connexion PostgreSQL
→ Vérifiez que PostgreSQL est démarré et que le mot de passe est correct

### Erreur de build TypeScript
→ Exécutez `pnpm install` puis `pnpm type-check`

### Port déjà utilisé
→ Vérifiez qu'aucun autre processus n'utilise les ports 3002, 4321, 5173

### CORS errors
→ Vérifiez que les variables d'environnement `PUBLIC_SITE_URL` et `ADMIN_PANEL_URL` sont correctement configurées dans `apps/api/.env`

### Scripts PowerShell ne fonctionnent pas
→ Vérifiez que PowerShell est disponible et que vous êtes à la racine du projet

---

## ✨ Prêt à développer !

Vous êtes maintenant prêt à utiliser le monorepo avec la nouvelle architecture Astro + Vite.  
Commencez par créer votre première fonctionnalité avec `/speckit.specify` !

### Migration complète ✅

La migration Next.js → Astro + Vite est **terminée**. Voir [MIGRATION-COMPLETE.md](MIGRATION-COMPLETE.md) pour les détails.
