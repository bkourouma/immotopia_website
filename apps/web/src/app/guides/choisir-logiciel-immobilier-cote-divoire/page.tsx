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
  Download,
  Target,
  Zap,
  Users,
  BarChart3,
  Settings,
  DollarSign,
  Building2,
  Home,
  Briefcase,
  X,
  Check
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Comment choisir un logiciel immobilier en Côte d'Ivoire | Guide décision | ImmoTopia",
    description:
      "Guide pour choisir le bon logiciel immobilier en Côte d'Ivoire : critères, pièges à éviter, ERP vs Excel, Mobile Money, reporting et accompagnement.",
    canonicalUrl: '/guides/choisir-logiciel-immobilier-cote-divoire',
    keywords: [
      'choisir logiciel immobilier Côte d\'Ivoire',
      'logiciel immobilier Côte d\'Ivoire',
      'ERP immobilier',
      'logiciel agence immobilière',
      'logiciel gestion locative',
      'logiciel syndic copropriété',
      'comparatif logiciel immobilier',
      'logiciel immobilier Abidjan',
      'gestion immobilière professionnelle',
      'Mobile Money immobilier',
    ],
  },
  '/guides/choisir-logiciel-immobilier-cote-divoire'
);

const faqItems = [
  {
    question: "Est-ce qu'un logiciel immobilier est adapté aux petites structures ?",
    answer:
      "Oui, absolument. Un bon logiciel immobilier doit être évolutif et s'adapter à votre taille. Vous pouvez commencer avec les modules essentiels (CRM, biens, gestion locative) et activer progressivement d'autres fonctionnalités selon vos besoins. L'important est de choisir une solution qui grandit avec vous, pas une solution surdimensionnée dès le départ.",
  },
  {
    question: "Peut-on démarrer petit et évoluer progressivement ?",
    answer:
      "C'est même recommandé. Commencez par les modules qui répondent à vos besoins immédiats (par exemple, gestion locative si vous gérez des biens en location). Ensuite, activez d'autres modules (syndic, promotion, etc.) au fur et à mesure de votre croissance. Un bon logiciel doit permettre cette approche modulaire sans vous forcer à tout prendre d'un coup.",
  },
  {
    question: "Le Mobile Money est-il vraiment indispensable dans un logiciel immobilier ?",
    answer:
      "En Côte d'Ivoire, oui. Plus de 70% des paiements de loyers se font via Mobile Money (Orange Money, MTN Money, Wave). Un logiciel sans intégration Mobile Money vous oblige à saisir manuellement chaque paiement, ce qui génère des erreurs, des oublis et des litiges. L'intégration automatique est un gain de temps et de fiabilité considérable.",
  },
  {
    question: "Comment migrer nos données depuis Excel vers un logiciel immobilier ?",
    answer:
      "La plupart des logiciels professionnels proposent un accompagnement pour l'import de vos données depuis Excel ou CSV. Chez ImmoTopia, notre équipe vous aide à structurer et migrer vos biens, contrats, clients et historique de paiements pour une transition en douceur. La migration est généralement réalisée en quelques jours.",
  },
  {
    question: "Les données sont-elles sécurisées dans un logiciel cloud ?",
    answer:
      "Oui, si le logiciel respecte les standards de sécurité. Vérifiez que la solution utilise un hébergement sécurisé avec chiffrement SSL, sauvegardes automatiques quotidiennes, et respect des normes de protection des données. Un logiciel cloud professionnel est généralement plus sécurisé qu'un fichier Excel sur un ordinateur sans sauvegarde.",
  },
  {
    question: "Faut-il un support local en Côte d'Ivoire ?",
    answer:
      "C'est fortement recommandé. Un support local comprend mieux vos pratiques métier, vos contraintes réglementaires et vos besoins spécifiques (Mobile Money, types de baux, etc.). Il peut intervenir rapidement en cas de problème et vous accompagner dans la prise en main. Un support uniquement par email depuis l'étranger peut être insuffisant.",
  },
  {
    question: "Comment savoir si le logiciel va évoluer avec nos besoins futurs ?",
    answer:
      "Posez des questions sur la roadmap produit, la fréquence des mises à jour, et la capacité à ajouter de nouveaux modules. Un bon éditeur investit régulièrement dans son produit, écoute les retours clients et fait évoluer sa solution. Demandez également si vous pouvez tester de nouveaux modules avant de les activer définitivement.",
  },
  {
    question: "Quels sont les délais de mise en place d'un logiciel immobilier ?",
    answer:
      "Cela dépend de la complexité de votre activité et du volume de données à migrer. En général, comptez 1 à 2 semaines pour la configuration initiale, l'import des données et la formation de vos équipes. Avec ImmoTopia, vous pouvez commencer à utiliser le logiciel dès le premier jour et affiner la configuration progressivement.",
  },
];

export default function ChoisirLogicielImmobilierPage() {
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
                <Target className="h-4 w-4" />
                Guide décision
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Comment choisir un logiciel immobilier en Côte d'Ivoire
              </h1>
              
              <p className="mb-8 text-xl text-gray-700 md:text-2xl">
                Le guide pour faire le bon choix dès maintenant et éviter les erreurs coûteuses. Découvrez{' '}
                <Link href="/logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  notre ERP immobilier en Côte d'Ivoire
                </Link>
                {' '}et{' '}
                <Link href="/meilleur-logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  pourquoi ImmoTopia est le meilleur choix
                </Link>
                .
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
                  className="border-2"
                >
                  <Link href="/logiciel-immobilier-cote-divoire">
                    Voir ImmoTopia
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
                Choisir un logiciel immobilier n'est pas une décision anodine. C'est un <strong>investissement stratégique</strong> qui
                impacte directement votre efficacité opérationnelle, votre image professionnelle, votre capacité à gérer la croissance
                et, in fine, votre rentabilité.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Pourtant, beaucoup de professionnels de l'immobilier en Côte d'Ivoire se retrouvent avec des outils inadaptés :
                trop complexes, trop génériques, sans Mobile Money, ou sans accompagnement local. Le résultat ? Perte de temps,
                erreurs de gestion, impayés non suivis, et frustration.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Ce guide vous donne une <strong>méthode claire et rationnelle</strong> pour choisir le bon logiciel immobilier,
                adapté à votre activité, à votre taille et au contexte ivoirien. Vous y trouverez les critères indispensables,
                les erreurs à éviter, une grille de décision et une checklist finale.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi le choix du logiciel est stratégique */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi le choix du logiciel est stratégique
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Un mauvais choix de logiciel immobilier a des conséquences directes et mesurables sur votre activité :
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-red-100 p-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Impact sur les impayés</h3>
                </div>
                <p className="text-gray-600">
                  Sans suivi automatisé des paiements et relances, les impayés s'accumulent. Un logiciel inadapté
                  ne vous alerte pas à temps, ne génère pas les quittances automatiquement, et ne facilite pas
                  les paiements Mobile Money. Résultat : taux d'impayés élevé et trésorerie tendue.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Impact sur l'image professionnelle</h3>
                </div>
                <p className="text-gray-600">
                  Des quittances générées manuellement, des retards dans les réponses, des erreurs dans les états
                  de compte : tout cela nuit à votre crédibilité. Un logiciel professionnel vous permet de répondre
                  rapidement, de fournir des documents impeccables et de rassurer vos clients.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Impact sur la croissance</h3>
                </div>
                <p className="text-gray-600">
                  Si votre outil ne peut pas gérer plus de 50 biens, ou si chaque nouveau bien nécessite des heures
                  de configuration manuelle, vous êtes bloqué. Un bon logiciel doit vous permettre de scaler sans
                  effort supplémentaire proportionnel.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-purple-100 p-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Impact sur le contrôle</h3>
                </div>
                <p className="text-gray-600">
                  Sans tableau de bord centralisé, vous naviguez à l'aveugle. Vous ne savez pas quels biens sont
                  rentables, quels locataires sont en retard, quels contrats arrivent à échéance. Un bon logiciel
                  vous donne une vision claire et en temps réel de votre activité.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-yellow-50 p-6 border-2 border-yellow-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-yellow-700" />
                Le coût caché des mauvais outils
              </h3>
              <p className="text-gray-700">
                Un logiciel inadapté coûte bien plus cher qu'il n'y paraît : temps perdu en saisies manuelles,
                erreurs de gestion, impayés non récupérés, opportunités manquées, turnover des équipes frustrées.
                <strong> Le mauvais choix coûte souvent 10 à 20 fois plus cher que le bon choix.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Les erreurs les plus fréquentes */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl text-center">
              Les 5 erreurs les plus fréquentes
            </h2>

            <div className="space-y-6">
              {/* Erreur 1 */}
              <div className="rounded-xl bg-gradient-to-br from-red-50 to-orange-50 p-8 border-2 border-red-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Choisir trop petit (Excel, outils dispersés)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Beaucoup de professionnels démarrent avec Excel, WhatsApp et des fichiers dispersés. Cela fonctionne
                  pour 5 ou 10 biens, mais devient ingérable au-delà. Vous passez votre temps à chercher l'information,
                  à recouper les données, et à corriger les erreurs.
                </p>
                <p className="text-gray-700 font-semibold">
                  ➜ Conséquence : perte de temps, erreurs, impayés non suivis, image amateur.
                </p>
              </div>

              {/* Erreur 2 */}
              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 border-2 border-orange-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Choisir trop généraliste (CRM non immobilier)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Un CRM générique (Salesforce, HubSpot, etc.) ne comprend pas les spécificités de l'immobilier :
                  gestion des biens, contrats de bail, échéances de loyers, quittances, états de compte, Mobile Money.
                  Vous devez tout configurer manuellement, ce qui prend des semaines et reste incomplet.
                </p>
                <p className="text-gray-700 font-semibold">
                  ➜ Conséquence : configuration complexe, fonctionnalités manquantes, coût élevé.
                </p>
              </div>

              {/* Erreur 3 */}
              <div className="rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 p-8 border-2 border-yellow-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-600 text-white font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Choisir sans Mobile Money</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  En Côte d'Ivoire, plus de 70% des paiements de loyers se font via Mobile Money. Un logiciel sans
                  intégration Mobile Money vous oblige à saisir manuellement chaque paiement, à vérifier les références,
                  et à générer les quittances une par une. C'est chronophage et source d'erreurs.
                </p>
                <p className="text-gray-700 font-semibold">
                  ➜ Conséquence : saisies manuelles, erreurs d'affectation, litiges avec les locataires.
                </p>
              </div>

              {/* Erreur 4 */}
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border-2 border-green-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Choisir sans accompagnement local</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Un logiciel développé à l'étranger, sans support local, sans compréhension des pratiques ivoiriennes
                  (types de baux, Mobile Money, fiscalité), est difficile à adopter. Vous êtes seul face aux problèmes,
                  avec un support par email qui ne comprend pas vos besoins.
                </p>
                <p className="text-gray-700 font-semibold">
                  ➜ Conséquence : adoption difficile, frustration, abandon du logiciel.
                </p>
              </div>

              {/* Erreur 5 */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-2 border-blue-200">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Choisir sans vision long terme</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Vous choisissez un logiciel pour gérer 20 biens aujourd'hui, mais dans 2 ans vous en gérez 100.
                  Si le logiciel ne peut pas scaler, vous devrez tout recommencer : migration, formation, perte de données.
                  Un bon logiciel doit grandir avec vous.
                </p>
                <p className="text-gray-700 font-semibold">
                  ➜ Conséquence : migration forcée, perte de temps, coûts supplémentaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Les 10 critères indispensables */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Les 10 critères indispensables en Côte d'Ivoire
              </h2>
              <p className="text-lg text-gray-700">
                Voici les critères à vérifier absolument avant de choisir votre logiciel immobilier.
              </p>
            </div>

            <div className="space-y-6">
              {/* Critère 1 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-blue-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Adaptation locale (Mobile Money, pratiques terrain)</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Le logiciel doit être conçu pour le contexte ivoirien : intégration Mobile Money (Orange Money, MTN Money, Wave),
                  types de baux locaux, fiscalité, pratiques de gestion. Un logiciel générique développé ailleurs ne comprendra
                  pas vos besoins spécifiques.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Intégration Mobile Money native, support local, documentation en français.
                  </span>
                </div>
              </div>

              {/* Critère 2 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-indigo-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Couverture fonctionnelle réelle</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Le logiciel doit couvrir l'ensemble de votre activité : CRM (prospects, clients), gestion des biens et annonces,
                  gestion locative (contrats, loyers, quittances), syndic de copropriété, promotion immobilière, maintenance.
                  Évitez les solutions qui ne couvrent qu'une partie de vos besoins.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Liste des modules disponibles, possibilité d'activer/désactiver selon vos besoins.
                  </span>
                </div>
              </div>

              {/* Critère 3 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-purple-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Centralisation des données</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Toutes vos données doivent être centralisées dans un seul système : biens, clients, contrats, paiements,
                  documents. Fini les fichiers Excel dispersés, les emails perdus, les WhatsApp non archivés. Une seule source
                  de vérité pour toute votre activité.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Base de données unique, accès multi-utilisateurs, synchronisation en temps réel.
                  </span>
                </div>
              </div>

              {/* Critère 4 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-green-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Gestion des paiements & preuves</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Le logiciel doit enregistrer chaque paiement avec sa date, son montant, le bien concerné et le mois de loyer.
                  Il doit générer automatiquement les quittances, les reçus, et les états de compte. La traçabilité est essentielle
                  pour éviter les litiges et faciliter le recouvrement.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Génération automatique de quittances, historique complet des paiements, export PDF.
                  </span>
                </div>
              </div>

              {/* Critère 5 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-orange-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-sm">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Automatisation (quittances, relances)</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Le logiciel doit automatiser les tâches répétitives : génération de quittances après chaque paiement, relances
                  automatiques en cas de retard, rappels avant échéance, alertes pour les contrats arrivant à terme. L'automatisation
                  vous fait gagner des heures chaque semaine.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Relances automatiques, notifications par email/SMS, workflows personnalisables.
                  </span>
                </div>
              </div>

              {/* Critère 6 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-teal-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-sm">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Reporting & pilotage</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Le logiciel doit vous donner une vision claire de votre activité : tableau de bord avec KPIs (taux d'occupation,
                  impayés, revenus), rapports par bien, par propriétaire, par période. Vous devez pouvoir piloter votre activité
                  en temps réel, pas à la fin du mois.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Tableaux de bord personnalisables, exports Excel/PDF, graphiques et indicateurs.
                  </span>
                </div>
              </div>

              {/* Critère 7 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-red-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white font-bold text-sm">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Scalabilité (croissance)</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Le logiciel doit pouvoir gérer 10 biens comme 1000 biens sans ralentissement ni complexité supplémentaire.
                  Vous devez pouvoir ajouter de nouveaux utilisateurs, de nouveaux modules, de nouveaux biens sans limite technique.
                  Un bon logiciel grandit avec vous.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Pas de limite de biens, multi-utilisateurs, architecture cloud scalable.
                  </span>
                </div>
              </div>

              {/* Critère 8 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-yellow-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-600 text-white font-bold text-sm">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Simplicité d'usage</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Le logiciel doit être intuitif et facile à prendre en main. Vos équipes doivent pouvoir l'utiliser sans formation
                  de plusieurs semaines. Une interface claire, des workflows logiques, une navigation fluide : c'est essentiel pour
                  l'adoption et l'efficacité.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Interface moderne, navigation intuitive, formation rapide (1-2 jours max).
                  </span>
                </div>
              </div>

              {/* Critère 9 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-pink-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-white font-bold text-sm">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Accompagnement & support</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Le logiciel doit être accompagné d'un support réactif et compétent. Support local en Côte d'Ivoire, formation
                  initiale, aide à la migration des données, documentation complète, mises à jour régulières. Vous ne devez jamais
                  être seul face à un problème.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Support local, formation incluse, documentation en français, mises à jour régulières.
                  </span>
                </div>
              </div>

              {/* Critère 10 */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-gray-600">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white font-bold text-sm">
                    10
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Coût global vs valeur</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Ne regardez pas seulement le prix de l'abonnement. Regardez le coût global : abonnement + formation + migration
                  + support + temps gagné + erreurs évitées + impayés récupérés. Un logiciel à 50 000 FCFA/mois qui vous fait
                  gagner 200 000 FCFA/mois est un excellent investissement.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    <strong>À vérifier :</strong> Tarification transparente, ROI mesurable, pas de coûts cachés.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERP immobilier vs outils dispersés */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              ERP immobilier vs outils dispersés
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Voici une comparaison objective des différentes approches pour gérer votre activité immobilière :
            </p>

            <div className="space-y-6">
              {/* Excel + WhatsApp */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Excel + WhatsApp + Email</h3>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                    Limité
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Avantages
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Gratuit ou peu coûteux</li>
                      <li>• Familier pour la plupart des utilisateurs</li>
                      <li>• Flexible (on peut tout faire)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <X className="h-4 w-4 text-red-600" />
                      Limites
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Données dispersées, difficiles à retrouver</li>
                      <li>• Pas de centralisation, pas de traçabilité</li>
                      <li>• Erreurs fréquentes, doublons, oublis</li>
                      <li>• Pas d'automatisation, tout est manuel</li>
                      <li>• Impossible à scaler au-delà de 20-30 biens</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700 italic">
                  <strong>Verdict :</strong> Acceptable pour démarrer (moins de 10 biens), mais rapidement ingérable.
                </p>
              </div>

              {/* CRM générique */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">CRM générique (Salesforce, HubSpot, etc.)</h3>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                    Inadapté
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Avantages
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Puissant et personnalisable</li>
                      <li>• Bon pour la gestion de prospects</li>
                      <li>• Intégrations nombreuses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <X className="h-4 w-4 text-red-600" />
                      Limites
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Pas conçu pour l'immobilier</li>
                      <li>• Configuration complexe et longue</li>
                      <li>• Pas de gestion locative native</li>
                      <li>• Pas de Mobile Money</li>
                      <li>• Coût élevé (licences + configuration)</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700 italic">
                  <strong>Verdict :</strong> Trop générique, trop cher, trop complexe pour l'immobilier.
                </p>
              </div>

              {/* Outil annonces */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Outil annonces uniquement</h3>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    Partiel
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Avantages
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Bon pour diffuser des annonces</li>
                      <li>• Interface simple</li>
                      <li>• Visibilité sur les portails</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <X className="h-4 w-4 text-red-600" />
                      Limites
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Pas de gestion locative</li>
                      <li>• Pas de suivi des paiements</li>
                      <li>• Pas de syndic, pas de promotion</li>
                      <li>• Vous devez gérer le reste ailleurs</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700 italic">
                  <strong>Verdict :</strong> Utile pour la diffusion, mais incomplet pour la gestion globale.
                </p>
              </div>

              {/* ERP immobilier */}
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-md border-2 border-green-300">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">ERP immobilier (ImmoTopia, etc.)</h3>
                  <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                    Recommandé
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Avantages
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Conçu spécifiquement pour l'immobilier</li>
                      <li>• Couverture complète (CRM, biens, locatif, syndic, promo)</li>
                      <li>• Centralisation de toutes les données</li>
                      <li>• Automatisation des tâches répétitives</li>
                      <li>• Mobile Money intégré (pour les solutions locales)</li>
                      <li>• Reporting et pilotage en temps réel</li>
                      <li>• Scalable (10 à 10 000 biens)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <X className="h-4 w-4 text-red-600" />
                      Limites
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Coût d'abonnement mensuel</li>
                      <li>• Nécessite une formation initiale</li>
                      <li>• Migration des données à prévoir</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700 italic">
                  <strong>Verdict :</strong> Solution complète, professionnelle, évolutive. Le meilleur rapport valeur/coût pour une activité immobilière sérieuse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille de décision */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Grille de décision : auto-diagnostic
              </h2>
              <p className="text-lg text-gray-700">
                Utilisez cette grille pour évaluer rapidement quelle solution correspond le mieux à vos besoins.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-bold">Critère</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">Excel + WhatsApp</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">CRM générique</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">Outil annonces</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">ERP immobilier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Mobile Money intégré</td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Gestion locative complète</td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Automatisation (quittances, relances)</td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><span className="text-orange-500 text-xs">Partiel</span></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Centralisation des données</td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Reporting & tableaux de bord</td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Scalabilité (100+ biens)</td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><span className="text-orange-500 text-xs">Partiel</span></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Support local (Côte d'Ivoire)</td>
                    <td className="px-4 py-3 text-center"><span className="text-gray-400 text-xs">N/A</span></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><span className="text-orange-500 text-xs">Variable</span></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Facilité d'usage</td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">Coût mensuel estimé</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Gratuit</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-gray-700">100k+ FCFA</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-gray-700">20-50k FCFA</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-gray-700">30-80k FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-xl bg-blue-50 p-6 border-2 border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Comment lire cette grille ?</h3>
              <p className="text-gray-700">
                Si vous gérez plus de 20 biens, si vous voulez professionnaliser votre activité, si vous voulez
                gagner du temps et réduire les erreurs, <strong>l'ERP immobilier est la solution la plus adaptée</strong>.
                Le coût mensuel est largement compensé par le temps gagné, les impayés récupérés et l'image professionnelle.
              </p>
            </div>
          </div>
        </section>

        {/* Adapter le choix à votre profil */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Comment adapter le choix à votre profil
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Selon votre activité principale, certains modules seront plus importants que d'autres.
              Voici nos recommandations par profil :
            </p>

            <div className="space-y-6">
              {/* Agence immobilière */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-blue-600">
                <div className="mb-3 flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Agence immobilière</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Vous avez besoin d'un CRM puissant pour gérer vos prospects, d'un module annonces pour diffuser
                  vos biens, et d'une gestion locative si vous gérez des biens en location pour vos clients.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Modules prioritaires :</span>
                  <span className="text-sm font-semibold text-blue-600">CRM, Annonces, Gestion locative</span>
                </div>
                <div className="mt-3">
                  <Link href="/pour-qui/agences-immobilieres" className="text-sm text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1">
                    Voir la page Agences immobilières
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Gestionnaire locatif */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-green-600">
                <div className="mb-3 flex items-center gap-3">
                  <Home className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Gestionnaire locatif</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Votre priorité est la gestion des loyers, des paiements, des quittances et des relances.
                  Le Mobile Money est indispensable, ainsi que le reporting pour vos propriétaires.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Modules prioritaires :</span>
                  <span className="text-sm font-semibold text-green-600">Gestion locative, Mobile Money, Reporting</span>
                </div>
                <div className="mt-3">
                  <Link href="/pour-qui/gestionnaires-locatifs" className="text-sm text-green-600 hover:text-green-800 font-semibold flex items-center gap-1">
                    Voir la page Gestionnaires locatifs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Syndic de copropriété */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-purple-600">
                <div className="mb-3 flex items-center gap-3">
                  <Users className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Syndic de copropriété</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Vous gérez des copropriétés avec plusieurs propriétaires, des charges communes, des assemblées générales.
                  Le module syndic est essentiel, avec la gestion des appels de fonds et des travaux.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Modules prioritaires :</span>
                  <span className="text-sm font-semibold text-purple-600">Syndic, Gestion locative, Maintenance</span>
                </div>
                <div className="mt-3">
                  <Link href="/pour-qui/syndics" className="text-sm text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-1">
                    Voir la page Syndics
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Promoteur immobilier */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-orange-600">
                <div className="mb-3 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Promoteur immobilier</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Vous développez des projets immobiliers, gérez des réservations, des échéanciers de paiement.
                  Le module promotion est crucial, avec le CRM pour gérer vos prospects acheteurs.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Modules prioritaires :</span>
                  <span className="text-sm font-semibold text-orange-600">Promotion, CRM, Paiements</span>
                </div>
                <div className="mt-3">
                  <Link href="/pour-qui/promoteurs-immobiliers" className="text-sm text-orange-600 hover:text-orange-800 font-semibold flex items-center gap-1">
                    Voir la page Promoteurs immobiliers
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Propriétaire bailleur */}
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-teal-600">
                <div className="mb-3 flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Propriétaire bailleur (multi-biens)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Vous possédez plusieurs biens en location et voulez les gérer vous-même de manière professionnelle.
                  La gestion locative et le suivi des paiements sont vos priorités.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Modules prioritaires :</span>
                  <span className="text-sm font-semibold text-teal-600">Gestion locative, Mobile Money, Reporting</span>
                </div>
                <div className="mt-3">
                  <Link href="/pour-qui/proprietaires-bailleurs" className="text-sm text-teal-600 hover:text-teal-800 font-semibold flex items-center gap-1">
                    Voir la page Propriétaires bailleurs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions à poser avant de signer */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              15 questions à poser avant de signer
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Avant de vous engager avec un éditeur de logiciel immobilier, posez ces questions pour éviter
              les mauvaises surprises :
            </p>

            <div className="space-y-4">
              {[
                "Le Mobile Money (Orange Money, MTN Money, Wave) est-il intégré nativement ?",
                "Quels modules sont inclus dans l'abonnement de base ? Lesquels sont en option ?",
                "Y a-t-il une limite au nombre de biens, de contrats ou d'utilisateurs ?",
                "Comment se passe la migration de nos données depuis Excel ou un autre système ?",
                "Quelle est la durée de la formation initiale ? Est-elle incluse dans l'abonnement ?",
                "Le support est-il local (en Côte d'Ivoire) ? Quels sont les horaires et les canaux (téléphone, email, chat) ?",
                "À quelle fréquence le logiciel est-il mis à jour ? Les mises à jour sont-elles automatiques ?",
                "Peut-on tester le logiciel gratuitement avant de s'engager ? Pendant combien de temps ?",
                "Les données sont-elles sauvegardées automatiquement ? À quelle fréquence ?",
                "Peut-on exporter nos données à tout moment (Excel, PDF, CSV) ?",
                "Y a-t-il des frais cachés (configuration, formation supplémentaire, modules additionnels) ?",
                "Le logiciel est-il accessible sur mobile (smartphone, tablette) ?",
                "Peut-on personnaliser les documents (quittances, contrats, états de compte) avec notre logo ?",
                "Quelle est la politique de résiliation ? Y a-t-il un engagement minimum ?",
                "Avez-vous des clients de référence en Côte d'Ivoire que nous pouvons contacter ?",
              ].map((question, index) => (
                <div key={index} className="rounded-lg bg-white p-4 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{question}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-yellow-50 p-6 border-2 border-yellow-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Conseil</h3>
              <p className="text-gray-700">
                Ne vous contentez pas de réponses vagues. Demandez des démonstrations concrètes, des captures d'écran,
                des témoignages clients. Un bon éditeur sera transparent et vous montrera tout ce que vous voulez voir.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist finale */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Checklist finale : 20 points à vérifier avant de décider
              </h2>
              <p className="text-lg text-gray-700">
                Imprimez cette checklist et cochez chaque point avant de prendre votre décision.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg border-2 border-green-200">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Checklist décision logiciel immobilier</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Imprimer
                </Button>
              </div>

              <div className="space-y-3">
                {[
                  "Le logiciel intègre nativement Mobile Money (Orange Money, MTN Money, Wave)",
                  "Le logiciel couvre tous mes besoins métier (CRM, biens, locatif, syndic, promo selon mon activité)",
                  "Les données sont centralisées dans un seul système",
                  "Le logiciel génère automatiquement les quittances et reçus",
                  "Le logiciel permet des relances automatiques en cas de retard de paiement",
                  "Le logiciel propose des tableaux de bord et du reporting en temps réel",
                  "Le logiciel peut gérer au moins 100 biens (scalabilité)",
                  "L'interface est intuitive et facile à prendre en main",
                  "Un support local en Côte d'Ivoire est disponible",
                  "Une formation initiale est incluse dans l'abonnement",
                  "La migration de mes données Excel est accompagnée",
                  "Les données sont sauvegardées automatiquement et quotidiennement",
                  "Je peux exporter mes données à tout moment (Excel, PDF)",
                  "Le logiciel est accessible sur mobile (smartphone, tablette)",
                  "Je peux personnaliser les documents avec mon logo",
                  "Le tarif est transparent et sans frais cachés",
                  "Je peux tester le logiciel gratuitement avant de m'engager",
                  "Le logiciel est mis à jour régulièrement",
                  "Il n'y a pas d'engagement minimum (ou engagement raisonnable)",
                  "L'éditeur a des clients de référence en Côte d'Ivoire",
                ].map((item, index) => (
                  <label key={index} className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8 rounded-lg bg-green-100 p-4 border border-green-300">
                <p className="text-sm text-green-800 font-semibold">
                  ✅ Si vous avez coché au moins 15 cases sur 20, vous avez trouvé un logiciel adapté à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi ImmoTopia couvre ces critères */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi ImmoTopia couvre ces critères
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              ImmoTopia a été conçu spécifiquement pour répondre aux besoins des professionnels de l'immobilier
              en Côte d'Ivoire. Voici comment nous couvrons chacun des 10 critères indispensables :
            </p>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">1. Adaptation locale</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  ImmoTopia intègre nativement Orange Money, MTN Money et Wave. Les paiements sont automatiquement
                  rapprochés, les quittances générées instantanément. Support local à Abidjan, documentation en français.
                </p>
                <Link href="/logiciel-immobilier-cote-divoire#mobile-money" className="text-sm text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1">
                  En savoir plus sur Mobile Money
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <Settings className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-bold text-gray-900">2. Couverture fonctionnelle</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  ImmoTopia couvre l'ensemble de votre activité : CRM, gestion des biens et annonces, gestion locative,
                  syndic de copropriété, promotion immobilière, maintenance. Modules activables selon vos besoins.
                </p>
                <Link href="/logiciel-immobilier-cote-divoire#modules" className="text-sm text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1">
                  Voir tous les modules
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-900">3. Centralisation & sécurité</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Toutes vos données sont centralisées dans un seul système sécurisé. Hébergement cloud avec chiffrement SSL,
                  sauvegardes automatiques quotidiennes, accès multi-utilisateurs avec permissions granulaires.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-gray-900">4. Automatisation</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Génération automatique de quittances après chaque paiement, relances automatiques en cas de retard,
                  rappels avant échéance, alertes pour les contrats arrivant à terme. Gagnez des heures chaque semaine.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-bold text-gray-900">5. Reporting & pilotage</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Tableaux de bord en temps réel avec KPIs (taux d'occupation, impayés, revenus), rapports par bien,
                  par propriétaire, par période. Exports Excel et PDF pour vos analyses et présentations.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="mb-3 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">6. Scalabilité & accompagnement</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  ImmoTopia peut gérer 10 biens comme 10 000 biens. Formation initiale incluse, migration de vos données
                  accompagnée, support local réactif. Vous n'êtes jamais seul.
                </p>
                <Link href="/tarifs" className="text-sm text-green-600 hover:text-green-800 font-semibold flex items-center gap-1">
                  Voir les tarifs et formules
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-blue-50 p-6 border-2 border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Notre engagement</h3>
              <p className="text-gray-700">
                ImmoTopia n'est pas un logiciel générique adapté à la va-vite. C'est un ERP immobilier conçu
                spécifiquement pour le marché ivoirien, avec les fonctionnalités dont vous avez vraiment besoin,
                et un accompagnement local de qualité. <strong>Nous réussissons si vous réussissez.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl text-center">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex-shrink-0 mt-0.5">
                      ?
                    </span>
                    {item.question}
                  </h3>
                  <p className="text-gray-700 ml-9">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="mb-6 text-3xl font-extrabold text-white md:text-4xl">
              Prêt à faire le bon choix ?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Demandez une démo personnalisée d'ImmoTopia et voyez par vous-même comment nous couvrons
              tous les critères indispensables pour votre activité immobilière en Côte d'Ivoire.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100"
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

            <div className="mt-8 grid gap-4 md:grid-cols-3 text-left">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-2">Pour les agences</h3>
                <p className="text-sm text-blue-100 mb-3">
                  CRM, annonces, gestion locative : tout pour gérer vos clients et vos biens.
                </p>
                <Link href="/pour-qui/agences-immobilieres" className="text-sm text-white font-semibold hover:underline flex items-center gap-1">
                  En savoir plus
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-2">Pour les syndics</h3>
                <p className="text-sm text-blue-100 mb-3">
                  Gestion de copropriétés, appels de fonds, assemblées générales, travaux.
                </p>
                <Link href="/pour-qui/syndics" className="text-sm text-white font-semibold hover:underline flex items-center gap-1">
                  En savoir plus
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-2">Pour les gestionnaires</h3>
                <p className="text-sm text-blue-100 mb-3">
                  Gestion locative complète, Mobile Money, quittances, relances automatiques.
                </p>
                <Link href="/pour-qui/gestionnaires-locatifs" className="text-sm text-white font-semibold hover:underline flex items-center gap-1">
                  En savoir plus
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ressources complémentaires */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 text-center">
              Ressources complémentaires
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/guides/reduire-impayes-loyers-cote-divoire" className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Réduire les impayés de loyers</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Méthode opérationnelle pour prévenir et gérer les impayés de loyers en Côte d'Ivoire.
                </p>
                <span className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                  Lire le guide
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link href="/guides/paiement-loyer-mobile-money-cote-divoire" className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <Smartphone className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Paiement loyer Mobile Money</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comment intégrer et optimiser les paiements Mobile Money dans votre gestion locative.
                </p>
                <span className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                  Lire le guide
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link href="/guides/gerer-agence-immobiliere-cote-divoire" className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Gérer une agence immobilière</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Guide complet pour structurer et développer votre agence immobilière en Côte d'Ivoire.
                </p>
                <span className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                  Lire le guide
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link href="/guides/gerer-copropriete-cote-divoire" className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-full bg-purple-100 p-2">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Gérer une copropriété</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Guide opérationnel pour les syndics de copropriété en Côte d'Ivoire.
                </p>
                <span className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                  Lire le guide
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

