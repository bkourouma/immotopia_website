/**
 * Schema.org structured data helpers for Astro
 * Génère les données structurées JSON-LD pour le SEO
 */

const siteUrl = import.meta.env.PUBLIC_APP_URL || 'https://immotopia.com';
const siteName = import.meta.env.PUBLIC_SITE_NAME || 'ImmoTopia';

export interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone?: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

/**
 * Génère le Schema.org pour Organization
 */
export function generateOrganizationSchema(config?: Partial<OrganizationSchema>): object {
  const organization: OrganizationSchema = {
    name: config?.name || siteName,
    url: config?.url || siteUrl,
    logo: config?.logo || `${siteUrl}/logo.png`,
    description:
      config?.description ||
      'Plateforme SaaS complète pour la gestion immobilière professionnelle',
    contactPoint: config?.contactPoint || {
      contactType: 'Customer Service',
      email: 'contact@immotopia.com',
    },
    sameAs: config?.sameAs || [],
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.name,
    url: organization.url,
    logo: organization.logo,
    description: organization.description,
    contactPoint: organization.contactPoint,
    ...(organization.sameAs && organization.sameAs.length > 0 && { sameAs: organization.sameAs }),
  };
}

export interface WebsiteSchema {
  name: string;
  url: string;
  description?: string;
}

/**
 * Génère le Schema.org pour Website
 */
export function generateWebsiteSchema(config?: Partial<WebsiteSchema>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config?.name || siteName,
    url: config?.url || siteUrl,
    description: config?.description || 'Plateforme SaaS de gestion immobilière',
  };
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Génère le Schema.org pour FAQPage
 */
export function generateFAQSchema(config: FAQSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed?: string;
  serviceType?: string;
}

/**
 * Génère le Schema.org pour Service
 */
export function generateServiceSchema(config: ServiceSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.name,
    description: config.description,
    provider: config.provider,
    ...(config.areaServed && { areaServed: config.areaServed }),
    ...(config.serviceType && { serviceType: config.serviceType }),
  };
}

