'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Feature } from '../../lib/features';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  feature: Feature;
  showDescription?: boolean;
  className?: string;
}

// Mapping des gradients par catégorie de fonctionnalité
const getGradientForFeature = (featureId: string): string => {
  const gradientMap: Record<string, string> = {
    'gestion-biens': 'from-blue-500 to-cyan-500',
    'gestion-locative': 'from-indigo-500 to-purple-500',
    'syndic-copropriete': 'from-purple-500 to-pink-500',
    'crm-immobilier': 'from-emerald-500 to-teal-500',
    'promotion-immobiliere': 'from-orange-500 to-amber-500',
    'paiements-mobile-money': 'from-green-500 to-emerald-500',
    'automatisation-ia': 'from-violet-500 to-purple-500',
  };
  return gradientMap[featureId] || 'from-[#2563EB] to-[#1D4ED8]';
};

export default function FeatureCard({
  feature,
  showDescription = true,
  className,
}: FeatureCardProps) {
  const gradient = getGradientForFeature(feature.id);

  return (
    <Link href={feature.slug} className={cn('block no-underline group', className)}>
      <Card className="group relative h-full overflow-hidden border-2 border-transparent bg-white transition-all duration-500 hover:border-[#2563EB]/20 hover:shadow-2xl hover:-translate-y-2">
        {/* Gradient background on hover */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5",
          `bg-gradient-to-br ${gradient}`
        )} />
        
        {/* Animated border gradient on hover */}
        <div className={cn(
          "absolute -inset-0.5 rounded-lg opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20",
          `bg-gradient-to-r ${gradient}`
        )} />
        
        <CardContent className="relative z-10 flex h-full flex-col p-6">
          {/* Icon with animated background */}
          {feature.icon && (
            <div className={cn(
              "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl",
              gradient
            )}>
              <span className="text-2xl">{feature.icon}</span>
            </div>
          )}
          
          <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
            {feature.name}
          </h3>
          
          {showDescription && (
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              {feature.description}
            </p>
          )}
          
          {feature.benefits && feature.benefits.length > 0 && (
            <ul className="mb-4 flex-grow space-y-2">
              {feature.benefits.slice(0, 3).map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start text-sm text-gray-600 transition-all duration-200 group-hover:translate-x-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#2563EB] transition-transform duration-200 group-hover:scale-110" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="mt-auto flex items-center text-sm font-semibold text-[#2563EB] transition-all duration-300 group-hover:text-[#1D4ED8] group-hover:gap-2">
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
