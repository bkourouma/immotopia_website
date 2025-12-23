# Générer le plan d'implémentation

Cette commande génère le plan d'implémentation pour la fonctionnalité en cours.

## Usage

```
/speckit.plan
```

## Prérequis

- Être sur une branche de fonctionnalité (format `###-feature-name`)
- Le fichier `spec.md` doit exister dans `specs/###-feature-name/`

## Comportement

1. Exécute `.specify/scripts/powershell/setup-plan.ps1`
2. Détecte automatiquement la branche courante
3. Vérifie l'existence de `spec.md`
4. Crée `plan.md` depuis le template si inexistant
5. Retourne les chemins en JSON pour Cursor AI

## Script PowerShell

Le script `setup-plan.ps1` :
- Vérifie qu'on est sur une branche feature
- Vérifie l'existence de `spec.md`
- Crée `plan.md` depuis `plan-template.md`
- Remplace les placeholders (`{{BRANCH_NAME}}`, `{{FEATURE_DIR}}`, etc.)
- Retourne JSON avec `{ success, branchName, featureDir, specFile, planFile, paths }`

## Structure du plan

Le plan généré contient :
- Contexte technique (stack, dépendances, contraintes)
- Vérification de conformité constitution
- Structure du projet
- Phases : 0 (Recherche), 1 (Design), 2 (Implémentation)
- Tests et déploiement

## Prochaines étapes

Après génération du plan :
1. Compléter manuellement les sections du plan
2. Utiliser `/speckit.tasks` pour générer les tâches détaillées

