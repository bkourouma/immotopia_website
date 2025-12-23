/**
 * Types et données pour les personas ImmoTopia
 */

export type PersonaType =
  | 'agences-immobilieres'
  | 'promoteurs'
  | 'syndics'
  | 'gestionnaires'
  | 'proprietaires';

export interface Persona {
  id: PersonaType;
  name: string;
  title: string;
  description: string;
  problems: string[];
  solutions: string[];
  benefits: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  slug: string;
}

export const personas: Persona[] = [
  {
    id: 'agences-immobilieres',
    name: 'Agences immobilières',
    title: 'Pour les agences immobilières',
    description:
      'Centralisez toute votre activité sur une seule plateforme et augmentez votre productivité de 40%.',
    problems: [
      'Gestion dispersée des biens et clients',
      'Manque de visibilité sur l’activité',
      'Perte de temps sur les tâches administratives',
      'Difficultés à suivre les dossiers',
    ],
    solutions: [
      'CRM immobilier intégré',
      'Gestion centralisée des biens',
      'Portail d’annonces automatisé',
      'Suivi des dossiers en temps réel',
    ],
    benefits: [
      '+40% de productivité',
      'Visibilité totale sur l’activité',
      'Réduction des tâches administratives',
      'Meilleur suivi client',
    ],
    metrics: [
      { label: 'Productivité', value: '+40%' },
      { label: 'Gain de temps', value: '-60%' },
    ],
    slug: '/pour-qui/agences-immobilieres',
  },
  {
    id: 'promoteurs',
    name: 'Promoteurs immobiliers',
    title: 'Pour les promoteurs immobiliers',
    description:
      'Pilotez vos projets et vendez plus vite avec un suivi complet de la commercialisation.',
    problems: [
      'Suivi complexe des projets',
      'Commercialisation difficile',
      'Manque de visibilité sur les ventes',
      'Gestion administrative lourde',
    ],
    solutions: [
      'Suivi de projet intégré',
      'Gestion de la commercialisation',
      'Portail de réservation',
      'Reporting automatique',
    ],
    benefits: [
      'Réduction du délai de commercialisation',
      'Visibilité en temps réel',
      'Suivi automatisé des ventes',
      'Optimisation des processus',
    ],
    metrics: [
      { label: 'Délai de vente', value: '-30%' },
      { label: 'Suivi projets', value: '100%' },
    ],
    slug: '/pour-qui/promoteurs',
  },
  {
    id: 'syndics',
    name: 'Syndics de copropriété',
    title: 'Pour les syndics de copropriété',
    description:
      'Automatisez votre gestion de copropriété et réduisez de 60% le temps administratif.',
    problems: [
      'Gestion administrative chronophage',
      'Suivi des charges complexe',
      'Communication avec les copropriétaires',
      'Manque d’automatisation',
    ],
    solutions: [
      'Gestion automatisée des charges',
      'Portail copropriétaires',
      'Paiements Mobile Money intégrés',
      'Communication automatisée',
    ],
    benefits: [
      '-60% de temps administratif',
      'Gestion simplifiée',
      'Meilleure communication',
      'Transparence accrue',
    ],
    metrics: [
      { label: 'Temps admin', value: '-60%' },
      { label: 'Automatisation', value: '80%' },
    ],
    slug: '/pour-qui/syndics',
  },
  {
    id: 'gestionnaires',
    name: 'Gestionnaires locatifs',
    title: 'Pour les gestionnaires locatifs',
    description:
      'Simplifiez votre gestion locative avec l’automatisation des paiements et du suivi.',
    problems: [
      'Suivi des loyers complexe',
      'Gestion de la maintenance',
      'Difficultés de recouvrement',
      'Manque de visibilité',
    ],
    solutions: [
      'Gestion locative automatisée',
      'Paiements Mobile Money',
      'Suivi de maintenance',
      'Alertes automatiques',
    ],
    benefits: [
      'Paiements automatisés',
      'Suivi simplifié',
      'Réduction des impayés',
      'Meilleure visibilité',
    ],
    metrics: [
      { label: 'Paiements', value: '100%' },
      { label: 'Impaiements', value: '-40%' },
    ],
    slug: '/pour-qui/gestionnaires',
  },
  {
    id: 'proprietaires',
    name: 'Propriétaires bailleurs',
    title: 'Pour les propriétaires bailleurs',
    description:
      'Professionnalisez votre gestion locative et gagnez du temps sur la gestion de vos biens.',
    problems: [
      'Gestion manuelle chronophage',
      'Manque de visibilité',
      'Difficultés de suivi',
      'Communication avec les locataires',
    ],
    solutions: [
      'Portail propriétaire dédié',
      'Suivi des loyers en temps réel',
      'Communication simplifiée',
      'Reporting automatique',
    ],
    benefits: [
      'Gain de temps significatif',
      'Meilleur suivi',
      'Communication facilitée',
      'Gestion professionnelle',
    ],
    metrics: [
      { label: 'Gain de temps', value: '+50%' },
      { label: 'Suivi', value: '100%' },
    ],
    slug: '/pour-qui/proprietaires',
  },
];

export function getPersonaById(id: PersonaType): Persona | undefined {
  return personas.find((p) => p.id === id);
}

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug || slug.endsWith(p.slug));
}

