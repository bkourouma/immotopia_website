import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Tarifs logiciel immobilier - Prix solution immobilière',
  description:
    'Découvrez nos formules tarifaires adaptées à votre activité. Formules flexibles pour agences, promoteurs, syndics et gestionnaires. Tarification SaaS transparente.',
  canonicalUrl: '/tarifs',
  usePageKeywords: true,
}, '/tarifs');

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

