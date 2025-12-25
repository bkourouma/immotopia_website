import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

/**
 * Layout pour les pages des guides
 * Définit les métadonnées SEO par défaut pour les guides
 */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Guides pratiques ImmoTopia - Téléchargez nos guides gratuits',
  description:
    'Téléchargez nos guides pratiques gratuits pour améliorer votre gestion immobilière : digitalisation, gestion de copropriété, ROI et rentabilité.',
  keywords: ['guide immobilier', 'guide gestion immobilière', 'guide téléchargeable', 'PDF gratuit'],
  canonicalUrl: '/ressources/guides',
});

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

