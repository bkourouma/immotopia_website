import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Fonctionnalités logiciel immobilier - Outils gestion immobilière',
  description:
    'Découvrez toutes les fonctionnalités d\'ImmoTopia : gestion des biens, CRM immobilier, gestion locative, syndic, promotion immobilière, paiements Mobile Money, automatisation IA.',
  canonicalUrl: '/fonctionnalites',
  usePageKeywords: true,
}, '/fonctionnalites');

export default function FonctionnalitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

