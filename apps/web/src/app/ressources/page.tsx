'use client';

import Link from 'next/link';
import { FileText, BookOpen, Bell, ArrowRight, Sparkles, TrendingUp, Download, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';

const resources = [
  {
    icon: FileText,
    title: 'Blog',
    description: 'Articles, conseils et actualités sur la gestion immobilière professionnelle.',
    link: '/ressources/blog',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: BookOpen,
    title: 'Guides pratiques',
    description: 'Guides téléchargeables pour optimiser votre gestion immobilière.',
    link: '/ressources/guides',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Bell,
    title: 'Actualités',
    description: 'Suivez les dernières nouveautés et mises à jour d\'ImmoTopia.',
    link: '/ressources/actualites',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Conseils experts',
    description: 'Des articles rédigés par des professionnels du secteur immobilier.',
  },
  {
    icon: Download,
    title: 'Ressources gratuites',
    description: 'Téléchargez nos guides pratiques et outils gratuitement.',
  },
  {
    icon: Users,
    title: 'Communauté active',
    description: 'Rejoignez une communauté de professionnels passionnés.',
  },
];

export default function RessourcesPage() {
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
                Ressources Gratuites
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Ressources pour{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-75 blur-sm animate-gradient" />
                <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                  professionnels
                </span>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={200}>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
              Accédez à nos ressources pour améliorer votre gestion immobilière et découvrir les
              meilleures pratiques du secteur.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Resources Grid - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[#2563EB]/5 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Explorez nos ressources
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Tout ce dont vous avez besoin pour exceller dans la gestion immobilière.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Link href={resource.link} className="block no-underline group">
                    <Card className="group relative h-full overflow-hidden border-2 border-transparent bg-white transition-all duration-500 hover:border-[#2563EB]/20 hover:shadow-2xl hover:-translate-y-2">
                      {/* Gradient background on hover */}
                      <div className={cn(
                        "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5",
                        `bg-gradient-to-br ${resource.bgGradient}`
                      )} />
                      
                      {/* Animated border gradient */}
                      <div className={cn(
                        "absolute -inset-0.5 rounded-lg opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20",
                        `bg-gradient-to-r ${resource.gradient}`
                      )} />
                      
                      <CardContent className="relative z-10 flex h-full flex-col p-8 text-center">
                        {/* Icon with animated background */}
                        <div className={cn(
                          "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl mx-auto",
                          resource.gradient
                        )}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        
                        <h3 className="mb-4 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
                          {resource.title}
                        </h3>
                        
                        <p className="mb-6 flex-grow text-gray-600 leading-relaxed">
                          {resource.description}
                        </p>
                        
                        <Button 
                          variant="link" 
                          className="group/link justify-center p-0 text-[#2563EB] transition-all duration-300 hover:text-[#1D4ED8] hover:gap-2 font-semibold"
                        >
                          Découvrir
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.04),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Pourquoi nos ressources ?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Des contenus de qualité pour vous aider à progresser.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
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
                Commencez dès aujourd'hui
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Prêt à améliorer votre{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-white/20 blur-sm" />
                <span className="relative">gestion immobilière</span>
              </span>
              {' '}?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Explorez nos ressources gratuites et découvrez comment ImmoTopia peut transformer
              votre façon de travailler.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group bg-white text-[#2563EB] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                onClick={() => trackCTAClick('Voir les guides', 'ressources_page_cta')}
              >
                <Link href="/ressources/guides" className="flex items-center font-bold">
                  Voir les guides
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
                onClick={() => trackCTAClick('Lire le blog', 'ressources_page_cta')}
              >
                <Link href="/ressources/blog" className="font-semibold">
                  Lire le blog
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
