'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Persona } from '../../lib/personas';
import { cn } from '@/lib/utils';

interface PersonaCardProps {
  persona: Persona;
  className?: string;
}

// Mapping des gradients par persona
const getGradientForPersona = (personaId: string): string => {
  const gradientMap: Record<string, string> = {
    'agences-immobilieres': 'from-blue-500 to-cyan-500',
    'promoteurs': 'from-purple-500 to-pink-500',
    'syndics': 'from-indigo-500 to-purple-500',
    'gestionnaires': 'from-emerald-500 to-teal-500',
    'proprietaires': 'from-orange-500 to-amber-500',
  };
  return gradientMap[personaId] || 'from-[#2563EB] to-[#1D4ED8]';
};

export default function PersonaCard({ persona, className }: PersonaCardProps) {
  const gradient = getGradientForPersona(persona.id);

  return (
    <Link href={persona.slug} className={cn('block no-underline group', className)}>
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
          <div className={cn(
            "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl",
            gradient
          )}>
            <TrendingUp className="h-6 w-6" />
          </div>
          
          <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
            {persona.name}
          </h3>
          
          <p className="mb-6 flex-grow text-gray-600 leading-relaxed">
            {persona.description}
          </p>
          
          {persona.metrics && persona.metrics.length > 0 && (
            <div className="mb-6 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
              {persona.metrics.slice(0, 2).map((metric, index) => (
                <div 
                  key={index} 
                  className="text-center transition-all duration-300 group-hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={cn(
                    "text-2xl font-bold transition-all duration-200 group-hover:scale-110",
                    `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`
                  )}>
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-gray-600 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="relative z-10 pt-0">
          <div className="w-full flex items-center justify-center text-[#2563EB] transition-all duration-300 group-hover:text-[#1D4ED8] group-hover:gap-2 font-semibold">
            <span className="flex items-center">
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

