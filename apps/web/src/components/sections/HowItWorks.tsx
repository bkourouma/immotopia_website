'use client';

import React from 'react';
import { UserPlus, FolderOpen, Rocket } from 'lucide-react';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';

interface HowItWorksProps {
  className?: string;
}

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    icon: <UserPlus className="h-8 w-8" />,
    title: 'Créez votre compte',
    description: 'Inscription simple et rapide en quelques minutes. Configuration immédiate sans engagement.',
  },
  {
    number: '2',
    icon: <FolderOpen className="h-8 w-8" />,
    title: 'Importez vos biens et contacts',
    description: 'Ajoutez facilement vos biens immobiliers et importez vos contacts existants depuis Excel ou CSV.',
  },
  {
    number: '3',
    icon: <Rocket className="h-8 w-8" />,
    title: 'Gérez et publiez',
    description: 'Publiez vos annonces, suivez vos dossiers, gérez vos locations et optimisez votre activité.',
  },
];

export default function HowItWorks({ className }: HowItWorksProps) {
  return (
    <section className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', className)}>
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50" />
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="fade" delay={0}>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Comment ça marche{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-50 blur-sm" />
                <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent">
                  en 3 étapes
                </span>
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg md:text-xl">
              Démarrez en quelques minutes et transformez votre gestion immobilière dès aujourd'hui
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150}>
              <div className="group relative">
                <div className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-xl hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#2563EB]/20 blur-xl" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-3xl font-extrabold">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-base leading-relaxed text-gray-600">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


