/**
 * Utilitaires pour la gestion et l'optimisation des images
 */

/**
 * Génère les sizes pour responsive images selon le contexte
 */
export function getImageSizes(context: 'hero' | 'card' | 'thumbnail' | 'full' | 'sidebar'): string {
  const sizesMap: Record<string, string> = {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px',
    card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    thumbnail: '(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px',
    full: '100vw',
    sidebar: '(max-width: 1024px) 100vw, 300px',
  };

  return sizesMap[context] || sizesMap.card;
}

/**
 * Génère un alt-text SEO-friendly depuis un titre
 */
export function generateImageAlt(title: string, context?: string): string {
  if (context) {
    return `${title} - ${context} | ImmoTopia`;
  }
  return `${title} | ImmoTopia`;
}

/**
 * Vérifie si une image est décorative (retourne alt vide)
 */
export function isDecorativeImage(context: string): boolean {
  const decorativePatterns = ['decoration', 'ornament', 'pattern', 'background'];
  return decorativePatterns.some((pattern) => context.toLowerCase().includes(pattern));
}

/**
 * Calcule les dimensions d'aspect ratio pour Next.js Image
 */
export function getAspectRatioDimensions(
  aspectRatio: number,
  baseWidth: number = 1200
): { width: number; height: number } {
  return {
    width: baseWidth,
    height: Math.round(baseWidth / aspectRatio),
  };
}

/**
 * Ratios d'aspect courants
 */
export const AspectRatios = {
  square: 1,
  landscape: 16 / 9,
  portrait: 3 / 4,
  hero: 21 / 9,
  card: 4 / 3,
} as const;

