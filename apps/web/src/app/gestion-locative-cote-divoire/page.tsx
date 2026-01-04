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
  Link2
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Gestion locative en Côte d'Ivoire | Module ERP ImmoTopia",
    description:
      "Gestion locative en Côte d'Ivoire : loyers, quittances, contrats et paiements Mobile Money intégrés dans l'ERP immobilier ImmoTopia.",
    canonicalUrl: '/gestion-locative-cote-divoire',
    keywords: [
      'gestion locative Côte d\'Ivoire',
      'logiciel gestion locative Côte d\'Ivoire',
      'gestion des loyers Côte d\'Ivoire',
      'quittance de loyer Côte d\'Ivoire',
      'paiement loyer Mobile Money',
      'ERP immobilier Côte d\'Ivoire',
      'module gestion locative',
      'gestion locative Abidjan',
      'logiciel immobilier Côte d\'Ivoire',
      'gestionnaire locatif professionnel',
    ],
  },
  '/gestion-locative-cote-divoire'
);

const faqItems = [
  {
    question: "La gestion locative est-elle un module indépendant dans ImmoTopia ?",
    answer:
      "Non, la gestion locative est un module intégré à l'ERP immobilier ImmoTopia. Elle fonctionne en synergie avec le CRM, la gestion des biens, la comptabilité et le reporting. Cette intégration permet une vision globale de votre activité immobilière, depuis la prospection jusqu'à la gestion des loyers et la comptabilité.",
  },
  {
    question: "Peut-on activer uniquement le module de gestion locative ?",
    answer:
      "ImmoTopia est un ERP complet conçu pour centraliser toute votre activité immobilière. Bien que vous puissiez utiliser principalement le module de gestion locative, l'activation de l'ensemble de l'ERP vous offre une meilleure efficacité opérationnelle. Le CRM, par exemple, vous permet de suivre vos locataires et prospects, tandis que la gestion des biens centralise toutes les informations sur vos propriétés. Nous recommandons d'utiliser l'ERP complet pour maximiser votre productivité.",
  },
  {
    question: "Les quittances sont-elles générées automatiquement ?",
    answer:
      "Oui, ImmoTopia génère automatiquement des quittances conformes aux exigences légales ivoiriennes dès qu'un paiement de loyer est enregistré. Que le paiement soit effectué via Mobile Money (Orange Money, MTN Money, Wave) ou par un autre moyen, la quittance est créée instantanément et peut être envoyée automatiquement au locataire par email. Cette automatisation élimine les erreurs manuelles et garantit une traçabilité complète.",
  },
  {
    question: "Le paiement par Mobile Money est-il obligatoire ?",
    answer:
      "Non, le paiement par Mobile Money n'est pas obligatoire. ImmoTopia accepte tous les moyens de paiement : espèces, virement bancaire, chèque, ou Mobile Money. Cependant, l'intégration native du Mobile Money (Orange Money, MTN Money, Wave) permet un rapprochement automatique des paiements, ce qui réduit considérablement le temps de traitement et les erreurs. C'est particulièrement avantageux en Côte d'Ivoire où le Mobile Money est largement utilisé.",
  },
  {
    question: "Est-ce adapté aux petites agences immobilières ?",
    answer:
      "Absolument. ImmoTopia est conçu pour s'adapter à tous les types d'activités immobilières, des petites agences aux grandes structures. Le module de gestion locative est accessible et intuitif, même pour les équipes qui débutent avec un logiciel. L'ERP complet vous permet de grandir sans changer d'outil : vous pouvez commencer par utiliser principalement la gestion locative, puis activer progressivement les autres modules (CRM, syndic, promotion) selon vos besoins.",
  },
  {
    question: "Comment la gestion locative s'intègre-t-elle avec les autres modules de l'ERP ?",
    answer:
      "La gestion locative est au cœur de l'écosystème ImmoTopia. Elle est connectée au CRM pour le suivi des locataires et prospects, à la gestion des biens pour l'historique complet de chaque propriété, à la comptabilité pour l'enregistrement automatique des recettes, et au reporting pour une vision consolidée de vos performances. Par exemple, lorsqu'un locataire paie son loyer, cette information est automatiquement synchronisée avec le CRM (mise à jour du statut), la comptabilité (enregistrement de la recette) et le reporting (mise à jour des indicateurs).",
  },
];

export default function GestionLocativeCoteIvoirePage() {
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
                Gestion locative en Côte d'Ivoire
              </h1>
              
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Un module clé de l'ERP immobilier ImmoTopia pour automatiser vos loyers, quittances et paiements Mobile Money
              </p>
              
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
                La gestion locative n'est pas un outil isolé : elle s'intègre naturellement dans un ERP immobilier complet qui centralise votre CRM, vos biens, votre comptabilité et votre reporting. Découvrez{' '}
                <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
                  toutes les fonctionnalités
                </Link>
                {' '}et{' '}
                <Link href="/pour-qui/gestionnaires-locatifs" className="font-semibold text-[#2563EB] hover:underline">
                  comment ImmoTopia aide les gestionnaires locatifs
                </Link>
                {' '}en Côte d'Ivoire. Consultez aussi notre{' '}
                <Link href="/gestion-locative-vs-excel" className="font-semibold text-[#2563EB] hover:underline">
                  comparaison avec Excel
                </Link>
                {' '}pour comprendre les avantages d'un logiciel dédié.
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

        {/* Section 1: Contexte Local */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Les réalités de la gestion locative en Côte d'Ivoire
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                À Abidjan et dans les grandes villes ivoiriennes, la gestion locative professionnelle fait face à des défis spécifiques. Les agences immobilières, gestionnaires locatifs et propriétaires bailleurs doivent gérer un portefeuille croissant de biens locatifs tout en faisant face à des contraintes opérationnelles récurrentes.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Les impayés récurrents</h3>
                  </div>
                  <p className="text-gray-700">
                    Le suivi manuel des loyers impayés expose les professionnels à des pertes financières significatives. Sans système centralisé, les relances sont tardives et peu efficaces.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-amber-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Suivi manuel chronophage</h3>
                  </div>
                  <p className="text-gray-700">
                    Les tableaux Excel non partagés, les dossiers papier et les communications dispersées (WhatsApp, SMS, emails) créent de la confusion et des erreurs.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Paiements non tracés</h3>
                  </div>
                  <p className="text-gray-700">
                    Les paiements Mobile Money (Orange Money, MTN Money, Wave) sont fréquents mais souvent non rattachés aux contrats, rendant le rapprochement bancaire complexe. Découvrez notre{' '}
                    <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                      solution de paiement Mobile Money intégrée
                    </Link>
                    {' '}pour automatiser l'encaissement.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Manque de visibilité</h3>
                  </div>
                  <p className="text-gray-700">
                    Sans tableau de bord centralisé, il est difficile d'avoir une vision claire du portefeuille locatif : taux d'occupation, loyers encaissés, impayés, contrats à renouveler.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Ces défis ne sont pas insurmontables. La solution réside dans l'adoption d'un ERP immobilier complet qui intègre un module de gestion locative performant, adapté au contexte ivoirien et connecté à l'ensemble de votre activité immobilière.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Qu'est-ce que la gestion locative moderne */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Qu'est-ce que la gestion locative moderne ?
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                La gestion locative moderne se distingue fondamentalement de la gestion traditionnelle par son intégration dans un écosystème plus large. Elle ne se limite pas à la collecte des loyers, mais s'inscrit dans une démarche de centralisation et d'automatisation de l'ensemble des processus immobiliers.
              </p>

              <div className="mb-8 grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    Gestion locative manuelle (traditionnelle)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Tableaux Excel isolés, non partagés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Quittances rédigées manuellement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Relances par WhatsApp ou SMS, non tracées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Paiements Mobile Money non rattachés aux contrats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Absence de visibilité globale sur le portefeuille</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span>Données dispersées entre plusieurs outils</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-md">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    Gestion locative intégrée à un ERP
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Base de données centralisée, accessible en temps réel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Quittances générées automatiquement à chaque paiement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Relances automatisées avec historique complet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Paiements Mobile Money rattachés automatiquement aux contrats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Tableau de bord consolidé avec indicateurs clés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Intégration avec CRM, comptabilité et reporting</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Zap className="h-6 w-6 text-blue-600" />
                  L'importance de la centralisation
                </h3>
                <p className="text-gray-700">
                  Un ERP immobilier comme ImmoTopia centralise toutes vos données : les informations sur vos locataires sont synchronisées avec le CRM, les paiements sont automatiquement enregistrés en comptabilité, et les indicateurs de performance sont mis à jour en temps réel. Cette centralisation élimine la saisie multiple, réduit les erreurs et offre une vision unifiée de votre activité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Fonctionnalités de gestion locative ImmoTopia */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Fonctionnalités de gestion locative ImmoTopia
            </h2>
            <p className="mb-10 text-lg text-gray-600">
              Le module de gestion locative d'ImmoTopia est conçu pour automatiser et optimiser tous les aspects de la gestion de vos biens locatifs, tout en s'intégrant naturellement avec les autres modules de l'ERP.
            </p>

            <div className="space-y-8">
              {/* Fonctionnalité 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Suivi des loyers en temps réel</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Visualisez l'état de tous vos loyers dans un tableau de bord centralisé. Chaque contrat de location est rattaché à un bien, et les échéances sont automatiquement calculées. Le système vous alerte dès qu'un loyer est en retard, vous permettant d'agir rapidement.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Intégration ERP :</strong> Les informations de loyer sont synchronisées avec la gestion des biens (historique complet) et la comptabilité (prévisionnel de trésorerie).
                </p>
              </div>

              {/* Fonctionnalité 2 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Smartphone className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Paiements Mobile Money intégrés</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Orange Money, MTN Money et Wave sont intégrés nativement dans ImmoTopia. Lorsqu'un locataire effectue un paiement, celui-ci est automatiquement rattaché à son contrat de location. Le rapprochement bancaire devient instantané, éliminant les erreurs de saisie manuelle.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Intégration ERP :</strong> Les paiements sont automatiquement enregistrés en comptabilité et mis à jour dans le CRM (statut du locataire).
                </p>
              </div>

              {/* Fonctionnalité 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Génération automatique de quittances</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Dès qu'un paiement est enregistré, ImmoTopia génère automatiquement une quittance conforme aux exigences légales ivoiriennes. La quittance peut être envoyée automatiquement par email au locataire, ou téléchargée au format PDF. Plus besoin de rédiger manuellement chaque quittance.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Intégration ERP :</strong> Les quittances sont archivées dans le dossier du locataire (CRM) et du bien (gestion des biens), créant un historique complet et traçable.
                </p>
              </div>

              {/* Fonctionnalité 4 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Dépôts de garantie et pénalités</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Gérez les dépôts de garantie et les pénalités de retard de manière centralisée. Le système calcule automatiquement les intérêts de retard selon les paramètres de votre contrat, et vous alerte lorsque des actions sont nécessaires (rétention de garantie, récupération d'impayés).
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Intégration ERP :</strong> Les dépôts et pénalités sont intégrés à la comptabilité pour une vision précise de votre trésorerie.
                </p>
              </div>

              {/* Fonctionnalité 5 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Historique et traçabilité complète</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Chaque action est enregistrée avec une date, un auteur et un commentaire. L'historique complet des paiements, relances, modifications de contrat et communications est accessible en un clic. Cette traçabilité est essentielle en cas de litige ou d'audit.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Intégration ERP :</strong> L'historique est partagé avec le CRM (historique client) et le module de reporting (analyse des tendances).
                </p>
              </div>

              {/* Fonctionnalité 6 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Relances automatisées</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Configurez des relances automatiques par email ou SMS pour les loyers en retard. Les templates sont personnalisables, et chaque relance est enregistrée dans l'historique. Vous pouvez définir des seuils d'alerte (par exemple, alerte à J+3, relance à J+7, relance urgente à J+15).
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Intégration ERP :</strong> Les relances sont synchronisées avec le CRM pour un suivi commercial complet du locataire.
                </p>
              </div>
            </div>

            {/* Lien vers page pilier mère */}
            <div className="mt-10 rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
              <p className="mb-4 font-semibold text-gray-900">
                💡 La gestion locative est un module de l'ERP ImmoTopia
              </p>
              <p className="mb-4 text-gray-700">
                Pour découvrir l'ensemble des fonctionnalités de l'ERP ImmoTopia (CRM, gestion des biens, syndic de copropriété, comptabilité, reporting), consultez notre page dédiée :
              </p>
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
              >
                Découvrir l'ERP immobilier ImmoTopia complet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Paiement des loyers en Côte d'Ivoire */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Paiement des loyers en Côte d'Ivoire : l'avantage du digital
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                En Côte d'Ivoire, le Mobile Money (Orange Money, MTN Money, Wave) est devenu le moyen de paiement privilégié pour de nombreux locataires. Cette évolution offre des opportunités considérables pour les professionnels de l'immobilier, à condition d'avoir un système capable de gérer ces paiements de manière structurée.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 text-center shadow-md">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                    <Smartphone className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Orange Money</h3>
                  <p className="text-sm text-gray-600">
                    Intégration native pour un rapprochement automatique des paiements
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 text-center shadow-md">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                    <Smartphone className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">MTN Money</h3>
                  <p className="text-sm text-gray-600">
                    Support complet avec notification automatique à la réception
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 text-center shadow-md">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Smartphone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Wave</h3>
                  <p className="text-sm text-gray-600">
                    Rapprochement instantané pour une gestion optimale
                  </p>
                </div>
              </div>

              <div className="mb-8 rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Avantages du paiement digital intégré
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Rapprochement automatique :</strong> Plus besoin de comparer manuellement les relevés Mobile Money avec vos contrats. Chaque paiement est automatiquement rattaché au bon locataire et au bon contrat.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Traçabilité complète :</strong> Chaque transaction est enregistrée avec une date, un montant et un identifiant unique, créant un historique inaltérable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Génération automatique de quittances :</strong> Dès qu'un paiement est reçu, la quittance est générée et peut être envoyée automatiquement au locataire.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Alertes en temps réel :</strong> Vous êtes notifié immédiatement lorsqu'un paiement est reçu, vous permettant de mettre à jour rapidement le statut du locataire.</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                L'intégration du Mobile Money dans ImmoTopia transforme la gestion des paiements de loyers. Ce qui prenait plusieurs heures de travail manuel (rapprochement, saisie, génération de quittances) devient un processus automatisé et fiable, libérant du temps pour vos activités à plus forte valeur ajoutée.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Pour qui ? */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pour qui est conçu le module de gestion locative ImmoTopia ?
            </h2>
            
            <div className="space-y-8">
              {/* Agences immobilières */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Agences immobilières</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Gérer un portefeuille de biens locatifs croissant avec des outils dispersés (Excel, WhatsApp, dossiers papier) devient ingérable. Les erreurs de suivi, les impayés non détectés et le manque de visibilité impactent la rentabilité.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le module de gestion locative s'intègre avec le CRM (suivi des locataires et prospects) et la gestion des biens (historique complet de chaque propriété). Vous centralisez toute votre activité dans un seul ERP.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Bénéfice :</p>
                    <p>Gain de temps considérable, réduction des impayés grâce aux relances automatisées, meilleure relation client avec des quittances automatiques, et visibilité complète sur votre portefeuille locatif.</p>
                  </div>
                </div>
              </div>

              {/* Gestionnaires locatifs */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Gestionnaires locatifs</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Gérer plusieurs propriétaires bailleurs avec des exigences différentes, tout en maintenant une traçabilité parfaite. Les paiements Mobile Money non structurés créent de la confusion lors des comptes rendus aux propriétaires.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le module de gestion locative permet de gérer plusieurs portefeuilles de manière centralisée. Les paiements sont automatiquement rattachés aux contrats, et les rapports pour les propriétaires sont générés automatiquement.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Bénéfice :</p>
                    <p>Traçabilité parfaite pour chaque propriétaire, génération automatique de comptes rendus, réduction des erreurs de rapprochement, et professionnalisation de votre service.</p>
                  </div>
                </div>
              </div>

              {/* Propriétaires bailleurs */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Home className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Propriétaires bailleurs</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Problème :</p>
                    <p>Gérer soi-même plusieurs biens locatifs devient chronophage. Le suivi des loyers, la génération de quittances et la gestion des impayés prennent trop de temps, surtout si vous avez une activité professionnelle principale.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Solution ImmoTopia :</p>
                    <p>Le module de gestion locative automatisé vous permet de gérer vos biens efficacement, même si vous n'êtes pas un professionnel de l'immobilier. L'interface est intuitive, et les processus sont automatisés.</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-900">Bénéfice :</p>
                    <p>Gain de temps significatif, automatisation des tâches répétitives (quittances, relances), meilleure organisation, et tranquillité d'esprit grâce à la traçabilité complète.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Place de la gestion locative dans l'ERP */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              La place de la gestion locative dans l'ERP ImmoTopia
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-8 text-lg leading-relaxed">
                La gestion locative n'est pas un outil isolé dans ImmoTopia. Elle est au cœur d'un écosystème ERP complet qui interconnecte tous les aspects de votre activité immobilière. Cette intégration crée une synergie qui multiplie l'efficacité de chaque module.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Users className="h-6 w-6 text-blue-600" />
                    Intégration avec le CRM
                  </h3>
                  <p>
                    Les locataires sont des contacts dans votre CRM. Chaque paiement, relance ou communication est automatiquement enregistré dans l'historique du contact. Vous pouvez suivre l'évolution de la relation avec chaque locataire, de la première visite jusqu'au renouvellement du contrat. Le CRM vous permet également de segmenter vos locataires (par exemple, "locataires à jour", "locataires en retard", "locataires à renouveler") pour des actions ciblées.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Home className="h-6 w-6 text-green-600" />
                    Intégration avec la gestion des biens
                  </h3>
                  <p>
                    Chaque contrat de location est rattaché à un bien immobilier. L'historique complet du bien (locations précédentes, travaux, entretiens) est accessible depuis le module de gestion locative. Inversement, les informations de location (loyers, locataires, contrats) sont visibles dans la fiche du bien. Cette intégration offre une vision complète de chaque propriété.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Building2 className="h-6 w-6 text-purple-600" />
                    Intégration avec le syndic de copropriété
                  </h3>
                  <p>
                    Si vous gérez également des copropriétés, le module de gestion locative s'intègre avec le module syndic. Les charges de copropriété peuvent être répercutées sur les loyers, et les informations de copropriété sont accessibles depuis la fiche du bien locatif. Cette intégration est particulièrement utile pour les gestionnaires qui gèrent à la fois des locations et des copropriétés.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-amber-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <DollarSign className="h-6 w-6 text-amber-600" />
                    Intégration avec la comptabilité
                  </h3>
                  <p>
                    Chaque paiement de loyer est automatiquement enregistré en comptabilité. Les recettes locatives sont intégrées dans votre prévisionnel de trésorerie, et les impayés sont suivis dans les créances clients. Cette intégration élimine la double saisie et garantit la cohérence entre la gestion locative et la comptabilité.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-indigo-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                    Intégration avec le reporting
                  </h3>
                  <p>
                    Les données de gestion locative alimentent automatiquement vos tableaux de bord et rapports. Vous pouvez analyser le taux d'occupation, le taux de recouvrement des loyers, les délais moyens de paiement, ou encore la répartition des paiements par moyen de paiement (Mobile Money, virement, espèces). Ces indicateurs vous permettent de piloter votre activité de manière data-driven.
                  </p>
                </div>
              </div>

              {/* Lien explicite vers page pilier mère */}
              <div className="rounded-lg border-2 border-blue-300 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Découvrez l'ERP ImmoTopia complet
                </h3>
                <p className="mb-6 text-gray-700">
                  La gestion locative est un module essentiel de l'ERP ImmoTopia, mais elle n'est qu'une partie de la solution. Pour comprendre comment l'ensemble des modules (CRM, gestion des biens, syndic, comptabilité, reporting) fonctionnent ensemble pour transformer votre activité immobilière, consultez notre page dédiée :
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

        {/* Section 7: FAQ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes sur la gestion locative ImmoTopia
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
              Prêt à transformer votre gestion locative ?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Découvrez comment le module de gestion locative d'ImmoTopia, intégré à un ERP immobilier complet, peut automatiser vos processus et améliorer votre rentabilité.
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
                href="/fonctionnalites"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Toutes les fonctionnalités
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Découvrez l'ensemble des modules de l'ERP ImmoTopia
                </p>
              </Link>
              <Link
                href="/pour-qui/gestionnaires-locatifs"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Pour les gestionnaires locatifs
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Solutions dédiées aux professionnels de la gestion locative
                </p>
              </Link>
              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Paiement Mobile Money
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Encaissement digital intégré pour loyers et charges
                </p>
              </Link>
              <Link
                href="/gestion-locative-vs-excel"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Gestion locative vs Excel
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Pourquoi quitter Excel pour un logiciel dédié
                </p>
              </Link>
              <Link
                href="/guides/reduire-impayes-loyers-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Guide : Réduire les impayés
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Bonnes pratiques pour limiter les retards de paiement
                </p>
              </Link>
              <Link
                href="/modeles/quittance-loyer-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Modèle de quittance de loyer
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Téléchargez un modèle conforme aux exigences légales
                </p>
              </Link>
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
                href="/fonctionnalites/gestion-locative"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Fonctionnalités gestion locative
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Détails techniques du module de gestion locative
                </p>
              </Link>
              
              <Link
                href="/fonctionnalites/paiements-mobile-money"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Paiements Mobile Money
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Intégration Orange Money, MTN Money, Wave
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
