# CMS Back Office - Prochaines Étapes

## 📊 Résumé de l'Implémentation Actuelle

### ✅ Complété (Fondations Solides)

1. **Modèles de Données** : Schéma Prisma complet avec tous les modèles CMS
2. **Validation** : Tous les schémas Zod créés dans `@monorepo/contracts`
3. **Utilitaires** : Password hashing, sessions, preview tokens, audit logging, media upload
4. **Middleware** : Authentification, CSRF, rate limiting
5. **Routes API** : Authentification complète + Blog CRUD complet
6. **Scripts** : Seed script pour créer admin + données baseline

### 🚧 À Compléter

Les patterns sont établis. Les routes restantes suivent le même modèle que `blog.ts`.

---

## 🎯 Prochaines Étapes Prioritaires

### 1. Compléter les Routes API (2-3h)

Créer les routes manquantes en suivant le pattern de `blog.ts` :

**`apps/api/src/routes/admin/guides.ts`** :
```typescript
// Similar to blog.ts but for Guide model
// Include lead capture endpoint: POST /admin/guides/:id/leads
```

**`apps/api/src/routes/admin/faq.ts`** :
```typescript
// CRUD FaqItem
// Include reorder endpoint: PUT /admin/faq/reorder
```

**`apps/api/src/routes/admin/menus.ts`** :
```typescript
// CRUD Menu and MenuItem
// Include reorder endpoint: PUT /admin/menus/:id/reorder
```

**`apps/api/src/routes/admin/media.ts`** :
```typescript
// POST /admin/media/upload (multipart)
// GET /admin/media (list with filters)
// DELETE /admin/media/:id (soft delete)
```

**`apps/api/src/routes/admin/settings.ts`** :
```typescript
// GET/PUT /admin/settings/seo
// GET/PUT /admin/pages/:path/seo
```

Enregistrer dans `apps/api/src/index.ts` :
```typescript
await fastify.register(guidesRoutes);
await fastify.register(faqRoutes);
// etc.
```

### 2. Créer Script de Migration Contenu (1h)

**`apps/api/src/scripts/migrate-content.ts`** :
- Lire fichiers MDX depuis `apps/web/src/content/blog/`
- Parser avec gray-matter
- Insérer dans DB avec status="published"
- Même chose pour guides si fichiers existent
- Importer FAQ depuis composant hardcodé

### 3. Admin UI - Layout & Pages de Base (3-4h)

**Structure** :
```
apps/web/src/app/admin/
├── layout.tsx (AdminLayout avec Sidebar)
├── page.tsx (Dashboard)
├── login/page.tsx
├── blog/
│   ├── posts/
│   │   ├── page.tsx (List)
│   │   ├── new/page.tsx
│   │   └── [id]/page.tsx (Edit)
```

**Composants clés** :
- `AdminLayout.tsx` : Layout avec sidebar navigation
- `Sidebar.tsx` : Menu navigation admin
- `Topbar.tsx` : Barre supérieure avec logout
- Utiliser shadcn/ui pour tables, forms, dialogs

### 4. Mettre à Jour Routes Publiques (2h)

Modifier :
- `apps/web/src/lib/content/blog.ts` : Lire depuis API/DB
- `apps/web/src/lib/content/guides.ts` : Lire depuis API/DB
- `apps/web/src/lib/content/faq.ts` : Lire depuis API/DB

Ajouter fallback vers fichiers si DB vide.

### 5. ISR & SEO (1h)

- Route `/api/revalidate` pour on-demand revalidation
- Mettre à jour `sitemap.ts` et `rss.xml/route.ts`

---

## 🔧 Commandes pour Continuer

### 1. Installer Dépendances
```bash
cd apps/api
pnpm install
```

### 2. Créer Migration Prisma
```bash
cd apps/api
pnpm prisma migrate dev --name add_cms_models
pnpm prisma generate
```

### 3. Seed Database
```bash
cd apps/api
# Set env vars first: ADMIN_EMAIL, ADMIN_PASSWORD
pnpm tsx src/scripts/seed.ts
```

### 4. Tester API
```bash
cd apps/api
pnpm dev
# Test login: POST http://localhost:3002/admin/login
```

---

## 📝 Notes Importantes

1. **Variables d'Environnement** : Toutes listées dans `IMPLEMENTATION_STATUS.md`
2. **Patterns** : Toutes les routes suivent le même pattern (auth middleware, CSRF, audit log)
3. **Type Safety** : Utiliser les schémas Zod pour validation
4. **Error Handling** : Toujours retourner des erreurs structurées
5. **Soft Delete** : Utiliser `deletedAt` partout, jamais de DELETE réel

---

## 🎨 Admin UI - Composants shadcn/ui à Utiliser

- `Table` : Pour listes (blog, guides, FAQ)
- `Dialog` : Pour modals (media picker, confirmations)
- `Form` : Pour formulaires (éditeurs)
- `Select` : Pour dropdowns (catégories, tags)
- `Button` : Actions
- `Input`, `Textarea` : Champs de formulaire
- `Badge` : Status (draft/published)

Installer si nécessaire :
```bash
cd apps/web
pnpm dlx shadcn@latest add table dialog form select button input textarea badge
```

---

## ✅ Checklist Finale

Avant de considérer le CMS comme complet :

- [ ] Toutes les routes API créées et testées
- [ ] Admin UI fonctionnelle (toutes les pages)
- [ ] Migration contenu réussie
- [ ] Routes publiques mises à jour avec fallback
- [ ] ISR on-demand revalidation fonctionnelle
- [ ] Sitemap et RSS mis à jour
- [ ] Tests de sécurité (CSRF, rate limiting, auth)
- [ ] Documentation complète
- [ ] Lighthouse scores maintenus (≥ 90)

---

**Le code de base est solide. Les patterns sont établis. Il reste principalement de la répétition du pattern pour les routes restantes et la création de l'UI admin.**



