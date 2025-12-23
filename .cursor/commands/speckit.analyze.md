# Analyser la cohérence des documents

Cette commande analyse la cohérence entre spec.md, plan.md et tasks.md.

## Usage

```
/speckit.analyze
```

## Prérequis

- Être sur une branche de fonctionnalité
- Les fichiers `spec.md`, `plan.md` et `tasks.md` doivent exister

## Comportement

1. Lit `spec.md`, `plan.md` et `tasks.md`
2. Compare les user stories entre spec et tasks
3. Vérifie que toutes les US de la spec ont des tâches correspondantes
4. Détecte les duplications
5. Identifie les ambiguïtés
6. Vérifie les incohérences
7. Génère un rapport d'analyse

## Détections

### Duplications
- User stories similaires
- Tâches redondantes
- Sections dupliquées

### Ambiguïtés
- Critères d'acceptation vagues
- Tâches mal définies
- Dépendances floues

### Incohérences
- User stories dans spec mais pas de tâches
- Tâches sans user story correspondante
- Technologies mentionnées mais non utilisées
- Contrats manquants

## Rapport généré

Le rapport contient :
- Résumé des problèmes détectés
- Liste des duplications
- Liste des ambiguïtés
- Liste des incohérences
- Recommandations

## Prochaines étapes

Après analyse :
- Utiliser `/speckit.clarify` pour clarifier les ambiguïtés
- Corriger les incohérences détectées
- Mettre à jour les documents si nécessaire

