'use client';

/**
 * Composant Breadcrumbs pour améliorer la navigation et le SEO
 * Affiche le fil d'Ariane et génère le structured data BreadcrumbList
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ChevronRight } from 'lucide-react';
import { generateBreadcrumbListSchema } from '@/lib/structured-data';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  /** Items personnalisés (optionnel, sinon généré depuis le pathname) */
  items?: BreadcrumbItem[];
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Génère les breadcrumbs à partir du pathname
 */
function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Accueil', href: '/' }];

  if (pathname === '/') {
    return items;
  }

  const segments = pathname.split('/').filter(Boolean);
  const pathLabels: Record<string, string> = {
    'la-solution': 'La Solution',
    'fonctionnalites': 'Fonctionnalités',
    'pour-qui': 'Pour Qui',
    'tarifs': 'Tarifs',
    'contact': 'Contact',
    'ressources': 'Ressources',
    'blog': 'Blog',
    'guides': 'Guides',
    'faq': 'FAQ',
    'actualites': 'Actualités',
    'agences-immobilieres': 'Agences Immobilières',
    'syndics': 'Syndics',
    'promoteurs': 'Promoteurs',
    'gestionnaires': 'Gestionnaires',
    'proprietaires': 'Propriétaires',
    'saas-gestion': 'SaaS de Gestion',
    'portail-annonces': 'Portail d\'Annonces',
    'technologies': 'Technologies',
    'pourquoi-immotopia': 'Pourquoi ImmoTopia',
  };

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    items.push({ label, href: currentPath });
  }

  return items;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();
  const breadcrumbs = items || generateBreadcrumbsFromPath(pathname);

  // Générer le structured data
  const breadcrumbSchema = generateBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: item.href,
    }))
  );

  if (breadcrumbs.length <= 1) {
    return null; // Ne pas afficher si on est sur l'accueil
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} id="breadcrumb-schema" />
      <nav
        aria-label="Fil d'Ariane"
        className={`flex items-center space-x-2 py-4 text-sm text-gray-600 ${className}`}
      >
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isFirst = index === 0;

          return (
            <div key={item.href} className="flex items-center space-x-2">
              {isFirst ? (
                <Link
                  href={item.href}
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  aria-label="Accueil"
                >
                  <Home className="h-4 w-4" />
                </Link>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  {isLast ? (
                    <span className="font-medium text-gray-900" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}

