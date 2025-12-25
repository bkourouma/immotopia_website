'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface PricingPlan {
  name: string;
  price: string;
  priceValue: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink?: string;
  popular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

// Mapping des gradients par plan
const getGradientForPlan = (planName: string): string => {
  const gradientMap: Record<string, string> = {
    'Starter': 'from-blue-500 to-cyan-500',
    'Professional': 'from-purple-500 to-pink-500',
    'Enterprise': 'from-orange-500 to-amber-500',
  };
  return gradientMap[planName] || 'from-[#2563EB] to-[#1D4ED8]';
};

export default function PricingCard({ plan, className }: PricingCardProps) {
  const gradient = getGradientForPlan(plan.name);

  return (
    <div className={cn('relative', className)}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
          <div className={cn(
            "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase text-white shadow-lg transition-all duration-300",
            `bg-gradient-to-r ${gradient}`
          )}>
            <Sparkles className="h-3 w-3" />
            Le plus populaire
          </div>
        </div>
      )}

      <Card
        className={cn(
          'group relative flex h-full flex-col border-2 border-transparent bg-white transition-all duration-500 hover:border-[#2563EB]/20 hover:shadow-2xl hover:-translate-y-2',
          plan.popular && 'border-2 border-[#2563EB] shadow-xl'
        )}
      >
        {/* Gradient background on hover */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5",
          `bg-gradient-to-br ${gradient}`
        )} />
        
        {/* Animated border gradient on hover */}
        {!plan.popular && (
          <div className={cn(
            "absolute -inset-0.5 rounded-lg opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20",
            `bg-gradient-to-r ${gradient}`
          )} />
        )}

        <CardContent className={cn(
          "relative z-10 flex flex-grow flex-col",
          plan.popular ? "p-6 pt-8" : "p-6"
        )}>
          {/* Header */}
          <div className="mb-6 text-center">
            <div className={cn(
              "mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl",
              `bg-gradient-to-br ${gradient}`
            )}>
              <span className="text-3xl font-extrabold">{plan.name.charAt(0)}</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
              {plan.name}
            </h3>
            <p className="text-sm text-gray-600">{plan.description}</p>
          </div>

        {/* Price Section */}
        <div className="mb-6 border-b border-gray-200 pb-6 text-center">
          <div className="mb-2 text-sm font-medium text-gray-500">{plan.price}</div>
          <div className={cn(
            "mb-1 text-5xl font-extrabold transition-all duration-300 group-hover:scale-110",
            `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`
          )}>
            {plan.priceValue}
          </div>
          {plan.period && <div className="text-base text-gray-500">{plan.period}</div>}
        </div>

        {/* Features */}
        <ul className="mb-6 flex-grow space-y-3">
          {plan.features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 transition-all duration-200 group-hover:translate-x-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110",
                `bg-gradient-to-br ${gradient}`
              )}>
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          variant={plan.popular ? 'default' : 'outline'}
          className={cn(
            "w-full font-semibold transition-all duration-300",
            plan.popular 
              ? `bg-gradient-to-r ${gradient} text-white shadow-md hover:shadow-lg hover:scale-105 border-0` 
              : "hover:border-[#2563EB] hover:text-[#2563EB] hover:scale-105 border-2"
          )}
        >
          <Link href={plan.ctaLink || '/contact?demo=true'}>{plan.cta}</Link>
        </Button>
        </CardContent>
      </Card>
    </div>
  );
}

