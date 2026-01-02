'use client';

import React, { useState, useEffect } from 'react';
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
  const [isOverHero, setIsOverHero] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  // Vérifier les préférences d'accessibilité
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // IntersectionObserver pour détecter quand on sort du hero
  useEffect(() => {
    // Vérifier l'état initial
    if (typeof window === 'undefined') return;

    const sentinel = document.getElementById('hero-sentinel');
    
    // Fallback si le sentinel n'existe pas : utiliser scrollY
    if (!sentinel) {
      const handleScroll = () => {
        const scrolled = window.scrollY > 10;
        setIsOverHero(!scrolled);
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    // Utiliser IntersectionObserver si disponible
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Si le sentinel est visible et en haut de la viewport, on est "over hero"
            const rect = entry.boundingClientRect;
            const isVisible = entry.isIntersecting && rect.top >= 0 && rect.bottom > 0;
            setIsOverHero(isVisible);
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: [0, 0.1],
        }
      );

      observer.observe(sentinel);

      // Vérifier l'état initial
      const rect = sentinel.getBoundingClientRect();
      setIsOverHero(rect.top >= 0 && rect.bottom > 0);

      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback pour navigateurs sans IntersectionObserver
      const handleScroll = () => {
        const rect = sentinel.getBoundingClientRect();
        const scrolled = rect.bottom <= 0 || window.scrollY > 10;
        setIsOverHero(!scrolled);
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const transitionDuration = prefersReducedMotion ? '0ms' : '250ms';

  return (
    <>
      <header
        className={cn(
          'fixed top-[42px] left-0 right-0 z-[1020]',
          'transition-all duration-[250ms] ease-in-out',
          isOverHero
            ? // État transparent (over hero)
              'bg-transparent backdrop-blur-0 border-transparent'
            : // État scrolled (hors hero)
              'bg-white/98 backdrop-blur-md border-b border-gray-200/40 shadow-md',
          className
        )}
        style={{
          transitionDuration,
        }}
      >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'text-lg sm:text-xl font-bold transition-all duration-200 hover:scale-105',
              isOverHero
                ? 'text-white drop-shadow-lg hover:text-white/90'
                : 'text-primary hover:text-primary/90'
            )}
            style={{ transitionDuration }}
          >
            ImmoTopia
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center md:flex md:mx-8" aria-label="Navigation principale">
            <ul className="flex items-center gap-2 lg:gap-8">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium transition-all duration-200 relative group',
                      isOverHero
                        ? 'text-white/90 hover:text-white drop-shadow-md'
                        : 'text-foreground hover:text-primary',
                      isActive(item.href) && (isOverHero ? 'text-white' : 'text-primary')
                    )}
                    style={{ transitionDuration }}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0',
                        isOverHero ? 'bg-white' : 'bg-primary',
                        isActive(item.href) && 'w-full left-0'
                      )}
                      style={{ transitionDuration }}
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
              className={cn(
                'relative z-10 font-semibold px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-100 border-0',
                isOverHero
                  ? '!bg-white !text-[#2563EB] hover:!bg-white/90'
                  : '!bg-[#2563EB] !text-white hover:!bg-[#1D4ED8]'
              )}
              style={{ transitionDuration }}
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
            className={cn(
              'flex items-center justify-center p-2 transition-colors active:scale-95 md:hidden',
              isOverHero
                ? 'text-white hover:text-white/80 drop-shadow-lg'
                : 'text-foreground hover:text-primary'
            )}
            style={{ transitionDuration }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent 
          side="right" 
          className="w-[85vw] max-w-[400px] flex flex-col p-0"
          id="mobile-menu"
        >
          <SheetHeader className="border-b border-gray-200 px-6 py-4 flex-shrink-0">
            <SheetTitle className="text-lg font-semibold text-gray-900">Menu</SheetTitle>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Navigation mobile">
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={handleMenuClose}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-gray-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-900'
                    )}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    style={{ transitionDuration }}
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
              className="w-full !bg-[#2563EB] !text-white font-semibold shadow-md hover:shadow-lg hover:!bg-[#1D4ED8] transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ transitionDuration }}
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
    </>
  );
}

