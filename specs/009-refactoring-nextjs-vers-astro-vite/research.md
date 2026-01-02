# Recherche et Analyse - Refactoring Next.js vers Astro + Vite

**Date** : 2026-01-02  
**Tâche** : T-009-000

---

## 📋 Inventaire des Pages Next.js

### Pages Publiques (à migrer vers Astro)

#### Pages Marketing
- ✅ `/` (home) - `apps/web/src/app/page.tsx`
- ✅ `/fonctionnalites` - `apps/web/src/app/fonctionnalites/page.tsx`
- ✅ `/tarifs` - `apps/web/src/app/tarifs/page.tsx`
- ✅ `/la-solution` - `apps/web/src/app/la-solution/page.tsx`
- ✅ `/la-solution/saas-gestion` - `apps/web/src/app/la-solution/saas-gestion/page.tsx`
- ✅ `/la-solution/portail-annonces` - `apps/web/src/app/la-solution/portail-annonces/page.tsx`
- ✅ `/la-solution/technologies` - `apps/web/src/app/la-solution/technologies/page.tsx`
- ✅ `/pour-qui` - `apps/web/src/app/pour-qui/page.tsx`
- ✅ `/pour-qui/agences-immobilieres` - `apps/web/src/app/pour-qui/agences-immobilieres/page.tsx`
- ✅ `/pour-qui/gestionnaires` - `apps/web/src/app/pour-qui/gestionnaires/page.tsx`
- ✅ `/pour-qui/promoteurs` - `apps/web/src/app/pour-qui/promoteurs/page.tsx`
- ✅ `/pour-qui/proprietaires` - `apps/web/src/app/pour-qui/proprietaires/page.tsx`
- ✅ `/pour-qui/syndics` - `apps/web/src/app/pour-qui/syndics/page.tsx`
- ✅ `/contact` - `apps/web/src/app/contact/page.tsx`
- ✅ `/pourquoi-immotopia` - `apps/web/src/app/pourquoi-immotopia/page.tsx`

#### Blog
- ✅ `/blog` (listing) - `apps/web/src/app/blog/page.tsx`
- ✅ `/blog/[slug]` (détail) - `apps/web/src/app/blog/[slug]/page.tsx`
- ✅ `/ressources/blog` (redirection vers `/blog`) - Configuré dans `next.config.js`
- ✅ `/ressources/blog/[slug]` (redirection) - Configuré dans `next.config.js`

#### Guides
- ✅ `/ressources/guides` (listing) - `apps/web/src/app/ressources/guides/page.tsx`
- ✅ `/ressources/guides/[slug]` (détail) - `apps/web/src/app/ressources/guides/[slug]/page.tsx`

#### FAQ
- ✅ `/ressources/faq` - `apps/web/src/app/ressources/faq/page.tsx`

#### Ressources
- ✅ `/ressources` - `apps/web/src/app/ressources/page.tsx`
- ✅ `/ressources/actualites` - `apps/web/src/app/ressources/actualites/page.tsx`

#### Fonctionnalités détaillées
- ✅ `/fonctionnalites/[slug]` - `apps/web/src/app/fonctionnalites/[slug]/page.tsx`

#### Endpoints statiques
- ✅ `/sitemap.xml` - `apps/web/src/app/sitemap.ts`
- ✅ `/rss.xml` - `apps/web/src/app/rss.xml/route.ts`
- ✅ `/robots.txt` - `apps/web/src/app/robots.ts`

### Pages Admin (à migrer vers Vite + React)

- ✅ `/admin/login` - `apps/web/src/app/admin/login/page.tsx`
- ✅ `/admin` (dashboard) - `apps/web/src/app/admin/page.tsx`
- ✅ `/admin/blog/posts` (liste) - `apps/web/src/app/admin/blog/posts/page.tsx`
- ✅ `/admin/blog/posts/new` (création) - `apps/web/src/app/admin/blog/posts/new/page.tsx`
- ✅ `/admin/blog/posts/[id]` (édition) - `apps/web/src/app/admin/blog/posts/[id]/page.tsx`
- ✅ `/admin/guides` (liste) - `apps/web/src/app/admin/guides/page.tsx`
- ✅ `/admin/guides/new` (création) - `apps/web/src/app/admin/guides/new/page.tsx`
- ✅ `/admin/guides/[id]` (édition) - `apps/web/src/app/admin/guides/[id]/page.tsx`
- ✅ `/admin/guides/[id]/leads` (leads) - `apps/web/src/app/admin/guides/[id]/leads/page.tsx`
- ✅ `/admin/faq` (liste) - `apps/web/src/app/admin/faq/page.tsx`
- ✅ `/admin/faq/new` (création) - `apps/web/src/app/admin/faq/new/page.tsx`
- ✅ `/admin/faq/[id]` (édition) - `apps/web/src/app/admin/faq/[id]/page.tsx`
- ✅ `/admin/media` - `apps/web/src/app/admin/media/page.tsx`
- ✅ `/admin/menus` - `apps/web/src/app/admin/menus/page.tsx`
- ✅ `/admin/settings` - `apps/web/src/app/admin/settings/page.tsx`

### Routes API Next.js (à supprimer ou migrer)

- ✅ `/api/demo-request` - `apps/web/src/app/api/demo-request/route.ts` (à migrer vers API Fastify)
- ✅ `/api/revalidate` - `apps/web/src/app/api/revalidate/route.ts` (à supprimer, pas nécessaire avec Astro)

---

## 🔍 Dépendances Next.js Identifiées

### Imports Next.js utilisés (62 fichiers)

**`next/link`** : Utilisé dans 59 fichiers
- Remplacement : `react-router-dom` Link (admin) ou `<a>` natif (Astro)

**`next/navigation`** : Utilisé dans plusieurs fichiers
- `useRouter()` → `useNavigate()` de React Router (admin)
- `usePathname()` → `useLocation()` de React Router (admin)
- Pas nécessaire pour Astro (routing statique)

**`next/image`** : Utilisé dans plusieurs fichiers
- Remplacement : Sharp pour optimisation ou images statiques
- Astro a `@astrojs/image` ou on peut utiliser Sharp directement

**`next/script`** : Utilisé dans `layout.tsx`
- Remplacement : `<script>` natif dans Astro

**`@next/mdx`** : Utilisé pour MDX
- Remplacement : `@astrojs/mdx` pour Astro

### Autres dépendances Next.js spécifiques

- `@ant-design/nextjs-registry` : Spécifique Next.js, à supprimer
- `next-themes` : Gestion thème, peut être remplacé par solution vanilla ou React Context
- `next start` : Commande de démarrage, pas nécessaire avec Astro (fichiers statiques)

---

## 🔌 Routes API Utilisées

### API Publique (pour Astro)

**Blog** :
- `GET /api/blog?status=published&limit=100` - Liste articles publiés
- `GET /api/blog/:slug` - Détail article

**Guides** :
- `GET /api/guides?status=published&limit=100` - Liste guides publiés
- `GET /api/guides/:slug` - Détail guide

**FAQ** :
- `GET /api/faq?status=published&limit=1000` - Liste questions FAQ

**Contact** :
- `POST /api/demo-request` - Formulaire de contact (à vérifier si existe dans Fastify)

### API Admin (pour Vite)

**Authentification** :
- `POST /admin/login` - Connexion
- `POST /admin/logout` - Déconnexion
- `GET /admin/me` - Utilisateur actuel
- `GET /admin/csrf` - Token CSRF

**Blog** :
- `GET /admin/blog/posts` - Liste articles (avec filtres)
- `GET /admin/blog/posts/:id` - Détail article
- `POST /admin/blog/posts` - Créer article
- `PUT /admin/blog/posts/:id` - Modifier article
- `DELETE /admin/blog/posts/:id` - Supprimer article
- `GET /admin/blog/categories` - Liste catégories
- `GET /admin/blog/tags` - Liste tags

**Guides** :
- `GET /admin/guides` - Liste guides
- `GET /admin/guides/:id` - Détail guide
- `POST /admin/guides` - Créer guide
- `PUT /admin/guides/:id` - Modifier guide
- `DELETE /admin/guides/:id` - Supprimer guide
- `GET /admin/guides/:id/leads` - Leads d'un guide

**FAQ** :
- `GET /admin/faq` - Liste questions
- `GET /admin/faq/:id` - Détail question
- `POST /admin/faq` - Créer question
- `PUT /admin/faq/:id` - Modifier question
- `DELETE /admin/faq/:id` - Supprimer question

**Média** :
- `GET /admin/media` - Liste médias
- `POST /admin/media` - Upload média
- `DELETE /admin/media/:id` - Supprimer média

**Menus** :
- `GET /admin/menus` - Liste menus
- `GET /admin/menus/:id` - Détail menu
- `POST /admin/menus` - Créer menu
- `PUT /admin/menus/:id` - Modifier menu
- `DELETE /admin/menus/:id` - Supprimer menu

**Settings** :
- `GET /admin/settings` - Paramètres
- `PUT /admin/settings` - Modifier paramètres

---

## 🧩 Composants Réutilisables vs Spécifiques Next.js

### Composants Réutilisables (à adapter)

**Layout** :
- `Header.tsx` - Header principal (à adapter pour Astro)
- `Footer.tsx` - Footer principal (à adapter pour Astro)
- `Navigation.tsx` - Navigation (à adapter)

**Blog** :
- `ArticleCard.tsx` - Carte article
- `BlogCard.tsx` - Carte blog
- `BlogFilters.tsx` - Filtres blog
- `Pagination.tsx` - Pagination
- `BlogCTA.tsx` - CTA blog
- `StickyCTA.tsx` - CTA sticky

**Guides** :
- `GuideCard.tsx` - Carte guide
- `GuideList.tsx` - Liste guides

**Sections** :
- `Hero.tsx` - Section hero
- `HeroHeader.tsx` - Header hero
- `FeatureCard.tsx` - Carte fonctionnalité
- `SimpleFeatureCard.tsx` - Carte fonctionnalité simple
- `FeaturesPreview.tsx` - Aperçu fonctionnalités
- `PersonaCard.tsx` - Carte persona
- `PersonasPreview.tsx` - Aperçu personas
- `PricingCard.tsx` - Carte tarif
- `PricingPreview.tsx` - Aperçu tarifs
- `FinalCTA.tsx` - CTA final

**SEO** :
- `Breadcrumbs.tsx` - Fil d'Ariane
- `StructuredData.tsx` - Données structurées

**UI** :
- `OptimizedImage.tsx` - Image optimisée (utilise `next/image`, à remplacer)

### Composants Spécifiques Next.js (à réécrire)

**Admin** :
- `AdminSidebar.tsx` - Sidebar admin (utilise `next/link`, `usePathname`)
- `AdminTopbar.tsx` - Topbar admin
- Tous les composants admin utilisent `next/navigation`

**Layout** :
- `ConditionalLayout.tsx` - Layout conditionnel (utilise Next.js routing)

---

## 🔗 Intégrations Externes

### Google Analytics
- **Fichier** : `apps/web/src/components/analytics/GoogleAnalytics.tsx`
- **Utilisation** : `next/script` pour charger GA
- **Migration** : Utiliser `<script>` natif dans Astro

### Clarity (Microsoft)
- **Fichier** : `apps/web/src/lib/clarity.ts`
- **Utilisation** : Script externe
- **Migration** : Utiliser `<script>` natif dans Astro

### Autres
- Pas d'autres intégrations majeures identifiées

---

## 📦 Packages à Adapter

### `@monorepo/ui`
- **Problème** : Peut contenir des dépendances Next.js
- **Action** : Vérifier et supprimer dépendances Next.js
- **Adapter** : Supporter Astro et React pur

### `@monorepo/contracts`
- **Statut** : ✅ Compatible (Zod fonctionne partout)
- **Action** : Aucune modification nécessaire

### `@monorepo/utils`
- **Statut** : À vérifier
- **Action** : Vérifier compatibilité avec Astro/Vite

---

## 🎨 Styles et CSS

### Tailwind CSS
- **Statut** : ✅ Déjà configuré
- **Migration** : Réutiliser la même config dans Astro et Vite

### CSS Modules
- **Fichiers** : `*.module.css` dans plusieurs pages
- **Migration** : Convertir en CSS global ou Tailwind

### Styles globaux
- **Fichier** : `apps/web/src/app/globals.css`
- **Migration** : Migrer vers Astro et Vite

---

## 📊 Gaps Identifiés

### 1. ISR (Incremental Static Regeneration)
- **Actuel** : Next.js utilise `revalidate: 300` pour ISR
- **Problème** : Astro génère statiquement au build
- **Solution** : Générer toutes les pages au build, ou utiliser Astro endpoints pour fetch runtime

### 2. Server Actions
- **Actuel** : Pas de server actions identifiées
- **Statut** : ✅ Pas de problème

### 3. API Routes Next.js
- **Actuel** : `/api/demo-request` et `/api/revalidate`
- **Solution** : Migrer vers Fastify API

### 4. Middleware Next.js
- **Statut** : Pas de middleware identifié
- **Solution** : Nginx pour routing

---

## ✅ Conclusion

**Pages à migrer** : ~30 pages publiques + ~15 pages admin  
**Composants à adapter** : ~40 composants réutilisables  
**Dépendances Next.js** : 62 fichiers utilisent des imports Next.js  
**Routes API** : Toutes existent déjà dans Fastify ✅

**Complexité** : Moyenne à élevée  
**Risques** : Faibles (API déjà séparée, pas de server actions)  
**Temps estimé** : 15-21 jours

