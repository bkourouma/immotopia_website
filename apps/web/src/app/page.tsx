import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '../lib/seo';
import { generateOrganizationSchema, generateSoftwareApplicationSchema } from '../lib/structured-data';
import StructuredData from '../components/seo/StructuredData';
import HomePageContent from '../components/pages/HomePageContent';
import HomePageClient from '../components/pages/HomePageClient';
import { SITE_URL } from '../lib/seo';

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
  // SoftwareApplication schema pour la home
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'ImmoTopia',
    description:
      'Plateforme SaaS complète pour la gestion immobilière professionnelle. Gestion des biens, CRM immobilier, gestion locative, syndic de copropriété, promotion immobilière et paiements Mobile Money intégrés.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: [
      {
        '@type': 'Offer',
        name: 'Basic',
        price: '35000',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/contact?signup=true&plan=basic`,
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '50000',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/contact?signup=true&plan=pro`,
      },
      {
        '@type': 'Offer',
        name: 'Elite',
        price: '100000',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/contact?signup=true&plan=elite`,
      },
    ],
  });

  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <StructuredData data={[organizationSchema, softwareSchema]} id="home-schemas" />
      <HomePageClient>
        <HomePageContent />
      </HomePageClient>
    </>
  );
}
