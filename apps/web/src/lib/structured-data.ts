/**
 * Schema.org structured data helpers
 * Génère les données structurées JSON-LD pour le SEO
 */

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'ImmoTopia';

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

/**
 * Génère le Schema.org pour WebSite
 */
export function generateWebsiteSchema(config?: { url?: string; name?: string }): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config?.name || siteName,
    url: config?.url || siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${config?.url || siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': string;
    name: string;
    url?: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo?: {
      '@type': string;
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
}

/**
 * Génère le Schema.org pour Article (article de blog)
 */
export function generateArticleSchema(config: ArticleSchema): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.headline,
    description: config.description,
    datePublished: config.datePublished,
    author: config.author,
    publisher: config.publisher,
    mainEntityOfPage: config.mainEntityOfPage,
  };

  if (config.dateModified) {
    schema.dateModified = config.dateModified;
  }

  if (config.image) {
    schema.image = Array.isArray(config.image) ? config.image : [config.image];
  }

  return schema;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Génère le Schema.org pour BreadcrumbList (fil d'Ariane)
 */
export function generateBreadcrumbListSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

export interface HowToSchema {
  name: string;
  description: string;
  image?: string;
  step: Array<{
    '@type': string;
    name: string;
    text: string;
    url?: string;
    image?: string;
  }>;
  totalTime?: string;
}

/**
 * Génère le Schema.org pour HowTo (guide pratique étape par étape)
 */
export function generateHowToSchema(config: HowToSchema): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: config.name,
    description: config.description,
    step: config.step.map((step) => ({
      '@type': step['@type'],
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image }),
    })),
  };

  if (config.image) {
    schema.image = config.image;
  }

  if (config.totalTime) {
    schema.totalTime = config.totalTime;
  }

  return schema;
}

