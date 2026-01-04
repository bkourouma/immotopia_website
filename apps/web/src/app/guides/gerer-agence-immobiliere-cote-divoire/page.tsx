import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  ClipboardCheck, 
  TrendingUp, 
  FileText, 
  Calendar,
  DollarSign,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Target,
  Zap,
  Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gérer une agence immobilière en Côte d\'Ivoire : guide complet | ImmoTopia',
  description: 'Guide complet pour gérer une agence immobilière en Côte d\'Ivoire : organisation, CRM, biens, visites, loyers, paiements, reporting et performance commerciale.',
  alternates: {
    canonical: '/guides/gerer-agence-immobiliere-cote-divoire',
  },
  openGraph: {
    title: 'Gérer une agence immobilière en Côte d\'Ivoire : guide complet',
    description: 'Guide complet pour gérer une agence immobilière en Côte d\'Ivoire : organisation, CRM, biens, visites, loyers, paiements, reporting et performance commerciale.',
    type: 'article',
    url: 'https://immotopia.immo-annonces.fr/guides/gerer-agence-immobiliere-cote-divoire',
  },
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien d\'agents faut-il pour utiliser un ERP immobilier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un ERP immobilier comme ImmoTopia est utile dès 1 agent. Même une petite agence gagne en professionnalisme, traçabilité et efficacité. Plus l\'équipe grandit, plus l\'ERP devient indispensable pour coordonner l\'activité.',
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce adapté aux petites agences immobilières ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, totalement. ImmoTopia propose des formules adaptées aux petites structures. L\'objectif est de structurer dès le départ pour éviter le chaos lors de la croissance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on gérer vente et location dans le même outil ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. ImmoTopia couvre les deux activités : gestion des biens à vendre, CRM prospects acheteurs, suivi locatif, encaissement loyers, quittances, reporting propriétaires. Tout dans un seul système.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on suivre les performances de chaque agent ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. ImmoTopia permet de suivre l\'activité de chaque agent : nombre de visites, taux de transformation, chiffre d\'affaires généré, loyers encaissés. Idéal pour piloter et motiver les équipes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le paiement Mobile Money est-il obligatoire ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, mais c\'est un atout majeur en Côte d\'Ivoire. ImmoTopia intègre Orange Money, MTN Mobile Money et Moov Money pour faciliter l\'encaissement des loyers et charges. Vous pouvez aussi gérer les paiements classiques.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on démarrer progressivement avec ImmoTopia ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Vous pouvez commencer par le CRM et les annonces, puis activer la gestion locative, les paiements Mobile Money et le reporting au fur et à mesure. L\'adoption se fait à votre rythme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment migrer depuis Excel ou un autre système ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ImmoTopia propose un accompagnement à la migration : import de vos biens, clients, contrats de location. L\'équipe vous guide pour une transition en douceur sans perte de données.',
      },
    },
    {
      '@type': 'Question',
      name: 'ImmoTopia est-il adapté au marché ivoirien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, totalement. ImmoTopia est conçu pour la Côte d\'Ivoire : paiements Mobile Money, gestion en FCFA, process locaux (quittances, mandats, visites), support en français et accompagnement terrain.',
      },
    },
  ],
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Comment gérer une agence immobilière en Côte d\'Ivoire : le guide opérationnel',
  description: 'Guide complet pour gérer une agence immobilière en Côte d\'Ivoire : organisation, CRM, biens, visites, loyers, paiements, reporting et performance commerciale.',
  author: {
    '@type': 'Organization',
    name: 'ImmoTopia',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ImmoTopia',
    logo: {
      '@type': 'ImageObject',
      url: 'https://immotopia.immo-annonces.fr/logo.png',
    },
  },
  datePublished: '2024-01-03',
  dateModified: '2024-01-03',
};

export default function GererAgenceImmobilierePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Target className="h-4 w-4" />
                Guide stratégique pour dirigeants d'agences
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Comment gérer une agence immobilière en Côte d&apos;Ivoire
              </h1>
              
              <p className="mb-8 text-xl text-blue-100 sm:text-2xl">
                Le guide opérationnel complet : organisation, ventes, loyers, clients et performance
              </p>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-50">
                De la gestion des leads à l'encaissement des loyers, découvrez comment structurer votre agence 
                pour maximiser votre chiffre d'affaires et piloter votre croissance.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact?demo=true"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-xl transition-all hover:bg-blue-50 hover:shadow-2xl sm:w-auto"
                >
                  Demander une démo (ERP immobilier)
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
                >
                  Voir le logiciel ImmoTopia
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Les défis réels des agences immobilières */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Les défis réels des agences immobilières en Côte d'Ivoire
                </h2>
                <p className="text-lg text-slate-600">
                  Pourquoi tant d'agences peinent à grandir malgré un marché dynamique
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                  <AlertCircle className="mb-4 h-8 w-8 text-red-600" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">Leads perdus</h3>
                  <p className="text-sm text-slate-600">
                    Appels non rappelés, WhatsApp noyés, prospects oubliés. Chaque lead perdu = argent perdu.
                  </p>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                  <AlertCircle className="mb-4 h-8 w-8 text-red-600" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">Biens mal suivis</h3>
                  <p className="text-sm text-slate-600">
                    Excel obsolète, photos dispersées, statuts flous. Impossible de savoir ce qui est disponible.
                  </p>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                  <AlertCircle className="mb-4 h-8 w-8 text-red-600" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">Visites non tracées</h3>
                  <p className="text-sm text-slate-600">
                    Qui a visité quoi ? Quand relancer ? Aucune traçabilité = aucun suivi commercial.
                  </p>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                  <AlertCircle className="mb-4 h-8 w-8 text-red-600" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">Loyers mal encaissés</h3>
                  <p className="text-sm text-slate-600">
                    Retards, impayés non détectés, quittances manuelles. Trésorerie imprévisible.
                  </p>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                  <AlertCircle className="mb-4 h-8 w-8 text-red-600" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">Reporting inexistant</h3>
                  <p className="text-sm text-slate-600">
                    Impossible de piloter sans chiffres. Combien de visites ? Quel taux de transformation ?
                  </p>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                  <AlertCircle className="mb-4 h-8 w-8 text-red-600" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">Outils dispersés</h3>
                  <p className="text-sm text-slate-600">
                    Excel + WhatsApp + cahiers + mémoire. Chaos garanti dès que l'équipe grandit.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-xl border-2 border-blue-200 bg-blue-50 p-8">
                <div className="flex items-start gap-4">
                  <Shield className="mt-1 h-8 w-8 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      Le constat : Excel et WhatsApp ne suffisent plus
                    </h3>
                    <p className="mb-4 text-slate-700">
                      Ces outils ont permis de démarrer, mais ils deviennent un frein dès que l'agence veut grandir.
                      Pas de traçabilité, pas de pilotage, pas de professionnalisme perçu par les clients.
                    </p>
                    <p className="font-semibold text-blue-900">
                      Une agence moderne a besoin d'un système centralisé, fiable et adapté à l'immobilier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Les 6 piliers d'une agence performante */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Les 6 piliers d'une agence immobilière performante
                </h2>
                <p className="text-lg text-slate-600">
                  Les fondations indispensables pour structurer votre croissance
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Organisation claire</h3>
                    <p className="text-slate-600">
                      Rôles définis (direction, agents, gestion), process documentés, règles internes simples.
                      Chacun sait ce qu'il doit faire et comment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Stock de biens fiable</h3>
                    <p className="text-slate-600">
                      Base unique et à jour de tous les biens (vente + location), avec photos, statuts, historique.
                      Fini les doublons et les biens fantômes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">CRM adapté à l'immobilier</h3>
                    <p className="text-slate-600">
                      Tous les prospects centralisés, pipeline de vente visible, relances automatiques,
                      historique complet. Aucun lead ne passe entre les mailles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-xl font-bold text-blue-600">4</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Process de visites & dossiers</h3>
                    <p className="text-slate-600">
                      De la prise de contact à la signature : chaque étape tracée, chaque document centralisé,
                      chaque relance planifiée. Process industrialisé.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-xl font-bold text-blue-600">5</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Encaissements structurés</h3>
                    <p className="text-slate-600">
                      Loyers suivis au FCFA près, quittances automatiques, paiements Mobile Money intégrés,
                      impayés détectés immédiatement. Trésorerie maîtrisée.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-xl font-bold text-blue-600">6</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Pilotage par indicateurs</h3>
                    <p className="text-slate-600">
                      Tableaux de bord en temps réel : activité agents, taux de transformation, CA, loyers encaissés.
                      Décisions basées sur des chiffres, pas sur des impressions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Ces 6 piliers ne sont pas optionnels
                </h3>
                <p className="mb-6 text-blue-50">
                  Ils sont la différence entre une agence qui survit et une agence qui grandit.
                  La bonne nouvelle : un ERP immobilier comme ImmoTopia couvre les 6 piliers dans un seul système.
                </p>
                <Link
                  href="/pour-qui/agences-immobilieres"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
                >
                  Voir la solution pour agences
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Organiser l'agence */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Organiser l'agence : les bases
                </h2>
                <p className="text-lg text-slate-600">
                  Avant les outils, il faut poser les fondations organisationnelles
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900">
                    <Users className="h-7 w-7 text-blue-600" />
                    Définir les rôles clairement
                  </h3>
                  <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="mb-2 font-semibold text-slate-900">Direction / Gérant</h4>
                      <p className="text-sm text-slate-600">
                        Pilotage stratégique, validation des mandats importants, suivi des indicateurs,
                        relation propriétaires clés, développement commercial.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="mb-2 font-semibold text-slate-900">Agents commerciaux</h4>
                      <p className="text-sm text-slate-600">
                        Prospection terrain, visites, négociation, suivi prospects, signature contrats,
                        mise à jour CRM quotidienne.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="mb-2 font-semibold text-slate-900">Gestionnaire locatif (si applicable)</h4>
                      <p className="text-sm text-slate-600">
                        Suivi loyers, quittances, relances impayés, états des lieux, relation locataires,
                        reporting propriétaires.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="mb-2 font-semibold text-slate-900">Assistant(e) administratif(ve)</h4>
                      <p className="text-sm text-slate-600">
                        Accueil, standard, saisie biens, diffusion annonces, gestion documents,
                        support agents.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900">
                    <Building2 className="h-7 w-7 text-blue-600" />
                    Centraliser l'information
                  </h3>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="mb-4 text-slate-700">
                      <strong>Règle d'or :</strong> une seule source de vérité pour chaque type d'information.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">
                          <strong>Biens :</strong> tous dans le même système, pas d'Excel parallèle
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">
                          <strong>Clients :</strong> CRM unique, pas de carnets personnels
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">
                          <strong>Documents :</strong> stockage centralisé, pas de clés USB
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">
                          <strong>Loyers :</strong> suivi unique, pas de cahiers multiples
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900">
                    <ClipboardCheck className="h-7 w-7 text-blue-600" />
                    Établir des règles internes simples
                  </h3>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                          1
                        </div>
                        <span className="text-slate-700">
                          Tout nouveau bien est saisi dans le système <strong>le jour même</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                          2
                        </div>
                        <span className="text-slate-700">
                          Tout prospect est enregistré dans le CRM <strong>immédiatement</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                          3
                        </div>
                        <span className="text-slate-700">
                          Toute visite est tracée avec date, bien, prospect, retour
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                          4
                        </div>
                        <span className="text-slate-700">
                          Les statuts des biens sont mis à jour <strong>en temps réel</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                          5
                        </div>
                        <span className="text-slate-700">
                          Les encaissements sont enregistrés <strong>le jour même</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border-2 border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <Zap className="mt-1 h-6 w-6 flex-shrink-0 text-amber-600" />
                  <div>
                    <h4 className="mb-2 font-semibold text-slate-900">
                      L'organisation ne remplace pas l'outil, mais l'outil ne remplace pas l'organisation
                    </h4>
                    <p className="text-sm text-slate-700">
                      Même le meilleur ERP ne sauvera pas une agence désorganisée. Mais une agence organisée
                      avec un bon ERP devient une machine de croissance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gérer les biens & annonces */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Gérer les biens & annonces : votre stock commercial
                </h2>
                <p className="text-lg text-slate-600">
                  Un bien mal géré = une opportunité perdue
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Base unique de biens
                  </h3>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="mb-4 text-slate-700">
                      Tous les biens (vente + location) doivent être dans un seul système, avec :
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Informations complètes</p>
                          <p className="text-sm text-slate-600">Type, surface, prix, localisation, équipements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Photos de qualité</p>
                          <p className="text-sm text-slate-600">Stockées dans le système, pas sur téléphone</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Propriétaire lié</p>
                          <p className="text-sm text-slate-600">Contact, mandat, commission</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Historique complet</p>
                          <p className="text-sm text-slate-600">Visites, offres, modifications</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Statuts clairs et à jour
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="font-semibold text-slate-900">Disponible</span>
                      <span className="text-sm text-slate-600">— Peut être visité et proposé</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                      <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                      <span className="font-semibold text-slate-900">En négociation</span>
                      <span className="text-sm text-slate-600">— Offre en cours, ne plus diffuser</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="font-semibold text-slate-900">Compromis signé</span>
                      <span className="text-sm text-slate-600">— En attente acte définitif</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                      <div className="h-3 w-3 rounded-full bg-slate-400"></div>
                      <span className="font-semibold text-slate-900">Vendu / Loué</span>
                      <span className="text-sm text-slate-600">— Archivé, ne plus afficher</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Diffusion contrôlée
                  </h3>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="mb-4 text-slate-700">
                      Depuis votre système, vous devez pouvoir :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-700">
                          Publier automatiquement sur votre site web
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-700">
                          Diffuser sur les portails immobiliers (si intégration)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-700">
                          Retirer un bien de la diffusion en 1 clic
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-700">
                          Éviter les doublons et les biens fantômes
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  ImmoTopia : gestion complète des biens & annonces
                </h3>
                <p className="mb-6 text-blue-50">
                  Base centralisée, statuts automatiques, diffusion web intégrée, historique complet.
                  Vos biens sont votre stock : gérez-les comme tels.
                </p>
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
                >
                  Découvrir le module Biens & Annonces
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CRM immobilier */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  CRM immobilier : le cœur de l'agence
                </h2>
                <p className="text-lg text-slate-600">
                  Sans CRM adapté, vous perdez 50% de vos opportunités
                </p>
              </div>

              <div className="mb-10 rounded-xl border-2 border-red-200 bg-red-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  ❌ Ce qui ne marche PAS : WhatsApp + Excel + mémoire
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Prospects perdus dans les conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Impossible de savoir qui a appelé qui et quand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Relances oubliées = ventes perdues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Aucune vision du pipeline commercial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Conflits entre agents sur les prospects</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    ✅ Ce qu'un CRM immobilier doit faire
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <Users className="h-5 w-5 text-blue-600" />
                        Centraliser tous les prospects
                      </h4>
                      <p className="mb-3 text-slate-700">
                        Chaque contact (appel, email, visite physique, formulaire web) est enregistré automatiquement
                        avec toutes les informations : nom, téléphone, email, recherche, budget, origine.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Résultat :</strong> aucun prospect ne passe entre les mailles.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        Visualiser le pipeline de vente
                      </h4>
                      <p className="mb-3 text-slate-700">
                        Voir en un coup d'œil où en est chaque prospect : nouveau lead → qualifié → visite planifiée
                        → offre → négociation → signature.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Résultat :</strong> vous savez exactement combien de deals sont en cours et à quelle étape.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        Planifier et tracer les visites
                      </h4>
                      <p className="mb-3 text-slate-700">
                        Chaque visite est enregistrée : qui, quoi, quand, retour du prospect.
                        L'agent note le feedback immédiatement après la visite.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Résultat :</strong> historique complet, relances ciblées, pas de visites oubliées.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <Zap className="h-5 w-5 text-blue-600" />
                        Automatiser les relances
                      </h4>
                      <p className="mb-3 text-slate-700">
                        Le système rappelle automatiquement à l'agent de relancer un prospect après X jours,
                        ou après une visite sans retour.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Résultat :</strong> taux de transformation multiplié par 2 ou 3.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <FileText className="h-5 w-5 text-blue-600" />
                        Garder l'historique complet
                      </h4>
                      <p className="mb-3 text-slate-700">
                        Tous les échanges, visites, offres, documents sont attachés au prospect.
                        Si un agent part, l'information reste.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Résultat :</strong> continuité commerciale garantie.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Exemple de pipeline CRM immobilier
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-6">
                    <div className="flex min-w-max gap-4">
                      <div className="flex-1 rounded-lg border-2 border-slate-300 bg-slate-50 p-4">
                        <div className="mb-2 text-center font-semibold text-slate-900">Nouveau lead</div>
                        <div className="text-center text-2xl font-bold text-slate-600">12</div>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="h-6 w-6 text-slate-400" />
                      </div>
                      <div className="flex-1 rounded-lg border-2 border-blue-300 bg-blue-50 p-4">
                        <div className="mb-2 text-center font-semibold text-slate-900">Qualifié</div>
                        <div className="text-center text-2xl font-bold text-blue-600">8</div>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="h-6 w-6 text-slate-400" />
                      </div>
                      <div className="flex-1 rounded-lg border-2 border-purple-300 bg-purple-50 p-4">
                        <div className="mb-2 text-center font-semibold text-slate-900">Visite planifiée</div>
                        <div className="text-center text-2xl font-bold text-purple-600">5</div>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="h-6 w-6 text-slate-400" />
                      </div>
                      <div className="flex-1 rounded-lg border-2 border-orange-300 bg-orange-50 p-4">
                        <div className="mb-2 text-center font-semibold text-slate-900">Négociation</div>
                        <div className="text-center text-2xl font-bold text-orange-600">3</div>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="h-6 w-6 text-slate-400" />
                      </div>
                      <div className="flex-1 rounded-lg border-2 border-green-300 bg-green-50 p-4">
                        <div className="mb-2 text-center font-semibold text-slate-900">Signature</div>
                        <div className="text-center text-2xl font-bold text-green-600">1</div>
                      </div>
                    </div>
                    <p className="mt-4 text-center text-sm text-slate-600">
                      Vision instantanée de votre activité commerciale
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  ImmoTopia : CRM immobilier complet
                </h3>
                <p className="mb-6 text-blue-50">
                  Pipeline visuel, relances automatiques, historique complet, suivi des visites,
                  matching automatique prospects/biens. Conçu pour l'immobilier ivoirien.
                </p>
                <Link
                  href="/crm-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
                >
                  Découvrir le CRM ImmoTopia
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process de visite → contrat */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Process de visite → contrat : industrialiser la vente
                </h2>
                <p className="text-lg text-slate-600">
                  Un process clair = plus de conversions, moins de pertes
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-xl border-l-4 border-blue-500 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Lead entrant</h3>
                    <p className="mb-3 text-slate-700">
                      Appel, email, formulaire web, visite physique. Le prospect est enregistré immédiatement
                      dans le CRM avec toutes les infos disponibles.
                    </p>
                    <p className="text-sm font-semibold text-blue-900">
                      ⏱️ Délai max : 5 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border-l-4 border-purple-500 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg font-bold text-purple-600">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Qualification</h3>
                    <p className="mb-3 text-slate-700">
                      L'agent appelle le prospect pour comprendre : type de bien recherché, budget, zone,
                      délai, financement. Questions clés posées systématiquement.
                    </p>
                    <p className="text-sm font-semibold text-purple-900">
                      ⏱️ Délai max : 24h après le lead
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-orange-600">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Proposition & visite</h3>
                    <p className="mb-3 text-slate-700">
                      L'agent propose 2-3 biens correspondants. Visite planifiée dans le CRM avec date, heure,
                      bien(s), agent. Confirmation envoyée au prospect.
                    </p>
                    <p className="text-sm font-semibold text-orange-900">
                      ⏱️ Délai max : 48h après qualification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border-l-4 border-green-500 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-600">
                    4
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Retour de visite</h3>
                    <p className="mb-3 text-slate-700">
                      Immédiatement après la visite, l'agent note le feedback dans le CRM : intéressé,
                      pas intéressé, veut réfléchir, veut faire une offre. Relance planifiée si besoin.
                    </p>
                    <p className="text-sm font-semibold text-green-900">
                      ⏱️ Délai max : le jour même
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border-l-4 border-teal-500 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-600">
                    5
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Constitution du dossier</h3>
                    <p className="mb-3 text-slate-700">
                      Si le prospect est intéressé : collecte des pièces (CNI, justificatifs revenus, etc.),
                      vérification, validation. Tous les documents centralisés dans le système.
                    </p>
                    <p className="text-sm font-semibold text-teal-900">
                      ⏱️ Délai max : 7 jours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border-l-4 border-indigo-500 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
                    6
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Signature du contrat</h3>
                    <p className="mb-3 text-slate-700">
                      Contrat de location ou compromis de vente signé. Encaissement des frais d'agence et
                      dépôt de garantie (si location). Tout enregistré dans le système.
                    </p>
                    <p className="text-sm font-semibold text-indigo-900">
                      🎉 Deal conclu !
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border-2 border-amber-200 bg-amber-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  🎯 Pourquoi ce process est critique
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>Traçabilité :</strong> chaque étape est documentée, rien ne se perd
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>Rapidité :</strong> les délais forcent l'action, pas de procrastination
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>Professionnalisme :</strong> le client sent qu'il est pris en charge
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>Pilotage :</strong> vous savez combien de prospects sont à chaque étape
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gestion locative pour les agences */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Gestion locative pour les agences : revenus récurrents
                </h2>
                <p className="text-lg text-slate-600">
                  La location bien gérée = trésorerie prévisible et clients fidèles
                </p>
              </div>

              <div className="mb-10 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  Pourquoi la gestion locative est stratégique
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>
                      <strong>Revenus récurrents :</strong> commissions mensuelles prévisibles
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>
                      <strong>Fidélisation :</strong> propriétaires satisfaits = nouveaux mandats
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>
                      <strong>Différenciation :</strong> service complet = valeur ajoutée perçue
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Suivi des loyers au FCFA près
                  </h3>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="mb-4 text-slate-700">
                      Chaque bien loué doit être suivi avec :
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <DollarSign className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Loyer mensuel</p>
                          <p className="text-sm text-slate-600">Montant, date d'échéance, charges incluses ou non</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Échéancier automatique</p>
                          <p className="text-sm text-slate-600">Génération automatique des loyers à venir</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Statut de paiement</p>
                          <p className="text-sm text-slate-600">Payé, en attente, en retard, impayé</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Historique complet</p>
                          <p className="text-sm text-slate-600">Tous les paiements depuis le début du bail</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Quittances automatiques
                  </h3>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="mb-4 text-slate-700">
                      Fini les quittances Word à remplir manuellement. Le système génère automatiquement :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-700">
                          Quittance de loyer au format PDF professionnel
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-700">
                          Envoi automatique par email au locataire
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-700">
                          Archivage automatique dans le dossier du bien
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Détection et gestion des impayés
                  </h3>
                  <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                    <p className="mb-4 text-slate-700">
                      <strong>Règle d'or :</strong> un impayé détecté tard = un impayé difficile à récupérer.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-white p-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                          J+3
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Alerte automatique</p>
                          <p className="text-sm text-slate-600">
                            Le système alerte le gestionnaire 3 jours après l'échéance
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-white p-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                          J+7
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Relance locataire</p>
                          <p className="text-sm text-slate-600">
                            Appel + SMS/email de relance amiable
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-white p-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                          J+15
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Escalade</p>
                          <p className="text-sm text-slate-600">
                            Information propriétaire + mise en demeure si nécessaire
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Paiements Mobile Money intégrés
                  </h3>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="mb-4 text-slate-700">
                      En Côte d'Ivoire, le Mobile Money est incontournable. ImmoTopia intègre :
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-center">
                        <div className="mb-2 text-2xl font-bold text-orange-600">Orange Money</div>
                        <p className="text-sm text-slate-600">Paiement direct</p>
                      </div>
                      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-center">
                        <div className="mb-2 text-2xl font-bold text-yellow-600">MTN Mobile Money</div>
                        <p className="text-sm text-slate-600">Paiement direct</p>
                      </div>
                      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center">
                        <div className="mb-2 text-2xl font-bold text-blue-600">Moov Money</div>
                        <p className="text-sm text-slate-600">Paiement direct</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-600">
                      <strong>Avantage :</strong> encaissement instantané, traçabilité automatique,
                      réconciliation simplifiée.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Reporting propriétaires
                  </h3>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="mb-4 text-slate-700">
                      Un propriétaire satisfait = un client fidèle. Le système doit générer automatiquement :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">
                          <strong>Relevé mensuel :</strong> loyers encaissés, charges, commission agence,
                          net à reverser
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">
                          <strong>Alertes impayés :</strong> notification automatique en cas de retard
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">
                          <strong>Bilan annuel :</strong> synthèse de l'année pour déclaration fiscale
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  ImmoTopia : gestion locative complète
                </h3>
                <p className="mb-6 text-blue-50">
                  Suivi loyers, quittances auto, Mobile Money intégré, alertes impayés, reporting propriétaires.
                  Tout pour gérer votre parc locatif sereinement.
                </p>
                <Link
                  href="/gestion-locative-cote-divoire"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
                >
                  Découvrir la gestion locative
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Piloter les chiffres */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Piloter les chiffres : le reporting dirigeant
                </h2>
                <p className="text-lg text-slate-600">
                  On ne pilote que ce qu'on mesure
                </p>
              </div>

              <div className="mb-10 rounded-xl border-2 border-red-200 bg-red-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  ❌ Sans reporting : pilotage à l'aveugle
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Impossible de savoir si l'activité est en hausse ou en baisse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Impossible d'identifier les agents performants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Impossible de détecter les problèmes avant qu'ils deviennent critiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Décisions basées sur des impressions, pas sur des faits</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Les indicateurs clés à suivre
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <BarChart3 className="h-6 w-6 text-blue-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Activité commerciale</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Nombre de leads entrants (par source)</li>
                        <li>• Nombre de visites réalisées</li>
                        <li>• Nombre de dossiers en cours</li>
                        <li>• Nombre de signatures</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Taux de transformation</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Lead → Visite : X%</li>
                        <li>• Visite → Dossier : X%</li>
                        <li>• Dossier → Signature : X%</li>
                        <li>• Lead → Signature : X%</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <DollarSign className="h-6 w-6 text-green-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Chiffre d'affaires</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• CA ventes (commissions)</li>
                        <li>• CA location (frais d'agence)</li>
                        <li>• CA gestion locative (mensuel)</li>
                        <li>• CA total</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <Users className="h-6 w-6 text-purple-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Performance agents</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Visites par agent</li>
                        <li>• Signatures par agent</li>
                        <li>• CA par agent</li>
                        <li>• Taux de transformation par agent</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <Building2 className="h-6 w-6 text-orange-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Stock de biens</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Nombre de biens actifs</li>
                        <li>• Délai moyen de vente/location</li>
                        <li>• Biens en négociation</li>
                        <li>• Biens vendus/loués ce mois</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Gestion locative</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Loyers encaissés ce mois</li>
                        <li>• Loyers en attente</li>
                        <li>• Impayés (montant + nombre)</li>
                        <li>• Taux d'encaissement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Fréquence de suivi recommandée
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                        <span className="text-sm font-bold text-blue-600">JOUR</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Quotidien</p>
                        <p className="text-sm text-slate-600">
                          Nouveaux leads, visites du jour, encaissements, impayés critiques
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                        <span className="text-sm font-bold text-green-600">SEM</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Hebdomadaire</p>
                        <p className="text-sm text-slate-600">
                          Pipeline commercial, activité agents, taux de transformation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                        <span className="text-sm font-bold text-purple-600">MOIS</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Mensuel</p>
                        <p className="text-sm text-slate-600">
                          CA total, performance agents, stock de biens, loyers encaissés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  ImmoTopia : tableaux de bord en temps réel
                </h3>
                <p className="mb-6 text-blue-50">
                  Tous vos indicateurs clés sur un seul écran. Activité, CA, agents, loyers, impayés.
                  Mise à jour automatique. Décisions éclairées.
                </p>
                <Link
                  href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
                >
                  Découvrir les tableaux de bord
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist mensuelle dirigeant */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
                  <ClipboardCheck className="h-4 w-4" />
                  À imprimer et afficher
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Checklist mensuelle du dirigeant d'agence
                </h2>
                <p className="text-lg text-slate-600">
                  Les 18 points de contrôle pour piloter votre agence
                </p>
              </div>

              <div className="rounded-xl border-2 border-slate-300 bg-white p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Vérifier le CA du mois (ventes + location + gestion)
                      </p>
                      <p className="text-sm text-slate-600">Comparer avec objectif et mois précédent</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Analyser le pipeline commercial (nombre de deals par étape)
                      </p>
                      <p className="text-sm text-slate-600">Identifier les blocages éventuels</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Vérifier le taux de transformation global (lead → signature)
                      </p>
                      <p className="text-sm text-slate-600">Objectif : minimum 10-15%</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Analyser la performance de chaque agent (visites, signatures, CA)
                      </p>
                      <p className="text-sm text-slate-600">Identifier les top performers et ceux à accompagner</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      5
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Vérifier le stock de biens actifs (nombre, qualité, ancienneté)
                      </p>
                      <p className="text-sm text-slate-600">Retirer les biens obsolètes, relancer les propriétaires</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      6
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Contrôler le taux d'encaissement des loyers
                      </p>
                      <p className="text-sm text-slate-600">Objectif : minimum 95%</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      7
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Lister les impayés et décider des actions (relance, mise en demeure)
                      </p>
                      <p className="text-sm text-slate-600">Ne jamais laisser un impayé dépasser 30 jours</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      8
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Vérifier que tous les biens loués ont un contrat signé et à jour
                      </p>
                      <p className="text-sm text-slate-600">Sécurité juridique = priorité</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      9
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Envoyer les relevés mensuels aux propriétaires
                      </p>
                      <p className="text-sm text-slate-600">Transparence = fidélisation</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      10
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Analyser les sources de leads (site web, réseaux sociaux, bouche-à-oreille)
                      </p>
                      <p className="text-sm text-slate-600">Investir sur ce qui marche</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      11
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Vérifier que le CRM est à jour (pas de prospects orphelins)
                      </p>
                      <p className="text-sm text-slate-600">Discipline = performance</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      12
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Planifier les objectifs du mois suivant (CA, visites, signatures)
                      </p>
                      <p className="text-sm text-slate-600">Communiquer les objectifs à l'équipe</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      13
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Organiser une réunion d'équipe (bilan + objectifs + motivation)
                      </p>
                      <p className="text-sm text-slate-600">Cohésion = performance collective</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      14
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Vérifier la trésorerie (encaissements vs décaissements)
                      </p>
                      <p className="text-sm text-slate-600">Anticiper les besoins de trésorerie</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      15
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Identifier les biens qui ne se vendent/louent pas et ajuster (prix, photos, description)
                      </p>
                      <p className="text-sm text-slate-600">Réactivité = efficacité</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      16
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Vérifier que toutes les quittances du mois ont été envoyées
                      </p>
                      <p className="text-sm text-slate-600">Professionnalisme perçu</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      17
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Planifier les actions marketing du mois suivant (posts, annonces, événements)
                      </p>
                      <p className="text-sm text-slate-600">Visibilité = leads</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      18
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Prendre du recul : qu'est-ce qui a bien marché ? Qu'est-ce qui doit être amélioré ?
                      </p>
                      <p className="text-sm text-slate-600">Amélioration continue</p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-blue-50 p-4">
                  <p className="text-center text-sm font-semibold text-blue-900">
                    💡 Conseil : bloquez 2-3 heures en début de mois pour cette revue complète
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist quotidienne agent */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-900">
                  <CheckCircle2 className="h-4 w-4" />
                  Routine quotidienne
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Checklist quotidienne de l'agent commercial
                </h2>
                <p className="text-lg text-slate-600">
                  Les 12 actions terrain pour maximiser les résultats
                </p>
              </div>

              <div className="rounded-xl border-2 border-slate-300 bg-white p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Consulter le CRM : nouveaux leads, relances du jour, visites planifiées
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Rappeler tous les nouveaux leads de la veille (délai max 24h)
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Effectuer les relances programmées (prospects sans retour depuis X jours)
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Confirmer les visites du jour (appel ou SMS au prospect)
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      5
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Préparer les visites : vérifier les clés, imprimer les fiches biens, charger téléphone
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      6
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Réaliser les visites planifiées (ponctualité = professionnalisme)
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      7
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Noter le retour de chaque visite dans le CRM immédiatement après
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      8
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Planifier les prochaines actions pour chaque prospect (relance, nouvelle visite, dossier)
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      9
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Mettre à jour les statuts des biens si nécessaire (en négociation, vendu, etc.)
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      10
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Enregistrer tout nouveau bien reçu dans le système (photos, infos, mandat)
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      11
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Faire un point rapide avec le responsable (blocages, opportunités, besoins)
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                      12
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Planifier le lendemain : visites, relances, prospection terrain
                      </p>
                    </div>
                    <div className="h-6 w-6 rounded border-2 border-slate-300"></div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-green-50 p-4">
                  <p className="text-center text-sm font-semibold text-green-900">
                    💡 Conseil : commencer la journée par le CRM, finir la journée par la mise à jour du CRM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi un ERP immobilier est indispensable */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Pourquoi un ERP immobilier est indispensable
                </h2>
                <p className="text-lg text-slate-600">
                  La différence entre survivre et prospérer
                </p>
              </div>

              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                  Comparatif : Excel / outils dispersés vs ERP immobilier
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl border border-slate-200 bg-white">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 p-4 text-left font-semibold text-slate-900">
                          Critère
                        </th>
                        <th className="border border-slate-200 p-4 text-left font-semibold text-red-900">
                          Excel + WhatsApp + Cahiers
                        </th>
                        <th className="border border-slate-200 p-4 text-left font-semibold text-green-900">
                          ERP immobilier (ImmoTopia)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 p-4 font-medium text-slate-900">
                          Centralisation
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ❌ Informations dispersées, doublons, pertes
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ✅ Tout centralisé, une seule source de vérité
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-4 font-medium text-slate-900">
                          Traçabilité
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ❌ Impossible de savoir qui a fait quoi et quand
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ✅ Historique complet de chaque action
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-4 font-medium text-slate-900">
                          Collaboration
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ❌ Conflits, doublons, informations non partagées
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ✅ Équipe synchronisée en temps réel
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-4 font-medium text-slate-900">
                          Automatisation
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ❌ Tout manuel, chronophage, erreurs
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ✅ Relances, quittances, alertes automatiques
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-4 font-medium text-slate-900">
                          Reporting
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ❌ Inexistant ou fait manuellement (heures perdues)
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ✅ Tableaux de bord en temps réel
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-4 font-medium text-slate-900">
                          Professionnalisme
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ❌ Image amateur, clients peu confiants
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ✅ Image moderne, clients rassurés
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-4 font-medium text-slate-900">
                          Scalabilité
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ❌ Chaos dès 3-4 agents
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ✅ Grandit avec l'agence sans limite
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-4 font-medium text-slate-900">
                          Sécurité
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ❌ Risque de perte (ordinateur, téléphone)
                        </td>
                        <td className="border border-slate-200 p-4 text-sm text-slate-700">
                          ✅ Données sauvegardées, accessibles partout
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-10 rounded-xl border-2 border-red-200 bg-red-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  ⚠️ Les risques à rester manuel
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>
                      <strong>Perte de chiffre d'affaires :</strong> leads perdus, relances oubliées,
                      visites non tracées = argent qui part en fumée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>
                      <strong>Impossibilité de grandir :</strong> au-delà de 2-3 agents, le chaos s'installe
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>
                      <strong>Dépendance aux personnes :</strong> si un agent part, l'information part avec lui
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>
                      <strong>Temps perdu :</strong> heures passées à chercher des infos, refaire des documents,
                      relancer manuellement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>
                      <strong>Image dégradée :</strong> clients qui voient que vous n'êtes pas structuré =
                      perte de confiance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border-2 border-green-200 bg-green-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  ✅ Les gains à structurer avec un ERP
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>+30% de CA :</strong> grâce aux relances automatiques et au suivi rigoureux
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>-50% de temps administratif :</strong> automatisation des tâches répétitives
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>Croissance sereine :</strong> passer de 2 à 10 agents sans chaos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>Pilotage éclairé :</strong> décisions basées sur des chiffres réels
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>
                      <strong>Professionnalisme perçu :</strong> clients et propriétaires rassurés
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ImmoTopia couvre tout le cycle */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-16 text-white sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                  Comment ImmoTopia couvre tout le cycle de l'agence
                </h2>
                <p className="text-xl text-blue-100">
                  Un seul système pour gérer toute votre activité immobilière
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <Users className="h-7 w-7 text-blue-200" />
                    <h3 className="text-xl font-bold">CRM immobilier complet</h3>
                  </div>
                  <p className="mb-3 text-blue-50">
                    Tous vos prospects centralisés, pipeline visuel, relances automatiques, historique complet,
                    matching automatique prospects/biens.
                  </p>
                  <Link
                    href="/crm-immobilier-cote-divoire"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <Building2 className="h-7 w-7 text-blue-200" />
                    <h3 className="text-xl font-bold">Gestion des biens & annonces</h3>
                  </div>
                  <p className="mb-3 text-blue-50">
                    Base centralisée de tous vos biens (vente + location), diffusion web automatique,
                    statuts en temps réel, historique complet.
                  </p>
                  <Link
                    href="/logiciel-immobilier-cote-divoire"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <FileText className="h-7 w-7 text-blue-200" />
                    <h3 className="text-xl font-bold">Gestion locative intégrée</h3>
                  </div>
                  <p className="mb-3 text-blue-50">
                    Suivi loyers, quittances automatiques, alertes impayés, états des lieux,
                    reporting propriétaires. Tout pour gérer votre parc locatif.
                  </p>
                  <Link
                    href="/gestion-locative-cote-divoire"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <DollarSign className="h-7 w-7 text-blue-200" />
                    <h3 className="text-xl font-bold">Paiements Mobile Money</h3>
                  </div>
                  <p className="mb-3 text-blue-50">
                    Intégration Orange Money, MTN Mobile Money, Moov Money. Encaissement instantané,
                    traçabilité automatique, réconciliation simplifiée.
                  </p>
                  <Link
                    href="/paiement-loyer-charges-mobile-money-cote-divoire"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <BarChart3 className="h-7 w-7 text-blue-200" />
                    <h3 className="text-xl font-bold">Reporting & tableaux de bord</h3>
                  </div>
                  <p className="mb-3 text-blue-50">
                    Tous vos indicateurs clés en temps réel : activité, CA, agents, loyers, impayés.
                    Pilotage éclairé, décisions rapides.
                  </p>
                  <Link
                    href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-white p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  Prêt à structurer votre agence ?
                </h3>
                <p className="mb-6 text-lg text-slate-600">
                  Demandez une démo personnalisée et découvrez comment ImmoTopia peut transformer votre agence.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact?demo=true"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 sm:w-auto"
                  >
                    Demander une démo gratuite
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/pour-qui/agences-immobilieres"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 sm:w-auto"
                  >
                    Voir la solution pour agences
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Questions fréquentes
                </h2>
                <p className="text-lg text-slate-600">
                  Tout ce que vous devez savoir sur la gestion d'agence avec ImmoTopia
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    Combien d'agents faut-il pour utiliser un ERP immobilier ?
                  </h3>
                  <p className="text-slate-700">
                    Un ERP immobilier comme ImmoTopia est utile <strong>dès 1 agent</strong>. Même une petite agence
                    gagne en professionnalisme, traçabilité et efficacité. Plus l'équipe grandit, plus l'ERP devient
                    indispensable pour coordonner l'activité.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    Est-ce adapté aux petites agences immobilières ?
                  </h3>
                  <p className="text-slate-700">
                    Oui, totalement. ImmoTopia propose des formules adaptées aux petites structures. L'objectif est
                    de <strong>structurer dès le départ</strong> pour éviter le chaos lors de la croissance.
                    Mieux vaut commencer petit avec un bon système que grandir avec un mauvais.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    Peut-on gérer vente et location dans le même outil ?
                  </h3>
                  <p className="text-slate-700">
                    Oui. ImmoTopia couvre les deux activités : gestion des biens à vendre, CRM prospects acheteurs,
                    suivi locatif, encaissement loyers, quittances, reporting propriétaires.
                    <strong>Tout dans un seul système</strong>, pas besoin de jongler entre plusieurs outils.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    Peut-on suivre les performances de chaque agent ?
                  </h3>
                  <p className="text-slate-700">
                    Oui. ImmoTopia permet de suivre l'activité de chaque agent : nombre de visites, taux de transformation,
                    chiffre d'affaires généré, loyers encaissés. Idéal pour <strong>piloter et motiver les équipes</strong>,
                    identifier les top performers et accompagner ceux qui ont besoin de soutien.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    Le paiement Mobile Money est-il obligatoire ?
                  </h3>
                  <p className="text-slate-700">
                    Non, mais c'est un <strong>atout majeur en Côte d'Ivoire</strong>. ImmoTopia intègre Orange Money,
                    MTN Mobile Money et Moov Money pour faciliter l'encaissement des loyers et charges. Vous pouvez aussi
                    gérer les paiements classiques (espèces, chèques, virements).
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    Peut-on démarrer progressivement avec ImmoTopia ?
                  </h3>
                  <p className="text-slate-700">
                    Oui. Vous pouvez commencer par le CRM et les annonces, puis activer la gestion locative,
                    les paiements Mobile Money et le reporting au fur et à mesure.
                    <strong>L'adoption se fait à votre rythme</strong>, sans obligation de tout activer d'un coup.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    Comment migrer depuis Excel ou un autre système ?
                  </h3>
                  <p className="text-slate-700">
                    ImmoTopia propose un <strong>accompagnement à la migration</strong> : import de vos biens, clients,
                    contrats de location. L'équipe vous guide pour une transition en douceur sans perte de données.
                    La plupart des agences sont opérationnelles en moins d'une semaine.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    ImmoTopia est-il adapté au marché ivoirien ?
                  </h3>
                  <p className="text-slate-700">
                    Oui, totalement. ImmoTopia est <strong>conçu pour la Côte d'Ivoire</strong> : paiements Mobile Money,
                    gestion en FCFA, process locaux (quittances, mandats, visites), support en français et accompagnement
                    terrain. Pas d'adaptation nécessaire, tout est prêt à l'emploi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-white sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Prêt à transformer votre agence immobilière ?
              </h2>
              <p className="mb-8 text-xl text-slate-300">
                Rejoignez les agences qui ont choisi de structurer leur croissance avec ImmoTopia
              </p>

              <div className="mb-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-2 text-4xl font-bold text-blue-400">+30%</div>
                  <p className="text-sm text-slate-300">de chiffre d'affaires en moyenne</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-2 text-4xl font-bold text-green-400">-50%</div>
                  <p className="text-sm text-slate-300">de temps administratif</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-2 text-4xl font-bold text-purple-400">100%</div>
                  <p className="text-sm text-slate-300">de traçabilité et pilotage</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact?demo=true"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:bg-blue-700 hover:shadow-2xl sm:w-auto"
                >
                  Demander une démo gratuite
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
                >
                  Voir les tarifs
                </Link>
                <Link
                  href="/pour-qui/agences-immobilieres"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
                >
                  Solution pour agences
                </Link>
              </div>

              <div className="mt-12 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <p className="mb-2 text-sm font-semibold text-blue-300">💡 Conseil final</p>
                <p className="text-slate-300">
                  La meilleure agence n'est pas celle qui a le plus de biens, mais celle qui les gère le mieux.
                  Structurez maintenant, grandissez sereinement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}