# Tâches d'implémentation : 006-module-blog-seo-ready

**Date de création** : 2025-12-29  
**Statut** : 📋 Planning

---

## 📋 Légende

- **[P]** : Tâche parallélisable (peut être faite en même temps que d'autres)
- **Estimation** : Temps estimé en heures
- **Dépendances** : IDs des tâches qui doivent être complétées avant

---

## 🔧 Phase 0 : Setup et fondations

### T-006-000-001 : Installation des dépendances MDX
- [x] Installer `@next/mdx` via pnpm
- [x] Installer `gray-matter` via pnpm
- [x] Installer `reading-time` via pnpm
- [x] Installer `rehype-slug` via pnpm
- [x] Installer `rehype-autolink-headings` via pnpm
- [x] Installer `rehype-pretty-code` via pnpm (optionnel, pour code blocks stylés)
- **Fichiers concernés** : `apps/web/package.json`
- **Dépendances** : Aucune
- **Estimation** : 0.5h
- **[P]** : Oui

### T-006-000-002 : Configuration Next.js pour MDX
- [x] Mettre à jour `next.config.js` pour supporter .mdx
- [x] Configurer plugins remark (remark-gfm)
- [x] Configurer plugins rehype (rehype-slug, rehype-autolink-headings, rehype-pretty-code)
- [x] Tester parsing MDX basique avec un fichier test
- **Fichiers concernés** : `apps/web/next.config.js`
- **Dépendances** : T-006-000-001
- **Estimation** : 1h

### T-006-000-003 : Création structure dossiers blog
- [x] Créer dossier `apps/web/content/blog/` (si n'existe pas)
- [x] Vérifier structure existante dans `apps/web/src/content/blog/`
- [x] Décider emplacement final (content/ ou src/content/) - Utilisé `src/content/blog/`
- **Fichiers concernés** : Structure de dossiers
- **Dépendances** : Aucune
- **Estimation** : 0.25h
- **[P]** : Oui

### T-006-000-004 : Création articles d'exemple (3 articles)
- [x] Créer `gestion-locative-sans-excel.mdx` avec frontmatter complet
- [x] Créer `crm-immobilier-relances.mdx` avec frontmatter complet
- [x] Créer `publier-annonce-qui-convertit.mdx` avec frontmatter complet
- [x] Valider format frontmatter (title, description, date, author, category, tags, coverImage optionnel)
- [x] Ajouter contenu court mais réaliste pour chaque article
- **Fichiers concernés** : `apps/web/content/blog/*.mdx` (ou `apps/web/src/content/blog/*.mdx`)
- **Dépendances** : T-006-000-003
- **Estimation** : 2h
- **[P]** : Oui (les 3 articles peuvent être créés en parallèle)

---

## 🎯 P1 - Priorité Critique (Must Have)

### US-006-P1-001 : Configuration MDX et dépendances

#### T-006-P1-001-001 : Vérification installation dépendances
- [ ] Vérifier que toutes les dépendances sont installées
- [ ] Vérifier versions compatibles avec Next.js 15
- [ ] Tester import des packages
- **Fichiers concernés** : `apps/web/package.json`, `apps/web/node_modules/`
- **Dépendances** : T-006-000-001
- **Estimation** : 0.25h

#### T-006-P1-001-002 : Test parsing MDX avec frontmatter
- [ ] Créer fichier test MDX avec frontmatter
- [ ] Tester parsing avec gray-matter
- [ ] Vérifier extraction frontmatter correcte
- [ ] Vérifier extraction contenu MDX
- **Fichiers concernés** : Fichier test temporaire
- **Dépendances** : T-006-000-002, T-006-P1-001-001
- **Estimation** : 0.5h

---

### US-006-P1-002 : Organisation des contenus blog

#### T-006-P1-002-001 : Définition structure frontmatter
- [x] Documenter structure frontmatter obligatoire (title, description, date, author, category, tags)
- [x] Documenter frontmatter optionnel (coverImage)
- [x] Créer type TypeScript pour frontmatter (mis à jour types.ts)
- **Fichiers concernés** : `apps/web/src/lib/content/types.ts` (ou blog.ts)
- **Dépendances** : T-006-000-003
- **Estimation** : 0.5h

#### T-006-P1-002-002 : Validation articles d'exemple
- [ ] Vérifier que les 3 articles ont le frontmatter complet
- [ ] Vérifier format date (YYYY-MM-DD)
- [ ] Vérifier format tags (array)
- [ ] Vérifier que readingTime peut être calculé
- **Fichiers concernés** : `apps/web/content/blog/*.mdx`
- **Dépendances** : T-006-000-004, T-006-P1-002-001
- **Estimation** : 0.25h

---

### US-006-P1-003 : Bibliothèque de lecture et index des articles

#### T-006-P1-003-001 : Types TypeScript pour BlogPost
- [x] Définir interface `BlogPost` (title, description, date, author, category, tags, content, slug, readingTime)
- [x] Définir interface `BlogPostMetadata` (frontmatter)
- [x] Exporter types depuis blog.ts (types dans types.ts)
- **Fichiers concernés** : `apps/web/src/lib/content/blog.ts` ou `apps/web/src/lib/blog.ts`
- **Dépendances** : T-006-P1-002-001
- **Estimation** : 0.5h

#### T-006-P1-003-002 : Implémentation getAllPosts()
- [x] Lire tous fichiers .mdx depuis content/blog/
- [x] Parser frontmatter avec gray-matter
- [x] Calculer readingTime avec reading-time
- [x] Générer slug depuis nom fichier
- [x] Trier par date desc
- [x] Retourner BlogPost[]
- **Fichiers concernés** : `apps/web/src/lib/content/blog.ts`
- **Dépendances** : T-006-P1-003-001, T-006-000-004
- **Estimation** : 2h

#### T-006-P1-003-003 : Implémentation getPostBySlug()
- [x] Trouver fichier correspondant au slug
- [x] Parser MDX + frontmatter
- [x] Calculer readingTime
- [x] Retourner BlogPost ou null
- **Fichiers concernés** : `apps/web/src/lib/content/blog.ts`
- **Dépendances** : T-006-P1-003-002
- **Estimation** : 1h

#### T-006-P1-003-004 : Implémentation getAllSlugs()
- [x] Lister tous les fichiers .mdx
- [x] Générer slugs depuis noms de fichiers
- [x] Retourner string[] pour generateStaticParams
- **Fichiers concernés** : `apps/web/src/lib/content/blog.ts`
- **Dépendances** : T-006-P1-003-002
- **Estimation** : 0.5h
- **[P]** : Oui

#### T-006-P1-003-005 : Implémentation getCategories()
- [x] Extraire toutes les catégories uniques depuis tous les articles
- [x] Retourner string[] trié
- **Fichiers concernés** : `apps/web/src/lib/content/blog.ts`
- **Dépendances** : T-006-P1-003-002
- **Estimation** : 0.5h
- **[P]** : Oui

#### T-006-P1-003-006 : Implémentation getTags()
- [x] Extraire tous les tags uniques depuis tous les articles
- [x] Aplatir les arrays de tags
- [x] Retourner string[] trié
- **Fichiers concernés** : `apps/web/src/lib/content/blog.ts`
- **Dépendances** : T-006-P1-003-002
- **Estimation** : 0.5h
- **[P]** : Oui

#### T-006-P1-003-007 : Implémentation searchPosts()
- [x] Recherche case-insensitive dans titre
- [x] Recherche case-insensitive dans description
- [x] Recherche case-insensitive dans contenu (optionnel, peut être lourd)
- [x] Retourner BlogPost[] filtrés
- **Fichiers concernés** : `apps/web/src/lib/content/blog.ts`
- **Dépendances** : T-006-P1-003-002
- **Estimation** : 1h

---

### US-006-P1-004 : Page liste des articles (/blog)

#### T-006-P1-004-001 : Création page /blog/page.tsx
- [x] Créer `apps/web/src/app/blog/page.tsx`
- [x] Importer getAllPosts depuis blog.ts
- [x] Récupérer tous articles (server component)
- [x] Passer articles au client component pour affichage
- **Fichiers concernés** : `apps/web/src/app/blog/page.tsx`
- **Dépendances** : T-006-P1-003-002
- **Estimation** : 1h

#### T-006-P1-004-002 : Composant BlogList avec recherche et filtres
- [x] Créer composant client pour liste articles (intégré dans page.tsx)
- [x] État recherche (useState avec debounce dans BlogFilters)
- [x] État filtres catégorie (useState dans BlogFilters)
- [x] État filtres tags (useState dans BlogFilters)
- [x] Logique filtrage (searchPosts + filtres dans page.tsx)
- [x] Affichage liste avec BlogCard
- **Fichiers concernés** : `apps/web/src/app/blog/page.tsx` ou composant séparé
- **Dépendances** : T-006-P1-004-001, T-006-P1-006-001 (BlogCard)
- **Estimation** : 2h

#### T-006-P1-004-003 : Pagination ou "Load more"
- [x] Implémenter "Load more" (plus simple pour MVP) - Pas implémenté pour MVP, affichage direct
- [ ] Ou implémenter pagination classique (P2)
- [ ] Gérer état articles chargés
- **Fichiers concernés** : `apps/web/src/app/blog/page.tsx`
- **Dépendances** : T-006-P1-004-002
- **Estimation** : 1h

#### T-006-P1-004-004 : Metadata SEO pour /blog
- [x] Créer generateMetadata pour page /blog
- [x] Title : "Blog | ImmoTopia"
- [x] Description SEO optimisée
- [x] OpenGraph tags
- **Fichiers concernés** : `apps/web/src/app/blog/page.tsx`
- **Dépendances** : T-006-P1-004-001
- **Estimation** : 0.5h

---

### US-006-P1-005 : Page article individuel (/blog/[slug])

#### T-006-P1-005-001 : Création page /blog/[slug]/page.tsx
- [x] Créer `apps/web/src/app/blog/[slug]/page.tsx`
- [x] Implémenter generateStaticParams avec getAllSlugs()
- [x] Récupérer article avec getPostBySlug()
- [x] Gérer cas article non trouvé (notFound())
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`
- **Dépendances** : T-006-P1-003-003, T-006-P1-003-004
- **Estimation** : 1h

#### T-006-P1-005-002 : Hero article (titre, description, meta)
- [x] Créer composant BlogHero (intégré dans page.tsx)
- [x] Afficher titre (h1)
- [x] Afficher description
- [x] Afficher meta : date, readingTime, author
- [x] Afficher category tag
- **Fichiers concernés** : `apps/web/src/components/blog/BlogHero.tsx` ou dans page.tsx
- **Dépendances** : T-006-P1-005-001
- **Estimation** : 1h

#### T-006-P1-005-003 : Rendu contenu MDX
- [x] Utiliser composant MDX ou react-markdown avec plugins (MarkdownContent)
- [x] Intégrer rehype-slug pour IDs headings
- [x] Intégrer rehype-autolink-headings pour liens
- [x] Appliquer styles Prose (dans MarkdownContent)
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`, `apps/web/src/components/blog/Prose.tsx`
- **Dépendances** : T-006-P1-005-001, T-006-P1-006-005 (Prose)
- **Estimation** : 2h

#### T-006-P1-005-004 : Table of Contents automatique
- [x] Extraire headings (h2, h3) depuis contenu MDX
- [x] Générer structure hiérarchique
- [x] Créer composant TableOfContents
- [x] Liens avec scroll smooth
- [x] Highlight section active (IntersectionObserver)
- **Fichiers concernés** : `apps/web/src/components/blog/TableOfContents.tsx`
- **Dépendances** : T-006-P1-005-003
- **Estimation** : 2h

#### T-006-P1-005-005 : CTA fin d'article
- [x] Intégrer composant BlogCTA
- [x] Positionner en fin d'article
- [x] Vérifier tracking Clarity
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`
- **Dépendances** : T-006-P1-005-003, T-006-P1-006-003 (BlogCTA)
- **Estimation** : 0.5h

#### T-006-P1-005-006 : Bloc "Articles recommandés"
- [x] Algorithme : même catégorie, tags similaires, articles récents
- [x] Afficher 3-4 articles max
- [x] Utiliser BlogCard pour affichage
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`
- **Dépendances** : T-006-P1-005-001, T-006-P1-006-001 (BlogCard)
- **Estimation** : 1.5h

#### T-006-P1-005-007 : Metadata dynamique (title/description/OG)
- [x] Implémenter generateMetadata dynamique
- [x] Title : "{article.title} | ImmoTopia Blog"
- [x] Description : frontmatter.description
- [x] OpenGraph : title, description, image (coverImage), type "article"
- [x] Twitter Cards : summary_large_image
- [x] Canonical URL : /blog/[slug]
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`
- **Dépendances** : T-006-P1-005-001
- **Estimation** : 1h

#### T-006-P1-005-008 : Schema.org Article JSON-LD
- [x] Vérifier generateArticleSchema() dans structured-data.ts
- [x] Créer si manquant (existe déjà)
- [x] Intégrer dans page article avec StructuredData component
- [x] Inclure : headline, description, image, datePublished, author, publisher
- **Fichiers concernés** : `apps/web/src/lib/structured-data.ts`, `apps/web/src/app/blog/[slug]/page.tsx`
- **Dépendances** : T-006-P1-005-001
- **Estimation** : 1h

---

### US-006-P1-006 : Composants UI blog

#### T-006-P1-006-001 : Composant BlogCard
- [x] Adapter ArticleCard existant ou créer BlogCard
- [x] Afficher : titre, description, date, readingTime, category tag
- [x] Lien vers /blog/[slug]
- [x] Design responsive
- [x] Image coverImage si disponible (Next/Image)
- [x] Tracking Clarity blog_open_post
- **Fichiers concernés** : `apps/web/src/components/blog/BlogCard.tsx` ou adapter `ArticleCard.tsx`
- **Dépendances** : T-006-P1-003-001 (types)
- **Estimation** : 1.5h

#### T-006-P1-006-002 : Composant BlogFilters
- [x] Créer `apps/web/src/components/blog/BlogFilters.tsx`
- [x] Barre recherche : Input avec debounce (300ms), icône, clear button
- [x] Filtre catégorie : Dropdown ou tags cliquables
- [x] Filtre tags : Multi-select ou tags cliquables
- [x] Reset filters button
- [x] URL params pour partage (query, category, tags)
- **Fichiers concernés** : `apps/web/src/components/blog/BlogFilters.tsx`
- **Dépendances** : T-006-P1-003-005 (getCategories), T-006-P1-003-006 (getTags)
- **Estimation** : 3h

#### T-006-P1-006-003 : Composant BlogCTA
- [x] Créer `apps/web/src/components/blog/BlogCTA.tsx` (existe déjà, adapté)
- [x] Deux boutons : "Créer mon compte" + "Demander une démo"
- [x] Tracking Clarity : `blog_cta_signup`, `blog_cta_demo`
- [x] Design responsive
- [x] Design cohérent avec design system
- **Fichiers concernés** : `apps/web/src/components/blog/BlogCTA.tsx`
- **Dépendances** : T-006-P1-009-001 (tracking Clarity)
- **Estimation** : 1h

#### T-006-P1-006-004 : Composant Prose (styles typographiques)
- [x] Créer `apps/web/src/components/blog/Prose.tsx`
- [x] Utiliser tailwind typography ou styles custom
- [x] Largeur max optimale (prose max-w-4xl)
- [x] Line-height optimal
- [x] Styles titres (h1, h2, h3)
- [x] Styles listes (ul, ol)
- [x] Styles liens
- [x] Code blocks stylés (rehype-pretty-code)
- **Fichiers concernés** : `apps/web/src/components/blog/Prose.tsx`
- **Dépendances** : T-006-000-002 (config rehype-pretty-code)
- **Estimation** : 1.5h

---

### US-006-P1-007 : Styles typographiques et lisibilité

#### T-006-P1-007-001 : Application styles Prose
- [ ] Intégrer composant Prose dans rendu MDX
- [ ] Vérifier lisibilité (largeur, line-height, spacing)
- [ ] Tester sur différents écrans (mobile, tablet, desktop)
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`
- **Dépendances** : T-006-P1-006-004 (Prose), T-006-P1-005-003 (rendu MDX)
- **Estimation** : 0.5h

---

### US-006-P1-008 : SEO et indexation

#### T-006-P1-008-001 : Mise à jour sitemap.ts
- [x] Lire sitemap.ts existant
- [x] Ajouter route /blog
- [x] Ajouter toutes les routes /blog/[slug] dynamiquement (getAllSlugs)
- [x] Priorité et changefreq appropriés
- **Fichiers concernés** : `apps/web/src/app/sitemap.ts`
- **Dépendances** : T-006-P1-003-004 (getAllSlugs)
- **Estimation** : 1h

#### T-006-P1-008-002 : Vérification robots.ts
- [ ] Lire robots.ts existant
- [ ] Vérifier que /blog est indexable
- [ ] Vérifier que /blog/[slug] est indexable
- [ ] Pas de restrictions sur blog
- **Fichiers concernés** : `apps/web/src/app/robots.ts`
- **Dépendances** : Aucune
- **Estimation** : 0.25h

#### T-006-P1-008-003 : Création RSS feed
- [x] Créer `apps/web/src/app/rss.xml/route.ts`
- [x] Format RSS 2.0 standard
- [x] Channel metadata (title, description, link, language)
- [x] Inclure tous articles : title, description, link, pubDate
- [x] Route accessible : /rss.xml
- **Fichiers concernés** : `apps/web/src/app/rss.xml/route.ts`
- **Dépendances** : T-006-P1-003-002 (getAllPosts)
- **Estimation** : 2h

---

### US-006-P1-009 : Tracking Clarity

#### T-006-P1-009-001 : Vérification fonction clarity existante
- [ ] Lire `apps/web/src/lib/clarity.ts`
- [ ] Vérifier fonction trackClarity()
- [ ] Tester en développement
- **Fichiers concernés** : `apps/web/src/lib/clarity.ts`
- **Dépendances** : Aucune
- **Estimation** : 0.25h

#### T-006-P1-009-002 : Tracking CTA "Créer mon compte"
- [x] Ajouter trackClarity('blog_cta_signup') dans BlogCTA
- [x] Tester clic bouton
- **Fichiers concernés** : `apps/web/src/components/blog/BlogCTA.tsx`
- **Dépendances** : T-006-P1-006-003 (BlogCTA), T-006-P1-009-001
- **Estimation** : 0.25h

#### T-006-P1-009-003 : Tracking CTA "Demander une démo"
- [x] Ajouter trackClarity('blog_cta_demo') dans BlogCTA
- [x] Tester clic bouton
- **Fichiers concernés** : `apps/web/src/components/blog/BlogCTA.tsx`
- **Dépendances** : T-006-P1-006-003 (BlogCTA), T-006-P1-009-001
- **Estimation** : 0.25h

#### T-006-P1-009-004 : Tracking clic article depuis /blog
- [x] Ajouter trackClarity('blog_open_post') dans BlogCard
- [x] Tester clic sur article
- **Fichiers concernés** : `apps/web/src/components/blog/BlogCard.tsx`
- **Dépendances** : T-006-P1-006-001 (BlogCard), T-006-P1-009-001
- **Estimation** : 0.25h

---

### US-006-P1-010 : Page 404 pour articles

#### T-006-P1-010-001 : Création not-found.tsx
- [x] Créer `apps/web/src/app/blog/[slug]/not-found.tsx`
- [x] Design cohérent avec le reste du site
- [x] Message approprié (article non trouvé)
- [x] Lien retour vers /blog
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/not-found.tsx`
- **Dépendances** : Aucune
- **Estimation** : 0.5h
- **[P]** : Oui

---

## 🎯 P2 - Priorité Haute (Should Have)

### US-006-P2-001 : Sticky mini-CTA

#### T-006-P2-001-001 : Composant StickyCTA
- [x] Créer composant StickyCTA
- [x] Position sticky en bas d'écran
- [x] Design discret et non intrusif
- [x] Tracking Clarity intégré
- [x] Responsive (masqué sur mobile si nécessaire)
- **Fichiers concernés** : `apps/web/src/components/blog/StickyCTA.tsx`
- **Dépendances** : T-006-P1-006-003 (BlogCTA pour référence design)
- **Estimation** : 2h

#### T-006-P2-001-002 : Intégration StickyCTA dans page article
- [x] Intégrer StickyCTA dans /blog/[slug]/page.tsx
- [x] Afficher après un certain scroll (300px)
- [x] Tester comportement
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`
- **Dépendances** : T-006-P2-001-001
- **Estimation** : 0.5h

---

### US-006-P2-002 : Pagination avancée

#### T-006-P2-002-001 : Composant Pagination
- [x] Créer composant Pagination
- [x] Numéros de page
- [x] Navigation précédent/suivant
- [x] Indicateur page courante
- [x] Responsive
- **Fichiers concernés** : `apps/web/src/components/blog/Pagination.tsx`
- **Dépendances** : T-006-P1-004-003 (remplacer "Load more")
- **Estimation** : 2h

#### T-006-P2-002-002 : Intégration pagination dans /blog
- [x] Remplacer "Load more" par Pagination
- [x] Gérer URL params pour page
- [x] Tester navigation
- **Fichiers concernés** : `apps/web/src/app/blog/page.tsx`
- **Dépendances** : T-006-P2-002-001
- **Estimation** : 1h

---

## 🎯 P3 - Priorité Moyenne (Nice to Have)

### US-006-P3-001 : Partage social

#### T-006-P3-001-001 : Composant SocialShare
- [x] Créer composant SocialShare
- [x] Boutons : Twitter, LinkedIn, Facebook
- [x] URLs de partage avec titre et description
- [x] Design cohérent
- [x] Bouton copier lien
- **Fichiers concernés** : `apps/web/src/components/blog/SocialShare.tsx`
- **Dépendances** : T-006-P1-005-001 (page article)
- **Estimation** : 2h

#### T-006-P3-001-002 : Intégration SocialShare dans page article
- [x] Intégrer SocialShare dans /blog/[slug]/page.tsx
- [x] Positionner (avant CTA, après contenu)
- [x] Tester partage
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`
- **Dépendances** : T-006-P3-001-001
- **Estimation** : 0.5h

---

## 🎨 Phase 3 : Polish et finalisation

### T-006-300-001 : Ajout lien Blog dans navigation
- [x] Lire `apps/web/src/components/layout/Header.tsx`
- [x] Ajouter lien "Blog" dans navigation (si navigation existe)
- [x] Lien pointe vers /blog
- [x] Style cohérent avec autres liens
- **Fichiers concernés** : `apps/web/src/components/layout/Header.tsx`
- **Dépendances** : T-006-P1-004-001 (page /blog existe)
- **Estimation** : 0.5h

### T-006-300-002 : Audit Lighthouse Performance
- [ ] Lancer Lighthouse sur /blog
- [ ] Lancer Lighthouse sur /blog/[slug]
- [ ] Vérifier score ≥ 90
- [ ] Optimiser si nécessaire
- **Fichiers concernés** : Tous fichiers blog
- **Dépendances** : Toutes tâches P1
- **Estimation** : 1h

### T-006-300-003 : Audit Lighthouse SEO
- [ ] Lancer Lighthouse SEO sur /blog
- [ ] Lancer Lighthouse SEO sur /blog/[slug]
- [ ] Vérifier score = 100
- [ ] Corriger problèmes si nécessaire
- **Fichiers concernés** : Tous fichiers blog
- **Dépendances** : Toutes tâches P1
- **Estimation** : 1h

### T-006-300-004 : Validation structured data
- [ ] Utiliser Google Rich Results Test
- [ ] Tester Schema.org Article sur /blog/[slug]
- [ ] Corriger si nécessaire
- **Fichiers concernés** : `apps/web/src/app/blog/[slug]/page.tsx`, `apps/web/src/lib/structured-data.ts`
- **Dépendances** : T-006-P1-005-008
- **Estimation** : 0.5h

### T-006-300-005 : Tests manuels complets
- [ ] Tester parcours complet : /blog → article → CTA
- [ ] Tester recherche
- [ ] Tester filtres catégorie/tags
- [ ] Tester navigation TOC
- [ ] Tester tracking Clarity
- [ ] Tester responsive (mobile, tablet, desktop)
- **Fichiers concernés** : Tous fichiers blog
- **Dépendances** : Toutes tâches P1
- **Estimation** : 2h

### T-006-300-006 : Vérification TypeScript strict
- [ ] Lancer `pnpm type-check` dans apps/web
- [ ] Corriger toutes erreurs TypeScript
- [ ] Vérifier pas de `any` non typé
- **Fichiers concernés** : Tous fichiers blog
- **Dépendances** : Toutes tâches
- **Estimation** : 1h

### T-006-300-007 : Vérification linting
- [ ] Lancer `pnpm lint` dans apps/web
- [ ] Corriger toutes erreurs ESLint
- [ ] Vérifier formatage cohérent
- **Fichiers concernés** : Tous fichiers blog
- **Dépendances** : Toutes tâches
- **Estimation** : 0.5h

### T-006-300-008 : Build production test
- [ ] Lancer `pnpm build` dans apps/web
- [ ] Vérifier pas d'erreurs
- [ ] Vérifier pas de warnings critiques
- [ ] Vérifier taille bundle acceptable
- **Fichiers concernés** : Tous fichiers blog
- **Dépendances** : Toutes tâches
- **Estimation** : 0.5h

---

## 📊 Résumé des estimations

### Phase 0 : Setup et fondations
- **Total** : ~4.25h

### P1 - Priorité Critique
- **US-006-P1-001** : ~0.75h
- **US-006-P1-002** : ~0.75h
- **US-006-P1-003** : ~6h
- **US-006-P1-004** : ~4.5h
- **US-006-P1-005** : ~10h
- **US-006-P1-006** : ~7h
- **US-006-P1-007** : ~0.5h
- **US-006-P1-008** : ~3.25h
- **US-006-P1-009** : ~1h
- **US-006-P1-010** : ~0.5h
- **Total P1** : ~34.5h

### P2 - Priorité Haute
- **US-006-P2-001** : ~2.5h
- **US-006-P2-002** : ~3h
- **Total P2** : ~5.5h

### P3 - Priorité Moyenne
- **US-006-P3-001** : ~2.5h
- **Total P3** : ~2.5h

### Phase 3 : Polish et finalisation
- **Total** : ~7h

### **TOTAL GLOBAL** : ~53.75h

---

## 🎯 Ordre d'implémentation recommandé

1. **Phase 0** : Setup complet (T-006-000-001 à T-006-000-004)
2. **P1-001 à P1-003** : Fondations (MDX, articles, blog.ts)
3. **P1-006** : Composants UI de base (BlogCard, BlogFilters, BlogCTA, Prose)
4. **P1-004** : Page liste /blog
5. **P1-005** : Page article /blog/[slug]
6. **P1-008** : SEO (sitemap, RSS)
7. **P1-009** : Tracking Clarity
8. **P1-010** : 404
9. **Phase 3** : Polish et tests
10. **P2 et P3** : Features optionnelles

---

## 📝 Notes

- Les tâches marquées **[P]** peuvent être faites en parallèle
- Les estimations sont indicatives et peuvent varier selon l'expérience
- Prioriser les tâches P1 avant P2 et P3
- Tester régulièrement pendant l'implémentation


