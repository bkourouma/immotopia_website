import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Calendar,
  Target,
  Home,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  FileText,
  BarChart3,
  AlertCircle,
  MessageSquare,
  Search,
  Clock,
  Link2,
  Briefcase,
  Handshake,
  Smartphone,
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "CRM immobilier en Côte d'Ivoire | Module ERP ImmoTopia",
    description:
      "CRM immobilier en Côte d'Ivoire : prospects, visites, pipeline, matching client ↔ biens et suivi des interactions, intégré à l'ERP ImmoTopia.",
    canonicalUrl: '/crm-immobilier-cote-divoire',
    keywords: [
      'CRM immobilier Côte d\'Ivoire',
      'logiciel CRM agence immobilière',
      'gestion prospects immobilier Abidjan',
      'suivi visites immobilières',
      'pipeline vente location immobilier',
      'matching clients biens',
      'CRM agence immobilière Côte d\'Ivoire',
      'logiciel commercial immobilier',
      'gestion contacts immobilier',
      'suivi affaires immobilier',
    ],
  },
  '/crm-immobilier-cote-divoire'
);

const faqItems = [
  {
    question: "Le CRM est-il adapté aux petites agences immobilières ?",
    answer:
      "Absolument. Le CRM ImmoTopia est conçu pour s'adapter à tous les types d'agences, des plus petites aux plus grandes. Même pour un agent commercial indépendant, le CRM permet de centraliser ses prospects, de suivre ses visites et de ne jamais oublier une relance. L'interface est intuitive et les fonctionnalités essentielles sont accessibles rapidement, sans formation complexe.",
  },
  {
    question: "Peut-on gérer plusieurs commerciaux dans le CRM ?",
    answer:
      "Oui, ImmoTopia est multi-utilisateurs avec gestion des rôles et permissions. Vous pouvez créer plusieurs comptes commerciaux, chacun avec son propre accès. Le CRM permet de suivre les performances individuelles (nombre de visites, taux de conversion, pipeline par commercial) tout en conservant une vue d'ensemble consolidée pour le directeur d'agence. Les données sont partagées de manière sécurisée selon les permissions.",
  },
  {
    question: "Peut-on suivre les visites et relances dans le CRM ?",
    answer:
      "Oui, le suivi des visites est une fonctionnalité clé du CRM ImmoTopia. Vous pouvez planifier des visites, enregistrer des comptes rendus détaillés (impressions du client, points positifs/négatifs, prochaines étapes), et programmer des relances automatiques. Le système vous alerte avant chaque visite et après chaque visite pour ne jamais oublier de faire le suivi. Toute l'historique des visites est conservée pour chaque prospect.",
  },
  {
    question: "Le matching client ↔ biens est-il automatique ?",
    answer:
      "Oui, le CRM ImmoTopia propose un système de matching automatique. Lorsque vous enregistrez les critères de recherche d'un prospect (type de bien, budget, localisation, nombre de pièces, etc.), le système compare automatiquement ces critères avec votre base de biens disponibles et vous propose les meilleures correspondances. Vous pouvez également déclencher manuellement une recherche de matching à tout moment. Cela permet de proposer rapidement les biens les plus pertinents à chaque prospect.",
  },
  {
    question: "Peut-on segmenter propriétaires, locataires et acquéreurs ?",
    answer:
      "Oui, le CRM ImmoTopia permet de segmenter vos contacts selon leur profil : propriétaires bailleurs, locataires, acquéreurs, ou même prospects multi-profils. Chaque contact peut être étiqueté et filtré selon ces catégories. Vous pouvez créer des listes personnalisées (par exemple, 'Acquéreurs budget 50-100M', 'Locataires Cocody', 'Propriétaires bailleurs actifs') pour cibler vos actions commerciales et vos communications.",
  },
  {
    question: "Peut-on activer seulement le module CRM ?",
    answer:
      "ImmoTopia est un ERP modulaire. Vous pouvez activer principalement le module CRM si c'est votre besoin prioritaire. Cependant, l'intégration avec les autres modules (gestion des biens, gestion locative, annonces) apporte une valeur ajoutée considérable. Par exemple, lorsque vous créez une annonce depuis le module Biens, elle est automatiquement visible dans le CRM pour être proposée aux prospects correspondants. Nous recommandons d'utiliser l'ERP complet pour maximiser l'efficacité commerciale.",
  },
  {
    question: "Les données sont-elles sécurisées ?",
    answer:
      "Oui, la sécurité est une priorité. ImmoTopia utilise un hébergement sécurisé avec chiffrement SSL, sauvegardes automatiques quotidiennes, et respect des normes de protection des données. Chaque utilisateur a un accès sécurisé avec authentification, et les permissions sont granulaires (vous pouvez définir qui peut voir quelles données). Les données de vos prospects et clients sont protégées et ne sont jamais partagées avec des tiers.",
  },
  {
    question: "Comment migrer depuis Excel ou un autre outil ?",
    answer:
      "Nous proposons un accompagnement pour l'import de vos données depuis Excel, CSV ou d'autres formats. Vous pouvez importer vos contacts, leurs critères de recherche, l'historique des visites et des interactions. Notre équipe peut vous aider à structurer vos données et à les migrer pour une transition en douceur. L'import peut être fait progressivement, sans interruption de votre activité.",
  },
];

export default function CRMImmobilierCoteIvoirePage() {
  const faqSchema = generateFAQSchema({ 
    questions: faqItems.map(item => ({
      question: item.question,
      answer: item.answer,
    }))
  });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              {/* Badge ERP */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Building2 className="h-4 w-4" />
                Module de l'ERP ImmoTopia
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                CRM immobilier en Côte d'Ivoire : prospects, visites et ventes centralisés
              </h1>
              
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Un CRM immobilier intégré à un ERP complet pour transformer votre efficacité commerciale
              </p>
              
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
                Le CRM ImmoTopia n'est pas un outil isolé : il s'intègre naturellement dans un{' '}
                <Link href="/logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  ERP immobilier complet
                </Link>
                {' '}qui centralise vos biens, vos annonces, votre{' '}
                <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  gestion locative
                </Link>
                , votre comptabilité et votre reporting. Découvrez{' '}
                <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
                  toutes les fonctionnalités
                </Link>
                {' '}et{' '}
                <Link href="/pour-qui/agences-immobilieres" className="font-semibold text-[#2563EB] hover:underline">
                  comment les agences immobilières utilisent notre CRM
                </Link>
                {' '}en Côte d'Ivoire.
              </p>

              {/* CTAs Hero */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                >
                  <Link href="/contact?demo=true" className="flex items-center font-bold">
                    Demander une démo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 bg-white text-blue-600 transition-all hover:scale-105 hover:bg-blue-50"
                >
                  <Link href="/logiciel-immobilier-cote-divoire" className="flex items-center font-semibold">
                    Découvrir l'ERP ImmoTopia
                    <Link2 className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Problèmes courants */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Les défis de la gestion commerciale immobilière en Côte d'Ivoire
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                À Abidjan et dans les grandes villes ivoiriennes, les agences immobilières et les commerciaux font face à des défis récurrents qui impactent leur productivité et leur taux de conversion. La gestion des prospects et des clients reste souvent dispersée et peu structurée.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Prospects dispersés</h3>
                  </div>
                  <p className="text-gray-700">
                    Les contacts sont éparpillés entre WhatsApp, appels téléphoniques, emails et tableaux Excel non synchronisés. Impossible d'avoir une vue d'ensemble de tous vos prospects et de leur historique d'interactions.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-amber-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Perte d'historique et relances oubliées</h3>
                  </div>
                  <p className="text-gray-700">
                    Sans système centralisé, l'historique des conversations, des visites et des promesses de relance se perd. Les relances sont oubliées, les opportunités commerciales s'évaporent et la relation client se dégrade.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Suivi des visites non structuré</h3>
                  </div>
                  <p className="text-gray-700">
                    Les visites sont planifiées dans des agendas séparés, les comptes rendus sont rédigés sur papier ou dans des fichiers Word éparpillés. Difficile de retrouver l'historique des visites et les impressions des clients.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Difficulté à mesurer la performance commerciale</h3>
                  </div>
                  <p className="text-gray-700">
                    Sans tableau de bord centralisé, il est impossible de savoir combien de prospects sont dans votre pipeline, quel est votre taux de conversion, quels sont les temps de réponse moyens, ou encore quels commerciaux performent le mieux.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6 md:col-span-2">
                  <div className="mb-3 flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Expérience client faible</h3>
                  </div>
                  <p className="text-gray-700">
                    Les réponses tardives, les relances oubliées et le manque de suivi personnalisé dégradent l'expérience client. Les prospects se tournent vers la concurrence, et votre réputation en pâtit.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Ces défis ne sont pas insurmontables. La solution réside dans l'adoption d'un CRM immobilier spécialisé, intégré à un ERP complet, qui centralise toutes vos interactions et automatise vos processus commerciaux.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: CRM Immobilier vs CRM Générique */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi l'immobilier a besoin d'un CRM spécialisé ?
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Un CRM générique (comme ceux utilisés pour la vente de produits ou services) ne répond pas aux spécificités du métier immobilier. L'immobilier a ses propres processus, ses propres objets (biens, mandats, visites) et ses propres enjeux (matching client ↔ biens, suivi de pipeline vente/location).
              </p>

              <div className="mb-8 grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    CRM générique (limites)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Ne gère pas les biens immobiliers et leurs caractéristiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Pas de matching automatique client ↔ biens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Gestion des visites non adaptée au contexte immobilier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Pas de distinction entre pipeline vente et location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Aucune intégration avec la gestion des biens et annonces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Pas de suivi des mandats et dossiers immobiliers</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-md">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    CRM immobilier ImmoTopia
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Gestion complète des biens avec critères de recherche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Matching automatique client ↔ biens selon les critères</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Gestion des visites avec comptes rendus structurés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Pipeline distinct pour vente et location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Intégration native avec biens, annonces et gestion locative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Suivi des mandats, dossiers et contrats</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Zap className="h-6 w-6 text-blue-600" />
                  L'avantage d'un CRM intégré au reste de l'ERP
                </h3>
                <p className="text-gray-700">
                  Le CRM ImmoTopia n'est pas isolé : il est connecté à la gestion des biens, aux annonces, à la gestion locative et à la comptabilité. Lorsqu'un prospect devient locataire, ses informations sont automatiquement synchronisées avec le module de gestion locative. Lorsqu'un bien est vendu, le statut est mis à jour dans le CRM et dans la gestion des biens. Cette intégration élimine la double saisie, réduit les erreurs et offre une vision unifiée de votre activité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Fonctionnalités clés */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Fonctionnalités clés du CRM immobilier ImmoTopia
            </h2>
            <p className="mb-10 text-lg text-gray-600">
              Le CRM ImmoTopia est conçu spécifiquement pour les professionnels de l'immobilier, avec des fonctionnalités qui répondent aux besoins réels du métier.
            </p>

            <div className="space-y-8">
              {/* Fonctionnalité 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Gestion prospects & clients</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Centralisez tous vos contacts : locataires, acquéreurs, propriétaires bailleurs. Chaque contact dispose d'une fiche complète avec coordonnées, historique des interactions, critères de recherche, et statut dans votre pipeline. Vous pouvez segmenter vos contacts selon leur profil (acquéreur, locataire, propriétaire) et créer des listes personnalisées pour cibler vos actions commerciales.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Bénéfice :</strong> Plus jamais de contact perdu, historique complet accessible en un clic, segmentation efficace pour des actions ciblées.
                </p>
              </div>

              {/* Fonctionnalité 2 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Suivi interactions : appels, emails, WhatsApp</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Enregistrez toutes vos interactions avec chaque contact : appels téléphoniques, emails échangés, conversations WhatsApp. Chaque interaction est datée, horodatée et peut inclure des notes détaillées. Le journal d'activité vous permet de retrouver instantanément l'historique complet de vos échanges avec un prospect ou un client. Vous pouvez également programmer des rappels pour ne jamais oublier une relance.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Bénéfice :</strong> Traçabilité complète, meilleure continuité du suivi commercial, pas de perte d'information même en cas de changement de commercial.
                </p>
              </div>

              {/* Fonctionnalité 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Gestion des visites : planification, comptes rendus, relances</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Planifiez vos visites directement depuis le CRM, avec rappels automatiques. Après chaque visite, enregistrez un compte rendu détaillé : impressions du client, points positifs et négatifs, niveau d'intérêt, prochaines étapes. Le système vous alerte automatiquement pour faire le suivi post-visite. Toute l'historique des visites est conservée pour chaque prospect, vous permettant de suivre l'évolution de son intérêt.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Bénéfice :</strong> Organisation optimale des visites, suivi structuré, relances jamais oubliées, meilleur taux de conversion.
                </p>
              </div>

              {/* Fonctionnalité 4 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                    <Target className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Pipeline / affaires : étapes, probabilités, prochaines actions</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Visualisez toutes vos affaires dans un pipeline structuré avec des étapes personnalisables (prospect, qualification, visite, offre, négociation, signature). Pour chaque affaire, définissez une probabilité de succès, un montant estimé, et les prochaines actions à réaliser. Le pipeline vous donne une vision claire de votre activité commerciale et vous permet d'identifier les opportunités à prioriser.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Bénéfice :</strong> Vision claire de votre activité, meilleure priorisation, suivi des performances commerciales, prévision de chiffre d'affaires.
                </p>
              </div>

              {/* Fonctionnalité 5 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <Search className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Matching automatique client ↔ biens</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Enregistrez les critères de recherche de chaque prospect (type de bien, budget, localisation, nombre de pièces, équipements, etc.). Le CRM compare automatiquement ces critères avec votre base de biens disponibles et vous propose les meilleures correspondances. Vous pouvez également déclencher manuellement une recherche de matching à tout moment. Cela permet de proposer rapidement les biens les plus pertinents à chaque prospect, améliorant votre taux de conversion.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Bénéfice :</strong> Gain de temps considérable, propositions plus pertinentes, meilleur taux de conversion, satisfaction client accrue.
                </p>
              </div>

              {/* Fonctionnalité 6 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Rappels & tâches : relances, suivi dossiers</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Programmez des rappels et des tâches pour ne jamais oublier une action importante : relancer un prospect, envoyer un document, planifier une visite, faire le suivi d'un dossier. Le système vous alerte à la date prévue, et vous pouvez suivre l'état d'avancement de chaque tâche. Les tâches peuvent être assignées à différents membres de l'équipe selon les permissions.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Bénéfice :</strong> Aucune action oubliée, meilleure organisation, suivi efficace des dossiers, professionnalisme renforcé.
                </p>
              </div>

              {/* Fonctionnalité 7 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <BarChart3 className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Reporting : performance équipe, taux de conversion, temps de réponse</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Accédez à des tableaux de bord et rapports détaillés sur votre activité commerciale : nombre de prospects par source, taux de conversion par étape du pipeline, temps moyen de réponse aux demandes, performance individuelle de chaque commercial, nombre de visites réalisées, affaires en cours et réalisées. Ces indicateurs vous permettent de piloter votre activité de manière data-driven et d'identifier les axes d'amélioration.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Bénéfice :</strong> Vision stratégique de la performance, aide à la décision, identification des points d'amélioration, motivation des équipes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Workflow immobilier */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Workflow immobilier : un exemple concret
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Voici comment le CRM ImmoTopia s'intègre dans votre processus commercial, de la première prise de contact jusqu'à la signature du contrat.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead → Qualification</h3>
                    <p>
                      Un prospect vous contacte via votre site web, par téléphone ou en agence. Il est automatiquement enregistré dans le CRM avec ses coordonnées. Vous qualifiez ses besoins : type de bien recherché (appartement, villa, local commercial), budget, localisation souhaitée, nombre de pièces, critères spécifiques. Toutes ces informations sont enregistrées dans sa fiche prospect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proposition biens → Matching automatique</h3>
                    <p>
                      Le CRM compare automatiquement les critères du prospect avec votre base de biens disponibles. Vous recevez une liste de biens correspondants, classés par pertinence. Vous pouvez proposer les meilleures correspondances au prospect, avec les annonces générées automatiquement depuis le module Biens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visite → Compte rendu</h3>
                    <p>
                      Vous planifiez une visite directement depuis le CRM, avec rappel automatique. Après la visite, vous enregistrez un compte rendu détaillé : impressions du client, points positifs et négatifs, niveau d'intérêt, prochaines étapes. Le système vous programme automatiquement une relance pour le suivi post-visite.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Offre → Négociation</h3>
                    <p>
                      Le prospect fait une offre. Vous enregistrez l'offre dans le pipeline, avec le montant, les conditions et la probabilité de succès. Vous suivez les négociations, les contre-propositions, et les échanges avec le propriétaire ou le vendeur. Toute l'historique est tracé dans le CRM.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Contrat → Signature</h3>
                    <p>
                      Une fois l'accord trouvé, le contrat est généré automatiquement depuis le module Gestion locative (pour une location) ou depuis le module Promotion (pour une vente). Le contrat est signé, et le statut du bien est automatiquement mis à jour dans le module Biens (passage de "disponible" à "loué" ou "vendu"). Le prospect devient client, et ses informations sont synchronisées avec les autres modules de l'ERP.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Zap className="h-6 w-6 text-blue-600" />
                  L'intégration au cœur du processus
                </h3>
                <p className="text-gray-700">
                  Tout au long de ce workflow, le CRM est connecté aux autres modules de l'ERP : les biens proposés viennent du module Biens & Annonces, les contrats sont générés depuis le module Gestion locative, et les paiements sont enregistrés dans le module Comptabilité. Cette intégration élimine la double saisie, garantit la cohérence des données et offre une vision unifiée de votre activité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Pour qui ? */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pour qui est conçu le CRM immobilier ImmoTopia ?
            </h2>
            
            <div className="space-y-8">
              {/* Agence immobilière */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Agence immobilière (directeur + équipe commerciale)</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Gérer une équipe commerciale avec des prospects dispersés entre plusieurs commerciaux, difficultés à suivre les performances individuelles, perte d'opportunités commerciales, absence de visibilité sur le pipeline global.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le CRM centralise tous les prospects et affaires de l'équipe, avec suivi des performances individuelles et collectives. Le directeur a une vision consolidée du pipeline, tandis que chaque commercial gère ses propres prospects avec autonomie. Les relances sont automatisées, et le matching client ↔ biens accélère les propositions.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Résultat :</p>
                    <p>Augmentation du taux de conversion, meilleure organisation de l'équipe, visibilité complète sur l'activité, réduction des pertes d'opportunités, meilleure répartition de la charge de travail.</p>
                  </div>
                </div>
              </div>

              {/* Agent commercial indépendant */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Agent commercial indépendant</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Gérer seul plusieurs prospects en parallèle, difficultés à suivre toutes les visites et relances, risque d'oublier des opportunités, manque de structure dans le suivi commercial.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le CRM devient votre assistant commercial personnel : centralisation de tous vos contacts, rappels automatiques pour les relances, suivi structuré des visites, matching automatique pour proposer rapidement les bons biens. Vous gagnez en professionnalisme et en efficacité.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Résultat :</p>
                    <p>Meilleure organisation, aucune opportunité oubliée, gain de temps sur la recherche de biens, professionnalisation de votre activité, augmentation de votre taux de conversion.</p>
                  </div>
                </div>
              </div>

              {/* Promoteur */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Promoteur (commercialisation lot par lot)</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Commercialiser un programme immobilier avec plusieurs lots, suivi manuel des réservations et ventes, difficultés à gérer les acomptes et échéanciers, absence de visibilité sur le taux de commercialisation.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le CRM s'intègre avec le module Promotion pour suivre chaque prospect intéressé par un lot. Vous pouvez gérer les réservations, les acomptes, les échéanciers et le suivi jusqu'à la signature. Le pipeline vous donne une vision claire de l'avancement de la commercialisation.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Résultat :</p>
                    <p>Meilleure organisation de la commercialisation, suivi structuré des réservations, visibilité en temps réel sur le taux de vente, réduction des erreurs de suivi, reporting professionnel pour les investisseurs.</p>
                  </div>
                </div>
              </div>

              {/* Gestionnaire locatif */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                    <Home className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Gestionnaire locatif (renouvellement, relocation)</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Gérer le renouvellement des contrats de location, trouver de nouveaux locataires pour les biens libérés, suivi manuel des prospects locataires, difficultés à gérer plusieurs dossiers en parallèle.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le CRM vous permet de suivre tous vos prospects locataires, de planifier les visites pour les biens libérés, et de gérer le renouvellement des contrats. L'intégration avec le module Gestion locative permet un suivi complet du cycle de vie du locataire, de la première visite jusqu'au renouvellement.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Résultat :</p>
                    <p>Réduction des périodes de vacance locative, meilleure gestion des renouvellements, suivi structuré des prospects, gain de temps sur la recherche de locataires, amélioration de la qualité des locataires sélectionnés.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Intégration ERP */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Intégration au sein de l'ERP ImmoTopia
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-8 text-lg leading-relaxed">
                Le CRM ImmoTopia n'est pas un outil isolé : il fait partie intégrante de l'ERP ImmoTopia, un système complet de gestion immobilière. Cette intégration crée une synergie qui multiplie l'efficacité de chaque module.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Home className="h-6 w-6 text-blue-600" />
                    Intégration avec Biens & Annonces
                  </h3>
                  <p>
                    Les biens enregistrés dans le module Biens sont automatiquement disponibles dans le CRM pour le matching client ↔ biens. Lorsque vous créez une annonce, elle est visible dans le CRM pour être proposée aux prospects correspondants. Inversement, lorsqu'un bien est vendu ou loué, son statut est mis à jour automatiquement dans le CRM, et les prospects intéressés peuvent être notifiés si d'autres biens similaires sont disponibles.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <FileText className="h-6 w-6 text-green-600" />
                    Intégration avec Gestion locative
                  </h3>
                  <p>
                    Lorsqu'un prospect locataire signe un contrat, ses informations sont automatiquement synchronisées avec le module Gestion locative. Le prospect devient locataire dans le CRM, et son historique commercial est conservé. Inversement, les informations des locataires (paiements, relances, renouvellements) sont visibles dans le CRM pour un suivi complet de la relation client.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                    Intégration avec Paiements
                  </h3>
                  <p>
                    Si le module Paiements est activé, les acomptes, frais d'agence et autres paiements liés aux transactions immobilières sont enregistrés dans le CRM et synchronisés avec la comptabilité. Cette intégration permet de suivre le statut financier de chaque affaire et de générer des rapports de performance commerciale incluant les revenus générés.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-amber-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <BarChart3 className="h-6 w-6 text-amber-600" />
                    Intégration avec Reporting
                  </h3>
                  <p>
                    Les données du CRM alimentent automatiquement les tableaux de bord et rapports de l'ERP. Vous pouvez analyser la performance commerciale (taux de conversion, temps de réponse, nombre de visites), la performance financière (revenus générés par commercial, par type de transaction), et la performance opérationnelle (taux d'occupation des biens, délais moyens de location/vente). Ces indicateurs vous permettent de piloter votre activité de manière data-driven.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border-2 border-blue-300 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Une seule base de données, pas de doublons
                </h3>
                <p className="mb-6 text-gray-700">
                  Toutes les informations sont centralisées dans une seule base de données. Un contact enregistré dans le CRM est le même contact que celui utilisé dans la gestion locative, la comptabilité et le reporting. Cette centralisation élimine les doublons, garantit la cohérence des données et offre une vision unifiée de votre activité. Un client qui est à la fois propriétaire bailleur et acquéreur voit toutes ses informations dans un seul espace.
                </p>
                <p className="mb-6 text-gray-700">
                  Pour découvrir l'ensemble des fonctionnalités de l'ERP ImmoTopia (CRM, gestion des biens, gestion locative, syndic, comptabilité, reporting), consultez notre page dédiée :
                </p>
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Découvrir l'ERP immobilier ImmoTopia complet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Comparatif Avant/Après */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Avant et après ImmoTopia : la transformation de votre gestion commerciale
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900 bg-red-50">Avant (WhatsApp/Excel)</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900 bg-green-50">Après (CRM ImmoTopia)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Gestion des prospects</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Contacts dispersés entre WhatsApp, appels, Excel, emails</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Tous les contacts centralisés dans le CRM avec historique complet</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Suivi des visites</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Planification manuelle, comptes rendus sur papier ou Word</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Planification dans le CRM, comptes rendus structurés, relances automatiques</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Matching client ↔ biens</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Recherche manuelle dans la base de biens, propositions peu ciblées</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Matching automatique selon critères, propositions pertinentes en quelques clics</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Relances</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Relances manuelles, risques d'oubli, pas de traçabilité</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Relances automatiques programmées, traçabilité complète, aucune oubli</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Pipeline et affaires</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Pas de vision d'ensemble, suivi manuel dans Excel</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Pipeline visuel structuré, suivi en temps réel, probabilités et montants</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Reporting</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Tableaux Excel à créer manuellement, données non à jour</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Tableaux de bord automatiques, indicateurs en temps réel, performance par commercial</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Taux de conversion</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Difficile à mesurer, perte d'opportunités par manque de suivi</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Taux de conversion mesuré et amélioré, meilleure conversion grâce au suivi structuré</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes sur le CRM immobilier ImmoTopia
            </h2>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-3 flex items-start gap-2 text-xl font-semibold text-gray-900">
                    <span className="text-blue-600 font-bold">Q{index + 1}.</span>
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Prêt à transformer votre gestion commerciale immobilière ?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Découvrez comment le CRM immobilier ImmoTopia, intégré à un ERP complet, peut centraliser vos prospects, automatiser vos relances et améliorer votre taux de conversion.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 shadow-xl transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
              >
                <Link href="/contact?demo=true" className="flex items-center font-bold">
                  Demander une démo gratuite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white transition-all hover:scale-105 hover:bg-white/10"
              >
                <Link href="/tarifs" className="font-semibold">
                  Voir les tarifs
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Liens internes stratégiques */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              Ressources complémentaires
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  ERP immobilier ImmoTopia complet
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Découvrez tous les modules de l'ERP ImmoTopia
                </p>
              </Link>
              
              <Link
                href="/fonctionnalites/crm-immobilier"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Fonctionnalités CRM immobilier
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Détails techniques du module CRM
                </p>
              </Link>
              
              <Link
                href="/fonctionnalites/biens-annonces"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Gestion des biens et annonces
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Intégration avec le CRM pour le matching
                </p>
              </Link>
              
              <Link
                href="/pour-qui/agences-immobilieres"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Pour les agences immobilières
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Solutions dédiées aux agences immobilières
                </p>
              </Link>
              
              <Link
                href="/gestion-locative-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Gestion locative Côte d'Ivoire
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Module complémentaire du CRM
                </p>
              </Link>
              
              <Link
                href="/tarifs"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Tarifs ImmoTopia
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Découvrez nos offres et tarifs
                </p>
              </Link>
              
              <Link
                href="/contact?demo=true"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Demander une démonstration
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Planifier une démo personnalisée
                </p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
