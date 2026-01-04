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
  Download
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Réduire les impayés de loyers en Côte d'Ivoire : méthodes & checklist | ImmoTopia",
    description:
      "Guide complet pour réduire les impayés de loyers en Côte d'Ivoire : sélection, échéances, relances, preuves, paiements Mobile Money et reporting. Checklist opérationnelle.",
    canonicalUrl: '/guides/reduire-impayes-loyers-cote-divoire',
    keywords: [
      'réduire impayés loyers Côte d\'Ivoire',
      'comment gérer impayés loyer',
      'relance loyer modèle',
      'retard paiement loyer',
      'suivi impayés gestion locative',
      'paiement loyer Mobile Money',
      'quittance loyer Côte d\'Ivoire',
      'gestion locative Abidjan',
      'impayés locataires',
      'recouvrement loyers',
    ],
  },
  '/guides/reduire-impayes-loyers-cote-divoire'
);

const faqItems = [
  {
    question: "À partir de quand faut-il relancer un locataire en retard ?",
    answer:
      "Idéalement dès J+1 après l'échéance. Une relance courtoise immédiate permet souvent de résoudre un simple oubli. Attendez J+3 pour une relance plus ferme, puis J+7 pour proposer un plan de paiement si nécessaire. Plus vous attendez, plus le recouvrement devient difficile.",
  },
  {
    question: "Comment garder une trace de tous les paiements et relances ?",
    answer:
      "Utilisez un système centralisé qui enregistre chaque paiement avec sa date, son montant, le bien concerné et le mois de loyer. Documentez également toutes les relances (date, canal, réponse). ImmoTopia automatise cette traçabilité avec un historique complet par locataire et par bien.",
  },
  {
    question: "Que faire si le locataire paie en plusieurs fois ?",
    answer:
      "Notez immédiatement le montant reçu et le reste dû. Confirmez par écrit (SMS ou email) le solde restant et la nouvelle échéance convenue. Émettez une quittance partielle pour le montant reçu et gardez une trace de l'accord de paiement échelonné.",
  },
  {
    question: "Mobile Money : comment éviter les paiements non identifiés ?",
    answer:
      "Exigez toujours une référence dans le libellé du paiement (ex: 'Loyer Villa A - Janvier 2025'). Avec ImmoTopia, les paiements Mobile Money sont automatiquement rapprochés grâce à l'intégration Orange Money, MTN Money et Wave, ce qui élimine les erreurs d'affectation.",
  },
  {
    question: "Quelle est la différence entre quittance et état de compte ?",
    answer:
      "La quittance est un document officiel qui atteste du paiement d'un loyer pour un mois donné. L'état de compte est un relevé global qui liste tous les paiements et impayés d'un locataire sur une période. Les deux sont complémentaires : la quittance pour le locataire, l'état de compte pour votre suivi.",
  },
  {
    question: "Comment savoir quels biens génèrent le plus d'impayés ?",
    answer:
      "Utilisez un tableau de bord qui affiche le taux d'impayés par bien, par quartier ou par type de propriété. ImmoTopia propose des rapports détaillés qui vous permettent d'identifier rapidement les biens problématiques et d'ajuster votre stratégie de gestion.",
  },
  {
    question: "ImmoTopia peut-il vraiment aider à réduire les impayés ?",
    answer:
      "Oui, en automatisant les relances, en facilitant les paiements Mobile Money, en générant automatiquement les quittances et en offrant une vision claire des impayés via des tableaux de bord. L'automatisation réduit les oublis et accélère le recouvrement, tandis que la traçabilité renforce votre position en cas de litige.",
  },
  {
    question: "Faut-il toujours demander une caution avant la location ?",
    answer:
      "C'est fortement recommandé selon les pratiques locales et votre accord avec le propriétaire. Une caution (généralement 2 à 3 mois de loyer) offre une sécurité en cas d'impayés ou de dégradations. Assurez-vous que les conditions de caution sont clairement mentionnées dans le contrat de bail.",
  },
];

export default function ReduireImpayesLoyersPage() {
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
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                <Shield className="h-4 w-4" />
                Guide opérationnel
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Comment réduire les impayés de loyers en Côte d'Ivoire
              </h1>
              
              <p className="mb-8 text-xl text-gray-700 md:text-2xl">
                Une méthode simple, opérationnelle, applicable dès ce mois-ci. Découvrez{' '}
                <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  notre module de gestion locative
                </Link>
                {' '}et{' '}
                <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  notre solution de paiement Mobile Money
                </Link>
                .
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                >
                  <Link href="/contact?demo=true" className="flex items-center gap-2">
                    Demander une démo (suivi impayés)
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2"
                >
                  <Link href="/gestion-locative-cote-divoire">
                    Voir la gestion locative
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
                Les impayés de loyers sont l'une des principales préoccupations des gestionnaires immobiliers,
                agences et propriétaires bailleurs en Côte d'Ivoire. Pourtant, la majorité des retards de paiement
                peuvent être évités avec un <strong>process simple et rigoureux</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Ce guide vous donne une méthode opérationnelle, sans conseil juridique, pour <strong>prévenir,
                détecter et gérer les impayés</strong> efficacement. Vous y trouverez des scripts de relance
                prêts à l'emploi, une checklist complète et des bonnes pratiques adaptées au contexte ivoirien.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi les impayés arrivent */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi les impayés arrivent (sans juger)
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Manque de process</h3>
                </div>
                <p className="text-gray-600">
                  Pas de procédure claire pour le suivi des paiements, les relances ou la documentation.
                  Chaque cas est géré différemment, ce qui crée des oublis.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Échéance floue</h3>
                </div>
                <p className="text-gray-600">
                  Le locataire ne sait pas exactement quand payer (le 1er ? le 5 ? le 10 ?).
                  L'absence de date précise favorise les retards.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Preuves insuffisantes</h3>
                </div>
                <p className="text-gray-600">
                  Pas de quittances systématiques, pas d'état de compte régulier.
                  En cas de litige, difficile de prouver qui a payé quoi et quand.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Relances tardives</h3>
                </div>
                <p className="text-gray-600">
                  On attend 15 ou 30 jours avant de relancer. À ce stade, le locataire a déjà
                  d'autres priorités et le recouvrement devient plus difficile.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Paiement non simplifié</h3>
                </div>
                <p className="text-gray-600">
                  Le locataire doit se déplacer pour payer en espèces ou faire un virement compliqué.
                  Plus c'est difficile, plus il y a de retards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* La méthode en 5 piliers */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl text-center">
              La méthode en 5 piliers
            </h2>

            <div className="space-y-8">
              {/* Pilier 1 */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-2 border-blue-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cadrer (contrat + échéance claire)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Dès la signature du bail, fixez une <strong>date d'échéance précise</strong> (ex: le 5 de chaque mois).
                  Mentionnez-la clairement dans le contrat et rappelez-la au locataire lors de la remise des clés.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Contrat signé avec date d'échéance explicite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Montant du loyer et des charges détaillé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Modalités de paiement (Mobile Money, virement, espèces)</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 2 */}
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border-2 border-green-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tracer (paiements rattachés au mois)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Chaque paiement doit être <strong>enregistré immédiatement</strong> avec le bien, le mois concerné,
                  le montant et le mode de paiement. Cela évite les confusions et facilite le suivi.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Référence unique pour chaque paiement (ex: "Villa A - Janvier 2025")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Quittance générée automatiquement après chaque paiement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Historique complet accessible en un clic</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 3 */}
              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 border-2 border-orange-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Relancer tôt (J+1, J+3, J+7...)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Ne laissez jamais passer plus de 24h après l'échéance sans relancer. Une relance précoce
                  montre votre sérieux et permet souvent de résoudre un simple oubli.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>J+1</strong> : Relance courtoise (SMS ou appel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>J+3</strong> : Relance plus ferme (email + SMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>J+7</strong> : Proposition de plan de paiement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>J+15</strong> : Relance finale avant escalade</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 4 */}
              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Documenter (preuves, quittances, états de compte)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Gardez une trace écrite de <strong>tout</strong> : paiements, relances, accords verbaux,
                  promesses de paiement. En cas de litige, ces documents sont votre meilleure protection.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Quittance pour chaque paiement reçu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>État de compte mensuel envoyé au locataire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Historique des relances (date, canal, réponse)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Accords de paiement échelonné par écrit</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 5 */}
              <div className="rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 p-8 border-2 border-teal-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-lg">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Piloter (tableau de bord impayés)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Ayez une <strong>vision globale</strong> de vos impayés : quels biens ? quels locataires ?
                  quel montant total ? Cela vous permet de prioriser vos actions et d'identifier les tendances.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Liste des impayés en cours (bien, locataire, montant, ancienneté)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Taux d'impayés par bien ou par quartier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Évolution mensuelle des encaissements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Alertes automatiques pour les retards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Avant la location : Prévention */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Avant la location : Prévention
            </h2>

            <div className="rounded-xl bg-white p-8 shadow-md border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                La meilleure façon de réduire les impayés est de <strong>bien sélectionner vos locataires</strong>
                et de poser un cadre clair dès le départ.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Dossier locataire : informations à demander</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pièce d'identité (CNI, passeport, attestation d'identité)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Justificatif de revenus (bulletin de salaire, attestation d'employeur, relevé bancaire)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Coordonnées professionnelles et personnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Références de précédents bailleurs (si possible)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Coordonnées d'une personne à contacter en cas d'urgence</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Caution et garantie</h3>
              <p className="text-gray-700 mb-4">
                Selon les pratiques locales et votre accord avec le propriétaire, demandez une caution
                (généralement 2 à 3 mois de loyer). Mentionnez clairement dans le contrat :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Le montant de la caution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Les conditions de restitution (état des lieux, solde de tout compte)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Les cas où la caution peut être retenue (dégradations, impayés)</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Règles de paiement</h3>
              <p className="text-gray-700 mb-4">
                Expliquez clairement au locataire :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">La date d'échéance (ex: le 5 de chaque mois)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Les moyens de paiement acceptés (Mobile Money, virement, espèces)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">La référence à mentionner lors du paiement (ex: "Villa A - Janvier 2025")</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Le délai pour recevoir la quittance (immédiat si paiement Mobile Money)</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">État des lieux bien fait</h3>
              <p className="text-gray-700">
                Un état des lieux détaillé et contradictoire (avec photos) protège les deux parties.
                Il permet d'éviter les litiges sur les dégradations et facilite la restitution de la caution.
              </p>
            </div>
          </div>
        </section>

        {/* Pendant le mois : Process de paiement */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pendant le mois : Process de paiement
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Bell className="h-6 w-6 text-blue-600" />
                  Rappel avant échéance (J-3)
                </h3>
                <p className="text-gray-700">
                  Envoyez un rappel courtois 3 jours avant l'échéance. Cela montre votre professionnalisme
                  et permet au locataire de s'organiser.
                </p>
                <div className="mt-4 rounded-lg bg-white p-4 text-sm text-gray-700 font-mono border border-blue-200">
                  "Bonjour [Nom], petit rappel : le loyer de [Bien] pour le mois de [Mois] est dû le [Date].
                  Vous pouvez payer par Mobile Money au [Numéro] avec la référence '[Bien] - [Mois]'. Merci !"
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-green-600" />
                  Paiement Mobile Money / virement / cash
                </h3>
                <p className="text-gray-700 mb-4">
                  Facilitez au maximum le paiement. Le Mobile Money (Orange Money, MTN Money, Wave) est
                  particulièrement adapté en Côte d'Ivoire : rapide, traçable, et sans déplacement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Communiquez clairement le numéro Mobile Money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Exigez toujours une référence dans le libellé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Confirmez la réception du paiement par SMS ou email</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-purple-600" />
                  Toujours exiger une référence (bien + mois)
                </h3>
                <p className="text-gray-700">
                  C'est <strong>crucial</strong> pour éviter les paiements non identifiés. Demandez au locataire
                  de toujours mentionner le bien et le mois dans le libellé du paiement.
                </p>
                <div className="mt-4 rounded-lg bg-white p-4 text-sm text-gray-700 font-mono border border-purple-200">
                  Exemple : "Villa A - Janvier 2025" ou "Appt B2 - Fév 2025"
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-6 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                  Mettre à jour immédiatement le statut
                </h3>
                <p className="text-gray-700">
                  Dès réception du paiement, mettez à jour votre système (Excel, logiciel, etc.) et générez
                  la quittance. Ne laissez jamais traîner cette tâche : c'est la base de votre traçabilité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scripts de relance */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Scripts de relance (prêts à copier)
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Voici des modèles de messages que vous pouvez adapter selon votre ton et votre relation
              avec le locataire. L'objectif est d'être <strong>ferme mais courtois</strong>, factuel et professionnel.
            </p>

            <div className="space-y-6">
              {/* Relance J+1 */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Relance J+1 (courtoise)</h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    Ton : Amical
                  </span>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 text-gray-700 border border-gray-200">
                  <p className="mb-2 font-semibold text-sm text-gray-500">SMS ou WhatsApp :</p>
                  <p className="italic">
                    "Bonjour [Nom], j'espère que vous allez bien. Je constate que le loyer de [Bien]
                    pour le mois de [Mois] n'a pas encore été reçu (échéance : [Date]). Pouvez-vous
                    me confirmer que tout va bien de votre côté ? Merci et bonne journée !"
                  </p>
                </div>
              </div>

              {/* Relance J+3 */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Relance J+3 (plus ferme, factuelle)</h3>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                    Ton : Professionnel
                  </span>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 text-gray-700 border border-gray-200">
                  <p className="mb-2 font-semibold text-sm text-gray-500">Email ou SMS :</p>
                  <p className="italic">
                    "Bonjour [Nom], je vous relance concernant le loyer de [Bien] pour le mois de [Mois],
                    d'un montant de [Montant] FCFA, qui était dû le [Date]. À ce jour, nous n'avons pas
                    enregistré de paiement. Merci de régulariser votre situation dans les plus brefs délais.
                    Pour tout paiement Mobile Money, utilisez la référence '[Bien] - [Mois]'. Cordialement."
                  </p>
                </div>
              </div>

              {/* Relance J+7 */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Relance J+7 (proposition de plan)</h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    Ton : Constructif
                  </span>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 text-gray-700 border border-gray-200">
                  <p className="mb-2 font-semibold text-sm text-gray-500">Email ou appel téléphonique :</p>
                  <p className="italic">
                    "Bonjour [Nom], le loyer de [Bien] pour le mois de [Mois] ([Montant] FCFA) est en retard
                    depuis 7 jours. Je comprends que des difficultés peuvent survenir. Si vous rencontrez
                    un problème temporaire, nous pouvons discuter d'un échéancier de paiement. Merci de me
                    contacter rapidement pour trouver une solution. Cordialement."
                  </p>
                </div>
              </div>

              {/* Relance finale */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Relance finale (prudent, sans menace)</h3>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                    Ton : Ferme
                  </span>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 text-gray-700 border border-gray-200">
                  <p className="mb-2 font-semibold text-sm text-gray-500">Email recommandé :</p>
                  <p className="italic">
                    "Bonjour [Nom], malgré nos relances précédentes, le loyer de [Bien] pour le mois de [Mois]
                    ([Montant] FCFA) demeure impayé. Nous vous demandons de régulariser votre situation
                    sous 48 heures. À défaut, nous serons contraints d'examiner les options prévues par le
                    contrat de bail. Nous restons disponibles pour échanger. Cordialement."
                  </p>
                </div>
                <div className="mt-4 rounded-lg bg-yellow-50 p-4 border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>⚠️ Important :</strong> Ne mentionnez jamais de procédure juridique précise
                    sans avoir consulté un professionnel du droit. Restez factuel et professionnel.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-blue-50 p-6 border-2 border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Conseil pratique</h3>
              <p className="text-gray-700">
                Gardez toujours une trace de vos relances (date, canal, contenu). Si vous utilisez WhatsApp
                ou SMS, faites des captures d'écran. Avec ImmoTopia, toutes les relances sont automatiquement
                enregistrées dans l'historique du locataire.
              </p>
            </div>
          </div>
        </section>

        {/* Paiement partiel */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Que faire en cas de paiement partiel
            </h2>

            <div className="rounded-xl bg-white p-8 shadow-md border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                Un locataire peut parfois payer une partie du loyer seulement. Voici comment gérer cette situation :
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Noter le reste dû</h3>
                    <p className="text-gray-700">
                      Enregistrez immédiatement le montant reçu et calculez le solde restant.
                      Exemple : Loyer 150 000 FCFA, reçu 100 000 FCFA → reste dû 50 000 FCFA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Confirmer par écrit</h3>
                    <p className="text-gray-700 mb-3">
                      Envoyez un message au locataire pour confirmer la réception du paiement partiel
                      et rappeler le solde restant :
                    </p>
                    <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-700 border border-gray-200 italic">
                      "Bonjour [Nom], nous avons bien reçu votre paiement de 100 000 FCFA pour le loyer
                      de [Bien] - [Mois]. Il reste un solde de 50 000 FCFA à régler. Merci de nous
                      indiquer quand vous pourrez compléter ce paiement."
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Proposer un échéancier (prudent)</h3>
                    <p className="text-gray-700">
                      Si le locataire ne peut pas payer le solde immédiatement, proposez un plan de paiement
                      écrit avec des dates précises. Exemple : 25 000 FCFA le 15 et 25 000 FCFA le 25.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Émettre une quittance partielle</h3>
                    <p className="text-gray-700">
                      Générez une quittance pour le montant reçu en précisant "Paiement partiel - Solde restant : [Montant]".
                      Cela évite toute confusion future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist anti-impayés */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                La checklist "Anti-Impayés" (à imprimer)
              </h2>
              <p className="text-lg text-gray-700">
                Utilisez cette checklist pour chaque bien géré. Cochez les cases au fur et à mesure.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg border-2 border-green-200">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Checklist opérationnelle</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Imprimer
                </Button>
              </div>

              <div className="space-y-4">
                {/* Avant la location */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Avant la location
                  </h4>
                  <div className="space-y-2 ml-7">
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-700">Dossier locataire complet (CNI, justificatif revenus, références)</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-700">Contrat de bail signé avec date d'échéance claire</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-700">Caution versée et enregistrée (si applicable)</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-700">État des lieux d'entrée réalisé et signé</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-700">Modalités de paiement expliquées (Mobile Money, virement, etc.)</span>
                    </label>
                  </div>
                </div>

                {/* Chaque mois */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Bell className="h-5 w-5 text-blue-600" />
                    Chaque mois
                  </h4>
                  <div className="space-y-2 ml-7">
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-gray-700">Rappel envoyé J-3 avant l'échéance</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-gray-700">Paiement reçu avec référence (bien + mois)</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-gray-700">Paiement enregistré dans le système</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-gray-700">Quittance générée et envoyée au locataire</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-gray-700">État de compte mensuel mis à jour</span>
                    </label>
                  </div>
                </div>

                {/* En cas de retard */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    En cas de retard
                  </h4>
                  <div className="space-y-2 ml-7">
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <span className="text-gray-700">Relance J+1 (courtoise) envoyée</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <span className="text-gray-700">Relance J+3 (ferme) envoyée</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <span className="text-gray-700">Relance J+7 (proposition plan) envoyée</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <span className="text-gray-700">Toutes les relances documentées (date, canal, réponse)</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <span className="text-gray-700">Accord de paiement échelonné formalisé par écrit (si applicable)</span>
                    </label>
                  </div>
                </div>

                {/* Suivi global */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    Suivi global
                  </h4>
                  <div className="space-y-2 ml-7">
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="text-gray-700">Tableau de bord impayés consulté chaque semaine</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="text-gray-700">Taux d'encaissement mensuel calculé</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="text-gray-700">Biens à problèmes identifiés et analysés</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="text-gray-700">Rapport mensuel envoyé aux propriétaires</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-green-50 p-4 border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>💡 Astuce :</strong> Imprimez cette checklist et affichez-la dans votre bureau.
                  Cochez les cases pour chaque bien géré. Avec ImmoTopia, la plupart de ces tâches sont automatisées.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ImmoTopia automatise ce process */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl text-center">
              Comment ImmoTopia automatise ce process
            </h2>

            <p className="text-xl text-gray-700 text-center mb-12">
              Toutes les bonnes pratiques de ce guide sont <strong>intégrées nativement</strong> dans ImmoTopia.
              Voici comment la plateforme vous aide à réduire les impayés :
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border-2 border-blue-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-blue-600 p-3">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Échéances + loyers</h3>
                </div>
                <p className="text-gray-700">
                  Définissez une date d'échéance pour chaque bien. ImmoTopia génère automatiquement
                  les loyers à percevoir chaque mois et vous alerte des retards.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-2 border-green-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-green-600 p-3">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Paiements Mobile Money rattachés au mois</h3>
                </div>
                <p className="text-gray-700">
                  Intégration native Orange Money, MTN Money et Wave. Les paiements sont automatiquement
                  rapprochés du bon bien et du bon mois grâce à la référence.
                </p>
                <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="mt-3 inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800">
                  En savoir plus sur les paiements Mobile Money
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 border-2 border-purple-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-purple-600 p-3">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Quittances automatiques</h3>
                </div>
                <p className="text-gray-700">
                  Dès qu'un paiement est enregistré, ImmoTopia génère la quittance conforme et l'envoie
                  automatiquement au locataire par email. Zéro effort, zéro oubli.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-6 border-2 border-orange-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-orange-600 p-3">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Liste impayés + relances</h3>
                </div>
                <p className="text-gray-700">
                  Tableau de bord dédié aux impayés avec filtres (bien, locataire, ancienneté).
                  Relances automatiques ou manuelles avec historique complet.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 p-6 border-2 border-teal-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-teal-600 p-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Reporting encaissement</h3>
                </div>
                <p className="text-gray-700">
                  Taux d'encaissement, évolution mensuelle, biens à problèmes : tout est visible
                  en un coup d'œil pour piloter votre activité.
                </p>
                <Link href="/tableaux-de-bord-kpi-immobilier-cote-divoire" className="mt-3 inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800">
                  Découvrir les tableaux de bord
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 border-2 border-indigo-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-indigo-600 p-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Traçabilité complète</h3>
                </div>
                <p className="text-gray-700">
                  Historique complet par locataire : paiements, relances, quittances, états de compte.
                  Tout est centralisé et accessible en un clic.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Découvrez comment ImmoTopia peut transformer votre gestion locative :
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Link href="/gestion-locative-cote-divoire" className="flex items-center gap-2">
                    Voir la gestion locative
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2"
                >
                  <Link href="/logiciel-immobilier-cote-divoire">
                    Découvrir ImmoTopia
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl text-center">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="group rounded-xl bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900 list-none">
                    <span className="text-lg">{item.question}</span>
                    <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Prêt à réduire vos impayés ?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Découvrez comment ImmoTopia peut vous aider à automatiser votre gestion locative
              et à améliorer votre taux d'encaissement.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                <Link href="/contact?demo=true" className="flex items-center gap-2">
                  Demander une démo
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Link href="/paiement-loyer-charges-mobile-money-cote-divoire">
                  Paiements Mobile Money
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-blue-100">
              Sans engagement · Configuration rapide · Support inclus
            </p>
          </div>
        </section>
      </article>
    </>
  );
}

