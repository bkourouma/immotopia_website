import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Technologies gestion immobilière - Innovation immobilière',
  description:
    'Bénéficiez de l\'IA pour automatiser vos tâches et des paiements Mobile Money pour faciliter les transactions. Digitalisation et innovation pour l\'immobilier.',
  canonicalUrl: '/la-solution/technologies',
  usePageKeywords: true,
}, '/la-solution/technologies');

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

