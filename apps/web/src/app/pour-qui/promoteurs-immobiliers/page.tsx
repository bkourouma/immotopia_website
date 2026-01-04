import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateFAQSchema } from '@/lib/structured-data';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  FileText,
  DollarSign,
  Smartphone,
  BarChart3,
  AlertCircle,
  TrendingUp,
  Zap,
  Calendar,
  Home,
  Target,
  Clock,
  Shield,
  LineChart,
  Package,
  MapPin,
  FileCheck,
  Layers,
  TrendingDown,
  Database,
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Logiciel pour promoteurs immobiliers en Côte d\'Ivoire | ImmoTopia',
    description:
      'ImmoTopia aide les promoteurs en Côte d\'Ivoire : gestion des programmes et lots, réservations, CRM, suivi acquéreurs, paiements et reporting, intégré à un ERP immobilier complet.',
    canonicalUrl: '/pour-qui/promoteurs-immobiliers',
    keywords: [
      'logiciel promoteur immobilier Côte d\'Ivoire',
      'logiciel promotion immobilière Côte d\'Ivoire',
      'gestion programme immobilier lots',
      'commercialisation lots immobiliers Abidjan',
      'suivi acquéreurs programme neuf',
      'gestion foncier ACD',
      'ERP promotion immobilière',
      'logiciel vente lots immobiliers',
    ],
  },
  '/pour-qui/promoteurs-immobiliers'
);

const faqItems = [
  {
    question: 'Peut-on gérer plusieurs programmes et lots ?',
    answer:
      'Oui, ImmoTopia permet de gérer plusieurs programmes simultanément, chacun avec ses phases, bâtiments et lots. Vous pouvez créer autant de programmes que nécessaire, définir les caractéristiques de chaque lot (surface, prix, étage, orientation) et suivre leur statut en temps réel (disponible, réservé, vendu).',
  },
  {
    question: 'Peut-on réserver un lot et suivre son statut ?',
    answer:
      'Absolument. Le système permet de réserver un lot pour un prospect, de gérer les annulations, et de maintenir un historique complet. Les statuts sont synchronisés automatiquement pour éviter les doublons ou conflits de réservation. Vous pouvez également définir des délais de réservation et recevoir des alertes.',
  },
  {
    question: 'Peut-on suivre les acquéreurs et leurs paiements ?',
    answer:
      'Oui, chaque acquéreur dispose d\'un dossier complet avec ses informations, documents (contrat, pièces d\'identité), échéancier de paiement et historique des acomptes versés. Les paiements sont rattachés au lot et à l\'acquéreur, avec traçabilité complète (Mobile Money, virement, espèces). Vous pouvez générer des quittances et suivre les retards de paiement.',
  },
  {
    question: 'Peut-on exporter des états de vente/stock ?',
    answer:
      'Oui, ImmoTopia génère automatiquement des rapports de vente (taux de commercialisation, CA réalisé, prévisions), des états de stock (lots disponibles/réservés/vendus par programme), et des tableaux de bord pour la direction ou les investisseurs. Tous les rapports sont exportables en PDF ou Excel.',
  },
  {
    question: 'Le CRM est-il inclus pour la commercialisation ?',
    answer:
      'Oui, le module CRM immobilier est intégré. Vous pouvez gérer vos prospects, planifier des visites, suivre le pipeline commercial (de la prospection à la signature), enregistrer les relances et mesurer la performance de votre équipe commerciale. Le CRM est directement lié aux programmes et lots pour une vision unifiée.',
  },
  {
    question: 'Peut-on activer seulement le module Promoteur ?',
    answer:
      'ImmoTopia est un ERP modulaire. Vous pouvez activer le module Promotion/Foncier comme module principal, mais il fonctionne en synergie avec le CRM (prospects), les Paiements (acomptes) et le Reporting (tableaux de bord). Cette intégration garantit une traçabilité complète et évite les ressaisies.',
  },
  {
    question: 'Comment migrer depuis Excel ?',
    answer:
      'Notre équipe vous accompagne dans la migration de vos données Excel (programmes, lots, acquéreurs, paiements). Nous proposons un import assisté et une formation pour que votre équipe soit opérationnelle rapidement. La plupart des promoteurs sont autonomes en 2 à 5 jours.',
  },
];

export default function PromoteursImmobiliersPage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* 1. HERO SECTION */}
        <header className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Building2 className="h-4 w-4" />
            Pour les promoteurs immobiliers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Le logiciel qui pilote vos programmes immobiliers en Côte d&apos;Ivoire
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Gérez vos lots, réservations,{' '}
            <Link href="/crm-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              CRM
            </Link>
            , paiements et reporting dans un{' '}
            <Link href="/logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              ERP immobilier intégré
            </Link>
            . Découvrez{' '}
            <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
              toutes les fonctionnalités
            </Link>
            {' '}pour maîtriser votre stock, accélérer vos ventes et rassurer vos investisseurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact?demo=true">
                Demander une démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg"
            >
              <Link href="/logiciel-immobilier-cote-divoire">
                Découvrir l&apos;ERP ImmoTopia
              </Link>
            </Button>
          </div>
        </header>

        {/* 2. LES PROBLÈMES COURANTS DES PROGRAMMES NEUFS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Les problèmes courants des promoteurs immobiliers
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Vous développez des programmes immobiliers à Abidjan, Bouaké ou ailleurs en Côte d&apos;Ivoire. Votre quotidien ressemble probablement à ceci :
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Stock de lots suivi sur Excel
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vos programmes, phases et lots sont éparpillés dans plusieurs fichiers Excel</li>
                <li>Les statuts (disponible/réservé/vendu) ne sont pas toujours à jour</li>
                <li>Risque de doublon : deux commerciaux réservent le même lot</li>
                <li>Impossible de savoir en temps réel combien de lots restent disponibles</li>
                <li>Difficile de suivre l&apos;historique des réservations et annulations</li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-amber-600" />
                Suivi acquéreurs dispersé
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les dossiers acquéreurs sont dans des classeurs physiques ou des dossiers partagés</li>
                <li>Les acomptes sont notés manuellement, sans lien avec le lot</li>
                <li>Difficile de savoir qui a payé, qui est en retard, qui doit encore combien</li>
                <li>Les documents (contrats, pièces) sont dispersés</li>
                <li>Pas de vision consolidée par acquéreur ou par programme</li>
              </ul>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingDown className="h-6 w-6 text-orange-600" />
                Performance commerciale difficile à mesurer
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Impossible de connaître le taux de commercialisation en temps réel</li>
                <li>Pas de visibilité sur le pipeline commercial (prospects, visites, réservations)</li>
                <li>Difficile de prévoir les encaissements futurs</li>
                <li>Reporting investisseurs/banques compliqué et chronophage</li>
                <li>Pas de tableau de bord pour piloter l&apos;activité</li>
              </ul>
            </div>
            <p className="text-xl font-semibold text-gray-900 mt-8">
              <strong>Résultat :</strong> Vous perdez du temps, vous risquez des erreurs coûteuses, et vous manquez de visibilité pour piloter efficacement vos programmes.
            </p>
          </div>
        </section>

        {/* 3. CE QU'UN PROMOTEUR DOIT PILOTER */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ce qu&apos;un promoteur doit piloter au quotidien
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Pour maîtriser vos programmes et maximiser vos ventes, vous devez avoir une vision claire et en temps réel sur :
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Layers className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Programmes, phases, bâtiments, lots</h3>
                    <p className="text-gray-700">
                      Structure complète de vos programmes avec toutes les caractéristiques (surface, prix, étage, orientation, etc.)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Package className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Statuts lots cohérents</h3>
                    <p className="text-gray-700">
                      Disponible, réservé, vendu — synchronisés en temps réel pour éviter les conflits
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <FileCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Réservations et historique</h3>
                    <p className="text-gray-700">
                      Traçabilité complète des réservations, annulations et changements de statut
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Prospects et pipeline commercial</h3>
                    <p className="text-gray-700">
                      Suivi des prospects, visites, relances et conversion en acquéreurs
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <DollarSign className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Acomptes, échéanciers et preuves</h3>
                    <p className="text-gray-700">
                      Suivi des paiements par lot et par acquéreur, avec traçabilité et génération de quittances
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <FileText className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Documents acquéreurs</h3>
                    <p className="text-gray-700">
                      Contrats, pièces d&apos;identité, justificatifs — centralisés par dossier acquéreur
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <BarChart3 className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting direction</h3>
                    <p className="text-gray-700">
                      Taux de vente, stock restant, CA réalisé, prévisions — pour piloter et rassurer les investisseurs
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Database className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Base unique et traçabilité</h3>
                    <p className="text-gray-700">
                      Toutes les données centralisées, synchronisées et accessibles en temps réel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl font-semibold text-gray-900 mt-8">
              <strong>Sans un système intégré, impossible de maîtriser ces éléments simultanément.</strong>
            </p>
          </div>
        </section>

        {/* 4. COMMENT IMMOTOPIA AIDE LES PROMOTEURS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comment ImmoTopia aide les promoteurs immobiliers
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              ImmoTopia est un <strong>ERP immobilier complet</strong> qui intègre tous les modules nécessaires à la gestion d&apos;un programme immobilier. Voici comment chaque module vous aide :
            </p>

            {/* Module Promotion & Foncier */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Building2 className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module Promotion & Foncier</h3>
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Problème :</strong> Vos programmes et lots sont dispersés dans Excel, les statuts ne sont pas synchronisés, risque de doublons.
                  </p>
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Solution :</strong> Créez vos programmes, phases, bâtiments et lots dans une base unique. Définissez les caractéristiques (surface, prix, étage, orientation), gérez les statuts (disponible/réservé/vendu) et les réservations avec traçabilité complète.
                  </p>
                  <p className="text-lg text-gray-800 font-semibold">
                    <strong>Bénéfice :</strong> Maîtrise totale du stock, zéro conflit de réservation, visibilité en temps réel.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/logiciel-promotion-immobiliere-foncier-cote-divoire"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      En savoir plus sur le module Promotion/Foncier
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module CRM */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-600 p-8 rounded-r-lg mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module CRM Immobilier</h3>
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Problème :</strong> Prospects dispersés sur WhatsApp, pas de suivi du pipeline commercial, relances oubliées.
                  </p>
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Solution :</strong> Centralisez vos prospects, planifiez des visites, suivez le pipeline (de la prospection à la signature), enregistrez les relances et mesurez la performance commerciale. Le CRM est directement lié aux programmes et lots.
                  </p>
                  <p className="text-lg text-gray-800 font-semibold">
                    <strong>Bénéfice :</strong> Accélération des ventes, meilleure conversion, aucun prospect oublié.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/crm-immobilier-cote-divoire"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      En savoir plus sur le CRM immobilier
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Paiements */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-600 p-8 rounded-r-lg mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <DollarSign className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module Paiements</h3>
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Problème :</strong> Acomptes notés manuellement, pas de lien avec le lot, difficile de savoir qui a payé et qui est en retard.
                  </p>
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Solution :</strong> Enregistrez les acomptes et échéanciers par lot et par acquéreur. Traçabilité complète (Mobile Money, virement, espèces), génération automatique de quittances, alertes de retard.
                  </p>
                  <p className="text-lg text-gray-800 font-semibold">
                    <strong>Bénéfice :</strong> Zéro erreur de paiement, traçabilité totale, confiance des acquéreurs et investisseurs.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/paiement-loyer-charges-mobile-money-cote-divoire"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                    >
                      En savoir plus sur le module Paiements
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Reporting */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-600 p-8 rounded-r-lg mb-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <BarChart3 className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module Reporting & Tableaux de bord</h3>
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Problème :</strong> Impossible de connaître le taux de commercialisation en temps réel, reporting investisseurs compliqué.
                  </p>
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Solution :</strong> Tableaux de bord en temps réel : stock restant, taux de vente, CA réalisé, prévisions d&apos;encaissement. Rapports exportables pour la direction, les investisseurs et les banques.
                  </p>
                  <p className="text-lg text-gray-800 font-semibold">
                    <strong>Bénéfice :</strong> Pilotage en temps réel, crédibilité auprès des investisseurs, décisions éclairées.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      En savoir plus sur le Reporting
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl font-semibold text-gray-900 mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <strong>L&apos;avantage d&apos;un ERP intégré :</strong> Tous ces modules communiquent entre eux. Un prospect devient acquéreur, son acompte est rattaché au lot, le statut du lot est mis à jour automatiquement, et le tableau de bord reflète la vente en temps réel. Zéro ressaisie, zéro erreur.
            </p>
          </div>
        </section>

        {/* 5. CAS D'USAGE CONCRET */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Cas d&apos;usage concret : de la création du programme à la vente
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              Voici comment un promoteur utilise ImmoTopia au quotidien pour gérer un programme immobilier :
            </p>

            <div className="space-y-6">
              {/* Étape 1 */}
              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Création du programme et des lots</h3>
                    <p className="text-gray-700">
                      Le promoteur crée un nouveau programme &quot;Résidence Les Palmiers&quot; à Cocody, avec 3 bâtiments (A, B, C) et 45 lots (appartements F2, F3, F4). Chaque lot a ses caractéristiques : surface, prix, étage, orientation, statut initial &quot;disponible&quot;.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Prospects et pipeline commercial</h3>
                    <p className="text-gray-700">
                      L&apos;équipe commerciale enregistre les prospects dans le CRM, planifie des visites, suit les relances. Un prospect intéressé par un F3 au 2e étage passe en statut &quot;Visite planifiée&quot;, puis &quot;Offre en cours&quot;.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Réservation du lot</h3>
                    <p className="text-gray-700">
                      Le prospect accepte. Le commercial réserve le lot F3-B-201 pour ce prospect. Le statut du lot passe automatiquement à &quot;réservé&quot;, et le lot n&apos;est plus disponible pour d&apos;autres commerciaux. Zéro risque de doublon.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 4 */}
              <div className="bg-white border-l-4 border-emerald-600 p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Acompte enregistré et rattaché au lot</h3>
                    <p className="text-gray-700">
                      L&apos;acquéreur verse un acompte de 5 000 000 FCFA par Mobile Money. Le paiement est enregistré dans ImmoTopia, rattaché au lot F3-B-201 et à l&apos;acquéreur. Une quittance est générée automatiquement. Le système crée un échéancier pour les paiements futurs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 5 */}
              <div className="bg-white border-l-4 border-orange-600 p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Suivi acquéreur : documents et échéancier</h3>
                    <p className="text-gray-700">
                      Le dossier acquéreur centralise toutes les informations : contrat de réservation, pièces d&apos;identité, justificatifs, échéancier de paiement. L&apos;équipe peut suivre les paiements à venir et envoyer des relances automatiques en cas de retard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 6 */}
              <div className="bg-white border-l-4 border-red-600 p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Statuts synchronisés et dashboard direction</h3>
                    <p className="text-gray-700">
                      Une fois le solde payé, le statut du lot passe à &quot;vendu&quot;. Le tableau de bord direction affiche en temps réel : 44 lots restants (dont 10 réservés, 34 disponibles), taux de commercialisation 2,2%, CA réalisé, prévisions d&apos;encaissement. Le promoteur peut exporter ces données pour ses investisseurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl font-semibold text-gray-900 mt-8 bg-green-50 border border-green-200 p-6 rounded-lg">
              <strong>Résultat :</strong> Traçabilité complète, zéro erreur, zéro conflit, visibilité en temps réel pour toute l&apos;équipe et la direction.
            </p>
          </div>
        </section>

        {/* 6. POUR QUEL TYPE DE PROMOTEUR */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pour quel type de promoteur ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              ImmoTopia s&apos;adapte à tous les profils de promoteurs immobiliers en Côte d&apos;Ivoire :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Home className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Petit promoteur (un programme à la fois)</h3>
                    <p className="text-gray-700">
                      Vous développez un programme de 10 à 50 lots. ImmoTopia vous permet de maîtriser votre stock, de suivre vos acquéreurs et de rassurer vos investisseurs avec des rapports professionnels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Building2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Promoteur multi-programmes</h3>
                    <p className="text-gray-700">
                      Vous gérez plusieurs programmes simultanément (résidences, lotissements, bureaux). ImmoTopia centralise tous vos programmes dans une seule base, avec des tableaux de bord consolidés.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lotissement / Foncier</h3>
                    <p className="text-gray-700">
                      Vous commercialisez des parcelles viabilisées. ImmoTopia gère vos lots fonciers, les réservations, les paiements échelonnés et les ACD (Arrêtés de Concession Définitive).
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Équipe commerciale internalisée ou réseau de partenaires</h3>
                    <p className="text-gray-700">
                      Que vous ayez une équipe interne ou un réseau de commerciaux partenaires, ImmoTopia permet de gérer les accès, les permissions et de suivre la performance de chaque commercial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. POURQUOI UN ERP (ET PAS EXCEL + OUTILS DISPERSÉS) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pourquoi un ERP immobilier (et pas Excel + outils dispersés) ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              Beaucoup de promoteurs utilisent encore Excel, WhatsApp et des classeurs physiques. Voici pourquoi un ERP intégré change tout :
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Critère</th>
                    <th className="px-6 py-4 text-left font-semibold">Excel + Outils dispersés</th>
                    <th className="px-6 py-4 text-left font-semibold">ERP ImmoTopia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Traçabilité</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                        Faible : historique perdu, versions multiples
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        Totale : chaque action est tracée
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Maîtrise du stock</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                        Risque de doublons, statuts non synchronisés
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        Statuts synchronisés en temps réel, zéro conflit
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Accélération ventes</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                        Lente : recherche manuelle, ressaisies
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        Rapide : CRM intégré, pipeline automatisé
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Crédibilité investisseurs</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                        Faible : rapports manuels, peu fiables
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        Forte : rapports automatiques, données fiables
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Temps de gestion</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                        Élevé : ressaisies, recherches, consolidations
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        Réduit : automatisation, centralisation
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Évolutivité</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                        Limitée : fichiers lourds, complexité croissante
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        Illimitée : cloud, multi-programmes, multi-utilisateurs
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xl font-semibold text-gray-900 mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <strong>Impact concret :</strong> Les promoteurs qui passent à un ERP gagnent en moyenne 15 à 20 heures par semaine, réduisent les erreurs de 80%, et augmentent leur taux de conversion de 25% grâce à un meilleur suivi commercial.
            </p>
          </div>
        </section>

        {/* 8. INTÉGRATION DANS L'ÉCOSYSTÈME IMMOTOPIA */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Intégration dans l&apos;écosystème ImmoTopia
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              Le module Promoteur ne fonctionne pas seul. Il s&apos;intègre parfaitement avec les autres modules de l&apos;ERP ImmoTopia pour une gestion complète :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link
                href="/logiciel-promotion-immobiliere-foncier-cote-divoire"
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all hover:scale-105 no-underline"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Building2 className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Module Promotion & Foncier
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Gestion complète des programmes, phases, bâtiments, lots et réservations
                    </p>
                    <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/crm-immobilier-cote-divoire"
                className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all hover:scale-105 no-underline"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Users className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      CRM Immobilier
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Prospects, pipeline commercial, visites, relances et conversion
                    </p>
                    <span className="inline-flex items-center text-purple-600 font-semibold text-sm">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all hover:scale-105 no-underline"
              >
                <div className="flex items-start gap-3 mb-3">
                  <DollarSign className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      Paiements & Mobile Money
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Acomptes, échéanciers, traçabilité et quittances automatiques
                    </p>
                    <span className="inline-flex items-center text-green-600 font-semibold text-sm">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                className="group bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all hover:scale-105 no-underline"
              >
                <div className="flex items-start gap-3 mb-3">
                  <BarChart3 className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      Reporting & Tableaux de bord
                    </h3>
                    <p className="text-gray-700 mb-3">
                      KPI, taux de vente, stock, CA, prévisions — en temps réel
                    </p>
                    <span className="inline-flex items-center text-orange-600 font-semibold text-sm">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Découvrez l&apos;ERP ImmoTopia complet</h3>
              <p className="text-lg mb-6 text-white/90">
                Le module Promoteur fait partie d&apos;un ERP immobilier complet qui couvre tous les besoins des professionnels de l&apos;immobilier en Côte d&apos;Ivoire.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white font-semibold"
              >
                <Link href="/logiciel-immobilier-cote-divoire">
                  Découvrir l&apos;ERP ImmoTopia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 9. FAQ PROMOTEURS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes des promoteurs immobiliers
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    <span className="text-lg pr-8">{item.question}</span>
                    <svg
                      className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CTA FINAL */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Zap className="h-4 w-4" />
                Commencez dès aujourd&apos;hui
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Prêt à piloter vos programmes immobiliers comme un pro ?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Rejoignez les promoteurs qui ont choisi ImmoTopia pour maîtriser leurs lots, accélérer leurs ventes et rassurer leurs investisseurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/contact?demo=true">
                    Demander une démo gratuite
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg"
                >
                  <Link href="/tarifs">
                    Voir les tarifs
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/80">
                Sans engagement · Configuration rapide · Support inclus · Migration assistée
              </p>
            </div>
          </div>
        </section>

        {/* Liens internes supplémentaires */}
        <section className="mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Découvrez aussi
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all no-underline"
              >
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  L&apos;ERP ImmoTopia complet
                </h4>
                <p className="text-sm text-gray-600">
                  Découvrez tous les modules de l&apos;ERP immobilier
                </p>
              </Link>
              <Link
                href="/tarifs"
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all no-underline"
              >
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Tarifs et formules
                </h4>
                <p className="text-sm text-gray-600">
                  Choisissez la formule adaptée à votre activité
                </p>
              </Link>
              <Link
                href="/contact?demo=true"
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all no-underline"
              >
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Demander une démo
                </h4>
                <p className="text-sm text-gray-600">
                  Voyez ImmoTopia en action avec vos données
                </p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}


