# Gestion des formulaires et leads - ImmoTopia

**Version** : 1.0  
**Date** : 2025-12-23  
**Pour** : Clients ImmoTopia

---

## 📋 Table des matières

1. [Introduction](#introduction)
2. [Accès aux soumissions](#accès-aux-soumissions)
3. [Export des leads](#export-des-leads)
4. [Intégration CRM](#intégration-crm)
5. [Gestion des leads](#gestion-des-leads)
6. [FAQ](#faq)

---

## 🎯 Introduction

Ce guide vous explique comment gérer les formulaires de votre site et les leads générés.

### Types de formulaires

Votre site ImmoTopia contient deux types de formulaires :

1. **Formulaire de contact** : Pour les demandes générales
2. **Formulaire de demande de démo** : Pour les demandes de démonstration

---

## 📥 Accès aux soumissions

### Via le CMS

1. Se connecter au CMS
2. Cliquer sur "Formulaires" dans le menu
3. Sélectionner le formulaire souhaité
4. Voir toutes les soumissions

### Informations disponibles

Pour chaque soumission, vous verrez :

- **Date et heure** : Quand le formulaire a été soumis
- **Nom et prénom** : Informations du contact
- **Email** : Adresse email du contact
- **Téléphone** : Numéro de téléphone (si fourni)
- **Entreprise** : Nom de l'entreprise (si applicable)
- **Message** : Contenu du message
- **Statut** : Nouveau, En cours, Traité, Archivé

### Filtrer les soumissions

Vous pouvez filtrer les soumissions par :

- **Date** : Aujourd'hui, Cette semaine, Ce mois, Personnalisé
- **Statut** : Nouveau, En cours, Traité, Archivé
- **Formulaire** : Contact, Demande de démo
- **Recherche** : Par nom, email, entreprise

---

## 📤 Export des leads

### Exporter vers CSV

1. Accéder à "Formulaires" > "Soumissions"
2. Appliquer les filtres souhaités (optionnel)
3. Cliquer sur "Exporter"
4. Sélectionner le format : CSV
5. Choisir les colonnes à inclure
6. Cliquer sur "Télécharger"

### Format CSV

Le fichier CSV contiendra les colonnes suivantes :

- Date
- Heure
- Nom
- Prénom
- Email
- Téléphone
- Entreprise
- Fonction
- Message
- Statut
- Source (page d'origine)

### Exporter vers Excel

1. Suivre les mêmes étapes que pour CSV
2. Ouvrir le fichier CSV dans Excel
3. Excel convertira automatiquement le format

### Export programmé

Vous pouvez configurer des exports automatiques :

1. Aller dans "Paramètres" > "Exports automatiques"
2. Configurer la fréquence (quotidien, hebdomadaire, mensuel)
3. Définir les destinataires
4. Choisir le format (CSV, Excel)
5. Activer l'export automatique

---

## 🔗 Intégration CRM

### CRM configuré

Votre site est configuré pour envoyer automatiquement les leads vers votre CRM.

**CRM actuel** : HubSpot / Pipedrive / Autre

### Synchronisation automatique

Les nouveaux leads sont automatiquement :

- ✅ Envoyés au CRM en temps réel
- ✅ Créés comme contacts dans le CRM
- ✅ Associés à une opportunité (pour les demandes de démo)
- ✅ Taggués selon la source

### Vérifier la synchronisation

1. Soumettre un formulaire de test
2. Vérifier dans le CRM que le contact apparaît
3. Vérifier que toutes les informations sont présentes

### En cas de problème

Si un lead n'apparaît pas dans le CRM :

1. Vérifier la configuration CRM dans les paramètres
2. Vérifier les logs d'erreur
3. Contacter le support si nécessaire

---

## 📊 Gestion des leads

### Marquer un lead comme traité

1. Accéder à la soumission
2. Cliquer sur "Modifier le statut"
3. Sélectionner "Traité"
4. Ajouter une note si nécessaire
5. Cliquer sur "Enregistrer"

### Ajouter des notes

Pour chaque lead, vous pouvez ajouter des notes :

1. Ouvrir la soumission
2. Cliquer sur "Ajouter une note"
3. Saisir votre note
4. Cliquer sur "Enregistrer"

### Archiver un lead

1. Ouvrir la soumission
2. Cliquer sur "Archiver"
3. Confirmer l'archivage

Les leads archivés peuvent être consultés dans "Archives".

### Supprimer un lead

⚠️ **Attention** : La suppression est définitive.

1. Ouvrir la soumission
2. Cliquer sur "Supprimer"
3. Confirmer la suppression

---

## 📈 Statistiques

### Tableau de bord

Le tableau de bord affiche :

- **Leads aujourd'hui** : Nombre de nouveaux leads
- **Leads cette semaine** : Nombre de leads de la semaine
- **Leads ce mois** : Nombre de leads du mois
- **Taux de conversion** : % de visiteurs devenus leads
- **Source principale** : Page qui génère le plus de leads

### Rapports

Vous pouvez générer des rapports :

1. Aller dans "Rapports" > "Leads"
2. Sélectionner la période
3. Choisir les métriques
4. Générer le rapport
5. Exporter si nécessaire

---

## 🔔 Notifications

### Notifications par email

Vous pouvez recevoir des notifications par email :

1. Aller dans "Paramètres" > "Notifications"
2. Activer les notifications email
3. Définir la fréquence :
   - Immédiat : À chaque nouveau lead
   - Quotidien : Résumé quotidien
   - Hebdomadaire : Résumé hebdomadaire

### Notifications dans le CMS

Les notifications apparaissent dans le CMS :

- Badge sur l'icône "Formulaires" avec le nombre de nouveaux leads
- Liste des notifications récentes
- Alertes pour les leads non traités depuis X jours

---

## 🎯 Bonnes pratiques

### Traitement rapide

- ✅ Traiter les leads dans les 24 heures
- ✅ Répondre rapidement aux demandes
- ✅ Suivre les leads jusqu'à conversion

### Organisation

- ✅ Utiliser les statuts pour organiser
- ✅ Ajouter des notes pour le suivi
- ✅ Archiver les leads traités

### Analyse

- ✅ Analyser les sources de leads
- ✅ Identifier les pages performantes
- ✅ Optimiser les formulaires selon les résultats

---

## 📋 FAQ

### Combien de temps les leads sont-ils conservés ?

Les leads sont conservés indéfiniment. Vous pouvez les archiver ou supprimer manuellement.

### Puis-je modifier un lead après soumission ?

Oui, vous pouvez modifier les informations et ajouter des notes, mais pas modifier la soumission originale.

### Les leads sont-ils automatiquement envoyés au CRM ?

Oui, si l'intégration CRM est configurée, les leads sont envoyés automatiquement.

### Puis-je créer des formulaires personnalisés ?

Contactez le support pour créer des formulaires personnalisés.

### Comment puis-je améliorer le taux de conversion ?

- Optimiser les formulaires (moins de champs, messages clairs)
- Ajouter des CTA stratégiques
- Améliorer le contenu des pages
- Tester différentes versions

---

## 🆘 Support

### Besoin d'aide ?

- 📧 Email : support@immotopia.com
- 📞 Téléphone : [Numéro]
- 💬 Chat : Disponible sur le site

---

**Dernière mise à jour** : 2025-12-23

