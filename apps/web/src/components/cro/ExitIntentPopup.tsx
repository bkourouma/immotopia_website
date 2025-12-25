'use client';

/**
 * Composant Exit Intent Popup - Affiche un popup quand l'utilisateur essaie de quitter la page
 */

import { useState, useEffect } from 'react';
import { X, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ExitIntentPopupProps {
  /** Titre du popup */
  title?: string;
  /** Message du popup */
  message?: string;
  /** Texte du bouton CTA */
  ctaText?: string;
  /** URL du CTA */
  ctaUrl?: string;
  /** Afficher le popup */
  show?: boolean;
  /** Callback quand le popup est fermé */
  onClose?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function ExitIntentPopup({
  title = 'Ne partez pas sans votre guide gratuit !',
  message = 'Téléchargez notre guide complet pour transformer votre gestion immobilière.',
  ctaText = 'Télécharger le guide',
  ctaUrl = '/ressources/guides',
  show: controlledShow,
  onClose: controlledOnClose,
  className,
}: ExitIntentPopupProps) {
  const [internalShow, setInternalShow] = useState(false);

  const isControlled = controlledShow !== undefined;
  const show = isControlled ? controlledShow : internalShow;
  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalShow(false);
      // Sauvegarder dans localStorage pour ne pas réafficher immédiatement
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  };

  useEffect(() => {
    if (isControlled) {
      return;
    }

    // Vérifier si le popup a déjà été affiché dans cette session
    if (sessionStorage.getItem('exitIntentShown')) {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Détecter quand la souris quitte la fenêtre vers le haut
      if (e.clientY <= 0) {
        setInternalShow(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isControlled]);

  if (!show) {
    return null;
  }

  return (
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4', className)}>
      <Card className="relative max-w-md w-full animate-in fade-in zoom-in duration-200">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
          onClick={handleClose}
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </Button>

        <CardHeader>
          <CardTitle className="pr-8">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-600">{message}</p>

          <div className="flex flex-col gap-2">
            <Button asChild size="lg" className="w-full">
              <Link href={ctaUrl}>
                <Download className="mr-2 h-4 w-4" />
                {ctaText}
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleClose}
            >
              Non merci
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500">
            Guide gratuit, sans engagement
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

