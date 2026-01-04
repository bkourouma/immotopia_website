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
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Logiciel immobilier en Côte d\'Ivoire | ERP ImmoTopia',
    description:
      'ImmoTopia est un ERP immobilier SaaS en Côte d\'Ivoire : CRM, gestion des biens et annonces, gestion locative, syndic de copropriété, promotion immobilière, paiements Mobile Money et maintenance.',
    canonicalUrl: '/logiciel-immobilier-cote-divoire',
    keywords: [
      'logiciel immobilier Côte d\'Ivoire',
      'ERP immobilier Côte d\'Ivoire',
      'logiciel agence immobilière',
      'logiciel syndic copropriété',
      'CRM immobilier',
      'gestion locative',
      'promotion immobilière',
      'paiement loyer Mobile Money',
      'logiciel immobilier Abidjan',
      'gestion immobilière professionnelle',
    ],
  },
  '/logiciel-immobilier-cote-divoire'
);

const faqItems = [
  {
    question: 'ImmoTopia est-il adapté aux petites agences immobilières ?',
    answer:
      'Absolument. ImmoTopia est conçu pour s\'adapter à tous les types de structures, des petites agences aux grands groupes. Vous pouvez commencer avec les modules essentiels (CRM, biens, gestion locative) et activer progressivement d\'autres fonctionnalités selon vos besoins. L\'abonnement est flexible et évolutif.',
  },
  {
    question: 'Peut-on activer seulement certains modules d\'ImmoTopia ?',
    answer:
      'Oui, ImmoTopia fonctionne en modules. Vous pouvez activer uniquement ceux dont vous avez besoin : CRM, gestion locative, syndic, promotion immobilière, etc. Chaque module est indépendant mais s\'intègre parfaitement avec les autres pour une vue globale de votre activité.',
  },
  {
    question: 'Est-ce que ImmoTopia est multi-tenant et multi-utilisateurs ?',
    answer:
      'Oui, ImmoTopia est entièrement multi-tenant. Chaque organisation a son propre espace sécurisé. Vous pouvez créer autant d\'utilisateurs que nécessaire avec des rôles et permissions personnalisés (administrateur, gestionnaire, commercial, comptable, etc.).',
  },
  {
    question: 'Comment se passe le déploiement d\'ImmoTopia ?',
    answer:
      'ImmoTopia est une solution SaaS accessible via navigateur web. Aucune installation n\'est nécessaire. Après votre inscription, vous accédez immédiatement à votre espace. Notre équipe vous accompagne dans la configuration initiale, l\'import de vos données et la formation de vos équipes.',
  },
  {
    question: 'Quels moyens de paiement sont supportés par ImmoTopia ?',
    answer:
      'ImmoTopia intègre nativement les principaux moyens de paiement utilisés en Côte d\'Ivoire : Orange Money, MTN Money, Moov Money et Wave. Le système génère automatiquement les quittances et reçus pour chaque transaction, avec un suivi en temps réel des paiements.',
  },
  {
    question: 'Les données sont-elles sécurisées sur ImmoTopia ?',
    answer:
      'Oui, la sécurité est une priorité. ImmoTopia utilise un hébergement sécurisé avec chiffrement SSL, sauvegardes automatiques quotidiennes, et respect des normes de protection des données. Chaque utilisateur a un accès sécurisé avec authentification, et les permissions sont granulaires.',
  },
  {
    question: 'Peut-on migrer nos données existantes vers ImmoTopia ?',
    answer:
      'Oui, nous proposons un accompagnement pour l\'import de vos données depuis Excel, CSV ou d\'autres formats. Notre équipe peut vous aider à structurer et migrer vos biens, contrats, clients et historique de paiements pour une transition en douceur.',
  },
  {
    question: 'ImmoTopia fonctionne-t-il sur mobile ?',
    answer:
      'Oui, ImmoTopia est entièrement responsive et accessible sur smartphone et tablette. Vous pouvez consulter vos tableaux de bord, gérer vos biens, enregistrer des paiements et suivre vos activités depuis n\'importe quel appareil connecté à Internet.',
  },
];

export default function LogicielImmobilierCoteIvoirePage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* 1. HERO SECTION */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Logiciel immobilier en Côte d&apos;Ivoire : ERP complet pour professionnels
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            ImmoTopia est l&apos;ERP immobilier SaaS qui centralise toute votre activité :{' '}
            <Link href="/crm-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              CRM
            </Link>
            , gestion des biens, annonces,{' '}
            <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              gestion locative
            </Link>
            , syndic, promotion immobilière et{' '}
            <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              paiements Mobile Money
            </Link>
            . Découvrez{' '}
            <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
              toutes les fonctionnalités
            </Link>
            {' '}et{' '}
            <Link href="/la-solution" className="font-semibold text-[#2563EB] hover:underline">
              notre solution complète
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
              <Link href="/tarifs">
                Voir les tarifs
              </Link>
            </Button>
          </div>
        </header>

        {/* 2. PROBLÈME SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Les défis de la gestion immobilière en Côte d&apos;Ivoire
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              À Abidjan et dans les grandes villes ivoiriennes, les professionnels de l&apos;immobilier font face à des défis quotidiens qui impactent leur productivité et leur rentabilité.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Gestion dispersée et outils inadaptés
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Données éparpillées entre Excel, WhatsApp, dossiers papier et emails</li>
                <li>Absence de centralisation : impossible d&apos;avoir une vue d&apos;ensemble en temps réel</li>
                <li>Perte de temps considérable à chercher des informations</li>
                <li>Risques d&apos;erreurs humaines lors de la saisie manuelle</li>
                <li>Difficultés à collaborer efficacement entre équipes</li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-amber-600" />
                Gestion financière et impayés
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Suivi manuel des loyers et charges, source d&apos;oublis et d&apos;impayés</li>
                <li>Paiements Mobile Money non tracés automatiquement</li>
                <li>Quittances générées manuellement, processus chronophage</li>
                <li>Absence d&apos;alertes automatiques pour les retards de paiement</li>
                <li>Rapprochement bancaire complexe et chronophage</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                Manque de visibilité et de reporting
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Impossible de générer des tableaux de bord en temps réel</li>
                <li>Absence de reporting automatisé pour les dirigeants</li>
                <li>Difficultés à analyser la performance commerciale</li>
                <li>Pas de traçabilité complète des actions et interactions clients</li>
                <li>Décisions prises sans données fiables et à jour</li>
              </ul>
            </div>
            <p className="mt-6 text-lg">
              Ces problématiques sont d&apos;autant plus critiques dans un contexte où le marché immobilier ivoirien est en croissance, avec une demande locative forte et des projets de promotion immobilière en développement.
            </p>
          </div>
        </section>

        {/* 3. DÉFINITION : Qu'est-ce qu'un ERP immobilier ? */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Qu&apos;est-ce qu&apos;un ERP immobilier ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Un <strong>ERP (Enterprise Resource Planning)</strong> immobilier est une solution logicielle complète qui centralise et automatise l&apos;ensemble des processus métiers d&apos;une organisation immobilière.
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Différence entre un logiciel simple et un ERP complet</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Logiciel simple</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Gère un seul aspect (ex: gestion locative)</li>
                    <li>Données isolées, pas d&apos;intégration</li>
                    <li>Processus manuels entre les outils</li>
                    <li>Pas de vue globale de l&apos;activité</li>
                  </ul>
                </div>
                <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">ERP complet (ImmoTopia)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Centralise tous les processus métiers</li>
                    <li>Modules intégrés, données partagées</li>
                    <li>Automatisation des workflows</li>
                    <li>Tableaux de bord et reporting unifiés</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Les bénéfices d&apos;un ERP immobilier</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Centralisation</h4>
                    <p className="text-gray-700">Toutes vos données (clients, biens, contrats, paiements) dans un seul système accessible à toute l&apos;équipe.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Standardisation</h4>
                    <p className="text-gray-700">Processus uniformisés pour garantir la qualité, réduire les erreurs et faciliter la formation des équipes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Traçabilité</h4>
                    <p className="text-gray-700">Historique complet de toutes les actions, paiements et interactions pour une transparence totale.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automatisation</h4>
                    <p className="text-gray-700">Génération automatique de documents, alertes, relances et rapports pour gagner du temps.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Visibilité</h4>
                    <p className="text-gray-700">Tableaux de bord en temps réel et reporting automatisé pour une prise de décision éclairée.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Scalabilité</h4>
                    <p className="text-gray-700">Solution qui grandit avec votre activité, de la petite agence au grand groupe immobilier.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ÉCOSYSTÈME IMMOTOPIA */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            L&apos;écosystème complet ImmoTopia
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            ImmoTopia est bien plus qu&apos;un simple logiciel de gestion locative. C&apos;est un ERP immobilier complet qui couvre tous les aspects de votre activité professionnelle.
          </p>
          <div className="space-y-8">
            {/* Module CRM */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">CRM & Relation client</h3>
                  <p className="text-gray-700 mb-4">
                    Centralisez toutes vos interactions avec les clients, prospects et partenaires. Suivez les opportunités commerciales, planifiez les rendez-vous et automatisez le suivi post-vente.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Gain de temps : centralisation des contacts et historique complet</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Réduction d&apos;erreurs : pas de doublons, données à jour</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Visibilité : pipeline commercial et conversion en temps réel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Biens & Annonces */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Home className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Biens & Annonces</h3>
                  <p className="text-gray-700 mb-4">
                    Gérez votre portefeuille de biens immobiliers (vente, location, promotion). Créez et publiez des annonces sur votre portail public et synchronisez avec les plateformes externes.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Gain de temps : création d&apos;annonces rapide avec modèles</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Réduction d&apos;erreurs : fiches biens standardisées et complètes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Visibilité : statut des biens et disponibilité en temps réel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Gestion Locative */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Gestion locative</h3>
                  <p className="text-gray-700 mb-4">
                    Automatisez la gestion complète de vos locations : contrats, quittances, suivi des loyers, relances d&apos;impayés, état des lieux et gestion des dépôts de garantie.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Gain de temps : quittances et contrats générés automatiquement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Réduction d&apos;erreurs : calculs automatiques, moins d&apos;impayés</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Visibilité : tableau de bord locatif avec alertes automatiques</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Syndic */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Syndic de copropriété</h3>
                  <p className="text-gray-700 mb-4">
                    Gérez vos copropriétés : assemblées générales, appels de charges, suivi des cotisations, espace copropriétaires, gestion des travaux et maintenance.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Gain de temps : préparation AG automatisée, convocations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Réduction d&apos;erreurs : calculs de charges automatiques</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Visibilité : suivi des impayés et état financier par copropriété</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Promotion */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Promotion immobilière & Foncier</h3>
                  <p className="text-gray-700 mb-4">
                    Suivez vos projets de promotion : lots, réservations, ventes, financement, suivi des acomptes et gestion du foncier.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Gain de temps : suivi des réservations et ventes centralisé</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Réduction d&apos;erreurs : gestion des acomptes et échéanciers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Visibilité : tableau de bord promotion avec taux de vente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Mobile Money */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <Smartphone className="h-6 w-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Paiements Mobile Money</h3>
                  <p className="text-gray-700 mb-4">
                    Intégration native avec Orange Money, MTN Money, Moov Money et Wave. Enregistrement automatique des paiements, génération de quittances et rapprochement bancaire.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Gain de temps : paiements enregistrés automatiquement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Réduction d&apos;erreurs : traçabilité complète, moins de litiges</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Visibilité : suivi en temps réel des paiements et solde</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Maintenance */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Settings className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Maintenance & Ticketing</h3>
                  <p className="text-gray-700 mb-4">
                    Gérez les demandes d&apos;intervention, suivez les interventions, planifiez la maintenance préventive et facturez les prestations.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Gain de temps : tickets créés automatiquement, suivi simplifié</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Réduction d&apos;erreurs : historique complet, pas de perte d&apos;info</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Visibilité : tableau de bord maintenance avec priorités</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Comptabilité */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <CreditCard className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Comptabilité & Trésorerie</h3>
                  <p className="text-gray-700 mb-4">
                    Suivez vos recettes et dépenses, générez des états financiers, effectuez le rapprochement bancaire et préparez vos déclarations.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Gain de temps : rapprochement automatique, états générés</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Réduction d&apos;erreurs : traçabilité complète, moins d&apos;écarts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Visibilité : tableau de bord financier en temps réel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. POUR QUI ? */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pour qui est conçu ImmoTopia ?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            ImmoTopia s&apos;adapte à tous les professionnels de l&apos;immobilier en Côte d&apos;Ivoire, quelle que soit leur taille ou leur spécialité.
          </p>
          <div className="space-y-6">
            {/* Agences */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-blue-600" />
                Agences immobilières
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problèmes :</strong> Gestion dispersée entre plusieurs outils, difficultés à suivre les mandats et visites, perte d&apos;opportunités commerciales, reporting manuel chronophage.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution ImmoTopia :</strong> CRM intégré pour suivre tous vos contacts et opportunités, gestion centralisée des biens et annonces, automatisation des relances et génération de rapports commerciaux.
              </p>
              <p className="text-gray-700">
                <strong>Bénéfices :</strong> Augmentation du taux de conversion, meilleure organisation des équipes commerciales, gain de temps sur la gestion administrative, visibilité complète sur l&apos;activité.
              </p>
            </div>

            {/* Syndics */}
            <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-orange-600" />
                Syndics de copropriété
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problèmes :</strong> Gestion manuelle des appels de charges, préparation d&apos;AG chronophage, suivi des impayés complexe, communication difficile avec les copropriétaires.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution ImmoTopia :</strong> Module syndic dédié avec gestion des AG, calculs automatiques des charges, espace copropriétaires, suivi des cotisations et relances automatisées.
              </p>
              <p className="text-gray-700">
                <strong>Bénéfices :</strong> Réduction du temps de préparation des AG, meilleure traçabilité des charges, communication facilitée, réduction des impayés grâce aux alertes automatiques.
              </p>
            </div>

            {/* Promoteurs */}
            <div className="border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
                Promoteurs immobiliers
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problèmes :</strong> Suivi manuel des réservations et ventes, gestion complexe des acomptes et échéanciers, difficultés à suivre l&apos;avancement des projets, reporting financier manuel.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution ImmoTopia :</strong> Module promotion avec gestion des lots, suivi des réservations et ventes, gestion des acomptes, échéanciers automatiques et reporting de performance.
              </p>
              <p className="text-gray-700">
                <strong>Bénéfices :</strong> Visibilité en temps réel sur les ventes, meilleure gestion des acomptes, réduction des erreurs de facturation, reporting automatisé pour les investisseurs.
              </p>
            </div>

            {/* Gestionnaires */}
            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="h-6 w-6 text-purple-600" />
                Gestionnaires locatifs
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problèmes :</strong> Suivi manuel des loyers, quittances générées à la main, impayés difficiles à gérer, absence de traçabilité des paiements Mobile Money, rapprochement bancaire chronophage.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution ImmoTopia :</strong> Gestion locative complète avec contrats, quittances automatiques, suivi des paiements Mobile Money, relances automatisées et rapprochement bancaire simplifié.
              </p>
              <p className="text-gray-700">
                <strong>Bénéfices :</strong> Réduction drastique du temps de gestion, moins d&apos;impayés grâce aux alertes, traçabilité complète, meilleure relation avec les locataires.
              </p>
            </div>

            {/* Propriétaires */}
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Home className="h-6 w-6 text-green-600" />
                Propriétaires bailleurs
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problèmes :</strong> Gestion manuelle de plusieurs biens, difficultés à suivre les loyers et charges, quittances à générer manuellement, absence de visibilité sur la rentabilité.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution ImmoTopia :</strong> Portail propriétaire avec vue d&apos;ensemble de tous vos biens, suivi automatique des loyers, quittances générées automatiquement, reporting financier simplifié.
              </p>
              <p className="text-gray-700">
                <strong>Bénéfices :</strong> Gain de temps considérable, meilleure organisation, visibilité sur la rentabilité de chaque bien, gestion professionnelle même pour les petits portefeuilles.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Milieu */}
        <div className="my-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Découvrez comment ImmoTopia peut transformer votre gestion immobilière
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Rejoignez les professionnels qui automatisent 80% de leurs tâches administratives
          </p>
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
        </div>

        {/* 6. WORKFLOW */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comment ça marche : un workflow automatisé de bout en bout
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            ImmoTopia automatise l&apos;ensemble de votre processus, du premier contact avec un prospect jusqu&apos;au reporting financier.
          </p>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg border border-blue-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Prospect & Qualification</h3>
                  <p className="text-gray-700">
                    Un prospect vous contacte via votre site ou directement. Il est automatiquement enregistré dans votre CRM avec son historique. Vous planifiez une visite directement depuis le système.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestion du bien & Annonce</h3>
                  <p className="text-gray-700">
                    Le bien est enregistré dans ImmoTopia avec toutes ses caractéristiques. Une annonce est créée automatiquement et publiée sur votre portail public. Les photos et documents sont centralisés.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Contrat & Signature</h3>
                  <p className="text-gray-700">
                    Une fois le locataire/acquéreur choisi, le contrat est généré automatiquement depuis un modèle. Il peut être signé électroniquement. Le dépôt de garantie est enregistré.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Paiement & Quittance</h3>
                  <p className="text-gray-700">
                    Le locataire paie via Mobile Money (Orange Money, MTN Money, etc.). Le paiement est enregistré automatiquement dans ImmoTopia. Une quittance est générée et envoyée automatiquement par email.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Suivi & Alertes</h3>
                  <p className="text-gray-700">
                    Si un loyer est en retard, ImmoTopia envoie automatiquement une alerte et génère une relance personnalisée. Vous suivez en temps réel l&apos;état de tous vos contrats depuis le tableau de bord.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reporting & Analyse</h3>
                  <p className="text-gray-700">
                    À tout moment, vous générez des rapports financiers, des états de trésorerie, des analyses de performance commerciale. Tout est automatisé et disponible en un clic.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg border border-blue-200">
              <p className="text-gray-700 flex items-start gap-2">
                <Zap className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Résultat :</strong> Ce processus, qui prenait plusieurs heures avec des outils traditionnels, est maintenant automatisé à 80%. Vous gagnez du temps, réduisez les erreurs et améliorez la satisfaction client.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* 7. MOBILE MONEY & AUTOMATISATION */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Mobile Money & Automatisation : l&apos;atout clé pour la Côte d&apos;Ivoire
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              En Côte d&apos;Ivoire, le Mobile Money (Orange Money, MTN Money, Moov Money, Wave) est devenu le moyen de paiement privilégié pour les loyers et charges. ImmoTopia intègre nativement ces solutions pour une gestion automatisée.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                  Pourquoi c&apos;est clé en Côte d&apos;Ivoire
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Plus de 80% des paiements de loyers se font via Mobile Money</li>
                  <li>Accessibilité : pas besoin de compte bancaire traditionnel</li>
                  <li>Rapidité : paiements instantanés, 24/7</li>
                  <li>Sécurité : transactions tracées et sécurisées</li>
                  <li>Adoption massive par la population ivoirienne</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-green-600" />
                  Automatisation avec ImmoTopia
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Paiements rattachés automatiquement au contrat et à la période</li>
                  <li>Quittances et reçus générés automatiquement</li>
                  <li>État de compte mis à jour en temps réel</li>
                  <li>Rapprochement bancaire simplifié</li>
                  <li>Alertes automatiques en cas de retard</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg border border-teal-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Exemple concret : gestion d&apos;un loyer</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>1. Le locataire paie 150 000 FCFA via Orange Money</strong> le 5 du mois pour son loyer de janvier.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>2. Le paiement est enregistré dans ImmoTopia</strong> (manuellement ou via intégration si disponible) et rattaché automatiquement au contrat et à la période concernée.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>3. Une quittance est générée automatiquement</strong> avec toutes les informations légales (montant, période, références) et envoyée par email au locataire.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>4. L&apos;état de compte est mis à jour</strong> en temps réel. Le tableau de bord affiche immédiatement que le loyer de janvier est payé.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>5. Le rapprochement bancaire</strong> est simplifié : tous les paiements Mobile Money sont centralisés et tracés dans ImmoTopia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-gray-700">
                  <strong>Résultat :</strong> Ce qui prenait 15-20 minutes par loyer (enregistrement, génération quittance, envoi email, mise à jour Excel) est maintenant automatisé en quelques secondes. Sur un portefeuille de 50 biens, c&apos;est un gain de plus de 10 heures par mois.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. COMPARATIF */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Avant / Après : la transformation avec ImmoTopia
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">Aspect</th>
                  <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900 bg-red-50">Avant (Excel/WhatsApp/Papier)</th>
                  <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900 bg-green-50">Après (ImmoTopia ERP)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Centralisation des données</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Données éparpillées entre plusieurs fichiers et outils</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Toutes les données centralisées dans un seul système</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Tableaux de bord</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Pas de vue d&apos;ensemble, reporting manuel</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Tableaux de bord en temps réel, reporting automatisé</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Génération de documents</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Quittances, contrats générés manuellement</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Documents générés automatiquement depuis modèles</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Alertes et relances</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Relances manuelles, risques d&apos;oubli</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Alertes automatiques, relances personnalisées</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Paiements Mobile Money</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Enregistrement manuel, pas de traçabilité</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Enregistrement simplifié, traçabilité complète</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Collaboration équipe</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Difficultés à partager l&apos;information</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Accès multi-utilisateurs avec permissions</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Rapprochement bancaire</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Processus manuel chronophage</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Rapprochement simplifié, données centralisées</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium text-gray-900">Temps de gestion</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Plusieurs heures par jour sur tâches administratives</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Réduction de 70-80% du temps administratif</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur ImmoTopia
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

        {/* 10. CTA FINAL */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl text-center border-2 border-blue-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Prêt à transformer votre gestion immobilière ?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Rejoignez les professionnels de l&apos;immobilier en Côte d&apos;Ivoire qui automatisent leur activité avec ImmoTopia
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
                href="/la-solution"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Découvrez la solution ImmoTopia
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
                href="/pour-qui"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Pour qui est ImmoTopia ?
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
                → CRM immobilier en Côte d&apos;Ivoire
              </Link>
            </li>
            <li>
              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Paiement loyer Mobile Money
              </Link>
            </li>
            <li>
              <Link
                href="/pour-qui/agences-immobilieres"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Pour les agences immobilières
              </Link>
            </li>
            <li>
              <Link
                href="/pour-qui/gestionnaires-locatifs"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Pour les gestionnaires locatifs
              </Link>
            </li>
            <li>
              <Link
                href="/immotopia-vs-excel"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → ImmoTopia vs Excel
              </Link>
            </li>
            <li>
              <Link
                href="/fonctionnalites/syndic-copropriete"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Syndic de copropriété
              </Link>
            </li>
            <li>
              <Link
                href="/fonctionnalites/promotion-immobiliere"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Promotion immobilière
              </Link>
            </li>
            <li>
              <Link
                href="/fonctionnalites/paiements-mobile-money"
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
            <li>
              <Link
                href="/contact?demo=true"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Planifier une démonstration personnalisée
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}

