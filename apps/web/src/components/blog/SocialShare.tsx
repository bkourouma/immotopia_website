'use client';

/**
 * Composant pour partager un article sur les réseaux sociaux
 */

import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Facebook, Share2, Link as LinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialShareProps {
  /** Titre de l'article */
  title: string;
  /** URL de l'article */
  url: string;
  /** Description de l'article */
  description?: string;
  /** Classes CSS additionnelles */
  className?: string;
  /** Variant compact ou default */
  variant?: 'default' | 'compact';
}

export default function SocialShare({
  title,
  url,
  description,
  className,
  variant = 'default',
}: SocialShareProps) {
  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${url}`
    : url;

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedDescription = description ? encodeURIComponent(description) : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      // Optionnel: afficher un toast de confirmation
      if (typeof window !== 'undefined' && (window as any).toast) {
        (window as any).toast.success('Lien copié dans le presse-papiers !');
      }
    } catch (err) {
      console.error('Erreur lors de la copie du lien:', err);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <span className="text-sm text-gray-600">Partager :</span>
        <div className="flex items-center gap-1">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            title="Partager sur Twitter"
          >
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            title="Partager sur LinkedIn"
          >
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            title="Partager sur Facebook"
          >
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            title="Copier le lien"
            onClick={handleCopyLink}
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('rounded-lg border border-gray-200 bg-gray-50 p-4', className)}>
      <div className="mb-3 flex items-center gap-2">
        <Share2 className="h-4 w-4 text-gray-600" />
        <h3 className="text-sm font-semibold text-gray-900">Partager cet article</h3>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Twitter className="h-4 w-4" />
            Twitter
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={handleCopyLink}
        >
          <LinkIcon className="h-4 w-4" />
          Copier le lien
        </Button>
      </div>
    </div>
  );
}

