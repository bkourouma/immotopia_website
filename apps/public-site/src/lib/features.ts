/**
 * Types et données pour les fonctionnalités ImmoTopia
 */

export interface Feature {
  id: string;
  name: string;
  title: string;
  description: string;
  detailedDescription?: string;
  icon?: string;
  image?: string;
  personas: string[];
  benefits: string[];
  slug: string;
}

export const features: Feature[] = [
  {
    id: 'gestion-biens',
    name: 'Gestion des biens',
    title: 'Gestion complète des biens immobiliers',
    description:
      'Centralisez la gestion de tous vos biens immobiliers avec un suivi complet et des alertes automatiques.',
    detailedDescription:
      'Gérez efficacement votre portefeuille immobilier avec un outil centralisé. Suivi des locations, maintenance, travaux, et toutes les informations essentielles de chaque bien.',
    personas: ['agences-immobilieres', 'promoteurs', 'gestionnaires', 'proprietaires'],
    benefits: [
      'Base de données centralisée',
      'Suivi en temps réel',
      'Alertes automatiques',
      'Historique complet',
    ],
    slug: '/fonctionnalites/gestion-biens',
  },
  {
    id: 'crm-immobilier',
    name: 'CRM immobilier',
    title: 'CRM immobilier intégré',
    description:
      'Gérez vos contacts, prospects et clients avec un CRM spécialement conçu pour l\'immobilier.',
    detailedDescription:
      'Un CRM puissant adapté aux besoins de l\'immobilier. Suivez vos prospects, gérez vos clients, planifiez vos rendez-vous et automatisez vos communications.',
    personas: ['agences-immobilieres', 'promoteurs'],
    benefits: ['Pipeline de vente', 'Suivi des rendez-vous', 'Communication automatisée', 'Rapports détaillés'],
    slug: '/fonctionnalites/crm-immobilier',
  },
  {
    id: 'gestion-locative',
    name: 'Gestion locative',
    title: 'Gestion locative simplifiée',
    description:
      'Automatisez la gestion de vos locations : contrats, loyers, quittances et suivi des locataires.',
    detailedDescription:
      'Simplifiez la gestion locative avec des outils dédiés. Générez automatiquement les contrats, suivez les paiements, créez les quittances et gérez la communication avec les locataires.',
    personas: ['gestionnaires', 'proprietaires', 'syndics'],
    benefits: ['Génération automatique des contrats', 'Suivi des loyers', 'Quittances automatiques', 'Communication facilitée'],
    slug: '/fonctionnalites/gestion-locative',
  },
  {
    id: 'syndic-copropriete',
    name: 'Syndic de copropriété',
    title: 'Gestion de copropriété automatisée',
    description:
      'Automatisez la gestion administrative de vos copropriétés : charges, assemblées, documents.',
    detailedDescription:
      'Simplifiez la gestion de copropriété avec des outils automatisés. Gérez les charges, planifiez les assemblées, publiez les documents et communiquez facilement avec les copropriétaires via le portail dédié.',
    personas: ['syndics'],
    benefits: ['Gestion automatisée des charges', 'Portail copropriétaires', 'Documents centralisés', 'Communication facilitée'],
    slug: '/fonctionnalites/syndic-copropriete',
  },
  {
    id: 'promotion-immobiliere',
    name: 'Promotion immobilière',
    title: 'Promotion et commercialisation',
    description:
      'Pilotez vos projets immobiliers et commercialisez efficacement vos biens.',
    detailedDescription:
      'Optimisez la commercialisation de vos projets immobiliers. Suivez les ventes, gérez les réservations, pilotez les projets et générez des rapports détaillés.',
    personas: ['promoteurs'],
    benefits: ['Suivi de projet', 'Gestion des réservations', 'Portail de commercialisation', 'Reporting automatique'],
    slug: '/fonctionnalites/promotion-immobiliere',
  },
  {
    id: 'paiements-mobile-money',
    name: 'Paiements Mobile Money',
    title: 'Paiements Mobile Money intégrés',
    description:
      'Acceptez et gérez les paiements via Mobile Money directement depuis la plateforme.',
    detailedDescription:
      'Intégrez les paiements Mobile Money pour faciliter les transactions. Acceptez les loyers, charges et autres paiements directement depuis la plateforme avec un suivi automatique.',
    personas: ['syndics', 'gestionnaires', 'proprietaires'],
    benefits: ['Paiements en ligne', 'Suivi automatique', 'Sécurité renforcée', 'Réduction des impayés'],
    slug: '/fonctionnalites/paiements-mobile-money',
  },
  {
    id: 'automatisation-ia',
    name: 'Automatisation IA',
    title: 'Automatisation par Intelligence Artificielle',
    description:
      'Automatisez vos tâches répétitives grâce à l\'IA : triage des emails, suggestions intelligentes, rapports automatiques.',
    detailedDescription:
      'L\'IA au service de votre productivité. Automatisez le triage des emails, recevez des suggestions intelligentes, générez des rapports automatiques et optimisez vos processus.',
    personas: ['agences-immobilieres', 'promoteurs', 'syndics', 'gestionnaires'],
    benefits: ['Automatisation intelligente', 'Suggestions personnalisées', 'Rapports automatiques', 'Gain de temps'],
    slug: '/fonctionnalites/automatisation-ia',
  },
];

export function getFeatureById(id: string): Feature | undefined {
  return features.find((f) => f.id === id);
}



