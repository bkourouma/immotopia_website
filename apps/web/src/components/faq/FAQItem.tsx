'use client';

/**
 * Composant FAQ Item avec accordéon pour question/réponse
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem as FAQItemType } from '@/lib/content/types';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  /** Item FAQ (question/réponse) */
  item: FAQItemType;
  /** Index pour identifier unique l'item */
  index: number;
  /** Section ID pour identifier unique l'accordéon */
  sectionId: string;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function FAQItem({ item, index, sectionId, className }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const itemId = `${sectionId}-item-${index}`;

  return (
    <div className={cn('border-b border-gray-200', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-primary"
        aria-expanded={isOpen}
        aria-controls={`${itemId}-answer`}
      >
        <h3 className="pr-8 text-lg font-semibold text-gray-900">{item.question}</h3>
        <ChevronDown
          className={cn(
            'h-5 w-5 flex-shrink-0 text-gray-500 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        id={`${itemId}-answer`}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isOpen}
      >
        <div className="pb-4 text-gray-600">{item.answer}</div>
      </div>
    </div>
  );
}

