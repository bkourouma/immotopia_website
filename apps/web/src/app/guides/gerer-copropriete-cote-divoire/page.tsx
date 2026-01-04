import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Building2,
  FileText,
  Bell,
  TrendingUp,
  Shield,
  Smartphone,
  Users,
  Calendar,
  ClipboardCheck,
  AlertCircle,
  Wrench,
  BarChart3,
  Download,
  MessageSquare
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: "Gérer une copropriété en Côte d'Ivoire : guide complet (charges, AG, impayés) | ImmoTopia",
  description: "Guide complet pour gérer une copropriété en Côte d'Ivoire : organisation, charges, appels de fonds, impayés, maintenance, communication et reporting. Checklist + bonnes pratiques.",
  canonical: "/guides/gerer-copropriete-cote-divoire",
  openGraph: {
    title: "Gérer une copropriété en Côte d'Ivoire : guide complet (charges, AG, impayés)",
    description: "Guide complet pour gérer une copropriété en Côte d'Ivoire : organisation, charges, appels de fonds, impayés, maintenance, communication et reporting. Checklist + bonnes pratiques.",
  },
});

const faqItems = [
  {
    question: "Comment organiser efficacement les charges de copropriété ?",
    answer:
      "Commencez par définir clairement les postes de charges (gardiennage, nettoyage, électricité parties communes, maintenance, etc.). Créez un budget prévisionnel annuel, puis générez des appels de charges réguliers (mensuels ou trimestriels) avec des montants clairs par lot basés sur les tantièmes. Utilisez un système de référencement unique (lot + période) pour faciliter le suivi des paiements.",
  },
  {
    question: "Comment réduire les impayés de charges de copropriété ?",
    answer:
      "La clé est la transparence et la structure : envoyez les appels de charges à l'avance avec des échéances claires, facilitez les paiements (Mobile Money), mettez en place des relances automatiques et courtoises, proposez des plans de paiement si nécessaire, et maintenez un historique accessible pour chaque copropriétaire. Un espace en ligne où les copropriétaires peuvent consulter leur situation réduit considérablement les impayés.",
  },
  {
    question: "Comment suivre efficacement la maintenance des parties communes ?",
    answer:
      "Mettez en place un système de déclaration d'incidents (avec photos si possible), priorisez les interventions selon l'urgence, affectez-les à des prestataires qualifiés, suivez les devis et validations, et conservez un historique complet de toutes les interventions. Un reporting régulier permet d'anticiper les besoins de maintenance préventive.",
  },
  {
    question: "Comment préparer une Assemblée Générale de copropriété ?",
    answer:
      "Préparez l'ordre du jour en listant tous les points à aborder, rassemblez les documents nécessaires (budgets, devis, rapports), envoyez les convocations dans les délais appropriés, préparez les résolutions à voter, et organisez la logistique (salle, matériel). Après l'AG, rédigez le PV rapidement et communiquez les décisions prises avec un plan d'actions clair.",
  },
  {
    question: "Peut-on payer les charges de copropriété via Mobile Money ?",
    answer:
      "Oui, en Côte d'Ivoire, les solutions Mobile Money (Orange Money, MTN Mobile Money, Moov Money, Wave) sont largement adoptées et peuvent être intégrées pour faciliter le paiement des charges. Cela améliore significativement le taux de recouvrement en offrant une méthode de paiement simple, rapide et sécurisée aux copropriétaires.",
  },
  {
    question: "Comment garder des preuves et un historique complet ?",
    answer:
      "Utilisez un système centralisé qui archive automatiquement tous les documents : appels de charges, reçus de paiement, relances, PV d'AG, contrats prestataires, rapports d'intervention. Un journal d'audit qui trace toutes les actions (qui a fait quoi et quand) est essentiel pour répondre aux questions et résoudre les litiges avec des preuves documentées.",
  },
  {
    question: "Est-ce adapté aux petites résidences (moins de 20 lots) ?",
    answer:
      "Absolument. Même une petite résidence bénéficie d'une gestion structurée : transparence des charges, facilité de paiement, communication claire, et historique accessible. Les outils modernes s'adaptent à toutes les tailles de copropriété, avec des fonctionnalités essentielles accessibles rapidement sans complexité inutile.",
  },
  {
    question: "Comment ImmoTopia peut-il aider à gérer une copropriété ?",
    answer:
      "ImmoTopia centralise toute la gestion de copropriété dans un ERP complet : lots et tantièmes, appels de charges automatiques, paiements Mobile Money intégrés, gestion des impayés avec relances, maintenance des parties communes, espace copropriétaires sécurisé, organisation des AG, et reporting en temps réel. Tout est automatisé, tracé et accessible 24/7.",
  },
];

export default function GererCoproprietePage() {
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
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Building2 className="h-4 w-4" />
                Guide opérationnel
              </div>

              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Comment gérer une copropriété en Côte d'Ivoire : le guide opérationnel
              </h1>

              <p className="mb-8 text-lg text-gray-700 md:text-xl lg:text-2xl">
                Charges, impayés, maintenance, assemblées générales — une méthode claire pour une gestion professionnelle et transparente
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact?demo=true" className="flex items-center gap-2">
                    Demander une démo (module syndic)
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/logiciel-syndic-copropriete-cote-divoire" className="flex items-center gap-2">
                    Voir le logiciel syndic
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* C'est quoi une copropriété */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              C'est quoi une copropriété ? (rappel simple)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Une copropriété est un immeuble ou un ensemble immobilier divisé en <strong>lots</strong> appartenant à différents propriétaires (les <strong>copropriétaires</strong>), avec des <strong>parties privatives</strong> (appartements, parkings) et des <strong>parties communes</strong> (hall, escaliers, ascenseur, espaces verts, etc.).
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    Parties privatives
                  </h3>
                  <p className="text-gray-700">
                    Appartements, parkings, caves — propriété exclusive de chaque copropriétaire. Chacun en a la jouissance et l'entretien à sa charge.
                  </p>
                </div>

                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Users className="h-5 w-5 text-green-600" />
                    Parties communes
                  </h3>
                  <p className="text-gray-700">
                    Hall, escaliers, ascenseur, toiture, espaces verts — propriété collective. L'entretien et les charges sont répartis entre tous les copropriétaires.
                  </p>
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Les rôles clés
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-5">
                  <h4 className="mb-2 font-semibold text-gray-900">Copropriétaires</h4>
                  <p className="text-gray-700">
                    Propriétaires des lots. Ils participent aux décisions en Assemblée Générale et paient les charges selon leurs tantièmes (quote-parts).
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-5">
                  <h4 className="mb-2 font-semibold text-gray-900">Syndic</h4>
                  <p className="text-gray-700">
                    Gestionnaire de la copropriété (professionnel ou bénévole). Il exécute les décisions de l'AG, gère les charges, organise la maintenance, et assure la communication.
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-5">
                  <h4 className="mb-2 font-semibold text-gray-900">Conseil syndical</h4>
                  <p className="text-gray-700">
                    Représentants élus des copropriétaires. Ils assistent le syndic, contrôlent sa gestion, et font le lien avec les copropriétaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Les 5 piliers */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Les 5 piliers d'une bonne gestion de copropriété
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  1. Données fiables
                </h3>
                <p className="text-gray-700">
                  Liste à jour des lots, occupants, tantièmes, et contacts. Une base de données centralisée et accessible.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  2. Budget & charges maîtrisés
                </h3>
                <p className="text-gray-700">
                  Budget prévisionnel clair, appels de charges réguliers, suivi des dépenses et transparence financière.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  3. Recouvrement & impayés suivis
                </h3>
                <p className="text-gray-700">
                  Relances structurées, plans de paiement si nécessaire, et traçabilité complète des paiements et soldes.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Wrench className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  4. Maintenance structurée
                </h3>
                <p className="text-gray-700">
                  Déclaration d'incidents, priorisation, affectation prestataires, suivi des interventions et historique complet.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  5. Transparence & reporting
                </h3>
                <p className="text-gray-700">
                  Tableaux de bord en temps réel, rapports accessibles, communication claire et documents archivés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mettre en place les bases */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Mettre en place les bases (data & organisation)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Avant de gérer les charges et la maintenance, il faut structurer les données de base. C'est le fondement d'une gestion efficace.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    1. Liste des lots + occupants
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Créez un registre complet de tous les lots de la copropriété :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Numéro de lot, type (appartement, parking, cave), étage</li>
                    <li>Surface, nombre de pièces, orientation</li>
                    <li>Copropriétaire(s) actuel(s) avec coordonnées complètes</li>
                    <li>Statut d'occupation (occupé par le propriétaire, loué, vacant)</li>
                    <li>Historique des mutations (changements de propriétaires)</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    2. Tantièmes / quote-parts
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Les tantièmes (ou millièmes) déterminent la quote-part de chaque lot dans les charges communes. Ils sont généralement basés sur :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>La surface du lot</li>
                    <li>Sa situation dans l'immeuble (étage, orientation)</li>
                    <li>Son usage (habitation, commerce, parking)</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    <strong>Important :</strong> Les tantièmes sont définis lors de la création de la copropriété et modifiables uniquement par décision d'AG. Assurez-vous qu'ils sont correctement enregistrés pour chaque lot.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    3. Contacts copropriétaires
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Maintenez à jour les coordonnées de tous les copropriétaires :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Nom, prénom, téléphone, email</li>
                    <li>Adresse postale (si différente du lot)</li>
                    <li>Numéro Mobile Money (pour faciliter les paiements)</li>
                    <li>Préférences de communication (email, SMS, WhatsApp)</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    4. Prestataires & contrats
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Listez tous les prestataires et contrats de la copropriété :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Gardiennage : nom, contact, horaires, tarif mensuel</li>
                    <li>Nettoyage : fréquence, zones couvertes, tarif</li>
                    <li>Maintenance ascenseur : contrat, fréquence visites, contact urgence</li>
                    <li>Électricité, eau : fournisseurs, numéros de contrat, contacts</li>
                    <li>Assurance immeuble : police, échéances, contact courtier</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    Conservez une copie numérique de tous les contrats et notez les dates d'échéance pour anticiper les renouvellements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gestion des charges */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Gestion des charges (process simple)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                La gestion des charges est au cœur de la gestion de copropriété. Voici un process simple et efficace.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">1</span>
                    Définir les postes de charges
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Identifiez tous les postes de charges récurrents de la copropriété :
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded bg-gray-50 p-3">
                      <p className="font-semibold text-gray-900">Charges courantes</p>
                      <ul className="mt-2 list-inside list-disc text-sm text-gray-700">
                        <li>Gardiennage</li>
                        <li>Nettoyage parties communes</li>
                        <li>Électricité parties communes</li>
                        <li>Eau parties communes</li>
                        <li>Entretien espaces verts</li>
                      </ul>
                    </div>
                    <div className="rounded bg-gray-50 p-3">
                      <p className="font-semibold text-gray-900">Charges techniques</p>
                      <ul className="mt-2 list-inside list-disc text-sm text-gray-700">
                        <li>Maintenance ascenseur</li>
                        <li>Entretien portail/interphone</li>
                        <li>Assurance immeuble</li>
                        <li>Gestion administrative</li>
                        <li>Provisions pour travaux</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">2</span>
                    Produire un appel de charges clair
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Chaque appel de charges doit contenir les informations essentielles :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li><strong>Période concernée</strong> : mois ou trimestre (ex: "Charges janvier 2026")</li>
                    <li><strong>Numéro de lot</strong> : identification claire du lot concerné</li>
                    <li><strong>Détail des charges</strong> : montant par poste (gardiennage, nettoyage, etc.)</li>
                    <li><strong>Tantièmes du lot</strong> : quote-part utilisée pour le calcul</li>
                    <li><strong>Montant total à payer</strong> : somme claire et visible</li>
                    <li><strong>Date d'échéance</strong> : date limite de paiement</li>
                    <li><strong>Modalités de paiement</strong> : virement, Mobile Money, espèces</li>
                    <li><strong>Référence unique</strong> : pour faciliter le rapprochement (ex: "LOT12-JAN2026")</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">3</span>
                    Traçabilité des paiements
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Chaque paiement doit être enregistré avec :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Date du paiement</li>
                    <li>Montant payé</li>
                    <li>Mode de paiement (virement, Mobile Money, espèces, chèque)</li>
                    <li>Référence de transaction (numéro Mobile Money, référence virement)</li>
                    <li>Lot et période concernés</li>
                    <li>Solde restant (si paiement partiel)</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    <strong>Astuce :</strong> Utilisez un système de référencement unique (lot + période) pour rattacher automatiquement chaque paiement au bon appel de charges.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">4</span>
                    Reçus / état de compte copropriétaire
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Après chaque paiement, générez automatiquement :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li><strong>Reçu de paiement</strong> : document attestant du paiement avec date, montant, période</li>
                    <li><strong>État de compte</strong> : solde actuel du copropriétaire (créditeur ou débiteur)</li>
                    <li><strong>Historique</strong> : liste de tous les appels et paiements sur les 12 derniers mois</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    Ces documents doivent être accessibles en ligne 24/7 pour éviter les demandes répétées et améliorer la transparence.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border-2 border-green-500 bg-green-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Bénéfice clé
                </h3>
                <p className="text-gray-700">
                  Un process de charges structuré réduit les erreurs, améliore le taux de recouvrement, et renforce la confiance des copropriétaires grâce à la transparence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gérer les impayés */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Gérer les impayés de charges (sans conflit)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Les impayés de charges sont un défi récurrent. Une approche structurée et courtoise permet de les réduire significativement.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-gradient-to-r from-orange-50 to-red-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    Relances structurées (courtois → ferme)
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Mettez en place un calendrier de relances progressif :
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-white p-4">
                      <p className="mb-2 font-semibold text-gray-900">J+3 après échéance : Rappel courtois</p>
                      <p className="text-sm text-gray-700">
                        "Bonjour, nous vous rappelons que l'échéance du [date] est passée. Si vous avez déjà effectué le paiement, merci de nous transmettre la référence."
                      </p>
                    </div>

                    <div className="rounded-lg bg-white p-4">
                      <p className="mb-2 font-semibold text-gray-900">J+10 : Relance formelle</p>
                      <p className="text-sm text-gray-700">
                        "Nous constatons que le paiement des charges de [période] n'a pas été reçu. Montant dû : [X] FCFA. Merci de régulariser avant le [nouvelle date]."
                      </p>
                    </div>

                    <div className="rounded-lg bg-white p-4">
                      <p className="mb-2 font-semibold text-gray-900">J+20 : Relance ferme</p>
                      <p className="text-sm text-gray-700">
                        "Malgré nos relances, nous n'avons pas reçu le paiement. Nous vous invitons à nous contacter pour trouver une solution (plan de paiement possible)."
                      </p>
                    </div>

                    <div className="rounded-lg bg-white p-4">
                      <p className="mb-2 font-semibold text-gray-900">J+30 : Mise en demeure</p>
                      <p className="text-sm text-gray-700">
                        Lettre formelle avec mise en demeure de payer sous [X] jours. Mentionner les conséquences possibles selon les règles de la copropriété.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Plan de paiement (si applicable)
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Si un copropriétaire rencontre des difficultés temporaires, proposez un plan de paiement :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Échelonnement sur 3 à 6 mois selon le montant</li>
                    <li>Engagement écrit du copropriétaire</li>
                    <li>Paiements réguliers (ex: chaque 5 du mois)</li>
                    <li>Suivi strict du respect du plan</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    <strong>Important :</strong> Le plan de paiement ne dispense pas de payer les nouvelles charges courantes.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Transparence : état de compte + historique
                  </h3>
                  <p className="mb-3 text-gray-700">
                    La transparence réduit les contestations et facilite le recouvrement :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Fournissez un état de compte détaillé à chaque relance</li>
                    <li>Montrez l'historique complet : appels, paiements, solde</li>
                    <li>Permettez au copropriétaire de consulter son compte en ligne 24/7</li>
                    <li>Conservez toutes les preuves : appels envoyés, relances, échanges</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-lg border-2 border-orange-500 bg-orange-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  Conseil clé
                </h3>
                <p className="text-gray-700">
                  La plupart des impayés ne sont pas de la mauvaise volonté, mais des oublis ou des difficultés temporaires. Une communication claire, courtoise et structurée résout 80% des cas sans conflit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance & incidents */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Maintenance & incidents (parties communes)
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                La maintenance des parties communes est essentielle pour préserver la valeur de l'immeuble et la qualité de vie des résidents.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Wrench className="h-5 w-5 text-purple-600" />
                    Process de gestion des incidents
                  </h3>

                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">1. Déclaration incident</p>
                      <p className="text-sm text-gray-700">
                        Permettez aux copropriétaires, gardien ou gestionnaire de déclarer facilement un incident : ascenseur en panne, fuite d'eau, éclairage défectueux, etc. Idéalement avec photo et description précise.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">2. Priorisation</p>
                      <p className="text-sm text-gray-700">
                        Classez les incidents par urgence : <strong>Urgent</strong> (sécurité, eau, électricité), <strong>Important</strong> (ascenseur, portail), <strong>Normal</strong> (peinture, petits travaux).
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">3. Affectation prestataire</p>
                      <p className="text-sm text-gray-700">
                        Assignez l'incident au prestataire compétent (électricien, plombier, technicien ascenseur, etc.) avec contact et délai d'intervention.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">4. Devis / validation</p>
                      <p className="text-sm text-gray-700">
                        Pour les interventions coûteuses, demandez un devis. Si le montant dépasse un seuil défini (ex: 200 000 FCFA), validez avec le conseil syndical ou l'AG selon les règles de la copropriété.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">5. Intervention & clôture</p>
                      <p className="text-sm text-gray-700">
                        Suivez l'intervention, vérifiez la résolution du problème, archivez la facture et clôturez le ticket avec un compte-rendu.
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">6. Historique interventions</p>
                      <p className="text-sm text-gray-700">
                        Conservez un historique complet de toutes les interventions : date, nature, prestataire, coût, photos avant/après. Cet historique est précieux pour les AG et pour anticiper les besoins futurs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Reporting incidents
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Produisez régulièrement (mensuel ou trimestriel) un rapport de maintenance :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Nombre d'incidents déclarés et résolus</li>
                    <li>Délai moyen de résolution</li>
                    <li>Coût total des interventions</li>
                    <li>Incidents récurrents (pour anticiper des travaux préventifs)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communication copropriétaires */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Communication copropriétaires
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Une communication claire et structurée réduit les malentendus, améliore la satisfaction et facilite la gestion quotidienne.
              </p>

              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-blue-50 p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <Bell className="h-5 w-5 text-blue-600" />
                      Rappels d'échéance
                    </h3>
                    <p className="text-gray-700">
                      Envoyez des rappels automatiques 7 jours avant l'échéance des charges. Cela réduit les oublis et améliore le taux de paiement à temps.
                    </p>
                  </div>

                  <div className="rounded-lg bg-green-50 p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <Wrench className="h-5 w-5 text-green-600" />
                      Informations travaux
                    </h3>
                    <p className="text-gray-700">
                      Informez les copropriétaires des travaux prévus : nature, dates, impact (coupure eau/électricité, accès limité), et durée estimée.
                    </p>
                  </div>

                  <div className="rounded-lg bg-purple-50 p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <FileText className="h-5 w-5 text-purple-600" />
                      Comptes rendus
                    </h3>
                    <p className="text-gray-700">
                      Partagez régulièrement des comptes rendus : décisions du conseil syndical, avancement des travaux, incidents résolus, rappels de règles.
                    </p>
                  </div>

                  <div className="rounded-lg bg-orange-50 p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <MessageSquare className="h-5 w-5 text-orange-600" />
                      Canal unique
                    </h3>
                    <p className="text-gray-700">
                      Privilégiez un canal de communication centralisé (espace en ligne, email officiel) plutôt que WhatsApp dispersé, pour garder une trace et éviter les pertes d'information.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Bonnes pratiques de communication
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Soyez clair et concis dans vos messages</li>
                    <li>Utilisez un ton professionnel mais courtois</li>
                    <li>Donnez des informations précises (dates, montants, contacts)</li>
                    <li>Répondez rapidement aux questions (délai max 48h)</li>
                    <li>Archivez tous les échanges pour traçabilité</li>
                    <li>Respectez la vie privée : pas de diffusion d'informations personnelles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assemblée Générale */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Assemblée Générale (AG) — process opérationnel
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                L'Assemblée Générale est le moment clé de la vie de la copropriété. Voici comment l'organiser efficacement.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                    Avant l'AG : Préparation
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded bg-indigo-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Ordre du jour</p>
                      <p className="text-sm text-gray-700">
                        Listez tous les points à aborder : approbation des comptes, budget prévisionnel, travaux à voter, élection conseil syndical, questions diverses. Soyez exhaustif mais structuré.
                      </p>
                    </div>

                    <div className="rounded bg-indigo-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Convocations</p>
                      <p className="text-sm text-gray-700">
                        Envoyez les convocations avec l'ordre du jour, les documents à consulter (comptes, budgets, devis), et les modalités pratiques (date, heure, lieu, vote à distance si applicable). Respectez les délais appropriés (généralement 15 jours minimum).
                      </p>
                    </div>

                    <div className="rounded bg-indigo-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Documents à préparer</p>
                      <ul className="mt-2 list-inside list-disc text-sm text-gray-700">
                        <li>Comptes de l'exercice écoulé</li>
                        <li>Budget prévisionnel de l'exercice à venir</li>
                        <li>Devis pour travaux à voter</li>
                        <li>Rapports d'activité (maintenance, incidents, etc.)</li>
                        <li>Feuille de présence / pouvoirs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Users className="h-5 w-5 text-purple-600" />
                    Pendant l'AG : Tenue
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Présence & quorum</p>
                      <p className="text-sm text-gray-700">
                        Vérifiez la présence des copropriétaires (en personne ou par pouvoir). Assurez-vous que le quorum est atteint selon les règles de la copropriété.
                      </p>
                    </div>

                    <div className="rounded bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Décisions & votes</p>
                      <p className="text-sm text-gray-700">
                        Pour chaque résolution, présentez le contexte, répondez aux questions, puis procédez au vote. Enregistrez les résultats : pour, contre, abstention, avec les tantièmes correspondants.
                      </p>
                    </div>

                    <div className="rounded bg-purple-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Prise de notes</p>
                      <p className="text-sm text-gray-700">
                        Prenez des notes détaillées pendant l'AG : qui a dit quoi, questions posées, réponses données, résultats des votes. Ces notes faciliteront la rédaction du PV.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Après l'AG : Suivi
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded bg-blue-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Rédaction du PV</p>
                      <p className="text-sm text-gray-700">
                        Rédigez le procès-verbal rapidement (dans les 7 jours) : présents, ordre du jour, résumé des discussions, résultats des votes, décisions prises. Le PV doit être clair et factuel.
                      </p>
                    </div>

                    <div className="rounded bg-blue-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Communication des décisions</p>
                      <p className="text-sm text-gray-700">
                        Envoyez le PV à tous les copropriétaires (présents et absents) et communiquez les décisions importantes : travaux votés, nouveau budget, changements de règles.
                      </p>
                    </div>

                    <div className="rounded bg-blue-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">Plan d'actions</p>
                      <p className="text-sm text-gray-700">
                        Créez un plan d'actions avec les décisions votées : qui fait quoi, quand, avec quel budget. Suivez l'avancement et communiquez régulièrement sur la mise en œuvre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist mensuelle */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Checklist mensuelle (à imprimer)
              </h2>
              <Download className="h-6 w-6 text-gray-400" />
            </div>

            <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-8">
              <p className="mb-6 text-gray-700">
                Utilisez cette checklist chaque mois pour vous assurer que toutes les tâches essentielles sont effectuées.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Appels de charges du mois émis et envoyés à tous les copropriétaires</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Paiements reçus rapprochés avec les appels de charges (référencement lot + période)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Reçus de paiement générés et envoyés aux copropriétaires</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Relances d'impayés envoyées selon le calendrier (J+3, J+10, J+20)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">États de compte mis à jour pour tous les copropriétaires</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Incidents de maintenance déclarés traités et clôturés</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Factures prestataires vérifiées et payées (gardiennage, nettoyage, etc.)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Contrats prestataires vérifiés (échéances, renouvellements à venir)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Communication envoyée aux copropriétaires (travaux, annonces, rappels)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Reporting mensuel mis à jour (taux d'encaissement, impayés, incidents)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Trésorerie vérifiée (solde bancaire, prévisions)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Documents archivés (appels, reçus, factures, PV réunions)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Réponses aux questions copropriétaires (délai max 48h)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Vérification sécurité parties communes (éclairage, portail, interphone)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-gray-900">Préparation AG si échéance dans les 2 mois (ordre du jour, documents)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist AG */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Checklist spéciale AG (à imprimer)
              </h2>
              <Download className="h-6 w-6 text-gray-400" />
            </div>

            <div className="rounded-lg border-2 border-purple-500 bg-purple-50 p-8">
              <p className="mb-6 text-gray-700">
                Utilisez cette checklist pour préparer et organiser une Assemblée Générale sans oubli.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Ordre du jour préparé et validé (tous les points à aborder listés)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Comptes de l'exercice écoulé finalisés et vérifiés</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Budget prévisionnel de l'exercice à venir préparé</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Devis pour travaux à voter rassemblés et analysés</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Rapports d'activité préparés (maintenance, incidents, recouvrement)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Convocations envoyées dans les délais (minimum 15 jours avant)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Documents joints aux convocations (comptes, budgets, devis)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Salle réservée et logistique organisée (chaises, projecteur, etc.)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Feuille de présence et formulaires de pouvoir préparés</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Résolutions à voter rédigées clairement (pour/contre/abstention)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Système de vote préparé (bulletins papier ou vote en ligne)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Prise de notes organisée (qui prend les notes, enregistrement audio si autorisé)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">PV rédigé dans les 7 jours après l'AG</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">PV envoyé à tous les copropriétaires (présents et absents)</p>
                </div>

                <div className="flex items-start gap-3 rounded bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <p className="text-gray-900">Plan d'actions créé avec les décisions votées (qui, quoi, quand, budget)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ImmoTopia automatise */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-blue-600 to-indigo-700 py-12 text-white md:py-16">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              Comment ImmoTopia automatise tout ça
            </h2>

            <p className="mb-12 text-center text-lg text-blue-100 md:text-xl">
              ImmoTopia centralise et automatise toute la gestion de copropriété dans un ERP complet, vous faisant gagner un temps précieux et réduisant les erreurs.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Lots & tantièmes</h3>
                <p className="text-blue-100">
                  Gestion complète des lots, copropriétaires et tantièmes. Calcul automatique des répartitions de charges selon les quote-parts.
                </p>
                <Link href="/logiciel-syndic-copropriete-cote-divoire" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white hover:underline">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Appels de charges automatiques</h3>
                <p className="text-blue-100">
                  Génération automatique des appels de charges récurrents ou exceptionnels. Envoi automatique aux copropriétaires avec référencement unique.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Paiements Mobile Money</h3>
                <p className="text-blue-100">
                  Intégration Orange Money, MTN, Moov, Wave. Référencement automatique lot + période. Reçus instantanés.
                </p>
                <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white hover:underline">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Gestion impayés & relances</h3>
                <p className="text-blue-100">
                  Relances automatiques programmées (J+3, J+10, J+20). Plans de paiement. Traçabilité complète des actions de recouvrement.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Maintenance & ticketing</h3>
                <p className="text-blue-100">
                  Déclaration incidents avec photos. Priorisation. Affectation prestataires. Suivi interventions. Historique complet.
                </p>
                <Link href="/maintenance-immobiliere-ticketing-cote-divoire" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white hover:underline">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Reporting & KPI</h3>
                <p className="text-blue-100">
                  Tableaux de bord en temps réel. Taux d'encaissement. Analyse impayés. Prévisions trésorerie. Export Excel/PDF.
                </p>
                <Link href="/tableaux-de-bord-kpi-immobilier-cote-divoire" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white hover:underline">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Espace copropriétaires</h3>
                <p className="text-blue-100">
                  Accès sécurisé 24/7. Consultation appels, soldes, reçus, PV d'AG. Notifications automatiques. Transparence totale.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Assemblées Générales</h3>
                <p className="text-blue-100">
                  Convocations automatiques. Votes en ligne. Rédaction PV assistée. Archivage sécurisé. Historique complet.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Traçabilité & audit</h3>
                <p className="text-blue-100">
                  Journal d'audit complet. Archivage automatique de tous les documents. Historique accessible. Preuves documentées.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
              >
                Découvrir l'ERP ImmoTopia complet
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-gray-200 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <p className="text-gray-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 text-white md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Prêt à professionnaliser la gestion de votre copropriété ?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Découvrez comment ImmoTopia peut transformer votre gestion de copropriété avec automatisation, transparence et paiements Mobile Money intégrés.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact?demo=true" className="flex items-center gap-2">
                  Demander une démo gratuite
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600">
                <Link href="/tarifs" className="flex items-center gap-2">
                  Voir les tarifs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 space-y-3 text-blue-100">
              <p className="font-semibold">Découvrez aussi :</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/logiciel-syndic-copropriete-cote-divoire" className="underline transition-colors hover:text-white">
                  Logiciel syndic copropriété
                </Link>
                <span>•</span>
                <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="underline transition-colors hover:text-white">
                  Paiements Mobile Money
                </Link>
                <span>•</span>
                <Link href="/maintenance-immobiliere-ticketing-cote-divoire" className="underline transition-colors hover:text-white">
                  Maintenance & ticketing
                </Link>
                <span>•</span>
                <Link href="/tableaux-de-bord-kpi-immobilier-cote-divoire" className="underline transition-colors hover:text-white">
                  Tableaux de bord & KPI
                </Link>
                <span>•</span>
                <Link href="/logiciel-immobilier-cote-divoire" className="underline transition-colors hover:text-white">
                  ERP ImmoTopia complet
                </Link>
                <span>•</span>
                <Link href="/pour-qui/syndics" className="underline transition-colors hover:text-white">
                  Pour les syndics
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

