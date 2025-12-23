# Implémenter les tâches

Cette commande implémente les tâches listées dans tasks.md.

## Usage

```
/speckit.implement [task-id]
```

Sans argument, implémente toutes les tâches séquentiellement.  
Avec `task-id`, implémente uniquement la tâche spécifiée.

## Prérequis

- Être sur une branche de fonctionnalité
- Le fichier `tasks.md` doit exister
- Les prérequis techniques doivent être en place

## Comportement

1. Lit `tasks.md` pour extraire les tâches
2. Identifie les dépendances entre tâches
3. Implémente les tâches dans l'ordre (respect des dépendances)
4. Identifie les tâches parallélisables ([P])
5. Met à jour la progression dans `tasks.md` (cochage des cases)
6. Génère les tests associés (si TDD activé)

## Ordre d'implémentation

1. **Phase 0** : Setup et fondations (toujours en premier)
2. **P1** : User Stories Priorité Critique (séquentiel sauf si [P])
3. **P2** : User Stories Priorité Haute (après P1)
4. **P3** : User Stories Priorité Moyenne (après P2)
5. **Phase 3** : Polish et finalisation (en dernier)

## Tâches parallélisables

Les tâches marquées [P] peuvent être implémentées en parallèle si :
- Elles n'ont pas de dépendances entre elles
- Elles concernent des fichiers différents
- Elles sont dans la même phase

## Mise à jour de progression

Après chaque tâche complétée :
- La case `[ ]` est remplacée par `[x]` dans `tasks.md`
- Un commentaire peut être ajouté avec la date de complétion

## Tests

Si TDD est activé dans la constitution :
- Les tests sont écrits avant l'implémentation
- Les tests doivent passer avant de marquer la tâche comme complète

## Exemple

```
/speckit.implement T-001-P1-001-001
```

Implémente uniquement la tâche T-001-P1-001-001.

## Prochaines étapes

Après implémentation :
- Utiliser `/speckit.checklist` pour vérifier la complétion
- Utiliser `/speckit.analyze` pour vérifier la cohérence

