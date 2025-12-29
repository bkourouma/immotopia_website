'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';

interface FAQProps {
  className?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Comment fonctionne l\'essai gratuit ?',
    answer: 'Vous pouvez créer votre compte gratuitement et accéder à toutes les fonctionnalités pendant la période d\'essai. Aucune carte bancaire n\'est requise pour commencer. Si vous êtes satisfait, vous pourrez choisir votre plan d\'abonnement.',
  },
  {
    question: 'Puis-je changer de plan plus tard ?',
    answer: 'Oui, absolument ! Vous pouvez mettre à niveau ou rétrograder votre plan à tout moment selon vos besoins. Les changements prennent effet immédiatement, et nous ajustons la facturation de manière équitable.',
  },
  {
    question: 'Quelle est la différence entre SaaS et Licence perpétuelle ?',
    answer: 'Le modèle SaaS vous permet de payer un abonnement mensuel avec un frais d\'activation unique. C\'est flexible et sans engagement. La licence perpétuelle est un achat unique qui vous donne la propriété définitive du logiciel. Contactez-nous pour discuter de l\'option qui vous convient.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: 'Absolument. Nous utilisons des technologies de cryptage de niveau bancaire et nos serveurs sont hébergés de manière sécurisée. Vos données sont sauvegardées régulièrement et vous restez propriétaire de toutes vos informations.',
  },
  {
    question: 'Y a-t-il une limite au nombre d\'utilisateurs ?',
    answer: 'Cela dépend du plan que vous choisissez. Le plan Basic inclut un nombre défini d\'utilisateurs, tandis que les plans Pro et Elite offrent plus de flexibilité. Contactez-nous pour connaître les détails de chaque plan.',
  },
  {
    question: 'Le support est-il disponible en français ?',
    answer: 'Oui, notre équipe de support est disponible en français et répond à vos questions du lundi au vendredi. Le support est inclus dans tous nos plans, avec des temps de réponse garantis selon votre niveau d\'abonnement.',
  },
  {
    question: 'Puis-je importer mes données existantes ?',
    answer: 'Oui, vous pouvez importer vos données depuis Excel, CSV ou d\'autres formats. Notre équipe peut également vous aider dans le processus de migration pour s\'assurer que toutes vos informations sont correctement transférées.',
  },
  {
    question: 'Que se passe-t-il si j\'annule mon abonnement ?',
    answer: 'Si vous avez choisi le modèle SaaS, vous pouvez annuler à tout moment sans engagement. Vos données resteront accessibles jusqu\'à la fin de votre période de facturation. Vous pourrez également exporter toutes vos données avant l\'expiration de votre compte.',
  },
];

export default function FAQ({ className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD for FAQ schema.org
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', className)}>
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
          <div className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/4 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal direction="fade" delay={0}>
            <div className="mb-12 md:mb-16 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-white/80 backdrop-blur-sm px-5 py-2.5 shadow-lg">
                <HelpCircle className="h-4 w-4 text-[#2563EB]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  Questions fréquentes
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                Vous avez des{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-50 blur-sm" />
                  <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent">
                    questions
                  </span>
                </span>
                {' '}?
              </h2>
              <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
                Trouvez rapidement les réponses aux questions les plus courantes sur ImmoTopia
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ Items */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
            {faqItems.map((item, index) => (
              <ScrollReveal key={index} direction="fade" delay={index * 50}>
                <div
                  className={cn(
                    'border-b border-gray-200 transition-colors last:border-b-0',
                    openIndex === index && 'bg-gray-50'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50 sm:px-8"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="pr-8 text-base font-semibold text-gray-900 sm:text-lg">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300',
                        openIndex === index && 'rotate-180 text-[#2563EB]'
                      )}
                    />
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    )}
                    aria-hidden={openIndex !== index}
                  >
                    <div className="px-6 pb-5 text-base leading-relaxed text-gray-600 sm:px-8 sm:text-lg">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

