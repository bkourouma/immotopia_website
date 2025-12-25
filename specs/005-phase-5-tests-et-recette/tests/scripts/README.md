# Scripts de test - Phase 5

Ce dossier contient les scripts de test automatisés pour la Phase 5.

---

## 📋 Scripts disponibles

### load-test.js
Script de test de charge avec k6.

**Prérequis** :
- Installer k6 : https://k6.io/docs/getting-started/installation/
- Windows : `choco install k6` ou télécharger depuis le site officiel

**Usage** :
```bash
# Test avec URL par défaut (staging)
k6 run load-test.js

# Test avec URL personnalisée
k6 run --env BASE_URL=https://example.com load-test.js

# Test avec options personnalisées
k6 run --vus 100 --duration 30s load-test.js
```

**Objectifs** :
- 1000 visiteurs simultanés
- Temps de réponse < 2s (95e percentile)
- Taux d'erreur < 1%

---

### check-links.js
Script de vérification des liens (Node.js).

**Prérequis** :
- Node.js installé

**Usage** :
```bash
# Vérifier les liens avec URL par défaut
node check-links.js

# Vérifier les liens d'une URL spécifique
node check-links.js https://example.com
```

**Fonctionnalités** :
- Vérifie toutes les pages principales
- Identifie les liens cassés (404, erreurs)
- Génère un rapport de synthèse

---

### check-headers.js
Script de vérification des headers de sécurité (Node.js).

**Prérequis** :
- Node.js installé

**Usage** :
```bash
# Vérifier les headers avec URL par défaut
node check-headers.js

# Vérifier les headers d'une URL spécifique
node check-headers.js https://example.com
```

**Fonctionnalités** :
- Vérifie la présence des headers de sécurité
- Valide la configuration (HSTS, CSP, etc.)
- Identifie les problèmes de configuration

**Headers vérifiés** :
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

---

## 🔧 Installation des outils

### k6 (Test de charge)

**Windows** :
```powershell
# Via Chocolatey
choco install k6

# Ou télécharger depuis
# https://k6.io/docs/getting-started/installation/
```

**Vérification** :
```bash
k6 version
```

### OWASP ZAP (Scan de sécurité)

**Windows** :
- Télécharger depuis : https://www.zaproxy.org/download/
- Installer l'application
- Ou utiliser Docker : `docker pull owasp/zap2docker-stable`

**Usage** :
```bash
# Mode baseline (automatique)
zap-baseline.py -t https://staging.immotopia.com

# Mode API (pour intégration CI/CD)
zap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' https://staging.immotopia.com
```

### Lighthouse CI

**Installation** :
```bash
npm install -g @lhci/cli
```

**Usage** :
```bash
# Test unique
lhci autorun --collect.url=https://staging.immotopia.com

# Configuration avec fichier lighthouserc.js
lhci autorun
```

### Node.js (pour scripts utilitaires)

**Windows** :
- Télécharger depuis : https://nodejs.org/
- Installer la version LTS

**Vérification** :
```bash
node --version
npm --version
```

---

## 📝 Configuration

### Variables d'environnement

Créer un fichier `.env.test` (optionnel) :
```env
BASE_URL=https://staging.immotopia.com
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🚀 Exécution des tests

### Tests de charge
```bash
cd specs/005-phase-5-tests-et-recette/tests/scripts
k6 run load-test.js
```

### Vérification des liens
```bash
cd specs/005-phase-5-tests-et-recette/tests/scripts
node check-links.js https://staging.immotopia.com
```

### Vérification des headers
```bash
cd specs/005-phase-5-tests-et-recette/tests/scripts
node check-headers.js https://staging.immotopia.com
```

### Scan de sécurité
```bash
# Avec OWASP ZAP
zap-baseline.py -t https://staging.immotopia.com -r security-report.html
```

### Tests Lighthouse
```bash
# Via Chrome DevTools (manuel)
# Ouvrir Chrome DevTools > Lighthouse > Run

# Via CLI
lighthouse https://staging.immotopia.com --output html --output-path ./lighthouse-report.html
```

---

## 📊 Résultats

Les résultats des tests doivent être documentés dans :
- `test-results/load-tests.md` : Résultats des tests de charge
- `test-results/security-scan.md` : Résultats du scan de sécurité
- `test-results/functional-tests.md` : Résultats des tests fonctionnels

Utilisez les templates fournis dans `test-results/` pour documenter les résultats.

---

## 🔄 Intégration CI/CD

### GitHub Actions (exemple)

```yaml
name: Tests Phase 5

on:
  schedule:
    - cron: '0 0 * * *' # Quotidien
  workflow_dispatch:

jobs:
  test-links:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: node tests/scripts/check-links.js
      
  test-headers:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: node tests/scripts/check-headers.js
```

---

## 📝 Notes

_Date de dernière mise à jour_ : 2025-12-23
