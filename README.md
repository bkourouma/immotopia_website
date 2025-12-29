# ImmoTopia

# Monorepo TypeScript avec SpectKit

Monorepo TypeScript moderne avec SpectKit (Specification Kit) intégré et configuré pour Cursor AI.

## 🚀 Démarrage rapide

### Prérequis

- Node.js >= 18.0.0
- pnpm >= 10.0.0
- PostgreSQL 16 (installation auto-détectée à `C:\Program Files\PostgreSQL\16\data`)
- Git

### Installation

```bash
# Installer les dépendances
pnpm install

# Configurer la base de données
cd apps/api
cp .env.example .env
# Éditer .env avec vos paramètres de base de données

# Générer le client Prisma
pnpm prisma generate

# Appliquer les migrations (si nécessaire)
pnpm prisma migrate dev
```

### Développement

```bash
# Lancer API et Web en parallèle
pnpm dev

# Lancer uniquement l'API
pnpm dev:api

# Lancer uniquement le Web
pnpm dev:web
```

L'API sera disponible sur `http://localhost:3002`  
Le Web sera disponible sur `http://localhost:3003`

### Build

```bash
# Build de tous les packages et apps
pnpm build

# Type checking
pnpm type-check

# Linting
pnpm lint
```

---

## 📁 Structure du projet

```
monorepo-root/
├── .cursor/
│   ├── commands/          # Commandes SpectKit pour Cursor
│   └── rules/            # Règles de développement
├── .specify/
│   ├── memory/           # Constitution et mémoire
│   ├── scripts/powershell/  # Scripts d'automatisation
│   └── templates/        # Templates de documents
├── apps/
│   ├── api/             # Backend API (Fastify)
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── package.json
│   └── web/             # Frontend (Next.js 15)
│       ├── src/
│       │   └── app/
│       └── package.json
├── packages/
│   ├── contracts/       # Contrats TypeScript + Zod
│   │   └── src/
│   ├── ui/              # Composants UI réutilisables
│   │   └── src/
│   └── utils/           # Utilitaires partagés
│       └── src/
├── specs/               # Spécifications de fonctionnalités
│   └── ###-feature-name/
│       ├── spec.md
│       ├── plan.md
│       └── tasks.md
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

---

## 🎯 SpectKit - Workflow de développement

SpectKit est un système de gestion de spécifications et d'implémentation guidée pour Cursor AI.

### Commandes disponibles

#### 1. Créer une nouvelle spécification

```
/speckit.specify "Description de la fonctionnalité"
```

Crée :
- Une branche Git au format `###-feature-name`
- Le dossier `specs/###-feature-name/`
- Le fichier `spec.md` depuis le template

**Exemple** :
```
/speckit.specify "Système d'authentification utilisateur"
```

Créera la branche `001-systeme-authentification-utilisateur` et le dossier correspondant.

#### 2. Générer le plan d'implémentation

```
/speckit.plan
```

Génère `plan.md` avec :
- Contexte technique
- Vérification de conformité constitution
- Structure du projet
- Phases d'implémentation (0: Research, 1: Design, 2: Implementation)

#### 3. Générer les tâches

```
/speckit.tasks
```

Génère `tasks.md` avec :
- Organisation par user stories (P1, P2, P3)
- Phases : Setup → Foundational → User Stories → Polish
- Marqueurs [P] pour parallélisation
- Dépendances entre tâches

#### 4. Analyser la cohérence

```
/speckit.analyze
```

Analyse `spec.md`, `plan.md` et `tasks.md` pour détecter :
- Duplications
- Ambiguïtés
- Incohérences

#### 5. Implémenter les tâches

```
/speckit.implement [task-id]
```

Implémente les tâches :
- Sans argument : toutes les tâches séquentiellement
- Avec `task-id` : uniquement la tâche spécifiée
- Met à jour la progression dans `tasks.md`

#### 6. Générer les checklists

```
/speckit.checklist
```

Génère `checklist.md` avec toutes les validations nécessaires.

#### 7. Clarifier les ambiguïtés

```
/speckit.clarify [section]
```

Identifie et clarifie les ambiguïtés dans les documents.

#### 8. Gérer la constitution

```
/speckit.constitution [action]
```

Actions disponibles :
- `view` : Affiche la constitution
- `add-principle` : Ajoute un principe
- `update-stack` : Met à jour la stack

---

## 🔄 Workflow complet SpectKit

1. **Spécification** : `/speckit.specify "description"` → Crée `spec.md`
2. **Planification** : `/speckit.plan` → Crée `plan.md`
3. **Tâches** : `/speckit.tasks` → Crée `tasks.md`
4. **Analyse** : `/speckit.analyze` → Vérifie cohérence
5. **Clarification** : `/speckit.clarify` → Résout ambiguïtés
6. **Implémentation** : `/speckit.implement` → Implémente les tâches
7. **Validation** : `/speckit.checklist` → Vérifie complétion

---

## 🛠️ Technologies

### Stack technique
- **TypeScript** : 5.x (strict mode)
- **Node.js** : >= 18.0.0
- **pnpm** : >= 10.0.0

### Backend
- **Fastify** : Framework web rapide
- **PostgreSQL 16** : Base de données
- **Prisma** : ORM
- **Zod** : Validation de schémas

### Frontend
- **Next.js 15** : Framework React
- **Ant Design** : Bibliothèque de composants UI
- **Zod** : Validation de formulaires

### Monorepo
- **pnpm workspaces** : Gestion des workspaces
- **TypeScript Project References** : Références entre projets

---

## 📦 Packages

### @monorepo/contracts
Contrats TypeScript et schémas Zod partagés entre API et Web.

```typescript
import { UserSchema, CreateUserSchema } from '@monorepo/contracts';
```

### @monorepo/ui
Composants React réutilisables basés sur Ant Design.

```typescript
import { Button, FormField } from '@monorepo/ui';
```

### @monorepo/utils
Fonctions utilitaires partagées.

```typescript
import { formatDate, debounce } from '@monorepo/utils';
```

---

## 🗄️ Base de données

### Configuration

Le projet utilise PostgreSQL 16 avec Prisma.

**Configuration par défaut** :
- **Installation** : `C:\Program Files\PostgreSQL\16\data`
- **Mot de passe** : `DevMick@2003`

### Variables d'environnement

Créez un fichier `.env` dans `apps/api/` :

```env
DATABASE_URL="postgresql://postgres:DevMick@2003@localhost:5432/monorepo?schema=public"
```

### Migrations Prisma

```bash
# Créer une nouvelle migration
cd apps/api
pnpm prisma migrate dev --name migration_name

# Appliquer les migrations
pnpm prisma migrate deploy

# Générer le client Prisma
pnpm prisma generate
```

---

## 🧪 Tests

```bash
# Lancer tous les tests
pnpm test

# Tests d'un package spécifique
pnpm --filter @monorepo/contracts test
```

### Couverture

Objectif : Minimum 80% de couverture de code.

---

## 📝 Standards de code

### Conventions
- **Fonctions/Variables** : `camelCase`
- **Classes/Interfaces** : `PascalCase`
- **Constantes** : `UPPER_SNAKE_CASE`
- **Fichiers** : `kebab-case.ts` ou `PascalCase.tsx`

### Linting

```bash
pnpm lint
```

### Type Checking

```bash
pnpm type-check
```

---

## 🔀 Workflow Git

### Branches
Format : `###-feature-name` (ex: `001-authentification`)

### Commits
Format : `type(scope): description`

Types : `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

### Pull Requests
- Titre descriptif
- Description complète avec checklist
- Au moins une approbation avant merge

---

## 📚 Documentation

### Constitution
Voir [.specify/memory/constitution.md](.specify/memory/constitution.md) pour les principes et standards du projet.

### Règles Cursor
Voir [.cursor/rules/specify-rules.mdc](.cursor/rules/specify-rules.mdc) pour les règles de développement avec Cursor AI.

### Scripts PowerShell
Les scripts SpectKit sont dans [.specify/scripts/powershell/](.specify/scripts/powershell/).

### Templates
Les templates de documents sont dans [.specify/templates/](.specify/templates/).

---

## 🚀 Déploiement

### Pré-déploiement

- [ ] Tous les tests passent
- [ ] Linting OK
- [ ] Type checking OK
- [ ] Build production réussi
- [ ] Migrations Prisma appliquées
- [ ] Variables d'environnement configurées

### Build production

```bash
pnpm build
```

---

## 🤝 Contribution

1. Créer une branche : `/speckit.specify "description"`
2. Développer selon le workflow SpectKit
3. Créer une Pull Request avec description complète
4. Attendre l'approbation avant merge

---

## 📄 Licence

[À définir]

---

## 🔗 Références

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Fastify Documentation](https://www.fastify.io/docs/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)
- [Zod Documentation](https://zod.dev/)

---

## 💡 Support

Pour toute question ou problème, consultez :
- La [constitution](.specify/memory/constitution.md)
- Les [règles Cursor](.cursor/rules/specify-rules.mdc)
- Les commandes SpectKit dans `.cursor/commands/`

"# immotopia_website" 
