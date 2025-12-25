# Guide de création des maquettes haute fidélité

**Date** : 2025-12-23

---

## 🎯 Objectif

Créer des maquettes haute fidélité complètes et cohérentes pour toutes les pages du site ImmoTopia.

---

## 📋 Prérequis

Avant de commencer les maquettes :

- [x] ✅ Phase 0 complétée (Design System défini)
- [x] ✅ Palette de couleurs finalisée
- [x] ✅ Typographie finalisée
- [x] ✅ Composants UI de base créés
- [ ] Wireframes validés (Phase 1)

---

## 🎨 Étapes de création

### 1. Préparation Figma

**Suivre** : `guides/figma-setup-guide.md`

- [ ] Projet Figma créé
- [ ] Pages organisées (Design System, Wireframes, Mockups)
- [ ] Styles de texte configurés
- [ ] Styles de couleurs configurés
- [ ] Grille configurée
- [ ] Composants de base créés

---

### 2. Création des composants UI

**Référence** : `design-system/component-library.md`

#### Ordre recommandé :

1. **Boutons** (T-002-005-003)
   - Button Primary (tous les états)
   - Button Secondary (tous les états)
   - Button Ghost (tous les états)
   - Tailles : Small, Medium, Large

2. **Cartes** (T-002-005-004)
   - Feature Card
   - Persona Card
   - Testimonial Card

3. **Formulaires** (T-002-005-005)
   - Input (tous les états)
   - Select
   - Textarea

4. **Navigation** (T-002-005-006)
   - Menu Desktop
   - Menu Mobile
   - Footer

5. **Icônes** (T-002-005-007)
   - Set Heroicons importé
   - Tailles standardisées

---

### 3. Création des maquettes

#### Ordre recommandé :

1. **Page Accueil** (T-002-006)
   - Desktop 1440px d'abord
   - Puis responsive (mobile, tablette)
   - Desktop large 1920px

2. **Pages prioritaires** (T-002-007)
   - La Solution
   - Fonctionnalités
   - Pour qui ? - Agence
   - Tarifs
   - Contact/Démo

---

## 🎨 Application de la charte graphique

### Couleurs

**Utiliser les styles de couleurs Figma** :
- Primary : `#2563EB`
- Secondary : `#10B981`
- Gris 100-900
- Succès, Attention, Erreur

**Vérifier** :
- Contraste suffisant pour textes
- Cohérence sur toutes les pages

### Typographie

**Utiliser les styles de texte Figma** :
- H1, H2, H3, H4 (desktop et mobile)
- Body, Small, Caption

**Vérifier** :
- Tailles respectées
- Line-heights corrects
- Poids de police appropriés

### Spacing

**Utiliser le système d'espacement** :
- 4px, 8px, 16px, 24px, 32px, 48px, 64px

**Vérifier** :
- Cohérence entre sections
- Respiration suffisante
- Alignement sur grille

---

## 📐 Breakpoints à créer

### Desktop
- **1440px** : Desktop standard (prioritaire)
- **1920px** : Desktop large

### Tablette
- **1024px** : Tablette paysage
- **768px** : Tablette portrait

### Mobile
- **414px** : Mobile large (iPhone Pro Max)
- **375px** : Mobile standard (iPhone)

---

## ✅ Checklist par maquette

Pour chaque maquette :

### Structure
- [ ] Header/Navigation présent
- [ ] Footer présent
- [ ] Toutes les sections définies dans wireframes
- [ ] Hiérarchie visuelle claire

### Design
- [ ] Charte graphique appliquée (couleurs, typographie)
- [ ] Composants UI utilisés (boutons, cartes, etc.)
- [ ] Spacing cohérent
- [ ] Alignement sur grille

### Responsive
- [ ] Mobile créé (375px, 414px)
- [ ] Tablette créée (768px, 1024px)
- [ ] Desktop créé (1440px, 1920px)
- [ ] Adaptations logiques

### États interactifs
- [ ] Hover défini sur éléments interactifs
- [ ] Focus visible (accessibilité)
- [ ] États actifs définis

### Validation
- [ ] Cohérence avec design system
- [ ] Accessibilité vérifiée (contraste)
- [ ] Performance considérée (images optimisées)

---

## 🎨 Sections communes à maquetter

### Hero Section
- Titre principal (H1)
- Sous-titre
- CTA principal (Button Primary)
- Image/visuel

### Section avec cartes
- Titre de section (H2)
- Grille de cartes (Feature Card, Persona Card)
- Espacement cohérent

### Section avec métriques
- Titre de section (H2)
- 3 colonnes avec chiffres
- Mise en avant des métriques

### Section CTA
- Message d'incitation
- Formulaire ou bouton CTA
- Design accrocheur

---

## 📝 Annotations à ajouter

Pour chaque maquette, annoter :

- **Spacing** : Marges et paddings mesurés
- **Couleurs** : Codes hex utilisés
- **Typographie** : Tailles et poids
- **Interactions** : Hover, click, scroll
- **Responsive** : Notes sur adaptations

---

## 🔗 Références

- Design System : `design-system.md`
- Component Library : `design-system/component-library.md`
- Variables CSS : `exports/css/design-tokens.css`
- Wireframes : Phase 1 (à créer)

---

## 📋 Progression

- [ ] Composants UI créés
- [ ] Maquette Accueil desktop
- [ ] Maquette Accueil responsive
- [ ] Maquettes pages prioritaires
- [ ] Toutes les maquettes validées

---

**Dernière mise à jour** : 2025-12-23

