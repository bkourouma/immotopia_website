# Guide de configuration Figma

**Date** : 2025-12-23

---

## 🎯 Objectif

Configurer le projet Figma pour la Phase 2 : Design & Expérience Utilisateur.

---

## 📁 Structure du projet Figma

### Pages principales

1. **00 - Design System**
   - Couleurs
   - Typographie
   - Composants UI
   - Icônes
   - Spacing

2. **01 - Wireframes**
   - Accueil
   - Fonctionnalités
   - Pour qui (Personas)
   - La Solution
   - Tarifs
   - Contact

3. **02 - Mockups Desktop**
   - Accueil (1440px, 1920px)
   - Fonctionnalités
   - Pour qui (Personas)
   - La Solution
   - Tarifs
   - Contact

4. **03 - Mockups Tablet**
   - Toutes les pages (768px, 1024px)

5. **04 - Mockups Mobile**
   - Toutes les pages (375px, 414px)

6. **05 - Prototype**
   - Prototype interactif complet

7. **06 - Exports**
   - Assets exportés pour développement

---

## 🎨 Configuration des frames

### Breakpoints à créer

**Mobile** :
- 375px (iPhone standard)
- 414px (iPhone Pro Max)

**Tablette** :
- 768px (Tablette portrait)
- 1024px (Tablette paysage)

**Desktop** :
- 1440px (Desktop standard)
- 1920px (Desktop large)

### Création des frames

1. Créer un frame pour chaque breakpoint
2. Nommer clairement : `[Page] - [Breakpoint]`
3. Exemple : `Accueil - 1440px`

---

## 🎨 Styles de texte

### Créer les styles de texte

**Titres** :
- H1 Desktop (48px, Bold)
- H1 Mobile (32px, Bold)
- H2 Desktop (36px, Bold)
- H2 Mobile (28px, Bold)
- H3 Desktop (24px, SemiBold)
- H3 Mobile (20px, SemiBold)
- H4 Desktop (20px, SemiBold)
- H4 Mobile (18px, SemiBold)

**Corps** :
- Paragraphe (16px, Regular)
- Petit texte (14px, Regular)
- Légende (12px, Regular)

**À faire** :
- [ ] Créer tous les styles de texte
- [ ] Utiliser la police choisie (Inter recommandé)
- [ ] Définir les line-heights (1.2 pour titres, 1.5 pour corps)

---

## 🎨 Styles de couleurs

### Créer les styles de couleurs

**Couleurs primaires** :
- Primary (couleur principale ImmoTopia)
- Primary Hover
- Primary Active
- Primary Disabled

**Couleurs secondaires** :
- Secondary
- Secondary Hover
- Secondary Active

**Gris** :
- Gris 100 à 900

**Couleurs fonctionnelles** :
- Succès
- Attention
- Erreur

**À faire** :
- [ ] Créer tous les styles de couleurs
- [ ] Utiliser les codes hex de la palette
- [ ] Nommer clairement

---

## 📐 Grille

### Créer la grille

**Desktop** :
- 12 colonnes
- Gutter : 24px
- Margin : 80px (ou selon design)

**Tablette** :
- 8 colonnes
- Gutter : 20px
- Margin : 40px

**Mobile** :
- 4 colonnes
- Gutter : 16px
- Margin : 16px

**À faire** :
- [ ] Configurer la grille pour chaque breakpoint
- [ ] Utiliser Layout Grid dans Figma

---

## 🧩 Composants

### Créer les composants de base

**Boutons** :
- Button Primary (tous les états)
- Button Secondary (tous les états)
- Button Ghost (tous les états)

**Cartes** :
- Feature Card
- Persona Card
- Testimonial Card

**Formulaires** :
- Input (tous les états)
- Select
- Textarea

**Navigation** :
- Menu Desktop
- Menu Mobile
- Footer

**À faire** :
- [ ] Créer tous les composants de base
- [ ] Utiliser Variants pour les états
- [ ] Documenter dans le Design System

---

## 📦 Assets

### Importer les assets

**Logo** :
- [ ] Importer logo SVG
- [ ] Créer composant Logo

**Icônes** :
- [ ] Importer set d'icônes (Heroicons)
- [ ] Créer composants pour chaque icône

**Images** :
- [ ] Importer screenshots
- [ ] Importer illustrations
- [ ] Organiser dans Assets

---

## ✅ Checklist de configuration

### Avant de commencer les wireframes

- [ ] Structure de pages créée
- [ ] Frames configurés pour tous les breakpoints
- [ ] Styles de texte créés
- [ ] Styles de couleurs créés
- [ ] Grille configurée
- [ ] Composants de base créés
- [ ] Assets importés
- [ ] Design System page organisée

---

## 🔗 Ressources

- [Documentation Figma](https://help.figma.com/)
- [Figma Design Systems](https://www.figma.com/design-systems/)
- [Figma Auto Layout](https://help.figma.com/hc/en-us/articles/5731324059543)

---

## 📝 Notes

- Utiliser Auto Layout pour les composants
- Utiliser Variants pour les états
- Organiser avec des dossiers
- Nommer clairement tous les éléments
- Documenter dans le Design System

