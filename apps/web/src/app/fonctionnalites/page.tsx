'use client';

import { features } from '../../lib/features';
import FeatureCard from '../../components/sections/FeatureCard';
import { Tabs, ScrollReveal } from '@monorepo/ui';
import type { TabItem } from '@monorepo/ui';
import { Sparkles, Zap, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';

export default function FonctionnalitesPage() {
  // Grouper les fonctionnalités par catégorie pour les onglets
  const allFeaturesTab: TabItem = {
    key: 'all',
    label: 'Toutes',
    content: (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <ScrollReveal key={feature.id} direction="up" delay={index * 50}>
            <FeatureCard feature={feature} />
          </ScrollReveal>
        ))}
      </div>
    ),
  };

  const gestionTab: TabItem = {
    key: 'gestion',
    label: 'Gestion',
    content: (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features
          .filter((f) => f.id === 'gestion-biens' || f.id === 'gestion-locative' || f.id === 'syndic-copropriete')
          .map((feature, index) => (
            <ScrollReveal key={feature.id} direction="up" delay={index * 50}>
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
      </div>
    ),
  };

  const commercialTab: TabItem = {
    key: 'commercial',
    label: 'Commercial',
    content: (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features
          .filter((f) => f.id === 'crm-immobilier' || f.id === 'promotion-immobiliere')
          .map((feature, index) => (
            <ScrollReveal key={feature.id} direction="up" delay={index * 50}>
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
      </div>
    ),
  };

  const technologieTab: TabItem = {
    key: 'technologie',
    label: 'Technologie',
    content: (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features
          .filter((f) => f.id === 'paiements-mobile-money' || f.id === 'automatisation-ia')
          .map((feature, index) => (
            <ScrollReveal key={feature.id} direction="up" delay={index * 50}>
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
      </div>
    ),
  };

  const tabItems: TabItem[] = [allFeaturesTab, gestionTab, commercialTab, technologieTab];

  const stats = [
    { value: '7+', label: 'Fonctionnalités', description: 'Modules complets' },
    { value: '100%', label: 'Intégré', description: 'Tout connecté' },
    { value: '24/7', label: 'Disponible', description: 'Accessible partout' },
  ];

  const highlights = [
    {
      icon: Zap,
      title: 'Automatisation intelligente',
      description: 'L\'IA optimise vos processus et réduit les tâches répétitives.',
    },
    {
      icon: TrendingUp,
      title: 'Productivité maximale',
      description: 'Gagnez du temps avec des outils conçus pour l\'efficacité.',
    },
    {
      icon: CheckCircle2,
      title: 'Solution complète',
      description: 'Tous les outils nécessaires dans une seule plateforme.',
    },
  ];

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
                Toutes les Fonctionnalités
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Des fonctionnalités{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-75 blur-sm animate-gradient" />
                <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                  puissantes et complètes
                </span>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={200}>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
              ImmoTopia regroupe tous les outils nécessaires à la gestion immobilière professionnelle
              sur une seule plateforme intuitive et performante.
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

      {/* Features with Tabs - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[#2563EB]/5 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Explorez nos fonctionnalités
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Découvrez tous les outils qui font d'ImmoTopia la solution complète pour votre activité immobilière.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <Tabs items={tabItems} defaultActiveKey="all" />
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights Section */}
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
                Des avantages concrets pour transformer votre façon de travailler.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
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
                Prêt à découvrir ?
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Testez toutes les fonctionnalités{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-white/20 blur-sm" />
                <span className="relative">gratuitement</span>
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Demandez une démonstration personnalisée et découvrez comment ImmoTopia peut transformer
              votre gestion immobilière.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group bg-white text-[#2563EB] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                onClick={() => trackCTAClick('Demander une démo gratuite', 'fonctionnalites_page_cta')}
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
                onClick={() => trackCTAClick('Voir la solution', 'fonctionnalites_page_cta')}
              >
                <Link href="/la-solution" className="font-semibold">
                  Voir la solution complète
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
