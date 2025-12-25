# Décisions de Design - Phase 2

**Date de création** : 2025-12-23  
**Statut** : 📝 En cours

---

## 🛠️ Outil de design

### Comparaison Figma vs Adobe XD

#### Figma
- **Collaboration** : ⭐⭐⭐⭐⭐ Excellente - Collaboration en temps réel, commentaires intégrés
- **Handoff** : ⭐⭐⭐⭐⭐ Excellent - Spécifications automatiques, export CSS/React
- **Coût** : Gratuit pour usage individuel, $12-15/mois par éditeur pour équipes
- **Préférences équipe** : Standard de l'industrie, très populaire
- **Avantages** : 
  - Collaboration en temps réel
  - Handoff développeur excellent (spécifications automatiques)
  - Plugins et intégrations nombreux
  - Version web + desktop
  - Design system intégré (Components, Variants)

#### Adobe XD
- **Collaboration** : ⭐⭐⭐⭐ Bonne - Partage et commentaires disponibles
- **Handoff** : ⭐⭐⭐⭐ Bonne - Spécifications disponibles mais moins automatiques
- **Coût** : $9.99/mois (Creative Cloud) ou inclus dans suite complète
- **Préférences équipe** : Moins populaire que Figma, mais intégré Adobe
- **Avantages** : 
  - Intégration avec suite Adobe (Photoshop, Illustrator)
  - Prototypage avancé
  - Design system disponible

### Décision

- [x] **Figma** (recommandé pour collaboration et handoff)
- [ ] **Adobe XD**

**Justification** : 
- Collaboration en temps réel supérieure
- Handoff développeur excellent avec spécifications automatiques
- Standard de l'industrie, plus facile à recruter des designers
- Plugins et intégrations nombreux
- Version web accessible partout
- Design system intégré puissant

**Date de décision** : 2025-12-23

---

## 🎨 Style d'icônes

### Options

- [ ] **Line** (style contour)
- [ ] **Solid** (style rempli)

### Décision

- [x] **Line** (recommandé pour un look moderne et professionnel)
- [ ] **Solid**

**Justification** : 
- Style Line plus moderne et épuré
- Meilleure lisibilité à petite taille
- Cohérent avec les tendances design actuelles
- Plus facile à intégrer dans différents contextes

**Bibliothèque choisie** : **Heroicons** (recommandé)
- Style Line disponible
- Large collection d'icônes
- Optimisé pour le web
- Open source (MIT)
- Disponible en SVG et React components

**Date de décision** : 2025-12-23

---

## 🎬 Animations

### Niveau de complexité

- [ ] **Minimal** : Transitions simples uniquement
- [ ] **Modéré** : Transitions + micro-interactions
- [ ] **Avancé** : Animations complexes

### Décision

- [ ] **Minimal**
- [x] **Modéré** (recommandé pour équilibrer engagement et performance)
- [ ] **Avancé**

**Justification** : 
- Transitions simples + micro-interactions améliorent l'expérience
- Équilibre entre engagement utilisateur et performance
- Pas de surcharge visuelle
- Accessible (respecte prefers-reduced-motion)

**Durées** : 
- Transitions simples : 200ms
- Micro-interactions : 150-300ms
- Animations complexes : 300-500ms max
- Easing : ease-in-out pour la plupart

**Date de décision** : 2025-12-23

---

## 📚 Design System

### Format de documentation

- [ ] **Storybook** (documentation interactive)
- [ ] **Documentation simple** (Markdown/PDF)

### Décision

- [ ] **Storybook** (pour projet avec développement React)
- [x] **Documentation simple** (recommandé pour Phase 2 - Design uniquement)

**Justification** : 
- Phase 2 se concentre sur le design, pas le développement
- Documentation Markdown/PDF suffisante pour le handoff
- Storybook sera utile en Phase 3 (Développement)
- Plus simple à maintenir pour l'équipe design

**Format** : 
- Markdown pour la documentation (`design-system.md`)
- PDF exportable pour référence
- Fichiers source Figma organisés

**Date de décision** : 2025-12-23

---

## 📝 Autres décisions

### Décision 1
- **Question** : [Question]
- **Décision** : [Décision]
- **Justification** : [Justification]
- **Date** : [Date]

### Décision 2
- **Question** : [Question]
- **Décision** : [Décision]
- **Justification** : [Justification]
- **Date** : [Date]

---

## 🎨 Valeurs par défaut utilisées

### Couleurs
- **Primaire** : `#2563EB` (Blue 600) - Professionnel, moderne
- **Secondaire** : `#10B981` (Emerald 500) - Accent, succès
- **Note** : Valeurs par défaut. À remplacer par couleurs de marque ImmoTopia.

### Typographie
- **Famille** : Inter (Google Fonts)
- **Note** : Valeur par défaut. À remplacer par police de marque ImmoTopia.

**Ces valeurs peuvent être modifiées facilement une fois les assets de marque disponibles.**

---

## 🔄 Historique des décisions

| Date | Décision | Justification |
|------|----------|---------------|
| 2025-12-23 | Création du document | Initialisation Phase 0 |
| 2025-12-23 | Valeurs par défaut définies | Finalisation Phase 0 avec valeurs professionnelles |

