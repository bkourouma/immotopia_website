'use client';

/**
 * Composant wrapper pour Next.js Image avec optimisations par défaut
 * - Lazy loading automatique
 * - Formats modernes (WebP, AVIF)
 * - Responsive images
 * - Placeholder blur optionnel
 */

import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  /** Chemin de l'image (relatif à /public) */
  src: string;
  /** Texte alternatif obligatoire pour l'accessibilité */
  alt: string;
  /** Largeur de l'image */
  width: number;
  /** Hauteur de l'image */
  height: number;
  /** Classes CSS additionnelles */
  className?: string;
  /** Activer le lazy loading (défaut: true) */
  loading?: 'lazy' | 'eager';
  /** Activer le placeholder blur (défaut: false) */
  blurPlaceholder?: boolean;
  /** Priorité de chargement (défaut: false, utiliser true pour images above-the-fold) */
  priority?: boolean;
  /** Sizes pour responsive images (défaut: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw") */
  sizes?: string;
}

/**
 * Composant Image optimisé pour Next.js
 * Utilise automatiquement WebP/AVIF et lazy loading
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  blurPlaceholder = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}: OptimizedImageProps) {
  // S'assurer que src commence par / pour les images du public folder
  const imageSrc = src.startsWith('/') ? src : `/${src}`;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? undefined : loading}
      priority={priority}
      sizes={sizes}
      placeholder={blurPlaceholder ? 'blur' : undefined}
      blurDataURL={
        blurPlaceholder
          ? `data:image/svg+xml;base64,${Buffer.from(
              `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/></svg>`
            ).toString('base64')}`
          : undefined
      }
      className={className}
      quality={85} // Bon compromis qualité/taille
      {...props}
    />
  );
}
