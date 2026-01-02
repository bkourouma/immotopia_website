# 🔧 Guide de Dépannage - CMS ImmoTopia

## Problème : "The requested module '@monorepo/contracts' does not provide an export named 'AdminLoginSchema'"

### Solution

1. **Builder le package contracts** :
```bash
pnpm --filter @monorepo/contracts build
```

2. **Vider le cache Node.js/tsx** :
```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules/.cache -ErrorAction SilentlyContinue
```

3. **Redémarrer les services** :
```bash
# Arrêter avec Ctrl+C, puis
pnpm dev
```

### Si le problème persiste

1. **Nettoyer et réinstaller** :
```bash
pnpm clean
pnpm install
pnpm --filter @monorepo/contracts build
pnpm dev
```

2. **Vérifier que le package est buildé** :
```bash
# Vérifier que dist/index.js existe
Test-Path packages/contracts/dist/index.js

# Vérifier le contenu
Get-Content packages/contracts/dist/index.js
```

3. **Vérifier les exports** :
Le fichier `packages/contracts/dist/index.js` doit contenir :
```javascript
export * from './admin';
```

Et `packages/contracts/dist/admin.js` doit contenir :
```javascript
export const AdminLoginSchema = ...
```

## Autres Problèmes Courants

### Port déjà utilisé

Voir `QUICK_START.md` section "🛑 Arrêter les Services"

### Erreur Prisma

```bash
cd apps/api
pnpm prisma generate
pnpm prisma migrate deploy
```

### Erreur de connexion DB

Vérifiez `DATABASE_URL` dans `apps/api/.env`

