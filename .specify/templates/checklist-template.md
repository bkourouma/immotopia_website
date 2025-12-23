# Checklist : {{BRANCH_NAME}}

**Date de création** : {{DATE}}

---

## ✅ Pré-implémentation

### Spécification
- [ ] `spec.md` complété avec toutes les user stories
- [ ] Critères d'acceptation définis pour chaque US
- [ ] Scénarios Given/When/Then documentés

### Planification
- [ ] `plan.md` créé et complété
- [ ] Phase 0 (Recherche) terminée
- [ ] `research.md` créé (si nécessaire)
- [ ] `data-model.md` créé (si nécessaire)
- [ ] Contrats Zod définis dans `contracts/`

### Tâches
- [ ] `tasks.md` créé avec toutes les tâches détaillées
- [ ] Dépendances entre tâches identifiées
- [ ] Estimations ajoutées

---

## ✅ Implémentation

### Code
- [ ] Toutes les tâches P1 complétées
- [ ] Toutes les tâches P2 complétées (si applicable)
- [ ] Code conforme aux standards du projet
- [ ] Pas de code dupliqué
- [ ] Gestion d'erreurs appropriée

### Tests
- [ ] Tests unitaires écrits et passent
- [ ] Tests d'intégration écrits et passent
- [ ] Tests E2E écrits et passent (si applicable)
- [ ] Couverture de code ≥ 80%

### Documentation
- [ ] Code commenté où nécessaire
- [ ] README mis à jour (si nécessaire)
- [ ] API documentée (si applicable)

---

## ✅ Qualité

### Linting et Formatting
- [ ] `pnpm lint` passe sans erreurs
- [ ] Code formaté uniformément
- [ ] Pas de warnings TypeScript

### Type Safety
- [ ] `pnpm type-check` passe sans erreurs
- [ ] Tous les types correctement définis
- [ ] Pas de `any` non justifiés

### Performance
- [ ] Pas de problèmes de performance identifiés
- [ ] Requêtes DB optimisées (si applicable)
- [ ] Bundle size acceptable

---

## ✅ Sécurité

- [ ] Validation des entrées utilisateur
- [ ] Protection contre les injections SQL/XSS
- [ ] Authentification/autorisation en place (si applicable)
- [ ] Secrets non commités
- [ ] Variables d'environnement configurées

---

## ✅ Accessibilité

- [ ] Composants accessibles (ARIA labels)
- [ ] Navigation au clavier fonctionnelle
- [ ] Contraste de couleurs suffisant
- [ ] Tests avec lecteur d'écran (si applicable)

---

## ✅ Déploiement

### Pré-déploiement
- [ ] Migrations Prisma appliquées
- [ ] Variables d'environnement configurées
- [ ] Build production réussi (`pnpm build`)

### Post-déploiement
- [ ] Application fonctionne en production
- [ ] Monitoring configuré (si applicable)
- [ ] Logs vérifiés

---

## ✅ Finalisation

- [ ] Code review effectué (si applicable)
- [ ] Tous les tests passent
- [ ] Documentation à jour
- [ ] Branche prête pour merge
- [ ] PR créée avec description complète

---

## 📝 Notes

[Notes additionnelles]

