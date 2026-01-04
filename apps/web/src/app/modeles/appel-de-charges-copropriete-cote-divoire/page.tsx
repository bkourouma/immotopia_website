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
  Building2,
  Users,
  Calendar,
  DollarSign,
  Shield,
  TrendingUp,
  ClipboardCheck,
  Smartphone,
  BarChart3,
  FileCheck,
  XCircle,
  Lightbulb,
  Zap
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';
import CopyToClipboardButton from '@/components/ui/CopyToClipboardButton';

export const metadata: Metadata = generateSEOMetadata({
  title: "Modèle d'appel de charges de copropriété (gratuit) | Côte d'Ivoire | ImmoTopia",
  description: "Modèle gratuit d'appel de charges de copropriété (appel de fonds) à copier : budget, quote-part, échéance, modalités de paiement. Automatisez avec ImmoTopia (syndic + Mobile Money).",
  canonical: "/modeles/appel-de-charges-copropriete-cote-divoire",
  keywords: [
    "appel de charges copropriété",
    "appel de fonds copropriété",
    "modèle appel de charges",
    "charges copropriété Côte d'Ivoire",
    "syndic copropriété Abidjan",
    "paiement charges Mobile Money",
    "avis d'appel de charges",
    "quote-part copropriété",
    "tantièmes copropriété",
    "gestion syndic Côte d'Ivoire"
  ],
});

const faqItems = [
  {
    question: "Quelle est la différence entre appel de charges et appel de fonds ?",
    answer: "Les termes sont souvent utilisés de manière interchangeable. L'appel de charges désigne généralement la demande de paiement pour les dépenses courantes de fonctionnement (entretien, sécurité, nettoyage), tandis que l'appel de fonds peut aussi inclure des provisions pour travaux exceptionnels. Dans les deux cas, il s'agit d'une demande de paiement adressée aux copropriétaires pour financer les dépenses de la résidence."
  },
  {
    question: "Faut-il émettre les appels de charges mensuellement ou trimestriellement ?",
    answer: "La périodicité dépend du règlement de copropriété et des besoins de trésorerie de la résidence. Les appels mensuels facilitent la gestion de trésorerie pour les copropriétaires et assurent un flux régulier pour le syndic. Les appels trimestriels réduisent les tâches administratives. L'important est d'être régulier et transparent dans la communication."
  },
  {
    question: "Comment calculer la quote-part de chaque copropriétaire ?",
    answer: "La quote-part est généralement calculée selon les tantièmes (millièmes) de copropriété attribués à chaque lot, définis dans le règlement de copropriété. Par exemple, si un lot détient 50 millièmes sur 1000 et que le budget total est de 1 000 000 FCFA, la quote-part sera de 50 000 FCFA. Certaines charges peuvent être réparties différemment selon leur nature (charges générales vs. spécifiques)."
  },
  {
    question: "Que mettre comme référence de paiement dans l'appel de charges ?",
    answer: "La référence doit permettre d'identifier clairement le paiement. Format recommandé : [Numéro de lot]-[Période]. Exemple : 'LOT-A12-T1-2025' pour le lot A12, trimestre 1 de 2025. Cette référence facilite le rapprochement automatique des paiements, surtout avec les paiements Mobile Money."
  },
  {
    question: "Comment suivre les impayés de charges de copropriété ?",
    answer: "Un bon suivi nécessite un tableau de bord avec : liste des appels émis, paiements reçus, soldes par lot, ancienneté des impayés. ImmoTopia automatise ce suivi avec des alertes, des relances programmées et un reporting en temps réel. Le suivi régulier permet d'agir rapidement et de maintenir une bonne trésorerie."
  },
  {
    question: "Les copropriétaires peuvent-ils payer les charges via Mobile Money ?",
    answer: "Oui, c'est fortement recommandé en Côte d'Ivoire. ImmoTopia intègre Orange Money, MTN Mobile Money, Moov Money et Wave pour faciliter les paiements. Les copropriétaires paient directement depuis leur téléphone, le paiement est automatiquement rattaché au lot et à la période, et un reçu est généré instantanément."
  },
  {
    question: "Comment ImmoTopia simplifie-t-il la gestion des appels de charges ?",
    answer: "ImmoTopia automatise tout le processus : configuration des lots et tantièmes, génération automatique des appels (réguliers ou exceptionnels), envoi par email/SMS, paiements Mobile Money avec rapprochement automatique, génération de reçus, suivi des impayés avec relances, états de compte copropriétaires et reporting consolidé. Tout est centralisé dans un seul système."
  },
  {
    question: "Peut-on gérer des appels exceptionnels pour travaux avec ImmoTopia ?",
    answer: "Oui, le module Syndic permet de créer des appels exceptionnels distincts des charges courantes. Vous pouvez définir l'objet des travaux, le montant total, la répartition par lot, l'échéancier de paiement (en une ou plusieurs fois) et suivre les encaissements séparément. Chaque appel exceptionnel est documenté et traçable."
  }
];

export default function AppelDeChargesCoproprietePage() {
  const faqSchema = generateFAQSchema({ 
    questions: faqItems.map(item => ({
      question: item.question,
      answer: item.answer,
    }))
  });

  // Modèle d'appel de charges régulier
  const appelChargesModele = `AVIS D'APPEL DE CHARGES DE COPROPRIÉTÉ

═══════════════════════════════════════════════════════════════

INFORMATIONS RÉSIDENCE
Nom de la résidence : [Nom de la résidence]
Adresse : [Adresse complète]
Syndic : [Nom du syndic ou gestionnaire]
Contact syndic : [Téléphone] | [Email]

PÉRIODE CONCERNÉE
[Mois/Trimestre/Année] - Exemple : Janvier 2025 ou T1 2025

═══════════════════════════════════════════════════════════════

DÉTAIL DES CHARGES

Les charges de copropriété pour cette période couvrent les dépenses suivantes :

• Entretien des parties communes
• Sécurité et gardiennage
• Nettoyage et hygiène
• Électricité des parties communes
• Eau des parties communes
• Maintenance des équipements (ascenseur, portail, etc.)
• Fonds de travaux (si applicable)
• Assurance de l'immeuble
• Gestion et administration

═══════════════════════════════════════════════════════════════

RÉPARTITION PAR LOT

Lot         | Copropriétaire      | Tantièmes | Montant dû  | Échéance
------------|---------------------|-----------|-------------|-------------
[N° lot]    | [Nom]               | [XXX/1000]| [Montant] F | [JJ/MM/AAAA]
[N° lot]    | [Nom]               | [XXX/1000]| [Montant] F | [JJ/MM/AAAA]
[N° lot]    | [Nom]               | [XXX/1000]| [Montant] F | [JJ/MM/AAAA]

═══════════════════════════════════════════════════════════════

MODALITÉS DE PAIEMENT

Date limite de paiement : [JJ/MM/AAAA]

Modes de paiement acceptés :
✓ Mobile Money (Orange Money, MTN, Moov, Wave)
✓ Virement bancaire
✓ Espèces (au bureau du syndic)

IMPORTANT : Merci d'indiquer la référence suivante lors du paiement :
Référence : [N° LOT]-[PÉRIODE]
Exemple : LOT-A12-JAN2025

═══════════════════════════════════════════════════════════════

INFORMATIONS COMPLÉMENTAIRES

• Un reçu de paiement vous sera remis dès réception du règlement
• En cas de difficultés de paiement, merci de contacter le syndic avant l'échéance
• Les impayés pourront faire l'objet de relances et de pénalités selon le règlement de copropriété
• Votre état de compte est disponible sur demande

Pour toute question, contactez le syndic :
[Nom du syndic]
Tél : [Téléphone]
Email : [Email]

═══════════════════════════════════════════════════════════════

Fait à [Ville], le [Date]

Le Syndic
[Signature]`;

  // Modèle d'appel exceptionnel pour travaux
  const appelTravauxModele = `AVIS D'APPEL EXCEPTIONNEL DE FONDS - TRAVAUX

═══════════════════════════════════════════════════════════════

INFORMATIONS RÉSIDENCE
Nom de la résidence : [Nom de la résidence]
Adresse : [Adresse complète]
Syndic : [Nom du syndic]
Contact : [Téléphone] | [Email]

OBJET DE L'APPEL EXCEPTIONNEL
Nature des travaux : [Description détaillée]
Exemple : Réfection de la toiture, Rénovation de la façade, Installation d'un système de sécurité

Montant total des travaux : [Montant] FCFA
Date prévue des travaux : [Date de début] - [Date de fin]

═══════════════════════════════════════════════════════════════

RÉPARTITION PAR LOT

Lot         | Copropriétaire      | Tantièmes | Quote-part  | Échéance
------------|---------------------|-----------|-------------|-------------
[N° lot]    | [Nom]               | [XXX/1000]| [Montant] F | [JJ/MM/AAAA]
[N° lot]    | [Nom]               | [XXX/1000]| [Montant] F | [JJ/MM/AAAA]

ÉCHÉANCIER (si paiement échelonné) :
• 1ère échéance : [Montant] FCFA - Date limite : [JJ/MM/AAAA]
• 2ème échéance : [Montant] FCFA - Date limite : [JJ/MM/AAAA]

═══════════════════════════════════════════════════════════════

MODALITÉS DE PAIEMENT

Modes de paiement acceptés :
✓ Mobile Money (Orange Money, MTN, Moov, Wave)
✓ Virement bancaire
✓ Espèces (au bureau du syndic)

Référence de paiement : [N° LOT]-TRAVAUX-[ANNÉE]

═══════════════════════════════════════════════════════════════

Pour toute question, contactez le syndic :
[Nom] - Tél : [Téléphone] - Email : [Email]

Fait à [Ville], le [Date]
Le Syndic`;

  // Exemple rempli (fictif)
  const exempleFictif = `AVIS D'APPEL DE CHARGES DE COPROPRIÉTÉ

═══════════════════════════════════════════════════════════════

INFORMATIONS RÉSIDENCE
Nom de la résidence : Résidence Les Palmiers
Adresse : Boulevard Latrille, Cocody, Abidjan
Syndic : ImmoGest Côte d'Ivoire
Contact syndic : +225 07 XX XX XX XX | contact@immogest.ci

PÉRIODE CONCERNÉE
Janvier 2025

═══════════════════════════════════════════════════════════════

DÉTAIL DES CHARGES

Les charges de copropriété pour cette période couvrent les dépenses suivantes :

• Entretien des parties communes : 150 000 FCFA
• Sécurité et gardiennage : 300 000 FCFA
• Nettoyage et hygiène : 100 000 FCFA
• Électricité des parties communes : 80 000 FCFA
• Eau des parties communes : 50 000 FCFA
• Maintenance équipements : 70 000 FCFA
• Fonds de travaux : 100 000 FCFA
• Assurance immeuble : 150 000 FCFA

TOTAL BUDGET MENSUEL : 1 000 000 FCFA

═══════════════════════════════════════════════════════════════

RÉPARTITION PAR LOT (EXEMPLE FICTIF)

Lot    | Copropriétaire        | Tantièmes | Montant dû | Échéance
-------|----------------------|-----------|------------|-------------
A-101  | M. Kouassi Jean      | 50/1000   | 50 000 F   | 31/01/2025
B-205  | Mme Diallo Fatou     | 75/1000   | 75 000 F   | 31/01/2025
C-310  | M. N'Guessan Paul    | 100/1000  | 100 000 F  | 31/01/2025

═══════════════════════════════════════════════════════════════

MODALITÉS DE PAIEMENT

Date limite de paiement : 31/01/2025

Modes de paiement acceptés :
✓ Orange Money : 07 XX XX XX XX
✓ MTN Mobile Money : 05 XX XX XX XX
✓ Virement bancaire : SGCI - RIB XXXX XXXX XXXX
✓ Espèces : Bureau syndic (Lun-Ven 9h-17h)

IMPORTANT : Merci d'indiquer la référence suivante lors du paiement :
Référence : [N° LOT]-JAN2025
Exemples : A101-JAN2025, B205-JAN2025, C310-JAN2025

═══════════════════════════════════════════════════════════════

INFORMATIONS COMPLÉMENTAIRES

• Un reçu de paiement vous sera envoyé par email/SMS dès réception
• En cas de difficultés, contactez-nous avant le 25/01/2025
• Votre état de compte est disponible sur votre espace copropriétaire

Contact syndic :
ImmoGest Côte d'Ivoire
Tél : +225 07 XX XX XX XX
Email : contact@immogest.ci

═══════════════════════════════════════════════════════════════

Fait à Abidjan, le 05/01/2025

Le Syndic
[Signature]

NOTE : Cet exemple est purement fictif et fourni à titre indicatif.`;

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
                Modèle d&apos;appel de charges de copropriété en Côte d&apos;Ivoire
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Un modèle clair et complet pour appeler les charges de copropriété, réduire les impayés et assurer la transparence avec vos copropriétaires.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="#modele-copier">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-105 transition-all">
                    <Copy className="mr-2 h-5 w-5" />
                    Copier le modèle
                  </Button>
                </a>
                <Link href="/contact?demo=true">
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                    Demander une démo (module syndic)
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: C'est quoi un appel de charges */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  C&apos;est quoi un appel de charges de copropriété ?
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Un <strong>appel de charges</strong> (ou <strong>appel de fonds</strong>) est une demande de paiement adressée par le syndic aux copropriétaires pour financer les dépenses de fonctionnement et d&apos;entretien de la résidence ou de l&apos;immeuble.
                </p>

                <p>
                  Ces charges couvrent généralement :
                </p>

                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Entretien des parties communes</strong> : nettoyage, jardinage, réparations courantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Sécurité et gardiennage</strong> : salaires des gardiens, système de surveillance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Fluides des parties communes</strong> : électricité, eau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Maintenance des équipements</strong> : ascenseur, portail automatique, piscine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Assurances</strong> : assurance de l&apos;immeuble</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Fonds de travaux</strong> : provisions pour travaux futurs (si applicable)</span>
                  </li>
                </ul>

                <p className="mt-6">
                  La <strong>périodicité</strong> des appels de charges peut être <strong>mensuelle, trimestrielle ou annuelle</strong>, selon ce qui est défini dans le règlement de copropriété et les besoins de trésorerie de la résidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Quand émettre un appel de charges */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <Calendar className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Quand émettre un appel de charges ?
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    Charges régulières (fonctionnement)
                  </h3>
                  <p className="text-gray-700">
                    Les appels de charges réguliers sont émis selon une périodicité fixe (mensuelle, trimestrielle) pour couvrir les dépenses courantes de la résidence. Ils sont basés sur un budget prévisionnel voté en assemblée générale.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Appels exceptionnels (travaux, réparations)
                  </h3>
                  <p className="text-gray-700">
                    Les appels exceptionnels sont émis pour financer des dépenses imprévues ou des travaux votés en AG : réfection de toiture, rénovation de façade, installation d&apos;équipements, réparations urgentes, etc. Ils s&apos;ajoutent aux charges régulières.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Conseil pratique</h4>
                      <p className="text-gray-700">
                        Une <strong>communication claire et régulière</strong> sur les appels de charges améliore significativement le taux de recouvrement. Envoyez les avis avec suffisamment d&apos;avance (au moins 15 jours avant l&apos;échéance) et détaillez la nature des dépenses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Informations à inclure (Checklist) */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <ClipboardCheck className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Informations à inclure dans un appel de charges (checklist transparence)
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Pour assurer la <strong>transparence</strong> et faciliter le paiement, votre appel de charges doit contenir les informations suivantes :
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Identification résidence</h4>
                      <p className="text-sm text-gray-700">Nom, adresse, contact syndic</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Période concernée</h4>
                      <p className="text-sm text-gray-700">Mois, trimestre ou année</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Détail des charges</h4>
                      <p className="text-sm text-gray-700">Nature et montant des dépenses</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quote-part / Tantièmes</h4>
                      <p className="text-sm text-gray-700">Répartition selon millièmes (si applicable)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Montant dû par lot</h4>
                      <p className="text-sm text-gray-700">Montant précis pour chaque copropriétaire</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Date limite de paiement</h4>
                      <p className="text-sm text-gray-700">Échéance claire et précise</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Modes de paiement</h4>
                      <p className="text-sm text-gray-700">Mobile Money, virement, espèces</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Référence de paiement</h4>
                      <p className="text-sm text-gray-700">N° lot + période pour traçabilité</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Modèle à copier */}
        <section id="modele-copier" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  ✅ Modèle d&apos;appel de charges à copier-coller
                </h2>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Modèle complet et professionnel pour vos appels de charges réguliers. Copiez-le et personnalisez-le selon vos besoins.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Modèle d&apos;appel de charges régulier</h3>
                </div>
                <CopyToClipboardButton
                  text={appelChargesModele}
                  label="Copier le modèle"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                />
              </div>

              <div className="p-6">
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-x-auto">
{appelChargesModele}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Modèle appel exceptionnel travaux */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Variante : Appel exceptionnel pour travaux
                </h2>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Utilisez ce modèle pour les appels de fonds exceptionnels destinés à financer des travaux votés en assemblée générale.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Modèle d&apos;appel exceptionnel travaux</h3>
                </div>
                <CopyToClipboardButton
                  text={appelTravauxModele}
                  label="Copier le modèle"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                />
              </div>

              <div className="p-6">
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-x-auto">
{appelTravauxModele}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Exemple rempli (fictif) */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Exemple rempli (fictif)
                </h2>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Voici un exemple concret d&apos;appel de charges rempli pour vous aider à visualiser le résultat final. <strong className="text-purple-600">Cet exemple est purement fictif</strong> et fourni à titre indicatif.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl border border-purple-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Exemple fictif - Résidence Les Palmiers</h3>
                </div>
                <CopyToClipboardButton
                  text={exempleFictif}
                  label="Copier l'exemple"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                />
              </div>

              <div className="p-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-purple-900">
                      <strong>Note importante :</strong> Cet exemple est fictif. Les noms, adresses, montants et coordonnées sont inventés à des fins de démonstration uniquement.
                    </p>
                  </div>
                </div>

                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-x-auto">
{exempleFictif}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Erreurs fréquentes à éviter */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Erreurs fréquentes à éviter
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Évitez ces erreurs courantes qui peuvent créer de la confusion et retarder les paiements :
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">❌ Période absente ou floue</h4>
                      <p className="text-sm text-gray-700">
                        Ne pas indiquer clairement la période concernée (mois, trimestre) crée de la confusion. Soyez précis : &quot;Janvier 2025&quot; ou &quot;T1 2025&quot;.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">❌ Numéro de lot non précisé</h4>
                      <p className="text-sm text-gray-700">
                        Chaque copropriétaire doit pouvoir identifier son lot facilement. Utilisez une nomenclature claire (A-101, B-205, etc.).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">❌ Montant sans justification</h4>
                      <p className="text-sm text-gray-700">
                        Indiquer un montant sans détailler les charges ou la base de calcul (tantièmes) réduit la confiance. Soyez transparent sur la répartition.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">❌ Date limite floue ou absente</h4>
                      <p className="text-sm text-gray-700">
                        &quot;Payer rapidement&quot; ou &quot;avant fin du mois&quot; n&apos;est pas assez précis. Indiquez une date exacte : &quot;31/01/2025&quot;.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">❌ Modes de paiement non indiqués</h4>
                      <p className="text-sm text-gray-700">
                        Ne pas préciser comment payer (Mobile Money, virement, espèces) et les coordonnées de paiement ralentit le processus. Facilitez la vie de vos copropriétaires !
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">❌ Absence de référence de paiement</h4>
                      <p className="text-sm text-gray-700">
                        Sans référence claire (lot + période), le rapprochement des paiements devient un casse-tête, surtout avec Mobile Money. Imposez une référence standardisée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Comment ImmoTopia automatise (CONVERSION) */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Comment ImmoTopia automatise vos appels de charges
                </h2>
              </div>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Fini les appels de charges manuels, les erreurs de calcul et le suivi des impayés dans Excel. ImmoTopia automatise tout le processus de A à Z.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Configuration lots & tantièmes</h3>
                    <p className="text-blue-100">
                      Créez vos résidences, lots et copropriétaires. Définissez les tantièmes (millièmes) une seule fois. Le système calcule automatiquement les quote-parts pour chaque appel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Génération automatique des appels</h3>
                    <p className="text-blue-100">
                      Créez des appels réguliers (mensuels, trimestriels) ou exceptionnels (travaux). Le système génère les documents, calcule les montants et envoie les notifications par email/SMS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Paiements Mobile Money intégrés</h3>
                    <p className="text-blue-100">
                      Les copropriétaires paient via Orange Money, MTN, Moov ou Wave. Le paiement est automatiquement rattaché au lot et à la période. Reçu généré instantanément.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reçus & états de compte automatiques</h3>
                    <p className="text-blue-100">
                      Chaque paiement génère un reçu automatique. Les copropriétaires accèdent à leur état de compte en temps réel depuis leur espace personnel sécurisé.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Suivi impayés & relances</h3>
                    <p className="text-blue-100">
                      Tableau de bord en temps réel des impayés par lot et ancienneté. Relances automatiques programmables par email/SMS. Alertes pour les retards de paiement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reporting & consolidation</h3>
                    <p className="text-blue-100">
                      Rapports de recouvrement par résidence, période, lot. Taux de recouvrement, évolution des impayés, prévisions de trésorerie. Export Excel/PDF pour AG.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">🎯 Résultat : Gain de temps massif + Transparence totale</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">-80%</div>
                  <p className="text-blue-100">Temps administratif</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">+40%</div>
                  <p className="text-blue-100">Taux de recouvrement</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-blue-100">Traçabilité</p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Liens utiles pour aller plus loin</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/logiciel-syndic-copropriete-cote-divoire">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Building2 className="mr-2 h-5 w-5" />
                    Module Syndic
                  </Button>
                </Link>
                <Link href="/paiement-loyer-charges-mobile-money-cote-divoire">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Paiements Mobile Money
                  </Button>
                </Link>
                <Link href="/tableaux-de-bord-kpi-immobilier-cote-divoire">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Tableaux de bord & KPI
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Link href="/logiciel-immobilier-cote-divoire">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    ERP ImmoTopia complet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pour-qui/syndics">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    <Users className="mr-2 h-5 w-5" />
                    Solution pour syndics
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Questions fréquentes (FAQ)
                </h2>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Réponses aux questions les plus courantes sur les appels de charges de copropriété en Côte d&apos;Ivoire.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    <span className="pr-8">{item.question}</span>
                    <svg
                      className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-gray-700 border-t border-gray-100">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: CTA Final */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à automatiser vos appels de charges ?
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Découvrez comment ImmoTopia simplifie la gestion de vos copropriétés avec le module Syndic intégré, les paiements Mobile Money et le suivi en temps réel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact?demo=true">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:scale-105 transition-all">
                  <Calendar className="mr-2 h-5 w-5" />
                  Demander une démo gratuite
                </Button>
              </Link>
              <Link href="/logiciel-syndic-copropriete-cote-divoire">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  <Building2 className="mr-2 h-5 w-5" />
                  Voir le module Syndic
                </Button>
              </Link>
              <Link href="/guides/gerer-copropriete-cote-divoire">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  Guide gestion copropriété
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="text-blue-100 hover:text-white underline underline-offset-4 transition-colors">
                Paiements Mobile Money
              </Link>
              <Link href="/tableaux-de-bord-kpi-immobilier-cote-divoire" className="text-blue-100 hover:text-white underline underline-offset-4 transition-colors">
                Tableaux de bord & KPI
              </Link>
              <Link href="/tarifs" className="text-blue-100 hover:text-white underline underline-offset-4 transition-colors">
                Voir les tarifs
              </Link>
              <Link href="/pour-qui/syndics" className="text-blue-100 hover:text-white underline underline-offset-4 transition-colors">
                Solution pour syndics
              </Link>
            </div>
          </div>
        </section>

        {/* Section bonus: Autres modèles */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              📄 Autres modèles gratuits disponibles
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/modeles/quittance-loyer-cote-divoire" className="group">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      Quittance de loyer
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/modeles/etat-des-lieux-cote-divoire" className="group">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      État des lieux
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/modeles/releve-loyers-etat-de-compte-cote-divoire" className="group">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      Relevé de loyers
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

