# @monorepo/ui

Package de composants UI réutilisables pour le monorepo.

## Compatibilité

Ce package est compatible avec :
- **Astro** : Composants React utilisables via islands
- **Vite + React** : Composants React standards
- **Next.js** : Compatible (mais sans dépendances Next.js)

## Composants

### Button

Composant bouton réutilisable avec support pour différents types de liens.

#### Utilisation avec Astro

```astro
---
import { Button } from '@monorepo/ui';
---

<Button href="/contact">Contactez-nous</Button>
```

#### Utilisation avec Vite + React Router

```tsx
import { Button } from '@monorepo/ui';
import { Link } from 'react-router-dom';

<Button href="/admin/blog/posts" LinkComponent={Link}>
  Voir les articles
</Button>
```

#### Utilisation standard (bouton)

```tsx
import { Button } from '@monorepo/ui';

<Button onClick={handleClick} variant="primary">
  Cliquez ici
</Button>
```

## Installation

Le package est déjà inclus dans le workspace. Pour l'utiliser :

```bash
pnpm add @monorepo/ui
```

Ou dans le workspace :

```json
{
  "dependencies": {
    "@monorepo/ui": "workspace:*"
  }
}
```
