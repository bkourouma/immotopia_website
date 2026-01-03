# Routes API CMS - Résumé

Toutes les routes API sont maintenant créées et enregistrées dans `apps/api/src/index.ts`.

## Routes Disponibles

### Authentification
- `POST /admin/login` - Connexion admin
- `POST /admin/logout` - Déconnexion
- `GET /admin/me` - Informations admin actuel

### Blog
- `GET /admin/blog/posts` - Liste des articles (filtres: status, categoryId, tagId, search, locale, page, limit)
- `GET /admin/blog/posts/:id` - Détails d'un article
- `POST /admin/blog/posts` - Créer un article
- `PUT /admin/blog/posts/:id` - Modifier un article
- `DELETE /admin/blog/posts/:id` - Supprimer (soft delete) un article
- `GET /admin/blog/categories` - Liste des catégories
- `POST /admin/blog/categories` - Créer une catégorie
- `GET /admin/blog/tags` - Liste des tags
- `POST /admin/blog/tags` - Créer un tag

### Guides
- `GET /admin/guides` - Liste des guides (filtres: status, category, search, locale, page, limit)
- `GET /admin/guides/:id` - Détails d'un guide
- `POST /admin/guides` - Créer un guide
- `PUT /admin/guides/:id` - Modifier un guide
- `DELETE /admin/guides/:id` - Supprimer (soft delete) un guide
- `GET /admin/guides/:id/leads` - Liste des leads capturés pour un guide
- `POST /api/guides/:id/capture-lead` - Endpoint public pour capturer un lead (gated download)

### FAQ
- `GET /admin/faq` - Liste des items FAQ (filtres: status, category, locale, page, limit)
- `GET /admin/faq/:id` - Détails d'un item FAQ
- `POST /admin/faq` - Créer un item FAQ
- `PUT /admin/faq/:id` - Modifier un item FAQ
- `DELETE /admin/faq/:id` - Supprimer (soft delete) un item FAQ
- `PUT /admin/faq/reorder` - Réordonner les items FAQ

### Menus
- `GET /admin/menus` - Liste de tous les menus avec items
- `GET /admin/menus/:id` - Détails d'un menu avec items hiérarchiques
- `POST /admin/menus/:id/items` - Créer un item de menu
- `PUT /admin/menus/items/:id` - Modifier un item de menu
- `DELETE /admin/menus/items/:id` - Supprimer (soft delete) un item de menu
- `PUT /admin/menus/:id/reorder` - Réordonner les items d'un menu

### Media
- `GET /admin/media` - Liste des médias (filtres: type, search, page, limit)
- `GET /admin/media/:id` - Détails d'un média
- `POST /admin/media/upload` - Upload un fichier (multipart/form-data)
- `PUT /admin/media/:id` - Modifier les métadonnées d'un média
- `DELETE /admin/media/:id` - Supprimer (soft delete) un média

### Settings
- `GET /admin/settings/seo` - Paramètres SEO globaux
- `PUT /admin/settings/seo` - Mettre à jour les paramètres SEO globaux
- `GET /admin/pages/:path/seo` - Paramètres SEO d'une page
- `PUT /admin/pages/:path/seo` - Mettre à jour les paramètres SEO d'une page

## Sécurité

Toutes les routes `/admin/*` (sauf `/admin/login`) sont protégées par :
- Middleware `requireAuth` : Vérifie la session
- CSRF protection : Pour toutes les méthodes unsafe (POST, PUT, DELETE)
- Rate limiting : Sur `/admin/login` (5 tentatives / 15 minutes)
- Audit logging : Toutes les actions sont loggées

## Prochaines Étapes

L'UI admin Next.js doit maintenant être créée pour utiliser ces routes API.



