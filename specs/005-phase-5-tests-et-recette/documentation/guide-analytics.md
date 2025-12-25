# Guide Analytics - ImmoTopia

**Version** : 1.0  
**Date** : 2025-12-23  
**Pour** : Clients ImmoTopia

---

## 📋 Table des matières

1. [Introduction](#introduction)
2. [Accès à Google Analytics](#accès-à-google-analytics)
3. [Métriques principales](#métriques-principales)
4. [Rapports personnalisés](#rapports-personnalisés)
5. [Événements trackés](#événements-trackés)
6. [FAQ](#faq)

---

## 🎯 Introduction

Ce guide vous explique comment utiliser Google Analytics pour analyser les performances de votre site ImmoTopia.

### Qu'est-ce que Google Analytics ?

Google Analytics est un outil gratuit qui vous permet de :

- 📊 Voir combien de personnes visitent votre site
- 📊 Comprendre d'où viennent vos visiteurs
- 📊 Analyser le comportement des visiteurs
- 📊 Mesurer l'efficacité de vos pages
- 📊 Suivre les conversions (demandes de démo)

---

## 🔐 Accès à Google Analytics

### Se connecter

1. Aller sur https://analytics.google.com
2. Se connecter avec votre compte Google
3. Sélectionner la propriété "ImmoTopia"

### Compte et propriété

- **Compte** : ImmoTopia
- **Propriété** : Site ImmoTopia
- **Vue** : Toutes les données

### Accès partagé

Si vous n'avez pas accès, contactez l'administrateur pour obtenir les permissions.

---

## 📊 Métriques principales

### Vue d'ensemble

Le tableau de bord principal affiche :

#### Utilisateurs
- **Utilisateurs** : Nombre de visiteurs uniques
- **Nouveaux utilisateurs** : Première visite
- **Utilisateurs récurrents** : Visites multiples

#### Sessions
- **Sessions** : Nombre de visites
- **Sessions par utilisateur** : Moyenne
- **Durée moyenne** : Temps passé sur le site

#### Pages vues
- **Pages vues** : Nombre total de pages consultées
- **Pages par session** : Moyenne
- **Durée moyenne** : Temps par page

### Acquisition

Comprendre d'où viennent vos visiteurs :

#### Canaux
- **Organique** : Recherche Google
- **Direct** : Saisie directe de l'URL
- **Référence** : Autres sites
- **Social** : Réseaux sociaux
- **Email** : Campagnes email
- **Publicité** : Campagnes payantes

#### Sources principales
- Google (recherche organique)
- Réseaux sociaux (LinkedIn, Facebook, etc.)
- Sites référents
- Campagnes email

### Comportement

Analyser le comportement des visiteurs :

#### Pages les plus visitées
1. Page d'accueil
2. Page "Pour qui"
3. Page "La solution"
4. Page "Fonctionnalités"
5. Page "Tarifs"
6. Page "Contact"

#### Parcours utilisateur
- Pages d'entrée : Par où les visiteurs arrivent
- Pages de sortie : Par où les visiteurs partent
- Parcours : Chemin suivi sur le site

#### Taux de rebond
- **Taux de rebond** : % de visiteurs qui quittent après une seule page
- **Objectif** : < 60%

### Conversions

Mesurer les objectifs atteints :

#### Demandes de démo
- **Nombre de demandes** : Total
- **Taux de conversion** : % de visiteurs qui demandent une démo
- **Objectif** : ≥ 5%

#### Formulaires de contact
- **Nombre de contacts** : Total
- **Taux de conversion** : % de visiteurs qui contactent

---

## 📈 Rapports personnalisés

### Créer un rapport personnalisé

1. Aller dans "Personnalisation" > "Rapports personnalisés"
2. Cliquer sur "Nouveau rapport personnalisé"
3. Définir les métriques à inclure
4. Définir les dimensions (période, source, etc.)
5. Enregistrer le rapport

### Rapports recommandés

#### Rapport "Performance des pages"
- Pages vues
- Temps moyen sur la page
- Taux de rebond
- Taux de sortie

#### Rapport "Sources de trafic"
- Canaux d'acquisition
- Sources principales
- Campagnes

#### Rapport "Conversions"
- Demandes de démo
- Formulaires de contact
- Taux de conversion par source

### Programmer des rapports

1. Ouvrir un rapport
2. Cliquer sur "Programmer l'email"
3. Définir la fréquence (quotidien, hebdomadaire, mensuel)
4. Définir les destinataires
5. Activer

---

## 🎯 Événements trackés

### Événements configurés

Votre site tracke automatiquement les événements suivants :

#### Clics CTA
- **Événement** : `cta_click`
- **Où** : Tous les boutons "Demander une démo"
- **Données** : Page d'origine, position du bouton

#### Soumissions de formulaires
- **Événement** : `form_submit`
- **Type** : `contact` ou `demo_request`
- **Données** : Page d'origine, formulaire utilisé

#### Pages vues
- **Événement** : `page_view`
- **Données** : URL, titre de la page, temps passé

### Voir les événements

1. Aller dans "Événements" > "Tous les événements"
2. Voir la liste des événements
3. Cliquer sur un événement pour voir les détails

### Événements en temps réel

1. Aller dans "Temps réel" > "Vue d'ensemble"
2. Voir les événements qui se produisent maintenant
3. Tester en soumettant un formulaire

---

## 📊 Interprétation des métriques

### Taux de conversion

**Formule** : (Conversions / Sessions) × 100

- **Objectif** : ≥ 5%
- **Bon** : 3-5%
- **Excellent** : > 5%

### Taux de rebond

**Formule** : (Sessions à une page / Sessions totales) × 100

- **Objectif** : < 60%
- **Bon** : 40-60%
- **Excellent** : < 40%

### Temps moyen sur le site

- **Objectif** : > 2 minutes
- **Bon** : 1-2 minutes
- **Excellent** : > 2 minutes

### Pages par session

- **Objectif** : > 3 pages
- **Bon** : 2-3 pages
- **Excellent** : > 3 pages

---

## 🎯 Objectifs et conversions

### Objectifs configurés

1. **Demande de démo** : Soumission du formulaire de démo
2. **Contact** : Soumission du formulaire de contact

### Voir les conversions

1. Aller dans "Conversions" > "Objectifs"
2. Voir le nombre de conversions
3. Analyser par source, campagne, etc.

### Funnel de conversion

Comprendre le parcours vers la conversion :

1. **Visite** : Arrivée sur le site
2. **Engagement** : Consultation de plusieurs pages
3. **Intérêt** : Clic sur CTA ou formulaire
4. **Conversion** : Soumission du formulaire

---

## 📱 Analyse mobile vs desktop

### Répartition des appareils

- **Desktop** : __%
- **Mobile** : __%
- **Tablette** : __%

### Performance par appareil

Comparer les métriques :

- **Taux de conversion** : Desktop vs Mobile
- **Temps sur le site** : Desktop vs Mobile
- **Taux de rebond** : Desktop vs Mobile

### Optimisation mobile

Si le trafic mobile est important :

- ✅ Optimiser les formulaires pour mobile
- ✅ Vérifier la vitesse de chargement mobile
- ✅ Tester l'expérience utilisateur mobile

---

## 🔍 Analyse approfondie

### Segmentation

Créer des segments pour analyser des groupes spécifiques :

1. Aller dans "Audience" > "Segments"
2. Créer un nouveau segment
3. Définir les critères (source, appareil, etc.)
4. Appliquer le segment aux rapports

### Segments recommandés

- **Nouveaux visiteurs** : Première visite
- **Visiteurs récurrents** : Visites multiples
- **Mobile uniquement** : Visiteurs mobile
- **Conversions** : Visiteurs qui ont converti

---

## 📋 FAQ

### Pourquoi mes chiffres ne correspondent pas exactement ?

Les données peuvent varier légèrement selon :
- Le moment de la collecte
- Les filtres appliqués
- Les exclusions (bots, etc.)

### Comment puis-je exclure mon propre trafic ?

1. Aller dans "Administration" > "Filtres"
2. Créer un filtre pour exclure votre IP
3. Appliquer le filtre

### Puis-je voir les données en temps réel ?

Oui, allez dans "Temps réel" pour voir les données en direct.

### Comment puis-je exporter les données ?

1. Ouvrir un rapport
2. Cliquer sur "Exporter"
3. Choisir le format (PDF, Excel, CSV, Google Sheets)

### Les données sont-elles conservées indéfiniment ?

Google Analytics conserve les données selon votre plan :
- Gratuit : 14 mois
- GA360 : Selon le contrat

---

## 🆘 Support

### Besoin d'aide ?

- 📧 Email : support@immotopia.com
- 📚 Documentation Google Analytics : https://support.google.com/analytics

---

**Dernière mise à jour** : 2025-12-23

