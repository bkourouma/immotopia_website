import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Pourquoi ImmoTopia ? - Avantages et différenciation',
  description:
    'Découvrez pourquoi ImmoTopia est la solution de gestion immobilière la plus complète et performante du marché.',
  keywords: [
    'pourquoi ImmoTopia',
    'avantages ImmoTopia',
    'différenciation logiciel immobilier',
  ],
  canonicalUrl: '/pourquoi-immotopia',
});

export default function PourquoiImmoTopiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

