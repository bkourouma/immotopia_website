import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'SaaS gestion immobilière - Logiciel cloud immobilier',
  description:
    'Plateforme SaaS complète pour centraliser toute votre gestion immobilière : biens, clients, contrats, paiements. Solution hébergée accessible depuis partout.',
  canonicalUrl: '/la-solution/saas-gestion',
  usePageKeywords: true,
}, '/la-solution/saas-gestion');

export default function SaasGestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

