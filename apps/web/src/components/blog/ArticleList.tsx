'use client';

/**
 * Composant pour afficher une liste d'articles avec pagination
 */

import { BlogPostMetadata } from '@/lib/content/types';
import ArticleCard from './ArticleCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@monorepo/ui';

interface ArticleListProps {
  /** Liste des articles à afficher */
  articles: BlogPostMetadata[];
  /** Nombre d'articles par page */
  itemsPerPage?: number;
  /** Classes CSS additionnelles */
  className?: string;
  /** Afficher le premier article en featured */
  showFeatured?: boolean;
}

export default function ArticleList({
  articles,
  itemsPerPage = 9,
  className,
  showFeatured = true,
}: ArticleListProps) {
  // Pour l'instant, on affiche tous les articles sans pagination côté client
  // La pagination sera implémentée côté serveur avec Next.js
  const featuredArticle = showFeatured && articles.length > 0 ? articles[0] : null;
  const regularArticles = showFeatured && articles.length > 0 ? articles.slice(1) : articles;

  if (articles.length === 0) {
    return (
      <ScrollReveal direction="up" delay={0}>
        <div className={cn('py-12 text-center', className)}>
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <Sparkles className="h-8 w-8 text-gray-400" />
          </div>
          <p className="text-lg text-gray-600">Aucun article disponible pour le moment.</p>
          <p className="mt-2 text-sm text-gray-500">Revenez bientôt pour découvrir nos nouveaux contenus !</p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <div className={cn('space-y-12', className)}>
      {/* Featured Article */}
      {featuredArticle && (
        <div className="border-b border-gray-200 pb-12">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                Article à la une
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <ArticleCard article={featuredArticle} featured />
          </ScrollReveal>
        </div>
      )}

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <>
          <ScrollReveal direction="up" delay={featuredArticle ? 200 : 0}>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-2xl font-bold text-transparent">
                {featuredArticle ? 'Tous les articles' : 'Articles'}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article, index) => (
              <ScrollReveal key={article.slug} direction="up" delay={featuredArticle ? 300 + index * 50 : index * 50}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Composant de pagination
 */
interface PaginationProps {
  /** Page actuelle (1-indexed) */
  currentPage: number;
  /** Nombre total de pages */
  totalPages: number;
  /** Callback quand la page change */
  onPageChange: (page: number) => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);
  const visiblePages = pages.slice(startPage - 1, endPage);

  return (
    <nav className={cn('flex items-center justify-center gap-2', className)} aria-label="Pagination">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Page précédente"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {startPage > 1 && (
        <>
          <Button variant="outline" size="sm" onClick={() => onPageChange(1)}>
            1
          </Button>
          {startPage > 2 && <span className="px-2 text-gray-500">...</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? 'default' : 'outline'}
          size="sm"
          onClick={() => onPageChange(page)}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </Button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 text-gray-500">...</span>}
          <Button variant="outline" size="sm" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}

