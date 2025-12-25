'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@monorepo/ui';
import { features } from '../../lib/features';
import FeatureCard from './FeatureCard';
import { cn } from '@/lib/utils';

interface FeaturesPreviewProps {
  className?: string;
}

export default function FeaturesPreview({ className }: FeaturesPreviewProps) {
  // Afficher les 6 premières fonctionnalités
  const previewFeatures = features.slice(0, 6);

  return (
    <section className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', className)}>
      {/* Enhanced Background with animated gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F7FF] via-white to-[#E8F2FF]" />
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#2563EB]/8 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[#3B82F6]/6 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D4ED8]/5 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <ScrollReveal direction="fade" delay={0}>
          <div className="mb-12 md:mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-white/80 backdrop-blur-sm px-5 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#2563EB]/30 hover:shadow-xl">
              <Sparkles className="h-4 w-4 text-[#2563EB] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Fonctionnalités
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Tout ce dont vous avez besoin{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-50 blur-sm" />
                <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent">
                  en un seul endroit
                </span>
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              Découvrez les fonctionnalités qui transforment la gestion immobilière et boostent votre productivité
            </p>
          </div>
        </ScrollReveal>

        {/* Enhanced Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewFeatures.map((feature, index) => (
            <ScrollReveal key={feature.id} direction="up" delay={index * 100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 via-[#3B82F6]/20 to-[#2563EB]/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <FeatureCard feature={feature} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced CTA */}
        <ScrollReveal direction="fade" delay={600}>
          <div className="mt-16 md:mt-20 text-center">
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="group relative overflow-hidden border-2 border-[#2563EB]/30 bg-white/90 backdrop-blur-sm px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:border-[#2563EB] hover:bg-white hover:shadow-2xl"
            >
              <Link href="/fonctionnalites" className="relative z-10 flex items-center justify-center">
                Voir toutes les fonctionnalités
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

