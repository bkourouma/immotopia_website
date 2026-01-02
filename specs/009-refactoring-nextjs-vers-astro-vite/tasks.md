# Tâches d'implémentation : 009-refactoring-nextjs-vers-astro-vite

**Date de création** : 2026-01-02  
**Statut** : 📋 Planning

---

## 📊 Vue d'ensemble

**Total de tâches** : 85+  
**Tâches Phase 0** : 8  
**Tâches P1** : 45  
**Tâches P2** : 20  
**Tâches P3** : 12

---

## 🔧 Phase 0 : Setup et fondations

### T-009-000 : Audit et recherche initiale
- [x] Analyser toutes les pages Next.js (`apps/web/src/app/**/*.tsx`)
- [x] Identifier les composants réutilisables vs spécifiques Next.js
- [x] Documenter les routes API utilisées par le frontend
- [x] Lister les dépendances Next.js spécifiques (`next/image`, `next/link`, etc.)
- [x] Mesurer l'utilisation RAM actuelle (baseline)
- [x] Analyser les composants admin pour identifier la logique métier
- [x] Vérifier les intégrations (Google Analytics, etc.)
- **Fichiers concernés** : `apps/web/` (analyse uniquement)
- **Dépendances** : Aucune
- **Estimation** : 2h
- **Livrables** : `research.md`, `migration-mapping.md`, `baseline-metrics.md`
- **✅ Complété le 2026-01-02** : Documents de recherche créés avec inventaire complet

### T-009-001 : Setup Astro - Création projet
- [x] Créer `apps/public-site` avec `pnpm create astro@latest`
- [x] Configurer TypeScript dans Astro
- [x] Installer intégrations : `@astrojs/tailwind`, `@astrojs/mdx`, `@astrojs/sitemap`
- [x] Configurer `astro.config.mjs` (output: static, site URL)
- [x] Créer structure de dossiers (`src/pages`, `src/components`, `src/layouts`, `src/lib`)
- [ ] Configurer alias de chemins si nécessaire
- [ ] Ajouter packages workspace (@monorepo/*) - À faire après T-009-003
- **Fichiers concernés** : `apps/public-site/` (nouveau)
- **Dépendances** : T-009-000
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-009-002
- **✅ Partiellement complété le 2026-01-02** : Projet créé, intégrations installées, configuré. Packages workspace à ajouter après T-009-003

### T-009-002 : Setup Vite + React - Création projet
- [x] Créer `apps/admin-panel` avec `pnpm create vite@latest --template react-ts`
- [x] Configurer TypeScript dans Vite
- [x] Installer dépendances : `react-router-dom`, `antd`, `axios`
- [x] Configurer `vite.config.ts` (plugins, build options, proxy API)
- [x] Créer structure de dossiers (`src/pages`, `src/components`, `src/layouts`, `src/routes`, `src/lib`, `src/hooks`, `src/contexts`)
- [x] Configurer alias de chemins (`@/` pour `src/`)
- [x] Setup proxy API en développement
- **Fichiers concernés** : `apps/admin-panel/` (nouveau)
- **Dépendances** : T-009-000
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec T-009-001
- **✅ Complété le 2026-01-02** : Projet créé, dépendances installées, configuré avec proxy API et alias

### T-009-003 : Configuration workspace monorepo
- [x] Mettre à jour `pnpm-workspace.yaml` pour inclure `apps/public-site` et `apps/admin-panel`
- [x] Ajouter scripts dans `package.json` racine si nécessaire
- [x] Vérifier que les packages `@monorepo/*` sont accessibles
- [x] Tester `pnpm install` dans le workspace
- **Fichiers concernés** : `pnpm-workspace.yaml`, `package.json` (racine)
- **Dépendances** : T-009-001, T-009-002
- **Estimation** : 30min
- **✅ Complété le 2026-01-02** : Workspace déjà configuré avec `apps/*`, packages workspace fonctionnent correctement

### T-009-004 : Adaptation package @monorepo/ui
- [x] Supprimer dépendances Next.js de `packages/ui/package.json`
- [x] Adapter composants pour Astro (supporter `.astro`)
- [x] Adapter composants pour React pur (Vite)
- [ ] Tester compatibilité Astro (créer test simple)
- [ ] Tester compatibilité Vite (créer test simple)
- [x] Mettre à jour exports si nécessaire
- **Fichiers concernés** : `packages/ui/**/*`
- **Dépendances** : T-009-001, T-009-002
- **Estimation** : 2h
- **✅ Partiellement complété le 2026-01-02** : Dépendances Next.js supprimées, composant Button adapté pour accepter LinkComponent. Tests à faire lors de la migration des pages.

### T-009-005 : Configuration API - CORS et variables
- [x] Mettre à jour CORS dans `apps/api/src/index.ts` pour 2 origines (Astro + Vite)
- [x] Ajouter variables d'environnement dans `apps/api/.env` :
  - `PUBLIC_SITE_URL`
  - `ADMIN_PANEL_URL`
- [ ] Tester endpoints depuis Astro (fetch depuis `apps/public-site`)
- [ ] Tester endpoints depuis Vite (fetch depuis `apps/admin-panel`)
- [ ] Vérifier que les cookies de session fonctionnent
- **Fichiers concernés** : `apps/api/src/index.ts`, `apps/api/.env`
- **Dépendances** : T-009-001, T-009-002
- **Estimation** : 1h
- **✅ Partiellement complété le 2026-01-02** : CORS configuré pour accepter plusieurs origines, variables documentées dans README. Tests à faire lors de la migration des pages.

### T-009-006 : Setup layouts Astro de base
- [x] Créer `src/layouts/BaseLayout.astro` (layout principal)
- [x] Migrer styles globaux depuis Next.js
- [x] Intégrer Tailwind CSS dans Astro
- [x] Créer composants Header et Footer (Astro)
- [x] Tester le layout sur une page simple
- **Fichiers concernés** : `apps/public-site/src/layouts/BaseLayout.astro`, `apps/public-site/src/components/layout/`
- **Dépendances** : T-009-001, T-009-004
- **Estimation** : 2h
- **✅ Complété le 2026-01-02** : Layout créé avec Header et Footer simplifiés, styles globaux migrés, page index mise à jour

### T-009-007 : Setup API client Astro
- [x] Créer `src/lib/api/blog.ts` (fonctions `getAllBlogPosts`, `getBlogPost`)
- [x] Créer `src/lib/api/guides.ts` (fonctions `getAllGuides`, `getGuide`)
- [x] Créer `src/lib/api/faq.ts` (fonction `getFAQData`)
- [x] Créer `src/lib/api/contact.ts` (fonction pour formulaire contact)
- [x] Configurer variable d'environnement `PUBLIC_API_URL`
- [ ] Tester les fonctions avec l'API réelle
- **Fichiers concernés** : `apps/public-site/src/lib/api/*.ts`
- **Dépendances** : T-009-001, T-009-005
- **Estimation** : 2h
- **✅ Partiellement complété le 2026-01-02** : Tous les clients API créés. Tests à faire lors de la migration des pages.

### T-009-008 : Setup React Router et Auth Context (Vite)
- [x] Créer `src/routes/index.tsx` (configuration routes React Router)
- [x] Créer `src/routes/ProtectedRoute.tsx` (route protégée)
- [x] Créer `src/contexts/AuthContext.tsx` (gestion authentification)
- [x] Créer `src/lib/api/auth.ts` (fonctions login, logout, getCurrentUser)
- [x] Créer `src/lib/api/client.ts` (client API centralisé)
- [x] Configurer variable d'environnement `VITE_API_URL`
- [ ] Tester authentification avec l'API
- **Fichiers concernés** : `apps/admin-panel/src/routes/`, `apps/admin-panel/src/contexts/`, `apps/admin-panel/src/lib/api/`
- **Dépendances** : T-009-002, T-009-005
- **Estimation** : 2h30
- **✅ Partiellement complété le 2026-01-02** : React Router configuré, AuthContext créé, API client créé. Tests à faire lors de la migration des pages admin.

---

## 🎯 User Stories P1 - Priorité Critique

### US-009-P1-001 : Migration page Home (Astro)

#### T-009-P1-001-001 : Migrer page Home vers Astro
- [ ] Copier contenu de `apps/web/src/app/page.tsx`
- [ ] Convertir en `apps/public-site/src/pages/index.astro`
- [ ] Migrer composants `HomePageContent` et `HomePageClient`
- [ ] Adapter styles Tailwind
- [ ] Vérifier que le layout BaseLayout est utilisé
- [ ] Tester visuellement (comparer avec Next.js)
- **Fichiers concernés** : `apps/public-site/src/pages/index.astro`, `apps/public-site/src/components/pages/`
- **Dépendances** : T-009-006
- **Estimation** : 2h

#### T-009-P1-001-002 : Implémenter métadonnées SEO page Home
- [ ] Migrer metadata depuis Next.js
- [ ] Implémenter Open Graph tags
- [ ] Implémenter Twitter Cards
- [ ] Ajouter structured data (JSON-LD Organization, Website)
- [ ] Vérifier avec outils SEO (Google Rich Results)
- **Fichiers concernés** : `apps/public-site/src/pages/index.astro`
- **Dépendances** : T-009-P1-001-001
- **Estimation** : 1h

### US-009-P1-002 : Migration pages marketing (Astro)

#### T-009-P1-002-001 : Migrer page Fonctionnalités
- [ ] Copier contenu de `apps/web/src/app/fonctionnalites/page.tsx`
- [ ] Convertir en `apps/public-site/src/pages/fonctionnalites.astro`
- [ ] Migrer composants associés
- [ ] Adapter styles
- [ ] Tester visuellement
- **Fichiers concernés** : `apps/public-site/src/pages/fonctionnalites.astro`
- **Dépendances** : T-009-006
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec autres pages marketing

#### T-009-P1-002-002 : Migrer page Tarifs
- [ ] Copier contenu de `apps/web/src/app/tarifs/page.tsx`
- [ ] Convertir en `apps/public-site/src/pages/tarifs.astro`
- [ ] Migrer composants associés
- [ ] Adapter styles
- [ ] Tester visuellement
- **Fichiers concernés** : `apps/public-site/src/pages/tarifs.astro`
- **Dépendances** : T-009-006
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec autres pages marketing

#### T-009-P1-002-003 : Migrer pages La Solution
- [ ] Copier contenu de `apps/web/src/app/la-solution/page.tsx`
- [ ] Convertir en `apps/public-site/src/pages/la-solution/index.astro`
- [ ] Migrer sous-pages si elles existent
- [ ] Adapter styles
- [ ] Tester visuellement
- **Fichiers concernés** : `apps/public-site/src/pages/la-solution/`
- **Dépendances** : T-009-006
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec autres pages marketing

#### T-009-P1-002-004 : Migrer page Pour Qui
- [ ] Copier contenu de `apps/web/src/app/pour-qui/page.tsx`
- [ ] Convertir en `apps/public-site/src/pages/pour-qui.astro`
- [ ] Migrer composants associés
- [ ] Adapter styles
- [ ] Tester visuellement
- **Fichiers concernés** : `apps/public-site/src/pages/pour-qui.astro`
- **Dépendances** : T-009-006
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec autres pages marketing

#### T-009-P1-002-005 : Implémenter métadonnées SEO pages marketing
- [ ] Ajouter metadata pour chaque page marketing
- [ ] Implémenter Open Graph tags
- [ ] Implémenter Twitter Cards
- [ ] Vérifier avec outils SEO
- **Fichiers concernés** : `apps/public-site/src/pages/*.astro`
- **Dépendances** : T-009-P1-002-001 à T-009-P1-002-004
- **Estimation** : 2h

### US-009-P1-003 : Migration Blog (Astro)

#### T-009-P1-003-001 : Créer page listing Blog
- [ ] Créer `apps/public-site/src/pages/blog/index.astro`
- [ ] Utiliser `getAllBlogPosts()` pour récupérer articles
- [ ] Implémenter `getStaticPaths()` si nécessaire
- [ ] Migrer composant `ArticleCard` ou équivalent
- [ ] Implémenter pagination si nécessaire
- [ ] Tester avec articles réels depuis API
- **Fichiers concernés** : `apps/public-site/src/pages/blog/index.astro`
- **Dépendances** : T-009-007
- **Estimation** : 2h

#### T-009-P1-003-002 : Créer page détail article Blog
- [ ] Créer `apps/public-site/src/pages/blog/[slug].astro`
- [ ] Implémenter `getStaticPaths()` pour générer toutes les pages
- [ ] Utiliser `getBlogPost(slug)` pour récupérer article
- [ ] Rendre le contenu Markdown (utiliser `@astrojs/mdx` ou `remark`)
- [ ] Migrer composants blog (ArticleHeader, ArticleContent, etc.)
- [ ] Implémenter métadonnées SEO dynamiques (seoTitle, seoDescription, ogImage)
- [ ] Tester avec articles réels
- **Fichiers concernés** : `apps/public-site/src/pages/blog/[slug].astro`
- **Dépendances** : T-009-007, T-009-P1-003-001
- **Estimation** : 3h

#### T-009-P1-003-003 : Implémenter génération statique Blog
- [ ] Vérifier que `getStaticPaths()` génère toutes les pages au build
- [ ] Tester build Astro avec plusieurs articles
- [ ] Vérifier que les pages 404 fonctionnent pour slugs invalides
- [ ] Optimiser temps de build si nécessaire
- **Fichiers concernés** : `apps/public-site/src/pages/blog/[slug].astro`
- **Dépendances** : T-009-P1-003-002
- **Estimation** : 1h

### US-009-P1-004 : Migration Guides (Astro)

#### T-009-P1-004-001 : Créer page listing Guides
- [ ] Créer `apps/public-site/src/pages/ressources/guides/index.astro`
- [ ] Utiliser `getAllGuides()` pour récupérer guides
- [ ] Migrer composants guides (GuideCard, etc.)
- [ ] Implémenter catégories si nécessaire
- [ ] Tester avec guides réels depuis API
- **Fichiers concernés** : `apps/public-site/src/pages/ressources/guides/index.astro`
- **Dépendances** : T-009-007
- **Estimation** : 2h

#### T-009-P1-004-002 : Créer page détail Guide
- [ ] Créer `apps/public-site/src/pages/ressources/guides/[slug].astro`
- [ ] Implémenter `getStaticPaths()` pour générer toutes les pages
- [ ] Utiliser `getGuide(slug)` pour récupérer guide
- [ ] Rendre le contenu Markdown
- [ ] Implémenter téléchargement PDF si `downloadablePdfMediaId` existe
- [ ] Implémenter formulaire lead si `gatedDownload` est true
- [ ] Implémenter métadonnées SEO dynamiques
- **Fichiers concernés** : `apps/public-site/src/pages/ressources/guides/[slug].astro`
- **Dépendances** : T-009-007, T-009-P1-004-001
- **Estimation** : 3h

### US-009-P1-005 : Migration FAQ (Astro)

#### T-009-P1-005-001 : Créer page FAQ
- [ ] Créer `apps/public-site/src/pages/faq.astro`
- [ ] Utiliser `getFAQData()` pour récupérer questions
- [ ] Migrer composants FAQ (FAQAccordion, etc.)
- [ ] Implémenter recherche si présente dans Next.js
- [ ] Implémenter catégories si présentes
- [ ] Tester avec questions réelles depuis API
- **Fichiers concernés** : `apps/public-site/src/pages/faq.astro`
- **Dépendances** : T-009-007
- **Estimation** : 2h

### US-009-P1-006 : Migration page Contact (Astro)

#### T-009-P1-006-001 : Créer page Contact et formulaire
- [ ] Créer `apps/public-site/src/pages/contact.astro`
- [ ] Créer composant `<ContactForm />` (client-side avec React island si nécessaire)
- [ ] Implémenter validation Zod côté client
- [ ] Implémenter fetch vers API (`/api/contact` ou équivalent)
- [ ] Gérer CSRF token si nécessaire
- [ ] Implémenter messages de succès/erreur
- [ ] Tester envoi de formulaire
- **Fichiers concernés** : `apps/public-site/src/pages/contact.astro`, `apps/public-site/src/components/ContactForm.astro`
- **Dépendances** : T-009-007
- **Estimation** : 2h30

### US-009-P1-007 : Génération Sitemap et RSS (Astro)

#### T-009-P1-007-001 : Configurer @astrojs/sitemap
- [ ] Installer et configurer `@astrojs/sitemap` dans `astro.config.mjs`
- [ ] Configurer options (changefreq, priority, lastmod)
- [ ] Tester génération sitemap.xml au build
- [ ] Vérifier que toutes les pages sont incluses
- **Fichiers concernés** : `apps/public-site/astro.config.mjs`
- **Dépendances** : T-009-P1-001-001, T-009-P1-003-002, T-009-P1-004-002
- **Estimation** : 1h

#### T-009-P1-007-002 : Créer endpoint RSS.xml
- [ ] Créer `apps/public-site/src/pages/rss.xml.ts`
- [ ] Utiliser `getAllBlogPosts()` pour récupérer articles
- [ ] Générer RSS XML au format RSS 2.0
- [ ] Inclure métadonnées (title, description, pubDate, author, etc.)
- [ ] Tester avec feed reader
- **Fichiers concernés** : `apps/public-site/src/pages/rss.xml.ts`
- **Dépendances** : T-009-007, T-009-P1-003-001
- **Estimation** : 1h30

#### T-009-P1-007-003 : Créer robots.txt
- [ ] Créer `apps/public-site/src/pages/robots.txt.ts`
- [ ] Configurer règles (allow/disallow)
- [ ] Inclure référence au sitemap
- [ ] Tester avec Google Search Console
- **Fichiers concernés** : `apps/public-site/src/pages/robots.txt.ts`
- **Dépendances** : T-009-P1-007-001
- **Estimation** : 30min

### US-009-P1-008 : Migration Admin - Authentification (Vite)

#### T-009-P1-008-001 : Migrer page Login
- [ ] Copier contenu de `apps/web/src/app/admin/login/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/LoginPage.tsx`
- [ ] Utiliser `AuthContext` pour gérer login
- [ ] Utiliser `react-router-dom` pour redirection
- [ ] Adapter styles
- [ ] Tester authentification avec API
- **Fichiers concernés** : `apps/admin-panel/src/pages/LoginPage.tsx`
- **Dépendances** : T-009-008
- **Estimation** : 2h

#### T-009-P1-008-002 : Implémenter protection de routes
- [ ] Vérifier que `ProtectedRoute` fonctionne correctement
- [ ] Tester redirection vers `/login` si non authentifié
- [ ] Tester accès aux routes protégées si authentifié
- [ ] Gérer expiration de session
- **Fichiers concernés** : `apps/admin-panel/src/routes/ProtectedRoute.tsx`
- **Dépendances** : T-009-P1-008-001
- **Estimation** : 1h

### US-009-P1-009 : Migration Admin - Dashboard (Vite)

#### T-009-P1-009-001 : Migrer page Dashboard
- [ ] Copier contenu de `apps/web/src/app/admin/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/DashboardPage.tsx`
- [ ] Créer hooks `useBlogPosts`, `useGuides`, `useFAQItems`, `useMedia` pour stats
- [ ] Adapter appels API (fetch au lieu de server components)
- [ ] Gérer loading state
- [ ] Gérer erreurs
- [ ] Tester affichage des stats
- **Fichiers concernés** : `apps/admin-panel/src/pages/DashboardPage.tsx`, `apps/admin-panel/src/hooks/`
- **Dépendances** : T-009-008
- **Estimation** : 3h

### US-009-P1-010 : Migration Admin - Blog CRUD (Vite)

#### T-009-P1-010-001 : Migrer page liste Blog Posts
- [ ] Copier contenu de `apps/web/src/app/admin/blog/posts/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/blog/BlogPostsPage.tsx`
- [ ] Créer hook `useBlogPosts` pour récupérer articles
- [ ] Implémenter pagination si présente
- [ ] Implémenter filtres/recherche si présents
- [ ] Adapter appels API
- [ ] Tester CRUD (Create, Read, Update, Delete)
- **Fichiers concernés** : `apps/admin-panel/src/pages/blog/BlogPostsPage.tsx`
- **Dépendances** : T-009-008
- **Estimation** : 3h

#### T-009-P1-010-002 : Migrer page édition Blog Post
- [ ] Copier contenu de `apps/web/src/app/admin/blog/posts/[id]/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/blog/BlogPostEditPage.tsx`
- [ ] Créer hook `useBlogPost(id)` pour récupérer article
- [ ] Migrer formulaire d'édition
- [ ] Implémenter sauvegarde (create/update)
- [ ] Implémenter upload image de couverture
- [ ] Implémenter gestion tags/catégories
- [ ] Tester création et modification d'articles
- **Fichiers concernés** : `apps/admin-panel/src/pages/blog/BlogPostEditPage.tsx`
- **Dépendances** : T-009-P1-010-001
- **Estimation** : 4h

### US-009-P1-011 : Migration Admin - Guides CRUD (Vite)

#### T-009-P1-011-001 : Migrer pages Guides
- [ ] Copier contenu de `apps/web/src/app/admin/guides/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/guides/GuidesPage.tsx`
- [ ] Créer page édition guide si elle existe
- [ ] Créer hooks `useGuides`, `useGuide(id)`
- [ ] Migrer formulaires
- [ ] Implémenter upload PDF si présent
- [ ] Tester CRUD guides
- **Fichiers concernés** : `apps/admin-panel/src/pages/guides/`
- **Dépendances** : T-009-008
- **Estimation** : 4h

### US-009-P1-012 : Migration Admin - FAQ CRUD (Vite)

#### T-009-P1-012-001 : Migrer pages FAQ
- [ ] Copier contenu de `apps/web/src/app/admin/faq/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/faq/FaqPage.tsx`
- [ ] Créer hooks `useFAQItems`
- [ ] Migrer formulaire FAQ
- [ ] Implémenter réorganisation (drag & drop si présent)
- [ ] Tester CRUD FAQ
- **Fichiers concernés** : `apps/admin-panel/src/pages/faq/FaqPage.tsx`
- **Dépendances** : T-009-008
- **Estimation** : 3h

### US-009-P1-013 : Migration Admin - Média (Vite)

#### T-009-P1-013-001 : Migrer page Média
- [ ] Copier contenu de `apps/web/src/app/admin/media/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/media/MediaPage.tsx`
- [ ] Créer hook `useMedia`
- [ ] Implémenter upload de fichiers
- [ ] Implémenter galerie/liste de médias
- [ ] Implémenter suppression
- [ ] Tester upload et gestion médias
- **Fichiers concernés** : `apps/admin-panel/src/pages/media/MediaPage.tsx`
- **Dépendances** : T-009-008
- **Estimation** : 4h

### US-009-P1-014 : Migration Admin - Menus (Vite)

#### T-009-P1-014-001 : Migrer page Menus
- [ ] Copier contenu de `apps/web/src/app/admin/menus/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/menus/MenusPage.tsx`
- [ ] Créer hooks `useMenus`
- [ ] Migrer formulaire de gestion de menus
- [ ] Implémenter réorganisation (drag & drop si présent)
- [ ] Tester CRUD menus
- **Fichiers concernés** : `apps/admin-panel/src/pages/menus/MenusPage.tsx`
- **Dépendances** : T-009-008
- **Estimation** : 3h

### US-009-P1-015 : Migration Admin - Settings (Vite)

#### T-009-P1-015-001 : Migrer page Settings
- [ ] Copier contenu de `apps/web/src/app/admin/settings/page.tsx`
- [ ] Convertir en `apps/admin-panel/src/pages/settings/SettingsPage.tsx`
- [ ] Créer hook `useSettings`
- [ ] Migrer formulaires de paramètres
- [ ] Tester sauvegarde des paramètres
- **Fichiers concernés** : `apps/admin-panel/src/pages/settings/SettingsPage.tsx`
- **Dépendances** : T-009-008
- **Estimation** : 2h

### US-009-P1-016 : Migration Admin - Layout (Vite)

#### T-009-P1-016-001 : Migrer AdminSidebar
- [ ] Copier contenu de `apps/web/src/components/admin/AdminSidebar.tsx`
- [ ] Convertir en `apps/admin-panel/src/components/layout/AdminSidebar.tsx`
- [ ] Remplacer `next/link` par `react-router-dom` Link
- [ ] Remplacer `usePathname()` par `useLocation()` de React Router
- [ ] Adapter styles
- [ ] Tester navigation
- **Fichiers concernés** : `apps/admin-panel/src/components/layout/AdminSidebar.tsx`
- **Dépendances** : T-009-008
- **Estimation** : 1h30

#### T-009-P1-016-002 : Migrer AdminTopbar
- [ ] Copier contenu de `apps/web/src/components/admin/AdminTopbar.tsx`
- [ ] Convertir en `apps/admin-panel/src/components/layout/AdminTopbar.tsx`
- [ ] Adapter pour React Router
- [ ] Implémenter logout si présent
- [ ] Adapter styles
- **Fichiers concernés** : `apps/admin-panel/src/components/layout/AdminTopbar.tsx`
- **Dépendances** : T-009-008
- **Estimation** : 1h

#### T-009-P1-016-003 : Créer AdminLayout
- [ ] Créer `apps/admin-panel/src/layouts/AdminLayout.tsx`
- [ ] Intégrer AdminSidebar et AdminTopbar
- [ ] Configurer React Router pour utiliser ce layout
- [ ] Tester affichage sur toutes les pages admin
- **Fichiers concernés** : `apps/admin-panel/src/layouts/AdminLayout.tsx`
- **Dépendances** : T-009-P1-016-001, T-009-P1-016-002
- **Estimation** : 1h

---

## 🎯 User Stories P2 - Priorité Haute

### US-009-P2-001 : Tests fonctionnels complets

#### T-009-P2-001-001 : Tests site public Astro
- [ ] Tester toutes les pages publiques (home, features, tarifs, etc.)
- [ ] Tester navigation entre pages
- [ ] Tester formulaires de contact
- [ ] Tester blog (listing et détail)
- [ ] Tester guides (listing et détail)
- [ ] Tester FAQ
- [ ] Vérifier sitemap.xml
- [ ] Vérifier rss.xml
- [ ] Vérifier robots.txt
- **Dépendances** : Tous les P1 site public
- **Estimation** : 3h

#### T-009-P2-001-002 : Tests admin panel Vite
- [ ] Tester authentification (login, logout)
- [ ] Tester toutes les pages admin
- [ ] Tester CRUD blog
- [ ] Tester CRUD guides
- [ ] Tester CRUD FAQ
- [ ] Tester upload média
- [ ] Tester gestion menus
- [ ] Tester settings
- **Dépendances** : Tous les P1 admin
- **Estimation** : 4h

### US-009-P2-002 : Tests de performance

#### T-009-P2-002-001 : Benchmark RAM
- [ ] Mesurer RAM avant migration (baseline)
- [ ] Mesurer RAM après migration (Astro + Vite + API)
- [ ] Comparer et documenter la réduction
- [ ] Vérifier que l'objectif (< 150MB runtime) est atteint
- **Dépendances** : Tous les P1
- **Estimation** : 1h

#### T-009-P2-002-002 : Benchmark temps de build
- [ ] Mesurer temps de build Next.js (baseline)
- [ ] Mesurer temps de build Astro
- [ ] Mesurer temps de build Vite
- [ ] Comparer et documenter la réduction
- **Dépendances** : Tous les P1
- **Estimation** : 1h

#### T-009-P2-002-003 : Benchmark temps de chargement
- [ ] Tester temps de chargement pages avec Lighthouse
- [ ] Comparer avec Next.js
- [ ] Vérifier First Contentful Paint < 2s
- [ ] Optimiser si nécessaire
- **Dépendances** : Tous les P1 site public
- **Estimation** : 2h

### US-009-P2-003 : Tests SEO

#### T-009-P2-003-001 : Vérifier métadonnées SEO
- [ ] Vérifier metadata sur toutes les pages publiques
- [ ] Vérifier Open Graph tags
- [ ] Vérifier Twitter Cards
- [ ] Vérifier structured data (JSON-LD)
- [ ] Tester avec Google Rich Results Test
- **Dépendances** : Tous les P1 site public
- **Estimation** : 2h

#### T-009-P2-003-002 : Vérifier sitemap et indexation
- [ ] Soumettre sitemap à Google Search Console
- [ ] Vérifier que toutes les pages sont indexables
- [ ] Vérifier robots.txt
- [ ] Tester avec Google Search Console
- **Dépendances** : T-009-P1-007-001, T-009-P1-007-003
- **Estimation** : 1h

### US-009-P2-004 : Configuration Nginx

#### T-009-P2-004-001 : Configurer Nginx pour site public
- [ ] Créer config Nginx pour `immotopia.com`
- [ ] Configurer root vers `/var/www/public-site`
- [ ] Configurer cache headers pour assets statiques
- [ ] Tester configuration localement
- **Fichiers concernés** : `/etc/nginx/sites-available/immotopia.com`
- **Dépendances** : Tous les P1 site public
- **Estimation** : 1h30

#### T-009-P2-004-002 : Configurer Nginx pour admin panel
- [ ] Créer config Nginx pour `admin.immotopia.com`
- [ ] Configurer root vers `/var/www/admin-panel`
- [ ] Configurer SPA routing fallback (`try_files`)
- [ ] Configurer proxy API (`/api/*` → `localhost:3002`)
- [ ] Tester configuration localement
- **Fichiers concernés** : `/etc/nginx/sites-available/admin.immotopia.com`
- **Dépendances** : Tous les P1 admin
- **Estimation** : 1h30

### US-009-P2-005 : Scripts de déploiement

#### T-009-P2-005-001 : Créer script de build
- [ ] Créer `deploy.sh` pour build Astro et Vite
- [ ] Implémenter copie vers `/var/www/`
- [ ] Implémenter redémarrage PM2 pour API
- [ ] Tester script localement
- **Fichiers concernés** : `deploy.sh` (racine)
- **Dépendances** : Tous les P1
- **Estimation** : 2h

#### T-009-P2-005-002 : Créer script de rollback
- [ ] Créer script de rollback vers Next.js
- [ ] Documenter procédure
- [ ] Tester procédure
- **Fichiers concernés** : `rollback.sh` (racine)
- **Dépendances** : T-009-P2-005-001
- **Estimation** : 1h

### US-009-P2-006 : Déploiement staging

#### T-009-P2-006-001 : Déployer sur staging
- [ ] Build Astro et Vite
- [ ] Déployer sur sous-domaines staging
- [ ] Configurer Nginx staging
- [ ] Tester complètement
- [ ] Valider avec stakeholders
- **Dépendances** : T-009-P2-004-001, T-009-P2-004-002, T-009-P2-005-001
- **Estimation** : 3h

---

## 🎯 User Stories P3 - Priorité Moyenne

### US-009-P3-001 : Optimisations

#### T-009-P3-001-001 : Optimiser images Astro
- [ ] Remplacer `next/image` par solution Astro (Sharp ou images statiques)
- [ ] Optimiser images existantes
- [ ] Implémenter lazy loading si nécessaire
- **Fichiers concernés** : `apps/public-site/src/components/`
- **Dépendances** : Tous les P1 site public
- **Estimation** : 2h

#### T-009-P3-001-002 : Optimiser bundle Vite
- [ ] Analyser taille du bundle
- [ ] Implémenter code splitting si nécessaire
- [ ] Optimiser imports
- [ ] Vérifier que bundle < 500KB gzipped
- **Fichiers concernés** : `apps/admin-panel/`
- **Dépendances** : Tous les P1 admin
- **Estimation** : 2h

### US-009-P3-002 : Documentation

#### T-009-P3-002-001 : Documenter nouvelle architecture
- [ ] Créer `ARCHITECTURE.md` expliquant la nouvelle architecture
- [ ] Documenter structure des dossiers
- [ ] Documenter processus de build
- **Fichiers concernés** : `ARCHITECTURE.md` (racine)
- **Dépendances** : Tous les P1
- **Estimation** : 2h

#### T-009-P3-002-002 : Documenter processus de déploiement
- [ ] Créer `DEPLOYMENT.md` avec procédure complète
- [ ] Documenter variables d'environnement
- [ ] Documenter configuration Nginx
- [ ] Documenter PM2
- **Fichiers concernés** : `DEPLOYMENT.md` (racine)
- **Dépendances** : T-009-P2-004-001, T-009-P2-004-002
- **Estimation** : 2h

#### T-009-P3-002-003 : Créer guide de développement
- [ ] Documenter comment développer localement
- [ ] Documenter structure du code
- [ ] Documenter conventions de code
- **Fichiers concernés** : `DEVELOPMENT.md` (racine)
- **Dépendances** : Tous les P1
- **Estimation** : 2h

### US-009-P3-003 : Nettoyage

#### T-009-P3-003-001 : Supprimer Next.js
- [ ] Supprimer `apps/web/`
- [ ] Supprimer dépendances Next.js du workspace
- [ ] Mettre à jour `pnpm-workspace.yaml`
- [ ] Nettoyer `package.json` racine
- **Fichiers concernés** : `apps/web/`, `pnpm-workspace.yaml`, `package.json`
- **Dépendances** : T-009-P2-006-001 (validation staging)
- **Estimation** : 1h

#### T-009-P3-003-002 : Nettoyer dépendances inutiles
- [ ] Identifier dépendances inutiles
- [ ] Supprimer dépendances inutiles
- [ ] Vérifier que tout fonctionne encore
- **Dépendances** : T-009-P3-003-001
- **Estimation** : 1h

### US-009-P3-004 : Monitoring post-déploiement

#### T-009-P3-004-001 : Surveiller métriques
- [ ] Configurer monitoring RAM/CPU
- [ ] Surveiller logs Nginx
- [ ] Surveiller logs PM2
- [ ] Documenter problèmes rencontrés
- **Dépendances** : T-009-P2-006-001 (déploiement staging)
- **Estimation** : 2h (sur 24-48h)

---

## 📋 Checklist finale

### Avant déploiement production
- [ ] Tous les P1 complétés
- [ ] Tous les P2 complétés
- [ ] Tests fonctionnels passés
- [ ] Tests de performance validés
- [ ] Tests SEO validés
- [ ] Configuration Nginx testée
- [ ] Scripts de déploiement testés
- [ ] Staging validé par stakeholders
- [ ] Backup complet effectué
- [ ] Plan de rollback préparé

### Après déploiement production
- [ ] Monitoring actif
- [ ] Vérification fonctionnalités critiques
- [ ] Collecte feedback
- [ ] Documentation problèmes
- [ ] Optimisations si nécessaire

---

**Statut** : 📋 Planning - Prêt pour implémentation

