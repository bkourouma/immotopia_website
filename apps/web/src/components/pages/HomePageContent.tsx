'use client';

/**
 * Contenu client de la page d'accueil
 * Page d'accueil avec design moderne et animations fluides
 */

import {
  Hero,
  HeroStatsSection,
  ProblemSolution,
  FeaturesPreview,
  HowItWorks,
  PersonasPreview,
  Testimonials,
  StatsSection,
  PricingPreview,
  FAQ,
  FinalCTA,
} from '../sections';
import TopBarCTA from '../layout/TopBarCTA';

export default function HomePageContent() {
  return (
    <div className="relative">
      {/* Top CTA Bar avec informations */}
      <TopBarCTA />

      {/* Hero Section with integrated header */}
      <Hero />

      {/* Hero Stats Section - Proof social près du Hero */}
      <HeroStatsSection />

      {/* Problem/Solution Section */}
      <ProblemSolution />

      {/* Features Preview Section */}
      <FeaturesPreview />

      {/* How it Works Section */}
      <HowItWorks />

      {/* Personas Preview Section */}
      <PersonasPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Stats Section - Métriques */}
      <StatsSection />

      {/* Pricing Preview Section */}
      <PricingPreview />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <FinalCTA />
    </div>
  );
}

