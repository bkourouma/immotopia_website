# Générer les checklists

Cette commande génère les checklists de validation pour la fonctionnalité.

## Usage

```
/speckit.checklist
```

## Prérequis

- Être sur une branche de fonctionnalité
- Les fichiers `spec.md`, `plan.md` et `tasks.md` doivent exister

## Comportement

1. Lit `spec.md`, `plan.md` et `tasks.md`
2. Génère `checklist.md` depuis le template
3. Remplit automatiquement les sections basées sur :
   - User stories de la spec
   - Tâches du plan
   - Technologies utilisées
   - Standards de la constitution

## Structure de la checklist

La checklist contient :

### Pré-implémentation
- Spécification complète
- Planification terminée
- Tâches définies

### Implémentation
- Code conforme
- Tests écrits et passent
- Documentation à jour

### Qualité
- Linting et formatting
- Type safety
- Performance

### Sécurité
- Validation des entrées
- Protection contre injections
- Authentification/autorisation

### Accessibilité
- Composants accessibles
- Navigation clavier
- Contraste de couleurs

### Déploiement
- Pré-déploiement
- Post-déploiement

### Finalisation
- Code review
- Tests passent
- PR créée

## Utilisation

La checklist sert de guide de validation :
1. Cocher chaque item au fur et à mesure
2. Utiliser pour la revue de code
3. Vérifier avant de créer la PR

## Prochaines étapes

Après génération :
- Utiliser la checklist pendant l'implémentation
- Vérifier tous les items avant le merge

