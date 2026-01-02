'use client';

/**
 * Composant client pour la liste des articles avec recherche et filtres
 */

import { useState, useMemo, useCallback } from 'react';
import { BlogPost } from '@/lib/content/types';
import BlogCard from './BlogCard';
import BlogFilters from './BlogFilters';

interface BlogListClientProps {
  /** Articles initiaux */
  initialPosts: BlogPost[];
  /** Catégories disponibles */
  categories: string[];
  /** Tags disponibles */
  tags: string[];
}

export default function BlogListClient({ initialPosts, categories, tags }: BlogListClientProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filtrer les articles
  const filteredPosts = useMemo(() => {
    let filtered = [...initialPosts];

    // Recherche
    if (search.trim()) {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerSearch) ||
          post.description.toLowerCase().includes(lowerSearch) ||
          post.content.toLowerCase().includes(lowerSearch)
      );
    }

    // Filtre catégorie
    if (selectedCategory) {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filtre tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.some((tag) => post.tags?.includes(tag))
      );
    }

    return filtered;
  }, [initialPosts, search, selectedCategory, selectedTags]);

  const handleFiltersChange = useCallback((filters: {
    search: string;
    category: string | null;
    tags: string[];
  }) => {
    setSearch(filters.search);
    setSelectedCategory(filters.category);
    setSelectedTags(filters.tags);
  }, []);

  return (
    <>
      <div className="mb-8">
        <BlogFilters
          categories={categories}
          tags={tags}
          onFiltersChange={handleFiltersChange}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-600">Aucun article trouvé avec ces critères.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} article={post} />
          ))}
        </div>
      )}
    </>
  );
}

