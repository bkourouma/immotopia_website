import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '../lib/seo';
import HomePageContent from '../components/pages/HomePageContent';
import HomePageClient from '../components/pages/HomePageClient';

/**
 * Métadonnées SEO pour la page d'accueil
 * Utilise la configuration keywords pour optimiser le SEO
 */
export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Logiciel Immobilier - Gestion Locative & CRM Immobilier | ImmoTopia',
    description:
      'Gérez votre agence immobilière en un seul outil. Logiciel de gestion immobilière, CRM immobilier, gestion locative et portail d\'annonces pour les professionnels en Afrique de l\'Ouest. Créez votre compte gratuitement.',
    canonicalUrl: '/',
    usePageKeywords: true,
  },
  '/'
);

export default function Home() {
  return <HomePageClient><HomePageContent /></HomePageClient>;
}
