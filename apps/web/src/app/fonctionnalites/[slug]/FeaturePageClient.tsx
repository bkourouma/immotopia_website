'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Users, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import { features, type Feature } from '@/lib/features';
import { type FeatureContent } from '@/lib/features-content';
import { cn } from '@/lib/utils';
import FeatureCard from '@/components/sections/FeatureCard';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema, generateServiceSchema } from '@/lib/structured-data';
import { trackCTAClick } from '@/lib/analytics';
import { trackClarity } from '@/lib/clarity';

interface FeaturePageClientProps {
  feature: Feature;
  content: FeatureContent;
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

export default function FeaturePageClient({ feature, content }: FeaturePageClientProps) {
  const gradient = getGradientForFeature(feature.id);
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';

  // Générer les breadcrumbs
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Fonctionnalités', href: '/fonctionnalites' },
    { label: feature.name, href: `/fonctionnalites/${content.slug}` },
  ];

  // Générer le schema FAQ
  const faqSchema = content.faq.length > 0
    ? generateFAQSchema({
        questions: content.faq.map((item) => ({
          question: item.question,
          answer: item.answer,
        })),
      })
    : null;

  // Générer le schema Service
  const serviceSchema = generateServiceSchema({
    name: feature.name,
    description: content.seoDescription,
    provider: {
      '@type': 'Organization',
      name: 'ImmoTopia',
    },
    areaServed: 'Afrique de l\'Ouest',
    serviceType: 'Logiciel SaaS',
  });

  // Fonctionnalités connexes
  const relatedFeatures = content.internalLinks.relatedFeatures
    ? features.filter((f) => content.internalLinks.relatedFeatures?.includes(f.id))
    : features.filter((f) => f.id !== feature.id).slice(0, 2);

  return (
    <>
      {/* Structured Data */}
      <StructuredData data={serviceSchema} id="service-schema" />
      {faqSchema && <StructuredData data={faqSchema} id="faq-schema" />}

      <div className="bg-white">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 bg-gray-50 py-4">
          <div className="container mx-auto max-w-7xl px-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-[#E8F2FF] to-[#D6EBFF] py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.12),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.12),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.10),transparent_50%)]" />
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
                {content.h1}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={300}>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700 md:text-xl">
                {content.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits Section */}
        {content.benefits && content.benefits.length > 0 && (
          <section className="relative overflow-hidden bg-white py-16 md:py-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_70%)]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-6xl px-6">
              <ScrollReveal direction="fade" delay={0}>
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Bénéfices principaux
                  </h2>
                  <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                    Découvrez les avantages concrets de cette fonctionnalité pour votre activité.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {content.benefits.map((benefit, index) => (
                  <ScrollReveal key={index} direction="up" delay={index * 50}>
                    <Card className="group border-2 border-transparent transition-all duration-300 hover:border-[#2563EB]/20 hover:shadow-xl hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className={cn(
                          "mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110",
                          `bg-gradient-to-br ${gradient}`
                        )}>
                          <CheckCircle2 className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Use Cases Section */}
        {content.useCases && content.useCases.length > 0 && (
          <section className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
            <div className="container relative z-10 mx-auto max-w-6xl px-6">
              <ScrollReveal direction="fade" delay={0}>
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Cas d'usage concrets
                  </h2>
                  <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                    Découvrez comment cette fonctionnalité transforme l'activité de professionnels comme vous.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                {content.useCases.map((useCase, index) => (
                  <ScrollReveal key={index} direction="up" delay={index * 100}>
                    <Card className="border-2 border-gray-200 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg">
                      <CardContent className="p-6 md:p-8">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#2563EB]/10 px-3 py-1">
                          <Users className="h-4 w-4 text-[#2563EB]" />
                          <span className="text-xs font-semibold text-[#2563EB]">{useCase.persona}</span>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">{useCase.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{useCase.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Personas Section */}
        {content.personas && content.personas.length > 0 && (
          <section className="relative overflow-hidden bg-white py-16 md:py-24">
            <div className="container relative z-10 mx-auto max-w-6xl px-6">
              <ScrollReveal direction="fade" delay={0}>
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
                    <Users className="h-4 w-4 text-[#2563EB]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      Idéal pour
                    </span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Pour qui ?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                    Cette fonctionnalité est particulièrement adaptée aux besoins de :
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {content.personas.map((persona, index) => (
                  <ScrollReveal key={index} direction="up" delay={index * 50}>
                    <Card className="h-full border-2 border-transparent transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className={cn(
                          "mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300",
                          `bg-gradient-to-br ${gradient}`
                        )}>
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">{persona.name}</h3>
                        <p className="text-gray-700 leading-relaxed">{persona.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {content.faq && content.faq.length > 0 && (
          <section className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
            <div className="container relative z-10 mx-auto max-w-4xl px-6">
              <ScrollReveal direction="fade" delay={0}>
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
                    <HelpCircle className="h-4 w-4 text-[#2563EB]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      Questions fréquentes
                    </span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Questions fréquentes
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {content.faq.map((item, index) => (
                  <ScrollReveal key={index} direction="up" delay={index * 50}>
                    <Card className="border-2 border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.question}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Features Section */}
        {relatedFeatures.length > 0 && (
          <section className="relative overflow-hidden bg-white py-16 md:py-24">
            <div className="container relative z-10 mx-auto max-w-6xl px-6">
              <ScrollReveal direction="fade" delay={0}>
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Fonctionnalités connexes
                  </h2>
                  <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                    Découvrez d'autres fonctionnalités qui pourraient vous intéresser.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedFeatures.map((relatedFeature, index) => (
                  <ScrollReveal key={relatedFeature.id} direction="up" delay={index * 100}>
                    <FeatureCard feature={relatedFeature} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] via-indigo-600 to-[#1D4ED8] py-16 text-white md:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal direction="fade" delay={0}>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                Prêt à découvrir {feature.name} ?
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={100}>
              <p className="mb-8 text-lg text-white/90 md:text-xl">
                Demandez une démonstration personnalisée et découvrez comment cette fonctionnalité peut transformer votre activité.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group bg-white text-[#2563EB] shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
                  onClick={() => {
                    trackCTAClick('Demander une démo', `feature_demo_${content.slug}`);
                    trackClarity(`feature_demo_click_${content.slug}`);
                  }}
                >
                  <Link href={content.internalLinks.contact || '/contact?demo=true'} className="flex items-center font-bold">
                    Demander une démo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                {content.internalLinks.pricing && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:border-white/50 hover:bg-white/20"
                    onClick={() => {
                      trackCTAClick('Voir les tarifs', `feature_pricing_${content.slug}`);
                      trackClarity(`feature_pricing_click_${content.slug}`);
                    }}
                  >
                    <Link href={content.internalLinks.pricing} className="font-semibold">
                      Voir les tarifs
                    </Link>
                  </Button>
                )}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:border-white/50 hover:bg-white/20"
                  onClick={() => {
                    trackCTAClick('Créer mon compte', `feature_signup_${content.slug}`);
                    trackClarity(`feature_signup_click_${content.slug}`);
                  }}
                >
                  <Link href="/contact?signup=true" className="font-semibold">
                    Créer mon compte
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
