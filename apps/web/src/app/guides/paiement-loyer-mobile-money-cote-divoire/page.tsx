import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  FileText,
  Bell,
  TrendingUp,
  Shield,
  Smartphone,
  Copy,
  Download,
  CreditCard,
  Users,
  Building2,
  Clock,
  XCircle,
  CheckSquare,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Paiement des loyers en Mobile Money en Côte d'Ivoire : guide & bonnes pratiques | ImmoTopia",
    description:
      "Comment encaisser loyers et charges en Mobile Money en Côte d'Ivoire sans erreurs : références, quittances, impayés, reporting et bonnes pratiques terrain.",
    canonicalUrl: '/guides/paiement-loyer-mobile-money-cote-divoire',
    keywords: [
      'paiement loyer Mobile Money Côte d\'Ivoire',
      'payer loyer par mobile money',
      'paiement loyer Orange Money MTN Moov',
      'encaissement loyer mobile money',
      'suivi paiement loyer mobile money',
      'charges copropriété mobile money',
      'quittance loyer mobile money',
      'gestion locative mobile money',
      'paiement loyer Abidjan',
      'mobile money immobilier',
    ],
  },
  '/guides/paiement-loyer-mobile-money-cote-divoire'
);

const faqItems = [
  {
    question: "Le Mobile Money est-il fiable pour encaisser des loyers ?",
    answer:
      "Oui, le Mobile Money (Orange Money, MTN Money, Moov Money, Wave) est fiable et largement adopté en Côte d'Ivoire. Les transactions sont sécurisées et tracées. Le principal risque n'est pas la technologie, mais l'absence de process : paiements non identifiés, pas de référence, pas de quittance. Avec un bon système de gestion, le Mobile Money devient un atout majeur.",
  },
  {
    question: "Que faire si un locataire paie sans référence ?",
    answer:
      "Contactez immédiatement le locataire pour identifier le paiement (bien, mois concerné). Notez l'heure et le montant exact pour rapprocher la transaction. Confirmez par écrit (SMS/email) et émettez la quittance. Pour éviter ce problème, communiquez systématiquement la référence avant chaque échéance et refusez les paiements non identifiés.",
  },
  {
    question: "Peut-on refuser un paiement Mobile Money ?",
    answer:
      "Vous ne pouvez pas techniquement refuser un paiement déjà reçu, mais vous pouvez le rembourser si nécessaire. L'important est de définir des règles claires : exiger une référence, un paiement par mois, et communiquer ces règles au locataire dès la signature du bail. En cas de non-respect, contactez le locataire pour régulariser.",
  },
  {
    question: "Comment prouver qu'un loyer a été payé en Mobile Money ?",
    answer:
      "Conservez l'historique des transactions Mobile Money (SMS de confirmation, relevé opérateur). Émettez systématiquement une quittance de loyer après chaque paiement. Avec ImmoTopia, chaque paiement est enregistré avec date, montant, référence et bien concerné, et une quittance PDF est générée automatiquement.",
  },
  {
    question: "Peut-on payer les charges de copropriété en Mobile Money ?",
    answer:
      "Oui, c'est possible et de plus en plus courant. Le syndic doit communiquer une référence unique par lot (ex: 'Charges Lot B12 - T1 2025'). ImmoTopia permet de gérer les appels de charges, d'encaisser via Mobile Money avec références automatiques, et de générer des reçus pour chaque copropriétaire.",
  },
  {
    question: "Comment suivre les impayés avec le Mobile Money ?",
    answer:
      "Utilisez un système qui rapproche automatiquement les paiements Mobile Money avec les échéances. ImmoTopia affiche en temps réel les loyers payés, en retard ou impayés, et permet de relancer automatiquement les locataires. Vous visualisez instantanément qui a payé et qui ne l'a pas fait.",
  },
  {
    question: "Le Mobile Money est-il adapté aux agences et syndics ?",
    answer:
      "Absolument. Les agences et syndics gèrent des dizaines voire des centaines de paiements par mois. Le Mobile Money simplifie les encaissements, mais nécessite un ERP pour gérer les références, rapprocher les paiements, générer les quittances et produire les reportings. ImmoTopia est conçu pour cela.",
  },
  {
    question: "ImmoTopia peut-il m'aider à gérer les paiements Mobile Money ?",
    answer:
      "Oui. ImmoTopia rattache chaque paiement Mobile Money à un contrat, un bien et une période. Il génère automatiquement les quittances, met à jour les états de compte, suit les impayés, et produit des reportings d'encaissements. Vous gagnez du temps et évitez les erreurs.",
  },
];

export default function PaiementLoyerMobileMoneyPage() {
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
                <Smartphone className="h-4 w-4" />
                Guide opérationnel
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Paiement des loyers en Mobile Money en Côte d'Ivoire : bonnes pratiques
              </h1>
              
              <p className="mb-8 text-xl text-gray-700 md:text-2xl">
                Simplicité, rapidité… à condition d&apos;avoir un bon process. Découvrez{' '}
                <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  notre solution de paiement Mobile Money
                </Link>
                {' '}et{' '}
                <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  notre gestion locative
                </Link>
                .
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="flex items-center gap-2">
                    Voir la solution ImmoTopia
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2"
                >
                  <Link href="/contact?demo=true">
                    Demander une démo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Le Mobile Money (Orange Money, MTN Money, Moov Money, Wave) a révolutionné le paiement des loyers en Côte d'Ivoire.
                Simplicité, rapidité, accessibilité : les avantages sont indéniables. Mais <strong>sans process rigoureux</strong>,
                le Mobile Money peut vite devenir un cauchemar de gestion.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Paiements non identifiés, pas de référence, difficultés à prouver un paiement, litiges avec les locataires,
                reporting impossible… Ce guide vous montre comment <strong>encaisser loyers et charges en Mobile Money sans erreurs</strong>,
                avec des process clairs, des checklists opérationnelles et des bonnes pratiques terrain adaptées au contexte ivoirien.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Pourquoi le Mobile Money est devenu incontournable */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi le Mobile Money est devenu incontournable
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Adoption massive en Côte d'Ivoire
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Plus de 80% de la population ivoirienne utilise le Mobile Money au quotidien. Orange Money, MTN Money,
                      Moov Money et Wave sont devenus des moyens de paiement aussi courants que l'argent liquide. Pour les locataires,
                      c'est simple, rapide et accessible 24/7.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Rapidité d'encaissement
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Fini les déplacements à la banque, les chèques qui mettent 3 jours à être encaissés, ou les espèces à compter.
                      Avec le Mobile Money, le paiement est instantané. Le locataire paie depuis son téléphone, vous recevez l'argent
                      immédiatement. Cela améliore la trésorerie et réduit les retards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Sécurité et traçabilité
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Contrairement aux espèces, chaque transaction Mobile Money est tracée : date, heure, montant, numéro de transaction.
                      Vous recevez un SMS de confirmation. En cas de litige, vous avez une preuve. C'est plus sûr que l'argent liquide
                      et plus pratique que les virements bancaires.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Smartphone className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Réalité terrain en Côte d'Ivoire
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      De nombreux locataires n'ont pas de compte bancaire ou préfèrent éviter les frais bancaires. Le Mobile Money
                      est leur solution de paiement privilégiée. En tant que gestionnaire, agence ou syndic, refuser le Mobile Money,
                      c'est se priver d'une grande partie du marché et compliquer la vie de vos locataires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Les problèmes courants sans process */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Les problèmes courants sans process
            </h2>

            <div className="mb-8 rounded-lg bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-red-900 mb-2">
                    Le Mobile Money sans process = chaos
                  </p>
                  <p className="text-red-800 leading-relaxed">
                    Beaucoup d'agences et de gestionnaires acceptent les paiements Mobile Money sans avoir mis en place
                    de règles claires. Résultat : confusion, litiges, impayés non détectés, et perte de temps considérable.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Paiements non identifiés</h3>
                  <p className="text-gray-700">
                    Vous recevez un paiement de 150 000 FCFA. Mais de qui ? Pour quel bien ? Pour quel mois ?
                    Sans référence, impossible de savoir. Vous devez appeler tous vos locataires pour identifier le paiement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Pas de référence (bien/mois)</h3>
                  <p className="text-gray-700">
                    Un locataire paie 300 000 FCFA. Est-ce pour janvier ? Février ? Ou pour 2 mois d'avance ?
                    Sans référence claire, vous ne pouvez pas mettre à jour correctement l'état de compte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Difficulté à prouver un paiement</h3>
                  <p className="text-gray-700">
                    Un locataire affirme avoir payé. Vous n'avez pas de quittance, pas de trace dans votre système.
                    Le SMS Mobile Money ne suffit pas toujours. En cas de litige, vous êtes en difficulté.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Litiges fréquents</h3>
                  <p className="text-gray-700">
                    "J'ai payé !" — "Non, je n'ai rien reçu." — "Si, regardez mon SMS !" — "Mais pour quel mois ?"
                    Ces échanges font perdre du temps et dégradent la relation avec le locataire.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Reporting impossible</h3>
                  <p className="text-gray-700">
                    Combien avez-vous encaissé ce mois-ci ? Quels biens ont des impayés ? Impossible de répondre rapidement
                    si les paiements Mobile Money ne sont pas enregistrés et rattachés correctement dans votre système.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Les règles d'or */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Les règles d'or du paiement loyer Mobile Money
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Règle n°1 : Toujours une référence
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Chaque paiement Mobile Money doit contenir une référence unique qui identifie le bien et le mois concerné.
                      Exemple : <code className="bg-gray-100 px-2 py-1 rounded text-sm">Loyer Villa A - Janvier 2025</code> ou
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-1">Appt B12 - Fev25</code>.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Communiquez cette référence au locataire <strong>avant chaque échéance</strong> (SMS, email, WhatsApp).
                      Refusez les paiements sans référence ou demandez au locataire de renvoyer avec la bonne référence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Règle n°2 : Un paiement = un mois
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Ne mélangez jamais plusieurs mois dans un seul paiement. Si un locataire veut payer 2 mois d'avance,
                      demandez-lui de faire 2 paiements distincts avec 2 références différentes.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Cela simplifie la comptabilité, évite les erreurs d'affectation, et facilite la génération des quittances.
                      Un paiement = une quittance = un mois.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-purple-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Règle n°3 : Rattacher à un contrat/bien
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Dès réception du paiement, rattachez-le immédiatement au contrat de location et au bien concerné dans votre système.
                      Ne laissez jamais un paiement "en attente" ou "non affecté".
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Avec un ERP comme ImmoTopia, ce rattachement est automatique grâce à la référence. Sans ERP, utilisez au minimum
                      un tableur avec colonnes : Date, Montant, Référence, Bien, Locataire, Mois.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-orange-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Règle n°4 : Confirmer par quittance
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Après chaque paiement, émettez une quittance de loyer. C'est une obligation légale et une preuve pour le locataire.
                      La quittance doit mentionner : bien, période, montant, date de paiement, mode de paiement (Mobile Money).
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Envoyez la quittance par email ou WhatsApp (PDF). Conservez une copie. ImmoTopia génère automatiquement
                      les quittances après chaque paiement Mobile Money.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-red-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Règle n°5 : Mettre à jour immédiatement le statut
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Dès qu'un paiement est reçu et rattaché, mettez à jour le statut du loyer : de "Impayé" ou "En attente" à "Payé".
                      Ne reportez jamais cette mise à jour à plus tard.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Cela vous permet de savoir en temps réel qui a payé et qui ne l'a pas fait. Vous évitez de relancer un locataire
                      qui a déjà payé (ce qui est très mauvais pour la relation client).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Process recommandé */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Process recommandé (pas à pas)
            </h2>

            <div className="mb-8 rounded-lg bg-blue-50 border-l-4 border-blue-500 p-6">
              <div className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-blue-900 mb-2">
                    Un process clair = zéro erreur
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    Suivez ce process pour chaque paiement Mobile Money. Vous pouvez l'adapter à votre contexte,
                    mais respectez les étapes clés : référence, rapprochement, quittance, mise à jour.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Étape 1 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Avant l'échéance : rappel + référence
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>J-3 à J-1</strong> : Envoyez un rappel au locataire avec la référence exacte à utiliser pour le paiement.
                    </p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm text-gray-600 mb-2"><strong>Exemple de SMS :</strong></p>
                      <p className="text-sm text-gray-800 italic">
                        "Bonjour M. Kouassi, votre loyer de janvier 2025 (150 000 FCFA) est dû le 05/01.
                        Merci d'utiliser la référence : <strong>Villa A - Jan25</strong> lors du paiement Mobile Money.
                        Cordialement, Agence ImmoTopia."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Paiement Mobile Money
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Le locataire effectue le paiement via Orange Money, MTN Money, Moov Money ou Wave.
                      Il inclut la référence dans le libellé ou le message du paiement.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Vous recevez un SMS de confirmation de l'opérateur avec : montant, date, heure, numéro de transaction.
                      Conservez ce SMS.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Réception & rapprochement
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Dès réception du paiement, identifiez le bien et le mois grâce à la référence.
                      Rapprochez le montant reçu avec le montant attendu.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Si la référence est correcte</strong> : passez à l'étape 4.<br />
                      <strong>Si la référence manque ou est incorrecte</strong> : contactez immédiatement le locataire pour clarifier.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 4 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Quittance / reçu
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Générez immédiatement la quittance de loyer (PDF) mentionnant :
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                      <li>Nom du locataire</li>
                      <li>Adresse du bien</li>
                      <li>Période (mois/année)</li>
                      <li>Montant payé</li>
                      <li>Date de paiement</li>
                      <li>Mode de paiement : Mobile Money</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Envoyez la quittance au locataire par email ou WhatsApp. Conservez une copie dans votre système.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 5 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Mise à jour impayé ou payé
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Mettez à jour le statut du loyer dans votre système : <strong>Payé</strong>.
                      Enregistrez la date de paiement, le montant, et le numéro de transaction Mobile Money.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Votre tableau de bord doit refléter immédiatement ce paiement. Vous savez en temps réel qui a payé et qui ne l'a pas fait.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-green-50 border-l-4 border-green-500 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-green-900 mb-2">
                    Process complet en moins de 5 minutes
                  </p>
                  <p className="text-green-800 leading-relaxed">
                    Avec un ERP comme ImmoTopia, ce process est automatisé : rapprochement automatique grâce à la référence,
                    génération automatique de la quittance, mise à jour automatique du statut. Vous gagnez du temps et évitez les erreurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Gérer les cas particuliers */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Gérer les cas particuliers
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Même avec un bon process, vous rencontrerez des situations atypiques. Voici comment les gérer sans stress.
            </p>

            <div className="space-y-6">
              {/* Cas 1 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Cas 1 : Paiement partiel
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Situation</strong> : Le loyer est de 200 000 FCFA, le locataire paie 100 000 FCFA.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Solution</strong> :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                      <li>Enregistrez le paiement partiel avec la référence du mois concerné</li>
                      <li>Émettez une quittance partielle mentionnant "Acompte sur loyer de janvier 2025 : 100 000 FCFA. Reste dû : 100 000 FCFA"</li>
                      <li>Contactez le locataire pour convenir d'une date de paiement du solde</li>
                      <li>Mettez à jour le statut : "Partiellement payé" ou "Reste dû : 100 000 FCFA"</li>
                      <li>Relancez si le solde n'est pas payé à la date convenue</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Important</strong> : Ne considérez jamais un paiement partiel comme un paiement complet.
                      Gardez une trace du reste dû.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cas 2 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Cas 2 : Paiement en avance
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Situation</strong> : Le locataire paie le loyer de février alors qu'on est encore en janvier.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Solution</strong> :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                      <li>Vérifiez que la référence mentionne bien "Février 2025"</li>
                      <li>Enregistrez le paiement avec la date de réception mais la période "Février 2025"</li>
                      <li>Émettez la quittance pour février 2025</li>
                      <li>Mettez à jour le statut : "Février 2025 : Payé (en avance)"</li>
                      <li>Remerciez le locataire pour son anticipation</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Astuce</strong> : Les paiements en avance sont une bonne chose. Encouragez-les en facilitant le process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cas 3 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Cas 3 : Paiement tardif
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Situation</strong> : Le loyer de janvier est payé le 15 février.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Solution</strong> :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                      <li>Enregistrez le paiement avec la référence "Janvier 2025" et la date de réception (15 février)</li>
                      <li>Émettez la quittance pour janvier 2025 en mentionnant la date de paiement réelle</li>
                      <li>Mettez à jour le statut : "Janvier 2025 : Payé (en retard)"</li>
                      <li>Si des pénalités de retard sont prévues au contrat, appliquez-les et mentionnez-les sur la quittance</li>
                      <li>Relancez pour le loyer de février si nécessaire</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Important</strong> : Gardez une trace des retards pour identifier les locataires à risque.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cas 4 */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Cas 4 : Paiement sans référence
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Situation</strong> : Vous recevez un paiement Mobile Money sans référence ou avec une référence incorrecte.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Solution</strong> :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                      <li>Notez immédiatement : montant, date, heure, numéro de transaction</li>
                      <li>Contactez tous les locataires dont le loyer est proche de ce montant</li>
                      <li>Demandez au locataire de confirmer par écrit (SMS/email) : bien, mois concerné</li>
                      <li>Une fois identifié, enregistrez le paiement avec la bonne référence</li>
                      <li>Émettez la quittance</li>
                      <li>Rappelez au locataire l'importance de la référence pour les prochains paiements</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Prévention</strong> : Communiquez clairement les règles dès la signature du bail. Refusez les paiements sans référence
                      (demandez au locataire de renvoyer avec la bonne référence).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Mobile Money & Copropriété */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Mobile Money & Copropriété
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Le Mobile Money n'est pas réservé aux loyers. Il est également très utile pour encaisser les charges de copropriété.
              Voici comment l'utiliser efficacement dans ce contexte.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Paiement des charges de copropriété
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Les copropriétaires peuvent payer leurs charges trimestrielles ou mensuelles via Mobile Money.
                      Le syndic doit communiquer une référence unique par lot.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Exemple de référence</strong> : <code className="bg-gray-100 px-2 py-1 rounded text-sm">Charges Lot B12 - T1 2025</code>
                      ou <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-1">Copro Riviera - Lot A5 - Jan25</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Appels de charges
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Avant chaque échéance, le syndic envoie un appel de charges à chaque copropriétaire avec :
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                      <li>Montant des charges (calculé selon les tantièmes)</li>
                      <li>Période concernée (trimestre ou mois)</li>
                      <li>Date limite de paiement</li>
                      <li>Référence à utiliser pour le paiement Mobile Money</li>
                      <li>Numéro Mobile Money du syndic</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      ImmoTopia génère automatiquement les appels de charges avec références uniques et les envoie par email/SMS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Copy className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Références par lot
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Chaque lot doit avoir une référence unique. Ne mélangez jamais les paiements de plusieurs lots.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Bonne pratique</strong> : Utilisez un format standardisé : <code className="bg-gray-100 px-2 py-1 rounded text-sm">Charges [Nom Copro] - Lot [Numéro] - [Période]</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Download className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Reçus pour copropriétaires
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Après chaque paiement de charges, émettez un reçu au copropriétaire mentionnant :
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                      <li>Nom du copropriétaire</li>
                      <li>Numéro de lot</li>
                      <li>Période des charges</li>
                      <li>Montant payé</li>
                      <li>Date de paiement</li>
                      <li>Mode de paiement : Mobile Money</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      ImmoTopia génère automatiquement ces reçus et les envoie par email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-blue-50 border-l-4 border-blue-500 p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-blue-900 mb-2">
                    Copropriété : même rigueur que pour les loyers
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    Les mêmes règles s'appliquent : référence obligatoire, rapprochement immédiat, reçu systématique, mise à jour du statut.
                    Un syndic qui gère bien les paiements Mobile Money gagne en crédibilité et en efficacité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Checklist */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Checklist "Paiement Mobile Money sans erreur"
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Utilisez cette checklist pour chaque paiement Mobile Money. Cochez mentalement (ou physiquement) chaque point.
              Si vous ne pouvez pas cocher un point, c'est qu'il y a un problème à résoudre.
            </p>

            <div className="rounded-lg bg-white p-8 shadow-md border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Avant l'échéance</strong> : J'ai envoyé un rappel au locataire avec la référence exacte à utiliser
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Référence</strong> : Le paiement contient une référence claire (bien + mois)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Montant</strong> : Le montant reçu correspond au montant attendu (ou est un acompte identifié)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Rapprochement</strong> : J'ai identifié le bien et le mois concernés grâce à la référence
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Enregistrement</strong> : Le paiement est enregistré dans mon système avec date, montant, référence, bien, locataire
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Quittance</strong> : J'ai généré et envoyé la quittance au locataire (PDF par email/WhatsApp)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Statut</strong> : Le statut du loyer est mis à jour : "Payé" (ou "Partiellement payé" si acompte)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>SMS conservé</strong> : J'ai conservé le SMS de confirmation Mobile Money (preuve de transaction)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Historique</strong> : Le paiement est visible dans l'historique du locataire et du bien
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Tableau de bord</strong> : Mon tableau de bord reflète ce paiement (encaissements du jour/mois)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Impayés</strong> : Le bien n'apparaît plus dans la liste des impayés pour ce mois
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Communication</strong> : Si paiement partiel ou tardif, j'ai contacté le locataire pour clarifier
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Copie</strong> : J'ai conservé une copie de la quittance dans mon système
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Reporting</strong> : Le paiement est pris en compte dans mes reportings mensuels
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Propriétaire</strong> : Si je gère pour un propriétaire, le paiement est visible dans son espace
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Relance annulée</strong> : Si une relance automatique était prévue, elle est annulée
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Confirmation locataire</strong> : Le locataire a reçu une confirmation (quittance = confirmation)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Numéro transaction</strong> : J'ai noté le numéro de transaction Mobile Money pour traçabilité
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Aucune ambiguïté</strong> : Il n'y a aucune ambiguïté sur le bien, le mois, ou le montant
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Process respecté</strong> : J'ai suivi le process complet sans sauter d'étape
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-green-100 border-l-4 border-green-600 p-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-green-900 mb-2">
                    20 points = zéro erreur
                  </p>
                  <p className="text-green-800 leading-relaxed">
                    Si vous pouvez cocher ces 20 points pour chaque paiement Mobile Money, vous avez un process parfait.
                    Avec ImmoTopia, la plupart de ces points sont automatisés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Erreurs fréquentes */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Erreurs fréquentes à éviter
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Voici les erreurs les plus courantes que nous observons sur le terrain en Côte d'Ivoire.
              Évitez-les à tout prix.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°1 : Mélanger plusieurs mois dans un seul paiement</h3>
                  <p className="text-red-800 leading-relaxed">
                    Un locataire paie 300 000 FCFA pour "janvier + février". Vous ne savez plus quel mois est payé.
                    <strong> Solution</strong> : Exigez un paiement par mois, avec une référence par mois.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°2 : Accepter des paiements non identifiés</h3>
                  <p className="text-red-800 leading-relaxed">
                    Vous recevez un paiement sans référence et vous vous dites "je verrai plus tard".
                    <strong> Solution</strong> : Contactez immédiatement le locataire. Ne laissez jamais un paiement non identifié.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°3 : Ne pas générer de quittance</h3>
                  <p className="text-red-800 leading-relaxed">
                    "Le SMS Mobile Money suffit." Non. La quittance est obligatoire et protège les deux parties.
                    <strong> Solution</strong> : Générez systématiquement une quittance après chaque paiement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°4 : Ne pas tenir d'historique</h3>
                  <p className="text-red-800 leading-relaxed">
                    Vous ne gardez pas de trace des paiements Mobile Money. En cas de litige, vous êtes perdu.
                    <strong> Solution</strong> : Enregistrez chaque paiement dans un système (ERP ou tableur minimum).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°5 : Ne pas communiquer la référence avant l'échéance</h3>
                  <p className="text-red-800 leading-relaxed">
                    Vous attendez que le locataire paie, puis vous lui demandez la référence. Trop tard.
                    <strong> Solution</strong> : Envoyez la référence J-3 à J-1 avant l'échéance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°6 : Ne pas mettre à jour le statut immédiatement</h3>
                  <p className="text-red-800 leading-relaxed">
                    Vous recevez le paiement mais vous mettez à jour le statut "plus tard". Résultat : vous relancez un locataire qui a payé.
                    <strong> Solution</strong> : Mettez à jour le statut dès réception du paiement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°7 : Utiliser plusieurs numéros Mobile Money</h3>
                  <p className="text-red-800 leading-relaxed">
                    Vous avez 3 numéros Orange Money, 2 MTN Money… Les locataires ne savent plus où payer.
                    <strong> Solution</strong> : Utilisez un seul numéro par opérateur et communiquez-le clairement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°8 : Ne pas conserver les SMS de confirmation</h3>
                  <p className="text-red-800 leading-relaxed">
                    Vous supprimez les SMS Mobile Money pour libérer de l'espace. En cas de litige, vous n'avez plus de preuve.
                    <strong> Solution</strong> : Conservez tous les SMS ou utilisez un système qui enregistre automatiquement les transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°9 : Ne pas former votre équipe</h3>
                  <p className="text-red-800 leading-relaxed">
                    Vous avez un process, mais votre équipe ne le connaît pas ou ne le respecte pas.
                    <strong> Solution</strong> : Formez votre équipe, documentez le process, et vérifiez régulièrement qu'il est respecté.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border-l-4 border-red-500">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Erreur n°10 : Penser que le Mobile Money suffit sans système</h3>
                  <p className="text-red-800 leading-relaxed">
                    "On accepte le Mobile Money, c'est bon." Non. Sans système de gestion (ERP), le Mobile Money devient ingérable dès 10+ biens.
                    <strong> Solution</strong> : Investissez dans un ERP comme ImmoTopia pour automatiser et sécuriser le process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Comment ImmoTopia sécurise le Mobile Money */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Comment ImmoTopia sécurise le Mobile Money
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              ImmoTopia est conçu pour gérer les paiements Mobile Money de manière professionnelle, sécurisée et automatisée.
              Voici comment nous vous aidons à éviter toutes les erreurs mentionnées ci-dessus.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CreditCard className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Paiements rattachés (contrat + période + bien)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Chaque paiement Mobile Money est automatiquement rattaché au contrat de location, au bien et à la période concernée
                      grâce à la référence unique générée par ImmoTopia.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Vous ne perdez jamais un paiement. Vous savez toujours qui a payé, pour quel bien, et pour quel mois.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Quittances automatiques
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Dès qu'un paiement Mobile Money est enregistré, ImmoTopia génère automatiquement la quittance de loyer (PDF)
                      et l'envoie au locataire par email.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Vous n'avez rien à faire. La quittance est conforme, complète, et archivée automatiquement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      États de compte en temps réel
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Chaque locataire dispose d'un état de compte mis à jour en temps réel : loyers payés, impayés, acomptes, soldes.
                      Vous et le locataire avez la même vision.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Fini les litiges sur "j'ai payé" ou "vous n'avez pas payé". Tout est tracé et transparent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Bell className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Suivi des impayés avec relances automatiques
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      ImmoTopia détecte automatiquement les impayés et envoie des relances par SMS/email selon votre calendrier.
                      Dès qu'un paiement Mobile Money est reçu, la relance est annulée.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Vous ne relancez jamais un locataire qui a déjà payé. Vous gagnez du temps et préservez la relation client.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Reporting encaissements Mobile Money
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Visualisez en un clic tous les encaissements Mobile Money du jour, de la semaine, du mois.
                      Filtrez par bien, par locataire, par opérateur (Orange Money, MTN, Moov, Wave).
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Exportez les données pour votre comptabilité ou vos reportings propriétaires.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Smartphone className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Intégration Orange Money, MTN, Moov, Wave
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      ImmoTopia s'intègre avec les principaux opérateurs Mobile Money en Côte d'Ivoire.
                      Les paiements sont rapprochés automatiquement grâce aux références.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Vous n'avez plus à saisir manuellement les paiements. Tout est automatisé.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="group rounded-lg bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Smartphone className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Paiements Mobile Money
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Découvrez comment ImmoTopia gère les paiements Mobile Money pour loyers et charges
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/gestion-locative-cote-divoire"
                className="group rounded-lg bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Building2 className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      Gestion locative
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Gérez vos biens, contrats, locataires et encaissements en un seul outil
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/logiciel-syndic-copropriete-cote-divoire"
                className="group rounded-lg bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      Syndic de copropriété
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Gérez les charges, appels de fonds et paiements Mobile Money pour vos copropriétés
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                className="group rounded-lg bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <BarChart3 className="h-8 w-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      Tableaux de bord & KPI
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Suivez vos encaissements, impayés et performance en temps réel
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Prêt à sécuriser vos paiements Mobile Money ?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Découvrez comment ImmoTopia automatise et sécurise vos encaissements loyers et charges
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact?demo=true" className="flex items-center gap-2">
                  Demander une démo gratuite
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Link href="/tarifs">
                  Voir les tarifs
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-blue-100">
              Essai gratuit 14 jours • Sans engagement • Support en français
            </p>
          </div>
        </section>
      </article>
    </>
  );
}

