'use client';

import Link from 'next/link';
import { Check, Sparkles, Phone, HelpCircle, ArrowRight, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PricingCard, { type PricingPlan } from '@/components/sections/PricingCard';
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema, generateSoftwareApplicationSchema } from '@/lib/structured-data';
import { trackCTAClick } from '@/lib/analytics';
import { trackClarity } from '@/lib/clarity';
import { cn } from '@/lib/utils';
import FAQItem from '@/components/faq/FAQItem';
import { SITE_URL } from '@/lib/seo';

// Plans SaaS
const plans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '',
    priceValue: '35 000',
    period: 'FCFA / mois',
    description: 'Parfait pour les petites agences et le démarrage',
    features: [
      'Centralisez vos biens et dossiers',
      'Suivez vos clients et demandes',
      'Gagnez du temps sur l\'administratif',
      'Accès cloud 24/7',
    ],
    cta: 'Commencer avec Basic',
    ctaLink: '/contact?signup=true&plan=basic',
    popular: false,
  },
  {
    name: 'Pro',
    price: '',
    priceValue: '50 000',
    period: 'FCFA / mois',
    description: 'Pour les agences en croissance',
    features: [
      'Suivi prospects plus efficace (CRM)',
      'Relances et activités mieux organisées',
      'Meilleure visibilité sur vos performances',
      'Collaboration d\'équipe facilitée',
    ],
    cta: 'Choisir Pro',
    ctaLink: '/contact?signup=true&plan=pro',
    popular: true,
  },
  {
    name: 'Elite',
    price: '',
    priceValue: '100 000',
    period: 'FCFA / mois',
    description: 'Pour les grandes agences, promoteurs et syndics',
    features: [
      'Gestion avancée (agence + gestion + syndic)',
      'Reporting plus complet',
      'Automatisation et gain de temps maximal',
      'Priorité support',
    ],
    cta: 'Passer à Elite',
    ctaLink: '/contact?signup=true&plan=elite',
    popular: false,
  },
];

// FAQ Tarifs
const faqData = [
  {
    question: 'À quoi sert le frais d\'activation ?',
    answer:
      'Le frais d\'activation de 250 000 FCFA (paiement unique) couvre la configuration de votre compte entreprise, l\'accompagnement au démarrage personnalisé, la formation de votre équipe et l\'activation de toutes les fonctionnalités. C\'est un investissement unique qui garantit une mise en place rapide et efficace.',
  },
  {
    question: 'Puis-je changer d\'offre ?',
    answer:
      'Oui, vous pouvez passer d\'une offre à une autre à tout moment. Les changements sont appliqués au prochain cycle de facturation. Si vous passez à une offre supérieure, vous bénéficiez immédiatement des nouvelles fonctionnalités.',
  },
  {
    question: 'Y a-t-il un engagement ?',
    answer:
      'Non, nos abonnements sont sans engagement. Vous pouvez résilier votre abonnement à tout moment, sans frais de résiliation. Nous croyons en la qualité de notre service et préférons que vous restiez parce que vous êtes satisfait.',
  },
  {
    question: 'Qu\'est-ce qui est inclus dans le support ?',
    answer:
      'Tous les plans incluent le support par email et chat. Le plan Elite bénéficie d\'un support prioritaire avec réponse garantie sous 2 heures. Le support couvre l\'assistance technique, l\'aide à l\'utilisation et les questions sur les fonctionnalités.',
  },
  {
    question: 'Comment fonctionne la licence perpétuelle ?',
    answer:
      'La licence perpétuelle est une solution premium pour les grands comptes. Vous effectuez un paiement unique (sur devis) et bénéficiez de la licence à vie. Après 12 mois, une maintenance annuelle obligatoire de 400 000 FCFA/an est requise pour les mises à jour et le support technique.',
  },
  {
    question: 'Paiement Mobile Money disponible ?',
    answer:
      'Oui, nous acceptons les paiements par Mobile Money (Orange Money, MTN Mobile Money, Moov Money) ainsi que les virements bancaires et les cartes bancaires. Les paiements sont sécurisés et vous recevez une facture automatique.',
  },
  {
    question: 'Et si je veux uniquement publier des annonces ?',
    answer:
      'La publication d\'annonces standard est gratuite sur notre portail. Vous pouvez publier vos biens sans abonnement SaaS. Des options payantes sont disponibles pour booster vos annonces (1 000 FCFA/jour) ou recevoir des leads par WhatsApp (200 FCFA/lead).',
  },
  {
    question: 'Les prix incluent-ils la TVA ?',
    answer:
      'Tous les prix affichés sont en FCFA TTC (Toutes Taxes Comprises). Les factures sont émises conformément à la législation en vigueur en Afrique de l\'Ouest.',
  },
  {
    question: 'Puis-je tester avant de m\'engager ?',
    answer:
      'Oui, nous proposons une période d\'essai gratuite pour tous nos plans. Contactez-nous pour demander une démo personnalisée et tester toutes les fonctionnalités avant de vous engager.',
  },
  {
    question: 'Que se passe-t-il si je ne suis pas satisfait ?',
    answer:
      'Si vous n\'êtes pas satisfait dans les 30 premiers jours, nous vous remboursons intégralement votre frais d\'activation et votre premier mois d\'abonnement. Nous sommes convaincus de la qualité de notre solution et voulons que vous soyez pleinement satisfait.',
  },
];

export default function TarifsPage() {
  const faqSchema = generateFAQSchema({ questions: faqData });

  // SoftwareApplication schema avec les offres
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'ImmoTopia',
    description:
      'Plateforme SaaS complète pour la gestion immobilière professionnelle. Gestion des biens, CRM immobilier, gestion locative, syndic de copropriété, promotion immobilière et paiements Mobile Money intégrés.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: [
      {
        '@type': 'Offer',
        name: 'Basic',
        price: '35000',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/contact?signup=true&plan=basic`,
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '50000',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/contact?signup=true&plan=pro`,
      },
      {
        '@type': 'Offer',
        name: 'Elite',
        price: '100000',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/contact?signup=true&plan=elite`,
      },
    ],
  });

  return (
    <>
      <StructuredData data={[faqSchema, softwareSchema]} id="tarifs-schemas" />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 py-20 text-center md:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.1),transparent_50%)]" />
          </div>

          <div className="container relative z-10 mx-auto max-w-4xl px-6">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Des tarifs simples, pensés pour les professionnels de l'immobilier
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
              Choisissez l'offre adaptée à votre agence ou votre activité de gestion. Centralisez vos biens, clients et locations sur une seule plateforme.
            </p>

            {/* CTA Group */}
            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group bg-[#2563EB] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1D4ED8] hover:shadow-xl"
                onClick={() => trackCTAClick('Créer mon compte', 'pricing_hero')}
              >
                <Link href="/contact?signup=true" className="flex items-center font-bold">
                  Créer mon compte
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 bg-white transition-all duration-300 hover:scale-105 hover:border-[#2563EB] hover:bg-white hover:shadow-lg"
                onClick={() => {
                  trackCTAClick('Demander une démo', 'pricing_request_demo');
                  trackClarity('cta_demander_une_demo_tarifs');
                }}
              >
                <Link href="/contact?demo=true" className="font-semibold">
                  Demander une démo
                </Link>
              </Button>
            </div>

            {/* Micro-copy réassurance */}
            <p className="text-sm text-gray-600">
              Sans jargon · Mise en place rapide · Support
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="relative overflow-hidden bg-white py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Logiciel de gestion (SaaS)
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Choisissez l'abonnement mensuel qui correspond à votre activité
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>

            {/* Frais d'activation */}
            <div className="mt-12 rounded-xl border-2 border-blue-200 bg-blue-50 p-6 text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-[#2563EB]" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Frais d'activation : 250 000 FCFA
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                Paiement unique incluant la configuration, l'accompagnement au démarrage et l'activation du compte entreprise
              </p>
            </div>
          </div>
        </section>

        {/* Licence Perpétuelle Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <Card className="border-2 border-[#2563EB] shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-center text-white">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Enterprise</span>
                </div>
                <CardTitle className="text-3xl font-bold md:text-4xl">
                  Licence Perpétuelle ImmoTopia
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <div className="mb-2 text-2xl font-bold text-gray-900">
                    Tarification : Nous appeler
                  </div>
                  <p className="text-gray-600">
                    Solution premium pour grands comptes
                  </p>
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                    <div>
                      <p className="font-semibold text-gray-900">Paiement unique</p>
                      <p className="text-sm text-gray-600">Investissement unique pour une licence à vie</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                    <div>
                      <p className="font-semibold text-gray-900">Solution premium</p>
                      <p className="text-sm text-gray-600">Toutes les fonctionnalités + personnalisations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                    <div>
                      <p className="font-semibold text-gray-900">Maintenance annuelle</p>
                      <p className="text-sm text-gray-600">
                        Obligatoire après 12 mois
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => {
                    trackCTAClick('Parler à un conseiller', 'pricing_call_us');
                    trackClarity('cta_nous_appeler_tarifs');
                  }}
                >
                  <Link href="/contact?demo=true&plan=enterprise" className="flex items-center justify-center font-bold">
                    <Phone className="mr-2 h-4 w-4" />
                    Parler à un conseiller
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Add-ons / Portail d'annonces Section */}
        <section className="relative overflow-hidden bg-white py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Options marketing — Portail d'annonces
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Boostez la visibilité de vos annonces et générez plus de leads
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="border-2 border-gray-200 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Publication standard</h3>
                      <p className="text-2xl font-extrabold text-green-600">Gratuite</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Publiez vos annonces sur notre portail sans frais supplémentaires
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Booster d'annonce</h3>
                      <p className="text-2xl font-extrabold text-blue-600">1 000 FCFA / jour</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Augmentez la visibilité de vos annonces en tête de liste
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Push WhatsApp</h3>
                      <p className="text-2xl font-extrabold text-purple-600">200 FCFA / lead</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Recevez les leads qualifiés directement sur WhatsApp
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                      <Sparkles className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Campagnes Email</h3>
                      <p className="text-sm font-semibold text-orange-600">Sur devis</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Campagnes email personnalisées pour vos prospects
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#2563EB] text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:text-white"
                onClick={() => trackCTAClick('Découvrir les options marketing', 'pricing_view_addons')}
              >
                <Link href="/contact?demo=true&interest=marketing">
                  Découvrir les options marketing
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative overflow-hidden bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white px-4 py-2 shadow-sm">
              <HelpCircle className="h-4 w-4 text-[#2563EB]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Questions Fréquentes
              </span>
            </div>
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes sur les tarifs
            </h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  item={{ question: faq.question, answer: faq.answer }}
                  index={index}
                  sectionId="tarifs-faq"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] via-indigo-600 to-[#1D4ED8] py-20 text-white md:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Prêt à simplifier votre gestion immobilière ?
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Rejoignez les professionnels qui font confiance à ImmoTopia pour gérer leur activité immobilière.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group bg-white text-[#2563EB] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                onClick={() => {
                  trackCTAClick('Créer mon compte', 'pricing_final_cta');
                  trackClarity('cta_creer_mon_compte_tarifs');
                }}
              >
                <Link href="/contact?signup=true" className="flex items-center font-bold">
                  Créer mon compte
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
                onClick={() => trackCTAClick('Demander une démo', 'pricing_request_demo')}
              >
                <Link href="/contact?demo=true" className="font-semibold">
                  Demander une démo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
