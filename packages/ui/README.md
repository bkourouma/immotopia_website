# @monorepo/ui

Composants React réutilisables basés sur Ant Design.

## Usage

```typescript
import { Button, FormField } from '@monorepo/ui';

// Button
<Button type="primary" onClick={handleClick}>
  Cliquer
</Button>

// FormField
<FormField
  name="email"
  label="Email"
  type="email"
  required
  placeholder="Entrez votre email"
/>
```

## Structure

```
packages/ui/
├── src/
│   ├── components/   # Composants React
│   └── index.ts      # Exports
└── package.json
```

## Ajouter un nouveau composant

1. Créer le composant dans `src/components/`
2. Exporter dans `src/index.ts`
3. Utiliser dans le Web

