'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialsProps {
  className?: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    role: 'Directrice',
    company: 'Agence Immobilière Pro',
    content:
      "ImmoTopia a transformé notre façon de travailler. Nous avons gagné un temps considérable sur les tâches administratives et notre productivité a augmenté de 40%.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Jean Dupont',
    role: 'Promoteur',
    company: 'Développement Immobilier SA',
    content:
      "La plateforme centralise tout : gestion des biens, CRM, suivi des ventes. C'est exactement ce qu'il nous fallait pour gérer nos projets efficacement.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Marie Leclerc',
    role: 'Syndic',
    company: 'Syndicat Professionnel',
    content:
      "L'automatisation des tâches administratives pour les copropriétés est un vrai plus. Nos clients apprécient la transparence et la rapidité de traitement.",
    rating: 5,
  },
];

export default function Testimonials({ className }: TestimonialsProps) {
  return (
    <section className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', className)}>
      {/* Enhanced Background with animated gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-white to-[#F0F7FF]" />
        <div className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/6 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-[#1D4ED8]/4 blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '4s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <ScrollReveal direction="fade" delay={0}>
          <div className="mb-12 md:mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-white/80 backdrop-blur-sm px-5 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#2563EB]/30 hover:shadow-xl">
              <Star className="h-4 w-4 text-[#2563EB] fill-[#2563EB] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Témoignages
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Ils nous font{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-50 blur-sm" />
                <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent">
                  confiance
                </span>
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              Découvrez les retours de nos clients professionnels qui ont transformé leur activité avec ImmoTopia
            </p>
          </div>
        </ScrollReveal>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} direction="up" delay={index * 100}>
              <Card className="group relative h-full overflow-hidden border border-gray-200/60 bg-white/90 backdrop-blur-sm transition-all duration-500 hover:border-[#2563EB]/30 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="flex h-full flex-col p-6 sm:p-8">
                  {/* Quote Icon */}
                  <div className="mb-4 flex items-start justify-between">
                    <Quote className="h-10 w-10 text-[#2563EB]/20 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#2563EB]/40" />
                    {testimonial.rating && (
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <p className="mb-6 flex-grow text-base leading-relaxed text-gray-700 sm:text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-gray-200/60 pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#2563EB]/0 via-[#2563EB]/0 to-[#2563EB]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5 pointer-events-none" />
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

