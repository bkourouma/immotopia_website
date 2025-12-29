'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';
import { trackClarity } from '@/lib/clarity';

interface HeroHeaderProps {
  className?: string;
}

const menuItems = [
  {
    key: 'fonctionnalites',
    label: 'Fonctionnalités',
    href: '/fonctionnalites',
  },
  {
    key: 'tarifs',
    label: 'Tarifs',
    href: '/tarifs',
  },
  {
    key: 'ressources',
    label: 'Ressources',
    href: '/ressources',
  },
  {
    key: 'contact',
    label: 'Contact',
    href: '/contact',
  },
];

export default function HeroHeader({ className }: HeroHeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'absolute top-[42px] left-0 right-0 z-30',
        'bg-transparent',
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold text-white transition-all duration-200 hover:text-white/90 hover:scale-105 drop-shadow-lg"
          >
            ImmoTopia
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center md:flex md:mx-8">
            <ul className="flex items-center gap-2 lg:gap-8">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white relative group drop-shadow-md',
                      isActive(item.href) && 'text-white'
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0',
                        isActive(item.href) && 'w-full left-0'
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block relative z-10">
            <Button
              asChild
              variant="default"
              className="relative z-10 !bg-white !text-[#2563EB] font-semibold px-6 py-2.5 shadow-lg hover:shadow-xl hover:!bg-white/90 transition-all duration-200 hover:scale-105 active:scale-100 border-0"
              id="cta-hero-header-signup"
            >
              <Link
                href="/contact?signup=true"
                onClick={() => {
                  trackCTAClick('Créer mon compte', 'hero_header');
                  trackClarity('cta_creer_mon_compte_hero_header');
                }}
              >
                Créer mon compte
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center p-2 text-white transition-colors hover:text-white/80 active:scale-95 md:hidden drop-shadow-lg"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[85vw] max-w-[400px] flex flex-col p-0">
          <SheetHeader className="border-b border-gray-200 px-6 py-4 flex-shrink-0">
            <SheetTitle className="text-lg font-semibold text-gray-900">Menu</SheetTitle>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={handleMenuClose}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-gray-100 active:scale-95',
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-900'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button at bottom */}
          <div className="border-t border-gray-200 p-4 flex-shrink-0">
            <Button
              asChild
              variant="default"
              className="w-full !bg-[#2563EB] !text-white font-semibold shadow-md hover:shadow-lg hover:!bg-[#1D4ED8] transition-all duration-200 active:scale-95"
              id="cta-hero-header-mobile-signup"
            >
              <Link
                href="/contact?signup=true"
                className="flex items-center justify-center"
                onClick={() => {
                  handleMenuClose();
                  trackCTAClick('Créer mon compte', 'hero_header_mobile');
                  trackClarity('cta_creer_mon_compte_hero_header_mobile');
                }}
              >
                Créer mon compte
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

