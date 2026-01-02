'use client';

/**
 * Composant Pagination pour navigation entre pages d'articles
 */

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  /** Page courante (1-indexed) */
  currentPage: number;
  /** Nombre total de pages */
  totalPages: number;
  /** Base URL pour les liens (sans query params) */
  baseUrl?: string;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl = '/blog',
  className,
}: PaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams();
    
    // Préserver les filtres existants
    const q = searchParams.get('q');
    const category = searchParams.get('category');
    const tags = searchParams.get('tags');
    
    if (q) params.set('q', q);
    if (category) params.set('category', category);
    if (tags) params.set('tags', tags);
    
    // Ajouter la page (sauf pour page 1)
    if (page > 1) {
      params.set('page', page.toString());
    }
    
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      // Afficher toutes les pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logique pour afficher avec ellipsis
      if (currentPage <= 3) {
        // Début : 1, 2, 3, 4, ..., totalPages
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Fin : 1, ..., totalPages-3, totalPages-2, totalPages-1, totalPages
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Milieu : 1, ..., currentPage-1, currentPage, currentPage+1, ..., totalPages
        pages.push(1);
        pages.push('ellipsis');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className={cn('flex items-center justify-center gap-2', className)}
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <Button
        asChild
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        className={cn(
          'gap-1.5',
          currentPage === 1 && 'opacity-50 cursor-not-allowed'
        )}
      >
        {currentPage === 1 ? (
          <span className="flex items-center gap-1.5">
            <ChevronLeft className="h-4 w-4" />
            Précédent
          </span>
        ) : (
          <Link href={getPageUrl(currentPage - 1)} className="flex items-center gap-1.5">
            <ChevronLeft className="h-4 w-4" />
            Précédent
          </Link>
        )}
      </Button>

      {/* Page Numbers */}
      <div className="hidden items-center gap-1 sm:flex">
        {pageNumbers.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <Button
              key={page}
              asChild
              variant={isActive ? 'default' : 'outline'}
              size="sm"
              className={cn(
                'min-w-[2.5rem]',
                isActive && 'bg-blue-600 text-white hover:bg-blue-700'
              )}
            >
              <Link href={getPageUrl(page)}>{page}</Link>
            </Button>
          );
        })}
      </div>

      {/* Mobile: Current Page Indicator */}
      <div className="flex items-center gap-2 sm:hidden">
        <span className="text-sm text-gray-600">
          Page {currentPage} sur {totalPages}
        </span>
      </div>

      {/* Next Button */}
      <Button
        asChild
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        className={cn(
          'gap-1.5',
          currentPage === totalPages && 'opacity-50 cursor-not-allowed'
        )}
      >
        {currentPage === totalPages ? (
          <span className="flex items-center gap-1.5">
            Suivant
            <ChevronRight className="h-4 w-4" />
          </span>
        ) : (
          <Link href={getPageUrl(currentPage + 1)} className="flex items-center gap-1.5">
            Suivant
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </Button>
    </nav>
  );
}

