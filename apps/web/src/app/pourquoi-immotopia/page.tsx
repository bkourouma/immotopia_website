'use client';

import { CheckCircle, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import { Testimonials } from '../../components/sections';

const advantages = [
  {
    title: 'Solution tout-en-un',
    description:
      'Tous les outils nécessaires sur une seule plateforme : pas besoin de multiplier les logiciels.',
  },
  {
    title: 'Automatisation IA',
    description:
      'L\'intelligence artificielle au service de votre productivité : automatisation des tâches répétitives.',
  },
  {
    title: 'Mobile Money intégré',
    description:
      'Acceptez les paiements directement depuis la plateforme pour faciliter les transactions.',
  },
  {
    title: 'Évolutif et flexible',
    description:
      'Adapté à tous les profils : des petites agences aux grandes structures immobilières.',
  },
  {
    title: 'Support réactif',
    description:
      'Une équipe à votre écoute pour vous accompagner dans votre utilisation de la plateforme.',
  },
  {
    title: 'Mises à jour régulières',
    description:
      'La plateforme évolue en permanence avec de nouvelles fonctionnalités et améliorations.',
  },
];

const metrics = [
  { value: '+40%', label: 'de productivité' },
  { value: '-60%', label: 'de temps administratif' },
  { value: '100%', label: 'centralisé' },
];

const withoutImmoTopia = [
  'Multiples outils non connectés',
  'Tâches administratives chronophages',
  'Manque de visibilité globale',
  'Communication dispersée',
  'Erreurs manuelles fréquentes',
];

const withImmoTopia = [
  'Plateforme unique centralisée',
  'Automatisation des tâches répétitives',
  'Vue d\'ensemble en temps réel',
  'Communication unifiée',
  'Réduction drastique des erreurs',
];

export default function PourquoiImmoTopiaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20 text-center md:py-32">
        <div className="container mx-auto max-w-[1200px] px-6">
          <ScrollReveal direction="fade">
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Pourquoi choisir{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                ImmoTopia
              </span>{' '}
              ?
            </h1>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-gray-600 md:text-xl">
              ImmoTopia se distingue par sa complétude, son innovation et son approche centrée sur
              les besoins réels des professionnels de l'immobilier.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-extrabold text-primary md:text-5xl">
                    {metric.value}
                  </div>
                  <div className="text-base text-gray-600 md:text-lg">{metric.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto max-w-[1200px] px-6">
          <ScrollReveal direction="fade">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Nos avantages différenciants
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 50}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto max-w-[1200px] px-6">
          <ScrollReveal direction="fade">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Avant vs Après ImmoTopia
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Sans ImmoTopia */}
            <ScrollReveal direction="up" delay={0}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Sans ImmoTopia</h3>
                  <ul className="space-y-4">
                    {withoutImmoTopia.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Avec ImmoTopia */}
            <ScrollReveal direction="up" delay={100}>
              <Card className="h-full border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Avec ImmoTopia</h3>
                  <ul className="space-y-4">
                    {withImmoTopia.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Preuves sociales */}
      <Testimonials className="bg-gray-50" />
    </div>
  );
}
