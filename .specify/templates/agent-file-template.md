# Contexte Agent : {{BRANCH_NAME}}

**Date de mise à jour** : {{DATE}}

---

## 🎯 Contexte actuel

**Fonctionnalité en cours** : {{FEATURE_NAME}}  
**Branche Git** : {{BRANCH_NAME}}  
**Phase actuelle** : [Setup / Planning / Implementation / Testing / Polish]

---

## 📚 Technologies actives

<!-- TECHNOLOGIES_START -->
- TypeScript 5.x
- Fastify
- Next.js 15
- PostgreSQL 16
- Prisma
- Ant Design
- Zod
- pnpm workspaces
<!-- TECHNOLOGIES_END -->

---

## 📁 Structure du projet

```
monorepo-root/
├── apps/
│   ├── api/          # Backend Fastify
│   └── web/          # Frontend Next.js 15
├── packages/
│   ├── contracts/    # Contrats TypeScript + Zod
│   ├── ui/           # Composants React réutilisables
│   └── utils/        # Utilitaires partagés
└── specs/
    └── {{BRANCH_NAME}}/
        ├── spec.md
        ├── plan.md
        └── tasks.md
```

---

## 🔧 Commandes SpectKit disponibles

1. **`/speckit.specify "description"`** - Crée une nouvelle spécification
2. **`/speckit.plan`** - Génère le plan d'implémentation
3. **`/speckit.tasks`** - Génère les tâches détaillées
4. **`/speckit.analyze`** - Analyse la cohérence des documents
5. **`/speckit.implement`** - Implémente les tâches
6. **`/speckit.checklist`** - Génère les checklists
7. **`/speckit.clarify`** - Clarifie les ambiguïtés
8. **`/speckit.constitution`** - Gère la constitution

---

## 📋 Guidelines de développement

### Principes
- **TDD** : Tests écrits avant l'implémentation
- **Library-First** : Code réutilisable dans packages/
- **Type Safety** : TypeScript strict, pas de `any`
- **Code Quality** : Linting automatique

### Standards
- Conventions de nommage : camelCase pour fonctions, PascalCase pour classes
- Structure : Séparation claire API / Web / Packages
- Tests : Minimum 80% de couverture

### Workflow Git
- Branches : Format `###-feature-name`
- Commits : Messages descriptifs
- PR : Description complète avec checklist

---

## 🎯 Focus actuel

[À compléter selon le contexte de la fonctionnalité en cours]

---

## 📝 Notes manuelles

<!-- MANUAL_NOTES_START -->
[Section pour ajouts manuels - ne pas modifier les marqueurs]
<!-- MANUAL_NOTES_END -->

---

## 🔗 Références

- [Constitution](../../.specify/memory/constitution.md)
- [Spec actuelle](../specs/{{BRANCH_NAME}}/spec.md)
- [Plan actuel](../specs/{{BRANCH_NAME}}/plan.md)

