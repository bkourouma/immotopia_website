/**
 * Configuration des mots-clés SEO par page
 * Centralise la stratégie SEO pour toutes les pages du site
 */

/**
 * Configuration SEO pour une page
 */
export interface PageSEOConfig {
  /** Mots-clés principaux */
  primaryKeywords: string[];
  /** Mots-clés secondaires */
  secondaryKeywords?: string[];
  /** Mots-clés longue traîne (optionnel) */
  longTailKeywords?: string[];
}

/**
 * Configuration SEO complète par route
 */
export const seoKeywords: Record<string, PageSEOConfig> = {
  // Page d'accueil
  '/': {
    primaryKeywords: [
      'logiciel immobilier',
      'gestion locative',
      'CRM immobilier',
      'portail d\'annonces',
      'logiciel gestion immobilière',
      'logiciel agence immobilière',
    ],
    secondaryKeywords: [
      'gestion immobilière professionnelle',
      'plateforme SaaS immobilier',
      'outil gestion locative',
      'CRM pour agence immobilière',
      'logiciel gestion biens immobiliers',
    ],
    longTailKeywords: [
      'meilleur logiciel gestion immobilière Afrique de l\'Ouest',
      'solution SaaS pour professionnels immobilier',
      'créer compte logiciel immobilier',
    ],
  },

  // Pages métiers - Agences immobilières
  '/pour-qui/agences-immobilieres': {
    primaryKeywords: [
      'logiciel pour agence immobilière',
      'gestion agence immobilière Afrique',
      'outil agence immobilière',
      'logiciel gestion biens immobiliers',
    ],
    secondaryKeywords: [
      'CRM agence immobilière',
      'logiciel commercialisation biens',
      'gestion portefeuille immobilier',
      'outil prospection immobilière',
    ],
  },

  // Pages métiers - Syndics
  '/pour-qui/syndics': {
    primaryKeywords: [
      'gestion syndic copropriété',
      'logiciel syndic',
      'syndic professionnel',
      'gestion copropriété digitale',
    ],
    secondaryKeywords: [
      'logiciel gestion charges copropriété',
      'outil syndic bénévole',
      'plateforme gestion copropriété',
      'syndicat copropriété numérique',
    ],
  },

  // Pages métiers - Promoteurs
  '/pour-qui/promoteurs-immobiliers': {
    primaryKeywords: [
      'plateforme promoteur immobilier',
      'logiciel promotion immobilière',
      'gestion projet promotion immobilière',
      'outil promoteur immobilier',
    ],
    secondaryKeywords: [
      'logiciel commercialisation programmes',
      'gestion ventes promotion',
      'outil suivi projet immobilier',
      'plateforme commercialisation immobilière',
    ],
  },

  // Pages métiers - Gestionnaires
  '/pour-qui/gestionnaires-locatifs': {
    primaryKeywords: [
      'logiciel gestion locative',
      'gestion locative professionnelle',
      'outil gestionnaire locatif',
      'gestion patrimoine immobilier',
    ],
    secondaryKeywords: [
      'logiciel gestion loyers',
      'gestion maintenance locative',
      'outil suivi locataires',
      'plateforme gestion locative',
    ],
  },

  // Pages métiers - Propriétaires
  '/pour-qui/proprietaires-bailleurs': {
    primaryKeywords: [
      'gestion location particuliers',
      'logiciel propriétaire bailleur',
      'outil gestion location',
      'gestion locative propriétaire',
    ],
    secondaryKeywords: [
      'logiciel gestion biens locatifs',
      'outil suivi loyers',
      'gestion location simple',
      'plateforme propriétaires',
    ],
  },

  // La solution
  '/la-solution': {
    primaryKeywords: [
      'solution gestion immobilière',
      'plateforme SaaS immobilière',
      'outil complet immobilier',
      'logiciel tout-en-un immobilier',
    ],
    secondaryKeywords: [
      'fonctionnalités gestion immobilière',
      'solution digitale immobilier',
      'plateforme professionnelle immobilier',
    ],
  },

  // SaaS gestion
  '/la-solution/saas-gestion': {
    primaryKeywords: [
      'SaaS gestion immobilière',
      'logiciel cloud immobilier',
      'gestion immobilière en ligne',
      'solution hébergée immobilier',
    ],
    secondaryKeywords: [
      'logiciel gestion accessible',
      'plateforme cloud immobilier',
      'SaaS professionnel immobilier',
    ],
  },

  // Portail annonces
  '/la-solution/portail-annonces': {
    primaryKeywords: [
      'portail annonces immobilières',
      'publication biens immobiliers',
      'site annonces immobilier',
      'vitrine biens immobiliers',
    ],
    secondaryKeywords: [
      'publication annonces en ligne',
      'site internet biens immobiliers',
      'portail de vente immobilier',
    ],
  },

  // Technologies
  '/la-solution/technologies': {
    primaryKeywords: [
      'technologies gestion immobilière',
      'innovation immobilière',
      'digitalisation immobilier',
      'technologie SaaS immobilier',
    ],
    secondaryKeywords: [
      'outils modernes immobilier',
      'technologie cloud immobilier',
      'innovation digitale immobilier',
    ],
  },

  // Fonctionnalités
  '/fonctionnalites': {
    primaryKeywords: [
      'fonctionnalités logiciel immobilier',
      'outils gestion immobilière',
      'capacités plateforme immobilière',
      'modules gestion immobilier',
    ],
    secondaryKeywords: [
      'fonctionnalités complètes immobilier',
      'outils professionnels immobilier',
      'modules logiciel immobilier',
    ],
  },

  // Contact
  '/contact': {
    primaryKeywords: [
      'contact ImmoTopia',
      'démo logiciel immobilier',
      'demande information immobilier',
      'contact solution immobilière',
    ],
  },

  // Tarifs
  '/tarifs': {
    primaryKeywords: [
      'tarifs logiciel immobilier',
      'prix solution immobilière',
      'abonnement gestion immobilière',
      'coût logiciel immobilier',
    ],
    secondaryKeywords: [
      'tarification SaaS immobilier',
      'prix plateforme immobilière',
      'formules gestion immobilière',
    ],
  },

  // Blog
  '/ressources/blog': {
    primaryKeywords: [
      'blog immobilier',
      'actualités immobilier',
      'conseils gestion immobilière',
      'ressources immobilier',
    ],
    secondaryKeywords: [
      'articles immobilier',
      'guides immobilier',
      'conseils professionnels immobilier',
    ],
  },

  // Guides
  '/ressources/guides': {
    primaryKeywords: [
      'guides immobilier',
      'guides pratiques immobilier',
      'téléchargement guides immobilier',
      'ressources guides immobilier',
    ],
  },

  // FAQ
  '/ressources/faq': {
    primaryKeywords: [
      'FAQ immobilier',
      'questions fréquentes immobilier',
      'aide logiciel immobilier',
      'support immobilier',
    ],
    secondaryKeywords: [
      'questions réponses immobilier',
      'aide gestion immobilière',
      'FAQ solution immobilière',
    ],
  },
};

/**
 * Récupère la configuration SEO pour une route
 * @param pathname Chemin de la page
 * @returns Configuration SEO ou configuration par défaut
 */
export function getSEOKeywordsForPage(pathname: string): PageSEOConfig {
  // Normaliser le pathname (supprimer trailing slash)
  const normalizedPath = pathname.replace(/\/$/, '') || '/';

  return (
    seoKeywords[normalizedPath] || {
      primaryKeywords: ['gestion immobilière', 'logiciel immobilier', 'SaaS immobilier'],
    }
  );
}

/**
 * Récupère tous les mots-clés (principaux + secondaires) pour une page
 * @param pathname Chemin de la page
 * @returns Tableau de tous les mots-clés
 */
export function getAllKeywordsForPage(pathname: string): string[] {
  const config = getSEOKeywordsForPage(pathname);
  const allKeywords = [...config.primaryKeywords];

  if (config.secondaryKeywords) {
    allKeywords.push(...config.secondaryKeywords);
  }

  if (config.longTailKeywords) {
    allKeywords.push(...config.longTailKeywords);
  }

  return allKeywords;
}

/**
 * Génère une meta keywords string pour une page
 * @param pathname Chemin de la page
 * @param limit Nombre maximum de mots-clés à inclure
 * @returns String de mots-clés séparés par des virgules
 */
export function generateMetaKeywords(pathname: string, limit: number = 10): string {
  const keywords = getAllKeywordsForPage(pathname);
  return keywords.slice(0, limit).join(', ');
}

