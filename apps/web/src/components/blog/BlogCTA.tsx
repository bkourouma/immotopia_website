'use client';

/**
 * Composant CTA pour conversion (Créer mon compte + Demander une démo)
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackClarity } from '@/lib/clarity';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BlogCTAProps {
  /** Classes CSS additionnelles */
  className?: string;
  /** Variant du CTA (default, compact) */
  variant?: 'default' | 'compact';
}

export default function BlogCTA({ className, variant = 'default' }: BlogCTAProps) {
  const handleSignupClick = () => {
    trackClarity('blog_cta_signup');
  };

  const handleDemoClick = () => {
    trackClarity('blog_cta_demo');
  };

  if (variant === 'compact') {
    return (
      <div className={cn('flex flex-col gap-3 sm:flex-row', className)}>
        <Button
          asChild
          size="sm"
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          onClick={handleSignupClick}
        >
          <Link href="/contact?signup=true">Créer mon compte</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={handleDemoClick}
        >
          <Link href="/contact?demo=true">Demander une démo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className={cn('rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 shadow-lg', className)}>
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Prêt à commencer ?</span>
        </div>
        
        <h3 className="mb-2 text-2xl font-bold text-gray-900">
          Transformez votre gestion immobilière
        </h3>
        <p className="mb-6 text-gray-600">
          Rejoignez les professionnels qui utilisent ImmoTopia pour optimiser leur activité.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            onClick={handleSignupClick}
          >
          <Link href="/contact?signup=true" className="flex items-center gap-2">
            Créer mon compte
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-2"
          onClick={handleDemoClick}
        >
          <Link href="/contact?demo=true" className="flex items-center gap-2">
            Demander une démo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        </div>
      </div>
    </div>
  );
}

