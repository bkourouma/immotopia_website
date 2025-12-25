import { Metadata } from 'next';
import { generateMetadata } from '../../lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact ImmoTopia - Démo logiciel immobilier',
  description:
    'Contactez-nous pour une démonstration personnalisée de la solution ImmoTopia. Répondez à vos questions sur notre plateforme SaaS de gestion immobilière.',
  canonicalUrl: '/contact',
  usePageKeywords: true,
}, '/contact');

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

