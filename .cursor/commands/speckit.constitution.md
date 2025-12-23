# Gérer la constitution

Cette commande permet de consulter et modifier la constitution du projet.

## Usage

```
/speckit.constitution [action]
```

Actions disponibles :
- `view` : Affiche la constitution (par défaut)
- `add-principle` : Ajoute un nouveau principe
- `update-stack` : Met à jour la stack technique
- `add-standard` : Ajoute un standard de code

## Prérequis

- Le fichier `.specify/memory/constitution.md` doit exister

## Comportement

### View (par défaut)
1. Lit `.specify/memory/constitution.md`
2. Affiche la constitution formatée
3. Met en évidence les sections importantes

### Add Principle
```
/speckit.constitution add-principle "Nom du principe" "Description"
```
Ajoute un nouveau principe fondamental à la constitution.

### Update Stack
```
/speckit.constitution update-stack "Nouvelle technologie"
```
Ajoute ou met à jour une technologie dans la stack.

### Add Standard
```
/speckit.constitution add-standard "Catégorie" "Standard"
```
Ajoute un nouveau standard de code.

## Structure de la constitution

La constitution contient :
- **Principes fondamentaux** : TDD, Library-First, Type Safety, etc.
- **Stack technique** : TypeScript, pnpm, PostgreSQL, Prisma, etc.
- **Standards de code** : Conventions, structure, documentation
- **Workflow Git** : Branches, commits, PR
- **Tests et qualité** : Couverture, linting, type checking
- **Version et gouvernance** : Versioning, décisions techniques

## Impact

Les modifications de la constitution affectent :
- La génération des plans (`/speckit.plan`)
- La vérification de conformité
- Les guidelines dans `.cursor/rules/specify-rules.mdc`

## Exemple

```
/speckit.constitution add-principle "API-First" "Toujours définir les contrats API avant l'implémentation"
```

Ajoute le principe "API-First" à la constitution.

## Prochaines étapes

Après modification :
- La constitution est automatiquement sauvegardée
- Les règles Cursor sont mises à jour
- Les futurs plans utiliseront les nouveaux principes

