# @monorepo/utils

Fonctions utilitaires partagées entre l'API et le Web.

## Usage

```typescript
import { formatDate, sleep, debounce } from '@monorepo/utils';

// Formatage de date
const formatted = formatDate(new Date());

// Délai
await sleep(1000);

// Debounce
const debouncedFn = debounce(myFunction, 300);
```

## Structure

```
packages/utils/
├── src/
│   └── index.ts      # Exports
└── package.json
```

## Ajouter une nouvelle fonction utilitaire

1. Créer la fonction dans `src/`
2. Exporter dans `src/index.ts`
3. Utiliser dans l'API et le Web

