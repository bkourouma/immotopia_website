# Plan d'implémentation : 006-module-blog-seo-ready

**Date de création** : 2025-12-29  
**Statut** : 📋 Planning

---

## 🎯 Contexte technique

### Stack technique
- **Langage** : TypeScript 5.x
- **Frontend** : Next.js 15 (App Router)
- **UI** : Tailwind CSS + shadcn/ui (si utile)
- **Monorepo** : pnpm workspaces

### Dépendances existantes
- **Markdown** : `react-markdown`, `remark-gfm`, `rehype-highlight`, `rehype-raw` (déjà installés)
- **SEO** : `apps/web/src/lib/seo.ts`, `apps/web/src/lib/structured-data.ts`
- **Composants SEO** : `StructuredData`, `Breadcrumbs` (déjà créés)
- **Tracking** : `apps/web/src/lib/clarity.ts` (Clarity déjà intégré)
- **Markdown parser** : `apps/web/src/lib/markdown.ts` (parseFrontmatter existe)
- **Blog structure** : Composants blog existants (ArticleCard, ArticleList, ArticleContent)
- **Blog pages** : `/ressources/blog` existe (à migrer vers `/blog` ou adapter)

### Contraintes techniques
- **Next.js App Router** : Utiliser les nouvelles APIs (generateMetadata, generateStaticParams)
- **MDX** : Ajouter support MDX (actuellement seulement markdown)
- **Performance** : Pas d'animations lourdes, images Next/Image, code split
- **SEO** : Metadata + OpenGraph + Twitter cards + schema.org Article
- **Non-régression** : Ne pas casser les fonctionnalités existantes
- **Pas d'appels serveur externes** : Tout doit être local
- **TypeScript strict** : Code propre et typé

### Dépendances à installer
- `@next/mdx` : Support MDX pour Next.js App Router
- `gray-matter` : Parsing frontmatter (plus robuste que parseFrontmatter actuel)
- `reading-time` : Calcul précis du temps de lecture
- `rehype-slug` : Ajout d'IDs aux headings
- `rehype-autolink-headings` : Liens automatiques sur les headings
- `rehype-pretty-code` : (optionnel) Code blocks stylés

---

## ✅ Vérification de conformité constitution

### Principes fondamentaux
- [ ] **TDD** : Tests écrits avant l'implémentation (si applicable)
- [ ] **Library-First** : Code réutilisable dans packages/ (si nécessaire)
- [ ] **Type Safety** : TypeScript strict activé
- [ ] **Code Quality** : Linting et formatting automatiques

### Standards de code
- [ ] Conventions de nommage respectées
- [ ] Structure de dossiers conforme
- [ ] Documentation inline présente

### Architecture
- [ ] Séparation claire API / Web / Packages
- [ ] Pas de dépendances circulaires
- [ ] Réutilisation des composants existants (SEO, tracking)

---

## 📁 Structure du projet

### Nouveaux fichiers à créer

```
apps/web/
├── content/
│   └── blog/                                    # ✅ EXISTE - À compléter
│       ├── gestion-locative-sans-excel.mdx      # À créer
│       ├── crm-immobilier-relances.mdx           # À créer
│       └── publier-annonce-qui-convertit.mdx     # À créer
│
├── src/
│   ├── app/
│   │   ├── blog/                                 # À créer (ou migrer depuis /ressources/blog)
│   │   │   ├── page.tsx                          # Liste articles (recherche + filtres)
│   │   │   ├── layout.tsx                        # Layout blog avec SEO
│   │   │   └── [slug]/
│   │   │       ├── page.tsx                      # Article individuel
│   │   │       └── not-found.tsx                 # 404 article
│   │   ├── sitemap.ts                            # ✅ EXISTE - À mettre à jour
│   │   ├── robots.ts                             # ✅ EXISTE - Vérifier
│   │   └── rss.xml/
│   │       └── route.ts                          # À créer (RSS feed)
│   │
│   ├── components/
│   │   └── blog/
│   │       ├── BlogCard.tsx                      # ✅ EXISTE (ArticleCard) - À adapter
│   │       ├── BlogFilters.tsx                  # À créer (recherche + filtres)
│   │       ├── TableOfContents.tsx               # À créer (TOC automatique)
│   │       ├── BlogCTA.tsx                       # À créer (CTA conversion)
│   │       ├── Prose.tsx                         # À créer (styles typographiques)
│   │       ├── ArticleList.tsx                  # ✅ EXISTE - À adapter
│   │       ├── ArticleContent.tsx                # ✅ EXISTE - À adapter pour MDX
│   │       └── MarkdownContent.tsx               # ✅ EXISTE - À adapter pour MDX
│   │
│   └── lib/
│       └── blog.ts                               # ✅ EXISTE (content/blog.ts) - À compléter
│           # Fonctions à implémenter :
│           # - getAllPosts() : lire fichiers MDX depuis content/blog/
│           # - getPostBySlug(slug) : parse MDX + frontmatter
│           # - getAllSlugs() : liste tous les slugs
│           # - getCategories() : liste catégories
│           # - getTags() : liste tags
│           # - searchPosts(query) : recherche
```

### Fichiers à modifier
- [ ] `apps/web/next.config.js` - Ajouter support MDX
- [ ] `apps/web/package.json` - Ajouter dépendances MDX
- [ ] `apps/web/src/lib/content/blog.ts` - Implémenter toutes les fonctions (actuellement TODO)
- [ ] `apps/web/src/lib/markdown.ts` - Adapter pour MDX si nécessaire
- [ ] `apps/web/src/app/sitemap.ts` - Ajouter routes /blog et /blog/[slug]
- [ ] `apps/web/src/lib/structured-data.ts` - Ajouter generateArticleSchema() si manquant
- [ ] `apps/web/src/components/layout/Header.tsx` - Ajouter lien "Blog" si navigation existe
- [ ] `apps/web/src/components/blog/ArticleCard.tsx` - Adapter pour nouvelles métadonnées
- [ ] `apps/web/src/components/blog/ArticleContent.tsx` - Adapter pour MDX + TOC
- [ ] `apps/web/src/app/ressources/blog/` - Décider : migrer vers /blog ou garder /ressources/blog

---

## 🔬 Phase 0 : Recherche et analyse

### Recherche nécessaire
- [ ] Documentation Next.js MDX avec App Router (nouvelle API)
- [ ] Best practices MDX frontmatter et parsing
- [ ] Structure TOC automatique (extraction h2/h3)
- [ ] Format RSS 2.0 standard
- [ ] Schema.org Article structure complète
- [ ] Performance MDX vs Markdown (bundle size, parsing)

### Décisions à prendre
- [ ] **Route blog** : `/blog` ou `/ressources/blog` ? (actuellement /ressources/blog existe)
- [ ] **Format contenu** : MDX uniquement ou garder compatibilité markdown ?
- [ ] **TOC** : Client-side ou server-side extraction ?
- [ ] **Pagination** : "Load more" ou pagination classique ?
- [ ] **Articles recommandés** : Algorithme (catégorie, tags, date) ?
- [ ] **Sticky CTA** : Implémenter maintenant ou phase ultérieure ?

### Livrables
- [ ] `research.md` - Synthèse recherche MDX et SEO blog
- [ ] Décisions techniques documentées
- [ ] Architecture blog définie

---

## 🎨 Phase 1 : Design et architecture

### Architecture contenu

#### Articles MDX
- [ ] Structure frontmatter définie (title, description, date, author, category, tags, coverImage)
- [ ] Format MDX avec support composants React dans articles
- [ ] Génération slugs depuis nom de fichier ou frontmatter
- [ ] Calcul automatique readingTime avec `reading-time`
- [ ] Extraction excerpt depuis description ou contenu

#### Système de recherche et filtres
- [ ] Recherche full-text (titre, description, contenu)
- [ ] Filtres par catégorie (dropdown ou tags)
- [ ] Filtres par tags (multi-select)
- [ ] Combinaison recherche + filtres
- [ ] URL params pour partage (query, category, tags)

#### Table of Contents
- [ ] Extraction automatique h2/h3 depuis contenu MDX
- [ ] Génération IDs uniques pour chaque heading (rehype-slug)
- [ ] Liens automatiques sur headings (rehype-autolink-headings)
- [ ] TOC sticky ou sidebar
- [ ] Highlight section active lors du scroll

### Design SEO

#### Metadata dynamique
- [ ] Title : "{article.title} | ImmoTopia Blog"
- [ ] Description : frontmatter.description
- [ ] OpenGraph : title, description, image (coverImage), type "article"
- [ ] Twitter Cards : summary_large_image avec coverImage
- [ ] Canonical URL : /blog/[slug]
- [ ] Publication date et author dans metadata

#### Structured Data (Schema.org)
- [ ] Schema Article complet :
  - headline, description, image, datePublished, dateModified
  - author (Person schema), publisher (Organization)
  - mainEntityOfPage, articleSection (category)
- [ ] BreadcrumbList pour navigation
- [ ] Integration avec StructuredData component existant

### Design CRO

#### CTA conversion
- [ ] CTA fin d'article : "Créer mon compte" + "Demander une démo"
- [ ] Design cohérent avec design system
- [ ] Tracking Clarity : `blog_cta_signup`, `blog_cta_demo`
- [ ] Sticky mini-CTA (optionnel) : discret, non intrusif

#### Articles recommandés
- [ ] Bloc "Articles recommandés" en fin d'article
- [ ] Algorithme : même catégorie, tags similaires, articles récents
- [ ] Affichage 3-4 articles max
- [ ] Design cards cohérent avec BlogCard

### Design interface

#### Composants UI nécessaires
- [ ] **BlogFilters** : Barre recherche + filtres catégorie/tags
  - Input recherche avec debounce
  - Dropdown catégories
  - Multi-select tags
  - Reset filters
- [ ] **TableOfContents** : TOC automatique
  - Liste hiérarchique h2/h3
  - Liens avec scroll smooth
  - Highlight section active
- [ ] **BlogCTA** : CTA conversion
  - Deux boutons (Créer compte, Demander démo)
  - Design responsive
  - Tracking intégré
- [ ] **Prose** : Styles typographiques
  - Utiliser tailwind typography ou styles custom
  - Largeur max optimale
  - Line-height, spacing
  - Code blocks stylés

### Livrables
- [ ] Architecture blog documentée
- [ ] Design composants validé
- [ ] Structure frontmatter définie
- [ ] Plan migration /ressources/blog → /blog (si décidé)

---

## 🛠️ Phase 2 : Implémentation

### Étape 2.1 : Setup et fondations

#### Installation dépendances
- [ ] Installer `@next/mdx`
- [ ] Installer `gray-matter`
- [ ] Installer `reading-time`
- [ ] Installer `rehype-slug`
- [ ] Installer `rehype-autolink-headings`
- [ ] Installer `rehype-pretty-code` (optionnel)

#### Configuration Next.js MDX
- [ ] Mettre à jour `next.config.js` pour supporter .mdx
- [ ] Configurer plugins remark (remark-gfm)
- [ ] Configurer plugins rehype (rehype-slug, rehype-autolink-headings, rehype-pretty-code)
- [ ] Tester parsing MDX basique

#### Structure contenu
- [ ] Créer dossier `apps/web/content/blog/` (si n'existe pas)
- [ ] Créer 3 articles d'exemple avec frontmatter complet :
  - `gestion-locative-sans-excel.mdx`
  - `crm-immobilier-relances.mdx`
  - `publier-annonce-qui-convertit.mdx`
- [ ] Valider format frontmatter

### Étape 2.2 : Bibliothèque blog.ts

#### Implémentation fonctions
- [ ] **getAllPosts()** :
  - Lire tous fichiers .mdx depuis content/blog/
  - Parser frontmatter avec gray-matter
  - Calculer readingTime avec reading-time
  - Générer slug depuis nom fichier
  - Trier par date desc
  - Retourner BlogPost[]
- [ ] **getPostBySlug(slug)** :
  - Trouver fichier correspondant
  - Parser MDX + frontmatter
  - Calculer readingTime
  - Retourner BlogPost ou null
- [ ] **getAllSlugs()** :
  - Lister tous les slugs disponibles
  - Pour generateStaticParams
- [ ] **getCategories()** :
  - Extraire toutes les catégories uniques
  - Retourner string[]
- [ ] **getTags()** :
  - Extraire tous les tags uniques
  - Retourner string[]
- [ ] **searchPosts(query)** :
  - Recherche dans titre, description, contenu
  - Case-insensitive
  - Retourner BlogPost[] filtrés

#### Types TypeScript
- [ ] Définir interface BlogPost (title, description, date, author, category, tags, content, slug, readingTime)
- [ ] Définir interface BlogPostMetadata (frontmatter)
- [ ] Exporter types depuis blog.ts

### Étape 2.3 : Pages Next.js

#### Page liste articles (/blog)
- [ ] Créer `apps/web/src/app/blog/page.tsx`
- [ ] Implémenter :
  - Récupération tous articles (getAllPosts)
  - État recherche (useState)
  - État filtres catégorie/tags (useState)
  - Filtrage articles (searchPosts + filtres)
  - Affichage liste avec BlogCard
  - Pagination ou "Load more"
- [ ] Metadata SEO pour /blog
- [ ] Layout blog si nécessaire

#### Page article individuel (/blog/[slug])
- [ ] Créer `apps/web/src/app/blog/[slug]/page.tsx`
- [ ] Implémenter generateStaticParams avec getAllSlugs()
- [ ] Implémenter generateMetadata dynamique :
  - Title, description depuis frontmatter
  - OpenGraph complet
  - Twitter Cards
- [ ] Rendu article :
  - Hero article (titre, description, meta)
  - TableOfContents (extraction h2/h3)
  - Contenu MDX rendu
  - BlogCTA (fin d'article)
  - Articles recommandés
- [ ] Schema.org Article JSON-LD (StructuredData component)
- [ ] Breadcrumbs navigation

#### Page 404 article
- [ ] Créer `apps/web/src/app/blog/[slug]/not-found.tsx`
- [ ] Design cohérent
- [ ] Lien retour /blog

### Étape 2.4 : Composants UI

#### BlogFilters
- [ ] Créer `apps/web/src/components/blog/BlogFilters.tsx`
- [ ] Barre recherche :
  - Input avec debounce (300ms)
  - Icône recherche
  - Clear button
- [ ] Filtre catégorie :
  - Dropdown ou tags cliquables
  - Affichage nombre articles par catégorie
- [ ] Filtre tags :
  - Multi-select ou tags cliquables
  - Affichage tags disponibles
- [ ] Reset filters button
- [ ] URL params pour partage (query, category, tags)

#### TableOfContents
- [ ] Créer `apps/web/src/components/blog/TableOfContents.tsx`
- [ ] Extraction headings depuis contenu MDX (h2, h3)
- [ ] Génération structure hiérarchique
- [ ] Liens avec scroll smooth
- [ ] Highlight section active (IntersectionObserver)
- [ ] Sticky ou sidebar position
- [ ] Responsive (masqué sur mobile si nécessaire)

#### BlogCTA
- [ ] Créer `apps/web/src/components/blog/BlogCTA.tsx`
- [ ] Deux boutons :
  - "Créer mon compte" → lien signup
  - "Demander une démo" → lien demo
- [ ] Tracking Clarity :
  - `blog_cta_signup` sur clic "Créer mon compte"
  - `blog_cta_demo` sur clic "Demander une démo"
- [ ] Design responsive
- [ ] Variant sticky (optionnel)

#### Prose
- [ ] Créer `apps/web/src/components/blog/Prose.tsx`
- [ ] Styles typographiques :
  - Largeur max (prose max-w-4xl)
  - Line-height optimal
  - Spacing titres (h1, h2, h3)
  - Styles listes (ul, ol)
  - Styles liens
  - Code blocks (rehype-pretty-code)
- [ ] Utiliser tailwind typography ou styles custom

#### Adaptation composants existants
- [ ] **BlogCard** (ArticleCard) :
  - Adapter pour nouvelles métadonnées
  - Afficher readingTime
  - Afficher category tag
  - Lien vers /blog/[slug]
- [ ] **ArticleContent** :
  - Adapter pour MDX (pas juste markdown)
  - Intégrer rehype-slug et rehype-autolink-headings
  - Styles avec Prose component

### Étape 2.5 : SEO et indexation

#### Sitemap
- [ ] Mettre à jour `apps/web/src/app/sitemap.ts`
- [ ] Ajouter route /blog
- [ ] Ajouter toutes les routes /blog/[slug] dynamiquement
- [ ] Priorité et changefreq appropriés

#### Robots.txt
- [ ] Vérifier `apps/web/src/app/robots.ts`
- [ ] S'assurer que /blog est indexable
- [ ] Pas de restrictions sur /blog/[slug]

#### RSS Feed
- [ ] Créer `apps/web/src/app/rss.xml/route.ts`
- [ ] Format RSS 2.0 standard
- [ ] Inclure :
  - Title, description, link, pubDate pour chaque article
  - Channel metadata (title, description, link, language)
- [ ] Route accessible : /rss.xml ou /feed.xml

#### Structured Data Article
- [ ] Vérifier `apps/web/src/lib/structured-data.ts`
- [ ] Ajouter `generateArticleSchema()` si manquant
- [ ] Intégrer dans page article avec StructuredData component

### Étape 2.6 : Tracking et analytics

#### Clarity events
- [ ] Vérifier `apps/web/src/lib/clarity.ts` (déjà existe)
- [ ] Ajouter tracking dans BlogCTA :
  - `blog_cta_signup` sur clic "Créer mon compte"
  - `blog_cta_demo` sur clic "Demander une démo"
- [ ] Ajouter tracking dans BlogCard :
  - `blog_open_post` sur clic article depuis /blog
- [ ] Tester tracking en développement

### Étape 2.7 : Navigation

#### Lien Blog dans header
- [ ] Vérifier `apps/web/src/components/layout/Header.tsx`
- [ ] Ajouter lien "Blog" dans navigation (si navigation existe)
- [ ] Lien pointe vers /blog
- [ ] Style cohérent avec autres liens

### Étape 2.8 : Polish et optimisation

#### Performance
- [ ] Audit Lighthouse
- [ ] Optimisation images (Next/Image pour coverImage)
- [ ] Code splitting (lazy load composants si nécessaire)
- [ ] ISR pour pages blog (revalidate: 3600)
- [ ] Bundle size analysis

#### SEO final
- [ ] Validation structured data (Google Rich Results Test)
- [ ] Vérification metadata toutes pages blog
- [ ] Test sitemap.xml (toutes routes présentes)
- [ ] Test RSS feed (format valide)

#### Accessibilité
- [ ] Navigation clavier (TOC, filtres)
- [ ] ARIA labels appropriés
- [ ] Contraste couleurs
- [ ] Focus states

---

## 🧪 Tests

### Tests unitaires
- [ ] Tests `getAllPosts()` : retourne articles triés par date
- [ ] Tests `getPostBySlug()` : trouve article ou retourne null
- [ ] Tests `searchPosts()` : recherche fonctionne
- [ ] Tests `getCategories()`, `getTags()` : extraction correcte
- [ ] Tests calcul readingTime
- [ ] Tests parsing frontmatter

### Tests d'intégration
- [ ] Test page /blog : affiche tous articles
- [ ] Test recherche : filtre articles correctement
- [ ] Test filtres : catégorie et tags fonctionnent
- [ ] Test page /blog/[slug] : rend MDX correctement
- [ ] Test TOC : extraction et affichage corrects
- [ ] Test sitemap : contient routes blog
- [ ] Test RSS : format valide

### Tests end-to-end
- [ ] E2E : Parcours liste → article → CTA
- [ ] E2E : Recherche article
- [ ] E2E : Filtres catégorie/tags
- [ ] E2E : Navigation TOC
- [ ] E2E : Clic CTA tracké

### Tests SEO
- [ ] Audit SEO (Lighthouse) : score = 100
- [ ] Validation metadata (title, description, OG)
- [ ] Validation structured data (Article schema)
- [ ] Test sitemap.xml (crawl)
- [ ] Test RSS feed (validation)

### Tests performance
- [ ] Lighthouse Performance : score ≥ 90
- [ ] Core Web Vitals (LCP, FID, CLS)
- [ ] Bundle size acceptable
- [ ] Images optimisées

### Couverture cible
- Tests fonctionnels : Scénarios critiques testés
- Tests SEO : 100% des pages blog validées
- Tests performance : Toutes pages validées

---

## 📦 Déploiement

### Prérequis
- [ ] Tous articles MDX créés et validés
- [ ] Images coverImage optimisées
- [ ] Build production réussi sans erreurs
- [ ] Tests passent

### Checklist de déploiement

#### Qualité code
- [ ] Tests passent (unitaires, intégration, E2E)
- [ ] Linting OK (ESLint)
- [ ] Type checking OK (TypeScript strict)
- [ ] Build production réussi
- [ ] Pas de warnings build

#### SEO pré-déploiement
- [ ] Sitemap.xml généré avec routes blog
- [ ] Robots.txt vérifié
- [ ] Structured data validée (Rich Results Test)
- [ ] Meta tags toutes pages blog vérifiés
- [ ] RSS feed généré et valide

#### Performance pré-déploiement
- [ ] Lighthouse audit > 90 (Performance, SEO, Accessibility)
- [ ] Core Web Vitals validés
- [ ] Images optimisées (Next/Image)
- [ ] Bundle size optimisé

#### Contenu pré-déploiement
- [ ] 3 articles d'exemple créés et relus
- [ ] Images avec alt-text
- [ ] Tous liens fonctionnels
- [ ] CTA testés et trackés

### Post-déploiement

#### Validation production
- [ ] Site accessible en production
- [ ] /blog charge correctement
- [ ] /blog/[slug] charge correctement
- [ ] Recherche et filtres fonctionnent
- [ ] CTA fonctionnent et trackés
- [ ] Sitemap accessible
- [ ] RSS feed accessible

#### Monitoring
- [ ] Clarity events trackés (blog_cta_signup, blog_cta_demo, blog_open_post)
- [ ] Google Search Console : soumission sitemap
- [ ] Monitoring erreurs (si Sentry configuré)

#### Optimisations post-lancement
- [ ] Analyse comportement utilisateurs
- [ ] Ajustements CRO basés sur données
- [ ] Planification nouveaux articles

---

## 📝 Notes d'implémentation

### Priorités d'implémentation
1. **P1 obligatoire** : Setup MDX + blog.ts + pages /blog et /blog/[slug]
2. **P1 obligatoire** : Composants UI (BlogCard, BlogFilters, TOC, CTA)
3. **P1 obligatoire** : SEO (metadata, structured data, sitemap, RSS)
4. **P2 optionnel** : Sticky CTA, pagination avancée
5. **P3 optionnel** : Partage social

### Approche itérative recommandée
- **Sprint 1** : Setup MDX + blog.ts + 3 articles d'exemple
- **Sprint 2** : Pages /blog et /blog/[slug] + composants de base
- **Sprint 3** : SEO complet + tracking + polish
- **Sprint 4** : Features optionnelles (sticky CTA, etc.)

### Dépendances externes
- Aucune (tout est local)
- Images coverImage : à fournir ou utiliser placeholders

### Décisions techniques

#### Route blog
- **Décision** : Utiliser `/blog` (plus standard que `/ressources/blog`)
- **Action** : Créer nouvelles pages dans `/blog`, garder `/ressources/blog` temporairement si nécessaire pour migration

#### Format contenu
- **Décision** : MDX uniquement (plus flexible que markdown)
- **Action** : Convertir articles existants en MDX si nécessaire

#### TOC
- **Décision** : Server-side extraction (plus performant)
- **Action** : Extraire headings lors du parsing MDX

#### Pagination
- **Décision** : "Load more" pour MVP (plus simple)
- **Action** : Implémenter pagination classique si besoin ultérieur

### Questions à valider
- Route finale : `/blog` ou `/ressources/blog` ?
- Sticky CTA : implémenter maintenant ou plus tard ?
- Articles recommandés : algorithme préféré ?

---

## 🔗 Références

- [Lien vers spec.md](./spec.md)
- [Documentation Next.js MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Article](https://schema.org/Article)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind Typography](https://tailwindcss.com/docs/plugins/typography)
- Architecture Next.js existante (Phase 3)
- Composants SEO existants (StructuredData, Breadcrumbs)
- Tracking Clarity existant


