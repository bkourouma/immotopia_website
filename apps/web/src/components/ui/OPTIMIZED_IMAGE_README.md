# OptimizedImage Component

Composant wrapper pour Next.js Image avec optimisations par défaut pour les performances et le SEO.

## Features

- ✅ Formats modernes automatiques (WebP, AVIF)
- ✅ Lazy loading par défaut
- ✅ Images responsive avec sizes
- ✅ Placeholder blur optionnel
- ✅ Qualité optimisée (85% par défaut)

## Utilisation

### Image basique

```tsx
import { OptimizedImage } from '@/components/ui';

<OptimizedImage
  src="/images/hero.jpg"
  alt="Description de l'image"
  width={1200}
  height={600}
/>
```

### Image avec priority (above-the-fold)

```tsx
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority={true}
  sizes="100vw"
/>
```

### Image avec placeholder blur

```tsx
<OptimizedImage
  src="/images/feature.jpg"
  alt="Fonctionnalité"
  width={800}
  height={600}
  blurPlaceholder={true}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Utilisation avec image-utils

```tsx
import { OptimizedImage } from '@/components/ui';
import { getImageSizes, generateImageAlt } from '@/lib/image-utils';

<OptimizedImage
  src="/images/card.jpg"
  alt={generateImageAlt('Titre', 'Context')}
  width={400}
  height={300}
  sizes={getImageSizes('card')}
/>
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `src` | `string` | **requis** | Chemin de l'image (relatif à /public) |
| `alt` | `string` | **requis** | Texte alternatif pour l'accessibilité |
| `width` | `number` | **requis** | Largeur de l'image |
| `height` | `number` | **requis** | Hauteur de l'image |
| `className` | `string` | - | Classes CSS additionnelles |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Mode de chargement |
| `priority` | `boolean` | `false` | Charger en priorité (above-the-fold) |
| `blurPlaceholder` | `boolean` | `false` | Afficher un placeholder blur |
| `sizes` | `string` | `'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'` | Sizes pour responsive |

Toutes les autres props de Next.js Image sont supportées.

## Configuration Next.js

Le composant utilise la configuration dans `next.config.js` :

```js
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

## Bonnes pratiques

1. **Toujours fournir alt text descriptif** pour l'accessibilité et le SEO
2. **Utiliser priority={true}** uniquement pour les images above-the-fold (Hero, etc.)
3. **Utiliser sizes appropriés** selon le contexte (card, hero, thumbnail, etc.)
4. **Optimiser les images avant upload** (compression, dimensions)
5. **Utiliser WebP ou AVIF** pour de meilleures performances (fait automatiquement par Next.js)

## Helpers disponibles

- `getImageSizes(context)` : Génère sizes selon le contexte
- `generateImageAlt(title, context?)` : Génère alt-text SEO-friendly
- `isDecorativeImage(context)` : Vérifie si image est décorative
- `getAspectRatioDimensions(ratio, width?)` : Calcule dimensions selon ratio

