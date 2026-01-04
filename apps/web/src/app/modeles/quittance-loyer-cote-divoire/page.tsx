import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { CopyToClipboard } from '@/components/ui/copy-to-clipboard';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  AlertCircle,
  Copy,
  Download,
  HelpCircle,
  Link2,
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Modèle de quittance de loyer en Côte d\'Ivoire (gratuit)',
    description:
      'Téléchargez un modèle de quittance de loyer (CI) et découvrez comment automatiser quittances, encaissements et suivi des loyers avec l\'ERP immobilier ImmoTopia.',
    canonicalUrl: '/modeles/quittance-loyer-cote-divoire',
    keywords: [
      'modèle quittance de loyer Côte d\'Ivoire',
      'quittance de loyer Côte d\'Ivoire',
      'quittance loyer pdf',
      'quittance loyer word',
      'reçu de loyer',
      'quittance de loyer Abidjan',
      'modèle quittance loyer',
      'gestion locative Côte d\'Ivoire',
      'logiciel gestion locative',
    ],
  },
  '/modeles/quittance-loyer-cote-divoire'
);

// Modèle de quittance générique
const modeleQuittance = `QUITTANCE DE LOYER

Bailleur :
[Nom et prénom du bailleur]
[Adresse complète]
[Téléphone] - [Email]

Locataire :
[Nom et prénom du locataire]
[Adresse complète]

Bien loué :
[Adresse complète du bien loué]

Période concernée : [Mois] [Année]

Détail des sommes perçues :
- Loyer : [Montant] FCFA
- Charges (si applicable) : [Montant] FCFA
- Total perçu : [Montant total] FCFA

Mode de paiement : [Espèces / Virement bancaire / Mobile Money / Chèque]

Date de paiement : [Date]

Numéro de quittance : [Numéro]

Fait à [Ville], le [Date]

Signature et cachet du bailleur
_________________________
[Nom du bailleur]`;

const modeleQuittanceAvecCharges = `QUITTANCE DE LOYER (avec charges)

Bailleur :
[Nom et prénom du bailleur]
[Adresse complète]
[Téléphone] - [Email]

Locataire :
[Nom et prénom du locataire]
[Adresse complète]

Bien loué :
[Adresse complète du bien loué]

Période concernée : [Mois] [Année]

Détail des sommes perçues :
- Loyer hors charges : [Montant] FCFA
- Charges récupérables :
  * Eau : [Montant] FCFA
  * Électricité : [Montant] FCFA
  * Entretien : [Montant] FCFA
  * Autres charges : [Montant] FCFA
- Total charges : [Montant] FCFA
- Total perçu (loyer + charges) : [Montant total] FCFA

Mode de paiement : [Espèces / Virement bancaire / Mobile Money / Chèque]

Date de paiement : [Date]

Numéro de quittance : [Numéro]

Fait à [Ville], le [Date]

Signature et cachet du bailleur
_________________________
[Nom du bailleur]`;

const exempleQuittance = `QUITTANCE DE LOYER

Bailleur :
Jean KOUASSI
123 Avenue de la République, Cocody
Abidjan, Côte d'Ivoire
Téléphone : +225 07 12 34 56 78
Email : jean.kouassi@example.com

Locataire :
Marie TRAORE
45 Boulevard de la Paix, Yopougon
Abidjan, Côte d'Ivoire

Bien loué :
Appartement T3, Résidence Les Palmiers
78 Rue des Cocotiers, Cocody
Abidjan, Côte d'Ivoire

Période concernée : Janvier 2024

Détail des sommes perçues :
- Loyer : 150 000 FCFA
- Charges : 25 000 FCFA
- Total perçu : 175 000 FCFA

Mode de paiement : Orange Money

Date de paiement : 05 janvier 2024

Numéro de quittance : Q-2024-001

Fait à Abidjan, le 05 janvier 2024

Signature et cachet du bailleur
_________________________
Jean KOUASSI`;

const faqItems = [
  {
    question: 'La quittance de loyer est-elle obligatoire en Côte d\'Ivoire ?',
    answer:
      'La quittance de loyer sert de preuve de paiement pour le locataire et de traçabilité pour le bailleur. Bien qu\'elle ne soit pas toujours légalement obligatoire dans tous les cas, elle est fortement recommandée car elle protège les deux parties en cas de litige. Elle permet au locataire de justifier ses paiements et au bailleur de maintenir un historique clair des encaissements.',
  },
  {
    question: 'Quelle est la différence entre une quittance et un reçu de loyer ?',
    answer:
      'Une quittance de loyer est un document qui atteste du paiement d\'un loyer pour une période déterminée (généralement un mois). Un reçu de loyer est un terme plus général qui peut désigner la même chose. En pratique, les deux termes sont souvent utilisés de manière interchangeable. La quittance doit mentionner la période concernée, le montant perçu et le mode de paiement.',
  },
  {
    question: 'Peut-on faire une quittance de loyer manuscrite ?',
    answer:
      'Oui, une quittance de loyer peut être manuscrite, à condition qu\'elle contienne toutes les informations essentielles : identités du bailleur et du locataire, adresse du bien, période concernée, montant perçu, date de paiement, mode de paiement, et signature du bailleur. Cependant, une quittance imprimée ou générée électroniquement est plus professionnelle et plus facile à archiver.',
  },
  {
    question: 'Que mettre comme période sur une quittance de loyer ?',
    answer:
      'La période doit indiquer clairement le mois et l\'année concernés. Par exemple : "Janvier 2024" ou "Période du 1er janvier 2024 au 31 janvier 2024". Cette précision est importante pour éviter toute confusion, notamment si plusieurs quittances sont émises pour la même période ou si un paiement partiel est effectué.',
  },
  {
    question: 'Peut-on envoyer une quittance de loyer par email ou en PDF ?',
    answer:
      'Oui, une quittance de loyer peut être envoyée par email au format PDF. C\'est même une pratique courante et professionnelle. Le PDF garantit l\'intégrité du document et facilite l\'archivage. Avec ImmoTopia, les quittances sont générées automatiquement au format PDF dès qu\'un paiement est enregistré et peuvent être envoyées automatiquement par email au locataire.',
  },
  {
    question: 'Comment numéroter les quittances de loyer ?',
    answer:
      'Il est recommandé d\'utiliser un système de numérotation cohérent pour faciliter le suivi. Vous pouvez utiliser un format comme "Q-2024-001" (Quittance-Année-Numéro) ou "QUITT-001-2024". L\'important est d\'avoir une séquence unique et chronologique. Avec ImmoTopia, les quittances sont numérotées automatiquement selon un système configurable.',
  },
  {
    question: 'Comment gérer un paiement partiel de loyer ?',
    answer:
      'En cas de paiement partiel, il est recommandé d\'émettre une quittance qui mentionne clairement le montant effectivement perçu et la période concernée. Vous pouvez également indiquer le solde restant dû. Il est important de documenter chaque paiement partiel pour maintenir une traçabilité complète. Avec ImmoTopia, vous pouvez enregistrer des paiements partiels et générer des quittances correspondantes, tout en suivant le solde restant dû.',
  },
  {
    question: 'Comment ImmoTopia automatise-t-il la génération des quittances ?',
    answer:
      'ImmoTopia génère automatiquement des quittances conformes dès qu\'un paiement de loyer est enregistré. Que le paiement soit effectué via Mobile Money (Orange Money, MTN Money, Wave), virement bancaire ou autre moyen, la quittance est créée instantanément avec toutes les informations nécessaires. Elle peut être envoyée automatiquement par email au locataire, téléchargée au format PDF, ou archivée dans le dossier du locataire. Cette automatisation élimine les erreurs manuelles et garantit une traçabilité complète.',
  },
];

export default function QuittanceLoyerCoteIvoirePage() {
  const faqSchema = generateFAQSchema({
    questions: faqItems.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Modèle de quittance de loyer en Côte d'Ivoire (gratuit)
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Modèle prêt à copier-coller + conseils pratiques pour bien remplir votre quittance de loyer
              </p>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
                Téléchargez un modèle générique de quittance de loyer adapté au contexte ivoirien. Découvrez également comment automatiser la génération de quittances avec l'ERP immobilier ImmoTopia.
              </p>

              {/* CTAs Hero */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CopyToClipboard
                  text={modeleQuittance}
                  label="Copier le modèle"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 bg-white text-blue-600 transition-all hover:scale-105 hover:bg-blue-50"
                >
                  <Link href="/contact?demo=true" className="flex items-center font-semibold">
                    Automatiser mes quittances (démo)
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: C'est quoi une quittance de loyer ? */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              C'est quoi une quittance de loyer ?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Une quittance de loyer est un document qui atteste du paiement d'un loyer par un locataire à son bailleur pour une période déterminée. C'est une preuve de paiement essentielle qui protège à la fois le locataire (qui peut justifier ses paiements) et le bailleur (qui maintient une traçabilité de ses encaissements).
              </p>

              <div className="mb-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Différence entre quittance, reçu et facture
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Quittance de loyer :</strong> Document qui atteste du paiement d'un loyer pour une période spécifique (généralement un mois). Elle mentionne la période concernée, le montant perçu et le mode de paiement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Reçu de loyer :</strong> Terme souvent utilisé de manière interchangeable avec "quittance". Il s'agit également d'un document qui prouve le paiement d'un loyer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Facture :</strong> Document qui demande un paiement (émission d'une créance). La quittance, au contraire, atteste qu'un paiement a déjà été effectué.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Pourquoi la quittance est utile
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Preuve de paiement :</strong> Le locataire peut justifier qu'il a bien payé son loyer en cas de litige ou de contrôle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Transparence :</strong> La quittance détaille clairement le montant perçu, la période concernée et le mode de paiement, évitant toute confusion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Suivi et traçabilité :</strong> Pour le bailleur, les quittances permettent de maintenir un historique complet des encaissements, facilitant la comptabilité et le suivi des loyers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Quand émettre une quittance ? */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Quand émettre une quittance de loyer ?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Une quittance de loyer doit être émise après le paiement du loyer par le locataire. Elle peut être délivrée immédiatement après le paiement ou dans les jours qui suivent, selon les pratiques de chaque bailleur.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <Card className="border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Période concernée
                    </h3>
                    <p className="text-gray-700">
                      La quittance doit mentionner clairement la période concernée (généralement un mois). Par exemple : "Janvier 2024" ou "Période du 1er janvier 2024 au 31 janvier 2024".
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Qui signe / émet
                    </h3>
                    <p className="text-gray-700">
                      La quittance est émise et signée par le bailleur (propriétaire) ou son représentant légal (gestionnaire locatif, agence immobilière). Le cachet de l'entreprise peut également être apposé si applicable.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                  Paiement partiel
                </h3>
                <p className="text-gray-700">
                  En cas de paiement partiel (selon accord entre les parties), une quittance peut être émise pour le montant effectivement perçu. Il est recommandé de documenter clairement le solde restant dû pour maintenir une traçabilité complète.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Informations à inclure (Checklist) */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Informations à inclure dans une quittance (Checklist)
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Pour qu'une quittance de loyer soit complète et valide, elle doit contenir les informations suivantes :
              </p>

              <div className="mb-8 grid gap-4">
                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Bailleur (nom, adresse, contact)</h3>
                    <p className="text-sm text-gray-600">Identité complète du propriétaire ou du gestionnaire</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Locataire</h3>
                    <p className="text-sm text-gray-600">Nom et prénom du locataire</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Bien loué (adresse)</h3>
                    <p className="text-sm text-gray-600">Adresse complète du bien immobilier concerné</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Période / mois</h3>
                    <p className="text-sm text-gray-600">Mois et année concernés par le paiement</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Montant loyer + charges (si applicable)</h3>
                    <p className="text-sm text-gray-600">Détail du loyer et des charges récupérables</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Date paiement + mode paiement</h3>
                    <p className="text-sm text-gray-600">Date exacte du paiement et moyen utilisé (espèces, virement, Mobile Money, etc.)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Numéro quittance</h3>
                    <p className="text-sm text-gray-600">Numéro unique pour faciliter le suivi et l'archivage</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Signature / cachet</h3>
                    <p className="text-sm text-gray-600">Signature du bailleur et éventuellement cachet de l'entreprise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Modèle de quittance (à copier-coller) */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              ✅ Modèle de quittance de loyer (à copier-coller)
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Voici un modèle générique de quittance de loyer que vous pouvez adapter à votre situation. Il s'agit d'un modèle type, non officiel, que vous pouvez personnaliser selon vos besoins.
              </p>

              {/* Modèle simple */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Modèle de quittance (sans charges)
                    </h3>
                    <CopyToClipboard text={modeleQuittance} label="Copier" />
                  </div>
                  <pre className="whitespace-pre-wrap rounded-lg bg-gray-50 p-4 text-sm text-gray-800 font-mono">
                    {modeleQuittance}
                  </pre>
                </CardContent>
              </Card>

              {/* Modèle avec charges */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Modèle de quittance (avec charges)
                    </h3>
                    <CopyToClipboard text={modeleQuittanceAvecCharges} label="Copier" />
                  </div>
                  <pre className="whitespace-pre-wrap rounded-lg bg-gray-50 p-4 text-sm text-gray-800 font-mono">
                    {modeleQuittanceAvecCharges}
                  </pre>
                </CardContent>
              </Card>

              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Comment utiliser ce modèle ?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>Copiez le modèle qui correspond à votre situation (avec ou sans charges)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>Remplacez les informations entre crochets [ ] par vos données réelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>Vérifiez que toutes les informations sont correctes avant d'envoyer la quittance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>Signez et apposez votre cachet si vous en avez un</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Exemple rempli */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Exemple de quittance remplie
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Voici un exemple de quittance remplie avec des données fictives pour vous aider à mieux comprendre comment remplir le modèle :
              </p>

              <Card className="mb-8 border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                      <span className="text-sm font-semibold text-amber-700">Exemple fictif</span>
                    </div>
                    <CopyToClipboard text={exempleQuittance} label="Copier l'exemple" />
                  </div>
                  <pre className="whitespace-pre-wrap rounded-lg bg-gray-50 p-4 text-sm text-gray-800 font-mono">
                    {exempleQuittance}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 6: Erreurs fréquentes à éviter */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Erreurs fréquentes à éviter
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Pour éviter les problèmes et maintenir une traçabilité claire, voici les erreurs les plus courantes à éviter lors de l'émission d'une quittance de loyer :
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                      Période manquante ou imprécise
                    </h3>
                    <p className="text-gray-700">
                      Oublier de mentionner la période concernée ou utiliser une formulation vague ("mois en cours") peut créer de la confusion. Toujours indiquer clairement le mois et l'année (ex: "Janvier 2024").
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                      Montants incohérents
                    </h3>
                    <p className="text-gray-700">
                      Vérifier que le total correspond bien à la somme du loyer et des charges. Une erreur de calcul peut créer des litiges et nuire à la confiance entre les parties.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                      Absence de numéro de quittance
                    </h3>
                    <p className="text-gray-700">
                      Ne pas numéroter les quittances rend le suivi et l'archivage difficiles. Un système de numérotation cohérent facilite la gestion et la recherche de documents.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                      Absence de signature
                    </h3>
                    <p className="text-gray-700">
                      Une quittance non signée peut être contestée. Toujours signer la quittance et, si applicable, apposer le cachet de l'entreprise pour renforcer sa validité.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Comment automatiser les quittances (ImmoTopia) */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Comment automatiser les quittances avec ImmoTopia
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                La génération manuelle de quittances peut être chronophage et source d'erreurs. Avec l'ERP immobilier ImmoTopia, vous pouvez automatiser complètement ce processus, gagnant du temps et garantissant une traçabilité parfaite.
              </p>

              <div className="mb-8 space-y-6">
                <Card className="border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <FileText className="h-6 w-6 text-blue-600" />
                      Génération automatique liée aux paiements
                    </h3>
                    <p className="text-gray-700">
                      Dès qu'un paiement de loyer est enregistré dans ImmoTopia (que ce soit via Mobile Money, virement bancaire ou autre moyen), une quittance est générée automatiquement avec toutes les informations nécessaires : identités, période, montants, mode de paiement, numéro unique.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      Archivage automatique
                    </h3>
                    <p className="text-gray-700">
                      Chaque quittance générée est automatiquement archivée dans le dossier du locataire (CRM) et du bien (gestion des biens), créant un historique complet et traçable. Plus besoin de chercher dans des dossiers papier ou des fichiers Excel dispersés.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <FileText className="h-6 w-6 text-purple-600" />
                      Génération d'état de compte
                    </h3>
                    <p className="text-gray-700">
                      ImmoTopia peut générer automatiquement des états de compte consolidés pour chaque locataire, regroupant toutes les quittances et transactions. Ces documents sont utiles pour les comptes rendus aux propriétaires ou pour les déclarations fiscales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-orange-500">
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <CheckCircle2 className="h-6 w-6 text-orange-600" />
                      Mobile Money : rattachement automatique
                    </h3>
                    <p className="text-gray-700">
                      Avec l'intégration native du Mobile Money (Orange Money, MTN Money, Wave), chaque paiement reçu est automatiquement rattaché au contrat de location correspondant. La quittance est générée instantanément, et vous êtes notifié en temps réel. Plus besoin de rapprochement manuel entre les relevés Mobile Money et vos contrats.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  💡 Intégration avec le module de gestion locative
                </h3>
                <p className="mb-4 text-gray-700">
                  La génération automatique de quittances est une fonctionnalité du module de gestion locative d'ImmoTopia. Ce module s'intègre avec le CRM (suivi des locataires), la gestion des biens (historique complet), la comptabilité (enregistrement automatique des recettes) et le reporting (indicateurs de performance).
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/gestion-locative-cote-divoire"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                  >
                    Découvrir le module gestion locative
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/paiement-loyer-charges-mobile-money-cote-divoire"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                  >
                    Paiements Mobile Money
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes sur les quittances de loyer
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-blue-500 transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-start gap-2 text-xl font-semibold text-gray-900">
                      <HelpCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-blue-600 font-bold">Q{index + 1}.</span>
                      {item.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Automatisez vos quittances avec ImmoTopia
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Découvrez comment l'ERP immobilier ImmoTopia génère automatiquement vos quittances de loyer, élimine les erreurs manuelles et garantit une traçabilité complète.
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
                <Link href="/gestion-locative-cote-divoire" className="font-semibold">
                  Voir le module gestion locative
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
        <section className="bg-white py-12">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              Ressources complémentaires
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/gestion-locative-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Gestion locative en Côte d&apos;Ivoire
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Module complet de gestion locative avec quittances automatiques
                </p>
              </Link>
              <Link
                href="/pour-qui/proprietaires-bailleurs"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Propriétaires-bailleurs
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Solution pour propriétaires bailleurs
                </p>
              </Link>
              <Link
                href="/modeles/releve-loyers-etat-de-compte-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Relevé de loyers
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Modèle complémentaire pour le suivi des loyers
                </p>
              </Link>

              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Paiement loyer Mobile Money
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Intégration Orange Money, MTN Money, Wave
                </p>
              </Link>

              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  ERP immobilier ImmoTopia
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Découvrez tous les modules de l'ERP complet
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
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

