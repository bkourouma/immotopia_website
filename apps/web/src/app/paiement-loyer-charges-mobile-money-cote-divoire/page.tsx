import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  FileText, 
  DollarSign, 
  AlertCircle,
  Building2,
  Users,
  Home,
  TrendingUp,
  Shield,
  Zap,
  Link2,
  CreditCard,
  BarChart3,
  Receipt,
  RefreshCw,
  Bell
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Paiement loyer & charges Mobile Money en Côte d'Ivoire | ImmoTopia",
    description:
      "Encaissement des loyers et charges copropriété via Mobile Money (Orange Money, MTN, Moov/Wave) avec quittances automatiques, rapprochement et reporting, intégré à l'ERP ImmoTopia.",
    canonicalUrl: '/paiement-loyer-charges-mobile-money-cote-divoire',
    keywords: [
      'paiement loyer Mobile Money Côte d\'Ivoire',
      'paiement charges copropriété Mobile Money',
      'paiement loyer Orange Money',
      'paiement loyer MTN Money',
      'paiement loyer Wave',
      'payer charges copropriété en ligne',
      'quittance de loyer automatique',
      'rapprochement Mobile Money',
      'encaissement loyer digital',
      'paiement loyer en ligne Côte d\'Ivoire',
      'module paiement ERP immobilier',
      'gestion paiements Mobile Money',
    ],
  },
  '/paiement-loyer-charges-mobile-money-cote-divoire'
);

const faqItems = [
  {
    question: "Quels opérateurs Mobile Money sont supportés ?",
    answer:
      "ImmoTopia intègre les principaux opérateurs Mobile Money utilisés en Côte d'Ivoire : Orange Money, MTN Money, Moov Money et Wave. Le module de paiement permet de référencer automatiquement les transactions effectuées via ces plateformes, avec génération immédiate de quittances et reçus. L'intégration technique dépend de la configuration de votre compte marchand ou de l'agrégateur utilisé.",
  },
  {
    question: "Les quittances sont-elles automatiques ?",
    answer:
      "Oui, dès qu'un paiement est enregistré dans ImmoTopia (manuellement ou via intégration automatique), une quittance ou un reçu est généré automatiquement. Le document est conforme aux exigences légales ivoiriennes et peut être envoyé automatiquement par email au locataire ou copropriétaire. Cette automatisation élimine les erreurs manuelles et garantit une traçabilité complète de chaque transaction.",
  },
  {
    question: "Peut-on rattacher un paiement à une période/contrat/lot ?",
    answer:
      "Absolument. C'est l'une des fonctionnalités clés du module de paiement ImmoTopia. Chaque paiement Mobile Money peut être rattaché précisément à un contrat de location (pour les loyers), à un lot de copropriété (pour les charges), et à une période spécifique (mois, trimestre, etc.). Le système gère automatiquement les soldes, les impayés et les relances, offrant une vision claire de la situation financière de chaque locataire ou copropriétaire.",
  },
  {
    question: "Peut-on faire des paiements partiels ?",
    answer:
      "Oui, ImmoTopia supporte les paiements partiels et fractionnés. Si un locataire ou copropriétaire effectue un paiement partiel, le système enregistre le montant reçu, met à jour le solde restant et peut générer des relances automatiques pour le montant dû. L'état de compte reflète précisément les paiements partiels et les soldes, offrant une transparence totale pour toutes les parties.",
  },
  {
    question: "Comment gère-t-on les annulations/remboursements ?",
    answer:
      "Le module de paiement ImmoTopia permet de gérer les annulations et remboursements de manière traçable. Chaque opération (paiement, annulation, remboursement) est enregistrée dans le journal d'audit avec date, auteur et motif. Les états de compte sont automatiquement mis à jour pour refléter les corrections. Cette traçabilité est essentielle pour la comptabilité et en cas de litige ou d'audit.",
  },
  {
    question: "Les copropriétaires/locataires ont-ils un reçu ?",
    answer:
      "Oui, chaque paiement génère automatiquement un reçu ou une quittance (selon le contexte : loyer ou charges de copropriété). Le document est disponible immédiatement dans l'espace personnel du locataire ou copropriétaire, peut être téléchargé en PDF, et est envoyé automatiquement par email si configuré. Le reçu contient toutes les informations légales : montant, période, références du contrat ou du lot, date de paiement, et moyen de paiement utilisé.",
  },
  {
    question: "Peut-on activer seulement le module Paiements ?",
    answer:
      "Le module de paiement Mobile Money est un module transversal de l'ERP ImmoTopia. Il fonctionne en synergie avec les autres modules (gestion locative, syndic, comptabilité). Bien que vous puissiez utiliser principalement le module de paiement, son intégration avec les autres modules apporte une valeur ajoutée significative : les paiements sont automatiquement synchronisés avec la gestion locative (quittances), le syndic (appels de charges), et la comptabilité (rapprochement). Nous recommandons d'utiliser l'ERP complet pour maximiser l'efficacité.",
  },
  {
    question: "Les données et transactions sont-elles sécurisées ?",
    answer:
      "Oui, la sécurité est une priorité absolue. ImmoTopia utilise un hébergement sécurisé avec chiffrement SSL, sauvegardes automatiques quotidiennes, et respect des normes de protection des données. Chaque transaction est enregistrée dans un journal d'audit avec horodatage et traçabilité complète. Les accès sont contrôlés avec authentification et permissions granulaires. Les données de paiement sont traitées de manière sécurisée, et les intégrations avec les opérateurs Mobile Money respectent les standards de sécurité des transactions financières.",
  },
];

export default function PaiementLoyerChargesMobileMoneyPage() {
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
                Module transversal de l'ERP ImmoTopia
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Paiement des loyers et charges par Mobile Money en Côte d'Ivoire
              </h1>
              
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Encaissement digital intégré à l'ERP immobilier ImmoTopia : traçabilité, quittances automatiques, rapprochement et reporting
              </p>
              
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
                Le module de paiement Mobile Money n'est pas un simple outil de collecte : il s'intègre naturellement dans l'ERP ImmoTopia pour automatiser l'encaissement des{' '}
                <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  loyers
                </Link>
                {' '}et charges, générer les quittances, effectuer le rapprochement et fournir un reporting complet. Découvrez{' '}
                <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
                  toutes les fonctionnalités
                </Link>
                {' '}et{' '}
                <Link href="/pour-qui/gestionnaires-locatifs" className="font-semibold text-[#2563EB] hover:underline">
                  comment les gestionnaires locatifs utilisent ce module
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

        {/* Section 1: Pourquoi le Mobile Money est clé en Côte d'Ivoire */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi le Mobile Money est clé en Côte d'Ivoire
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                En Côte d'Ivoire, le Mobile Money (Orange Money, MTN Money, Moov Money, Wave) est devenu le moyen de paiement privilégié pour les transactions quotidiennes, notamment pour les loyers et charges de copropriété. Cette adoption massive s'explique par plusieurs facteurs clés.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Paiements rapides et accessibles</h3>
                  </div>
                  <p className="text-gray-700">
                    Le Mobile Money permet des paiements instantanés, 24h/24 et 7j/7, sans nécessiter de compte bancaire traditionnel. Cette accessibilité est particulièrement importante en Côte d'Ivoire où une grande partie de la population utilise principalement le Mobile Money pour ses transactions financières.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Adapté au terrain</h3>
                  </div>
                  <p className="text-gray-700">
                    Les opérateurs Mobile Money sont présents partout en Côte d'Ivoire, y compris dans les zones rurales. Les locataires et copropriétaires peuvent effectuer leurs paiements depuis leur téléphone mobile, sans se déplacer, ce qui facilite grandement la collecte des loyers et charges.
                  </p>
                </div>
              </div>

              <div className="mb-8 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Le problème actuel : paiements non tracés</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Malgré l'adoption massive du Mobile Money, de nombreux professionnels de l'immobilier font face à des difficultés récurrentes :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Paiements non rattachés :</strong> Les transactions Mobile Money arrivent sans référence claire au contrat, au lot ou à la période concernée</li>
                  <li><strong>Difficultés de rapprochement :</strong> Il faut comparer manuellement les relevés Mobile Money avec les contrats et appels de charges</li>
                  <li><strong>Litiges fréquents :</strong> Sans traçabilité claire, les disputes sur les paiements sont courantes</li>
                  <li><strong>Absence de preuves :</strong> Les quittances et reçus ne sont pas générés automatiquement</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  Le besoin : rattacher chaque paiement à un contrat/lot/période
                </h3>
                <p className="text-gray-700">
                  Pour transformer le Mobile Money en véritable atout, il faut un système capable de rattacher automatiquement chaque paiement à un contrat de location, un lot de copropriété, et une période spécifique. C'est exactement ce que fait le module de paiement ImmoTopia : il transforme les paiements Mobile Money en transactions structurées, traçables et intégrées à l'ensemble de l'ERP immobilier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Ce que doit faire un module de paiement immobilier */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Ce que doit faire un module de paiement immobilier (pas un PSP générique)
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Un module de paiement pour l'immobilier ne se limite pas à collecter de l'argent. Il doit être spécifiquement conçu pour les besoins du secteur : rattacher chaque paiement à un contexte métier précis (contrat, lot, période), générer automatiquement les documents légaux, et s'intégrer avec les autres modules de gestion immobilière.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Link2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Référencement automatique des paiements</h3>
                  </div>
                  <p className="text-gray-700">
                    Chaque paiement Mobile Money doit être automatiquement rattaché à un contrat de location (pour les loyers), à un lot de copropriété (pour les charges), et à une période spécifique (mois, trimestre, etc.). Le système doit permettre de faire le lien entre le numéro de téléphone utilisé pour le paiement et le locataire ou copropriétaire concerné, avec validation et confirmation.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Receipt className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Quittances / reçus / états de compte</h3>
                  </div>
                  <p className="text-gray-700">
                    Dès qu'un paiement est enregistré, le système doit générer automatiquement une quittance (pour les loyers) ou un reçu (pour les charges de copropriété), conforme aux exigences légales ivoiriennes. Les états de compte doivent être mis à jour en temps réel, montrant les soldes, les paiements partiels, et les montants dus. Ces documents doivent être accessibles dans l'espace personnel du locataire ou copropriétaire et envoyés automatiquement par email.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <DollarSign className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Paiement partiel/fractionné (si supporté)</h3>
                  </div>
                  <p className="text-gray-700">
                    Le système doit gérer les paiements partiels et fractionnés. Si un locataire ou copropriétaire effectue un paiement partiel, le système enregistre le montant reçu, calcule le solde restant, et peut générer des relances automatiques pour le montant dû. L'état de compte doit refléter précisément les paiements partiels et les soldes, offrant une transparence totale.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <Shield className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Journal d'audit, webhooks, statuts</h3>
                  </div>
                  <p className="text-gray-700">
                    Chaque transaction doit être enregistrée dans un journal d'audit avec date, heure, auteur, montant, et contexte (contrat, lot, période). Le système doit supporter les webhooks pour les notifications en temps réel des paiements (si l'intégration technique le permet). Les statuts des paiements (en attente, validé, annulé, remboursé) doivent être clairement visibles et traçables.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                      <BarChart3 className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Reporting encaissement & impayés</h3>
                  </div>
                  <p className="text-gray-700">
                    Le module doit fournir des tableaux de bord et rapports détaillés sur les encaissements : taux d'encaissement par période, analyse des impayés, délais moyens de paiement, répartition par moyen de paiement (Mobile Money, virement, espèces), et prévisions de trésorerie. Ces indicateurs sont essentiels pour piloter l'activité et prendre des décisions éclairées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Cas d'usage 1 — Gestion locative (loyers) */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Cas d'usage 1 — Gestion locative (loyers)
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Le module de paiement Mobile Money d'ImmoTopia transforme la collecte des loyers en processus automatisé et traçable. Voici comment il fonctionne pour les différents types de paiements locatifs.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Home className="h-6 w-6 text-blue-600" />
                    Loyer mensuel
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Un locataire paie son loyer mensuel de 200 000 FCFA via Orange Money. Le paiement est enregistré dans ImmoTopia et automatiquement rattaché à son contrat de location et à la période concernée (ex: loyer de janvier 2024).
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Le système vérifie que le montant correspond au loyer dû</li>
                    <li>Une quittance est générée automatiquement avec toutes les informations légales</li>
                    <li>La quittance est envoyée par email au locataire</li>
                    <li>L'état de compte du locataire est mis à jour en temps réel</li>
                    <li>Le tableau de bord locatif affiche immédiatement que le loyer est payé</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-green-600" />
                    Dépôt de garantie
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Lors de la signature du contrat, le locataire verse le dépôt de garantie via MTN Money. Le paiement est enregistré comme dépôt de garantie et rattaché au contrat.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Le système enregistre le dépôt avec la date et le montant</li>
                    <li>Un reçu de dépôt de garantie est généré automatiquement</li>
                    <li>Le dépôt est suivi dans le module gestion locative</li>
                    <li>En fin de contrat, le système peut calculer les retenues éventuelles</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-amber-600" />
                    Pénalités de retard
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Si un loyer est payé en retard, le système calcule automatiquement les pénalités selon les paramètres du contrat. Le locataire peut payer le loyer + pénalités via Mobile Money.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Le système calcule les intérêts de retard automatiquement</li>
                    <li>Le paiement peut inclure le loyer et les pénalités</li>
                    <li>La quittance détaille le montant du loyer et des pénalités</li>
                    <li>L'historique des pénalités est traçable</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-purple-600" />
                    Frais divers
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Des frais divers (frais de dossier, frais de maintenance, etc.) peuvent être facturés et payés via Mobile Money. Chaque paiement est rattaché au contrat et à la facture correspondante.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Les frais sont enregistrés dans le module gestion locative</li>
                    <li>Le paiement est rattaché à la facture de frais</li>
                    <li>Un reçu est généré pour chaque paiement de frais</li>
                    <li>L'historique complet des frais est accessible</li>
                  </ul>
                </div>

                <div className="rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Bell className="h-6 w-6 text-blue-600" />
                    Quittance automatique + notifications
                  </h3>
                  <p className="text-gray-700">
                    Pour chaque paiement de loyer, une quittance est générée automatiquement et envoyée par email au locataire. Le locataire reçoit également une notification dans son espace personnel (si configuré). Cette automatisation élimine les oublis et garantit une traçabilité complète. Le gestionnaire reçoit également une notification de paiement, lui permettant de suivre en temps réel l'état des encaissements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Cas d'usage 2 — Syndic de copropriété (charges & appels de fonds) */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Cas d'usage 2 — Syndic de copropriété (charges & appels de fonds)
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Pour les copropriétés, le module de paiement Mobile Money facilite la collecte des charges périodiques et exceptionnelles, avec transparence totale pour les copropriétaires.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Appels de charges périodiques
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Le syndic crée un appel de charges mensuel ou trimestriel dans le module Syndic. Chaque copropriétaire reçoit une notification avec le montant dû calculé selon ses tantièmes. Le copropriétaire paie via Mobile Money depuis son espace personnel ou en utilisant le numéro de téléphone associé à son lot.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Le paiement est automatiquement rattaché à l'appel de charges et au lot</li>
                    <li>Un reçu est généré immédiatement</li>
                    <li>Le compte copropriétaire est mis à jour en temps réel</li>
                    <li>Le tableau de bord du syndic affiche les encaissements par lot</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                    Appels de fonds exceptionnels
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Pour des travaux ou charges spéciales, le syndic crée un appel de fonds exceptionnel. Les copropriétaires sont notifiés et peuvent payer via Mobile Money. Le système gère les paiements partiels et les relances pour les copropriétaires qui n'ont pas encore payé.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Chaque appel exceptionnel est tracé individuellement</li>
                    <li>Les paiements sont rattachés à l'appel spécifique</li>
                    <li>Le système suit les montants collectés vs montants demandés</li>
                    <li>Des relances automatiques sont envoyées aux copropriétaires en retard</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                    Pénalités
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Si un copropriétaire paie ses charges en retard, le système calcule automatiquement les pénalités selon les règles de la copropriété. Le paiement peut inclure les charges + pénalités.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Les pénalités sont calculées automatiquement selon les paramètres</li>
                    <li>Le reçu détaille les charges et les pénalités</li>
                    <li>L'historique des pénalités est traçable par lot</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Receipt className="h-6 w-6 text-green-600" />
                    Reçus + mise à jour du compte copropriétaire
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Dès qu'un paiement de charges est enregistré, un reçu est généré automatiquement et le compte copropriétaire est mis à jour. Le copropriétaire peut consulter son solde, son historique de paiements et télécharger ses reçus depuis son espace personnel.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Reçu disponible immédiatement dans l'espace copropriétaire</li>
                    <li>Reçu envoyé par email automatiquement</li>
                    <li>État de compte mis à jour en temps réel</li>
                    <li>Historique complet des paiements accessible</li>
                  </ul>
                </div>

                <div className="rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    Transparence pour le copropriétaire
                  </h3>
                  <p className="text-gray-700">
                    Chaque copropriétaire a accès à son espace personnel où il peut consulter tous ses appels de charges, ses soldes, ses reçus de paiement, et l'historique complet de ses transactions. Cette transparence réduit les questions et les réclamations, et renforce la confiance entre le syndic et les copropriétaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Opérateurs & moyens de paiement */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Opérateurs & moyens de paiement
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                ImmoTopia intègre les principaux opérateurs Mobile Money utilisés en Côte d'Ivoire, permettant aux locataires et copropriétaires de payer via leur solution préférée.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 text-center shadow-md border border-gray-200">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                    <Smartphone className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Orange Money</h3>
                  <p className="text-sm text-gray-600">
                    Intégration native pour un rapprochement automatique des paiements. Les transactions Orange Money peuvent être référencées et rattachées aux contrats et lots.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 text-center shadow-md border border-gray-200">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                    <Smartphone className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">MTN Money</h3>
                  <p className="text-sm text-gray-600">
                    Support complet avec notification automatique à la réception (si intégration technique activée). Les paiements MTN Money sont tracés et référencés.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 text-center shadow-md border border-gray-200">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Smartphone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Moov Money / Wave</h3>
                  <p className="text-sm text-gray-600">
                    Rapprochement instantané pour une gestion optimale. Les paiements via Moov Money et Wave sont supportés avec la même traçabilité.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 text-center shadow-md border border-gray-200">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <CreditCard className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Carte bancaire (optionnel)</h3>
                  <p className="text-sm text-gray-600">
                    Si activé, le paiement par carte bancaire est également supporté, avec la même logique de référencement et de génération automatique de quittances.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Modèle d'intégration
                </h3>
                <p className="text-gray-700 mb-3">
                  L'intégration avec les opérateurs Mobile Money peut fonctionner selon deux modèles principaux :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Compte marchand par tenant :</strong> Chaque organisation (agence, syndic) peut avoir son propre compte marchand avec les opérateurs, permettant des paiements directs vers le compte de l'organisation.</li>
                  <li><strong>Agrégateur plateforme :</strong> ImmoTopia peut s'intégrer avec un agrégateur de paiements qui gère les connexions avec les différents opérateurs Mobile Money, simplifiant l'intégration technique.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Le modèle exact dépend de la configuration technique et des accords commerciaux. Dans tous les cas, le module de paiement ImmoTopia permet de référencer et tracer chaque transaction, qu'elle soit enregistrée manuellement ou via intégration automatique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Rapprochement, comptabilité & reporting */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Rapprochement, comptabilité & reporting
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Le module de paiement Mobile Money s'intègre naturellement avec la comptabilité et le reporting de l'ERP ImmoTopia, offrant une vision complète de la trésorerie et des encaissements.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <RefreshCw className="h-6 w-6 text-green-600" />
                    Synchronisation avec comptabilité/trésorerie
                  </h3>
                  <p className="text-gray-700">
                    Chaque paiement Mobile Money enregistré dans ImmoTopia est automatiquement synchronisé avec le module de comptabilité (si activé). Les recettes sont enregistrées dans les comptes appropriés, et le prévisionnel de trésorerie est mis à jour en temps réel. Cette synchronisation élimine la double saisie et garantit la cohérence entre les paiements et la comptabilité.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Rapprochement par période
                  </h3>
                  <p className="text-gray-700">
                    Le module permet de faire le rapprochement des paiements Mobile Money par période (mois, trimestre, année). Vous pouvez comparer les paiements attendus (selon les contrats et appels de charges) avec les paiements reçus, identifier les écarts, et générer des rapports de rapprochement. Ce processus, qui prenait plusieurs heures avec des méthodes manuelles, devient rapide et fiable.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                    KPI : taux d'encaissement, impayés, retards
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Le module de paiement alimente automatiquement les tableaux de bord avec des indicateurs clés de performance :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Taux d'encaissement :</strong> Pourcentage des loyers/charges encaissés par rapport aux montants dus</li>
                    <li><strong>Analyse des impayés :</strong> Montants impayés par période, avec vieillissement des créances</li>
                    <li><strong>Délais moyens de paiement :</strong> Temps moyen entre l'échéance et le paiement effectif</li>
                    <li><strong>Répartition par moyen de paiement :</strong> Pourcentage des paiements effectués via Mobile Money, virement, espèces, etc.</li>
                    <li><strong>Prévisions de trésorerie :</strong> Estimation des encaissements à venir basée sur l'historique</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-amber-600" />
                    Export / états de compte
                  </h3>
                  <p className="text-gray-700">
                    Tous les paiements et états de compte peuvent être exportés en Excel ou PDF pour un reporting externe ou une analyse approfondie. Les exports incluent les détails de chaque transaction : date, montant, moyen de paiement, contrat/lot concerné, période, et statut. Ces exports sont utiles pour les comptes rendus aux propriétaires bailleurs, les assemblées générales de copropriété, ou les audits comptables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Pour qui ? (Personas) */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pour qui est conçu le module de paiement Mobile Money ImmoTopia ?
            </h2>
            
            <div className="space-y-8">
              {/* Agence / gestionnaire locatif */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Agence / Gestionnaire locatif</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Les paiements de loyers arrivent via Mobile Money sans référence claire au contrat. Le rapprochement manuel prend des heures, les quittances sont générées à la main, et les impayés sont détectés tardivement. La gestion des paiements Mobile Money est chronophage et source d'erreurs.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le module de paiement Mobile Money rattache automatiquement chaque transaction au contrat et à la période concernée. Les quittances sont générées automatiquement, le rapprochement est simplifié, et les alertes automatiques signalent les impayés dès qu'ils surviennent.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Résultat :</p>
                    <p>Encaissement plus rapide grâce à la traçabilité automatique, réduction des impayés grâce aux alertes et relances automatiques, gain de temps considérable sur le rapprochement et la génération de quittances, et professionnalisation de la relation avec les locataires.</p>
                  </div>
                </div>
              </div>

              {/* Syndic */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Syndic</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Les paiements de charges arrivent via Mobile Money sans référence au lot ou à l'appel de fonds. Le rapprochement est complexe, les reçus sont générés manuellement, et la transparence pour les copropriétaires est limitée. Les impayés sont difficiles à suivre.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le module de paiement Mobile Money s'intègre avec le module Syndic pour rattacher automatiquement chaque paiement à un lot et à un appel de charges. Les reçus sont générés automatiquement, les comptes copropriétaires sont mis à jour en temps réel, et les relances d'impayés sont automatisées.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Résultat :</p>
                    <p>Transparence totale pour les copropriétaires avec accès à leurs reçus et états de compte, amélioration du taux de recouvrement grâce aux relances automatiques, réduction du temps administratif sur le rapprochement, et meilleure relation de confiance avec les copropriétaires.</p>
                  </div>
                </div>
              </div>

              {/* Propriétaire bailleur */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Home className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Propriétaire bailleur</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Vous gérez plusieurs biens locatifs et recevez des paiements de loyers via Mobile Money. Il est difficile de suivre quels paiements correspondent à quels biens et quelles périodes. Les quittances doivent être générées manuellement, et vous n'avez pas de visibilité claire sur les impayés.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le module de paiement Mobile Money vous permet de rattacher chaque paiement au bon bien et à la bonne période. Les quittances sont générées automatiquement, et vous avez une vision claire de l'état des paiements pour chaque bien depuis votre tableau de bord.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Résultat :</p>
                    <p>Suivi et preuves de chaque paiement avec traçabilité complète, gain de temps sur la génération de quittances, meilleure organisation de la gestion locative, et tranquillité d'esprit grâce à la visibilité en temps réel sur les encaissements et impayés.</p>
                  </div>
                </div>
              </div>

              {/* Promoteur */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Promoteur</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Vous collectez des acomptes et des échéances de vente via Mobile Money. Il est difficile de suivre quels paiements correspondent à quels lots et quelles échéances. Le rapprochement avec les échéanciers est manuel et chronophage.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le module de paiement Mobile Money s'intègre avec le module Promotion immobilière pour rattacher chaque paiement à un lot et à une échéance. Les reçus sont générés automatiquement, et le suivi des ventes est mis à jour en temps réel.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Résultat :</p>
                    <p>Suivi précis des acomptes et échéances avec traçabilité complète, automatisation de la génération de reçus, meilleure visibilité sur l'état des ventes, et rapprochement simplifié avec les échéanciers de vente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Intégration au sein de l'ERP ImmoTopia */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Intégration au sein de l'ERP ImmoTopia
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-8 text-lg leading-relaxed">
                Le module de paiement Mobile Money n'est pas un outil isolé : il s'intègre naturellement avec tous les autres modules de l'ERP ImmoTopia, créant une synergie qui multiplie l'efficacité de chaque fonctionnalité.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Lien avec la gestion locative (contrats, loyers, quittances)
                  </h3>
                  <p>
                    Chaque paiement de loyer est automatiquement rattaché à un contrat de location. La quittance est générée instantanément, l'état de compte du locataire est mis à jour, et le tableau de bord locatif reflète immédiatement l'état des paiements. Les relances d'impayés sont déclenchées automatiquement si un loyer n'est pas payé à l'échéance.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Building2 className="h-6 w-6 text-green-600" />
                    Lien avec le syndic (appels de charges, espace copropriétaires)
                  </h3>
                  <p>
                    Les paiements de charges sont rattachés aux appels de fonds créés dans le module Syndic. Les reçus sont générés automatiquement et disponibles dans l'espace copropriétaire. Les comptes copropriétaires sont mis à jour en temps réel, et les relances d'impayés sont automatisées. Le tableau de bord du syndic affiche le taux d'encaissement par immeuble et par lot.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                    Lien avec la comptabilité & trésorerie (rapprochement)
                  </h3>
                  <p>
                    Tous les paiements Mobile Money sont automatiquement enregistrés dans le module de comptabilité (si activé). Les recettes sont intégrées dans le prévisionnel de trésorerie, et le rapprochement bancaire est simplifié grâce à la centralisation de toutes les transactions. Les états financiers reflètent en temps réel l'état des encaissements.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-amber-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Bell className="h-6 w-6 text-amber-600" />
                    Lien avec les annonces / notifications (relances)
                  </h3>
                  <p>
                    Les relances d'impayés sont intégrées avec le module de communication de l'ERP. Les notifications sont envoyées automatiquement par email et SMS (si configuré) aux locataires et copropriétaires en retard. Chaque relance est enregistrée dans l'historique, créant une traçabilité complète des actions entreprises.
                  </p>
                </div>
              </div>

              {/* Lien explicite vers page pilier mère */}
              <div className="rounded-lg border-2 border-blue-300 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Découvrez l'ERP ImmoTopia complet
                </h3>
                <p className="mb-6 text-gray-700">
                  Le module de paiement Mobile Money est un module transversal essentiel de l'ERP ImmoTopia, mais il n'est qu'une partie de la solution. Pour comprendre comment l'ensemble des modules (CRM, gestion des biens, gestion locative, syndic, comptabilité, reporting) fonctionnent ensemble pour transformer votre activité immobilière, consultez notre page dédiée :
                </p>
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Découvrir l'ERP immobilier ImmoTopia
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Comparatif avant / après */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Comparatif avant / après : la transformation avec ImmoTopia
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900 bg-red-50">Avant (méthodes traditionnelles)</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900 bg-green-50">Après (ImmoTopia)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Collecte des paiements</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Paiements Mobile Money reçus via WhatsApp/SMS, non structurés</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Paiements rattachés automatiquement aux contrats/lots et périodes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Preuves de paiement</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Screenshots WhatsApp, captures d'écran, preuves faibles</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Quittances et reçus générés automatiquement, documents légaux</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Rapprochement</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Rapprochement manuel chronophage, comparaison Excel/relevés</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Rapprochement automatique, données centralisées</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Suivi des impayés</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Détection tardive, relances manuelles, oublis possibles</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Alertes automatiques, relances programmées, suivi en temps réel</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Reporting</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Tableaux Excel créés manuellement, risques d'erreurs</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Tableaux de bord automatiques, rapports exportables, données en temps réel</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Audit et traçabilité</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Historique difficile à reconstituer, documents éparpillés</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Journal d'audit complet, historique accessible, preuves documentées</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Transparence client</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Demandes par email/téléphone, documents à demander</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Espace personnel 24/7, documents en ligne, notifications automatiques</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes sur le paiement Mobile Money ImmoTopia
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
              Prêt à transformer la gestion de vos paiements ?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Découvrez comment le module de paiement Mobile Money d'ImmoTopia, intégré à l'ERP immobilier complet, peut automatiser l'encaissement des loyers et charges, générer les quittances et améliorer votre trésorerie.
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
                href="/gestion-locative-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Gestion locative Côte d'Ivoire
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Module de gestion locative avec paiements intégrés
                </p>
              </Link>
              
              <Link
                href="/logiciel-syndic-copropriete-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Syndic de copropriété Côte d'Ivoire
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Module syndic avec paiements de charges intégrés
                </p>
              </Link>
              
              <Link
                href="/fonctionnalites/paiements-mobile-money"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Fonctionnalités paiements Mobile Money
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Détails techniques du module de paiement
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

              <Link
                href="/guides/reduire-impayes-loyers-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Guide : Réduire les impayés de loyers
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Méthodes, scripts de relance et checklist opérationnelle
                </p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

