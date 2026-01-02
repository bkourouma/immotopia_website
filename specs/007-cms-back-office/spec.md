# Spécification : CMS Back Office pour Site Vitrine ImmoTopia

**Numéro de fonctionnalité** : 007  
**Branche Git** : 007-cms-back-office  
**Date de création** : 2025-01-27  
**Statut** : 📝 Draft

---

## 📋 Vue d'ensemble

### Description

Implémentation d'un back office (CMS) sécurisé pour le site vitrine ImmoTopia, permettant à un administrateur unique de gérer le contenu marketing du site sans intervention technique. Le CMS remplace les sources de contenu basées sur fichiers (MDX pour blog/guides, TypeScript pour FAQ) par une base de données PostgreSQL avec une interface d'administration moderne.

Le CMS gère :
- **Blog** : Articles avec statut (draft/published/scheduled), catégories, tags, SEO
- **Guides** : Guides téléchargeables avec capture de leads optionnelle
- **FAQ** : Questions/réponses organisées par catégorie
- **Menus** : Navigation header et footer
- **Média** : Bibliothèque d'images et PDFs
- **SEO** : Paramètres globaux et par-page
- **Pages marketing** : Édition de sections homepage et pages marketing (optionnel)

### Objectifs

- **Objectif principal** : Permettre la gestion autonome du contenu marketing sans intervention développeur
- **Objectif sécurité** : Authentification robuste, protection CSRF, rate limiting, audit trail
- **Objectif performance** : Ne pas dégrader les performances SEO et vitesse du site public (Lighthouse ≥ 90)
- **Objectif migration** : Migration transparente depuis fichiers MDX/TS vers base de données
- **Objectif conversion** : Maintenir le taux de conversion ≥ 5% (ne pas casser les CTAs existants)

### Contexte

Le site vitrine ImmoTopia utilise actuellement :
- **Blog** : Fichiers MDX dans `apps/web/src/content/blog/` avec frontmatter
- **Guides** : Structure prévue mais non implémentée (fichiers MDX prévus)
- **FAQ** : Contenu hardcodé dans `apps/web/src/components/sections/FAQ.tsx` et structure dans `apps/web/src/lib/content/faq.ts`

Le CMS doit :
- Remplacer ces sources par PostgreSQL + Prisma
- Conserver toutes les routes publiques existantes (`/blog`, `/ressources/guides`, `/ressources/faq`)
- Maintenir le SEO (sitemap, RSS, structured data)
- Permettre l'édition via une interface `/admin` sécurisée

---

## 👥 User Stories

### P1 - Priorité Critique (Must Have)

**US-007-P1-001** : Authentification Admin
- **En tant que** administrateur du site
- **Je veux** me connecter avec email/mot de passe
- **Afin de** accéder au back office

**Scénarios** :
- **Given** je suis sur `/admin/login`
- **When** je saisis mes identifiants valides
- **Then** je suis redirigé vers `/admin` (dashboard)
- **And** ma session est sécurisée (HttpOnly cookie)

**Critères d'acceptation** :
- [ ] Page `/admin/login` avec formulaire email/password
- [ ] Création admin depuis env vars `ADMIN_EMAIL` et `ADMIN_PASSWORD` (seed)
- [ ] Hash password avec argon2 ou bcrypt
- [ ] Session HttpOnly cookie (signed) ou JWT HttpOnly cookie
- [ ] Rate limiting sur `/api/admin/login` (5 tentatives/15min)
- [ ] Protection CSRF pour méthodes unsafe (POST/PUT/DELETE)
- [ ] Route `/admin/logout` invalide la session
- [ ] Middleware auth protège toutes les routes `/admin/*` sauf login

---

**US-007-P1-002** : Modèle de données Prisma
- **En tant que** développeur
- **Je veux** avoir les modèles Prisma pour tous les contenus
- **Afin de** stocker et gérer le contenu en base

**Scénarios** :
- **Given** le schéma Prisma est défini
- **When** j'exécute `prisma migrate dev`
- **Then** toutes les tables sont créées en PostgreSQL

**Critères d'acceptation** :
- [ ] Modèle `AdminUser` (id, email, passwordHash, createdAt, updatedAt)
- [ ] Modèle `Session` (si sessions serveur) : id, adminUserId, token, expiresAt, ip, userAgent
- [ ] Modèle `Media` : id, url/storageKey, type, size, width, height, altText, title, createdAt, deletedAt (soft delete)
- [ ] Modèle `BlogPost` : id, title, slug (unique), description, content (Markdown), status (draft/published/scheduled), publishedAt, categoryId, author, coverImageId, seoTitle, seoDescription, ogImageId, locale, readingTime, createdAt, updatedAt, deletedAt
- [ ] Modèle `BlogCategory` : id, name, slug, description, locale
- [ ] Modèle `BlogTag` : id, name, slug, locale
- [ ] Modèle `BlogPostTag` (many-to-many) : blogPostId, tagId
- [ ] Modèle `Guide` : id, title, slug (unique), description, content (Markdown), status, publishedAt, category, downloadablePdfMediaId, gatedDownload (boolean), seoTitle, seoDescription, locale, createdAt, updatedAt, deletedAt
- [ ] Modèle `GuideLead` : id, guideId, name, email, phone, company, persona, createdAt
- [ ] Modèle `FaqItem` : id, question, answer, category, order, locale, status (draft/published), createdAt, updatedAt, deletedAt
- [ ] Modèle `Menu` : id, name (header/footer), locale, createdAt, updatedAt
- [ ] Modèle `MenuItem` : id, menuId, label, href, order, parentId (nested), external (boolean), createdAt, updatedAt, deletedAt
- [ ] Modèle `Page` (optionnel) : id, path, title, seoTitle, seoDescription, ogImageId, blocksJson (JSON), locale, createdAt, updatedAt
- [ ] Modèle `Revision` : id, entityType (BlogPost/Guide/FaqItem/Page/Menu), entityId, snapshotJson (JSON), createdBy, createdAt
- [ ] Modèle `AuditLog` : id, adminUserId, action (create/update/delete/publish/schedule/upload/login/logout), entityType, entityId, ip, userAgent, diffJson (JSON), createdAt
- [ ] Index sur slug (unique), status, publishedAt, locale
- [ ] Soft delete partout (deletedAt nullable)

---

**US-007-P1-003** : Gestion Blog (CRUD + Publication)
- **En tant que** administrateur
- **Je veux** créer, modifier, publier et supprimer des articles de blog
- **Afin de** maintenir le contenu du blog à jour

**Scénarios** :
- **Given** je suis sur `/admin/blog/posts`
- **When** je clique "Nouvel article"
- **Then** un éditeur s'ouvre avec champs : titre, description, slug, contenu (Markdown), catégorie, tags, image de couverture, SEO
- **When** je sauvegarde en brouillon
- **Then** l'article est sauvegardé avec status="draft"
- **When** je clique "Publier"
- **Then** status="published" et publishedAt=now()
- **When** je programme une publication
- **Then** status="scheduled" et publishedAt=future date

**Critères d'acceptation** :
- [ ] Liste `/admin/blog/posts` avec filtres : status, catégorie, tag, recherche full-text
- [ ] Formulaire création/édition avec :
  - Titre (required)
  - Slug (auto-généré depuis titre, éditable)
  - Description/excerpt (required)
  - Contenu Markdown (éditeur avec preview)
  - Catégorie (select)
  - Tags (multi-select avec création)
  - Image de couverture (media picker)
  - SEO : meta title, meta description, OG image
  - Statut : Draft/Published/Scheduled
  - Date de publication (si scheduled)
  - Locale (FR pour MVP)
- [ ] Autosave toutes les 30 secondes (draft)
- [ ] Bouton "Prévisualiser" génère un token signé et ouvre `/blog/[slug]?preview=token`
- [ ] Bouton "Publier" change status et publishedAt
- [ ] Bouton "Programmer" permet de définir publishedAt futur
- [ ] Soft delete avec possibilité de restaurer
- [ ] Versioning : snapshot dans `Revision` à chaque publish/major edit

---

**US-007-P1-004** : Gestion Guides (CRUD + Lead Capture)
- **En tant que** administrateur
- **Je veux** créer et gérer des guides téléchargeables
- **Afin de** proposer des ressources et capturer des leads

**Scénarios** :
- **Given** je suis sur `/admin/guides`
- **When** je crée un guide avec "gatedDownload=true"
- **Then** un formulaire de capture (name, email, phone, company, persona) s'affiche avant le téléchargement
- **When** un visiteur remplit le formulaire
- **Then** le lead est enregistré dans `GuideLead` et le PDF est téléchargé

**Critères d'acceptation** :
- [ ] Liste `/admin/guides` avec filtres status/catégorie
- [ ] Formulaire création/édition similaire au blog :
  - Titre, slug, description, contenu Markdown
  - Catégorie
  - PDF téléchargeable (media picker, type=pdf)
  - Option "gatedDownload" (boolean)
  - SEO metadata
  - Statut (draft/published/scheduled)
- [ ] Si gatedDownload=true :
  - Formulaire de capture sur `/ressources/guides/[slug]` avant téléchargement
  - Champs : name, email, phone, company, persona (select)
  - Validation et enregistrement dans `GuideLead`
  - Téléchargement du PDF après soumission
- [ ] Liste des leads capturés dans `/admin/guides/[id]/leads`
- [ ] Export CSV des leads (optionnel)

---

**US-007-P1-005** : Gestion FAQ
- **En tant que** administrateur
- **Je veux** créer, modifier et réordonner les questions FAQ
- **Afin de** maintenir la FAQ à jour

**Scénarios** :
- **Given** je suis sur `/admin/faq`
- **When** je crée une nouvelle question
- **Then** je peux définir : question, réponse, catégorie, ordre
- **When** je réordonne par drag & drop
- **Then** l'ordre est sauvegardé

**Critères d'acceptation** :
- [ ] Liste `/admin/faq` avec filtres catégorie/status
- [ ] Formulaire création/édition :
  - Question (required)
  - Réponse (required, Markdown supporté)
  - Catégorie (select ou création)
  - Ordre (number, auto-incrémenté)
  - Locale (FR)
  - Statut (draft/published)
- [ ] Drag & drop pour réordonner
- [ ] Seules les FAQ published sont visibles publiquement
- [ ] Structured data FAQPage conservé sur `/ressources/faq`

---

**US-007-P1-006** : Bibliothèque Média
- **En tant que** administrateur
- **Je veux** uploader et gérer des images et PDFs
- **Afin de** les utiliser dans les articles et guides

**Scénarios** :
- **Given** je suis sur `/admin/media`
- **When** je clique "Upload"
- **Then** je peux sélectionner un fichier (image ou PDF)
- **When** je valide
- **Then** le fichier est uploadé, métadonnées extraites (size, dimensions pour images), et enregistré en DB

**Critères d'acceptation** :
- [ ] Page `/admin/media` avec grille de médias
- [ ] Upload avec drag & drop
- [ ] Types acceptés : jpg, png, webp, gif, pdf
- [ ] Taille max : 10MB pour images, 50MB pour PDFs
- [ ] Extraction métadonnées : size, width, height (images), altText, title
- [ ] Storage :
  - Si S3/R2 configuré : utiliser
  - Sinon : stockage local `apps/web/public/uploads/` avec noms uniques
- [ ] Media picker modal réutilisable dans éditeurs blog/guides
- [ ] Soft delete avec restauration
- [ ] Recherche par nom/type

---

**US-007-P1-007** : Gestion Menus (Header/Footer)
- **En tant que** administrateur
- **Je veux** éditer les menus de navigation
- **Afin de** modifier la structure du site sans code

**Scénarios** :
- **Given** je suis sur `/admin/menus`
- **When** je sélectionne "Header Menu"
- **Then** je vois la liste des items avec possibilité de réordonner (drag & drop)
- **When** je crée un item
- **Then** je peux définir : label, href, ordre, parent (pour sous-menus), external flag

**Critères d'acceptation** :
- [ ] Page `/admin/menus` avec sélection menu (Header/Footer)
- [ ] Liste des items avec drag & drop pour réordonner
- [ ] Formulaire création/édition item :
  - Label (required)
  - Href (required)
  - Ordre (auto)
  - Parent (select pour sous-menus, max 2 niveaux)
  - External (boolean, ouvre dans nouvel onglet)
- [ ] Prévisualisation de la structure
- [ ] Intégration avec composants Header/Footer existants (ne pas casser le layout)

---

**US-007-P1-008** : Migration depuis fichiers MDX/TS
- **En tant que** développeur
- **Je veux** migrer le contenu existant vers la base de données
- **Afin de** ne pas perdre le contenu actuel

**Scénarios** :
- **Given** les fichiers MDX blog existent dans `apps/web/src/content/blog/`
- **When** j'exécute le script de migration
- **Then** tous les articles sont importés en DB avec statut "published"
- **And** les routes publiques continuent de fonctionner

**Critères d'acceptation** :
- [ ] Script `apps/api/scripts/migrate-content.ts` :
  - Parse MDX blog depuis `apps/web/src/content/blog/` (gray-matter)
  - Importe dans `BlogPost` avec catégories/tags
  - Parse guides MDX (si existent) vers `Guide`
  - Importe FAQ depuis `apps/web/src/lib/content/faq.ts` ou composant hardcodé vers `FaqItem`
- [ ] Script idempotent (peut être relancé sans doublons)
- [ ] Logs détaillés de la migration
- [ ] Fallback : si DB vide, lire depuis fichiers (safety net)

---

### P2 - Priorité Haute (Should Have)

**US-007-P2-001** : SEO Global et Par-Page
- **En tant que** administrateur
- **Je veux** configurer les paramètres SEO globaux et par page
- **Afin de** optimiser le référencement

**Critères d'acceptation** :
- [ ] Page `/admin/settings/seo` avec :
  - Site title template (ex: "%s | ImmoTopia")
  - Default OG image
  - GA4 ID (optionnel)
  - Clarity ID (optionnel)
  - Canonical base URL
- [ ] Page `/admin/pages` pour éditer SEO des pages marketing :
  - /, /la-solution, /fonctionnalites, /pour-qui, /tarifs, /pourquoi-immotopia, /ressources, /contact
- [ ] Champs par page : seoTitle, seoDescription, ogImage
- [ ] Utilisation Next.js Metadata API pour rendu

---

**US-007-P2-002** : Versioning et Rollback
- **En tant que** administrateur
- **Je veux** voir l'historique des versions et restaurer une version précédente
- **Afin de** corriger des erreurs ou revenir en arrière

**Critères d'acceptation** :
- [ ] Snapshot automatique dans `Revision` à chaque :
  - Publication (status draft → published)
  - Modification majeure (changement titre/contenu)
- [ ] Page `/admin/blog/posts/[id]/revisions` liste toutes les versions
- [ ] Bouton "Restaurer" charge une version dans l'éditeur
- [ ] Diff visuel entre versions (optionnel)

---

**US-007-P2-003** : Audit Log
- **En tant que** administrateur
- **Je veux** voir l'historique de toutes les actions
- **Afin de** tracer les modifications et détecter les problèmes

**Critères d'acceptation** :
- [ ] Page `/admin/audit-logs` avec liste filtrée :
  - Filtres : action, entityType, date, adminUser
  - Recherche
- [ ] Enregistrement automatique de :
  - create/update/delete (blog, guides, FAQ, menus, media)
  - publish/schedule
  - upload media
  - login/logout
- [ ] Chaque log contient : adminUser, action, entityType, entityId, ip, userAgent, diffJson, timestamp
- [ ] Export CSV (optionnel)

---

**US-007-P2-004** : Prévisualisation avec Token Signé
- **En tant que** administrateur
- **Je veux** prévisualiser un brouillon sur le site public
- **Afin de** vérifier le rendu avant publication

**Critères d'acceptation** :
- [ ] Bouton "Prévisualiser" dans l'éditeur génère un token JWT signé avec :
  - entityType, entityId, expiresIn (1h)
- [ ] Route publique `/blog/[slug]?preview=token` :
  - Vérifie le token
  - Affiche le contenu même si status=draft
  - Banner "Prévisualisation" en haut
- [ ] Même logique pour guides et pages

---

### P3 - Priorité Moyenne (Nice to Have)

**US-007-P3-001** : Édition Pages Marketing (Page Blocks)
- **En tant que** administrateur
- **Je veux** éditer le contenu des sections homepage et pages marketing
- **Afin de** modifier le contenu sans intervention développeur

**Critères d'acceptation** :
- [ ] Page `/admin/pages` liste les pages éditables
- [ ] Éditeur de "blocs" JSON avec schémas Zod dans `@monorepo/contracts`
- [ ] Blocs typés : Hero, Stats, Features, Testimonials, Pricing, CTA, etc.
- [ ] Prévisualisation en temps réel
- [ ] Priorité pages : Home (hero, stats, CTAs), Testimonials, Pricing preview, Final CTA
- [ ] Les composants UI existants restent inchangés, seul le contenu est configuré

---

**US-007-P3-002** : Recherche Full-Text Blog
- **En tant que** visiteur
- **Je veux** rechercher dans les articles de blog
- **Afin de** trouver rapidement du contenu

**Critères d'acceptation** :
- [ ] Index PostgreSQL tsvector sur BlogPost (title, description, content)
- [ ] Recherche dans `/admin/blog/posts` utilise full-text
- [ ] Recherche publique dans `/blog` (si barre de recherche ajoutée)

---

**US-007-P3-003** : Changement de Mot de Passe
- **En tant que** administrateur
- **Je veux** changer mon mot de passe
- **Afin de** maintenir la sécurité

**Critères d'acceptation** :
- [ ] Page `/admin/settings` avec section "Sécurité"
- [ ] Formulaire : ancien password, nouveau password, confirmation
- [ ] Validation : min 8 caractères, complexité recommandée
- [ ] Après changement, invalidation de toutes les sessions sauf la session actuelle

---

## 🏗️ Architecture Technique

### Stack

- **Frontend Admin** : Next.js 15 App Router, TypeScript strict, Tailwind, shadcn/ui, lucide-react
- **Backend API** : Fastify (apps/api), Zod validation, Prisma ORM
- **Database** : PostgreSQL 16
- **Auth** : HttpOnly cookie sessions (signed) ou JWT HttpOnly cookie
- **Storage Media** : Local (`public/uploads/`) ou S3/R2 si configuré
- **Monorepo** : pnpm workspaces, packages @monorepo/contracts, @monorepo/ui, @monorepo/utils

### Décisions Architecture

**Authentification** :
- HttpOnly cookie sessions (signed avec secret) pour protection XSS
- Alternative : JWT dans HttpOnly cookie (même protection)
- Session expire après 24h d'inactivité
- Rate limiting : 5 tentatives login / 15 minutes par IP

**Content Storage** :
- PostgreSQL pour tous les contenus (blog, guides, FAQ, menus)
- Markdown stocké en DB (colonne `content` text)
- Rendu côté serveur avec `remark`/`rehype` pour MDX-like

**Rendu Public (ISR/SSR)** :
- **Blog/Guides** : ISR avec `revalidate` (ex: 3600s) + on-demand revalidation via webhook quand publish/update
- **FAQ** : SSR (contenu léger, changement fréquent)
- **Homepage/Pages marketing** : ISR si blocs JSON, sinon SSR
- Justification : Performance SEO maintenue, contenu frais après publication

**Media Storage** :
- Priorité 1 : Si S3/R2 configuré (env vars), utiliser
- Priorité 2 : Stockage local `apps/web/public/uploads/[year]/[month]/[uuid].[ext]`
- Servir via Next.js route `/api/media/[id]` ou nginx static si configuré
- Noms uniques : UUID v4 + extension originale

**CSRF Protection** :
- Token CSRF pour toutes les méthodes unsafe (POST/PUT/DELETE)
- Généré côté serveur, inclus dans formulaire, vérifié sur chaque requête
- Exclusion : GET, HEAD, OPTIONS

### Structure de Fichiers

```
apps/
├── api/
│   ├── src/
│   │   ├── index.ts (Fastify setup)
│   │   ├── routes/
│   │   │   ├── admin/
│   │   │   │   ├── auth.ts (login, logout, me)
│   │   │   │   ├── blog.ts (CRUD posts, categories, tags)
│   │   │   │   ├── guides.ts (CRUD guides, leads)
│   │   │   │   ├── faq.ts (CRUD faq items)
│   │   │   │   ├── menus.ts (CRUD menus, items)
│   │   │   │   ├── media.ts (upload, list, delete)
│   │   │   │   ├── pages.ts (CRUD pages, blocks)
│   │   │   │   ├── settings.ts (SEO, global settings)
│   │   │   │   ├── revisions.ts (list, restore)
│   │   │   │   └── audit-logs.ts (list, export)
│   │   │   └── public/
│   │   │       ├── blog.ts (list published, get by slug)
│   │   │       ├── guides.ts (list published, get by slug)
│   │   │       ├── faq.ts (list published)
│   │   │       └── preview.ts (verify token, get draft content)
│   │   ├── middleware/
│   │   │   ├── auth.ts (verify session, protect routes)
│   │   │   ├── csrf.ts (generate, verify token)
│   │   │   └── rate-limit.ts (rate limiting)
│   │   ├── utils/
│   │   │   ├── password.ts (hash, verify)
│   │   │   ├── session.ts (create, verify, invalidate)
│   │   │   ├── preview-token.ts (generate, verify JWT)
│   │   │   └── media.ts (upload, delete, get metadata)
│   │   └── scripts/
│   │       ├── migrate-content.ts (import MDX/TS to DB)
│   │       └── seed.ts (create admin, baseline data)
│   └── prisma/
│       ├── schema.prisma (all models)
│       └── migrations/
├── web/
│   └── src/
│       ├── app/
│       │   ├── admin/
│       │   │   ├── layout.tsx (admin layout with sidebar)
│       │   │   ├── page.tsx (dashboard)
│       │   │   ├── login/
│       │   │   │   └── page.tsx
│       │   │   ├── blog/
│       │   │   │   ├── posts/
│       │   │   │   │   ├── page.tsx (list)
│       │   │   │   │   ├── new/
│       │   │   │   │   │   └── page.tsx
│       │   │   │   │   └── [id]/
│       │   │   │   │       ├── page.tsx (edit)
│       │   │   │   │       └── revisions/
│       │   │   │   │           └── page.tsx
│       │   │   │   ├── categories/
│       │   │   │   │   └── page.tsx
│       │   │   │   └── tags/
│       │   │   │       └── page.tsx
│       │   │   ├── guides/
│       │   │   │   ├── page.tsx (list)
│       │   │   │   ├── new/
│       │   │   │   │   └── page.tsx
│       │   │   │   └── [id]/
│       │   │   │       ├── page.tsx (edit)
│       │   │   │       └── leads/
│       │   │   │           └── page.tsx
│       │   │   ├── faq/
│       │   │   │   └── page.tsx
│       │   │   ├── media/
│       │   │   │   └── page.tsx
│       │   │   ├── menus/
│       │   │   │   └── page.tsx
│       │   │   ├── pages/
│       │   │   │   └── page.tsx (optional)
│       │   │   ├── settings/
│       │   │   │   └── page.tsx
│       │   │   └── audit-logs/
│       │   │       └── page.tsx
│       │   ├── blog/
│       │   │   ├── [slug]/
│       │   │   │   └── page.tsx (read from DB, support preview token)
│       │   │   └── page.tsx (read from DB)
│       │   ├── ressources/
│       │   │   ├── guides/
│       │   │   │   ├── [slug]/
│       │   │   │   │   └── page.tsx (read from DB, lead capture if gated)
│       │   │   │   └── page.tsx (read from DB)
│       │   │   └── faq/
│       │   │       └── page.tsx (read from DB)
│       │   └── api/
│       │       └── revalidate/
│       │           └── route.ts (on-demand ISR revalidation)
│       ├── components/
│       │   └── admin/
│       │       ├── Layout/
│       │       │   ├── AdminLayout.tsx
│       │       │   ├── Sidebar.tsx
│       │       │   └── Topbar.tsx
│       │       ├── Blog/
│       │       │   ├── PostEditor.tsx
│       │       │   ├── PostList.tsx
│       │       │   └── MediaPicker.tsx
│       │       ├── Guides/
│       │       │   ├── GuideEditor.tsx
│       │       │   └── GuideLeadList.tsx
│       │       ├── FAQ/
│       │       │   ├── FAQEditor.tsx
│       │       │   └── FAQList.tsx
│       │       ├── Media/
│       │       │   ├── MediaLibrary.tsx
│       │       │   └── MediaUpload.tsx
│       │       └── common/
│       │           ├── DataTable.tsx
│       │           ├── StatusBadge.tsx
│       │           └── ConfirmDialog.tsx
│       └── lib/
│           ├── api/
│           │   └── admin.ts (API client for admin routes)
│           └── content/
│               ├── blog.ts (updated to read from DB, fallback to files)
│               ├── guides.ts (updated to read from DB)
│               └── faq.ts (updated to read from DB)
packages/
└── contracts/
    └── src/
        ├── admin.ts (Zod schemas for admin API)
        ├── blog.ts (BlogPost, BlogCategory, BlogTag schemas)
        ├── guides.ts (Guide, GuideLead schemas)
        ├── faq.ts (FaqItem schema)
        ├── menus.ts (Menu, MenuItem schemas)
        ├── media.ts (Media schema)
        └── pages.ts (Page, PageBlock schemas, optional)
```

### Dépendances à Ajouter

**apps/api/package.json** :
```json
{
  "dependencies": {
    "@fastify/cookie": "^9.0.0",
    "@fastify/csrf-protection": "^4.0.0",
    "@fastify/rate-limit": "^9.0.0",
    "argon2": "^0.31.0",
    "jsonwebtoken": "^9.0.0",
    "zod": "^3.22.0"
  }
}
```

**apps/web/package.json** :
```json
{
  "dependencies": {
    "@monorepo/contracts": "workspace:*",
    "react-markdown": "^9.0.0",
    "remark-gfm": "^4.0.0",
    "rehype-slug": "^6.0.0",
    "rehype-autolink-headings": "^7.0.0"
  }
}
```

### Variables d'Environnement

**apps/api/.env** :
```env
DATABASE_URL="postgresql://..."
ADMIN_EMAIL="admin@immotopia.com"
ADMIN_PASSWORD="secure-password-change-me"
SESSION_SECRET="random-secret-32-chars-min"
CSRF_SECRET="random-secret-32-chars-min"
JWT_SECRET="random-secret-32-chars-min" # if using JWT
S3_BUCKET="" # optional
S3_REGION="" # optional
S3_ACCESS_KEY="" # optional
S3_SECRET_KEY="" # optional
```

**apps/web/.env.local** :
```env
NEXT_PUBLIC_API_URL="http://localhost:3002"
```

---

## 🔒 Sécurité

### Authentification
- Hash password avec argon2 (ou bcrypt) - salt automatique
- Session HttpOnly cookie (signed) - protection XSS
- Expiration session : 24h inactivité
- Rate limiting login : 5 tentatives / 15min / IP

### CSRF
- Token CSRF pour POST/PUT/DELETE
- Généré côté serveur, inclus dans forms, vérifié sur chaque requête

### Autorisation
- Middleware auth sur toutes les routes `/admin/*` sauf `/admin/login`
- Vérification session sur chaque requête API admin
- Pas de rôles multiples (un seul admin pour MVP)

### Validation
- Zod schemas pour toutes les entrées API
- Sanitization Markdown (remark-sanitize si nécessaire)
- Validation uploads : type, taille, scan virus (optionnel)

### Audit
- Toutes les actions admin loggées dans `AuditLog`
- IP, userAgent, timestamp, diffJson enregistrés
- Pas de logs de mots de passe

---

## 📊 Performance & SEO

### Performance
- ISR pour blog/guides (revalidate 3600s) + on-demand revalidation
- SSR pour FAQ (léger, changement fréquent)
- Images optimisées Next/Image
- Code split automatique Next.js
- Lighthouse targets : Performance ≥ 90, SEO ≥ 90, Accessibility ≥ 90

### SEO
- Sitemap `/sitemap.ts` inclut published blog + guides
- RSS `/rss.xml/route.ts` utilise DB (published only)
- Structured data :
  - Article schema pour blog posts
  - FAQPage schema pour FAQ
  - BreadcrumbList où utilisé
- Metadata Next.js par page (title, description, OG)

### Migration Impact
- Routes publiques inchangées (`/blog`, `/ressources/guides`, `/ressources/faq`)
- Fallback vers fichiers si DB vide (safety)
- Pas de breaking changes pour utilisateurs

---

## 🚀 Migration & Déploiement

### Scripts de Migration

**1. Migration Prisma** :
```bash
cd apps/api
pnpm prisma migrate dev --name add_cms_models
pnpm prisma generate
```

**2. Seed (créer admin + données baseline)** :
```bash
cd apps/api
pnpm tsx src/scripts/seed.ts
```

**3. Import contenu existant** :
```bash
cd apps/api
pnpm tsx src/scripts/migrate-content.ts
```

### Déploiement VPS

**Commandes sécurisées** (ne pas impacter autres sites) :
```bash
# Build
cd apps/web
pnpm build

# Restart PM2 (vérifier le nom du process)
pm2 restart immotopia-website
# ou
pm2 restart ecosystem.config.js --only immotopia-website
```

**Nouvelles variables d'env** :
- Ajouter dans `.env` du VPS : `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SESSION_SECRET`, `CSRF_SECRET`
- Documenter dans `/docs/deploy.md`

**Nginx** :
- Pas de modification nécessaire (routes `/admin` gérées par Next.js)
- Si media local : servir `/uploads` via nginx static (optionnel)

---

## ✅ Critères de Validation

### Fonctionnels
- [ ] Admin peut se connecter avec credentials env
- [ ] Admin peut créer/modifier/publier un article de blog
- [ ] Admin peut créer/modifier un guide avec lead capture
- [ ] Admin peut gérer FAQ (créer, réordonner)
- [ ] Admin peut uploader et utiliser des médias
- [ ] Admin peut éditer les menus
- [ ] Prévisualisation brouillon fonctionne avec token
- [ ] Migration MDX → DB réussie sans perte de données
- [ ] Routes publiques fonctionnent (blog, guides, FAQ)
- [ ] RSS et sitemap incluent contenu DB

### Techniques
- [ ] Toutes les routes `/admin/*` protégées (sauf login)
- [ ] Rate limiting login fonctionnel
- [ ] CSRF protection active
- [ ] Audit log enregistre toutes les actions
- [ ] Soft delete fonctionne partout
- [ ] Versioning (revisions) sauvegarde à chaque publish
- [ ] ISR revalidation on-demand fonctionne
- [ ] Lighthouse scores maintenus (≥ 90 perf/SEO/accessibility)

### Sécurité
- [ ] Passwords hashés (argon2/bcrypt)
- [ ] Sessions HttpOnly cookies
- [ ] CSRF tokens validés
- [ ] Rate limiting actif
- [ ] Pas de données sensibles dans logs
- [ ] Validation Zod sur toutes les entrées

---

## 📚 Documentation

### À Créer

1. **`/docs/cms.md`** :
   - Guide d'utilisation du CMS
   - Comment créer un article, guide, FAQ
   - Comment gérer les médias
   - Comment éditer les menus
   - Comment utiliser la prévisualisation

2. **`/docs/deploy.md`** (mise à jour) :
   - Variables d'env CMS
   - Commandes migration/seed
   - Commandes build/restart PM2
   - Notes VPS (ne pas impacter autres sites)

3. **`/docs/architecture-cms.md`** (optionnel) :
   - Décisions architecture
   - Schéma base de données
   - Flux authentification
   - ISR/SSR strategy

---

## 🎯 Priorisation

### Phase 1 (MVP - Must Have)
1. Authentification admin
2. Modèles Prisma + migrations
3. CRUD Blog (posts, categories, tags)
4. CRUD Guides + lead capture
5. CRUD FAQ
6. Bibliothèque média
7. Gestion menus
8. Migration contenu existant

### Phase 2 (Should Have)
1. SEO global et par-page
2. Versioning et rollback
3. Audit log
4. Prévisualisation avec token

### Phase 3 (Nice to Have)
1. Édition pages marketing (blocs)
2. Recherche full-text
3. Changement mot de passe

---

## 📝 Notes

- **Locale** : FR uniquement pour MVP, structure prête pour multi-locale (EN plus tard)
- **Design** : Utiliser shadcn/ui existant, garder cohérence avec site public
- **Performance** : Ne pas dégrader Lighthouse scores
- **Conversion** : Ne pas casser les CTAs existants (maintenir ≥ 5% conversion)
- **VPS Safety** : Toutes les commandes doivent être documentées et testées sans impact sur autres sites

---

**Statut** : 📝 Draft  
**Prochaine étape** : Générer le plan d'implémentation avec `/speckit.plan`

