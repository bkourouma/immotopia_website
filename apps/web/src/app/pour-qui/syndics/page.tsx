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
  AlertCircle,
  TrendingUp,
  Zap,
  Calendar,
  Home,
  Target,
  Clock,
  Shield,
  LineChart,
  Scale,
  FileCheck,
  Megaphone,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Logiciel pour syndics de copropriété en Côte d\'Ivoire | ImmoTopia',
    description:
      'ImmoTopia aide les syndics en Côte d\'Ivoire : gestion des lots et tantièmes, appels de charges, impayés, AG, espace copropriétaires, paiements Mobile Money et reporting.',
    canonicalUrl: '/pour-qui/syndics',
    keywords: [
      'logiciel syndic copropriété Côte d\'Ivoire',
      'syndic copropriété Abidjan',
      'gestion charges copropriété logiciel',
      'appels de charges copropriété',
      'logiciel assemblée générale copropriété',
      'espace copropriétaires',
      'gestion lots tantièmes',
      'logiciel recouvrement charges',
    ],
  },
  '/pour-qui/syndics'
);

const faqItems = [
  {
    question: 'Peut-on gérer plusieurs résidences ?',
    answer:
      'Oui, ImmoTopia permet de gérer un portefeuille illimité de résidences et immeubles depuis une seule interface. Chaque résidence peut avoir ses propres lots, copropriétaires, budgets et règles de gestion, tout en bénéficiant d\'un reporting consolidé au niveau du syndic.',
  },
  {
    question: 'Les lots et tantièmes sont-ils configurables ?',
    answer:
      'Absolument. Vous pouvez définir pour chaque résidence la répartition des tantièmes (millièmes) par lot, configurer les clés de répartition des charges (générales, spéciales, ascenseur, etc.) et gérer les quotes-parts de chaque copropriétaire. Le système calcule automatiquement les appels de charges en fonction de ces paramètres.',
  },
  {
    question: 'Peut-on générer des appels de charges et suivre les impayés ?',
    answer:
      'Oui, ImmoTopia génère automatiquement les appels de charges (mensuels, trimestriels ou annuels) en fonction des budgets votés et des tantièmes. Vous pouvez suivre les paiements, identifier les impayés, envoyer des relances automatiques et générer des états de compte individuels pour chaque copropriétaire.',
  },
  {
    question: 'Les copropriétaires peuvent-ils payer via Mobile Money ?',
    answer:
      'Oui, l\'intégration Mobile Money (Orange Money, MTN Money, Moov Money, Wave) permet aux copropriétaires de payer leurs charges directement depuis leur téléphone. Les paiements sont automatiquement rattachés au lot et à la période concernée, et un reçu est généré instantanément.',
  },
  {
    question: 'Peut-on préparer une AG (convocation, PV, archivage) ?',
    answer:
      'Oui, ImmoTopia facilite la préparation des assemblées générales : génération des convocations avec ordre du jour, gestion des votes et résolutions, rédaction et archivage des procès-verbaux, suivi des décisions prises. Tout l\'historique des AG est conservé et accessible.',
  },
  {
    question: 'Est-ce adapté à un petit syndic ?',
    answer:
      'Absolument. ImmoTopia s\'adapte à toutes les tailles de syndics, des petites structures gérant 1 à 3 résidences aux syndics professionnels avec un large portefeuille. Vous pouvez démarrer avec les fonctionnalités essentielles (lots, charges, paiements) et activer progressivement d\'autres modules selon vos besoins.',
  },
  {
    question: 'Peut-on activer uniquement le module Syndic ?',
    answer:
      'ImmoTopia est un ERP modulaire. Vous pouvez activer uniquement le module Syndic si c\'est votre besoin principal. Cependant, l\'intégration avec les autres modules (gestion locative, maintenance, comptabilité) apporte une valeur ajoutée significative en centralisant toutes vos données immobilières dans un seul système.',
  },
];

export default function SyndicsPage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* 1. HERO SECTION */}
        <header className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#2563EB] hover:underline">ImmoTopia</Link>
            <span>•</span>
            <Link href="/pour-qui" className="hover:text-[#2563EB] hover:underline">Solutions par profil</Link>
            <span>•</span>
            <span className="text-gray-900 font-medium">Syndics</span>
          </div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Building2 className="h-4 w-4" />
            Pour les syndics de copropriété
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Le logiciel pensé pour les syndics de copropriété en Côte d&apos;Ivoire
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Centralisez lots, charges, AG, maintenance et paiements dans un seul ERP. Découvrez notre{' '}
            <Link href="/logiciel-syndic-copropriete-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              logiciel de syndic de copropriété en Côte d'Ivoire
            </Link>
            {' '}et{' '}
            <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
              toutes les fonctionnalités
            </Link>
            {' '}disponibles. Gagnez en transparence, réduisez les impayés et pilotez vos résidences en temps réel.
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

        {/* 2. LES DOULEURS DES SYNDICS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            La réalité terrain des syndics de copropriété
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Vous gérez une ou plusieurs résidences en copropriété à Abidjan, Bouaké ou ailleurs en Côte d&apos;Ivoire. Votre quotidien ressemble probablement à ceci :
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Appels de charges manuels et impayés difficiles à suivre
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous calculez les appels de charges manuellement dans Excel, avec risque d&apos;erreurs sur les tantièmes</li>
                <li>Les copropriétaires paient par Mobile Money, espèces ou virement, mais vous n&apos;avez pas de traçabilité centralisée</li>
                <li>Impossible de savoir rapidement qui est à jour et qui est en impayé</li>
                <li>Les relances se font manuellement, par téléphone ou WhatsApp, sans suivi structuré</li>
                <li>Génération manuelle des quittances et états de compte, chronophage et source d&apos;erreurs</li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-amber-600" />
                Communication dispersée et AG lourdes
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les échanges avec les copropriétaires se font par WhatsApp, email, téléphone : aucune centralisation</li>
                <li>Pas d&apos;espace dédié où les copropriétaires peuvent consulter leurs charges et paiements</li>
                <li>Préparation des AG chronophage : convocations manuelles, ordre du jour dispersé, PV à rédiger à la main</li>
                <li>Archivage des documents (PV, règlements, décisions) dans des dossiers papier ou fichiers dispersés</li>
                <li>Difficile de prouver qu&apos;une décision a été prise ou qu&apos;un vote a eu lieu</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                Maintenance parties communes mal tracée
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les incidents sur les parties communes (ascenseur, portail, éclairage) sont signalés par téléphone ou WhatsApp</li>
                <li>Pas de suivi structuré des interventions des prestataires (plombier, électricien, gardien)</li>
                <li>Difficile de justifier les dépenses de maintenance auprès des copropriétaires</li>
                <li>Aucun historique des travaux réalisés sur la résidence</li>
                <li>Reporting manuel pour les AG : impossible de montrer rapidement l&apos;état de la résidence</li>
              </ul>
            </div>
            <p className="mt-6 text-lg font-semibold text-gray-900">
              Résultat : vous passez plus de temps à gérer l&apos;administratif et les litiges qu&apos;à assurer une gestion sereine et transparente de la copropriété.
            </p>
          </div>
        </section>

        {/* 3. CE DONT UN SYNDIC A VRAIMENT BESOIN */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ce dont un syndic de copropriété a vraiment besoin
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              Pour être efficace et transparent, un syndic de copropriété a besoin de 6 piliers fondamentaux :
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Scale className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Lots et tantièmes fiables</h3>
                </div>
                <p className="text-gray-700">
                  Base de données structurée des lots avec tantièmes (millièmes), quotes-parts et clés de répartition des charges pour chaque résidence.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Appels de charges automatisés</h3>
                </div>
                <p className="text-gray-700">
                  Génération automatique des appels de charges en fonction des budgets votés, avec calcul automatique par lot et période.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <DollarSign className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Encaissements tracés et rapprochement</h3>
                </div>
                <p className="text-gray-700">
                  Suivi des paiements par lot et période, rapprochement automatique, identification des impayés et relances structurées.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Espace copropriétaires</h3>
                </div>
                <p className="text-gray-700">
                  Portail en ligne où chaque copropriétaire peut consulter ses charges, paiements, documents et communiquer avec le syndic.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Megaphone className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">AG outillées</h3>
                </div>
                <p className="text-gray-700">
                  Préparation, convocation, gestion des votes, rédaction et archivage des PV, suivi des décisions et résolutions.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Tableau de bord recouvrement</h3>
                </div>
                <p className="text-gray-700">
                  Visibilité en temps réel sur le taux de recouvrement, les impayés par lot, les budgets et la santé financière de chaque résidence.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <p className="text-gray-900 font-semibold mb-2">
                C&apos;est exactement ce que propose ImmoTopia : un ERP immobilier complet avec un module Syndic puissant.
              </p>
              <p className="text-gray-700">
                Pas un simple tableur amélioré, mais une plateforme complète qui couvre tous les aspects de la gestion de copropriété.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Milieu */}
        <div className="my-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Découvrez comment ImmoTopia transforme la gestion de copropriété
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Rejoignez les syndics qui ont réduit leurs impayés de 40% et gagné 70% de temps sur l&apos;administratif
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

        {/* 4. COMMENT IMMOTOPIA AIDE UN SYNDIC */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comment ImmoTopia aide un syndic de copropriété
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            ImmoTopia n&apos;est pas un simple logiciel de gestion de charges. C&apos;est un ERP complet qui couvre tous les aspects de la gestion de copropriété.
          </p>
          <div className="space-y-8">
            {/* Module Syndic */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Module Syndic : lots, tantièmes, appels de charges, impayés</h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Calculs manuels des charges, erreurs sur les tantièmes, impayés difficiles à suivre, relances non structurées.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> Base structurée des lots avec tantièmes, génération automatique des appels de charges, suivi des paiements par lot et période, relances automatiques, états de compte individuels.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice syndic :</strong> Réduction de 80% du temps de gestion des charges. Moins d&apos;erreurs. Meilleur recouvrement grâce aux relances automatiques. Transparence totale pour les copropriétaires.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Lots et tantièmes configurables</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Appels de charges automatiques</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Suivi impayés et relances</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paiements Mobile Money */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <Smartphone className="h-6 w-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Paiements Mobile Money : paiements charges + reçus automatiques</h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Paiements Mobile Money non tracés automatiquement. Rapprochement manuel chronophage. Litiges sur les paiements.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> Intégration native avec Orange Money, MTN Money, Moov Money et Wave. Enregistrement automatique des paiements rattachés au lot et à la période. Génération instantanée de reçus.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice syndic :</strong> Traçabilité complète des paiements. Gain de temps de 90% sur la génération de quittances. Moins de litiges avec les copropriétaires. Meilleur recouvrement.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Paiements tracés automatiquement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Reçus générés instantanément</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Rapprochement simplifié</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance & ticketing */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Wrench className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Maintenance & ticketing : incidents parties communes, prestataires, historique</h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Incidents signalés par WhatsApp, pas de suivi structuré, difficile de justifier les dépenses de maintenance.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> Système de ticketing pour les incidents (ascenseur, portail, éclairage), suivi des interventions des prestataires, historique complet des travaux, photos et documents attachés.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice syndic :</strong> Traçabilité complète des interventions. Justification facile des dépenses auprès des copropriétaires. Meilleure gestion des prestataires. Historique pour les AG.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Ticketing incidents</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Suivi prestataires</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Historique complet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reporting */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    <Link href="/tableaux-de-bord-kpi-immobilier-cote-divoire" className="hover:underline">
                      Reporting
                    </Link>
                    {' '}: taux recouvrement, impayés par lot, budgets
                  </h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Impossible de générer des tableaux de bord en temps réel. Reporting manuel chronophage pour les AG.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> Tableaux de bord en temps réel avec KPIs clés : taux de recouvrement, impayés par lot, budgets consommés, dépenses de maintenance, évolution des charges. Découvrez notre{' '}
                    <Link href="/maintenance-immobiliere-ticketing-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                      module de maintenance et ticketing
                    </Link>
                    {' '}pour gérer les interventions.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice syndic :</strong> Décisions basées sur des données fiables. Visibilité complète sur la santé financière de chaque résidence. Préparation AG facilitée. Transparence pour les copropriétaires.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Tableaux de bord temps réel</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">KPIs financiers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Reporting AG automatisé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CAS D'USAGE CONCRET */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Cas d&apos;usage concret : de la création résidence au reporting AG
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Voici comment ImmoTopia transforme le quotidien d&apos;un syndic de copropriété, de A à Z :
          </p>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg border border-blue-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Création résidence + lots + tantièmes</h3>
                  <p className="text-gray-700">
                    Vous créez la résidence &quot;Les Jardins de Cocody&quot; avec 24 lots. Vous configurez les tantièmes (millièmes) pour chaque lot : appartement A1 = 45/1000, A2 = 50/1000, etc. Vous définissez les clés de répartition : charges générales (tous les lots), charges ascenseur (étages uniquement), charges gardiennage (tous).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Appel de charges mensuel</h3>
                  <p className="text-gray-700">
                    Le 1er du mois, vous générez l&apos;appel de charges pour tous les lots. Le système calcule automatiquement la quote-part de chaque copropriétaire en fonction des tantièmes et des budgets votés en AG. L&apos;appartement A1 doit payer 22 500 FCFA, A2 doit payer 25 000 FCFA, etc. Les appels sont envoyés par email automatiquement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Paiement Mobile Money rattaché au lot + période</h3>
                  <p className="text-gray-700">
                    Le copropriétaire du lot A1 paie ses charges (22 500 FCFA) via Orange Money. Le paiement est automatiquement enregistré dans ImmoTopia et rattaché au lot A1 pour la période de janvier 2026. Un reçu est généré et envoyé par email instantanément.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reçu / état de compte copropriétaire</h3>
                  <p className="text-gray-700">
                    Le copropriétaire du lot A1 se connecte à son espace personnel et consulte son état de compte : il voit qu&apos;il est à jour pour janvier 2026, qu&apos;il a un solde de 0 FCFA, et il peut télécharger tous ses reçus. Transparence totale.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Relances impayés</h3>
                  <p className="text-gray-700">
                    Le 10 du mois, le système identifie automatiquement les lots en impayé (A5, A12, B3). Des relances par email et SMS sont envoyées automatiquement. Le syndic peut consulter le tableau de bord des impayés et voir que le taux de recouvrement est de 85% pour janvier.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Préparation AG : convocation, votes, PV</h3>
                  <p className="text-gray-700">
                    En mars, vous préparez l&apos;AG annuelle. Vous créez l&apos;ordre du jour dans ImmoTopia, générez les convocations et les envoyez par email. Pendant l&apos;AG, vous enregistrez les votes et résolutions. Après l&apos;AG, vous rédigez le PV et l&apos;archivez dans le système. Tout est tracé et accessible.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reporting direction : recouvrement global + impayés</h3>
                  <p className="text-gray-700">
                    Vous consultez votre tableau de bord syndic : vous voyez que le taux de recouvrement global est de 92%, que 3 lots sont en impayé cumulé, que le budget maintenance a été consommé à 65%, et que la résidence est en bonne santé financière. Tout est automatisé, aucune saisie manuelle.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg border border-blue-200">
              <p className="text-gray-700 flex items-start gap-2">
                <Zap className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Résultat :</strong> Ce processus, qui prenait plusieurs jours avec Excel et WhatsApp, est maintenant automatisé à 80%. Le syndic gagne du temps, réduit les erreurs, améliore le recouvrement et renforce la transparence avec les copropriétaires.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* 6. POUR QUEL TYPE DE SYNDIC ? */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pour quel type de syndic ?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            ImmoTopia s&apos;adapte à tous les types de syndics, quelle que soit leur taille ou leur spécialité.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                Petit syndic (quelques résidences)
              </h3>
              <p className="text-gray-700 mb-3">
                Vous gérez 1 à 5 résidences en copropriété. ImmoTopia vous permet de professionnaliser votre gestion dès le départ sans investissement lourd.
              </p>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Modules recommandés :</strong> Module Syndic + Paiements Mobile Money + Reporting de base
                </span>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Bénéfice clé :</strong> Gestion professionnelle dès le départ, transparence renforcée, meilleur recouvrement
                </span>
              </div>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Syndic en croissance (multi-résidences)
              </h3>
              <p className="text-gray-700 mb-3">
                Vous gérez entre 5 et 20 résidences, avec plusieurs collaborateurs. Vous avez besoin de centraliser et de piloter l&apos;activité.
              </p>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Modules recommandés :</strong> Module Syndic + Paiements Mobile Money + Maintenance + Reporting avancé
                </span>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Bénéfice clé :</strong> Visibilité complète sur toutes les résidences, pilotage par les données, gain de temps massif
                </span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Target className="h-6 w-6 text-purple-600" />
                Administrateur de biens (mix locatif + copro)
              </h3>
              <p className="text-gray-700 mb-3">
                Vous gérez à la fois des biens en location et des copropriétés. Vous avez besoin d&apos;un ERP complet qui couvre les deux activités.
              </p>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Modules recommandés :</strong> Tous les modules (Syndic, Gestion locative, Maintenance, Reporting, Mobile Money)
                </span>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Bénéfice clé :</strong> Centralisation totale, automatisation maximale, scalabilité pour croître
                </span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Home className="h-6 w-6 text-orange-600" />
                Promoteur en gestion post-livraison
              </h3>
              <p className="text-gray-700 mb-3">
                Vous êtes promoteur et vous gérez les résidences que vous avez livrées en attendant la mise en place d&apos;un syndic définitif.
              </p>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Modules recommandés :</strong> Module Syndic + Paiements Mobile Money + Maintenance
                </span>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Bénéfice clé :</strong> Gestion professionnelle dès la livraison, satisfaction des acquéreurs, transition facilitée vers syndic définitif
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-900 font-semibold mb-2">
              ImmoTopia est modulaire et évolutif
            </p>
            <p className="text-gray-700">
              Vous pouvez démarrer avec les modules essentiels et activer progressivement d&apos;autres fonctionnalités au fur et à mesure que votre portefeuille grandit. Pas besoin de changer de logiciel quand vous évoluez.
            </p>
          </div>
        </section>

        {/* 7. POURQUOI UN ERP (ET PAS EXCEL/WHATSAPP) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pourquoi un ERP (et pas Excel/WhatsApp)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              Beaucoup de syndics utilisent encore Excel et WhatsApp. ImmoTopia propose une approche différente : un ERP centralisé.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Excel + WhatsApp (approche traditionnelle)
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Calculs manuels des charges</li>
                  <li>Erreurs sur les tantièmes</li>
                  <li>Paiements non tracés automatiquement</li>
                  <li>Communication dispersée</li>
                  <li>Pas de vue d&apos;ensemble</li>
                  <li>Relances manuelles</li>
                  <li>Risques d&apos;erreurs élevés</li>
                  <li>Temps perdu à chercher l&apos;information</li>
                  <li>Litiges fréquents avec copropriétaires</li>
                </ul>
              </div>
              <div className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  ERP centralisé (ImmoTopia)
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Calculs automatiques des charges</li>
                  <li>Tantièmes configurables et fiables</li>
                  <li>Paiements tracés automatiquement</li>
                  <li>Communication centralisée</li>
                  <li>Vue d&apos;ensemble en temps réel</li>
                  <li>Relances automatiques</li>
                  <li>Réduction drastique des erreurs</li>
                  <li>Gain de temps de 80% sur l&apos;administratif</li>
                  <li>Transparence totale, moins de litiges</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Impact concret pour un syndic</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Moins de litiges</h4>
                    <p className="text-gray-700">Transparence totale sur les charges et paiements. Les copropriétaires ont accès à leur espace personnel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LineChart className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Meilleure collecte</h4>
                    <p className="text-gray-700">Relances automatiques et paiements Mobile Money facilitent le recouvrement des charges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Gain de temps</h4>
                    <p className="text-gray-700">80% de temps gagné sur l&apos;administratif. Vous pouvez vous concentrer sur la gestion et la relation copropriétaires.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. INTÉGRATION AVEC L'ÉCOSYSTÈME IMMOTOPIA */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Intégration avec l&apos;écosystème ImmoTopia
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            ImmoTopia n&apos;est pas qu&apos;un logiciel pour syndics. C&apos;est un écosystème complet qui couvre tous les aspects de l&apos;immobilier professionnel.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link
              href="/logiciel-syndic-copropriete-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  Module Syndic
                </h3>
              </div>
              <p className="text-gray-700 mb-3">
                Module complet pour gérer vos copropriétés : lots, tantièmes, appels de charges, impayés, AG, espace copropriétaires.
              </p>
              <span className="text-blue-600 font-medium flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/paiement-loyer-charges-mobile-money-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Smartphone className="h-6 w-6 text-teal-600" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  Paiements Mobile Money
                </h3>
              </div>
              <p className="text-gray-700 mb-3">
                Intégration native avec Orange Money, MTN Money, Moov Money et Wave pour tracer vos paiements de charges.
              </p>
              <span className="text-blue-600 font-medium flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/maintenance-immobiliere-ticketing-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Wrench className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  Maintenance & Ticketing
                </h3>
              </div>
              <p className="text-gray-700 mb-3">
                Système de ticketing pour gérer les incidents sur les parties communes et suivre les interventions des prestataires.
              </p>
              <span className="text-blue-600 font-medium flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <BarChart3 className="h-6 w-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  Tableaux de bord & KPIs
                </h3>
              </div>
              <p className="text-gray-700 mb-3">
                Tableaux de bord en temps réel pour piloter vos résidences : taux de recouvrement, impayés, budgets, maintenance.
              </p>
              <span className="text-blue-600 font-medium flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-700 mb-3">
              <strong>Pour aller plus loin :</strong> Découvrez la page pilier complète sur le logiciel immobilier en Côte d&apos;Ivoire pour comprendre l&apos;ensemble de l&apos;écosystème ImmoTopia.
            </p>
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/logiciel-immobilier-cote-divoire">
                Découvrir l&apos;ERP complet ImmoTopia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* 8.5. RESSOURCES COMPLÉMENTAIRES */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ressources pour optimiser votre gestion de copropriété
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Guides pratiques</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/guides/gerer-copropriete-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Gérer efficacement une copropriété en Côte d'Ivoire
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/appels-de-charges-copropriete-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Organiser les appels de charges
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Modèles gratuits</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/modeles/appel-de-charges-copropriete-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Modèle d'appel de charges
                    </Link>
                  </li>
                  <li>
                    <Link href="/modeles/proces-verbal-ag-copropriete-cote-divoire" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                      → Modèle de PV d'assemblée générale
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ SYNDICS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes des syndics de copropriété
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                    <span className="pr-8">{item.question}</span>
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* 10. CTA FINAL */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à transformer votre gestion de copropriété ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les syndics qui ont choisi ImmoTopia pour centraliser leur activité, automatiser leurs tâches et renforcer la transparence avec leurs copropriétaires.
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
            <p className="mt-6 text-sm text-blue-100">
              Sans engagement · Configuration rapide · Support inclus
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
