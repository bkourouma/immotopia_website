/**
 * FAQ API Client for Astro
 * Fetches FAQ items from the Fastify API
 */

// Use relative path in production, or PUBLIC_API_URL if set, or localhost for dev
const API_URL = import.meta.env.PUBLIC_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:3002');

async function fetchAPI(endpoint: string): Promise<any> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn(`[FAQ API] Request failed: ${endpoint} - ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn(`[FAQ API] Request error: ${endpoint}`, error);
    return null;
  }
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}

export interface FAQData {
  items: FAQItem[];
  categories: string[];
}

/**
 * Get all published FAQ items
 */
export async function getFAQData(): Promise<FAQData> {
  const data = await fetchAPI('/api/faq?status=published&limit=1000');
  
  if (!data || !data.items) {
    return { items: [], categories: [] };
  }
  
  const items: FAQItem[] = data.items.map((item: any) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
    category: item.category || '',
    order: item.order || 0,
  }));
  
  // Extract unique categories
  const categories = Array.from(new Set(items.map(item => item.category).filter(Boolean))) as string[];
  
  return {
    items: items.sort((a, b) => a.order - b.order),
    categories,
  };
}

