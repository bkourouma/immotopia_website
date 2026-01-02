'use client';

/**
 * Composant Table of Contents (TOC) automatique
 * Extrait les headings (h2, h3) depuis le contenu et crée une navigation
 */

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Hash } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  /** Classes CSS additionnelles */
  className?: string;
  /** Sticky ou non */
  sticky?: boolean;
}

export default function TableOfContents({ className, sticky = true }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extraire les headings depuis le DOM
    const headingElements = Array.from(
      document.querySelectorAll('article h2, article h3')
    ) as HTMLElement[];

    const extractedHeadings: Heading[] = headingElements.map((el) => ({
      id: el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      text: el.textContent || '',
      level: parseInt(el.tagName.charAt(1)),
    }));

    setHeadings(extractedHeadings);

    // Observer pour highlight la section active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  return (
    <nav
      className={cn(
        'rounded-lg border border-gray-200 bg-white p-4',
        sticky && 'sticky top-24',
        className
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <Hash className="h-4 w-4 text-gray-500" />
        <h3 className="text-sm font-semibold text-gray-900">Sommaire</h3>
      </div>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleClick(heading.id)}
              className={cn(
                'block w-full text-left text-sm transition-colors hover:text-blue-600',
                heading.level === 3 && 'pl-4',
                activeId === heading.id
                  ? 'font-semibold text-blue-600'
                  : 'text-gray-600'
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
