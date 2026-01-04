'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';

const features = [
  'Gestion centralisée de tous vos biens immobiliers',
  'CRM intégré pour suivre vos clients et prospects',
  'Gestion des contrats de location et de vente',
  'Suivi des paiements et des loyers',
  'Génération automatique de documents (baux, quittances)',
  'Tableaux de bord et rapports personnalisables',
  'Calendrier de visites et rendez-vous',
  'Gestion multi-utilisateurs avec permissions',
  'Synchronisation cloud : accès depuis partout',
  'Support client réactif et formation incluse',
];

export default function SaasGestionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20 text-center md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <ScrollReveal direction="fade">
            <div className="mb-6">
              <Link href="/la-solution" className="text-sm text-[#2563EB] hover:underline">
                ← Retour à notre solution complète
              </Link>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
              SaaS de gestion immobilière
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Une plateforme SaaS complète pour centraliser toute votre{' '}
              <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                gestion locative en Côte d'Ivoire
              </Link>
              {' '}: biens, clients, contrats, paiements. Découvrez{' '}
              <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
                toutes les fonctionnalités
              </Link>
              {' '}disponibles.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <ScrollReveal direction="fade">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Toutes les fonctionnalités dont vous avez besoin
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
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

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ScrollReveal direction="up" delay={0}>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-4xl font-extrabold text-primary">+40%</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Productivité</h3>
                  <p className="text-gray-600">
                    Automatisez vos tâches répétitives et gagnez du temps précieux.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-4xl font-extrabold text-primary">100%</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Centralisé</h3>
                  <p className="text-gray-600">
                    Tous vos outils en un seul endroit, plus besoin de multiples logiciels.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-4xl font-extrabold text-primary">24/7</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Accessible</h3>
                  <p className="text-gray-600">
                    Accédez à vos données depuis n'importe où, à tout moment.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="up">
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Prêt à transformer votre gestion immobilière ?
                </h2>
                <p className="mb-8 text-lg text-gray-600 md:text-xl">
                  Découvrez comment ImmoTopia peut simplifier et optimiser votre activité. Particulièrement adapté aux{' '}
                  <Link href="/pour-qui/gestionnaires-locatifs" className="font-semibold text-[#2563EB] hover:underline">
                    gestionnaires locatifs
                  </Link>
                  {' '}qui souhaitent{' '}
                  <Link href="/guides/structurer-portefeuille-immobilier-rentable" className="font-semibold text-[#2563EB] hover:underline">
                    structurer leur portefeuille immobilier rentable
                  </Link>
                  .
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
