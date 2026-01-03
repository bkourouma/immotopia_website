'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, LifeBuoy, Lock } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface TopBarCTAProps {
  className?: string;
}

export default function TopBarCTA({ className }: TopBarCTAProps) {
  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white',
        'shadow-md',
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] flex items-center justify-between px-4 py-2.5">
        {/* CTA Principal - Cliquable */}
        <Link
          href="/contact?signup=true"
          onClick={() => trackCTAClick('Top Bar CTA', 'top_bar')}
          className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:opacity-90 group"
        >
          <span className="text-base">🚀</span>
          <span>Essai gratuit – Configuration rapide</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        {/* Info Links à droite */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {/* Phone */}
          <Link
            href="tel:+2250101510136"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+225 01 01 51 01 36</span>
          </Link>

          {/* Assistance */}
          <Link
            href="/contact"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <LifeBuoy className="h-4 w-4" />
            <span>Assistance en ligne</span>
          </Link>

          {/* Accès logiciel */}
          <Link
            href="/login"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <Lock className="h-4 w-4" />
            <span>Accès au logiciel</span>
          </Link>
        </div>

        {/* Mobile: Icônes seulement */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            href="tel:+2250101510136"
            className="text-white/90 hover:text-white transition-colors"
            aria-label="Appeler"
          >
            <Phone className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="text-white/90 hover:text-white transition-colors"
            aria-label="Assistance"
          >
            <LifeBuoy className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="text-white/90 hover:text-white transition-colors"
            aria-label="Accès logiciel"
          >
            <Lock className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

