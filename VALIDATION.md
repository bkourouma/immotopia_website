# Guide de validation du monorepo

Ce document liste les étapes pour valider que le monorepo est correctement configuré.

## ✅ Validation de base

### 1. Structure des fichiers

Vérifiez que tous les fichiers suivants existent :

```
✅ package.json
✅ pnpm-workspace.yaml
✅ tsconfig.json
✅ .gitignore
✅ .npmrc
✅ README.md
✅ SETUP.md
✅ QUICKSTART.md
```

### 2. Structure des apps

```
✅ apps/api/package.json
✅ apps/api/src/index.ts
✅ apps/api/tsconfig.json
✅ apps/api/prisma/schema.prisma
✅ apps/web/package.json
✅ apps/web/src/app/page.tsx
✅ apps/web/tsconfig.json
✅ apps/web/next.config.js
```

### 3. Structure des packages

```
✅ packages/contracts/package.json
✅ packages/contracts/src/index.ts
✅ packages/ui/package.json
✅ packages/ui/src/index.ts
✅ packages/utils/package.json
✅ packages/utils/src/index.ts
```

### 4. Structure SpectKit

```
✅ .specify/memory/constitution.md
✅ .specify/scripts/powershell/common.ps1
✅ .specify/scripts/powershell/create-new-feature.ps1
✅ .specify/scripts/powershell/setup-plan.ps1
✅ .specify/scripts/powershell/check-prerequisites.ps1
✅ .specify/scripts/powershell/update-agent-context.ps1
✅ .specify/templates/spec-template.md
✅ .specify/templates/plan-template.md
✅ .specify/templates/tasks-template.md
✅ .specify/templates/checklist-template.md
✅ .specify/templates/agent-file-template.md
```

### 5. Structure Cursor

```
✅ .cursor/commands/speckit.specify.md
✅ .cursor/commands/speckit.plan.md
✅ .cursor/commands/speckit.tasks.md
✅ .cursor/commands/speckit.analyze.md
✅ .cursor/commands/speckit.implement.md
✅ .cursor/commands/speckit.checklist.md
✅ .cursor/commands/speckit.clarify.md
✅ .cursor/commands/speckit.constitution.md
✅ .cursor/rules/specify-rules.mdc
```

---

## 🧪 Tests fonctionnels

### Test 1 : Installation

```bash
pnpm install
```

**Résultat attendu** : Installation réussie sans erreurs

### Test 2 : Type Checking

```bash
pnpm type-check
```

**Résultat attendu** : Aucune erreur TypeScript

### Test 3 : Build

```bash
pnpm build
```

**Résultat attendu** : Build réussi pour tous les packages

### Test 4 : Script PowerShell - Création de fonctionnalité

```powershell
cd .specify/scripts/powershell
.\create-new-feature.ps1 "Test feature" -Json
```

**Résultat attendu** : JSON valide avec `success: true`

### Test 5 : Script PowerShell - Setup Plan

```powershell
# Après avoir créé une fonctionnalité
.\setup-plan.ps1 -Json
```

**Résultat attendu** : JSON valide avec chemins de fichiers

### Test 6 : Script PowerShell - Check Prerequisites

```powershell
.\check-prerequisites.ps1 -Json
```

**Résultat attendu** : JSON valide avec statut des fichiers

---

## 🔍 Validation des commandes Cursor

### Commande 1 : `/speckit.specify`

Dans Cursor, tapez :
```
/speckit.specify "Test fonctionnalité"
```

**Résultat attendu** :
- Branche Git créée : `001-test-fonctionnalite`
- Dossier créé : `specs/001-test-fonctionnalite/`
- Fichier créé : `specs/001-test-fonctionnalite/spec.md`

### Commande 2 : `/speckit.plan`

Dans Cursor, tapez :
```
/speckit.plan
```

**Résultat attendu** :
- Fichier créé : `specs/001-test-fonctionnalite/plan.md`
- Template rempli avec informations de la branche

### Commande 3 : `/speckit.tasks`

Dans Cursor, tapez :
```
/speckit.tasks
```

**Résultat attendu** :
- Fichier créé : `specs/001-test-fonctionnalite/tasks.md`
- Tâches organisées par user stories

---

## 📋 Checklist de validation complète

- [ ] `pnpm install` fonctionne
- [ ] `pnpm type-check` passe sans erreurs
- [ ] `pnpm build` réussit
- [ ] `pnpm dev` lance API et Web
- [ ] API accessible sur http://localhost:3002/health
- [ ] Web accessible sur http://localhost:3003
- [ ] Scripts PowerShell retournent du JSON valide
- [ ] `/speckit.specify` crée une spec
- [ ] `/speckit.plan` génère un plan
- [ ] `/speckit.tasks` génère des tâches
- [ ] Tous les templates sont complets
- [ ] Constitution est lisible et complète
- [ ] Règles Cursor sont à jour

---

## 🐛 Dépannage

### Erreur : "Repository root not found"
→ Vérifiez que vous êtes dans un repository Git ou que `pnpm-workspace.yaml` existe

### Erreur : "Not on a feature branch"
→ Créez d'abord une fonctionnalité avec `/speckit.specify`

### Erreur : "Spec file not found"
→ Exécutez `/speckit.specify` avant `/speckit.plan`

### Erreur : Scripts PowerShell ne s'exécutent pas
→ Vérifiez les permissions d'exécution PowerShell
→ Vérifiez que PowerShell est disponible dans le PATH

---

## ✅ Validation réussie

Si tous les tests passent, le monorepo est prêt à être utilisé !

Vous pouvez maintenant :
1. Créer votre première fonctionnalité avec `/speckit.specify`
2. Suivre le workflow SpectKit complet
3. Développer avec confiance

---

## 📚 Ressources

- [README.md](README.md) - Documentation complète
- [SETUP.md](SETUP.md) - Guide de configuration
- [QUICKSTART.md](QUICKSTART.md) - Démarrage rapide
- [Constitution](.specify/memory/constitution.md) - Principes du projet

