'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Zap, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import PricingCard, { type PricingPlan } from '../../components/sections/PricingCard';
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema } from '@/lib/structured-data';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'À partir de',
    priceValue: '99€',
    period: '/mois',
    description: 'Parfait pour les petites structures',
    features: [
      'Gestion jusqu\'à 50 biens',
      'CRM de base',
      'Portail d\'annonces',
      'Support par email',
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    name: 'Professional',
    price: 'À partir de',
    priceValue: '199€',
    period: '/mois',
    description: 'Pour les professionnels actifs',
    features: [
      'Gestion illimitée de biens',
      'CRM complet',
      'Portail d\'annonces premium',
      'Gestion locative',
      'Paiements Mobile Money',
      'Support prioritaire',
    ],
    cta: 'Essayer gratuitement',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    priceValue: 'Sur devis',
    period: '',
    description: 'Solution personnalisée pour grandes structures',
    features: [
      'Toutes les fonctionnalités',
      'Intégrations sur mesure',
      'Formation personnalisée',
      'Support dédié',
      'Hébergement dédié',
      'Accompagnement stratégique',
    ],
    cta: 'Nous contacter',
    ctaLink: '/contact?demo=true&plan=enterprise',
    popular: false,
  },
];

const faqData = [
  {
    question: 'Puis-je changer de formule à tout moment ?',
    answer:
      'Oui, vous pouvez passer à une formule supérieure ou inférieure à tout moment. Les changements sont appliqués au prochain cycle de facturation.',
  },
  {
    question: 'Y a-t-il des frais cachés ?',
    answer:
      'Non, nos tarifs sont transparents. Le prix affiché est le prix que vous payez. Pas de frais d\'installation, pas de frais cachés.',
  },
  {
    question: 'Puis-je essayer gratuitement ?',
    answer:
      'Oui, toutes nos formules incluent une période d\'essai gratuit. Contactez-nous pour commencer votre essai dès aujourd\'hui.',
  },
];

const guarantees = [
  {
    icon: Shield,
    title: 'Sans engagement',
    description: 'Annulez à tout moment, sans frais.',
  },
  {
    icon: Zap,
    title: 'Essai gratuit',
    description: 'Testez toutes les fonctionnalités gratuitement.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparence totale',
    description: 'Aucun frais caché, prix clairs et nets.',
  },
];

export default function TarifsPage() {
  const faqSchema = generateFAQSchema({ questions: faqData });

  return (
    <>
      <StructuredData data={faqSchema} id="tarifs-faq" />
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
                Tarifs Transparents
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Tarifs{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-75 blur-sm animate-gradient" />
                <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                  transparents et flexibles
                </span>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={200}>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
              Choisissez la formule qui correspond à vos besoins. Toutes nos formules incluent un
              essai gratuit et peuvent être ajustées selon votre activité.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_70%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-gray-900">
                        {guarantee.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Cards - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[#2563EB]/5 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Choisissez votre formule
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 md:text-xl">
                Des tarifs adaptés à tous les besoins, de la petite structure aux grandes entreprises.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.name} direction="up" delay={index * 100}>
                <PricingCard plan={plan} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.04),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6">
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <HelpCircle className="h-4 w-4 text-[#2563EB]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Questions Fréquentes
              </span>
            </div>
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes sur les tarifs
            </h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="group border-2 border-transparent transition-all duration-300 hover:border-[#2563EB]/20 hover:shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-3 text-lg font-semibold text-gray-900">
                      <CheckCircle2 className="h-5 w-5 text-[#2563EB] transition-transform duration-300 group-hover:scale-110" />
                      {faq.question}
                    </h3>
                    <p className="ml-8 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
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
                Besoin d'un devis personnalisé ?
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Une solution{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-white/20 blur-sm" />
                <span className="relative">sur mesure</span>
              </span>
              {' '}pour vous
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Notre équipe peut créer une solution personnalisée adaptée à vos besoins spécifiques.
              Contactez-nous pour discuter de votre projet et obtenir un devis sur mesure.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group bg-white text-[#2563EB] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                onClick={() => trackCTAClick('Demander un devis', 'tarifs_page_cta')}
              >
                <Link href="/contact?demo=true" className="flex items-center font-bold">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
                onClick={() => trackCTAClick('Nous contacter', 'tarifs_page_cta')}
              >
                <Link href="/contact" className="font-semibold">
                  Nous contacter
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
