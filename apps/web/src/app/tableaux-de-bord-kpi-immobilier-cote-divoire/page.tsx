import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  BarChart3,
  TrendingUp,
  AlertCircle,
  DollarSign,
  Users,
  Building2,
  Home,
  FileText,
  Clock,
  Target,
  Shield,
  Zap,
  Bell,
  Eye,
  Wrench,
  Briefcase,
  Smartphone,
  Link2,
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Tableaux de bord & KPI immobilier en Côte d'Ivoire | ImmoTopia",
    description:
      "Pilotage immobilier en Côte d'Ivoire : tableaux de bord et KPI (CRM, ventes, loyers, impayés, charges copropriété, maintenance, programmes neufs) alimentés par l'ERP ImmoTopia.",
    canonicalUrl: '/tableaux-de-bord-kpi-immobilier-cote-divoire',
    keywords: [
      'tableau de bord immobilier Côte d\'Ivoire',
      'KPI immobilier agence',
      'reporting gestion locative',
      'suivi impayés loyer',
      'reporting syndic copropriété',
      'dashboard CRM immobilier',
      'reporting encaissements Mobile Money',
      'tableaux de bord ERP immobilier',
      'indicateurs performance immobilier',
      'pilotage activité immobilière',
      'reporting commercial immobilier',
      'KPI gestion locative Côte d\'Ivoire',
    ],
  },
  '/tableaux-de-bord-kpi-immobilier-cote-divoire'
);

const faqItems = [
  {
    question: "Peut-on avoir un tableau de bord par agence ou par équipe ?",
    answer:
      "Oui, ImmoTopia permet de créer des tableaux de bord personnalisés par agence, par équipe ou par utilisateur. Chaque dirigeant peut avoir sa vue direction avec les KPI globaux, tandis que chaque responsable opérationnel (commercial, gestionnaire locatif, syndic) peut avoir son propre tableau de bord focalisé sur ses métiers. Les permissions garantissent que chaque utilisateur voit uniquement les données qui le concernent, tout en permettant une consolidation au niveau direction.",
  },
  {
    question: "Peut-on suivre les impayés en temps réel ?",
    answer:
      "Absolument. Le tableau de bord de gestion locative affiche en temps réel les impayés, les retards de paiement et les montants en souffrance. Vous pouvez voir immédiatement quels locataires sont en retard, depuis combien de jours, et les montants concernés. Des alertes automatiques vous notifient dès qu'un paiement est en retard, permettant une réaction rapide et une réduction des pertes. Le système calcule également le taux d'encaissement et le taux d'impayés pour chaque période.",
  },
  {
    question: "Peut-on exporter les rapports ?",
    answer:
      "Oui, tous les tableaux de bord et rapports peuvent être exportés en différents formats (PDF, Excel, CSV) pour être partagés avec vos équipes, vos clients ou vos partenaires. Vous pouvez exporter des rapports périodiques (mensuels, trimestriels, annuels) ou des rapports personnalisés selon vos besoins. Les exports incluent les graphiques, les tableaux de données et les métriques clés.",
  },
  {
    question: "Les KPI sont-ils personnalisables ?",
    answer:
      "Oui, ImmoTopia offre une grande flexibilité dans la personnalisation des KPI et des tableaux de bord. Vous pouvez choisir quels indicateurs afficher, comment les calculer, et comment les présenter. Chaque métier (commercial, gestion locative, syndic, maintenance, promotion) a ses propres KPI prédéfinis, mais vous pouvez également créer vos propres indicateurs personnalisés selon vos besoins spécifiques. Les tableaux de bord sont configurables par glisser-déposer.",
  },
  {
    question: "Peut-on suivre les performances commerciales ?",
    answer:
      "Oui, le dashboard commercial/CRM permet de suivre en détail les performances commerciales : nombre de leads entrants, taux de conversion, pipeline de ventes et locations, délais moyens de traitement, performance par commercial, nombre de visites réalisées, taux de transformation des visites en contrats. Vous pouvez analyser l'évolution de ces indicateurs dans le temps et identifier les points d'amélioration pour optimiser votre activité commerciale.",
  },
  {
    question: "Peut-on suivre les charges de copropriété ?",
    answer:
      "Oui, le tableau de bord syndic permet de suivre en temps réel les charges de copropriété : taux de recouvrement des appels de charges, impayés par lot, budgets prévisionnels vs réalisés, répartition des charges par poste (entretien, gardiennage, électricité, etc.). Vous pouvez voir quels copropriétaires sont à jour et lesquels ont des impayés, avec des alertes automatiques pour les retards. Le système calcule également les indicateurs de santé financière de chaque copropriété.",
  },
  {
    question: "Est-ce adapté aux petites structures ?",
    answer:
      "Absolument. Les tableaux de bord ImmoTopia sont conçus pour être utiles à toutes les tailles d'entreprises, des petites agences aux grandes structures. Même pour une petite agence avec quelques biens en gestion, avoir une vision claire des encaissements, des impayés et de la performance commerciale est essentiel. Les tableaux de bord sont simples et intuitifs, sans complexité inutile. Vous pouvez commencer avec les KPI de base et activer progressivement des indicateurs plus avancés selon votre croissance.",
  },
  {
    question: "Peut-on activer seulement le module reporting ?",
    answer:
      "Le reporting et les tableaux de bord sont intégrés à l'ERP ImmoTopia et se nourrissent des données des autres modules (CRM, gestion locative, syndic, maintenance, promotion, paiements). Pour avoir des KPI fiables et en temps réel, il est nécessaire d'utiliser les modules opérationnels correspondants. Par exemple, pour avoir des KPI de gestion locative, vous devez utiliser le module de gestion locative. Cependant, vous pouvez activer progressivement les modules selon vos besoins et les tableaux de bord s'enrichissent automatiquement au fur et à mesure.",
  },
];

export default function TableauxDeBordKPIImmobilierCoteIvoirePage() {
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
                Module décisionnel de l'ERP ImmoTopia
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Tableaux de bord immobilier en Côte d'Ivoire : KPI et pilotage en temps réel
              </h1>
              
              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 md:text-xl">
                Reporting alimenté par l'ERP ImmoTopia : CRM,{' '}
                <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  gestion locative
                </Link>
                , syndic, paiements Mobile Money, maintenance et promotion. 
                Décisions rapides, transparence totale, contrôle de votre activité immobilière. Découvrez{' '}
                <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
                  toutes nos fonctionnalités
                </Link>
                {' '}et{' '}
                <Link href="/guides/structurer-portefeuille-immobilier-rentable" className="font-semibold text-[#2563EB] hover:underline">
                  comment structurer votre portefeuille
                </Link>
                .
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact?demo=true">
                    Demander une démo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/logiciel-immobilier-cote-divoire">
                    Découvrir l'ERP ImmoTopia
                    <Link2 className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problème : Le pilotage à l'aveugle */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Le pilotage à l'aveugle : un problème récurrent en Côte d'Ivoire
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Sans tableau de bord consolidé, les dirigeants d'agences immobilières naviguent à vue, 
                avec des données dispersées et des décisions prises trop tard.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-red-100 bg-red-50 p-6">
                <AlertCircle className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Données dispersées</h3>
                <p className="text-gray-600">
                  Informations éparpillées entre Excel, WhatsApp, cahiers et mémoires. 
                  Impossible d'avoir une vision consolidée de l'activité.
                </p>
              </div>

              <div className="rounded-lg border border-red-100 bg-red-50 p-6">
                <DollarSign className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Encaissements non consolidés</h3>
                <p className="text-gray-600">
                  Difficile de savoir en temps réel quels loyers ont été encaissés, 
                  quels paiements sont en attente, et quels montants sont en souffrance.
                </p>
              </div>

              <div className="rounded-lg border border-red-100 bg-red-50 p-6">
                <Clock className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Impayés détectés trop tard</h3>
                <p className="text-gray-600">
                  Les retards de paiement ne sont découverts qu'après plusieurs semaines, 
                  quand il est déjà trop tard pour agir efficacement.
                </p>
              </div>

              <div className="rounded-lg border border-red-100 bg-red-50 p-6">
                <BarChart3 className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Performance commerciale non mesurée</h3>
                <p className="text-gray-600">
                  Aucune visibilité sur le taux de conversion des leads, 
                  les délais de traitement, ou la performance des commerciaux.
                </p>
              </div>

              <div className="rounded-lg border border-red-100 bg-red-50 p-6">
                <Eye className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Vue direction manquante</h3>
                <p className="text-gray-600">
                  Les dirigeants n'ont pas de tableau de bord consolidé pour prendre des décisions rapides 
                  et stratégiques basées sur des données fiables.
                </p>
              </div>

              <div className="rounded-lg border border-red-100 bg-red-50 p-6">
                <FileText className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Vues opérationnelles fragmentées</h3>
                <p className="text-gray-600">
                  Chaque métier (commercial, gestion locative, syndic) travaille sans visibilité 
                  sur ses propres indicateurs de performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quels KPI immobiliers suivre */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Quels KPI immobiliers suivre pour piloter efficacement ?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Les indicateurs clés de performance doivent être fiables, en temps réel, 
                et basés sur les données réelles de votre ERP.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">KPI commerciaux</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Nombre de leads entrants par canal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Taux de conversion leads → visites → contrats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Délai moyen de traitement des demandes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Pipeline de ventes et locations (en cours, signés, clos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Performance par commercial (visites, contrats, CA)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-3">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">KPI locatifs</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Taux d'encaissement des loyers (mensuel, trimestriel, annuel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Montant des impayés et taux d'impayés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Nombre de retards de paiement et jours moyens de retard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Taux d'occupation des biens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Délai moyen de relouement</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-purple-100 p-3">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">KPI syndic</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Taux de recouvrement des appels de charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Impayés par lot et par copropriété</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Budgets prévisionnels vs réalisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Répartition des charges par poste (entretien, gardiennage, électricité)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Santé financière de chaque copropriété</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Wrench className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">KPI maintenance</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Temps moyen de résolution des incidents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Volume d'incidents par type et par période</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Taux de respect des SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Coûts de maintenance par bien et par résidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Performance des prestataires</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-indigo-100 p-3">
                    <Briefcase className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">KPI promotion</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Stock de lots disponibles vs vendus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Nombre de réservations et taux de transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Chiffre d'affaires réalisé par programme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Délai moyen de vente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Performance commerciale par programme</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Fiabilité des KPI</h3>
                </div>
                <p className="text-gray-700">
                  Tous ces KPI sont calculés automatiquement à partir des données réelles de l'ERP ImmoTopia. 
                  Plus besoin de saisies manuelles ou de calculs Excel : les indicateurs sont fiables, 
                  en temps réel, et basés sur les transactions enregistrées dans le système (paiements, 
                  contrats, visites, incidents, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboards par métier */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Dashboards par métier : une vue adaptée à chaque rôle
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Chaque métier a son propre tableau de bord avec les KPI qui lui sont essentiels, 
                tout en conservant une vision consolidée au niveau direction.
              </p>
            </div>

            <div className="space-y-12">
              {/* Dashboard Direction */}
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dashboard Direction</h3>
                    <p className="text-gray-600">Vue synthèse globale pour les dirigeants</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">KPI consolidés</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Chiffre d'affaires global (ventes + loyers + charges)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Taux d'encaissement global</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Impayés totaux et évolution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Performance commerciale globale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Nombre de biens gérés et taux d'occupation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Bénéfices</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Décisions rapides basées sur des données fiables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Identification immédiate des problèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Suivi de l'évolution de l'activité dans le temps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Communication facilitée avec les équipes et les clients</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dashboard Commercial / CRM */}
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-green-500 to-emerald-600 p-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dashboard Commercial / CRM</h3>
                    <p className="text-gray-600">Pipeline, visites, conversion et performance commerciale</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">KPI affichés</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Pipeline de ventes et locations (en cours, signés, clos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Nombre de visites planifiées et réalisées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Taux de conversion leads → visites → contrats</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Performance par commercial (visites, contrats, CA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Délai moyen de traitement des demandes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Bénéfices</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Optimisation du pipeline commercial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Identification des goulots d'étranglement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Motivation des équipes avec des objectifs mesurables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Allocation optimale des ressources commerciales</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dashboard Gestion locative */}
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-4">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dashboard Gestion locative</h3>
                    <p className="text-gray-600">Encaissements, impayés, relances et suivi des loyers</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">KPI affichés</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Taux d'encaissement des loyers (mensuel, trimestriel, annuel)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Montant des impayés et évolution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Nombre de retards et jours moyens de retard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Relances en cours et taux de succès</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Taux d'occupation et délai moyen de relouement</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Bénéfices</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Réaction rapide aux impayés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Réduction des pertes financières</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Optimisation de la trésorerie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Suivi précis de chaque portefeuille</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dashboard Syndic */}
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 p-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dashboard Syndic</h3>
                    <p className="text-gray-600">Appels de charges, recouvrement, impayés et budgets</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">KPI affichés</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Taux de recouvrement des appels de charges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Impayés par lot et par copropriété</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Budgets prévisionnels vs réalisés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Répartition des charges par poste</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Santé financière de chaque copropriété</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Bénéfices</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Transparence totale pour les copropriétaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Détection précoce des problèmes financiers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Gestion proactive des budgets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Communication facilitée avec les copropriétaires</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dashboard Maintenance */}
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-4">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dashboard Maintenance</h3>
                    <p className="text-gray-600">Tickets, SLA, prestataires et temps de résolution</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">KPI affichés</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Temps moyen de résolution des incidents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Volume d'incidents par type et par période</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Taux de respect des SLA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Coûts de maintenance par bien et par résidence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Performance des prestataires</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Bénéfices</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Amélioration de la satisfaction des locataires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Optimisation des coûts de maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Identification des problèmes récurrents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Gestion proactive des interventions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dashboard Promoteur */}
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 p-4">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dashboard Promoteur</h3>
                    <p className="text-gray-600">Ventes, réservations, stock lots et performance commerciale</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">KPI affichés</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Stock de lots disponibles vs vendus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Nombre de réservations et taux de transformation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Chiffre d'affaires réalisé par programme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Délai moyen de vente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Performance commerciale par programme</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Bénéfices</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Pilotage précis de chaque programme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Optimisation du stock et des prix</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Suivi de la performance commerciale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Décisions rapides sur les stratégies de vente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting des encaissements */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Reporting des encaissements : transparence totale sur vos recettes
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Suivez en temps réel tous vos encaissements, qu'ils proviennent de loyers, 
                de charges de copropriété ou de ventes, avec un rapprochement automatique.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-3">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Encaissements loyers & charges</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>
                      <strong>En temps réel :</strong> visualisation immédiate de tous les paiements reçus, 
                      qu'ils soient effectués via Mobile Money (Orange Money, MTN Money, Wave), 
                      virement bancaire, espèces ou chèque.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>
                      <strong>Par période :</strong> consolidation mensuelle, trimestrielle et annuelle 
                      pour analyser l'évolution de vos recettes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>
                      <strong>Par résidence :</strong> suivi détaillé des encaissements pour chaque 
                      résidence ou copropriété gérée.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>
                      <strong>Par portefeuille :</strong> agrégation par gestionnaire ou par propriétaire 
                      pour une vision consolidée.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Rapprochement et états de compte</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>
                      <strong>Rapprochement automatique :</strong> pour les paiements Mobile Money, 
                      le système effectue un rapprochement automatique entre les transactions enregistrées 
                      et les paiements reçus, réduisant les erreurs et le temps de traitement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>
                      <strong>États de compte :</strong> génération automatique d'états de compte 
                      détaillés pour chaque locataire ou copropriétaire, avec l'historique complet 
                      des paiements et des charges.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>
                      <strong>Export :</strong> tous les rapports d'encaissements peuvent être exportés 
                      en PDF ou Excel pour être partagés avec vos clients, vos partenaires ou vos équipes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>
                      <strong>Traçabilité complète :</strong> chaque encaissement est tracé avec 
                      sa date, son montant, son moyen de paiement et son origine, garantissant 
                      une transparence totale.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Alertes & Actions */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Alertes & Actions : passer du reporting à l'opérationnel
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Les tableaux de bord ne se contentent pas d'afficher des données : 
                ils déclenchent des alertes et des actions pour réagir rapidement aux problèmes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Bell className="h-8 w-8 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Alertes retards de paiement</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Dès qu'un loyer ou une charge est en retard, vous recevez une alerte automatique 
                  avec les informations du locataire ou copropriétaire concerné, le montant dû 
                  et le nombre de jours de retard.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Action déclenchée :</strong> création automatique d'une tâche de relance 
                  dans le système, avec possibilité d'envoi automatique d'un email ou SMS de rappel.
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <TrendingDown className="h-8 w-8 text-red-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Alertes baisse conversion</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Si le taux de conversion des leads en contrats baisse significativement par rapport 
                  aux périodes précédentes, une alerte vous informe pour analyser les causes.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Action déclenchée :</strong> analyse du pipeline commercial, identification 
                  des goulots d'étranglement et mise en place de mesures correctives.
                </p>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="h-8 w-8 text-yellow-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Alertes incidents en attente</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Si un incident de maintenance dépasse le délai de résolution prévu (SLA), 
                  une alerte vous notifie pour intervenir rapidement.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Action déclenchée :</strong> escalade automatique vers le responsable, 
                  notification du prestataire et suivi renforcé jusqu'à résolution.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Lien avec les tâches et relances</h3>
              </div>
              <p className="text-gray-700">
                Toutes les alertes générées par les tableaux de bord sont automatiquement transformées 
                en tâches actionnables dans l'ERP ImmoTopia. Vous pouvez assigner ces tâches aux membres 
                de votre équipe, suivre leur progression et automatiser les relances. Le système vous 
                permet ainsi de passer du constat (reporting) à l'action (opérationnel) en quelques clics.
              </p>
            </div>
          </div>
        </section>

        {/* Pour qui ? */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Pour qui ? Des tableaux de bord adaptés à chaque profil
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Que vous soyez dirigeant d'agence, gestionnaire locatif, syndic ou promoteur, 
                les tableaux de bord ImmoTopia vous donnent les indicateurs dont vous avez besoin.
              </p>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Dirigeant d'agence / Cabinet</h3>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Problème</h4>
                    <p className="text-gray-600">
                      Manque de visibilité globale sur l'activité, difficultés à prendre des décisions 
                      rapides, données dispersées entre plusieurs outils.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Tableau de bord</h4>
                    <p className="text-gray-600">
                      Dashboard Direction avec KPI consolidés : CA global, taux d'encaissement, 
                      impayés, performance commerciale, nombre de biens gérés.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Résultat</h4>
                    <p className="text-gray-600">
                      Décisions rapides basées sur des données fiables, identification immédiate 
                      des problèmes, communication facilitée avec les équipes et les clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-green-500 to-emerald-600 p-3">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Responsable portefeuille locatif</h3>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Problème</h4>
                    <p className="text-gray-600">
                      Difficile de suivre les encaissements en temps réel, impayés détectés trop tard, 
                      relances manuelles chronophages.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Tableau de bord</h4>
                    <p className="text-gray-600">
                      Dashboard Gestion locative avec taux d'encaissement, impayés, retards, 
                      relances en cours, taux d'occupation.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Résultat</h4>
                    <p className="text-gray-600">
                      Réaction rapide aux impayés, réduction des pertes financières, optimisation 
                      de la trésorerie, suivi précis de chaque portefeuille.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-3">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Syndic</h3>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Problème</h4>
                    <p className="text-gray-600">
                      Manque de transparence sur les charges, impayés difficiles à suivre, 
                      budgets non maîtrisés.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Tableau de bord</h4>
                    <p className="text-gray-600">
                      Dashboard Syndic avec taux de recouvrement, impayés par lot, budgets 
                      prévisionnels vs réalisés, santé financière des copropriétés.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Résultat</h4>
                    <p className="text-gray-600">
                      Transparence totale pour les copropriétaires, détection précoce des problèmes 
                      financiers, gestion proactive des budgets, communication facilitée.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 p-3">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Promoteur</h3>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Problème</h4>
                    <p className="text-gray-600">
                      Difficile de suivre les ventes en temps réel, stock de lots non maîtrisé, 
                      performance commerciale non mesurée.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Tableau de bord</h4>
                    <p className="text-gray-600">
                      Dashboard Promoteur avec stock de lots, réservations, CA par programme, 
                      délai moyen de vente, performance commerciale.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Résultat</h4>
                    <p className="text-gray-600">
                      Pilotage précis de chaque programme, optimisation du stock et des prix, 
                      suivi de la performance commerciale, décisions rapides sur les stratégies de vente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intégration au sein de l'ERP */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Intégration au sein de l'ERP ImmoTopia
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Le reporting et les tableaux de bord ne sont pas un module isolé : 
                ils se nourrissent des données de tous les modules opérationnels de l'ERP.
              </p>
            </div>

            <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-8">
              <p className="mb-6 text-lg text-gray-700">
                Les tableaux de bord ImmoTopia sont alimentés en temps réel par les données des modules suivants :
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link 
                  href="/crm-immobilier-cote-divoire"
                  className="flex items-center gap-3 rounded-lg border border-blue-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-md"
                >
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">CRM</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                </Link>
                <Link 
                  href="/logiciel-annonces-immobilieres-cote-divoire"
                  className="flex items-center gap-3 rounded-lg border border-blue-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-md"
                >
                  <Home className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Biens & Annonces</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                </Link>
                <Link 
                  href="/gestion-locative-cote-divoire"
                  className="flex items-center gap-3 rounded-lg border border-blue-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-md"
                >
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Gestion locative</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                </Link>
                <Link 
                  href="/logiciel-syndic-copropriete-cote-divoire"
                  className="flex items-center gap-3 rounded-lg border border-blue-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-md"
                >
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Syndic</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                </Link>
                <Link 
                  href="/paiement-loyer-charges-mobile-money-cote-divoire"
                  className="flex items-center gap-3 rounded-lg border border-blue-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-md"
                >
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Paiements</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                </Link>
                <Link 
                  href="/maintenance-immobiliere-ticketing-cote-divoire"
                  className="flex items-center gap-3 rounded-lg border border-blue-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-md"
                >
                  <Wrench className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Maintenance</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                </Link>
                <Link 
                  href="/logiciel-promotion-immobiliere-foncier-cote-divoire"
                  className="flex items-center gap-3 rounded-lg border border-blue-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-md"
                >
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Promotion</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                </Link>
              </div>
              <div className="mt-8 rounded-lg border border-blue-300 bg-white p-6">
                <p className="mb-4 text-gray-700">
                  <strong>Exemple concret :</strong> Lorsqu'un locataire paie son loyer via Mobile Money, 
                  cette transaction est automatiquement enregistrée dans le module Paiements, 
                  synchronisée avec le module Gestion locative (mise à jour du statut du locataire), 
                  et immédiatement reflétée dans le tableau de bord (mise à jour du taux d'encaissement, 
                  réduction des impayés). Aucune saisie manuelle n'est nécessaire : les KPI sont toujours 
                  à jour et fiables.
                </p>
                <p className="text-gray-700">
                  Pour découvrir l'ensemble des fonctionnalités de l'ERP ImmoTopia, 
                  consultez la <Link href="/logiciel-immobilier-cote-divoire" className="font-semibold text-blue-600 hover:underline">page pilier principale</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparatif Avant / Après */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Avant / Après : l'impact des tableaux de bord ImmoTopia
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg border border-gray-200 bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
                    <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-red-700">Avant ImmoTopia</th>
                    <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-green-700">Avec ImmoTopia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">Source des données</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Données dispersées (Excel, WhatsApp, cahiers)</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Données consolidées depuis l'ERP en temps réel</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">Fiabilité</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Calculs manuels, risques d'erreurs, incohérences</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">KPI calculés automatiquement, fiables et cohérents</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">Temps réel</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Reporting mensuel ou trimestriel, souvent en retard</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">KPI mis à jour en temps réel, visibilité immédiate</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">Détection des problèmes</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Découverte tardive des impayés et des problèmes</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Alertes automatiques, réaction rapide</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">Prise de décision</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Décisions basées sur des intuitions ou des données obsolètes</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Décisions rapides basées sur des données fiables</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">Pertes financières</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Impayés non détectés, pertes importantes</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Réduction significative des pertes grâce à la détection précoce</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">Transparence</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Manque de transparence pour les clients et les équipes</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Transparence totale, communication facilitée</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-6 py-4 font-medium text-gray-900">Personnalisation</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Tableaux fixes, non adaptés aux besoins spécifiques</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">Tableaux de bord personnalisables par métier et par utilisateur</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Questions fréquentes sur les tableaux de bord ImmoTopia
              </h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Prêt à piloter votre activité immobilière avec des KPI fiables ?
              </h2>
              <p className="mb-8 text-lg text-blue-100">
                Découvrez comment les tableaux de bord ImmoTopia transforment votre façon de prendre des décisions.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact?demo=true">
                    Demander une démo gratuite
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/tarifs">
                    Voir les tarifs
                    <Link2 className="ml-2 h-5 w-5" />
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

