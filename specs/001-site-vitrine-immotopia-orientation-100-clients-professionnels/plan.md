# Plan d'implémentation : 001-site-vitrine-immotopia-orientation-100-clients-professionnels

**Date de création** : 2025-12-23  
**Statut** : 📋 Planning

---

## 🎯 Contexte technique

### Stack technique
- **Langage** : TypeScript 5.x
- **Frontend** : Next.js 15 (App Router)
- **UI** : Ant Design (déjà présent dans le projet)
- **Styling** : CSS Modules ou Tailwind CSS (à décider)
- **Validation** : Zod pour les formulaires
- **Monorepo** : pnpm workspaces

### Dépendances existantes
- `packages/ui` : Composants UI réutilisables (Button, FormField)
- `packages/contracts` : Contrats TypeScript + Zod
- `packages/utils` : Utilitaires partagés
- Next.js 15 configuré dans `apps/web`
- Ant Design pour les composants de base

### Contraintes techniques
- **Performance** : Temps de chargement initial < 3 secondes
- **SEO** : Optimisation pour les mots-clés métier immobilier
- **Responsive** : Mobile-first, support tablette et desktop
- **Accessibilité** : Conformité WCAG 2.1 niveau AA minimum
- **Compatibilité navigateurs** : Chrome, Firefox, Safari, Edge (2 dernières versions)
- **Hébergement** : À définir (VPS partagé ou Vercel/Netlify)

---

## ✅ Vérification de conformité constitution

### Principes fondamentaux
- [ ] **TDD** : Tests écrits avant l'implémentation
- [ ] **Library-First** : Code réutilisable dans packages/
- [ ] **Type Safety** : TypeScript strict activé
- [ ] **Code Quality** : Linting et formatting automatiques

### Standards de code
- [ ] Conventions de nommage respectées
- [ ] Structure de dossiers conforme
- [ ] Documentation inline présente

### Architecture
- [ ] Séparation claire API / Web / Packages
- [ ] Pas de dépendances circulaires
- [ ] Contracts définis dans @monorepo/contracts

---

## 📁 Structure du projet

### Nouveaux fichiers à créer

**Structure Next.js 15 (App Router)**
```
apps/web/src/
  ├── app/
  │   ├── page.tsx                    # Page d'accueil
  │   ├── la-solution/
  │   │   ├── page.tsx                # Vue d'ensemble
  │   │   ├── saas-gestion/
  │   │   │   └── page.tsx
  │   │   ├── portail-annonces/
  │   │   │   └── page.tsx
  │   │   └── technologies/
  │   │       └── page.tsx
  │   ├── fonctionnalites/
  │   │   ├── page.tsx
  │   │   ├── gestion-biens/
  │   │   │   └── page.tsx
  │   │   ├── crm-immobilier/
  │   │   │   └── page.tsx
  │   │   └── [autres fonctionnalités]/
  │   ├── pour-qui/
  │   │   ├── page.tsx
  │   │   ├── agences-immobilieres/
  │   │   │   └── page.tsx
  │   │   ├── promoteurs/
  │   │   │   └── page.tsx
  │   │   └── [autres personas]/
  │   ├── tarifs/
  │   │   └── page.tsx
  │   ├── pourquoi-immotopia/
  │   │   └── page.tsx
  │   ├── ressources/
  │   │   ├── page.tsx
  │   │   ├── blog/
  │   │   │   └── page.tsx
  │   │   └── guides/
  │   │       └── page.tsx
  │   └── contact/
  │       └── page.tsx
  ├── components/
  │   ├── layout/
  │   │   ├── Header.tsx
  │   │   ├── Footer.tsx
  │   │   └── Navigation.tsx
  │   ├── forms/
  │   │   └── DemoRequestForm.tsx
  │   ├── sections/
  │   │   ├── Hero.tsx
  │   │   ├── Features.tsx
  │   │   ├── Personas.tsx
  │   │   └── Testimonials.tsx
  │   └── ui/
  │       └── [composants spécifiques]/
  └── lib/
      ├── validation.ts               # Schémas Zod
      └── api.ts                      # Appels API (si nécessaire)
```

**API Routes (si nécessaire pour formulaire)**
```
apps/api/src/
  ├── routes/
  │   └── demo-request.ts             # Endpoint pour formulaire démo
  └── services/
      └── lead-service.ts             # Gestion des leads (CRM intégration)
```

**Contracts**
```
packages/contracts/src/
  └── demo-request.ts                 # Schéma Zod pour formulaire
```

**UI Components**
```
packages/ui/src/
  └── components/
      ├── DemoForm/
      │   └── DemoForm.tsx
      └── ContactCard/
          └── ContactCard.tsx
```

### Fichiers à modifier
- [ ] `apps/web/src/app/layout.tsx` - Ajout Header/Footer globaux
- [ ] `packages/contracts/src/index.ts` - Export nouveau contrat demo-request
- [ ] `packages/ui/src/index.ts` - Export nouveaux composants UI
- [ ] `apps/web/package.json` - Ajout dépendances (React Hook Form, etc.)

---

## 🔬 Phase 0 : Recherche et analyse

### Recherche nécessaire
- [ ] Benchmark concurrentiel (5-10 sites concurrents SaaS immobilier)
- [ ] Analyse des meilleures pratiques SEO pour sites SaaS B2B
- [ ] Étude des patterns de conversion pour formulaires de démo
- [ ] Recherche sur les intégrations CRM/Lead management (HubSpot, Pipedrive, etc.)
- [ ] Analyse des solutions de chat en direct (Intercom, Crisp, etc.)
- [ ] Documentation sur l'optimisation des performances Next.js 15

### Décisions à prendre
- [ ] **Hébergement** : VPS partagé (avec autres sites) ou Vercel/Netlify ?
- [ ] **Styling** : CSS Modules ou Tailwind CSS ?
- [ ] **CMS** : Headless CMS (Strapi, Contentful) ou contenu statique ?
- [ ] **CRM/Lead Management** : Quel outil pour la gestion des leads ?
- [ ] **Analytics** : Google Analytics 4 ou alternative ?
- [ ] **Chat** : Widget de chat (Intercom, Crisp) ou solution propriétaire ?
- [ ] **Multilingue** : FR uniquement ou FR/EN dès le départ ?
- [ ] **Vidéo de démo** : Production interne ou externe ?

### Livrables
- [ ] `research.md` - Synthèse du benchmark et des décisions
- [ ] `contracts/demo-request.ts` - Schéma Zod pour formulaire de démo
- [ ] Architecture de déploiement documentée
- [ ] Choix techniques validés et documentés

---

## 🎨 Phase 1 : Design et architecture

**NOTE IMPORTANTE** : Cette phase correspond à la Phase 1 du cahier des charges (Cadrage, Stratégie & Contenu), qui doit être complétée AVANT le développement.

### Design de l'API (si formulaire backend)
- [ ] Endpoint POST `/api/demo-request` pour recevoir les demandes de démo
- [ ] Schéma de validation Zod pour les données du formulaire
- [ ] Intégration avec CRM/outil de gestion des leads
- [ ] Gestion d'erreurs et retours appropriés
- [ ] Email de confirmation automatique (si nécessaire)

### Design de l'interface
- [ ] **Wireframes** : Structure des pages principales
  - Page d'accueil (hero, présentation personas, CTA)
  - Pages personas (5 pages)
  - Pages fonctionnalités (7 pages)
  - Page tarifs
  - Formulaire de demande de démo
- [ ] **Mockups** : Design visuel avec charte graphique ImmoTopia
- [ ] **Composants UI nécessaires** :
  - Header avec navigation
  - Footer
  - Hero sections
  - Cartes de fonctionnalités
  - Cartes personas
  - Formulaire de démo
  - Tableau de tarification
  - Section témoignages
- [ ] **États et interactions** :
  - États de chargement (formulaire)
  - États de succès/erreur
  - Animations subtiles (scroll, hover)
  - Responsive breakpoints

### Modèle de données
- [ ] **Pas de base de données nécessaire** : Site statique/vitrine
- [ ] **Données du formulaire** : Envoyées directement au CRM/externe
- [ ] **Schéma Zod** pour validation côté client :
  ```typescript
  - Nom (string, required)
  - Email (string, email format, required)
  - Téléphone (string, required)
  - Entreprise (string, optional)
  - Persona (enum: agence | promoteur | syndic | gestionnaire | proprietaire)
  - Message (string, optional)
  ```

### Livrables Phase 1 (Cadrage & Contenu)
- [ ] ✅ Document de cadrage signé
- [ ] ✅ Arborescence et parcours validés
- [ ] ✅ Tous les contenus textuels produits (20-25 pages)
- [ ] ✅ 5 fiches persona complètes
- [ ] ✅ Argumentaires de vente et gestion des objections
- [ ] ✅ Brief créatif pour les contenus visuels
- [ ] ✅ Planning de production des assets visuels

### Livrables Design & Architecture
- [ ] Wireframes validés
- [ ] Mockups finaux approuvés
- [ ] Guide de style (couleurs, typographies, espacements)
- [ ] Composants UI design system documenté
- [ ] API design documenté (si nécessaire)
- [ ] Schémas Zod définis

---

## 🛠️ Phase 2 : Implémentation

### Étape 2.1 : Setup et fondations
- [ ] Configuration du projet Next.js 15 (déjà présent, vérifier/ajuster)
- [ ] Installation des dépendances nécessaires :
  - React Hook Form (formulaires)
  - Zod (validation)
  - Autres dépendances UI si nécessaire
- [ ] Setup des contrats Zod dans `packages/contracts`
  - Schéma `DemoRequestSchema`
- [ ] Structure de base des dossiers et routes Next.js
- [ ] Configuration des métadonnées SEO (metadata API Next.js 15)
- [ ] Configuration du routing et navigation
- [ ] Setup du système de layout (Header/Footer globaux)

### Étape 2.2 : User Stories P1 (Must Have)

**US-001-P1-001 : Page d'accueil professionnelle**
- [ ] Composant Hero avec message clair orienté professionnels
- [ ] Section présentation des 5 personas cibles
- [ ] CTA principal "Demander une démo" visible
- [ ] Optimisation performance (images, lazy loading)
- [ ] Design responsive (mobile, tablette, desktop)
- [ ] Tests E2E du parcours accueil

**US-001-P1-002 : Pages dédiées par persona**
- [ ] 5 pages personas : Agences, Promoteurs, Syndics, Gestionnaires, Propriétaires
- [ ] Structure : Problème → Solution ImmoTopia → Bénéfices
- [ ] Exemples concrets et métriques de résultats
- [ ] CTA "Demander une démo personnalisée" sur chaque page
- [ ] Navigation claire entre les pages
- [ ] Tests pour chaque page persona

**US-001-P1-003 : Présentation des fonctionnalités**
- [ ] Page/section "Fonctionnalités" avec les 7 catégories
- [ ] Pages détaillées pour chaque fonctionnalité (optionnel)
- [ ] Screenshots ou illustrations pour chaque fonctionnalité
- [ ] Liens vers les pages personas pertinentes
- [ ] Filtrage par persona (si nécessaire)

**US-001-P1-004 : Formulaire de demande de démo**
- [ ] Composant `DemoRequestForm` avec React Hook Form + Zod
- [ ] Champs : Nom, Email, Téléphone, Entreprise, Persona, Message
- [ ] Validation côté client (format email, champs requis)
- [ ] Intégration avec endpoint API ou CRM
- [ ] Message de confirmation après envoi
- [ ] Gestion des erreurs (affichage, retry)
- [ ] Tests unitaires du formulaire
- [ ] Tests E2E de soumission

**US-001-P1-005 : Présentation de la solution globale**
- [ ] Page "La Solution" avec vue d'ensemble
- [ ] Sous-pages : SaaS de gestion, Portail d'annonces, Technologies
- [ ] Schéma/visuel de l'architecture (si disponible)
- [ ] Explication des technologies (IA, Mobile Money)
- [ ] Navigation fluide entre les sections

**Tests P1** :
- [ ] Tests unitaires pour tous les composants P1
- [ ] Tests d'intégration pour les formulaires
- [ ] Tests E2E pour les parcours critiques
- [ ] Tests de performance (Lighthouse)

### Étape 2.3 : User Stories P2 (Should Have)

**US-001-P2-001 : Page de tarification**
- [ ] Page "Tarifs" avec tableau comparatif des formules
- [ ] Prix clairs et transparence
- [ ] CTA "Essayer gratuitement" ou "Demander un devis"
- [ ] FAQ tarifaire
- [ ] Possibilité de contact commercial pour devis personnalisé

**US-001-P2-002 : Section "Pourquoi ImmoTopia"**
- [ ] Page "Pourquoi ImmoTopia"
- [ ] Liste des avantages compétitifs
- [ ] Témoignages clients (si disponibles)
- [ ] Cas d'usage réussis
- [ ] Comparatif avant/après ImmoTopia
- [ ] Métriques de performance

**US-001-P2-003 : Blog / Ressources**
- [ ] Structure : Blog, Guides pratiques, Actualités
- [ ] Page listing des articles
- [ ] Pages individuelles d'articles
- [ ] Guides téléchargeables (PDF) si nécessaire
- [ ] Filtrage par catégorie/persona
- [ ] Partage social des articles

**US-001-P2-004 : Page de contact alternative**
- [ ] Page "Contact" avec informations de contact
- [ ] Formulaire de contact général (non démo)
- [ ] Carte Google Maps (si localisation physique)
- [ ] Horaires d'ouverture
- [ ] Temps de réponse indicatif

**Tests P2** :
- [ ] Tests pour les nouvelles pages P2
- [ ] Tests d'intégration si nécessaire

### Étape 2.4 : User Stories P3 (Nice to Have)

**US-001-P3-001 : Vidéo de démonstration**
- [ ] Intégration vidéo sur la page d'accueil ou dédiée
- [ ] Player vidéo optimisé (lazy loading)
- [ ] Sous-titres disponibles (FR/EN)
- [ ] Hébergement optimisé (YouTube, Vimeo, ou CDN)

**US-001-P3-002 : Chat en direct**
- [ ] Widget de chat visible sur toutes les pages
- [ ] Intégration avec outil de chat (Intercom, Crisp, etc.)
- [ ] Disponibilité horaire affichée
- [ ] Réponses automatiques (bot) en dehors des heures

**US-001-P3-003 : Témoignages clients**
- [ ] Section dédiée aux témoignages
- [ ] Témoignages par persona (si possible)
- [ ] Photos, noms, entreprises
- [ ] Vidéos témoignages (si disponibles)
- [ ] Mise en avant sur la page d'accueil

### Étape 2.5 : Polish et optimisation
- [ ] **Refactoring** : Révision du code, optimisation des composants
- [ ] **Optimisation performance** :
  - Images optimisées (WebP, lazy loading)
  - Code splitting
  - Minimisation du bundle JavaScript
  - Cache stratégique
- [ ] **SEO** :
  - Métadonnées optimisées pour toutes les pages
  - Sitemap.xml
  - Robots.txt
  - Schema.org markup si nécessaire
- [ ] **Accessibilité** :
  - Navigation au clavier
  - Contrastes de couleurs (WCAG AA)
  - Attributs ARIA
  - Tests avec lecteurs d'écran
- [ ] **Analytics** : Intégration Google Analytics 4
- [ ] **Documentation finale** : README, guide de déploiement

---

## 🧪 Tests

### Tests à écrire

**Tests unitaires**
- [ ] Tests pour composants de formulaire (`DemoRequestForm`)
- [ ] Tests pour composants de navigation (`Header`, `Footer`)
- [ ] Tests pour composants de sections (`Hero`, `Features`, `Personas`)
- [ ] Tests pour utilitaires de validation (Zod schemas)
- [ ] Tests pour helpers et utilitaires

**Tests d'intégration**
- [ ] Test d'intégration formulaire → API/CRM
- [ ] Test d'intégration analytics (tracking des événements)
- [ ] Test de navigation complète entre pages
- [ ] Test de responsive design sur différents devices

**Tests E2E**
- [ ] E2E : Parcours Agence (Accueil → Persona → Fonctionnalités → Démo)
- [ ] E2E : Parcours Promoteur (Accueil → Solution → Persona → Tarifs → Démo)
- [ ] E2E : Soumission formulaire de démo (succès)
- [ ] E2E : Soumission formulaire avec erreurs (validation)
- [ ] E2E : Navigation mobile complète
- [ ] E2E : Responsive design (mobile, tablette, desktop)

**Tests de performance**
- [ ] Audit Lighthouse (Performance, SEO, Accessibility)
  - Score Performance ≥ 90
  - Score SEO ≥ 90
  - Score Accessibility ≥ 90
- [ ] Test de temps de chargement (< 3 secondes)
- [ ] Optimisation des images et assets
- [ ] Test de charge si formulaire backend

### Couverture cible
- **Minimum 80% de couverture de code** pour les composants critiques
- **100% des scénarios critiques testés** (formulaire, navigation, CTAs)
- **Tests E2E** pour tous les parcours utilisateurs principaux

---

## 📦 Déploiement

### Prérequis
- [ ] Variables d'environnement configurées :
  - URL de l'API (si formulaire backend)
  - Clés API CRM (HubSpot, Pipedrive, etc.)
  - Clés API Analytics (Google Analytics)
  - Clés API Chat (Intercom, Crisp, etc.)
  - URLs de production
- [ ] Build production réussi
- [ ] Tests passent en environnement de staging

### Checklist de déploiement

**Avant déploiement**
- [ ] ✅ Tous les tests passent
- [ ] ✅ Linting OK (`pnpm lint`)
- [ ] ✅ Type checking OK (`pnpm type-check`)
- [ ] ✅ Build production réussi (`pnpm build`)
- [ ] ✅ Audit Lighthouse local (scores ≥ 90)
- [ ] ✅ Tests E2E passent
- [ ] ✅ Revue de code effectuée

**Configuration VPS (si choix VPS)**
- [ ] Configuration Nginx pour le domaine
- [ ] Configuration SSL/TLS (HTTPS)
- [ ] Configuration du reverse proxy (si nécessaire)
- [ ] Vérification des ports et sécurité
- [ ] Configuration du monitoring
- [ ] Backup et stratégie de rollback

**Configuration Vercel/Netlify (si choix cloud)**
- [ ] Configuration du projet
- [ ] Variables d'environnement configurées
- [ ] Configuration du domaine personnalisé
- [ ] Configuration SSL automatique
- [ ] Configuration des redirects/routes

**Post-déploiement**
- [ ] Vérification du site en production
- [ ] Tests de bout en bout sur production
- [ ] Vérification Analytics (données collectées)
- [ ] Vérification formulaire (test d'envoi)
- [ ] Vérification performance (Lighthouse production)
- [ ] Monitoring des erreurs (Sentry ou équivalent)

**Documentation**
- [ ] Guide de déploiement mis à jour
- [ ] Procédure de rollback documentée
- [ ] Contacts et procédures d'urgence

---

## 📝 Notes d'implémentation

### Priorités et exclusions

**Priorité absolue** : 
- Phase 1 (Cadrage, Stratégie & Contenu) doit être complétée AVANT le développement
- Focus sur les User Stories P1 (Must Have) en premier
- Taux de conversion ≥ 5% est l'objectif principal

**Exclusions formelles** :
- ❌ Pas de cible investisseurs
- ❌ Pas de section investisseurs
- ❌ Pas de contenu financier

### Dépendances externes

**Assets nécessaires** (à collecter pendant Phase 1) :
- Logo et charte graphique ImmoTopia
- Screenshots de la plateforme SaaS (6-8)
- Illustrations des fonctionnalités (8-10)
- Icônes métiers (15-20)
- Vidéo de démo (optionnel, 2min)
- Témoignages clients (si disponibles)

**Contenus nécessaires** :
- Tous les textes marketing (20-25 pages A4)
- 5 fiches persona complètes
- Argumentaires de vente
- Gestion des objections (10 objections + réponses)

### Risques et mitigations

**Risque** : Intégration CRM complexe  
**Mitigation** : Décider tôt du CRM, tester l'intégration en amont

**Risque** : Performance sur mobile  
**Mitigation** : Tests mobiles dès le début, optimisation continue

**Risque** : Contenus non prêts au démarrage dev  
**Mitigation** : Phase 1 doit être complétée avant Phase 2

**Risque** : Hébergement VPS partagé (conflits avec autres sites)  
**Mitigation** : [[memory:6061939]] Vérifier configuration Nginx, ports isolés

### Questions techniques ouvertes

- [ ] Comment gérer le multilingue (FR/EN) si nécessaire ?
- [ ] Quelle stratégie de cache pour les images/assets ?
- [ ] Comment optimiser le SEO pour chaque page persona ?
- [ ] Quelle stratégie de tracking des conversions ?

---

## 🔗 Références

- [Lien vers spec.md](./spec.md)
- [Lien vers constitution](../../.specify/memory/constitution.md)

