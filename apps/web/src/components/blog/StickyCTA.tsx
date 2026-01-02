'use client';

/**
 * Composant Sticky CTA pour affichage en bas d'écran pendant la lecture
 * Design discret et non intrusif
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackClarity } from '@/lib/clarity';
import { cn } from '@/lib/utils';
import { ArrowRight, X } from 'lucide-react';

interface StickyCTAProps {
  /** Classes CSS additionnelles */
  className?: string;
}

export default function StickyCTA({ className }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Afficher après un scroll de 300px
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleSignupClick = () => {
    trackClarity('blog_cta_signup_sticky');
  };

  const handleDemoClick = () => {
    trackClarity('blog_cta_demo_sticky');
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300',
        isVisible ? 'translate-y-0' : 'translate-y-full',
        className
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Text */}
          <div className="hidden flex-1 sm:block">
            <p className="text-sm font-medium text-gray-900">
              Prêt à transformer votre gestion immobilière ?
            </p>
            <p className="text-xs text-gray-600">
              Rejoignez les professionnels qui utilisent ImmoTopia
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-1 items-center justify-end gap-3 sm:flex-initial">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={handleSignupClick}
            >
              <Link href="/contact?signup=true" className="flex items-center gap-1.5">
                Créer mon compte
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              onClick={handleDemoClick}
            >
              <Link href="/contact?demo=true">Demander une démo</Link>
            </Button>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-2 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

