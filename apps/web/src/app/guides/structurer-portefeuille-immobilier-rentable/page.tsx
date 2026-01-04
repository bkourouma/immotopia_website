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
  BarChart3,
  Building2,
  DollarSign,
  Calendar,
  ClipboardCheck,
  Target,
  Wrench,
  AlertCircle,
  Download,
  Eye,
  PieChart
} from 'lucide-react';
import { generateFAQSchema, generateArticleSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Structurer un portefeuille immobilier rentable | Côte d'Ivoire & Afrique",
    description:
      "Méthodes pour structurer, suivre et piloter un portefeuille immobilier rentable : loyers, impayés, maintenance, reporting. Guide complet pour investisseurs et bailleurs multi-biens.",
    canonicalUrl: '/guides/structurer-portefeuille-immobilier-rentable',
    keywords: [
      'portefeuille immobilier rentable',
      'gestion portefeuille immobilier',
      'investissement immobilier Côte d\'Ivoire',
      'rentabilité immobilière',
      'suivi portefeuille locatif',
      'pilotage patrimoine immobilier',
      'reporting immobilier',
      'gestion multi-biens',
      'optimiser rentabilité locative',
      'tableau de bord immobilier',
    ],
  },
  '/guides/structurer-portefeuille-immobilier-rentable'
);

const faqItems = [
  {
    question: "Quelle est la différence entre rentabilité brute et rentabilité nette ?",
    answer:
      "La rentabilité brute se calcule en divisant les loyers annuels par le prix d'achat du bien (loyers annuels / prix d'achat × 100). La rentabilité nette prend en compte tous les coûts : charges, impôts, maintenance, assurances, vacance locative, impayés. C'est la rentabilité nette qui reflète la vraie performance de votre portefeuille.",
  },
  {
    question: "Comment savoir si mon portefeuille est bien diversifié ?",
    answer:
      "Un portefeuille bien diversifié répartit les risques sur plusieurs axes : types de biens (appartements, villas, commerces), quartiers ou villes différentes, gammes de loyers variées, et profils de locataires diversifiés. Évitez de concentrer plus de 30% de vos revenus locatifs sur un seul bien ou un seul quartier.",
  },
  {
    question: "À quelle fréquence dois-je analyser la performance de mon portefeuille ?",
    answer:
      "Idéalement, consultez vos indicateurs clés (taux d'occupation, impayés, rentabilité) chaque mois. Faites une analyse approfondie trimestrielle pour identifier les tendances et ajuster votre stratégie. Une revue annuelle complète permet de prendre des décisions d'arbitrage (vendre, acheter, rénover).",
  },
  {
    question: "Quels sont les coûts cachés qui réduisent la rentabilité ?",
    answer:
      "Les principaux coûts cachés sont : la vacance locative (périodes sans locataire), les impayés non provisionnés, les petites réparations fréquentes, les frais de gestion si vous déléguez, les charges non récupérables, et l'obsolescence (travaux de mise aux normes). Un bon reporting les rend visibles.",
  },
  {
    question: "Comment un ERP immobilier aide-t-il à piloter un portefeuille ?",
    answer:
      "Un ERP centralise toutes les données (biens, contrats, loyers, charges, maintenance) et automatise le suivi. Vous obtenez des tableaux de bord en temps réel sur la rentabilité par bien, les impayés, les échéances de contrats, et les coûts de maintenance. Cela vous permet de prendre des décisions basées sur des données fiables, pas sur des estimations.",
  },
  {
    question: "Quel est le taux d'impayés acceptable pour un portefeuille locatif ?",
    answer:
      "Un taux d'impayés inférieur à 3% du total des loyers annuels est considéré comme bon. Entre 3% et 5%, c'est acceptable mais nécessite une vigilance accrue. Au-delà de 5%, il faut revoir votre processus de sélection des locataires et votre système de relances. Un ERP permet de suivre ce taux en temps réel.",
  },
  {
    question: "Comment provisionner pour la maintenance et les travaux ?",
    answer:
      "Provisionnez au minimum 10% des loyers annuels pour la maintenance courante et les petits travaux. Pour les gros travaux (toiture, plomberie, électricité), créez une réserve séparée de 5% supplémentaires. Ajustez ces pourcentages selon l'âge et l'état de vos biens. Un bon reporting vous montre si vos provisions sont suffisantes.",
  },
  {
    question: "Dois-je gérer moi-même ou déléguer à une agence ?",
    answer:
      "Cela dépend de votre temps disponible et de la taille de votre portefeuille. Pour 1-3 biens, la gestion directe avec un bon ERP est souvent plus rentable. Au-delà de 5 biens, déléguer à une agence ou embaucher un gestionnaire peut être pertinent. L'important est de garder le contrôle via un reporting régulier, même en cas de délégation.",
  },
];

export default function StructurerPortefeuilleImmobilierPage() {
  const faqSchema = generateFAQSchema({ 
    questions: faqItems.map(item => ({
      question: item.question,
      answer: item.answer,
    }))
  });

  const articleSchema = generateArticleSchema({
    headline: "Structurer un portefeuille immobilier rentable en Côte d'Ivoire et en Afrique",
    description: "Guide complet pour structurer, suivre et piloter un portefeuille immobilier rentable : méthodes, indicateurs clés, et outils de pilotage.",
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'ImmoTopia',
      url: 'https://immotopia.immo-annonces.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ImmoTopia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://immotopia.immo-annonces.fr/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://immotopia.immo-annonces.fr/guides/structurer-portefeuille-immobilier-rentable',
    },
  });

  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={articleSchema} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 md:py-24 text-white">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-6 flex items-center gap-2 text-blue-100">
              <Building2 className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Guide Premium</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Structurer un portefeuille immobilier rentable
            </h1>

            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Méthodes concrètes pour piloter vos investissements locatifs, maîtriser vos flux financiers
              et maximiser votre rentabilité en Côte d&apos;Ivoire et en Afrique. Découvrez{' '}
              <Link href="/gestion-locative-cote-divoire" className="font-semibold text-white hover:underline">
                notre gestion locative
              </Link>
              {' '}et{' '}
              <Link href="/tableaux-de-bord-kpi-immobilier-cote-divoire" className="font-semibold text-white hover:underline">
                nos tableaux de bord KPI
              </Link>
              .
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Target className="h-5 w-5" />
                <span className="font-semibold">Investisseurs multi-biens</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                <BarChart3 className="h-5 w-5" />
                <span className="font-semibold">Reporting & pilotage</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">Optimisation rentabilité</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Posséder plusieurs biens immobiliers en location est une excellente stratégie de création de patrimoine.
                Mais la <strong>rentabilité réelle</strong> d'un portefeuille ne se limite pas au montant des loyers encaissés.
                Elle dépend de votre capacité à <strong>structurer, suivre et piloter</strong> l'ensemble de vos investissements
                de manière rigoureuse.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Ce guide s'adresse aux investisseurs et bailleurs qui gèrent plusieurs biens en Côte d'Ivoire ou en Afrique.
                Vous y découvrirez comment <strong>organiser vos données</strong>, maîtriser vos flux financiers, réduire les
                impayés, anticiper la maintenance, et prendre des décisions basées sur des <strong>indicateurs fiables</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Aucun chiffre inventé, aucune promesse irréaliste : uniquement des méthodes opérationnelles et des bonnes
                pratiques éprouvées par des gestionnaires professionnels.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Pourquoi la rentabilité ne se limite pas au loyer */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  1. Pourquoi la rentabilité ne se limite pas au loyer
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Beaucoup d'investisseurs calculent leur rentabilité en divisant simplement le loyer annuel par le prix d'achat.
                C'est la <strong>rentabilité brute</strong>, et elle ne reflète pas la réalité économique de votre portefeuille.
              </p>

              <div className="my-8 rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Les coûts qui réduisent votre rentabilité réelle</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Vacance locative :</strong>
                      <span className="text-gray-700"> Périodes sans locataire entre deux baux (1 à 3 mois en moyenne)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Impayés :</strong>
                      <span className="text-gray-700"> Loyers non perçus, même partiellement</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Maintenance courante :</strong>
                      <span className="text-gray-700"> Petites réparations, entretien, remplacement d'équipements</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Gros travaux :</strong>
                      <span className="text-gray-700"> Toiture, plomberie, électricité (à provisionner)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Charges non récupérables :</strong>
                      <span className="text-gray-700"> Taxe foncière, assurance propriétaire, frais de gestion</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Frais administratifs :</strong>
                      <span className="text-gray-700"> Rédaction de baux, états des lieux, relances</span>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                La <strong>rentabilité nette</strong> prend en compte tous ces coûts. C'est elle qui détermine si votre
                portefeuille génère réellement du cash-flow positif ou si vous travaillez à perte sans le savoir.
              </p>

              <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 Règle d'or
                </p>
                <p className="text-gray-700">
                  Ne vous fiez jamais uniquement au montant des loyers. Suivez vos coûts réels mois par mois pour connaître
                  votre rentabilité nette. Un bien avec un loyer élevé mais des impayés fréquents peut être moins rentable
                  qu'un bien avec un loyer modéré mais un locataire fiable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Erreurs fréquentes des bailleurs africains */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-orange-600 p-3">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  2. Erreurs fréquentes des bailleurs africains
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Voici les erreurs les plus courantes qui empêchent les bailleurs de maximiser la rentabilité de leur portefeuille :
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-red-50 p-6 border-2 border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Gestion sur Excel ou papier</h3>
                      <p className="text-gray-700">
                        Beaucoup de bailleurs utilisent des fichiers Excel dispersés ou des cahiers manuscrits. Résultat :
                        données incomplètes, erreurs de calcul, impossibilité de suivre les impayés en temps réel, et perte
                        de temps considérable pour produire un simple état des lieux financier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-red-50 p-6 border-2 border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Absence de suivi des échéances</h3>
                      <p className="text-gray-700">
                        Oublier une fin de bail, un renouvellement de contrat, ou une révision de loyer coûte cher. Sans
                        système d'alerte automatique, vous risquez de laisser passer des opportunités d'augmentation de loyer
                        ou de vous retrouver avec un locataire sans contrat valide.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-red-50 p-6 border-2 border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Pas de provisionnement pour la maintenance</h3>
                      <p className="text-gray-700">
                        Beaucoup de bailleurs considèrent les loyers comme du revenu disponible immédiatement. Quand une
                        réparation importante survient (fuite, panne électrique, toiture), ils doivent puiser dans leur
                        épargne personnelle ou s'endetter. Un bon portefeuille provisionne automatiquement 10-15% des loyers
                        pour la maintenance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-red-50 p-6 border-2 border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Relances d'impayés trop tardives ou inexistantes</h3>
                      <p className="text-gray-700">
                        Attendre 2-3 mois avant de relancer un locataire en retard réduit drastiquement vos chances de
                        recouvrement. Les impayés doivent être détectés dès le 1er jour de retard et traités avec un
                        processus rigoureux et documenté.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-red-50 p-6 border-2 border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Aucun reporting consolidé</h3>
                      <p className="text-gray-700">
                        Sans vue d'ensemble de votre portefeuille, vous ne savez pas quels biens sont les plus rentables,
                        lesquels génèrent le plus d'impayés, ou si votre stratégie globale fonctionne. Vous pilotez à l'aveugle.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-red-50 p-6 border-2 border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">6</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Manque de diversification</h3>
                      <p className="text-gray-700">
                        Concentrer tous vos biens dans le même quartier, le même type de logement, ou la même gamme de loyer
                        augmente votre risque. Si le quartier se dégrade ou si la demande baisse pour ce type de bien, tout
                        votre portefeuille en souffre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-6 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  ⚠️ Conséquence
                </p>
                <p className="text-gray-700">
                  Ces erreurs cumulées peuvent transformer un portefeuille théoriquement rentable en source de stress et de
                  pertes financières. La bonne nouvelle : elles sont toutes évitables avec une organisation rigoureuse et
                  les bons outils.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Structurer ses biens */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-indigo-600 p-3">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  3. Structurer ses biens (données, contrats, échéances)
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La première étape pour piloter un portefeuille rentable est de <strong>centraliser et structurer</strong>
                toutes les informations relatives à vos biens. Voici ce que vous devez absolument avoir pour chaque bien :
              </p>

              <div className="space-y-6">
                <div className="rounded-lg border-l-4 border-indigo-500 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    📋 Fiche bien complète
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Adresse complète, type de bien (appartement, villa, commerce), surface</li>
                    <li>Nombre de pièces, équipements inclus (climatisation, cuisine équipée, etc.)</li>
                    <li>Date d'acquisition, prix d'achat, montant des travaux initiaux</li>
                    <li>Photos du bien (état initial et après travaux)</li>
                    <li>Documents administratifs : titre foncier, permis de construire, certificat de conformité</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-indigo-500 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    📄 Contrats et locataires
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Bail de location signé (version PDF scannée + version papier)</li>
                    <li>Coordonnées complètes du locataire (téléphone, email, employeur)</li>
                    <li>Montant du loyer, charges, caution versée</li>
                    <li>Date de début et de fin de bail</li>
                    <li>État des lieux d'entrée (avec photos)</li>
                    <li>Pièces d'identité et justificatifs de revenus du locataire</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-indigo-500 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    📅 Échéances et alertes
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Date de paiement du loyer (généralement le 5 ou le 10 du mois)</li>
                    <li>Date de fin de bail (pour anticiper le renouvellement ou la recherche d'un nouveau locataire)</li>
                    <li>Date de révision annuelle du loyer (si prévue au contrat)</li>
                    <li>Échéances de paiement des charges (taxe foncière, assurance propriétaire)</li>
                    <li>Dates de maintenance préventive (révision climatisation, inspection toiture, etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 Astuce
                </p>
                <p className="text-gray-700">
                  Un ERP immobilier comme ImmoTopia centralise automatiquement toutes ces données et vous envoie des alertes
                  avant chaque échéance importante. Vous ne risquez plus d'oublier une fin de bail ou une révision de loyer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Maîtriser les flux financiers */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-600 p-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  4. Maîtriser les flux financiers
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Un portefeuille immobilier rentable génère des <strong>flux financiers positifs</strong> : les revenus
                (loyers) doivent être supérieurs aux dépenses (charges, maintenance, impôts). Voici comment structurer
                votre suivi financier :
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-900">1. Compte bancaire dédié</h3>
                  </div>
                  <p className="text-gray-700">
                    Ouvrez un compte bancaire séparé pour votre activité locative. Tous les loyers y sont versés, toutes
                    les dépenses en sont prélevées. Cela simplifie considérablement votre comptabilité et vous permet de
                    voir en un coup d'œil si votre portefeuille est rentable.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-900">2. Suivi des encaissements</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Pour chaque bien, suivez mensuellement :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Loyer attendu vs loyer encaissé</li>
                    <li>Date de paiement (pour détecter les retards)</li>
                    <li>Mode de paiement (virement, Mobile Money, espèces)</li>
                    <li>Quittances émises et remises au locataire</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-900">3. Suivi des dépenses</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Catégorisez toutes vos dépenses pour identifier les postes les plus coûteux :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li><strong>Maintenance courante :</strong> petites réparations, entretien</li>
                    <li><strong>Gros travaux :</strong> rénovations, mises aux normes</li>
                    <li><strong>Charges non récupérables :</strong> taxe foncière, assurance</li>
                    <li><strong>Frais de gestion :</strong> honoraires d'agence, frais administratifs</li>
                    <li><strong>Provisions :</strong> réserve pour travaux futurs</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-900">4. Calcul du cash-flow mensuel</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Chaque mois, calculez votre cash-flow net :
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4 font-mono text-sm">
                    <p className="text-gray-800">Cash-flow net = Loyers encaissés - Dépenses du mois</p>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Si ce chiffre est positif, votre portefeuille génère du cash. S'il est négatif, vous devez identifier
                    rapidement la cause (impayés, travaux exceptionnels, vacance locative) et agir.
                  </p>
                </div>
              </div>

              <div className="my-6 rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  ✅ Bonne pratique
                </p>
                <p className="text-gray-700">
                  Automatisez au maximum les paiements de loyers (virement automatique, Mobile Money récurrent) pour réduire
                  les retards et simplifier votre suivi. ImmoTopia intègre nativement Orange Money, MTN Money et Wave pour
                  faciliter les encaissements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Réduire les impayés durablement */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-red-600 p-3">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  5. Réduire les impayés durablement
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Les impayés sont le principal ennemi de la rentabilité d'un portefeuille. Voici comment les minimiser :
              </p>

              <div className="space-y-6">
                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🎯 Sélection rigoureuse des locataires
                  </h3>
                  <p className="text-gray-700 mb-3">
                    La meilleure façon de réduire les impayés est de bien choisir vos locataires dès le départ :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Vérifiez les revenus (bulletins de salaire, attestation employeur)</li>
                    <li>Demandez des références de précédents bailleurs</li>
                    <li>Exigez une caution équivalente à 2-3 mois de loyer</li>
                    <li>Privilégiez les locataires dont le loyer représente maximum 30% de leurs revenus</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ⏰ Détection précoce des retards
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Mettez en place un système d'alerte automatique :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Alerte dès le 1er jour de retard (pas d'attente)</li>
                    <li>Relance automatique par SMS ou email</li>
                    <li>Escalade progressive : rappel amical → mise en demeure → procédure</li>
                    <li>Historique complet de toutes les relances (traçabilité)</li>
                  </ul>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    📞 Communication proactive
                  </h3>
                  <p className="text-gray-700">
                    Maintenez une relation de confiance avec vos locataires. Un locataire qui rencontre des difficultés
                    temporaires sera plus enclin à vous prévenir et à trouver une solution si vous avez établi une
                    communication ouverte. Proposez des échéanciers de paiement plutôt que de laisser la dette s'accumuler.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    📊 Suivi du taux d'impayés
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Calculez mensuellement votre taux d'impayés :
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4 font-mono text-sm">
                    <p className="text-gray-800">Taux d'impayés = (Loyers impayés / Loyers attendus) × 100</p>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Un taux inférieur à 3% est excellent. Entre 3% et 5%, c'est acceptable. Au-delà de 5%, vous devez
                    revoir votre processus de sélection et de relance.
                  </p>
                </div>
              </div>

              <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 Outil recommandé
                </p>
                <p className="text-gray-700">
                  ImmoTopia détecte automatiquement les impayés dès le 1er jour de retard et déclenche des relances
                  personnalisées par SMS ou email. Vous gardez un historique complet de chaque relance pour justifier
                  vos actions en cas de contentieux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Suivre la maintenance et les coûts cachés */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-600 p-3">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  6. Suivre la maintenance et les coûts cachés
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La maintenance est souvent sous-estimée par les bailleurs. Pourtant, elle représente un poste de dépense
                important qui peut faire basculer un portefeuille de rentable à déficitaire si elle n'est pas anticipée.
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <Wrench className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">Types de maintenance</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Maintenance préventive</h4>
                      <p className="text-gray-700">
                        Inspections régulières, entretien des équipements (climatisation, chauffe-eau), nettoyage des
                        gouttières, vérification de la plomberie et de l'électricité. Coût : 5-8% des loyers annuels.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Maintenance corrective</h4>
                      <p className="text-gray-700">
                        Réparations suite à une panne ou une dégradation : fuite d'eau, panne électrique, serrure cassée.
                        Coût : 5-10% des loyers annuels.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Gros travaux</h4>
                      <p className="text-gray-700">
                        Rénovation toiture, remplacement plomberie, mise aux normes électriques. Coût : variable, à
                        provisionner sur plusieurs années (5-10% des loyers annuels).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">Planification de la maintenance</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Créez un calendrier de maintenance préventive pour chaque bien :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Révision climatisation : tous les 6 mois</li>
                    <li>Inspection toiture : tous les ans (avant la saison des pluies)</li>
                    <li>Vérification plomberie : tous les ans</li>
                    <li>Peinture intérieure : tous les 3-5 ans</li>
                    <li>Peinture extérieure : tous les 5-7 ans</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">Provisionnement</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Mettez de côté chaque mois une partie des loyers pour la maintenance :
                  </p>
                  <div className="rounded-lg bg-purple-50 p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>10% des loyers :</strong> maintenance courante et petites réparations</li>
                      <li><strong>5% des loyers :</strong> réserve pour gros travaux</li>
                      <li><strong>Total : 15% des loyers</strong> à provisionner mensuellement</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Cette provision vous évite de puiser dans votre épargne personnelle en cas de réparation imprévue.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">Suivi des interventions</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Pour chaque intervention de maintenance, documentez :
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Date et nature de l'intervention</li>
                    <li>Prestataire (plombier, électricien, peintre)</li>
                    <li>Coût de l'intervention (main d'œuvre + matériaux)</li>
                    <li>Photos avant/après</li>
                    <li>Facture et garantie éventuelle</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Ce suivi vous permet d'identifier les biens qui coûtent le plus cher en maintenance et d'anticiper
                    les prochaines interventions.
                  </p>
                </div>
              </div>

              <div className="my-6 rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  🔧 Astuce
                </p>
                <p className="text-gray-700">
                  ImmoTopia vous permet de planifier la maintenance préventive, de suivre toutes les interventions avec
                  photos et factures, et de calculer automatiquement le coût de maintenance par bien. Vous savez ainsi
                  quels biens sont les plus coûteux à entretenir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reporting pour décision */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-3">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  7. Reporting pour décision (sans chiffres inventés)
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Un bon reporting vous donne une <strong>vue d'ensemble</strong> de votre portefeuille et vous aide à
                prendre des décisions éclairées : faut-il vendre un bien ? Augmenter les loyers ? Investir dans un
                nouveau bien ? Voici les indicateurs clés à suivre :
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <PieChart className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900">Indicateurs de performance globale</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Taux d'occupation :</strong> Pourcentage de biens loués vs biens vacants
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Rentabilité nette :</strong> (Loyers encaissés - Dépenses) / Valeur du portefeuille × 100
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Cash-flow mensuel :</strong> Loyers encaissés - Dépenses du mois
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Taux d'impayés :</strong> Loyers impayés / Loyers attendus × 100
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900">Indicateurs par bien</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Comparez la performance de chaque bien pour identifier les meilleurs et les moins performants :
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Rentabilité nette par bien :</strong> Permet de savoir quels biens sont les plus rentables
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Coût de maintenance par bien :</strong> Identifie les biens qui coûtent le plus cher à entretenir
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Taux d'impayés par bien :</strong> Révèle les biens ou quartiers problématiques
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Durée moyenne de vacance :</strong> Temps moyen entre deux locataires
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="mb-3 flex items-center gap-3">
                    <Eye className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900">Tableaux de bord recommandés</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📊 Tableau de bord mensuel</h4>
                      <p className="text-gray-700">
                        Vue d'ensemble du mois : loyers encaissés, impayés, dépenses, cash-flow net, taux d'occupation.
                      </p>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📈 Tableau de bord trimestriel</h4>
                      <p className="text-gray-700">
                        Analyse des tendances : évolution de la rentabilité, comparaison avec le trimestre précédent,
                        identification des biens sous-performants.
                      </p>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📅 Tableau de bord annuel</h4>
                      <p className="text-gray-700">
                        Bilan complet : rentabilité nette annuelle, coût total de maintenance, provisions constituées,
                        décisions d'arbitrage (vendre, acheter, rénover).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 Principe clé
                </p>
                <p className="text-gray-700">
                  Un bon reporting ne contient que des <strong>données réelles</strong>, pas des estimations ou des
                  projections optimistes. Basez vos décisions sur ce qui s'est réellement passé, pas sur ce que vous
                  espérez qu'il se passe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Comment un ERP aide à piloter un portefeuille */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-indigo-600 p-3">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  8. Comment un ERP immobilier aide à piloter un portefeuille
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Gérer un portefeuille immobilier sur Excel ou papier devient rapidement ingérable dès que vous dépassez
                3-5 biens. Un <strong>ERP immobilier</strong> (Enterprise Resource Planning) centralise toutes vos données
                et automatise les tâches répétitives. Voici comment :
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border-2 border-blue-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-blue-600 p-3">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Centralisation des données</h3>
                  </div>
                  <p className="text-gray-700">
                    Tous vos biens, contrats, locataires, paiements et interventions de maintenance dans une seule
                    plateforme. Plus besoin de chercher dans plusieurs fichiers Excel ou classeurs papier.
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-2 border-green-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-green-600 p-3">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Alertes automatiques</h3>
                  </div>
                  <p className="text-gray-700">
                    Notifications avant chaque échéance importante : fin de bail, révision de loyer, paiement de taxe
                    foncière, maintenance préventive. Vous ne risquez plus d'oublier une date critique.
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-6 border-2 border-orange-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-orange-600 p-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Suivi des impayés</h3>
                  </div>
                  <p className="text-gray-700">
                    Détection automatique des retards de paiement dès le 1er jour. Relances personnalisées par SMS ou
                    email. Historique complet de chaque relance pour justifier vos actions.
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 p-6 border-2 border-purple-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-purple-600 p-3">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Paiements Mobile Money</h3>
                  </div>
                  <p className="text-gray-700">
                    Intégration native avec Orange Money, MTN Money et Wave. Vos locataires paient directement depuis
                    leur téléphone, et les paiements sont automatiquement enregistrés dans le système.
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-red-50 to-pink-50 p-6 border-2 border-red-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-red-600 p-3">
                      <Wrench className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Gestion de la maintenance</h3>
                  </div>
                  <p className="text-gray-700">
                    Planification de la maintenance préventive, suivi des interventions avec photos et factures, calcul
                    automatique du coût de maintenance par bien.
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 p-6 border-2 border-cyan-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-cyan-600 p-3">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Reporting en temps réel</h3>
                  </div>
                  <p className="text-gray-700">
                    Tableaux de bord interactifs avec tous vos indicateurs clés : taux d'occupation, rentabilité nette,
                    impayés, cash-flow. Exportez vos rapports en PDF ou Excel en un clic.
                  </p>
                </div>
              </div>

              <div className="my-8 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Gain de temps et de sérénité</h3>
                <p className="text-lg text-indigo-100 mb-4">
                  Un ERP immobilier vous fait gagner <strong>plusieurs heures par semaine</strong> en automatisant les
                  tâches répétitives : génération de quittances, relances d'impayés, calcul de la rentabilité, suivi des
                  échéances.
                </p>
                <p className="text-lg text-indigo-100">
                  Vous passez moins de temps sur l'administratif et plus de temps sur ce qui compte vraiment :
                  <strong> développer votre portefeuille et optimiser votre rentabilité</strong>.
                </p>
              </div>

              <div className="my-6 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  🚀 ImmoTopia : ERP immobilier adapté à l'Afrique
                </p>
                <p className="text-gray-700">
                  ImmoTopia est conçu spécifiquement pour les bailleurs et gestionnaires immobiliers en Côte d'Ivoire et
                  en Afrique. Intégration Mobile Money native, interface en français, support local, et tarifs adaptés
                  aux réalités du marché africain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA ImmoTopia */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à structurer votre portefeuille immobilier ?
              </h2>
              <p className="text-xl text-blue-100">
                Découvrez comment ImmoTopia peut vous aider à piloter vos investissements locatifs avec sérénité.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300" />
                  <h3 className="text-lg font-bold">Centralisation complète</h3>
                </div>
                <p className="text-blue-100">
                  Tous vos biens, contrats, locataires et paiements dans une seule plateforme accessible 24/7.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300" />
                  <h3 className="text-lg font-bold">Automatisation intelligente</h3>
                </div>
                <p className="text-blue-100">
                  Relances d'impayés, alertes d'échéances, génération de quittances : tout est automatisé.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300" />
                  <h3 className="text-lg font-bold">Mobile Money intégré</h3>
                </div>
                <p className="text-blue-100">
                  Orange Money, MTN Money, Wave : vos locataires paient en un clic depuis leur téléphone.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300" />
                  <h3 className="text-lg font-bold">Reporting en temps réel</h3>
                </div>
                <p className="text-blue-100">
                  Tableaux de bord interactifs pour suivre votre rentabilité, vos impayés et votre cash-flow.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
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
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">
                  Demander une démo
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-lg text-gray-600">
                Réponses aux questions les plus courantes sur la gestion d'un portefeuille immobilier rentable.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="rounded-full bg-blue-100 text-blue-600 px-3 py-1 text-sm font-bold flex-shrink-0">
                      Q{index + 1}
                    </span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-12">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Conclusion : Piloter, pas subir
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Structurer un portefeuille immobilier rentable ne relève pas de la chance ou de l'intuition. C'est le
                résultat d'une <strong>organisation rigoureuse</strong>, d'un <strong>suivi méthodique</strong> et de
                <strong> décisions basées sur des données réelles</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Les bailleurs qui réussissent ne sont pas ceux qui possèdent le plus de biens, mais ceux qui
                <strong> maîtrisent leurs flux financiers</strong>, anticipent la maintenance, réduisent les impayés
                et prennent des décisions éclairées grâce à un reporting fiable.
              </p>

              <div className="my-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Les 3 piliers d'un portefeuille rentable
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Structuration des données</h4>
                      <p className="text-gray-700">
                        Centralisez toutes les informations (biens, contrats, échéances) dans un système unique et fiable.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Automatisation des tâches répétitives</h4>
                      <p className="text-gray-700">
                        Relances d'impayés, alertes d'échéances, génération de quittances : gagnez du temps et réduisez
                        les erreurs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-600 p-2 flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Reporting et pilotage</h4>
                      <p className="text-gray-700">
                        Suivez vos indicateurs clés en temps réel et prenez des décisions basées sur des données, pas
                        sur des estimations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Si vous gérez actuellement votre portefeuille sur Excel ou papier, vous perdez probablement plusieurs
                heures par semaine sur des tâches administratives qui pourraient être automatisées. Pire encore, vous
                prenez peut-être des décisions sans avoir une vision claire de votre rentabilité réelle.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Un ERP immobilier comme <strong>ImmoTopia</strong> vous permet de passer du mode "gestion de crise" au
                mode "pilotage stratégique". Vous savez en temps réel où vous en êtes, quels biens performent le mieux,
                et où concentrer vos efforts pour maximiser votre rentabilité.
              </p>

              <div className="my-8 rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                <p className="text-gray-800 font-semibold mb-2">
                  ✅ Prochaine étape
                </p>
                <p className="text-gray-700 mb-4">
                  Commencez par structurer les données de vos biens actuels : créez une fiche complète pour chaque bien
                  avec toutes les informations essentielles (contrat, locataire, échéances, historique de maintenance).
                </p>
                <p className="text-gray-700">
                  Ensuite, mettez en place un système de suivi mensuel de vos indicateurs clés : taux d'occupation,
                  rentabilité nette, impayés, cash-flow. Vous verrez rapidement quels biens méritent votre attention.
                </p>
              </div>

              <p className="text-xl text-gray-800 font-semibold mb-4">
                La rentabilité d'un portefeuille immobilier ne se décrète pas, elle se construit jour après jour avec
                rigueur et méthode.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Avec les bons outils et les bonnes pratiques, vous pouvez transformer votre portefeuille en une véritable
                machine à générer du cash-flow positif et du patrimoine durable.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Découvrez ImmoTopia en action
              </h2>
              <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                Voyez comment ImmoTopia peut vous aider à structurer et piloter votre portefeuille immobilier avec
                sérénité. Demandez une démonstration personnalisée.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold"
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
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">
                    Demander une démo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

