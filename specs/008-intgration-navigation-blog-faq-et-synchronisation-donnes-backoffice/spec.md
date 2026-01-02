# Spécification : Intégration navigation Blog FAQ et synchronisation données backoffice

**Numéro de fonctionnalité** : 008  
**Branche Git** : 008-intgration-navigation-blog-faq-et-synchronisation-donnes-backoffice  
**Date de création** : 2026-01-02  
**Statut** : 📝 Draft

---

## 📋 Vue d'ensemble

### Description

Correction de deux problèmes majeurs identifiés :
1. Absence de liens visibles dans le site public (header/footer/navigation) vers Blog et FAQ
2. Les contenus créés dans le backoffice (Blog, FAQ, etc.) ne sont pas (ou pas toujours) affichés sur le site public

Cette fonctionnalité vise à :
- Rendre Blog et FAQ accessibles depuis le site public (navigation + footer)
- Faire en sorte que le site public consomme la même source de données que le backoffice (single source of truth)
- Respecter les best practices SEO : liens crawlables, pages indexables, sitemap à jour

### Objectifs

- **Accessibilité** : Blog et FAQ accessibles en 1 clic depuis la navigation principale et le footer
- **Cohérence des données** : Le site public affiche uniquement les contenus "Publiés" créés dans le backoffice
- **SEO optimisé** : Sitemap à jour, métadonnées correctes, structured data (JSON-LD)
- **Performance** : Cache approprié avec revalidation Next.js
- **Robustesse** : Fallback si l'API est indisponible (pas de crash du site public)

### Contexte

- **Backoffice existant** : `/admin` est déjà en place et fonctionne (cf. `docs/BACKOFFICE.md`)
- **Routes publiques** : Blog et FAQ existent côté public (`/blog` ou `/ressources/blog`, `/ressources/faq`) selon `WEBSITE_DESCRIPTION.md`
- **Règle métier** : Contenu "Publié" dans `/admin` = visible publiquement
- **Architecture** : Monorepo Next.js 15 + Fastify API + PostgreSQL + Prisma

---

## 👥 User Stories

### P1 - Priorité Critique (Must Have)

**US-008-P1-001** : Navigation accessible - Liens Blog et FAQ dans le header
- **En tant que** visiteur du site ImmoTopia
- **Je veux** voir les liens Blog et FAQ dans la navigation principale (header)
- **Afin de** accéder rapidement au contenu éducatif et aux réponses aux questions fréquentes

**Scénarios** :
- **Given** je suis sur n'importe quelle page du site public
- **When** je regarde le header (desktop ou mobile)
- **Then** je vois les liens "Blog" et "FAQ" (ou un menu "Ressources" avec sous-menu)

**Critères d'acceptation** :
- [ ] Les liens Blog et FAQ sont visibles dans le header desktop
- [ ] Les liens Blog et FAQ sont visibles dans le menu mobile (hamburger)
- [ ] Les liens sont des composants `<Link href="...">` crawlables (pas uniquement onclick)
- [ ] Les liens pointent vers `/blog` et `/ressources/faq` (ou routes standardisées)

---

**US-008-P1-002** : Navigation accessible - Liens Blog et FAQ dans le footer
- **En tant que** visiteur du site ImmoTopia
- **Je veux** voir les liens Blog et FAQ dans le footer
- **Afin de** accéder au contenu depuis n'importe quelle page du site

**Scénarios** :
- **Given** je suis sur n'importe quelle page du site public
- **When** je scroll en bas de page jusqu'au footer
- **Then** je vois une section "Ressources" avec Blog et FAQ

**Critères d'acceptation** :
- [ ] Le footer contient une section "Ressources" avec Blog et FAQ
- [ ] Les liens sont présents sur toutes les pages (layout global)
- [ ] Les liens sont des composants `<Link>` crawlables

---

**US-008-P1-003** : Affichage Blog public - Liste des articles publiés
- **En tant que** visiteur du site ImmoTopia
- **Je veux** voir tous les articles de blog publiés dans le backoffice
- **Afin de** consulter le contenu éducatif créé par l'équipe

**Scénarios** :
- **Given** un article de blog a le statut "Publié" dans le backoffice
- **When** je visite la page `/blog`
- **Then** je vois l'article dans la liste

**Critères d'acceptation** :
- [ ] La page `/blog` charge les articles depuis l'API du backoffice
- [ ] Seuls les articles avec `status = "Publié"` sont affichés
- [ ] Les articles supprimés (soft delete) ne sont pas affichés
- [ ] Les articles programmés ne sont visibles qu'après `publication_at <= now`
- [ ] Si l'API est indisponible, un message discret s'affiche (pas de crash)

---

**US-008-P1-004** : Affichage Blog public - Détail d'un article
- **En tant que** visiteur du site ImmoTopia
- **Je veux** consulter un article de blog en détail
- **Afin de** lire le contenu complet de l'article

**Scénarios** :
- **Given** un article est publié avec le slug "mon-article"
- **When** je visite `/blog/mon-article`
- **Then** je vois l'article complet avec son contenu Markdown rendu

**Critères d'acceptation** :
- [ ] La page `/blog/[slug]` récupère l'article par slug via l'API
- [ ] Si l'article est brouillon/non publié, la page renvoie `notFound()`
- [ ] Les métadonnées SEO (title, description, OG) sont prises depuis les champs SEO du backoffice
- [ ] Le contenu Markdown est correctement rendu en HTML

---

**US-008-P1-005** : Affichage FAQ public - Liste des questions publiées
- **En tant que** visiteur du site ImmoTopia
- **Je veux** voir toutes les questions FAQ publiées dans le backoffice
- **Afin de** trouver rapidement des réponses à mes questions

**Scénarios** :
- **Given** une question FAQ a le statut "Publié" dans le backoffice
- **When** je visite la page `/ressources/faq`
- **Then** je vois la question dans la liste

**Critères d'acceptation** :
- [ ] La page `/ressources/faq` charge les questions depuis l'API du backoffice
- [ ] Seules les questions avec `status = "Publié"` sont affichées
- [ ] Les questions sont triées par le champ "ordre" ascendant
- [ ] La recherche et catégorisation fonctionnent si déjà présentes

---

### P2 - Priorité Haute (Should Have)

**US-008-P2-001** : Menu Header dynamique depuis le backoffice
- **En tant que** administrateur
- **Je veux** que le menu Header soit chargé depuis la base de données
- **Afin de** modifier la navigation sans déployer du code

**Scénarios** :
- **Given** un menu "Header" existe dans le backoffice avec des items Blog et FAQ
- **When** le site public charge le header
- **Then** les items du menu sont chargés depuis l'API/DB

**Critères d'acceptation** :
- [ ] Vérifier si un menu "Header" existe en base
- [ ] Si oui, charger les items du menu dans le composant Header
- [ ] Si non, utiliser un fallback statique avec Blog et FAQ
- [ ] S'assurer que Blog/FAQ sont présents dans le menu (ajout automatique si manquants)

---

**US-008-P2-002** : Cache et performance optimisés
- **En tant que** visiteur du site ImmoTopia
- **Je veux** que les pages Blog et FAQ se chargent rapidement
- **Afin de** avoir une expérience fluide

**Scénarios** :
- **Given** je visite `/blog` ou `/ressources/faq`
- **When** les données sont chargées depuis l'API
- **Then** les données sont mises en cache avec revalidation appropriée

**Critères d'acceptation** :
- [ ] Utiliser `fetch` avec `revalidate` (ex: 60s ou 300s) pour le cache Next.js
- [ ] Les pages se chargent rapidement même avec beaucoup de contenu
- [ ] Le cache est invalidé après la revalidation pour afficher le contenu à jour

---

**US-008-P2-003** : Sitemap à jour avec routes Blog/FAQ
- **En tant que** moteur de recherche (Google, Bing, etc.)
- **Je veux** que le sitemap inclue toutes les pages Blog et FAQ publiées
- **Afin de** indexer correctement le contenu

**Scénarios** :
- **Given** des articles de blog sont publiés dans le backoffice
- **When** un crawler consulte `/sitemap.xml`
- **Then** toutes les routes `/blog/[slug]` publiées sont présentes

**Critères d'acceptation** :
- [ ] Le sitemap inclut `/blog`
- [ ] Le sitemap inclut chaque `/blog/[slug]` pour les articles publiés
- [ ] Le sitemap inclut `/ressources/faq`
- [ ] Les pages brouillons/non publiées ne sont pas dans le sitemap

---

**US-008-P2-004** : Structured Data JSON-LD pour SEO
- **En tant que** moteur de recherche
- **Je veux** recevoir des données structurées JSON-LD
- **Afin de** afficher des rich snippets dans les résultats de recherche

**Scénarios** :
- **Given** je visite `/blog/[slug]` pour un article publié
- **When** le moteur de recherche parse la page
- **Then** il trouve un JSON-LD de type `Article` avec toutes les métadonnées

**Critères d'acceptation** :
- [ ] Les pages `/blog/[slug]` incluent JSON-LD `Article` (title, description, author, datePublished, etc.)
- [ ] La page `/ressources/faq` inclut JSON-LD `FAQPage` avec toutes les questions publiées
- [ ] Les métadonnées sont prises depuis les champs SEO du backoffice

---

### P3 - Priorité Moyenne (Nice to Have)

**US-008-P3-001** : Logs de debug pour développement
- **En tant que** développeur
- **Je veux** voir des logs lorsque le chargement Blog/FAQ échoue
- **Afin de** diagnostiquer rapidement les problèmes

**Critères d'acceptation** :
- [ ] Logs server-side minimal uniquement en environnement dev
- [ ] Logs incluent l'erreur et la route concernée
- [ ] Pas de logs en production pour éviter la verbosité

---

**US-008-P3-002** : Vérification et standardisation des routes
- **En tant que** administrateur SEO
- **Je veux** que les routes soient cohérentes et standardisées
- **Afin de** éviter la duplication de contenu

**Critères d'acceptation** :
- [ ] Vérifier la cohérence des slugs (unique, lower-case, tirets)
- [ ] Si `/blog` existe déjà, l'utiliser (recommandé)
- [ ] Si `/ressources/blog` existe, rediriger vers `/blog` (301 redirect)
- [ ] Standardiser sur une seule route pour éviter la duplication

---

## 📐 Exigences techniques

### Contraintes

- **Compatibilité** : Ne pas casser l'existant (backoffice fonctionne déjà)
- **Performance** : Cache approprié pour éviter les requêtes API à chaque chargement
- **Robustesse** : Le site public ne doit pas crasher si l'API est indisponible
- **SEO** : Respecter les best practices (canonical, OG, structured data)
- **Design** : Aucun changement de design non demandé (garder le design existant)

### Dépendances

- **API Backend** : Routes API existantes pour Blog et FAQ (à vérifier/implémenter si manquantes)
- **Base de données** : Schéma Prisma avec modèles BlogPost et FAQItem
- **Composants existants** : Header, Footer, Navigation (à modifier)
- **Routes Next.js** : Pages `/blog` et `/ressources/faq` (à adapter)

### Intégrations

- **API Backend (Fastify)** : 
  - GET `/api/blog/posts` : Liste des articles publiés (avec filtres status, deleted, publication_at)
  - GET `/api/blog/posts/[slug]` : Détail d'un article par slug
  - GET `/api/faq/questions` : Liste des questions publiées (avec tri par ordre)
- **Next.js App Router** :
  - Server Components pour le rendu côté serveur
  - `fetch` avec options de cache pour la performance
- **Prisma** : Queries avec filtres appropriés (status, deleted_at, publication_at)

---

## ✅ Critères de succès

### Fonctionnels

- [ ] Tous les scénarios P1 sont implémentés et testés
- [ ] Les scénarios P2 sont implémentés (si temps disponible)
- [ ] Les tests d'acceptation passent :
  - Créer 1 article "Publié" dans le backoffice, vérifier qu'il apparaît sur `/blog` et que `/blog/[slug]` marche
  - Créer 1 question FAQ "Publié" dans le backoffice, vérifier qu'elle apparaît sur `/ressources/faq`
  - Vérifier que les brouillons ne sont jamais visibles publiquement
  - Vérifier que les programmés ne sont visibles qu'après la date

### Non-fonctionnels

- [ ] **Performance** : Pages Blog/FAQ chargent en < 2 secondes (grâce au cache)
- [ ] **Sécurité** : Les contenus brouillons ne sont jamais exposés publiquement (même avec manipulation d'URL)
- [ ] **Accessibilité** : Les liens sont accessibles au clavier et aux lecteurs d'écran
- [ ] **Compatibilité** : Fonctionne sur desktop, tablet, mobile
- [ ] **SEO** : 
  - Sitemap inclut toutes les routes publiées
  - Métadonnées correctes (title, description, OG)
  - Structured Data JSON-LD présent
- [ ] **Robustesse** : Site public ne crash pas si l'API est down (fallback discret)

---

## 🧪 Tests

### Tests unitaires

- [ ] Tests pour la fonction de filtrage des articles (status, deleted, publication_at)
- [ ] Tests pour la fonction de tri des questions FAQ (ordre ascendant)
- [ ] Tests pour la génération de slugs cohérents

### Tests d'intégration

- [ ] Test d'intégration : Créer un article publié → Vérifier qu'il apparaît sur `/blog`
- [ ] Test d'intégration : Créer une FAQ publiée → Vérifier qu'elle apparaît sur `/ressources/faq`
- [ ] Test d'intégration : Brouillon créé → Vérifier qu'il n'apparaît PAS publiquement
- [ ] Test d'intégration : Article programmé → Vérifier qu'il n'apparaît qu'après la date

### Tests end-to-end

- [ ] E2E test : Navigation Header → Clic sur Blog → Vérifier redirection vers `/blog`
- [ ] E2E test : Navigation Header → Clic sur FAQ → Vérifier redirection vers `/ressources/faq`
- [ ] E2E test : Footer → Clic sur Blog → Vérifier redirection
- [ ] E2E test : `/blog/[slug]` → Vérifier affichage complet de l'article

---

## 📝 Notes

### Architecture actuelle à vérifier

1. **Routes API existantes** : Vérifier si les routes `/api/blog/posts` et `/api/faq/questions` existent dans `apps/api/`
2. **Pages publiques existantes** : Vérifier les pages `/blog` et `/ressources/faq` dans `apps/web/src/app/`
3. **Composants Header/Footer** : Localiser les composants dans `apps/web/src/components/layout/`
4. **Schéma Prisma** : Vérifier les modèles BlogPost et FAQItem dans `apps/api/prisma/schema.prisma`

### Décisions techniques à prendre

- **Route Blog** : Standardiser sur `/blog` ou garder `/ressources/blog` ? (recommandé : `/blog`)
- **Menu dynamique** : Implémenter le chargement dynamique du menu depuis la DB ou garder statique avec ajout Blog/FAQ ?
- **Cache revalidation** : Quelle durée ? (60s, 300s, ou configurable ?)

### Migration de contenu

- Si le site public utilise encore des fichiers MDX/TS (contenu local) :
  - Migrer l'affichage pour utiliser l'API/DB du backoffice
  - Au minimum pour Blog + FAQ
  - Garder les fichiers locaux comme fallback si nécessaire

### SEO - Détails

- **Canonical URLs** : Ajouter `<link rel="canonical">` sur chaque page
- **Open Graph** : Meta tags OG depuis les champs SEO du backoffice
- **Twitter Cards** : Optionnel mais recommandé
- **Breadcrumbs** : Ajouter structured data BreadcrumbList si applicable

---

## 🔗 Références

- **Backoffice** : `docs/BACKOFFICE.md` - Description complète du backoffice (Blog + FAQ + Menus + SEO settings)
- **Architecture site** : `WEBSITE_DESCRIPTION.md` - Description de l'architecture du site (Blog et FAQ existent côté public)
- **Routes API** : `apps/api/src/` - Routes Fastify à vérifier/implémenter
- **Pages Next.js** : `apps/web/src/app/` - Pages publiques à adapter
- **Composants** : `apps/web/src/components/` - Header, Footer, Navigation à modifier
- **Schéma DB** : `apps/api/prisma/schema.prisma` - Modèles BlogPost et FAQItem

---

## 🎯 Plan d'implémentation suggéré

### Phase 1 : Navigation (P1)
1. Ajouter liens Blog/FAQ dans le Header (desktop + mobile)
2. Ajouter section "Ressources" dans le Footer avec Blog/FAQ
3. Tester la navigation sur toutes les pages

### Phase 2 : Intégration API Blog (P1)
1. Vérifier/Implémenter route API GET `/api/blog/posts` (publiés uniquement)
2. Vérifier/Implémenter route API GET `/api/blog/posts/[slug]`
3. Adapter page `/blog` pour charger depuis l'API
4. Adapter page `/blog/[slug]` pour charger depuis l'API
5. Gérer `notFound()` pour brouillons/non publiés
6. Tester avec articles créés dans le backoffice

### Phase 3 : Intégration API FAQ (P1)
1. Vérifier/Implémenter route API GET `/api/faq/questions` (publiés uniquement, tri par ordre)
2. Adapter page `/ressources/faq` pour charger depuis l'API
3. Tester avec questions créées dans le backoffice

### Phase 4 : Cache et Performance (P2)
1. Ajouter `revalidate` approprié sur les fetch API
2. Tester les performances
3. Ajouter fallback si API indisponible

### Phase 5 : SEO (P2)
1. Mettre à jour `sitemap.ts` pour inclure routes Blog/FAQ publiées
2. Ajouter métadonnées SEO (title, description, OG) depuis champs backoffice
3. Ajouter JSON-LD (Article pour blog, FAQPage pour FAQ)
4. Vérifier avec outils SEO (Google Search Console, Rich Results Test)

### Phase 6 : Menu dynamique (P2, optionnel)
1. Vérifier si menu "Header" existe en base
2. Charger menu depuis API dans composant Header
3. Fallback statique si menu non trouvé

### Phase 7 : Tests et validation
1. Tests unitaires et d'intégration
2. Tests E2E
3. Validation manuelle avec backoffice
4. Vérification SEO (sitemap, structured data)

---

**Dernière mise à jour** : 2026-01-02
