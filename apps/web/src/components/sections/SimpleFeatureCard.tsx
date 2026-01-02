'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Feature } from '../../lib/features';

interface SimpleFeatureCardProps {
  feature: Feature;
  className?: string;
}

export default function SimpleFeatureCard({
  feature,
  className,
}: SimpleFeatureCardProps) {
  return (
    <Link 
      href={feature.slug} 
      className={cn('group block no-underline', className)}
    >
      <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-md">
        {/* Simple icon placeholder - can be replaced with actual icon if available */}
        <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB]/20">
          <span className="text-lg font-semibold">{feature.name.charAt(0)}</span>
        </div>
        
        <div className="flex-1">
          <h3 className="mb-1 text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#2563EB]">
            {feature.name}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            {feature.description}
          </p>
          <div className="mt-2 flex items-center text-xs font-medium text-[#2563EB] transition-all duration-300 group-hover:gap-1">
            Voir le détail
            <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}


