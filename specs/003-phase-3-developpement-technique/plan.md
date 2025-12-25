# Plan d'implémentation : 003-phase-3-developpement-technique

**Date de création** : 2025-12-23  
**Statut** : 📋 Planning

---

## 🎯 Contexte technique

### Stack technique
- **Langage** : TypeScript 5.x
- **Frontend** : Next.js 14+ (App Router) - actuellement Next.js 15 dans le projet
- **Styling** : Tailwind CSS + shadcn/ui (à migrer depuis Ant Design actuel)
- **Animations** : Framer Motion
- **Forms** : React Hook Form + Zod (déjà installés)
- **SEO** : Next.js SEO + structured data (Schema.org)
- **Validation** : Zod (déjà installé)
- **Monorepo** : pnpm workspaces

### Dépendances existantes
- `packages/ui` : Composants UI réutilisables (Button, FormField, Card, Input, Select, Textarea, ScrollReveal, Tabs)
- `packages/contracts` : Contrats TypeScript + Zod (déjà présent : demo-request)
- `packages/utils` : Utilitaires partagés
- Next.js 15 configuré dans `apps/web`
- React Hook Form + Zod pour les formulaires
- Ant Design actuellement utilisé (à migrer vers Tailwind CSS + shadcn/ui)

### Contraintes techniques
- **Performance** : Lighthouse Score > 90 (Performance, Accessibility, Best Practices, SEO)
- **SEO** : Optimisation technique complète (meta tags, structured data, sitemap, robots.txt)
- **Responsive** : Mobile-first, support tablette et desktop
- **Accessibilité** : Conformité WCAG 2.1 niveau AA minimum
- **Compatibilité navigateurs** : Chrome, Firefox, Safari, Edge (2 dernières versions)
- **Hébergement** : Vercel / Netlify (ou VPS partagé avec attention aux autres applications)
- **Intégrations** : CRM (HubSpot/Pipedrive), Analytics (GA4, Hotjar), Pixels (Facebook, LinkedIn si nécessaire)

### Décisions techniques à valider
- Choix du Headless CMS (Strapi vs Contentful vs Sanity) - ou contenu statique ?
- Choix du CRM (HubSpot vs Pipedrive)
- Stratégie de déploiement (Vercel vs Netlify vs VPS)
- Configuration CDN (Cloudflare)

---

## ✅ Vérification de conformité constitution

### Principes fondamentaux
- [ ] **TDD** : Tests écrits avant l'implémentation (si applicable pour composants)
- [ ] **Library-First** : Code réutilisable dans packages/ui
- [ ] **Type Safety** : TypeScript strict activé
- [ ] **Code Quality** : Linting et formatting automatiques

### Standards de code
- [ ] Conventions de nommage respectées (PascalCase pour composants, camelCase pour fonctions)
- [ ] Structure de dossiers conforme (Next.js App Router)
- [ ] Documentation inline présente pour composants complexes

### Architecture
- [ ] Séparation claire Web / Packages
- [ ] Pas de dépendances circulaires
- [ ] Contracts définis dans @monorepo/contracts
- [ ] Composants UI réutilisables dans @monorepo/ui

---

## 📁 Structure du projet

### Nouveaux fichiers à créer / Modifications

**Migration vers Tailwind CSS + shadcn/ui**
```
apps/web/
  ├── tailwind.config.js (nouveau)
  ├── postcss.config.js (nouveau)
  ├── components.json (nouveau, config shadcn/ui)
  └── src/
      ├── app/
      │   ├── globals.css (modifier pour Tailwind)
      │   └── layout.tsx (modifier pour supprimer Ant Design)
      └── components/
          └── ui/ (nouveau, composants shadcn/ui)
              ├── button.tsx
              ├── card.tsx
              ├── input.tsx
              ├── select.tsx
              └── ...
```

**Intégrations**
```
apps/web/src/
  ├── lib/
  │   ├── analytics.ts (nouveau, GA4 + Hotjar)
  │   ├── crm.ts (nouveau, intégration CRM)
  │   └── seo.ts (existant, à enrichir)
  └── app/
      └── api/
          └── demo-request/
              └── route.ts (modifier pour intégration CRM)
```

**SEO et Metadata**
```
apps/web/src/
  ├── app/
  │   ├── sitemap.ts (existant, à vérifier)
  │   ├── robots.txt (public/robots.txt)
  │   └── [chaque-page]/
  │       └── metadata.ts ou metadata export
```

**Animations**
```
apps/web/src/
  └── components/
      └── animations/ (nouveau)
          ├── ScrollReveal.tsx
          └── PageTransition.tsx
```

### Fichiers à modifier
- [ ] `apps/web/package.json` - Ajouter Tailwind CSS, shadcn/ui, Framer Motion
- [ ] `apps/web/src/app/globals.css` - Remplacer par Tailwind CSS
- [ ] `apps/web/src/app/layout.tsx` - Supprimer Ant Design, ajouter providers
- [ ] `apps/web/src/components/forms/DemoRequestForm.tsx` - Adapter à shadcn/ui
- [ ] `apps/web/src/components/layout/Header.tsx` - Adapter à Tailwind CSS
- [ ] `apps/web/src/components/layout/Footer.tsx` - Adapter à Tailwind CSS
- [ ] `apps/web/src/components/sections/*` - Migrer vers Tailwind CSS
- [ ] `packages/ui/src/components/*` - Migrer vers Tailwind CSS + shadcn/ui ou créer nouveaux composants

---

## 🔬 Phase 0 : Recherche et analyse

### Recherche nécessaire
- [ ] Documentation Tailwind CSS + shadcn/ui (installation et configuration)
- [ ] Migration stratégie : Ant Design → Tailwind CSS + shadcn/ui
- [ ] Documentation Framer Motion pour animations scroll
- [ ] Documentation Google Analytics 4 (événements personnalisés)
- [ ] Documentation Hotjar (intégration Next.js)
- [ ] Documentation CRM APIs (HubSpot/Pipedrive webhooks)
- [ ] Documentation Next.js 14+ SEO (metadata, structured data)
- [ ] Best practices performance Next.js (Image optimization, lazy loading)

### Décisions à prendre
- [ ] **CMS** : Contenu statique ou Headless CMS ? (Strapi/Contentful/Sanity)
- [ ] **CRM** : HubSpot ou Pipedrive pour intégration formulaires ?
- [ ] **Hébergement** : Vercel/Netlify ou VPS partagé (attention autres apps) ?
- [ ] **CDN** : Cloudflare nécessaire ou inclus dans hosting ?
- [ ] **Stratégie migration** : Migration progressive ou complète Ant Design → Tailwind ?

### Livrables
- [ ] `research.md` - Synthèse de la recherche technique
- [ ] Décision CMS validée
- [ ] Décision CRM validée
- [ ] Plan de migration Ant Design → Tailwind CSS

---

## 🎨 Phase 1 : Design et architecture (Déjà fait - Phase 2)

> **Note** : Le design est déjà validé dans la Phase 2. Cette section sert de référence.

### Design de l'interface
- ✅ Wireframes / Mockups validés (Phase 2)
- ✅ Composants UI nécessaires identifiés
- ✅ États et interactions définis
- ✅ Design system défini

### Adaptation technique
- [ ] Mapping composants Ant Design → shadcn/ui
- [ ] Vérification tokens design system → Tailwind config
- [ ] Plan d'implémentation des animations

---

## 🛠️ Phase 2 : Implémentation (4 Sprints)

### Sprint 1 : Fondations

**Objectif** : Setup projet + environnements, configuration Next.js + Tailwind, composants UI de base, navigation et layout

**Tâches** :
- [ ] **US-003-P1-001** : Setup projet et configuration de base
  - [ ] Installer et configurer Tailwind CSS
  - [ ] Installer et configurer shadcn/ui
  - [ ] Créer `tailwind.config.js` avec design tokens
  - [ ] Créer `components.json` pour shadcn/ui
  - [ ] Configurer PostCSS
  - [ ] Mettre à jour `globals.css` avec Tailwind
  - [ ] Configurer environnements (dev, staging, prod)

- [ ] **US-003-P1-002** : Composants UI de base
  - [ ] Créer/migrer composants Button (shadcn/ui)
  - [ ] Créer/migrer composants Card (shadcn/ui)
  - [ ] Créer/migrer composants Input (shadcn/ui)
  - [ ] Créer/migrer composants Select (shadcn/ui)
  - [ ] Créer/migrer composants Textarea (shadcn/ui)
  - [ ] Vérifier accessibilité (WCAG 2.1 AA)
  - [ ] Tests responsive

- [ ] **US-003-P1-003** : Navigation et layout de base
  - [ ] Migrer Header vers Tailwind CSS
  - [ ] Migrer Footer vers Tailwind CSS
  - [ ] Implémenter navigation responsive (menu mobile)
  - [ ] Implémenter active state navigation
  - [ ] Tests navigation

**Livrables** :
- ✅ Projet initialisé avec Tailwind CSS + shadcn/ui
- ✅ Design system implémenté (tokens CSS)
- ✅ Composants UI de base fonctionnels
- ✅ Navigation et layout opérationnels

**Durée estimée** : 3-5 jours

---

### Sprint 2 : Pages principales

**Objectif** : Page Accueil complète, Page La Solution, Page Fonctionnalités, Page Pour qui ? (1 persona)

**Tâches** :
- [ ] **US-003-P1-004** : Page d'accueil complète
  - [ ] Section Hero avec Tailwind CSS
  - [ ] Section fonctionnalités principales
  - [ ] Section témoignages/clients
  - [ ] Section CTA finale
  - [ ] Formulaire de démo (avec shadcn/ui)
  - [ ] Tests responsive

- [ ] Page La Solution
  - [ ] Page principale "La Solution"
  - [ ] Sous-page "Portail annonces"
  - [ ] Sous-page "SaaS de gestion"
  - [ ] Sous-page "Technologies"
  - [ ] CTAs stratégiques

- [ ] Page Fonctionnalités
  - [ ] Structure de la page
  - [ ] Liste des fonctionnalités
  - [ ] Organisation par catégories
  - [ ] Descriptions et visuels

- [ ] **US-003-P1-007** : Page Pour qui ? (1 persona minimum)
  - [ ] Page principale "Pour qui ?"
  - [ ] Au moins 1 page persona complète (ex: Agences immobilières)
  - [ ] Contenu personnalisé
  - [ ] CTAs adaptés

**Livrables** :
- ✅ 4 pages principales en ligne
- ✅ Responsive desktop/mobile
- ✅ Navigation fonctionnelle

**Durée estimée** : 5-7 jours

---

### Sprint 3 : Pages métiers

**Objectif** : Compléter toutes les pages personas, Page Tarifs, Page Pourquoi ImmoTopia, Section Ressources/Blog

**Tâches** :
- [ ] **US-003-P2-001** : Toutes les pages personas
  - [ ] Page Agences immobilières
  - [ ] Page Promoteurs
  - [ ] Page Syndics
  - [ ] Page Gestionnaires locatifs
  - [ ] Page Propriétaires bailleurs

- [ ] **US-003-P2-002** : Page Tarifs
  - [ ] Présentation des offres
  - [ ] Tableaux comparatifs
  - [ ] CTA vers demande de devis

- [ ] **US-003-P2-003** : Page Pourquoi ImmoTopia
  - [ ] Arguments différenciants
  - [ ] Comparaisons avec concurrence
  - [ ] Preuves sociales (témoignages, cas clients)

- [ ] **US-003-P2-004** : Section Ressources/Blog
  - [ ] Structure de blog/ressources
  - [ ] Articles de base
  - [ ] Catégorisation

- [ ] **US-003-P1-008** : Formulaires fonctionnels
  - [ ] Validation React Hook Form + Zod
  - [ ] Messages d'erreur clairs
  - [ ] Protection anti-spam (honeypot/reCAPTCHA)
  - [ ] Soumission vers API
  - [ ] Message de confirmation

**Livrables** :
- ✅ Site complet navigable
- ✅ Contenus intégrés
- ✅ Formulaires fonctionnels

**Durée estimée** : 5-7 jours

---

### Sprint 4 : Intégrations et Optimisations

**Objectif** : Intégrations CRM/Analytics, SEO technique, animations, optimisations performances, tests cross-browser

**Tâches** :
- [ ] **US-003-P2-005** : Intégration CRM
  - [ ] Configuration webhook CRM (HubSpot/Pipedrive)
  - [ ] Mapping des données formulaire → CRM
  - [ ] Notifications email
  - [ ] Gestion des erreurs
  - [ ] Tests d'intégration

- [ ] **US-003-P2-006** : Analytics et tracking
  - [ ] Configuration Google Analytics 4
  - [ ] Événements personnalisés (clic CTA, soumission formulaire, scroll depth)
  - [ ] Goals de conversion
  - [ ] Intégration Hotjar (heatmaps, enregistrements)
  - [ ] Tests tracking

- [ ] SEO technique
  - [ ] Balises meta optimisées par page
  - [ ] Schema.org (Organization, Service, FAQPage)
  - [ ] Sitemap XML dynamique (vérifier sitemap.ts existant)
  - [ ] Robots.txt configuré
  - [ ] OpenGraph et Twitter Cards
  - [ ] Canonical URLs
  - [ ] Validation SEO

- [ ] **US-003-P3-001** : Animations et micro-interactions
  - [ ] Installer Framer Motion
  - [ ] Animations au scroll
  - [ ] Transitions de page
  - [ ] Micro-interactions boutons/liens
  - [ ] Vérification performance (60fps)

- [ ] **US-003-P3-002** : Pixels publicitaires (si nécessaire)
  - [ ] Facebook Pixel (si pub Meta)
  - [ ] LinkedIn Insight Tag (si pub LinkedIn)
  - [ ] Événements de conversion mappés

- [ ] Optimisations performances
  - [ ] Optimisation images (Next.js Image)
  - [ ] Lazy loading composants
  - [ ] Code splitting
  - [ ] Minification CSS/JS
  - [ ] Tests Lighthouse (objectif > 90)

- [ ] Tests cross-browser
  - [ ] Chrome (desktop et mobile)
  - [ ] Firefox (desktop)
  - [ ] Safari (desktop et mobile)
  - [ ] Edge (desktop)
  - [ ] Corrections bugs

**Livrables** :
- ✅ Site optimisé (Lighthouse > 90)
- ✅ SEO opérationnel
- ✅ Analytics et tracking configurés
- ✅ Intégrations CRM fonctionnelles
- ✅ Tests validés

**Durée estimée** : 3-5 jours

---

## 🧪 Tests

### Tests unitaires
- [ ] Tests pour composants UI (Button, Card, Input, etc.)
- [ ] Tests pour utilitaires (validation, formatting)
- [ ] Tests pour composants de formulaire (validation Zod)

### Tests d'intégration
- [ ] Test intégration formulaires → API → CRM
- [ ] Test intégration analytics (événements déclenchés)
- [ ] Test intégration SEO (meta tags, structured data)

### Tests end-to-end
- [ ] E2E test flux complet : visite → formulaire → confirmation
- [ ] E2E test navigation complète
- [ ] E2E test responsive design

### Tests cross-browser
- [ ] Chrome (desktop et mobile)
- [ ] Firefox (desktop)
- [ ] Safari (desktop et mobile)
- [ ] Edge (desktop)

### Couverture cible
- Minimum 80% de couverture pour composants critiques
- Tous les scénarios P1 testés
- Tous les formulaires testés

---

## 📦 Déploiement

### Prérequis
- [ ] Variables d'environnement configurées (CRM keys, Analytics IDs, etc.)
- [ ] Build production réussi
- [ ] Tests passent
- [ ] Linting OK
- [ ] Type checking OK

### Checklist de déploiement
- [ ] **Performance** : Lighthouse Score > 90
- [ ] **SEO** : Sitemap validé, robots.txt présent, meta tags corrects
- [ ] **Analytics** : GA4 et Hotjar fonctionnels
- [ ] **Intégrations** : CRM webhook testé en production
- [ ] **Formulaires** : Tests de soumission réels
- [ ] **Responsive** : Tests sur devices réels
- [ ] **Accessibilité** : Audit WCAG 2.1 AA
- [ ] **Cross-browser** : Tests sur tous les navigateurs cibles

### Configuration hébergement
- [ ] Choix hosting validé (Vercel/Netlify/VPS)
- [ ] Variables d'environnement configurées
- [ ] Domain configuré (si nouveau)
- [ ] SSL/HTTPS activé
- [ ] CDN configuré (si nécessaire)

### Post-déploiement
- [ ] Monitoring Sentry configuré (si applicable)
- [ ] Vérification analytics en temps réel
- [ ] Tests de smoke post-déploiement
- [ ] Documentation mise à jour

---

## 📝 Notes d'implémentation

### Migration Ant Design → Tailwind CSS + shadcn/ui
- **Stratégie** : Migration progressive par composant/page
- **Ordre** : Composants UI de base → Layout → Pages
- **Rétrocompatibilité** : Maintenir fonctionnalités existantes pendant migration

### Points d'attention
- **VPS partagé** : Si déploiement sur VPS, attention aux autres applications (ports, nginx config)
- **Performance** : Surveiller bundle size avec Tailwind CSS
- **SEO** : Vérifier que toutes les pages ont metadata complète
- **Formulaires** : Validation côté client ET serveur

### Dépendances critiques
- Design system validé (Phase 2)
- Contenus rédigés et validés
- Identité visuelle disponible (logo, couleurs, typographies)

---

## 🔗 Références

- [Lien vers spec.md](./spec.md)
- [Phase 2 - Design & UX](../002-design-experience-utilisateur/spec.md)
- [Design System](../../design/design-system.md)
- [Maquettes](../../design/mockups/)
- Documentation Next.js : https://nextjs.org/docs
- Documentation Tailwind CSS : https://tailwindcss.com/docs
- Documentation shadcn/ui : https://ui.shadcn.com/
- Documentation Framer Motion : https://www.framer.com/motion/
- Documentation React Hook Form : https://react-hook-form.com/
- Documentation Zod : https://zod.dev/
- Documentation Google Analytics 4 : https://developers.google.com/analytics/devguides/collection/ga4
