'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, LifeBuoy, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InfoBarProps {
  className?: string;
}

export default function InfoBar({ className }: InfoBarProps) {
  return (
    <div
      className={cn(
        'fixed top-[42px] left-0 right-0 z-40',
        'bg-white/95 backdrop-blur-sm border-b border-gray-200/50',
        'px-4 py-2.5',
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] flex items-center justify-end gap-6 text-sm">
        {/* Phone */}
        <Link
          href="tel:+2250123456789"
          className="flex items-center gap-2 text-gray-700 hover:text-[#2563EB] transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">+225 01 23 45 67 89</span>
          <span className="sm:hidden">Appeler</span>
        </Link>

        {/* Assistance */}
        <Link
          href="/contact"
          className="flex items-center gap-2 text-gray-700 hover:text-[#2563EB] transition-colors"
        >
          <LifeBuoy className="h-4 w-4" />
          <span className="hidden sm:inline">Assistance en ligne</span>
          <span className="sm:hidden">Aide</span>
        </Link>

        {/* Accès logiciel */}
        <Link
          href="/login"
          className="flex items-center gap-2 text-gray-700 hover:text-[#2563EB] transition-colors"
        >
          <Lock className="h-4 w-4" />
          <span className="hidden sm:inline">Accès au logiciel</span>
          <span className="sm:hidden">Login</span>
        </Link>
      </div>
    </div>
  );
}


