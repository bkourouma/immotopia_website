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
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Logiciel de gestion locative en Côte d\'Ivoire | ImmoTopia',
    description:
      'ImmoTopia simplifie la gestion locative en Côte d\'Ivoire : loyers, quittances, impayés, paiements Mobile Money, maintenance et reporting, dans un ERP immobilier complet.',
    canonicalUrl: '/pour-qui/gestionnaires-locatifs',
    keywords: [
      'logiciel gestion locative Côte d\'Ivoire',
      'gestion loyers Côte d\'Ivoire',
      'suivi impayés loyer Abidjan',
      'quittance de loyer automatique',
      'logiciel quittances loyers',
      'paiement loyer Mobile Money',
      'gestion locative Abidjan',
      'logiciel gestionnaire immobilier',
      'suivi encaissement loyers',
      'relance impayés automatique',
    ],
  },
  '/pour-qui/gestionnaires-locatifs'
);

const faqItems = [
  {
    question: 'Peut-on gérer plusieurs propriétaires et portefeuilles ?',
    answer:
      'Oui, ImmoTopia permet de gérer plusieurs propriétaires simultanément avec des portefeuilles distincts. Chaque propriétaire a son propre espace avec ses biens, ses contrats, ses encaissements et ses rapports. Vous pouvez générer des états de compte individuels et suivre la performance de chaque portefeuille séparément.',
  },
  {
    question: 'Les quittances sont-elles automatiques ?',
    answer:
      'Oui, les quittances de loyer sont générées automatiquement dès qu\'un paiement est enregistré et rattaché à un contrat et une période. Le système génère un PDF professionnel avec toutes les informations légales (locataire, bien, période, montant, mode de paiement). Les quittances peuvent être envoyées par email ou téléchargées instantanément.',
  },
  {
    question: 'Peut-on suivre les impayés et relances ?',
    answer:
      'Absolument. ImmoTopia détecte automatiquement les retards de paiement dès qu\'une échéance est dépassée. Vous pouvez suivre l\'historique complet des impayés par locataire, par bien ou par propriétaire. Le système vous permet de structurer vos relances (première relance, mise en demeure) et de conserver toutes les preuves de communication.',
  },
  {
    question: 'Peut-on encaisser via Mobile Money ?',
    answer:
      'Oui, ImmoTopia intègre les paiements Mobile Money (Orange Money, MTN Money, Moov Money, Wave). Chaque paiement Mobile Money est automatiquement tracé, rattaché au contrat et à la période concernée, et génère une quittance instantanée. Cela élimine les erreurs de saisie manuelle et accélère considérablement le processus d\'encaissement.',
  },
  {
    question: 'Peut-on suivre les incidents et interventions ?',
    answer:
      'Oui, le module Maintenance & Ticketing permet de créer des tickets pour chaque incident (plomberie, électricité, serrurerie, etc.), d\'assigner des prestataires, de suivre l\'avancement des interventions et de conserver l\'historique complet par bien. Cela améliore la satisfaction locataire et facilite la gestion des litiges.',
  },
  {
    question: 'Est-ce adapté aux petits gestionnaires ?',
    answer:
      'Oui, ImmoTopia s\'adapte à toutes les tailles de portefeuilles. Que vous gériez 10 biens ou 300, le système reste simple et efficace. Vous pouvez démarrer avec les fonctionnalités essentielles (loyers, quittances, paiements) et activer progressivement d\'autres modules selon vos besoins. L\'abonnement est flexible et évolutif.',
  },
];

export default function GestionnairesLocatifsPage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* 1. HERO SECTION */}
        <header className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#2563EB] hover:underline">ImmoTopia</Link>
            <span>•</span>
            <Link href="/pour-qui" className="hover:text-[#2563EB] hover:underline">Solutions par profil</Link>
            <span>•</span>
            <span className="text-gray-900 font-medium">Gestionnaires locatifs</span>
          </div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Building2 className="h-4 w-4" />
            Pour les gestionnaires locatifs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Le logiciel qui simplifie la gestion locative en Côte d&apos;Ivoire
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Loyers, quittances, impayés et{' '}
            <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              paiements Mobile Money
            </Link>
            {' '}— intégrés à notre{' '}
            <Link href="/la-solution/saas-gestion" className="font-semibold text-[#2563EB] hover:underline">
              SaaS de gestion
            </Link>
            . Découvrez notre{' '}
            <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              solution de gestion locative en Côte d'Ivoire
            </Link>
            {' '}et réduisez les retards, gagnez du temps et rassurez vos propriétaires.
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

        {/* 2. LES DOULEURS QUOTIDIENNES */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            La réalité terrain de la gestion locative
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Vous gérez un portefeuille locatif à Abidjan, Bouaké ou ailleurs en Côte d&apos;Ivoire. Votre quotidien ressemble probablement à ceci :
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Suivi des loyers à la main
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous suivez les loyers dans Excel ou un cahier, avec des risques d&apos;erreurs</li>
                <li>Les retards de paiement sont détectés trop tard, parfois après plusieurs semaines</li>
                <li>Les relances se font de manière informelle (WhatsApp, appels), sans traçabilité</li>
                <li>Impossible de savoir rapidement qui a payé, qui est en retard, et de combien</li>
                <li>Les quittances sont rédigées manuellement, avec des erreurs de calcul ou de période</li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-amber-600" />
                Litiges et preuves manquantes
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>En cas de litige, difficile de prouver qu&apos;un locataire a bien payé ou non</li>
                <li>Les états de compte propriétaire sont longs à préparer et souvent incomplets</li>
                <li>Les incidents de maintenance ne sont pas tracés, pas d&apos;historique par bien</li>
                <li>Impossible de générer rapidement un rapport d&apos;encaissement pour un propriétaire</li>
                <li>Chaque fin de mois est une course contre la montre pour tout réconcilier</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Besoin d&apos;un système unique et fiable
              </h3>
              <p className="mb-3">
                Vous avez besoin d&apos;un système qui centralise tout : contrats, échéances, paiements, quittances, relances, incidents et reporting. Un système qui vous fait gagner du temps, réduit les impayés et rassure vos propriétaires.
              </p>
              <p className="font-semibold text-blue-900">
                C&apos;est exactement ce que fait ImmoTopia.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CE QU'UN GESTIONNAIRE DOIT PILOTER */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ce qu&apos;un gestionnaire locatif doit piloter au quotidien
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl mb-6">
              La gestion locative ne se résume pas à encaisser des loyers. C&apos;est un métier complexe qui exige rigueur, réactivité et traçabilité. Voici ce que vous devez gérer chaque jour :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contrats et échéances</h3>
                  <p className="text-gray-700">
                    Suivi des contrats de location, dates de début et fin, montants des loyers, charges, dépôts de garantie, pénalités de retard. Chaque contrat doit être à jour et accessible instantanément.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CreditCard className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Encaissements et paiements</h3>
                  <p className="text-gray-700">
                    Enregistrement des paiements (Mobile Money, espèces, virement, chèque), rattachement à la période concernée, génération automatique des quittances. Zéro erreur de saisie.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Receipt className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quittances et états de compte</h3>
                  <p className="text-gray-700">
                    Génération automatique des{' '}
                    <Link href="/modeles/quittance-loyer-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                      quittances de loyer conformes
                    </Link>
                    , états de compte locataire et propriétaire, historique complet des paiements. Téléchargez aussi notre{' '}
                    <Link href="/modeles/contrat-bail-habitation-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                      modèle de contrat de bail
                    </Link>
                    {' '}et{' '}
                    <Link href="/modeles/releve-loyers-etat-de-compte-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                      modèle de relevé de loyers
                    </Link>
                    . Tout doit être professionnel et vérifiable.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <TrendingDown className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Impayés et relances</h3>
                  <p className="text-gray-700">
                    Détection automatique des retards, suivi des impayés par locataire, relances structurées (première relance, mise en demeure), historique complet. Découvrez notre{' '}
                    <Link href="/guides/reduire-impayes-loyers-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                      guide pour réduire les impayés de loyers
                    </Link>
                    {' '}et{' '}
                    <Link href="/gestion-locative-vs-excel" className="font-semibold text-[#2563EB] hover:underline">
                      pourquoi quitter Excel
                    </Link>
                    {' '}pour la gestion locative.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Incidents et interventions</h3>
                  <p className="text-gray-700">
                    Création de tickets pour chaque incident (plomberie, électricité, serrurerie), assignation de prestataires, suivi de l&apos;avancement, historique par bien. Satisfaction locataire garantie.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting propriétaire</h3>
                  <p className="text-gray-700">
                    Taux d&apos;encaissement, impayés, retards, revenus par bien, par propriétaire, par période. Vos propriétaires doivent avoir confiance en votre gestion et en vos chiffres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMMENT IMMOTOPIA AIDE LES GESTIONNAIRES */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comment ImmoTopia aide les gestionnaires locatifs
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              ImmoTopia est un ERP immobilier complet. La gestion locative est un module clé, intégré avec le CRM, les paiements, la maintenance et le reporting. Voici comment chaque module vous aide concrètement :
            </p>
          </div>
          <div className="space-y-8">
            {/* Module Gestion Locative */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Home className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Module Gestion Locative</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Le cœur de votre activité : loyers, paiements, quittances, impayés.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Problème résolu
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Fini les fichiers Excel dispersés et les erreurs de saisie. Tous vos contrats, échéances et paiements sont centralisés dans un seul système.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Bénéfice concret
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Vous savez instantanément qui a payé, qui est en retard, et de combien. Les quittances sont générées automatiquement. Vous gagnez des heures chaque semaine.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/gestion-locative-cote-divoire"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  En savoir plus sur le module Gestion Locative
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Module Paiements Mobile Money */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Smartphone className="h-10 w-10 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Module Paiements Mobile Money</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Encaissement tracé, rattachement automatique, quittances instantanées.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Problème résolu
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Fini les paiements Mobile Money non tracés ou mal rattachés. Chaque paiement Orange Money, MTN Money, Moov Money ou Wave est automatiquement enregistré et rattaché au contrat et à la période.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    Bénéfice concret
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Zéro erreur de saisie, quittances générées instantanément, preuve de paiement irréfutable. Vous réduisez les litiges et accélérez l&apos;encaissement.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/paiement-loyer-charges-mobile-money-cote-divoire"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  En savoir plus sur les paiements Mobile Money
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Module Maintenance & Ticketing */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Wrench className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Module Maintenance & Ticketing</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Incidents, prestataires, interventions, historique par bien.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Problème résolu
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Fini les incidents non tracés ou oubliés. Chaque problème (plomberie, électricité, serrurerie) devient un ticket avec un statut, un prestataire assigné et un historique complet.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-600" />
                    Bénéfice concret
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Vous améliorez la satisfaction locataire, réduisez les litiges et conservez un historique complet par bien. En cas de litige, vous avez toutes les preuves.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/maintenance-immobiliere-ticketing-cote-divoire"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
                >
                  En savoir plus sur la maintenance et le ticketing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Module Reporting */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-10 w-10 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Module Reporting & KPI</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Taux d&apos;encaissement, impayés, retards, revenus par bien, par propriétaire.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Problème résolu
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Fini les rapports manuels et incomplets. Vous générez instantanément des états de compte propriétaire, des relevés d&apos;encaissement, des analyses d&apos;impayés.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    Bénéfice concret
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Vous rassurez vos propriétaires avec des rapports professionnels et précis. Vous pilotez votre activité en temps réel et prenez de meilleures décisions.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
                >
                  En savoir plus sur le reporting et les KPI
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CAS D'USAGE CONCRET */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Cas d&apos;usage concret : un mois de gestion locative avec ImmoTopia
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              Voici comment ImmoTopia simplifie votre quotidien, du début à la fin du mois :
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Création du bien et du contrat</h3>
                  <p className="text-gray-700">
                    Vous créez le bien (villa 3 chambres à Cocody), puis le contrat de location avec le locataire, le montant du loyer (500 000 FCFA), les charges (50 000 FCFA), le dépôt de garantie, la date de début et la périodicité (mensuelle). Le système génère automatiquement les échéances.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Échéance mensuelle</h3>
                  <p className="text-gray-700">
                    Le 1er du mois, le système vous rappelle que le loyer de 550 000 FCFA (loyer + charges) est dû. Vous voyez immédiatement dans le tableau de bord que ce bien a une échéance en cours.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Paiement Mobile Money rattaché</h3>
                  <p className="text-gray-700">
                    Le 5 du mois, le locataire paie 550 000 FCFA via Orange Money. Vous enregistrez le paiement dans ImmoTopia, le rattachez au contrat et à la période (janvier 2026). Le système génère automatiquement la quittance de loyer.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-indigo-600 p-6 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-3">
                  <span className="text-indigo-600 font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quittance automatique</h3>
                  <p className="text-gray-700">
                    La quittance est générée instantanément en PDF avec toutes les informations légales (locataire, bien, période, montant, mode de paiement). Vous l&apos;envoyez par email au locataire en un clic.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-red-600 p-6 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
                  <span className="text-red-600 font-bold text-lg">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Retard → relance structurée</h3>
                  <p className="text-gray-700">
                    Si un autre locataire n&apos;a pas payé au 10 du mois, le système détecte automatiquement le retard. Vous envoyez une première relance structurée (email ou SMS), puis une mise en demeure si nécessaire. Tout est tracé et horodaté.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-orange-600 p-6 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-orange-100 rounded-full p-3">
                  <span className="text-orange-600 font-bold text-lg">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Incident plomberie → ticket → prestataire → clôture</h3>
                  <p className="text-gray-700">
                    Le 15 du mois, le locataire signale une fuite d&apos;eau. Vous créez un ticket dans ImmoTopia, assignez un plombier, suivez l&apos;intervention et clôturez le ticket une fois le problème résolu. Tout est tracé.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-teal-600 p-6 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-teal-100 rounded-full p-3">
                  <span className="text-teal-600 font-bold text-lg">7</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting propriétaire</h3>
                  <p className="text-gray-700">
                    En fin de mois, vous générez instantanément un état de compte pour le propriétaire : loyers encaissés, retards, impayés, incidents, interventions. Le propriétaire reçoit un rapport professionnel et précis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. POUR QUEL TYPE DE PORTEFEUILLE */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pour quel type de portefeuille locatif ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              ImmoTopia s&apos;adapte à toutes les tailles de portefeuilles et à tous les types de gestion locative :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">10–50 biens</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Vous démarrez ou gérez un portefeuille de taille moyenne. ImmoTopia vous permet de structurer votre gestion dès le départ : contrats, loyers, quittances, relances. Vous évitez les erreurs et gagnez en professionnalisme.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <span>Gestion structurée dès le départ</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">50–300 biens</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Vous gérez un portefeuille important. ImmoTopia industrialise votre gestion : automatisation des quittances, détection automatique des retards, reporting multi-propriétaires. Vous gagnez des heures chaque semaine.
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <span>Industrialisation et gain de temps</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Portefeuille mixte</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Vous gérez à la fois des biens d&apos;habitation (appartements, villas) et des biens commerciaux (bureaux, boutiques). ImmoTopia gère tous les types de biens et de contrats dans un seul système.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <span>Habitation + commercial dans un seul outil</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-8 w-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Gestion multi-propriétaires</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Vous gérez des biens pour plusieurs propriétaires. ImmoTopia permet de créer des portefeuilles distincts, de générer des états de compte individuels et de suivre la performance de chaque propriétaire séparément.
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <span>Reporting individualisé par propriétaire</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. POURQUOI UN ERP */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pourquoi un ERP (et pas des outils dispersés) ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              Beaucoup de gestionnaires utilisent Excel pour les loyers, WhatsApp pour les relances, des fichiers Word pour les quittances. C&apos;est compréhensible, mais c&apos;est inefficace et risqué. Découvrez{' '}
              <Link href="/gestion-locative-vs-excel" className="font-semibold text-[#2563EB] hover:underline">
                pourquoi un logiciel dédié est préférable à Excel pour la gestion locative
              </Link>
              {' '}et{' '}
              <Link href="/guides/structurer-portefeuille-immobilier-rentable" className="font-semibold text-[#2563EB] hover:underline">
                comment structurer votre portefeuille immobilier rentable
              </Link>
              . Voici pourquoi un ERP change tout :
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Critère</th>
                  <th className="px-6 py-4 text-left font-semibold">Excel / WhatsApp</th>
                  <th className="px-6 py-4 text-left font-semibold">ERP ImmoTopia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Centralisation</td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="h-5 w-5" />
                      Fichiers dispersés, difficiles à retrouver
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      Tout centralisé dans un seul système
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Erreurs</td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="h-5 w-5" />
                      Erreurs de saisie, calculs manuels
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      Automatisation, zéro erreur de calcul
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Traçabilité</td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="h-5 w-5" />
                      Aucune traçabilité des relances
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      Historique complet, horodaté, vérifiable
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Impayés</td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="h-5 w-5" />
                      Détection tardive, relances informelles
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      Détection automatique, relances structurées
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Reporting</td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="h-5 w-5" />
                      Rapports manuels, longs à préparer
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      Rapports instantanés, professionnels
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Expérience client</td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="h-5 w-5" />
                      Quittances manuelles, retards
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      Quittances instantanées, professionnelles
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-lg text-gray-900 font-semibold mb-2">
              Résultat : moins d&apos;impayés, meilleures preuves, meilleure expérience client
            </p>
            <p className="text-gray-700">
              Un ERP comme ImmoTopia vous permet de réduire vos impayés de 20 à 40%, de gagner plusieurs heures par semaine, et de rassurer vos propriétaires avec des rapports professionnels. C&apos;est un investissement qui se rentabilise rapidement.
            </p>
          </div>
        </section>

        {/* 8. INTÉGRATION DANS L'ÉCOSYSTÈME IMMOTOPIA */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Intégration dans l&apos;écosystème ImmoTopia
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              La gestion locative n&apos;est qu&apos;un module de l&apos;ERP ImmoTopia. Vous pouvez activer d&apos;autres modules selon vos besoins :
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/gestion-locative-cote-divoire"
              className="group bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <Home className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900">Gestion Locative</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Loyers, paiements, quittances, impayés, relances. Le cœur de votre activité.
              </p>
              <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/paiement-loyer-charges-mobile-money-cote-divoire"
              className="group bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-green-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900">Paiements Mobile Money</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Orange Money, MTN Money, Moov Money, Wave. Encaissement tracé et automatisé.
              </p>
              <span className="text-green-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/maintenance-immobiliere-ticketing-cote-divoire"
              className="group bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <Wrench className="h-8 w-8 text-orange-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900">Maintenance & Ticketing</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Incidents, prestataires, interventions, historique. Satisfaction locataire garantie.
              </p>
              <span className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
              className="group bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900">Reporting & KPI</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Taux d&apos;encaissement, impayés, revenus. Pilotez votre activité en temps réel.
              </p>
              <span className="text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/logiciel-immobilier-cote-divoire"
              className="group bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <Target className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900">ERP Immobilier Complet</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Découvrez tous les modules de l&apos;ERP ImmoTopia : CRM, biens, annonces, syndic, promotion.
              </p>
              <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Voir l&apos;ERP complet
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/tarifs"
              className="group bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-8 w-8 text-indigo-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900">Tarifs</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Découvrez nos offres modulaires et flexibles, adaptées à votre portefeuille.
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Voir les tarifs
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* 8.5. RESSOURCES COMPLÉMENTAIRES */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ressources pour optimiser votre gestion locative
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Guides pratiques</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/guides/reduire-impayes-loyers-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Réduire les impayés de loyers
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/structurer-portefeuille-immobilier-rentable" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Structurer un portefeuille immobilier rentable
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/paiement-loyer-mobile-money-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Paiement de loyers par Mobile Money
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Modèles gratuits</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/modeles/quittance-loyer-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Modèle de quittance de loyer
                    </Link>
                  </li>
                  <li>
                    <Link href="/modeles/contrat-bail-habitation-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Modèle de contrat de bail
                    </Link>
                  </li>
                  <li>
                    <Link href="/modeles/releve-loyers-etat-de-compte-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Modèle de relevé de loyers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ GESTION LOCATIVE */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes sur la gestion locative
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 text-lg hover:text-blue-600 transition-colors">
                  <span className="pr-8">{item.question}</span>
                  <svg
                    className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Vous avez d&apos;autres questions ? Notre équipe est là pour vous aider.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
            >
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </section>

        {/* 10. CTA FINAL */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à simplifier votre gestion locative ?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Rejoignez les gestionnaires locatifs qui ont choisi ImmoTopia pour réduire leurs impayés, gagner du temps et rassurer leurs propriétaires.
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
              <p className="mt-6 text-sm text-blue-100">
                Sans engagement · Configuration rapide · Support inclus
              </p>
            </div>
          </div>
        </section>

        {/* Lien retour vers page pilier */}
        <div className="text-center py-8 border-t border-gray-200">
          <Link
            href="/pour-qui"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Découvrir toutes les solutions par profil
          </Link>
        </div>
      </article>
    </>
  );
}


