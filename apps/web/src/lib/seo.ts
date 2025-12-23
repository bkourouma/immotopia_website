import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Génère les métadonnées SEO pour une page
 * @param config Configuration SEO
 * @returns Metadata object pour Next.js
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage,
    noindex = false,
    nofollow = false,
  } = config;

  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'ImmoTopia';
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${siteUrl}${ogImage}`
    : `${siteUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
    alternates: {
      canonical: canonicalUrl || undefined,
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: canonicalUrl || siteUrl,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

/**
 * Configuration SEO par défaut pour le site
 */
export const defaultSEO: SEOConfig = {
  title: 'ImmoTopia - Plateforme SaaS de gestion immobilière',
  description:
    'Solution SaaS complète pour la gestion immobilière professionnelle. Gestion des biens, CRM, gestion locative, syndic, promotion immobilière.',
  keywords: [
    'immobilier',
    'SaaS',
    'gestion immobilière',
    'agence immobilière',
    'promoteur immobilier',
    'syndic copropriété',
    'gestion locative',
    'CRM immobilier',
    'logiciel immobilier',
  ],
};

