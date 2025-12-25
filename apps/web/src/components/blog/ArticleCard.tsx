'use client';

/**
 * Composant Card pour afficher un aperçu d'article de blog
 */

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui';
import { BlogPostMetadata } from '@/lib/content/types';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  /** Métadonnées de l'article */
  article: BlogPostMetadata;
  /** Classes CSS additionnelles */
  className?: string;
  /** Afficher en format featured (plus grand) */
  featured?: boolean;
}

// Fonction pour obtenir un gradient basé sur le slug ou les tags
function getGradientForArticle(slug: string, tags?: string[]): string {
  const gradients = [
    'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
    'from-purple-500/10 via-pink-500/10 to-rose-500/10',
    'from-indigo-500/10 via-blue-500/10 to-cyan-500/10',
    'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
    'from-orange-500/10 via-amber-500/10 to-yellow-500/10',
    'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
  ];

  // Si l'article a des tags, utiliser le premier tag pour déterminer le gradient
  if (tags && tags.length > 0) {
    const tagHash = tags[0].split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[tagHash % gradients.length];
  }

  // Sinon, utiliser le slug pour générer un hash
  const slugHash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return gradients[slugHash % gradients.length];
}

// Fonction pour obtenir un gradient de bordure
function getBorderGradientForArticle(slug: string, tags?: string[]): string {
  const gradients = [
    'from-blue-500 via-indigo-500 to-purple-500',
    'from-purple-500 via-pink-500 to-rose-500',
    'from-indigo-500 via-blue-500 to-cyan-500',
    'from-emerald-500 via-teal-500 to-cyan-500',
    'from-orange-500 via-amber-500 to-yellow-500',
    'from-violet-500 via-purple-500 to-fuchsia-500',
  ];

  if (tags && tags.length > 0) {
    const tagHash = tags[0].split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[tagHash % gradients.length];
  }

  // Sinon, utiliser le slug pour générer un hash
  const slugHash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return gradients[slugHash % gradients.length];
}

export default function ArticleCard({ article, className, featured = false }: ArticleCardProps) {
  const gradient = getGradientForArticle(article.slug, article.tags);
  const borderGradient = getBorderGradientForArticle(article.slug, article.tags);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={cn('group relative', className)}>
      {/* Animated Border Gradient Wrapper */}
      <div
        className={cn(
          'absolute -inset-0.5 rounded-lg bg-gradient-to-r opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100',
          `bg-gradient-to-r ${borderGradient}`
        )}
      />
      <Link
        href={`/ressources/blog/${article.slug}`}
        className="relative block transition-all duration-300 group-hover:-translate-y-2"
      >
        <Card className="relative h-full overflow-hidden border-2 border-gray-200 bg-white transition-all duration-300 group-hover:border-transparent group-hover:shadow-2xl">
          {/* Background Gradient on Hover */}
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100',
              gradient
            )}
          />

        {article.featuredImage && (
          <div className={cn('relative w-full overflow-hidden bg-gray-200', featured ? 'h-64' : 'h-48')}>
            <OptimizedImage
              src={article.featuredImage}
              alt={article.title}
              width={800}
              height={featured ? 400 : 300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                'h-full w-full object-cover transition-transform duration-500',
                'group-hover:scale-110'
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}

        <CardContent className={cn('relative p-6', featured && 'p-8')}>
          {article.tags && article.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={tag}
                  className={cn(
                    'rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium text-white shadow-sm transition-all duration-300',
                    index === 0 && 'from-blue-500 to-indigo-600',
                    index === 1 && 'from-purple-500 to-pink-600',
                    index === 2 && 'from-indigo-500 to-blue-600',
                    'group-hover:scale-110 group-hover:shadow-md'
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3
            className={cn(
              'mb-3 font-bold line-clamp-2 transition-all duration-300',
              featured ? 'text-2xl' : 'text-xl',
              'text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent'
            )}
          >
            {article.title}
          </h3>

          <p className={cn('mb-4 text-gray-600 line-clamp-3 transition-colors duration-300 group-hover:text-gray-700', featured ? 'text-base' : 'text-sm')}>
            {article.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5 transition-colors duration-300 group-hover:text-blue-600">
              <div className="rounded-full bg-blue-100 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                <Calendar className="h-3.5 w-3.5 text-blue-600" />
              </div>
              <span>{formatDate(article.date)}</span>
            </div>
            {article.readingTime && (
              <div className="flex items-center gap-1.5 transition-colors duration-300 group-hover:text-purple-600">
                <div className="rounded-full bg-purple-100 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                  <Clock className="h-3.5 w-3.5 text-purple-600" />
                </div>
                <span>{article.readingTime} min</span>
              </div>
            )}
            {article.author && (
              <div className="flex items-center gap-1.5 transition-colors duration-300 group-hover:text-indigo-600">
                <div className="rounded-full bg-indigo-100 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-200">
                  <User className="h-3.5 w-3.5 text-indigo-600" />
                </div>
                <span>{article.author}</span>
              </div>
            )}
          </div>

          {/* Read More Indicator */}
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span>Lire l'article</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
      </Link>
    </div>
  );
}

