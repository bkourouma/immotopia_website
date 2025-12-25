'use client';

/**
 * Contenu client de la page d'accueil
 * Page d'accueil avec design moderne et animations fluides
 */

import {
  Hero,
  HeroStatsSection,
  FeaturesPreview,
  StatsSection,
  PersonasPreview,
  Testimonials,
  FinalCTA,
} from '../sections';

export default function HomePageContent() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Hero Stats Section */}
      <HeroStatsSection />

      {/* Features Preview Section */}
      <FeaturesPreview />

      {/* Stats Section - Transition visuelle entre Features et Personas */}
      <StatsSection />

      {/* Personas Preview Section */}
      <PersonasPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <FinalCTA />
    </main>
  );
}

