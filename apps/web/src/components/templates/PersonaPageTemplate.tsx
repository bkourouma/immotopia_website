'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Sparkles, ArrowLeft, TrendingUp, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import type { Persona } from '../../lib/personas';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';

interface PersonaPageTemplateProps {
  persona: Persona;
}

// Mapping des gradients par persona
const getGradientForPersona = (personaId: string): string => {
  const gradientMap: Record<string, string> = {
    'agences-immobilieres': 'from-blue-500 to-cyan-500',
    'promoteurs': 'from-purple-500 to-pink-500',
    'syndics': 'from-indigo-500 to-purple-500',
    'gestionnaires': 'from-emerald-500 to-teal-500',
    'proprietaires': 'from-orange-500 to-amber-500',
  };
  return gradientMap[personaId] || 'from-[#2563EB] to-[#1D4ED8]';
};

export default function PersonaPageTemplate({ persona }: PersonaPageTemplateProps) {
  const gradient = getGradientForPersona(persona.id);

  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-[#E8F2FF] to-[#D6EBFF] py-12 text-center md:py-16">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.10),transparent_50%)]" />
          
          {/* Animated floating orbs */}
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#2563EB]/15 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#1D4ED8]/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal direction="fade" delay={0}>
              <div className="mb-6">
                <Button asChild variant="ghost" size="sm" className="group">
                  <Link href="/pour-qui" className="flex items-center text-gray-600 hover:text-[#2563EB] transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    Retour aux profils
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="fade" delay={100}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
                <Sparkles className="h-4 w-4 text-[#2563EB] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  Solution Personnalisée
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="fade" delay={200}>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                {persona.title}
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="fade" delay={300}>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
                {persona.description}
              </p>
            </ScrollReveal>
            
            {persona.metrics && persona.metrics.length > 0 && (
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {persona.metrics.map((metric, index) => (
                  <ScrollReveal key={index} direction="up" delay={index * 100 + 400}>
                    <div className="group text-center transition-all duration-300 hover:scale-105">
                      <div className={cn(
                        "mb-2 text-3xl font-extrabold leading-none transition-all duration-300 group-hover:scale-110 md:text-4xl lg:text-5xl",
                        `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`
                      )}>
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-600 md:text-base">{metric.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problems Section - Enhanced */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_70%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal direction="fade" delay={0}>
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-50/80 backdrop-blur-md px-4 py-2 shadow-lg">
                  <Target className="h-4 w-4 text-red-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Défis
                  </span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  Les défis que vous rencontrez
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                  Des problèmes courants que nous résolvons pour vous.
                </p>
              </div>
            </ScrollReveal>
            
            <ul className="space-y-4">
              {persona.problems.map((problem, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 50}>
                  <li className="group flex items-start gap-4 rounded-xl border-2 border-red-100 bg-red-50/50 p-5 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:shadow-lg">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white transition-all duration-300 group-hover:scale-110">
                      <span className="text-xs font-bold">!</span>
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{problem}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal direction="fade" delay={0}>
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
                  <Zap className="h-4 w-4 text-[#2563EB]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    Solutions
                  </span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  Comment ImmoTopia vous aide
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                  Des solutions concrètes pour répondre à vos besoins.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {persona.solutions.map((solution, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Card className="group h-full border-2 border-transparent transition-all duration-300 hover:border-[#2563EB]/20 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex flex-col p-6">
                      <div className={cn(
                        "mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                        `bg-gradient-to-br ${gradient}`
                      )}>
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">{solution}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.04),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal direction="fade" delay={0}>
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-50/80 backdrop-blur-md px-4 py-2 shadow-lg">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-green-600">
                    Bénéfices
                  </span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  Les bénéfices concrets
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                  Des résultats mesurables pour votre activité.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {persona.benefits.map((benefit, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 50}>
                  <div className="group flex items-start gap-3 rounded-xl border-2 border-green-100 bg-green-50/50 p-4 transition-all duration-300 hover:border-green-200 hover:bg-green-50 hover:shadow-lg hover:-translate-y-1">
                    <div className={cn(
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110",
                      `bg-gradient-to-br ${gradient}`
                    )}>
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] via-indigo-600 to-[#1D4ED8] py-20 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal direction="fade" delay={0}>
              <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Prêt à commencer ?
                </span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                Prêt à transformer votre{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-white/20 blur-sm" />
                  <span className="relative">gestion immobilière</span>
                </span>
                {' '}?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="fade" delay={100}>
              <p className="mb-8 text-lg text-white/90 md:text-xl">
                Découvrez comment ImmoTopia peut répondre spécifiquement aux besoins des{' '}
                <span className="font-semibold">{persona.name.toLowerCase()}</span> et demandez une démonstration personnalisée.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group bg-white text-[#2563EB] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                  onClick={() => trackCTAClick('Demander une démo personnalisée', `persona_${persona.id}_cta`)}
                >
                  <Link href={`/contact?demo=true&persona=${persona.id}`} className="flex items-center font-bold">
                    Demander une démo personnalisée
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
                  onClick={() => trackCTAClick('Découvrir les fonctionnalités', `persona_${persona.id}_cta`)}
                >
                  <Link href="/fonctionnalites" className="font-semibold">
                    Découvrir les fonctionnalités
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
