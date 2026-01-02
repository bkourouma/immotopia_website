# Scripts de Migration

## Migration du contenu MDX vers la base de données

### Migration des articles de blog

Ce script migre automatiquement les fichiers MDX du dossier `apps/web/src/content/blog/` vers la base de données PostgreSQL.

**Utilisation :**

```bash
cd apps/api
pnpm migrate:content
```

**Ce que fait le script :**

1. **Lit tous les fichiers `.mdx` et `.md`** dans `apps/web/src/content/blog/`
2. **Parse le frontmatter** de chaque fichier avec `gray-matter`
3. **Vérifie si l'article existe déjà** (par slug) - skip si existant
4. **Crée les catégories** si elles n'existent pas (upsert)
5. **Crée les tags** si ils n'existent pas (upsert)
6. **Calcule le temps de lecture** avec `reading-time`
7. **Crée l'article** dans la base de données avec :
   - Titre, description, contenu
   - Slug (basé sur le nom de fichier)
   - Statut : "published" par défaut (sauf si `published: false` dans le frontmatter)
   - Date de publication (depuis `date` dans le frontmatter)
   - Auteur, catégorie, tags
   - Temps de lecture calculé

**Format du frontmatter attendu :**

```yaml
---
title: "Titre de l'article"
description: "Description de l'article"
date: "2025-12-28"
author: "Nom de l'auteur"
category: "Nom de la catégorie"
tags:
  - "tag1"
  - "tag2"
  - "tag3"
published: true  # optionnel, par défaut true
---
```

**Note :** Le script est idempotent - vous pouvez l'exécuter plusieurs fois sans créer de doublons. Les articles existants (par slug) seront ignorés.

---

## Notes

- Les articles sont créés avec `locale: 'fr'` par défaut
- Les catégories et tags sont créés avec `locale: 'fr'` par défaut
- Les slugs des catégories/tags sont générés automatiquement (lowercase, tirets)

