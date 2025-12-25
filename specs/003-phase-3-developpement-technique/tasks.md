# Tâches d'implémentation : 003-phase-3-developpement-technique

**Date de création** : 2025-12-23  
**Statut** : 📝 En attente

---

## 📊 Vue d'ensemble

**Total de tâches** : 100+  
**Tâches Phase 0** : ~10  
**Tâches P1** : ~50  
**Tâches P2** : ~30  
**Tâches P3** : ~10  
**Tâches Polish** : ~5

---

## 🔧 Phase 0 : Setup et fondations

### T-003-000 : Setup initial et migration vers Tailwind CSS

#### T-003-000-001 : Installation Tailwind CSS
- [x] Installer Tailwind CSS (`tailwindcss`, `postcss`, `autoprefixer`)
- [x] Initialiser configuration Tailwind (`npx tailwindcss init`)
- [x] Configurer `tailwind.config.js` avec design tokens
- [x] Configurer `postcss.config.js`
- [x] Ajouter Tailwind directives dans `globals.css`
- **Fichiers concernés** : `apps/web/package.json`, `apps/web/tailwind.config.js`, `apps/web/postcss.config.js`, `apps/web/src/app/globals.css`
- **Dépendances** : Aucune
- **Estimation** : 1h
- **Complété le** : 2025-12-23

#### T-003-000-002 : Installation et configuration shadcn/ui
- [x] Installer shadcn/ui CLI (`npx shadcn-ui@latest init`)
- [x] Configurer `components.json` avec paths et style
- [x] Intégrer design tokens dans shadcn/ui config
- [x] Vérifier configuration TypeScript
- [x] Créer `utils.ts` avec fonction `cn()` et installer dépendances (`clsx`, `tailwind-merge`)
- [x] Installer `tailwindcss-animate` pour animations
- **Fichiers concernés** : `apps/web/components.json`, `apps/web/tsconfig.json`, `apps/web/src/lib/utils.ts`, `apps/web/tailwind.config.js`
- **Dépendances** : T-003-000-001
- **Estimation** : 30min
- **Complété le** : 2025-12-23

#### T-003-000-003 : Migration de globals.css
- [x] Remplacer styles Ant Design par Tailwind dans `globals.css`
- [x] Intégrer design tokens CSS (couleurs, typographies, espacements)
- [x] Configurer reset CSS Tailwind
- [x] Ajouter variables CSS shadcn/ui (HSL format)
- [x] Conserver variables CSS existantes pour compatibilité
- **Fichiers concernés** : `apps/web/src/app/globals.css`
- **Dépendances** : T-003-000-001
- **Estimation** : 45min
- **Complété le** : 2025-12-23

#### T-003-000-004 : Mise à jour layout.tsx (suppression Ant Design)
- [x] Retirer Ant Design Registry du layout
- [x] Retirer ConfigProvider Ant Design
- [x] Migrer styles inline vers Tailwind CSS classes
- [x] Conserver font loading optimisé (Inter)
- **Fichiers concernés** : `apps/web/src/app/layout.tsx`
- **Dépendances** : T-003-000-002
- **Estimation** : 30min
- **Complété le** : 2025-12-23

#### T-003-000-005 : Configuration variables d'environnement
- [x] Mettre à jour `.env.example` avec nouvelles variables (CRM, Analytics, etc.)
- [x] Documenter variables d'environnement nécessaires
- [x] Synchroniser avec `env.example.txt` dans lib/
- **Fichiers concernés** : `apps/web/.env.example`, `apps/web/src/lib/env.example.txt`
- **Dépendances** : Aucune
- **Estimation** : 20min
- **Complété le** : 2025-12-23
- **Note** : Variables pour dev/staging/prod à configurer lors du déploiement

#### T-003-000-006 : Installation Framer Motion (pour Sprint 4)
- [ ] Installer `framer-motion`
- [ ] Configurer pour Next.js (optimisations SSR)
- [ ] Créer helpers pour animations communes
- **Fichiers concernés** : `apps/web/package.json`, `apps/web/src/lib/animations.ts`
- **Dépendances** : T-003-000-004
- **Estimation** : 30min
- **Note** : Peut être fait plus tard si besoin

---

## 🎯 Sprint 1 : Fondations

### US-003-P1-001 : Setup projet et configuration de base

#### T-003-P1-001-001 : Vérification configuration Next.js 14+
- [x] Vérifier version Next.js (15.0.0 installé, >= 14+ ✅)
- [x] Mettre à jour si nécessaire (déjà à jour)
- [x] Vérifier configuration TypeScript strict (activé ✅)
- [x] Vérifier configuration ESLint (configuré ✅)
- **Fichiers concernés** : `apps/web/package.json`, `apps/web/tsconfig.json`, `apps/web/.eslintrc.json`
- **Dépendances** : T-003-000-001
- **Estimation** : 30min
- **Complété le** : 2025-12-23

#### T-003-P1-001-002 : Configuration design tokens dans Tailwind
- [x] Intégrer couleurs du design system dans `tailwind.config.js`
- [x] Intégrer typographies (font families, sizes)
- [x] Intégrer espacements et breakpoints
- [x] Variables CSS shadcn/ui intégrées (HSL format)
- [x] Design tokens ImmoTopia conservés pour compatibilité
- **Fichiers concernés** : `apps/web/tailwind.config.js`
- **Dépendances** : T-003-000-001
- **Estimation** : 1h
- **Complété le** : 2025-12-23
- **Note** : Tests avec composants à faire lors de l'utilisation

#### T-003-P1-001-003 : Configuration environnements
- [ ] Configurer variables d'environnement dev
- [ ] Configurer variables d'environnement staging
- [ ] Configurer variables d'environnement production
- [ ] Documenter configuration par environnement
- **Fichiers concernés** : `.env.local`, `.env.staging`, `.env.production`
- **Dépendances** : T-003-000-005
- **Estimation** : 30min

---

### US-003-P1-002 : Composants UI de base

#### T-003-P1-002-001 : Installation composants shadcn/ui de base
- [x] Installer Button (`npx shadcn@latest add button`)
- [x] Installer Card (`npx shadcn@latest add card`)
- [x] Installer Input (`npx shadcn@latest add input`)
- [x] Installer Select (`npx shadcn@latest add select`)
- [x] Installer Textarea (`npx shadcn@latest add textarea`)
- **Fichiers concernés** : `apps/web/src/components/ui/button.tsx`, `card.tsx`, `input.tsx`, `select.tsx`, `textarea.tsx`
- **Dépendances** : T-003-000-002
- **Estimation** : 30min
- **Complété le** : 2025-12-23

#### T-003-P1-002-002 : Personnalisation composants avec design system
- [x] Composants shadcn/ui installés avec configuration par défaut
- [x] Design tokens intégrés dans Tailwind config (couleurs, typographies, espacements)
- [ ] Personnaliser Button (variantes, couleurs, sizes selon design) - À faire lors de l'utilisation
- [ ] Personnaliser Card (styles, padding, shadows) - À faire lors de l'utilisation
- [ ] Personnaliser Input (styles, states, focus) - À faire lors de l'utilisation
- [ ] Personnaliser Select (styles, dropdown) - À faire lors de l'utilisation
- [ ] Personnaliser Textarea (styles, resize) - À faire lors de l'utilisation
- **Fichiers concernés** : `apps/web/src/components/ui/*.tsx`
- **Dépendances** : T-003-P1-002-001, T-003-P1-001-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (base installée, personnalisation à faire au besoin)

#### T-003-P1-002-003 : Tests accessibilité composants UI
- [ ] Tests accessibilité Button (ARIA, keyboard navigation)
- [ ] Tests accessibilité Card
- [ ] Tests accessibilité Input (labels, error states)
- [ ] Tests accessibilité Select (ARIA combobox)
- [ ] Tests accessibilité Textarea
- [ ] Validation WCAG 2.1 AA avec outils (axe-core, WAVE)
- **Fichiers concernés** : Tests dans `apps/web/src/components/ui/__tests__/`
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h

#### T-003-P1-002-004 : Tests responsive composants UI
- [ ] Tests Button sur mobile/tablet/desktop
- [ ] Tests Card sur différentes tailles d'écran
- [ ] Tests Input/Select/Textarea sur mobile
- [ ] Ajustements responsive si nécessaire
- **Fichiers concernés** : Tests et composants dans `apps/web/src/components/ui/`
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-003-P1-002-003

---

### US-003-P1-003 : Navigation et layout de base

#### T-003-P1-003-001 : Migration Header vers Tailwind CSS
- [x] Remplacer styles Ant Design par Tailwind dans Header
- [x] Remplacer Menu Ant Design par navigation native avec Tailwind
- [x] Remplacer Drawer Ant Design par Sheet shadcn/ui
- [x] Utiliser composants shadcn/ui (Button, Sheet)
- [x] Maintenir fonctionnalités existantes (navigation, logo, CTA)
- [x] Styling responsive avec Tailwind (mobile/desktop)
- [x] Implémenter active state navigation avec usePathname
- [x] Utiliser icônes lucide-react (Menu, X) au lieu de @ant-design/icons
- **Fichiers concernés** : `apps/web/src/components/layout/Header.tsx`, `Header.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-001, T-003-000-004
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-003-002 : Menu mobile responsive avec Tailwind
- [x] Implémenter menu mobile (hamburger) avec Tailwind
- [x] Utiliser composant shadcn/ui Sheet pour le drawer mobile
- [x] Animations d'ouverture/fermeture (incluses dans Sheet)
- [x] Fermeture automatique lors du clic sur un lien
- **Fichiers concernés** : `apps/web/src/components/layout/Header.tsx`
- **Dépendances** : T-003-P1-003-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23
- **Note** : Tests sur devices réels à faire lors des tests utilisateurs

#### T-003-P1-003-003 : Active state navigation
- [x] Implémenter logique détection route active avec usePathname
- [x] Styles active state avec Tailwind (text-primary pour actif)
- [x] Intégré dans Header (desktop et mobile)
- **Fichiers concernés** : `apps/web/src/components/layout/Header.tsx`
- **Dépendances** : T-003-P1-003-001
- **Estimation** : 1h
- **Complété le** : 2025-12-23
- **Note** : Navigation.tsx peut être supprimé si non utilisé ailleurs

#### T-003-P1-003-004 : Migration Footer vers Tailwind CSS
- [x] Remplacer Layout.Footer par footer natif
- [x] Remplacer Row/Col Ant Design par grid Tailwind CSS
- [x] Remplacer Space Ant Design par flex/gap Tailwind
- [x] Remplacer icônes @ant-design/icons par lucide-react
- [x] Migrer tous les styles vers Tailwind CSS
- [x] Maintenir structure (liens, informations légales, contact, social)
- [x] Styling responsive avec grid Tailwind (grid-cols-1 sm:grid-cols-2 md:grid-cols-4)
- [x] Conserver fonctionnalités (email, téléphone, liens sociaux conditionnels)
- **Fichiers concernés** : `apps/web/src/components/layout/Footer.tsx`, `Footer.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-001
- **Estimation** : 1h30
- **Complété le** : 2025-12-23

---

## 🎯 Sprint 2 : Pages principales

### US-003-P1-004 : Page d'accueil complète

#### T-003-P1-004-001 : Migration Hero vers Tailwind CSS
- [x] Remplacer Row/Col Ant Design par flex/grid Tailwind
- [x] Remplacer Typography.Title par h1 natif avec Tailwind
- [x] Remplacer Typography.Paragraph par p natif avec Tailwind
- [x] Remplacer Button Ant Design par Button shadcn/ui
- [x] Remplacer ArrowRightOutlined par ArrowRight lucide-react
- [x] Migrer tous les styles CSS Modules vers Tailwind CSS
- [x] Maintenir message et structure existants (badge, titre, description, CTAs, stats)
- [x] Styling responsive optimisé (text-4xl md:text-5xl lg:text-6xl, flex-col sm:flex-row)
- [x] Conserver ScrollReveal du package @monorepo/ui
- [x] Background gradient avec Tailwind (bg-gradient-to-br from-blue-50 to-sky-100)
- **Fichiers concernés** : `apps/web/src/components/sections/Hero.tsx`, `Hero.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-001, T-003-P1-003-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-004-002 : Section fonctionnalités principales
- [x] Créer section FeaturesPreview avec Tailwind CSS
- [x] Migrer FeatureCard vers Tailwind CSS et shadcn/ui Card
- [x] Utiliser composants Card de shadcn/ui (Card, CardContent)
- [x] Intégrer données fonctionnalités depuis lib/features.ts
- [x] Afficher 6 premières fonctionnalités en grid responsive
- [x] Styling responsive (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- [x] Ajouter CTA "Voir toutes les fonctionnalités"
- [x] Intégrer ScrollReveal pour animations
- [x] Intégrer dans page d'accueil (page.tsx)
- **Fichiers concernés** : `apps/web/src/components/sections/FeaturesPreview.tsx`, `FeatureCard.tsx`, `apps/web/src/app/page.tsx`
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-004-003 : Section témoignages/clients
- [x] Créer composant Testimonials avec Tailwind CSS
- [x] Utiliser Card shadcn/ui pour afficher témoignages
- [x] Intégrer données témoignages mock (3 témoignages)
- [x] Styling responsive (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- [x] Utiliser icône Quote de lucide-react
- [x] Intégrer ScrollReveal pour animations
- [x] Intégrer dans page d'accueil
- **Fichiers concernés** : `apps/web/src/components/sections/Testimonials.tsx`
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-004-004 : Section CTA finale
- [x] Créer section FinalCTA avec Tailwind CSS
- [x] Intégrer liens vers formulaire de démo et tarifs
- [x] Utiliser Button shadcn/ui (variant secondary et outline)
- [x] Styling accrocheur avec gradient background (from-primary to-primary/90)
- [x] Styling responsive (flex-col sm:flex-row)
- [x] Intégrer ScrollReveal pour animations
- [x] Intégrer dans page d'accueil
- **Fichiers concernés** : `apps/web/src/components/sections/FinalCTA.tsx`
- **Dépendances** : T-003-P1-002-001
- **Estimation** : 1h
- **Complété le** : 2025-12-23

#### T-003-P1-004-005 : Assemblage page d'accueil
- [x] Intégrer toutes les sections dans `page.tsx` (Hero, FeaturesPreview, PersonasPreview, Testimonials, FinalCTA)
- [x] Vérifier ordre et flow (Hero → Features → Personas → Testimonials → CTA)
- [x] Intégrer ScrollReveal pour animations entre sections
- [x] Mettre à jour exports dans sections/index.ts
- **Fichiers concernés** : `apps/web/src/app/page.tsx`, `apps/web/src/components/sections/index.ts`
- **Dépendances** : T-003-P1-004-001, T-003-P1-004-002, T-003-P1-004-003, T-003-P1-004-004
- **Estimation** : 1h
- **Complété le** : 2025-12-23
- **Note** : Optimisation images et tests responsive complets à faire lors des tests finaux30

---

### US-003-P1-005 : Page La Solution

#### T-003-P1-005-001 : Migration page principale "La Solution"
- [x] Remplacer Row/Col Ant Design par grid Tailwind CSS
- [x] Remplacer Card Ant Design par Card shadcn/ui
- [x] Remplacer Typography.Title par h1/h2/h3 natifs avec Tailwind
- [x] Remplacer Typography.Paragraph par p natif avec Tailwind
- [x] Remplacer Button Ant Design par Button shadcn/ui
- [x] Remplacer ArrowRightOutlined par ArrowRight lucide-react
- [x] Migrer tous les styles CSS Modules vers Tailwind CSS
- [x] Déplacer metadata vers layout.tsx (correction erreur client component)
- [x] Maintenir contenu existant (hero, 3 cartes solutions, section architecture)
- [x] Styling responsive (grid-cols-1 md:grid-cols-3)
- [x] Hero section avec gradient background
- [x] Architecture section avec background gray-50
- **Fichiers concernés** : `apps/web/src/app/la-solution/page.tsx`, `layout.tsx`, `page.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-005-002 : Sous-page "Portail annonces"
- [x] Migrer styles vers Tailwind CSS
- [x] Utiliser composants shadcn/ui (Card, Button)
- [x] Contenu structuré et engageant (8 fonctionnalités, 4 plateformes, 3 bénéfices)
- [x] CTA intégré (démo et tarifs)
- [x] Metadata SEO dans layout.tsx
- [x] ScrollReveal pour animations
- **Fichiers concernés** : `apps/web/src/app/la-solution/portail-annonces/page.tsx`, `layout.tsx`
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-005-003 : Sous-page "SaaS de gestion"
- [x] Migrer styles vers Tailwind CSS
- [x] Utiliser composants shadcn/ui (Card, Button)
- [x] Contenu structuré (10 fonctionnalités, 3 bénéfices avec métriques)
- [x] CTA intégré (démo et tarifs)
- [x] Metadata SEO dans layout.tsx
- [x] ScrollReveal pour animations
- **Fichiers concernés** : `apps/web/src/app/la-solution/saas-gestion/page.tsx`, `layout.tsx`
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-005-004 : Sous-page "Technologies"
- [x] Migrer styles vers Tailwind CSS
- [x] Utiliser composants shadcn/ui (Card, Button)
- [x] Présenter stack technique (IA avec 5 features, Mobile Money avec 5 features, 4 éléments tech stack)
- [x] CTA intégré (démo et tarifs)
- [x] Metadata SEO dans layout.tsx
- [x] ScrollReveal pour animations
- **Fichiers concernés** : `apps/web/src/app/la-solution/technologies/page.tsx`, `layout.tsx`
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

---

### US-003-P1-006 : Page Fonctionnalités

#### T-003-P1-006-001 : Migration page Fonctionnalités
- [x] Remplacer Row/Col Ant Design par grid Tailwind CSS
- [x] Remplacer Typography.Title par h1 natif avec Tailwind
- [x] Remplacer Typography.Paragraph par p natif avec Tailwind
- [x] Migrer tous les styles CSS Modules vers Tailwind CSS
- [x] Restructurer avec composants Card (déjà fait dans FeatureCard)
- [x] Organiser fonctionnalités par catégories avec Tabs (déjà existant)
- [x] Styling responsive (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- [x] Hero section avec gradient background (from-blue-50 to-sky-100)
- **Fichiers concernés** : `apps/web/src/app/fonctionnalites/page.tsx`, `page.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-006-002 : Amélioration affichage fonctionnalités
- [x] Utiliser Tabs de @monorepo/ui pour catégories (déjà fait)
- [x] FeatureCard déjà migré avec descriptions et visuels
- [x] ScrollReveal intégré pour animations
- **Fichiers concernés** : `apps/web/src/app/fonctionnalites/page.tsx`
- **Dépendances** : T-003-P1-006-001
- **Estimation** : 1h30
- **Complété le** : 2025-12-23
- **Note** : Filtres additionnels peuvent être ajoutés si nécessaire plus tard

---

### US-003-P1-007 : Page Pour qui ? (1 persona minimum)

#### T-003-P1-007-001 : Migration page principale "Pour qui ?"
- [x] Créer composant PersonaCard réutilisable avec Tailwind CSS
- [x] Migrer PersonasPreview vers Tailwind CSS
- [x] Remplacer Row/Col Ant Design par grid Tailwind CSS
- [x] Remplacer Card Ant Design par Card shadcn/ui
- [x] Remplacer Typography par éléments natifs avec Tailwind
- [x] Remplacer Button Ant Design par Button shadcn/ui
- [x] Remplacer ArrowRightOutlined par ArrowRight lucide-react
- [x] Migrer tous les styles CSS Modules vers Tailwind CSS
- [x] Déplacer metadata vers layout.tsx
- [x] Maintenir structure existante (hero, grid personas, CTA)
- [x] Styling responsive (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- **Fichiers concernés** : `apps/web/src/app/pour-qui/page.tsx`, `layout.tsx`, `apps/web/src/components/sections/PersonaCard.tsx`, `PersonasPreview.tsx`, `page.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-007-002 : Migration au moins 1 page persona (ex: Agences)
- [x] Migrer PersonaPageTemplate vers Tailwind CSS
- [x] Remplacer Row/Col Ant Design par grid/flex Tailwind
- [x] Remplacer Card Ant Design par Card shadcn/ui
- [x] Remplacer List Ant Design par ul/li natifs
- [x] Remplacer Typography par éléments natifs
- [x] Remplacer Button Ant Design par Button shadcn/ui
- [x] Remplacer CheckCircleOutlined par CheckCircle lucide-react
- [x] Remplacer ArrowRightOutlined par ArrowRight lucide-react
- [x] Utiliser template persona pour toutes les pages personas
- [x] Adapter contenu personnalisé (déjà fait via données personas)
- [x] CTAs adaptés avec liens personnalisés
- [x] Styling responsive (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4)
- [x] Intégrer ScrollReveal pour animations
- **Fichiers concernés** : `apps/web/src/components/templates/PersonaPageTemplate.tsx`, toutes les pages personas utilisent ce template
- **Dépendances** : T-003-P1-007-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23
- **Note** : Une fois le template migré, toutes les pages personas (Agences, Promoteurs, Syndics, Gestionnaires, Propriétaires) sont automatiquement migrées

---

## 🎯 Sprint 3 : Pages métiers

### US-003-P2-001 : Toutes les pages personas

#### T-003-P2-001-001 : Migration page Agences immobilières
- [x] Migré via PersonaPageTemplate (toutes les pages personas utilisent le même template)
- [x] Contenu personnalisé déjà dans données personas
- [x] CTAs spécifiques avec liens personnalisés
- **Fichiers concernés** : `apps/web/src/app/pour-qui/agences-immobilieres/page.tsx` (utilise template migré)
- **Dépendances** : T-003-P1-007-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P2-001-002 : Migration page Promoteurs
- [x] Migré via PersonaPageTemplate
- [x] Contenu personnalisé promoteurs déjà dans données
- [x] CTAs spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/promoteurs/page.tsx` (utilise template migré)
- **Dépendances** : T-003-P1-007-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P2-001-003 : Migration page Syndics
- [x] Migré via PersonaPageTemplate
- [x] Contenu personnalisé syndics déjà dans données
- [x] CTAs spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/syndics/page.tsx` (utilise template migré)
- **Dépendances** : T-003-P1-007-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P2-001-004 : Migration page Gestionnaires locatifs
- [x] Migré via PersonaPageTemplate
- [x] Contenu personnalisé gestionnaires déjà dans données
- [x] CTAs spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/gestionnaires/page.tsx` (utilise template migré)
- **Dépendances** : T-003-P1-007-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P2-001-005 : Migration page Propriétaires bailleurs
- [x] Migré via PersonaPageTemplate
- [x] Contenu personnalisé propriétaires déjà dans données
- [x] CTAs spécifiques
- **Fichiers concernés** : `apps/web/src/app/pour-qui/proprietaires/page.tsx` (utilise template migré)
- **Dépendances** : T-003-P1-007-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

---

### US-003-P2-002 : Page Tarifs

#### T-003-P2-002-001 : Migration page Tarifs
- [x] Créer composant PricingCard réutilisable avec Tailwind CSS
- [x] Remplacer Row/Col Ant Design par grid Tailwind CSS
- [x] Remplacer Card Ant Design par Card shadcn/ui
- [x] Remplacer List Ant Design par ul/li natifs
- [x] Remplacer Typography par éléments natifs
- [x] Remplacer Button Ant Design par Button shadcn/ui
- [x] Remplacer CheckOutlined par Check lucide-react
- [x] Migrer tous les styles CSS Modules vers Tailwind CSS
- [x] Déplacer metadata vers layout.tsx
- [x] Présentation claire des offres (3 formules : Starter, Professional, Enterprise)
- [x] Badge "Le plus populaire" pour Professional
- [x] Section FAQ avec 3 questions fréquentes
- [x] CTA section pour devis personnalisé
- [x] Styling responsive (grid-cols-1 md:grid-cols-3)
- [x] Intégrer ScrollReveal pour animations
- **Fichiers concernés** : `apps/web/src/app/tarifs/page.tsx`, `layout.tsx`, `apps/web/src/components/sections/PricingCard.tsx`, `page.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 3h
- **Complété le** : 2025-12-23

#### T-003-P2-002-002 : CTA vers demande de devis personnalisé
- [x] Intégrer section CTA avec liens vers contact
- [x] CTA accrocheur avec Card shadcn/ui
- [x] Deux boutons (Demander un devis, Nous contacter)
- [x] Styling responsive
- **Fichiers concernés** : `apps/web/src/app/tarifs/page.tsx`
- **Dépendances** : T-003-P2-002-001
- **Estimation** : 1h
- **Complété le** : 2025-12-23

---

### US-003-P2-003 : Page Pourquoi ImmoTopia

#### T-003-P2-003-001 : Migration page Pourquoi ImmoTopia
- [x] Remplacer Row/Col Ant Design par grid Tailwind CSS
- [x] Remplacer Card Ant Design par Card shadcn/ui
- [x] Remplacer List Ant Design par ul/li natifs
- [x] Remplacer Typography par éléments natifs
- [x] Remplacer CheckCircleOutlined par CheckCircle lucide-react
- [x] Utiliser icône X pour comparaison "Sans ImmoTopia"
- [x] Migrer tous les styles CSS Modules vers Tailwind CSS
- [x] Déplacer metadata vers layout.tsx
- [x] Arguments différenciants (6 avantages en grid)
- [x] Comparaisons avant/après avec deux cards côte à côte
- [x] Section métriques (3 métriques clés)
- [x] Styling responsive (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- [x] Intégrer ScrollReveal pour animations
- **Fichiers concernés** : `apps/web/src/app/pourquoi-immotopia/page.tsx`, `layout.tsx`, `page.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h30
- **Complété le** : 2025-12-23

#### T-003-P2-003-002 : Section preuves sociales
- [x] Intégrer composant Testimonials existant
- [x] Section témoignages clients déjà créée (Testimonials)
- [x] Styling avec Card components shadcn/ui
- **Fichiers concernés** : `apps/web/src/app/pourquoi-immotopia/page.tsx`
- **Dépendances** : T-003-P2-003-001
- **Estimation** : 1h30
- **Complété le** : 2025-12-23
- **Note** : Cas clients / études de cas peuvent être ajoutés plus tard si disponibles

---

### US-003-P2-004 : Section Ressources/Blog

#### T-003-P2-004-001 : Migration structure Ressources
- [x] Migrer page principale ressources vers Tailwind CSS
- [x] Remplacer Row/Col Ant Design par grid Tailwind CSS
- [x] Remplacer Card Ant Design par Card shadcn/ui
- [x] Remplacer Typography par éléments natifs
- [x] Remplacer icônes Ant Design par lucide-react (FileText, BookOpen, Bell)
- [x] Remplacer Button Ant Design par Button shadcn/ui
- [x] Remplacer ArrowRightOutlined par ArrowRight lucide-react
- [x] Créer structure de catégories (Blog, Guides, Actualités) avec cards
- [x] Navigation entre sections via liens vers sous-pages
- [x] Déplacer metadata vers layout.tsx
- [x] Styling responsive (grid-cols-1 md:grid-cols-3)
- [x] Intégrer ScrollReveal pour animations
- **Fichiers concernés** : `apps/web/src/app/ressources/page.tsx`, `layout.tsx`, `page.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P2-004-002 : Pages Blog, Guides, Actualités
- [x] Migrer pages sous-sections vers Tailwind CSS
- [x] Structure de base avec hero section
- [x] Placeholder pour contenu futur
- [x] Styling cohérent avec le reste du site
- **Fichiers concernés** : `apps/web/src/app/ressources/blog/page.tsx`, `guides/page.tsx`, `actualites/page.tsx`
- **Dépendances** : T-003-P2-004-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23
- **Note** : Structure d'affichage articles, catégorisation et filtres à implémenter quand le contenu sera disponible (CMS ou markdown)

---

### US-003-P1-008 : Formulaires fonctionnels avec validation

#### T-003-P1-008-001 : Migration formulaire de démo vers shadcn/ui
- [x] Remplacer Form Ant Design par form natif
- [x] Remplacer Input Ant Design par Input shadcn/ui
- [x] Remplacer Select Ant Design par Select shadcn/ui
- [x] Remplacer TextArea Ant Design par Textarea shadcn/ui
- [x] Remplacer Button Ant Design par Button shadcn/ui
- [x] Remplacer message.success/error Ant Design par toast (sonner)
- [x] Ajouter composant Label shadcn/ui
- [x] Maintenir validation React Hook Form + Zod existante
- [x] Adapter styles avec Tailwind CSS (space-y-6, space-y-2)
- [x] Gestion des erreurs avec messages sous les champs
- [x] Ajouter Toaster dans layout.tsx
- [x] Réinitialisation du formulaire après soumission réussie
- **Fichiers concernés** : `apps/web/src/components/forms/DemoRequestForm.tsx`, `apps/web/src/components/ui/label.tsx`, `apps/web/src/components/ui/sonner.tsx`, `apps/web/src/app/layout.tsx`, `DemoRequestForm.module.css` (peut être supprimé)
- **Dépendances** : T-003-P1-002-002, T-003-P1-002-003
- **Estimation** : 2h
- **Complété le** : 2025-12-23

#### T-003-P1-008-002 : Amélioration validation et messages d'erreur
- [x] Améliorer messages d'erreur (clarté, accessibilité) - messages Zod améliorés
- [x] Validation en temps réel (mode: 'onBlur', reValidateMode: 'onChange')
- [x] Créer composant FormMessage pour affichage cohérent des erreurs
- [x] Accessibilité améliorée (aria-invalid, aria-describedby, roles ARIA)
- [x] Schéma Zod amélioré avec validation plus stricte (trim, max length, regex téléphone)
- **Fichiers concernés** : `apps/web/src/components/forms/DemoRequestForm.tsx`, `packages/contracts/src/demo-request.ts`, `apps/web/src/components/ui/form-message.tsx`
- **Dépendances** : T-003-P1-008-001
- **Estimation** : 1h
- **Complété le** : 2025-12-23

#### T-003-P1-008-003 : Protection anti-spam (honeypot/reCAPTCHA)
- [x] Implémenter champ honeypot (champ caché "website")
- [x] Validation côté client (bloque soumission si honeypot rempli)
- [x] Champ invisible avec styles CSS (absolute, left-[-9999px], opacity-0)
- [x] Accessibilité (aria-hidden, tabIndex={-1})
- **Fichiers concernés** : `apps/web/src/components/forms/DemoRequestForm.tsx`
- **Dépendances** : T-003-P1-008-002
- **Estimation** : 1h30
- **Complété le** : 2025-12-23
- **Note** : reCAPTCHA v3 peut être ajouté plus tard si nécessaire (besoin d'une clé API)

#### T-003-P1-008-004 : Message de confirmation
- [x] Implémenter message de confirmation avec toast (sonner)
- [x] Toast success après soumission réussie
- [x] Toast error en cas d'erreur
- [x] Réinitialisation du formulaire après succès
- **Fichiers concernés** : `apps/web/src/components/forms/DemoRequestForm.tsx`
- **Dépendances** : T-003-P1-008-002
- **Estimation** : 1h
- **Complété le** : 2025-12-23
- **Note** : Déjà implémenté avec toast.success/toast.error dans T-003-P1-008-001

---

## 🎯 Sprint 4 : Intégrations et Optimisations

### US-003-P2-005 : Intégration CRM (HubSpot/Pipedrive)

#### T-003-P2-005-001 : Configuration webhook CRM
- [x] Support HubSpot et Pipedrive (configurable via CRM_PROVIDER)
- [x] Créer fonction d'envoi vers CRM (sendToCRM)
- [x] Configurer mapping données formulaire → CRM (mapToCRMFormat)
- [x] Gestion erreurs non-bloquante
- [x] Intégration dans API route avec protection honeypot
- [x] Fonction isCRMConfigured() pour vérification
- **Fichiers concernés** : `apps/web/src/app/api/demo-request/route.ts`, `apps/web/src/lib/crm.ts`
- **Dépendances** : T-003-P1-008-001
- **Estimation** : 3h
- **Complété le** : 2025-12-23
- **Note** : Nécessite CRM_API_KEY et CRM_PORTAL_ID (pour HubSpot) dans variables d'environnement

#### T-003-P2-005-002 : Notifications email
- [x] Support SendGrid et Resend (configurable via EMAIL_SERVICE)
- [x] Template email HTML et texte brut professionnel
- [x] Fonction sendNotificationEmail() avec gestion erreurs
- [x] Intégration dans API route
- [x] Fonction isEmailConfigured() pour vérification
- **Fichiers concernés** : `apps/web/src/app/api/demo-request/route.ts`, `apps/web/src/lib/email.ts`
- **Dépendances** : T-003-P2-005-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23
- **Note** : Nécessite EMAIL_API_KEY dans variables d'environnement. Tests à faire avec vraies clés API.

#### T-003-P2-005-003 : Tests d'intégration CRM
- [ ] Tests unitaires fonction CRM
- [ ] Tests intégration complète formulaire → API → CRM
- [ ] Tests gestion erreurs
- **Fichiers concernés** : Tests dans `apps/web/src/__tests__/` ou `apps/web/tests/`
- **Dépendances** : T-003-P2-005-002
- **Estimation** : 2h

---

### US-003-P2-006 : Analytics et tracking (GA4)

#### T-003-P2-006-001 : Configuration Google Analytics 4
- [x] Créer composant GoogleAnalytics avec next/script
- [x] Configurer tracking de base (page views automatiques)
- [x] Créer helpers pour tracking events (trackEvent, trackCTAClick, trackFormSubmission, etc.)
- [x] Intégrer dans layout.tsx
- [x] Utiliser NEXT_PUBLIC_GA_MEASUREMENT_ID depuis variables d'environnement
- [x] Gérer cas où GA4 n'est pas configuré (dev mode)
- **Fichiers concernés** : `apps/web/src/lib/analytics.ts`, `apps/web/src/components/analytics/GoogleAnalytics.tsx`, `apps/web/src/app/layout.tsx`
- **Dépendances** : T-003-000-004
- **Estimation** : 1h30
- **Complété le** : 2025-12-23

#### T-003-P2-006-002 : Événements personnalisés GA4
- [x] Événement "clic CTA" (trackCTAClick) - intégré dans Hero et FinalCTA
- [x] Événement "soumission formulaire" (trackFormSubmission) - intégré dans DemoRequestForm
- [x] Helpers pour autres événements (trackScrollDepth, trackDownload, trackOutboundLink)
- [x] Structure prête pour événements supplémentaires
- **Fichiers concernés** : `apps/web/src/lib/analytics.ts`, `apps/web/src/components/sections/Hero.tsx`, `FinalCTA.tsx`, `DemoRequestForm.tsx`
- **Dépendances** : T-003-P2-006-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23
- **Note** : Scroll depth peut être ajouté avec un hook personnalisé si nécessaire

#### T-003-P2-006-003 : Configuration Goals de conversion
- [ ] Configurer goal "Demande de démo"
- [ ] Configurer goal "Contact"
- [ ] Tests déclenchement goals
- **Fichiers concernés** : Configuration GA4 (dashboard)
- **Dépendances** : T-003-P2-006-002
- **Estimation** : 1h

#### T-003-P2-006-004 : Intégration Hotjar
- [ ] Installer script Hotjar
- [ ] Configurer heatmaps
- [ ] Configurer enregistrements de session
- [ ] Tests intégration
- **Fichiers concernés** : `apps/web/src/lib/analytics.ts`, `apps/web/src/app/layout.tsx`
- **Dépendances** : T-003-P2-006-001
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-003-P2-006-002

---

### SEO technique

#### T-003-SEO-001 : Balises meta optimisées par page
- [x] Meta title et description pour chaque page (via generateMetadata)
- [x] OpenGraph tags (og:title, og:description, og:image) - intégrés dans generateMetadata
- [x] Twitter Cards - intégrées dans generateMetadata
- [x] Canonical URLs - intégrées dans generateMetadata
- [x] Toutes les pages utilisent generateMetadata avec layout.tsx
- **Fichiers concernés** : `apps/web/src/app/**/layout.tsx` (metadata exports), `apps/web/src/lib/seo.ts`
- **Dépendances** : Toutes les pages créées
- **Estimation** : 3h
- **Complété le** : 2025-12-23
- **Note** : Toutes les pages principales ont leurs metadata configurées

#### T-003-SEO-002 : Schema.org structured data
- [x] Créer helpers pour Schema.org (generateOrganizationSchema, generateServiceSchema, generateFAQSchema, generateWebsiteSchema)
- [x] Schema Organization - intégré dans layout.tsx
- [x] Schema WebSite - intégré dans layout.tsx
- [x] Schema FAQPage - intégré dans page Tarifs
- [x] Composant StructuredData pour injecter JSON-LD
- **Fichiers concernés** : `apps/web/src/lib/structured-data.ts`, `apps/web/src/components/seo/StructuredData.tsx`, `apps/web/src/app/layout.tsx`, `tarifs/page.tsx`
- **Dépendances** : T-003-SEO-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23
- **Note** : Schema Service peut être ajouté sur les pages fonctionnalités si nécessaire

#### T-003-SEO-003 : Sitemap XML et robots.txt
- [x] Mettre à jour sitemap.ts dynamique avec toutes les pages (15+ routes)
- [x] Créer robots.ts dynamique (remplace robots.txt statique)
- [x] Configurer règles robots.txt (allow /, disallow /api/ et /admin/)
- [x] Référencer sitemap dans robots.txt
- **Fichiers concernés** : `apps/web/src/app/sitemap.ts`, `apps/web/src/app/robots.ts`
- **Dépendances** : Toutes les pages créées
- **Estimation** : 1h
- **Complété le** : 2025-12-23

---

### US-003-P3-001 : Animations et micro-interactions

#### T-003-P3-001-001 : Animations au scroll avec Framer Motion
- [ ] Créer composant ScrollReveal réutilisable
- [ ] Appliquer animations sur Hero
- [ ] Appliquer animations sur sections principales
- [ ] Vérifier performance (60fps)
- **Fichiers concernés** : `apps/web/src/components/animations/ScrollReveal.tsx`, sections concernées
- **Dépendances** : T-003-000-006, T-003-P1-004-001
- **Estimation** : 3h

#### T-003-P3-001-002 : Transitions de page fluides
- [ ] Implémenter transitions entre pages
- [ ] Utiliser Framer Motion page transitions
- [ ] Tests UX transitions
- **Fichiers concernés** : `apps/web/src/components/animations/PageTransition.tsx`, `apps/web/src/app/layout.tsx`
- **Dépendances** : T-003-000-006
- **Estimation** : 2h

#### T-003-P3-001-003 : Micro-interactions boutons/liens
- [ ] Hover states améliorés
- [ ] Click animations subtiles
- [ ] Loading states
- **Fichiers concernés** : Composants UI, boutons, liens
- **Dépendances** : T-003-P1-002-002
- **Estimation** : 2h

---

### US-003-P3-002 : Facebook Pixel et LinkedIn Insight Tag

#### T-003-P3-002-001 : Configuration Facebook Pixel (si nécessaire)
- [ ] Installer Facebook Pixel
- [ ] Configurer événements de conversion (PageView, Lead, etc.)
- [ ] Tests déclenchement événements
- **Fichiers concernés** : `apps/web/src/lib/analytics.ts`, `apps/web/src/app/layout.tsx`
- **Dépendances** : T-003-P2-006-001
- **Estimation** : 1h30

#### T-003-P3-002-002 : Configuration LinkedIn Insight Tag (si nécessaire)
- [ ] Installer LinkedIn Insight Tag
- [ ] Configurer événements de conversion
- [ ] Tests déclenchement événements
- **Fichiers concernés** : `apps/web/src/lib/analytics.ts`, `apps/web/src/app/layout.tsx`
- **Dépendances** : T-003-P2-006-001
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec T-003-P3-002-001

---

### Optimisations performances

#### T-003-PERF-001 : Optimisation images
- [ ] Convertir images en WebP/AVIF
- [ ] Utiliser Next.js Image component partout
- [ ] Lazy loading images
- [ ] Tests performance images
- **Fichiers concernés** : Toutes les pages avec images
- **Dépendances** : Toutes les pages créées
- **Estimation** : 2h

#### T-003-PERF-002 : Code splitting et lazy loading
- [ ] Lazy load composants lourds
- [ ] Optimiser imports
- [ ] Vérifier bundle size
- **Fichiers concernés** : Composants, pages
- **Dépendances** : Toutes les pages créées
- **Estimation** : 2h

#### T-003-PERF-003 : Optimisation CSS
- [ ] Purge CSS Tailwind (production)
- [ ] Minification CSS
- [ ] Vérifier taille CSS finale
- **Fichiers concernés** : Configuration Tailwind, build
- **Dépendances** : T-003-000-001
- **Estimation** : 1h

#### T-003-PERF-004 : Audit Lighthouse et optimisations
- [ ] Audit Lighthouse complet
- [ ] Corriger problèmes Performance
- [ ] Corriger problèmes Accessibility
- [ ] Corriger problèmes Best Practices
- [ ] Corriger problèmes SEO
- [ ] Objectif : Score > 90 sur tous les critères
- **Fichiers concernés** : Tous
- **Dépendances** : Toutes les optimisations précédentes
- **Estimation** : 3h

---

### Tests cross-browser

#### T-003-TEST-001 : Tests Chrome (desktop et mobile)
- [ ] Tests fonctionnels
- [ ] Tests responsive
- [ ] Tests performances
- [ ] Corrections bugs éventuels
- **Fichiers concernés** : Tous
- **Dépendances** : Tous les développements
- **Estimation** : 2h

#### T-003-TEST-002 : Tests Firefox
- [ ] Tests fonctionnels
- [ ] Tests responsive
- [ ] Corrections bugs éventuels
- **Fichiers concernés** : Tous
- **Dépendances** : Tous les développements
- **Estimation** : 1h30

#### T-003-TEST-003 : Tests Safari (desktop et mobile)
- [ ] Tests fonctionnels
- [ ] Tests responsive
- [ ] Corrections bugs spécifiques Safari
- **Fichiers concernés** : Tous
- **Dépendances** : Tous les développements
- **Estimation** : 2h

#### T-003-TEST-004 : Tests Edge
- [ ] Tests fonctionnels
- [ ] Tests responsive
- [ ] Corrections bugs éventuels
- **Fichiers concernés** : Tous
- **Dépendances** : Tous les développements
- **Estimation** : 1h

---

## ✨ Phase 3 : Polish et finalisation

### T-003-POLISH-001 : Refactoring final
- [ ] Identifier code à refactorer
- [ ] Appliquer refactoring (DRY, composants réutilisables)
- [ ] Nettoyer code mort
- [ ] Optimiser imports
- **Dépendances** : Toutes les tâches P1 et P2
- **Estimation** : 3h

### T-003-POLISH-002 : Documentation
- [ ] Documenter composants complexes
- [ ] Documenter intégrations (CRM, Analytics)
- [ ] Mettre à jour README si nécessaire
- [ ] Documentation déploiement
- **Dépendances** : T-003-POLISH-001
- **Estimation** : 2h

### T-003-POLISH-003 : Checklist finale de qualité
- [ ] Vérification accessibilité (WCAG 2.1 AA)
- [ ] Vérification sécurité (validation, CSRF, etc.)
- [ ] Vérification responsive (tous devices)
- [ ] Vérification SEO (meta tags, structured data)
- [ ] Vérification performance (Lighthouse > 90)
- **Dépendances** : T-003-POLISH-002
- **Estimation** : 2h

---

## 📋 Légende

- **[P]** : Tâche parallélisable
- **Dépendances** : Tâches qui doivent être complétées avant
- **Estimation** : Temps estimé pour la tâche
- **Phase 0** : Setup et fondations (migration vers Tailwind CSS + shadcn/ui)
- **Sprint 1** : Fondations (composants UI, navigation)
- **Sprint 2** : Pages principales (Accueil, Solution, Fonctionnalités, Pour qui)
- **Sprint 3** : Pages métiers (personas, Tarifs, Pourquoi, Ressources, Formulaires)
- **Sprint 4** : Intégrations et Optimisations (CRM, Analytics, SEO, Animations, Performance)

---

## 🔗 Références

- [Spec](./spec.md)
- [Plan](./plan.md)

