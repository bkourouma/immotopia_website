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
  Download,
  Shield,
  Users,
  Home,
  Building2,
  Link2,
  ClipboardCheck
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';
import CopyToClipboardButton from '@/components/ui/CopyToClipboardButton';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Modèle de contrat de bail habitation en Côte d'Ivoire (gratuit) | ImmoTopia",
    description:
      "Téléchargez un modèle de contrat de bail habitation (CI) et découvrez comment centraliser contrats, loyers, quittances et paiements avec l'ERP immobilier ImmoTopia.",
    canonicalUrl: '/modeles/contrat-bail-habitation-cote-divoire',
    keywords: [
      'modèle contrat de bail habitation Côte d\'Ivoire',
      'contrat de bail Côte d\'Ivoire',
      'modèle bail location Côte d\'Ivoire',
      'contrat bail Abidjan',
      'bail location logement',
      'contrat location habitation',
      'modèle bail gratuit Côte d\'Ivoire',
      'contrat locatif Côte d\'Ivoire',
      'bail habitation Abidjan',
      'modèle contrat location',
    ],
  },
  '/modeles/contrat-bail-habitation-cote-divoire'
);

const faqItems = [
  {
    question: "Quelle est la différence entre un bail d'habitation et un bail commercial ?",
    answer:
      "Un bail d'habitation concerne la location d'un logement destiné à servir de résidence principale ou secondaire au locataire. Un bail commercial, quant à lui, concerne la location d'un local destiné à l'exercice d'une activité commerciale, artisanale ou professionnelle. Les règles juridiques, la durée minimale et les modalités de résiliation diffèrent entre ces deux types de baux. Ce modèle est spécifiquement conçu pour un bail d'habitation.",
  },
  {
    question: "Est-il obligatoire de faire un état des lieux ?",
    answer:
      "Bien que la réglementation puisse varier, il est fortement recommandé de réaliser un état des lieux d'entrée et de sortie. L'état des lieux protège à la fois le bailleur et le locataire en documentant l'état du logement au début et à la fin de la location. Il permet d'éviter les litiges concernant les dégradations et facilite la restitution du dépôt de garantie. L'état des lieux doit être annexé au contrat de bail.",
  },
  {
    question: "Quel montant fixer pour le dépôt de garantie ?",
    answer:
      "Le montant du dépôt de garantie est généralement négocié entre le bailleur et le locataire. En pratique, il correspond souvent à 1 ou 2 mois de loyer hors charges. Le dépôt de garantie sert à couvrir d'éventuelles dégradations ou impayés de loyer. Il doit être restitué au locataire à la fin du bail, déduction faite des sommes éventuellement dues. Nous recommandons de préciser clairement le montant et les conditions de restitution dans le contrat.",
  },
  {
    question: "Comment définir les modalités de paiement du loyer ?",
    answer:
      "Les modalités de paiement doivent être clairement définies dans le contrat : montant du loyer, périodicité (mensuel, trimestriel), date d'échéance, et moyens de paiement acceptés (espèces, virement bancaire, Mobile Money). En Côte d'Ivoire, le Mobile Money (Orange Money, MTN Money, Wave) est largement utilisé. Il est recommandé de préciser les coordonnées de paiement (numéro Mobile Money, RIB bancaire) et d'indiquer si des pénalités de retard s'appliquent.",
  },
  {
    question: "Peut-on signer un contrat de bail électroniquement ?",
    answer:
      "La signature électronique de contrats se développe progressivement. Toutefois, pour garantir la validité juridique du bail, il est recommandé de consulter un professionnel du droit pour s'assurer que la signature électronique est reconnue et conforme aux exigences légales en vigueur en Côte d'Ivoire. Dans le doute, privilégiez une signature manuscrite en présence des deux parties.",
  },
  {
    question: "Comment archiver et retrouver facilement mes contrats de bail ?",
    answer:
      "L'archivage manuel (papier ou fichiers dispersés) rend difficile la recherche et le suivi des contrats. Un logiciel de gestion immobilière comme ImmoTopia permet de centraliser tous vos contrats de bail, de les rattacher aux biens et locataires concernés, et de les retrouver instantanément. Vous pouvez également associer les échéances de loyer, les paiements et les quittances à chaque contrat, créant ainsi un dossier complet et traçable.",
  },
  {
    question: "Comment ImmoTopia simplifie-t-il la gestion des contrats de bail ?",
    answer:
      "ImmoTopia centralise tous vos contrats de bail dans un ERP immobilier complet. Chaque contrat est rattaché à un bien et à un locataire, avec un suivi automatique des échéances de loyer, la génération automatique de quittances, et l'intégration des paiements Mobile Money. Vous disposez d'un historique complet (paiements, relances, communications) et pouvez générer des rapports pour vos propriétaires. Cette centralisation élimine les oublis et les erreurs, tout en vous faisant gagner un temps précieux.",
  },
  {
    question: "Ce modèle de contrat est-il conforme à la législation ivoirienne ?",
    answer:
      "Ce modèle est fourni à titre indicatif et doit être adapté à votre situation spécifique. Nous ne fournissons pas de conseil juridique. Pour garantir la conformité de votre contrat avec la législation en vigueur en Côte d'Ivoire, nous vous recommandons de le faire valider par un professionnel du droit (avocat, notaire) avant signature. Les lois et réglementations peuvent évoluer, et certaines clauses peuvent nécessiter des ajustements selon votre contexte.",
  },
];

export default function ContratBailHabitationPage() {
  const faqSchema = generateFAQSchema({ 
    questions: faqItems.map(item => ({
      question: item.question,
      answer: item.answer,
    }))
  });

  // Modèle de contrat complet
  const contratModele = `CONTRAT DE BAIL D'HABITATION

Entre les soussignés :

1. LE BAILLEUR

Nom et Prénom(s) : [NOM ET PRÉNOM DU BAILLEUR]
Date et lieu de naissance : [DATE ET LIEU DE NAISSANCE]
Profession : [PROFESSION]
Domicilié(e) à : [ADRESSE COMPLÈTE DU BAILLEUR]
Numéro de téléphone : [TÉLÉPHONE]
Email : [EMAIL]
Pièce d'identité : [TYPE ET NUMÉRO]

Ci-après dénommé « le Bailleur »

D'une part,

ET

2. LE LOCATAIRE

Nom et Prénom(s) : [NOM ET PRÉNOM DU LOCATAIRE]
Date et lieu de naissance : [DATE ET LIEU DE NAISSANCE]
Profession : [PROFESSION]
Domicilié(e) à : [ADRESSE COMPLÈTE DU LOCATAIRE]
Numéro de téléphone : [TÉLÉPHONE]
Email : [EMAIL]
Pièce d'identité : [TYPE ET NUMÉRO]

Ci-après dénommé « le Locataire »

D'autre part,

IL A ÉTÉ CONVENU ET ARRÊTÉ CE QUI SUIT :

ARTICLE 1 : OBJET DU CONTRAT

Le Bailleur donne en location au Locataire, qui accepte, un logement à usage d'habitation situé à :

Adresse complète : [ADRESSE DU BIEN]
Commune : [COMMUNE]
Ville : [VILLE]
Type de logement : [APPARTEMENT / VILLA / STUDIO / AUTRE]
Nombre de pièces : [NOMBRE DE PIÈCES]
Surface habitable : [SURFACE EN M²] (si connue)

ARTICLE 2 : DESTINATION DU BIEN

Le bien loué est destiné exclusivement à l'habitation du Locataire et de sa famille. Toute autre utilisation, notamment commerciale ou professionnelle, est strictement interdite sans l'accord écrit préalable du Bailleur.

ARTICLE 3 : DURÉE DU BAIL

Le présent bail est conclu pour une durée de [DURÉE : 1 AN / 2 ANS / AUTRE], à compter du [DATE DE DÉBUT].

Le bail prendra fin le [DATE DE FIN], sauf renouvellement ou résiliation anticipée dans les conditions prévues au présent contrat.

À l'échéance, le bail pourra être renouvelé par accord mutuel des parties, selon les modalités à convenir.

ARTICLE 4 : LOYER

Le loyer mensuel est fixé à la somme de [MONTANT EN CHIFFRES] FCFA ([MONTANT EN LETTRES] francs CFA), payable [MENSUELLEMENT / TRIMESTRIELLEMENT / AUTRE].

Le loyer est payable d'avance, au plus tard le [JOUR DU MOIS] de chaque mois / trimestre.

ARTICLE 5 : CHARGES

Les charges locatives (eau, électricité, ordures ménagères, entretien des parties communes, etc.) sont à la charge du Locataire et s'élèvent à [MONTANT] FCFA par mois, ou seront facturées selon la consommation réelle.

[OU : Les charges sont incluses dans le loyer.]

ARTICLE 6 : RÉVISION DU LOYER

Le loyer pourra être révisé [ANNUELLEMENT / TOUS LES 2 ANS / AUTRE] selon les modalités suivantes : [PRÉCISER LES CONDITIONS DE RÉVISION, OU INDIQUER "Selon accord entre les parties"].

ARTICLE 7 : DÉPÔT DE GARANTIE

Le Locataire verse au Bailleur, à la signature du présent contrat, un dépôt de garantie d'un montant de [MONTANT EN CHIFFRES] FCFA ([MONTANT EN LETTRES] francs CFA), correspondant à [NOMBRE] mois de loyer hors charges.

Ce dépôt sera restitué au Locataire dans un délai de [DÉLAI : 30 JOURS / 2 MOIS / AUTRE] suivant la remise des clés et l'état des lieux de sortie, déduction faite des sommes éventuellement dues (loyers impayés, réparations locatives, dégradations).

ARTICLE 8 : MODALITÉS DE PAIEMENT

Le loyer et les charges seront payés par [ESPÈCES / VIREMENT BANCAIRE / MOBILE MONEY / CHÈQUE].

Coordonnées de paiement du Bailleur :
- Numéro Mobile Money (Orange Money / MTN Money / Wave) : [NUMÉRO]
- RIB bancaire : [RIB] (si applicable)
- Autre : [PRÉCISER]

Une quittance de loyer sera remise au Locataire pour chaque paiement effectué.

ARTICLE 9 : OBLIGATIONS DU LOCATAIRE

Le Locataire s'engage à :
- Payer le loyer et les charges aux échéances convenues
- User paisiblement du logement et en prendre soin en bon père de famille
- Effectuer les réparations locatives et l'entretien courant (petites réparations, remplacement d'ampoules, entretien de la robinetterie, etc.)
- Ne pas transformer ou modifier le logement sans l'accord écrit du Bailleur
- Souscrire une assurance habitation (si souhaitée par le Bailleur)
- Respecter le règlement de copropriété ou d'immeuble (le cas échéant)
- Ne pas sous-louer le bien sans l'autorisation écrite du Bailleur
- Laisser le Bailleur effectuer les visites nécessaires pour l'entretien ou la vente du bien, moyennant un préavis raisonnable

ARTICLE 10 : OBLIGATIONS DU BAILLEUR

Le Bailleur s'engage à :
- Délivrer au Locataire un logement décent, en bon état d'usage et de réparation
- Assurer la jouissance paisible du logement
- Effectuer les grosses réparations et les travaux nécessaires au maintien en état du logement (toiture, murs, installations électriques et sanitaires principales, etc.)
- Ne pas s'opposer aux aménagements réalisés par le Locataire, sauf s'ils modifient la structure du bien

ARTICLE 11 : TRAVAUX ET RÉPARATIONS

Les grosses réparations (toiture, murs porteurs, installations principales) sont à la charge du Bailleur.

Les réparations locatives et l'entretien courant (peinture, petites réparations, remplacement de joints, etc.) sont à la charge du Locataire.

En cas de travaux urgents nécessaires, le Locataire doit en informer immédiatement le Bailleur.

ARTICLE 12 : ASSURANCE

[OPTION 1 : Le Locataire s'engage à souscrire une assurance habitation couvrant les risques locatifs (incendie, dégâts des eaux, responsabilité civile) et à en fournir une attestation au Bailleur chaque année.]

[OPTION 2 : L'assurance habitation est facultative mais recommandée.]

ARTICLE 13 : ÉTAT DES LIEUX

Un état des lieux contradictoire sera établi lors de la remise des clés (état des lieux d'entrée) et lors de la restitution du logement (état des lieux de sortie).

L'état des lieux d'entrée est annexé au présent contrat.

ARTICLE 14 : RÉSILIATION ET PRÉAVIS

Le Locataire peut résilier le bail à tout moment, sous réserve de respecter un préavis de [DURÉE DU PRÉAVIS : 1 MOIS / 2 MOIS / 3 MOIS], notifié par lettre recommandée ou remise en main propre contre décharge.

Le Bailleur peut résilier le bail à l'échéance du contrat, sous réserve de respecter un préavis de [DURÉE DU PRÉAVIS : 3 MOIS / 6 MOIS / AUTRE], pour motif légitime et sérieux (reprise pour habitation personnelle, vente du bien, etc.), selon la réglementation applicable.

En cas de manquement grave du Locataire à ses obligations (non-paiement du loyer, dégradations, troubles de voisinage), le Bailleur pourra résilier le bail selon les modalités prévues par la réglementation en vigueur.

ARTICLE 15 : LITIGES

En cas de litige relatif à l'interprétation ou à l'exécution du présent contrat, les parties s'engagent à rechercher une solution amiable.

À défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de [VILLE / JURIDICTION COMPÉTENTE], conformément à la législation en vigueur en Côte d'Ivoire.

ARTICLE 16 : ANNEXES

Sont annexés au présent contrat :
- État des lieux d'entrée
- Inventaire du mobilier (si logement meublé)
- Règlement de copropriété ou d'immeuble (le cas échéant)
- Copie des pièces d'identité des parties (facultatif)

ARTICLE 17 : SIGNATURES

Fait à [VILLE], le [DATE]

En deux exemplaires originaux, dont un pour chaque partie.

Le Bailleur                                    Le Locataire
(Signature et mention "Lu et approuvé")        (Signature et mention "Lu et approuvé")


[NOM DU BAILLEUR]                              [NOM DU LOCATAIRE]`;

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <FileText className="h-4 w-4" />
                Modèle gratuit à copier
              </div>

              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Modèle de contrat de bail habitation en Côte d'Ivoire
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Modèle complet et gratuit de contrat de bail d'habitation, avec checklist pour éviter les oublis
              </p>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
                Téléchargez et personnalisez ce modèle de contrat de bail pour sécuriser vos locations. Découvrez également comment ImmoTopia centralise vos contrats, loyers, quittances et paiements Mobile Money.
              </p>

              {/* CTAs Hero */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                >
                  <a href="#modele-contrat" className="flex items-center font-bold">
                    Copier le modèle
                    <Copy className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 bg-white text-blue-600 transition-all hover:scale-105 hover:bg-blue-50"
                >
                  <Link href="/contact?demo=true" className="flex items-center font-semibold">
                    Automatiser ma gestion locative
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Avertissement Important */}
        <section className="border-b-4 border-amber-400 bg-amber-50 py-8">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 flex-shrink-0 text-amber-600" />
              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  ⚠️ Avertissement important
                </h2>
                <p className="mb-3 text-gray-800 leading-relaxed">
                  Ce modèle de contrat de bail est fourni <strong>à titre indicatif</strong> et doit être adapté à votre situation spécifique. Nous ne fournissons pas de conseil juridique.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Pour garantir la conformité de votre contrat avec la législation en vigueur en Côte d'Ivoire et protéger vos intérêts, nous vous recommandons de <strong>faire valider ce modèle par un professionnel du droit</strong> (avocat, notaire) avant signature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Qu'est-ce qu'un contrat de bail */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Qu'est-ce qu'un contrat de bail d'habitation ?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Un contrat de bail d'habitation est un accord juridique entre un propriétaire (bailleur) et un locataire, par lequel le bailleur met à disposition un logement en échange du paiement d'un loyer. Ce contrat définit les droits et obligations de chaque partie et protège les intérêts du bailleur comme du locataire.
              </p>

              <div className="mb-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Rôle du contrat de bail
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Protéger le bailleur :</strong> garantir le paiement du loyer, définir les responsabilités du locataire, encadrer l'usage du bien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Protéger le locataire :</strong> sécuriser la jouissance paisible du logement, définir les obligations du bailleur, encadrer les conditions de résiliation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span><strong>Éviter les litiges :</strong> clarifier les modalités de paiement, les responsabilités en matière de réparations, les conditions de restitution du dépôt de garantie</span>
                  </li>
                </ul>
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Clauses essentielles d'un contrat de bail
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Identification des parties</h4>
                  <p className="text-sm text-gray-700">Nom, prénom, adresse, pièce d'identité du bailleur et du locataire</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Désignation du bien</h4>
                  <p className="text-sm text-gray-700">Adresse complète, type de logement, nombre de pièces, surface</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Destination du bien</h4>
                  <p className="text-sm text-gray-700">Usage exclusif à l'habitation (sauf accord contraire)</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Durée du bail</h4>
                  <p className="text-sm text-gray-700">Date de début, durée (1 an, 2 ans, etc.), conditions de renouvellement</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Loyer et charges</h4>
                  <p className="text-sm text-gray-700">Montant, périodicité, date d'échéance, modalités de révision</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Dépôt de garantie</h4>
                  <p className="text-sm text-gray-700">Montant, conditions de restitution</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Modalités de paiement</h4>
                  <p className="text-sm text-gray-700">Moyens acceptés (espèces, virement, Mobile Money), coordonnées</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">État des lieux</h4>
                  <p className="text-sm text-gray-700">Obligatoire à l'entrée et à la sortie, annexé au contrat</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Checklist des informations à préparer */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Checklist : informations à préparer avant de rédiger le contrat
            </h2>

            <p className="mb-8 text-lg text-gray-700">
              Avant de remplir le modèle de contrat, assurez-vous de rassembler toutes les informations nécessaires. Cette checklist vous aidera à ne rien oublier.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Identité des parties</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Nom, prénom(s), date et lieu de naissance du bailleur et du locataire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Adresse complète, téléphone, email de chaque partie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Type et numéro de pièce d'identité (CNI, passeport, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Profession de chaque partie</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <Home className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Désignation du bien</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Adresse complète du logement (rue, quartier, commune, ville)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Type de logement (appartement, villa, studio, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Nombre de pièces et surface habitable (si connue)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Équipements inclus (meublé ou non, équipements spécifiques)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Conditions financières</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Montant du loyer mensuel (en FCFA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Montant des charges (eau, électricité, ordures, etc.) ou si incluses dans le loyer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Périodicité de paiement (mensuel, trimestriel, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Date d'échéance du loyer (ex: le 5 de chaque mois)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Montant du dépôt de garantie (généralement 1 à 2 mois de loyer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Modalités de révision du loyer (si applicable)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                    <Building2 className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Modalités pratiques</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>Durée du bail (1 an, 2 ans, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>Date de début et de fin du bail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>Moyens de paiement acceptés (espèces, virement, Mobile Money)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>Coordonnées de paiement (numéro Mobile Money, RIB bancaire)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>Durée du préavis pour résiliation (locataire et bailleur)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>Règles spécifiques (travaux, sous-location, animaux, etc.)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Modèle de contrat complet */}
        <section id="modele-contrat" className="scroll-mt-20 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              ✅ Modèle complet de contrat de bail d'habitation
            </h2>

            <p className="mb-6 text-lg text-gray-700">
              Voici un modèle complet de contrat de bail d'habitation que vous pouvez copier et personnaliser. Remplacez tous les champs entre crochets [À RENSEIGNER] par vos informations.
            </p>

            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <CopyToClipboardButton text={contratModele} />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 transition-all hover:bg-blue-50"
              >
                <Link href="/contact?demo=true" className="flex items-center">
                  Centraliser mes contrats avec ImmoTopia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Modèle de contrat dans un bloc scrollable */}
            <div className="rounded-lg border-2 border-gray-300 bg-gray-50 p-6 shadow-lg">
              <div className="max-h-[600px] overflow-y-auto rounded bg-white p-6 font-mono text-sm leading-relaxed text-gray-800">
                <pre className="whitespace-pre-wrap">{contratModele}</pre>
              </div>
            </div>

            <div className="mt-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
              <p className="text-gray-800">
                <strong>💡 Conseil :</strong> Après avoir copié ce modèle, collez-le dans un traitement de texte (Word, Google Docs) pour le personnaliser facilement. N'oubliez pas de remplacer tous les champs entre crochets [À RENSEIGNER] par vos informations réelles.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Annexes recommandées */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Annexes recommandées au contrat de bail
            </h2>

            <p className="mb-8 text-lg text-gray-700">
              Pour compléter votre contrat de bail et sécuriser la location, il est recommandé d'annexer les documents suivants :
            </p>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <FileText className="h-6 w-6 text-blue-600" />
                  État des lieux d'entrée
                </h3>
                <p className="text-gray-700">
                  Document détaillé décrivant l'état du logement pièce par pièce au moment de la remise des clés. Il doit être signé par les deux parties et servira de référence pour l'état des lieux de sortie. Mentionnez l'état des murs, sols, plafonds, équipements, installations électriques et sanitaires.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <ClipboardCheck className="h-6 w-6 text-green-600" />
                  Inventaire du mobilier (si meublé)
                </h3>
                <p className="text-gray-700">
                  Si le logement est loué meublé, établissez un inventaire précis de tous les meubles et équipements fournis (lit, table, chaises, électroménager, vaisselle, etc.). Indiquez l'état de chaque élément. Cet inventaire facilitera la restitution en fin de bail.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Shield className="h-6 w-6 text-purple-600" />
                  Copies des pièces d'identité
                </h3>
                <p className="text-gray-700">
                  Il est courant d'annexer une copie de la pièce d'identité du bailleur et du locataire pour faciliter l'identification des parties. Assurez-vous que les copies sont lisibles et à jour.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Building2 className="h-6 w-6 text-amber-600" />
                  Règlement de copropriété ou d'immeuble
                </h3>
                <p className="text-gray-700">
                  Si le logement fait partie d'une copropriété ou d'un immeuble avec règlement intérieur, annexez une copie de ce règlement. Le locataire doit en prendre connaissance et s'engager à le respecter (horaires de tranquillité, usage des parties communes, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Exemple rempli (fictif) */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Exemple de contrat rempli (fictif)
            </h2>

            <p className="mb-6 text-lg text-gray-700">
              Voici un exemple fictif pour vous aider à visualiser comment remplir le modèle. <strong>Attention :</strong> cet exemple est purement illustratif et ne doit pas être utilisé tel quel.
            </p>

            <div className="rounded-lg border-2 border-amber-300 bg-amber-50 p-6">
              <div className="mb-4 flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                <p className="text-sm text-gray-800">
                  <strong>Exemple fictif uniquement.</strong> Les noms, adresses et informations sont inventés à des fins de démonstration.
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-800">
                <p><strong>Bailleur :</strong> KOUASSI Jean-Baptiste, né le 15/03/1975 à Abidjan, domicilié à Cocody Riviera Palmeraie, Abidjan</p>
                <p><strong>Locataire :</strong> DIALLO Aminata, née le 22/08/1988 à Bouaké, domiciliée à Yopougon Niangon, Abidjan</p>
                <p><strong>Bien loué :</strong> Appartement 3 pièces, situé à Cocody Angré 8ème Tranche, Abidjan</p>
                <p><strong>Durée :</strong> 1 an, du 01/02/2025 au 31/01/2026</p>
                <p><strong>Loyer :</strong> 150 000 FCFA par mois, payable le 5 de chaque mois</p>
                <p><strong>Charges :</strong> 20 000 FCFA par mois (eau, électricité, ordures)</p>
                <p><strong>Dépôt de garantie :</strong> 300 000 FCFA (2 mois de loyer)</p>
                <p><strong>Paiement :</strong> Mobile Money (Orange Money : 07 XX XX XX XX) ou virement bancaire</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Erreurs fréquentes à éviter */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Erreurs fréquentes à éviter lors de la rédaction du contrat
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Montant du loyer ambigu ou incomplet
                </h3>
                <p className="mb-2 text-gray-700">
                  <strong>Erreur :</strong> Ne pas préciser si les charges sont incluses dans le loyer, ou ne pas détailler le montant des charges.
                </p>
                <p className="text-gray-700">
                  <strong>Solution :</strong> Indiquez clairement le montant du loyer hors charges, puis le montant des charges (ou précisez "charges incluses"). Détaillez ce que couvrent les charges (eau, électricité, ordures, entretien).
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Absence de durée précise
                </h3>
                <p className="mb-2 text-gray-700">
                  <strong>Erreur :</strong> Ne pas indiquer de date de début et de fin, ou rester vague sur la durée du bail.
                </p>
                <p className="text-gray-700">
                  <strong>Solution :</strong> Précisez toujours la date de début (ex: 01/02/2025), la durée (ex: 1 an) et la date de fin (ex: 31/01/2026). Indiquez également les conditions de renouvellement.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Absence d'état des lieux
                </h3>
                <p className="mb-2 text-gray-700">
                  <strong>Erreur :</strong> Ne pas réaliser d'état des lieux d'entrée, ou ne pas l'annexer au contrat.
                </p>
                <p className="text-gray-700">
                  <strong>Solution :</strong> Réalisez systématiquement un état des lieux contradictoire à l'entrée et à la sortie. Annexez l'état des lieux d'entrée au contrat et conservez-en une copie signée par les deux parties.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Modalités de paiement floues
                </h3>
                <p className="mb-2 text-gray-700">
                  <strong>Erreur :</strong> Ne pas préciser les moyens de paiement acceptés, ni les coordonnées de paiement (numéro Mobile Money, RIB).
                </p>
                <p className="text-gray-700">
                  <strong>Solution :</strong> Indiquez clairement les moyens de paiement acceptés (espèces, virement, Mobile Money) et fournissez les coordonnées nécessaires (numéro Mobile Money, RIB bancaire). Précisez également la date d'échéance du loyer.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Clauses de résiliation floues
                </h3>
                <p className="mb-2 text-gray-700">
                  <strong>Erreur :</strong> Ne pas préciser les conditions et délais de préavis pour la résiliation du bail.
                </p>
                <p className="text-gray-700">
                  <strong>Solution :</strong> Indiquez clairement la durée du préavis pour le locataire (ex: 1 mois) et pour le bailleur (ex: 3 mois), ainsi que les modalités de notification (lettre recommandée, remise en main propre).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Comment ImmoTopia aide */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Comment ImmoTopia automatise la gestion de vos contrats de bail
            </h2>

            <p className="mb-8 text-lg text-gray-700">
              Rédiger un contrat de bail est une étape importante, mais ce n'est que le début. La vraie difficulté réside dans le suivi des échéances, des paiements, des quittances et des relances. C'est là qu'ImmoTopia intervient.
            </p>

            <div className="space-y-8">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Centralisation des contrats</h3>
                </div>
                <p className="text-gray-700">
                  Stockez tous vos contrats de bail dans ImmoTopia, rattachés à chaque bien et locataire. Retrouvez instantanément n'importe quel contrat grâce à la recherche avancée. Fini les dossiers papier dispersés ou les fichiers perdus dans des dossiers informatiques.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Suivi automatique des échéances</h3>
                </div>
                <p className="text-gray-700">
                  Dès qu'un contrat est enregistré, ImmoTopia génère automatiquement les échéances de loyer selon la périodicité définie (mensuel, trimestriel). Vous êtes alerté en cas de retard, et les relances peuvent être automatisées. Plus aucun oubli.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Download className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Génération automatique de quittances</h3>
                </div>
                <p className="text-gray-700">
                  Chaque paiement de loyer déclenche la génération automatique d'une quittance conforme. La quittance peut être envoyée automatiquement par email au locataire ou téléchargée en PDF. Vous gagnez un temps précieux et évitez les erreurs de saisie.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                    <Copy className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Intégration des paiements Mobile Money</h3>
                </div>
                <p className="text-gray-700">
                  Les paiements effectués via Orange Money, MTN Money ou Wave sont automatiquement rattachés au contrat de bail correspondant. Le rapprochement bancaire devient instantané, et vous disposez d'un historique complet de tous les paiements.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <Building2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Reporting pour propriétaires</h3>
                </div>
                <p className="text-gray-700">
                  Générez automatiquement des rapports détaillés pour vos propriétaires bailleurs : loyers encaissés, impayés, taux d'occupation, historique des paiements. Ces rapports renforcent la confiance et professionnalisent votre service.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
              <p className="mb-4 text-lg font-semibold text-gray-900">
                💡 ImmoTopia : bien plus qu'un simple stockage de contrats
              </p>
              <p className="mb-4 text-gray-700">
                ImmoTopia est un ERP immobilier complet qui centralise vos contrats, vos biens, vos locataires (CRM), vos paiements, votre comptabilité et votre reporting. Tout est connecté pour vous offrir une vision globale et un gain de temps considérable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/gestion-locative-cote-divoire"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  Module gestion locative
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/paiement-loyer-charges-mobile-money-cote-divoire"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  Paiements Mobile Money
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  ERP ImmoTopia complet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes sur les contrats de bail en Côte d'Ivoire
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
              Prêt à automatiser la gestion de vos contrats de bail ?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Découvrez comment ImmoTopia centralise vos contrats, automatise vos quittances et simplifie le suivi de vos loyers et paiements Mobile Money.
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
                href="/gestion-locative-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Gestion locative en Côte d&apos;Ivoire
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Module complet pour gérer vos loyers, contrats et quittances
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
                  Solution adaptée aux propriétaires bailleurs
                </p>
              </Link>
              <Link
                href="/modeles/etat-des-lieux-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Modèle état des lieux
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Modèle complémentaire pour vos locations
                </p>
              </Link>

              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
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
                href="/logiciel-immobilier-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  ERP immobilier ImmoTopia
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Plateforme complète pour votre activité immobilière
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
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

