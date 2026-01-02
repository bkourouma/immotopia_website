/**
 * Public API Client - No authentication required
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

async function fetchPublicAPI(endpoint: string, options: RequestInit = {}) {
  try {
    // En développement, réduire le cache pour faciliter le développement
    // En production, utiliser 300s (5 minutes) pour de bonnes performances
    const revalidateTime = process.env.NODE_ENV === 'development' ? 30 : 300;
    
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      next: { revalidate: revalidateTime }, // ISR: revalidate every 5 minutes (30s en dev)
    });

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[Public API] Request failed: ${endpoint} - ${response.status} ${response.statusText}`);
      }
      return null; // Return null on error for fallback
    }

    return response.json();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[Public API] Request error: ${endpoint}`, error);
    }
    return null; // Return null on error for fallback
  }
}

// Blog - Public endpoints
export async function getPublishedBlogPosts() {
  try {
    const data = await fetchPublicAPI('/api/blog?status=published&limit=100');
    // Si data est null, c'est une erreur (réseau, serveur, etc.)
    // Si data.posts existe (même vide []), c'est une réponse valide
    if (data === null) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Public API] Failed to load published blog posts from API, will fallback to local files');
      }
      return null;
    }
    
    // Retourner un tableau (vide si aucun article publié, ou avec les articles)
    return (data.posts || []).map((post: any) => ({
      title: post.title,
      description: post.description,
      date: post.publishedAt || post.createdAt,
      author: post.author || '',
      category: post.category?.name || '',
      tags: post.tags?.map((t: any) => t.name) || [],
      coverImage: post.coverImage?.url,
      ogImage: post.ogImage?.url, // SEO: Open Graph image
      seoTitle: post.seoTitle, // SEO: Custom title for search engines
      seoDescription: post.seoDescription, // SEO: Custom description for search engines
      slug: post.slug,
      readingTime: post.readingTime || 0,
      published: true,
      content: post.content,
      updatedAt: post.updatedAt || post.createdAt,
    }));
  } catch {
    // Erreur = retourner null pour déclencher le fallback
    return null;
  }
}

export async function getPublishedBlogPost(slug: string) {
  try {
    const data = await fetchPublicAPI(`/api/blog/${slug}`);
    if (!data) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[Public API] Failed to load blog post "${slug}" from API, will fallback to local files`);
      }
      return null;
    }
    
    return {
      title: data.title,
      description: data.description,
      date: data.publishedAt || data.createdAt,
      author: data.author || '',
      category: data.category?.name || '',
      tags: data.tags?.map((t: any) => t.name) || [],
      coverImage: data.coverImage?.url,
      ogImage: data.ogImage?.url, // SEO: Open Graph image
      seoTitle: data.seoTitle, // SEO: Custom title for search engines
      seoDescription: data.seoDescription, // SEO: Custom description for search engines
      slug: data.slug,
      readingTime: data.readingTime || 0,
      published: true,
      content: data.content,
      updatedAt: data.updatedAt || data.createdAt,
    };
  } catch {
    return null;
  }
}

// Guides - Public endpoints
export async function getPublishedGuides() {
  try {
    const data = await fetchPublicAPI('/api/guides?status=published&limit=100');
    if (!data) return null;
    
    return data.guides?.map((guide: any) => ({
      title: guide.title,
      description: guide.description,
      slug: guide.slug,
      category: guide.category || '',
      pdfUrl: guide.pdfMedia?.url,
      gatedDownload: guide.gatedDownload,
      content: guide.content,
    })) || [];
  } catch {
    return null;
  }
}

export async function getPublishedGuide(slug: string) {
  try {
    const data = await fetchPublicAPI(`/api/guides/${slug}`);
    if (!data) return null;
    
    return {
      title: data.title,
      description: data.description,
      slug: data.slug,
      category: data.category || '',
      pdfUrl: data.pdfMedia?.url,
      gatedDownload: data.gatedDownload,
      content: data.content,
    };
  } catch {
    return null;
  }
}

// FAQ - Public endpoints
export async function getPublishedFAQItems() {
  try {
    const data = await fetchPublicAPI('/api/faq?status=published&limit=1000');
    // Si data est null, c'est une erreur (réseau, serveur, etc.)
    // Si data.items existe (même vide []), c'est une réponse valide
    if (data === null) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Public API] Failed to load published FAQ items from API, will fallback to local files');
      }
      return null;
    }
    
    // Retourner un tableau (vide si aucune FAQ publiée, ou avec les items)
    return (data.items || []).map((item: any) => ({
      question: item.question,
      answer: item.answer,
      category: item.category || '',
      order: item.order || 0,
    }));
  } catch {
    // Erreur = retourner null pour déclencher le fallback
    return null;
  }
}

