# Spécification : Site Vitrine ImmoTopia - Orientation 100% Clients Professionnels

**Numéro de fonctionnalité** : 001  
**Branche Git** : 001-site-vitrine-immotopia-orientation-100-clients-professionnels  
**Date de création** : 2025-12-23  
**Statut** : 📝 Draft

---

## 📋 Vue d'ensemble

### Description

Développement d'un site vitrine professionnel pour ImmoTopia, plateforme SaaS de gestion immobilière. Le site est entièrement orienté vers les clients professionnels (agences immobilières, promoteurs, syndics, gestionnaires locatifs, propriétaires bailleurs). 

Le site doit présenter la solution ImmoTopia, ses fonctionnalités, et convertir les visiteurs en leads qualifiés via des demandes de démonstration.

### Objectifs

- **Objectif principal** : Atteindre un taux de conversion visite → lead ≥ 5%
- **Objectif secondaire** : Réduire le taux de rebond < 60%
- **Objectif engagement** : Augmenter le temps moyen sur le site > 2min
- **Objectif qualitatif** : Générer des demandes de démo qualifiées auprès des 5 personas cibles prioritaires

### Contexte

ImmoTopia est une plateforme SaaS complète de gestion immobilière incluant :
- SaaS de gestion des biens et CRM immobilier
- Portail d'annonces intégré
- Gestion locative et syndic de copropriété
- Promotion immobilière
- Paiements Mobile Money
- Automatisation IA

Le site vitrine doit cibler exclusivement les professionnels de l'immobilier, excluant toute cible investisseur ou contenu financier. Le positionnement est expert et orienté productivité/efficacité opérationnelle.

---

## 🎯 PHASE 1 : CADRAGE, STRATÉGIE & CONTENU

Cette phase combine le cadrage initial avec la stratégie de contenu pour créer une base solide. Elle se déroule en 4 étapes clés avec des jalons de validation.

### Étape 1.1 : CADRAGE & VALIDATION

#### Objectifs spécifiques
- Valider la vision stratégique
- Aligner toutes les parties prenantes
- Définir les priorités absolues
- Collecter tous les assets nécessaires

#### Livrables

**Document de cadrage validé**
- Périmètre du projet clairement défini
- Objectifs mesurables confirmés (KPI ≥ 5% de conversion)
- Budget et timeline validés
- Exclusions formelles (investisseurs, contenus financiers)

**Matrice de décision**
- Liste des fonctionnalités prioritaires par ordre d'importance
- Éléments différenciants à mettre en avant
- Ce qui est explicitement hors scope
- Critères de validation pour chaque livrable

**Kit de démarrage**
- Logo et charte graphique existante (couleurs, typographies)
- Contenus existants (brochures, présentations, supports commerciaux)
- Captures d'écran de la plateforme SaaS
- Accès techniques nécessaires (domaine, hébergement)
- Liste des stakeholders et leurs rôles

**Personas validés**
- Confirmation des 5 personas principaux
- Priorisation : Agences > Promoteurs > Syndics > Gestionnaires > Propriétaires
- Pain points identifiés par persona
- Objectifs métiers de chaque cible

#### Actions clés

**Phase Lancement**
- Réunion de kick-off (2h)
  - Présentation du cahier des charges
  - Validation des objectifs
  - Attribution des rôles et responsabilités
  - Planning détaillé
- Signature du document de cadrage
- Mise en place des outils de collaboration (Slack, Notion, Drive)

**Phase Collecte**
- Inventaire complet des assets existants
- Collecte des éléments de marque (logo, charte, valeurs)
- Récupération des contenus marketing existants
- Screenshots et vidéos de la plateforme
- Données clients/prospects (si disponibles)

**Phase Validation**
- Validation des personas cibles avec l'équipe commerciale
- Définition des KPI de succès :
  - Taux de conversion visite → lead ≥ 5%
  - Nombre de demandes de démo/mois (objectif)
  - Taux de rebond < 60%
  - Temps moyen sur le site > 2min
- Validation du budget et des ressources (internes/externes)

#### Jalons de validation Étape 1.1
- ✅ Document de cadrage signé
- ✅ Kit de démarrage complet
- ✅ Personas validés
- ✅ KPI définis
- ✅ Planning approuvé

---

### Étape 1.2 : ARCHITECTURE DE L'INFORMATION

#### Arborescence finale validée

```
├── Accueil
├── La Solution
│   ├── Vue d'ensemble
│   ├── SaaS de gestion
│   ├── Portail d'annonces
│   └── Technologies (IA, Mobile Money)
├── Fonctionnalités
│   ├── Gestion des biens
│   ├── CRM immobilier
│   ├── Gestion locative
│   ├── Syndic de copropriété
│   ├── Promotion immobilière
│   ├── Paiements Mobile Money
│   └── Automatisation IA
├── Pour Qui ?
│   ├── Agences immobilières
│   ├── Promoteurs immobiliers
│   ├── Syndics de copropriété
│   ├── Gestionnaires locatifs
│   └── Propriétaires bailleurs
├── Tarifs
├── Pourquoi ImmoTopia
├── Ressources
│   ├── Blog
│   ├── Guides pratiques
│   └── Actualités
└── Contact / Démo
```

#### Mapping des parcours utilisateurs

**Parcours Agence** : Accueil → Pour qui (Agence) → Fonctionnalités → Démo  
**Parcours Promoteur** : Accueil → La Solution → Pour qui (Promoteur) → Tarifs → Démo  
**Parcours Syndic** : Accueil → Fonctionnalités → Pour qui (Syndic) → Contact  
**Parcours découverte** : Accueil → La Solution → Pourquoi ImmoTopia → Démo

#### Personas et messages clés

**Agences immobilières**
- **Problème** : Gestion dispersée des biens et clients
- **Message** : "Centralisez toute votre activité sur une seule plateforme"
- **Bénéfice** : +40% de productivité, visibilité accrue

**Promoteurs immobiliers**
- **Problème** : Suivi complexe des projets et commercialisation difficile
- **Message** : "Pilotez vos projets et vendez plus vite"
- **Bénéfice** : Réduction du délai de commercialisation

**Syndics de copropriété**
- **Problème** : Gestion administrative chronophage
- **Message** : "Automatisez votre gestion de copropriété"
- **Bénéfice** : -60% de temps administratif

**Gestionnaires locatifs**
- **Problème** : Suivi des loyers et maintenance complexe
- **Message** : "Simplifiez votre gestion locative"
- **Bénéfice** : Automatisation des paiements et suivi

**Propriétaires bailleurs**
- **Problème** : Gestion manuelle et manque de visibilité
- **Message** : "Professionnalisez votre gestion locative"
- **Bénéfice** : Gain de temps et meilleur suivi

#### Ton et style éditorial

- **Ton** : Professionnel mais accessible, expert sans jargon
- **Style** : Concret, orienté bénéfices, preuve par l'exemple
- **Format** : Phrases courtes, bullets points pour la scan-lecture
- **Vocabulaire** : Métier immobilier, éviter le tech-speak

---

### Étape 1.3 : STRATÉGIE DE CONTENU

#### Livrables Étape 1.3
- ✅ Guide de style éditorial (ton, vocabulaire)
- ✅ Messages clés par persona
- ✅ Matrice problèmes/solutions/bénéfices
- ✅ Value proposition unique validée

---

### Étape 1.4 : PRODUCTION DU CONTENU

#### Livrables de contenu

**Textes marketing par page (20-25 pages A4)**
- Titres H1, H2, H3
- Paragraphes descriptifs
- Accroches et slogans
- CTAs personnalisés

**Fiches persona détaillées (5 fiches)**
- Profil type
- Pain points (3-5 par persona)
- Solutions ImmoTopia (features mappées)
- Résultats attendus (métriques)

**Argumentaires de vente**
- 10 objections fréquentes + réponses
- Comparatif avant/après ImmoTopia
- Preuves de valeur (cas d'usage)

**Contenus visuels à prévoir**
- Illustrations des fonctionnalités (8-10)
- Icônes métiers (15-20)
- Screenshots de la plateforme (6-8)
- Vidéo de démo (optionnel, 2min)

#### Actions clés Étape 1.4

- Interviews des utilisateurs pilotes (si disponibles)
- Benchmark concurrentiel (5-10 sites concurrents)
- Rédaction et validation itérative (3 cycles)
- Traduction FR/EN (si nécessaire)
- Création du planning de production des visuels

---

### Livrables finaux Phase 1
- ✅ Tous les textes marketing rédigés et validés (20-25 pages)
- ✅ 5 fiches persona complètes
- ✅ Argumentaires de vente et gestion des objections
- ✅ Brief créatif pour les contenus visuels
- ✅ Planning de production des assets visuels

### Jalons de validation Phase 1 complète
- 🎯 Document de cadrage signé
- 🎯 Arborescence et parcours validés
- 🎯 Tous les contenus textuels produits
- 🎯 Stratégie de contenu documentée
- 🎯 Kit complet prêt pour la phase Design

---

## 👥 User Stories

### P1 - Priorité Critique (Must Have)

**US-001-P1-001** : Page d'accueil professionnelle
- **En tant que** visiteur professionnel (agence, promoteur, syndic, etc.)
- **Je veux** comprendre immédiatement ce qu'est ImmoTopia et qui cible le site
- **Afin de** déterminer rapidement si la solution correspond à mes besoins

**Scénarios** :
- **Given** un visiteur arrive sur la page d'accueil
- **When** il lit le hero section
- **Then** il comprend que c'est une solution SaaS pour professionnels de l'immobilier et identifie son persona

**Critères d'acceptation** :
- [ ] Hero section avec message clair orienté professionnels
- [ ] Présentation des 5 personas cibles visibles
- [ ] CTA principal "Demander une démo" visible
- [ ] Temps de chargement < 3 secondes
- [ ] Design responsive (mobile, tablette, desktop)

---

**US-001-P1-002** : Pages dédiées par persona
- **En tant que** professionnel de l'immobilier (agence, promoteur, syndic, etc.)
- **Je veux** accéder à une page dédiée expliquant comment ImmoTopia répond à mes besoins spécifiques
- **Afin de** comprendre les bénéfices concrets pour mon métier

**Scénarios** :
- **Given** un visiteur identifie son persona (ex: agence immobilière)
- **When** il clique sur "Pour les agences immobilières"
- **Then** il accède à une page présentant problèmes, solutions et bénéfices spécifiques

**Critères d'acceptation** :
- [ ] 5 pages dédiées (une par persona)
- [ ] Structure : Problème → Solution ImmoTopia → Bénéfices
- [ ] Exemples concrets et métriques de résultats
- [ ] CTA "Demander une démo personnalisée" sur chaque page
- [ ] Navigation claire entre les pages

---

**US-001-P1-003** : Présentation des fonctionnalités
- **En tant que** professionnel de l'immobilier
- **Je veux** découvrir les fonctionnalités d'ImmoTopia détaillées
- **Afin de** évaluer si la solution couvre mes besoins opérationnels

**Scénarios** :
- **Given** un visiteur cherche à comprendre les capacités de la plateforme
- **When** il navigue vers la section "Fonctionnalités"
- **Then** il voit les 7 fonctionnalités principales avec descriptions détaillées

**Critères d'acceptation** :
- [ ] Page/section "Fonctionnalités" avec les 7 catégories
- [ ] Chaque fonctionnalité explique "quoi" et "pourquoi"
- [ ] Screenshots ou illustrations pour chaque fonctionnalité
- [ ] Liens vers les pages personas pertinentes
- [ ] Possibilité de filtrer par persona

---

**US-001-P1-004** : Formulaire de demande de démo
- **En tant que** prospect intéressé
- **Je veux** demander une démonstration personnalisée
- **Afin de** évaluer la solution avec un conseiller

**Scénarios** :
- **Given** un visiteur est convaincu par la solution
- **When** il remplit le formulaire de demande de démo
- **Then** sa demande est enregistrée et il reçoit une confirmation

**Critères d'acceptation** :
- [ ] Formulaire accessible depuis toutes les pages (CTA)
- [ ] Champs : Nom, Email, Téléphone, Entreprise, Persona, Message
- [ ] Validation côté client (format email, champs requis)
- [ ] Message de confirmation après envoi
- [ ] Intégration avec CRM/outil de gestion des leads

---

**US-001-P1-005** : Présentation de la solution globale
- **En tant que** visiteur professionnel
- **Je veux** comprendre l'architecture globale d'ImmoTopia
- **Afin de** visualiser comment les différents modules s'intègrent

**Scénarios** :
- **Given** un visiteur explore la section "La Solution"
- **When** il parcourt les sous-pages (SaaS, Portail, Technologies)
- **Then** il comprend l'écosystème complet ImmoTopia

**Critères d'acceptation** :
- [ ] Page "La Solution" avec vue d'ensemble
- [ ] Sous-pages : SaaS de gestion, Portail d'annonces, Technologies
- [ ] Schéma/visuel de l'architecture
- [ ] Explication des technologies (IA, Mobile Money)
- [ ] Navigation fluide entre les sections

---

### P2 - Priorité Haute (Should Have)

**US-001-P2-001** : Page de tarification
- **En tant que** décideur
- **Je veux** comprendre les tarifs et formules disponibles
- **Afin de** évaluer le retour sur investissement

**Scénarios** :
- **Given** un visiteur veut connaître les tarifs
- **When** il accède à la page "Tarifs"
- **Then** il voit les différentes formules avec prix et fonctionnalités incluses

**Critères d'acceptation** :
- [ ] Tableau comparatif des formules
- [ ] Prix clairs et transparence
- [ ] CTA "Essayer gratuitement" ou "Demander un devis"
- [ ] FAQ tarifaire
- [ ] Possibilité de contact commercial pour devis personnalisé

---

**US-001-P2-002** : Section "Pourquoi ImmoTopia"
- **En tant que** visiteur hésitant
- **Je veux** comprendre les avantages différenciants d'ImmoTopia
- **Afin de** être rassuré sur le choix de la solution

**Scénarios** :
- **Given** un visiteur compare avec des concurrents
- **When** il consulte "Pourquoi ImmoTopia"
- **Then** il identifie les points de différenciation clés

**Critères d'acceptation** :
- [ ] Liste des avantages compétitifs
- [ ] Témoignages clients (si disponibles)
- [ ] Cas d'usage réussis
- [ ] Comparatif avant/après ImmoTopia
- [ ] Métriques de performance (gains de productivité, etc.)

---

**US-001-P2-003** : Blog / Ressources
- **En tant que** professionnel de l'immobilier
- **Je veux** accéder à du contenu éducatif et des ressources pratiques
- **Afin de** améliorer mes connaissances et découvrir les meilleures pratiques

**Scénarios** :
- **Given** un visiteur cherche des ressources
- **When** il accède à la section "Ressources"
- **Then** il trouve blog, guides pratiques et actualités

**Critères d'acceptation** :
- [ ] Structure : Blog, Guides pratiques, Actualités
- [ ] Articles de blog pertinents pour les professionnels
- [ ] Guides téléchargeables (PDF)
- [ ] Filtrage par catégorie/persona
- [ ] Partage social des articles

---

**US-001-P2-004** : Page de contact alternative
- **En tant que** visiteur
- **Je veux** contacter ImmoTopia par téléphone ou email
- **Afin de** poser des questions avant de demander une démo

**Scénarios** :
- **Given** un visiteur préfère le contact direct
- **When** il accède à la page "Contact"
- **Then** il trouve téléphone, email et formulaire de contact

**Critères d'acceptation** :
- [ ] Informations de contact : téléphone, email, adresse
- [ ] Formulaire de contact général (non démo)
- [ ] Carte Google Maps (si localisation physique)
- [ ] Horaires d'ouverture
- [ ] Temps de réponse indicatif

---

### P3 - Priorité Moyenne (Nice to Have)

**US-001-P3-001** : Vidéo de démonstration
- **En tant que** visiteur pressé
- **Je veux** visionner une vidéo de démonstration courte
- **Afin de** comprendre rapidement le fonctionnement de la plateforme

**Scénarios** :
- **Given** un visiteur préfère le format vidéo
- **When** il clique sur "Voir la démo"
- **Then** une vidéo de 2 minutes s'affiche présentant les fonctionnalités clés

**Critères d'acceptation** :
- [ ] Vidéo de 2 minutes maximum
- [ ] Présentation des fonctionnalités principales
- [ ] Qualité professionnelle
- [ ] Sous-titres disponibles (FR/EN)
- [ ] Hébergement optimisé (YouTube, Vimeo, ou CDN)

---

**US-001-P3-002** : Chat en direct
- **En tant que** visiteur avec questions urgentes
- **Je veux** discuter en direct avec un conseiller
- **Afin de** obtenir des réponses immédiates

**Scénarios** :
- **Given** un visiteur a une question précise
- **When** il clique sur le widget de chat
- **Then** une conversation s'ouvre avec un conseiller (ou bot)

**Critères d'acceptation** :
- [ ] Widget de chat visible sur toutes les pages
- [ ] Disponibilité horaire affichée
- [ ] Réponses automatiques (bot) en dehors des heures
- [ ] Intégration avec outil de chat (Intercom, Crisp, etc.)
- [ ] Transfert vers formulaire démo si besoin

---

**US-001-P3-003** : Témoignages clients
- **En tant que** visiteur sceptique
- **Je veux** lire les témoignages de clients satisfaits
- **Afin de** être rassuré par la crédibilité de la solution

**Scénarios** :
- **Given** un visiteur veut des preuves sociales
- **When** il consulte la section témoignages
- **Then** il voit des avis clients avec photos et entreprises

**Critères d'acceptation** :
- [ ] Section dédiée aux témoignages
- [ ] Témoignages par persona (si possible)
- [ ] Photos, noms, entreprises
- [ ] Vidéos témoignages (si disponibles)
- [ ] Mise en avant sur la page d'accueil

---

## 📐 Exigences techniques

### Stack technique

- **Frontend** : Next.js 15 (React)
- **Styling** : CSS Modules ou Tailwind CSS
- **Composants UI** : Ant Design (déjà présent dans le projet)
- **TypeScript** : Oui (monorepo TypeScript)
- **Hébergement** : À définir (VPS, Vercel, etc.)

### Contraintes

- **Performance** : Temps de chargement initial < 3 secondes
- **SEO** : Optimisation pour les mots-clés métier immobilier
- **Responsive** : Mobile-first, support tablette et desktop
- **Accessibilité** : Conformité WCAG 2.1 niveau AA minimum
- **Compatibilité navigateurs** : Chrome, Firefox, Safari, Edge (2 dernières versions)

### Dépendances

- Package UI existant (`packages/ui`)
- Next.js 15 pour le routing et SSR
- Ant Design pour les composants de base
- Système de formulaire (à définir : React Hook Form + Zod)

### Intégrations

- **CRM/Lead Management** : Intégration avec outil de gestion des leads (HubSpot, Pipedrive, etc.)
- **Analytics** : Google Analytics 4 ou alternative
- **Email Marketing** : Intégration possible avec Mailchimp/SendGrid pour newsletter
- **Chat** : Widget de chat (Intercom, Crisp, ou solution propriétaire)

---

## ✅ Critères de succès

### Fonctionnels

- [ ] Toutes les pages P1 sont implémentées et fonctionnelles
- [ ] Formulaire de demande de démo fonctionne et envoie les données
- [ ] Navigation fluide entre toutes les sections
- [ ] Tous les CTAs redirigent correctement
- [ ] Contenus validés et publiés (20-25 pages de texte)

### Non-fonctionnels

- [ ] **Performance** : Lighthouse score ≥ 90 (Performance)
- [ ] **SEO** : Lighthouse score ≥ 90 (SEO)
- [ ] **Accessibilité** : Lighthouse score ≥ 90 (Accessibility)
- [ ] **Sécurité** : HTTPS, protection CSRF, validation des formulaires
- [ ] **Compatibilité** : Testé sur Chrome, Firefox, Safari, Edge
- [ ] **Mobile** : Expérience optimale sur mobile (test devices réels)

### KPI de conversion

- [ ] **Taux de conversion visite → lead ≥ 5%**
- [ ] **Taux de rebond < 60%**
- [ ] **Temps moyen sur le site > 2min**
- [ ] **Nombre de pages vues par session > 3**

---

## 🧪 Tests

### Tests unitaires

- [ ] Tests pour les composants de formulaire
- [ ] Tests pour les composants de navigation
- [ ] Tests pour les utilitaires de validation

### Tests d'intégration

- [ ] Test d'intégration formulaire → CRM
- [ ] Test d'intégration analytics
- [ ] Test de navigation complète

### Tests end-to-end

- [ ] E2E test : Parcours Agence (Accueil → Persona → Fonctionnalités → Démo)
- [ ] E2E test : Parcours Promoteur (Accueil → Solution → Persona → Tarifs → Démo)
- [ ] E2E test : Soumission formulaire de démo
- [ ] E2E test : Responsive design (mobile, tablette, desktop)

### Tests de performance

- [ ] Audit Lighthouse (Performance, SEO, Accessibility)
- [ ] Test de charge (si applicables)
- [ ] Optimisation des images et assets

---

## 📝 Notes

### Phase 1 - Priorité absolue

Cette spécification se concentre sur la **Phase 1 : Cadrage, Stratégie & Contenu**. Les phases suivantes (Design, Développement, Déploiement) seront définies après validation de la Phase 1.

### Exclusions formelles

- ❌ **Pas de cible investisseurs** : Le site ne doit pas contenir de contenu orienté investisseurs ou financiers
- ❌ **Pas de section investisseurs** : Exclusion explicite de toute section dédiée aux investisseurs
- ❌ **Pas de contenu financier** : Pas de présentation de modèles financiers ou projections

### Questions ouvertes

- [ ] Choix de l'hébergement (VPS existant avec autres sites ou Vercel/Netlify ?)
- [ ] Intégration CRM : Quel outil utiliser pour la gestion des leads ?
- [ ] Multilingue : FR uniquement ou FR/EN dès le départ ?
- [ ] Vidéo de démo : Production interne ou externe ?
- [ ] Témoignages clients : Disponibilité et droits d'utilisation ?

### Décisions techniques à valider

- [ ] Architecture de déploiement (VPS partagé ou service dédié)
- [ ] Système de gestion de contenu (Headless CMS ou contenu statique ?)
- [ ] Stratégie de cache et CDN
- [ ] Monitoring et alertes

---

## 🔗 Références

- [Documentation Next.js 15](https://nextjs.org/docs)
- [Ant Design Components](https://ant.design/components/overview/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Performance Best Practices](https://web.dev/performance/)

---

**Prochaines étapes** :
1. Validation de cette spécification avec les stakeholders
2. Exécution de `/speckit.plan` pour générer le plan d'implémentation
3. Collecte des assets (logo, charte graphique, contenus existants)
4. Démarrage de la Phase 1.1 : Cadrage & Validation

