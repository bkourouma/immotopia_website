'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, Brain, Smartphone, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';

const aiFeatures = [
  'Recommandations intelligentes pour vos clients',
  'Détection automatique de documents similaires',
  'Analyse prédictive des tendances du marché',
  'Chatbot intelligent pour répondre aux questions fréquentes',
  'Optimisation automatique des descriptions d\'annonces',
];

const mobileMoneyFeatures = [
  'Paiements sécurisés via Mobile Money',
  'Suivi des transactions en temps réel',
  'Notifications automatiques de paiement',
  'Génération de reçus électroniques',
  'Comptabilité automatique intégrée',
];

const techStack = [
  { name: 'Cloud sécurisé', description: 'Hébergement sécurisé avec sauvegarde automatique' },
  { name: 'APIs ouvertes', description: 'Intégrez facilement vos outils existants' },
  { name: 'Performance', description: 'Temps de chargement optimisés pour une expérience fluide' },
  { name: 'Mobile-first', description: 'Interface responsive, optimisée pour tous les devices' },
];

export default function TechnologiesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20 text-center md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <ScrollReveal direction="fade">
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Technologies avancées
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Bénéficiez de l'IA pour automatiser vos tâches et des paiements Mobile Money pour
              faciliter les transactions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <ScrollReveal direction="fade">
            <div className="mb-12 flex items-center justify-center gap-4">
              <Brain className="h-12 w-12 text-primary" />
              <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
                Intelligence artificielle intégrée
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aiFeatures.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 50}>
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                    <p className="text-gray-700">{feature}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Money Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <ScrollReveal direction="fade">
            <div className="mb-12 flex items-center justify-center gap-4">
              <Smartphone className="h-12 w-12 text-primary" />
              <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
                Paiements Mobile Money
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {mobileMoneyFeatures.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 50}>
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                    <p className="text-gray-700">{feature}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <ScrollReveal direction="fade">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Stack technique moderne
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card>
                  <CardContent className="p-6 text-center">
                    {index === 0 && <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />}
                    {index === 1 && <Zap className="mx-auto mb-4 h-12 w-12 text-primary" />}
                    {index === 2 && <Zap className="mx-auto mb-4 h-12 w-12 text-primary" />}
                    {index === 3 && <Smartphone className="mx-auto mb-4 h-12 w-12 text-primary" />}
                    <h3 className="mb-2 font-semibold text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="up">
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Bénéficiez des dernières technologies
                </h2>
                <p className="mb-8 text-lg text-gray-600 md:text-xl">
                  Découvrez comment nos technologies avancées peuvent transformer votre activité.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact?demo=true">
                      Demander une démo gratuite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/tarifs">Voir les tarifs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
