import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '../lib/seo';
import HomePageContent from '../components/pages/HomePageContent';

/**
 * Métadonnées SEO pour la page d'accueil
 * Utilise la configuration keywords pour optimiser le SEO
 */
export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Plateforme immobilière Afrique de l\'Ouest - ImmoTopia',
    description:
      'Solution SaaS complète pour la gestion immobilière professionnelle en Afrique de l\'Ouest. Logiciel de gestion immobilière, CRM, gestion locative, syndic, promotion immobilière.',
    canonicalUrl: '/',
    usePageKeywords: true,
  },
  '/'
);

export default function Home() {
  return <HomePageContent />;
}
