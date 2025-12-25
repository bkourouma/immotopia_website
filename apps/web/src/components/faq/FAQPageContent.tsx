'use client';

/**
 * Contenu client de la page FAQ avec recherche
 */

import { useState } from 'react';
import { FAQData } from '@/lib/content/types';
import FAQSection from './FAQSection';
import FAQSearch from './FAQSearch';

interface FAQPageContentProps {
  /** Données FAQ initiales */
  initialData: FAQData;
}

export default function FAQPageContent({ initialData }: FAQPageContentProps) {
  const [filteredSections, setFilteredSections] = useState(initialData.sections);

  return (
    <>
      {/* Search */}
      <FAQSearch sections={initialData.sections} onResultsChange={setFilteredSections} />

      {/* FAQ Sections */}
      {filteredSections.map((section) => (
        <FAQSection key={section.persona} section={section} />
      ))}

      {filteredSections.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-600">Aucun résultat trouvé.</p>
        </div>
      )}
    </>
  );
}

