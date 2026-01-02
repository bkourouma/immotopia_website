# Spécification : Module Blog SEO-ready pour ImmoTopia

**Numéro de fonctionnalité** : 006  
**Branche Git** : 006-module-blog-seo-ready  
**Date de création** : 2025-12-29  
**Statut** : 📝 Draft

---

## 📋 Vue d'ensemble

### Description

Ajout d'un module Blog SEO-ready à ImmoTopia, permettant de publier des articles de blog optimisés pour le référencement naturel. Le blog utilise MDX pour le contenu, inclut des fonctionnalités de recherche et filtres, et intègre des CTA de conversion pour transformer les lecteurs en leads qualifiés.

Le module est conçu comme un MVP rapide, propre, performant et facile à maintenir, sans dépendance à un CMS externe. Le contenu est stocké directement dans le repository sous forme de fichiers MDX.

### Objectifs

- **Objectif principal** : Créer un blog fonctionnel avec routes `/blog` et `/blog/[slug]`
- **Objectif SEO** : Optimisation complète (metadata, OpenGraph, Twitter cards, schema.org)
- **Objectif conversion** : Intégrer des CTA "Créer mon compte" et "Demander une démo" dans les articles
- **Objectif performance** : Code optimisé, images Next/Image, code split, pas d'animations lourdes
- **Objectif indexation** : Sitemap, robots.txt et RSS feed pour faciliter l'indexation

### Contexte

ImmoTopia est une plateforme SaaS de gestion immobilière destinée aux professionnels. Le blog permettra de :
- Publier du contenu éditorial pour améliorer le référencement naturel
- Fournir des ressources utiles aux prospects (guides, bonnes pratiques)
- Générer des leads qualifiés via les CTA intégrés
- Renforcer l'expertise et la crédibilité de la marque

Le module doit s'intégrer parfaitement dans l'architecture Next.js existante sans casser les fonctionnalités en place.

---

## 👥 User Stories

### P1 - Priorité Critique (Must Have)

**US-006-P1-001** : Configuration MDX et dépendances
- **En tant que** développeur
- **Je veux** configurer le support MDX dans Next.js App Router
- **Afin de** pouvoir écrire des articles en format MDX avec frontmatter

**Scénarios** :
- **Given** le projet Next.js est configuré
- **When** j'installe et configure les dépendances MDX
- **Then** les fichiers .mdx sont reconnus et parsés correctement

**Critères d'acceptation** :
- [ ] Dépendances installées : @next/mdx, gray-matter, reading-time, remark-gfm, rehype-slug, rehype-autolink-headings
- [ ] next.config.js mis à jour pour supporter .mdx
- [ ] Support des plugins remark/rehype configuré
- [ ] Frontmatter parsé correctement

---

**US-006-P1-002** : Organisation des contenus blog
- **En tant que** équipe marketing
- **Je veux** avoir un dossier structuré pour les articles MDX
- **Afin de** organiser et maintenir facilement le contenu du blog

**Scénarios** :
- **Given** le dossier content/blog existe
- **When** j'ajoute un nouvel article .mdx
- **Then** l'article est automatiquement détecté et listé

**Critères d'acceptation** :
- [ ] Dossier `apps/web/content/blog/` créé
- [ ] Frontmatter obligatoire défini : title, description, date, author, category, tags
- [ ] Frontmatter optionnel : coverImage
- [ ] 3 articles d'exemple créés (FR) :
  - gestion-locative-sans-excel.mdx
  - crm-immobilier-relances.mdx
  - publier-annonce-qui-convertit.mdx
- [ ] readingTime calculé automatiquement

---

**US-006-P1-003** : Bibliothèque de lecture et index des articles
- **En tant que** développeur
- **Je veux** avoir des fonctions utilitaires pour lire et indexer les articles
- **Afin de** pouvoir afficher et rechercher les articles facilement

**Scénarios** :
- **Given** les articles MDX sont dans content/blog
- **When** j'appelle getAllPosts()
- **Then** tous les articles sont retournés triés par date desc

**Critères d'acceptation** :
- [ ] Fichier `apps/web/src/lib/blog.ts` créé
- [ ] Fonction `getAllPosts()` : retourne posts triés par date desc
- [ ] Fonction `getPostBySlug(slug)` : parse MDX + frontmatter
- [ ] Fonction `getAllSlugs()` : liste tous les slugs
- [ ] Fonction `getCategories()` : liste toutes les catégories
- [ ] Fonction `getTags()` : liste tous les tags
- [ ] Fonction `searchPosts(query)` : recherche dans titre/description/contenu
- [ ] readingTime calculé automatiquement
- [ ] excerpt généré si besoin

---

**US-006-P1-004** : Page liste des articles (/blog)
- **En tant que** visiteur
- **Je veux** voir la liste de tous les articles avec recherche et filtres
- **Afin de** trouver facilement les articles qui m'intéressent

**Scénarios** :
- **Given** je suis sur /blog
- **When** la page se charge
- **Then** je vois tous les articles avec leurs métadonnées

**Critères d'acceptation** :
- [ ] Page `apps/web/src/app/blog/page.tsx` créée
- [ ] Liste des articles affichée (tri date desc)
- [ ] Barre de recherche fonctionnelle
- [ ] Filtres par catégorie (UI simple)
- [ ] Filtres par tags (UI simple)
- [ ] Cartes article avec : titre, description, date, readingTime, category tag
- [ ] Pagination simple ou "Load more"
- [ ] Metadata SEO pour /blog

---

**US-006-P1-005** : Page article individuel (/blog/[slug])
- **En tant que** visiteur
- **Je veux** lire un article complet avec table des matières
- **Afin de** comprendre le contenu et naviguer facilement

**Scénarios** :
- **Given** je clique sur un article
- **When** la page /blog/[slug] se charge
- **Then** je vois l'article complet avec TOC et CTA

**Critères d'acceptation** :
- [ ] Page `apps/web/src/app/blog/[slug]/page.tsx` créée
- [ ] Rendu article MDX correct
- [ ] Hero article : titre, description, meta (date, readingTime, author)
- [ ] Table of contents automatique (basée sur h2/h3)
- [ ] Headings avec ancres cliquables
- [ ] CTA fin d'article : "Créer mon compte" + "Demander une démo"
- [ ] Bloc "Articles recommandés"
- [ ] Metadata dynamique (title/description/OG)
- [ ] Schema.org Article JSON-LD

---

**US-006-P1-006** : Composants UI blog
- **En tant que** développeur
- **Je veux** avoir des composants réutilisables pour le blog
- **Afin de** maintenir une UI cohérente et modulaire

**Critères d'acceptation** :
- [ ] `apps/web/src/components/blog/BlogCard.tsx` : carte article
- [ ] `apps/web/src/components/blog/BlogFilters.tsx` : barre de recherche + filtres
- [ ] `apps/web/src/components/blog/TableOfContents.tsx` : TOC automatique
- [ ] `apps/web/src/components/blog/BlogCTA.tsx` : CTA conversion
- [ ] `apps/web/src/components/blog/Prose.tsx` : styles typographiques

---

**US-006-P1-007** : Styles typographiques et lisibilité
- **En tant que** lecteur
- **Je veux** un contenu bien formaté et lisible
- **Afin de** lire confortablement les articles

**Critères d'acceptation** :
- [ ] Styles typographiques optimisés (tailwind typography ou custom)
- [ ] Largeur max optimale pour la lisibilité
- [ ] Line-height approprié
- [ ] Titres bien stylés (h1, h2, h3)
- [ ] Listes formatées
- [ ] Code blocks lisibles (rehype-pretty-code optionnel)

---

**US-006-P1-008** : SEO et indexation
- **En tant que** spécialiste SEO
- **Je veux** que le blog soit correctement indexé par les moteurs de recherche
- **Afin de** améliorer la visibilité organique

**Critères d'acceptation** :
- [ ] Sitemap.xml : `apps/web/src/app/sitemap.ts`
  - Inclure /blog + /blog/[slug] + pages importantes
- [ ] Robots.txt : `apps/web/src/app/robots.ts`
  - Configuration correcte pour indexation
- [ ] RSS feed : `apps/web/src/app/rss.xml/route.ts` (ou /feed.xml)
  - Inclure posts, title, description, link, date

---

**US-006-P1-009** : Tracking Clarity
- **En tant que** équipe marketing
- **Je veux** tracker les interactions sur le blog
- **Afin de** mesurer l'efficacité des CTA et l'engagement

**Critères d'acceptation** :
- [ ] Event Clarity `blog_cta_signup` sur clic CTA "Créer mon compte"
- [ ] Event Clarity `blog_cta_demo` sur clic CTA "Demander une démo"
- [ ] Event Clarity `blog_open_post` sur clic article depuis /blog
- [ ] Utiliser fonction utilitaire clarity existante ou la créer

---

**US-006-P1-010** : Page 404 pour articles
- **En tant que** visiteur
- **Je veux** voir une page 404 appropriée si un article n'existe pas
- **Afin de** avoir une bonne expérience utilisateur

**Critères d'acceptation** :
- [ ] `apps/web/src/app/blog/[slug]/not-found.tsx` créée
- [ ] Design cohérent avec le reste du site
- [ ] Lien retour vers /blog

---

### P2 - Priorité Haute (Should Have)

**US-006-P2-001** : Sticky mini-CTA
- **En tant que** équipe marketing
- **Je veux** un CTA sticky visible pendant la lecture
- **Afin de** maximiser les conversions sans être intrusif

**Critères d'acceptation** :
- [ ] Mini-CTA sticky en bas d'écran (optionnel)
- [ ] Design discret et non intrusif
- [ ] Tracking Clarity intégré

---

**US-006-P2-002** : Pagination avancée
- **En tant que** visiteur
- **Je veux** naviguer facilement entre les pages d'articles
- **Afin de** découvrir plus de contenu

**Critères d'acceptation** :
- [ ] Pagination avec numéros de page
- [ ] Navigation précédent/suivant
- [ ] Indicateur de page courante

---

### P3 - Priorité Moyenne (Nice to Have)

**US-006-P3-001** : Partage social
- **En tant que** visiteur
- **Je veux** partager facilement un article sur les réseaux sociaux
- **Afin de** diffuser le contenu

**Critères d'acceptation** :
- [ ] Boutons de partage (Twitter, LinkedIn, Facebook)
- [ ] OpenGraph et Twitter cards configurés

---

## 📐 Exigences techniques

### Contraintes

- **Framework** : Next.js 15 (App Router)
- **Dossier web** : `apps/web`
- **UI** : Tailwind CSS + shadcn/ui si utile
- **TypeScript** : Code TypeScript propre et typé
- **Performance** : Pas d'animations lourdes, images optimisées Next/Image, code split
- **Pas d'appels serveur externes** : Tout doit être local
- **Pas de dépendances inutiles** : Garder le bundle léger
- **Compilation** : Tout doit compiler et fonctionner immédiatement
- **Non-régression** : Ne pas modifier les autres pages sauf pour ajouter un lien "Blog" dans la navigation (si navigation existe)

### Dépendances techniques

**À installer** :
- `@next/mdx` : Support MDX pour Next.js
- `gray-matter` : Parsing frontmatter
- `reading-time` : Calcul du temps de lecture
- `remark-gfm` : Support GitHub Flavored Markdown
- `rehype-slug` : Ajout d'IDs aux headings
- `rehype-autolink-headings` : Liens automatiques sur les headings
- `rehype-pretty-code` : (optionnel) Code blocks stylés

**Configuration** :
- Mettre à jour `next.config.js` pour supporter .mdx
- Configurer les plugins remark/rehype

### Structure de fichiers

```
apps/web/
├── content/
│   └── blog/
│       ├── gestion-locative-sans-excel.mdx
│       ├── crm-immobilier-relances.mdx
│       └── publier-annonce-qui-convertit.mdx
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx
│   │   │       └── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── rss.xml/
│   │       └── route.ts
│   ├── components/
│   │   └── blog/
│   │       ├── BlogCard.tsx
│   │       ├── BlogFilters.tsx
│   │       ├── TableOfContents.tsx
│   │       ├── BlogCTA.tsx
│   │       └── Prose.tsx
│   └── lib/
│       └── blog.ts
```

### Format frontmatter MDX

```yaml
---
title: "Titre de l'article"
description: "Description SEO de l'article"
date: "2025-12-29"
author: "Nom de l'auteur"
category: "Gestion locative"
tags:
  - "excel"
  - "productivité"
  - "automatisation"
coverImage: "/images/blog/couv.jpg" # optionnel
---
```

### Intégrations

- **Clarity** : Tracking des événements blog
- **Navigation** : Ajout d'un lien "Blog" dans la navigation principale (si elle existe)

---

## ✅ Critères de succès

### Fonctionnels

- [ ] `/blog` affiche les articles (tri date desc)
- [ ] Recherche fonctionne (titre, description, contenu)
- [ ] Filtres catégorie/tags fonctionnent
- [ ] `/blog/[slug]` rend le MDX correctement
- [ ] Table of contents automatique fonctionne
- [ ] Headings avec ancres cliquables
- [ ] CTA présents en fin d'article
- [ ] Metadata/OG + schema.org présents
- [ ] Sitemap généré avec /blog et /blog/[slug]
- [ ] Robots.txt configuré
- [ ] RSS feed généré
- [ ] Events Clarity trackés

### Non-fonctionnels

- [ ] **Performance** : Lighthouse Performance score ≥ 90
- [ ] **SEO** : Lighthouse SEO score = 100
- [ ] **Accessibilité** : Lighthouse Accessibility score ≥ 90
- [ ] **Code** : TypeScript strict, pas d'erreurs de compilation
- [ ] **Bundle** : Pas de dépendances inutiles
- [ ] **Images** : Toutes optimisées avec Next/Image
- [ ] **Mobile** : Responsive design validé

---

## 🧪 Tests

### Tests unitaires

- [ ] Tests pour `getAllPosts()`, `getPostBySlug()`, `searchPosts()`
- [ ] Tests pour les composants blog (BlogCard, BlogFilters, etc.)
- [ ] Tests pour le calcul de readingTime

### Tests d'intégration

- [ ] Test d'intégration : chargement de la page /blog
- [ ] Test d'intégration : recherche et filtres
- [ ] Test d'intégration : chargement d'un article /blog/[slug]
- [ ] Test d'intégration : génération sitemap
- [ ] Test d'intégration : génération RSS

### Tests end-to-end

- [ ] E2E test : parcours complet (liste → article → CTA)
- [ ] E2E test : recherche d'article
- [ ] E2E test : filtres catégorie/tags
- [ ] E2E test : navigation TOC

### Tests SEO

- [ ] Audit SEO complet (Google Lighthouse)
- [ ] Validation metadata sur toutes les pages blog
- [ ] Validation structured data (Schema.org Article)
- [ ] Validation OpenGraph et Twitter cards
- [ ] Test de crawl sitemap.xml

### Tests performance

- [ ] Lighthouse Performance audit
- [ ] Core Web Vitals (LCP, FID, CLS)
- [ ] Bundle size analysis
- [ ] Image optimization check

---

## 📝 Notes

### Articles d'exemple

**1. gestion-locative-sans-excel.mdx**
- Catégorie : Gestion locative
- Tags : excel, productivité, automatisation, gestion
- Contenu : Guide pour passer d'Excel à un logiciel de gestion locative

**2. crm-immobilier-relances.mdx**
- Catégorie : CRM
- Tags : crm, relances, automatisation, leads
- Contenu : Comment automatiser les relances clients avec un CRM immobilier

**3. publier-annonce-qui-convertit.mdx**
- Catégorie : Marketing
- Tags : annonces, conversion, marketing, visibilité
- Contenu : Bonnes pratiques pour publier des annonces immobilières qui génèrent des leads

### Structure de navigation

- Ajouter un lien "Blog" dans la navigation principale (si elle existe)
- Le lien doit pointer vers `/blog`

### Internationalisation

- **FR uniquement** pour l'instant
- Structure préparée pour extension multilingue future (optionnel)

### Questions ouvertes

- Design des cartes article : style à définir selon design system existant
- Position exacte des CTA : fin d'article uniquement ou aussi sticky ?
- Pagination : "Load more" ou pagination classique ?
- Articles recommandés : algorithme (par catégorie, tags, date) ?

### Décisions techniques

- **MDX** : Choix de MDX pour flexibilité (markdown + composants React)
- **Pas de CMS** : MVP avec fichiers MDX dans le repo pour simplicité
- **Schema.org** : Article schema pour SEO
- **RSS** : Format RSS 2.0 standard
- **Images** : Next/Image pour optimisation automatique

---

## 🔗 Références

- [Documentation Next.js MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Article](https://schema.org/Article)
- [Tailwind Typography](https://tailwindcss.com/docs/plugins/typography)
- [MDX Documentation](https://mdxjs.com/)
- Design system ImmoTopia (Phase 2)
- Architecture Next.js existante (Phase 3)


