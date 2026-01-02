# Plan d'implémentation : 008-intgration-navigation-blog-faq-et-synchronisation-donnes-backoffice

**Date de création** : 2026-01-02  
**Statut** : 📋 Planning

---

## 🎯 Contexte technique

### Stack technique
- **Langage** : TypeScript 5.x
- **Backend** : Fastify
- **Frontend** : Next.js 15 (App Router)
- **Base de données** : PostgreSQL 16 avec Prisma
- **UI** : Tailwind CSS + shadcn/ui (pas Ant Design côté public)
- **Validation** : Zod
- **Monorepo** : pnpm workspaces

### Dépendances existantes
- ✅ **Routes API publiques** : `/api/blog`, `/api/blog/:slug`, `/api/faq` (déjà implémentées dans `apps/api/src/routes/public/`)
- ✅ **Client API public** : `apps/web/src/lib/api/public.ts` (fonctions `getPublishedBlogPosts`, `getPublishedBlogPost`, `getPublishedFAQItems`)
- ✅ **Fonctions de contenu** : `apps/web/src/lib/content/blog.ts` et `faq.ts` tentent déjà de charger depuis DB avec fallback
- ✅ **Composants Header/Footer** : Liens Blog et FAQ déjà présents dans `apps/web/src/components/layout/Header.tsx` et `Footer.tsx`
- ✅ **Pages publiques** : `/blog/page.tsx` et `/ressources/faq/page.tsx` existent

### Contraintes techniques
- **Pas de changement de design** : Respecter le design existant
- **Compatibilité** : Ne pas casser le backoffice existant (`/admin`)
- **Performance** : Cache approprié (revalidate 300s déjà configuré)
- **Robustesse** : Fallback vers fichiers locaux si API indisponible (déjà implémenté)
- **SEO** : Respecter les best practices (sitemap, structured data, métadonnées)

---

## ✅ Vérification de conformité constitution

### Principes fondamentaux
- [ ] **TDD** : Tests écrits avant l'implémentation (tests d'intégration pour API, tests E2E pour navigation)
- [ ] **Library-First** : Utiliser les fonctions existantes dans `@/lib/api/public` (déjà réutilisables)
- [ ] **Type Safety** : TypeScript strict activé, types cohérents entre API et frontend
- [ ] **Code Quality** : Linting et formatting automatiques

### Standards de code
- [ ] Conventions de nommage respectées (camelCase pour fonctions, PascalCase pour composants)
- [ ] Structure de dossiers conforme (pas de nouvelles structures nécessaires)
- [ ] Documentation inline présente pour les nouvelles fonctions

### Architecture
- [ ] Séparation claire API / Web / Packages (maintenue)
- [ ] Pas de dépendances circulaires
- [ ] Contracts définis dans @monorepo/contracts (vérifier si besoin de nouveaux contrats)

---

## 📁 Structure du projet

### Nouveaux fichiers à créer
```
apps/web/src/
  ├── app/
  │   ├── blog/
  │   │   └── [slug]/
  │   │       └── page.tsx          # Page détail article (si n'existe pas)
  │   └── sitemap.ts                # À mettre à jour (s'il existe déjà)
  └── lib/
      └── api/
          └── public.ts             # ✅ Existe déjà - à améliorer si nécessaire
```

### Fichiers à modifier

#### Backend (API)
- [ ] `apps/api/src/routes/public/blog.ts` - ✅ Déjà implémenté, vérifier les filtres (status, publishedAt, deletedAt)
- [ ] `apps/api/src/routes/public/faq.ts` - ✅ Déjà implémenté, vérifier les filtres

#### Frontend (Web)
- [ ] `apps/web/src/components/layout/Header.tsx` - ✅ Liens déjà présents, vérifier visibilité/réorganisation si nécessaire
- [ ] `apps/web/src/components/layout/Footer.tsx` - ✅ Liens déjà présents dans section "Ressources"
- [ ] `apps/web/src/app/blog/page.tsx` - ✅ Existe, vérifier que `getAllBlogPosts()` charge bien depuis API
- [ ] `apps/web/src/app/blog/[slug]/page.tsx` - ⚠️ À vérifier/créer, utiliser `getPublishedBlogPost()`
- [ ] `apps/web/src/app/ressources/faq/page.tsx` - ✅ Existe, vérifier que `getFAQData()` charge bien depuis API
- [ ] `apps/web/src/lib/content/blog.ts` - ✅ Existe, vérifier que le fallback fonctionne correctement
- [ ] `apps/web/src/lib/content/faq.ts` - ✅ Existe, vérifier que le fallback fonctionne correctement
- [ ] `apps/web/src/lib/api/public.ts` - ✅ Existe, améliorer gestion d'erreurs et métadonnées SEO si nécessaire
- [ ] `apps/web/src/app/sitemap.ts` - ⚠️ À créer/mettre à jour pour inclure routes Blog/FAQ
- [ ] `apps/web/src/lib/structured-data.ts` - ⚠️ À créer/améliorer pour JSON-LD Article et FAQPage

---

## 🔬 Phase 0 : Recherche et analyse

### Recherche nécessaire
- [x] ✅ Analyse de l'architecture existante (routes API, fonctions client, pages publiques)
- [ ] Vérifier si la page `/blog/[slug]` existe et comment elle charge les données
- [ ] Vérifier la structure des métadonnées SEO dans le backoffice (champs seoTitle, seoDescription, ogImage)
- [ ] Analyser le sitemap existant pour comprendre sa structure
- [ ] Vérifier les types TypeScript entre API et frontend (BlogPost, FAQItem)

### Décisions à prendre
- [ ] **Route Blog** : Standardiser sur `/blog` uniquement (pas `/ressources/blog`) - vérifier s'il y a duplication
- [ ] **Menu Header** : Garder statique pour l'instant ou implémenter dynamique depuis DB ? (P2)
- [ ] **Cache revalidation** : 300s actuel est OK ou ajuster ?
- [ ] **Métadonnées SEO** : Comment mapper les champs backoffice (seoTitle, seoDescription) vers Next.js Metadata API ?
- [ ] **Structured Data** : Format JSON-LD pour Article et FAQPage (référence Schema.org)

### Livrables
- [ ] `research.md` - Synthèse de l'état actuel et gaps identifiés
- [ ] `data-model.md` - Mapping entre modèles Prisma et types frontend
- [ ] Documentation des endpoints API publics existants

---

## 🎨 Phase 1 : Design et architecture

### Design de l'API
- [x] ✅ Endpoints existants : `/api/blog`, `/api/blog/:slug`, `/api/faq`
- [ ] Vérifier que les filtres sont corrects (status='published', publishedAt<=now, deletedAt=null)
- [ ] Documenter les réponses API (structure des objets retournés avec SEO fields)
- [ ] Gestion d'erreurs : Actuellement retourne `null` en cas d'erreur (OK pour fallback)

### Design de l'interface
- [x] ✅ Composants UI existants : Header, Footer, ArticleCard, FAQPageContent
- [ ] Vérifier que les liens Header/Footer sont bien visibles (peut-être besoin de réorganisation)
- [ ] États et interactions : Pas de changement nécessaire (déjà responsive)

### Modèle de données
- [x] ✅ Schéma Prisma existant : BlogPost, FAQItem avec champs SEO
- [ ] Vérifier mapping des champs SEO (seoTitle, seoDescription, ogImage) dans les réponses API
- [ ] Types TypeScript : S'assurer que les types frontend correspondent aux réponses API

### Livrables
- [ ] Document de mapping API → Frontend (champs SEO)
- [ ] Schéma JSON-LD Article et FAQPage validé
- [ ] Plan de migration (si nécessaire) pour `/blog/[slug]`

---

## 🛠️ Phase 2 : Implémentation

### Étape 2.1 : Setup et fondations
- [ ] Vérifier que l'API backend est accessible depuis le frontend (variable `NEXT_PUBLIC_API_URL`)
- [ ] Tester que `getPublishedBlogPosts()` et `getPublishedFAQItems()` fonctionnent correctement
- [ ] Vérifier les types TypeScript (ajouter types manquants si nécessaire)
- [ ] Setup des tests d'intégration pour les fonctions API publiques

### Étape 2.2 : User Stories P1 - Navigation

**US-008-P1-001 & P1-002 : Liens Header/Footer**
- [x] ✅ Vérifier que les liens Blog et FAQ sont présents dans Header
- [x] ✅ Vérifier que les liens Blog et FAQ sont présents dans Footer
- [ ] Tester la visibilité sur desktop et mobile
- [ ] Vérifier que les liens sont des composants `<Link>` crawlables
- [ ] Tests E2E : Navigation Header → Blog, Navigation Footer → FAQ

### Étape 2.3 : User Stories P1 - Affichage Blog

**US-008-P1-003 : Liste Blog**
- [ ] Vérifier que `/blog/page.tsx` charge bien depuis `getAllBlogPosts()` qui utilise l'API
- [ ] Tester avec un article "Publié" créé dans le backoffice
- [ ] Vérifier que seuls les articles publiés apparaissent
- [ ] Vérifier que les articles programmés n'apparaissent qu'après la date
- [ ] Tester le fallback si l'API est indisponible

**US-008-P1-004 : Détail Article**
- [ ] Créer/modifier `/blog/[slug]/page.tsx` pour utiliser `getPublishedBlogPost(slug)`
- [ ] Gérer `notFound()` si article brouillon/non publié
- [ ] Implémenter métadonnées SEO depuis les champs backoffice (seoTitle, seoDescription, ogImage)
- [ ] Rendre le contenu Markdown correctement (utiliser `react-markdown` ou équivalent)
- [ ] Tests : Créer article publié → Vérifier affichage sur `/blog/[slug]`

### Étape 2.4 : User Stories P1 - Affichage FAQ

**US-008-P1-005 : Liste FAQ**
- [ ] Vérifier que `/ressources/faq/page.tsx` charge bien depuis `getFAQData()` qui utilise l'API
- [ ] Tester avec une question FAQ "Publié" créée dans le backoffice
- [ ] Vérifier que seules les questions publiées apparaissent
- [ ] Vérifier que les questions sont triées par `order` ascendant
- [ ] Tester le fallback si l'API est indisponible

### Étape 2.5 : User Stories P2 - Cache et Performance

**US-008-P2-002 : Cache optimisé**
- [x] ✅ Revalidation déjà configuré à 300s dans `fetchPublicAPI`
- [ ] Vérifier que le cache fonctionne correctement (Next.js ISR)
- [ ] Tester les performances avec beaucoup de contenu
- [ ] Ajouter fallback discret si API indisponible (déjà implémenté mais vérifier l'UX)

### Étape 2.6 : User Stories P2 - SEO

**US-008-P2-003 : Sitemap à jour**
- [ ] Créer/mettre à jour `apps/web/src/app/sitemap.ts`
- [ ] Inclure `/blog` dans le sitemap
- [ ] Inclure chaque `/blog/[slug]` pour les articles publiés (dynamique depuis API)
- [ ] Inclure `/ressources/faq` dans le sitemap
- [ ] Vérifier que les brouillons ne sont pas dans le sitemap

**US-008-P2-004 : Structured Data JSON-LD**
- [ ] Créer/mettre à jour `apps/web/src/lib/structured-data.ts`
- [ ] Ajouter fonction `generateArticleSchema(article)` pour JSON-LD Article
- [ ] Ajouter fonction `generateFAQPageSchema(questions)` pour JSON-LD FAQPage
- [ ] Implémenter dans `/blog/[slug]/page.tsx` avec composant `<StructuredData>`
- [ ] Implémenter dans `/ressources/faq/page.tsx` avec composant `<StructuredData>`
- [ ] Valider avec Google Rich Results Test

**Métadonnées SEO**
- [ ] Mapper les champs SEO du backoffice (seoTitle, seoDescription) vers Next.js Metadata
- [ ] Ajouter Open Graph tags depuis les champs backoffice
- [ ] Ajouter canonical URLs
- [ ] Implémenter dans `/blog/page.tsx`, `/blog/[slug]/page.tsx`, `/ressources/faq/page.tsx`

### Étape 2.7 : User Stories P2 - Menu dynamique (optionnel)

**US-008-P2-001 : Menu Header dynamique**
- [ ] Vérifier si un menu "Header" existe en base de données
- [ ] Créer route API publique `/api/menus/header` si nécessaire
- [ ] Modifier `Header.tsx` pour charger le menu depuis l'API
- [ ] Fallback statique si menu non trouvé (avec Blog/FAQ)
- [ ] S'assurer que Blog/FAQ sont présents (ajout automatique si manquants)

### Étape 2.8 : User Stories P3 - Debug et standardisation

**US-008-P3-001 : Logs de debug**
- [ ] Ajouter logs server-side en développement uniquement
- [ ] Logger les erreurs API dans les fonctions `getPublishedBlogPosts()`, `getPublishedFAQItems()`

**US-008-P3-002 : Standardisation routes**
- [ ] Vérifier s'il y a duplication `/blog` vs `/ressources/blog`
- [ ] Si duplication, rediriger `/ressources/blog` → `/blog` (301)
- [ ] Vérifier cohérence des slugs (unique, lower-case, tirets)

### Étape 2.9 : Polish et optimisation
- [ ] Refactoring si nécessaire
- [ ] Optimisation performance (vérifier bundle size)
- [ ] Documentation finale (commentaires de code)
- [ ] Vérification accessibilité (WCAG)

---

## 🧪 Tests

### Tests unitaires
- [ ] Tests pour `getPublishedBlogPosts()` : Vérifier mapping des données API
- [ ] Tests pour `getPublishedBlogPost(slug)` : Vérifier gestion erreur 404
- [ ] Tests pour `getPublishedFAQItems()` : Vérifier tri par ordre
- [ ] Tests pour fonctions de filtrage (status, publishedAt, deletedAt)

### Tests d'intégration
- [ ] Test : Créer article "Publié" dans backoffice → Vérifier apparition sur `/blog`
- [ ] Test : Créer question FAQ "Publié" dans backoffice → Vérifier apparition sur `/ressources/faq`
- [ ] Test : Créer article "Brouillon" → Vérifier qu'il n'apparaît PAS publiquement
- [ ] Test : Créer article "Programmé" → Vérifier qu'il n'apparaît qu'après la date
- [ ] Test : API indisponible → Vérifier fallback discret (pas de crash)

### Tests end-to-end
- [ ] E2E : Navigation Header → Clic sur Blog → Vérifier redirection vers `/blog`
- [ ] E2E : Navigation Header → Clic sur FAQ → Vérifier redirection vers `/ressources/faq`
- [ ] E2E : Footer → Clic sur Blog → Vérifier redirection
- [ ] E2E : `/blog` → Clic sur article → Vérifier affichage sur `/blog/[slug]`
- [ ] E2E : Vérifier que les liens sont crawlables (pas seulement onclick)

### Couverture cible
- Minimum 80% de couverture pour les nouvelles fonctions
- Tous les scénarios critiques testés (P1)
- Tests E2E pour les parcours utilisateurs principaux

---

## 📦 Déploiement

### Prérequis
- [ ] ✅ Migrations Prisma déjà appliquées (modèles BlogPost et FAQItem existent)
- [ ] Variables d'environnement configurées (`NEXT_PUBLIC_API_URL`)
- [ ] ✅ Build réussi (pas de nouvelles dépendances majeures)

### Checklist de déploiement
- [ ] Tests passent (unitaires, intégration, E2E)
- [ ] Linting OK (`pnpm lint`)
- [ ] Type checking OK (`pnpm type-check`)
- [ ] Build production réussi (`pnpm build`)
- [ ] Vérification manuelle :
  - [ ] Créer article publié → Vérifier sur `/blog`
  - [ ] Créer FAQ publié → Vérifier sur `/ressources/faq`
  - [ ] Vérifier sitemap (`/sitemap.xml`)
  - [ ] Vérifier structured data (Google Rich Results Test)

---

## 📝 Notes d'implémentation

### État actuel découvert

**✅ Déjà implémenté :**
1. Routes API publiques : `/api/blog`, `/api/blog/:slug`, `/api/faq`
2. Client API public : `apps/web/src/lib/api/public.ts`
3. Fonctions de contenu avec fallback : `blog.ts` et `faq.ts`
4. Liens Header/Footer : Blog et FAQ déjà présents
5. Pages publiques : `/blog/page.tsx` et `/ressources/faq/page.tsx` existent

**⚠️ À vérifier/implémenter :**
1. Page `/blog/[slug]` : Vérifier si existe et comment elle charge les données
2. Métadonnées SEO : Mapper les champs backoffice (seoTitle, seoDescription, ogImage) vers Next.js Metadata
3. Sitemap : Créer/mettre à jour pour inclure routes Blog/FAQ dynamiques
4. Structured Data : Ajouter JSON-LD Article et FAQPage
5. Tests : Vérifier que les données remontent bien depuis l'API

### Points d'attention

- **Duplication de routes** : Vérifier s'il y a `/blog` et `/ressources/blog` (standardiser sur `/blog`)
- **Cache** : Revalidation 300s déjà configuré, vérifier si adapté
- **Fallback** : Déjà implémenté mais vérifier UX si API indisponible
- **Types** : S'assurer cohérence entre modèles Prisma et types frontend

### Décisions techniques prises

- **Approche** : Utiliser les fonctions existantes plutôt que réimplémenter
- **Fallback** : Garder le fallback vers fichiers locaux pour robustesse
- **Cache** : Garder revalidation 300s (équilibre fraîcheur/performance)

---

## 🔗 Références

- [Lien vers spec.md](./spec.md)
- [Lien vers constitution](../../.specify/memory/constitution.md)
- [Backoffice.md](../../docs/BACKOFFICE.md) - Documentation du backoffice
- [WEBSITE_DESCRIPTION.md](../../WEBSITE_DESCRIPTION.md) - Architecture du site
- [Routes API publiques](../../apps/api/src/routes/public/) - Implémentation existante
- [Client API public](../../apps/web/src/lib/api/public.ts) - Fonctions existantes
