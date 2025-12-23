# Web - Frontend Next.js 15

Application web construite avec Next.js 15, React et Ant Design.

## Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine de `apps/web/` :

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
NODE_ENV=development
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

L'application sera disponible sur `http://localhost:3003`

## Structure

```
apps/web/
├── src/
│   ├── app/           # Pages Next.js (App Router)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/    # Composants spécifiques Web
│   └── lib/           # Utilitaires spécifiques Web
└── package.json
```

## Packages utilisés

- `@monorepo/contracts` : Contrats Zod partagés
- `@monorepo/ui` : Composants UI réutilisables
- `@monorepo/utils` : Utilitaires partagés
- `antd` : Composants Ant Design pour les formulaires

## Composants UI

Utilisez les composants de `@monorepo/ui` qui sont basés sur Ant Design :

```typescript
import { Button, FormField } from '@monorepo/ui';
```

