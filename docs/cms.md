# Guide d'Utilisation du CMS ImmoTopia

## Vue d'ensemble

Le CMS (Content Management System) permet de gérer le contenu marketing du site ImmoTopia sans intervention technique. Il est accessible à l'adresse `/admin` après authentification.

## Accès au CMS

### Connexion

1. Accédez à `http://localhost:3003/admin/login` (ou votre URL de production)
2. Connectez-vous avec :
   - **Email** : `admin@immotopia.com` (ou celui défini dans `ADMIN_EMAIL`)
   - **Password** : Celui défini dans `ADMIN_PASSWORD`

### Sécurité

- Les sessions expirent après 24h d'inactivité
- Protection CSRF sur toutes les actions de modification
- Rate limiting : 5 tentatives de connexion / 15 minutes
- Toutes les actions sont enregistrées dans l'audit log

## Gestion du Blog

### Créer un article

1. Allez dans **Blog** > **Articles**
2. Cliquez sur **Nouvel article**
3. Remplissez les champs :
   - **Titre** : Le titre de l'article (obligatoire)
   - **Slug** : Généré automatiquement depuis le titre, modifiable
   - **Description** : Résumé pour SEO et aperçu
   - **Contenu** : Markdown (support complet)
   - **Statut** : Brouillon, Publié, ou Programmé
   - **Catégorie** : Sélectionnez ou créez-en une
   - **Tags** : Cochez les tags existants
   - **Auteur** : Nom de l'auteur
   - **SEO** : Titre et description SEO (optionnel)

4. Cliquez sur **Créer l'article**

### Modifier un article

1. Allez dans **Blog** > **Articles**
2. Cliquez sur l'icône **Éditer** de l'article souhaité
3. Modifiez les champs
4. Cliquez sur **Enregistrer**

### Publier un article

- **Brouillon** : Non visible publiquement
- **Publié** : Visible immédiatement sur le site
- **Programmé** : Définissez une date de publication future

### Catégories et Tags

- **Catégories** : Créez des catégories depuis l'interface (à venir)
- **Tags** : Créez des tags depuis l'interface (à venir)

## Gestion des Guides

### Créer un guide

1. Allez dans **Guides**
2. Cliquez sur **Nouveau guide**
3. Remplissez les informations :
   - **Titre**, **Slug**, **Description**, **Contenu**
   - **PDF Téléchargeable** : Sélectionnez un PDF uploadé
   - **Capture de leads** : Activez pour afficher un formulaire avant téléchargement
   - **SEO** : Métadonnées SEO

4. Cliquez sur **Créer le guide**

### Capturer des leads

Si **Capture de leads** est activée :
- Un formulaire s'affiche avant le téléchargement
- Les leads sont enregistrés dans **Guides** > **[Guide]** > **Leads**
- Export CSV disponible

## Gestion de la FAQ

### Créer une question

1. Allez dans **FAQ**
2. Cliquez sur **Nouvelle question**
3. Remplissez :
   - **Question** : La question (obligatoire)
   - **Réponse** : Markdown supporté (obligatoire)
   - **Catégorie** : Optionnel (ex: "Compte", "Tarifs")
   - **Statut** : Brouillon ou Publié
   - **Ordre** : Auto-incrémenté, modifiable

4. Cliquez sur **Créer la question**

### Réordonner les questions

- L'ordre détermine l'affichage sur la page FAQ
- Modifiez l'ordre dans le formulaire d'édition

## Bibliothèque Média

### Uploader un média

1. Allez dans **Média**
2. Cliquez sur **Upload média**
3. Sélectionnez un fichier :
   - **Images** : JPG, PNG, WebP, GIF (max 10MB)
   - **PDF** : PDF (max 50MB)
4. Optionnel : Ajoutez un titre et texte alternatif
5. Le fichier est uploadé et disponible immédiatement

### Utiliser un média

- Dans les éditeurs (blog, guides), sélectionnez un média depuis la liste
- L'URL est copiée automatiquement

## Gestion des Menus

### Modifier un menu

1. Allez dans **Menus**
2. Sélectionnez **Menu Header** ou **Menu Footer**
3. **Ajouter un item** :
   - Label : Texte affiché
   - URL : Lien (interne ou externe)
   - Parent : Pour créer un sous-menu
   - Lien externe : Ouvre dans un nouvel onglet

4. **Modifier/Supprimer** : Utilisez les icônes sur chaque item

### Structure hiérarchique

- Les items peuvent avoir des sous-items (max 2 niveaux)
- L'ordre peut être modifié (à venir : drag & drop)

## Paramètres SEO

### Paramètres globaux

1. Allez dans **Paramètres** > **SEO**
2. Configurez :
   - **Template de titre** : `%s | ImmoTopia` (le %s sera remplacé)
   - **Image OG par défaut** : Image pour les partages sociaux
   - **Google Analytics 4 ID** : `G-XXXXXXXXXX`
   - **Microsoft Clarity ID** : ID Clarity
   - **URL canonique de base** : `https://immotopia.com`

3. Cliquez sur **Enregistrer les paramètres**

### SEO par page

- Les paramètres SEO globaux s'appliquent par défaut
- Chaque article/guide peut avoir ses propres métadonnées SEO

## Bonnes Pratiques

### Blog

- Utilisez des titres descriptifs et accrocheurs
- Ajoutez toujours une description (utilisée pour SEO)
- Utilisez des catégories et tags pour organiser
- Vérifiez le slug avant publication
- Utilisez Markdown pour le formatage

### Guides

- Activez la capture de leads pour les guides premium
- Ajoutez une description claire du contenu
- Assurez-vous que le PDF est uploadé avant publication

### FAQ

- Organisez par catégorie
- Utilisez un ordre logique (questions fréquentes en premier)
- Gardez les réponses concises mais complètes

### Médias

- Optimisez les images avant upload (compression)
- Utilisez des noms de fichiers descriptifs
- Ajoutez toujours un texte alternatif pour l'accessibilité

## Dépannage

### Impossible de se connecter

- Vérifiez que `ADMIN_EMAIL` et `ADMIN_PASSWORD` sont définis dans `.env`
- Vérifiez que l'API est démarrée (`pnpm dev` dans `apps/api`)

### Erreur lors de l'upload

- Vérifiez la taille du fichier (max 10MB images, 50MB PDF)
- Vérifiez le type de fichier (images ou PDF uniquement)

### Contenu non visible publiquement

- Vérifiez que le statut est "Publié"
- Vérifiez que la date de publication n'est pas dans le futur
- Attendez quelques secondes (ISR cache)

## Support

Pour toute question technique, consultez la documentation du projet ou contactez l'équipe de développement.



