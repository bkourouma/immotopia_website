import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Ressources - ImmoTopia',
  description:
    'Accédez à nos ressources pour améliorer votre gestion immobilière : blog, guides pratiques, actualités et meilleures pratiques.',
  keywords: ['ressources immobilier', 'guides gestion immobilière', 'blog immobilier'],
  canonicalUrl: '/ressources',
});

export default function RessourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

