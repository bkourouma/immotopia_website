'use client';

import React from 'react';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';

interface StatsSectionProps {
  className?: string;
}

interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const stats: Stat[] = [
  {
    value: '500+',
    label: 'Professionnels actifs',
  },
  {
    value: '10K+',
    label: 'Biens gérés',
  },
  {
    value: '99.9%',
    label: 'Disponibilité',
  },
  {
    value: '24/7',
    label: 'Support disponible',
  },
];

export default function StatsSection({ className }: StatsSectionProps) {
  return (
    <section className={cn('relative overflow-hidden py-16 md:py-24 bg-gradient-to-r from-primary to-indigo-600', className)}>
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="group text-center">
                <div className="mb-2 text-3xl font-extrabold leading-none text-white transition-all duration-300 group-hover:scale-110 md:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/90 md:text-base">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

