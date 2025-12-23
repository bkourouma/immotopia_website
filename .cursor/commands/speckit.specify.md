# Créer une nouvelle spécification SpectKit

Cette commande crée une nouvelle spécification de fonctionnalité avec SpectKit.

## Usage

```
/speckit.specify "Description de la fonctionnalité"
```

## Comportement

1. Exécute `.specify/scripts/powershell/create-new-feature.ps1` avec la description fournie
2. Génère automatiquement un numéro de fonctionnalité (001, 002, 003...)
3. Crée une branche Git au format `###-feature-name`
4. Crée le dossier `specs/###-feature-name/`
5. Génère `spec.md` depuis le template avec les placeholders remplis
6. Retourne les chemins et informations en JSON pour Cursor AI

## Exemple

```
/speckit.specify "Système d'authentification utilisateur"
```

Créera :
- Branche : `001-systeme-authentification-utilisateur`
- Dossier : `specs/001-systeme-authentification-utilisateur/`
- Fichier : `specs/001-systeme-authentification-utilisateur/spec.md`

## Script PowerShell

Le script `create-new-feature.ps1` :
- Trouve la racine du repo
- Génère le prochain numéro disponible
- Sanitise le nom de fonctionnalité
- Crée la branche Git
- Copie et remplit le template `spec-template.md`
- Retourne JSON avec `{ success, branchName, featureDir, specFile, featureNumber }`

## Prochaines étapes

Après création de la spec, utilisez :
- `/speckit.plan` pour générer le plan d'implémentation
- `/speckit.tasks` pour générer les tâches détaillées

