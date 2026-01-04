import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  AlertTriangle,
  Copy,
  Calendar,
  TrendingUp,
  DollarSign,
  ClipboardList,
  BarChart3,
  Shield,
  Clock,
  Users
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';
import CopyToClipboardButton from '@/components/ui/CopyToClipboardButton';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Modèle d'état de compte locatif / relevé de loyers (gratuit) | Côte d'Ivoire",
    description:
      "Modèle gratuit d'état de compte locatif (relevé de loyers) à copier : loyers dus, paiements, retards, solde. Découvrez l'automatisation avec ImmoTopia.",
    canonicalUrl: '/modeles/releve-loyers-etat-de-compte-cote-divoire',
    keywords: [
      'état de compte locatif Côte d\'Ivoire',
      'relevé de loyers Côte d\'Ivoire',
      'relevé loyer propriétaire',
      'état de compte locataire',
      'relevé des paiements de loyer',
      'état de compte Abidjan',
      'suivi loyers Côte d\'Ivoire',
      'relevé locatif mensuel',
      'état de compte propriétaire',
      'gestion loyers Abidjan',
    ],
  },
  '/modeles/releve-loyers-etat-de-compte-cote-divoire'
);

const faqItems = [
  {
    question: "Quelle est la différence entre une quittance de loyer et un état de compte locatif ?",
    answer:
      "Une quittance de loyer est un document ponctuel qui atteste du paiement d'un loyer pour une période donnée (généralement un mois). L'état de compte locatif, quant à lui, est un document récapitulatif qui présente l'historique complet des loyers dus, des paiements reçus et du solde sur une période plus longue (plusieurs mois, trimestre, année). L'état de compte offre une vision globale de la situation financière du locataire, tandis que la quittance est une preuve de paiement ponctuelle.",
  },
  {
    question: "À quelle fréquence faut-il produire un état de compte locatif ?",
    answer:
      "La fréquence dépend de vos besoins et de vos obligations contractuelles. En pratique, un état de compte mensuel est recommandé pour un suivi rigoureux, surtout en cas de retards de paiement. Un relevé trimestriel ou annuel peut suffire pour les locataires réguliers. Certains propriétaires demandent un état de compte annuel pour leur comptabilité ou leur déclaration fiscale. Avec un logiciel comme ImmoTopia, vous pouvez générer un état de compte à tout moment, à la demande.",
  },
  {
    question: "Comment gérer un paiement partiel dans l'état de compte ?",
    answer:
      "En cas de paiement partiel, indiquez le montant réellement reçu dans la colonne 'Paiement reçu', et calculez le solde du mois en conséquence. Le solde négatif (impayé) sera reporté au mois suivant dans la colonne 'Cumul solde'. Ajoutez une observation pour préciser qu'il s'agit d'un paiement partiel (ex : 'Paiement partiel : 100 000 FCFA sur 150 000 FCFA dus'). Cela permet de tracer clairement l'historique et de justifier le solde restant dû.",
  },
  {
    question: "Comment présenter les impayés dans un état de compte ?",
    answer:
      "Les impayés apparaissent naturellement dans la colonne 'Solde mois' (négatif) et dans la colonne 'Cumul solde'. Si aucun paiement n'a été reçu pour un mois donné, indiquez '0' ou laissez vide la colonne 'Paiement reçu', et le solde du mois sera égal au montant dû. Le cumul solde affichera alors le total des impayés accumulés. Vous pouvez ajouter une observation pour signaler le retard (ex : 'Impayé : relance envoyée le XX/XX/XXXX').",
  },
  {
    question: "Peut-on exporter l'état de compte en PDF ?",
    answer:
      "Si vous utilisez un modèle Word ou Excel, vous pouvez l'exporter en PDF via les fonctions d'export de votre logiciel bureautique. Avec un logiciel de gestion immobilière comme ImmoTopia, l'export PDF est automatique : vous générez l'état de compte et le téléchargez directement en PDF, prêt à être envoyé au propriétaire ou au locataire. Cela garantit un format professionnel et non modifiable.",
  },
  {
    question: "Comment archiver les états de compte ?",
    answer:
      "L'archivage manuel (papier ou fichiers dispersés) rend difficile la recherche et le suivi. Nous recommandons de créer un dossier par bien ou par locataire, avec un sous-dossier 'États de compte' où vous classez les relevés par année et par période. Avec un logiciel comme ImmoTopia, tous les états de compte sont automatiquement archivés et rattachés au bien et au locataire concernés, avec un historique complet et une recherche instantanée.",
  },
  {
    question: "Comment ImmoTopia simplifie-t-il la génération des états de compte ?",
    answer:
      "ImmoTopia génère automatiquement les états de compte locatifs à partir des échéances de loyer et des paiements enregistrés. Chaque paiement est rattaché au contrat, au bien et à la période concernée. Vous pouvez générer un état de compte par bien, par locataire ou par propriétaire, pour n'importe quelle période (mois, trimestre, année). Le relevé inclut automatiquement les loyers dus, les paiements reçus (avec date et mode de paiement), les retards, les pénalités éventuelles et le solde. Vous exportez le tout en PDF en un clic, prêt à être envoyé.",
  },
  {
    question: "Ce modèle d'état de compte est-il conforme à la législation ivoirienne ?",
    answer:
      "Ce modèle est fourni à titre indicatif et doit être adapté à votre situation spécifique. Nous ne fournissons pas de conseil juridique. L'état de compte locatif est un outil de gestion et de transparence, mais il ne remplace pas les documents légaux comme les quittances de loyer. Pour garantir la conformité de vos pratiques avec la législation en vigueur en Côte d'Ivoire, nous vous recommandons de consulter un professionnel du droit (avocat, expert-comptable) si nécessaire.",
  },
];

export default function ReleveEtatDeComptePage() {
  const faqSchema = generateFAQSchema({ 
    questions: faqItems.map(item => ({
      question: item.question,
      answer: item.answer,
    }))
  });

  // Modèle d'état de compte complet
  const etatDeCompteModele = `ÉTAT DE COMPTE LOCATIF / RELEVÉ DE LOYERS

═══════════════════════════════════════════════════════════════════════════════
INFORMATIONS GÉNÉRALES
═══════════════════════════════════════════════════════════════════════════════

Bailleur / Gestionnaire :
Nom : [Nom du bailleur ou de l'agence]
Adresse : [Adresse complète]
Téléphone : [Numéro de téléphone]
Email : [Email]

Locataire :
Nom : [Nom du locataire]
Adresse : [Adresse complète]
Téléphone : [Numéro de téléphone]
Email : [Email]

Bien loué :
Adresse : [Adresse du bien]
Type : [Appartement / Villa / Studio / Commerce]
Référence : [Référence du bien]

Période couverte : Du [Date début] au [Date fin]
Date d'édition : [Date d'édition du relevé]

═══════════════════════════════════════════════════════════════════════════════
DÉTAIL DES LOYERS ET PAIEMENTS
═══════════════════════════════════════════════════════════════════════════════

| Mois/Période | Loyer dû | Charges | Total dû | Paiement reçu | Date paiement | Mode paiement | Solde mois | Cumul solde | Observations |
|--------------|----------|---------|----------|---------------|---------------|---------------|------------|-------------|--------------|
| [Mois 1]     | [Montant]| [Mont.] | [Total]  | [Montant]     | [Date]        | [Mode]        | [Solde]    | [Cumul]     | [Obs.]       |
| [Mois 2]     | [Montant]| [Mont.] | [Total]  | [Montant]     | [Date]        | [Mode]        | [Solde]    | [Cumul]     | [Obs.]       |
| [Mois 3]     | [Montant]| [Mont.] | [Total]  | [Montant]     | [Date]        | [Mode]        | [Solde]    | [Cumul]     | [Obs.]       |
| ...          | ...      | ...     | ...      | ...           | ...           | ...           | ...        | ...         | ...          |

═══════════════════════════════════════════════════════════════════════════════
TOTAUX ET SOLDE FINAL
═══════════════════════════════════════════════════════════════════════════════

Total loyers dus (période) :        [Montant total] FCFA
Total charges dues (période) :      [Montant total] FCFA
Total général dû (période) :        [Montant total] FCFA

Total paiements reçus (période) :   [Montant total] FCFA

SOLDE FINAL :                       [Montant] FCFA
(Positif = crédit locataire / Négatif = dette locataire)

═══════════════════════════════════════════════════════════════════════════════
OBSERVATIONS GÉNÉRALES
═══════════════════════════════════════════════════════════════════════════════

[Indiquez ici toute observation générale : retards récurrents, paiements partiels,
relances effectuées, accords de paiement, etc.]

═══════════════════════════════════════════════════════════════════════════════

Édité le : [Date]
Signature du gestionnaire / bailleur : ___________________________

═══════════════════════════════════════════════════════════════════════════════

NOTES :
- Ce relevé est fourni à titre informatif et de transparence.
- Les montants indiqués sont exprimés en Francs CFA (FCFA).
- En cas de désaccord, merci de nous contacter dans les plus brefs délais.
- Les quittances de loyer sont disponibles sur demande pour chaque paiement reçu.
`;

  return (
    <>
      <StructuredData data={faqSchema} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <FileText className="h-4 w-4" />
                Modèle gratuit à copier
              </div>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Modèle d'état de compte locatif / relevé de loyers en Côte d'Ivoire
              </h1>

              <p className="mb-8 text-xl text-blue-100">
                Suivez loyers dus, paiements, retards et solde avec ce modèle prêt à copier. Découvrez comment ImmoTopia automatise vos relevés.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <a href="#modele-etat-compte">
                    <Copy className="mr-2 h-5 w-5" />
                    Copier le modèle
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/contact?demo=true">
                    Automatiser mes relevés (démo)
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: À quoi sert un état de compte locatif */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              À quoi sert un état de compte locatif ?
            </h2>

            <p className="mb-8 text-lg text-gray-700">
              L'état de compte locatif (ou relevé de loyers) est un document récapitulatif qui présente l'historique des loyers dus, des paiements reçus et du solde pour un bien loué sur une période donnée. Il sert plusieurs objectifs essentiels :
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Transparence</h3>
                </div>
                <p className="text-gray-700">
                  Offre une vision claire et transparente de la situation financière entre le gestionnaire, le propriétaire et le locataire. Chacun peut vérifier les montants dus et payés.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Justification</h3>
                </div>
                <p className="text-gray-700">
                  Permet de justifier les paiements effectués et les montants restant dus. Utile en cas de litige ou de demande de preuve (banque, audit).
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-amber-100 p-3">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Suivi des retards</h3>
                </div>
                <p className="text-gray-700">
                  Identifie rapidement les retards de paiement et les impayés accumulés. Facilite les relances et la gestion des contentieux.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-purple-100 p-3">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Reporting propriétaire</h3>
                </div>
                <p className="text-gray-700">
                  Fournit au propriétaire un récapitulatif clair des revenus locatifs perçus et des éventuels impayés, sans conseil juridique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Quand produire un état de compte */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Quand produire un état de compte locatif ?
            </h2>

            <p className="mb-8 text-lg text-gray-700">
              La fréquence de production d'un état de compte dépend de vos besoins et de vos obligations contractuelles. Voici les cas d'usage les plus courants :
            </p>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Mensuel</h3>
                </div>
                <p className="text-gray-700">
                  Recommandé pour un suivi rigoureux, surtout en cas de retards de paiement ou de gestion de plusieurs biens. Permet de détecter rapidement les anomalies et de relancer les locataires en retard. Exemple : édition en fin de mois pour le mois écoulé.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Trimestriel / Annuel</h3>
                </div>
                <p className="text-gray-700">
                  Peut suffire pour les locataires réguliers et les propriétaires qui souhaitent un récapitulatif périodique. Utile pour la comptabilité et la déclaration fiscale. Exemple : relevé annuel en fin d'année civile ou fiscale.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">À la demande</h3>
                </div>
                <p className="text-gray-700">
                  En cas de demande du propriétaire, de la banque (pour un prêt), d'un audit interne ou d'un litige. Avec un logiciel de gestion, vous pouvez générer un état de compte à tout moment, pour n'importe quelle période.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Users className="h-6 w-6 text-amber-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Sortie locataire</h3>
                </div>
                <p className="text-gray-700">
                  Lors de la fin du bail, un état de compte final permet de faire le bilan des loyers dus et payés, et de calculer le solde à restituer ou à réclamer (dépôt de garantie, derniers loyers, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Informations à inclure (checklist) */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Informations à inclure dans un état de compte locatif
            </h2>

            <p className="mb-8 text-lg text-gray-700">
              Pour être complet et utile, un état de compte locatif doit contenir les informations suivantes :
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Identification du bien et du locataire</h3>
                  <p className="text-sm text-gray-700">Adresse du bien, type, référence, nom du locataire, coordonnées.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Période couverte</h3>
                  <p className="text-sm text-gray-700">Date de début et de fin de la période analysée (ex : du 01/01/2025 au 31/12/2025).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Loyers dus</h3>
                  <p className="text-sm text-gray-700">Montant du loyer dû pour chaque mois ou période, selon le contrat de bail.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Paiements reçus</h3>
                  <p className="text-sm text-gray-700">Montant, date et mode de paiement (espèces, virement, Mobile Money) pour chaque paiement.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Charges (si applicable)</h3>
                  <p className="text-sm text-gray-700">Montant des charges locatives (eau, électricité, ordures, etc.) si elles sont facturées séparément.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Pénalités (si applicable)</h3>
                  <p className="text-sm text-gray-700">Pénalités de retard ou frais supplémentaires prévus au contrat, le cas échéant.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Solde / Cumul</h3>
                  <p className="text-sm text-gray-700">Solde du mois (différence entre dû et payé) et cumul du solde (total des impayés ou crédit).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Observations</h3>
                  <p className="text-sm text-gray-700">Notes sur les retards, paiements partiels, relances, accords de paiement, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Modèle d'état de compte (à copier) */}
        <section id="modele-etat-compte" className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                ✅ Modèle d'état de compte locatif (à copier-coller)
              </h2>
              <p className="text-lg text-gray-700">
                Copiez ce modèle et adaptez-le à votre situation. Remplissez les champs entre crochets.
              </p>
            </div>

            <div className="rounded-xl border-2 border-blue-200 bg-white p-6 shadow-xl md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-600">
                  <ClipboardList className="h-6 w-6" />
                  <span className="font-semibold">Modèle prêt à copier</span>
                </div>
                <CopyToClipboardButton text={etatDeCompteModele} />
              </div>

              <div className="overflow-x-auto">
                <pre className="whitespace-pre-wrap rounded-lg bg-gray-50 p-6 text-sm text-gray-800">
{etatDeCompteModele}
                </pre>
              </div>

              <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div className="text-sm text-gray-800">
                    <p className="mb-2 font-semibold">Instructions :</p>
                    <ul className="list-inside list-disc space-y-1">
                      <li>Remplacez tous les champs entre crochets [XXX] par vos informations réelles.</li>
                      <li>Ajoutez autant de lignes que nécessaire dans le tableau pour couvrir toute la période.</li>
                      <li>Calculez le solde du mois : Total dû - Paiement reçu.</li>
                      <li>Calculez le cumul solde : Cumul précédent + Solde du mois.</li>
                      <li>Indiquez le mode de paiement : Espèces, Virement, Mobile Money (Orange Money, MTN Money, Wave), etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Variante état de compte propriétaire */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Variante : État de compte propriétaire
            </h2>

            <p className="mb-6 text-lg text-gray-700">
              Si vous êtes gestionnaire immobilier et que vous reversez les loyers à un propriétaire, vous pouvez adapter l'état de compte pour inclure les informations suivantes (si applicable) :
            </p>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Frais de gestion
                </h3>
                <p className="text-gray-700">
                  Si vous prélevez des frais de gestion (pourcentage ou montant fixe), ajoutez une colonne "Frais de gestion" pour indiquer le montant retenu sur chaque loyer perçu. Exemple : 10% du loyer encaissé.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Net à reverser au propriétaire
                </h3>
                <p className="text-gray-700">
                  Calculez le montant net à reverser au propriétaire : Loyer encaissé - Frais de gestion - Charges éventuelles (si vous les avancez). Indiquez clairement ce montant dans une colonne dédiée.
                </p>
              </div>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                  <p className="text-sm text-gray-800">
                    <strong>Formulation neutre :</strong> Ces éléments sont fournis à titre indicatif. Adaptez le modèle selon vos accords contractuels avec le propriétaire. Nous ne fournissons pas de conseil juridique ou comptable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Exemple rempli (fictif) */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Exemple d'état de compte rempli (fictif)
            </h2>

            <p className="mb-6 text-lg text-gray-700">
              Voici un exemple fictif pour vous aider à visualiser comment remplir le modèle. <strong>Attention :</strong> cet exemple est purement illustratif et ne doit pas être utilisé tel quel.
            </p>

            <div className="rounded-lg border-2 border-amber-300 bg-amber-50 p-6">
              <div className="mb-4 flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                <p className="text-sm text-gray-800">
                  <strong>Exemple fictif uniquement.</strong> Les noms, adresses et montants sont inventés à des fins de démonstration.
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-800">
                <div>
                  <p className="font-semibold">Bailleur :</p>
                  <p>KOUASSI Jean-Baptiste, Cocody Riviera Palmeraie, Abidjan</p>
                </div>
                <div>
                  <p className="font-semibold">Locataire :</p>
                  <p>DIALLO Aminata, Yopougon Niangon, Abidjan</p>
                </div>
                <div>
                  <p className="font-semibold">Bien loué :</p>
                  <p>Appartement 3 pièces, Cocody Angré 8ème Tranche, Abidjan</p>
                </div>
                <div>
                  <p className="font-semibold">Période :</p>
                  <p>Du 01/01/2025 au 31/03/2025 (3 mois)</p>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">Mois</th>
                        <th className="border border-gray-300 p-2">Loyer dû</th>
                        <th className="border border-gray-300 p-2">Charges</th>
                        <th className="border border-gray-300 p-2">Total dû</th>
                        <th className="border border-gray-300 p-2">Paiement reçu</th>
                        <th className="border border-gray-300 p-2">Date</th>
                        <th className="border border-gray-300 p-2">Mode</th>
                        <th className="border border-gray-300 p-2">Solde mois</th>
                        <th className="border border-gray-300 p-2">Cumul</th>
                        <th className="border border-gray-300 p-2">Obs.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Janvier 2025</td>
                        <td className="border border-gray-300 p-2">150 000</td>
                        <td className="border border-gray-300 p-2">20 000</td>
                        <td className="border border-gray-300 p-2">170 000</td>
                        <td className="border border-gray-300 p-2">170 000</td>
                        <td className="border border-gray-300 p-2">05/01/2025</td>
                        <td className="border border-gray-300 p-2">Orange Money</td>
                        <td className="border border-gray-300 p-2">0</td>
                        <td className="border border-gray-300 p-2">0</td>
                        <td className="border border-gray-300 p-2">Paiement à temps</td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="border border-gray-300 p-2">Février 2025</td>
                        <td className="border border-gray-300 p-2">150 000</td>
                        <td className="border border-gray-300 p-2">20 000</td>
                        <td className="border border-gray-300 p-2">170 000</td>
                        <td className="border border-gray-300 p-2">100 000</td>
                        <td className="border border-gray-300 p-2">15/02/2025</td>
                        <td className="border border-gray-300 p-2">Virement</td>
                        <td className="border border-gray-300 p-2">-70 000</td>
                        <td className="border border-gray-300 p-2">-70 000</td>
                        <td className="border border-gray-300 p-2">Paiement partiel, retard 10j</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Mars 2025</td>
                        <td className="border border-gray-300 p-2">150 000</td>
                        <td className="border border-gray-300 p-2">20 000</td>
                        <td className="border border-gray-300 p-2">170 000</td>
                        <td className="border border-gray-300 p-2">240 000</td>
                        <td className="border border-gray-300 p-2">08/03/2025</td>
                        <td className="border border-gray-300 p-2">MTN Money</td>
                        <td className="border border-gray-300 p-2">+70 000</td>
                        <td className="border border-gray-300 p-2">0</td>
                        <td className="border border-gray-300 p-2">Régularisation février + mars</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 space-y-1 font-semibold">
                  <p>Total dû (3 mois) : 510 000 FCFA</p>
                  <p>Total encaissé : 510 000 FCFA</p>
                  <p className="text-green-700">Solde final : 0 FCFA (à jour)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Erreurs fréquentes à éviter */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Erreurs fréquentes à éviter
            </h2>

            <p className="mb-8 text-lg text-gray-700">
              Lors de la création d'un état de compte locatif, certaines erreurs peuvent nuire à sa clarté et à sa fiabilité. Voici les pièges à éviter :
            </p>

            <div className="space-y-6">
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-red-900">Période non précisée</h3>
                </div>
                <p className="text-sm text-red-800">
                  Toujours indiquer clairement la période couverte (du XX/XX/XXXX au XX/XX/XXXX). Sans cette information, l'état de compte perd de sa valeur et peut prêter à confusion.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-red-900">Solde mal calculé</h3>
                </div>
                <p className="text-sm text-red-800">
                  Vérifiez vos calculs : Solde du mois = Total dû - Paiement reçu. Cumul solde = Cumul précédent + Solde du mois. Une erreur de calcul peut fausser tout le relevé et créer des litiges.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-red-900">Paiements non datés</h3>
                </div>
                <p className="text-sm text-red-800">
                  Indiquez toujours la date de réception du paiement. Cela permet de tracer l'historique et de justifier les retards ou les paiements anticipés.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-red-900">Mode de paiement non indiqué</h3>
                </div>
                <p className="text-sm text-red-800">
                  Précisez le mode de paiement (Espèces, Virement, Mobile Money). Cela facilite le rapprochement bancaire et la traçabilité des flux financiers.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-amber-900">Observations manquantes</h3>
                </div>
                <p className="text-sm text-amber-800">
                  Utilisez la colonne "Observations" pour noter les retards, paiements partiels, relances, accords de paiement, etc. Ces notes sont précieuses en cas de litige ou de suivi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Comment ImmoTopia automatise */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 text-white md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Comment ImmoTopia automatise vos états de compte locatifs
              </h2>
              <p className="text-xl text-blue-100">
                Fini les tableaux Excel et les calculs manuels. ImmoTopia génère vos relevés automatiquement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-blue-400 bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-2">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Échéances loyers générées automatiquement</h3>
                </div>
                <p className="text-blue-100">
                  Dès la création d'un contrat de bail, ImmoTopia génère automatiquement les échéances de loyer (mensuel, trimestriel, etc.) pour toute la durée du bail. Plus besoin de saisir manuellement chaque mois.
                </p>
              </div>

              <div className="rounded-lg border border-blue-400 bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-2">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Paiements rattachés au contrat + période</h3>
                </div>
                <p className="text-blue-100">
                  Chaque paiement reçu (Mobile Money, virement, espèces) est rattaché au contrat de bail, au bien et à la période concernée. Le système calcule automatiquement le solde et détecte les retards.
                </p>
              </div>

              <div className="rounded-lg border border-blue-400 bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-2">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Quittances / reçus générés automatiquement</h3>
                </div>
                <p className="text-blue-100">
                  Pour chaque paiement reçu, ImmoTopia génère automatiquement une quittance de loyer ou un reçu, prêt à être envoyé au locataire. Vous pouvez également générer des quittances en masse.
                </p>
              </div>

              <div className="rounded-lg border border-blue-400 bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-2">
                    <ClipboardList className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Relevés générés automatiquement</h3>
                </div>
                <p className="text-blue-100">
                  Générez un état de compte locatif en un clic, par bien, par locataire ou par propriétaire, pour n'importe quelle période. Le relevé inclut automatiquement tous les loyers dus, paiements reçus, retards et solde. Export PDF instantané.
                </p>
              </div>

              <div className="rounded-lg border border-blue-400 bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-2">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Reporting : taux encaissement, impayés</h3>
                </div>
                <p className="text-blue-100">
                  Tableaux de bord et KPI en temps réel : taux d'encaissement, montant des impayés, retards par locataire, revenus locatifs par bien ou par propriétaire. Pilotez votre activité avec des données fiables.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-4 rounded-lg border-2 border-white/30 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Liens utiles :</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/gestion-locative-cote-divoire"
                  className="flex items-center gap-2 text-blue-100 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                  Module gestion locative
                </Link>
                <Link
                  href="/guides/reduire-impayes-loyers-cote-divoire"
                  className="flex items-center gap-2 text-blue-100 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                  Réduire les impayés
                </Link>
                <Link
                  href="/pour-qui/gestionnaires-locatifs"
                  className="flex items-center gap-2 text-blue-100 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                  Gestionnaires locatifs
                </Link>
                <Link
                  href="/paiement-loyer-charges-mobile-money-cote-divoire"
                  className="flex items-center gap-2 text-blue-100 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                  Paiements Mobile Money
                </Link>
                <Link
                  href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                  className="flex items-center gap-2 text-blue-100 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                  Tableaux de bord & KPI
                </Link>
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="flex items-center gap-2 text-blue-100 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                  ERP immobilier complet
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes (FAQ)
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-3 flex items-start gap-3 text-lg font-semibold text-gray-900">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    {item.question}
                  </h3>
                  <p className="pl-8 text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: CTA Final */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-16 text-white md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Prêt à automatiser vos états de compte locatifs ?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Découvrez comment ImmoTopia peut transformer votre gestion locative et vous faire gagner un temps précieux.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
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
                className="border-2 border-white bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/gestion-locative-cote-divoire">
                  Voir le module gestion locative
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <Link href="/tarifs" className="transition-colors hover:text-white">
                Voir les tarifs
              </Link>
              <span>•</span>
              <Link href="/modeles/contrat-bail-habitation-cote-divoire" className="transition-colors hover:text-white">
                Modèle contrat de bail
              </Link>
              <span>•</span>
              <Link href="/modeles/bail-commercial-cote-divoire" className="transition-colors hover:text-white">
                Modèle bail commercial
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

