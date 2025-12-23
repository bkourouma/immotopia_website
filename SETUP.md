# Guide de configuration

## Configuration initiale

### 1. Installation des dépendances

```bash
pnpm install
```

### 2. Configuration de la base de données

#### PostgreSQL 16

**Installation détectée** : `C:\Program Files\PostgreSQL\16\data`  
**Mot de passe** : `DevMick@2003`

#### Créer la base de données

```sql
-- Se connecter à PostgreSQL
psql -U postgres

-- Créer la base de données
CREATE DATABASE monorepo;

-- Vérifier la création
\l
```

#### Configuration Prisma

Dans `apps/api/`, créez un fichier `.env` :

```env
DATABASE_URL="postgresql://postgres:DevMick@2003@localhost:5432/monorepo?schema=public"
PORT=3002
HOST=0.0.0.0
NODE_ENV=development
```

#### Générer le client Prisma

```bash
cd apps/api
pnpm prisma generate
```

#### Appliquer les migrations

```bash
pnpm prisma migrate dev
```

### 3. Configuration du frontend

Dans `apps/web/`, créez un fichier `.env.local` :

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
NODE_ENV=development
```

### 4. Vérification

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Build
pnpm build
```

## Utilisation de SpectKit

### Créer votre première fonctionnalité

```bash
# Dans Cursor, utilisez la commande :
/speckit.specify "Ma première fonctionnalité"
```

Cela créera :
- Une branche Git `001-ma-premiere-fonctionnalite`
- Le dossier `specs/001-ma-premiere-fonctionnalite/`
- Le fichier `specs/001-ma-premiere-fonctionnalite/spec.md`

### Workflow complet

1. **Spécification** : `/speckit.specify "description"`
2. **Planification** : `/speckit.plan`
3. **Tâches** : `/speckit.tasks`
4. **Analyse** : `/speckit.analyze`
5. **Implémentation** : `/speckit.implement`
6. **Validation** : `/speckit.checklist`

## Dépannage

### Erreur de connexion à la base de données

Vérifiez :
- PostgreSQL est démarré
- Le mot de passe est correct (`DevMick@2003`)
- La base de données `monorepo` existe
- La variable `DATABASE_URL` est correcte

### Erreur de build TypeScript

Vérifiez :
- Tous les packages sont installés : `pnpm install`
- Les références de projet sont correctes : `pnpm type-check`

### Erreur avec les scripts PowerShell

Vérifiez :
- PowerShell est disponible
- Les scripts sont exécutables
- Vous êtes dans la racine du projet

## Support

Pour plus d'informations :
- [README.md](README.md)
- [Constitution](.specify/memory/constitution.md)
- [Règles Cursor](.cursor/rules/specify-rules.mdc)

