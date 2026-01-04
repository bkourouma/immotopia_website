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
  Receipt,
  Wrench,
  Bell,
  CreditCard,
  ClipboardCheck,
  TrendingDown,
  Search,
  UserCheck,
  Eye,
  PieChart,
  FileCheck,
  Wallet,
  Activity,
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Logiciel pour propriétaires bailleurs en Côte d\'Ivoire | ImmoTopia',
    description:
      'ImmoTopia aide les propriétaires bailleurs en Côte d\'Ivoire : suivi des loyers, impayés, quittances, paiements Mobile Money, maintenance et reporting, dans un ERP immobilier complet.',
    canonicalUrl: '/pour-qui/proprietaires-bailleurs',
    keywords: [
      'logiciel propriétaire bailleur Côte d\'Ivoire',
      'suivi loyers propriétaire',
      'gestion loyers en ligne Côte d\'Ivoire',
      'quittance loyer automatique',
      'état de compte propriétaire bailleur',
      'suivi impayés loyer',
      'gestion multi-biens Abidjan',
      'logiciel encaissement loyers',
      'suivi rentabilité locative',
      'paiement loyer Mobile Money',
    ],
  },
  '/pour-qui/proprietaires-bailleurs'
);

const faqItems = [
  {
    question: 'Peut-on suivre les loyers par bien et par locataire ?',
    answer:
      'Oui, ImmoTopia vous permet de suivre chaque bien individuellement avec ses locataires, ses contrats, ses échéances et ses encaissements. Vous avez une vue détaillée par bien (taux d\'occupation, loyers perçus, impayés) et par locataire (historique de paiements, retards, quittances). Vous pouvez également consulter une vue globale de votre portefeuille.',
  },
  {
    question: 'Les quittances sont-elles automatiques ?',
    answer:
      'Oui, dès qu\'un paiement est enregistré et rattaché à un contrat et une période, ImmoTopia génère automatiquement une quittance de loyer au format PDF professionnel. La quittance contient toutes les informations légales (locataire, bien, période, montant, mode de paiement) et peut être envoyée par email ou téléchargée instantanément.',
  },
  {
    question: 'Peut-on encaisser via Mobile Money ?',
    answer:
      'Absolument. ImmoTopia intègre les paiements Mobile Money (Orange Money, MTN Money, Moov Money, Wave). Chaque paiement Mobile Money est automatiquement tracé, rattaché au contrat et à la période concernée, et génère une quittance instantanée. Cela élimine les erreurs de saisie manuelle et vous donne une preuve immédiate de l\'encaissement.',
  },
  {
    question: 'Peut-on suivre les impayés et retards ?',
    answer:
      'Oui, ImmoTopia détecte automatiquement les retards de paiement dès qu\'une échéance est dépassée. Vous avez un tableau de bord des impayés avec l\'historique complet par locataire et par bien. Vous pouvez structurer vos relances (première relance, mise en demeure) et conserver toutes les preuves de communication pour faciliter les démarches en cas de litige.',
  },
  {
    question: 'Peut-on gérer les incidents de maintenance ?',
    answer:
      'Oui, le module Maintenance & Ticketing permet de créer des tickets pour chaque incident (plomberie, électricité, serrurerie, etc.), d\'assigner des prestataires, de suivre l\'avancement des interventions et de conserver l\'historique complet par bien. Cela améliore la satisfaction locataire et facilite la gestion des litiges ou des réclamations.',
  },
  {
    question: 'Est-ce adapté si j\'ai peu de biens ?',
    answer:
      'Oui, ImmoTopia s\'adapte à toutes les tailles de portefeuilles. Que vous ayez 2 biens ou 50, le système reste simple et efficace. Vous pouvez démarrer avec les fonctionnalités essentielles (loyers, quittances, paiements) et activer progressivement d\'autres modules selon vos besoins. L\'abonnement est flexible et évolutif.',
  },
  {
    question: 'Puis-je commencer uniquement avec la gestion locative ?',
    answer:
      'Oui, ImmoTopia est modulaire. Vous pouvez démarrer avec le module Gestion locative (loyers, contrats, quittances, impayés) et activer progressivement les autres modules (paiements Mobile Money, maintenance, reporting avancé) selon l\'évolution de vos besoins. Cette approche permet de maîtriser progressivement l\'outil et de limiter l\'investissement initial.',
  },
];

export default function ProprietairesBailleursPage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* 1. HERO SECTION */}
        <header className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Home className="h-4 w-4" />
            Pour les propriétaires bailleurs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Le logiciel qui vous donne une vision claire de vos loyers en Côte d&apos;Ivoire
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Encaissements, quittances, impayés et maintenance — centralisés avec ImmoTopia. Découvrez{' '}
            <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              notre module de gestion locative
            </Link>
            {' '}et{' '}
            <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              paiement Mobile Money
            </Link>
            {' '}pour piloter votre patrimoine locatif avec contrôle et sérénité.
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

        {/* 2. LES PROBLÈMES DES PROPRIÉTAIRES (RÉALITÉ TERRAIN) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            La réalité des propriétaires bailleurs en Côte d&apos;Ivoire
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Vous possédez plusieurs biens locatifs à Abidjan, Bouaké ou ailleurs en Côte d&apos;Ivoire. Votre quotidien ressemble probablement à ceci :
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Encaissements non suivis en temps réel
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous ne savez pas toujours qui a payé et qui est en retard sans vérifier manuellement</li>
                <li>Les paiements en cash ou Mobile Money ne sont pas toujours tracés immédiatement</li>
                <li>Vous découvrez les impayés trop tard, parfois après plusieurs semaines</li>
                <li>Vous n&apos;avez pas de vision globale de vos encaissements mensuels</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Quittances manuelles ou absentes
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous rédigez les quittances à la main ou dans Word, ce qui prend du temps</li>
                <li>Certaines quittances ne sont jamais émises, ce qui pose problème en cas de litige</li>
                <li>Vous n&apos;avez pas de preuve systématique des paiements reçus</li>
                <li>Les locataires vous relancent pour obtenir leurs quittances</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Incidents non tracés
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les incidents (plomberie, électricité, serrurerie) sont gérés de manière informelle</li>
                <li>Vous n&apos;avez pas d&apos;historique des interventions par bien</li>
                <li>Les prestataires ne sont pas suivis, les délais non respectés</li>
                <li>Vous ne savez pas combien vous dépensez en maintenance par bien</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Manque de reporting clair
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous n&apos;avez pas de vue d&apos;ensemble de votre portefeuille locatif</li>
                <li>Difficile de savoir quel bien est le plus rentable ou le plus problématique</li>
                <li>Pas de synthèse mensuelle ou annuelle pour votre comptabilité</li>
                <li>Vous passez des heures à reconstituer les données pour votre expert-comptable</li>
              </ul>
            </div>

            <p className="text-xl font-semibold text-gray-900 mt-8">
              Résultat : vous perdez du temps, de l&apos;argent et de la sérénité. ImmoTopia vous aide à reprendre le contrôle.
            </p>
          </div>
        </section>

        {/* 3. CE QU'UN BAILLEUR DOIT PILOTER (CHECKLIST) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ce qu&apos;un propriétaire bailleur doit piloter au quotidien
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              Pour gérer efficacement votre patrimoine locatif, vous devez avoir une vision claire et structurée de plusieurs éléments clés :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <Home className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Liste des biens + locataires</h3>
                  <p className="text-gray-700">
                    Vue complète de votre portefeuille : adresses, surfaces, loyers, locataires en place, baux en cours.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Échéances loyers</h3>
                  <p className="text-gray-700">
                    Calendrier des loyers à percevoir chaque mois, avec alertes automatiques pour les échéances à venir.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <Wallet className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Encaissements (Mobile Money/cash)</h3>
                  <p className="text-gray-700">
                    Suivi de tous les paiements reçus, rattachés automatiquement au contrat et à la période concernée.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <TrendingDown className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Impayés et retards</h3>
                  <p className="text-gray-700">
                    Détection automatique des retards, historique complet par locataire, outils de relance structurée.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <Receipt className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quittances et états de compte</h3>
                  <p className="text-gray-700">
                    Génération automatique de quittances professionnelles et d&apos;états de compte mensuels ou annuels.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dépôts de garantie et pénalités</h3>
                  <p className="text-gray-700">
                    Suivi des cautions versées, des pénalités de retard et des régularisations en fin de bail.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <Wrench className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Incidents & interventions</h3>
                  <p className="text-gray-700">
                    Historique complet des incidents par bien, suivi des prestataires et des coûts de maintenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <PieChart className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Vue globale rentabilité</h3>
                  <p className="text-gray-700">
                    Synthèse de vos revenus locatifs, taux d&apos;occupation, impayés et dépenses par bien ou par période.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              L&apos;objectif : avoir une vision claire et structurée de votre patrimoine locatif
            </p>
            <p className="text-gray-700">
              ImmoTopia centralise toutes ces informations dans un seul outil, accessible à tout moment, depuis votre ordinateur ou votre smartphone.
            </p>
          </div>
        </section>

        {/* 4. COMMENT IMMOTOPIA VOUS AIDE (MODULES CLÉS) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comment ImmoTopia vous aide à piloter votre patrimoine locatif
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              ImmoTopia est un ERP immobilier complet qui centralise tous les aspects de la gestion locative. Pour les propriétaires bailleurs, les bénéfices viennent de l&apos;intégration de plusieurs modules clés :
            </p>
          </div>

          {/* Module 1: Gestion locative */}
          <div className="mb-10 bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gestion locative</h3>
                <p className="text-lg text-gray-600">Suivi loyers, contrats, quittances, impayés</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Problème
                </h4>
                <p className="text-gray-700">
                  Vous suivez vos loyers dans Excel ou un cahier, avec des risques d&apos;erreurs et de pertes d&apos;information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Solution
                </h4>
                <p className="text-gray-700">
                  ImmoTopia centralise tous vos biens, contrats, échéances et paiements dans une interface unique et intuitive.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Bénéfice
                </h4>
                <p className="text-gray-700">
                  Vision claire de vos encaissements, détection automatique des retards, quittances professionnelles instantanées.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/gestion-locative-cote-divoire"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                En savoir plus sur la gestion locative
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Module 2: Paiements Mobile Money */}
          <div className="mb-10 bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Paiements Mobile Money</h3>
                <p className="text-lg text-gray-600">Encaissement tracé + reçus automatiques</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Problème
                </h4>
                <p className="text-gray-700">
                  Les paiements Mobile Money ne sont pas toujours tracés immédiatement, ce qui crée des confusions et des litiges.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Solution
                </h4>
                <p className="text-gray-700">
                  Chaque paiement Mobile Money est automatiquement rattaché au contrat et à la période, avec génération instantanée de quittance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Bénéfice
                </h4>
                <p className="text-gray-700">
                  Preuve immédiate de l&apos;encaissement, élimination des erreurs de saisie, satisfaction locataire accrue.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                En savoir plus sur les paiements Mobile Money
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Module 3: Maintenance */}
          <div className="mb-10 bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Maintenance & Ticketing</h3>
                <p className="text-lg text-gray-600">Tickets incidents, prestataires, historique</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Problème
                </h4>
                <p className="text-gray-700">
                  Les incidents sont gérés de manière informelle, sans historique ni suivi des prestataires.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Solution
                </h4>
                <p className="text-gray-700">
                  Créez des tickets pour chaque incident, assignez des prestataires, suivez l&apos;avancement et conservez l&apos;historique complet.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Bénéfice
                </h4>
                <p className="text-gray-700">
                  Meilleure satisfaction locataire, suivi des coûts de maintenance, facilitation des litiges.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/maintenance-immobiliere-ticketing-cote-divoire"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                En savoir plus sur la maintenance
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Module 4: Reporting */}
          <div className="mb-10 bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Reporting & Tableaux de bord</h3>
                <p className="text-lg text-gray-600">Synthèse par bien / locataire / période</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Problème
                </h4>
                <p className="text-gray-700">
                  Vous n&apos;avez pas de vue d&apos;ensemble de votre portefeuille, difficile de savoir quel bien est rentable.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Solution
                </h4>
                <p className="text-gray-700">
                  Tableaux de bord avec synthèse des revenus, taux d&apos;occupation, impayés et dépenses par bien ou par période.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Bénéfice
                </h4>
                <p className="text-gray-700">
                  Décisions éclairées, optimisation de la rentabilité, export facile pour votre expert-comptable.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                En savoir plus sur le reporting
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-600" />
              Accès sécurisé depuis n&apos;importe où
            </p>
            <p className="text-gray-700">
              ImmoTopia est accessible depuis votre ordinateur ou votre smartphone, à tout moment. Vous gardez le contrôle de votre patrimoine locatif, même à distance.
            </p>
          </div>
        </section>

        {/* 5. CAS D'USAGE CONCRET (SCÉNARIO) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Cas d&apos;usage concret : du contrat à l&apos;état de compte
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              Voici comment ImmoTopia vous accompagne dans la gestion quotidienne d&apos;un bien locatif, de la signature du bail à la synthèse mensuelle :
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bien loué → contrat → échéances</h3>
                <p className="text-gray-700">
                  Vous créez un contrat de location dans ImmoTopia avec les informations du locataire, le montant du loyer, la date d&apos;échéance et la durée du bail. Le système génère automatiquement les échéances mensuelles et vous alerte avant chaque date limite.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Paiement Mobile Money → rattaché au mois</h3>
                <p className="text-gray-700">
                  Le locataire paie son loyer via Orange Money, MTN Money ou Wave. Vous enregistrez le paiement dans ImmoTopia, qui le rattache automatiquement au contrat et à la période concernée (par exemple, janvier 2026). Le système détecte si le paiement est complet, partiel ou en retard.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quittance automatique</h3>
                <p className="text-gray-700">
                  Dès que le paiement est enregistré, ImmoTopia génère automatiquement une quittance de loyer au format PDF professionnel. La quittance contient toutes les informations légales (locataire, bien, période, montant, mode de paiement) et peut être envoyée par email ou téléchargée instantanément.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Retard → relance structurée</h3>
                <p className="text-gray-700">
                  Si un locataire ne paie pas à temps, ImmoTopia détecte automatiquement le retard et vous alerte. Vous pouvez alors structurer vos relances (première relance amiable, mise en demeure) et conserver toutes les preuves de communication pour faciliter les démarches en cas de litige.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident → ticket → intervention → clôture</h3>
                <p className="text-gray-700">
                  Le locataire signale un problème de plomberie. Vous créez un ticket dans ImmoTopia, assignez un plombier, suivez l&apos;avancement de l&apos;intervention et enregistrez le coût. Une fois l&apos;intervention terminée, le ticket est clôturé et l&apos;historique est conservé pour le bien.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fin de mois : état de compte du portefeuille</h3>
                <p className="text-gray-700">
                  À la fin du mois, vous consultez votre tableau de bord pour avoir une vue d&apos;ensemble : loyers perçus, impayés, taux d&apos;occupation, dépenses de maintenance. Vous pouvez exporter un état de compte détaillé pour votre comptabilité ou votre banque.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-lg">
            <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Résultat : un processus fluide, tracé et professionnel
            </p>
            <p className="text-gray-700">
              Chaque étape est documentée, chaque paiement est prouvé, chaque incident est suivi. Vous gagnez du temps, vous réduisez les litiges et vous rassurez vos locataires.
            </p>
          </div>
        </section>

        {/* 6. POUR QUEL TYPE DE PROPRIÉTAIRE ? */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pour quel type de propriétaire bailleur ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              ImmoTopia s&apos;adapte à tous les profils de propriétaires bailleurs, quelle que soit la taille de votre portefeuille ou votre mode de gestion :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Home className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Propriétaire de 2–10 biens</h3>
                  <p className="text-gray-700">
                    Vous avez quelques biens locatifs et vous voulez un outil simple pour suivre vos loyers, générer des quittances et détecter les retards. ImmoTopia vous offre une solution professionnelle sans complexité inutile.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Building2 className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Propriétaire multi-biens (10+ biens)</h3>
                  <p className="text-gray-700">
                    Vous gérez un portefeuille important et vous avez besoin d&apos;une vision globale de vos encaissements, de vos impayés et de votre rentabilité. ImmoTopia vous offre des tableaux de bord complets et des exports pour votre comptabilité.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Eye className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Propriétaire à distance</h3>
                  <p className="text-gray-700">
                    Vous vivez à l&apos;étranger ou dans une autre ville et vous voulez garder le contrôle de vos biens locatifs. ImmoTopia vous offre un accès sécurisé depuis n&apos;importe où, avec des alertes en temps réel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <UserCheck className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Propriétaire qui délègue à un gestionnaire</h3>
                  <p className="text-gray-700">
                    Vous confiez la gestion de vos biens à un gestionnaire locatif, mais vous voulez garder une visibilité totale sur les encaissements, les impayés et les interventions. ImmoTopia vous offre cette transparence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Quel que soit votre profil, ImmoTopia s&apos;adapte à vos besoins
            </p>
            <p className="text-gray-700">
              Vous pouvez démarrer avec les fonctionnalités essentielles et activer progressivement d&apos;autres modules selon l&apos;évolution de vos besoins. L&apos;abonnement est flexible et évolutif.
            </p>
          </div>
        </section>

        {/* 7. POURQUOI PASSER À UN SYSTÈME STRUCTURÉ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pourquoi passer d&apos;Excel/WhatsApp à un système structuré ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              Beaucoup de propriétaires bailleurs gèrent encore leurs loyers avec Excel, WhatsApp ou un cahier. Voici pourquoi un système structuré comme ImmoTopia fait la différence :
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Critère</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">WhatsApp / Excel</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ERP ImmoTopia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Suivi des paiements</td>
                  <td className="px-6 py-4 text-gray-700">Manuel, risque d&apos;erreurs</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">Automatique, tracé, fiable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Quittances</td>
                  <td className="px-6 py-4 text-gray-700">Manuelles ou absentes</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">Automatiques, professionnelles</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Détection des retards</td>
                  <td className="px-6 py-4 text-gray-700">Tardive, manuelle</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">Immédiate, alertes automatiques</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Preuves de paiement</td>
                  <td className="px-6 py-4 text-gray-700">Dispersées, difficiles à retrouver</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">Centralisées, accessibles instantanément</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Suivi maintenance</td>
                  <td className="px-6 py-4 text-gray-700">Informel, pas d&apos;historique</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">Tickets structurés, historique complet</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Reporting</td>
                  <td className="px-6 py-4 text-gray-700">Reconstitution manuelle, chronophage</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">Tableaux de bord automatiques, exports faciles</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Accès à distance</td>
                  <td className="px-6 py-4 text-gray-700">Limité, fichiers locaux</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">Depuis n&apos;importe où, sécurisé</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Évolutivité</td>
                  <td className="px-6 py-4 text-gray-700">Difficile à faire évoluer</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">Modulaire, s&apos;adapte à votre croissance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-green-600" />
                Moins de pertes
              </h3>
              <p className="text-gray-700">
                Détection immédiate des retards, relances structurées, réduction des impayés.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-green-600" />
                Plus de preuves
              </h3>
              <p className="text-gray-700">
                Quittances automatiques, historique complet, facilitation des litiges.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-green-600" />
                Meilleure organisation
              </h3>
              <p className="text-gray-700">
                Tout centralisé, accessible à tout moment, gain de temps considérable.
              </p>
            </div>
          </div>
        </section>

        {/* 8. INTÉGRATION DANS L'ÉCOSYSTÈME IMMOTOPIA */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            ImmoTopia : un ERP immobilier complet pour les propriétaires bailleurs
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              ImmoTopia n&apos;est pas qu&apos;un simple logiciel de gestion locative. C&apos;est un ERP immobilier complet qui centralise tous les aspects de votre activité de propriétaire bailleur :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link
              href="/gestion-locative-cote-divoire"
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Gestion locative
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Loyers, contrats, quittances, impayés, relances
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/paiement-loyer-charges-mobile-money-cote-divoire"
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Smartphone className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Paiements Mobile Money
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Orange Money, MTN, Moov, Wave — tracés et prouvés
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/maintenance-immobiliere-ticketing-cote-divoire"
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Wrench className="h-8 w-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Maintenance & Ticketing
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Incidents, prestataires, interventions, historique
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <BarChart3 className="h-8 w-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Reporting & KPI
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Tableaux de bord, synthèses, exports comptables
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/logiciel-immobilier-cote-divoire"
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Target className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    ERP ImmoTopia complet
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Découvrez toutes les fonctionnalités de l&apos;ERP
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                Découvrir l&apos;ERP
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/tarifs"
              className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Tarifs & Abonnements
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Formules flexibles et évolutives
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                Voir les tarifs
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              Un écosystème intégré pour une gestion optimale
            </p>
            <p className="text-gray-700">
              Tous les modules ImmoTopia communiquent entre eux : un paiement enregistré génère automatiquement une quittance, un incident crée un ticket de maintenance, un état de compte synthétise tous vos revenus et dépenses. Vous gagnez du temps et vous évitez les erreurs de saisie.
            </p>
          </div>
        </section>

        {/* 9. FAQ PROPRIÉTAIRES BAILLEURS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes des propriétaires bailleurs
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex items-start justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 group-open:text-blue-600 transition-colors">
                    {item.question}
                  </h3>
                  <svg
                    className="h-5 w-5 text-gray-500 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Vous avez d&apos;autres questions ? Contactez-nous pour en savoir plus.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </section>

        {/* 10. CTA FINAL */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à reprendre le contrôle de votre patrimoine locatif ?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Rejoignez les propriétaires bailleurs qui utilisent ImmoTopia pour suivre leurs loyers, réduire les impayés et optimiser leur rentabilité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
              >
                <Link href="/tarifs">Voir les tarifs</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              Sans engagement · Configuration rapide · Support inclus
            </p>
          </div>
        </section>

        {/* Liens internes supplémentaires */}
        <section className="mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pour aller plus loin</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Découvrir l&apos;ERP ImmoTopia complet
              </Link>
              <Link
                href="/gestion-locative-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Module Gestion locative
              </Link>
              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Paiements Mobile Money
              </Link>
              <Link
                href="/maintenance-immobiliere-ticketing-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Maintenance & Ticketing
              </Link>
              <Link
                href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Reporting & Tableaux de bord
              </Link>
              <Link
                href="/tarifs"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Tarifs & Abonnements
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}


