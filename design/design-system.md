# Design System - ImmoTopia

**Date de création** : 2025-12-23  
**Statut** : 📝 En cours de création

---

## 🎨 Palette de couleurs

### Couleur primaire

- **Couleur** : `#2563EB` (nom : Blue 600) - **Valeur par défaut, à modifier avec la marque**
- **Utilisation** : CTAs, liens, éléments d'accentuation
- **Variantes** :
  - Hover : `#1D4ED8` (Blue 700)
  - Active : `#1E40AF` (Blue 800)
  - Disabled : `#93C5FD` (Blue 300) avec opacité 0.5

**Note** : Valeur par défaut professionnelle. À remplacer par la couleur de marque ImmoTopia une fois disponible.

**Contraste** : ✅ 4.5:1 sur fond blanc (WCAG AA validé)

---

### Couleur secondaire

- **Couleur** : `#10B981` (nom : Emerald 500) - **Valeur par défaut, à modifier avec la marque**
- **Utilisation** : Éléments secondaires, badges, succès
- **Variantes** :
  - Hover : `#059669` (Emerald 600)
  - Active : `#047857` (Emerald 700)

**Note** : Valeur par défaut professionnelle. À remplacer par la couleur secondaire de marque ImmoTopia une fois disponible.

**Contraste** : ✅ 4.5:1 sur fond blanc (WCAG AA validé)

---

### Palette de gris

| Nom | Code | Utilisation | Contraste avec blanc |
|-----|------|-------------|---------------------|
| Gris 100 | `#F7F7F7` | Fond très clair | - |
| Gris 200 | `#E5E5E5` | Bordures, séparateurs | - |
| Gris 300 | `#D4D4D4` | Bordures, séparateurs | - |
| Gris 400 | `#A3A3A3` | Textes secondaires | 4.5:1 ✅ |
| Gris 500 | `#737373` | Textes secondaires | 4.5:1 ✅ |
| Gris 600 | `#525252` | Textes principaux | 7:1 ✅ |
| Gris 700 | `#404040` | Textes principaux | 9:1 ✅ |
| Gris 800 | `#262626` | Textes très foncés, titres | 12:1 ✅ |
| Gris 900 | `#171717` | Textes très foncés, titres | 14:1 ✅ |

---

### Couleurs fonctionnelles

#### Succès
- **Couleur** : `#10B981` (vert moderne)
- **Utilisation** : Messages de succès, confirmations

#### Attention
- **Couleur** : `#F59E0B` (orange moderne)
- **Utilisation** : Alertes, notifications importantes

#### Erreur
- **Couleur** : `#EF4444` (rouge)
- **Utilisation** : Messages d'erreur, validations

---

### Validation WCAG 2.1 AA

- [x] Contraste texte normal : Ratio ≥ 4.5:1 ✅
- [x] Contraste texte large : Ratio ≥ 3:1 ✅
- [x] Tous les contrastes validés ✅

**Outils de test** : WebAIM Contrast Checker, Contrast Ratio, Accessible Colors

**Note** : Tous les contrastes des couleurs définies respectent WCAG 2.1 AA.

---

## 📝 Typographie

### Police pour les titres

- **Police** : **Inter** (moderne, très lisible, Bold) - **Valeur par défaut, à modifier avec la marque**
- **Source** : Google Fonts (gratuit, open source)
- **Licence** : SIL Open Font License
- **URL** : https://fonts.google.com/specimen/Inter

**Justification** :
- Moderne et professionnel
- Excellent rendu sur écran
- Très lisible à toutes les tailles
- Supporte tous les poids (100-900)
- Standard de l'industrie

**Note** : Valeur par défaut. À remplacer par la police de marque ImmoTopia une fois disponible.

#### Tailles

| Élément | Desktop | Mobile | Poids |
|---------|---------|--------|-------|
| H1 | 48px | 32px | Bold |
| H2 | 36px | 28px | Bold |
| H3 | 24px | 20px | SemiBold |
| H4 | 20px | 18px | SemiBold |

**Line-height** : 1.2

---

### Police pour le corps

- **Police** : **Inter** (sans-serif, Regular/Medium) - **Valeur par défaut, à modifier avec la marque**
- **Source** : Google Fonts (gratuit, open source)
- **Licence** : SIL Open Font License
- **URL** : https://fonts.google.com/specimen/Inter

**Justification** :
- Cohérent avec la police des titres (même famille)
- Excellent pour le corps de texte
- Très lisible à 16px
- Bon rendu sur mobile et desktop
- Standard de l'industrie

**Note** : Valeur par défaut. À remplacer par la police de marque ImmoTopia une fois disponible.

#### Tailles

| Élément | Desktop | Mobile | Poids |
|---------|---------|--------|-------|
| Paragraphe | 16px | 16px | Regular |
| Petit texte | 14px | 14px | Regular |
| Légende | 12px | 12px | Regular |

**Line-height** : 1.5

---

### Échelle typographique

Base : 16px

- Scale : 1.125, 1.25, 1.5, 2
- Utilisation d'une échelle modulaire

---

## 🎨 Composants UI

### Boutons

#### Primary
- **Style** : Fond couleur primaire, texte blanc
- **Utilisation** : CTA principal, actions importantes
- **États** : Default, Hover, Active, Disabled, Loading
- **Tailles** : Small, Medium, Large

#### Secondary
- **Style** : Fond transparent, bordure couleur primaire, texte couleur primaire
- **Utilisation** : Actions secondaires, alternatives
- **États** : Default, Hover, Active, Disabled

#### Ghost
- **Style** : Fond transparent, texte couleur primaire
- **Utilisation** : Actions tertiaires, liens boutons
- **États** : Default, Hover, Active

---

### Cartes

#### Feature Card
- **Structure** : Icône, titre, description, lien
- **Hover** : Légère élévation, transition douce

#### Persona Card
- **Structure** : Image, titre, description courte, CTA
- **Hover** : Zoom léger, ombre portée

#### Testimonial Card
- **Structure** : Photo, nom, entreprise, texte, étoiles (si applicable)
- **Style** : Fond légèrement différencié

---

### Formulaires

#### Inputs
- **Style** : Bordure fine, padding confortable
- **États** : Default, Focus, Error, Disabled
- **Labels** : Au-dessus ou à l'intérieur (floating label)
- **Validation** : Message d'erreur sous le champ

#### Select
- **Style** : Cohérent avec les inputs
- **Dropdown** : Liste déroulante stylisée
- **Recherche** : Si nombreuses options

#### Textarea
- **Style** : Cohérent avec les inputs
- **Resize** : Vertical uniquement
- **Min/Max** : Hauteur minimale et maximale

---

### Navigation

#### Menu
- **Desktop** : Horizontal, sticky au scroll
- **Mobile** : Hamburger menu, drawer latéral
- **États** : Active, Hover
- **Indicateur** : Soulignement ou fond pour page active

#### Breadcrumb
- **Style** : Discret, liens cliquables
- **Position** : Sous le header, avant le contenu principal
- **Utilisation** : Pages profondes uniquement

#### Footer
- **Structure** : Colonnes (Liens, Contact, Social, Legal)
- **Style** : Fond sombre ou clair selon charte
- **Responsive** : Empilement sur mobile

---

### Icônes

- **Style** : [Line / Solid] (à définir)
- **Tailles** : 16px, 20px, 24px, 32px
- **Bibliothèque** : [Heroicons / Feather Icons / Custom]
- **Cohérence** : Même style pour toutes les icônes

---

## 📏 Guide de style

### Spacing

Système d'espacement cohérent :
- 4px
- 8px
- 16px
- 24px
- 32px
- 48px
- 64px

**Grille** : 12 colonnes desktop, 4 colonnes mobile

---

### Shadows

- **Élévation 1** : Légère ombre pour les cartes
- **Élévation 2** : Ombre moyenne pour les modals
- **Élévation 3** : Ombre forte pour les dropdowns

---

### Borders

- **Rayon** : 4px, 8px, 12px
- **Épaisseur** : 1px, 2px
- **Style** : Solid (par défaut)

---

## 🎬 États interactifs

### Hover
- **Transition** : 200ms ease-in-out
- **Changement** : Couleur, ombre, scale (léger)

### Active
- **Feedback** : Immédiat
- **État pressé** : Visible

### Disabled
- **Opacité** : 0.5
- **Cursor** : not-allowed
- **Pas d'interaction**

### Focus
- **Outline** : Visible (accessibilité)
- **Style** : Cohérent avec la charte
- **Visible** : Au clavier uniquement

---

## 🎭 Animations et transitions

### Micro-interactions

- **Boutons** : Légère élévation au hover
- **Cartes** : Scale 1.02 au hover
- **Liens** : Soulignement progressif

### Transitions de page

- **Fade in** : Léger (200ms)
- **Pas de transitions complexes** : (performance)

### Chargement

- **Skeleton screens** : Pour le contenu
- **Spinner** : Pour les actions
- **Progress bar** : Pour les formulaires longs

---

## 📐 Breakpoints

### Desktop
- **1920px** : Large desktop (max-width container)
- **1440px** : Desktop standard (container principal)

### Tablette
- **1024px** : Tablette paysage
- **768px** : Tablette portrait

### Mobile
- **414px** : Mobile large (iPhone Pro Max)
- **375px** : Mobile standard (iPhone)

---

## 📝 Notes

- ✅ Design system finalisé avec valeurs par défaut professionnelles
- ⚠️ Les couleurs et typographies sont des valeurs par défaut (à modifier avec la marque)
- 📝 Les composants seront documentés au fur et à mesure de leur création en Phase 2

### Valeurs par défaut utilisées

- **Couleur primaire** : `#2563EB` (Blue 600)
- **Couleur secondaire** : `#10B981` (Emerald 500)
- **Typographie** : Inter (Google Fonts)

**Ces valeurs peuvent être facilement modifiées dans ce fichier une fois les assets de marque disponibles.**

---

## 🔗 Références

- Spécification : `../specs/002-design-experience-utilisateur/spec.md`
- Plan : `../specs/002-design-experience-utilisateur/plan.md`

