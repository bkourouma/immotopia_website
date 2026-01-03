# Plan d'implémentation : 009-refactoring-nextjs-vers-astro-vite

**Date de création** : 2026-01-02  
**Statut** : 📋 Planning

---

## 🎯 Contexte technique

### Stack technique actuelle
- **Frontend** : Next.js 15 (App Router)
- **Backend** : Fastify + Prisma + PostgreSQL
- **UI** : Tailwind CSS + Ant Design + shadcn/ui
- **Monorepo** : pnpm workspaces
- **TypeScript** : 5.x
- **Validation** : Zod

### Stack technique cible
- **Site public** : Astro 4.x (static output)
- **Admin panel** : Vite 5.x + React 18 (SPA)
- **Backend** : Fastify (conservé, inchangé)
- **UI** : Tailwind CSS (réutilisé), Ant Design (admin uniquement)
- **Routing** : Astro file-based routing, React Router v6 (admin)
- **Monorepo** : pnpm workspaces (conservé)

### Dépendances existantes à conserver
- ✅ **API Fastify** : `apps/api` (routes admin + public)
- ✅ **Prisma** : Schéma de base de données complet
- ✅ **Packages** : `@monorepo/contracts`, `@monorepo/ui`, `@monorepo/utils`
- ✅ **Composants UI** : Header, Footer, composants de pages
- ✅ **Styles** : Tailwind CSS configuré

### Contraintes techniques
- **Zéro downtime** : Migration progressive avec staging
- **Compatibilité API** : Ne pas casser les endpoints existants
- **Performance** : Réduction RAM de 70-80%
- **SEO** : Maintenir/améliorer le SEO actuel
- **VPS contraintes** : Architecture optimisée pour faible RAM (< 200MB runtime)

---

## ✅ Vérification de conformité constitution

### Principes fondamentaux
- [ ] **TDD** : Tests écrits pour les nouvelles fonctionnalités (Astro/Vite)
- [ ] **Library-First** : Réutiliser packages existants (`@monorepo/*`)
- [ ] **Type Safety** : TypeScript strict, types partagés via `@monorepo/contracts`
- [ ] **Code Quality** : Linting et formatting automatiques

### Standards de code
- [ ] Conventions de nommage respectées
- [ ] Structure de dossiers conforme (Astro/Vite standards)
- [ ] Documentation inline présente
- [ ] Pas de dépendances inutiles

### Architecture
- [ ] Séparation claire : public-site / admin-panel / api
- [ ] Pas de dépendances circulaires
- [ ] Contracts définis dans `@monorepo/contracts`
- [ ] Builds indépendants pour chaque app

---

## 📁 Structure du projet

### Nouveaux dossiers à créer
```
apps/
  ├── public-site/          # ✨ NOUVEAU : Astro
  │   ├── src/
  │   │   ├── pages/        # Routes Astro
  │   │   ├── components/   # Composants Astro/React
  │   │   ├── layouts/      # Layouts Astro
  │   │   ├── lib/          # Utilitaires, API client
  │   │   └── styles/       # CSS global
  │   ├── public/          # Assets statiques
  │   ├── astro.config.mjs
  │   └── package.json
  │
  └── admin-panel/         # ✨ NOUVEAU : Vite + React
      ├── src/
      │   ├── pages/        # Pages React
      │   ├── components/   # Composants React
      │   ├── layouts/      # Layouts admin
      │   ├── routes/       # React Router config
      │   ├── lib/          # API client, utils
      │   ├── hooks/        # React hooks
      │   ├── contexts/     # Context API
      │   └── styles/       # CSS
      ├── public/           # Assets statiques
      ├── vite.config.ts
      └── package.json
```

### Fichiers à modifier

#### Workspace
- [ ] `pnpm-workspace.yaml` - Ajouter `apps/public-site` et `apps/admin-panel`
- [ ] `package.json` racine - Mettre à jour scripts si nécessaire

#### API (conservée, modifications mineures)
- [ ] `apps/api/src/index.ts` - Mettre à jour CORS pour 2 origines
- [ ] `apps/api/.env` - Ajouter variables d'environnement pour URLs

#### Packages
- [ ] `packages/ui/package.json` - Supprimer dépendances Next.js
- [ ] `packages/ui/src/**/*` - Adapter composants pour Astro/Vite

### Fichiers à supprimer (Phase 7)
- [ ] `apps/web/` - Supprimer complètement après migration

---

## 🔬 Phase 0 : Recherche et analyse

### Recherche nécessaire
- [ ] Analyser toutes les pages Next.js (`apps/web/src/app/**/*.tsx`)
- [ ] Identifier les composants réutilisables vs spécifiques Next.js
- [ ] Documenter les routes API utilisées par le frontend
- [ ] Lister les dépendances Next.js spécifiques (`next/image`, `next/link`, etc.)
- [ ] Mesurer l'utilisation RAM actuelle (baseline)
- [ ] Analyser les composants admin pour identifier la logique métier
- [ ] Vérifier les intégrations (Google Analytics, etc.)

### Décisions à prendre
- [ ] **Migration images** : Comment remplacer `next/image` ? (Sharp, ou images statiques)
- [ ] **Routing admin** : React Router vs autre solution ?
- [ ] **État global admin** : Context API vs Zustand vs Redux ?
- [ ] **Génération statique blog** : Build-time vs runtime fetch ?
- [ ] **Formulaires** : Client-side seulement ou besoin de server actions ?
- [ ] **Authentification** : JWT vs session cookies (déjà en place) ?

### Livrables
- [ ] `research.md` - Inventaire complet des pages et composants
- [ ] `migration-mapping.md` - Mapping Next.js → Astro/Vite
- [ ] `dependencies-analysis.md` - Dépendances à remplacer/supprimer
- [ ] `baseline-metrics.md` - Métriques RAM/CPU avant migration

---

## 🎨 Phase 1 : Design et architecture

### Design de l'architecture Astro

**Configuration Astro** :
- [ ] `astro.config.mjs` - Output static, intégrations (Tailwind, MDX, Sitemap)
- [ ] Structure des layouts (BaseLayout, BlogLayout, etc.)
- [ ] Système de composants (Astro components vs React islands)
- [ ] Gestion des assets (images, fonts, etc.)

**Routing Astro** :
- [ ] File-based routing pour pages marketing
- [ ] Dynamic routes pour blog (`[slug].astro`)
- [ ] Dynamic routes pour guides (`[slug].astro`)
- [ ] Endpoints statiques (sitemap.xml, rss.xml, robots.txt)

**API Client Astro** :
- [ ] Fonction `getAllBlogPosts()` - Fetch depuis API au build
- [ ] Fonction `getBlogPost(slug)` - Fetch depuis API au build
- [ ] Fonction `getAllGuides()` - Fetch depuis API au build
- [ ] Fonction `getFAQData()` - Fetch depuis API au build
- [ ] Gestion d'erreurs et fallback

### Design de l'architecture Vite + React

**Configuration Vite** :
- [ ] `vite.config.ts` - Plugins, build options, proxy API
- [ ] Variables d'environnement (`VITE_API_URL`)
- [ ] Alias de chemins (`@/` pour `src/`)

**Routing React Router** :
- [ ] Structure des routes (`/login`, `/`, `/blog/posts`, etc.)
- [ ] Protected routes (authentification requise)
- [ ] Layout routes (AdminLayout avec sidebar)
- [ ] 404 handling

**État et API Client** :
- [ ] Context API pour authentification (`AuthContext`)
- [ ] API client centralisé (`lib/api/client.ts`)
- [ ] Hooks personnalisés (`useBlogPosts`, `useGuides`, etc.)
- [ ] Gestion d'erreurs globale
- [ ] Gestion du loading state

### Design de l'adaptation Packages

**Package `@monorepo/ui`** :
- [ ] Supprimer dépendances Next.js
- [ ] Adapter composants pour Astro (supporter `.astro`)
- [ ] Adapter composants pour React pur (Vite)
- [ ] Tests de compatibilité

**Package `@monorepo/contracts`** :
- [ ] Vérifier compatibilité (Zod fonctionne partout)
- [ ] Ajouter types si nécessaire

### Design du déploiement

**Nginx Configuration** :
- [ ] Config pour site public (`immotopia.com`)
- [ ] Config pour admin panel (`admin.immotopia.com`)
- [ ] Reverse proxy pour API (`/api/*`)
- [ ] Cache headers pour assets statiques
- [ ] SPA routing fallback pour admin

**PM2 Configuration** :
- [ ] `ecosystem.config.js` - Un seul processus API
- [ ] Variables d'environnement
- [ ] Memory limits

**Scripts de déploiement** :
- [ ] `deploy.sh` - Build et copie fichiers
- [ ] Scripts de rollback
- [ ] Scripts de monitoring

### Livrables
- [ ] `astro-architecture.md` - Design détaillé Astro
- [ ] `vite-architecture.md` - Design détaillé Vite
- [ ] `nginx-config.md` - Configuration Nginx complète
- [ ] `deployment-plan.md` - Plan de déploiement progressif

---

## 🛠️ Phase 2 : Implémentation

### Étape 2.1 : Setup et fondations

**Setup Astro** :
- [ ] Créer `apps/public-site` avec `pnpm create astro`
- [ ] Configurer TypeScript
- [ ] Installer intégrations (Tailwind, MDX, Sitemap)
- [ ] Configurer `astro.config.mjs`
- [ ] Créer structure de dossiers
- [ ] Migrer styles globaux
- [ ] Créer layout de base

**Setup Vite + React** :
- [ ] Créer `apps/admin-panel` avec `pnpm create vite`
- [ ] Configurer TypeScript
- [ ] Installer React Router, Ant Design
- [ ] Configurer `vite.config.ts`
- [ ] Créer structure de dossiers
- [ ] Configurer alias de chemins
- [ ] Setup proxy API en dev

**Adaptation Packages** :
- [ ] Nettoyer `packages/ui` (supprimer Next.js)
- [ ] Tester compatibilité Astro
- [ ] Tester compatibilité Vite
- [ ] Mettre à jour exports

**Configuration API** :
- [ ] Mettre à jour CORS dans `apps/api/src/index.ts`
- [ ] Ajouter variables d'environnement
- [ ] Tester endpoints depuis Astro/Vite

### Étape 2.2 : Migration Site Public → Astro

**Pages Marketing** :
- [ ] Migrer `/` (home) → `src/pages/index.astro`
- [ ] Migrer `/fonctionnalites` → `src/pages/fonctionnalites.astro`
- [ ] Migrer `/tarifs` → `src/pages/tarifs.astro`
- [ ] Migrer `/la-solution` → `src/pages/la-solution/index.astro`
- [ ] Migrer `/pour-qui` → `src/pages/pour-qui.astro`
- [ ] Migrer `/contact` → `src/pages/contact.astro`

**Pour chaque page** :
- [ ] Copier contenu JSX/TSX
- [ ] Convertir en syntaxe Astro
- [ ] Extraire composants si nécessaire
- [ ] Migrer styles
- [ ] Tester visuellement
- [ ] Vérifier SEO metadata

**Blog** :
- [ ] Créer `src/lib/api/blog.ts` (fonctions fetch)
- [ ] Créer `src/pages/blog/index.astro` (listing)
- [ ] Créer `src/pages/blog/[slug].astro` (article)
- [ ] Implémenter `getStaticPaths()` pour génération statique
- [ ] Migrer composants blog (ArticleCard, etc.)
- [ ] Tester génération de toutes les pages

**Guides** :
- [ ] Créer `src/lib/api/guides.ts`
- [ ] Créer `src/pages/ressources/guides/index.astro`
- [ ] Créer `src/pages/ressources/guides/[slug].astro`
- [ ] Implémenter `getStaticPaths()`
- [ ] Migrer composants guides

**FAQ** :
- [ ] Créer `src/lib/api/faq.ts`
- [ ] Créer `src/pages/faq.astro`
- [ ] Migrer composants FAQ

**SEO & Meta** :
- [ ] Configurer `@astrojs/sitemap`
- [ ] Créer `src/pages/sitemap.xml.ts` (si nécessaire)
- [ ] Créer `src/pages/rss.xml.ts`
- [ ] Créer `src/pages/robots.txt.ts`
- [ ] Vérifier structured data (JSON-LD)

**Formulaires** :
- [ ] Créer composant `<ContactForm />` (client-side)
- [ ] Implémenter fetch vers API
- [ ] Gérer CSRF token
- [ ] Validation Zod côté client

### Étape 2.3 : Migration Admin Panel → Vite + React

**Setup React Router** :
- [ ] Créer `src/routes/index.tsx` (configuration routes)
- [ ] Créer `src/routes/ProtectedRoute.tsx`
- [ ] Configurer routes publiques (`/login`)
- [ ] Configurer routes protégées (`/`, `/blog/posts`, etc.)

**Authentification** :
- [ ] Créer `src/lib/api/auth.ts`
- [ ] Créer `src/contexts/AuthContext.tsx`
- [ ] Migrer page login (`/admin/login`)
- [ ] Implémenter protection de routes
- [ ] Gérer session/cookies

**Pages Admin** :
- [ ] Migrer `/admin` (dashboard) → `src/pages/DashboardPage.tsx`
- [ ] Migrer `/admin/blog/posts` → `src/pages/blog/BlogPostsPage.tsx`
- [ ] Migrer `/admin/blog/posts/:id` → `src/pages/blog/BlogPostEditPage.tsx`
- [ ] Migrer `/admin/guides` → `src/pages/guides/GuidesPage.tsx`
- [ ] Migrer `/admin/faq` → `src/pages/faq/FaqPage.tsx`
- [ ] Migrer `/admin/media` → `src/pages/media/MediaPage.tsx`
- [ ] Migrer `/admin/menus` → `src/pages/menus/MenusPage.tsx`
- [ ] Migrer `/admin/settings` → `src/pages/settings/SettingsPage.tsx`

**Pour chaque page admin** :
- [ ] Copier composants Next.js
- [ ] Remplacer `next/link` par `react-router-dom` Link
- [ ] Remplacer `next/navigation` par React Router hooks
- [ ] Adapter appels API (fetch au lieu de server components)
- [ ] Gérer état avec useState/useEffect ou Context
- [ ] Tester fonctionnalités CRUD

**Composants Admin** :
- [ ] Migrer `AdminSidebar` → `src/components/layout/AdminSidebar.tsx`
- [ ] Migrer `AdminTopbar` → `src/components/layout/AdminTopbar.tsx`
- [ ] Migrer composants de formulaires
- [ ] Migrer composants de liste
- [ ] Migrer composants d'upload média

**API Client** :
- [ ] Créer `src/lib/api/client.ts` (client centralisé)
- [ ] Créer hooks personnalisés (`useBlogPosts`, `useGuides`, etc.)
- [ ] Gérer erreurs globalement
- [ ] Gérer loading state
- [ ] Implémenter retry logic si nécessaire

### Étape 2.4 : Tests et validation

**Tests Fonctionnels** :
- [ ] Tester toutes les pages publiques (Astro)
- [ ] Tester toutes les pages admin (Vite)
- [ ] Tester formulaires de contact
- [ ] Tester authentification admin
- [ ] Tester CRUD blog/guides/FAQ
- [ ] Tester upload média
- [ ] Vérifier sitemap.xml
- [ ] Vérifier rss.xml
- [ ] Vérifier robots.txt

**Tests de Performance** :
- [ ] Mesurer temps de build Astro
- [ ] Mesurer temps de build Vite
- [ ] Mesurer utilisation RAM (baseline vs nouvelle)
- [ ] Tester temps de chargement pages
- [ ] Vérifier taille des bundles
- [ ] Tester Lighthouse scores

**Tests SEO** :
- [ ] Vérifier metadata (Open Graph, Twitter Cards)
- [ ] Vérifier structured data (JSON-LD)
- [ ] Tester avec Google Search Console
- [ ] Vérifier sitemap avec Google
- [ ] Vérifier robots.txt

**Tests Cross-browser** :
- [ ] Tester Chrome, Firefox, Safari, Edge
- [ ] Tester mobile (responsive)
- [ ] Tester tablette

### Étape 2.5 : Déploiement

**Préparation Serveur** :
- [ ] Créer dossiers sur serveur (`/var/www/public-site`, `/var/www/admin-panel`)
- [ ] Configurer permissions
- [ ] Préparer backup de l'ancien site

**Configuration Nginx** :
- [ ] Créer config pour site public
- [ ] Créer config pour admin panel
- [ ] Configurer reverse proxy pour API
- [ ] Configurer cache headers
- [ ] Tester configuration localement

**Build & Déploiement Staging** :
- [ ] Build Astro : `cd apps/public-site && pnpm build`
- [ ] Build Vite : `cd apps/admin-panel && pnpm build`
- [ ] Déployer sur sous-domaine staging
- [ ] Tester complètement
- [ ] Valider avec stakeholders

**Migration Progressive** :
- [ ] Déployer Astro sur `staging.immotopia.com`
- [ ] Déployer admin panel sur `admin-staging.immotopia.com`
- [ ] Tester authentification et CRUD
- [ ] Basculer DNS progressivement
- [ ] Surveiller logs et métriques
- [ ] Une fois stable, supprimer Next.js

### Étape 2.6 : Nettoyage

**Suppression Next.js** :
- [ ] Supprimer `apps/web`
- [ ] Supprimer dépendances Next.js du workspace
- [ ] Mettre à jour `pnpm-workspace.yaml`
- [ ] Nettoyer `package.json` racine

**Documentation** :
- [ ] Mettre à jour README.md
- [ ] Documenter nouvelle architecture
- [ ] Documenter processus de déploiement
- [ ] Créer guide de développement
- [ ] Documenter variables d'environnement

---

## 🧪 Tests

### Tests unitaires
- [ ] Tests pour fonctions API client (Astro)
- [ ] Tests pour hooks React (Vite)
- [ ] Tests pour utilitaires

### Tests d'intégration
- [ ] Tests API → Astro (fetch blog/guides/FAQ)
- [ ] Tests API → Vite (CRUD admin)
- [ ] Tests authentification

### Tests E2E
- [ ] Tests navigation site public
- [ ] Tests navigation admin panel
- [ ] Tests formulaires
- [ ] Tests upload média

### Tests de performance
- [ ] Benchmark RAM avant/après
- [ ] Benchmark temps de build
- [ ] Benchmark temps de chargement
- [ ] Lighthouse scores

---

## 🚀 Déploiement

### Pré-déploiement
- [ ] Backup base de données
- [ ] Backup fichiers actuels
- [ ] Préparer rollback plan
- [ ] Notifier équipe

### Déploiement staging
- [ ] Build Astro et Vite
- [ ] Déployer sur sous-domaines
- [ ] Tester complètement
- [ ] Valider avec stakeholders

### Déploiement production
- [ ] Basculer DNS progressivement
- [ ] Monitorer logs
- [ ] Monitorer métriques (RAM, CPU)
- [ ] Vérifier erreurs
- [ ] Valider fonctionnalités

### Post-déploiement
- [ ] Surveiller pendant 24-48h
- [ ] Collecter feedback
- [ ] Documenter problèmes rencontrés
- [ ] Optimiser si nécessaire

---

## 📊 Métriques de succès

### Métriques techniques
- [ ] RAM utilisée : < 150 MB (runtime)
- [ ] Temps de build : < 2 minutes (total)
- [ ] Temps de chargement : < 2s (FCP)
- [ ] Taille bundle admin : < 500 KB (gzipped)
- [ ] Uptime API : > 99.9%

### Métriques fonctionnelles
- [ ] Toutes les pages publiques fonctionnent
- [ ] Toutes les pages admin fonctionnent
- [ ] Formulaires fonctionnent
- [ ] Authentification fonctionne
- [ ] CRUD fonctionne
- [ ] Sitemap/RSS générés correctement

### Métriques SEO
- [ ] Metadata présente
- [ ] Structured data valide
- [ ] Sitemap soumis
- [ ] Pages indexées

---

## ⚠️ Risques et mitigations

### Risque 1 : Perte de fonctionnalités Next.js
**Mitigation** : Audit complet, alternatives identifiées

### Risque 2 : Problèmes de routing admin
**Mitigation** : Config Nginx correcte, tests complets

### Risque 3 : Problèmes CORS
**Mitigation** : Config CORS correcte, tests en dev

### Risque 4 : Perte de données
**Mitigation** : Backup complet, staging, plan de rollback

### Risque 5 : Problèmes de build
**Mitigation** : Tests locaux, CI/CD, documentation

### Risque 6 : Performance inattendue
**Mitigation** : Benchmark, monitoring, cache Nginx

---

## 📅 Timeline estimé

- **Phase 0** (Recherche) : 1-2 jours
- **Phase 1** (Design) : 2-3 jours
- **Phase 2.1** (Setup) : 1-2 jours
- **Phase 2.2** (Migration Astro) : 3-5 jours
- **Phase 2.3** (Migration Vite) : 3-4 jours
- **Phase 2.4** (Tests) : 2-3 jours
- **Phase 2.5** (Déploiement) : 2-3 jours
- **Phase 2.6** (Nettoyage) : 1 jour

**Total estimé** : 15-21 jours (3-4 semaines)

---

**Statut** : 📋 Planning - Prêt pour génération des tâches



