# Rapport de tests de charge - Phase 5

**Date d'exécution** : ___  
**Exécuté par** : ___  
**Environnement** : Staging  
**URL testée** : ___  
**Outil utilisé** : k6

---

## 📊 Résumé exécutif

- **Objectif** : 1000 visiteurs simultanés
- **Durée totale** : ___ minutes
- **Requêtes totales** : ___
- **Requêtes réussies** : ___
- **Requêtes échouées** : ___
- **Taux de réussite** : ___%
- **Taux d'erreur** : ___%

---

## ⚡ Métriques de performance

### Temps de réponse

- **Moyenne** : ___ ms
- **Médiane (p50)** : ___ ms
- **95e percentile (p95)** : ___ ms
- **99e percentile (p99)** : ___ ms
- **Maximum** : ___ ms

**Objectif** : p95 < 2000 ms ✅ / ❌

### Débit

- **Requêtes par seconde (RPS)** : ___
- **Requêtes par minute** : ___

**Objectif** : > 100 RPS ✅ / ❌

### Taux d'erreur

- **Taux d'erreur global** : ___%
- **Erreurs HTTP 4xx** : ___
- **Erreurs HTTP 5xx** : ___
- **Timeouts** : ___
- **Erreurs réseau** : ___

**Objectif** : < 1% ✅ / ❌

---

## 📈 Courbe de charge

### Phases d'exécution

| Phase | Durée | Utilisateurs cibles | Utilisateurs réels | RPS | Taux d'erreur |
|-------|-------|---------------------|-------------------|-----|---------------|
| Montée 1 | 30s | 50 | ___ | ___ | ___% |
| Montée 2 | 1m | 100 | ___ | ___ | ___% |
| Montée 3 | 2m | 500 | ___ | ___ | ___% |
| Montée 4 | 3m | 1000 | ___ | ___ | ___% |
| Maintien | 2m | 1000 | ___ | ___ | ___% |
| Descente 1 | 1m | 500 | ___ | ___ | ___% |
| Descente 2 | 30s | 0 | ___ | ___ | ___% |

---

## 🌐 Performance par page

### Page d'accueil (/)
- **Requêtes** : ___
- **Temps de réponse moyen** : ___ ms
- **Taux d'erreur** : ___%
- **p95** : ___ ms

### Page "Pour qui" (/pour-qui)
- **Requêtes** : ___
- **Temps de réponse moyen** : ___ ms
- **Taux d'erreur** : ___%
- **p95** : ___ ms

### Page "La solution" (/la-solution)
- **Requêtes** : ___
- **Temps de réponse moyen** : ___ ms
- **Taux d'erreur** : ___%
- **p95** : ___ ms

### Page "Fonctionnalités" (/fonctionnalites)
- **Requêtes** : ___
- **Temps de réponse moyen** : ___ ms
- **Taux d'erreur** : ___%
- **p95** : ___ ms

### Page "Ressources" (/ressources)
- **Requêtes** : ___
- **Temps de réponse moyen** : ___ ms
- **Taux d'erreur** : ___%
- **p95** : ___ ms

### Page "Tarifs" (/tarifs)
- **Requêtes** : ___
- **Temps de réponse moyen** : ___ ms
- **Taux d'erreur** : ___%
- **p95** : ___ ms

### Page "Contact" (/contact)
- **Requêtes** : ___
- **Temps de réponse moyen** : ___ ms
- **Taux d'erreur** : ___%
- **p95** : ___ ms

---

## 🔍 Analyse des erreurs

### Types d'erreurs

1. **Erreurs HTTP 500** : ___
   - **Cause probable** : ___
   - **Actions** : ___

2. **Erreurs HTTP 503** : ___
   - **Cause probable** : ___
   - **Actions** : ___

3. **Timeouts** : ___
   - **Cause probable** : ___
   - **Actions** : ___

4. **Erreurs réseau** : ___
   - **Cause probable** : ___
   - **Actions** : ___

---

## 📊 Utilisation des ressources serveur

### CPU
- **Utilisation moyenne** : ___%
- **Utilisation maximale** : ___%
- **Commentaires** : ___

### Mémoire
- **Utilisation moyenne** : ___ MB / ___ MB
- **Utilisation maximale** : ___ MB / ___ MB
- **Commentaires** : ___

### Réseau
- **Bande passante entrante** : ___ Mbps
- **Bande passante sortante** : ___ Mbps
- **Commentaires** : ___

### Base de données
- **Connexions actives** : ___ / ___
- **Requêtes par seconde** : ___
- **Temps de réponse moyen** : ___ ms
- **Commentaires** : ___

---

## ✅ Critères de succès

- [ ] **1000 visiteurs simultanés supportés** : ✅ / ❌
- [ ] **Temps de réponse p95 < 2s** : ✅ / ❌
- [ ] **Taux d'erreur < 1%** : ✅ / ❌
- [ ] **Débit > 100 RPS** : ✅ / ❌

---

## 🐛 Problèmes identifiés

### Problèmes critiques
1. ___
2. ___

### Problèmes mineurs
1. ___
2. ___

---

## 💡 Recommandations

1. ___
2. ___
3. ___

---

## 📝 Notes

___

---

## 📎 Fichiers joints

- [ ] Logs complets k6
- [ ] Graphiques de performance
- [ ] Métriques serveur détaillées

