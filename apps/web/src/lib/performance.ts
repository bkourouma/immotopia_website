/**
 * Utilitaires pour l'optimisation des performances
 */

import React from 'react';

/**
 * Lazy load un composant avec Suspense
 * Utilisation recommandée pour les composants lourds ou non critiques
 */
export function lazyLoadComponent<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return React.lazy(importFunc);
}

/**
 * Précharge une ressource critique
 */
export function preloadResource(href: string, as: string): void {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }
}

/**
 * Préconnecte à un domaine externe
 */
export function preconnect(domain: string): void {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  }
}

/**
 * Désactive le lazy loading pour les images above-the-fold
 */
export function isAboveTheFold(element?: HTMLElement | null): boolean {
  if (typeof window === 'undefined' || !element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Image est above-the-fold si elle est dans les 2 premiers viewports
  return rect.top >= 0 && rect.top < viewportHeight * 2;
}

