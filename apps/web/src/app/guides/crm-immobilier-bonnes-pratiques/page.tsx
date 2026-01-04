import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Target,
  Users,
  Calendar,
  TrendingUp,
  FileText,
  AlertCircle,
  BarChart3,
  Zap,
  Building2,
  Phone,
  Mail,
  Clock,
  XCircle,
  Database,
  Filter,
  Bell,
  MessageSquare,
  Settings,
  Award
} from 'lucide-react';
import { generateFAQSchema, generateArticleSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: "CRM immobilier : bonnes pratiques pour agences & promoteurs | ImmoTopia",
  description: "Comment utiliser un CRM immobilier efficacement : prospects, visites, pipeline, performance agents. Guide complet pour agences et promoteurs immobiliers.",
  canonical: "/guides/crm-immobilier-bonnes-pratiques",
  keywords: [
    'CRM immobilier',
    'gestion prospects immobilier',
    'pipeline immobilier',
    'suivi visites immobilier',
    'performance agents immobiliers',
    'CRM agence immobilière',
    'CRM promoteur immobilier',
    'logiciel CRM immobilier',
    'gestion relation client immobilier',
    'automatisation immobilier',
  ],
  openGraph: {
    title: "CRM immobilier : bonnes pratiques pour agences & promoteurs",
    description: "Comment utiliser un CRM immobilier efficacement : prospects, visites, pipeline, performance agents.",
  },
});

const faqItems = [
  {
    question: "Quelle est la différence entre un CRM générique et un CRM immobilier ?",
    answer:
      "Un CRM générique gère des contacts et opportunités de manière abstraite. Un CRM immobilier est conçu spécifiquement pour le métier : il gère des prospects avec leurs critères de recherche (budget, localisation, type de bien), organise des visites avec disponibilités agents, suit un pipeline immobilier (premier contact → visite → offre → compromis → acte), et intègre les biens disponibles pour un matching automatique. Il comprend les spécificités du secteur : mandats, visites, dossiers de financement, actes notariés.",
  },
  {
    question: "Comment qualifier efficacement un prospect immobilier ?",
    answer:
      "La qualification d'un prospect immobilier repose sur 5 critères essentiels : Budget (capacité d'achat ou loyer max), Localisation (quartiers/villes souhaités), Type de bien (appartement, villa, terrain, commerce), Délai (urgence du projet), et Financement (apport, crédit pré-approuvé). Un bon CRM immobilier capture ces informations dès le premier contact et les utilise pour matcher automatiquement les biens disponibles et prioriser les prospects chauds.",
  },
  {
    question: "Comment organiser efficacement les visites immobilières ?",
    answer:
      "Un système de gestion des visites efficace doit : permettre la prise de RDV en ligne avec disponibilités agents en temps réel, envoyer des confirmations et rappels automatiques (SMS/email), fournir aux agents un planning clair avec itinéraires optimisés, capturer les retours après visite (intéressé, pas intéressé, raisons), et relancer automatiquement les prospects intéressés. L'objectif est de maximiser le nombre de visites par agent tout en améliorant le taux de conversion.",
  },
  {
    question: "Qu'est-ce qu'un pipeline immobilier idéal ?",
    answer:
      "Un pipeline immobilier suit le parcours client typique : 1) Lead (premier contact), 2) Qualifié (critères capturés), 3) Visite planifiée, 4) Visite effectuée, 5) Intéressé (retour positif), 6) Offre/Proposition, 7) Négociation, 8) Compromis/Réservation, 9) Dossier financement, 10) Acte signé. Chaque étape a des actions spécifiques et des délais. Un bon CRM visualise ce pipeline, identifie les blocages, et automatise les relances pour éviter les pertes.",
  },
  {
    question: "Comment mesurer la performance des agents immobiliers ?",
    answer:
      "Les KPIs essentiels pour mesurer la performance d'un agent immobilier sont : Nombre de prospects traités, Taux de qualification (prospects qualifiés / total), Nombre de visites organisées, Taux de conversion visite → offre, Délai moyen de conversion, Nombre de transactions conclues, et Chiffre d'affaires généré. Un bon CRM immobilier calcule automatiquement ces indicateurs et permet de comparer les performances entre agents pour identifier les meilleures pratiques.",
  },
  {
    question: "Quelles sont les erreurs CRM les plus fréquentes en immobilier ?",
    answer:
      "Les erreurs les plus courantes sont : 1) Ne pas qualifier les prospects (perdre du temps sur des contacts non sérieux), 2) Oublier de relancer (80% des ventes nécessitent 5+ relances), 3) Manquer de traçabilité (qui a contacté qui, quand, pourquoi), 4) Ne pas suivre le pipeline (prospects bloqués sans action), 5) Ignorer les données (ne pas analyser les taux de conversion), 6) Utiliser plusieurs outils dispersés (Excel + WhatsApp + email = chaos). Un CRM immobilier centralisé et bien utilisé élimine ces problèmes.",
  },
  {
    question: "Pourquoi intégrer le CRM dans un ERP immobilier complet ?",
    answer:
      "Un CRM isolé ne voit que les prospects. Un CRM intégré dans un ERP immobilier a accès à tout : biens disponibles (pour matching automatique), mandats (pour savoir ce qu'on peut vendre), planning agents (pour organiser les visites), dossiers clients (pour le suivi post-vente), comptabilité (pour les commissions agents). Cette intégration élimine les doubles saisies, améliore la cohérence des données, et offre une vue 360° du client et de l'activité.",
  },
  {
    question: "Comment ImmoTopia peut-il améliorer ma gestion CRM immobilier ?",
    answer:
      "ImmoTopia intègre un CRM immobilier complet dans son ERP : qualification prospects avec critères métier, matching automatique biens/prospects, gestion visites avec planning agents, pipeline immobilier personnalisable, relances automatiques, suivi dossiers jusqu'à l'acte, reporting performance agents en temps réel, et intégration totale avec la gestion des biens, mandats, et comptabilité. Tout est centralisé, automatisé, et accessible 24/7.",
  },
];

export default function CRMImmobilierBonnesPratiquesPage() {
  const faqSchema = generateFAQSchema({
    questions: faqItems.map(item => ({
      question: item.question,
      answer: item.answer,
    }))
  });

  const articleSchema = generateArticleSchema({
    headline: "CRM immobilier : bonnes pratiques pour agences & promoteurs",
    description: "Guide complet sur l'utilisation efficace d'un CRM immobilier : gestion prospects, visites, pipeline, performance agents.",
    datePublished: "2026-01-03",
    author: {
      '@type': 'Organization',
      name: 'ImmoTopia',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ImmoTopia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://immotopia.com/logo.png',
      },
    },
    mainEntityOfPage: 'https://immotopia.com/guides/crm-immobilier-bonnes-pratiques',
  });

  return (
    <>
      <StructuredData data={[faqSchema, articleSchema]} />
      <article className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Target className="h-4 w-4" />
                Guide expertise CRM
              </div>

              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                CRM immobilier : bonnes pratiques pour agences & promoteurs
              </h1>

              <p className="mb-8 text-lg text-gray-700 md:text-xl lg:text-2xl">
                Pourquoi un CRM générique ne suffit pas — et comment utiliser un CRM immobilier métier pour maximiser vos conversions
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact?demo=true" className="flex items-center gap-2">
                    Demander une démo CRM
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/fonctionnalites" className="flex items-center gap-2">
                    Voir le CRM ImmoTopia
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi un CRM générique ne suffit pas */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi un CRM générique ne suffit pas
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Les CRM généralistes (Salesforce, HubSpot, Zoho) sont conçus pour vendre des produits ou services standards. L'immobilier a des spécificités métier que ces outils ne comprennent pas nativement.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <XCircle className="h-5 w-5 text-red-600" />
                    CRM générique
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Gère des "opportunités" abstraites, pas des biens immobiliers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Pas de notion de critères de recherche (budget, localisation, type)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Pas de gestion des visites avec planning agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Pas de matching automatique biens/prospects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Pipeline générique inadapté au cycle immobilier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Nécessite des personnalisations coûteuses</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    CRM immobilier métier
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Gère des prospects avec critères de recherche immobiliers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Matching automatique avec les biens disponibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Gestion des visites avec disponibilités agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Pipeline immobilier (lead → visite → offre → acte)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Suivi dossiers financement et actes notariés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Prêt à l'emploi, sans personnalisation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  Le constat
                </h3>
                <p className="text-gray-700">
                  Un CRM générique vous oblige à adapter votre métier à l'outil. Un CRM immobilier s'adapte à votre métier. La différence ? Des heures gagnées chaque semaine, moins de prospects perdus, et un taux de conversion significativement amélioré.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spécificités du CRM immobilier */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Les 7 spécificités d'un CRM immobilier
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Filter className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  1. Critères de recherche
                </h3>
                <p className="text-gray-700">
                  Capture automatique des critères : budget, localisation, type de bien, surface, nombre de pièces, délai. Ces critères permettent le matching avec les biens disponibles.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  2. Matching biens/prospects
                </h3>
                <p className="text-gray-700">
                  Algorithme qui compare automatiquement les critères des prospects avec les biens disponibles et suggère les meilleures correspondances aux agents.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  3. Gestion des visites
                </h3>
                <p className="text-gray-700">
                  Planning visites avec disponibilités agents, confirmations automatiques, rappels SMS/email, capture retours post-visite, et optimisation des itinéraires.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  4. Pipeline immobilier
                </h3>
                <p className="text-gray-700">
                  Étapes spécifiques au métier : lead → qualifié → visite → intéressé → offre → compromis → financement → acte. Chaque étape a ses actions et délais.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  5. Suivi dossiers
                </h3>
                <p className="text-gray-700">
                  Gestion complète des dossiers : documents clients, dossiers de financement, compromis, conditions suspensives, actes notariés, avec alertes sur les échéances.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                  <BarChart3 className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  6. Performance agents
                </h3>
                <p className="text-gray-700">
                  KPIs métier : prospects traités, visites organisées, taux de conversion, délai moyen, transactions conclues, CA généré. Comparaison entre agents.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  7. Automatisations métier
                </h3>
                <p className="text-gray-700">
                  Relances automatiques selon l'étape, notifications nouveaux biens matchés, rappels visites, alertes dossiers bloqués, emails personnalisés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline immobilier idéal */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Le pipeline immobilier idéal (10 étapes)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Un pipeline immobilier efficace suit le parcours client typique, de la première prise de contact jusqu'à la signature de l'acte. Chaque étape a des actions spécifiques et des critères de passage à l'étape suivante.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Lead (premier contact)</h3>
                      <p className="mb-2 text-gray-700">
                        Contact entrant (formulaire web, téléphone, email, portail immobilier). Informations minimales : nom, contact, source.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Rappel sous 2h maximum pour qualification.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Qualifié (critères capturés)</h3>
                      <p className="mb-2 text-gray-700">
                        Critères de recherche complets : budget, localisation, type de bien, surface, délai, financement.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Matching automatique avec biens disponibles, proposition de visites.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Visite planifiée</h3>
                      <p className="mb-2 text-gray-700">
                        RDV confirmé avec date, heure, bien, agent. Confirmations et rappels automatiques envoyés.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Rappel J-1 au prospect et à l'agent, préparation dossier bien.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Visite effectuée</h3>
                      <p className="mb-2 text-gray-700">
                        Visite réalisée. L'agent capture le retour : intéressé, pas intéressé, raisons, objections.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Si intéressé → étape suivante. Si pas intéressé → proposer d'autres biens ou archiver.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Intéressé (retour positif)</h3>
                      <p className="mb-2 text-gray-700">
                        Prospect intéressé par le bien. Réflexion en cours, questions complémentaires, demande de documents.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Relance J+2, J+5, J+7 pour maintenir l'engagement et répondre aux questions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-pink-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-600 text-white font-bold">
                      6
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Offre / Proposition</h3>
                      <p className="mb-2 text-gray-700">
                        Prospect fait une offre d'achat ou demande une proposition commerciale (pour location/vente neuf).
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Transmission au propriétaire/promoteur, négociation si nécessaire.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-teal-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                      7
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Négociation</h3>
                      <p className="mb-2 text-gray-700">
                        Échanges sur le prix, conditions, délais. Aller-retour entre acheteur et vendeur.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Faciliter la négociation, trouver un terrain d'entente, préparer le compromis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 text-white font-bold">
                      8
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Compromis / Réservation</h3>
                      <p className="mb-2 text-gray-700">
                        Accord trouvé. Signature du compromis de vente (ancien) ou contrat de réservation (neuf). Versement acompte.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Suivi des conditions suspensives (financement, permis, etc.), préparation dossier acte.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-white font-bold">
                      9
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Dossier financement</h3>
                      <p className="mb-2 text-gray-700">
                        Constitution et suivi du dossier de crédit immobilier. Relances banque, documents complémentaires.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Accompagnement client, suivi banque, alertes si blocage, préparation acte notarié.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-700 text-white font-bold">
                      10
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">Acte signé (transaction conclue)</h3>
                      <p className="mb-2 text-gray-700">
                        Signature de l'acte authentique chez le notaire. Transaction finalisée, commission agent calculée.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Action :</strong> Remise des clés, suivi post-vente, demande d'avis/recommandations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border-2 border-blue-500 bg-blue-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Bénéfice clé
                </h3>
                <p className="text-gray-700">
                  Un pipeline clair permet de visualiser où se trouvent tous vos prospects, d'identifier les blocages, de prioriser les actions, et d'automatiser les relances. Résultat : moins de prospects perdus, délai de conversion réduit, et taux de transformation amélioré.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gestion des visites */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Gestion des visites (maximiser les conversions)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Les visites sont le moment clé du parcours client immobilier. Une gestion efficace des visites améliore l'expérience client et maximise le taux de conversion.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    Process de gestion des visites
                  </h3>

                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">1. Prise de RDV simplifiée</p>
                      <p className="text-sm text-gray-700">
                        Permettez la prise de RDV en ligne avec disponibilités agents en temps réel. Le prospect choisit le créneau qui lui convient, l'agent reçoit une notification instantanée.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">2. Confirmations automatiques</p>
                      <p className="text-sm text-gray-700">
                        Envoi automatique d'une confirmation par email et SMS avec : date, heure, adresse du bien, nom de l'agent, contact, lien Google Maps.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">3. Rappels J-1</p>
                      <p className="text-sm text-gray-700">
                        Rappel automatique la veille de la visite au prospect et à l'agent pour réduire les no-show (absences sans prévenir).
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">4. Planning agent optimisé</p>
                      <p className="text-sm text-gray-700">
                        L'agent voit toutes ses visites du jour sur un planning clair avec itinéraire optimisé (Google Maps intégré) pour minimiser les déplacements.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">5. Dossier bien accessible</p>
                      <p className="text-sm text-gray-700">
                        L'agent accède instantanément au dossier complet du bien (photos, plans, diagnostics, prix, arguments de vente) depuis son mobile.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">6. Capture retour post-visite</p>
                      <p className="text-sm text-gray-700">
                        Immédiatement après la visite, l'agent enregistre le retour : intéressé (niveau 1-5), pas intéressé (raisons), objections, questions, prochaine action.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">7. Relances automatiques</p>
                      <p className="text-sm text-gray-700">
                        Si le prospect est intéressé, relances automatiques J+2, J+5, J+7 pour maintenir l'engagement et avancer vers l'offre.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border-2 border-green-500 bg-green-50 p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Bonnes pratiques
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Proposer plusieurs créneaux au prospect</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Confirmer 24h avant par SMS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Grouper les visites par zone géographique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Préparer les arguments de vente avant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Capturer le retour immédiatement après</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-2 border-red-500 bg-red-50 p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <XCircle className="h-5 w-5 text-red-600" />
                      Erreurs à éviter
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Oublier de confirmer la veille</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Ne pas optimiser les itinéraires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Arriver en retard sans prévenir</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Ne pas capturer le retour post-visite</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Oublier de relancer les intéressés</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                    KPIs visites à suivre
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded bg-white p-3">
                      <p className="font-semibold text-gray-900">Taux de no-show</p>
                      <p className="text-sm text-gray-600">Objectif : &lt; 15%</p>
                    </div>
                    <div className="rounded bg-white p-3">
                      <p className="font-semibold text-gray-900">Nombre de visites / agent / semaine</p>
                      <p className="text-sm text-gray-600">Objectif : 10-15 visites</p>
                    </div>
                    <div className="rounded bg-white p-3">
                      <p className="font-semibold text-gray-900">Taux de conversion visite → intéressé</p>
                      <p className="text-sm text-gray-600">Objectif : &gt; 40%</p>
                    </div>
                    <div className="rounded bg-white p-3">
                      <p className="font-semibold text-gray-900">Taux de conversion visite → offre</p>
                      <p className="text-sm text-gray-600">Objectif : &gt; 15%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suivi des dossiers */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Suivi des dossiers (de l'offre à l'acte)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Une fois l'offre acceptée, commence la phase administrative : compromis, financement, conditions suspensives, acte notarié. Un suivi rigoureux est essentiel pour éviter les blocages et finaliser la transaction.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    Éléments clés d'un dossier immobilier
                  </h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-gray-900">
                        <FileText className="h-4 w-4 text-blue-600" />
                        Documents client
                      </h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                        <li>Pièce d'identité</li>
                        <li>Justificatifs de revenus</li>
                        <li>Avis d'imposition</li>
                        <li>Relevés bancaires</li>
                        <li>Attestation employeur</li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-gray-900">
                        <Building2 className="h-4 w-4 text-green-600" />
                        Documents bien
                      </h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                        <li>Titre de propriété</li>
                        <li>Diagnostics techniques</li>
                        <li>Plans, photos</li>
                        <li>Règlement copropriété (si applicable)</li>
                        <li>Taxe foncière</li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-gray-900">
                        <FileText className="h-4 w-4 text-purple-600" />
                        Compromis / Réservation
                      </h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                        <li>Compromis de vente signé</li>
                        <li>Conditions suspensives</li>
                        <li>Délais à respecter</li>
                        <li>Acompte versé</li>
                        <li>Coordonnées notaire</li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-gray-900">
                        <TrendingUp className="h-4 w-4 text-orange-600" />
                        Dossier financement
                      </h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                        <li>Demande de crédit</li>
                        <li>Offre de prêt</li>
                        <li>Conditions bancaire</li>
                        <li>Assurance emprunteur</li>
                        <li>Déblocage fonds</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Clock className="h-5 w-5 text-indigo-600" />
                    Alertes et échéances critiques
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Délai condition suspensive financement</p>
                      <p className="text-sm text-gray-700">
                        Généralement 45 jours après signature compromis. Alerte J-15, J-7, J-3 pour relancer la banque et le client.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Délai rétractation acheteur</p>
                      <p className="text-sm text-gray-700">
                        10 jours après signature compromis (selon législation locale). Suivi automatique de l'expiration du délai.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Date signature acte notarié</p>
                      <p className="text-sm text-gray-700">
                        Généralement 2-3 mois après compromis. Alerte J-30, J-15, J-7 pour vérifier que tout est prêt (documents, financement, disponibilités).
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Documents manquants</p>
                      <p className="text-sm text-gray-700">
                        Alerte automatique si un document requis n'est pas encore fourni. Relances client ou notaire selon le document.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-green-500 bg-green-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    Checklist avant signature acte
                  </h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-sm text-gray-900">Tous les documents client fournis</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-sm text-gray-900">Offre de prêt acceptée et signée</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-sm text-gray-900">Conditions suspensives levées</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-sm text-gray-900">Diagnostics techniques à jour</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-sm text-gray-900">Notaire confirmé et disponible</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-sm text-gray-900">Déblocage fonds bancaire programmé</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-sm text-gray-900">Vendeur et acheteur confirmés</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-sm text-gray-900">Remise des clés organisée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance agents */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Performance agents (KPIs essentiels)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Un bon CRM immobilier mesure automatiquement la performance de chaque agent commercial. Ces indicateurs permettent d'identifier les meilleures pratiques, de coacher les agents, et d'optimiser l'organisation.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Prospects traités</h3>
                      <p className="text-2xl font-bold text-blue-600">150-200/mois</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Nombre total de prospects contactés et qualifiés par l'agent. Indicateur de volume d'activité.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <Filter className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Taux de qualification</h3>
                      <p className="text-2xl font-bold text-green-600">&gt; 60%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Pourcentage de prospects qualifiés (critères complets capturés) sur le total contacté. Mesure la qualité du sourcing.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Visites organisées</h3>
                      <p className="text-2xl font-bold text-purple-600">10-15/semaine</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Nombre de visites planifiées et effectuées par semaine. Indicateur d'activité terrain.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Taux conversion visite → offre</h3>
                      <p className="text-2xl font-bold text-orange-600">&gt; 15%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Pourcentage de visites qui aboutissent à une offre d'achat. Mesure l'efficacité commerciale.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                      <Clock className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Délai moyen de conversion</h3>
                      <p className="text-2xl font-bold text-indigo-600">30-45 jours</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Temps moyen entre le premier contact et la signature du compromis. Indicateur d'efficacité du process.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                      <Award className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Transactions conclues</h3>
                      <p className="text-2xl font-bold text-pink-600">2-4/mois</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Nombre d'actes signés par mois. Indicateur de performance finale et de génération de revenus.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Tableau de bord performance (exemple)
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3 text-left font-semibold text-gray-900">Agent</th>
                        <th className="p-3 text-center font-semibold text-gray-900">Prospects</th>
                        <th className="p-3 text-center font-semibold text-gray-900">Visites</th>
                        <th className="p-3 text-center font-semibold text-gray-900">Offres</th>
                        <th className="p-3 text-center font-semibold text-gray-900">Actes</th>
                        <th className="p-3 text-center font-semibold text-gray-900">Taux conv.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-900">Kouassi A.</td>
                        <td className="p-3 text-center text-gray-700">180</td>
                        <td className="p-3 text-center text-gray-700">52</td>
                        <td className="p-3 text-center text-gray-700">9</td>
                        <td className="p-3 text-center text-gray-700">3</td>
                        <td className="p-3 text-center font-semibold text-green-600">17.3%</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-900">Diallo M.</td>
                        <td className="p-3 text-center text-gray-700">165</td>
                        <td className="p-3 text-center text-gray-700">48</td>
                        <td className="p-3 text-center text-gray-700">7</td>
                        <td className="p-3 text-center text-gray-700">2</td>
                        <td className="p-3 text-center font-semibold text-green-600">14.6%</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-900">Traoré S.</td>
                        <td className="p-3 text-center text-gray-700">142</td>
                        <td className="p-3 text-center text-gray-700">38</td>
                        <td className="p-3 text-center text-gray-700">4</td>
                        <td className="p-3 text-center text-gray-700">1</td>
                        <td className="p-3 text-center font-semibold text-orange-600">10.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm text-gray-600">
                  Ce tableau permet d'identifier rapidement les agents les plus performants et ceux qui ont besoin d'accompagnement.
                </p>
              </div>

              <div className="mt-6 rounded-lg border-2 border-blue-500 bg-blue-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Target className="h-6 w-6 text-blue-600" />
                  Utiliser les KPIs pour améliorer
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Identifier les meilleures pratiques</strong> : Qu'est-ce que font les agents les plus performants différemment ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Coacher les agents</strong> : Accompagnement personnalisé basé sur les données (ex: améliorer le taux de conversion visites)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Optimiser l'organisation</strong> : Répartir les prospects selon les forces de chaque agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Fixer des objectifs réalistes</strong> : Basés sur les performances moyennes de l'équipe</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Erreurs CRM fréquentes */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              7 erreurs CRM fréquentes (et comment les éviter)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Même avec un bon CRM, certaines erreurs d'utilisation peuvent réduire son efficacité. Voici les 7 erreurs les plus fréquentes et comment les éviter.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <XCircle className="h-6 w-6 text-red-600" />
                    1. Ne pas qualifier les prospects
                  </h3>
                  <p className="mb-3 text-gray-700">
                    <strong>Erreur :</strong> Traiter tous les prospects de la même manière sans capturer leurs critères de recherche (budget, localisation, type de bien, délai).
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solution :</strong> Qualifier systématiquement chaque prospect dès le premier contact. Un prospect non qualifié = temps perdu. Utilisez un formulaire de qualification standardisé.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                    2. Oublier de relancer
                  </h3>
                  <p className="mb-3 text-gray-700">
                    <strong>Erreur :</strong> Ne pas relancer les prospects après une visite ou une première prise de contact. 80% des ventes nécessitent 5 relances ou plus.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solution :</strong> Configurez des relances automatiques selon l'étape du pipeline. Le CRM doit vous rappeler qui relancer, quand, et pourquoi.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Database className="h-6 w-6 text-yellow-600" />
                    3. Manquer de traçabilité
                  </h3>
                  <p className="mb-3 text-gray-700">
                    <strong>Erreur :</strong> Ne pas enregistrer les interactions (appels, emails, visites, retours). Résultat : on ne sait plus qui a contacté qui, quand, et pourquoi.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solution :</strong> Enregistrez TOUTES les interactions dans le CRM. Chaque appel, email, visite doit être tracé avec date, contenu, et prochaine action.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                    4. Ne pas suivre le pipeline
                  </h3>
                  <p className="mb-3 text-gray-700">
                    <strong>Erreur :</strong> Laisser des prospects bloqués à une étape sans action. Exemple : prospect "intéressé" depuis 3 semaines sans relance.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solution :</strong> Consultez le pipeline quotidiennement. Identifiez les prospects bloqués et prenez action. Configurez des alertes automatiques pour les dossiers inactifs.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                    5. Ignorer les données
                  </h3>
                  <p className="mb-3 text-gray-700">
                    <strong>Erreur :</strong> Ne jamais analyser les taux de conversion, les délais moyens, les sources de prospects les plus performantes.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solution :</strong> Consultez les rapports hebdomadaires. Identifiez ce qui fonctionne (sources, agents, types de biens) et ce qui ne fonctionne pas. Ajustez votre stratégie en conséquence.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Settings className="h-6 w-6 text-indigo-600" />
                    6. Utiliser plusieurs outils dispersés
                  </h3>
                  <p className="mb-3 text-gray-700">
                    <strong>Erreur :</strong> Excel pour les prospects, WhatsApp pour la communication, email pour les documents, agenda papier pour les visites. Résultat : chaos et perte d'information.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solution :</strong> Centralisez TOUT dans le CRM. Un seul outil pour les prospects, visites, communications, documents, reporting. Éliminez les silos.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-pink-500 bg-pink-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Users className="h-6 w-6 text-pink-600" />
                    7. Ne pas former les agents
                  </h3>
                  <p className="mb-3 text-gray-700">
                    <strong>Erreur :</strong> Déployer un CRM sans former les agents. Résultat : sous-utilisation, données incomplètes, résistance au changement.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solution :</strong> Formation initiale obligatoire + sessions de rappel régulières. Montrez les bénéfices concrets pour les agents (gain de temps, plus de ventes). Accompagnez le changement.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border-2 border-green-500 bg-green-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Règle d'or
                </h3>
                <p className="text-gray-700">
                  Un CRM n'est efficace que s'il est utilisé correctement et systématiquement. La discipline d'utilisation est aussi importante que le choix de l'outil. Formez, accompagnez, et mesurez l'adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CRM intégré dans un ERP immobilier */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              CRM intégré dans un ERP immobilier (l'avantage décisif)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Un CRM isolé ne voit que les prospects. Un CRM intégré dans un ERP immobilier complet a accès à toutes les données de l'entreprise : biens, mandats, planning, comptabilité. Cette intégration transforme l'efficacité.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <XCircle className="h-5 w-5 text-red-600" />
                    CRM isolé
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Pas d'accès aux biens disponibles → matching manuel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Pas de lien avec les mandats → risque de vendre ce qu'on n'a pas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Pas de synchronisation planning → double saisie visites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Pas de lien comptabilité → calcul commissions manuel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Données dispersées → risque d'incohérence</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    CRM intégré ERP
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Matching automatique avec biens disponibles en temps réel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Vérification automatique des mandats actifs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Planning visites synchronisé avec agenda agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Calcul automatique commissions à la signature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Données unifiées → cohérence garantie</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Les 5 avantages de l'intégration ERP
                  </h3>

                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-900">1. Matching automatique biens/prospects</h4>
                      <p className="text-sm text-gray-700">
                        Le CRM accède en temps réel à tous les biens disponibles (avec mandats actifs) et suggère automatiquement les meilleures correspondances selon les critères du prospect. Gain de temps énorme pour les agents.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-900">2. Vue 360° du client</h4>
                      <p className="text-sm text-gray-700">
                        Historique complet : prospects, visites, offres, transactions passées, paiements, documents. L'agent a toutes les informations en un clic pour un service personnalisé.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-900">3. Élimination des doubles saisies</h4>
                      <p className="text-sm text-gray-700">
                        Une visite planifiée dans le CRM apparaît automatiquement dans l'agenda de l'agent. Un prospect qui devient client n'a pas besoin d'être re-saisi. Tout est synchronisé.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-900">4. Automatisation comptable</h4>
                      <p className="text-sm text-gray-700">
                        À la signature de l'acte, le CRM déclenche automatiquement le calcul de la commission agent, la génération de la facture, et l'enregistrement comptable. Zéro erreur, zéro oubli.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-900">5. Reporting global</h4>
                      <p className="text-sm text-gray-700">
                        Tableaux de bord qui croisent les données CRM (prospects, visites, conversions) avec les données métier (biens, mandats, CA). Vision complète de la performance commerciale et financière.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Building2 className="h-6 w-6 text-blue-600" />
                    Exemple concret d'intégration
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Scénario :</strong> Un prospect contacte l'agence pour un appartement 3 pièces à Cocody, budget 40-50M FCFA.
                    </p>
                    <ol className="list-inside list-decimal space-y-2 pl-4">
                      <li>L'agent qualifie le prospect dans le CRM (critères capturés)</li>
                      <li>Le CRM interroge automatiquement la base de biens et affiche 5 appartements correspondants avec mandats actifs</li>
                      <li>L'agent propose une visite. Le RDV est créé dans le CRM et apparaît automatiquement dans son agenda</li>
                      <li>Après la visite, le prospect est intéressé. L'agent enregistre le retour dans le CRM</li>
                      <li>Le prospect fait une offre. Le CRM crée automatiquement le dossier avec tous les documents nécessaires</li>
                      <li>À la signature de l'acte, le CRM calcule la commission agent, génère la facture, et met à jour la comptabilité</li>
                    </ol>
                    <p className="mt-3 font-semibold text-blue-700">
                      Résultat : Zéro double saisie, zéro erreur, gain de temps considérable, traçabilité totale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA ImmoTopia */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center text-white">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                ImmoTopia : CRM immobilier intégré dans un ERP complet
              </h2>

              <p className="mb-8 text-lg text-blue-100 md:text-xl">
                Gérez vos prospects, visites, pipeline, et transactions dans un système unifié avec vos biens, mandats, et comptabilité
              </p>

              <div className="mb-10 grid gap-4 text-left md:grid-cols-2">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    CRM immobilier métier
                  </h3>
                  <p className="text-sm text-blue-100">
                    Qualification prospects, matching automatique biens/prospects, gestion visites, pipeline personnalisable, relances automatiques
                  </p>
                </div>

                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    Gestion des biens & mandats
                  </h3>
                  <p className="text-sm text-blue-100">
                    Catalogue biens, mandats actifs, disponibilités, photos, documents, historique — tout centralisé
                  </p>
                </div>

                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    Planning & visites
                  </h3>
                  <p className="text-sm text-blue-100">
                    Agenda agents synchronisé, prise RDV en ligne, confirmations automatiques, optimisation itinéraires, capture retours
                  </p>
                </div>

                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    Suivi dossiers & actes
                  </h3>
                  <p className="text-sm text-blue-100">
                    Gestion complète des dossiers, documents, financement, conditions suspensives, alertes échéances, actes notariés
                  </p>
                </div>

                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    Performance & reporting
                  </h3>
                  <p className="text-sm text-blue-100">
                    KPIs agents en temps réel, tableaux de bord, taux de conversion, délais, CA, comparaison performance
                  </p>
                </div>

                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    Intégration comptable
                  </h3>
                  <p className="text-sm text-blue-100">
                    Calcul automatique commissions, facturation, enregistrements comptables, suivi paiements — zéro double saisie
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/contact?demo=true" className="flex items-center gap-2">
                    Demander une démo CRM
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10">
                  <Link href="/fonctionnalites" className="flex items-center gap-2">
                    Voir toutes les fonctionnalités
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-blue-200">
                Sans engagement · Configuration rapide · Support inclus
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <p className="text-gray-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border-2 border-blue-500 bg-blue-50 p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Vous avez d'autres questions ?
              </h3>
              <p className="mb-6 text-gray-700">
                Notre équipe est là pour vous accompagner dans le choix et la mise en place de votre CRM immobilier.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact?demo=true" className="flex items-center gap-2">
                    Demander une démo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact" className="flex items-center gap-2">
                    Nous contacter
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

