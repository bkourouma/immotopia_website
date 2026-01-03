import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * Génère automatiquement le robots.txt pour le site
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

