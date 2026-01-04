'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, Globe, BarChart3, Zap, Sparkles, ArrowLeft, Share2, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';

const features = [
  'Publication automatique sur plusieurs sites d\'annonces',
  'Synchronisation en temps réel des disponibilités',
  'Gestion centralisée de toutes vos annonces',
  'Photos et descriptions optimisées pour chaque plateforme',
  'Suivi des statistiques (vues, contacts, visites)',
  'Mise à jour automatique lors de la réservation',
  'Multilingue et multi-devises',
  'Export et import de données',
];

const platforms = [
  {
    name: 'Sites d\'annonces locaux',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Réseaux sociaux',
    description: 'Facebook, Instagram',
    icon: Share2,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Votre site web ImmoTopia',
    icon: Globe,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Réseaux partenaires',
    icon: Share2,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Rapidité',
    description: 'Publiez vos annonces en quelques clics sur toutes les plateformes simultanément.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Suivi',
    description: 'Analysez les performances de vos annonces et optimisez votre stratégie.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: CheckCircle,
    title: 'Cohérence',
    description: 'Gardez vos annonces synchronisées et à jour sur tous les canaux.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function PortailAnnoncesPage() {
  const gradient = 'from-purple-500 to-pink-500';

  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-[#E8F2FF] to-[#D6EBFF] py-12 text-center md:py-16">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(192,132,252,0.10),transparent_50%)]" />
          
          {/* Animated floating orbs */}
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-pink-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-6">
              <Button asChild variant="ghost" size="sm" className="group">
                <Link href="/la-solution" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  Retour à la solution
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <Sparkles className="h-4 w-4 text-purple-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                Portail d'Annonces
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={200}>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Portail d'annonces{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] bg-clip-text opacity-75 blur-sm animate-gradient" />
                <span className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                  immobilières
                </span>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={300}>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg font-medium">
              Publiez et gérez automatiquement vos annonces immobilières sur tous les canaux depuis
              un seul endroit. Idéal pour les{' '}
              <Link href="/pour-qui/agences-immobilieres" className="font-semibold text-purple-600 hover:underline">
                agences immobilières
              </Link>
              {' '}qui souhaitent utiliser un{' '}
              <Link href="/logiciel-annonces-immobilieres-cote-divoire" className="font-semibold text-purple-600 hover:underline">
                logiciel d'annonces immobilières en Côte d'Ivoire
              </Link>
              {' '}performant.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_70%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Gagnez du temps avec la publication automatique
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Automatisez votre diffusion et concentrez-vous sur l'essentiel.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 50}>
                <Card className="group border-2 border-transparent transition-all duration-300 hover:border-purple-500/20 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className={cn(
                      "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110",
                      `bg-gradient-to-br ${gradient}`
                    )}>
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">{feature}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-pink-500/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
                <Share2 className="h-4 w-4 text-purple-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  Multi-Plateformes
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Diffusez vos annonces partout
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Une publication, plusieurs canaux de diffusion automatiques.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Card className="group h-full border-2 border-transparent transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className={cn(
                        "mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                        platform.gradient
                      )}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-1 font-semibold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
                        {platform.name}
                      </h3>
                      {platform.description && (
                        <p className="text-sm text-gray-600">{platform.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.04),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Pourquoi choisir notre portail ?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Des avantages concrets pour optimiser votre diffusion. Complétez votre stratégie avec notre{' '}
                <Link href="/crm-immobilier-cote-divoire" className="font-semibold text-purple-600 hover:underline">
                  CRM immobilier
                </Link>
                {' '}pour un suivi client optimal.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Card className="group h-full border-2 border-transparent transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className={cn(
                        "mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                        benefit.gradient
                      )}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_70%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { value: '-80%', label: 'Temps de publication', description: 'Gain de temps' },
              { value: '+300%', label: 'Visibilité', description: 'Multi-canal' },
              { value: '100%', label: 'Synchronisé', description: 'Temps réel' },
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="group text-center transition-all duration-300 hover:scale-105">
                  <div className="mb-2 text-4xl font-extrabold leading-none bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 md:text-5xl lg:text-6xl">
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

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 py-20 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Simplifiez votre diffusion
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Simplifiez votre{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-white/20 blur-sm" />
                <span className="relative">diffusion d'annonces</span>
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Découvrez comment le portail d'annonces ImmoTopia peut augmenter votre visibilité et
              simplifier votre gestion.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group bg-white text-purple-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                onClick={() => trackCTAClick('Demander une démo gratuite', 'portail_annonces_cta')}
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
                onClick={() => trackCTAClick('Voir les tarifs', 'portail_annonces_cta')}
              >
                <Link href="/tarifs" className="font-semibold">
                  Voir les tarifs
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
