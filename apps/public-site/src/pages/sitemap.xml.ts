/**
 * Dynamic Sitemap Generation
 * Fetches blog posts and guides from API
 */

import { getAllBlogPosts } from '../lib/api/blog';
import { getAllGuides } from '../lib/api/guides';
import { getAllFeatureSlugs } from '../lib/features-content';

export async function GET() {
  const siteUrl = import.meta.env.PUBLIC_APP_URL || 'https://immotopia.immo-annonces.fr';
  
  // Fetch content
  const [blogPosts, guides, featureSlugs] = await Promise.all([
    getAllBlogPosts().catch(() => []),
    getAllGuides().catch(() => []),
    Promise.resolve(getAllFeatureSlugs()),
  ]);

  // Static pages
  const staticPages = [
    '',
    '/fonctionnalites',
    '/tarifs',
    '/contact',
    '/faq',
    '/blog',
    '/ressources/guides',
  ];

  // Generate sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
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

