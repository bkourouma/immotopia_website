import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateFAQSchema } from '@/lib/structured-data';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  FileText,
  DollarSign,
  Smartphone,
  BarChart3,
  Shield,
  Zap,
  Calendar,
  CreditCard,
  AlertCircle,
  TrendingUp,
  Settings,
  Home,
  Briefcase,
  Handshake,
  Search,
  Target,
  Clock,
  Database,
  Lock,
  Layers,
  GitBranch,
  XCircle,
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Meilleur logiciel immobilier en Côte d\'Ivoire : critères & comparatif',
    description:
      'Comment choisir le meilleur logiciel immobilier en Côte d\'Ivoire : CRM, biens & annonces, gestion locative, syndic, paiements Mobile Money, maintenance et reporting. Grille de choix + checklist.',
    canonicalUrl: '/meilleur-logiciel-immobilier-cote-divoire',
    keywords: [
      'meilleur logiciel immobilier Côte d\'Ivoire',
      'logiciel immobilier Abidjan',
      'ERP immobilier Côte d\'Ivoire',
      'logiciel agence immobilière',
      'logiciel gestion locative',
      'logiciel syndic copropriété',
      'comparatif logiciel immobilier',
      'choisir logiciel immobilier',
      'CRM immobilier Côte d\'Ivoire',
      'logiciel gestion immobilière professionnel',
    ],
  },
  '/meilleur-logiciel-immobilier-cote-divoire'
);

const faqItems = [
  {
    question: 'Est-ce adapté aux petites structures ?',
    answer:
      'Oui, ImmoTopia est conçu pour s\'adapter à toutes les tailles de structures. Vous pouvez commencer avec les modules essentiels (CRM, biens, gestion locative) et activer progressivement d\'autres fonctionnalités selon vos besoins et votre croissance. L\'abonnement est modulaire et évolutif.',
  },
  {
    question: 'Peut-on activer seulement certains modules ?',
    answer:
      'Absolument. ImmoTopia est un ERP modulaire. Vous pouvez activer uniquement les modules dont vous avez besoin : CRM, gestion locative, syndic, promotion, etc. Chaque module fonctionne de manière indépendante tout en s\'intégrant parfaitement avec les autres pour une vue globale de votre activité.',
  },
  {
    question: 'Peut-on migrer depuis Excel ?',
    answer:
      'Oui, nous proposons un accompagnement pour l\'import de vos données depuis Excel, CSV ou d\'autres formats. Notre équipe peut vous aider à structurer et migrer vos biens, contrats, clients et historique de paiements pour une transition en douceur sans perte de données.',
  },
  {
    question: 'Les paiements Mobile Money sont-ils supportés ?',
    answer:
      'Oui, ImmoTopia intègre nativement les principaux moyens de paiement utilisés en Côte d\'Ivoire : Orange Money, MTN Money, Moov Money et Wave. Le système permet d\'enregistrer les paiements, de générer automatiquement les quittances et de suivre en temps réel l\'état des paiements.',
  },
  {
    question: 'Le logiciel est-il sécurisé ?',
    answer:
      'Oui, la sécurité est une priorité. ImmoTopia utilise un hébergement sécurisé avec chiffrement SSL, sauvegardes automatiques quotidiennes, et respect des normes de protection des données. Chaque utilisateur a un accès sécurisé avec authentification, et les permissions sont granulaires par rôle.',
  },
  {
    question: 'Avez-vous du reporting par portefeuille ?',
    answer:
      'Oui, ImmoTopia offre des tableaux de bord et des rapports détaillés par portefeuille, par bien, par propriétaire, par gestionnaire, etc. Vous pouvez générer des états financiers, des analyses de performance commerciale, des rapports de trésorerie et bien plus, le tout en temps réel.',
  },
  {
    question: 'Peut-on gérer syndic et locatif ensemble ?',
    answer:
      'Oui, c\'est l\'un des avantages d\'un ERP complet comme ImmoTopia. Vous pouvez gérer simultanément vos activités de syndic de copropriété et de gestion locative dans un seul système, avec des données centralisées et des workflows intégrés. Cela évite les doublons et améliore la cohérence.',
  },
  {
    question: 'Quelle est la différence entre un logiciel simple et un ERP ?',
    answer:
      'Un logiciel simple gère un seul aspect (ex: gestion locative uniquement) avec des données isolées. Un ERP comme ImmoTopia centralise tous les processus métiers (CRM, biens, locatif, syndic, promotion, comptabilité) dans un système intégré, avec des données partagées, des workflows automatisés et une vue globale de l\'activité.',
  },
];

export default function MeilleurLogicielImmobilierPage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* 1. HERO SECTION */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meilleur logiciel immobilier en Côte d&apos;Ivoire : comment choisir ?
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Une grille professionnelle pour sélectionner un ERP adapté à votre activité : agences, syndics, promoteurs, gestionnaires locatifs et propriétaires bailleurs. Découvrez{' '}
            <Link href="/logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              notre ERP immobilier complet
            </Link>
            {' '}et{' '}
            <Link href="/guides/choisir-logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              notre guide de choix
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

        {/* 2. POURQUOI C'EST DIFFICILE DE CHOISIR */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pourquoi est-il difficile de choisir un logiciel immobilier ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Le marché immobilier en Côte d&apos;Ivoire est en pleine croissance, et les professionnels du secteur font face à des besoins métiers très variés selon leur activité.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                  Besoins métiers différents
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Une agence immobilière a besoin d&apos;un CRM puissant et d&apos;un module annonces</li>
                  <li>Un gestionnaire locatif privilégie l&apos;automatisation des quittances et le suivi des impayés</li>
                  <li>Un syndic nécessite la gestion des AG et des appels de charges</li>
                  <li>Un promoteur doit suivre les réservations, ventes et acomptes</li>
                  <li>Un propriétaire bailleur cherche la simplicité et la visibilité sur la rentabilité</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-red-600" />
                  Outils dispersés et risques
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Données éparpillées entre Excel, WhatsApp, emails et papier</li>
                  <li>Absence de centralisation : impossible d&apos;avoir une vue d&apos;ensemble</li>
                  <li>Risques d&apos;impayés par manque de suivi automatisé</li>
                  <li>Erreurs humaines lors de la saisie manuelle</li>
                  <li>Faible reporting : décisions prises sans données fiables</li>
                  <li>Difficultés à collaborer efficacement entre équipes</li>
                </ul>
              </div>
            </div>
            <p className="text-lg">
              Face à cette complexité, choisir le bon logiciel immobilier nécessite une grille de critères claire et objective. C&apos;est ce que nous vous proposons dans ce guide.
            </p>
          </div>
        </section>

        {/* 3. LES 10 CRITÈRES QUI FONT LA DIFFÉRENCE */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Les 10 critères qui font la différence
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            Voici les critères essentiels à évaluer pour choisir le meilleur logiciel immobilier adapté à votre activité en Côte d&apos;Ivoire.
          </p>
          <div className="space-y-6">
            {/* Critère 1 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                  <Layers className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Couverture fonctionnelle complète</h3>
                  <p className="text-gray-700 mb-3">
                    Le logiciel doit couvrir l&apos;ensemble de vos besoins métiers : CRM, gestion des biens et annonces, gestion locative, syndic de copropriété, promotion immobilière, maintenance, comptabilité et trésorerie.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Un ERP complet évite la multiplication des outils et garantit la cohérence des données.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 2 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Adaptation locale (Mobile Money, usages terrain)</h3>
                  <p className="text-gray-700 mb-3">
                    Le logiciel doit intégrer les moyens de paiement locaux (Orange Money, MTN Money, Moov Money, Wave) et s&apos;adapter aux pratiques du marché ivoirien.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Plus de 80% des paiements de loyers en Côte d&apos;Ivoire se font via Mobile Money. Un logiciel non adapté crée des frictions.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 3 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Centralisation & base de données unique</h3>
                  <p className="text-gray-700 mb-3">
                    Toutes les données (clients, biens, contrats, paiements, documents) doivent être centralisées dans une base unique accessible à toute l&apos;équipe.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Évite les doublons, garantit la cohérence des données et facilite la collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 4 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg flex-shrink-0">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Automatisation des tâches répétitives</h3>
                  <p className="text-gray-700 mb-3">
                    Génération automatique de quittances, reçus, relances d&apos;impayés, alertes, rapports financiers, etc. L&apos;automatisation doit couvrir au moins 70% des tâches administratives.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Gain de temps considérable, réduction des erreurs humaines et amélioration de la productivité.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 5 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Reporting & KPI en temps réel</h3>
                  <p className="text-gray-700 mb-3">
                    Tableaux de bord personnalisables, rapports financiers, analyses de performance commerciale, suivi des impayés, taux de conversion, etc. Le tout en temps réel.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Prise de décision éclairée basée sur des données fiables et à jour.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 6 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Collaboration & gestion des rôles</h3>
                  <p className="text-gray-700 mb-3">
                    Multi-utilisateurs avec rôles et permissions personnalisés (administrateur, gestionnaire, commercial, comptable, etc.). Chaque utilisateur voit uniquement ce qui le concerne.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Facilite le travail en équipe, améliore la sécurité et la traçabilité des actions.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 7 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Sécurité & sauvegardes automatiques</h3>
                  <p className="text-gray-700 mb-3">
                    Hébergement sécurisé avec chiffrement SSL, sauvegardes automatiques quotidiennes, respect des normes de protection des données, authentification sécurisée.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Vos données sont votre actif le plus précieux. Une perte de données peut être catastrophique.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 8 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                  <Settings className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Facilité de déploiement & accompagnement</h3>
                  <p className="text-gray-700 mb-3">
                    Solution SaaS accessible via navigateur (pas d&apos;installation), accompagnement à la mise en place, formation des équipes, import des données existantes, support réactif.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Un déploiement rapide et un accompagnement de qualité garantissent l&apos;adoption par les équipes.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 9 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-100 rounded-lg flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Scalabilité (multi-agences, croissance portefeuille)</h3>
                  <p className="text-gray-700 mb-3">
                    Le logiciel doit pouvoir grandir avec votre activité : gestion de plusieurs agences, augmentation du nombre de biens, ajout de nouveaux utilisateurs, activation de nouveaux modules.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Évite de devoir changer de logiciel en cours de croissance, ce qui est coûteux et chronophage.
                  </p>
                </div>
              </div>
            </div>

            {/* Critère 10 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Coût total (TCO) vs valeur apportée</h3>
                  <p className="text-gray-700 mb-3">
                    Évaluer le coût total de possession (abonnement, formation, migration, maintenance) par rapport à la valeur apportée (gain de temps, réduction d&apos;erreurs, augmentation du chiffre d&apos;affaires).
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Pourquoi c&apos;est important :</strong> Le logiciel le moins cher n&apos;est pas toujours le plus rentable. Il faut évaluer le ROI global.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CATÉGORIES DE SOLUTIONS (COMPARAISON SANS CONCURRENTS) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Catégories de solutions : avantages et limites
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            Il existe plusieurs catégories de solutions pour gérer votre activité immobilière. Voici un comparatif objectif pour vous aider à choisir.
          </p>
          <div className="space-y-6">
            {/* Catégorie 1: Excel/WhatsApp */}
            <div className="border-l-4 border-gray-500 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Excel / WhatsApp / Papier (manuel)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Gratuit ou très peu coûteux</li>
                    <li>Familier pour la plupart des utilisateurs</li>
                    <li>Flexibilité totale</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Limites</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Aucune automatisation</li>
                    <li>Risques d&apos;erreurs élevés</li>
                    <li>Pas de centralisation</li>
                    <li>Pas de reporting automatisé</li>
                    <li>Difficile à faire évoluer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pour qui ?</h4>
                  <p className="text-sm text-gray-700">
                    Propriétaires bailleurs avec 1-2 biens uniquement. Dès 3-5 biens, les limites deviennent critiques.
                  </p>
                </div>
              </div>
            </div>

            {/* Catégorie 2: Outil locatif simple */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Outil locatif simple (mono-fonction)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Spécialisé sur la gestion locative</li>
                    <li>Génération de quittances</li>
                    <li>Suivi des loyers</li>
                    <li>Souvent abordable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Limites</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Pas de CRM intégré</li>
                    <li>Pas de gestion des annonces</li>
                    <li>Pas de syndic ni promotion</li>
                    <li>Données isolées des autres outils</li>
                    <li>Reporting limité</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pour qui ?</h4>
                  <p className="text-sm text-gray-700">
                    Gestionnaires locatifs purs qui ne font ni vente, ni syndic, ni promotion. Limité si vous voulez développer d&apos;autres activités.
                  </p>
                </div>
              </div>
            </div>

            {/* Catégorie 3: CRM générique */}
            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. CRM générique (pas immobilier)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Gestion des contacts et opportunités</li>
                    <li>Suivi commercial</li>
                    <li>Automatisation marketing</li>
                    <li>Intégrations tierces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Limites</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Pas adapté aux spécificités immobilières</li>
                    <li>Pas de gestion des biens ni contrats</li>
                    <li>Pas de quittances ni paiements</li>
                    <li>Nécessite des outils complémentaires</li>
                    <li>Configuration complexe</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pour qui ?</h4>
                  <p className="text-sm text-gray-700">
                    Agences qui font uniquement de la vente et qui externalisent la gestion locative. Pas adapté pour une activité complète.
                  </p>
                </div>
              </div>
            </div>

            {/* Catégorie 4: Outil annonces uniquement */}
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Outil annonces uniquement (lead sans gestion)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Création d&apos;annonces rapide</li>
                    <li>Portail public attractif</li>
                    <li>Génération de leads</li>
                    <li>Visibilité en ligne</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Limites</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Pas de CRM pour suivre les leads</li>
                    <li>Pas de gestion locative</li>
                    <li>Pas de contrats ni paiements</li>
                    <li>Pas de reporting financier</li>
                    <li>Données non exploitées</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pour qui ?</h4>
                  <p className="text-sm text-gray-700">
                    Agences qui veulent uniquement générer des leads en ligne mais qui gèrent le reste manuellement. Perte d&apos;opportunités de conversion.
                  </p>
                </div>
              </div>
            </div>

            {/* Catégorie 5: ERP immobilier complet (ImmoTopia) */}
            <div className="border-2 border-indigo-500 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                5. ERP immobilier complet (ImmoTopia)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Couverture complète : CRM, biens, locatif, syndic, promotion</li>
                    <li>Centralisation totale des données</li>
                    <li>Automatisation poussée (70-80%)</li>
                    <li>Reporting en temps réel</li>
                    <li>Adaptation locale (Mobile Money)</li>
                    <li>Scalabilité et modularité</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Limites</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Investissement initial (formation, migration)</li>
                    <li>Nécessite un accompagnement au démarrage</li>
                    <li>Courbe d&apos;apprentissage pour les équipes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pour qui ?</h4>
                  <p className="text-sm text-gray-700">
                    Agences, syndics, promoteurs, gestionnaires locatifs et propriétaires bailleurs qui veulent professionnaliser leur gestion, gagner du temps et développer leur activité.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg border border-indigo-200">
                <p className="text-sm text-gray-700">
                  <strong>Verdict :</strong> Un ERP complet comme ImmoTopia est le meilleur choix pour les professionnels qui veulent centraliser, automatiser et faire évoluer leur activité immobilière de manière pérenne.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TABLEAU COMPARATIF */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Tableau comparatif : quelle solution pour quels besoins ?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            Comparez les différentes catégories de solutions selon les critères essentiels pour votre activité immobilière.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Critère</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900">Excel/WhatsApp</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900">Outil locatif simple</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900">CRM générique</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900">Outil annonces</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900 bg-indigo-50">ERP complet (ImmoTopia)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">CRM & Relation client</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Partiel</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Gestion des biens</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Manuel</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Annonces & Portail public</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Gestion locative</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Manuel</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Syndic de copropriété</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Promotion immobilière</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Paiements Mobile Money</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Manuel</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Limité</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Natif</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Quittances automatiques</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Maintenance & Ticketing</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Limité</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Reporting & KPI</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Basique</td>
                  <td className="border border-gray-300 p-3 text-center">✅ Commercial</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Limité</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Collaboration multi-utilisateurs</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Limité</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Limité</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Audit & Traçabilité</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Partiel</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Complet</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Sécurité & Sauvegardes</td>
                  <td className="border border-gray-300 p-3 text-center">❌ Risqué</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Renforcé</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium text-gray-900">Scalabilité</td>
                  <td className="border border-gray-300 p-3 text-center">❌</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Limité</td>
                  <td className="border border-gray-300 p-3 text-center">✅</td>
                  <td className="border border-gray-300 p-3 text-center">⚠️ Limité</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Illimité</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-gray-700">
              <strong>Légende :</strong> ✅ = Fonctionnalité complète | ⚠️ = Fonctionnalité partielle ou limitée | ❌ = Fonctionnalité absente
            </p>
          </div>
        </section>

        {/* 6. CHECKLIST DE DÉCISION */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Checklist de décision : quel logiciel pour vous ?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            Répondez à ces 15 questions pour identifier le type de solution le plus adapté à vos besoins. Plus vous répondez &quot;oui&quot;, plus un ERP complet est recommandé.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>1.</strong> Gérez-vous plus de 5 biens immobiliers ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>2.</strong> Avez-vous plusieurs utilisateurs qui doivent accéder au système ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>3.</strong> Avez-vous besoin de générer des quittances automatiquement chaque mois ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>4.</strong> Encaissez-vous des paiements via Mobile Money (Orange Money, MTN Money, etc.) ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>5.</strong> Faites-vous de la gestion de syndic de copropriété ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>6.</strong> Avez-vous une activité de promotion immobilière ou de vente de lots ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>7.</strong> Avez-vous besoin d&apos;un CRM pour suivre vos prospects et opportunités commerciales ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>8.</strong> Souhaitez-vous publier vos annonces sur un portail public personnalisé ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>9.</strong> Avez-vous besoin de gérer des demandes de maintenance et d&apos;intervention ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>10.</strong> Souhaitez-vous automatiser les relances d&apos;impayés ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>11.</strong> Avez-vous besoin de tableaux de bord et de reporting en temps réel ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>12.</strong> Voulez-vous centraliser toutes vos données dans un seul système ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>13.</strong> Prévoyez-vous de développer votre activité (plus de biens, plus d&apos;utilisateurs) ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>14.</strong> Souhaitez-vous réduire le temps passé sur les tâches administratives ?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"></div>
                <p className="text-gray-700">
                  <strong>15.</strong> Avez-vous besoin d&apos;un historique complet et d&apos;une traçabilité de toutes les actions ?
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interprétation des résultats</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>0-3 &quot;oui&quot; :</strong> Excel ou un outil locatif simple peut suffire pour le moment.
                </p>
                <p>
                  <strong>4-7 &quot;oui&quot; :</strong> Un outil spécialisé (locatif ou CRM) est recommandé, mais vous risquez de manquer de fonctionnalités à moyen terme.
                </p>
                <p>
                  <strong>8-12 &quot;oui&quot; :</strong> Un ERP immobilier complet est fortement recommandé pour centraliser et automatiser votre activité.
                </p>
                <p>
                  <strong>13-15 &quot;oui&quot; :</strong> Un ERP immobilier complet comme ImmoTopia est indispensable pour gérer efficacement votre activité et la faire évoluer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. POUR QUI IMMOTOPIA EST LE PLUS PERTINENT */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pour qui ImmoTopia est-il le plus pertinent ?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            ImmoTopia est conçu pour répondre aux besoins spécifiques de chaque professionnel de l&apos;immobilier en Côte d&apos;Ivoire.
          </p>
          <div className="space-y-6">
            {/* Agences */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-blue-600" />
                Agences immobilières (vente + location + gestion)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Besoin</h4>
                  <p className="text-sm text-gray-700">
                    Centraliser la gestion commerciale, les biens, les annonces, les contrats et les paiements dans un seul système.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modules ImmoTopia</h4>
                  <p className="text-sm text-gray-700">
                    CRM, Biens & Annonces, Gestion locative, Portail public, Paiements Mobile Money, Reporting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Résultats</h4>
                  <p className="text-sm text-gray-700">
                    Augmentation du taux de conversion, meilleure organisation, gain de temps sur l&apos;administratif, visibilité complète.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/pour-qui/agences-immobilieres"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                >
                  En savoir plus sur ImmoTopia pour les agences
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Gestionnaires locatifs */}
            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="h-6 w-6 text-purple-600" />
                Gestionnaires locatifs
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Besoin</h4>
                  <p className="text-sm text-gray-700">
                    Automatiser la génération de quittances, le suivi des loyers, les relances d&apos;impayés et le rapprochement bancaire.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modules ImmoTopia</h4>
                  <p className="text-sm text-gray-700">
                    Gestion locative, Paiements Mobile Money, Maintenance, Comptabilité, Reporting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Résultats</h4>
                  <p className="text-sm text-gray-700">
                    Réduction drastique du temps de gestion, moins d&apos;impayés, traçabilité complète, meilleure relation locataires.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/pour-qui/gestionnaires-locatifs"
                  className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center gap-1"
                >
                  En savoir plus sur ImmoTopia pour les gestionnaires locatifs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Syndics */}
            <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-orange-600" />
                Syndics de copropriété
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Besoin</h4>
                  <p className="text-sm text-gray-700">
                    Gérer les AG, les appels de charges, le suivi des cotisations, l&apos;espace copropriétaires et les travaux.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modules ImmoTopia</h4>
                  <p className="text-sm text-gray-700">
                    Syndic, Maintenance, Comptabilité, Espace copropriétaires, Reporting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Résultats</h4>
                  <p className="text-sm text-gray-700">
                    Réduction du temps de préparation des AG, meilleure traçabilité, communication facilitée, réduction des impayés.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/pour-qui/syndics"
                  className="text-orange-600 hover:text-orange-800 font-medium inline-flex items-center gap-1"
                >
                  En savoir plus sur ImmoTopia pour les syndics
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Promoteurs */}
            <div className="border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
                Promoteurs immobiliers
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Besoin</h4>
                  <p className="text-sm text-gray-700">
                    Suivre les réservations, ventes, acomptes, échéanciers et l&apos;avancement des projets de promotion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modules ImmoTopia</h4>
                  <p className="text-sm text-gray-700">
                    Promotion immobilière, CRM, Biens & Annonces, Comptabilité, Reporting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Résultats</h4>
                  <p className="text-sm text-gray-700">
                    Visibilité en temps réel sur les ventes, meilleure gestion des acomptes, réduction des erreurs, reporting investisseurs.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/pour-qui/promoteurs-immobiliers"
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1"
                >
                  En savoir plus sur ImmoTopia pour les promoteurs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Propriétaires bailleurs */}
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Home className="h-6 w-6 text-green-600" />
                Propriétaires bailleurs (multi-biens)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Besoin</h4>
                  <p className="text-sm text-gray-700">
                    Gérer plusieurs biens, suivre les loyers, générer des quittances et avoir une visibilité sur la rentabilité.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modules ImmoTopia</h4>
                  <p className="text-sm text-gray-700">
                    Gestion locative, Paiements Mobile Money, Reporting, Portail propriétaire.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Résultats</h4>
                  <p className="text-sm text-gray-700">
                    Gain de temps considérable, meilleure organisation, visibilité sur la rentabilité, gestion professionnelle.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/pour-qui/proprietaires-bailleurs"
                  className="text-green-600 hover:text-green-800 font-medium inline-flex items-center gap-1"
                >
                  En savoir plus sur ImmoTopia pour les propriétaires bailleurs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Milieu */}
        <div className="my-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à choisir le meilleur logiciel immobilier pour votre activité ?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Découvrez comment ImmoTopia peut transformer votre gestion immobilière
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
            >
              <Link href="/tarifs">
                Voir les tarifs
              </Link>
            </Button>
          </div>
        </div>

        {/* 8. COMMENT DÉMARRER SANS RISQUE */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comment démarrer avec ImmoTopia sans risque ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Passer d&apos;Excel ou d&apos;outils dispersés à un ERP complet peut sembler intimidant. ImmoTopia propose une approche progressive et accompagnée pour garantir votre succès.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Layers className="h-6 w-6 text-blue-600" />
                  Démarrage progressif par modules
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Commencez par les modules essentiels (CRM, Biens, Gestion locative)</li>
                  <li>Activez progressivement les autres modules selon vos besoins</li>
                  <li>Chaque module fonctionne de manière indépendante</li>
                  <li>Pas besoin de tout activer dès le départ</li>
                  <li>Évolution à votre rythme</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="h-6 w-6 text-green-600" />
                  Migration depuis Excel
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Import de vos données existantes (biens, clients, contrats)</li>
                  <li>Accompagnement pour structurer vos données</li>
                  <li>Pas de perte d&apos;historique</li>
                  <li>Validation des données avant import définitif</li>
                  <li>Transition en douceur</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg border border-indigo-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Formation & mise en place</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Démo personnalisée</h4>
                    <p className="text-gray-700">
                      Présentation d&apos;ImmoTopia adaptée à votre activité et vos besoins spécifiques.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Configuration initiale</h4>
                    <p className="text-gray-700">
                      Paramétrage de votre espace, création des utilisateurs, configuration des modules activés.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Import des données</h4>
                    <p className="text-gray-700">
                      Migration de vos données existantes avec accompagnement et validation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Formation des équipes</h4>
                    <p className="text-gray-700">
                      Sessions de formation pour vos utilisateurs sur les modules activés.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Suivi & support</h4>
                    <p className="text-gray-700">
                      Accompagnement continu, support réactif et évolution selon vos besoins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {item.question}
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* 10. LIENS INTERNES VERS PAGES CONNEXES */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pour aller plus loin
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/logiciel-immobilier-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                ERP ImmoTopia complet
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Découvrez l&apos;écosystème complet ImmoTopia et tous ses modules.
              </p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/gestion-locative-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Gestion locative
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Automatisez vos quittances, loyers et relances d&apos;impayés.
              </p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/crm-immobilier-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                CRM immobilier
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Centralisez vos contacts et suivez vos opportunités commerciales.
              </p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/paiement-loyer-charges-mobile-money-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Paiements Mobile Money
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Intégration native avec Orange Money, MTN Money, Moov Money et Wave.
              </p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/pour-qui/agences-immobilieres"
              className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Pour les agences
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                ImmoTopia pour les agences immobilières : CRM, annonces, gestion.
              </p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/tarifs"
              className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Tarifs & Abonnements
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Découvrez nos formules modulaires et flexibles.
              </p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choisissez le meilleur logiciel immobilier pour votre activité
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les professionnels de l&apos;immobilier en Côte d&apos;Ivoire qui ont choisi ImmoTopia pour centraliser, automatiser et développer leur activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
              >
                <Link href="/tarifs">
                  Voir les tarifs
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

