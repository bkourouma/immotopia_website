/**
 * Helpers pour la gestion de la FAQ
 */

import { FAQData, FAQSection, FAQItem } from './types';

/**
 * Charge les données FAQ
 * @returns Données FAQ complètes
 */
export async function getFAQData(): Promise<FAQData> {
  // TODO: Implémenter la lecture depuis content/faq/faq-data.json
  // Pour l'instant, retourne une structure vide
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

