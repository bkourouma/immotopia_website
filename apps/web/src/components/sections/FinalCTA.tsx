'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@monorepo/ui';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';
import { trackClarity } from '@/lib/clarity';

interface FinalCTAProps {
  className?: string;
}

export default function FinalCTA({ className }: FinalCTAProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-20 text-white md:py-32',
        'bg-gradient-to-br from-primary via-indigo-600 to-primary',
        className
      )}
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal direction="fade" delay={0}>
          <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Commencez dès aujourd'hui
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Prêt à gérer votre agence{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-white/20 blur-sm" />
              <span className="relative">plus efficacement</span>
            </span>
            {' '}?
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="fade" delay={100}>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Créez votre compte en quelques minutes et découvrez comment ImmoTopia transforme la gestion immobilière pour les professionnels.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group bg-white text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
              onClick={() => {
                trackCTAClick('Créer mon compte', 'final_cta');
                trackClarity('cta_creer_mon_compte_final');
              }}
              id="cta-final-signup"
            >
              <Link href="/contact?signup=true" className="flex items-center">
                Créer mon compte
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
              onClick={() => trackCTAClick('Voir les tarifs', 'final_cta')}
            >
              <Link href="/tarifs">Voir les tarifs</Link>
            </Button>
          </div>
          {/* Micro-copy de réassurance */}
          <p className="mt-6 text-center text-sm text-white/80">
            Sans engagement · Configuration rapide · Support inclus
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

