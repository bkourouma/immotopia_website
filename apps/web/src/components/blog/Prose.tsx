'use client';

/**
 * Composant Prose pour styles typographiques optimisés
 * Wrapper autour du contenu markdown avec styles Tailwind Typography
 */

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ProseProps {
  /** Contenu à afficher */
  children: ReactNode;
  /** Classes CSS additionnelles */
  className?: string;
  /** Largeur max (par défaut max-w-4xl) */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | 'none';
}

export default function Prose({ children, className, maxWidth = '4xl' }: ProseProps) {
  const maxWidthClass = maxWidth === 'none' ? '' : `max-w-${maxWidth}`;

  return (
    <div
      className={cn(
        'prose prose-lg prose-blue',
        maxWidthClass,
        'prose-headings:font-bold prose-headings:text-gray-900',
        'prose-headings:scroll-mt-24', // Pour le scroll avec sticky header
        'prose-p:text-gray-700 prose-p:leading-relaxed',
        'prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium',
        'prose-strong:text-gray-900 prose-strong:font-semibold',
        'prose-ul:list-disc prose-ol:list-decimal',
        'prose-li:text-gray-700 prose-li:my-2',
        'prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600',
        'prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono',
        'prose-pre:bg-gray-900 prose-pre:text-gray-100',
        'prose-img:rounded-lg prose-img:shadow-md',
        'prose-hr:border-gray-300',
        'dark:prose-invert',
        className
      )}
    >
      {children}
    </div>
  );
}
