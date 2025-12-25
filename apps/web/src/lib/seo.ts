import { Metadata } from 'next';
import { getSEOKeywordsForPage, generateMetaKeywords } from './seo/keywords';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
  /** Utiliser automatiquement les keywords de la configuration par page */
  usePageKeywords?: boolean;
}

/**
 * Génère les métadonnées SEO pour une page
 * @param config Configuration SEO
 * @param pathname Chemin de la page (pour récupérer les keywords auto)
 * @returns Metadata object pour Next.js
 */
export function generateMetadata(config: SEOConfig, pathname?: string): Metadata {
  const {
    title,
    description,
    keywords: configKeywords = [],
    canonicalUrl,
    ogImage,
    noindex = false,
    nofollow = false,
    usePageKeywords = false,
  } = config;

  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'ImmoTopia';
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';
  
  // Limiter le title à 60 caractères (recommandation SEO)
  const truncatedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  const fullTitle = `${truncatedTitle} | ${siteName}`;
  
  // Limiter la description à 155 caractères (recommandation SEO)
  const truncatedDescription = description.length > 155 ? description.substring(0, 152) + '...' : description;
  
  const imageUrl = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${siteUrl}${ogImage}`
    : `${siteUrl}/og-image.jpg`;

  // Utiliser les keywords de la page si activé
  let keywords = configKeywords;
  if (usePageKeywords && pathname) {
    const metaKeywordsString = generateMetaKeywords(pathname);
    keywords = metaKeywordsString ? metaKeywordsString.split(', ') : keywords;
  }

  return {
    title: fullTitle,
    description: truncatedDescription,
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

