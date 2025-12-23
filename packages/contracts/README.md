# @monorepo/contracts

Contrats TypeScript et schémas Zod partagés entre l'API et le Web.

## Usage

```typescript
import { UserSchema, CreateUserSchema, type User, type CreateUser } from '@monorepo/contracts';

// Validation avec Zod
const user = UserSchema.parse(data);

// Type TypeScript
const newUser: CreateUser = {
  email: 'user@example.com',
  name: 'John Doe'
};
```

## Structure

```
packages/contracts/
├── src/
│   └── index.ts      # Exports
└── package.json
```

## Ajouter un nouveau contrat

1. Créer le schéma Zod dans `src/`
2. Exporter le schéma et le type dans `src/index.ts`
3. Utiliser dans l'API et le Web

