'use client';

/**
 * Composant pour la recherche et les filtres de blog
 */

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

interface BlogFiltersProps {
  /** Liste des catégories disponibles */
  categories: string[];
  /** Liste des tags disponibles */
  tags: string[];
  /** Callback quand les filtres changent */
  onFilterChange?: (filters: { query: string; category: string | null; selectedTags: string[] }) => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function BlogFilters({ categories, tags, onFilterChange, className }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category') || null);
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    const tagsParam = searchParams.get('tags');
    return tagsParam ? tagsParam.split(',') : [];
  });
  const [showFilters, setShowFilters] = useState(false);

  // Debounce pour la recherche
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Notifier les changements
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        query: debouncedQuery,
        category: selectedCategory,
        selectedTags,
      });
    }

    // Mettre à jour l'URL (réinitialiser la page à 1 quand les filtres changent)
    const params = new URLSearchParams();
    if (debouncedQuery) params.set('q', debouncedQuery);
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedTags.length > 0) params.set('tags', selectedTags.join(','));
    // Ne pas inclure page=1 dans l'URL, juste réinitialiser
    
    const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog';
    router.replace(newUrl, { scroll: false });
  }, [debouncedQuery, selectedCategory, selectedTags, onFilterChange, router]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleReset = () => {
    setQuery('');
    setSelectedCategory(null);
    setSelectedTags([]);
    router.replace('/blog', { scroll: false });
  };

  const hasActiveFilters = query || selectedCategory || selectedTags.length > 0;

  return (
    <div className={cn('space-y-4', className)}>
      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Rechercher un article..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Bouton toggle filtres */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filtres
          {(selectedCategory || selectedTags.length > 0) && (
            <span className="ml-1 rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">
              {[selectedCategory, ...selectedTags].filter(Boolean).length}
            </span>
          )}
        </Button>

        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={handleReset}>
            Réinitialiser
          </Button>
        )}
      </div>

      {/* Panneau de filtres */}
      {showFilters && (
        <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
          {/* Filtre par catégorie */}
          {categories.length > 0 && (
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Catégorie
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    !selectedCategory
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  )}
                >
                  Toutes
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filtre par tags */}
          {tags.length > 0 && (
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={cn(
                      'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                      selectedTags.includes(tag)
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
