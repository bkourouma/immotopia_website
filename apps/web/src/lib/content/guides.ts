/**
 * Helpers pour la gestion des guides téléchargeables
 */

import { Guide, GuideMetadata } from './types';

/**
 * Récupère tous les guides
 * Tente d'abord depuis la DB, fallback vers fichiers
 * @returns Liste de tous les guides
 */
export async function getAllGuides(): Promise<Guide[]> {
  // Try to get from DB first
  try {
    const { getPublishedGuides } = await import('@/lib/api/public');
    const dbGuides = await getPublishedGuides();
    if (dbGuides && dbGuides.length > 0) {
      return dbGuides.map((g: any) => ({
        id: g.id || g.slug, // Add ID for API calls
        title: g.title,
        description: g.description,
        slug: g.slug,
        category: g.category || '',
        pdfPath: g.pdfUrl,
        pdfUrl: g.pdfUrl,
        gatedDownload: g.gatedDownload || false,
        content: g.content,
      }));
    }
  } catch (error) {
    console.warn('Could not load guides from DB, falling back to files:', error);
  }

  // Fallback: return empty array (no file-based guides implemented yet)
  return [];
}

/**
 * Récupère un guide par son slug
 * Tente d'abord depuis la DB, fallback vers fichiers
 * @param slug Slug du guide
 * @returns Guide ou null si non trouvé
 */
export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  // Try to get from DB first
  try {
    const { getPublishedGuide } = await import('@/lib/api/public');
    const dbGuide = await getPublishedGuide(slug);
    if (dbGuide) {
      return {
        id: dbGuide.id || dbGuide.slug,
        title: dbGuide.title,
        description: dbGuide.description,
        slug: dbGuide.slug,
        category: dbGuide.category || '',
        pdfPath: dbGuide.pdfUrl,
        pdfUrl: dbGuide.pdfUrl,
        gatedDownload: dbGuide.gatedDownload || false,
        content: dbGuide.content,
      };
    }
  } catch (error) {
    console.warn(`Could not load guide ${slug} from DB, falling back to files:`, error);
  }

  // Fallback: return null (no file-based guides implemented yet)
  return null;
}

/**
 * Récupère les guides par catégorie
 * @param category Catégorie à filtrer
 * @returns Liste des guides de cette catégorie
 */
export async function getGuidesByCategory(category: string): Promise<Guide[]> {
  const allGuides = await getAllGuides();
  return allGuides.filter((guide) => guide.category === category);
}

/**
 * Vérifie si un guide existe
 * @param slug Slug du guide
 * @returns true si le guide existe
 */
export async function guideExists(slug: string): Promise<boolean> {
  const guide = await getGuideBySlug(slug);
  return guide !== null;
}

/**
 * Récupère le chemin complet du PDF d'un guide
 * @param slug Slug du guide
 * @returns Chemin complet du PDF ou null
 */
export async function getGuidePdfPath(slug: string): Promise<string | null> {
  const guide = await getGuideBySlug(slug);
  return guide?.pdfPath || null;
}

