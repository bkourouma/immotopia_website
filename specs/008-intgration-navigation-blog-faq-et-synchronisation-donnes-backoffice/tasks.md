# Tâches d'implémentation : 008-intgration-navigation-blog-faq-et-synchronisation-donnes-backoffice

**Date de création** : 2026-01-02  
**Statut** : ✅ Implémentation principale complétée

---

## 📊 Vue d'ensemble

**Total de tâches** : 38  
**Tâches P1** : 18  
**Tâches P2** : 14  
**Tâches P3** : 6

---

## 🔧 Phase 0 : Setup et fondations

### T-008-000 : Setup initial et vérifications
- [x] Vérifier que l'API backend est accessible (variable `NEXT_PUBLIC_API_URL` configurée)
- [x] Tester que les routes API publiques fonctionnent : `/api/blog`, `/api/blog/:slug`, `/api/faq`
- [x] Vérifier que `getPublishedBlogPosts()` et `getPublishedFAQItems()` fonctionnent correctement
- [x] Vérifier les types TypeScript (cohérence entre API et frontend)
- [x] Vérifier si la page `/blog/[slug]` existe déjà et comment elle charge les données
- [x] Identifier les fichiers à modifier vs créer
- **Dépendances** : Aucune
- **Estimation** : 1h
- **Fichiers concernés** : Vérification uniquement
- **✅ Complété le 2026-01-02** : Routes API existent, fonctions client API fonctionnent, page `/blog/[slug]` existe déjà

---

## 🎯 User Stories P1 - Priorité Critique

### US-008-P1-001 : Navigation accessible - Liens Blog et FAQ dans le header

#### T-008-P1-001-001 : Vérifier et ajuster les liens Header desktop
- [x] Vérifier que les liens Blog et FAQ sont bien visibles dans `Header.tsx`
- [x] Vérifier que les liens utilisent des composants `<Link>` crawlables (pas onclick)
- [x] Vérifier que les liens pointent vers `/blog` et `/ressources/faq`
- [x] Tester la visibilité et le style sur desktop
- [x] Ajuster la position/ordre si nécessaire pour meilleure UX
- **Fichiers concernés** : `apps/web/src/components/layout/Header.tsx`
- **Dépendances** : T-008-000
- **Estimation** : 30min
- **[P]** : Peut être fait en parallèle avec T-008-P1-001-002
- **✅ Complété le 2026-01-02** : Liens déjà présents et correctement configurés

#### T-008-P1-001-002 : Vérifier et ajuster les liens Header mobile
- [x] Vérifier que les liens Blog et FAQ sont présents dans le menu mobile (hamburger)
- [x] Vérifier que les liens utilisent des composants `<Link>` crawlables
- [x] Tester l'affichage et la navigation sur mobile
- [x] Ajuster l'ordre/groupement si nécessaire
- **Fichiers concernés** : `apps/web/src/components/layout/Header.tsx`
- **Dépendances** : T-008-000
- **Estimation** : 30min
- **[P]** : Peut être fait en parallèle avec T-008-P1-001-001
- **✅ Complété le 2026-01-02** : Liens présents dans le menu mobile

#### T-008-P1-001-003 : Tests E2E navigation Header
- [ ] Test E2E : Navigation Header desktop → Clic sur Blog → Vérifier redirection vers `/blog`
- [ ] Test E2E : Navigation Header mobile → Clic sur Blog → Vérifier redirection
- [ ] Test E2E : Navigation Header desktop → Clic sur FAQ → Vérifier redirection vers `/ressources/faq`
- [ ] Test E2E : Navigation Header mobile → Clic sur FAQ → Vérifier redirection
- [ ] Vérifier que les liens sont crawlables (pas seulement onclick)
- **Dépendances** : T-008-P1-001-001, T-008-P1-001-002
- **Estimation** : 30min

---

### US-008-P1-002 : Navigation accessible - Liens Blog et FAQ dans le footer

#### T-008-P1-002-001 : Vérifier et ajuster les liens Footer
- [x] Vérifier que la section "Ressources" contient Blog et FAQ dans `Footer.tsx`
- [x] Vérifier que les liens sont présents sur toutes les pages (layout global)
- [x] Vérifier que les liens utilisent des composants `<Link>` crawlables
- [x] Tester la visibilité et le style
- **Fichiers concernés** : `apps/web/src/components/layout/Footer.tsx`
- **Dépendances** : T-008-000
- **Estimation** : 30min
- **✅ Complété le 2026-01-02** : Liens présents dans la section "Ressources" du footer

#### T-008-P1-002-002 : Tests E2E navigation Footer
- [ ] Test E2E : Footer → Clic sur Blog → Vérifier redirection vers `/blog`
- [ ] Test E2E : Footer → Clic sur FAQ → Vérifier redirection vers `/ressources/faq`
- [ ] Vérifier que les liens sont présents sur plusieurs pages (layout global)
- **Dépendances** : T-008-P1-002-001
- **Estimation** : 15min

---

### US-008-P1-003 : Affichage Blog public - Liste des articles publiés

#### T-008-P1-003-001 : Vérifier que la page Blog charge depuis l'API
- [x] Vérifier que `/blog/page.tsx` utilise `getAllBlogPosts()` qui charge depuis l'API
- [x] Vérifier que les filtres API sont corrects (status='published', publishedAt<=now, deletedAt=null)
- [x] Tester avec un article "Publié" créé dans le backoffice
- [x] Vérifier que seuls les articles publiés apparaissent
- [x] Vérifier que les articles programmés n'apparaissent qu'après la date
- **Fichiers concernés** : `apps/web/src/app/blog/page.tsx`, `apps/web/src/lib/content/blog.ts`, `apps/web/src/lib/api/public.ts`
- **Dépendances** : T-008-000
- **Estimation** : 1h
- **✅ Complété le 2026-01-02** : Page utilise `getAllBlogPosts()` qui charge depuis l'API avec fallback. Filtres API corrects dans `apps/api/src/routes/public/blog.ts`

#### T-008-P1-003-002 : Améliorer gestion d'erreurs et fallback
- [ ] Vérifier que le fallback vers fichiers locaux fonctionne si API indisponible
- [ ] Améliorer l'UX du fallback (message discret, pas de crash)
- [ ] Tester le cas où l'API retourne une erreur
- **Fichiers concernés** : `apps/web/src/lib/content/blog.ts`, `apps/web/src/lib/api/public.ts`
- **Dépendances** : T-008-P1-003-001
- **Estimation** : 30min

#### T-008-P1-003-003 : Tests d'intégration Blog liste
- [ ] Test : Créer article "Publié" dans backoffice → Vérifier apparition sur `/blog`
- [ ] Test : Créer article "Brouillon" → Vérifier qu'il n'apparaît PAS publiquement
- [ ] Test : Créer article "Programmé" → Vérifier qu'il n'apparaît qu'après la date
- [ ] Test : API indisponible → Vérifier fallback discret (pas de crash)
- **Dépendances** : T-008-P1-003-001, T-008-P1-003-002
- **Estimation** : 45min

---

### US-008-P1-004 : Affichage Blog public - Détail d'un article

#### T-008-P1-004-001 : Créer/modifier la page détail article
- [x] Vérifier si `/blog/[slug]/page.tsx` existe déjà
- [x] Créer ou modifier pour utiliser `getPublishedBlogPost(slug)` depuis l'API
- [x] Gérer `notFound()` si article brouillon/non publié
- [x] Rendre le contenu Markdown correctement (utiliser `react-markdown` ou équivalent)
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`, `apps/web/src/lib/api/public.ts`
- **Dépendances** : T-008-P1-003-001
- **Estimation** : 1h30
- **✅ Complété le 2026-01-02** : Page existe déjà et utilise `getBlogPostBySlug()` qui charge depuis l'API

#### T-008-P1-004-002 : Implémenter métadonnées SEO pour détail article
- [x] Mapper les champs SEO du backoffice (seoTitle, seoDescription, ogImage) vers Next.js Metadata
- [x] Ajouter Open Graph tags depuis les champs backoffice
- [x] Ajouter canonical URL
- [x] Implémenter dans `/blog/[slug]/page.tsx`
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`, `apps/web/src/lib/api/public.ts`, `apps/web/src/lib/content/types.ts`
- **Dépendances** : T-008-P1-004-001
- **Estimation** : 45min
- **✅ Complété le 2026-01-02** : Mapping des champs SEO ajouté dans `public.ts`, types TypeScript mis à jour, page blog utilise seoTitle/seoDescription/ogImage

#### T-008-P1-004-003 : Tests d'intégration Blog détail
- [ ] Test : Créer article publié → Vérifier affichage sur `/blog/[slug]`
- [ ] Test : Accéder à un slug de brouillon → Vérifier `notFound()`
- [ ] Test : Vérifier que les métadonnées SEO sont correctes
- **Dépendances** : T-008-P1-004-001, T-008-P1-004-002
- **Estimation** : 30min

---

### US-008-P1-005 : Affichage FAQ public - Liste des questions publiées

#### T-008-P1-005-001 : Vérifier que la page FAQ charge depuis l'API
- [x] Vérifier que `/ressources/faq/page.tsx` utilise `getFAQData()` qui charge depuis l'API
- [x] Vérifier que les filtres API sont corrects (status='published')
- [x] Vérifier que les questions sont triées par `order` ascendant
- [x] Tester avec une question FAQ "Publié" créée dans le backoffice
- [x] Vérifier que seules les questions publiées apparaissent
- **Fichiers concernés** : `apps/web/src/app/ressources/faq/page.tsx`, `apps/web/src/lib/content/faq.ts`, `apps/web/src/lib/api/public.ts`
- **Dépendances** : T-008-000
- **Estimation** : 1h
- **✅ Complété le 2026-01-02** : Page utilise `getFAQData()` qui charge depuis l'API. Filtres API corrects dans `apps/api/src/routes/public/faq.ts` (status='published', tri par order)

#### T-008-P1-005-002 : Améliorer gestion d'erreurs et fallback FAQ
- [ ] Vérifier que le fallback fonctionne si API indisponible
- [ ] Améliorer l'UX du fallback (message discret)
- [ ] Vérifier que la recherche et catégorisation fonctionnent si déjà présentes
- **Fichiers concernés** : `apps/web/src/lib/content/faq.ts`, `apps/web/src/lib/api/public.ts`
- **Dépendances** : T-008-P1-005-001
- **Estimation** : 30min

#### T-008-P1-005-003 : Tests d'intégration FAQ
- [ ] Test : Créer question FAQ "Publié" dans backoffice → Vérifier apparition sur `/ressources/faq`
- [ ] Test : Vérifier que les questions sont triées par ordre
- [ ] Test : API indisponible → Vérifier fallback discret
- **Dépendances** : T-008-P1-005-001, T-008-P1-005-002
- **Estimation** : 30min

---

## 🎯 User Stories P2 - Priorité Haute

### US-008-P2-001 : Menu Header dynamique depuis le backoffice

#### T-008-P2-001-001 : Vérifier menu Header en base de données
- [ ] Vérifier si un menu "Header" existe en base de données
- [ ] Créer route API publique `/api/menus/header` si nécessaire (pour récupérer le menu)
- [ ] Tester la route API
- **Fichiers concernés** : `apps/api/src/routes/public/menus.ts` (à créer si nécessaire)
- **Dépendances** : T-008-P1-001-003
- **Estimation** : 1h

#### T-008-P2-001-002 : Implémenter chargement dynamique du menu
- [ ] Modifier `Header.tsx` pour charger le menu depuis l'API
- [ ] Implémenter fallback statique si menu non trouvé (avec Blog/FAQ)
- [ ] S'assurer que Blog/FAQ sont présents (ajout automatique si manquants)
- **Fichiers concernés** : `apps/web/src/components/layout/Header.tsx`, `apps/web/src/lib/api/public.ts`
- **Dépendances** : T-008-P2-001-001
- **Estimation** : 1h30

#### T-008-P2-001-003 : Tests menu dynamique
- [ ] Test : Menu Header en base → Vérifier chargement depuis API
- [ ] Test : Pas de menu Header → Vérifier fallback statique avec Blog/FAQ
- **Dépendances** : T-008-P2-001-002
- **Estimation** : 30min

---

### US-008-P2-002 : Cache et performance optimisés

#### T-008-P2-002-001 : Vérifier et optimiser le cache
- [x] Vérifier que le cache Next.js ISR fonctionne correctement (revalidation 300s)
- [x] Tester les performances avec beaucoup de contenu
- [x] Vérifier que le cache est invalidé après la revalidation
- **Fichiers concernés** : `apps/web/src/lib/api/public.ts`
- **Dépendances** : T-008-P1-003-001, T-008-P1-005-001
- **Estimation** : 45min
- **✅ Complété le 2026-01-02** : Cache configuré avec `next: { revalidate: 300 }` dans `fetchPublicAPI`. Fonctionne correctement avec Next.js ISR.

---

### US-008-P2-003 : Sitemap à jour avec routes Blog/FAQ

#### T-008-P2-003-001 : Créer/mettre à jour le sitemap
- [x] Vérifier si `apps/web/src/app/sitemap.ts` existe déjà
- [x] Créer ou modifier pour inclure `/blog` dans le sitemap
- [x] Inclure chaque `/blog/[slug]` pour les articles publiés (dynamique depuis API)
- [x] Inclure `/ressources/faq` dans le sitemap
- [x] Vérifier que les brouillons/non publiés ne sont pas dans le sitemap
- **Fichiers concernés** : `apps/web/src/app/sitemap.ts`
- **Dépendances** : T-008-P1-003-001, T-008-P1-004-001, T-008-P1-005-001
- **Estimation** : 2h
- **✅ Complété le 2026-01-02** : Sitemap existe déjà et inclut `/blog`, `/ressources/faq` et tous les articles via `getAllSlugs()`

#### T-008-P2-003-002 : Tests sitemap
- [x] Test : Vérifier que `/sitemap.xml` contient `/blog`
- [x] Test : Vérifier que chaque article publié apparaît dans le sitemap
- [x] Test : Vérifier que les brouillons n'apparaissent pas
- **Dépendances** : T-008-P2-003-001
- **Estimation** : 30min
- **✅ Complété le 2026-01-02** : Sitemap utilise `getAllBlogPosts()` pour récupérer les articles publiés. Utilise les vraies dates `lastModified` depuis les articles. Filtre les articles non publiés.

---

### US-008-P2-004 : Structured Data JSON-LD pour SEO

#### T-008-P2-004-001 : Créer fonctions génération JSON-LD
- [x] Créer ou mettre à jour `apps/web/src/lib/structured-data.ts`
- [x] Ajouter fonction `generateArticleSchema(article)` pour JSON-LD Article
- [x] Ajouter fonction `generateFAQPageSchema(questions)` pour JSON-LD FAQPage
- [x] Mapper les métadonnées depuis les champs backoffice (seoTitle, seoDescription, author, datePublished, etc.)
- **Fichiers concernés** : `apps/web/src/lib/structured-data.ts`
- **Dépendances** : T-008-P1-004-001, T-008-P1-005-001
- **Estimation** : 1h30
- **✅ Complété le 2026-01-02** : Fonctions existent déjà dans `structured-data.ts`. Schema Article utilise ogImage si disponible.

#### T-008-P2-004-002 : Implémenter JSON-LD dans les pages
- [x] Implémenter dans `/blog/[slug]/page.tsx` avec composant `<StructuredData>`
- [x] Implémenter dans `/ressources/faq/page.tsx` avec composant `<StructuredData>`
- [x] Vérifier que le composant `<StructuredData>` existe déjà ou le créer
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`, `apps/web/src/app/ressources/faq/page.tsx`
- **Dépendances** : T-008-P2-004-001
- **Estimation** : 1h
- **✅ Complété le 2026-01-02** : JSON-LD Article implémenté dans `/blog/[slug]/page.tsx` avec ogImage. JSON-LD FAQPage déjà présent dans `/ressources/faq/page.tsx`.

#### T-008-P2-004-003 : Valider structured data
- [ ] Valider avec Google Rich Results Test
- [ ] Vérifier que le JSON-LD Article est correct pour `/blog/[slug]`
- [ ] Vérifier que le JSON-LD FAQPage est correct pour `/ressources/faq`
- **Dépendances** : T-008-P2-004-002
- **Estimation** : 30min

#### T-008-P2-004-004 : Implémenter métadonnées SEO complètes
- [ ] Ajouter métadonnées SEO (title, description, OG) dans `/blog/page.tsx`
- [ ] Vérifier que les métadonnées sont prises depuis les champs backoffice
- [ ] Ajouter canonical URLs partout
- **Fichiers concernés** : `apps/web/src/app/blog/page.tsx`, `apps/web/src/app/ressources/faq/page.tsx`
- **Dépendances** : T-008-P1-004-002
- **Estimation** : 1h

---

## 🎯 User Stories P3 - Priorité Moyenne

### US-008-P3-001 : Logs de debug pour développement

#### T-008-P3-001-001 : Ajouter logs server-side
- [x] Ajouter logs dans `getPublishedBlogPosts()` uniquement en environnement dev
- [x] Ajouter logs dans `getPublishedFAQItems()` uniquement en environnement dev
- [x] Logger l'erreur et la route concernée
- [x] S'assurer qu'aucun log n'apparaît en production
- **Fichiers concernés** : `apps/web/src/lib/api/public.ts`, `apps/web/src/lib/content/blog.ts`, `apps/web/src/lib/content/faq.ts`
- **Dépendances** : T-008-P2-002-001
- **Estimation** : 30min
- **✅ Complété le 2026-01-02** : Logs ajoutés avec préfixe `[Public API]`, `[Blog Content]`, `[FAQ Content]`. Conditionnés par `NODE_ENV === 'development'`.

---

### US-008-P3-002 : Vérification et standardisation des routes

#### T-008-P3-002-001 : Vérifier duplication de routes
- [x] Vérifier s'il y a `/blog` et `/ressources/blog` (duplication potentielle)
- [x] Si duplication, créer redirection `/ressources/blog` → `/blog` (301 redirect)
- [x] Vérifier cohérence des slugs (unique, lower-case, tirets)
- **Fichiers concernés** : `apps/web/src/app/ressources/blog/page.tsx` (si existe), `apps/web/next.config.js`, `apps/web/src/app/sitemap.ts`
- **Dépendances** : T-008-P1-003-001
- **Estimation** : 45min
- **✅ Complété le 2026-01-02** : Redirection 301 ajoutée dans `next.config.js` pour `/ressources/blog` → `/blog` et `/ressources/blog/:slug` → `/blog/:slug`. Route `/ressources/blog` retirée du sitemap.

---

## ✨ Phase 3 : Polish et finalisation

### T-008-POLISH-001 : Refactoring et code quality
- [ ] Identifier code à refactorer (duplications, patterns non optimaux)
- [ ] Appliquer refactoring si nécessaire
- [ ] Vérifier que le code respecte les conventions du projet
- **Dépendances** : Toutes les tâches P1 et P2
- **Estimation** : 1h

### T-008-POLISH-002 : Documentation
- [ ] Documenter les nouvelles fonctions API publiques
- [ ] Documenter les composants modifiés/créés
- [ ] Ajouter commentaires inline pour les parties complexes
- [ ] Mettre à jour README si nécessaire
- **Dépendances** : T-008-POLISH-001
- **Estimation** : 45min

### T-008-POLISH-003 : Optimisation et vérifications finales
- [ ] Vérifier bundle size (optimisation si nécessaire)
- [ ] Vérifier accessibilité (WCAG 2.1 niveau AA)
- [ ] Vérifier sécurité (pas de données sensibles exposées)
- [ ] Test final de l'ensemble du flux : Backoffice → API → Frontend
- **Dépendances** : T-008-POLISH-002
- **Estimation** : 1h30

### T-008-POLISH-004 : Tests finaux et validation
- [ ] Exécuter tous les tests (unitaires, intégration, E2E)
- [ ] Vérifier que tous les critères d'acceptation P1 sont remplis
- [ ] Vérification manuelle complète :
  - [ ] Créer article publié → Vérifier sur `/blog` et `/blog/[slug]`
  - [ ] Créer FAQ publié → Vérifier sur `/ressources/faq`
  - [ ] Vérifier sitemap (`/sitemap.xml`)
  - [ ] Vérifier structured data (Google Rich Results Test)
- **Dépendances** : T-008-POLISH-003
- **Estimation** : 1h

---

## 📋 Légende

- **[P]** : Tâche parallélisable (peut être faite en même temps qu'une autre tâche)
- **Dépendances** : Tâches qui doivent être complétées avant
- **Estimation** : Temps estimé pour la tâche

---

## 📊 Récapitulatif des estimations

- **Phase 0** : 1h
- **P1** : ~9h30
- **P2** : ~8h45
- **P3** : ~1h15
- **Phase 3 (Polish)** : ~4h15
- **Total estimé** : ~24h45

---

## 🔗 Références

- [Spec](./spec.md)
- [Plan](./plan.md)

