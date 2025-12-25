# Guide de sélection de la typographie

**Date** : 2025-12-23

---

## Étapes pour choisir les polices

### 1. Vérifier la marque existante

**À faire** :
- [ ] Récupérer les polices utilisées dans la marque ImmoTopia
- [ ] Vérifier les licences
- [ ] Vérifier la disponibilité web (Google Fonts, etc.)

**Si polices existantes** :
- Utiliser les polices de la marque
- Adapter si nécessaire pour le web

**Si pas de polices définies** :
- Choisir parmi les recommandations ci-dessous

---

### 2. Recommandations Google Fonts

#### Pour les titres (moderne, lisible, Bold)

**Option 1 : Inter** ⭐ Recommandé
- **Style** : Sans-serif moderne
- **Poids disponibles** : 100-900
- **Avantages** : 
  - Très lisible à toutes les tailles
  - Excellent rendu sur écran
  - Supporte Bold/SemiBold
  - Très populaire et testé

**Option 2 : Poppins**
- **Style** : Géométrique, moderne
- **Poids disponibles** : 100-900
- **Avantages** :
  - Look moderne et professionnel
  - Bon contraste
  - Supporte Bold/SemiBold

**Option 3 : Open Sans**
- **Style** : Classique, très lisible
- **Poids disponibles** : 300-800
- **Avantages** :
  - Très lisible
  - Polyvalent
  - Supporte Bold

#### Pour le corps (sans-serif, Regular/Medium)

**Recommandation : Utiliser la même famille que les titres**

**Option 1 : Inter** ⭐ Recommandé
- **Poids** : Regular (400), Medium (500)
- **Avantages** :
  - Cohérence avec les titres
  - Excellent pour le corps
  - Très lisible à 16px

**Option 2 : Open Sans**
- **Poids** : Regular (400), Medium (500)
- **Avantages** :
  - Classique et éprouvé
  - Très lisible

---

### 3. Échelle typographique

**Base : 16px**

**Échelle modulaire recommandée** :
- H1 : 48px (desktop) / 32px (mobile) - Scale 3.0
- H2 : 36px (desktop) / 28px (mobile) - Scale 2.25
- H3 : 24px (desktop) / 20px (mobile) - Scale 1.5
- H4 : 20px (desktop) / 18px (mobile) - Scale 1.25
- Paragraphe : 16px - Scale 1.0
- Petit texte : 14px - Scale 0.875
- Légende : 12px - Scale 0.75

**Line-heights** :
- Titres : 1.2
- Corps : 1.5
- Petit texte : 1.4

---

### 4. Poids de police

**Titres** :
- H1, H2 : Bold (700)
- H3, H4 : SemiBold (600)

**Corps** :
- Paragraphe : Regular (400)
- Emphase : Medium (500)
- Petit texte : Regular (400)

---

## Validation

### Checklist

- [ ] Polices choisies (titres + corps)
- [ ] Licences vérifiées
- [ ] Disponibilité web confirmée
- [ ] Échelle typographique définie
- [ ] Line-heights définis
- [ ] Poids de police définis
- [ ] Test de lisibilité effectué
- [ ] Cohérence avec la marque validée

### Test de lisibilité

- [ ] Lisible à 16px sur mobile
- [ ] Lisible à 16px sur desktop
- [ ] Bon rendu sur différents écrans
- [ ] Supporte les caractères spéciaux (accents français)

---

## Documentation

Une fois la typographie choisie, documenter dans :
- `design-system.md` - Section typographie
- Variables CSS dans `design/exports/css/`
- Styles de texte dans Figma/XD

