import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Wrench,
  FileText, 
  AlertCircle,
  Building2,
  Users,
  Home,
  TrendingUp,
  Shield,
  Zap,
  Link2,
  Camera,
  Clock,
  UserCheck,
  FileCheck,
  BarChart3,
  Bell,
  Settings,
  Phone,
  MessageSquare
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Maintenance immobilière & ticketing en Côte d'Ivoire | Module ERP ImmoTopia",
    description:
      "Gestion des incidents et maintenance immobilière en Côte d'Ivoire : tickets avec photos, priorités, prestataires, devis, interventions et rapports, intégrés à l'ERP ImmoTopia (locatif & copropriété).",
    canonicalUrl: '/maintenance-immobiliere-ticketing-cote-divoire',
    keywords: [
      'maintenance immobilière logiciel Côte d\'Ivoire',
      'logiciel ticketing immobilier',
      'gestion incidents locataires',
      'gestion maintenance copropriété',
      'suivi interventions prestataires',
      'demande de devis maintenance immeuble',
      'ticketing immobilier Côte d\'Ivoire',
      'gestion maintenance locative',
      'logiciel maintenance immeuble Abidjan',
      'ERP maintenance immobilière',
      'module maintenance ImmoTopia',
      'gestion incidents parties communes',
      'coordination prestataires maintenance',
      'rapports maintenance copropriété',
    ],
  },
  '/maintenance-immobiliere-ticketing-cote-divoire'
);

const faqItems = [
  {
    question: "Les locataires peuvent-ils déclarer un incident directement dans ImmoTopia ?",
    answer:
      "Oui, le module maintenance ImmoTopia permet aux locataires de déclarer des incidents directement depuis leur espace locataire. Ils peuvent créer un ticket, joindre des photos, décrire le problème et suivre le statut de leur demande en temps réel. Cette fonctionnalité améliore la communication et réduit les délais de traitement des interventions.",
  },
  {
    question: "Les copropriétaires peuvent-ils déclarer un incident sur les parties communes ?",
    answer:
      "Absolument. Dans le contexte de la copropriété, les copropriétaires peuvent déclarer des incidents concernant les parties communes (ascenseur, éclairage, eau, électrogène, etc.) via leur espace résident. Le syndic reçoit la notification, qualifie l'urgence, affecte un prestataire si nécessaire et suit l'intervention jusqu'à la clôture. Tous les incidents sont tracés et peuvent être présentés en assemblée générale.",
  },
  {
    question: "Peut-on joindre des photos et suivre le statut d'un ticket en temps réel ?",
    answer:
      "Oui, c'est l'un des points forts du module maintenance ImmoTopia. Chaque ticket peut inclure plusieurs photos prises directement depuis l'application mobile ou uploadées depuis un ordinateur. Le statut du ticket (nouveau, en cours, en attente, clos) est mis à jour en temps réel et visible par tous les acteurs concernés (déclarant, gestionnaire, prestataire). Des notifications automatiques informent les parties prenantes des changements de statut.",
  },
  {
    question: "Peut-on affecter un prestataire et suivre l'intervention jusqu'à la clôture ?",
    answer:
      "Oui, le module maintenance permet d'affecter un prestataire à chaque ticket. Le gestionnaire peut sélectionner un prestataire depuis la base de contacts, lui transmettre les informations du ticket (photos, description, localisation) et suivre l'avancement de l'intervention. Le prestataire peut mettre à jour le statut, ajouter des commentaires et des photos de l'intervention. Une fois l'intervention validée, le ticket est clôturé avec toutes les preuves nécessaires.",
  },
  {
    question: "Peut-on générer des rapports de maintenance pour l'assemblée générale de copropriété ?",
    answer:
      "Oui, ImmoTopia génère automatiquement des rapports de maintenance détaillés qui peuvent être exportés et présentés en assemblée générale. Ces rapports incluent le nombre d'incidents par type, les temps de résolution moyens, les coûts par catégorie, l'historique des interventions et les prestataires sollicités. Ces données permettent une transparence totale vis-à-vis des copropriétaires et facilitent la prise de décision pour les travaux programmés.",
  },
  {
    question: "Peut-on distinguer les tickets de maintenance locative et ceux de copropriété ?",
    answer:
      "Oui, le module maintenance ImmoTopia est conçu pour gérer les deux contextes avec des règles spécifiques. En gestion locative, les tickets sont liés à un logement loué et à un contrat de location. En copropriété, les tickets concernent les parties communes ou les équipements collectifs et sont liés à une résidence et à un lot. L'interface s'adapte automatiquement selon le contexte, et les workflows de validation peuvent différer (validation propriétaire vs validation syndic).",
  },
  {
    question: "Est-ce adapté aux petites structures de gestion immobilière ?",
    answer:
      "Absolument. Le module maintenance ImmoTopia est conçu pour s'adapter à tous les types de structures, des petites agences aux grandes entreprises. Même avec un portefeuille réduit, la structuration des tickets, la traçabilité des interventions et la coordination des prestataires apportent une valeur immédiate. L'ERP complet permet de grandir sans changer d'outil : vous pouvez commencer par utiliser principalement la maintenance, puis activer progressivement les autres modules selon vos besoins.",
  },
  {
    question: "Peut-on activer uniquement le module maintenance sans les autres modules de l'ERP ?",
    answer:
      "ImmoTopia est un ERP complet conçu pour centraliser toute votre activité immobilière. Bien que le module maintenance soit autonome dans son fonctionnement, il tire sa valeur de son intégration avec les autres modules : la gestion locative (pour lier les tickets aux contrats et aux biens), le syndic (pour lier les tickets aux résidences et aux lots), la comptabilité (pour enregistrer les coûts d'intervention) et le reporting (pour analyser les performances). Nous recommandons d'utiliser l'ERP complet pour maximiser l'efficacité opérationnelle.",
  },
];

export default function MaintenanceImmobiliereTicketingCoteIvoirePage() {
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
                Maintenance immobilière en Côte d'Ivoire : tickets, prestataires et suivi centralisé
              </h1>
              
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Module maintenance intégré à l'ERP immobilier ImmoTopia (locatif + copropriété)
              </p>
              
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
                La maintenance immobilière n'est pas un simple outil de tickets : c'est un module transversal qui s'intègre naturellement dans un ERP immobilier complet. Il couvre les incidents en gestion locative et en copropriété, avec traçabilité complète, coordination des prestataires et reporting pour une gestion optimale. Découvrez{' '}
                <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
                  toutes nos fonctionnalités
                </Link>
                {' '}et{' '}
                <Link href="/pour-qui/syndics" className="font-semibold text-[#2563EB] hover:underline">
                  notre solution pour les syndics
                </Link>
                .
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

        {/* Section 1: Problèmes Courants */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Les défis de la maintenance immobilière en Côte d'Ivoire
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                À Abidjan et dans les grandes villes ivoiriennes, la gestion des incidents immobiliers fait face à des défis opérationnels récurrents. Les gestionnaires locatifs, syndics de copropriété et administrateurs de biens doivent gérer un flux constant d'incidents tout en maintenant la qualité de service et la satisfaction des résidents.
              </p>

              <div className="mb-8 rounded-lg bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-red-900">
                  <AlertCircle className="h-5 w-5" />
                  Problèmes courants sans outil structuré
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span><strong>Incidents gérés par appels ou WhatsApp :</strong> Les informations se perdent, pas de traçabilité, pas d'historique. Les messages vocaux et les conversations WhatsApp ne permettent pas de structurer les demandes et de suivre les interventions efficacement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span><strong>Absence de photos et de preuves :</strong> Sans photos jointes, il est difficile de qualifier l'urgence, d'expliquer le problème au prestataire ou de justifier les coûts d'intervention. Les litiges sur la responsabilité sont fréquents.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span><strong>Pas d'historique et de responsabilités claires :</strong> Impossible de savoir qui a déclaré quoi, quand, et comment le problème a été résolu. En cas de récidive, aucune référence n'est disponible pour accélérer la résolution.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span><strong>Délais longs et prestataires mal suivis :</strong> Sans workflow structuré, les interventions traînent, les prestataires ne sont pas rappelés, et les résidents s'impatientent. La coordination manuelle est chronophage et source d'erreurs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span><strong>En copropriété : parties communes critiques non suivies :</strong> Les équipements collectifs (eau, ascenseur, électrogène, éclairage, sécurité) nécessitent une réactivité maximale. Sans outil dédié, les incidents critiques peuvent impacter toute la résidence et générer des litiges avec les copropriétaires.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-blue-900">
                  <CheckCircle2 className="h-5 w-5" />
                  Besoin d'un workflow structuré avec preuves et transparence
                </h3>
                <p className="text-gray-700">
                  La solution passe par un module maintenance intégré à l'ERP immobilier, qui structure chaque incident en ticket, permet de joindre des photos, de prioriser les urgences, d'affecter des prestataires, de suivre les interventions et de générer des rapports. Cette approche garantit la traçabilité, réduit les délais, améliore la satisfaction et facilite le reporting pour les assemblées générales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Maintenance Locative vs Copropriété */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Maintenance locative vs copropriété : deux contextes, un module unique
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Le module maintenance ImmoTopia couvre deux contextes distincts de l'immobilier : la gestion locative et la copropriété. Chaque contexte a ses spécificités, mais un module unique avec des règles adaptées offre une meilleure cohérence et une formation simplifiée.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-white border-2 border-blue-200 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <Home className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Maintenance locative</h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Les incidents concernent les logements loués : plomberie, électricité, serrurerie, peinture, etc. Chaque ticket est lié à un contrat de location et à un bien spécifique.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Déclaration par le locataire ou le gestionnaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Validation par le gestionnaire ou le propriétaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Coûts imputables au locataire ou au propriétaire selon le contrat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Historique lié au bien et au contrat</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white border-2 border-indigo-200 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Maintenance copropriété</h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Les incidents concernent les parties communes et les équipements collectifs : ascenseur, eau, électrogène, éclairage, sécurité, etc. Chaque ticket est lié à une résidence et peut concerner un lot spécifique.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Déclaration par un copropriétaire ou le syndic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Validation par le syndic selon les règles de la copropriété</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Coûts répartis selon les quotes-parts ou le budget prévisionnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Historique présentable en assemblée générale</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Valeur d'un module unique avec règles selon le rôle
                </h3>
                <p className="text-gray-700">
                  Un module maintenance unique qui s'adapte au contexte (locatif ou copropriété) offre plusieurs avantages : une interface cohérente pour les équipes qui gèrent les deux types de biens, des règles de validation et de coûts adaptées automatiquement, et une formation simplifiée. L'intégration avec les autres modules de l'ERP (gestion locative, syndic, comptabilité) est également plus fluide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Fonctionnalités Clés */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Fonctionnalités clés du module maintenance ImmoTopia
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Un module complet pour gérer tous les aspects de la maintenance immobilière, de la déclaration à la clôture
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Fonctionnalité 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Déclaration d'incident
                </h3>
                <p className="mb-4 text-gray-600">
                  Création de tickets par les locataires, copropriétaires ou gestionnaires, avec description détaillée, catégorisation (plomberie, électricité, etc.) et localisation précise.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Interface intuitive pour tous les utilisateurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Catégories prédéfinies et personnalisables</span>
                  </li>
                </ul>
              </div>

              {/* Fonctionnalité 2 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Camera className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Photos et pièces jointes
                </h3>
                <p className="mb-4 text-gray-600">
                  Ajout de photos multiples directement depuis l'application mobile ou depuis un ordinateur. Les photos permettent de qualifier l'urgence et d'expliquer précisément le problème au prestataire.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Upload multiple de photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Photos de l'intervention pour preuve</span>
                  </li>
                </ul>
              </div>

              {/* Fonctionnalité 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Priorisation & statut
                </h3>
                <p className="mb-4 text-gray-600">
                  Attribution d'un niveau de priorité (critique, urgent, normal, faible) et suivi du statut (nouveau, en cours, en attente, clos) pour une gestion efficace des interventions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Niveaux de priorité configurables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Statuts visibles en temps réel</span>
                  </li>
                </ul>
              </div>

              {/* Fonctionnalité 4 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Affectation prestataires
                </h3>
                <p className="mb-4 text-gray-600">
                  Sélection d'un prestataire depuis la base de contacts, transmission automatique des informations du ticket (photos, description, localisation) et suivi de l'intervention.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Base de prestataires centralisée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Transmission automatique des informations</span>
                  </li>
                </ul>
              </div>

              {/* Fonctionnalité 5 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                  <FileCheck className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Demandes de devis & validation
                </h3>
                <p className="mb-4 text-gray-600">
                  Pour les interventions nécessitant un devis, le prestataire peut soumettre un devis directement dans le ticket. Le gestionnaire ou le syndic valide le devis avant l'intervention.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Devis intégrés au ticket</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Workflow de validation</span>
                  </li>
                </ul>
              </div>

              {/* Fonctionnalité 6 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Historique complet
                </h3>
                <p className="mb-4 text-gray-600">
                  Chaque ticket conserve un historique complet : déclaration, photos, commentaires, affectation prestataire, intervention, validation, clôture. Cet historique est consultable à tout moment et sert de preuve en cas de litige.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Journal d'audit complet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Recherche et filtres avancés</span>
                  </li>
                </ul>
              </div>

              {/* Fonctionnalité 7 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                  <Bell className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Notifications automatiques
                </h3>
                <p className="mb-4 text-gray-600">
                  Notifications par email et dans l'application pour informer les parties prenantes des changements de statut, des nouvelles affectations et des interventions programmées.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Notifications personnalisables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Rappels automatiques si nécessaire</span>
                  </li>
                </ul>
              </div>

              {/* Fonctionnalité 8 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Rapports maintenance
                </h3>
                <p className="mb-4 text-gray-600">
                  Génération de rapports détaillés pour les gestionnaires et les assemblées générales : nombre d'incidents par type, temps de résolution moyens, coûts par catégorie, prestataires sollicités.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Export PDF et Excel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Graphiques et tableaux de bord</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Workflow */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Workflow : de la déclaration à la clôture
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-8 text-lg leading-relaxed">
                Le module maintenance ImmoTopia structure chaque intervention selon un workflow clair et traçable, de la déclaration initiale jusqu'à la clôture du ticket. Chaque étape est enregistrée et visible par tous les acteurs concernés.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">Déclaration</h3>
                    <p className="text-gray-700">
                      Un locataire, copropriétaire ou gestionnaire déclare un incident via l'application ou le portail web. Il décrit le problème, joint des photos si nécessaire, et précise la localisation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">Qualification</h3>
                    <p className="text-gray-700">
                      Le gestionnaire ou le syndic reçoit la notification, examine les photos et la description, et qualifie l'incident : catégorie (plomberie, électricité, etc.) et niveau de priorité (critique, urgent, normal, faible).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">Priorisation</h3>
                    <p className="text-gray-700">
                      Le ticket est priorisé selon l'urgence et l'impact. Les incidents critiques (panne d'ascenseur, coupure d'eau, etc.) sont traités en priorité et peuvent déclencher des alertes automatiques.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">Affectation</h3>
                    <p className="text-gray-700">
                      Le gestionnaire ou le syndic affecte un prestataire depuis la base de contacts. Le prestataire reçoit automatiquement les informations du ticket (photos, description, localisation) et peut accepter ou refuser l'intervention.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">Intervention</h3>
                    <p className="text-gray-700">
                      Le prestataire effectue l'intervention, met à jour le statut du ticket, ajoute des commentaires et des photos de l'intervention. Le gestionnaire ou le syndic suit l'avancement en temps réel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">Clôture</h3>
                    <p className="text-gray-700">
                      Une fois l'intervention validée par le gestionnaire ou le syndic (et éventuellement par le déclarant), le ticket est clôturé. Toutes les informations (photos, devis, facture, commentaires) sont conservées dans l'historique pour référence future.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Intégration avec l'ERP : liens automatiques
                </h3>
                <p className="mb-4 text-gray-700">
                  Le module maintenance s'intègre naturellement avec les autres modules de l'ERP ImmoTopia :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Link2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span><strong>Bien / Lot :</strong> Chaque ticket est lié à un bien spécifique (logement loué) ou à un lot (copropriété), permettant de consulter l'historique complet des interventions sur ce bien.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Link2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span><strong>Contrat (locatif) ou Résidence (copro) :</strong> Le ticket est associé au contrat de location ou à la résidence, facilitant le suivi et la facturation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Link2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span><strong>Prestataire :</strong> Le prestataire est sélectionné depuis la base de contacts du CRM, et ses interventions sont tracées pour évaluation de performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Link2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span><strong>Coûts (module compta) :</strong> Les coûts d'intervention peuvent être enregistrés automatiquement dans le module comptabilité pour le rapprochement et le reporting financier.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Personas */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Pour qui ? Des bénéfices concrets selon votre rôle
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Le module maintenance ImmoTopia s'adapte aux besoins spécifiques de chaque acteur de l'immobilier
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Persona 1 */}
              <div className="rounded-lg border-2 border-blue-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Gestionnaire locatif</h3>
                </div>
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Problème</h4>
                    <p className="text-gray-600">
                      Gérer un flux constant d'incidents par appels et WhatsApp, sans traçabilité, avec des délais longs et des litiges fréquents sur la responsabilité.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Avec ImmoTopia</h4>
                    <p className="text-gray-600">
                      Tickets structurés avec photos, priorisation automatique, affectation prestataires, suivi en temps réel, historique complet par bien et par contrat.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Résultat</h4>
                    <p className="text-gray-600">
                      Réduction des délais de traitement de 40%, amélioration de la satisfaction locataires, traçabilité complète pour éviter les litiges, reporting pour les propriétaires.
                    </p>
                  </div>
                </div>
              </div>

              {/* Persona 2 */}
              <div className="rounded-lg border-2 border-indigo-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                    <Building2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Syndic de copropriété</h3>
                </div>
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Problème</h4>
                    <p className="text-gray-600">
                      Incidents sur parties communes (ascenseur, eau, électrogène) gérés par appels, sans historique, avec des délais critiques et des copropriétaires mécontents.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Avec ImmoTopia</h4>
                    <p className="text-gray-600">
                      Déclarations par copropriétaires, priorisation des urgences, coordination prestataires, suivi interventions, rapports pour assemblée générale.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Résultat</h4>
                    <p className="text-gray-600">
                      Réactivité maximale sur incidents critiques, transparence totale vis-à-vis des copropriétaires, rapports détaillés pour AG, réduction des litiges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Persona 3 */}
              <div className="rounded-lg border-2 border-green-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Responsable technique / Facility Manager</h3>
                </div>
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Problème</h4>
                    <p className="text-gray-600">
                      Coordination manuelle de multiples prestataires, suivi des interventions par tableaux Excel, pas de vision consolidée, reporting chronophage.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Avec ImmoTopia</h4>
                    <p className="text-gray-600">
                      Base de prestataires centralisée, affectation et suivi depuis une interface unique, tableaux de bord temps réel, rapports automatiques.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Résultat</h4>
                    <p className="text-gray-600">
                      Gain de temps de 50% sur la coordination, vision consolidée de tous les incidents, KPI automatiques (temps de résolution, coûts), meilleure négociation avec prestataires.
                    </p>
                  </div>
                </div>
              </div>

              {/* Persona 4 */}
              <div className="rounded-lg border-2 border-purple-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Wrench className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Prestataires</h3>
                </div>
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Problème</h4>
                    <p className="text-gray-600">
                      Réception d'appels avec informations incomplètes, pas de photos, coordination difficile, facturation manuelle, pas de suivi de performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Avec ImmoTopia</h4>
                    <p className="text-gray-600">
                      Portail prestataire (si activé) ou coordination via le gestionnaire, réception automatique des tickets avec photos et description, mise à jour statut, photos intervention.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">Résultat</h4>
                    <p className="text-gray-600">
                      Interventions mieux préparées, moins de déplacements inutiles, facturation simplifiée, suivi de performance pour amélioration continue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Intégration ERP */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Intégration au sein de l'ERP ImmoTopia
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-8 text-lg leading-relaxed">
                Le module maintenance n'est pas un outil isolé : il s'intègre naturellement avec tous les autres modules de l'ERP ImmoTopia pour offrir une vision globale et une efficacité maximale.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg bg-white border border-blue-200 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <Home className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Gestion locative</h3>
                  </div>
                  <p className="text-gray-700">
                    Les tickets de maintenance sont liés aux contrats de location et aux biens. L'historique des interventions est consultable depuis la fiche du bien, et les coûts peuvent être imputés au locataire ou au propriétaire selon le contrat. Les incidents récurrents sur un bien peuvent déclencher des alertes pour inspection approfondie.
                  </p>
                </div>

                <div className="rounded-lg bg-white border border-indigo-200 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Syndic (copropriété)</h3>
                  </div>
                  <p className="text-gray-700">
                    Les tickets sont liés aux résidences et aux lots. Les incidents sur parties communes sont tracés et peuvent être présentés en assemblée générale. Les coûts sont répartis selon les quotes-parts ou le budget prévisionnel. Les travaux programmés peuvent être planifiés et suivis depuis le module maintenance.
                  </p>
                </div>

                <div className="rounded-lg bg-white border border-green-200 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Annonces internes / Communication résidents</h3>
                  </div>
                  <p className="text-gray-700">
                    Les incidents critiques (coupure d'eau, panne d'ascenseur) peuvent déclencher automatiquement des annonces aux résidents via le module annonces, les informant de la situation et des mesures prises. Une fois l'intervention terminée, une annonce de clôture peut être publiée.
                  </p>
                </div>

                <div className="rounded-lg bg-white border border-yellow-200 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-yellow-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Comptabilité & trésorerie</h3>
                  </div>
                  <p className="text-gray-700">
                    Les coûts d'intervention (devis, factures prestataires) peuvent être enregistrés automatiquement dans le module comptabilité. Le rapprochement avec les paiements est facilité, et les coûts sont catégorisés pour le reporting financier. En copropriété, les coûts sont répartis selon les quotes-parts.
                  </p>
                </div>

                <div className="rounded-lg bg-white border border-purple-200 p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Reporting</h3>
                  </div>
                  <p className="text-gray-700">
                    Le module reporting consolide les données de maintenance : temps de résolution moyens, volumes d'incidents par type, coûts par catégorie, performance des prestataires. Ces indicateurs permettent d'optimiser la gestion préventive et de négocier de meilleurs tarifs avec les prestataires.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Lien vers le pilier MÈRE de l'ERP ImmoTopia
                </h3>
                <p className="mb-6 text-lg text-blue-50">
                  Le module maintenance est un composant essentiel de l'ERP immobilier ImmoTopia. Pour découvrir l'ensemble des modules et leur synergie, consultez la page principale de l'ERP :
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/logiciel-immobilier-cote-divoire" className="flex items-center font-bold">
                    Découvrir l'ERP ImmoTopia complet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Comparatif Avant/Après */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Comparatif avant / après ImmoTopia
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg border border-gray-200 bg-white shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                      Aspect
                    </th>
                    <th className="border-b border-r border-l border-gray-200 px-6 py-4 text-left font-semibold text-red-700">
                      Avant (sans outil structuré)
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-left font-semibold text-green-700">
                      Après (avec ImmoTopia)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Déclaration d'incident</td>
                    <td className="border-l border-r border-gray-200 px-6 py-4 text-gray-700">
                      Appels téléphoniques, WhatsApp, messages vocaux
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Tickets structurés avec photos, description, localisation
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Traçabilité</td>
                    <td className="border-l border-r border-gray-200 px-6 py-4 text-gray-700">
                      Pas d'historique, informations perdues
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Historique complet avec journal d'audit, photos, commentaires
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Priorisation</td>
                    <td className="border-l border-r border-gray-200 px-6 py-4 text-gray-700">
                      Manuelle, selon disponibilité, risque d'oubli
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Priorisation automatique avec alertes pour incidents critiques
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Coordination prestataires</td>
                    <td className="border-l border-r border-gray-200 px-6 py-4 text-gray-700">
                      Appels multiples, informations incomplètes, suivi manuel
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Affectation centralisée, transmission automatique des informations, suivi en temps réel
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Délais de traitement</td>
                    <td className="border-l border-r border-gray-200 px-6 py-4 text-gray-700">
                      Délais élevés, interventions qui traînent
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Réduction des délais de 40% grâce au workflow structuré
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Preuves et photos</td>
                    <td className="border-l border-r border-gray-200 px-6 py-4 text-gray-700">
                      Pas de photos systématiques, litiges fréquents
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Photos obligatoires, preuves d'intervention, réduction des litiges
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Reporting</td>
                    <td className="border-l border-r border-gray-200 px-6 py-4 text-gray-700">
                      Tableaux Excel manuels, chronophages, erreurs
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Rapports automatiques, tableaux de bord temps réel, export PDF/Excel
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Satisfaction résidents</td>
                    <td className="border-l border-r border-gray-200 px-6 py-4 text-gray-700">
                      Mécontentement fréquent, manque de transparence
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Amélioration de la satisfaction grâce à la transparence et la réactivité
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes sur le module maintenance ImmoTopia
            </h2>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: CTA Final */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center text-white">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                Prêt à transformer votre gestion de maintenance ?
              </h2>
              <p className="mb-10 text-xl text-blue-50">
                Découvrez comment le module maintenance ImmoTopia peut structurer vos interventions, réduire vos délais et améliorer la satisfaction de vos résidents.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 shadow-lg transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-xl"
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
                  <Link href="/tarifs" className="flex items-center font-semibold">
                    Voir les tarifs
                    <TrendingUp className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h3 className="mb-6 text-center text-xl font-semibold text-gray-900">
              Pages connexes
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/logiciel-immobilier-cote-divoire">
                  ERP ImmoTopia
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/gestion-locative-cote-divoire">
                  Gestion locative
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/logiciel-syndic-copropriete-cote-divoire">
                  Syndic copropriété
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/fonctionnalites">
                  Fonctionnalités
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/tarifs">
                  Tarifs
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

