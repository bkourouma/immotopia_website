'use client';

import React from 'react';
import { ScrollReveal } from '@monorepo/ui';
import { cn } from '@/lib/utils';

interface HeroStatsSectionProps {
  className?: string;
}

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: '+40%',
    label: 'de productivité',
  },
  {
    value: '-60%',
    label: 'de temps administratif',
  },
  {
    value: '100%',
    label: 'centralisé',
  },
];

export default function HeroStatsSection({ className }: HeroStatsSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-12 md:py-16 lg:py-20',
        'bg-gradient-to-br from-white via-gray-50 to-blue-50',
        className
      )}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.05),transparent_50%)]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="group text-center transition-all duration-300 hover:scale-110">
                <div className="mb-3 text-3xl font-extrabold leading-none text-[#2563EB] transition-all duration-300 group-hover:scale-110 sm:text-4xl md:text-5xl lg:text-6xl">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 sm:text-sm md:text-base">
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

