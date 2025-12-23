# Clarifier les ambiguïtés

Cette commande aide à clarifier les ambiguïtés dans les documents SpectKit.

## Usage

```
/speckit.clarify [section]
```

Sans argument, analyse tous les documents et identifie les ambiguïtés.  
Avec `section`, se concentre sur une section spécifique.

## Prérequis

- Être sur une branche de fonctionnalité
- Les fichiers `spec.md`, `plan.md` et `tasks.md` doivent exister

## Comportement

1. Analyse `spec.md`, `plan.md` et `tasks.md`
2. Identifie les sections ambiguës ou incomplètes
3. Propose des clarifications
4. Met à jour les documents avec les clarifications

## Types d'ambiguïtés détectées

### Critères d'acceptation vagues
- "Fonctionne correctement" → Clarifier ce que signifie "correctement"
- "Performance acceptable" → Définir des métriques précises

### Tâches mal définies
- "Implémenter la fonctionnalité" → Découper en sous-tâches
- "Ajouter les tests" → Spécifier quels tests

### Dépendances floues
- "Dépend de X" → Clarifier la nature de la dépendance
- Dépendances circulaires → Identifier et résoudre

### Technologies non spécifiées
- "Utiliser une librairie" → Spécifier laquelle
- "Configurer la base de données" → Détails de configuration

## Processus de clarification

1. **Identification** : Détecte les ambiguïtés
2. **Questionnement** : Pose des questions pour clarifier
3. **Proposition** : Propose des clarifications
4. **Mise à jour** : Met à jour les documents

## Exemples de clarifications

### Avant (ambigu)
```
- Implémenter l'authentification
```

### Après (clarifié)
```
- Implémenter l'authentification JWT
  - Endpoint POST /api/auth/login
  - Validation email/password avec Zod
  - Génération token JWT avec expiration 24h
  - Refresh token avec expiration 7 jours
```

## Prochaines étapes

Après clarification :
- Vérifier que toutes les ambiguïtés sont résolues
- Utiliser `/speckit.analyze` pour vérifier la cohérence
- Continuer avec `/speckit.implement`

