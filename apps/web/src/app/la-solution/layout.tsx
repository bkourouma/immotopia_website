import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Solution gestion immobilière - Plateforme SaaS complète',
  description:
    'Découvrez l\'écosystème complet ImmoTopia : SaaS de gestion, portail d\'annonces, technologies IA et Mobile Money pour la gestion immobilière professionnelle en Afrique de l\'Ouest.',
  canonicalUrl: '/la-solution',
  usePageKeywords: true,
}, '/la-solution');

export default function LaSolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

