# API - Backend Fastify

API backend construite avec Fastify, Prisma et PostgreSQL.

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine de `apps/api/` :

```env
DATABASE_URL="postgresql://postgres:DevMick@2003@localhost:5432/monorepo?schema=public"
PORT=3002
HOST=0.0.0.0
NODE_ENV=development

# CORS - URLs des frontends autorisées
PUBLIC_SITE_URL=http://localhost:4321          # Astro dev server
ADMIN_PANEL_URL=http://localhost:5173          # Vite dev server
FRONTEND_URL=http://localhost:3003             # Legacy Next.js (temporary, à supprimer après migration)
```

### Base de données

**PostgreSQL 16** :
- Installation : `C:\Program Files\PostgreSQL\16\data`
- Mot de passe : `DevMick@2003`

### Prisma

```bash
# Générer le client Prisma
pnpm prisma generate

# Créer une migration
pnpm prisma migrate dev --name migration_name

# Appliquer les migrations
pnpm prisma migrate deploy
```

## Développement

```bash
# Lancer en mode développement
pnpm dev

# Build
pnpm build

# Démarrer en production
pnpm start
```

L'API sera disponible sur `http://localhost:3002`

## Structure

```
apps/api/
├── src/
│   ├── index.ts        # Point d'entrée
│   ├── routes/        # Routes Fastify
│   ├── services/      # Logique métier
│   └── types/         # Types TypeScript
├── prisma/
│   └── schema.prisma  # Schéma Prisma
└── package.json
```

## Endpoints

### Health Check
- `GET /health` - Vérification de l'état de l'API

## Packages utilisés

- `@monorepo/contracts` : Contrats Zod partagés
- `@monorepo/utils` : Utilitaires partagés

