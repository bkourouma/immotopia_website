/**
 * Guides API Client for Astro
 * Fetches guides from the Fastify API
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
      console.warn(`[Guides API] Request failed: ${endpoint} - ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn(`[Guides API] Request error: ${endpoint}`, error);
    return null;
  }
}

export interface Guide {
  title: string;
  description: string;
  slug: string;
  content: string;
  category?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  downloadablePdfMediaId?: string;
  pdfUrl?: string;
  gatedDownload: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

/**
 * Get all published guides
 */
export async function getAllGuides(): Promise<Guide[]> {
  const data = await fetchAPI('/api/guides?status=published&limit=100');
  
  if (!data || !data.guides) {
    return [];
  }
  
  return data.guides.map((guide: any) => ({
    title: guide.title,
    description: guide.description,
    slug: guide.slug,
    content: guide.content,
    category: guide.category,
    publishedAt: guide.publishedAt,
    createdAt: guide.createdAt,
    updatedAt: guide.updatedAt,
    downloadablePdfMediaId: guide.downloadablePdfMediaId,
    pdfUrl: guide.pdfMedia?.url,
    gatedDownload: guide.gatedDownload || false,
    seoTitle: guide.seoTitle,
    seoDescription: guide.seoDescription,
  }));
}

/**
 * Get a single guide by slug
 */
export async function getGuide(slug: string): Promise<Guide | null> {
  const data = await fetchAPI(`/api/guides/${slug}`);
  
  if (!data) {
    return null;
  }
  
  return {
    title: data.title,
    description: data.description,
    slug: data.slug,
    content: data.content,
    category: data.category,
    publishedAt: data.publishedAt,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    downloadablePdfMediaId: data.downloadablePdfMediaId,
    pdfUrl: data.pdfMedia?.url,
    gatedDownload: data.gatedDownload || false,
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
  };
}

