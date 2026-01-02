# Spécification : Refactoring Next.js vers Architecture Astro + Vite (VPS-Friendly)

**Numéro de fonctionnalité** : 009  
**Branche Git** : 009-refactoring-nextjs-vers-astro-vite  
**Date de création** : 2026-01-02  
**Statut** : 📝 Draft

---

## 📋 Vue d'ensemble

### Description

Refactoring complet du monorepo Next.js vers une architecture optimisée pour VPS à faible RAM, en séparant clairement les responsabilités :
- **Site public** → Astro (génération statique, zéro runtime Node)
- **Panel admin** → Vite + React (SPA statique)
- **API** → Fastify (Node.js, un seul processus PM2)

### Objectifs

- **Objectif principal** : Réduire l'utilisation RAM de 70-80% (de ~500MB à ~100-150MB)
- **Objectif secondaire** : Éliminer complètement Next.js et son overhead SSR
- **Objectif performance** : Temps de build réduit de 50%+
- **Objectif déploiement** : Architecture 100% statique pour le public, un seul processus Node pour l'API

### Contexte

Le site actuel utilise Next.js 15 avec :
- Pages publiques (home, features, pricing, blog, FAQ, guides)
- Panel admin CMS (`/admin/*`)
- API Fastify existante (`apps/api`)
- Build Next.js trop lourd pour VPS (RAM/CPU)

**Problèmes actuels** :
- Next.js nécessite un processus Node en production pour SSR
- Build Next.js consomme beaucoup de RAM (500MB+)
- Overhead inutile pour des pages statiques
- Admin panel mélangé avec le site public

---

## 🎯 Architecture Cible (MANDATORY)

### Option A : Architecture Séparée (CHOISIE)

```
┌─────────────────────────────────────────────────────────┐
│                    NGINX (Reverse Proxy)                 │
│  Port 80/443 → Routing vers 3 destinations              │
└─────────────────────────────────────────────────────────┘
           │              │              │
           ▼              ▼              ▼
    ┌──────────┐   ┌──────────┐   ┌──────────┐
    │  Astro   │   │   Vite   │   │ Fastify  │
    │  Static  │   │   SPA    │   │   API    │
    │  Files   │   │  Static  │   │  Node.js │
    │          │   │  Files   │   │  PM2     │
    └──────────┘   └──────────┘   └──────────┘
    /var/www/      /var/www/      localhost:3002
    public-site    admin-panel
```

### Responsabilités

#### 1. Site Public → Astro (Static Output)

**Technologies** :
- Astro 4.x
- Markdown/MDX pour contenu
- Tailwind CSS (réutilisé)
- Zero client JS par défaut

**Pages à migrer** :
- `/` (home)
- `/fonctionnalites`
- `/tarifs`
- `/la-solution/*`
- `/pour-qui`
- `/contact`
- `/blog` (listing)
- `/blog/[slug]` (articles)
- `/ressources/guides` (listing)
- `/ressources/guides/[slug]` (guides)
- `/faq`
- `/sitemap.xml` (généré statiquement)
- `/rss.xml` (généré statiquement)
- `/robots.txt`

**Fonctionnalités** :
- SEO metadata (Open Graph, Twitter Cards)
- Sitemap.xml généré au build
- RSS.xml généré au build
- Formulaires de contact → API Fastify
- Pas de SSR runtime
- Pas de client JS sauf si nécessaire (formulaires interactifs)

**Build Output** :
- Fichiers statiques HTML/CSS/JS
- Servis directement par Nginx
- Aucun processus Node requis

#### 2. Panel Admin → Vite + React (SPA)

**Technologies** :
- Vite 5.x
- React 18
- React Router v6
- Ant Design (réutilisé)
- Axios/fetch pour API

**Routes à migrer** :
- `/admin/login`
- `/admin` (dashboard)
- `/admin/blog/posts`
- `/admin/blog/posts/:id`
- `/admin/guides`
- `/admin/guides/:id`
- `/admin/faq`
- `/admin/media`
- `/admin/menus`
- `/admin/settings`

**Fonctionnalités** :
- Authentification via API (JWT/session cookies)
- Routing côté client (React Router)
- Gestion d'état (Context API ou Zustand)
- Upload de fichiers → API
- CRUD complet via API
- Build output = fichiers statiques

**Build Output** :
- `index.html` + assets JS/CSS
- Servis par Nginx
- Routing géré côté client
- Aucun processus Node requis

#### 3. API → Fastify (Node.js, PM2)

**Technologies** :
- Fastify (existant, à conserver)
- Prisma (existant)
- PostgreSQL (existant)

**Endpoints existants** :
- `/api/auth/*` (login, logout, current user)
- `/api/blog/*` (CRUD admin + public)
- `/api/guides/*` (CRUD admin + public)
- `/api/faq/*` (CRUD admin + public)
- `/api/media/*` (upload, list, delete)
- `/api/menus/*` (CRUD)
- `/api/settings/*` (CRUD)
- `/api/csrf` (token)
- `/health` (health check)

**Modifications nécessaires** :
- CORS configuré pour 2 origines (Astro + Vite)
- Rate limiting maintenu
- CSRF protection maintenu
- Un seul processus PM2

---

## 📁 Structure du Monorepo

### Structure Actuelle

```
ImmoTopiaWebsite/
├── apps/
│   ├── web/          # Next.js (À SUPPRIMER)
│   └── api/          # Fastify (À CONSERVER)
├── packages/
│   ├── contracts/    # Types partagés (À CONSERVER)
│   ├── ui/           # Composants UI (À ADAPTER)
│   └── utils/        # Utilitaires (À CONSERVER)
└── pnpm-workspace.yaml
```

### Structure Cible

```
ImmoTopiaWebsite/
├── apps/
│   ├── public-site/      # ✨ NOUVEAU : Astro
│   │   ├── src/
│   │   │   ├── pages/           # Routes Astro
│   │   │   ├── components/      # Composants Astro/React
│   │   │   ├── layouts/         # Layouts Astro
│   │   │   ├── content/         # Markdown/MDX
│   │   │   │   ├── blog/
│   │   │   │   ├── guides/
│   │   │   │   └── faq/
│   │   │   ├── lib/             # Utilitaires
│   │   │   └── styles/          # CSS global
│   │   ├── public/              # Assets statiques
│   │   ├── astro.config.mjs
│   │   └── package.json
│   │
│   ├── admin-panel/     # ✨ NOUVEAU : Vite + React
│   │   ├── src/
│   │   │   ├── pages/           # Pages React
│   │   │   ├── components/      # Composants React
│   │   │   ├── layouts/         # Layouts admin
│   │   │   ├── routes/           # React Router config
│   │   │   ├── lib/              # API client, utils
│   │   │   ├── hooks/            # React hooks
│   │   │   ├── contexts/         # Context API
│   │   │   └── styles/           # CSS
│   │   ├── public/               # Assets statiques
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   └── api/            # ✅ CONSERVÉ : Fastify
│       ├── src/
│       ├── prisma/
│       └── package.json
│
├── packages/
│   ├── contracts/      # ✅ CONSERVÉ
│   ├── ui/             # ✅ ADAPTÉ (supprimer dépendances Next.js)
│   └── utils/          # ✅ CONSERVÉ
│
└── pnpm-workspace.yaml
```

### Explication de la Structure

**Pourquoi cette structure ?**

1. **Séparation claire des responsabilités** :
   - `public-site` = contenu statique, SEO-first
   - `admin-panel` = interface d'administration, SPA
   - `api` = logique métier, base de données

2. **Builds indépendants** :
   - Chaque app peut être buildée séparément
   - Pas de dépendances croisées au runtime
   - Déploiements indépendants possibles

3. **Réutilisation de code** :
   - `packages/contracts` : types Zod partagés
   - `packages/ui` : composants UI (adaptés pour Astro/Vite)
   - `packages/utils` : fonctions utilitaires

---

## 🔄 Plan de Migration

### Phase 1 : Préparation (1-2 jours)

#### 1.1 Audit Complet

**Actions** :
- [ ] Lister toutes les pages Next.js (`apps/web/src/app/**/*.tsx`)
- [ ] Identifier les composants réutilisables
- [ ] Documenter les routes API utilisées
- [ ] Identifier les dépendances Next.js spécifiques
- [ ] Mesurer l'utilisation RAM actuelle (baseline)

**Livrables** :
- Document d'inventaire des pages
- Liste des composants à migrer
- Mapping routes Next.js → Astro/Vite

#### 1.2 Setup Nouveaux Projets

**Actions** :
- [ ] Créer `apps/public-site` avec Astro
- [ ] Créer `apps/admin-panel` avec Vite + React
- [ ] Configurer TypeScript pour chaque app
- [ ] Configurer Tailwind CSS (réutilisé)
- [ ] Configurer ESLint/Prettier
- [ ] Mettre à jour `pnpm-workspace.yaml`

**Commandes** :
```bash
# Astro
cd apps
pnpm create astro@latest public-site -- --template minimal --yes
cd public-site
pnpm add -D tailwindcss @astrojs/tailwind
pnpm add @monorepo/contracts @monorepo/ui @monorepo/utils

# Vite + React
pnpm create vite@latest admin-panel -- --template react-ts --yes
cd admin-panel
pnpm add react-router-dom antd axios
pnpm add -D @types/react-router-dom
pnpm add @monorepo/contracts @monorepo/ui @monorepo/utils
```

#### 1.3 Configuration API

**Actions** :
- [ ] Mettre à jour CORS dans `apps/api/src/index.ts`
  ```typescript
  await fastify.register(cors, {
    origin: [
      process.env.PUBLIC_SITE_URL || 'http://localhost:4321',
      process.env.ADMIN_PANEL_URL || 'http://localhost:5173',
    ],
    credentials: true,
  });
  ```
- [ ] Ajouter variables d'environnement
- [ ] Tester les endpoints existants

### Phase 2 : Migration Site Public → Astro (3-5 jours)

#### 2.1 Setup Astro de Base

**Actions** :
- [ ] Configurer `astro.config.mjs`
  ```javascript
  import { defineConfig } from 'astro/config';
  import tailwind from '@astrojs/tailwind';
  import mdx from '@astrojs/mdx';
  import sitemap from '@astrojs/sitemap';

  export default defineConfig({
    output: 'static',
    site: 'https://immotopia.com',
    integrations: [
      tailwind(),
      mdx(),
      sitemap(),
    ],
  });
  ```
- [ ] Créer layout de base (`src/layouts/BaseLayout.astro`)
- [ ] Migrer styles globaux
- [ ] Configurer routing Astro

#### 2.2 Migration Pages Marketing

**Pages prioritaires** :
- [ ] `/` (home) → `src/pages/index.astro`
- [ ] `/fonctionnalites` → `src/pages/fonctionnalites.astro`
- [ ] `/tarifs` → `src/pages/tarifs.astro`
- [ ] `/la-solution` → `src/pages/la-solution/index.astro`
- [ ] `/pour-qui` → `src/pages/pour-qui.astro`
- [ ] `/contact` → `src/pages/contact.astro`

**Actions par page** :
1. Copier le contenu JSX/TSX
2. Convertir en `.astro` (syntaxe Astro)
3. Extraire les composants React si nécessaire
4. Migrer les styles
5. Tester visuellement

**Exemple de conversion** :
```tsx
// Next.js (apps/web/src/app/page.tsx)
export default function Home() {
  return <HomePageContent />;
}
```

```astro
---
// Astro (apps/public-site/src/pages/index.astro)
import HomePageContent from '../components/pages/HomePageContent.astro';
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Accueil">
  <HomePageContent />
</BaseLayout>
```

#### 2.3 Migration Blog

**Actions** :
- [ ] Créer `src/pages/blog/index.astro` (listing)
- [ ] Créer `src/pages/blog/[slug].astro` (article)
- [ ] Créer fonction `getAllBlogPosts()` qui appelle API
  ```typescript
  // src/lib/api/blog.ts
  const API_URL = import.meta.env.PUBLIC_API_URL;
  
  export async function getAllBlogPosts() {
    const res = await fetch(`${API_URL}/api/blog/public`);
    const data = await res.json();
    return data.posts;
  }
  ```
- [ ] Utiliser `getStaticPaths()` pour générer les pages
  ```astro
  ---
  export async function getStaticPaths() {
    const posts = await getAllBlogPosts();
    return posts.map(post => ({
      params: { slug: post.slug },
      props: { post },
    }));
  }
  ---
  ```
- [ ] Migrer composants de blog (ArticleCard, etc.)

**Note** : Le blog peut être généré statiquement au build, ou fetché à la demande. Pour VPS, on privilégie le build statique.

#### 2.4 Migration Guides & FAQ

**Actions** :
- [ ] Créer `src/pages/ressources/guides/index.astro`
- [ ] Créer `src/pages/ressources/guides/[slug].astro`
- [ ] Créer `src/pages/faq.astro`
- [ ] Utiliser `getStaticPaths()` pour génération statique
- [ ] Appeler API pour récupérer données

#### 2.5 Génération Sitemap & RSS

**Actions** :
- [ ] Configurer `@astrojs/sitemap`
  ```javascript
  // astro.config.mjs
  import sitemap from '@astrojs/sitemap';
  
  export default defineConfig({
    integrations: [
      sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date(),
      }),
    ],
  });
  ```
- [ ] Créer `src/pages/rss.xml.ts` (endpoint statique)
  ```typescript
  export async function GET() {
    const posts = await getAllBlogPosts();
    // Générer RSS XML
    return new Response(rssXml, {
      headers: { 'Content-Type': 'application/xml' },
    });
  }
  ```
- [ ] Créer `src/pages/robots.txt.ts`

#### 2.6 Formulaires de Contact

**Actions** :
- [ ] Créer composant `<ContactForm />` (client-side)
- [ ] Utiliser `fetch()` pour envoyer à API
- [ ] Gérer CSRF token si nécessaire
- [ ] Validation côté client (Zod)

### Phase 3 : Migration Admin Panel → Vite + React (3-4 jours)

#### 3.1 Setup Vite + React Router

**Actions** :
- [ ] Configurer `vite.config.ts`
  ```typescript
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  
  export default defineConfig({
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://localhost:3002',
          changeOrigin: true,
        },
      },
    },
  });
  ```
- [ ] Configurer React Router (`src/routes/index.tsx`)
  ```tsx
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import AdminLayout from './layouts/AdminLayout';
  import LoginPage from './pages/LoginPage';
  import DashboardPage from './pages/DashboardPage';
  // ...
  
  export function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="blog/posts" element={<BlogPostsPage />} />
            {/* ... */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  ```

#### 3.2 Migration Authentification

**Actions** :
- [ ] Créer `src/lib/api/auth.ts`
  ```typescript
  const API_URL = import.meta.env.VITE_API_URL;
  
  export async function login(email: string, password: string) {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  }
  ```
- [ ] Créer `src/contexts/AuthContext.tsx`
- [ ] Créer `src/components/ProtectedRoute.tsx`
- [ ] Migrer page login (`/admin/login`)

#### 3.3 Migration Pages Admin

**Pages à migrer** :
- [ ] `/admin` → `src/pages/DashboardPage.tsx`
- [ ] `/admin/blog/posts` → `src/pages/blog/BlogPostsPage.tsx`
- [ ] `/admin/blog/posts/:id` → `src/pages/blog/BlogPostEditPage.tsx`
- [ ] `/admin/guides` → `src/pages/guides/GuidesPage.tsx`
- [ ] `/admin/faq` → `src/pages/faq/FaqPage.tsx`
- [ ] `/admin/media` → `src/pages/media/MediaPage.tsx`
- [ ] `/admin/menus` → `src/pages/menus/MenusPage.tsx`
- [ ] `/admin/settings` → `src/pages/settings/SettingsPage.tsx`

**Actions par page** :
1. Copier composants Next.js
2. Remplacer `next/link` par `react-router-dom` Link
3. Remplacer `next/navigation` par React Router hooks
4. Adapter les appels API (fetch au lieu de server components)
5. Gérer l'état avec useState/useEffect ou Context

#### 3.4 Migration Composants Admin

**Composants à migrer** :
- [ ] `AdminSidebar` → `src/components/layout/AdminSidebar.tsx`
- [ ] `AdminTopbar` → `src/components/layout/AdminTopbar.tsx`
- [ ] Composants de formulaires (blog, guides, FAQ)
- [ ] Composants de liste (tableaux, cards)
- [ ] Composants d'upload média

#### 3.5 Gestion d'État & API Client

**Actions** :
- [ ] Créer `src/lib/api/client.ts` (client API centralisé)
  ```typescript
  const API_URL = import.meta.env.VITE_API_URL;
  
  async function apiRequest(endpoint: string, options?: RequestInit) {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
    if (!res.ok) throw new Error('API Error');
    return res.json();
  }
  ```
- [ ] Créer hooks personnalisés (`useBlogPosts`, `useGuides`, etc.)
- [ ] Gérer les erreurs globalement
- [ ] Gérer le loading state

### Phase 4 : Adaptation Packages (1-2 jours)

#### 4.1 Package `@monorepo/ui`

**Actions** :
- [ ] Supprimer dépendances Next.js (`next/link`, `next/image`)
- [ ] Adapter composants pour Astro (supporter `.astro`)
- [ ] Adapter composants pour Vite (supporter React pur)
- [ ] Tester dans les deux apps

#### 4.2 Package `@monorepo/contracts`

**Actions** :
- [ ] Vérifier compatibilité (Zod fonctionne partout)
- [ ] Pas de changements nécessaires normalement

#### 4.3 Package `@monorepo/utils`

**Actions** :
- [ ] Vérifier compatibilité
- [ ] Adapter si dépendances Node.js spécifiques

### Phase 5 : Tests & Validation (2-3 jours)

#### 5.1 Tests Fonctionnels

**Actions** :
- [ ] Tester toutes les pages publiques (Astro)
- [ ] Tester toutes les pages admin (Vite)
- [ ] Tester formulaires de contact
- [ ] Tester authentification admin
- [ ] Tester CRUD blog/guides/FAQ
- [ ] Tester upload média
- [ ] Vérifier sitemap.xml
- [ ] Vérifier rss.xml
- [ ] Vérifier robots.txt

#### 5.2 Tests de Performance

**Actions** :
- [ ] Mesurer temps de build Astro
- [ ] Mesurer temps de build Vite
- [ ] Mesurer utilisation RAM (baseline vs nouvelle)
- [ ] Tester temps de chargement pages
- [ ] Vérifier taille des bundles

#### 5.3 Tests SEO

**Actions** :
- [ ] Vérifier metadata (Open Graph, Twitter Cards)
- [ ] Vérifier structured data (JSON-LD)
- [ ] Tester avec Google Search Console
- [ ] Vérifier sitemap avec Google

### Phase 6 : Déploiement Progressif (2-3 jours)

#### 6.1 Préparation Serveur

**Actions** :
- [ ] Créer dossiers sur serveur :
  ```bash
  sudo mkdir -p /var/www/public-site
  sudo mkdir -p /var/www/admin-panel
  ```
- [ ] Configurer permissions
- [ ] Préparer backup de l'ancien site

#### 6.2 Configuration Nginx

**Actions** :
- [ ] Créer config Nginx pour site public
  ```nginx
  server {
    listen 80;
    server_name immotopia.com www.immotopia.com;
    
    root /var/www/public-site;
    index index.html;
    
    location / {
      try_files $uri $uri/ /index.html;
    }
    
    # Cache statique
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
      expires 1y;
      add_header Cache-Control "public, immutable";
    }
  }
  ```
- [ ] Créer config Nginx pour admin panel
  ```nginx
  server {
    listen 80;
    server_name admin.immotopia.com;
    
    root /var/www/admin-panel;
    index index.html;
    
    # SPA routing
    location / {
      try_files $uri $uri/ /index.html;
    }
    
    # Proxy API
    location /api {
      proxy_pass http://localhost:3002;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }
  }
  ```
- [ ] Configurer reverse proxy pour API
  ```nginx
  location /api {
    proxy_pass http://localhost:3002;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
  ```

#### 6.3 Build & Déploiement

**Actions** :
- [ ] Build Astro : `cd apps/public-site && pnpm build`
- [ ] Build Vite : `cd apps/admin-panel && pnpm build`
- [ ] Copier fichiers vers serveur
- [ ] Redémarrer Nginx
- [ ] Vérifier que tout fonctionne

#### 6.4 Migration Progressive (ZERO DOWNTIME)

**Stratégie** :

1. **Étape 1** : Déployer Astro sur sous-domaine (`staging.immotopia.com`)
   - Tester complètement
   - Valider avec stakeholders

2. **Étape 2** : Déployer admin panel sur sous-domaine (`admin-staging.immotopia.com`)
   - Tester authentification
   - Tester CRUD

3. **Étape 3** : Basculer DNS progressivement
   - Utiliser DNS avec poids (si possible)
   - Ou basculer manuellement après validation

4. **Étape 4** : Surveiller logs et métriques
   - Vérifier erreurs Nginx
   - Vérifier utilisation RAM
   - Vérifier temps de réponse

5. **Étape 5** : Une fois stable, supprimer Next.js
   - Supprimer `apps/web`
   - Nettoyer dépendances
   - Mettre à jour documentation

### Phase 7 : Nettoyage (1 jour)

#### 7.1 Suppression Next.js

**Actions** :
- [ ] Supprimer `apps/web`
- [ ] Supprimer dépendances Next.js du workspace
- [ ] Mettre à jour `pnpm-workspace.yaml`
- [ ] Nettoyer `package.json` racine

#### 7.2 Documentation

**Actions** :
- [ ] Mettre à jour README.md
- [ ] Documenter nouvelle architecture
- [ ] Documenter processus de déploiement
- [ ] Créer guide de développement

---

## 🚀 Déploiement

### Architecture de Déploiement

```
┌─────────────────────────────────────────────────┐
│              VPS (147.93.44.169)                 │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │         NGINX (Port 80/443)              │  │
│  │  - immotopia.com → /var/www/public-site  │  │
│  │  - admin.immotopia.com → /var/www/admin   │  │
│  │  - /api/* → proxy → localhost:3002        │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │    PM2 Process (Node.js)                   │  │
│  │    - apps/api (Fastify)                   │  │
│  │    - Port: 3002                           │  │
│  │    - RAM: ~50-100MB                       │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │    PostgreSQL                              │  │
│  │    - Port: 5432                           │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### Fichiers Statiques

**Site Public (Astro)** :
- Localisation : `/var/www/public-site`
- Contenu : HTML, CSS, JS, images
- Servi par : Nginx (pas de Node)
- RAM utilisée : 0 MB (fichiers statiques)

**Admin Panel (Vite)** :
- Localisation : `/var/www/admin-panel`
- Contenu : `index.html` + assets JS/CSS
- Servi par : Nginx (pas de Node)
- RAM utilisée : 0 MB (fichiers statiques)

### Processus Node.js

**API Fastify** :
- Processus : 1 seul (PM2)
- Port : 3002 (localhost uniquement)
- RAM estimée : 50-100 MB
- CPU : Faible (requêtes API seulement)

### Variables d'Environnement

**API (`apps/api/.env`)** :
```env
DATABASE_URL=postgresql://...
PORT=3002
HOST=0.0.0.0
NODE_ENV=production
PUBLIC_SITE_URL=https://immotopia.com
ADMIN_PANEL_URL=https://admin.immotopia.com
JWT_SECRET=...
CSRF_SECRET=...
```

**Astro (`apps/public-site/.env`)** :
```env
PUBLIC_API_URL=https://immotopia.com/api
PUBLIC_APP_URL=https://immotopia.com
```

**Vite (`apps/admin-panel/.env`)** :
```env
VITE_API_URL=https://immotopia.com/api
```

### Scripts de Déploiement

**Build Script (`deploy.sh`)** :
```bash
#!/bin/bash
set -e

echo "🔨 Building public site (Astro)..."
cd apps/public-site
pnpm build
sudo rm -rf /var/www/public-site/*
sudo cp -r dist/* /var/www/public-site/

echo "🔨 Building admin panel (Vite)..."
cd ../admin-panel
pnpm build
sudo rm -rf /var/www/admin-panel/*
sudo cp -r dist/* /var/www/admin-panel/

echo "🔄 Restarting API..."
cd ../api
pm2 restart immotopia-api || pm2 start ecosystem.config.js

echo "✅ Deployment complete!"
```

**PM2 Config (`ecosystem.config.js`)** :
```javascript
module.exports = {
  apps: [{
    name: 'immotopia-api',
    script: 'apps/api/dist/index.js',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
    },
    max_memory_restart: '200M',
  }],
};
```

---

## 💡 Bénéfices de l'Architecture

### Réduction RAM

**Avant (Next.js)** :
- Next.js server : ~200-300 MB
- Build process : ~500 MB+ (peak)
- Total : ~500-800 MB

**Après (Astro + Vite + Fastify)** :
- Astro build : ~100-200 MB (temporaire, seulement au build)
- Vite build : ~50-100 MB (temporaire, seulement au build)
- Fastify API : ~50-100 MB (runtime)
- **Total runtime : ~50-100 MB** (réduction de 80-90%)

### Réduction CPU

**Avant** :
- Next.js SSR à chaque requête
- Rendering React côté serveur
- Overhead de routing Next.js

**Après** :
- Fichiers statiques servis par Nginx (très rapide)
- Pas de rendering serveur pour le public
- API Fastify (léger, async)

### Temps de Build

**Avant (Next.js)** :
- Build complet : ~3-5 minutes
- Optimisation images, code splitting, etc.

**Après** :
- Astro build : ~30-60 secondes (génération statique simple)
- Vite build : ~20-40 secondes (bundle simple)
- **Total : ~1-2 minutes** (réduction de 50-60%)

### SEO

**Avant** :
- Next.js SSR (bon pour SEO)
- Mais overhead inutile

**Après** :
- Astro génère HTML statique (excellent pour SEO)
- Pas de JavaScript nécessaire pour le contenu
- Temps de chargement plus rapide

### Maintenance

**Avant** :
- Dépendances Next.js lourdes
- Mises à jour Next.js fréquentes
- Complexité de routing

**Après** :
- Astro : framework simple, moins de dépendances
- Vite : outil de build standard
- Fastify : API légère et performante

---

## ⚠️ Risques & Mitigations

### Risque 1 : Perte de Fonctionnalités Next.js

**Risque** :
- Certaines fonctionnalités Next.js peuvent être difficiles à migrer
- Exemple : `next/image` optimization

**Mitigation** :
- Audit complet avant migration
- Identifier alternatives (ex: `sharp` pour images)
- Tester chaque fonctionnalité individuellement

### Risque 2 : Problèmes de Routing (Admin Panel)

**Risque** :
- React Router peut avoir des problèmes avec les routes imbriquées
- Refresh sur `/admin/blog/posts` peut 404

**Mitigation** :
- Configurer Nginx correctement (`try_files`)
- Tester toutes les routes après déploiement
- Utiliser HashRouter si nécessaire (moins idéal)

### Risque 3 : Problèmes CORS

**Risque** :
- CORS mal configuré entre Astro/Vite et API

**Mitigation** :
- Configurer CORS correctement dans Fastify
- Tester en développement local
- Vérifier headers dans production

### Risque 4 : Perte de Données lors de Migration

**Risque** :
- Erreur lors de la migration peut causer perte de données

**Mitigation** :
- Backup complet de la base de données avant migration
- Tester migration sur environnement de staging
- Avoir un plan de rollback

### Risque 5 : Problèmes de Build

**Risque** :
- Build Astro/Vite peut échouer
- Dépendances manquantes

**Mitigation** :
- Tester builds localement avant déploiement
- Automatiser les builds avec CI/CD
- Documenter toutes les dépendances

### Risque 6 : Performance Inattendue

**Risque** :
- Performance pire qu'attendu
- Problèmes de cache

**Mitigation** :
- Benchmark avant/après
- Configurer cache Nginx correctement
- Monitorer métriques après déploiement

---

## 📊 Métriques de Succès

### Métriques Techniques

- [ ] **RAM utilisée** : < 150 MB (runtime)
- [ ] **Temps de build** : < 2 minutes (total)
- [ ] **Temps de chargement pages** : < 2 secondes (First Contentful Paint)
- [ ] **Taille bundle admin** : < 500 KB (gzipped)
- [ ] **Uptime API** : > 99.9%

### Métriques Fonctionnelles

- [ ] **Toutes les pages publiques** fonctionnent
- [ ] **Toutes les pages admin** fonctionnent
- [ ] **Formulaires de contact** fonctionnent
- [ ] **Authentification admin** fonctionne
- [ ] **CRUD blog/guides/FAQ** fonctionne
- [ ] **Sitemap.xml** généré correctement
- [ ] **RSS.xml** généré correctement

### Métriques SEO

- [ ] **Metadata** présente sur toutes les pages
- [ ] **Structured data** valide
- [ ] **Sitemap** soumis à Google
- [ ] **Pages indexées** par Google

---

## 📝 Checklist de Migration

### Pré-Migration

- [ ] Audit complet du code Next.js
- [ ] Backup base de données
- [ ] Backup fichiers actuels
- [ ] Documentation de l'architecture actuelle

### Setup

- [ ] Créer `apps/public-site` (Astro)
- [ ] Créer `apps/admin-panel` (Vite)
- [ ] Configurer TypeScript
- [ ] Configurer Tailwind CSS
- [ ] Mettre à jour workspace

### Migration Site Public

- [ ] Migrer page home
- [ ] Migrer pages marketing
- [ ] Migrer blog
- [ ] Migrer guides
- [ ] Migrer FAQ
- [ ] Générer sitemap
- [ ] Générer RSS
- [ ] Tester formulaires

### Migration Admin Panel

- [ ] Setup React Router
- [ ] Migrer authentification
- [ ] Migrer dashboard
- [ ] Migrer pages blog
- [ ] Migrer pages guides
- [ ] Migrer pages FAQ
- [ ] Migrer pages média
- [ ] Migrer pages menus
- [ ] Migrer pages settings

### Adaptation Packages

- [ ] Adapter `@monorepo/ui`
- [ ] Vérifier `@monorepo/contracts`
- [ ] Vérifier `@monorepo/utils`

### Tests

- [ ] Tests fonctionnels
- [ ] Tests de performance
- [ ] Tests SEO
- [ ] Tests de déploiement

### Déploiement

- [ ] Configuration Nginx
- [ ] Build Astro
- [ ] Build Vite
- [ ] Déploiement staging
- [ ] Tests staging
- [ ] Déploiement production
- [ ] Monitoring

### Post-Migration

- [ ] Supprimer Next.js
- [ ] Nettoyer dépendances
- [ ] Mettre à jour documentation
- [ ] Former l'équipe

---

## 🔗 Références

### Documentation

- [Astro Documentation](https://docs.astro.build)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Fastify Documentation](https://www.fastify.io)
- [Nginx Configuration](https://nginx.org/en/docs/)

### Outils

- [Astro Migration Guide](https://docs.astro.build/en/guides/migrate-to-astro/)
- [Vite Migration Guide](https://vitejs.dev/guide/migration.html)

---

## 📅 Timeline Estimé

- **Phase 1** (Préparation) : 1-2 jours
- **Phase 2** (Migration Site Public) : 3-5 jours
- **Phase 3** (Migration Admin Panel) : 3-4 jours
- **Phase 4** (Adaptation Packages) : 1-2 jours
- **Phase 5** (Tests) : 2-3 jours
- **Phase 6** (Déploiement) : 2-3 jours
- **Phase 7** (Nettoyage) : 1 jour

**Total estimé** : 13-20 jours (2.5-4 semaines)

---

**Statut** : 📝 Draft - En attente de validation

