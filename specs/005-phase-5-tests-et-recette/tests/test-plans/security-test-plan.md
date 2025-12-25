# Plan de tests de sécurité - Phase 5

**Date de création** : 2025-12-23  
**Statut** : 📋 À exécuter

---

## 🎯 Objectifs

Valider la sécurité du site ImmoTopia selon les standards OWASP Top 10 et les bonnes pratiques de sécurité web.

**Objectifs spécifiques** :
- Identifier les vulnérabilités critiques
- Vérifier la configuration des headers de sécurité
- Valider la configuration SSL/TLS
- Tester les procédures de backup

---

## 🔒 1. Tests OWASP Top 10

### A01:2021 – Broken Access Control
**Tests à effectuer** :
- [ ] Vérifier qu'il n'y a pas d'accès non autorisé aux ressources
- [ ] Tester les tentatives d'accès à des URLs protégées
- [ ] Vérifier les permissions sur les fichiers et répertoires
- [ ] Tester les IDOR (Insecure Direct Object References)

**Outils** : OWASP ZAP, tests manuels

---

### A02:2021 – Cryptographic Failures
**Tests à effectuer** :
- [ ] Vérifier que les données sensibles sont chiffrées en transit (HTTPS)
- [ ] Vérifier qu'aucune donnée sensible n'est stockée en clair
- [ ] Vérifier que les mots de passe sont hashés (si applicable)
- [ ] Vérifier que les tokens/API keys ne sont pas exposés dans le code client

**Outils** : OWASP ZAP, analyse du code

---

### A03:2021 – Injection
**Tests à effectuer** :
- [ ] **SQL Injection** : Tester les formulaires avec des payloads SQL
- [ ] **NoSQL Injection** : Si applicable
- [ ] **Command Injection** : Tester les entrées utilisateur
- [ ] **XSS (Cross-Site Scripting)** :
  - [ ] XSS réfléchi (Reflected)
  - [ ] XSS stocké (Stored)
  - [ ] XSS basé sur DOM (DOM-based)

**Outils** : OWASP ZAP, tests manuels avec payloads

**Exemples de payloads** :
```
<script>alert('XSS')</script>
' OR '1'='1
'; DROP TABLE users; --
```

---

### A04:2021 – Insecure Design
**Tests à effectuer** :
- [ ] Vérifier la conception sécurisée des fonctionnalités
- [ ] Vérifier les contrôles d'accès au niveau métier
- [ ] Vérifier la gestion des erreurs
- [ ] Vérifier la validation des entrées utilisateur

**Outils** : Revue de code, tests fonctionnels

---

### A05:2021 – Security Misconfiguration
**Tests à effectuer** :
- [ ] Vérifier la configuration des serveurs web
- [ ] Vérifier que les versions des dépendances sont à jour
- [ ] Vérifier que les fonctionnalités inutiles sont désactivées
- [ ] Vérifier les messages d'erreur (pas d'informations sensibles)

**Outils** : OWASP ZAP, analyse de configuration

---

### A06:2021 – Vulnerable and Outdated Components
**Tests à effectuer** :
- [ ] Scanner les dépendances avec Snyk ou npm audit
- [ ] Identifier les packages vulnérables
- [ ] Vérifier que toutes les dépendances sont à jour
- [ ] Documenter les vulnérabilités connues

**Outils** : Snyk, npm audit, OWASP Dependency-Check

**Commandes** :
```bash
npm audit
pnpm audit
snyk test
```

---

### A07:2021 – Identification and Authentication Failures
**Tests à effectuer** :
- [ ] Vérifier la robustesse des mots de passe (si applicable)
- [ ] Tester les tentatives de brute force
- [ ] Vérifier la gestion des sessions
- [ ] Tester la déconnexion et l'expiration de session
- [ ] Vérifier la protection contre l'énumération d'utilisateurs

**Outils** : Tests manuels, OWASP ZAP

---

### A08:2021 – Software and Data Integrity Failures
**Tests à effectuer** :
- [ ] Vérifier l'intégrité des données
- [ ] Vérifier la validation des signatures (si applicable)
- [ ] Vérifier la protection contre les attaques de chaîne d'approvisionnement

**Outils** : Tests manuels, analyse de code

---

### A09:2021 – Security Logging and Monitoring Failures
**Tests à effectuer** :
- [ ] Vérifier que les événements de sécurité sont loggés
- [ ] Vérifier que les logs sont accessibles et analysables
- [ ] Vérifier la détection d'activités suspectes
- [ ] Tester la génération d'alertes

**Outils** : Vérification des logs, tests manuels

---

### A10:2021 – Server-Side Request Forgery (SSRF)
**Tests à effectuer** :
- [ ] Tester les fonctionnalités qui font des requêtes externes
- [ ] Vérifier la validation des URLs
- [ ] Tester les tentatives d'accès à des ressources internes

**Outils** : Tests manuels, OWASP ZAP

---

## 🛡️ 2. Tests des headers de sécurité

### Content-Security-Policy (CSP)
- [ ] Vérifier la présence du header CSP
- [ ] Vérifier que la politique est restrictive
- [ ] Tester que les scripts inline sont bloqués (si configuré)
- [ ] Vérifier les sources autorisées

**Vérification** :
```bash
curl -I https://example.com | grep -i content-security-policy
```

---

### Strict-Transport-Security (HSTS)
- [ ] Vérifier la présence du header HSTS
- [ ] Vérifier la valeur `max-age` (recommandé ≥ 31536000)
- [ ] Vérifier `includeSubDomains` si applicable
- [ ] Vérifier `preload` si applicable

**Vérification** :
```bash
curl -I https://example.com | grep -i strict-transport-security
```

---

### X-Frame-Options
- [ ] Vérifier la présence du header
- [ ] Vérifier la valeur (DENY ou SAMEORIGIN)
- [ ] Tester la protection contre le clickjacking

**Vérification** :
```bash
curl -I https://example.com | grep -i x-frame-options
```

---

### X-Content-Type-Options
- [ ] Vérifier la présence du header `nosniff`
- [ ] Vérifier la protection contre le MIME type sniffing

**Vérification** :
```bash
curl -I https://example.com | grep -i x-content-type-options
```

---

### Referrer-Policy
- [ ] Vérifier la présence du header
- [ ] Vérifier la valeur appropriée (strict-origin-when-cross-origin recommandé)

**Vérification** :
```bash
curl -I https://example.com | grep -i referrer-policy
```

---

### Permissions-Policy (anciennement Feature-Policy)
- [ ] Vérifier la présence du header
- [ ] Vérifier les permissions restrictives

**Vérification** :
```bash
curl -I https://example.com | grep -i permissions-policy
```

---

## 🔐 3. Tests SSL/TLS

### Certificat SSL
- [ ] Vérifier que le certificat est valide
- [ ] Vérifier que le certificat n'est pas expiré
- [ ] Vérifier que le certificat correspond au domaine
- [ ] Vérifier la chaîne de certificats

**Outils** : SSL Labs, OpenSSL

**Vérification** :
```bash
openssl s_client -connect example.com:443 -showcerts
```

---

### Configuration HTTPS
- [ ] Vérifier que HTTPS est activé
- [ ] Vérifier la redirection HTTP → HTTPS
- [ ] Vérifier qu'il n'y a pas de mixed content
- [ ] Vérifier les versions de TLS supportées (TLS 1.2 minimum, TLS 1.3 recommandé)

**Outils** : SSL Labs, tests manuels

**Test SSL Labs** :
- URL : https://www.ssllabs.com/ssltest/
- Objectif : Grade A ou A+

---

### Configuration des ciphers
- [ ] Vérifier que seuls les ciphers sécurisés sont activés
- [ ] Vérifier que les ciphers faibles sont désactivés
- [ ] Vérifier l'ordre de préférence des ciphers

**Outils** : SSL Labs, testssl.sh

---

## 💾 4. Tests de backup

### Procédure de backup
- [ ] Vérifier que la procédure de backup existe
- [ ] Vérifier que les backups sont planifiés automatiquement
- [ ] Vérifier la fréquence des backups
- [ ] Vérifier la rétention des backups

---

### Test de restauration
- [ ] Exécuter un test de restauration depuis un backup
- [ ] Vérifier que toutes les données sont restaurées
- [ ] Vérifier l'intégrité des données après restauration
- [ ] Mesurer le temps de restauration (RTO)

---

### Documentation
- [ ] Documenter la procédure de backup
- [ ] Documenter la procédure de restauration
- [ ] Documenter les contacts en cas d'incident
- [ ] Créer un plan de reprise d'activité (PRA)

---

## 📊 5. Tests de données sensibles

### Exposition de données sensibles
- [ ] Vérifier qu'aucune API key n'est dans le code client
- [ ] Vérifier qu'aucun token n'est exposé
- [ ] Vérifier qu'aucun mot de passe n'est en clair
- [ ] Vérifier les fichiers `.env` ne sont pas commités
- [ ] Vérifier que les secrets ne sont pas dans les logs

**Outils** : Analyse de code, grep, truffleHog

---

### Gestion des erreurs
- [ ] Vérifier que les messages d'erreur ne révèlent pas d'informations sensibles
- [ ] Vérifier que les stack traces ne sont pas exposées en production
- [ ] Vérifier la gestion des erreurs 404, 500, etc.

---

## 🛠️ Outils utilisés

### OWASP ZAP
- **Usage** : Scan automatique et manuel
- **Configuration** : Mode baseline ou full scan
- **Rapport** : Générer un rapport HTML/JSON

### Snyk
- **Usage** : Scan des dépendances
- **Configuration** : Intégration dans le projet
- **Rapport** : Liste des vulnérabilités

### SSL Labs
- **Usage** : Test SSL/TLS
- **URL** : https://www.ssllabs.com/ssltest/
- **Objectif** : Grade A ou A+

### Autres outils
- **curl** : Tests de headers
- **OpenSSL** : Tests de certificats
- **npm audit** : Scan des dépendances Node.js

---

## 📝 Rapport de sécurité

### Structure du rapport
À créer dans `test-results/security-scan.md` avec :

1. **Résumé exécutif**
   - Nombre de vulnérabilités trouvées
   - Niveau de risque global
   - Recommandations prioritaires

2. **Détails par catégorie**
   - OWASP Top 10 : Résultats détaillés
   - Headers de sécurité : État de chaque header
   - SSL/TLS : Résultats des tests
   - Backup : État de la procédure

3. **Vulnérabilités identifiées**
   - Liste complète avec :
     - Description
     - Niveau de risque (Critique, Haute, Moyenne, Faible)
     - Impact
     - Recommandations de correction

4. **Plan d'action**
   - Priorisation des corrections
   - Estimation des efforts
   - Planning de correction

---

## ✅ Critères de succès

- [ ] **0 vulnérabilité critique** identifiée
- [ ] **Headers de sécurité** : Tous configurés correctement
- [ ] **SSL/TLS** : Grade A ou A+ sur SSL Labs
- [ ] **Backup** : Procédure testée et documentée
- [ ] **Rapport complet** généré avec plan d'action

---

## 📝 Notes

_Date de dernière mise à jour_ : 2025-12-23  
_Responsable_ : Équipe sécurité / Développement

