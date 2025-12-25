import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Pour Qui ? - ImmoTopia',
  description:
    'ImmoTopia s\'adapte aux besoins spécifiques de chaque acteur de l\'immobilier : agences, promoteurs, syndics, gestionnaires, propriétaires.',
  keywords: [
    'agence immobilière',
    'promoteur immobilier',
    'syndic copropriété',
    'gestionnaire locatif',
    'propriétaire bailleur',
  ],
  canonicalUrl: '/pour-qui',
});

export default function PourQuiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

