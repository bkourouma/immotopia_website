/**
 * Blog API Client for Astro
 * Fetches blog posts from the Fastify API
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
      console.warn(`[Blog API] Request failed: ${endpoint} - ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn(`[Blog API] Request error: ${endpoint}`, error);
    return null;
  }
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  coverImage?: string;
  ogImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  slug: string;
  readingTime: number;
  published: boolean;
  content: string;
  updatedAt: string;
}

/**
 * Get all published blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const data = await fetchAPI('/api/blog?status=published&limit=100');
  
  if (!data || !data.posts) {
    return [];
  }
  
  return data.posts.map((post: any) => ({
    title: post.title,
    description: post.description,
    date: post.publishedAt || post.createdAt,
    author: post.author || '',
    category: post.category?.name || '',
    tags: post.tags?.map((t: any) => t.name) || [],
    coverImage: post.coverImage?.url,
    ogImage: post.ogImage?.url,
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
    slug: post.slug,
    readingTime: post.readingTime || 0,
    published: true,
    content: post.content,
    updatedAt: post.updatedAt || post.createdAt,
  }));
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const data = await fetchAPI(`/api/blog/${slug}`);
  
  if (!data) {
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
    ogImage: data.ogImage?.url,
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    slug: data.slug,
    readingTime: data.readingTime || 0,
    published: true,
    content: data.content,
    updatedAt: data.updatedAt || data.createdAt,
  };
}

