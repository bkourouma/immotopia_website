/**
 * Helpers pour la gestion des articles de blog
 */

import { BlogPost, BlogPostMetadata } from './types';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const blogDirectory = join(process.cwd(), 'src', 'content', 'blog');

/**
 * Génère un slug depuis le nom de fichier
 */
function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, '');
}

/**
 * Récupère tous les articles de blog
 * Tente d'abord depuis la DB, fallback vers fichiers MDX
 * @returns Liste de tous les articles triés par date (plus récent en premier)
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Try to get from DB first
  try {
    const { getPublishedBlogPosts } = await import('@/lib/api/public');
    const dbPosts = await getPublishedBlogPosts();
    // Si l'API retourne un tableau vide, on considère que c'est intentionnel (pas de fallback)
    // Le fallback MDX n'est utilisé QUE si l'API échoue (erreur réseau, etc.)
    if (dbPosts !== null) {
      // dbPosts peut être [] (vide) ou un tableau avec des posts
      return dbPosts;
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Blog Content] Could not load blog posts from DB, falling back to files:', error);
    }
  }

  // Fallback to MDX files (uniquement si l'API a échoué, pas si elle retourne [])
  try {
    const filenames = await readdir(blogDirectory);
    const mdxFiles = filenames.filter((name) => name.endsWith('.mdx') || name.endsWith('.md'));

    const posts = await Promise.all(
      mdxFiles.map(async (filename) => {
        const filePath = join(blogDirectory, filename);
        const fileContents = await readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        const slug = getSlugFromFilename(filename);
        const readingTimeResult = readingTime(content);

        return {
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          author: data.author || '',
          category: data.category || '',
          tags: Array.isArray(data.tags) ? data.tags : [],
          coverImage: data.coverImage,
          slug,
          readingTime: readingTimeResult.minutes,
          published: data.published !== false, // Par défaut true
          content,
        } as BlogPost;
      })
    );

    // Trier par date (plus récent en premier)
    return posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

/**
 * Récupère un article de blog par son slug
 * Tente d'abord depuis la DB, fallback vers fichiers MDX
 * @param slug Slug de l'article
 * @returns Article ou null si non trouvé
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // Try to get from DB first
  try {
    const { getPublishedBlogPost } = await import('@/lib/api/public');
    const dbPost = await getPublishedBlogPost(slug);
    if (dbPost) {
      return dbPost;
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[Blog Content] Could not load blog post "${slug}" from DB, falling back to files:`, error);
    }
  }

  // Fallback to MDX files
  try {
    const filenames = await readdir(blogDirectory);
    const mdxFiles = filenames.filter((name) => name.endsWith('.mdx') || name.endsWith('.md'));

    const filename = mdxFiles.find((name) => getSlugFromFilename(name) === slug);
    if (!filename) {
      return null;
    }

    const filePath = join(blogDirectory, filename);
    const fileContents = await readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const readingTimeResult = readingTime(content);

    return {
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || '',
      category: data.category || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      coverImage: data.coverImage,
      slug,
      readingTime: readingTimeResult.minutes,
      published: data.published !== false,
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Récupère les articles de blog publiés
 * @returns Liste des articles publiés
 */
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.published);
}

/**
 * Récupère les articles de blog par tag
 * @param tag Tag à filtrer
 * @returns Liste des articles avec ce tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.tags?.includes(tag));
}

/**
 * Récupère les articles les plus récents
 * @param limit Nombre d'articles à retourner
 * @returns Liste des articles les plus récents
 */
export async function getRecentBlogPosts(limit: number = 10): Promise<BlogPost[]> {
  const published = await getPublishedBlogPosts();
  return published
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Génère un slug à partir d'un titre
 * @param title Titre de l'article
 * @returns Slug URL-friendly
 */
export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères non alphanumériques par des tirets
    .replace(/^-+|-+$/g, ''); // Supprime les tirets en début et fin
}

/**
 * Récupère tous les slugs des articles
 * Tente d'abord depuis la DB, fallback vers fichiers MDX
 * @returns Liste de tous les slugs
 */
export async function getAllSlugs(): Promise<string[]> {
  // Try to get from DB first
  try {
    const { getPublishedBlogPosts } = await import('@/lib/api/public');
    const dbPosts = await getPublishedBlogPosts();
    if (dbPosts && dbPosts.length > 0) {
      return dbPosts.map((post) => post.slug).filter((slug): slug is string => !!slug);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Could not load blog slugs from DB, falling back to files:', error);
    }
  }

  // Fallback to MDX files
  try {
    const filenames = await readdir(blogDirectory);
    const mdxFiles = filenames.filter((name) => name.endsWith('.mdx') || name.endsWith('.md'));
    return mdxFiles.map((name) => getSlugFromFilename(name));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
}

/**
 * Récupère toutes les catégories uniques
 * @returns Liste des catégories triées
 */
export async function getCategories(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const categories = new Set<string>();
  posts.forEach((post) => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories).sort();
}

/**
 * Récupère tous les tags uniques
 * @returns Liste des tags triés
 */
export async function getTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

/**
 * Recherche dans les articles
 * @param query Terme de recherche
 * @returns Liste des articles correspondants
 */
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  if (!query || query.trim() === '') {
    return posts;
  }

  const lowerQuery = query.toLowerCase();
  return posts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(lowerQuery);
    const descriptionMatch = post.description.toLowerCase().includes(lowerQuery);
    const contentMatch = post.content.toLowerCase().includes(lowerQuery);
    return titleMatch || descriptionMatch || contentMatch;
  });
}

/**
 * Calcule le temps de lecture estimé d'un article
 * @param content Contenu markdown de l'article
 * @returns Temps de lecture en minutes (approximatif : 200 mots/min)
 * @deprecated Utiliser reading-time à la place
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

