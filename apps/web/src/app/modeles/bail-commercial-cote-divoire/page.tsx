import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, CheckCircle, AlertTriangle, Building2, Users, Calendar, DollarSign, Shield, ArrowRight, Copy, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CopyToClipboard } from '@/components/ui/copy-to-clipboard';

export const metadata: Metadata = {
  title: 'Modèle de bail commercial en Côte d\'Ivoire (gratuit) | ImmoTopia',
  description: 'Modèle gratuit de bail commercial (CI) à copier, avec checklist des clauses essentielles. Découvrez comment centraliser contrats, loyers et quittances avec l\'ERP immobilier ImmoTopia.',
  alternates: {
    canonical: '/modeles/bail-commercial-cote-divoire',
  },
};

const faqData = [
  {
    question: "Quelle est la différence entre un bail commercial et un bail d'habitation ?",
    answer: "Le bail commercial est destiné à une activité professionnelle (boutique, bureau, entrepôt), tandis que le bail d'habitation concerne un logement. Le bail commercial inclut des clauses spécifiques : destination (activité autorisée), travaux d'aménagement, charges professionnelles (taxes, assurances), et modalités de renouvellement adaptées à l'activité. Les durées et conditions de résiliation diffèrent également.",
  },
  {
    question: "Faut-il obligatoirement préciser l'activité autorisée dans le bail ?",
    answer: "Oui, il est fortement recommandé de préciser la destination du local (activité commerciale autorisée). Cela évite les litiges et permet au bailleur de contrôler l'usage du bien. Par exemple : 'boutique de vêtements', 'bureau d'études', 'restaurant', etc. Une clause trop vague peut entraîner des problèmes si le locataire change d'activité sans accord.",
  },
  {
    question: "Qui paie quelles charges dans un bail commercial ?",
    answer: "Les charges doivent être clairement définies dans le contrat. Généralement, le locataire paie : eau, électricité, entretien courant, taxes locales liées à l'activité. Le bailleur peut rester responsable de la structure (gros œuvre, toiture). Il est essentiel de lister précisément chaque charge pour éviter les malentendus.",
  },
  {
    question: "Comment gérer les travaux d'aménagement dans un local commercial ?",
    answer: "Le bail doit préciser : quels travaux sont autorisés (aménagement intérieur, enseigne, etc.), si une autorisation préalable du bailleur est requise, qui finance les travaux, et ce qui se passe en fin de bail (remise en état ou conservation des aménagements). Il est recommandé de joindre un état des lieux détaillé et des photos.",
  },
  {
    question: "Comment archiver et gérer les contrats de bail commercial ?",
    answer: "Il est crucial de conserver : le contrat signé, l'état des lieux d'entrée, les annexes (photos, inventaire), les avenants éventuels, et les preuves de paiement. ImmoTopia permet de centraliser tous ces documents par bien et par locataire, avec un accès rapide et sécurisé.",
  },
  {
    question: "Peut-on accepter les paiements de loyer via Mobile Money ?",
    answer: "Oui, de nombreux bailleurs en Côte d'Ivoire acceptent les paiements via Mobile Money (Orange Money, MTN Money, Moov Money). Il est important de préciser dans le bail les modalités de paiement acceptées et de conserver les reçus. ImmoTopia intègre le suivi des paiements Mobile Money et génère automatiquement les quittances.",
  },
  {
    question: "Comment ImmoTopia automatise la gestion des baux commerciaux ?",
    answer: "ImmoTopia centralise tous vos contrats de bail commercial, génère automatiquement les échéances de loyer, envoie des rappels avant échéance, suit les paiements (cash, banque, Mobile Money), génère les quittances et reçus, et produit des reportings par local, locataire ou période. Vous gagnez du temps et réduisez les erreurs.",
  },
  {
    question: "Que faire si le locataire souhaite sous-louer ou céder le bail ?",
    answer: "Le bail doit préciser si la sous-location ou la cession est autorisée, interdite, ou soumise à l'accord préalable du bailleur. En l'absence de clause claire, des litiges peuvent survenir. Il est recommandé de définir les conditions (autorisation écrite, garanties, etc.) dès la signature du contrat.",
  },
];

const bailCommercialTemplate = `CONTRAT DE BAIL COMMERCIAL

Entre les soussignés :

1. PARTIES AU CONTRAT

BAILLEUR :
Nom/Raison sociale : [NOM DU BAILLEUR]
Adresse : [ADRESSE COMPLÈTE]
Téléphone : [TÉLÉPHONE]
Email : [EMAIL]
Ci-après dénommé « le Bailleur »

PRENEUR (LOCATAIRE) :
Nom/Raison sociale : [NOM DU PRENEUR]
Activité : [ACTIVITÉ COMMERCIALE]
Adresse : [ADRESSE COMPLÈTE]
Téléphone : [TÉLÉPHONE]
Email : [EMAIL]
Ci-après dénommé « le Preneur »

2. OBJET ET DÉSIGNATION DU LOCAL

Le Bailleur donne à bail au Preneur, qui accepte, le local commercial suivant :

Adresse : [ADRESSE DU LOCAL]
Type de local : [Boutique / Bureau / Entrepôt / Autre]
Surface approximative : [SURFACE EN M²]
Composition : [DESCRIPTION : nombre de pièces, sanitaires, parking, etc.]
Équipements inclus : [LISTE DES ÉQUIPEMENTS : climatisation, compteurs, etc.]

3. DESTINATION / ACTIVITÉS AUTORISÉES

Le local est destiné exclusivement à l'exercice de l'activité suivante :
[PRÉCISER L'ACTIVITÉ AUTORISÉE : ex. "boutique de vêtements", "bureau d'études", "restaurant", etc.]

Toute modification de l'activité devra faire l'objet d'un accord écrit préalable du Bailleur.

4. DURÉE ET RENOUVELLEMENT

Durée : Le présent bail est conclu pour une durée de [DURÉE : ex. 3 ans, 5 ans, etc.], à compter du [DATE DE DÉBUT].

Renouvellement : [PRÉCISER LES CONDITIONS : tacite reconduction, renouvellement sur accord, etc.]

Préavis : En cas de non-renouvellement, un préavis de [DURÉE DU PRÉAVIS : ex. 3 mois, 6 mois] devra être respecté.

5. LOYER, PÉRIODICITÉ, INDEXATION

Loyer mensuel : [MONTANT EN FCFA] FCFA
Périodicité : [Mensuel / Trimestriel / Autre]
Date de paiement : Le loyer est payable [DATE : ex. le 5 de chaque mois]

Indexation : [PRÉCISER SI LE LOYER EST INDEXÉ ET SELON QUELLE MODALITÉ, OU "Pas d'indexation prévue"]

6. DÉPÔT DE GARANTIE / CAUTION

Le Preneur verse au Bailleur, à la signature du présent contrat, un dépôt de garantie de :
[MONTANT EN FCFA] FCFA (équivalent à [NOMBRE] mois de loyer)

Ce dépôt sera restitué en fin de bail, déduction faite des éventuelles sommes dues (loyers impayés, réparations, etc.).

7. CHARGES, TAXES, SERVICES

Les charges suivantes sont à la charge du Preneur :
- Eau : [OUI / NON / MODALITÉS]
- Électricité : [OUI / NON / MODALITÉS]
- Entretien courant : [PRÉCISER]
- Taxes locales : [PRÉCISER : taxe foncière, taxe d'activité, etc.]
- Assurance : [PRÉCISER]
- Autres : [PRÉCISER]

Les charges suivantes restent à la charge du Bailleur :
- [LISTE DES CHARGES BAILLEUR : ex. gros œuvre, toiture, etc.]

8. MODALITÉS DE PAIEMENT

Le loyer et les charges peuvent être réglés par :
- Espèces (avec reçu)
- Virement bancaire sur le compte : [COORDONNÉES BANCAIRES]
- Mobile Money : [NUMÉRO ET OPÉRATEUR : ex. Orange Money, MTN Money, Moov Money]

Le Bailleur délivrera une quittance de loyer pour chaque paiement reçu.

9. TRAVAUX, AMÉNAGEMENTS, AUTORISATIONS

Travaux autorisés : Le Preneur peut réaliser les travaux d'aménagement intérieur suivants : [PRÉCISER : cloisons, peinture, enseigne, etc.]

Autorisation préalable : Tout travaux modifiant la structure ou l'aspect extérieur du local nécessite l'accord écrit préalable du Bailleur.

Financement : Les travaux sont à la charge du [Preneur / Bailleur / Partagés selon modalités].

Fin de bail : En fin de bail, le Preneur devra [remettre les lieux en état initial / laisser les aménagements en place].

10. ENTRETIEN, RÉPARATIONS, RESPONSABILITÉS

Le Preneur s'engage à :
- Entretenir le local en bon état
- Effectuer les réparations locatives courantes
- Signaler immédiatement toute dégradation ou dysfonctionnement

Le Bailleur s'engage à :
- Assurer les réparations de gros œuvre
- Garantir la jouissance paisible du local

11. SOUS-LOCATION / CESSION

La sous-location et la cession du bail sont [AUTORISÉES / INTERDITES / SOUMISES À ACCORD PRÉALABLE ÉCRIT DU BAILLEUR].

[SI AUTORISÉES, PRÉCISER LES CONDITIONS]

12. ASSURANCE

Le Preneur s'engage à souscrire et maintenir une assurance couvrant :
- Responsabilité civile professionnelle
- Dommages au local
- [AUTRES GARANTIES]

Une copie de l'attestation d'assurance devra être remise au Bailleur chaque année.

13. RESPECT DU RÈGLEMENT / COPROPRIÉTÉ

[SI APPLICABLE]
Le Preneur s'engage à respecter le règlement de copropriété et les décisions de l'assemblée générale.

14. MANQUEMENTS, RÉSILIATION, PRÉAVIS

En cas de manquement grave du Preneur (non-paiement du loyer, non-respect des clauses, etc.), le Bailleur pourra résilier le bail après mise en demeure restée sans effet pendant [DURÉE : ex. 15 jours].

En cas de résiliation anticipée par le Preneur, un préavis de [DURÉE] devra être respecté.

15. RESTITUTION DES LIEUX

À la fin du bail, le Preneur restituera le local en bon état, accompagné d'un état des lieux de sortie.

Toute dégradation anormale sera à la charge du Preneur.

16. LITIGES

En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, le litige sera porté devant les juridictions compétentes de [VILLE].

17. SIGNATURES

Fait à [VILLE], le [DATE], en [NOMBRE] exemplaires originaux.

Le Bailleur                                    Le Preneur
[Signature]                                    [Signature]
[Nom et cachet]                                [Nom et cachet]
`;

export default function BailCommercialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-medium">Modèle gratuit</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Modèle de bail commercial en Côte d'Ivoire
              </h1>

              <p className="mb-8 text-xl text-blue-100">
                Modèle prêt à copier avec checklist des clauses essentielles pour sécuriser vos locations commerciales
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <a href="#modele-complet">
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
                    Demander une démo (gestion locative)
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AVERTISSEMENT */}
        <section className="border-b bg-amber-50 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 rounded-lg border-2 border-amber-300 bg-white p-6">
                <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    ⚠️ Avertissement important
                  </h3>
                  <p className="text-gray-700">
                    Ce modèle est fourni à titre <strong>indicatif</strong> et doit être adapté à votre situation spécifique.
                    Il ne constitue pas un conseil juridique. Nous vous recommandons de faire valider votre contrat par un professionnel
                    du droit si nécessaire. ImmoTopia ne peut être tenu responsable de l'utilisation de ce modèle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BAIL COMMERCIAL : À QUOI ÇA SERT ? */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Bail commercial : à quoi ça sert ?
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  Le <strong>bail commercial</strong> est un contrat de location destiné à l'exercice d'une <strong>activité professionnelle</strong>
                  (boutique, bureau, entrepôt, restaurant, etc.). Il se distingue du bail d'habitation par plusieurs spécificités :
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <Building2 className="mb-3 h-8 w-8 text-blue-600" />
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Activité commerciale</h3>
                    <p className="text-gray-600">
                      Le local est destiné à une activité professionnelle précise (commerce, bureau, artisanat).
                      La destination doit être clairement définie dans le contrat.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <Users className="mb-3 h-8 w-8 text-blue-600" />
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Aménagements et travaux</h3>
                    <p className="text-gray-600">
                      Le locataire peut souvent réaliser des aménagements pour adapter le local à son activité,
                      selon les conditions définies dans le bail.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <DollarSign className="mb-3 h-8 w-8 text-blue-600" />
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Charges et impôts</h3>
                    <p className="text-gray-600">
                      Les charges (eau, électricité, taxes locales, assurances) doivent être précisément réparties
                      entre bailleur et locataire pour éviter les litiges.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <Calendar className="mb-3 h-8 w-8 text-blue-600" />
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Durée et renouvellement</h3>
                    <p className="text-gray-600">
                      La durée du bail commercial et les conditions de renouvellement sont adaptées aux besoins
                      de l'activité professionnelle (généralement 3 à 9 ans).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Checklist : informations à préparer avant de rédiger le bail
              </h2>

              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                <p className="mb-6 text-gray-700">
                  Avant de remplir le modèle de bail commercial, assurez-vous d'avoir rassemblé les informations suivantes :
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Parties au contrat",
                      items: ["Nom/raison sociale du bailleur et du preneur", "Adresses complètes", "Téléphones et emails", "Activité du preneur"]
                    },
                    {
                      title: "Désignation du local",
                      items: ["Adresse exacte", "Type de local (boutique, bureau, entrepôt)", "Surface approximative", "Composition (nombre de pièces, sanitaires, parking)", "Équipements inclus"]
                    },
                    {
                      title: "Destination et activités",
                      items: ["Activité commerciale autorisée (précise)", "Restrictions éventuelles"]
                    },
                    {
                      title: "Durée et conditions",
                      items: ["Durée du bail (3 ans, 5 ans, etc.)", "Date de début", "Conditions de renouvellement", "Durée du préavis"]
                    },
                    {
                      title: "Loyer et paiement",
                      items: ["Montant du loyer mensuel (FCFA)", "Périodicité (mensuel, trimestriel)", "Date de paiement", "Indexation éventuelle", "Modalités de paiement (cash, banque, Mobile Money)"]
                    },
                    {
                      title: "Dépôt de garantie",
                      items: ["Montant (équivalent à X mois de loyer)", "Conditions de restitution"]
                    },
                    {
                      title: "Charges et taxes",
                      items: ["Eau, électricité", "Entretien courant", "Taxes locales (foncière, activité)", "Assurances", "Répartition bailleur/preneur"]
                    },
                    {
                      title: "Travaux et aménagements",
                      items: ["Travaux autorisés", "Autorisation préalable requise", "Financement des travaux", "Remise en état en fin de bail"]
                    },
                    {
                      title: "Assurances",
                      items: ["Type d'assurance requise", "Garanties minimales"]
                    },
                    {
                      title: "Sous-location / cession",
                      items: ["Autorisée, interdite, ou soumise à accord", "Conditions si autorisée"]
                    },
                  ].map((section, idx) => (
                    <div key={idx} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="mb-2 font-semibold text-gray-900">{section.title}</h3>
                      <ul className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODÈLE COMPLET */}
        <section id="modele-complet" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">
                  ✅ Modèle complet de bail commercial (à copier-coller)
                </h2>
                <CopyToClipboard
                  text={bailCommercialTemplate}
                  label="Copier le modèle"
                  className="hidden sm:flex"
                />
              </div>

              <div className="rounded-lg border-2 border-gray-300 bg-gray-50 p-6 shadow-lg">
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
                  {bailCommercialTemplate}
                </pre>
              </div>

              <div className="mt-4 flex justify-center sm:hidden">
                <CopyToClipboard
                  text={bailCommercialTemplate}
                  label="Copier le modèle"
                  className="w-full"
                />
              </div>

              <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-blue-800">
                  <strong>💡 Conseil :</strong> Remplacez tous les champs entre crochets [COMME CECI] par vos informations réelles.
                  Adaptez les clauses à votre situation spécifique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ANNEXES RECOMMANDÉES */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Annexes recommandées au bail commercial
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Pour sécuriser votre bail commercial, il est fortement recommandé de joindre les documents suivants en annexe :
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">État des lieux d'entrée</h3>
                    </div>
                    <p className="text-gray-600">
                      Document détaillé décrivant l'état du local à la remise des clés (murs, sols, plafonds, équipements, etc.).
                      Essentiel pour éviter les litiges en fin de bail.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Photos du local</h3>
                    </div>
                    <p className="text-gray-600">
                      Photos datées de toutes les pièces, équipements, et éventuels défauts.
                      Complément visuel indispensable à l'état des lieux.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Inventaire (si applicable)</h3>
                    </div>
                    <p className="text-gray-600">
                      Si le local est loué meublé ou avec équipements (mobilier, matériel), joindre un inventaire détaillé
                      avec description et état de chaque élément.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Autorisation d'activité</h3>
                    </div>
                    <p className="text-gray-600">
                      Si l'activité nécessite une autorisation spécifique (restaurant, débit de boissons, etc.),
                      joindre une copie de l'autorisation ou de la licence.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Règlement intérieur / copropriété</h3>
                    </div>
                    <p className="text-gray-600">
                      Si le local est situé dans un immeuble en copropriété, joindre le règlement intérieur
                      que le locataire devra respecter.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Attestation d'assurance</h3>
                    </div>
                    <p className="text-gray-600">
                      Copie de l'attestation d'assurance du locataire (responsabilité civile professionnelle,
                      dommages au local). À renouveler chaque année.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXEMPLE REMPLI */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Exemple rempli (fictif)
              </h2>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                <div className="mb-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-sm text-blue-800">
                    <strong>Exemple fictif à titre illustratif uniquement.</strong> Les noms, adresses et montants sont inventés.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Extrait d'exemple :</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><strong>Bailleur :</strong> Société IMMO PLATEAU SARL, Abidjan Plateau, Tél : +225 07 XX XX XX XX</p>
                    <p><strong>Preneur :</strong> Mme KOUASSI Marie, Activité : Boutique de vêtements, Tél : +225 05 XX XX XX XX</p>
                    <p><strong>Local :</strong> Boutique située à Abidjan, Cocody Riviera 2, Rue des Jardins, Surface : 40 m²</p>
                    <p><strong>Destination :</strong> Commerce de détail de vêtements et accessoires de mode</p>
                    <p><strong>Durée :</strong> 3 ans à compter du 1er janvier 2025</p>
                    <p><strong>Loyer mensuel :</strong> 250 000 FCFA, payable le 5 de chaque mois</p>
                    <p><strong>Dépôt de garantie :</strong> 500 000 FCFA (2 mois de loyer)</p>
                    <p><strong>Charges :</strong> Eau et électricité à la charge du preneur, entretien courant à la charge du preneur</p>
                    <p><strong>Paiement :</strong> Virement bancaire ou Orange Money au +225 07 XX XX XX XX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERREURS FRÉQUENTES */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Erreurs fréquentes à éviter dans un bail commercial
              </h2>

              <div className="space-y-6">
                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Activité non précisée ou trop vague
                  </h3>
                  <p className="text-gray-700">
                    <strong>Erreur :</strong> Indiquer "commerce" sans préciser l'activité exacte.
                  </p>
                  <p className="mt-2 text-gray-600">
                    <strong>Solution :</strong> Précisez clairement l'activité autorisée (ex : "boutique de vêtements", "bureau d'études en informatique",
                    "restaurant sans débit de boissons alcoolisées"). Cela évite que le locataire change d'activité sans votre accord.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Charges non définies
                  </h3>
                  <p className="text-gray-700">
                    <strong>Erreur :</strong> Ne pas préciser qui paie quoi (eau, électricité, taxes, entretien).
                  </p>
                  <p className="mt-2 text-gray-600">
                    <strong>Solution :</strong> Listez précisément chaque charge et indiquez clairement qui en est responsable.
                    Par exemple : "Eau et électricité à la charge du preneur, taxe foncière à la charge du bailleur".
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Modalités de paiement floues
                  </h3>
                  <p className="text-gray-700">
                    <strong>Erreur :</strong> Ne pas indiquer comment et quand le loyer doit être payé.
                  </p>
                  <p className="mt-2 text-gray-600">
                    <strong>Solution :</strong> Précisez la date de paiement (ex : "le 5 de chaque mois"), les moyens acceptés
                    (cash, virement, Mobile Money), et les coordonnées bancaires ou numéro Mobile Money.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Travaux non encadrés
                  </h3>
                  <p className="text-gray-700">
                    <strong>Erreur :</strong> Ne pas définir quels travaux le locataire peut réaliser et dans quelles conditions.
                  </p>
                  <p className="mt-2 text-gray-600">
                    <strong>Solution :</strong> Précisez les travaux autorisés (aménagement intérieur, enseigne, etc.),
                    si une autorisation préalable est requise, qui finance, et ce qui se passe en fin de bail (remise en état ou non).
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Absence d'état des lieux
                  </h3>
                  <p className="text-gray-700">
                    <strong>Erreur :</strong> Ne pas réaliser d'état des lieux d'entrée et de sortie.
                  </p>
                  <p className="mt-2 text-gray-600">
                    <strong>Solution :</strong> Réalisez systématiquement un état des lieux détaillé à l'entrée et à la sortie,
                    accompagné de photos datées. Cela protège les deux parties en cas de litige sur l'état du local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMENT IMMOTOPIA AIDE */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Comment ImmoTopia aide à gérer vos locaux commerciaux
              </h2>

              <div className="mb-8 rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                <p className="mb-6 text-lg text-gray-700">
                  Une fois votre bail commercial signé, <strong>ImmoTopia</strong> vous accompagne dans la gestion quotidienne
                  de vos locations commerciales grâce à son <strong>ERP immobilier complet</strong> :
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Centraliser les contrats</h3>
                      <p className="text-gray-600">
                        Stockez tous vos baux commerciaux, avenants, états des lieux et annexes par bien et par locataire.
                        Accès rapide et sécurisé à tous vos documents.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Échéances automatiques</h3>
                      <p className="text-gray-600">
                        Générez automatiquement les échéances de loyer selon la périodicité définie (mensuel, trimestriel).
                        Recevez des rappels avant chaque échéance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Suivi des paiements</h3>
                      <p className="text-gray-600">
                        Enregistrez les paiements (cash, virement, Mobile Money) et suivez les impayés en temps réel.
                        Relances automatiques si nécessaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Quittances et reçus</h3>
                      <p className="text-gray-600">
                        Générez automatiquement les quittances de loyer et reçus de paiement conformes.
                        Envoi par email ou téléchargement PDF.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Reporting complet</h3>
                      <p className="text-gray-600">
                        Tableaux de bord et rapports par local, locataire, ou période.
                        Visualisez vos revenus locatifs, taux d'occupation, et impayés.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Intégration Mobile Money</h3>
                      <p className="text-gray-600">
                        Acceptez les paiements via Orange Money, MTN Money, Moov Money.
                        Suivi automatique et réconciliation des transactions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Link href="/gestion-locative-cote-divoire">
                      Découvrir le module gestion locative
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/paiement-loyer-charges-mobile-money-cote-divoire">
                      Paiements Mobile Money
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-blue-600">
                    ERP Immobilier complet
                  </h3>
                  <p className="text-sm text-gray-600">
                    Découvrez toutes les fonctionnalités de l'ERP ImmoTopia pour gérer votre activité immobilière.
                  </p>
                </Link>

                <Link
                  href="/tarifs"
                  className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-blue-600">
                    Voir les tarifs
                  </h3>
                  <p className="text-sm text-gray-600">
                    Plans adaptés à votre activité, du propriétaire bailleur à l'agence immobilière.
                  </p>
                </Link>

                <Link
                  href="/contact?demo=true"
                  className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-blue-600">
                    Demander une démo
                  </h3>
                  <p className="text-sm text-gray-600">
                    Découvrez ImmoTopia en action avec une démo personnalisée gratuite.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Questions fréquentes sur le bail commercial
                </h2>
                <p className="text-lg text-gray-600">
                  Retrouvez les réponses aux questions les plus courantes sur les baux commerciaux en Côte d'Ivoire
                </p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-gray-900">
                      <span className="pr-8">{faq.question}</span>
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
                <p className="mb-4 text-gray-700">
                  <strong>Vous avez d'autres questions ?</strong> Notre équipe est là pour vous aider.
                </p>
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Prêt à optimiser votre gestion locative commerciale ?
              </h2>
              <p className="mb-8 text-xl text-blue-100">
                Centralisez vos baux, automatisez vos échéances, et suivez vos paiements en temps réel avec ImmoTopia
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/contact?demo=true">
                    Demander une démo gratuite
                    <ArrowRight className="ml-2 h-4 w-4" />
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
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/logiciel-immobilier-cote-divoire">
                    ERP immobilier complet
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/tarifs">
                    Voir les tarifs
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-blue-100">
                Sans engagement · Configuration rapide · Support inclus
              </p>
            </div>
          </div>
        </section>

        {/* LIENS INTERNES SUPPLÉMENTAIRES */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-6 text-center text-xl font-semibold text-gray-900">
                Ressources complémentaires
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="rounded-lg border border-gray-200 bg-white p-4 text-center transition-all hover:border-blue-500 hover:shadow-md"
                >
                  <span className="text-blue-600 hover:underline">
                    Logiciel immobilier Côte d'Ivoire
                  </span>
                </Link>
                <Link
                  href="/paiement-loyer-charges-mobile-money-cote-divoire"
                  className="rounded-lg border border-gray-200 bg-white p-4 text-center transition-all hover:border-blue-500 hover:shadow-md"
                >
                  <span className="text-blue-600 hover:underline">
                    Paiement loyer Mobile Money
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

