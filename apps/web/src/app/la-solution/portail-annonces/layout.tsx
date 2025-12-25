import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Portail annonces immobilières - Publication biens immobiliers',
  description:
    'Publiez et gérez automatiquement vos annonces immobilières sur tous les canaux depuis un seul endroit. Site annonces immobilier et vitrine biens immobiliers.',
  canonicalUrl: '/la-solution/portail-annonces',
  usePageKeywords: true,
}, '/la-solution/portail-annonces');

export default function PortailAnnoncesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

