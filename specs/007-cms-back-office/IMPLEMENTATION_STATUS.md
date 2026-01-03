# CMS Back Office - Statut d'Implémentation

**Date** : 2025-01-27  
**Statut** : 🚧 En cours

---

## ✅ Complété

### 1. Modèles de Données Prisma
- ✅ Schéma Prisma complet avec tous les modèles CMS
  - AdminUser, Session
  - Media
  - BlogPost, BlogCategory, BlogTag, BlogPostTag
  - Guide, GuideLead
  - FaqItem
  - Menu, MenuItem
  - Page, SiteSetting
  - Revision, AuditLog
- 📁 `apps/api/prisma/schema.prisma`

### 2. Schémas Zod (Contracts)
- ✅ Tous les schémas de validation créés
  - `admin.ts` : Login, ChangePassword, Session
  - `blog.ts` : BlogPost, BlogCategory, BlogTag, ListQuery
  - `guides.ts` : Guide, GuideLead, ListQuery
  - `faq.ts` : FaqItem, ListQuery, Reorder
  - `menus.ts` : Menu, MenuItem, Reorder
  - `media.ts` : Media, Upload, ListQuery
  - `settings.ts` : SiteSetting, PageSeo
- 📁 `packages/contracts/src/*.ts`

### 3. Utilitaires API
- ✅ `password.ts` : Hash/verify avec argon2
- ✅ `session.ts` : Gestion sessions HttpOnly cookies signés
- ✅ `preview-token.ts` : Tokens JWT pour prévisualisation
- ✅ `audit-log.ts` : Création logs d'audit
- ✅ `media.ts` : Upload fichiers (local storage)
- 📁 `apps/api/src/utils/*.ts`

### 4. Middleware
- ✅ `auth.ts` : requireAuth, optionalAuth
- ✅ `csrf.ts` : Génération/vérification tokens CSRF
- ✅ `rate-limit.ts` : Rate limiting in-memory
- 📁 `apps/api/src/middleware/*.ts`

### 5. Routes API (Partiel)
- ✅ `auth.ts` : POST /admin/login, POST /admin/logout, GET /admin/me
- ✅ `blog.ts` : CRUD complet blog posts, categories, tags
- 📁 `apps/api/src/routes/admin/*.ts`

### 6. Dépendances
- ✅ Ajoutées dans `apps/api/package.json` :
  - @fastify/cookie, @fastify/cors
  - argon2, jsonwebtoken
  - reading-time, sharp
  - @fastify/rate-limit (déjà listé dans spec)

---

## 🚧 En Cours / À Compléter

### 1. Routes API Restantes
- [ ] `guides.ts` : CRUD guides + lead capture
- [ ] `faq.ts` : CRUD FAQ items + reorder
- [ ] `menus.ts` : CRUD menus + items + reorder
- [ ] `media.ts` : Upload, list, delete media
- [ ] `settings.ts` : SEO global + page SEO
- [ ] `revisions.ts` : List, restore revisions
- [ ] `audit-logs.ts` : List, export audit logs
- [ ] Routes publiques : GET /api/blog, /api/guides, /api/faq (pour ISR)

### 2. Scripts Migration
- [ ] `seed.ts` : Créer admin depuis env vars + données baseline
- [ ] `migrate-content.ts` : Importer MDX blog → DB, FAQ TS → DB

### 3. Admin UI Next.js
- [ ] Layout admin (Sidebar, Topbar)
- [ ] `/admin/login` : Page de connexion
- [ ] `/admin` : Dashboard
- [ ] `/admin/blog/*` : Gestion blog (list, create, edit)
- [ ] `/admin/guides/*` : Gestion guides
- [ ] `/admin/faq` : Gestion FAQ
- [ ] `/admin/media` : Bibliothèque média
- [ ] `/admin/menus` : Gestion menus
- [ ] `/admin/settings` : Paramètres SEO
- [ ] `/admin/audit-logs` : Logs d'audit

### 4. Composants Admin UI
- [ ] `AdminLayout.tsx` : Layout avec sidebar
- [ ] `Sidebar.tsx` : Navigation admin
- [ ] `Topbar.tsx` : Barre supérieure
- [ ] `PostEditor.tsx` : Éditeur blog avec Markdown
- [ ] `PostList.tsx` : Tableau liste posts avec filtres
- [ ] `MediaLibrary.tsx` : Grille médias
- [ ] `MediaPicker.tsx` : Modal sélection média
- [ ] `DataTable.tsx` : Composant table réutilisable
- [ ] Autres composants selon besoins

### 5. Mise à Jour Routes Publiques
- [ ] `/blog` : Lire depuis DB (fallback fichiers si DB vide)
- [ ] `/blog/[slug]` : Lire depuis DB + support preview token
- [ ] `/ressources/guides` : Lire depuis DB
- [ ] `/ressources/guides/[slug]` : Lire depuis DB + lead capture si gated
- [ ] `/ressources/faq` : Lire depuis DB
- [ ] Mettre à jour `apps/web/src/lib/content/blog.ts`
- [ ] Mettre à jour `apps/web/src/lib/content/guides.ts`
- [ ] Mettre à jour `apps/web/src/lib/content/faq.ts`

### 6. ISR & SEO
- [ ] Route `/api/revalidate` : On-demand revalidation
- [ ] Mettre à jour `/sitemap.ts` : Inclure posts/guides publiés depuis DB
- [ ] Mettre à jour `/rss.xml/route.ts` : Utiliser DB
- [ ] Structured data : Article (blog), FAQPage (faq)

### 7. Migrations Prisma
- [ ] Exécuter `prisma migrate dev --name add_cms_models`
- [ ] Ajouter index full-text PostgreSQL (migration SQL manuelle si nécessaire)
- [ ] Vérifier toutes les relations

### 8. Tests & Validation
- [ ] Tester authentification (login, logout, session)
- [ ] Tester CRUD blog
- [ ] Tester upload média
- [ ] Tester migration contenu
- [ ] Vérifier Lighthouse scores (≥ 90)

### 9. Documentation
- [ ] `/docs/cms.md` : Guide utilisation CMS
- [ ] Mettre à jour `/docs/deploy.md` : Variables env, commandes

---

## 📋 Prochaines Étapes Recommandées

### Phase 1 : Compléter API (Priorité)
1. Créer routes `guides.ts`, `faq.ts`, `menus.ts`, `media.ts`
2. Créer scripts `seed.ts` et `migrate-content.ts`
3. Tester toutes les routes API

### Phase 2 : Admin UI (Priorité)
1. Créer layout admin (Sidebar, Topbar)
2. Créer pages admin principales (blog, guides, FAQ)
3. Créer composants éditeurs et tables

### Phase 3 : Intégration Publique
1. Mettre à jour routes publiques pour lire DB
2. Implémenter ISR on-demand revalidation
3. Mettre à jour sitemap/RSS

### Phase 4 : Finalisation
1. Tests complets
2. Documentation
3. Déploiement

---

## 🔧 Commandes Utiles

### Installation dépendances
```bash
cd apps/api
pnpm install
```

### Migration Prisma
```bash
cd apps/api
pnpm prisma migrate dev --name add_cms_models
pnpm prisma generate
```

### Seed (après création script)
```bash
cd apps/api
pnpm tsx src/scripts/seed.ts
```

### Migration contenu (après création script)
```bash
cd apps/api
pnpm tsx src/scripts/migrate-content.ts
```

### Développement API
```bash
cd apps/api
pnpm dev
```

---

## 📝 Notes Techniques

### Variables d'Environnement Requises
```env
# apps/api/.env
DATABASE_URL="postgresql://..."
ADMIN_EMAIL="admin@immotopia.com"
ADMIN_PASSWORD="secure-password-change-me"
SESSION_SECRET="random-secret-32-chars-min"
CSRF_SECRET="random-secret-32-chars-min"
JWT_SECRET="random-secret-32-chars-min"
FRONTEND_URL="http://localhost:3000"
```

### Structure Fichiers Créés
```
apps/api/
├── prisma/schema.prisma ✅
├── src/
│   ├── utils/
│   │   ├── password.ts ✅
│   │   ├── session.ts ✅
│   │   ├── preview-token.ts ✅
│   │   ├── audit-log.ts ✅
│   │   └── media.ts ✅
│   ├── middleware/
│   │   ├── auth.ts ✅
│   │   ├── csrf.ts ✅
│   │   └── rate-limit.ts ✅
│   ├── routes/
│   │   └── admin/
│   │       ├── auth.ts ✅
│   │       ├── blog.ts ✅
│   │       ├── guides.ts ⏳
│   │       ├── faq.ts ⏳
│   │       ├── menus.ts ⏳
│   │       ├── media.ts ⏳
│   │       └── settings.ts ⏳
│   ├── scripts/
│   │   ├── seed.ts ⏳
│   │   └── migrate-content.ts ⏳
│   └── index.ts ✅ (mis à jour)

packages/contracts/src/
├── admin.ts ✅
├── blog.ts ✅
├── guides.ts ✅
├── faq.ts ✅
├── menus.ts ✅
├── media.ts ✅
└── settings.ts ✅
```

---

**Dernière mise à jour** : 2025-01-27



