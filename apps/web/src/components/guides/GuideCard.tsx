'use client';

/**
 * Composant Card pour afficher un guide téléchargeable
 */

import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui';
import { GuideMetadata } from '@/lib/content/types';
import { Download, FileText, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateImageAlt } from '@/lib/image-utils';

interface GuideCardProps {
  /** Métadonnées du guide */
  guide: GuideMetadata;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function GuideCard({ guide, className }: GuideCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
    });
  };

  const formatFileSize = (sizeMB?: number) => {
    if (!sizeMB) return null;
    if (sizeMB < 1) {
      return `${Math.round(sizeMB * 1024)} KB`;
    }
    return `${sizeMB.toFixed(1)} MB`;
  };

  return (
    <Card className={cn('flex h-full flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1', className)}>
      {guide.coverImage && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-200">
          <OptimizedImage
            src={guide.coverImage}
            alt={generateImageAlt(guide.title, 'Guide')}
            width={600}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardContent className="flex flex-grow flex-col p-6">
        {guide.category && (
          <div className="mb-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {guide.category}
            </span>
          </div>
        )}
        <h3 className="mb-3 text-xl font-bold text-gray-900">{guide.title}</h3>
        <p className="mb-4 flex-grow text-sm text-gray-600">{guide.description}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
          {guide.date && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formatDate(guide.date)}</span>
            </div>
          )}
          {guide.pageCount && (
            <div className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5" />
              <span>{guide.pageCount} pages</span>
            </div>
          )}
          {guide.fileSize && (
            <div className="text-xs text-gray-500">
              {formatFileSize(guide.fileSize)}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full" size="lg">
          <Link href={`/ressources/guides/${guide.slug}`}>
            <Download className="mr-2 h-4 w-4" />
            Télécharger le guide
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

