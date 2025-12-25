# Component Library - ImmoTopia

**Date de création** : 2025-12-23  
**Statut** : 📝 En cours de création

---

## 📋 Vue d'ensemble

Cette bibliothèque documente tous les composants UI du design system ImmoTopia. Chaque composant est documenté avec ses variantes, états, et spécifications pour faciliter l'implémentation dans Figma/XD et le développement.

---

## 🎨 Boutons

### Button Primary

**Description** : Bouton principal pour les actions importantes et CTAs.

**Variantes** :
- Default : Fond couleur primaire (#2563EB), texte blanc
- Hover : Fond #1D4ED8
- Active : Fond #1E40AF
- Disabled : Opacité 0.5, cursor not-allowed
- Loading : Spinner + texte "Chargement..."

**Tailles** :
- Small : 32px de hauteur, padding 8px 16px
- Medium : 40px de hauteur, padding 12px 24px (par défaut)
- Large : 48px de hauteur, padding 16px 32px

**Spécifications** :
- Border-radius : 8px
- Font-weight : 600 (SemiBold)
- Transition : 200ms ease-in-out

**Usage** :
- CTAs principaux
- Actions importantes
- Soumission de formulaires

**Accessibilité** :
- Contraste : 4.5:1 minimum ✅
- Focus visible : Outline 2px couleur primaire
- Navigation clavier : Tab order

---

### Button Secondary

**Description** : Bouton secondaire pour les actions alternatives.

**Variantes** :
- Default : Fond transparent, bordure couleur primaire, texte couleur primaire
- Hover : Fond couleur primaire léger (10% opacity)
- Active : Fond couleur primaire (20% opacity)
- Disabled : Opacité 0.5

**Tailles** : Mêmes que Button Primary

**Spécifications** :
- Border : 1px solid couleur primaire
- Border-radius : 8px
- Font-weight : 600 (SemiBold)

**Usage** :
- Actions secondaires
- Alternatives aux actions principales
- Navigation

---

### Button Ghost

**Description** : Bouton discret pour les actions tertiaires.

**Variantes** :
- Default : Fond transparent, texte couleur primaire
- Hover : Fond gris léger (5% opacity)
- Active : Fond gris (10% opacity)

**Tailles** : Mêmes que Button Primary

**Spécifications** :
- Pas de bordure
- Border-radius : 8px
- Font-weight : 500 (Medium)

**Usage** :
- Actions tertiaires
- Liens boutons
- Actions discrètes

---

## 🃏 Cartes

### Feature Card

**Description** : Carte pour présenter les fonctionnalités.

**Structure** :
- Icône (24px ou 32px)
- Titre (H3)
- Description (corps de texte)
- Lien "En savoir plus" (optionnel)

**Spécifications** :
- Padding : 24px
- Border-radius : 12px
- Shadow : Élévation 1 (légère)
- Hover : Élévation 2 + scale 1.02
- Transition : 200ms ease-in-out

**Usage** :
- Liste des fonctionnalités
- Grille de features
- Section "Fonctionnalités"

---

### Persona Card

**Description** : Carte pour présenter les personas.

**Structure** :
- Image (ratio 16:9)
- Titre (H3)
- Description courte (2-3 lignes)
- CTA "Découvrir" (Button Secondary)

**Spécifications** :
- Padding : 0 (image pleine largeur)
- Border-radius : 12px
- Shadow : Élévation 1
- Hover : Élévation 2 + zoom image 1.05
- Transition : 200ms ease-in-out

**Usage** :
- Section "Pour qui ?"
- Navigation vers pages personas
- Grille de personas

---

### Testimonial Card

**Description** : Carte pour les témoignages clients.

**Structure** :
- Photo (cercle, 64px)
- Nom (bold)
- Entreprise (secondary text)
- Texte témoignage (corps)
- Étoiles (si applicable)

**Spécifications** :
- Padding : 24px
- Border-radius : 12px
- Background : Gris 50 (très léger)
- Shadow : Élévation 1

**Usage** :
- Section témoignages
- Page "Pourquoi ImmoTopia"
- Page personas

---

## 📝 Formulaires

### Input

**Description** : Champ de saisie texte.

**Variantes** :
- Default : Bordure gris 200, fond blanc
- Focus : Bordure couleur primaire, outline 2px
- Error : Bordure couleur erreur, message d'erreur sous le champ
- Disabled : Fond gris 100, texte gris 400, cursor not-allowed
- Success : Bordure couleur succès (optionnel)

**Spécifications** :
- Hauteur : 40px
- Padding : 12px 16px
- Border-radius : 8px
- Border : 1px solid
- Font-size : 16px (mobile : éviter zoom)
- Line-height : 1.5

**Labels** :
- Position : Au-dessus du champ
- Font-size : 14px
- Font-weight : 500 (Medium)
- Color : Gris 700

**Messages de validation** :
- Error : Texte couleur erreur, 12px, sous le champ
- Success : Texte couleur succès, 12px (optionnel)

**Usage** :
- Formulaires de contact
- Formulaire de demande de démo
- Recherche

---

### Select

**Description** : Liste déroulante.

**Spécifications** :
- Cohérent avec Input
- Dropdown : Shadow élévation 3
- Option hover : Fond gris 100
- Option selected : Fond couleur primaire léger

**Usage** :
- Sélection de persona
- Sélection de catégorie
- Filtres

---

### Textarea

**Description** : Zone de texte multiligne.

**Spécifications** :
- Cohérent avec Input
- Min-height : 100px
- Resize : Vertical uniquement
- Max-height : 300px (scroll si nécessaire)

**Usage** :
- Messages dans formulaires
- Commentaires
- Description longue

---

## 🧭 Navigation

### Menu Desktop

**Description** : Menu de navigation horizontal.

**Structure** :
- Logo à gauche
- Liens navigation au centre
- CTA à droite

**Spécifications** :
- Hauteur : 64px
- Sticky : Oui (position: sticky, top: 0)
- Background : Blanc avec shadow légère
- Z-index : 1030

**États** :
- Link default : Gris 700
- Link hover : Couleur primaire
- Link active : Couleur primaire + soulignement

**Usage** :
- Navigation principale
- Toutes les pages

---

### Menu Mobile

**Description** : Menu hamburger avec drawer.

**Structure** :
- Hamburger icon (24px)
- Drawer latéral (slide from right)
- Overlay sombre (backdrop)

**Spécifications** :
- Drawer width : 320px
- Animation : Slide 300ms ease-in-out
- Overlay : Noir 50% opacity
- Z-index : 1050 (drawer), 1040 (overlay)

**Usage** :
- Navigation mobile
- Breakpoint < 768px

---

### Footer

**Description** : Pied de page.

**Structure** :
- Colonnes : Liens, Contact, Social, Legal
- Copyright en bas

**Spécifications** :
- Background : Gris 900 (ou selon charte)
- Text color : Gris 400
- Links : Gris 300, hover blanc
- Padding : 48px 0 24px

**Usage** :
- Toutes les pages
- Bas de page

---

## 🎯 Icônes

**Bibliothèque** : Heroicons (Line style)

**Tailles standardisées** :
- 16px : Petites icônes inline
- 20px : Icônes dans boutons
- 24px : Icônes dans cartes
- 32px : Icônes grandes

**Couleur** :
- Default : Gris 600
- Hover : Couleur primaire
- Active : Couleur primaire

**Usage** :
- Navigation
- Features
- Actions
- Indicateurs

---

## 📐 Spacing System

**Échelle** : 4px base

- 4px (spacing-1)
- 8px (spacing-2)
- 12px (spacing-3)
- 16px (spacing-4)
- 20px (spacing-5)
- 24px (spacing-6)
- 32px (spacing-8)
- 40px (spacing-10)
- 48px (spacing-12)
- 64px (spacing-16)

**Usage** :
- Marges entre sections
- Paddings dans composants
- Espacements dans grilles

---

## 🎨 Shadows (Élévations)

**Élévation 1** (Cartes) :
- Shadow : 0 1px 2px 0 rgba(0, 0, 0, 0.05)

**Élévation 2** (Modals) :
- Shadow : 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)

**Élévation 3** (Dropdowns) :
- Shadow : 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)

---

## 🔄 États interactifs

### Hover
- Transition : 200ms ease-in-out
- Changements : Couleur, shadow, scale (léger)

### Active
- Feedback : Immédiat
- État pressé : Visible

### Disabled
- Opacité : 0.5
- Cursor : not-allowed

### Focus
- Outline : 2px couleur primaire
- Visible : Au clavier uniquement

---

## 📱 Responsive

### Breakpoints
- Mobile : 375px, 414px
- Tablette : 768px, 1024px
- Desktop : 1440px, 1920px

### Adaptations
- Typographie : Tailles réduites sur mobile
- Spacing : Réduit sur mobile
- Layout : Grille adaptée (12 colonnes → 4 colonnes)

---

## ✅ Checklist de création

Pour chaque composant dans Figma/XD :

- [ ] Composant créé avec toutes les variantes
- [ ] États interactifs définis (hover, active, disabled, focus)
- [ ] Spécifications documentées
- [ ] Responsive considéré
- [ ] Accessibilité validée
- [ ] Documenté dans cette bibliothèque

---

## 🔗 Références

- Design System : `../design-system.md`
- Variables CSS : `../exports/css/design-tokens.css`
- Guide de style : `../design-system.md` (section Guide de style)

---

**Dernière mise à jour** : 2025-12-23

