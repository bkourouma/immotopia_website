# Plan d'implémentation : 002-design-experience-utilisateur

**Date de création** : 2025-12-23  
**Statut** : 📋 Planning  
**Phase précédente** : 001 - Site Vitrine ImmoTopia (Cadrage, Stratégie & Contenu)

---

## 🎯 Contexte technique

### Stack technique Design

- **Outils de design** : Figma ou Adobe XD (à définir)
- **Prototypage** : Intégré dans l'outil de design choisi
- **Design System** : Documentation dans l'outil + export pour développement
- **Handoff** : Spécifications précises pour le développement (Phase 3)

### Dépendances Phase 1

Cette phase nécessite la validation complète de la Phase 1 :
- ✅ Contenus marketing validés (20-25 pages)
- ✅ Personas définis (5 cibles prioritaires)
- ✅ Architecture de l'information validée
- ✅ Messages clés par persona
- ✅ Stratégie de contenu documentée
- ✅ Kit de démarrage (logo, charte graphique existante si disponible)

### Contraintes techniques

- **Performance** : Design optimisé pour chargement < 3 secondes
- **Responsive** : Tous les breakpoints définis et testés (mobile, tablette, desktop)
- **Accessibilité** : Contraste WCAG 2.1 niveau AA, navigation clavier validée
- **Compatibilité** : Testé sur Chrome, Firefox, Safari, Edge
- **Mobile-first** : 70% du trafic prévu sur mobile

---

## ✅ Vérification de conformité

### Principes de design

- [ ] **Mobile-first** : Design pensé d'abord pour mobile
- [ ] **Accessibilité** : Conformité WCAG 2.1 niveau AA minimum
- [ ] **Performance** : Design optimisé pour chargement rapide
- [ ] **Cohérence** : Design system unifié et documenté
- [ ] **Conversion** : Parcours optimisés pour la demande de démo

### Standards de design

- [ ] Charte graphique cohérente sur toutes les pages
- [ ] Composants UI réutilisables et documentés
- [ ] Spacing et typographie standardisés
- [ ] États interactifs définis (hover, active, disabled, focus)

### Architecture de l'information

- [ ] Respect de l'architecture validée en Phase 1
- [ ] Navigation claire et intuitive
- [ ] Hiérarchie visuelle cohérente
- [ ] Parcours de conversion optimisés

---

## 📁 Structure des livrables

### Fichiers de design à créer

**Wireframes basse fidélité**
```
design/
  ├── wireframes/
  │   ├── 01-accueil.pdf
  │   ├── 02-fonctionnalites.pdf
  │   ├── 03-pour-qui-agence.pdf
  │   ├── 04-la-solution.pdf
  │   ├── 05-tarifs.pdf
  │   └── 06-contact.pdf
```

**Maquettes haute fidélité**
```
design/
  ├── mockups/
  │   ├── desktop/
  │   │   ├── 01-accueil-1920px.png
  │   │   ├── 01-accueil-1440px.png
  │   │   ├── 02-fonctionnalites-1440px.png
  │   │   └── [autres pages]
  │   ├── tablet/
  │   │   ├── 01-accueil-1024px.png
  │   │   ├── 01-accueil-768px.png
  │   │   └── [autres pages]
  │   └── mobile/
  │       ├── 01-accueil-414px.png
  │       ├── 01-accueil-375px.png
  │       └── [autres pages]
```

**Prototype interactif**
```
design/
  ├── prototype/
  │   └── immotopia-prototype.fig (ou .xd)
```

**Design System**
```
design/
  ├── design-system/
  │   ├── colors.md
  │   ├── typography.md
  │   ├── components.md
  │   ├── spacing.md
  │   └── guidelines.md
```

**Exports pour développement**
```
design/
  ├── exports/
  │   ├── icons/
  │   │   └── *.svg
  │   ├── images/
  │   │   └── *.png, *.webp
  │   └── assets/
  │       └── [autres assets]
```

### Documentation à créer

- [ ] `design-system.md` - Documentation complète du design system
- [ ] `style-guide.md` - Guide de style (couleurs, typographie, spacing)
- [ ] `component-library.md` - Bibliothèque de composants
- [ ] `handoff-specs.md` - Spécifications pour le développement
- [ ] `user-testing-report.md` - Rapport des tests utilisateurs

---

## 🔬 Phase 0 : Recherche et préparation

### Recherche nécessaire

- [ ] Benchmark design concurrentiel (5-10 sites SaaS B2B immobilier)
  - Analyse des patterns de conversion
  - Analyse des parcours utilisateurs
  - Analyse des composants UI utilisés
- [ ] Recherche sur les meilleures pratiques UX pour sites SaaS B2B
- [ ] Étude des patterns de formulaires de conversion optimisés
- [ ] Recherche sur l'accessibilité WCAG 2.1 niveau AA
- [ ] Analyse des design systems modernes (Material Design, Ant Design, etc.)
- [ ] Recherche sur les animations et micro-interactions performantes

### Collecte d'assets

- [ ] **Charte graphique existante** :
  - Logo ImmoTopia (formats SVG, PNG)
  - Couleurs de marque (codes hex)
  - Typographies utilisées
  - Éléments de marque existants
- [ ] **Assets visuels** :
  - Screenshots de la plateforme SaaS (6-8)
  - Illustrations existantes (si disponibles)
  - Photos professionnelles (si disponibles)
- [ ] **Contenus** :
  - Textes validés de la Phase 1
  - Messages clés par persona
  - Métriques et chiffres à mettre en avant

### Décisions à prendre

- [ ] **Outil de design** : Figma ou Adobe XD ?
  - Critères : Collaboration, handoff, coût, préférences équipe
- [ ] **Style d'icônes** : Line ou Solid ?
- [ ] **Palette de couleurs** : Validation avec la marque existante
- [ ] **Typographie** : Choix des polices (Google Fonts recommandé)
- [ ] **Animations** : Niveau de complexité souhaité ?
- [ ] **Design system** : Storybook ou documentation simple ?

### Livrables Phase 0

- [ ] `research.md` - Synthèse du benchmark et des décisions
- [ ] `assets-collected.md` - Inventaire des assets collectés
- [ ] `design-decisions.md` - Décisions prises et justifications
- [ ] Kit de démarrage complet (logo, couleurs, typographies)

---

## 🎨 Phase 1 : Design UX (Wireframes)

### Étape 1.1 : Wireframes basse fidélité - Page Accueil

**Structure à wireframer** :
- [ ] Hero section + CTA principal
- [ ] Section "Problèmes métiers" (4 cartes)
- [ ] Section "Solution ImmoTopia" (4 piliers)
- [ ] Section "Bénéfices chiffrés" (3 colonnes)
- [ ] Section "Pour qui ?" (5 cartes métiers)
- [ ] Section "Crédibilité" (logos/chiffres)
- [ ] CTA final + formulaire (3 champs max)

**Responsive** :
- [ ] Wireframe mobile (375px, 414px)
- [ ] Wireframe tablette (768px, 1024px)
- [ ] Wireframe desktop (1440px, 1920px)

**Livrables** :
- [ ] Wireframes PDF ou images pour validation
- [ ] Annotations des interactions prévues
- [ ] Notes sur les parcours de conversion

### Étape 1.2 : Wireframes basse fidélité - Page Fonctionnalités

**Structure à wireframer** :
- [ ] Introduction (valeur globale)
- [ ] Navigation par module (7 onglets)
- [ ] Détail fonctionnalité (texte + visuel)
- [ ] Bénéfice métier associé
- [ ] CTA "Voir en action"

**Responsive** :
- [ ] Adaptation des onglets sur mobile (accordéon ou menu)
- [ ] Wireframes pour tous les breakpoints

**Livrables** :
- [ ] Wireframes PDF ou images
- [ ] Spécification de l'interaction onglets
- [ ] Notes sur la navigation

### Étape 1.3 : Wireframes basse fidélité - Page Pour qui ? (Agence)

**Structure à wireframer** :
- [ ] Hero persona ("Vous êtes agence")
- [ ] Section "Vos défis" (4-5 pain points)
- [ ] Section "Comment ImmoTopia vous aide" (solutions)
- [ ] Section "Fonctionnalités clés pour vous" (6 features)
- [ ] Section "Résultats attendus" (métriques)
- [ ] Témoignage/cas client
- [ ] CTA "Démo personnalisée"

**Template réutilisable** :
- [ ] Structure adaptable pour les 4 autres personas
- [ ] Notes sur les variations par persona

**Livrables** :
- [ ] Wireframes PDF ou images pour Agence
- [ ] Template réutilisable documenté
- [ ] Notes sur les variations par persona

### Étape 1.4 : Wireframes basse fidélité - Pages secondaires

**Pages à wireframer** :
- [ ] Page "La Solution" (vue d'ensemble + sous-pages)
- [ ] Page "Tarifs" (tableau comparatif)
- [ ] Page "Contact/Démo" (formulaire complet)

**Livrables** :
- [ ] Wireframes PDF ou images pour toutes les pages
- [ ] Annotations complètes

### Étape 1.5 : Validation des wireframes

**Revue avec stakeholders** :
- [ ] Présentation des wireframes
- [ ] Validation de la structure
- [ ] Validation des parcours de conversion
- [ ] Ajustements si nécessaire

**Livrables Phase 1** :
- [ ] ✅ Tous les wireframes validés
- [ ] ✅ Parcours de conversion validés
- [ ] ✅ Structure responsive validée
- [ ] ✅ Annotations complètes pour le design haute fidélité

---

## 🎨 Phase 2 : Design UI (Maquettes haute fidélité)

### Étape 2.1 : Définition de la charte graphique

**Palette de couleurs** :
- [ ] Couleur primaire ImmoTopia (à définir avec la marque)
- [ ] Couleur secondaire (accentuation)
- [ ] Palette de gris (100 à 900)
- [ ] Couleurs fonctionnelles (succès, attention)
- [ ] Validation des contrastes WCAG 2.1 AA

**Typographie** :
- [ ] Police pour les titres (moderne, lisible, Bold)
- [ ] Police pour le corps (sans-serif, Regular/Medium)
- [ ] Échelle typographique (16px base)
- [ ] Line-heights définis
- [ ] Tailles responsive définies

**Livrables** :
- [ ] Document de charte graphique
- [ ] Variables CSS préparées
- [ ] Exemples d'application

### Étape 2.2 : Design System - Composants UI

**Boutons** :
- [ ] Variante Primary (fond couleur primaire)
- [ ] Variante Secondary (bordure, fond transparent)
- [ ] Variante Ghost (fond transparent)
- [ ] États : Default, Hover, Active, Disabled, Loading
- [ ] Tailles : Small, Medium, Large

**Cartes** :
- [ ] Feature Card (icône, titre, description, lien)
- [ ] Persona Card (image, titre, description, CTA)
- [ ] Testimonial Card (photo, nom, entreprise, texte)
- [ ] États hover définis

**Formulaires** :
- [ ] Input (text, email, tel)
- [ ] Select (dropdown)
- [ ] Textarea
- [ ] États : Default, Focus, Error, Disabled
- [ ] Messages de validation

**Navigation** :
- [ ] Menu desktop (horizontal, sticky)
- [ ] Menu mobile (hamburger, drawer)
- [ ] Breadcrumb
- [ ] Footer (structure, colonnes)

**Icônes** :
- [ ] Set d'icônes cohérent (line ou solid)
- [ ] Tailles standardisées (16px, 20px, 24px, 32px)
- [ ] Bibliothèque choisie ou custom

**Livrables** :
- [ ] Bibliothèque de composants dans l'outil de design
- [ ] Documentation de chaque composant
- [ ] Exemples d'usage

### Étape 2.3 : Maquettes haute fidélité - Page Accueil

**Desktop (1920px, 1440px)** :
- [ ] Hero section avec design final
- [ ] Toutes les sections avec styles appliqués
- [ ] Typographie et couleurs finales
- [ ] Espacements et alignements
- [ ] Images et illustrations intégrées

**Tablette (1024px, 768px)** :
- [ ] Adaptation du layout
- [ ] Ajustements des espacements
- [ ] Navigation adaptée

**Mobile (414px, 375px)** :
- [ ] Layout mobile-first
- [ ] Navigation hamburger
- [ ] CTAs optimisés pour le tactile
- [ ] Formulaire simplifié

**Livrables** :
- [ ] Maquettes PNG pour tous les breakpoints
- [ ] Spécifications de spacing
- [ ] Spécifications de couleurs et typographie

### Étape 2.4 : Maquettes haute fidélité - Pages prioritaires

**Pages à maquetter en haute fidélité** :
- [ ] Page "La Solution" (vue d'ensemble + 1 sous-page)
- [ ] Page "Fonctionnalités" (navigation + détail 1 module)
- [ ] Page "Pour qui ?" (1 persona complète - Agence)
- [ ] Page "Tarifs" (tableau comparatif)
- [ ] Page "Contact/Démo" (formulaire)

**Responsive** :
- [ ] Toutes les pages en mobile, tablette, desktop
- [ ] Cohérence visuelle assurée

**Livrables** :
- [ ] Maquettes PNG pour toutes les pages et breakpoints
- [ ] Spécifications complètes

### Étape 2.5 : Design System - Documentation

**Guide de style** :
- [ ] Spacing (système d'espacement cohérent)
- [ ] Shadows (élévation 1, 2, 3)
- [ ] Borders (rayon, épaisseur)
- [ ] États interactifs (hover, active, disabled, focus)
- [ ] Animations et transitions

**Documentation des composants** :
- [ ] Description et usage de chaque composant
- [ ] Variantes disponibles
- [ ] Props/paramètres
- [ ] Exemples de code (si applicable)
- [ ] Accessibilité

**Livrables** :
- [ ] `design-system.md` - Documentation complète
- [ ] `style-guide.md` - Guide de style
- [ ] `component-library.md` - Bibliothèque de composants

### Étape 2.6 : Validation des maquettes

**Revue avec stakeholders** :
- [ ] Présentation des maquettes haute fidélité
- [ ] Validation de la charte graphique
- [ ] Validation des composants UI
- [ ] Validation du responsive
- [ ] Ajustements si nécessaire

**Livrables Phase 2** :
- [ ] ✅ Toutes les maquettes haute fidélité validées
- [ ] ✅ Design system documenté
- [ ] ✅ Charte graphique validée
- [ ] ✅ Spécifications complètes pour le développement

---

## 🎨 Phase 3 : Prototype interactif

### Étape 3.1 : Création du prototype

**Pages à prototyper** :
- [ ] Accueil (complète avec toutes les sections)
- [ ] La Solution (vue d'ensemble + navigation vers sous-pages)
- [ ] Fonctionnalités (navigation par onglets + détail 1 module)
- [ ] Pour qui ? (1 persona complète - Agence)
- [ ] Tarifs
- [ ] Contact/Démo

**Interactions** :
- [ ] Navigation entre pages
- [ ] Hover sur les éléments interactifs
- [ ] Click sur les CTAs
- [ ] Scroll et animations
- [ ] États : Default, hover, active, error

**Responsive** :
- [ ] Prototype mobile
- [ ] Prototype tablette
- [ ] Prototype desktop

**Livrables** :
- [ ] Prototype interactif dans Figma/XD
- [ ] Lien de partage pour les tests
- [ ] Documentation des interactions

### Étape 3.2 : Validation du prototype

**Revue interne** :
- [ ] Test de navigation complète
- [ ] Vérification des interactions
- [ ] Vérification du responsive
- [ ] Ajustements si nécessaire

**Livrables Phase 3** :
- [ ] ✅ Prototype interactif fonctionnel
- [ ] ✅ Toutes les interactions validées
- [ ] ✅ Responsive validé

---

## 🧪 Phase 4 : Tests utilisateurs

### Étape 4.1 : Préparation des tests

**Recrutement** :
- [ ] 5 utilisateurs pour le persona principal (Agence immobilière)
- [ ] Profils : Professionnels de l'immobilier ou similaires
- [ ] Mix : 3 expérimentés web, 2 moins expérimentés

**Tâches à préparer** :
- [ ] Tâche 1 : Navigation - Trouver les informations sur les fonctionnalités pour agences
- [ ] Tâche 2 : Demande de démo - Compléter le formulaire de demande de démo
- [ ] Tâche 3 : Exploration - Parcourir le site et identifier les bénéfices
- [ ] Tâche 4 : Comparaison - Comparer avec leur solution actuelle (si applicable)

**Méthodologie** :
- [ ] Test en conditions réelles (device de l'utilisateur)
- [ ] Think-aloud : Utilisateur commente ses actions
- [ ] Observation : Prise de notes sur les difficultés
- [ ] Questionnaire post-test : Satisfaction, clarté, facilité

### Étape 4.2 : Exécution des tests

**Sessions de test** :
- [ ] 5 sessions individuelles (1h chacune)
- [ ] Enregistrement des sessions (avec autorisation)
- [ ] Prise de notes détaillée
- [ ] Identification des points de friction

**Points à évaluer** :
- [ ] Clarté de la navigation
- [ ] Compréhension des messages clés
- [ ] Facilité d'utilisation du formulaire
- [ ] Identification des bénéfices
- [ ] Points de friction

### Étape 4.3 : Analyse et ajustements

**Analyse des résultats** :
- [ ] Synthèse des retours utilisateurs
- [ ] Identification des problèmes récurrents
- [ ] Priorisation des ajustements

**Ajustements** :
- [ ] Ajustement de la hiérarchie visuelle si nécessaire
- [ ] Simplification des parcours si confusion
- [ ] Amélioration des CTAs si faible clic
- [ ] Clarification des messages si incompris
- [ ] Optimisation du formulaire si abandon

**Itération** :
- [ ] Prototype ajusté
- [ ] Nouveau test avec 2-3 utilisateurs
- [ ] Validation finale

**Livrables Phase 4** :
- [ ] ✅ Rapport de tests utilisateurs (`user-testing-report.md`)
- [ ] ✅ Prototype ajusté et validé
- [ ] ✅ Liste des améliorations apportées

---

## 📦 Phase 5 : Exports et handoff

### Étape 5.1 : Exports pour développement

**SVG** :
- [ ] Icônes en SVG (optimisés, sans métadonnées)
- [ ] Illustrations vectorielles
- [ ] Organisation par dossier

**PNG/WebP** :
- [ ] Images bitmap optimisées
- [ ] Différentes résolutions (@1x, @2x, @3x)
- [ ] Format WebP également fourni

**CSS** :
- [ ] Variables CSS pour les couleurs
- [ ] Classes utilitaires pour spacing
- [ ] Tokens de design (si applicable)

**Spécifications** :
- [ ] Dimensions précises pour chaque élément
- [ ] Espacements mesurés
- [ ] Couleurs avec codes hex
- [ ] Typographie avec tailles et line-heights
- [ ] États interactifs documentés

**Livrables** :
- [ ] Dossier `exports/` organisé
- [ ] Tous les assets exportés
- [ ] Spécifications complètes

### Étape 5.2 : Documentation de handoff

**Spécifications pour le développement** :
- [ ] `handoff-specs.md` - Spécifications complètes
- [ ] Lien vers le prototype interactif
- [ ] Lien vers le design system
- [ ] Liste des assets et leurs emplacements
- [ ] Notes sur les interactions complexes
- [ ] Notes sur les animations

**Livrables Phase 5** :
- [ ] ✅ Tous les exports prêts
- [ ] ✅ Documentation de handoff complète
- [ ] ✅ Design system documenté
- [ ] ✅ Prêt pour la Phase 3 (Développement)

---

## ✅ Critères de succès

### Livrables Phase 2 complète

- [ ] ✅ Wireframes validés pour toutes les pages
- [ ] ✅ Prototype interactif fonctionnel
- [ ] ✅ Maquettes haute fidélité complètes
- [ ] ✅ Design system documenté
- [ ] ✅ Exports prêts pour le développement
- [ ] ✅ Tests utilisateurs réalisés et ajustements faits

### Qualité du design

- [ ] **Cohérence visuelle** : Toutes les pages suivent la même charte
- [ ] **Responsive** : Expérience optimale sur tous les devices
- [ ] **Accessibilité** : Conformité WCAG 2.1 niveau AA
- [ ] **Performance** : Design optimisé pour chargement rapide
- [ ] **Conversion** : Parcours optimisés pour la demande de démo

### Validation utilisateurs

- [ ] **Navigation** : 100% des utilisateurs trouvent les informations recherchées
- [ ] **Formulaire** : 100% des utilisateurs complètent le formulaire sans difficulté
- [ ] **Compréhension** : Messages clés compris par tous les utilisateurs
- [ ] **Satisfaction** : Score de satisfaction ≥ 4/5

---

## 📝 Notes d'implémentation

### Dépendances Phase 1

**Nécessaire avant démarrage** :
- ✅ Contenus marketing validés (20-25 pages)
- ✅ Personas définis (5 cibles prioritaires)
- ✅ Architecture de l'information validée
- ✅ Messages clés par persona
- ✅ Stratégie de contenu documentée

**Assets nécessaires** :
- Logo et charte graphique ImmoTopia (si disponible)
- Screenshots de la plateforme SaaS (6-8)
- Illustrations existantes (si disponibles)
- Photos professionnelles (si disponibles)

### Questions ouvertes

- [ ] Charte graphique existante : Logo, couleurs, typographies disponibles ?
- [ ] Assets visuels : Screenshots de la plateforme disponibles ?
- [ ] Illustrations : Production interne ou externe ?
- [ ] Vidéo de démo : Disponible pour intégration dans le design ?
- [ ] Témoignages clients : Photos et autorisations disponibles ?

### Décisions à valider

- [ ] Outil de design : Figma ou Adobe XD ?
- [ ] Style d'icônes : Line ou Solid ?
- [ ] Animations : Niveau de complexité souhaité ?
- [ ] Design system : Storybook ou documentation simple ?

### Risques et mitigations

**Risque** : Charte graphique non disponible  
**Mitigation** : Créer une charte graphique cohérente en s'inspirant de la marque existante

**Risque** : Assets visuels manquants  
**Mitigation** : Utiliser des placeholders et planifier la production des assets

**Risque** : Tests utilisateurs difficiles à organiser  
**Mitigation** : Planifier tôt, utiliser des outils de test à distance si nécessaire

**Risque** : Ajustements importants après tests utilisateurs  
**Mitigation** : Prévoir du temps pour les itérations dans le planning

---

## 🔗 Références

- [Lien vers spec.md](./spec.md)
- [Lien vers Phase 1](../001-site-vitrine-immotopia-orientation-100-clients-professionnels/spec.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design Guidelines](https://material.io/design)
- [Figma Design Systems](https://www.figma.com/design-systems/)

---

**Prochaines étapes** :
1. Validation de ce plan avec les stakeholders
2. Collecte des assets de marque (logo, charte graphique)
3. Choix de l'outil de design (Figma ou Adobe XD)
4. Démarrage de la Phase 0 : Recherche et préparation
5. Utilisation de `/speckit.tasks` pour générer les tâches détaillées

