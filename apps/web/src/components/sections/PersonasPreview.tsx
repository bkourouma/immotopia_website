'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personas, type Persona } from '../../lib/personas';
import { ScrollReveal } from '@monorepo/ui';
import PersonaCard from './PersonaCard';
import { cn } from '@/lib/utils';

interface PersonasPreviewProps {
  className?: string;
  showTitle?: boolean;
}

export default function PersonasPreview({ className, showTitle = true }: PersonasPreviewProps) {
  return (
    <section className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', className)}>
      {/* Enhanced Background with animated gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFF] to-[#F0F7FF]" />
        <div className="absolute top-1/4 right-0 h-[700px] w-[700px] rounded-full bg-[#2563EB]/8 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 left-0 h-[600px] w-[600px] rounded-full bg-[#3B82F6]/6 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D4ED8]/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-12 md:mb-16 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-white/80 backdrop-blur-sm px-5 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#2563EB]/30 hover:shadow-xl">
                <Users className="h-4 w-4 text-[#2563EB] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  Solutions par profil
                </span>
              </div>
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Une solution adaptée à{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-50 blur-sm" />
                  <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent">
                    chaque professionnel
                  </span>
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
                ImmoTopia s'adapte aux besoins spécifiques de chaque acteur de l'immobilier pour optimiser votre activité
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Enhanced Grid with hover effects */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona: Persona, index: number) => (
            <ScrollReveal key={persona.id} direction="up" delay={index * 100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 via-[#3B82F6]/20 to-[#2563EB]/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <PersonaCard persona={persona} />
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
              variant="outline" 
              size="lg"
              className="group relative overflow-hidden border-2 border-[#2563EB]/30 bg-white/90 backdrop-blur-sm px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:border-[#2563EB] hover:bg-white hover:shadow-2xl"
            >
              <Link href="/pour-qui" className="relative z-10 flex items-center justify-center">
                Voir toutes les solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
