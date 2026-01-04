'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, FolderKanban, Target, Rocket, Puzzle, Handshake } from 'lucide-react';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';

interface ProblemSolutionProps {
  className?: string;
}

interface ProblemCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SolutionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const problems: ProblemCard[] = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: '⏱️ Trop de temps perdu',
    description: 'Tâches répétitives, paperasse et saisies manuelles qui ralentissent votre activité.',
  },
  {
    icon: <FolderKanban className="h-6 w-6" />,
    title: '📂 Outils dispersés',
    description: 'Excel, WhatsApp, emails, documents papier… vos informations sont éparpillées.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: '🎯 Prospects et copropriétaires mal suivis',
    description: 'Relances oubliées, opportunités manquées, conversions difficiles.',
  },
];

const solutions: SolutionCard[] = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: '🚀 Plus de temps pour votre cœur de métier',
    description: 'Les processus sont automatisés pour vous concentrer sur vos clients et copropriétaires.',
  },
  {
    icon: <Puzzle className="h-6 w-6" />,
    title: '🧩 Une seule plateforme',
    description: 'Biens, clients, locations, copropriétés et annonces centralisés au même endroit.',
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: '🤝 Un CRM qui travaille pour vous',
    description: 'Suivi intelligent des clients et copropriétaires, relances automatiques et meilleures conversions.',
  },
];

export default function ProblemSolution({ className }: ProblemSolutionProps) {
  return (
    <section className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', className)}>
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
        <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[#2563EB]/3 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="fade" delay={0}>
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Assez des complications. Passez à une gestion immobilière fluide.
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg md:text-xl">
              Les difficultés que rencontrent toutes les agences immobilières et syndics — et comment{' '}
              <Link href="/pourquoi-immotopia" className="font-semibold text-[#2563EB] hover:underline">
                ImmoTopia
              </Link>{' '}
              les élimine. Découvrez comment notre{' '}
              <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                solution de gestion locative en Côte d'Ivoire
              </Link>{' '}
              transforme votre activité.
            </p>
          </div>
        </ScrollReveal>

        {/* Ligne 1 - Problèmes */}
        <div className="mb-12 md:mb-16">
          <ScrollReveal direction="fade" delay={0}>
            <h3 className="mb-8 text-center text-lg font-semibold text-gray-700 md:text-xl">
              Ce qui vous freine aujourd'hui
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="group relative">
                  <div className="relative rounded-xl border border-gray-200/50 bg-gray-50/40 p-6 backdrop-blur-sm transition-all duration-300 hover:opacity-75 hover:border-gray-300/50">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50/70 text-red-500/70 transition-transform duration-300">
                        {problem.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-700">{problem.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600/90">{problem.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Ligne 2 - Résultats */}
        <div>
          <ScrollReveal direction="fade" delay={300}>
            <h3 className="mb-8 text-center text-lg font-semibold text-gray-700 md:text-xl">
              Ce que vous gagnez avec ImmoTopia
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={400 + index * 100}>
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-xl border border-[#2563EB]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563EB]/40 hover:shadow-2xl hover:shadow-[#2563EB]/10">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 via-[#2563EB]/0 to-[#2563EB]/0 transition-all duration-300 group-hover:from-[#2563EB]/2 group-hover:via-[#2563EB]/1 group-hover:to-[#2563EB]/2" />
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#2563EB]/40">
                          {solution.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{solution.title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700">
                        {solution.description}
                        {index === 1 && (
                          <>
                            {' '}
                            <Link
                              href="/paiement-loyer-charges-mobile-money-cote-divoire"
                              className="font-semibold text-[#2563EB] hover:underline"
                            >
                              Paiement par Mobile Money
                            </Link>
                            {' '}intégré.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        {/* SEO Links Section */}
        <ScrollReveal direction="fade" delay={700}>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Découvrez nos solutions spécialisées :{' '}
              <Link
                href="/gestion-locative-cote-divoire"
                className="font-semibold text-[#2563EB] hover:underline"
              >
                gestion locative en Côte d'Ivoire
              </Link>
              {' '}et{' '}
              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="font-semibold text-[#2563EB] hover:underline"
              >
                paiement de loyers par Mobile Money
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

