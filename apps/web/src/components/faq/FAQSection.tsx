'use client';

/**
 * Composant FAQ Section pour regrouper les questions/réponses par persona
 */

import { FAQSection as FAQSectionType } from '@/lib/content/types';
import FAQItem from './FAQItem';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  /** Section FAQ (par persona) */
  section: FAQSectionType;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function FAQSection({ section, className }: FAQSectionProps) {
  return (
    <section className={cn('mb-12', className)}>
      <header className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">{section.title}</h2>
        {section.description && (
          <p className="text-gray-600">{section.description}</p>
        )}
      </header>

      <div className="rounded-lg border border-gray-200 bg-white">
        {section.items.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            index={index}
            sectionId={section.persona}
          />
        ))}
      </div>
    </section>
  );
}

