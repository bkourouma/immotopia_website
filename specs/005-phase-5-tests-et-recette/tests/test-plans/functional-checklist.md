# Checklist de tests fonctionnels - Phase 5

**Date de création** : 2025-12-23  
**Statut** : 📋 À exécuter

---

## 📋 Vue d'ensemble

Cette checklist couvre tous les aspects fonctionnels du site ImmoTopia à tester avant la mise en production.

**Objectif** : S'assurer que toutes les fonctionnalités fonctionnent correctement sur tous les navigateurs et toutes les tailles d'écran.

---

## 🔗 1. Tests de navigation

### Menu principal
- [ ] **Accueil** : Lien fonctionne et redirige vers `/`
- [ ] **Pour qui** : Lien fonctionne et redirige vers `/pour-qui`
- [ ] **La solution** : Lien fonctionne et redirige vers `/la-solution`
- [ ] **Fonctionnalités** : Lien fonctionne et redirige vers `/fonctionnalites`
- [ ] **Ressources** : Lien fonctionne et redirige vers `/ressources`
- [ ] **Tarifs** : Lien fonctionne et redirige vers `/tarifs`
- [ ] **Contact** : Lien fonctionne et redirige vers `/contact`
- [ ] **Logo** : Clic sur le logo redirige vers `/`
- [ ] **CTA "Demander une démo"** : Lien fonctionne et redirige vers formulaire de démo

### Footer
- [ ] Tous les liens du footer fonctionnent
- [ ] Liens vers réseaux sociaux fonctionnent (si présents)
- [ ] Liens légaux (Mentions légales, CGU, etc.) fonctionnent
- [ ] Liens de navigation secondaire fonctionnent

### CTA (Call-to-Action)
- [ ] **Page d'accueil** : Tous les CTA fonctionnent
- [ ] **Page "Pour qui"** : Tous les CTA fonctionnent
- [ ] **Page "La solution"** : Tous les CTA fonctionnent
- [ ] **Page "Fonctionnalités"** : Tous les CTA fonctionnent
- [ ] **Page "Ressources"** : Tous les CTA fonctionnent
- [ ] **Page "Tarifs"** : Tous les CTA fonctionnent
- [ ] **Page "Contact"** : Tous les CTA fonctionnent

### Liens internes
- [ ] Tous les liens internes entre pages fonctionnent
- [ ] Pas de liens cassés (404)
- [ ] Les ancres (#) fonctionnent correctement
- [ ] Les liens externes s'ouvrent dans un nouvel onglet (si configuré)

### Résultats
- **Liens testés** : ___ / ___
- **Liens cassés** : ___
- **Commentaires** : ___

---

## 📝 2. Tests de formulaires

### Formulaire de contact (`/contact`)
- [ ] **Champ Nom** : Validation (requis)
- [ ] **Champ Email** : Validation (format email)
- [ ] **Champ Téléphone** : Validation (format si requis)
- [ ] **Champ Message** : Validation (requis)
- [ ] **Bouton Envoyer** : Fonctionne
- [ ] **Message de succès** : S'affiche après envoi
- [ ] **Message d'erreur** : S'affiche en cas d'erreur
- [ ] **Données reçues** : Vérifier que les données arrivent (backend/CRM)
- [ ] **Protection spam** : Vérifier (reCAPTCHA, honeypot, etc.)

### Formulaire de demande de démo
- [ ] **Champ Nom** : Validation (requis)
- [ ] **Champ Prénom** : Validation (requis)
- [ ] **Champ Email** : Validation (format email, requis)
- [ ] **Champ Téléphone** : Validation (format si requis)
- [ ] **Champ Entreprise** : Validation (requis)
- [ ] **Champ Fonction** : Validation (si requis)
- [ ] **Bouton Envoyer** : Fonctionne
- [ ] **Message de succès** : S'affiche après envoi
- [ ] **Message d'erreur** : S'affiche en cas d'erreur
- [ ] **Données reçues** : Vérifier que les données arrivent (backend/CRM)
- [ ] **Protection spam** : Vérifier

### Résultats
- **Formulaires testés** : ___ / ___
- **Erreurs identifiées** : ___
- **Commentaires** : ___

---

## 📱 3. Tests responsive

### Mobile (320px, 375px, 414px)
- [ ] **Page d'accueil** : Affichage correct, tous les éléments visibles
- [ ] **Menu mobile** : Fonctionne (hamburger menu)
- [ ] **Navigation mobile** : Tous les liens accessibles
- [ ] **Formulaires** : Utilisables et lisibles
- [ ] **Images** : S'adaptent correctement
- [ ] **Textes** : Lisibles sans zoom
- [ ] **CTA** : Accessibles et cliquables
- [ ] **Footer** : Affichage correct

### Tablette (768px, 1024px)
- [ ] **Page d'accueil** : Affichage correct
- [ ] **Menu** : Fonctionne correctement
- [ ] **Navigation** : Tous les liens accessibles
- [ ] **Formulaires** : Utilisables
- [ ] **Images** : S'adaptent correctement
- [ ] **Textes** : Lisibles
- [ ] **CTA** : Accessibles

### Desktop (1280px, 1920px)
- [ ] **Page d'accueil** : Affichage correct
- [ ] **Menu** : Fonctionne correctement
- [ ] **Navigation** : Tous les liens accessibles
- [ ] **Formulaires** : Utilisables
- [ ] **Images** : Affichage optimal
- [ ] **Textes** : Lisibles
- [ ] **CTA** : Accessibles

### Résultats
- **Tailles testées** : ___ / ___
- **Problèmes identifiés** : ___
- **Commentaires** : ___

---

## 🌐 4. Tests cross-browser

### Chrome (dernières 2 versions)
- [ ] **Page d'accueil** : Affichage correct
- [ ] **Navigation** : Fonctionne
- [ ] **Formulaires** : Fonctionnent
- [ ] **Styles** : Affichage correct
- [ ] **JavaScript** : Fonctionne
- [ ] **Performance** : Acceptable

### Firefox (dernières 2 versions)
- [ ] **Page d'accueil** : Affichage correct
- [ ] **Navigation** : Fonctionne
- [ ] **Formulaires** : Fonctionnent
- [ ] **Styles** : Affichage correct
- [ ] **JavaScript** : Fonctionne
- [ ] **Performance** : Acceptable

### Safari (dernières 2 versions)
- [ ] **Page d'accueil** : Affichage correct
- [ ] **Navigation** : Fonctionne
- [ ] **Formulaires** : Fonctionnent
- [ ] **Styles** : Affichage correct
- [ ] **JavaScript** : Fonctionne
- [ ] **Performance** : Acceptable

### Edge (dernières 2 versions)
- [ ] **Page d'accueil** : Affichage correct
- [ ] **Navigation** : Fonctionne
- [ ] **Formulaires** : Fonctionnent
- [ ] **Styles** : Affichage correct
- [ ] **JavaScript** : Fonctionne
- [ ] **Performance** : Acceptable

### Résultats
- **Navigateurs testés** : ___ / ___
- **Problèmes identifiés** : ___
- **Commentaires** : ___

---

## ⚡ 5. Tests de performance (Lighthouse)

### Page d'accueil (`/`)
- [ ] **Performance** : Score ≥ 90
- [ ] **Accessibility** : Score ≥ 90
- [ ] **Best Practices** : Score ≥ 90
- [ ] **SEO** : Score ≥ 90
- [ ] **First Contentful Paint (FCP)** : < 1.8s
- [ ] **Largest Contentful Paint (LCP)** : < 2.5s
- [ ] **Time to Interactive (TTI)** : < 3.8s
- [ ] **Total Blocking Time (TBT)** : < 200ms
- [ ] **Cumulative Layout Shift (CLS)** : < 0.1

### Pages principales
- [ ] **Pour qui** : Scores ≥ 90
- [ ] **La solution** : Scores ≥ 90
- [ ] **Fonctionnalités** : Scores ≥ 90
- [ ] **Ressources** : Scores ≥ 90
- [ ] **Tarifs** : Scores ≥ 90
- [ ] **Contact** : Scores ≥ 90

### Résultats
- **Pages testées** : ___ / ___
- **Scores moyens** :
  - Performance : ___
  - Accessibility : ___
  - Best Practices : ___
  - SEO : ___
- **Commentaires** : ___

---

## ♿ 6. Tests d'accessibilité (WCAG 2.1 niveau AA)

### Navigation au clavier
- [ ] **Tab** : Navigation fonctionne
- [ ] **Enter** : Activation des liens/boutons
- [ ] **Escape** : Fermeture des modales/menus
- [ ] **Flèches** : Navigation dans les menus déroulants
- [ ] **Focus visible** : Tous les éléments focusables ont un focus visible

### Contraste des couleurs
- [ ] **Texte normal** : Ratio ≥ 4.5:1
- [ ] **Texte large** : Ratio ≥ 3:1
- [ ] **Liens** : Contraste suffisant
- [ ] **Boutons** : Contraste suffisant

### Textes alternatifs
- [ ] **Toutes les images** : Ont un attribut `alt`
- [ ] **Images décoratives** : `alt=""` vide
- [ ] **Images informatives** : `alt` descriptif

### Structure sémantique
- [ ] **Balises sémantiques** : header, nav, main, footer utilisés
- [ ] **Hiérarchie des titres** : h1, h2, h3, etc. correctement utilisés
- [ ] **Landmarks ARIA** : Si nécessaire, correctement utilisés

### Lecteurs d'écran
- [ ] **Navigation** : Compréhensible avec lecteur d'écran
- [ ] **Formulaires** : Labels associés correctement
- [ ] **Messages d'erreur** : Annoncés par le lecteur d'écran

### Résultats
- **Tests passés** : ___ / ___
- **Problèmes identifiés** : ___
- **Commentaires** : ___

---

## 🔍 7. Tests SEO

### Balises meta
- [ ] **Title** : Présent et unique sur chaque page
- [ ] **Description** : Présente et unique sur chaque page
- [ ] **Keywords** : Présents (si utilisés)
- [ ] **Open Graph** : Tags présents (og:title, og:description, og:image)
- [ ] **Twitter Cards** : Tags présents (si utilisés)

### Structured data (Schema.org)
- [ ] **Organization** : Schema.org présent
- [ ] **WebSite** : Schema.org présent
- [ ] **BreadcrumbList** : Si applicable
- [ ] **Article** : Si applicable
- [ ] **Validation** : Données structurées valides (Google Rich Results Test)

### Sitemap
- [ ] **sitemap.xml** : Généré et accessible
- [ ] **Toutes les pages** : Présentes dans le sitemap
- [ ] **Format** : XML valide
- [ ] **Soumission** : Soumis à Google Search Console (si applicable)

### robots.txt
- [ ] **Fichier présent** : Accessible à `/robots.txt`
- [ ] **Format valide** : Syntaxe correcte
- [ ] **Sitemap référencé** : Sitemap déclaré dans robots.txt

### Résultats
- **Tests passés** : ___ / ___
- **Problèmes identifiés** : ___
- **Commentaires** : ___

---

## 📊 8. Tests analytics

### Événements trackés
- [ ] **Clics CTA** : Événements trackés dans Google Analytics
- [ ] **Soumissions formulaires** : Événements trackés
- [ ] **Pages vues** : Trackées correctement
- [ ] **Événements personnalisés** : Fonctionnent si configurés

### Vérification Google Analytics
- [ ] **Accès GA4** : Configuré et accessible
- [ ] **Événements visibles** : Apparaissent dans GA4 en temps réel
- [ ] **Paramètres corrects** : Measurement ID correct

### Résultats
- **Événements testés** : ___ / ___
- **Problèmes identifiés** : ___
- **Commentaires** : ___

---

## ✅ Résumé global

### Statistiques
- **Total de tests** : ___
- **Tests passés** : ___
- **Tests échoués** : ___
- **Taux de réussite** : ___%

### Bugs critiques identifiés
1. ___
2. ___
3. ___

### Bugs mineurs identifiés
1. ___
2. ___
3. ___

### Actions à prendre
- [ ] Corriger les bugs critiques
- [ ] Corriger les bugs mineurs prioritaires
- [ ] Retester après corrections

---

## 📝 Notes

_Date de dernière exécution_ : ___  
_Exécuté par_ : ___  
_Environnement_ : Staging / Production

