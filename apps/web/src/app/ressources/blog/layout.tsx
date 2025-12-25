import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

/**
 * Layout pour les pages du blog
 * Définit les métadonnées SEO par défaut pour le blog
 */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog ImmoTopia - Actualités et conseils gestion immobilière',
  description:
    'Découvrez nos articles, guides et actualités sur la gestion immobilière professionnelle en Afrique de l\'Ouest.',
  keywords: ['blog immobilier', 'conseils gestion immobilière', 'actualités immobilier', 'guide immobilier'],
  canonicalUrl: '/ressources/blog',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

