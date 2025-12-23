# Scripts PowerShell SpectKit

Scripts d'automatisation pour SpectKit, compatibles avec Cursor AI.

## Scripts disponibles

### common.ps1
Fonctions partagées utilisées par les autres scripts.

**Fonctions** :
- `Find-RepositoryRoot` : Trouve la racine du repository
- `Test-FeatureBranch` : Vérifie le format de branche `###-feature-name`
- `Get-FeaturePathsEnv` : Retourne les chemins de la fonctionnalité en JSON
- `Get-NextFeatureNumber` : Génère le prochain numéro de fonctionnalité
- `Get-SanitizedFeatureName` : Sanitise un nom de fonctionnalité

### create-new-feature.ps1
Crée une nouvelle spécification de fonctionnalité.

**Usage** :
```powershell
.\create-new-feature.ps1 "Description de la fonctionnalité" [-Json]
```

**Paramètres** :
- `FeatureDescription` (obligatoire) : Description de la fonctionnalité
- `Json` (optionnel) : Retourne JSON au lieu de texte

**Retour JSON** :
```json
{
  "success": true,
  "branchName": "001-feature-name",
  "featureDir": "C:\\path\\to\\specs\\001-feature-name",
  "specFile": "C:\\path\\to\\specs\\001-feature-name\\spec.md",
  "featureNumber": "001"
}
```

### setup-plan.ps1
Initialise le plan d'implémentation pour la fonctionnalité en cours.

**Usage** :
```powershell
.\setup-plan.ps1 [-Json]
```

**Prérequis** :
- Être sur une branche de fonctionnalité (format `###-feature-name`)
- Le fichier `spec.md` doit exister

**Retour JSON** :
```json
{
  "success": true,
  "branchName": "001-feature-name",
  "featureDir": "C:\\path\\to\\specs\\001-feature-name",
  "specFile": "C:\\path\\to\\specs\\001-feature-name\\spec.md",
  "planFile": "C:\\path\\to\\specs\\001-feature-name\\plan.md",
  "paths": { ... }
}
```

### check-prerequisites.ps1
Vérifie les prérequis pour le développement de la fonctionnalité.

**Usage** :
```powershell
.\check-prerequisites.ps1 [-RequireTasks] [-IncludeTasks] [-Json]
```

**Paramètres** :
- `RequireTasks` : Exige que `tasks.md` existe
- `IncludeTasks` : Inclut `tasks.md` dans la vérification
- `Json` : Retourne JSON

**Retour JSON** :
```json
{
  "success": true,
  "branchName": "001-feature-name",
  "featureDir": "C:\\path\\to\\specs\\001-feature-name",
  "files": {
    "spec": { "path": "...", "exists": true },
    "plan": { "path": "...", "exists": true },
    "tasks": { "path": "...", "exists": false }
  },
  "allRequired": true
}
```

### update-agent-context.ps1
Met à jour le fichier de contexte agent avec les technologies actuelles.

**Usage** :
```powershell
.\update-agent-context.ps1 [-Technologies @("tech1", "tech2")] [-Json]
```

**Paramètres** :
- `Technologies` : Liste des technologies (optionnel, extrait du plan si non fourni)
- `Json` : Retourne JSON

## Format JSON

Tous les scripts supportent le paramètre `-Json` pour retourner des données structurées que Cursor AI peut utiliser.

## Gestion des erreurs

Tous les scripts retournent un objet JSON avec `success: false` en cas d'erreur :

```json
{
  "success": false,
  "error": "Message d'erreur"
}
```

## Exécution depuis Cursor

Les scripts sont appelés automatiquement par les commandes Cursor :
- `/speckit.specify` → `create-new-feature.ps1`
- `/speckit.plan` → `setup-plan.ps1`
- `/speckit.tasks` → `check-prerequisites.ps1` (vérification)
- `/speckit.implement` → `check-prerequisites.ps1` (vérification)

## Tests manuels

Pour tester un script manuellement :

```powershell
# Depuis la racine du projet
cd .specify/scripts/powershell
.\create-new-feature.ps1 "Test feature" -Json
```

## Dépannage

### Erreur "Repository root not found"
- Vérifiez que vous êtes dans un repository Git
- Vérifiez que `pnpm-workspace.yaml` existe à la racine

### Erreur "Not on a feature branch"
- Vérifiez le format de la branche : `###-feature-name`
- Créez une branche avec `/speckit.specify` si nécessaire

### Erreur "Spec file not found"
- Exécutez d'abord `/speckit.specify` pour créer la spec
- Vérifiez que `spec.md` existe dans `specs/###-feature-name/`

