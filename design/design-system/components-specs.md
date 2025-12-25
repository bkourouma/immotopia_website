# Spécifications détaillées des composants UI

**Date** : 2025-12-23  
**Pour** : Création dans Figma/XD

---

## 🎨 Boutons

### Button Primary - Spécifications

**Default State** :
- Background : `#2563EB`
- Text color : `#FFFFFF`
- Border : None
- Border-radius : `8px`
- Padding : `12px 24px` (Medium)
- Font-size : `16px`
- Font-weight : `600` (SemiBold)
- Height : `40px` (Medium)
- Shadow : None

**Hover State** :
- Background : `#1D4ED8`
- Transform : `scale(1.02)` (optionnel)
- Transition : `200ms ease-in-out`

**Active State** :
- Background : `#1E40AF`
- Transform : `scale(0.98)`

**Disabled State** :
- Background : `rgba(147, 197, 253, 0.5)`
- Text color : `rgba(255, 255, 255, 0.7)`
- Cursor : `not-allowed`
- Opacity : `0.5`

**Loading State** :
- Spinner : 16px, couleur blanc
- Text : "Chargement..." ou icône spinner uniquement

**Tailles** :
- Small : Height `32px`, Padding `8px 16px`, Font-size `14px`
- Medium : Height `40px`, Padding `12px 24px`, Font-size `16px`
- Large : Height `48px`, Padding `16px 32px`, Font-size `18px`

---

### Button Secondary - Spécifications

**Default State** :
- Background : Transparent
- Text color : `#2563EB`
- Border : `1px solid #2563EB`
- Border-radius : `8px`
- Padding : `12px 24px` (Medium)
- Font-size : `16px`
- Font-weight : `600` (SemiBold)
- Height : `40px` (Medium)

**Hover State** :
- Background : `rgba(37, 99, 235, 0.1)` (10% opacity)
- Border : `1px solid #1D4ED8`
- Text color : `#1D4ED8`

**Active State** :
- Background : `rgba(37, 99, 235, 0.2)` (20% opacity)

**Disabled State** :
- Opacity : `0.5`
- Cursor : `not-allowed`

---

### Button Ghost - Spécifications

**Default State** :
- Background : Transparent
- Text color : `#2563EB`
- Border : None
- Border-radius : `8px`
- Padding : `12px 24px` (Medium)
- Font-size : `16px`
- Font-weight : `500` (Medium)
- Height : `40px` (Medium)

**Hover State** :
- Background : `rgba(0, 0, 0, 0.05)` (5% opacity)

**Active State** :
- Background : `rgba(0, 0, 0, 0.1)` (10% opacity)

---

## 🃏 Cartes

### Feature Card - Spécifications

**Dimensions** :
- Width : Flexible (selon grille)
- Min-height : `200px`
- Padding : `24px`

**Structure** :
- Icône : `32px`, couleur primaire, margin-bottom `16px`
- Titre : H3, margin-bottom `8px`
- Description : Body text, margin-bottom `16px`
- Lien : "En savoir plus" (optionnel), couleur primaire

**Style** :
- Background : `#FFFFFF`
- Border-radius : `12px`
- Shadow : Élévation 1
- Border : `1px solid #E5E5E5` (optionnel)

**Hover State** :
- Shadow : Élévation 2
- Transform : `scale(1.02)`
- Transition : `200ms ease-in-out`

---

### Persona Card - Spécifications

**Dimensions** :
- Width : Flexible (selon grille)
- Height : `400px` (approximatif)

**Structure** :
- Image : Ratio 16:9, border-radius `12px 12px 0 0`
- Content : Padding `24px`
  - Titre : H3, margin-bottom `8px`
  - Description : Body text (2-3 lignes), margin-bottom `16px`
  - CTA : Button Secondary Small

**Style** :
- Background : `#FFFFFF`
- Border-radius : `12px`
- Shadow : Élévation 1
- Overflow : Hidden

**Hover State** :
- Shadow : Élévation 2
- Image : Transform `scale(1.05)`
- Transition : `200ms ease-in-out`

---

### Testimonial Card - Spécifications

**Dimensions** :
- Width : Flexible (selon grille)
- Min-height : `200px`
- Padding : `24px`

**Structure** :
- Header : Display flex, margin-bottom `16px`
  - Photo : `64px` circle, margin-right `16px`
  - Info :
    - Nom : Bold, `16px`
    - Entreprise : Secondary text, `14px`
- Texte : Body text, margin-bottom `8px`
- Étoiles : `16px` (si applicable)

**Style** :
- Background : `#F7F7F7`
- Border-radius : `12px`
- Shadow : Élévation 1

---

## 📝 Formulaires

### Input - Spécifications

**Default State** :
- Height : `40px`
- Padding : `12px 16px`
- Border : `1px solid #E5E5E5`
- Border-radius : `8px`
- Background : `#FFFFFF`
- Font-size : `16px`
- Font-weight : `400` (Regular)
- Color : `#171717`

**Focus State** :
- Border : `2px solid #2563EB`
- Outline : `2px solid rgba(37, 99, 235, 0.2)` (offset 2px)
- Background : `#FFFFFF`

**Error State** :
- Border : `2px solid #EF4444`
- Text color : `#171717`
- Message error : `#EF4444`, `12px`, sous le champ

**Disabled State** :
- Background : `#F7F7F7`
- Border : `1px solid #D4D4D4`
- Text color : `#A3A3A3`
- Cursor : `not-allowed`

**Label** :
- Position : Au-dessus
- Font-size : `14px`
- Font-weight : `500` (Medium)
- Color : `#404040`
- Margin-bottom : `8px`

---

### Select - Spécifications

**Cohérent avec Input** :
- Mêmes dimensions et styles
- Dropdown : Shadow élévation 3
- Option hover : Background `#F7F7F7`
- Option selected : Background `rgba(37, 99, 235, 0.1)`

---

### Textarea - Spécifications

**Cohérent avec Input** :
- Min-height : `100px`
- Max-height : `300px` (scroll si nécessaire)
- Resize : Vertical uniquement
- Padding : `12px 16px`

---

## 🧭 Navigation

### Menu Desktop - Spécifications

**Dimensions** :
- Height : `64px`
- Width : 100%
- Padding : `0 80px` (desktop) / `0 24px` (mobile)

**Structure** :
- Logo : Left, `40px` height
- Links : Center, display flex, gap `32px`
- CTA : Right, Button Primary Medium

**Style** :
- Background : `#FFFFFF`
- Shadow : Élévation 1 (sticky)
- Position : Sticky, top `0`
- Z-index : `1030`

**Link States** :
- Default : `#404040`, `16px`, `500` (Medium)
- Hover : `#2563EB`
- Active : `#2563EB` + border-bottom `2px solid`

---

### Menu Mobile - Spécifications

**Hamburger Icon** :
- Size : `24px`
- Color : `#404040`
- Position : Right, `16px` from edge

**Drawer** :
- Width : `320px`
- Background : `#FFFFFF`
- Position : Fixed, right `0`, top `0`
- Height : 100vh
- Padding : `24px`
- Shadow : Élévation 3
- Z-index : `1050`

**Overlay** :
- Background : `rgba(0, 0, 0, 0.5)`
- Position : Fixed, full screen
- Z-index : `1040`

**Animation** :
- Slide from right : `300ms ease-in-out`

---

### Footer - Spécifications

**Structure** :
- Columns : 4 colonnes (desktop) / 1 colonne (mobile)
- Padding : `48px 80px 24px` (desktop) / `48px 24px 24px` (mobile)

**Style** :
- Background : `#171717`
- Text color : `#A3A3A3`
- Links color : `#D4D4D4`
- Links hover : `#FFFFFF`

**Content** :
- Links navigation
- Contact info
- Social media icons
- Legal links
- Copyright : `12px`, margin-top `24px`

---

## 📐 Spacing dans composants

### Boutons
- Padding horizontal : `24px` (Medium)
- Gap entre icône et texte : `8px` (si icône)

### Cartes
- Padding : `24px`
- Gap entre éléments : `16px`

### Formulaires
- Gap entre label et input : `8px`
- Gap entre champs : `16px`
- Gap entre input et message error : `4px`

### Navigation
- Gap entre liens : `32px` (desktop)
- Gap entre éléments : `24px` (mobile)

---

## 🎨 Couleurs par état

### Text colors
- Primary : `#171717`
- Secondary : `#525252`
- Tertiary : `#737373`
- Inverse : `#FFFFFF`
- Link : `#2563EB`
- Link hover : `#1D4ED8`

### Background colors
- Primary : `#FFFFFF`
- Secondary : `#F7F7F7`
- Tertiary : `#E5E5E5`

---

## ✅ Checklist de création Figma

Pour chaque composant :

- [ ] Composant créé avec Auto Layout
- [ ] Variantes créées (états, tailles)
- [ ] Styles de texte appliqués
- [ ] Styles de couleurs appliqués
- [ ] Spacing respecté
- [ ] États interactifs définis
- [ ] Responsive considéré
- [ ] Documenté dans component-library.md

---

**Dernière mise à jour** : 2025-12-23

