/**
 * Dynamic Sitemap Generation
 * Fetches blog posts and guides from API
 */

import { getAllBlogPosts } from '../lib/api/blog';
import { getAllGuides } from '../lib/api/guides';
import { getAllFeatureSlugs } from '../lib/features-content';

export async function GET() {
  const siteUrl = import.meta.env.PUBLIC_APP_URL || 'https://immotopia.cloud';
  
  // Fetch content
  const [blogPosts, guides, featureSlugs] = await Promise.all([
    getAllBlogPosts().catch(() => []),
    getAllGuides().catch(() => []),
    Promise.resolve(getAllFeatureSlugs()),
  ]);

  // Static pages - All SEO pages
  const staticPages = [
    // Homepage
    '',
    
    // Main navigation pages
    '/fonctionnalites',
    '/la-solution',
    '/la-solution/saas-gestion',
    '/la-solution/portail-annonces',
    '/la-solution/technologies',
    '/pour-qui',
    '/pourquoi-immotopia',
    '/tarifs',
    '/contact',
    '/faq',
    
    // Resources pages
    '/ressources',
    '/ressources/blog',
    '/ressources/guides',
    '/ressources/faq',
    '/ressources/actualites',
    '/blog',
    
    // "Pour qui" pages
    '/pour-qui/agences-immobilieres',
    '/pour-qui/gestionnaires-locatifs',
    '/pour-qui/promoteurs-immobiliers',
    '/pour-qui/proprietaires-bailleurs',
    '/pour-qui/syndics',
    
    // SEO thematic pages (Local - Côte d'Ivoire)
    '/gestion-locative-cote-divoire',
    '/logiciel-immobilier-cote-divoire',
    '/logiciel-annonces-immobilieres-cote-divoire',
    '/logiciel-syndic-copropriete-cote-divoire',
    '/meilleur-logiciel-immobilier-cote-divoire',
    '/crm-immobilier-cote-divoire',
    '/paiement-loyer-charges-mobile-money-cote-divoire',
    '/maintenance-immobiliere-ticketing-cote-divoire',
    '/tableaux-de-bord-kpi-immobilier-cote-divoire',
    
    // SEO thematic pages (Geographic - Africa)
    '/logiciel-immobilier-afrique',
    
    // Comparative pages
    '/immotopia-vs-excel',
    '/gestion-locative-vs-excel',
    
    // Guides
    '/guides/choisir-logiciel-immobilier-cote-divoire',
    '/guides/crm-immobilier-bonnes-pratiques',
    '/guides/gerer-agence-immobiliere-cote-divoire',
    '/guides/gerer-copropriete-cote-divoire',
    '/guides/paiement-loyer-mobile-money-cote-divoire',
    '/guides/reduire-impayes-loyers-cote-divoire',
    '/guides/structurer-portefeuille-immobilier-rentable',
    
    // Modèles
    '/modeles/quittance-loyer-cote-divoire',
    '/modeles/contrat-bail-habitation-cote-divoire',
    '/modeles/appel-de-charges-copropriete-cote-divoire',
    '/modeles/bail-commercial-cote-divoire',
    '/modeles/etat-des-lieux-cote-divoire',
    '/modeles/releve-loyers-etat-de-compte-cote-divoire',
    
    // Vision pages
    '/vision/digitalisation-immobilier-afrique',
  ];

  // Priority mapping for different page types
  const getPriority = (path: string): string => {
    if (path === '') return '1.0'; // Homepage
    if (path.startsWith('/pour-qui/')) return '0.9'; // Persona pages
    if (path.startsWith('/logiciel-immobilier') || path.startsWith('/gestion-locative') || path.startsWith('/crm-immobilier')) return '0.9'; // Main SEO pages
    if (path.startsWith('/guides/') || path.startsWith('/modeles/')) return '0.8'; // Guides and models
    if (path.startsWith('/la-solution') || path.startsWith('/pourquoi-immotopia')) return '0.8'; // Solution pages
    if (path.startsWith('/vision/')) return '0.7'; // Vision pages
    return '0.8'; // Default
  };

  const getChangeFreq = (path: string): string => {
    if (path.startsWith('/guides/') || path.startsWith('/modeles/')) return 'monthly';
    if (path.startsWith('/vision/')) return 'monthly';
    return 'weekly';
  };

  // Generate sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>${getChangeFreq(path)}</changefreq>
    <priority>${getPriority(path)}</priority>
  </url>`
    )
    .join('\n')}
  ${blogPosts
    .map(
      (post) => `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n')}
  ${guides
    .map(
      (guide) => `  <url>
    <loc>${siteUrl}/ressources/guides/${guide.slug}</loc>
    <lastmod>${new Date(guide.updatedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n')}
  ${featureSlugs
    .map(
      (slug) => `  <url>
    <loc>${siteUrl}/fonctionnalites/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

