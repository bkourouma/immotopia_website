# Guide de création de la palette de couleurs

**Date** : 2025-12-23

---

## Étapes pour créer la palette

### 1. Couleur primaire (marque ImmoTopia)

**À faire** :
- [ ] Récupérer le logo ImmoTopia
- [ ] Identifier la couleur principale du logo
- [ ] Extraire le code hex (#XXXXXX)
- [ ] Valider avec la marque

**Recommandations** :
- Couleur professionnelle (bleu foncé, vert foncé, ou couleur de marque)
- Contraste suffisant pour WCAG 2.1 AA
- Cohérent avec l'identité ImmoTopia

**Variantes à créer** :
- Hover : Légèrement plus foncé ou plus clair
- Active : Version plus foncée
- Disabled : Opacité 0.5 + gris

---

### 2. Couleur secondaire

**À faire** :
- [ ] Choisir une couleur complémentaire ou harmonieuse
- [ ] Extraire le code hex (#XXXXXX)
- [ ] Valider avec la marque

**Recommandations** :
- Complémentaire à la couleur primaire
- Utilisée pour éléments secondaires, badges
- Contraste suffisant

---

### 3. Palette de gris

**Structure recommandée** :

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

**À faire** :
- [ ] Valider les codes avec la marque (si palette existante)
- [ ] Ajuster si nécessaire
- [ ] Tester les contrastes WCAG 2.1 AA

---

### 4. Couleurs fonctionnelles

#### Succès
- **Couleur recommandée** : `#10B981` (vert moderne)
- **Utilisation** : Messages de succès, confirmations
- **Contraste** : À valider avec fond

#### Attention
- **Couleur recommandée** : `#F59E0B` (orange moderne)
- **Utilisation** : Alertes, notifications importantes
- **Contraste** : À valider avec fond

#### Erreur
- **Couleur recommandée** : `#EF4444` (rouge)
- **Utilisation** : Messages d'erreur, validations
- **Contraste** : À valider avec fond

---

## Validation WCAG 2.1 AA

### Outils de test

1. **WebAIM Contrast Checker** : https://webaim.org/resources/contrastchecker/
2. **Contrast Ratio** : https://contrast-ratio.com/
3. **Accessible Colors** : https://accessible-colors.com/

### Critères

- **Texte normal** : Ratio ≥ 4.5:1
- **Texte large** (18px+ ou 14px+ bold) : Ratio ≥ 3:1
- **Éléments interactifs** : Ratio ≥ 3:1

### Checklist

- [ ] Couleur primaire : Contraste suffisant pour textes
- [ ] Couleur secondaire : Contraste suffisant
- [ ] Gris 400-500 : Contraste ≥ 4.5:1 sur fond clair
- [ ] Gris 600-700 : Contraste ≥ 4.5:1 sur fond clair
- [ ] Couleurs fonctionnelles : Contraste suffisant
- [ ] Tous les contrastes validés avec outils

---

## Documentation

Une fois la palette créée, documenter dans :
- `design-system.md` - Section couleurs
- Variables CSS dans `design/exports/css/`
- Fichier de palette dans Figma/XD

