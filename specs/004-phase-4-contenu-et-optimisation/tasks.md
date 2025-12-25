# Tâches d'implémentation : 004-phase-4-contenu-et-optimisation

**Date de création** : 2025-12-23  
**Statut** : 📝 En attente

---

## 📊 Vue d'ensemble

**Total de tâches** : 85  
**Tâches P1** : 35  
**Tâches P2** : 38  
**Tâches P3** : 12

---

## 🔧 Phase 0 : Setup et fondations

### T-004-000 : Setup initial infrastructure contenu
- [x] Créer structure dossiers `apps/web/src/content/blog/` pour articles markdown
- [x] Créer structure dossiers `apps/web/src/content/guides/` pour métadonnées guides
- [x] Créer structure dossiers `apps/web/src/content/faq/` pour données FAQ
- [x] Créer dossier `apps/web/src/lib/content/` pour helpers gestion contenu
- [x] Configurer TypeScript types pour articles, guides, FAQ
- **Complété le** : 2025-12-23
- **Fichiers concernés** : 
  - `apps/web/src/content/` (nouveaux dossiers)
  - `apps/web/src/lib/content/blog.ts`
  - `apps/web/src/lib/content/guides.ts`
  - `apps/web/src/lib/content/faq.ts`
- **Dépendances** : Aucune
- **Estimation** : 1h

### T-004-001 : Setup parser markdown
- [x] Installer dépendance markdown (react-markdown ou remark)
- [x] Créer helper `apps/web/src/lib/markdown.ts` pour parser markdown
- [x] Configurer plugins markdown (code highlighting, liens, images)
- [x] Créer composant wrapper pour rendu markdown avec styles
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/package.json` (ajout dépendance)
  - `apps/web/src/lib/markdown.ts`
  - `apps/web/src/components/blog/MarkdownContent.tsx`
- **Dépendances** : T-004-000
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-004-002

### T-004-002 : Extension SEO keywords configuration
- [x] Créer `apps/web/src/lib/seo/keywords.ts` avec configuration mots-clés par page
- [x] Définir types TypeScript pour configuration SEO par page
- [x] Créer helpers pour récupérer mots-clés par route
- [x] Documenter structure configuration SEO
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/lib/seo/keywords.ts`
- **Dépendances** : T-004-000
- **Estimation** : 45min
- **[P]** : Peut être fait en parallèle avec T-004-001

### T-004-003 : Extension structured data schemas
- [x] Ajouter Schema Article dans `apps/web/src/lib/structured-data.ts`
- [x] Ajouter Schema FAQPage dans `apps/web/src/lib/structured-data.ts` (déjà existant)
- [x] Ajouter Schema BreadcrumbList dans `apps/web/src/lib/structured-data.ts`
- [x] Ajouter Schema HowTo pour guides (si applicable)
- [x] Créer helpers génération schemas dynamiques
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/lib/structured-data.ts`
- **Dépendances** : T-004-000
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec T-004-001, T-004-002

---

## 🎯 User Stories P1 - Priorité Critique

### US-004-P1-001 : Production et intégration contenus textuels finaux

#### T-004-P1-001-001 : Intégration textes page d'accueil
- [ ] Intégrer tous textes validés dans `apps/web/src/app/page.tsx`
- [ ] Optimiser formatage (typographie, espacements, hiérarchie)
- [ ] Vérifier cohérence avec design system
- [ ] Relecture orthographique/grammaticale
- **Fichiers concernés** :
  - `apps/web/src/app/page.tsx`
- **Dépendances** : T-004-000
- **Estimation** : 2h

#### T-004-P1-001-002 : Intégration textes pages métiers
- [ ] Intégrer textes validés dans pages `pour-qui/` (agences, syndics, promoteurs, etc.)
- [ ] Optimiser formatage et structure Hn cohérente
- [ ] Relecture et correction
- **Fichiers concernés** :
  - `apps/web/src/app/pour-qui/agences-immobilieres/page.tsx`
  - `apps/web/src/app/pour-qui/syndics/page.tsx`
  - `apps/web/src/app/pour-qui/promoteurs/page.tsx`
  - `apps/web/src/app/pour-qui/gestionnaires/page.tsx`
  - `apps/web/src/app/pour-qui/proprietaires/page.tsx`
- **Dépendances** : T-004-000
- **Estimation** : 3h
- **[P]** : Peut être fait en parallèle avec T-004-P1-001-001

#### T-004-P1-001-003 : Intégration textes autres pages
- [ ] Intégrer textes dans pages `la-solution/`, `fonctionnalites/`, `contact/`, `tarifs/`
- [ ] Optimiser formatage et cohérence
- [ ] Relecture complète
- **Fichiers concernés** :
  - `apps/web/src/app/la-solution/**/page.tsx`
  - `apps/web/src/app/fonctionnalites/page.tsx`
  - `apps/web/src/app/contact/page.tsx`
  - `apps/web/src/app/tarifs/page.tsx`
- **Dépendances** : T-004-000
- **Estimation** : 2h30
- **[P]** : Peut être fait en parallèle avec T-004-P1-001-001, T-004-P1-001-002

---

### US-004-P1-002 : Intégration et optimisation contenus visuels

#### T-004-P1-002-001 : Optimisation images existantes
- [x] Créer composant OptimizedImage wrapper pour Next.js Image
- [x] Configurer Next.js pour formats modernes (WebP, AVIF) dans next.config.js
- [x] Configurer deviceSizes et imageSizes pour responsive images
- [x] Implémenter lazy loading par défaut (avec option priority pour above-the-fold)
- [x] Créer helpers image-utils.ts pour génération sizes et alt-text SEO
- [x] Configurer cache headers pour images (31536000 immutable)
- **Note** : Conversion images WebP/AVIF et optimisation compression à faire lors de l'ajout des images finales
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/public/images/` (toutes images)
  - Tous fichiers utilisant images (remplacer par Next.js Image)
- **Dépendances** : T-004-000
- **Estimation** : 3h
- **[P]** : Peut être fait en parallèle avec T-004-P1-002-002

#### T-004-P1-002-002 : Intégration illustrations fonctionnalités
- [ ] Ajouter illustrations manquantes pour fonctionnalités
- [ ] Optimiser illustrations (SVG ou WebP)
- [ ] Intégrer dans pages fonctionnalités
- [ ] Ajouter alt-text descriptifs
- **Fichiers concernés** :
  - `apps/web/public/images/illustrations/`
  - `apps/web/src/app/fonctionnalites/page.tsx`
  - `apps/web/src/app/la-solution/**/page.tsx`
- **Dépendances** : T-004-000
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-004-P1-002-001

#### T-004-P1-002-003 : Intégration icônes et pictogrammes
- [ ] Vérifier icônes manquantes
- [ ] Ajouter icônes depuis design system (lucide-react ou autre)
- [ ] Harmoniser style icônes
- [ ] Intégrer icônes dans pages appropriées
- **Fichiers concernés** :
  - Toutes pages utilisant icônes
  - `apps/web/src/components/**` (composants avec icônes)
- **Dépendances** : T-004-000
- **Estimation** : 1h30

#### T-004-P1-002-004 : Intégration captures écran plateforme
- [ ] Ajouter captures écran plateforme optimisées
- [ ] Créer composant pour affichage captures avec zoom (optionnel)
- [ ] Intégrer dans pages appropriées (fonctionnalités, solution)
- [ ] Ajouter alt-text descriptifs
- **Fichiers concernés** :
  - `apps/web/public/images/screenshots/`
  - `apps/web/src/app/fonctionnalites/page.tsx`
  - `apps/web/src/app/la-solution/saas-gestion/page.tsx`
- **Dépendances** : T-004-P1-002-001
- **Estimation** : 1h30

#### T-004-P1-002-005 : Ajout alt-text toutes images
- [ ] Auditer toutes images du site
- [ ] Ajouter alt-text descriptifs et SEO-optimisés
- [ ] Vérifier images décoratives ont alt-text vide
- [ ] Valider accessibilité
- **Fichiers concernés** :
  - Tous fichiers avec composants Image
- **Dépendances** : T-004-P1-002-001, T-004-P1-002-002, T-004-P1-002-003, T-004-P1-002-004
- **Estimation** : 2h

---

### US-004-P1-003 : Optimisation SEO on-page complète

#### T-004-P1-003-001 : Configuration SEO page d'accueil
- [x] Définir mots-clés principaux : "plateforme immobilière Afrique de l'Ouest"
- [x] Configurer title (60 caractères max) via `generateMetadata`
- [x] Configurer meta description (155 caractères max)
- [x] Ajouter keywords pertinents
- [x] Configurer canonical URL
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/page.tsx` (export metadata)
  - `apps/web/src/lib/seo/keywords.ts`
- **Dépendances** : T-004-002
- **Estimation** : 1h

#### T-004-P1-003-002 : Configuration SEO pages métiers
- [x] Configurer SEO pour page Agences : "logiciel pour agence immobilière"
- [x] Configurer SEO pour page Syndics : "gestion syndic copropriété"
- [x] Configurer SEO pour page Promoteurs : "plateforme promoteur immobilier"
- [x] Ajouter meta tags appropriés pour chaque page
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/pour-qui/agences-immobilieres/page.tsx`
  - `apps/web/src/app/pour-qui/syndics/page.tsx`
  - `apps/web/src/app/pour-qui/promoteurs/page.tsx`
  - `apps/web/src/lib/seo/keywords.ts`
- **Dépendances** : T-004-002, T-004-P1-003-001
- **Estimation** : 2h
- **[P]** : Pages peuvent être optimisées en parallèle

#### T-004-P1-003-003 : Configuration SEO autres pages
- [x] Configurer SEO toutes autres pages (solution, fonctionnalités, contact, tarifs, ressources)
- [x] Title et meta description pour chaque page
- [x] Keywords pertinents par page
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/la-solution/**/page.tsx`
  - `apps/web/src/app/fonctionnalites/page.tsx`
  - `apps/web/src/app/contact/page.tsx`
  - `apps/web/src/app/tarifs/page.tsx`
  - `apps/web/src/app/ressources/**/page.tsx`
  - `apps/web/src/lib/seo/keywords.ts`
- **Dépendances** : T-004-002
- **Estimation** : 2h30
- **[P]** : Peut être fait en parallèle avec T-004-P1-003-002

#### T-004-P1-003-004 : Optimisation structure Hn
- [x] Auditer structure Hn toutes pages (Hero h1, sections h2, sous-sections h3)
- [x] Vérifier H1 unique par page (confirmé : chaque page a un seul h1 dans Hero/PersonaPageTemplate)
- [x] Optimiser hiérarchie H2/H3/H4 (hiérarchie cohérente : h1 → h2 → h3)
- [x] S'assurer cohérence structure entre pages (structure uniforme sur toutes les pages)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - Toutes pages du site
- **Dépendances** : T-004-P1-001-001, T-004-P1-001-002, T-004-P1-001-003
- **Estimation** : 2h

#### T-004-P1-003-005 : Optimisation maillage interne
- [x] Identifier pages stratégiques pour maillage (Footer avec liens principaux, Header navigation, liens contextuels dans sections)
- [x] Ajouter liens contextuels entre pages pertinentes (FeaturesPreview → /fonctionnalites, PersonasPreview → /pour-qui, CTA → /contact)
- [x] Optimiser anchor text pour SEO (anchor texts descriptifs : "Voir toutes les fonctionnalités", "Découvrir la solution", etc.)
- [x] Créer composant Breadcrumbs pour améliorer navigation et structured data
- [x] Vérifier pas de liens cassés (tous les liens utilisent les routes Next.js valides)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - Toutes pages avec liens internes
  - `apps/web/src/components/layout/Header.tsx`
  - `apps/web/src/components/layout/Footer.tsx`
- **Dépendances** : Toutes pages créées
- **Estimation** : 2h

---

### US-004-P1-004 : SEO technique et performance

#### T-004-P1-004-001 : Vérification URLs propres
- [x] Auditer toutes URLs du site (routes Next.js : /pour-qui/agences-immobilieres, /la-solution/saas-gestion, etc.)
- [x] S'assurer URLs sont propres et parlantes (slugs SEO-friendly : agences-immobilieres, saas-gestion, portail-annonces)
- [x] Vérifier pas de paramètres inutiles dans URLs (paramètres utilisés uniquement pour /contact?demo=true et ?persona=)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - Structure routes Next.js
  - `apps/web/src/app/**/page.tsx`
- **Dépendances** : Toutes pages
- **Estimation** : 1h

#### T-004-P1-004-002 : Optimisation temps chargement
- [x] Configurer Next.js pour optimisation (swcMinify, compress)
- [x] Configurer headers performance (DNS prefetch, preconnect)
- [x] Créer helpers performance.ts pour lazy loading et preload
- [x] Ajouter preconnect pour Google Fonts dans layout
- [x] Configurer cache headers pour images dans next.config.js
- **Note** : Audit Lighthouse à faire en production après ajout des images finales
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - Configuration Next.js
  - Composants lourds (lazy loading)
- **Dépendances** : T-004-P1-002-001
- **Estimation** : 2h

#### T-004-P1-004-003 : Validation Core Web Vitals
- [ ] Mesurer LCP (Largest Contentful Paint) - objectif < 2.5s
- [ ] Mesurer FID (First Input Delay) - objectif < 100ms
- [ ] Mesurer CLS (Cumulative Layout Shift) - objectif < 0.1
- [ ] Corriger problèmes identifiés
- [ ] Re-valider après corrections
- **Fichiers concernés** :
  - Tous fichiers impactant performance
- **Dépendances** : T-004-P1-004-002
- **Estimation** : 2h

#### T-004-P1-004-004 : Mise à jour sitemap.xml
- [x] Ajouter toutes nouvelles routes dans `apps/web/src/app/sitemap.ts` (ajout route /ressources/faq)
- [x] Configurer priorities et changeFrequency appropriées (accueil 1.0 weekly, pages principales 0.9 monthly, etc.)
- [x] Vérifier format sitemap valide (format MetadataRoute.Sitemap Next.js)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/sitemap.ts`
- **Dépendances** : Toutes routes créées
- **Estimation** : 1h

#### T-004-P1-004-005 : Vérification robots.txt
- [x] Vérifier configuration `apps/web/src/app/robots.ts` (configuration correcte : allow /, disallow /api/ et /admin/)
- [x] S'assurer sitemap référencé (sitemap: ${baseUrl}/sitemap.xml)
- [x] Vérifier règles robots appropriées (rules correctes pour indexation)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/robots.ts`
- **Dépendances** : T-004-P1-004-004
- **Estimation** : 30min

#### T-004-P1-004-006 : Implémentation structured data
- [x] Ajouter Schema Organization dans layout principal (✓ déjà présent dans layout.tsx)
- [x] Ajouter Schema WebSite dans layout principal (✓ déjà présent dans layout.tsx)
- [x] Ajouter Schema BreadcrumbList sur pages appropriées (composant Breadcrumbs créé avec génération automatique)
- [x] Créer helpers pour Article, FAQPage, BreadcrumbList, HowTo (déjà fait dans structured-data.ts)
- **Note** : Validation Google Rich Results Test à faire en production
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/layout.tsx`
  - `apps/web/src/components/seo/StructuredData.tsx`
  - `apps/web/src/lib/structured-data.ts`
- **Dépendances** : T-004-003
- **Estimation** : 2h

---

## 🎯 User Stories P2 - Priorité Haute

### US-004-P2-001 : Production contenu éditorial (Blog)

#### T-004-P2-001-001 : Création structure blog
- [x] Créer route `apps/web/src/app/ressources/blog/[slug]/page.tsx` pour articles individuels
- [x] Créer layout blog avec SEO dans `apps/web/src/app/ressources/blog/layout.tsx`
- [x] Compléter page liste `apps/web/src/app/ressources/blog/page.tsx` avec ArticleList
- [x] Helper `apps/web/src/lib/content/blog.ts` déjà créé (à compléter avec lecture fichiers markdown)
- [x] Créer dossier content/blog/ avec .gitkeep
- **Note** : Implémentation lecture fichiers markdown à faire lors de l'ajout des articles
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/ressources/blog/[slug]/page.tsx`
  - `apps/web/src/app/ressources/blog/layout.tsx`
  - `apps/web/src/app/ressources/blog/page.tsx`
  - `apps/web/src/lib/content/blog.ts`
- **Dépendances** : T-004-000, T-004-001
- **Estimation** : 2h

#### T-004-P2-001-002 : Création composants blog
- [x] Créer `ArticleCard.tsx` pour affichage article dans liste (avec featured option)
- [x] Créer `ArticleList.tsx` pour liste articles avec support featured article
- [x] Créer `ArticleContent.tsx` pour rendu contenu markdown avec métadonnées
- [x] Ajouter styles cohérents avec design system (Card, Tailwind typography)
- [x] Composant Pagination créé (prêt pour implémentation côté serveur)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/components/blog/ArticleCard.tsx`
  - `apps/web/src/components/blog/ArticleList.tsx`
  - `apps/web/src/components/blog/ArticleContent.tsx`
- **Dépendances** : T-004-001
- **Estimation** : 2h30
- **[P]** : Peut être fait en parallèle avec T-004-P2-001-001

#### T-004-P2-001-003 : Création 10 articles de blog
- [ ] Créer article 1 : "Guide complet de la gestion immobilière en Afrique de l'Ouest"
- [ ] Créer article 2 : "Comment choisir un logiciel de gestion immobilière"
- [ ] Créer article 3 : "Les avantages du SaaS pour les professionnels de l'immobilier"
- [ ] Créer article 4 : "Gestion de copropriété : bonnes pratiques"
- [ ] Créer article 5 : "Digitalisation du secteur immobilier en Afrique"
- [ ] Créer article 6 : "ROI d'un logiciel de gestion immobilière"
- [ ] Créer article 7 : "Sécurité des données dans l'immobilier"
- [ ] Créer article 8 : "Témoignages clients : études de cas"
- [ ] Créer article 9 : "Tendances immobilier Afrique 2025"
- [ ] Créer article 10 : "Formation et adoption d'un nouveau logiciel immobilier"
- **Fichiers concernés** :
  - `apps/web/src/content/blog/*.md` (10 fichiers)
- **Dépendances** : T-004-P2-001-001, T-004-P2-001-002
- **Estimation** : 10h (1h par article, peut être externalisé)

#### T-004-P2-001-004 : Optimisation SEO articles
- [ ] Ajouter meta tags SEO pour chaque article (title, description, keywords)
- [ ] Implémenter Schema Article pour chaque article
- [ ] Ajouter BreadcrumbList pour navigation articles
- [ ] Optimiser URLs articles (slugs SEO-friendly)
- [ ] Ajouter images avec alt-text pour chaque article
- **Fichiers concernés** :
  - `apps/web/src/app/ressources/blog/[slug]/page.tsx`
  - `apps/web/src/lib/structured-data.ts`
- **Dépendances** : T-004-P2-001-003, T-004-003
- **Estimation** : 2h

#### T-004-P2-001-005 : Intégration CTA dans articles
- [ ] Ajouter CTA contextualisés dans articles (formulaire démo, téléchargement guide)
- [ ] Positionner CTA stratégiquement (milieu, fin article)
- [ ] Styliser CTA cohérent avec design system
- [ ] Tester CTA fonctionnels
- **Fichiers concernés** :
  - `apps/web/src/components/blog/ArticleContent.tsx`
  - Templates/articles markdown
- **Dépendances** : T-004-P2-001-003
- **Estimation** : 1h30

#### T-004-P2-001-006 : Pagination blog
- [ ] Implémenter pagination liste articles
- [ ] Configurer nombre articles par page
- [ ] Ajouter navigation précédent/suivant
- [ ] Optimiser SEO pagination (rel="next", rel="prev")
- **Fichiers concernés** :
  - `apps/web/src/components/blog/ArticleList.tsx`
  - `apps/web/src/app/ressources/blog/page.tsx`
- **Dépendances** : T-004-P2-001-002
- **Estimation** : 1h30

---

### US-004-P2-002 : Guides pratiques téléchargeables

#### T-004-P2-002-001 : Création structure guides
- [x] Créer route `apps/web/src/app/ressources/guides/[slug]/page.tsx` pour pages guides
- [x] Compléter page liste `apps/web/src/app/ressources/guides/page.tsx` avec GuideList
- [x] Créer layout guides avec SEO dans `apps/web/src/app/ressources/guides/layout.tsx`
- [x] Helper `apps/web/src/lib/content/guides.ts` déjà créé (à compléter avec lecture métadonnées)
- [x] Créer dossier content/guides/ avec .gitkeep
- **Note** : Route download séparée non nécessaire (formulaire intégré dans page guide)
- **Note** : Implémentation lecture métadonnées à faire lors de l'ajout des guides
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/ressources/guides/[slug]/page.tsx`
  - `apps/web/src/app/ressources/guides/download/[slug]/page.tsx`
  - `apps/web/src/app/ressources/guides/page.tsx`
  - `apps/web/src/lib/content/guides.ts`
- **Dépendances** : T-004-000
- **Estimation** : 2h

#### T-004-P2-002-002 : Création composants guides
- [x] Créer `GuideCard.tsx` pour affichage guide dans liste (avec métadonnées complètes)
- [x] Créer `GuideList.tsx` pour liste guides en grid
- [x] Créer `GuideDownloadForm.tsx` pour formulaire capture email avec validation
- [x] Styliser composants avec design system (Card, Button, Input, Label)
- [x] Intégrer tracking analytics (trackCTAClick) pour téléchargements
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/components/guides/GuideCard.tsx`
  - `apps/web/src/components/guides/GuideList.tsx`
  - `apps/web/src/components/guides/GuideDownloadForm.tsx`
- **Dépendances** : T-004-P2-002-001
- **Estimation** : 2h30
- **[P]** : Peut être fait en parallèle avec T-004-P2-002-001

#### T-004-P2-002-003 : Création guides PDF
- [ ] Créer guide 1 : "10 étapes pour digitaliser votre agence immobilière"
- [ ] Créer guide 2 : "Checklist gestion de copropriété"
- [ ] Créer guide 3 : "ROI et rentabilité d'un logiciel immobilier"
- [ ] Formater guides avec branding ImmoTopia
- [ ] Exporter en PDF optimisé
- **Fichiers concernés** :
  - `apps/web/public/guides/*.pdf` (3 fichiers)
  - Métadonnées dans `apps/web/src/content/guides/`
- **Dépendances** : T-004-P2-002-001
- **Estimation** : 8h (peut être externalisé)

#### T-004-P2-002-004 : Formulaire téléchargement
- [x] Implémenter formulaire email avec validation (format email, champs requis)
- [x] Intégrer tracking analytics (trackCTAClick avec guide_download event)
- [x] Gérer téléchargement PDF après soumission formulaire (simulation + download)
- [x] Afficher état de soumission (loading, success, error)
- **Note** : Protection anti-spam (honeypot, reCAPTCHA) à ajouter si nécessaire selon volume spam
- **Note** : Backend API à implémenter pour enregistrement email réel
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/components/guides/GuideDownloadForm.tsx`
  - `apps/web/src/app/ressources/guides/download/[slug]/page.tsx`
- **Dépendances** : T-004-P2-002-002, T-004-P2-002-003
- **Estimation** : 2h

#### T-004-P2-002-005 : Page remerciement
- [ ] Créer page remerciement après téléchargement
- [ ] Ajouter message personnalisé
- [ ] Proposer prochaines actions (CTA contact, autres guides)
- [ ] Styliser page cohérente avec design system
- **Fichiers concernés** :
  - `apps/web/src/app/ressources/guides/download/[slug]/page.tsx` (page remerciement)
- **Dépendances** : T-004-P2-002-004
- **Estimation** : 1h

#### T-004-P2-002-006 : Tracking téléchargements
- [x] Intégrer événement GA4 via trackCTAClick avec guide_download event
- [x] Ajouter paramètres guide_slug, guide_title, email dans tracking
- [x] Tracking prêt pour tests (nécessite guides réels pour test complet)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/components/guides/GuideDownloadForm.tsx`
  - `apps/web/src/lib/analytics.ts`
- **Dépendances** : T-004-P2-002-004
- **Estimation** : 30min

---

### US-004-P2-003 : FAQ complète par persona

#### T-004-P2-003-001 : Création structure FAQ
- [x] Créer page `apps/web/src/app/ressources/faq/page.tsx` avec SEO et structured data
- [x] Helper `apps/web/src/lib/content/faq.ts` déjà créé (à compléter avec lecture données)
- [x] Structure données FAQ définie dans types.ts (FAQData, FAQSection, FAQItem)
- [x] Créer dossier content/faq/ avec .gitkeep
- **Note** : Implémentation lecture données à faire lors de l'ajout du contenu FAQ
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/ressources/faq/page.tsx`
  - `apps/web/src/lib/content/faq.ts`
  - `apps/web/src/content/faq/faq-data.json` ou `.ts`
- **Dépendances** : T-004-000
- **Estimation** : 1h30

#### T-004-P2-003-002 : Création composants FAQ
- [x] Créer `FAQSection.tsx` pour section FAQ par persona (avec header et items)
- [x] Créer `FAQItem.tsx` pour item question/réponse avec accordéon (animation smooth)
- [x] Créer `FAQSearch.tsx` pour recherche FAQ client-side avec filtrage
- [x] Styliser composants avec design system (Card, Input, animations)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/components/faq/FAQSection.tsx`
  - `apps/web/src/components/faq/FAQItem.tsx`
  - `apps/web/src/components/faq/FAQSearch.tsx` (optionnel)
- **Dépendances** : T-004-P2-003-001
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-004-P2-003-003

#### T-004-P2-003-003 : Création contenu FAQ
- [ ] Créer 10+ questions/réponses pour persona Agences
- [ ] Créer 10+ questions/réponses pour persona Syndics
- [ ] Créer 10+ questions/réponses pour persona Promoteurs
- [ ] Organiser FAQ par catégories/thèmes
- **Fichiers concernés** :
  - `apps/web/src/content/faq/faq-data.json` ou `.ts`
- **Dépendances** : T-004-P2-003-001
- **Estimation** : 4h (peut être externalisé)
- **[P]** : Peut être fait en parallèle avec T-004-P2-003-002

#### T-004-P2-003-004 : Optimisation SEO FAQ
- [x] Ajouter meta tags SEO pour page FAQ (generateMetadata dans page)
- [x] Implémenter Schema FAQPage avec toutes questions/réponses (generateFAQSchema)
- [x] Optimiser structure Hn page FAQ (h1 Hero, h2 sections, questions dans accordéon)
- [x] Ajouter BreadcrumbList (composant Breadcrumbs)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/app/ressources/faq/page.tsx`
  - `apps/web/src/lib/structured-data.ts`
- **Dépendances** : T-004-P2-003-003, T-004-003
- **Estimation** : 1h30

#### T-004-P2-003-005 : Recherche FAQ (optionnel)
- [x] Implémenter recherche client-side dans FAQ (composant FAQSearch)
- [x] Filtrer questions/réponses par mot-clé (question, answer, category)
- [x] Afficher nombre de résultats trouvés
- [x] Utiliser useMemo pour performance optimisation
- **Note** : Highlight résultats à ajouter si nécessaire (optionnel)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/components/faq/FAQSearch.tsx`
  - `apps/web/src/lib/content/faq.ts`
- **Dépendances** : T-004-P2-003-002
- **Estimation** : 2h

---

### US-004-P2-004 : Optimisations CRO (Conversion Rate Optimization)

#### T-004-P2-004-001 : Composant preuves sociales
- [ ] Créer `SocialProof.tsx` pour témoignages clients
- [ ] Intégrer logos clients (si disponibles)
- [ ] Ajouter chiffres clés (nombre clients, satisfaction, etc.)
- [ ] Positionner preuves sociales stratégiquement (Hero, avant CTA)
- **Fichiers concernés** :
  - `apps/web/src/components/cro/SocialProof.tsx`
  - `apps/web/src/app/page.tsx` (intégration)
  - Pages métiers (intégration)
- **Dépendances** : T-004-000
- **Estimation** : 2h

#### T-004-P2-004-002 : Composant badges de confiance
- [x] Créer `TrustBadges.tsx` pour badges de confiance
- [x] Ajouter badges (sécurité, certifications, garanties, clients)
- [x] Styliser badges attractifs avec variants (horizontal, grid)
- [x] Composant prêt pour intégration (Hero, Footer, formulaire)
- **Note** : Intégration dans pages à faire selon besoins design
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/components/cro/TrustBadges.tsx`
  - `apps/web/src/app/page.tsx`
  - `apps/web/src/components/layout/Footer.tsx`
- **Dépendances** : T-004-000
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec T-004-P2-004-001

#### T-004-P2-004-003 : Optimisation CTA
- [ ] Auditer tous CTA du site
- [ ] Optimiser texte CTA (action-oriented, clair)
- [ ] Tester variations couleurs CTA
- [ ] Optimiser position CTA (visibilité, contexte)
- [ ] A/B test setup pour variations CTA (préparation)
- **Fichiers concernés** :
  - Tous composants avec CTA
  - `apps/web/src/components/sections/Hero.tsx`
  - `apps/web/src/components/sections/FinalCTA.tsx`
- **Dépendances** : T-004-000
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-004-P2-004-001, T-004-P2-004-002

#### T-004-P2-004-004 : Exit-intent popup (optionnel)
- [x] Créer `ExitIntentPopup.tsx` pour détecter sortie utilisateur
- [x] Implémenter offre guide gratuit dans popup (configurable via props)
- [x] Popup configurable avec titre, message, CTA personnalisés
- [x] Configurer affichage (une fois par session via sessionStorage)
- [x] Styliser popup attractif et non intrusif (Card, animations)
- **Note** : Intégration dans layout à faire selon stratégie marketing (peut être conditionnel)
- **Complété le** : 2025-12-23
- **Fichiers concernés** :
  - `apps/web/src/components/cro/ExitIntentPopup.tsx`
  - `apps/web/src/app/layout.tsx` (intégration)
- **Dépendances** : T-004-P2-004-003
- **Estimation** : 2h30

---

## 🎯 User Stories P3 - Priorité Moyenne

### US-004-P3-001 : Vidéos présentation et démonstration

#### T-004-P3-001-001 : Intégration vidéo présentation
- [ ] Héberger vidéo présentation (YouTube/Vimeo ou CDN)
- [ ] Créer composant vidéo responsive
- [ ] Intégrer vidéo dans Hero ou section dédiée
- [ ] Ajouter lazy loading et placeholder
- [ ] Optimiser chargement (pas de préchargement automatique)
- **Fichiers concernés** :
  - `apps/web/src/components/video/VideoPlayer.tsx`
  - `apps/web/src/app/page.tsx` ou section dédiée
- **Dépendances** : Vidéo produite (externe)
- **Estimation** : 2h

#### T-004-P3-001-002 : Vidéos démonstration modules (optionnel)
- [ ] Héberger vidéos démonstration (si produites)
- [ ] Intégrer vidéos dans pages fonctionnalités appropriées
- [ ] Créer galerie vidéos ou intégration inline
- [ ] Optimiser chargement
- **Fichiers concernés** :
  - `apps/web/src/app/fonctionnalites/page.tsx`
  - `apps/web/src/app/la-solution/**/page.tsx`
- **Dépendances** : Vidéos produites (externe), T-004-P3-001-001
- **Estimation** : 3h

#### T-004-P3-001-003 : Témoignages clients vidéo (optionnel)
- [ ] Héberger témoignages vidéo clients (si disponibles)
- [ ] Créer section témoignages vidéo
- [ ] Intégrer dans page appropriée ou section dédiée
- [ ] Ajouter transcriptions (accessibilité)
- **Fichiers concernés** :
  - `apps/web/src/components/testimonials/VideoTestimonial.tsx`
  - Section témoignages ou page dédiée
- **Dépendances** : Vidéos produites (externe)
- **Estimation** : 2h

---

### US-004-P3-002 : Configuration tests A/B

#### T-004-P3-002-001 : Setup outil test A/B
- [ ] Choisir outil A/B (Google Optimize, VWO, Optimizely, ou custom)
- [ ] Configurer compte et intégration
- [ ] Installer SDK/script tracking dans Next.js
- [ ] Tester connexion outil
- **Fichiers concernés** :
  - `apps/web/package.json` (ajout dépendance si nécessaire)
  - `apps/web/src/app/layout.tsx` (intégration script)
  - Configuration environnement
- **Dépendances** : Aucune (choix outil)
- **Estimation** : 2h

#### T-004-P3-002-002 : Création variations Hero section
- [ ] Créer version A Hero section (actuelle)
- [ ] Créer version B Hero section (variation texte, image, CTA)
- [ ] Préparer code pour basculement version
- [ ] Documenter différences versions
- **Fichiers concernés** :
  - `apps/web/src/components/sections/Hero.tsx` (version A)
  - `apps/web/src/components/sections/HeroB.tsx` (version B)
- **Dépendances** : T-004-P3-002-001
- **Estimation** : 2h

#### T-004-P3-002-003 : Configuration tests CTA
- [ ] Identifier CTA à tester
- [ ] Créer variations CTA (texte, couleur, position)
- [ ] Configurer tests dans outil A/B
- [ ] Ajouter tracking conversions
- **Fichiers concernés** :
  - Composants avec CTA
  - Configuration outil A/B
- **Dépendances** : T-004-P3-002-001
- **Estimation** : 2h

#### T-004-P3-002-004 : Configuration test longueur formulaire
- [ ] Créer version formulaire courte (champs essentiels)
- [ ] Créer version formulaire longue (champs détaillés)
- [ ] Configurer test dans outil A/B
- [ ] Ajouter tracking conversions par version
- **Fichiers concernés** :
  - `apps/web/src/components/forms/DemoRequestForm.tsx`
  - Variantes formulaire
- **Dépendances** : T-004-P3-002-001
- **Estimation** : 2h

---

## ✨ Phase 3 : Polish et finalisation

### T-004-POLISH-001 : Refactoring code
- [ ] Identifier code à refactorer (duplications, complexité)
- [ ] Appliquer refactoring sur composants contenu
- [ ] Uniformiser patterns SEO et structured data
- [ ] Optimiser imports et dépendances
- **Fichiers concernés** :
  - Tous fichiers créés/modifiés
- **Dépendances** : Toutes tâches P1 et P2 complétées
- **Estimation** : 2h

### T-004-POLISH-002 : Documentation
- [ ] Documenter structure contenu (blog, guides, FAQ)
- [ ] Documenter helpers SEO et structured data
- [ ] Créer guide ajout nouveaux articles blog
- [ ] Mettre à jour README si nécessaire
- **Fichiers concernés** :
  - `apps/web/src/lib/content/README.md`
  - `apps/web/src/lib/seo/README.md`
  - Documentation inline
- **Dépendances** : T-004-POLISH-001
- **Estimation** : 2h

### T-004-POLISH-003 : Optimisation performance finale
- [ ] Audit Lighthouse complet toutes pages
- [ ] Optimiser images restantes si nécessaire
- [ ] Vérifier bundle size
- [ ] Optimiser code splitting
- [ ] Valider Core Web Vitals final
- **Fichiers concernés** :
  - Tous fichiers
- **Dépendances** : T-004-POLISH-001
- **Estimation** : 2h

### T-004-POLISH-004 : Validation SEO finale
- [ ] Audit SEO technique complet (Screaming Frog ou similaire)
- [ ] Valider structured data toutes pages (Google Rich Results Test)
- [ ] Vérifier sitemap.xml complet et valide
- [ ] Vérifier robots.txt correct
- [ ] Tester soumission Google Search Console
- **Fichiers concernés** :
  - Sitemap, robots, structured data
- **Dépendances** : Toutes tâches SEO complétées
- **Estimation** : 2h

### T-004-POLISH-005 : Tests finaux
- [ ] Tests E2E parcours utilisateur complets
- [ ] Tests formulaires (contact, téléchargement guide)
- [ ] Tests navigation et liens internes
- [ ] Tests responsive (mobile, tablette, desktop)
- [ ] Tests accessibilité (WCAG 2.1 niveau AA)
- **Fichiers concernés** :
  - Tous fichiers
- **Dépendances** : Toutes fonctionnalités complétées
- **Estimation** : 3h

---

## 📋 Légende

- **[P]** : Tâche parallélisable
- **Dépendances** : Tâches qui doivent être complétées avant
- **Estimation** : Temps estimé pour la tâche

---

## 🔗 Références

- [Spec](./spec.md)
- [Plan](./plan.md)

---

## 📝 Notes d'implémentation

### Priorisation recommandée
1. **Sprint 1** : Phase 0 + P1 (contenus + SEO base) - ~30h
2. **Sprint 2** : P2 Blog + Guides - ~25h
3. **Sprint 3** : P2 FAQ + CRO - ~15h
4. **Sprint 4** : P3 (optionnel) + Polish - ~15h

### Dépendances externes
- Contenus textuels validés par client
- Images optimisées et assets visuels
- Guides PDF produits (peut être externalisé)
- Articles de blog rédigés (peut être externalisé)
- FAQ rédigée (peut être externalisé)
- Vidéos produites (si optionnel, peut être externalisé)

### Estimations totales
- **P1** : ~35h
- **P2** : ~38h (dont ~22h externalisables : articles, guides, FAQ)
- **P3** : ~12h (dépend de production vidéos)
- **Polish** : ~11h
- **Total** : ~96h (dont ~22h externalisables)

