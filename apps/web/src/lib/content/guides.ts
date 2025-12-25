/**
 * Helpers pour la gestion des guides téléchargeables
 */

import { Guide, GuideMetadata } from './types';

/**
 * Récupère tous les guides
 * @returns Liste de tous les guides
 */
export async function getAllGuides(): Promise<Guide[]> {
  // TODO: Implémenter la lecture des métadonnées depuis content/guides/
  // Pour l'instant, retourne un tableau vide
  return [];
}

/**
 * Récupère un guide par son slug
 * @param slug Slug du guide
 * @returns Guide ou null si non trouvé
 */
export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  // TODO: Implémenter la lecture d'un guide spécifique
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

