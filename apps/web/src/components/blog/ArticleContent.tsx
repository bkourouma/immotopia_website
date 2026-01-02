'use client';

/**
 * Composant pour afficher le contenu complet d'un article de blog
 */

import MarkdownContent from './MarkdownContent';
import { BlogPost } from '@/lib/content/types';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { OptimizedImage } from '@/components/ui';
import { generateImageAlt } from '@/lib/image-utils';

interface ArticleContentProps {
  /** Article complet avec contenu */
  article: BlogPost;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function ArticleContent({ article, className = '' }: ArticleContentProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={className}>
      {/* Cover Image */}
      {(article.coverImage || article.featuredImage) && (
        <div className="mb-8 overflow-hidden rounded-lg">
          <OptimizedImage
            src={article.coverImage || article.featuredImage || ''}
            alt={generateImageAlt(article.title, 'Article')}
            width={1200}
            height={600}
            sizes="100vw"
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          {article.title}
        </h1>

        {article.description && (
          <p className="mb-6 text-xl text-gray-600">{article.description}</p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 pb-6 text-sm text-gray-600">
          {article.date && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.date)}</span>
            </div>
          )}

          {article.readingTime && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readingTime} min de lecture</span>
            </div>
          )}

          {article.author && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
          )}

          {article.updatedAt && (
            <div className="ml-auto text-xs text-gray-500">
              Mis à jour le {formatDate(article.updatedAt)}
            </div>
          )}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                <Tag className="h-3.5 w-3.5" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <MarkdownContent content={article.content} />
      </div>
    </article>
  );
}

