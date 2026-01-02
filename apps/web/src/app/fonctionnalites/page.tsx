'use client';

import { features } from '../../lib/features';
import SimpleFeatureCard from '../../components/sections/SimpleFeatureCard';
import { ScrollReveal } from '@monorepo/ui';
import { Clock, TrendingUp, DollarSign, Brain, ArrowRight, Smartphone, Users, Wifi, Headphones, Target, Calendar, MessageSquare, BarChart3, CheckCircle2, Share2, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackCTAClick } from '@/lib/analytics';
import { trackClarity } from '@/lib/clarity';

export default function FonctionnalitesPage() {
  // Récupérer le CRM (fonctionnalité majeure)
  const crmFeature = features.find((f) => f.id === 'crm-immobilier');

  // Grouper les fonctionnalités par usage
  const gestionFeatures = features.filter(
    (f) => f.id === 'gestion-biens' || f.id === 'gestion-locative' || f.id === 'syndic-copropriete'
  );

  const commercialFeatures = features.filter(
    (f) => f.id === 'promotion-immobiliere'
  );

  const encaissementFeatures = features.filter(
    (f) => f.id === 'paiements-mobile-money' || f.id === 'automatisation-ia'
  );

  // Capacités détaillées du CRM
  const crmCapabilities = [
    {
      icon: Target,
      title: 'Pipeline de vente intelligent',
      description: 'Suivez chaque prospect de la première prise de contact jusqu\'à la signature, avec des étapes personnalisables',
    },
    {
      icon: Calendar,
      title: 'Gestion des rendez-vous',
      description: 'Planifiez et suivez tous vos rendez-vous avec rappels automatiques et synchronisation calendrier',
    },
    {
      icon: MessageSquare,
      title: 'Communication automatisée',
      description: 'Relances automatiques par email et SMS, templates personnalisables, historique complet des échanges',
    },
    {
      icon: BarChart3,
      title: 'Rapports et analyses',
      description: 'Tableaux de bord en temps réel, taux de conversion, performance commerciale, prévisions de ventes',
    },
    {
      icon: Users,
      title: 'Base de contacts centralisée',
      description: 'Tous vos contacts, prospects et clients dans une seule base, avec historique complet et notes',
    },
    {
      icon: CheckCircle2,
      title: 'Aucun prospect oublié',
      description: 'Alertes automatiques pour les relances, suivi des opportunités, suggestions d\'actions prioritaires',
    },
  ];

  // Bénéfices concrets
  const benefits = [
    {
      icon: Clock,
      title: 'Moins d\'administratif',
      description: 'Automatisez les tâches répétitives et concentrez-vous sur vos ventes',
    },
    {
      icon: TrendingUp,
      title: 'Meilleur suivi commercial',
      description: 'Aucun prospect oublié, chaque opportunité est suivie',
    },
    {
      icon: DollarSign,
      title: 'Paiements sécurisés et tracés',
      description: 'Loyers et frais encaissés en toute transparence',
    },
    {
      icon: Brain,
      title: 'Décisions plus rapides',
      description: 'Des données claires pour piloter votre activité',
    },
  ];

  // Points différenciants marché africain
  const africanMarketPoints = [
    {
      icon: Smartphone,
      title: 'Compatible Mobile Money',
      description: 'Acceptez les paiements via Mobile Money directement depuis la plateforme',
    },
    {
      icon: Users,
      title: 'Adapté aux petites et grandes agences',
      description: 'Une solution qui s\'adapte à votre taille et à votre croissance',
    },
    {
      icon: Wifi,
      title: 'Connexion possible même avec internet instable',
      description: 'Fonctionne en mode dégradé pour rester opérationnel',
    },
    {
      icon: Headphones,
      title: 'Support humain et local',
      description: 'Une équipe à votre écoute, disponible dans votre fuseau horaire',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Simplified */}
      <section className="bg-gradient-to-br from-[#F0F7FF] to-[#E8F2FF] py-16 text-center md:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <ScrollReveal direction="fade" delay={0}>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Pilotez toute votre activité immobilière depuis une seule plateforme
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
              ImmoTopia centralise vos biens, clients, locations, paiements et performances — sans Excel, sans dispersion.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#2563EB] text-white shadow-lg transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-xl"
                onClick={() => {
                  trackCTAClick('Voir la démo', 'fonctionnalites_hero_cta');
                  trackClarity('cta_demander_une_demo_fonctionnalites');
                }}
              >
                <Link href="/contact?demo=true" className="flex items-center font-semibold">
                  Voir la démo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#2563EB] text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:text-white"
                onClick={() => {
                  trackCTAClick('Créer mon compte', 'fonctionnalites_hero_cta');
                  trackClarity('cta_creer_mon_compte_fonctionnalites');
                }}
              >
                <Link href="/contact?signup=true">Créer mon compte</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ce que vous gagnez concrètement */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-md">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section CRM - Mise en avant spéciale */}
      {crmFeature && (
        <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-6">
            <ScrollReveal direction="up" delay={0}>
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm">
                  <Target className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Fonctionnalité phare
                  </span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  CRM immobilier : votre copilote commercial
                </h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
                  Un CRM puissant et complet, spécialement conçu pour l'immobilier. Transformez vos prospects en clients avec un suivi intelligent et des automatisations qui font la différence.
                </p>
              </div>
            </ScrollReveal>

            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {crmCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <ScrollReveal key={index} direction="up" delay={index * 100}>
                    <div className="rounded-xl border border-emerald-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {capability.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {capability.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal direction="up" delay={600}>
              <div className="rounded-2xl border-2 border-emerald-200 bg-white p-8 shadow-lg md:p-12">
                <div className="mb-6 text-center">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                    {crmFeature.title}
                  </h3>
                  <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
                    {crmFeature.detailedDescription || crmFeature.description}
                  </p>
                </div>

                {crmFeature.benefits && crmFeature.benefits.length > 0 && (
                  <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {crmFeature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                        <span className="text-sm text-gray-700 md:text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Intégration Portail d'annonces */}
                <ScrollReveal direction="up" delay={700}>
                  <div className="mb-8 rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-sm">
                        <Share2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Publication d'annonces en un clic</h4>
                        <p className="text-sm text-gray-600">Intégration native avec le portail d'annonces</p>
                      </div>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-700">
                      Ajoutez vos biens directement depuis votre CRM sur notre plateforme d'annonces en un seul clic. 
                      Publiez automatiquement sur plusieurs sites d'annonces, réseaux sociaux et votre site web ImmoTopia.
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-700">
                        <Zap className="h-3.5 w-3.5 text-purple-600" />
                        Publication en 1 clic
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
                        Multi-plateformes
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-700">
                        <BarChart3 className="h-3.5 w-3.5 text-purple-600" />
                        Suivi des performances
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-purple-300 text-purple-700 hover:bg-purple-100"
                        onClick={() => trackCTAClick('Découvrir le portail annonces', 'fonctionnalites_crm_annonces')}
                      >
                        <Link href="/la-solution/portail-annonces" className="flex items-center text-sm">
                          Découvrir le portail d'annonces
                          <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl"
                    onClick={() => trackCTAClick('Découvrir le CRM', 'fonctionnalites_crm_section')}
                  >
                    <Link href={crmFeature.slug} className="flex items-center font-semibold">
                      Découvrir le CRM en détail
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-emerald-600 text-emerald-600 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
                    onClick={() => trackCTAClick('Voir la démo CRM', 'fonctionnalites_crm_section')}
                  >
                    <Link href="/contact?demo=true&feature=crm">Voir la démo CRM</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Section 1: Gérer votre parc immobilier */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                🔹 Gérer votre parc immobilier
              </h2>
              <p className="mb-2 text-lg text-gray-700">
                <strong>Objectif :</strong> centralisation et contrôle
              </p>
              <p className="mb-6 text-base italic text-gray-600">
                Tous vos biens et dossiers accessibles en un seul endroit
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {gestionFeatures.map((feature, index) => (
              <ScrollReveal key={feature.id} direction="up" delay={index * 50}>
                <SimpleFeatureCard feature={feature} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={300}>
            <div className="mt-6 text-center">
              <Button
                asChild
                variant="outline"
                className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                onClick={() => trackCTAClick('Voir les détails - Gestion', 'fonctionnalites_section_cta')}
              >
                <Link href="/fonctionnalites#gestion">Voir les détails</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Développer vos ventes et locations */}
      {commercialFeatures.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-6">
            <ScrollReveal direction="up" delay={0}>
              <div className="mb-8">
                <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                  🔹 Développer vos ventes et locations
                </h2>
                <p className="mb-2 text-lg text-gray-700">
                  <strong>Objectif :</strong> transformation commerciale
                </p>
                <p className="mb-6 text-base italic text-gray-600">
                  Complétez votre CRM avec des outils de promotion et de commercialisation
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {commercialFeatures.map((feature, index) => (
                <ScrollReveal key={feature.id} direction="up" delay={index * 50}>
                  <SimpleFeatureCard feature={feature} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={300}>
              <div className="mt-6 text-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                  onClick={() => trackCTAClick('Voir promotion immobilière', 'fonctionnalites_section_cta')}
                >
                  <Link href="/fonctionnalites/promotion-immobiliere">Voir les détails</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Section 3: Encaisser, automatiser, sécuriser */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                🔹 Encaisser, automatiser, sécuriser
              </h2>
              <p className="mb-2 text-lg text-gray-700">
                <strong>Objectif :</strong> fiabilité et gain de temps
              </p>
              <p className="mb-6 text-base italic text-gray-600">
                Sécurisez vos flux financiers et automatisez ce qui vous fait perdre du temps
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {encaissementFeatures.map((feature, index) => (
              <ScrollReveal key={feature.id} direction="up" delay={index * 50}>
                <SimpleFeatureCard feature={feature} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={300}>
            <div className="mt-6 text-center">
              <Button
                asChild
                variant="outline"
                className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                onClick={() => trackCTAClick('Voir comment ça marche', 'fonctionnalites_section_cta')}
              >
                <Link href="/fonctionnalites/paiements-mobile-money">Voir comment ça marche</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pensé pour le marché africain */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Pensé pour les réalités du marché africain
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {africanMarketPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-md">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-gray-900">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section : Toutes les fonctionnalités - Liste complète avec liens */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Toutes les fonctionnalités
              </h2>
              <p className="mb-6 text-base text-gray-600 md:text-lg">
                Découvrez en détail chacune de nos fonctionnalités dédiées aux professionnels de l'immobilier
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.id} direction="up" delay={index * 50}>
                <Link
                  href={feature.slug}
                  className="group block no-underline"
                  onClick={() => {
                    trackCTAClick(`Voir ${feature.name}`, 'fonctionnalites_all_features_list');
                  }}
                >
                  <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-md">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB]/20">
                      <span className="text-lg font-semibold">{feature.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
                        {feature.name}
                      </h3>
                      <p className="mb-2 text-sm leading-relaxed text-gray-600">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-xs font-medium text-[#2563EB] transition-all duration-300 group-hover:gap-1">
                        Découvrir en détail
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] py-16 text-white md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="fade" delay={0}>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Passez à une gestion immobilière plus simple et plus rentable
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Moins d'administratif, plus de ventes. Une seule plateforme, toute votre activité.
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
                  trackCTAClick('Demander une démo', 'fonctionnalites_final_cta');
                  trackClarity('cta_demander_une_demo_fonctionnalites_final');
                }}
              >
                <Link href="/contact?demo=true" className="flex items-center font-bold">
                  Demander une démo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:border-white/50 hover:bg-white/20"
                onClick={() => {
                  trackCTAClick('Créer mon compte', 'fonctionnalites_final_cta');
                  trackClarity('cta_creer_mon_compte_fonctionnalites_final');
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
  );
}
