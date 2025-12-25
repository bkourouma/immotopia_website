# Plan d'implémentation : 004-phase-4-contenu-et-optimisation

**Date de création** : 2025-12-23  
**Statut** : 📋 Planning

---

## 🎯 Contexte technique

### Stack technique
- **Langage** : TypeScript 5.x
- **Backend** : Fastify
- **Frontend** : Next.js 15
- **Base de données** : PostgreSQL 16 avec Prisma
- **UI** : Ant Design
- **Validation** : Zod
- **Monorepo** : pnpm workspaces

### Dépendances existantes
- Phase 2 (002) : Design system et composants UI
- Phase 3 (003) : Infrastructure technique, SEO de base (sitemap, robots, structured data)
- `apps/web/src/lib/seo.ts` : Fonctions de génération de métadonnées SEO
- `apps/web/src/lib/structured-data.ts` : Helpers Schema.org
- `apps/web/src/components/seo/StructuredData.tsx` : Composant pour injection JSON-LD
- `apps/web/src/components/analytics/GoogleAnalytics.tsx` : Tracking GA4
- Next.js 15 Metadata API pour SEO on-page
- Next.js Image component pour optimisation images

### Contraintes techniques
- Respecter la structure Next.js App Router existante
- Maintenir la cohérence avec le design system (Phase 2)
- Performance : Temps de chargement < 3s (Core Web Vitals)
- SEO : Compatibilité avec Google Search Console
- Accessibilité : WCAG 2.1 niveau AA minimum
- Pas de modification majeure de l'architecture existante (focus contenu et optimisation)

---

## ✅ Vérification de conformité constitution

### Principes fondamentaux
- [ ] **TDD** : Tests écrits avant l'implémentation
- [ ] **Library-First** : Code réutilisable dans packages/
- [ ] **Type Safety** : TypeScript strict activé
- [ ] **Code Quality** : Linting et formatting automatiques

### Standards de code
- [ ] Conventions de nommage respectées
- [ ] Structure de dossiers conforme
- [ ] Documentation inline présente

### Architecture
- [ ] Séparation claire API / Web / Packages
- [ ] Pas de dépendances circulaires
- [ ] Contracts définis dans @monorepo/contracts

---

## 📁 Structure du projet

### Nouveaux fichiers à créer

```
apps/web/src/
  ├── app/
  │   ├── ressources/
  │   │   ├── blog/
  │   │   │   ├── page.tsx                # ✅ EXISTE - À compléter (liste articles)
  │   │   │   ├── [slug]/
  │   │   │   │   └── page.tsx            # À créer (article individuel)
  │   │   │   └── layout.tsx              # À créer (SEO blog)
  │   │   ├── guides/
  │   │   │   ├── page.tsx                # ✅ EXISTE - À compléter (liste guides)
  │   │   │   ├── [slug]/
  │   │   │   │   └── page.tsx            # À créer (guide individuel)
  │   │   │   └── download/
  │   │   │       └── [slug]/
  │   │   │           └── page.tsx        # À créer (téléchargement)
  │   │   └── faq/
  │   │       └── page.tsx                # À créer (FAQ par persona)
  │
  ├── components/
  │   ├── blog/
  │   │   ├── ArticleCard.tsx             # Carte article de blog
  │   │   ├── ArticleList.tsx             # Liste d'articles
  │   │   └── ArticleContent.tsx          # Contenu article avec markdown
  │   ├── guides/
  │   │   ├── GuideCard.tsx               # Carte guide
  │   │   ├── GuideDownloadForm.tsx       # Formulaire téléchargement
  │   │   └── GuideList.tsx               # Liste guides
  │   ├── faq/
  │   │   ├── FAQSection.tsx              # Section FAQ par persona
  │   │   ├── FAQItem.tsx                 # Item FAQ individuel
  │   │   └── FAQSearch.tsx               # Recherche dans FAQ (optionnel)
  │   ├── seo/
  │   │   ├── Breadcrumbs.tsx             # Fil d'Ariane SEO
  │   │   └── FAQSchema.tsx               # Schema FAQ structuré
  │   └── cro/
  │       ├── SocialProof.tsx             # Preuves sociales (témoignages)
  │       ├── TrustBadges.tsx             # Badges de confiance
  │       └── ExitIntentPopup.tsx         # Popup exit-intent (optionnel)
  │
  ├── lib/
  │   ├── content/
  │   │   ├── blog.ts                     # Gestion articles blog
  │   │   ├── guides.ts                   # Gestion guides
  │   │   └── faq.ts                      # Gestion FAQ
  │   ├── markdown.ts                     # Parser markdown pour articles
  │   └── seo/
  │       └── keywords.ts                 # Configuration mots-clés par page
  │
  └── content/
      ├── blog/                           # Articles markdown
      │   ├── guide-gestion-immobiliere-afrique.md
      │   ├── choisir-logiciel-gestion-immobiliere.md
      │   └── [8 autres articles].md
      ├── guides/                         # Guides PDF
      │   ├── digitaliser-agence-immobiliere.pdf
      │   ├── checklist-copropriete.pdf
      │   └── roi-logiciel-immobilier.pdf
      └── faq/                            # Données FAQ
          └── faq-data.json

public/
  ├── guides/                             # Guides PDF publics
  ├── images/
  │   ├── blog/                           # Images articles
  │   ├── screenshots/                    # Captures écran plateforme
  │   └── testimonials/                   # Photos témoignages
  └── videos/                             # Vidéos (si optionnel)
```

### Fichiers à modifier
- [ ] `apps/web/src/app/page.tsx` - Intégration contenus finaux et optimisations CRO
- [ ] `apps/web/src/app/[toutes-pages]/page.tsx` - Optimisation SEO on-page par page (toutes pages existantes)
- [ ] `apps/web/src/app/ressources/blog/page.tsx` - ✅ EXISTE - Compléter avec liste articles réels
- [ ] `apps/web/src/app/ressources/guides/page.tsx` - ✅ EXISTE - Compléter avec liste guides réels
- [ ] `apps/web/src/app/sitemap.ts` - ✅ EXISTE - Ajout routes blog/articles, guides, FAQ
- [ ] `apps/web/src/lib/seo.ts` - ✅ EXISTE - Extension avec configuration mots-clés par page
- [ ] `apps/web/src/lib/structured-data.ts` - ✅ EXISTE - Ajout schemas Article, FAQPage, BreadcrumbList
- [ ] `apps/web/src/components/layout/Header.tsx` - Vérifier/ajouter liens Blog/Guides/FAQ
- [ ] `apps/web/src/components/layout/Footer.tsx` - Ajout liens SEO (blog, guides)
- [ ] `apps/web/next.config.js` - Configuration images/vidéos optimisées (si nécessaire)

---

## 🔬 Phase 0 : Recherche et analyse

### Recherche nécessaire
- [ ] Recherche stratégie SEO mots-clés cibles (Afrique de l'Ouest immobilier)
- [ ] Analyse concurrentielle SEO (outils : SEMrush, Ahrefs, Google Keyword Planner)
- [ ] Documentation best practices CRO pour SaaS B2B
- [ ] Recherche outils test A/B compatibles Next.js (Google Optimize, VWO, Optimizely)
- [ ] Analyse structure FAQ optimale pour SEO (FAQ Schema)
- [ ] Documentation format markdown pour articles de blog (remark, MDX)

### Décisions à prendre
- [ ] Format de stockage des articles blog (Markdown, MDX, CMS headless, ou fichiers statiques)
- [ ] Outil de test A/B à utiliser (Google Optimize vs VWO vs autre)
- [ ] Solution hébergement vidéos (YouTube embeds vs CDN propre)
- [ ] Intégration chat en ligne (Drift, Intercom, ou pas de chat pour l'instant)
- [ ] Structure URL blog (ex: `/blog/article-slug` vs `/articles/article-slug`)
- [ ] Système de capture leads pour guides (formulaire simple vs intégration CRM)

### Livrables
- [ ] `research.md` - Synthèse recherche SEO et CRO
- [ ] Liste mots-clés cibles par page validée
- [ ] Architecture contenu éditorial définie
- [ ] Décisions techniques documentées

---

## 🎨 Phase 1 : Design et architecture

### Architecture contenu

#### Articles de blog
- [ ] Structure données article (métadonnées : title, description, date, author, tags, featured image)
- [ ] Système de catégories/tags pour organisation
- [ ] Format markdown avec support images, code blocks, etc.
- [ ] Génération slugs URL depuis titre
- [ ] Système de pagination pour liste articles

#### Guides téléchargeables
- [ ] Structure métadonnées guide (title, description, PDF path, cover image)
- [ ] Formulaire capture email (validation, anti-spam)
- [ ] Page remerciement après téléchargement
- [ ] Gestion téléchargements PDF (CDN ou public folder)

#### FAQ
- [ ] Structure données FAQ par persona (questions/réponses)
- [ ] Organisation par catégories (par persona : Agence, Syndic, Promoteur)
- [ ] Recherche FAQ (optionnel - filtrage client-side)
- [ ] Accordéon/tabs pour navigation FAQ

### Design SEO

#### Optimisation on-page
- [ ] Configuration SEO par page (title, description, keywords, canonical)
- [ ] Structure Hn cohérente (H1 unique, H2/H3 hiérarchisés)
- [ ] Maillage interne optimisé (liens contextuels entre pages)
- [ ] URLs propres et parlantes (slugs SEO-friendly)

#### Structured Data (Schema.org)
- [ ] Schema Article pour articles blog
- [ ] Schema FAQPage pour FAQ
- [ ] Schema BreadcrumbList pour navigation
- [ ] Schema HowTo pour guides pratiques (si applicable)
- [ ] Extension Organization/WebSite existants

### Design CRO

#### Optimisations conversion
- [ ] Placement et design CTA optimisés (couleur, texte, position)
- [ ] Preuves sociales (témoignages, logos clients, chiffres)
- [ ] Badges de confiance (sécurité, certifications, garanties)
- [ ] Exit-intent popup (offre guide gratuit)
- [ ] A/B testing setup (2 versions Hero, variations CTA)

### Design interface

#### Composants UI nécessaires
- [ ] ArticleCard : Affichage article blog dans liste
- [ ] ArticleContent : Rendu markdown avec styles
- [ ] GuideCard : Affichage guide avec CTA téléchargement
- [ ] GuideDownloadForm : Formulaire email pour téléchargement
- [ ] FAQSection : Section FAQ organisée par persona
- [ ] FAQItem : Item question/réponse avec accordéon
- [ ] SocialProof : Composant témoignages/chiffres
- [ ] TrustBadges : Badges de confiance

### Livrables
- [ ] Architecture contenu documentée (structure données, flux)
- [ ] Configuration SEO complète (mots-clés, meta par page)
- [ ] Design composants CRO validé
- [ ] Wireframes/mockups composants blog/guides/FAQ (si nécessaire)
- [ ] Plan d'intégration contenu éditorial

---

## 🛠️ Phase 2 : Implémentation

### Étape 2.1 : Setup et fondations

#### Infrastructure contenu
- [ ] Création structure dossiers `content/` (blog, guides, faq)
- [ ] Setup parser markdown (remark, MDX, ou react-markdown)
- [ ] Configuration TypeScript pour types contenu
- [ ] Helpers lib/content (blog.ts, guides.ts, faq.ts)
- [ ] Configuration Next.js pour images/vidéos optimisées

#### SEO setup
- [ ] Extension `lib/seo/keywords.ts` avec configuration mots-clés par page
- [ ] Extension `lib/structured-data.ts` (schemas Article, FAQPage, BreadcrumbList)
- [ ] Configuration sitemap.ts pour inclure routes blog/guides/FAQ
- [ ] Vérification robots.txt configuration

#### CRO setup
- [ ] Configuration outil test A/B (si choisi)
- [ ] Setup tracking événements CRO dans analytics
- [ ] Structure composants CRO de base

### Étape 2.2 : User Stories P1 (Priorité Critique)

#### US-004-P1-001 : Production et intégration contenus textuels
- [ ] Intégration tous textes validés dans pages existantes
- [ ] Optimisation SEO par page (title, description, keywords)
- [ ] Alt-text pour toutes images
- [ ] Relecture et correction orthographique/grammaticale
- [ ] Validation formatage cohérent (typographie, espacements)

#### US-004-P1-002 : Intégration contenus visuels
- [ ] Optimisation images (WebP, compression, lazy loading)
- [ ] Intégration illustrations fonctionnalités
- [ ] Ajout icônes et pictogrammes manquants
- [ ] Intégration captures écran plateforme
- [ ] Alt-text descriptifs pour toutes images

#### US-004-P1-003 : Optimisation SEO on-page complète
- [ ] Configuration SEO page d'accueil (mots-clés principaux)
- [ ] Configuration SEO pages métiers (Agence, Syndic, Promoteur)
- [ ] Title 60 caractères max par page
- [ ] Meta description 155 caractères max par page
- [ ] Structure Hn cohérente (H1 unique, hiérarchie H2/H3)
- [ ] Maillage interne optimisé (liens contextuels)
- [ ] URLs propres et parlantes

#### US-004-P1-004 : SEO technique et performance
- [ ] Validation temps chargement < 3s (Lighthouse audit)
- [ ] Core Web Vitals optimisés (LCP, FID, CLS)
- [ ] Sitemap.xml mis à jour avec toutes routes
- [ ] Robots.txt vérifié et optimisé
- [ ] Structured data implémentée (Organization, WebSite, extension)

### Étape 2.3 : User Stories P2 (Priorité Haute)

#### US-004-P2-001 : Production contenu éditorial (Blog)
- [ ] Création pages blog (liste + article individuel)
- [ ] Système markdown pour articles
- [ ] Intégration 10 articles de blog piliers
- [ ] Optimisation SEO articles (meta, structured data Article)
- [ ] Composants ArticleCard, ArticleList, ArticleContent
- [ ] Pagination liste articles
- [ ] Images articles optimisées
- [ ] CTA intégrés dans articles

#### US-004-P2-002 : Guides pratiques téléchargeables
- [ ] Création pages guides (liste + téléchargement)
- [ ] Formulaire capture email pour téléchargement
- [ ] Page remerciement après téléchargement
- [ ] Intégration 3 guides PDF minimum
- [ ] Composants GuideCard, GuideDownloadForm
- [ ] Tracking téléchargements dans analytics

#### US-004-P2-003 : FAQ complète par persona
- [ ] Création page FAQ organisée par persona
- [ ] Intégration FAQ data (minimum 10 Q/R par persona)
- [ ] Composants FAQSection, FAQItem avec accordéon
- [ ] Structured data FAQPage Schema
- [ ] Recherche FAQ (optionnel - filtrage client-side)

#### US-004-P2-004 : Optimisations CRO
- [ ] Ajout preuves sociales (témoignages, logos clients)
- [ ] Badges de confiance intégrés
- [ ] Optimisation CTA (texte, couleur, position)
- [ ] Exit-intent popup avec offre guide (optionnel)

### Étape 2.4 : User Stories P3 (Priorité Moyenne - Si temps)

#### US-004-P3-001 : Vidéos présentation et démonstration
- [ ] Hébergement vidéos (YouTube/Vimeo ou CDN)
- [ ] Intégration vidéo présentation (2min) dans Hero ou page dédiée
- [ ] Vidéos démonstration par module (optionnel)
- [ ] Témoignages clients vidéo (optionnel)
- [ ] Optimisation chargement (lazy loading, placeholder)

#### US-004-P3-002 : Configuration tests A/B
- [ ] Setup outil test A/B (Google Optimize, VWO, etc.)
- [ ] Création 2 versions Hero section
- [ ] Variations CTA configurées
- [ ] Test longueur formulaire de démo
- [ ] Tracking résultats tests A/B

### Étape 2.5 : Polish et optimisation

#### Performance
- [ ] Audit Lighthouse complet
- [ ] Optimisation images (WebP, lazy loading, responsive)
- [ ] Code splitting et lazy loading composants
- [ ] Minification et optimisation bundle
- [ ] Cache stratégie (Next.js ISR pour blog/articles)

#### SEO final
- [ ] Validation structured data (Google Rich Results Test)
- [ ] Soumission sitemap Google Search Console
- [ ] Audit SEO technique complet (Screaming Frog ou similaire)
- [ ] Vérification maillage interne

#### CRO final
- [ ] Tests de conversion formulaires
- [ ] Analyse points de sortie
- [ ] Optimisation parcours utilisateur

#### Documentation
- [ ] Documentation structure contenu
- [ ] Guide ajout nouveaux articles/blog
- [ ] Documentation SEO (mots-clés, processus)
- [ ] Documentation CRO (tests, optimisations)

---

## 🧪 Tests

### Tests SEO
- [ ] Validation meta tags toutes pages (title, description, canonical)
- [ ] Validation structured data (Article, FAQPage, BreadcrumbList)
- [ ] Validation sitemap.xml (toutes routes, format correct)
- [ ] Validation robots.txt (règles correctes)
- [ ] Test Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Audit SEO technique (Screaming Frog ou similaire)
- [ ] Validation Google Rich Results Test

### Tests fonctionnels

#### Blog
- [ ] Test affichage liste articles
- [ ] Test navigation article individuel
- [ ] Test rendu markdown (formatage, images, liens)
- [ ] Test pagination
- [ ] Test SEO articles (meta, structured data)

#### Guides
- [ ] Test affichage liste guides
- [ ] Test formulaire téléchargement (validation, submit)
- [ ] Test téléchargement PDF
- [ ] Test page remerciement
- [ ] Test tracking téléchargements

#### FAQ
- [ ] Test affichage FAQ par persona
- [ ] Test accordéon questions/réponses
- [ ] Test recherche FAQ (si implémentée)
- [ ] Test structured data FAQPage

### Tests CRO
- [ ] Test conversion formulaires (contact, téléchargement)
- [ ] Test affichage preuves sociales
- [ ] Test badges de confiance
- [ ] Test exit-intent popup (si implémenté)
- [ ] Test variations A/B (si configuré)

### Tests E2E
- [ ] Parcours complet : Accueil → Blog → Article → CTA
- [ ] Parcours téléchargement guide : Liste → Formulaire → Téléchargement
- [ ] Parcours FAQ : Navigation → Recherche → Réponse
- [ ] Parcours conversion : Découverte → Fonctionnalités → Contact

### Tests performance
- [ ] Temps chargement pages < 3s
- [ ] Lighthouse score > 90 (Performance, SEO, Accessibility)
- [ ] Images optimisées (WebP, lazy loading)
- [ ] Bundle size acceptable

### Couverture cible
- Tests SEO : 100% des pages validées
- Tests fonctionnels : Scénarios critiques testés
- Tests performance : Toutes pages validées Core Web Vitals

---

## 📦 Déploiement

### Prérequis
- [ ] Tous contenus finaux intégrés et validés
- [ ] Images optimisées et hébergées
- [ ] Guides PDF générés et disponibles
- [ ] Variables d'environnement configurées (GA, Search Console, etc.)
- [ ] Build production réussi sans erreurs

### Checklist de déploiement

#### Qualité code
- [ ] Tests passent (SEO, fonctionnels, E2E)
- [ ] Linting OK (ESLint, Prettier)
- [ ] Type checking OK (TypeScript strict)
- [ ] Build production réussi
- [ ] Pas de warnings build

#### SEO pré-déploiement
- [ ] Sitemap.xml généré et validé
- [ ] Robots.txt vérifié
- [ ] Structured data validée (Rich Results Test)
- [ ] Meta tags toutes pages vérifiés
- [ ] URLs propres et canoniques configurées

#### Performance pré-déploiement
- [ ] Lighthouse audit > 90 (Performance, SEO, Accessibility)
- [ ] Core Web Vitals validés
- [ ] Images optimisées (WebP, compression)
- [ ] Bundle size optimisé

#### Contenu pré-déploiement
- [ ] Tous textes relus et corrigés
- [ ] Toutes images avec alt-text
- [ ] Tous liens internes/externes fonctionnels
- [ ] Formulaires testés (contact, téléchargement)

### Post-déploiement

#### Validation production
- [ ] Site accessible en production
- [ ] Toutes pages chargent correctement
- [ ] Formulaires fonctionnent en production
- [ ] Analytics tracking actif (GA4)
- [ ] Sitemap soumis Google Search Console
- [ ] Robots.txt accessible et correct

#### Monitoring
- [ ] Google Search Console configuré et actif
- [ ] Google Analytics événements trackés
- [ ] Monitoring erreurs (Sentry ou similaire)
- [ ] Alertes performance configurées

#### Optimisations post-lancement
- [ ] Analyse comportement utilisateurs (Heatmaps si outil disponible)
- [ ] Ajustements CRO basés sur données réelles
- [ ] Ajustements SEO basés sur performances recherche
- [ ] Planification contenu éditorial régulier

---

## 📝 Notes d'implémentation

### Priorités d'implémentation
1. **P1 obligatoire** : Contenus finaux + SEO on-page/technique (base solide)
2. **P2 haute priorité** : Blog + Guides + FAQ (contenu éditorial essentiel)
3. **P3 optionnel** : Vidéos + Tests A/B (améliorations continues)

### Approche itérative recommandée
- Sprint 1 : P1 complet (contenus + SEO base)
- Sprint 2 : P2 Blog + Guides
- Sprint 3 : P2 FAQ + CRO optimisations
- Sprint 4 : P3 (si temps/budget disponible)

### Dépendances externes
- Contenus validés par client (textes, images)
- Production guides PDF (si externalisée)
- Production vidéos (si optionnel, si externalisée)
- Clés API/services (Google Analytics, Search Console, outil A/B si utilisé)

### Outils recommandés
- **SEO** : Google Search Console, Google Rich Results Test, Lighthouse
- **CRO** : Google Optimize (gratuit, arrêt prévu), VWO, ou Optimizely
- **Analytics** : Google Analytics 4 (déjà intégré)
- **Content** : Markdown/MDX pour articles, fichiers statiques ou CMS headless simple

### Questions à valider avec client
- Budget/priorité pour vidéos (optionnel)
- Choix outil test A/B (budget, complexité)
- Besoin chat en ligne immédiat ou phase ultérieure
- Traduction multilingue (anglais) : maintenant ou phase ultérieure
- Fréquence publication nouveaux articles blog post-lancement

---

## 🔗 Références

- [Lien vers spec.md](./spec.md)
- [Lien vers constitution](../../.specify/memory/constitution.md)

