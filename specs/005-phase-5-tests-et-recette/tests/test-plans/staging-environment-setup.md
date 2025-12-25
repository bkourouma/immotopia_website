# Configuration environnement de staging - Phase 5

**Date de création** : 2025-12-23  
**Statut** : 📋 À configurer

---

## 🎯 Objectifs

Configurer un environnement de staging identique à la production pour effectuer tous les tests avant la mise en production.

---

## ✅ Checklist de vérification

### Environnement serveur
- [ ] Environnement de staging disponible
- [ ] URL de staging : `https://staging.immotopia.com` (ou équivalent)
- [ ] Environnement identique à la production (même stack, même configuration)
- [ ] Base de données de staging séparée de la production
- [ ] Certificat SSL valide sur staging

### Variables d'environnement
- [ ] Variables d'environnement configurées pour staging
- [ ] `NODE_ENV=staging` ou `NODE_ENV=production` (selon config)
- [ ] `NEXT_PUBLIC_APP_URL` pointant vers l'URL de staging
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` configuré (environnement de test si nécessaire)
- [ ] Variables CRM configurées (environnement de test si nécessaire)
- [ ] Variables d'email configurées (environnement de test si nécessaire)

### Accès et permissions
- [ ] Accès SSH au serveur de staging
- [ ] Accès à la base de données de staging
- [ ] Accès aux logs de staging
- [ ] Accès à Google Analytics (environnement de test si configuré)

### Configuration analytics
- [ ] Google Analytics configuré pour staging
- [ ] Environnement de test séparé dans GA4 (recommandé)
- [ ] Événements trackés configurés
- [ ] Accès aux rapports GA4

### Build et déploiement
- [ ] Build de staging fonctionne
- [ ] Déploiement sur staging testé
- [ ] Vérifier que le site est accessible
- [ ] Vérifier que toutes les pages se chargent

---

## 📝 Configuration recommandée

### Variables d'environnement staging

**Fichier** : `apps/web/.env.staging` (ou variables serveur)

```env
# Application
NEXT_PUBLIC_APP_URL=https://staging.immotopia.com
NEXT_PUBLIC_APP_NAME=ImmoTopia (Staging)
NODE_ENV=staging

# API Configuration
API_URL=https://api-staging.immotopia.com
API_KEY=[API_KEY_STAGING]

# CRM / Lead Management Integration
CRM_PROVIDER=hubspot
CRM_API_KEY=[CRM_API_KEY_STAGING]
CRM_PORTAL_ID=[CRM_PORTAL_ID_STAGING]

# Analytics (environnement de test séparé)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX-STAGING

# Email Service
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=[EMAIL_API_KEY_STAGING]
EMAIL_FROM=noreply-staging@immotopia.com
EMAIL_TO=contact-staging@immotopia.com

# Contact Information
CONTACT_EMAIL=contact-staging@immotopia.com
```

---

## 🔧 Commandes de vérification

### Vérifier l'accès au site
```bash
curl -I https://staging.immotopia.com
```

### Vérifier le certificat SSL
```bash
openssl s_client -connect staging.immotopia.com:443 -showcerts
```

### Vérifier les headers de sécurité
```bash
curl -I https://staging.immotopia.com | grep -i "content-security-policy\|strict-transport-security\|x-frame-options"
```

### Vérifier le build
```bash
cd apps/web
pnpm build
```

---

## ⚠️ Points d'attention

### VPS partagé
⚠️ **ATTENTION** : Le VPS est partagé avec d'autres applications (engage-360.net, etc.)

**Actions à prendre** :
- [ ] Vérifier qu'aucune configuration ne peut impacter les autres sites
- [ ] Utiliser des ports dédiés si nécessaire
- [ ] Vérifier les configurations Nginx pour éviter les conflits
- [ ] Tester que les autres sites fonctionnent toujours après déploiement

### Base de données
- [ ] Base de données de staging séparée de la production
- [ ] Données de test uniquement (pas de données réelles)
- [ ] Backup de la base de staging avant tests

### Analytics
- [ ] Environnement de test séparé dans Google Analytics (recommandé)
- [ ] Ou utiliser un filtre pour exclure le trafic de staging des rapports production

---

## 📊 Vérification finale

Avant de commencer les tests, vérifier :

- [ ] Site accessible sur l'URL de staging
- [ ] Toutes les pages se chargent correctement
- [ ] Formulaires fonctionnent
- [ ] Analytics trackent les événements
- [ ] Pas d'erreurs dans la console
- [ ] Certificat SSL valide
- [ ] Headers de sécurité présents

---

## 📝 Notes

_Date de dernière mise à jour_ : 2025-12-23  
_Responsable_ : Équipe DevOps / Développement

