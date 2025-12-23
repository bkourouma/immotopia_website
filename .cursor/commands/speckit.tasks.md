# Générer les tâches d'implémentation

Cette commande génère les tâches détaillées à partir de la spec et du plan.

## Usage

```
/speckit.tasks
```

## Prérequis

- Être sur une branche de fonctionnalité (format `###-feature-name`)
- Les fichiers `spec.md` et `plan.md` doivent exister

## Comportement

1. Lit `spec.md` pour extraire les user stories (P1, P2, P3)
2. Lit `plan.md` pour comprendre la structure technique
3. Génère `tasks.md` avec :
   - Organisation par user stories
   - Phases : Setup → Foundational → User Stories → Polish
   - Marqueurs [P] pour tâches parallélisables
   - Dépendances entre tâches
   - Estimations

## Structure des tâches

Les tâches sont organisées ainsi :
- **Phase 0** : Setup et fondations
- **P1** : User Stories Priorité Critique
- **P2** : User Stories Priorité Haute
- **P3** : User Stories Priorité Moyenne
- **Phase 3** : Polish et finalisation

Chaque tâche contient :
- Description détaillée
- Fichiers concernés
- Dépendances
- Estimation
- Marqueur [P] si parallélisable

## Format des tâches

```
#### T-{{FEATURE_NUMBER}}-P1-001-001 : [Titre]
- [ ] Description détaillée
- **Fichiers concernés** : `apps/api/src/...`
- **Dépendances** : T-{{FEATURE_NUMBER}}-000
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle
```

## Prochaines étapes

Après génération des tâches :
- Utiliser `/speckit.implement` pour implémenter les tâches
- Utiliser `/speckit.analyze` pour vérifier la cohérence

