'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-12 md:py-16 lg:py-20',
        'bg-gradient-to-br from-[#F0F7FF] via-[#E8F2FF] to-[#D6EBFF]',
        'dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
        className
      )}
    >
      {/* Animated Gradient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.10),transparent_50%)]" />
        
        {/* Animated floating orbs with enhanced effects */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#2563EB]/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#1D4ED8]/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex justify-center">
          <div className="w-full text-center lg:w-2/3 xl:w-[58%]">
            {/* Badge with animation */}
            <ScrollReveal direction="fade" delay={0}>
              <div className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#2563EB]/40 hover:bg-white/90 hover:shadow-xl">
                <Sparkles className="h-4 w-4 text-[#2563EB] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  Solution SaaS Professionnelle
                </span>
              </div>
            </ScrollReveal>

            {/* Title with animated gradient */}
            <ScrollReveal direction="fade" delay={100}>
              <h1 className="mb-6 md:mb-8 flex flex-col items-center text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="block sm:whitespace-nowrap">
                  La plateforme de gestion immobilière{' '}
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-75 blur-sm" />
                    <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent">
                      tout-en-un
                    </span>
                  </span>
                </span>
                <span className="block sm:whitespace-nowrap text-gray-800">pour les professionnels</span>
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="fade" delay={200}>
              <p className="mx-auto mb-8 md:mb-10 max-w-[750px] text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg lg:text-xl font-medium px-4 sm:px-0">
                Centralisez toute votre activité immobilière sur une seule plateforme. Gestion des
                biens, CRM, gestion locative, syndic, promotion immobilière et paiements Mobile
                Money, le tout automatisé par l'IA.
              </p>
            </ScrollReveal>

            {/* CTA Group with enhanced animations */}
            <ScrollReveal direction="up" delay={300}>
              <div className="mb-8 md:mb-12 flex flex-col items-center justify-center gap-4 sm:gap-5 sm:flex-row px-4 sm:px-0">
                <Button
                  asChild
                  size="lg"
                  className="group relative w-full overflow-hidden !bg-[#2563EB] !text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:!bg-[#1D4ED8] sm:w-auto px-6 py-5 md:px-8 md:py-6 text-sm sm:text-base font-bold"
                  onClick={() => trackCTAClick('Demander une démo', 'hero')}
                >
                  <Link href="/contact?demo=true" className="relative z-10 flex items-center justify-center">
                    Demander une démo
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group w-full border-2 border-gray-300 bg-white/90 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#2563EB] hover:bg-white hover:shadow-xl sm:w-auto px-6 py-5 md:px-8 md:py-6 text-sm sm:text-base font-semibold text-gray-800"
                  onClick={() => trackCTAClick('Découvrir la solution', 'hero')}
                >
                  <Link href="/la-solution" className="flex items-center justify-center">
                    Découvrir la solution
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

    </section>
  );
}
