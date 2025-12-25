/**
 * Helpers pour la gestion des articles de blog
 */

import { BlogPost, BlogPostMetadata } from './types';

/**
 * Récupère tous les articles de blog
 * @returns Liste de tous les articles
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // TODO: Implémenter la lecture des fichiers markdown depuis content/blog/
  // Pour l'instant, retourne un tableau vide
  return [];
}

/**
 * Récupère un article de blog par son slug
 * @param slug Slug de l'article
 * @returns Article ou null si non trouvé
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // TODO: Implémenter la lecture d'un article spécifique
  return null;
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
 * Calcule le temps de lecture estimé d'un article
 * @param content Contenu markdown de l'article
 * @returns Temps de lecture en minutes (approximatif : 200 mots/min)
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

