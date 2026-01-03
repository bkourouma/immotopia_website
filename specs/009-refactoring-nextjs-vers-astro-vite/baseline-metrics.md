# Métriques de Base - Avant Migration

**Date** : 2026-01-02  
**Tâche** : T-009-000

---

## 💾 Utilisation RAM (Baseline)

### Mesure Actuelle (Next.js)

**Environnement** : VPS avec Next.js 15

**Processus Node.js** :
- Next.js server (production) : ~200-300 MB
- Build process (peak) : ~500-800 MB
- **Total runtime** : ~200-300 MB

**Note** : Ces valeurs sont des estimations basées sur des benchmarks typiques de Next.js 15. Une mesure réelle sur le serveur serait idéale.

### Objectif Après Migration

**Astro** :
- Build process : ~100-200 MB (temporaire, seulement au build)
- Runtime : 0 MB (fichiers statiques servis par Nginx)

**Vite** :
- Build process : ~50-100 MB (temporaire, seulement au build)
- Runtime : 0 MB (fichiers statiques servis par Nginx)

**Fastify API** :
- Runtime : ~50-100 MB (un seul processus PM2)

**Total runtime** : ~50-100 MB (réduction de 70-80%)

---

## ⚡ Temps de Build (Baseline)

### Mesure Actuelle (Next.js)

**Build Next.js** :
- Temps estimé : ~3-5 minutes
- Optimisations : Images, code splitting, etc.

### Objectif Après Migration

**Astro** :
- Temps estimé : ~30-60 secondes
- Génération statique simple

**Vite** :
- Temps estimé : ~20-40 secondes
- Bundle simple

**Total** : ~1-2 minutes (réduction de 50-60%)

---

## 📦 Taille des Bundles

### Actuel (Next.js)

**Next.js build output** :
- `.next/` : ~50-100 MB (avec cache)
- Pages optimisées avec code splitting

### Objectif Après Migration

**Astro** :
- `dist/` : ~10-20 MB (HTML/CSS/JS statiques)
- Pas de bundle JS sauf si nécessaire

**Vite** :
- `dist/` : ~2-5 MB (bundle JS/CSS)
- Code splitting automatique

**Total** : ~12-25 MB (réduction significative)

---

## 🚀 Temps de Chargement

### Actuel (Next.js)

**First Contentful Paint (FCP)** :
- Estimé : ~1.5-2.5 secondes
- SSR overhead

**Time to Interactive (TTI)** :
- Estimé : ~2-3 secondes

### Objectif Après Migration

**Astro (fichiers statiques)** :
- FCP : < 1 seconde (Nginx serve directement)
- TTI : < 1.5 secondes

**Vite (SPA)** :
- FCP : < 1.5 secondes
- TTI : < 2 secondes

---

## 📊 Métriques SEO

### Actuel (Next.js)

**Avantages** :
- ✅ SSR pour SEO
- ✅ Metadata dynamique
- ✅ Sitemap généré
- ✅ RSS feed

**Points à maintenir** :
- Metadata complète
- Structured data (JSON-LD)
- Sitemap.xml
- RSS.xml

### Objectif Après Migration

**Astro** :
- ✅ HTML statique (excellent pour SEO)
- ✅ Metadata complète
- ✅ Structured data
- ✅ Sitemap.xml (généré au build)
- ✅ RSS.xml (généré au build)
- ✅ Pas de JavaScript nécessaire pour le contenu

**Amélioration attendue** :
- Temps de chargement plus rapide = meilleur score Core Web Vitals
- HTML statique = meilleur crawl par les moteurs de recherche

---

## 🔧 Métriques Techniques

### Dépendances

**Next.js actuel** :
- `next` : ~50 MB
- `react` + `react-dom` : ~10 MB
- Autres dépendances : ~100 MB
- **Total node_modules** : ~160 MB

**Après migration** :

**Astro** :
- `astro` : ~30 MB
- Autres dépendances : ~50 MB
- **Total node_modules** : ~80 MB

**Vite** :
- `vite` : ~20 MB
- `react` + `react-dom` : ~10 MB
- Autres dépendances : ~40 MB
- **Total node_modules** : ~70 MB

**Total** : ~150 MB (légère réduction)

---

## 📈 Métriques de Performance

### Lighthouse Score (Estimé)

**Actuel (Next.js)** :
- Performance : 85-90
- SEO : 95-100
- Accessibility : 90-95
- Best Practices : 90-95

**Objectif (Astro + Vite)** :
- Performance : 95-100 (fichiers statiques)
- SEO : 95-100 (maintenu)
- Accessibility : 90-95 (maintenu)
- Best Practices : 90-95 (maintenu)

---

## 🎯 Résumé des Objectifs

| Métrique | Actuel | Objectif | Réduction |
|----------|--------|----------|-----------|
| RAM runtime | ~200-300 MB | ~50-100 MB | 70-80% |
| Temps de build | ~3-5 min | ~1-2 min | 50-60% |
| Taille bundle | ~50-100 MB | ~12-25 MB | 50-75% |
| FCP | ~1.5-2.5s | < 1s | 50-60% |
| TTI | ~2-3s | < 1.5s | 25-50% |

---

## 📝 Notes

- Les métriques actuelles sont des estimations basées sur des benchmarks typiques
- Une mesure réelle sur le serveur de production serait idéale avant migration
- Les objectifs sont réalistes et basés sur les caractéristiques d'Astro et Vite
- La réduction RAM est le bénéfice principal de cette migration

---

## ✅ Prochaines Étapes

1. **Mesurer réellement** sur le serveur de production (si possible)
2. **Documenter** les métriques après migration
3. **Comparer** avant/après pour valider les objectifs
4. **Optimiser** si nécessaire après migration



