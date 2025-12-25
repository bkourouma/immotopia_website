# Guide de collecte des assets

**Date** : 2025-12-23

---

## 📋 Checklist de collecte

### Charte graphique

- [ ] **Logo ImmoTopia**
  - Format SVG (vectoriel, scalable)
  - Format PNG (haute résolution, fond transparent)
  - Variantes : clair, sombre, couleur
  - Emplacement : `design/assets/logo/`

- [ ] **Couleurs de marque**
  - Codes hex de toutes les couleurs
  - Nom de chaque couleur
  - Utilisation prévue
  - Emplacement : Documenter dans `assets-collected.md`

- [ ] **Typographies**
  - Fichiers de polices (.ttf, .otf, .woff2)
  - Noms des polices
  - Licences
  - Emplacement : `design/assets/fonts/`

- [ ] **Éléments de marque**
  - Icônes existantes
  - Illustrations existantes
  - Patterns/textures
  - Emplacement : `design/assets/brand-elements/`

---

### Assets visuels

- [ ] **Screenshots de la plateforme SaaS** (6-8 minimum)
  - Dashboard principal
  - Gestion des biens
  - CRM immobilier
  - Portail d'annonces
  - Gestion locative
  - Syndic de copropriété
  - Mobile Money
  - IA/Automatisation
  - Emplacement : `design/assets/screenshots/`
  - Format : PNG haute résolution
  - Taille recommandée : 1920x1080px minimum

- [ ] **Illustrations existantes**
  - Illustrations fonctionnalités
  - Illustrations personas
  - Autres illustrations
  - Emplacement : `design/assets/illustrations/`
  - Format : SVG (préféré) ou PNG haute résolution

- [ ] **Photos professionnelles**
  - Photos équipe (si disponibles)
  - Photos bureaux (si disponibles)
  - Photos clients/utilisateurs (si disponibles, avec autorisations)
  - Emplacement : `design/assets/photos/`
  - Format : JPG haute résolution
  - Droits d'utilisation : À vérifier

---

### Contenus

- [ ] **Textes marketing**
  - Tous les textes validés de la Phase 1
  - Format : Markdown ou Word
  - Emplacement : `design/contents/textes/`
  - ✅ Déjà fait : Extraits du code dans `design/contents/`

- [ ] **Messages clés**
  - Messages par persona
  - Emplacement : `design/contents/personas.md`
  - ✅ Déjà fait

- [ ] **Métriques**
  - Chiffres clés
  - Emplacement : `design/contents/`
  - ✅ Déjà fait

---

## 📝 Instructions de collecte

### Pour le logo

1. Demander au responsable marketing/branding
2. Vérifier les formats disponibles
3. Demander les variantes (clair, sombre, couleur)
4. Vérifier les droits d'utilisation

### Pour les couleurs

1. Extraire depuis le logo (si possible)
2. Demander la charte graphique officielle
3. Vérifier les codes hex
4. Documenter dans `assets-collected.md`

### Pour les screenshots

1. Accéder à la plateforme SaaS
2. Prendre des screenshots de chaque module principal
3. Utiliser un outil de capture (ex: Snagit, Lightshot)
4. Capturer en haute résolution
5. Nommer clairement : `screenshot-[module]-[date].png`

### Pour les illustrations

1. Vérifier si des illustrations existent
2. Demander les fichiers source (AI, Sketch, Figma)
3. Exporter en SVG si possible
4. Sinon, PNG haute résolution

---

## ✅ Validation des assets

### Avant utilisation

- [ ] Tous les assets collectés
- [ ] Formats corrects
- [ ] Résolutions suffisantes
- [ ] Droits d'utilisation vérifiés
- [ ] Organisés dans les bons dossiers
- [ ] Documentés dans `assets-collected.md`

### Qualité requise

- **Logo** : SVG ou PNG 500x500px minimum
- **Screenshots** : 1920x1080px minimum
- **Illustrations** : SVG (préféré) ou PNG 2000x2000px minimum
- **Photos** : JPG 2000x1500px minimum

---

## 🔗 Contacts utiles

- **Marketing/Branding** : [À compléter]
- **Développement** : [À compléter]
- **Design** : [À compléter]

---

## 📦 Organisation finale

```
design/assets/
├── logo/
│   ├── logo.svg
│   ├── logo.png
│   └── logo-variants/
├── screenshots/
│   ├── dashboard.png
│   ├── biens.png
│   └── ...
├── illustrations/
│   └── ...
├── photos/
│   └── ...
└── fonts/
    └── ...
```

