import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/content/blog';
import { getAllGuides } from '@/lib/content/guides';

/**
 * Génère automatiquement le sitemap.xml pour le site
 * Inclut les articles de blog et guides publiés depuis la DB
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://immotopia.cloud';
  
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
      url: `${baseUrl}/pour-qui/promoteurs-immobiliers`,
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
      url: `${baseUrl}/pour-qui/gestionnaires-locatifs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pour-qui/proprietaires-bailleurs`,
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
    {
      url: `${baseUrl}/gestion-locative-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gestion-locative-vs-excel`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/logiciel-immobilier-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/crm-immobilier-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/logiciel-annonces-immobilieres-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/logiciel-syndic-copropriete-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/paiement-loyer-charges-mobile-money-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/meilleur-logiciel-immobilier-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/modeles/contrat-bail-habitation-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/modeles/bail-commercial-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/modeles/etat-des-lieux-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/modeles/releve-loyers-etat-de-compte-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/modeles/quittance-loyer-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/modeles/appel-de-charges-copropriete-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guides/reduire-impayes-loyers-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/gerer-copropriete-cote-divoire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vision/digitalisation-immobilier-afrique`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
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

