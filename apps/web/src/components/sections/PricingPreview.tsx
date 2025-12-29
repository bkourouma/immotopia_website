'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';
import { trackClarity } from '@/lib/clarity';

interface PricingPreviewProps {
  className?: string;
}

export default function PricingPreview({ className }: PricingPreviewProps) {
  return (
    <section className={cn('relative overflow-hidden py-20 md:py-28 lg:py-36', className)}>
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.08),transparent_50%)]" />
        <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[#2563EB]/6 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/4 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="fade" delay={0}>
          <div className="mb-12 md:mb-16 text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/90 backdrop-blur-md px-5 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#2563EB]/50 hover:shadow-xl">
              <div className="flex h-2 w-2 animate-pulse rounded-full bg-[#2563EB]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Tarifs Transparents
              </span>
            </div>
            
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Tarifs{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-[length:200%_100%] bg-clip-text opacity-60 blur-sm animate-pulse" />
                <span className="relative bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] bg-[length:200%_100%] bg-clip-text text-transparent">
                  transparents
                </span>
              </span>
              {' '}et{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#3B82F6] bg-[length:200%_100%] bg-clip-text opacity-60 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="relative bg-gradient-to-r from-[#3B82F6] via-[#1D4ED8] to-[#3B82F6] bg-[length:200%_100%] bg-clip-text text-transparent">
                  flexibles
                </span>
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:text-2xl font-medium">
              Choisissez le modèle qui correspond à vos besoins :{' '}
              <span className="font-semibold text-[#2563EB]">SaaS</span> ou{' '}
              <span className="font-semibold text-[#2563EB]">Licence perpétuelle</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Options */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* SaaS Model */}
          <ScrollReveal direction="up" delay={100} className="h-full">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 border-[#2563EB] bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2563EB]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-4 py-1.5 shadow-md">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <span className="text-sm font-bold text-white">Modèle SaaS</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
                    Logiciel de gestion immobilière
                  </h3>
                  <p className="text-base text-gray-600">Abonnement mensuel flexible sans engagement</p>
                </div>

                {/* Activation Fee */}
                <div className="mb-6 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#1D4ED8]/5 p-6 border border-[#2563EB]/20">
                  <div className="mb-2 text-sm font-medium text-gray-600">Frais d'activation</div>
                  <div className="mb-1 text-4xl font-extrabold bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
                    250 000 FCFA
                  </div>
                  <div className="text-sm text-gray-600">Paiement unique à l'inscription</div>
                </div>

                {/* Pricing Tiers */}
                <div className="mb-6 space-y-3">
                  <div className="rounded-lg bg-gray-50 p-4 transition-all duration-200 hover:bg-[#2563EB]/5 hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">Basic</span>
                      <span className="text-xl font-bold text-gray-900">35 000 FCFA<span className="text-sm font-normal text-gray-500">/mois</span></span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 transition-all duration-200 hover:bg-[#2563EB]/5 hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">Pro</span>
                      <span className="text-xl font-bold text-gray-900">50 000 FCFA<span className="text-sm font-normal text-gray-500">/mois</span></span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 transition-all duration-200 hover:bg-[#2563EB]/5 hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">Elite</span>
                      <span className="text-xl font-bold text-gray-900">100 000 FCFA<span className="text-sm font-normal text-gray-500">/mois</span></span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow space-y-3">
                  <div className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Sans engagement</span>
                  </div>
                  <div className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Support inclus</span>
                  </div>
                  <div className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Solution évolutive</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
                  onClick={() => trackCTAClick('Commencer (SaaS)', 'pricing_preview')}
                >
                  <Link href="/contact?signup=true" className="flex items-center justify-center">
                    Créer mon compte
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Perpetual License */}
          <ScrollReveal direction="up" delay={200} className="h-full">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-2xl hover:-translate-y-1">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2563EB]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 shadow-sm">
                    <div className="h-2 w-2 rounded-full bg-gray-600" />
                    <span className="text-sm font-bold text-gray-700">Licence Perpétuelle</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
                    Propriété définitive
                  </h3>
                  <p className="text-base text-gray-600">Un paiement unique, vous possédez le logiciel</p>
                </div>

                {/* Price */}
                <div className="mb-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-6 border border-gray-200">
                  <div className="mb-2 text-sm font-medium text-gray-600">Licence perpétuelle</div>
                  <div className="mb-1 text-4xl font-extrabold text-gray-900">Sur mesure</div>
                  <div className="text-sm text-gray-600">Tarification personnalisée</div>
                </div>

                {/* Spacer to match SaaS card height */}
                <div className="mb-6 space-y-3">
                  <div className="rounded-lg bg-gradient-to-r from-gray-50 to-blue-50/30 p-4 border border-gray-100">
                    <p className="text-sm text-gray-700 text-center font-medium">
                      💼 Adapté à vos besoins spécifiques
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-r from-gray-50 to-blue-50/30 p-4 border border-gray-100">
                    <p className="text-sm text-gray-700 text-center font-medium">
                      🎯 Installation sur site ou cloud
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-r from-gray-50 to-blue-50/30 p-4 border border-gray-100">
                    <p className="text-sm text-gray-700 text-center font-medium">
                      ⚡ Formation et accompagnement
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow space-y-3">
                  <div className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Possession définitive</span>
                  </div>
                  <div className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Support et mises à jour inclus (12 mois)</span>
                  </div>
                  <div className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Contrôle total</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-[#2563EB] font-semibold text-[#2563EB] hover:bg-[#2563EB] hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => {
                    trackCTAClick('Contacter (Licence)', 'pricing_preview');
                    trackClarity('cta_nous_appeler_pricing_preview');
                  }}
                >
                  <Link href="/contact" className="flex items-center justify-center">
                    Nous appeler
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA to full pricing page */}
        <ScrollReveal direction="fade" delay={300}>
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 border-[#2563EB]/30 font-semibold hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
              onClick={() => trackCTAClick('Voir tous les tarifs', 'pricing_preview')}
            >
              <Link href="/tarifs" className="flex items-center justify-center">
                Voir tous les tarifs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

