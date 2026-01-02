import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getFeatureContentBySlug, getAllFeatureSlugs } from '@/lib/features-content';
import { getFeatureById } from '@/lib/features';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import FeaturePageClient from './FeaturePageClient';

interface FeaturePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Génère les métadonnées SEO pour une page de fonctionnalité
 */
export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getFeatureContentBySlug(slug);

  if (!content) {
    return {};
  }

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';
  const canonicalUrl = `/fonctionnalites/${slug}`;

  return generateSEOMetadata(
    {
      title: content.seoTitle,
      description: content.seoDescription,
      canonicalUrl,
      ogImage: `${siteUrl}/og-feature-${slug}.jpg`,
    },
    canonicalUrl
  );
}

/**
 * Génère les paramètres statiques pour toutes les pages de fonctionnalités
 */
export async function generateStaticParams() {
  const slugs = getAllFeatureSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  
  // Récupérer le contenu SEO
  const content = getFeatureContentBySlug(slug);
  
  // Récupérer les données de base de la fonctionnalité
  const feature = getFeatureById(slug);

  if (!content || !feature) {
    notFound();
  }

  return <FeaturePageClient feature={feature} content={content} />;
}
