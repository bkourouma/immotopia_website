'use client';

/**
 * Composant de recherche pour filtrer les questions FAQ
 */

import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FAQSection, FAQItem } from '@/lib/content/types';
import { cn } from '@/lib/utils';

interface FAQSearchProps {
  /** Sections FAQ à filtrer */
  sections: FAQSection[];
  /** Callback quand les résultats changent */
  onResultsChange?: (filteredSections: FAQSection[]) => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function FAQSearch({ sections, onResultsChange, className }: FAQSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return sections;
    }

    const query = searchQuery.toLowerCase().trim();

    return sections
      .map((section) => {
        const filteredItems = section.items.filter((item) => {
          const questionMatch = item.question.toLowerCase().includes(query);
          const answerMatch = item.answer.toLowerCase().includes(query);
          const categoryMatch = item.category?.toLowerCase().includes(query);
          return questionMatch || answerMatch || categoryMatch;
        });

        if (filteredItems.length === 0) {
          return null;
        }

        return {
          ...section,
          items: filteredItems,
        };
      })
      .filter((section): section is FAQSection => section !== null);
  }, [searchQuery, sections]);

  // Notifier le parent des résultats filtrés
  React.useEffect(() => {
    if (onResultsChange) {
      onResultsChange(filteredSections);
    }
  }, [filteredSections, onResultsChange]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className={cn('mb-8', className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Rechercher une question..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Effacer la recherche"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      {searchQuery && (
        <p className="mt-2 text-sm text-gray-600">
          {filteredSections.reduce((acc, section) => acc + section.items.length, 0)} résultat(s)
          trouvé(s)
        </p>
      )}
    </div>
  );
}

