'use client';

/**
 * Composant pour afficher une liste de guides téléchargeables
 */

import { GuideMetadata } from '@/lib/content/types';
import GuideCard from './GuideCard';
import { cn } from '@/lib/utils';

interface GuideListProps {
  /** Liste des guides à afficher */
  guides: GuideMetadata[];
  /** Classes CSS additionnelles */
  className?: string;
}

export default function GuideList({ guides, className }: GuideListProps) {
  if (guides.length === 0) {
    return (
      <div className={cn('py-12 text-center', className)}>
        <p className="text-lg text-gray-600">Aucun guide disponible pour le moment.</p>
      </div>
    );
  }

  return (
    <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3', className)}>
      {guides.map((guide) => (
        <GuideCard key={guide.slug} guide={guide} />
      ))}
    </div>
  );
}

