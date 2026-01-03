# 📋 Guide du Back Office ImmoTopia

## 🎯 Vue d'ensemble

Le back office ImmoTopia est un système de gestion de contenu (CMS) complet qui permet de gérer tout le contenu marketing du site sans intervention technique. Il est accessible à l'adresse `/admin` après authentification.

## 🔐 Accès et Authentification

### Connexion

1. **URL d'accès** : `http://localhost:3003/admin/login` (développement) ou `https://votre-domaine.com/admin/login` (production)

2. **Identifiants par défaut** :
   - **Email** : `admin@immotopia.com` (ou celui défini dans `ADMIN_EMAIL`)
   - **Password** : Celui défini dans `ADMIN_PASSWORD` (par défaut : `ChangeMe123!`)

3. **Sécurité** :
   - Sessions HttpOnly avec expiration après 24h d'inactivité
   - Protection CSRF sur toutes les actions de modification
   - Rate limiting : 5 tentatives de connexion / 15 minutes
   - Toutes les actions sont enregistrées dans l'audit log

### Changement de mot de passe

La fonctionnalité de changement de mot de passe est disponible dans le profil utilisateur (à venir).

## 📊 Dashboard

Le tableau de bord (`/admin`) affiche :
- Statistiques générales (nombre d'articles, guides, FAQ, etc.)
- Activité récente
- Liens rapides vers les sections principales

## 📝 Gestion du Blog

### Créer un article

1. Naviguez vers **Blog** > **Articles** dans le menu de gauche
2. Cliquez sur le bouton **Nouvel article** (icône +)
3. Remplissez le formulaire :

   **Section Contenu** (colonne de gauche) :
   - **Titre** * (obligatoire) : Le titre de l'article
   - **Slug** * (obligatoire) : Généré automatiquement depuis le titre, modifiable
     - Format : minuscules, tirets, chiffres uniquement (ex: `mon-article-super`)
   - **Description** * (obligatoire) : Résumé utilisé pour SEO et aperçu
   - **Contenu** * (obligatoire) : Contenu en Markdown
     - Support complet du Markdown (titres, listes, liens, images, code, etc.)

   **Section Publication** (colonne de droite) :
   - **Statut** :
     - **Brouillon** : Non visible publiquement
     - **Publié** : Visible immédiatement sur `/blog/[slug]`
     - **Programmé** : Publication à une date future
   - **Catégorie** : Sélectionnez une catégorie existante (optionnel)
   - **Auteur** : Nom de l'auteur (optionnel)
   - **Tags** : Cochez les tags existants (optionnel)

   **Section SEO** (colonne de droite) :
   - **Titre SEO** : Titre pour les moteurs de recherche (max 60 caractères)
   - **Description SEO** : Description pour les moteurs de recherche (max 160 caractères)
     - Si vide, la description principale est utilisée

4. Cliquez sur **Créer l'article**

### Modifier un article

1. Allez dans **Blog** > **Articles**
2. Cliquez sur l'icône **✏️ Éditer** de l'article souhaité
3. Modifiez les champs
4. Cliquez sur **Enregistrer**

### Supprimer un article

1. Allez dans **Blog** > **Articles**
2. Cliquez sur l'icône **🗑️ Supprimer** de l'article souhaité
3. Confirmez la suppression

⚠️ **Note** : La suppression est "soft delete" - l'article est marqué comme supprimé mais reste dans la base de données.

### Visualiser un article

1. Allez dans **Blog** > **Articles**
2. Cliquez sur l'icône **👁️ Voir** pour ouvrir l'article dans un nouvel onglet

### Gérer les catégories

1. Naviguez vers **Blog** > **Catégories**
2. Cliquez sur **Nouvelle catégorie**
3. Remplissez :
   - **Nom** : Nom de la catégorie (ex: "Actualités", "Guides")
   - **Slug** : Généré automatiquement
   - **Description** : Description de la catégorie (optionnel)

### Gérer les tags

1. Naviguez vers **Blog** > **Tags**
2. Cliquez sur **Nouveau tag**
3. Remplissez :
   - **Nom** : Nom du tag (ex: "immobilier", "gestion")
   - **Slug** : Généré automatiquement

## 📚 Gestion des Guides

### Créer un guide

1. Naviguez vers **Guides** dans le menu de gauche
2. Cliquez sur **Nouveau guide**
3. Remplissez le formulaire :

   **Informations de base** :
   - **Titre** * : Titre du guide
   - **Slug** * : URL-friendly (généré automatiquement)
   - **Description** * : Résumé du guide
   - **Contenu** * : Contenu en Markdown de la page de présentation

   **Téléchargement** :
   - **PDF Téléchargeable** : Sélectionnez un PDF uploadé dans la bibliothèque média
   - **Capture de leads** : Activez pour afficher un formulaire avant téléchargement
     - Si activé, les visiteurs doivent entrer leur email avant de télécharger
     - Les leads sont enregistrés et visibles dans **Guides** > **[Guide]** > **Leads**

   **SEO** :
   - **Titre SEO** : Titre pour les moteurs de recherche
   - **Description SEO** : Description pour les moteurs de recherche

4. Cliquez sur **Créer le guide**

### Voir les leads d'un guide

1. Allez dans **Guides**
2. Cliquez sur le guide souhaité
3. Cliquez sur l'onglet **Leads**
4. Vous pouvez voir tous les leads capturés avec :
   - Email
   - Date de téléchargement
   - Informations additionnelles (si collectées)

### Exporter les leads

1. Dans la page des leads d'un guide
2. Cliquez sur **Exporter CSV** (à venir)

## ❓ Gestion de la FAQ

### Créer une question

1. Naviguez vers **FAQ** dans le menu de gauche
2. Cliquez sur **Nouvelle question**
3. Remplissez :
   - **Question** * : La question (obligatoire)
   - **Réponse** * : La réponse en Markdown (obligatoire)
   - **Catégorie** : Optionnel (ex: "Compte", "Tarifs", "Fonctionnalités")
   - **Statut** : Brouillon ou Publié
   - **Ordre** : Auto-incrémenté, modifiable pour réordonner

4. Cliquez sur **Créer la question**

### Réordonner les questions

1. Allez dans **FAQ**
2. Cliquez sur **✏️ Éditer** pour une question
3. Modifiez le champ **Ordre**
4. Enregistrez

Les questions sont affichées par ordre croissant sur la page FAQ publique.

## 🖼️ Bibliothèque Média

### Uploader un fichier

1. Naviguez vers **Média** dans le menu de gauche
2. Cliquez sur **Uploader un fichier**
3. Sélectionnez un fichier :
   - **Images** : JPG, PNG, GIF, WebP (max 50MB)
   - **PDFs** : PDF (max 50MB)
4. Remplissez les métadonnées :
   - **Titre** : Titre du fichier
   - **Texte alternatif** : Pour l'accessibilité (images)
5. Cliquez sur **Uploader**

### Utiliser un média

Lors de la création/édition d'un article ou guide, vous pouvez :
- Sélectionner un média existant depuis la bibliothèque
- Uploader un nouveau fichier directement

### Supprimer un média

1. Allez dans **Média**
2. Cliquez sur l'icône **🗑️ Supprimer** du fichier souhaité
3. Confirmez la suppression

⚠️ **Attention** : Vérifiez que le média n'est pas utilisé avant de le supprimer.

## 🧭 Gestion des Menus

### Modifier le menu header

1. Naviguez vers **Menus** dans le menu de gauche
2. Sélectionnez **Header** (ou créez-le s'il n'existe pas)
3. Modifiez les items :
   - **Label** : Texte affiché dans le menu
   - **Href** : URL (ex: `/blog`, `/contact`)
   - **Ordre** : Ordre d'affichage
   - **Lien externe** : Cochez si c'est un lien externe (ouvre dans un nouvel onglet)
   - **Items enfants** : Ajoutez des sous-menus (niveaux imbriqués supportés)

4. Cliquez sur **Enregistrer**

### Modifier le menu footer

1. Naviguez vers **Menus** dans le menu de gauche
2. Sélectionnez **Footer** (ou créez-le s'il n'existe pas)
3. Modifiez les items de la même manière que le header

## ⚙️ Paramètres SEO et Globaux

### Paramètres globaux

1. Naviguez vers **Paramètres** dans le menu de gauche
2. Modifiez les paramètres :

   **SEO Global** :
   - **Template de titre** : Template pour les titres de pages (ex: `%s | ImmoTopia`)
   - **Description par défaut** : Description SEO par défaut
   - **Image OG par défaut** : Image partagée sur les réseaux sociaux
   - **Canonical URL** : URL de base pour les liens canoniques

   **Analytics** :
   - **Google Analytics ID** : ID GA4 (ex: `G-XXXXXXXXXX`)
   - **Microsoft Clarity ID** : ID Clarity (déjà configuré)

3. Cliquez sur **Enregistrer**

### Paramètres par page

Les paramètres SEO peuvent être surchargés page par page lors de la création/édition de contenu.

## 📊 Audit Log

Toutes les actions sont enregistrées dans l'audit log :
- Création, modification, suppression de contenu
- Publications et programmations
- Uploads de fichiers
- Connexions et déconnexions
- Tentatives de connexion échouées

Pour voir l'audit log :
1. Naviguez vers **Audit Log** (à venir dans le menu)
2. Filtrez par :
   - Action
   - Utilisateur
   - Date
   - IP

## 🔍 Recherche et Filtres

### Recherche

La plupart des pages de liste (Blog, Guides, FAQ) ont une barre de recherche qui permet de :
- Rechercher par titre
- Rechercher par contenu
- Rechercher par slug

### Filtres

Les filtres disponibles varient selon la section :
- **Blog** : Par statut (Brouillon, Publié, Programmé), catégorie, tag
- **Guides** : Par statut
- **FAQ** : Par catégorie, statut
- **Média** : Par type (Image, PDF), date

## 💡 Conseils et Bonnes Pratiques

### Rédaction de contenu

1. **Titres** : Utilisez des titres clairs et descriptifs
2. **Slugs** : Laissez la génération automatique ou utilisez des slugs courts et descriptifs
3. **Descriptions** : Écrivez des descriptions accrocheuses (150-160 caractères idéalement)
4. **Contenu Markdown** : Utilisez la syntaxe Markdown pour structurer votre contenu
5. **Images** : Ajoutez des images pertinentes depuis la bibliothèque média

### SEO

1. **Titres SEO** : Remplissez toujours les titres SEO (max 60 caractères)
2. **Descriptions SEO** : Remplissez toujours les descriptions SEO (max 160 caractères)
3. **Images alt** : Ajoutez toujours un texte alternatif aux images
4. **Mots-clés** : Utilisez des mots-clés pertinents dans le contenu et les tags

### Organisation

1. **Catégories** : Organisez vos articles en catégories logiques
2. **Tags** : Utilisez des tags pour créer des relations entre articles
3. **Statuts** : Utilisez "Brouillon" pour travailler, puis "Publié" pour rendre visible
4. **Programmation** : Utilisez "Programmé" pour planifier des publications futures

### Sécurité

1. **Mots de passe** : Changez le mot de passe par défaut en production
2. **Sessions** : Déconnectez-vous si vous utilisez un ordinateur partagé
3. **Audit** : Consultez régulièrement l'audit log pour détecter des activités suspectes

## 🐛 Dépannage

### Erreur de connexion

- Vérifiez que l'API est démarrée (`http://localhost:3002/health`)
- Vérifiez vos identifiants
- Videz le cache du navigateur

### Erreur lors de la sauvegarde

- Vérifiez que tous les champs obligatoires sont remplis
- Vérifiez la console du navigateur (F12) pour les erreurs
- Vérifiez que l'API est accessible

### Images non affichées

- Vérifiez que les fichiers sont bien uploadés dans la bibliothèque média
- Vérifiez les permissions d'accès aux fichiers
- Vérifiez que les URLs sont correctes

### Contenu non visible publiquement

- Vérifiez que le statut est "Publié" (pas "Brouillon")
- Vérifiez que la date de publication est dans le passé (pour les contenus programmés)
- Vérifiez le cache du navigateur

## 📞 Support

Pour toute question ou problème :
1. Consultez ce guide
2. Vérifiez l'audit log pour les erreurs
3. Contactez l'équipe technique si nécessaire

---

**Dernière mise à jour** : Janvier 2025



