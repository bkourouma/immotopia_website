import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/content/blog';
import { getAllGuides } from '@/lib/content/guides';
import { SITE_URL } from '@/lib/seo';

/**
 * Génère automatiquement le sitemap.xml pour le site
 * Inclut les articles de blog et guides publiés depuis la DB
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  
  // Récupérer tous les articles de blog publiés (depuis DB ou fichiers) pour avoir les dates
  const blogPosts = await getAllBlogPosts();
  
  // Récupérer tous les guides publiés (depuis DB ou fichiers)
  const guides = await getAllGuides();

  // Routes principales du site
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/la-solution`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/la-solution/saas-gestion`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/la-solution/portail-annonces`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/la-solution/technologies`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fonctionnalites`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pour-qui`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pour-qui/agences-immobilieres`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pour-qui/promoteurs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pour-qui/syndics`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pour-qui/gestionnaires`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pour-qui/proprietaires`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pourquoi-immotopia`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ressources`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ressources/guides`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ressources/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ressources/actualites`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Ajouter toutes les routes d'articles de blog avec leurs vraies dates
  // Filtrer uniquement les articles publiés (ne pas inclure les brouillons)
  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.published !== false && post.slug) // Seulement les articles publiés avec slug valide
    .map((post) => {
      // Utiliser la date de mise à jour si disponible, sinon la date de publication
      const lastModified = (post as any).updatedAt 
        ? new Date((post as any).updatedAt)
        : post.date 
        ? new Date(post.date)
        : new Date();
      
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    });

  // Ajouter toutes les routes de guides publiés
  const guideRoutes: MetadataRoute.Sitemap = guides
    .filter((guide) => !guide.gatedDownload || guide.pdfUrl) // Only published guides
    .map((guide) => ({
      url: `${baseUrl}/ressources/guides/${guide.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  return [...routes, ...blogRoutes, ...guideRoutes];
}

