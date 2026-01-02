# UI Admin - Statut d'Implémentation

## ✅ Complété

### Layout & Navigation
- ✅ `AdminLayout` : Layout avec protection d'authentification
- ✅ `AdminSidebar` : Navigation latérale avec liens vers toutes les sections
- ✅ `AdminTopbar` : Barre supérieure avec info utilisateur
- ✅ Page `/admin/login` : Connexion admin

### Dashboard
- ✅ Page `/admin` : Dashboard avec statistiques (blog, guides, FAQ, media)
- ✅ Actions rapides : Liens vers création de contenu

### Blog
- ✅ Page `/admin/blog/posts` : Liste des articles avec filtres (status, search)
- ✅ Tableau avec actions (voir, éditer, supprimer)

### API Client
- ✅ `lib/api/admin.ts` : Client API complet pour toutes les routes

## 🚧 À Compléter

### Pages de Création/Édition
- [ ] `/admin/blog/posts/new` : Formulaire création article
- [ ] `/admin/blog/posts/[id]` : Formulaire édition article
- [ ] `/admin/guides` : Liste guides
- [ ] `/admin/guides/new` : Création guide
- [ ] `/admin/guides/[id]` : Édition guide
- [ ] `/admin/faq` : Liste FAQ
- [ ] `/admin/faq/new` : Création FAQ
- [ ] `/admin/media` : Bibliothèque média
- [ ] `/admin/menus` : Gestion menus
- [ ] `/admin/settings` : Paramètres SEO

### Composants Réutilisables
- [ ] `PostEditor` : Éditeur Markdown pour articles
- [ ] `MediaPicker` : Modal sélection média
- [ ] `DataTable` : Tableau réutilisable avec pagination
- [ ] `StatusBadge` : Badge de statut réutilisable
- [ ] `ConfirmDialog` : Modal de confirmation

### Fonctionnalités
- [ ] CSRF token handling (actuellement placeholder)
- [ ] Upload média avec preview
- [ ] Éditeur Markdown avec preview
- [ ] Drag & drop pour réordonner FAQ/menus
- [ ] Autosave pour éditeurs

## 📝 Notes

- Le CSRF token doit être obtenu depuis le serveur (cookie ou endpoint dédié)
- Les composants utilisent shadcn/ui déjà configuré
- Le design suit les patterns existants du site

