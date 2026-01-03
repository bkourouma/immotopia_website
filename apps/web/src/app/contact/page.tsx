'use client';

import { Mail, Phone, MessageSquare, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import DemoRequestForm from '../../components/forms/DemoRequestForm';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'agent@immo-annonces.fr',
    link: 'mailto:agent@immo-annonces.fr',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+225 01 01 51 01 36',
    link: 'tel:+2250101510136',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: MessageSquare,
    label: 'Support',
    value: 'Réponse sous 24h',
    link: null,
    gradient: 'from-purple-500 to-pink-500',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Réponse rapide',
    description: 'Nous vous répondons sous 24 heures.',
  },
  {
    icon: CheckCircle2,
    title: 'Accompagnement personnalisé',
    description: 'Un expert dédié pour vous guider.',
  },
];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const isDemo = searchParams?.get('demo') === 'true' || searchParams?.get('signup') === 'true';
  const persona = searchParams?.get('persona') || undefined;

  return (
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
                {isDemo ? 'Démonstration Gratuite' : 'Contactez-nous'}
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={100}>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              {isDemo ? (
                <>
                  Demandez une{' '}
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-75 blur-sm animate-gradient" />
                    <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                      démonstration
                    </span>
                  </span>
                </>
              ) : (
                <>
                  Contactez{' '}
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-75 blur-sm animate-gradient" />
                    <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                      -nous
                    </span>
                  </span>
                </>
              )}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={200}>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
              {isDemo
                ? 'Découvrez ImmoTopia en action avec une démonstration personnalisée adaptée à vos besoins.'
                : 'Nous sommes là pour répondre à vos questions et vous aider à trouver la solution adaptée à vos besoins.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_70%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <ScrollReveal direction="up" delay={0}>
                <div className="mb-8">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Informations de contact
                  </h2>
                  <p className="text-lg text-gray-600">
                    Plusieurs façons de nous joindre. Choisissez celle qui vous convient le mieux.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <Card className="group border-2 border-transparent transition-all duration-300 hover:border-[#2563EB]/20 hover:shadow-xl hover:-translate-y-1">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                          info.gradient
                        )}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-grow">
                          <div className="mb-1 text-sm font-semibold text-gray-500">
                            {info.label}
                          </div>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-lg font-semibold text-gray-900 transition-colors duration-200 hover:text-[#2563EB]"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-lg font-semibold text-gray-900">
                              {info.value}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );

                  return (
                    <ScrollReveal key={index} direction="up" delay={index * 100}>
                      {content}
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <ScrollReveal key={index} direction="up" delay={index * 100 + 300}>
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div>
              <ScrollReveal direction="up" delay={200}>
                <Card className="border-2 border-gray-200 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                      {isDemo ? 'Demander une démonstration' : 'Formulaire de contact'}
                    </h2>
                    <DemoRequestForm defaultPersona={persona} />
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
