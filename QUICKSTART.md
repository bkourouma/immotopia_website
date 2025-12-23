# Guide de démarrage rapide

## 🚀 Installation en 5 minutes

### 1. Installer les dépendances

```bash
pnpm install
```

### 2. Configurer la base de données

```bash
# Créer la base de données PostgreSQL
psql -U postgres -c "CREATE DATABASE monorepo;"

# Configurer Prisma
cd apps/api
# Créer .env avec DATABASE_URL="postgresql://postgres:DevMick@2003@localhost:5432/monorepo?schema=public"
pnpm prisma generate
pnpm prisma migrate dev
```

### 3. Lancer le projet

```bash
# Depuis la racine
pnpm dev
```

✅ API : http://localhost:3002  
✅ Web : http://localhost:3003

---

## 🎯 Utiliser SpectKit

### Créer votre première fonctionnalité

Dans Cursor, tapez :

```
/speckit.specify "Système d'authentification"
```

Cela créera automatiquement :
- ✅ Branche Git `001-systeme-authentification`
- ✅ Dossier `specs/001-systeme-authentification/`
- ✅ Fichier `spec.md` avec template rempli

### Générer le plan

```
/speckit.plan
```

Crée `plan.md` avec la structure d'implémentation.

### Générer les tâches

```
/speckit.tasks
```

Crée `tasks.md` avec toutes les tâches détaillées.

### Implémenter

```
/speckit.implement
```

Implémente toutes les tâches automatiquement.

---

## 📋 Checklist de validation

- [ ] `pnpm install` fonctionne
- [ ] `pnpm dev` lance API et Web
- [ ] `/speckit.specify "test"` crée une spec
- [ ] `/speckit.plan` génère un plan
- [ ] `/speckit.tasks` génère des tâches
- [ ] Les scripts PowerShell retournent du JSON valide

---

## 🔧 Commandes utiles

```bash
# Développement
pnpm dev              # Lance API + Web
pnpm dev:api          # Lance uniquement l'API
pnpm dev:web          # Lance uniquement le Web

# Build
pnpm build            # Build tous les packages
pnpm type-check       # Vérification TypeScript
pnpm lint             # Linting

# Base de données
cd apps/api
pnpm prisma generate  # Génère le client Prisma
pnpm prisma migrate dev # Crée une migration
pnpm prisma studio    # Interface graphique Prisma
```

---

## 📚 Documentation

- [README.md](README.md) - Documentation complète
- [SETUP.md](SETUP.md) - Guide de configuration détaillé
- [Constitution](.specify/memory/constitution.md) - Principes du projet
- [Règles Cursor](.cursor/rules/specify-rules.mdc) - Règles de développement

---

## 🆘 Problèmes courants

### Erreur de connexion PostgreSQL
→ Vérifiez que PostgreSQL est démarré et que le mot de passe est correct

### Erreur de build TypeScript
→ Exécutez `pnpm install` puis `pnpm type-check`

### Scripts PowerShell ne fonctionnent pas
→ Vérifiez que PowerShell est disponible et que vous êtes à la racine du projet

---

## ✨ Prêt à développer !

Vous êtes maintenant prêt à utiliser le monorepo avec SpectKit.  
Commencez par créer votre première fonctionnalité avec `/speckit.specify` !

