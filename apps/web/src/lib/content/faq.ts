/**
 * Helpers pour la gestion de la FAQ
 */

import { FAQData, FAQSection, FAQItem } from './types';

/**
 * Charge les données FAQ
 * Tente d'abord depuis la DB, fallback vers fichiers
 * @returns Données FAQ complètes
 */
export async function getFAQData(): Promise<FAQData> {
  // Try to get from DB first
  try {
    const { getPublishedFAQItems } = await import('@/lib/api/public');
    const dbItems = await getPublishedFAQItems();
    // Si dbItems est null, c'est une erreur (fallback nécessaire)
    // Si dbItems est un tableau (même vide []), c'est une réponse valide
    if (dbItems !== null) {
      // dbItems peut être [] (vide) ou un tableau avec des items
      if (dbItems.length === 0) {
        return { sections: [] };
      }

      // Group by category for compatibility with existing structure
      const categoryMap = new Map<string, FAQItem[]>();
      
      dbItems.forEach((item: any) => {
        const category = item.category || 'general';
        if (!categoryMap.has(category)) {
          categoryMap.set(category, []);
        }
        categoryMap.get(category)!.push({
          question: item.question,
          answer: item.answer,
          category: item.category,
          order: item.order,
        });
      });

      // Convert to FAQSection format (grouped by persona/category)
      const sections: FAQSection[] = Array.from(categoryMap.entries()).map(([category, items]) => ({
        persona: category as any, // Map category to persona for compatibility
        items: items.sort((a, b) => (a.order || 0) - (b.order || 0)),
      }));

      return { sections };
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[FAQ Content] Could not load FAQ from DB, falling back to files:', error);
    }
  }

  // Fallback: return empty structure (uniquement si l'API a échoué)
  return {
    sections: [],
  };
}

/**
 * Récupère toutes les sections FAQ
 * @returns Liste des sections FAQ
 */
export async function getAllFAQSections(): Promise<FAQSection[]> {
  const data = await getFAQData();
  return data.sections;
}

/**
 * Récupère une section FAQ par persona
 * @param persona Identifiant de la persona
 * @returns Section FAQ ou null si non trouvée
 */
export async function getFAQSectionByPersona(
  persona: FAQSection['persona']
): Promise<FAQSection | null> {
  const sections = await getAllFAQSections();
  return sections.find((section) => section.persona === persona) || null;
}

/**
 * Récupère toutes les questions/réponses d'une persona
 * @param persona Identifiant de la persona
 * @returns Liste des FAQ items
 */
export async function getFAQItemsByPersona(
  persona: FAQSection['persona']
): Promise<FAQItem[]> {
  const section = await getFAQSectionByPersona(persona);
  return section?.items || [];
}

/**
 * Recherche dans les FAQ par terme
 * @param searchTerm Terme de recherche
 * @returns Liste des FAQ items correspondants
 */
export async function searchFAQ(searchTerm: string): Promise<FAQItem[]> {
  const sections = await getAllFAQSections();
  const term = searchTerm.toLowerCase();

  const results: FAQItem[] = [];
  for (const section of sections) {
    for (const item of section.items) {
      if (
        item.question.toLowerCase().includes(term) ||
        item.answer.toLowerCase().includes(term)
      ) {
        results.push(item);
      }
    }
  }

  return results;
}

/**
 * Récupère toutes les questions/réponses de toutes les personas
 * @returns Liste plate de tous les FAQ items avec leur persona
 */
export async function getAllFAQItems(): Promise<Array<FAQItem & { persona: string }>> {
  const sections = await getAllFAQSections();
  const items: Array<FAQItem & { persona: string }> = [];

  for (const section of sections) {
    for (const item of section.items) {
      items.push({
        ...item,
        persona: section.persona,
      });
    }
  }

  return items;
}

