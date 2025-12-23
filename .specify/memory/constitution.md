# Constitution du Projet

**Version** : 1.0.0  
**Date de création** : 2024  
**Dernière mise à jour** : 2024

---

## 🎯 Principes fondamentaux

### Test-Driven Development (TDD)
- **Règle** : Les tests sont écrits avant l'implémentation
- **Objectif** : Assurer la qualité et la maintenabilité du code
- **Application** : Tous les nouveaux composants/fonctions doivent avoir des tests

### Library-First
- **Règle** : Le code réutilisable doit être dans `packages/`
- **Objectif** : Éviter la duplication et favoriser la réutilisabilité
- **Application** : Avant d'écrire du code, vérifier s'il peut être partagé

### Type Safety
- **Règle** : TypeScript strict activé, pas de `any` non justifiés
- **Objectif** : Détecter les erreurs à la compilation
- **Application** : Tous les fichiers TypeScript doivent être typés strictement

### Code Quality
- **Règle** : Linting et formatting automatiques
- **Objectif** : Maintenir un code uniforme et lisible
- **Application** : `pnpm lint` doit passer sans erreurs

### API-First
- **Règle** : Toujours définir les contrats API avant l'implémentation
- **Objectif** : Assurer la cohérence entre frontend et backend
- **Application** : Les schémas Zod dans `@monorepo/contracts` avant le code

---

## 🛠️ Stack technique

### Langages et frameworks
- **TypeScript** : 5.x (strict mode)
- **Node.js** : >= 18.0.0
- **pnpm** : >= 10.0.0 (gestionnaire de packages)

### Backend
- **Framework** : Fastify
- **Base de données** : PostgreSQL 16
- **ORM** : Prisma
- **Validation** : Zod

### Frontend
- **Framework** : Next.js 15
- **UI Library** : Ant Design
- **Validation** : Zod

### Outils de développement
- **Monorepo** : pnpm workspaces
- **Build** : TypeScript compiler
- **Linting** : ESLint
- **Formatting** : Prettier (si configuré)

---

## 📐 Standards de code

### Conventions de nommage
- **Fonctions/Variables** : `camelCase`
- **Classes/Interfaces/Types** : `PascalCase`
- **Constantes** : `UPPER_SNAKE_CASE`
- **Fichiers** : `kebab-case.ts` ou `PascalCase.tsx` (composants React)
- **Dossiers** : `kebab-case`

### Structure de dossiers
```
apps/
  api/
    src/
      routes/      # Routes Fastify
      services/    # Logique métier
      types/       # Types TypeScript
      utils/       # Utilitaires spécifiques API
  web/
    src/
      app/         # Pages Next.js (App Router)
      components/  # Composants spécifiques Web
      lib/         # Utilitaires spécifiques Web

packages/
  contracts/
    src/           # Schémas Zod et types
  ui/
    src/
      components/  # Composants React réutilisables
  utils/
    src/           # Fonctions utilitaires partagées
```

### Documentation
- **Code inline** : Commentaires JSDoc pour fonctions publiques
- **README** : Un README par package/app expliquant son usage
- **Types** : Types TypeScript comme documentation

### Gestion des erreurs
- **API** : Retourner des codes HTTP appropriés
- **Validation** : Utiliser Zod pour valider les entrées
- **Logging** : Logger les erreurs avec contexte

---

## 🔀 Workflow Git

### Branches
- **Format** : `###-feature-name` (ex: `001-authentification`)
- **Base** : `main` ou `develop`
- **Naming** : Numéro séquentiel (001, 002, 003...) + nom descriptif

### Commits
- **Format** : Messages descriptifs en français ou anglais
- **Structure** : `type(scope): description`
- **Types** : `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

### Pull Requests
- **Titre** : Descriptif de la fonctionnalité
- **Description** : 
  - Contexte et objectifs
  - Checklist de validation
  - Screenshots (si applicable)
- **Review** : Au moins une approbation avant merge

---

## 🧪 Tests et qualité

### Tests unitaires
- **Framework** : À définir (Jest, Vitest, etc.)
- **Couverture** : Minimum 80%
- **Localisation** : `*.test.ts` ou `*.spec.ts` à côté du code

### Tests d'intégration
- **Objectif** : Tester les interactions entre composants
- **Localisation** : `__tests__/integration/`

### Tests end-to-end
- **Framework** : À définir (Playwright, Cypress, etc.)
- **Objectif** : Tester les flux utilisateur complets

### Linting
- **Commande** : `pnpm lint`
- **Règle** : Doit passer sans erreurs avant commit
- **Configuration** : ESLint avec règles strictes

### Type Checking
- **Commande** : `pnpm type-check`
- **Règle** : Doit passer sans erreurs avant commit
- **Configuration** : TypeScript strict mode

---

## 📦 Gestion des dépendances

### Packages externes
- **Validation** : Vérifier la maintenance et la sécurité
- **Versioning** : Utiliser des versions fixes (pas de `^` ou `~`)
- **Audit** : `pnpm audit` régulièrement

### Packages internes
- **Import** : Utiliser les alias `@monorepo/*`
- **Dépendances** : Éviter les dépendances circulaires
- **Versioning** : `workspace:*` dans package.json

---

## 🚀 Déploiement

### Pré-déploiement
- [ ] Tous les tests passent
- [ ] Linting OK
- [ ] Type checking OK
- [ ] Build production réussi
- [ ] Migrations Prisma appliquées
- [ ] Variables d'environnement configurées

### Post-déploiement
- [ ] Vérification de l'application en production
- [ ] Monitoring configuré
- [ ] Logs vérifiés

---

## 🔒 Sécurité

### Validation des entrées
- **Règle** : Toujours valider les entrées utilisateur
- **Outil** : Zod pour validation
- **Application** : Validation côté API et frontend

### Secrets
- **Règle** : Jamais de secrets dans le code
- **Gestion** : Variables d'environnement
- **Fichiers** : `.env` dans `.gitignore`

### Authentification/Autorisation
- **Règle** : Vérifier les permissions à chaque requête
- **Application** : Middleware d'authentification

---

## ♿ Accessibilité

### Standards
- **WCAG** : Niveau AA minimum
- **Composants** : Labels ARIA appropriés
- **Navigation** : Support clavier complet
- **Contraste** : Ratio minimum 4.5:1

### Tests
- **Outils** : Tests avec lecteur d'écran
- **Validation** : Vérification manuelle régulière

---

## 📊 Performance

### Métriques
- **Bundle size** : Surveiller la taille des bundles
- **Temps de chargement** : < 3s pour First Contentful Paint
- **Requêtes DB** : Optimiser les requêtes Prisma

### Optimisations
- **Code splitting** : Utiliser le code splitting de Next.js
- **Lazy loading** : Charger les composants à la demande
- **Caching** : Mettre en cache les données statiques

---

## 🔄 Version et gouvernance

### Versioning
- **Format** : Semantic Versioning (MAJOR.MINOR.PATCH)
- **Changements majeurs** : Breaking changes dans l'API
- **Changements mineurs** : Nouvelles fonctionnalités rétrocompatibles
- **Patches** : Corrections de bugs

### Décisions techniques
- **Processus** : Discussion et consensus
- **Documentation** : Documenter les décisions importantes (ADR)
- **Révision** : Réviser régulièrement les décisions

---

## 📝 Notes

Cette constitution est un document vivant et peut être modifiée selon les besoins du projet.  
Toute modification doit être discutée et approuvée par l'équipe.

---

## 🔗 Références

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Fastify Documentation](https://www.fastify.io/docs/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)

