'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import { features, type Feature } from '@/lib/features';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import { cn } from '@/lib/utils';
import FeatureCard from '@/components/sections/FeatureCard';

interface FeaturePageClientProps {
  feature: Feature;
}

// Mapping des gradients par fonctionnalité
const getGradientForFeature = (featureId: string): string => {
  const gradientMap: Record<string, string> = {
    'gestion-biens': 'from-blue-500 to-cyan-500',
    'gestion-locative': 'from-indigo-500 to-purple-500',
    'syndic-copropriete': 'from-purple-500 to-pink-500',
    'crm-immobilier': 'from-emerald-500 to-teal-500',
    'promotion-immobiliere': 'from-orange-500 to-amber-500',
    'paiements-mobile-money': 'from-green-500 to-emerald-500',
    'automatisation-ia': 'from-violet-500 to-purple-500',
  };
  return gradientMap[featureId] || 'from-[#2563EB] to-[#1D4ED8]';
};

export default function FeaturePageClient({ feature }: FeaturePageClientProps) {
  const gradient = getGradientForFeature(feature.id);
  
  // Trouver les personas associées
  const personaLabels: Record<string, string> = {
    'agences-immobilieres': 'Agences immobilières',
    'promoteurs': 'Promoteurs immobiliers',
    'syndics': 'Syndics de copropriété',
    'gestionnaires': 'Gestionnaires locatifs',
    'proprietaires': 'Propriétaires bailleurs',
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-[#E8F2FF] to-[#D6EBFF] py-20 md:py-32">
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

        <div className="container relative z-10 mx-auto max-w-4xl px-6">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-6">
              <Button asChild variant="ghost" size="sm" className="group">
                <Link href="/fonctionnalites" className="flex items-center text-gray-600 hover:text-[#2563EB] transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  Retour aux fonctionnalités
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <Sparkles className="h-4 w-4 text-[#2563EB] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Fonctionnalité
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={200}>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              {feature.title}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={300}>
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
              {feature.detailedDescription || feature.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      {feature.benefits && feature.benefits.length > 0 && (
        <section className="relative overflow-hidden bg-white py-20 md:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_70%)]" />
          </div>

          <div className="container relative z-10 mx-auto max-w-6xl px-6">
            <ScrollReveal direction="fade" delay={0}>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  Avantages principaux
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                  Découvrez les bénéfices concrets de cette fonctionnalité pour votre activité.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {feature.benefits.map((benefit, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 50}>
                  <Card className="group border-2 border-transparent transition-all duration-300 hover:border-[#2563EB]/20 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className={cn(
                        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110",
                        `bg-gradient-to-br ${gradient}`
                      )}>
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">{benefit}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Personas Section - Enhanced */}
      {feature.personas && feature.personas.length > 0 && (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
          </div>

          <div className="container relative z-10 mx-auto max-w-6xl px-6">
            <ScrollReveal direction="fade" delay={0}>
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
                  <Users className="h-4 w-4 text-[#2563EB]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    Idéal pour
                  </span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  Profils concernés
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                  Cette fonctionnalité est particulièrement adaptée aux besoins de :
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {feature.personas.map((persona, index) => (
                <ScrollReveal key={persona} direction="up" delay={index * 50}>
                  <Link href={`/pour-qui/${persona}`} className="block no-underline group">
                    <Card className="h-full border-2 border-transparent transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <div className={cn(
                          "mb-3 mx-auto flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110",
                          `bg-gradient-to-br ${gradient}`
                        )}>
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <p className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
                          {personaLabels[persona] || persona}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Features - Enhanced */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_70%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Autres fonctionnalités
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Découvrez d'autres fonctionnalités qui pourraient vous intéresser.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features
              .filter((f) => f.id !== feature.id)
              .slice(0, 3)
              .map((relatedFeature, index) => (
                <ScrollReveal key={relatedFeature.id} direction="up" delay={index * 100}>
                  <FeatureCard feature={relatedFeature} />
                </ScrollReveal>
              ))}
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

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Découvrez {feature.name}
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Prêt à découvrir{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-white/20 blur-sm" />
                <span className="relative">{feature.name}</span>
              </span>
              {' '}?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Demandez une démonstration personnalisée et découvrez comment cette fonctionnalité peut transformer votre activité.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="mx-auto max-w-md">
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-md">
                <CardContent className="p-6 md:p-8">
                  <DemoRequestForm
                    defaultPersona={feature.personas[0]}
                    onSuccess={() => {
                      // Optionnel : redirection ou message de succès
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

