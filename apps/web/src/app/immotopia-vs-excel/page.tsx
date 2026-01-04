import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateFAQSchema } from '@/lib/structured-data';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  X,
  ArrowRight,
  FileSpreadsheet,
  Users,
  Home,
  FileText,
  DollarSign,
  Smartphone,
  BarChart3,
  AlertCircle,
  TrendingUp,
  Settings,
  Building2,
  Clock,
  Shield,
  Zap,
  Calendar,
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'ImmoTopia vs Excel : pourquoi passer à un ERP immobilier | Côte d\'Ivoire',
    description:
      'Excel suffit pour démarrer, mais pas pour piloter une agence ou un portefeuille. Comparez Excel vs ImmoTopia (ERP immobilier) : CRM, loyers, syndic, paiements Mobile Money, maintenance et reporting.',
    canonicalUrl: '/immotopia-vs-excel',
    keywords: [
      'logiciel immobilier vs Excel',
      'gestion locative Excel vs logiciel',
      'ERP immobilier vs Excel',
      'suivi loyers Excel',
      'gestion agence immobilière Excel WhatsApp',
      'alternatives Excel immobilier',
      'logiciel gestion locative Côte d\'Ivoire',
      'migration Excel vers ERP immobilier',
    ],
  },
  '/immotopia-vs-excel'
);

const faqItems = [
  {
    question: 'Peut-on migrer depuis Excel vers ImmoTopia ?',
    answer:
      'Oui, la migration depuis Excel est possible. Notre équipe vous accompagne pour importer vos données (biens, contrats, clients, historique de paiements) depuis vos fichiers Excel ou CSV. Nous vous aidons également à structurer et nettoyer vos données pour une transition en douceur.',
  },
  {
    question: 'Est-ce compliqué à mettre en place ?',
    answer:
      'Non, ImmoTopia est une solution SaaS accessible via navigateur web. Aucune installation n\'est nécessaire. Après votre inscription, vous accédez immédiatement à votre espace. Notre équipe vous accompagne dans la configuration initiale, l\'import de vos données et la formation de vos équipes. La plupart des utilisateurs sont opérationnels en quelques jours.',
  },
  {
    question: 'Est-ce adapté aux petites agences ?',
    answer:
      'Absolument. ImmoTopia est conçu pour s\'adapter à tous les types de structures, des petites agences aux grands groupes. Vous pouvez commencer avec les modules essentiels (CRM, biens, gestion locative) et activer progressivement d\'autres fonctionnalités selon vos besoins. L\'abonnement est flexible et évolutif.',
  },
  {
    question: 'Peut-on commencer avec un module seulement ?',
    answer:
      'Oui, ImmoTopia fonctionne en modules. Vous pouvez activer uniquement ceux dont vous avez besoin : CRM, gestion locative, syndic, promotion immobilière, etc. Chaque module est indépendant mais s\'intègre parfaitement avec les autres pour une vue globale de votre activité. Vous pouvez commencer avec un seul module et en ajouter d\'autres progressivement.',
  },
  {
    question: 'Les paiements Mobile Money sont-ils obligatoires ?',
    answer:
      'Non, les paiements Mobile Money ne sont pas obligatoires. Cependant, c\'est une fonctionnalité très utile en Côte d\'Ivoire où la majorité des paiements de loyers se font via Orange Money, MTN Money, Moov Money ou Wave. ImmoTopia permet d\'enregistrer et tracer ces paiements facilement, même si vous n\'utilisez pas l\'intégration automatique.',
  },
  {
    question: 'Les quittances sont-elles automatiques ?',
    answer:
      'Oui, avec ImmoTopia, les quittances sont générées automatiquement dès qu\'un paiement est enregistré. Vous pouvez configurer des modèles de quittances personnalisés avec votre logo et vos informations. Les quittances sont ensuite envoyées automatiquement par email aux locataires, ce qui fait gagner un temps considérable par rapport à la génération manuelle dans Excel.',
  },
];

export default function ImmoTopiaVsExcelPage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* 1. HERO SECTION */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ImmoTopia vs Excel : quel outil pour gérer l&apos;immobilier en Côte d&apos;Ivoire ?
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Excel pour démarrer, ERP pour grandir et sécuriser. Découvrez{' '}
            <Link href="/logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              notre ERP immobilier complet
            </Link>
            {' '}et{' '}
            <Link href="/gestion-locative-vs-excel" className="font-semibold text-[#2563EB] hover:underline">
              pourquoi quitter Excel pour la gestion locative
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact?demo=true">
                Demander une démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg"
            >
              <Link href="/logiciel-immobilier-cote-divoire">
                Découvrir l&apos;ERP ImmoTopia
              </Link>
            </Button>
          </div>
        </header>

        {/* 2. QUAND EXCEL EST SUFFISANT */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Quand Excel est suffisant
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Excel peut être un outil adapté pour démarrer dans l&apos;immobilier, notamment dans certains contextes bien précis.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Petit volume</h3>
              <p className="text-gray-700 mb-4">
                Si vous gérez moins de 10 biens et que votre activité est simple (quelques locations, peu de transactions), Excel peut suffire. Un fichier avec quelques colonnes (adresse, loyer, locataire, date de paiement) est gérable manuellement.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Peu d&apos;utilisateurs</h3>
              <p className="text-gray-700 mb-4">
                Si vous travaillez seul ou en binôme, et que vous pouvez vous coordonner facilement, Excel peut fonctionner. Le problème survient dès que plusieurs personnes doivent accéder aux mêmes données simultanément.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Processus simple</h3>
              <p className="text-gray-700">
                Si votre processus est linéaire et répétitif (un bien → un locataire → un loyer mensuel), Excel peut suffire. Dès que vous avez besoin de workflows complexes (visites, contrats, quittances, relances, maintenance), Excel devient limitant.
              </p>
            </div>
            <p className="mt-6 text-lg">
              <strong>En résumé :</strong> Excel est adapté pour tester une activité immobilière, gérer un portefeuille personnel très réduit, ou pour des besoins ponctuels. Il devient rapidement insuffisant dès que l&apos;activité prend de l&apos;ampleur.
            </p>
          </div>
        </section>

        {/* 3. LIMITES D'EXCEL DANS L'IMMOBILIER (CI) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Les limites d&apos;Excel dans l&apos;immobilier en Côte d&apos;Ivoire
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              À mesure que votre activité immobilière grandit, Excel révèle ses limites structurelles. Voici les problèmes les plus fréquents rencontrés par les professionnels qui utilisent Excel pour gérer leur activité.
            </p>
            <div className="space-y-6">
              <div className="border border-red-200 bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Données dispersées, versions multiples
                </h3>
                <p className="text-gray-700">
                  Avec Excel, vos données sont souvent réparties entre plusieurs fichiers (biens, contrats, paiements, clients). Chaque collaborateur peut avoir sa propre version, ce qui crée de la confusion. Qui a la dernière version ? Quelle information est à jour ? Résultat : perte de temps considérable à chercher et à synchroniser les informations.
                </p>
              </div>
              <div className="border border-red-200 bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Pas de traçabilité ni audit
                </h3>
                <p className="text-gray-700">
                  Excel ne conserve pas d&apos;historique des modifications. Impossible de savoir qui a modifié quoi et quand. En cas de litige ou de contrôle, vous ne pouvez pas prouver l&apos;état de vos données à un moment précis. C&apos;est un risque majeur pour la sécurité juridique de votre activité.
                </p>
              </div>
              <div className="border border-red-200 bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Statuts non fiables (loué/vendu)
                </h3>
                <p className="text-gray-700">
                  Dans Excel, le statut d&apos;un bien (disponible, loué, vendu) est une simple cellule que n&apos;importe qui peut modifier. Aucune validation, aucun workflow. Résultat : des biens marqués comme disponibles alors qu&apos;ils sont déjà loués, ou inversement. Cela peut mener à des situations embarrassantes avec les clients.
                </p>
              </div>
              <div className="border border-red-200 bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Impayés détectés trop tard
                </h3>
                <p className="text-gray-700">
                  Dans Excel, pour détecter un impayé, il faut parcourir manuellement chaque ligne, comparer les dates d&apos;échéance avec les paiements enregistrés. C&apos;est chronophage et source d&apos;erreurs. Résultat : les impayés sont détectés avec retard, parfois plusieurs semaines après l&apos;échéance, ce qui complique leur recouvrement.
                </p>
              </div>
              <div className="border border-red-200 bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Quittances manuelles
                </h3>
                <p className="text-gray-700">
                  Chaque quittance doit être créée manuellement dans Excel (ou Word). Il faut copier-coller les informations, vérifier les montants, envoyer par email. Pour 50 biens, c&apos;est 600 quittances par an, soit des heures de travail répétitif. Et en cas d&apos;erreur dans la saisie, vous devez tout recommencer.
                </p>
              </div>
              <div className="border border-red-200 bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Reporting lent
                </h3>
                <p className="text-gray-700">
                  Générer un état des loyers, un tableau de bord financier, ou une analyse de performance dans Excel nécessite de créer des formules complexes, des tableaux croisés dynamiques, ou d&apos;exporter vers d&apos;autres outils. C&apos;est long, source d&apos;erreurs, et les données ne sont jamais en temps réel. Vous ne pouvez pas réagir rapidement aux problèmes.
                </p>
              </div>
              <div className="border border-red-200 bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Collaboration difficile
                </h3>
                <p className="text-gray-700">
                  Excel n&apos;est pas conçu pour la collaboration multi-utilisateurs. Même avec Excel Online ou Google Sheets, les conflits d&apos;édition, les versions, et la gestion des permissions sont problématiques. Impossible de savoir qui travaille sur quoi en temps réel. Cela ralentit l&apos;équipe et crée des frustrations.
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <strong>En Côte d&apos;Ivoire, ces limites sont encore plus critiques :</strong> la gestion des paiements Mobile Money (Orange Money, MTN Money) dans Excel est fastidieuse, le suivi des contrats locatifs nécessite une traçabilité renforcée, et les obligations de reporting pour les investisseurs ou les copropriétés exigent une fiabilité que Excel ne peut pas garantir.
            </p>
          </div>
        </section>

        {/* 4. CE QUE FAIT UN ERP IMMOBILIER (IMMOtopia) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ce que fait un ERP immobilier (ImmoTopia)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Un ERP (Enterprise Resource Planning) immobilier comme ImmoTopia résout les limitations d&apos;Excel en centralisant, automatisant et sécurisant tous vos processus métiers.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Centralisation
                </h3>
                <p className="text-gray-700">
                  Toutes vos données (clients, biens, contrats, paiements, maintenance) sont dans un seul système accessible à toute l&apos;équipe. Plus de fichiers dispersés, plus de versions multiples. Une seule source de vérité, mise à jour en temps réel.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Workflows automatisés
                </h3>
                <p className="text-gray-700">
                  Les processus métiers sont structurés : création de contrats, gestion des échéances, appels de charges pour le syndic, suivi des visites commerciales. Chaque étape déclenche automatiquement la suivante, réduisant les erreurs et les oublis.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Automatisation
                </h3>
                <p className="text-gray-700">
                  Les quittances, reçus, relances d&apos;impayés, et rapports sont générés automatiquement. Plus besoin de créer ces documents manuellement. Vous gagnez des dizaines d&apos;heures par mois et réduisez les risques d&apos;erreurs.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Sécurité et rôles
                </h3>
                <p className="text-gray-700">
                  Chaque utilisateur a un accès sécurisé avec des permissions définies (administrateur, gestionnaire, commercial, comptable). Vous contrôlez qui peut voir et modifier quoi. Tous les accès sont tracés pour la sécurité.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Reporting en temps réel
                </h3>
                <p className="text-gray-700">
                  Tableaux de bord financiers, états de trésorerie, analyses de performance commerciale, tout est disponible en un clic, en temps réel. Plus besoin de construire des formules Excel complexes. Vous prenez des décisions basées sur des données fiables et à jour.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Traçabilité complète
                </h3>
                <p className="text-gray-700">
                  Toutes les actions sont enregistrées avec horodatage et utilisateur. En cas de litige ou de contrôle, vous avez une preuve complète de l&apos;historique de vos données. C&apos;est une sécurité juridique essentielle.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                ImmoTopia : ERP immobilier adapté à la Côte d&apos;Ivoire
              </h3>
              <p className="text-gray-700 mb-4">
                ImmoTopia est spécialement conçu pour les professionnels de l&apos;immobilier en Côte d&apos;Ivoire. Il intègre nativement les spécificités locales :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Paiements Mobile Money :</strong> Orange Money, MTN Money, Moov Money, Wave intégrés pour le suivi des loyers et charges</li>
                <li><strong>Modules métiers complets :</strong> CRM, gestion locative, syndic de copropriété, promotion immobilière, maintenance</li>
                <li><strong>Multi-utilisateurs :</strong> adapté aux agences avec plusieurs collaborateurs</li>
                <li><strong>Reporting adapté :</strong> tableaux de bord pour investisseurs, copropriétaires, et dirigeants</li>
                <li><strong>Support local :</strong> équipe présente en Côte d&apos;Ivoire pour l&apos;accompagnement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. TABLEAU COMPARATIF */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Tableau comparatif : Excel vs ImmoTopia
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 font-semibold text-gray-900">Critère</th>
                  <th className="border border-gray-300 p-4 font-semibold text-gray-900 bg-red-50">Excel</th>
                  <th className="border border-gray-300 p-4 font-semibold text-gray-900 bg-green-50">ImmoTopia ERP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Stock biens</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Fichiers séparés, pas de validation</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Base centralisée, fiches complètes, statuts validés</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">CRM prospects</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Listes Excel, pas d&apos;historique</td>
                  <td className="border border-gray-300 p-4 text-gray-700">CRM intégré, historique complet, pipeline commercial</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Visites & pipeline</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Suivi manuel, calendrier séparé</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Calendrier intégré, suivi automatique, rappels</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Gestion locative</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Tableaux manuels, calculs à faire</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Contrats, quittances, relances automatisés</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Syndic copropriété</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Calculs manuels des charges, préparation AG longue</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Appels de charges automatiques, AG simplifiées, espace copropriétaires</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Paiements Mobile Money</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Enregistrement manuel, pas de traçabilité</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Intégration native, traçabilité complète, quittances auto</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Maintenance</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Listes Excel, suivi manuel</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Ticketing intégré, suivi des interventions, planning</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Reporting</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Formules complexes, pas en temps réel</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Tableaux de bord en temps réel, rapports automatisés</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Collaboration multi-utilisateurs</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Difficile, conflits d&apos;édition</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Accès simultané, permissions granulaires, pas de conflit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Historique & preuves</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Aucun historique, pas d&apos;audit</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Historique complet, traçabilité, audit trail</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Scalabilité</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Limite rapidement atteinte (lenteur, erreurs)</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Évolutif, adapté de 10 à 10 000 biens</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Risque d&apos;erreurs</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Élevé (saisie manuelle, formules)</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Faible (validation, automatisation)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Temps de mise à jour</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Manuel, plusieurs fichiers à modifier</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Automatique, mise à jour en temps réel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. CAS CONCRETS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Cas concrets : la différence en pratique
          </h2>
          <div className="space-y-8">
            {/* Cas 1: Agence */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                Cas 1 : Agence immobilière - De la visite à la signature
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Avec Excel</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Prospect noté dans un fichier Excel séparé</li>
                    <li>Visite planifiée dans un calendrier externe (Google Calendar)</li>
                    <li>Notes de visite dans un email ou un document Word</li>
                    <li>Contrat créé manuellement depuis un modèle Word</li>
                    <li>Informations recopiées dans plusieurs fichiers</li>
                    <li><strong>Temps : 2-3 heures par contrat</strong></li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Avec ImmoTopia</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Prospect créé dans le CRM, historique complet</li>
                    <li>Visite planifiée directement depuis le CRM</li>
                    <li>Notes de visite enregistrées sur la fiche prospect</li>
                    <li>Contrat généré automatiquement depuis un modèle</li>
                    <li>Toutes les données centralisées, pas de recopie</li>
                    <li><strong>Temps : 30 minutes par contrat</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cas 2: Locatif */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Home className="h-6 w-6 text-purple-600" />
                Cas 2 : Gestion locative - Du paiement à la quittance
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Avec Excel</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Reçu Mobile Money sur téléphone</li>
                    <li>Paiement noté manuellement dans Excel</li>
                    <li>Quittance créée dans Word depuis un modèle</li>
                    <li>Quittance envoyée par email manuellement</li>
                    <li>Vérification manuelle des impayés chaque mois</li>
                    <li><strong>Temps : 15-20 minutes par paiement</strong></li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Avec ImmoTopia</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Reçu Mobile Money enregistré dans ImmoTopia</li>
                    <li>Paiement rattaché automatiquement au contrat</li>
                    <li>Quittance générée et envoyée automatiquement</li>
                    <li>État de compte mis à jour en temps réel</li>
                    <li>Alertes automatiques en cas d&apos;impayé</li>
                    <li><strong>Temps : 2-3 minutes par paiement</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cas 3: Syndic */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-orange-600" />
                Cas 3 : Syndic - De l&apos;appel de charges au reçu
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Avec Excel</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Calcul manuel des charges par copropriétaire</li>
                    <li>Appel de charges créé dans Excel/Word</li>
                    <li>Envoi manuel par email à chaque copropriétaire</li>
                    <li>Suivi des paiements dans un fichier séparé</li>
                    <li>Reçus créés manuellement après paiement</li>
                    <li><strong>Temps : 4-6 heures par résidence/mois</strong></li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Avec ImmoTopia</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Calcul automatique des charges par copropriétaire</li>
                    <li>Appel de charges généré automatiquement</li>
                    <li>Envoi automatique par email depuis l&apos;espace copropriétaires</li>
                    <li>Suivi des paiements centralisé, tableau de bord</li>
                    <li>Reçus générés automatiquement après paiement</li>
                    <li><strong>Temps : 30 minutes par résidence/mois</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CALCUL SIMPLE ROI */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comment estimer votre retour sur investissement
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Le passage d&apos;Excel à un ERP immobilier comme ImmoTopia représente un investissement, mais les gains sont mesurables. Voici comment estimer votre ROI.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Méthode d&apos;estimation du ROI</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    1. Temps gagné par semaine
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Évaluez le temps que vous passez actuellement sur des tâches répétitives :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Génération de quittances : combien de minutes par quittance ? Multipliez par le nombre de quittances par mois</li>
                    <li>Recherche d&apos;informations : combien de temps à chercher dans vos fichiers Excel ?</li>
                    <li>Mise à jour des tableaux : combien de temps à synchroniser les fichiers entre collaborateurs ?</li>
                    <li>Vérification des impayés : combien de temps par mois à parcourir vos tableaux pour détecter les retards ?</li>
                    <li>Génération de rapports : combien de temps à construire vos tableaux de bord Excel ?</li>
                  </ul>
                  <p className="text-gray-700 font-semibold">
                    Exemple : Si vous économisez 10 heures par semaine, c&apos;est 40 heures par mois, soit l&apos;équivalent d&apos;un temps plein.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    2. Erreurs évitées
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Les erreurs dans Excel peuvent coûter cher :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Erreurs de saisie (montants, dates) : combien d&apos;erreurs par mois ? Quel coût (temps de correction, litiges) ?</li>
                    <li>Oublis de relances : combien d&apos;impayés détectés trop tard ? Quel impact financier ?</li>
                    <li>Doublons de clients : combien de temps perdu à corriger les incohérences ?</li>
                    <li>Statuts de biens erronés : combien de visites inutiles ou d&apos;opportunités manquées ?</li>
                  </ul>
                  <p className="text-gray-700 font-semibold">
                    Avec un ERP, la validation et l&apos;automatisation réduisent drastiquement ces erreurs.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    3. Impayés réduits
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Les alertes automatiques permettent de détecter les retards plus tôt :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Avec Excel, les impayés sont souvent détectés avec 1-2 semaines de retard</li>
                    <li>Avec un ERP, les alertes sont envoyées dès le jour d&apos;échéance</li>
                    <li>Une relance rapide augmente les chances de recouvrement</li>
                  </ul>
                  <p className="text-gray-700 font-semibold">
                    Si vous gérez 50 biens et réduisez les impayés de 2 à 1 par mois en moyenne, c&apos;est un gain financier direct.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-blue-200 mt-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Calcul simplifié</h4>
                  <p className="text-gray-700">
                    <strong>ROI = (Temps gagné × Coût horaire) + Erreurs évitées + Impayés réduits - Coût de l&apos;ERP</strong>
                  </p>
                  <p className="text-gray-700 mt-3">
                    Le coût de l&apos;ERP est fixe (abonnement mensuel), tandis que les gains s&apos;accumulent mois après mois. La plupart des professionnels atteignent un ROI positif dès le premier trimestre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. QUESTIONS À SE POSER */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Questions à se poser avant de quitter Excel
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Avant de décider de passer d&apos;Excel à un ERP immobilier, posez-vous ces questions pour évaluer si le moment est venu.
            </p>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Home className="h-5 w-5 text-blue-600" />
                  Combien de biens gérez-vous ?
                </h3>
                <p className="text-gray-700">
                  <strong>Moins de 10 biens :</strong> Excel peut encore suffire si votre activité est simple et stable.<br />
                  <strong>10 à 50 biens :</strong> Excel devient limitant. Un ERP commence à être rentable.<br />
                  <strong>Plus de 50 biens :</strong> Un ERP est indispensable pour éviter les erreurs et gagner du temps.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Combien d&apos;utilisateurs doivent accéder aux données ?
                </h3>
                <p className="text-gray-700">
                  <strong>1-2 personnes :</strong> Excel peut fonctionner, mais la collaboration reste limitée.<br />
                  <strong>3 personnes ou plus :</strong> Un ERP devient nécessaire pour éviter les conflits et les versions multiples.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Combien de paiements gérez-vous par mois ?
                </h3>
                <p className="text-gray-700">
                  <strong>Moins de 20 paiements :</strong> La gestion manuelle dans Excel est encore faisable.<br />
                  <strong>20 à 100 paiements :</strong> L&apos;automatisation des quittances et du suivi devient rentable.<br />
                  <strong>Plus de 100 paiements :</strong> Un ERP est essentiel pour éviter les erreurs et gagner du temps.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-orange-600" />
                  Combien de résidences gérez-vous en syndic ?
                </h3>
                <p className="text-gray-700">
                  <strong>0-1 résidence :</strong> Excel peut suffire si vous avez peu de copropriétaires.<br />
                  <strong>2 résidences ou plus :</strong> Les calculs d&apos;appels de charges et la préparation d&apos;AG justifient un ERP dédié au syndic.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-indigo-600" />
                  Avez-vous besoin de reporting pour investisseurs/propriétaires ?
                </h3>
                <p className="text-gray-700">
                  <strong>Non :</strong> Excel peut suffire si vous ne devez rendre de comptes à personne.<br />
                  <strong>Oui :</strong> Un ERP est indispensable pour générer des rapports fiables et professionnels rapidement. Excel ne permet pas de créer des tableaux de bord adaptés sans un travail considérable.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-8">
              <p className="text-gray-700">
                <strong>Règle générale :</strong> Si vous répondez &quot;oui&quot; à au moins 2 de ces questions, ou si vous sentez que Excel vous fait perdre du temps et génère des erreurs, il est temps de passer à un ERP immobilier comme ImmoTopia.
              </p>
            </div>
          </div>
        </section>

        {/* 9. RECOMMANDATION */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Recommandation : Excel ou ERP ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileSpreadsheet className="h-6 w-6 text-blue-600" />
                  Excel : bien pour démarrer
                </h3>
                <p className="text-gray-700 mb-4">
                  Excel est un outil adapté si :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Vous gérez moins de 10 biens</li>
                  <li>Vous travaillez seul ou à deux</li>
                  <li>Votre processus est très simple</li>
                  <li>Vous testez une activité immobilière</li>
                  <li>Vous n&apos;avez pas besoin de reporting complexe</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Excel permet de valider un modèle économique avant d&apos;investir dans un ERP.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-green-600" />
                  ERP : indispensable pour grandir
                </h3>
                <p className="text-gray-700 mb-4">
                  Un ERP comme ImmoTopia devient indispensable si :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Vous gérez 10 biens ou plus</li>
                  <li>Vous avez une équipe de 3 personnes ou plus</li>
                  <li>Vous avez besoin d&apos;automatiser (quittances, relances)</li>
                  <li>Vous voulez réduire les erreurs et gagner du temps</li>
                  <li>Vous devez rendre des comptes (investisseurs, copropriétaires)</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Un ERP vous fait gagner du temps, réduit les erreurs, et sécurise votre activité.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-semibold mb-4">ImmoTopia : ERP immobilier adapté à la Côte d&apos;Ivoire</h3>
              <p className="text-blue-100 mb-4 text-lg">
                ImmoTopia est un ERP immobilier complet spécialement conçu pour les professionnels de l&apos;immobilier en Côte d&apos;Ivoire. Il combine :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100 mb-6">
                <li><strong>Modules métiers complets :</strong> CRM, gestion locative, syndic de copropriété, promotion immobilière, maintenance, comptabilité</li>
                <li><strong>Paiements Mobile Money intégrés :</strong> Orange Money, MTN Money, Moov Money, Wave pour le suivi des loyers et charges</li>
                <li><strong>Automatisation poussée :</strong> quittances, reçus, relances, rapports générés automatiquement</li>
                <li><strong>Multi-utilisateurs :</strong> adapté aux agences avec permissions granulaires</li>
                <li><strong>Scalabilité :</strong> de la petite agence au grand groupe immobilier</li>
                <li><strong>Support local :</strong> équipe présente en Côte d&apos;Ivoire pour l&apos;accompagnement</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  <Link href="/logiciel-immobilier-cote-divoire">
                    Découvrir ImmoTopia
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact?demo=true">
                    Demander une démo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Questions fréquentes : Excel vs ImmoTopia
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-blue-600 font-bold">❓</span>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. CTA FINAL */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl text-center border-2 border-blue-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Prêt à passer d&apos;Excel à un ERP immobilier professionnel ?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Découvrez comment ImmoTopia peut transformer votre gestion immobilière en Côte d&apos;Ivoire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-10 py-6 text-lg"
            >
              <Link href="/tarifs">
                Voir les tarifs
              </Link>
            </Button>
          </div>
        </div>

        {/* LIENS INTERNES */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 text-gray-900">Ressources complémentaires :</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li>
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Découvrez l&apos;ERP immobilier ImmoTopia
              </Link>
            </li>
            <li>
              <Link
                href="/fonctionnalites"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Toutes nos fonctionnalités
              </Link>
            </li>
            <li>
              <Link
                href="/gestion-locative-cote-divoire"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Gestion locative en Côte d&apos;Ivoire
              </Link>
            </li>
            <li>
              <Link
                href="/crm-immobilier-cote-divoire"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → CRM immobilier
              </Link>
            </li>
            <li>
              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Paiements Mobile Money
              </Link>
            </li>
            <li>
              <Link
                href="/tarifs"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Consultez nos tarifs
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}

