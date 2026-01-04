'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, Home, Zap, CheckCircle2, Sparkles, TrendingUp, Users, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';

const solutions = [
  {
    title: 'SaaS de gestion',
    description:
      'Une plateforme SaaS complète pour centraliser toute votre gestion immobilière : biens, clients, contrats, paiements.',
    link: '/la-solution/saas-gestion',
    icon: BarChart3,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    title: 'Portail d\'annonces',
    description:
      'Publiez et gérez automatiquement vos annonces immobilières sur tous les canaux depuis un seul endroit.',
    link: '/la-solution/portail-annonces',
    icon: Home,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    title: 'Technologies avancées',
    description:
      'Bénéficiez de l\'IA pour automatiser vos tâches et des paiements Mobile Money pour faciliter les transactions.',
    link: '/la-solution/technologies',
    icon: Zap,
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
  },
];

const advantages = [
  {
    icon: TrendingUp,
    title: 'Productivité maximale',
    description: 'Automatisez vos tâches répétitives et concentrez-vous sur l\'essentiel.',
  },
  {
    icon: Users,
    title: 'Collaboration simplifiée',
    description: 'Travaillez en équipe avec des outils de collaboration intégrés.',
  },
  {
    icon: Shield,
    title: 'Sécurité renforcée',
    description: 'Vos données sont protégées avec les meilleures pratiques de sécurité.',
  },
  {
    icon: Clock,
    title: 'Temps réel',
    description: 'Accédez à vos informations en temps réel, où que vous soyez.',
  },
];

const stats = [
  { value: '100%', label: 'Centralisé', description: 'Tout au même endroit' },
  { value: '+40%', label: 'Productivité', description: 'Gain de temps' },
  { value: '24/7', label: 'Disponibilité', description: 'Accessible partout' },
];

export default function LaSolutionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-[#E8F2FF] to-[#D6EBFF] py-20 text-center md:py-32">
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
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg transition-all duration-300 hover:scale-105">
              <Sparkles className="h-4 w-4 text-[#2563EB] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Solution Complète
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Une solution{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-75 blur-sm animate-gradient" />
                <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                  complète et intégrée
                </span>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={200}>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
              ImmoTopia combine plusieurs modules puissants pour vous offrir une{' '}
              <Link href="/logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                solution de gestion immobilière complète en Côte d'Ivoire
              </Link>
              , accessible depuis une seule plateforme.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_70%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="group text-center transition-all duration-300 hover:scale-105">
                  <div className="mb-2 text-4xl font-extrabold leading-none text-[#2563EB] transition-all duration-300 group-hover:scale-110 md:text-5xl lg:text-6xl">
                    {stat.value}
                  </div>
                  <div className="mb-1 text-lg font-semibold text-gray-900 md:text-xl">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 md:text-base">
                    {stat.description}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[#2563EB]/5 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Trois modules puissants
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Découvrez les composants qui font d'ImmoTopia la solution complète pour votre activité immobilière.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Card className="group relative h-full overflow-hidden border-2 border-transparent bg-white transition-all duration-500 hover:border-[#2563EB]/20 hover:shadow-2xl hover:-translate-y-2">
                    {/* Gradient background on hover */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-5",
                      solution.bgGradient
                    )} />
                    
                    {/* Animated border gradient */}
                    <div className={cn(
                      "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      `bg-gradient-to-r ${solution.gradient}`
                    )} style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                    
                    <CardContent className="relative z-10 flex h-full flex-col p-8">
                      {/* Icon with animated background */}
                      <div className={cn(
                        "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg",
                        solution.gradient
                      )}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="mb-4 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
                        {solution.title}
                      </h3>
                      
                      <p className="mb-6 flex-grow text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <Button 
                        asChild 
                        variant="link" 
                        className="group/link mt-auto justify-start p-0 text-[#2563EB] transition-all duration-300 hover:text-[#1D4ED8]"
                      >
                        <Link href={solution.link} className="flex items-center font-semibold">
                          En savoir plus
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.04),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Pourquoi choisir ImmoTopia ?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Des avantages concrets pour transformer votre façon de travailler. Découvrez comment notre solution aide les{' '}
                <Link href="/pour-qui/agences-immobilieres" className="font-semibold text-[#2563EB] hover:underline">
                  agences immobilières
                </Link>
                {' '}et les{' '}
                <Link href="/pour-qui/gestionnaires-locatifs" className="font-semibold text-[#2563EB] hover:underline">
                  gestionnaires locatifs
                </Link>
                {' '}à optimiser leur activité.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2563EB]/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/5 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6 text-center">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Architecture Intégrée
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Un écosystème{' '}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
                complet et connecté
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
              Tous les modules ImmoTopia sont conçus pour fonctionner ensemble, vous offrant une
              expérience fluide et une vue d'ensemble complète de votre activité immobilière. Explorez{' '}
              <Link href="/la-solution/technologies" className="font-semibold text-[#2563EB] hover:underline">
                nos technologies
              </Link>
              {' '}pour comprendre notre engagement pour la sécurité et la performance.
            </p>
          </ScrollReveal>

          {/* Visual Architecture Diagram */}
          <ScrollReveal direction="up" delay={300}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className={cn(
                      "mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-all duration-300 hover:scale-110",
                      solution.gradient
                    )}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="h-12 w-0.5 bg-gradient-to-b from-[#2563EB]/30 to-transparent md:h-0.5 md:w-12 md:bg-gradient-to-r" />
                  </div>
                );
              })}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] shadow-lg">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
            </div>
            <p className="mt-8 text-sm font-semibold text-gray-600 md:text-base">
              Tous connectés • Tous synchronisés • Tous accessibles
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] via-indigo-600 to-[#1D4ED8] py-20 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Prêt à commencer ?
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Transformez votre{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-white/20 blur-sm" />
                <span className="relative">gestion immobilière</span>
              </span>
              {' '}dès aujourd'hui
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Rejoignez les professionnels qui font confiance à ImmoTopia pour centraliser et
              automatiser leur activité immobilière.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group bg-white text-[#2563EB] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                onClick={() => trackCTAClick('Demander une démo gratuite', 'solution_page_cta')}
              >
                <Link href="/contact?demo=true" className="flex items-center font-bold">
                  Demander une démo gratuite
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
                onClick={() => trackCTAClick('Découvrir les fonctionnalités', 'solution_page_cta')}
              >
                <Link href="/fonctionnalites" className="font-semibold">
                  Découvrir les fonctionnalités
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
