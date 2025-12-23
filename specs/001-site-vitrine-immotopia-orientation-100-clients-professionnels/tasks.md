# Tâches d'implémentation : 001-site-vitrine-immotopia-orientation-100-clients-professionnels

**Date de création** : 2025-12-23  
**Statut** : 📝 En attente

---

## 📊 Vue d'ensemble

**Total de tâches** : 85+  
**Tâches P1** : ~40  
**Tâches P2** : ~25  
**Tâches P3** : ~15  
**Tâches Polish** : ~5

---

## 🔧 Phase 0 : Setup et fondations

### T-001-000 : Setup initial du projet

#### T-001-000-001 : Configuration des dépendances
- [x] Installer React Hook Form (`react-hook-form`)
- [x] Installer Zod pour la validation (`zod`) - Déjà présent
- [x] Installer `@hookform/resolvers` pour intégration Zod
- [x] Vérifier/ajuster les dépendances Ant Design - Déjà présent
- [ ] Installer dépendances de développement (testing, etc.) - À faire plus tard
- **Fichiers concernés** : `apps/web/package.json`
- **Dépendances** : Aucune
- **Estimation** : 30min
- **Complété le** : 2025-12-23

#### T-001-000-002 : Configuration des variables d'environnement
- [x] Créer fichier `.env.example` avec toutes les variables nécessaires (`env.example.txt`)
- [x] Documenter les variables d'environnement (API URLs, CRM keys, etc.)
- [x] Configurer les variables pour dev/staging/prod
- **Fichiers concernés** : `apps/web/src/lib/env.example.txt`
- **Dépendances** : Aucune
- **Estimation** : 20min
- **Complété le** : 2025-12-23

#### T-001-000-003 : Configuration SEO et métadonnées
- [x] Configurer le système de métadonnées Next.js 15
- [x] Créer helper pour génération de métadonnées SEO
- [x] Configurer sitemap.xml généré automatiquement
- [x] Configurer robots.txt
- **Fichiers concernés** : `apps/web/src/lib/seo.ts`, `apps/web/src/app/sitemap.ts`, `apps/web/public/robots.txt`
- **Dépendances** : T-001-000-001
- **Estimation** : 1h
- **Complété le** : 2025-12-23

#### T-001-000-004 : Structure de base des dossiers
- [x] Créer structure `apps/web/src/components/layout/`
- [x] Créer structure `apps/web/src/components/forms/`
- [x] Créer structure `apps/web/src/components/sections/`
- [x] Créer structure `apps/web/src/lib/`
- [x] Créer structure des routes Next.js App Router (via App Router)
- [x] Créer fichiers index.ts pour exports organisés
- **Fichiers concernés** : Dossiers dans `apps/web/src/`
- **Dépendances** : Aucune
- **Estimation** : 30min
- **Complété le** : 2025-12-23

---

## 🎯 User Stories P1 - Priorité Critique

### US-001-P1-001 : Page d'accueil professionnelle

#### T-001-P1-001-001 : Composant Hero
- [ ] Créer composant `Hero.tsx` dans `apps/web/src/components/sections/`
- [ ] Intégrer message clair orienté professionnels
- [ ] Ajouter CTA principal "Demander une démo"
- [ ] Styling responsive (mobile, tablette, desktop)
- [ ] Intégration avec Ant Design
- **Fichiers concernés** : `apps/web/src/components/sections/Hero.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-001-P1-001-002

#### T-001-P1-001-002 : Section présentation des personas
- [ ] Créer composant `PersonasPreview.tsx`
- [ ] Afficher les 5 personas cibles avec cartes
- [ ] Ajouter liens vers pages personas détaillées
- [ ] Styling responsive
- **Fichiers concernés** : `apps/web/src/components/sections/PersonasPreview.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-001-P1-001-001

#### T-001-P1-001-003 : Layout Header et Navigation
- [ ] Créer composant `Header.tsx` dans `apps/web/src/components/layout/`
- [ ] Créer composant `Navigation.tsx` avec menu
- [ ] Intégrer logo ImmoTopia
- [ ] Navigation responsive avec menu mobile
- [ ] CTA dans le header
- **Fichiers concernés** : `apps/web/src/components/layout/Header.tsx`, `Navigation.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 3h

#### T-001-P1-001-004 : Layout Footer
- [ ] Créer composant `Footer.tsx` dans `apps/web/src/components/layout/`
- [ ] Ajouter liens navigation, contact, réseaux sociaux
- [ ] Ajouter informations légales
- [ ] Styling responsive
- **Fichiers concernés** : `apps/web/src/components/layout/Footer.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 2h

#### T-001-P1-001-005 : Page d'accueil complète
- [ ] Créer/modifier `apps/web/src/app/page.tsx`
- [ ] Intégrer Hero, PersonasPreview
- [ ] Ajouter autres sections (features preview, CTA final)
- [ ] Intégrer Header et Footer via layout
- [ ] Optimisation images (lazy loading, WebP)
- **Fichiers concernés** : `apps/web/src/app/page.tsx`, `layout.tsx`
- **Dépendances** : T-001-P1-001-001, T-001-P1-001-002, T-001-P1-001-003, T-001-P1-001-004
- **Estimation** : 2h

#### T-001-P1-001-006 : Tests page d'accueil
- [ ] Tests unitaires Hero component
- [ ] Tests unitaires PersonasPreview component
- [ ] Tests E2E : Parcours accueil → CTA démo
- [ ] Tests responsive (mobile, tablette, desktop)
- [ ] Test de performance (Lighthouse audit)
- **Fichiers concernés** : Tests dans `apps/web/src/__tests__/` ou `apps/web/tests/`
- **Dépendances** : T-001-P1-001-005
- **Estimation** : 2h

---

### US-001-P1-002 : Pages dédiées par persona

#### T-001-P1-002-001 : Schéma de données personas
- [ ] Créer type TypeScript pour données persona
- [ ] Créer données statiques pour les 5 personas (mock data)
- [ ] Structure : profil, problèmes, solutions, bénéfices, métriques
- **Fichiers concernés** : `apps/web/src/lib/personas.ts` ou `data/personas.ts`
- **Dépendances** : T-001-000-004
- **Estimation** : 1h

#### T-001-P1-002-002 : Template de page persona
- [ ] Créer composant réutilisable `PersonaPageTemplate.tsx`
- [ ] Structure : Hero persona → Problèmes → Solutions → Bénéfices → CTA
- [ ] Styling et mise en page
- **Fichiers concernés** : `apps/web/src/components/templates/PersonaPageTemplate.tsx`
- **Dépendances** : T-001-P1-002-001
- **Estimation** : 3h

#### T-001-P1-002-003 : Page Agences immobilières
- [ ] Créer route `apps/web/src/app/pour-qui/agences-immobilieres/page.tsx`
- [ ] Intégrer template avec données agences
- [ ] Métadonnées SEO spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/agences-immobilieres/page.tsx`
- **Dépendances** : T-001-P1-002-002
- **Estimation** : 1h

#### T-001-P1-002-004 : Page Promoteurs immobiliers
- [ ] Créer route `apps/web/src/app/pour-qui/promoteurs/page.tsx`
- [ ] Intégrer template avec données promoteurs
- [ ] Métadonnées SEO spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/promoteurs/page.tsx`
- **Dépendances** : T-001-P1-002-002
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec autres pages personas

#### T-001-P1-002-005 : Page Syndics de copropriété
- [ ] Créer route `apps/web/src/app/pour-qui/syndics/page.tsx`
- [ ] Intégrer template avec données syndics
- [ ] Métadonnées SEO spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/syndics/page.tsx`
- **Dépendances** : T-001-P1-002-002
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec autres pages personas

#### T-001-P1-002-006 : Page Gestionnaires locatifs
- [ ] Créer route `apps/web/src/app/pour-qui/gestionnaires/page.tsx`
- [ ] Intégrer template avec données gestionnaires
- [ ] Métadonnées SEO spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/gestionnaires/page.tsx`
- **Dépendances** : T-001-P1-002-002
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec autres pages personas

#### T-001-P1-002-007 : Page Propriétaires bailleurs
- [ ] Créer route `apps/web/src/app/pour-qui/proprietaires/page.tsx`
- [ ] Intégrer template avec données propriétaires
- [ ] Métadonnées SEO spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/proprietaires/page.tsx`
- **Dépendances** : T-001-P1-002-002
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec autres pages personas

#### T-001-P1-002-008 : Page listing "Pour Qui"
- [ ] Créer route `apps/web/src/app/pour-qui/page.tsx`
- [ ] Page de listing avec les 5 personas
- [ ] Navigation vers pages détaillées
- **Fichiers concernés** : `apps/web/src/app/pour-qui/page.tsx`
- **Dépendances** : T-001-P1-002-003 à T-001-P1-002-007
- **Estimation** : 1h

#### T-001-P1-002-009 : Tests pages personas
- [ ] Tests unitaires PersonaPageTemplate
- [ ] Tests E2E : Navigation accueil → persona → CTA
- [ ] Tests pour chaque page persona
- **Fichiers concernés** : Tests
- **Dépendances** : T-001-P1-002-008
- **Estimation** : 2h

---

### US-001-P1-003 : Présentation des fonctionnalités

#### T-001-P1-003-001 : Schéma de données fonctionnalités
- [ ] Créer type TypeScript pour données fonctionnalité
- [ ] Créer données statiques pour les 7 fonctionnalités
- [ ] Structure : titre, description, icône, screenshots, liens personas
- **Fichiers concernés** : `apps/web/src/lib/features.ts`
- **Dépendances** : T-001-000-004
- **Estimation** : 1h

#### T-001-P1-003-002 : Composant FeatureCard
- [ ] Créer composant `FeatureCard.tsx` réutilisable
- [ ] Afficher icône, titre, description
- [ ] Support pour images/screenshots
- [ ] Styling responsive
- **Fichiers concernés** : `apps/web/src/components/sections/FeatureCard.tsx`
- **Dépendances** : T-001-P1-003-001
- **Estimation** : 2h

#### T-001-P1-003-003 : Page listing fonctionnalités
- [ ] Créer route `apps/web/src/app/fonctionnalites/page.tsx`
- [ ] Afficher les 7 fonctionnalités en grille
- [ ] Filtrage par persona (optionnel)
- [ ] Navigation vers pages détaillées
- **Fichiers concernés** : `apps/web/src/app/fonctionnalites/page.tsx`
- **Dépendances** : T-001-P1-003-002
- **Estimation** : 2h

#### T-001-P1-003-004 : Pages détaillées fonctionnalités (optionnel)
- [ ] Créer template `FeatureDetailTemplate.tsx`
- [ ] Créer routes pour chaque fonctionnalité
- [ ] Intégrer screenshots, descriptions détaillées
- [ ] Liens vers personas pertinents
- **Fichiers concernés** : `apps/web/src/app/fonctionnalites/[feature]/page.tsx`
- **Dépendances** : T-001-P1-003-003
- **Estimation** : 4h (7 pages × ~30min)
- **[P]** : Pages peuvent être créées en parallèle

#### T-001-P1-003-005 : Tests fonctionnalités
- [ ] Tests unitaires FeatureCard
- [ ] Tests E2E : Navigation fonctionnalités
- **Fichiers concernés** : Tests
- **Dépendances** : T-001-P1-003-003
- **Estimation** : 1h

---

### US-001-P1-004 : Formulaire de demande de démo

#### T-001-P1-004-001 : Schéma Zod pour validation
- [ ] Créer schéma Zod `DemoRequestSchema` dans `packages/contracts/src/`
- [ ] Validation : Nom, Email, Téléphone, Entreprise, Persona, Message
- [ ] Messages d'erreur personnalisés
- [ ] Export du type TypeScript depuis le schéma
- **Fichiers concernés** : `packages/contracts/src/demo-request.ts`
- **Dépendances** : T-001-000-001
- **Estimation** : 1h

#### T-001-P1-004-002 : Composant DemoRequestForm
- [ ] Créer composant `DemoRequestForm.tsx` avec React Hook Form
- [ ] Intégrer validation Zod via `@hookform/resolvers`
- [ ] Champs : Nom, Email, Téléphone, Entreprise, Persona (select), Message
- [ ] États de chargement, succès, erreur
- [ ] Styling avec Ant Design Form
- **Fichiers concernés** : `apps/web/src/components/forms/DemoRequestForm.tsx`
- **Dépendances** : T-001-P1-004-001
- **Estimation** : 3h

#### T-001-P1-004-003 : Endpoint API (si backend nécessaire)
- [ ] Créer route API `apps/api/src/routes/demo-request.ts`
- [ ] Validation avec schéma Zod
- [ ] Envoi vers CRM/lead management (HubSpot, Pipedrive, etc.)
- [ ] Email de confirmation (optionnel)
- [ ] Gestion d'erreurs
- **Fichiers concernés** : `apps/api/src/routes/demo-request.ts`, `services/lead-service.ts`
- **Dépendances** : T-001-P1-004-001
- **Estimation** : 3h

#### T-001-P1-004-004 : Intégration formulaire dans les pages
- [ ] Intégrer DemoRequestForm dans la page d'accueil
- [ ] Intégrer dans toutes les pages personas
- [ ] Modal ou page dédiée selon UX
- **Fichiers concernés** : Pages avec formulaire
- **Dépendances** : T-001-P1-004-002
- **Estimation** : 2h

#### T-001-P1-004-005 : Intégration CRM/Lead Management
- [ ] Configurer clés API CRM
- [ ] Implémenter service d'envoi vers CRM
- [ ] Gérer mapping des champs
- [ ] Tests d'intégration avec CRM de dev
- **Fichiers concernés** : `apps/api/src/services/lead-service.ts` ou `apps/web/src/lib/lead-api.ts`
- **Dépendances** : T-001-P1-004-003
- **Estimation** : 2h

#### T-001-P1-004-006 : Tests formulaire
- [ ] Tests unitaires DemoRequestForm (validation, soumission)
- [ ] Tests d'intégration formulaire → API
- [ ] Tests E2E : Remplissage et soumission formulaire
- [ ] Tests validation (champs requis, format email, etc.)
- [ ] Tests gestion erreurs
- **Fichiers concernés** : Tests
- **Dépendances** : T-001-P1-004-004, T-001-P1-004-005
- **Estimation** : 3h

---

### US-001-P1-005 : Présentation de la solution globale

#### T-001-P1-005-001 : Page "La Solution" - Vue d'ensemble
- [ ] Créer route `apps/web/src/app/la-solution/page.tsx`
- [ ] Présentation de l'écosystème ImmoTopia
- [ ] Schéma visuel de l'architecture (si disponible)
- [ ] Liens vers sous-pages
- **Fichiers concernés** : `apps/web/src/app/la-solution/page.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 2h

#### T-001-P1-005-002 : Page "SaaS de gestion"
- [ ] Créer route `apps/web/src/app/la-solution/saas-gestion/page.tsx`
- [ ] Description détaillée du SaaS
- [ ] Fonctionnalités principales
- **Fichiers concernés** : `apps/web/src/app/la-solution/saas-gestion/page.tsx`
- **Dépendances** : T-001-P1-005-001
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec autres sous-pages

#### T-001-P1-005-003 : Page "Portail d'annonces"
- [ ] Créer route `apps/web/src/app/la-solution/portail-annonces/page.tsx`
- [ ] Description du portail d'annonces
- [ ] Avantages et intégration
- **Fichiers concernés** : `apps/web/src/app/la-solution/portail-annonces/page.tsx`
- **Dépendances** : T-001-P1-005-001
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec autres sous-pages

#### T-001-P1-005-004 : Page "Technologies"
- [ ] Créer route `apps/web/src/app/la-solution/technologies/page.tsx`
- [ ] Présentation IA et automatisation
- [ ] Présentation Mobile Money
- [ ] Autres technologies
- **Fichiers concernés** : `apps/web/src/app/la-solution/technologies/page.tsx`
- **Dépendances** : T-001-P1-005-001
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec autres sous-pages

#### T-001-P1-005-005 : Tests solution
- [ ] Tests E2E : Navigation solution complète
- **Fichiers concernés** : Tests
- **Dépendances** : T-001-P1-005-002, T-001-P1-005-003, T-001-P1-005-004
- **Estimation** : 1h

---

## 🎯 User Stories P2 - Priorité Haute

### US-001-P2-001 : Page de tarification

#### T-001-P2-001-001 : Composant PricingTable
- [ ] Créer composant `PricingTable.tsx`
- [ ] Afficher tableau comparatif des formules
- [ ] Prix, fonctionnalités incluses
- [ ] CTAs par formule
- **Fichiers concernés** : `apps/web/src/components/sections/PricingTable.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 3h

#### T-001-P2-001-002 : Page tarifs
- [ ] Créer route `apps/web/src/app/tarifs/page.tsx`
- [ ] Intégrer PricingTable
- [ ] Ajouter FAQ tarifaire
- [ ] CTA contact commercial pour devis personnalisé
- **Fichiers concernés** : `apps/web/src/app/tarifs/page.tsx`
- **Dépendances** : T-001-P2-001-001
- **Estimation** : 2h

#### T-001-P2-001-003 : Tests tarifs
- [ ] Tests unitaires PricingTable
- [ ] Tests E2E : Page tarifs
- **Fichiers concernés** : Tests
- **Dépendances** : T-001-P2-001-002
- **Estimation** : 1h

---

### US-001-P2-002 : Section "Pourquoi ImmoTopia"

#### T-001-P2-002-001 : Page "Pourquoi ImmoTopia"
- [ ] Créer route `apps/web/src/app/pourquoi-immotopia/page.tsx`
- [ ] Liste des avantages compétitifs
- [ ] Comparatif avant/après ImmoTopia
- [ ] Métriques de performance
- [ ] Section témoignages (si disponibles)
- **Fichiers concernés** : `apps/web/src/app/pourquoi-immotopia/page.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 3h

#### T-001-P2-002-002 : Composant Testimonials (si disponible)
- [ ] Créer composant `Testimonials.tsx`
- [ ] Affichage témoignages avec photos, noms, entreprises
- [ ] Filtrage par persona (optionnel)
- **Fichiers concernés** : `apps/web/src/components/sections/Testimonials.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 2h
- **[P]** : Optionnel selon disponibilité des témoignages

#### T-001-P2-002-003 : Tests pourquoi ImmoTopia
- [ ] Tests E2E : Page pourquoi ImmoTopia
- **Fichiers concernés** : Tests
- **Dépendances** : T-001-P2-002-001
- **Estimation** : 1h

---

### US-001-P2-003 : Blog / Ressources

#### T-001-P2-003-001 : Structure blog
- [ ] Créer routes `apps/web/src/app/ressources/blog/page.tsx` (listing)
- [ ] Créer route dynamique `apps/web/src/app/ressources/blog/[slug]/page.tsx`
- [ ] Système de routing et données articles (markdown ou CMS)
- **Fichiers concernés** : Routes blog dans `apps/web/src/app/ressources/blog/`
- **Dépendances** : T-001-000-004
- **Estimation** : 3h

#### T-001-P2-003-002 : Page guides pratiques
- [ ] Créer route `apps/web/src/app/ressources/guides/page.tsx`
- [ ] Listing des guides disponibles
- [ ] Téléchargement PDF si nécessaire
- **Fichiers concernés** : `apps/web/src/app/ressources/guides/page.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 2h

#### T-001-P2-003-003 : Page actualités
- [ ] Créer route `apps/web/src/app/ressources/actualites/page.tsx`
- [ ] Listing des actualités
- [ ] Filtrage par catégorie (optionnel)
- **Fichiers concernés** : `apps/web/src/app/ressources/actualites/page.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 2h

#### T-001-P2-003-004 : Page listing ressources
- [ ] Créer route `apps/web/src/app/ressources/page.tsx`
- [ ] Navigation vers blog, guides, actualités
- **Fichiers concernés** : `apps/web/src/app/ressources/page.tsx`
- **Dépendances** : T-001-P2-003-001, T-001-P2-003-002, T-001-P2-003-003
- **Estimation** : 1h

---

### US-001-P2-004 : Page de contact alternative

#### T-001-P2-004-001 : Page contact
- [ ] Créer route `apps/web/src/app/contact/page.tsx`
- [ ] Informations de contact (téléphone, email, adresse)
- [ ] Formulaire de contact général (non démo)
- [ ] Carte Google Maps (si localisation physique)
- [ ] Horaires d'ouverture
- **Fichiers concernés** : `apps/web/src/app/contact/page.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 3h

#### T-001-P2-004-002 : Tests contact
- [ ] Tests E2E : Page contact
- **Fichiers concernés** : Tests
- **Dépendances** : T-001-P2-004-001
- **Estimation** : 1h

---

## 🎯 User Stories P3 - Priorité Moyenne

### US-001-P3-001 : Vidéo de démonstration

#### T-001-P3-001-001 : Intégration vidéo
- [ ] Intégrer player vidéo sur page d'accueil ou dédiée
- [ ] Lazy loading de la vidéo
- [ ] Support sous-titres (FR/EN)
- [ ] Hébergement optimisé (YouTube, Vimeo, ou CDN)
- **Fichiers concernés** : Composant vidéo dans `apps/web/src/components/sections/`
- **Dépendances** : T-001-P1-001-005
- **Estimation** : 2h
- **[P]** : Dépend de la disponibilité de la vidéo

---

### US-001-P3-002 : Chat en direct

#### T-001-P3-002-001 : Intégration widget de chat
- [ ] Installer et configurer widget de chat (Intercom, Crisp, etc.)
- [ ] Configuration disponibilité horaire
- [ ] Réponses automatiques (bot) en dehors des heures
- [ ] Affichage sur toutes les pages
- **Fichiers concernés** : Configuration dans `apps/web/src/app/layout.tsx` ou composant dédié
- **Dépendances** : T-001-P1-001-003
- **Estimation** : 2h
- **[P]** : Dépend du choix de l'outil de chat

---

### US-001-P3-003 : Témoignages clients

#### T-001-P3-003-001 : Composant Testimonials
- [ ] Créer composant `Testimonials.tsx` (si pas déjà fait en P2)
- [ ] Section dédiée aux témoignages
- [ ] Témoignages par persona (si possible)
- [ ] Photos, noms, entreprises
- [ ] Vidéos témoignages (si disponibles)
- [ ] Mise en avant sur la page d'accueil
- **Fichiers concernés** : `apps/web/src/components/sections/Testimonials.tsx`
- **Dépendances** : T-001-000-004
- **Estimation** : 2h
- **[P]** : Dépend de la disponibilité des témoignages

---

## ✨ Phase 3 : Polish et finalisation

### T-001-POLISH-001 : Optimisation performance

#### T-001-POLISH-001-001 : Optimisation images
- [ ] Convertir images en WebP
- [ ] Implémenter lazy loading pour toutes les images
- [ ] Optimiser tailles des images
- [ ] Utiliser Next.js Image component partout
- **Fichiers concernés** : Toutes les pages avec images
- **Dépendances** : Toutes les tâches P1 et P2
- **Estimation** : 2h

#### T-001-POLISH-001-002 : Optimisation bundle JavaScript
- [ ] Analyse du bundle (webpack-bundle-analyzer)
- [ ] Code splitting par route
- [ ] Lazy loading des composants lourds
- [ ] Minimisation du bundle
- **Fichiers concernés** : Configuration Next.js, composants
- **Dépendances** : Toutes les tâches P1 et P2
- **Estimation** : 2h

#### T-001-POLISH-001-003 : Cache et CDN
- [ ] Configuration cache stratégique
- [ ] CDN pour assets statiques (si applicable)
- [ ] Headers de cache appropriés
- **Fichiers concernés** : Configuration serveur/Nginx ou Vercel/Netlify
- **Dépendances** : Toutes les tâches P1 et P2
- **Estimation** : 1h

---

### T-001-POLISH-002 : SEO et métadonnées

#### T-001-POLISH-002-001 : Métadonnées toutes les pages
- [ ] Ajouter métadonnées SEO à toutes les pages
- [ ] Open Graph tags
- [ ] Twitter Cards
- [ ] Structured data (Schema.org) si nécessaire
- **Fichiers concernés** : Toutes les pages
- **Dépendances** : T-001-000-003, toutes les pages créées
- **Estimation** : 3h

#### T-001-POLISH-002-002 : Sitemap et robots.txt
- [ ] Génération automatique sitemap.xml
- [ ] Configuration robots.txt
- [ ] Soumission Google Search Console
- **Fichiers concernés** : `apps/web/public/sitemap.xml`, `robots.txt`
- **Dépendances** : Toutes les pages créées
- **Estimation** : 1h

---

### T-001-POLISH-003 : Accessibilité

#### T-001-POLISH-003-001 : Navigation au clavier
- [ ] Vérifier navigation complète au clavier
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Ordre de tabulation logique
- **Fichiers concernés** : Tous les composants
- **Dépendances** : Toutes les tâches P1 et P2
- **Estimation** : 2h

#### T-001-POLISH-003-002 : Attributs ARIA et contrastes
- [ ] Ajouter attributs ARIA appropriés
- [ ] Vérifier contrastes de couleurs (WCAG AA)
- [ ] Tests avec lecteurs d'écran (optionnel)
- **Fichiers concernés** : Tous les composants
- **Dépendances** : Toutes les tâches P1 et P2
- **Estimation** : 2h

---

### T-001-POLISH-004 : Analytics et tracking

#### T-001-POLISH-004-001 : Intégration Google Analytics 4
- [ ] Installer et configurer GA4
- [ ] Tracking des événements (CTAs, soumissions formulaire)
- [ ] Tracking des conversions
- [ ] Configuration goals/funnels
- **Fichiers concernés** : `apps/web/src/lib/analytics.ts`, configuration
- **Dépendances** : Toutes les pages créées
- **Estimation** : 2h

---

### T-001-POLISH-005 : Tests finaux et audit

#### T-001-POLISH-005-001 : Audit Lighthouse complet
- [ ] Audit Performance (objectif ≥ 90)
- [ ] Audit SEO (objectif ≥ 90)
- [ ] Audit Accessibility (objectif ≥ 90)
- [ ] Audit Best Practices
- [ ] Corriger les problèmes identifiés
- **Fichiers concernés** : Toutes les pages
- **Dépendances** : T-001-POLISH-001, T-001-POLISH-002, T-001-POLISH-003
- **Estimation** : 3h

#### T-001-POLISH-005-002 : Tests cross-browser
- [ ] Tests Chrome, Firefox, Safari, Edge
- [ ] Tests sur devices réels (mobile, tablette)
- [ ] Corriger bugs de compatibilité
- **Fichiers concernés** : Tous les composants
- **Dépendances** : Toutes les tâches
- **Estimation** : 2h

#### T-001-POLISH-005-003 : Tests E2E complets
- [ ] Tous les parcours utilisateurs testés
- [ ] Tests de régression
- [ ] Tests de charge (si applicable)
- **Fichiers concernés** : Tests E2E
- **Dépendances** : Toutes les tâches
- **Estimation** : 3h

---

### T-001-POLISH-006 : Documentation

#### T-001-POLISH-006-001 : Documentation technique
- [ ] README.md du projet mis à jour
- [ ] Documentation des composants majeurs
- [ ] Guide de déploiement
- [ ] Procédures de rollback
- **Fichiers concernés** : `README.md`, documentation dans `docs/`
- **Dépendances** : Toutes les tâches
- **Estimation** : 2h

---

## 📋 Légende

- **[P]** : Tâche parallélisable avec d'autres tâches
- **Dépendances** : Tâches qui doivent être complétées avant celle-ci
- **Estimation** : Temps estimé pour compléter la tâche

---

## 📊 Résumé des estimations

**Phase 0 (Setup)** : ~2h  
**P1 (Must Have)** : ~45h  
**P2 (Should Have)** : ~20h  
**P3 (Nice to Have)** : ~6h  
**Polish** : ~20h  

**Total estimé** : ~93h (environ 12 jours de travail pour un développeur)

*Note : Estimations basées sur un développeur seul. Le parallélisation peut réduire significativement le temps total.*

---

## 🔗 Références

- [Spec](./spec.md)
- [Plan](./plan.md)

