import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Tarifs ImmoTopia — Logiciel immobilier (SaaS) & Licence Perpétuelle',
  description:
    'Tarifs transparents pour logiciel immobilier, gestion locative et CRM immobilier. Abonnements mensuels (Basic 35k, Pro 50k, Elite 100k FCFA). Licence perpétuelle disponible. Paiement Mobile Money accepté.',
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

