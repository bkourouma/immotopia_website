import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateFAQSchema, generateArticleSchema } from '@/lib/structured-data';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Smartphone,
  TrendingUp,
  Globe,
  Users,
  Zap,
  Shield,
  BarChart3,
  AlertCircle,
  Target,
  Lightbulb,
  Rocket,
  MapPin,
  DollarSign,
  FileText,
  Calendar,
  Home,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Digitaliser la gestion immobilière en Afrique | Vision ImmoTopia',
    description:
      'Pourquoi et comment digitaliser la gestion immobilière en Afrique : enjeux, défis, opportunités et rôle des ERP immobiliers africains.',
    canonicalUrl: '/vision/digitalisation-immobilier-afrique',
    keywords: [
      'digitalisation immobilière Afrique',
      'ERP immobilier africain',
      'transformation digitale immobilier',
      'logiciel immobilier Afrique',
      'gestion immobilière digitale',
      'Mobile Money immobilier',
      'innovation immobilière Afrique',
      'PropTech Afrique',
      'digitalisation secteur immobilier',
      'technologie immobilière Afrique',
    ],
  },
  '/vision/digitalisation-immobilier-afrique'
);

const faqItems = [
  {
    question: 'Pourquoi la digitalisation est-elle cruciale pour l\'immobilier africain ?',
    answer:
      'La digitalisation permet de structurer un secteur largement informel, de réduire les pertes financières liées aux impayés et à la mauvaise gestion, d\'améliorer la transparence, de faciliter l\'accès au financement et de professionnaliser les acteurs. Elle transforme l\'immobilier d\'un secteur opaque en un écosystème moderne, traçable et efficient.',
  },
  {
    question: 'Quels sont les principaux obstacles à la digitalisation immobilière en Afrique ?',
    answer:
      'Les obstacles incluent : la résistance au changement des acteurs habitués aux méthodes traditionnelles, le manque de formation digitale, la connectivité internet inégale, les coûts perçus des solutions technologiques, et la complexité de l\'écosystème avec de nombreux acteurs informels. Cependant, ces obstacles diminuent rapidement avec la pénétration mobile et l\'émergence de solutions adaptées au contexte africain.',
  },
  {
    question: 'Comment un ERP immobilier s\'adapte-t-il aux spécificités africaines ?',
    answer:
      'Un ERP immobilier africain doit intégrer : le paiement Mobile Money (Orange Money, MTN, Wave, Moov), la gestion multi-devises, la flexibilité pour gérer l\'informel, des interfaces multilingues, un fonctionnement en mode déconnecté partiel, et des workflows adaptés aux pratiques locales (cautions multiples, garants, paiements fractionnés). Il doit être accessible, abordable et pensé pour les réalités du terrain.',
  },
  {
    question: 'Quel est l\'impact de la digitalisation sur la rentabilité des acteurs immobiliers ?',
    answer:
      'La digitalisation améliore significativement la rentabilité : réduction des impayés de 30-50% grâce aux relances automatiques, gain de temps de 60-70% sur les tâches administratives, diminution des erreurs comptables, meilleure visibilité financière permettant des décisions éclairées, et capacité à gérer plus de biens avec les mêmes ressources. Le ROI est généralement atteint en 3-6 mois.',
  },
  {
    question: 'Comment ImmoTopia contribue-t-il à la digitalisation immobilière en Afrique ?',
    answer:
      'ImmoTopia est un ERP immobilier conçu pour l\'Afrique, intégrant Mobile Money, multi-devises, et workflows adaptés aux pratiques locales. Il centralise CRM, gestion locative, syndic, promotion et comptabilité dans une solution SaaS accessible. ImmoTopia accompagne la professionnalisation du secteur en offrant des outils de niveau international adaptés aux réalités africaines, sans compromis sur la qualité.',
  },
];

export default function DigitalisationImmobilierAfriquePage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });
  
  const articleSchema = generateArticleSchema({
    headline: 'Digitaliser la gestion immobilière en Afrique : enjeux et opportunités',
    description:
      'Analyse stratégique de la transformation digitale du secteur immobilier africain, des défis actuels aux opportunités futures.',
    datePublished: '2024-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'ImmoTopia',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ImmoTopia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://immotopia.immo-annonces.fr/logo.png',
      },
    },
    mainEntityOfPage: 'https://immotopia.immo-annonces.fr/vision/digitalisation-immobilier-afrique',
  });

  return (
    <>
      <StructuredData data={[articleSchema, faqSchema]} />
      <article className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* HERO SECTION */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="h-4 w-4" />
            Vision & Leadership
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Digitaliser la gestion immobilière en Afrique
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pourquoi et comment transformer un secteur clé de l&apos;économie africaine par la technologie : enjeux, défis, opportunités et rôle des ERP immobiliers. Découvrez{' '}
            <Link href="/logiciel-immobilier-afrique" className="font-semibold text-[#2563EB] hover:underline">
              notre ERP immobilier pour l'Afrique
            </Link>
            {' '}et{' '}
            <Link href="/la-solution/technologies" className="font-semibold text-[#2563EB] hover:underline">
              nos technologies
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/la-solution">
                Découvrir ImmoTopia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Demander une démo</Link>
            </Button>
          </div>
        </header>

        {/* BREADCRUMB */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/logiciel-immobilier-cote-divoire" className="hover:text-blue-600">Logiciel immobilier</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Digitalisation immobilière en Afrique</span>
        </nav>

        {/* SECTION 1: POURQUOI L'IMMOBILIER AFRICAIN DOIT SE DIGITALISER */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Globe className="h-8 w-8 text-blue-600" />
            Pourquoi l&apos;immobilier africain doit se digitaliser
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              L&apos;immobilier représente <strong>l&apos;un des secteurs économiques les plus importants d&apos;Afrique</strong>, générant des milliards de dollars de transactions annuelles et employant des millions de personnes. Pourtant, il reste largement <strong>informel, opaque et inefficient</strong>.
            </p>

            <p>
              Selon la Banque Mondiale, <strong>plus de 70% des transactions immobilières en Afrique subsaharienne se font encore sans traçabilité digitale</strong>. Les conséquences sont lourdes : pertes financières massives, litiges fréquents, difficultés d&apos;accès au crédit, et frein à l&apos;investissement institutionnel.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                Le coût de l&apos;informel
              </p>
              <p className="text-blue-800">
                Les professionnels de l&apos;immobilier africain perdent en moyenne <strong>30 à 40% de leur chiffre d&apos;affaires potentiel</strong> à cause de l&apos;absence d&apos;outils de gestion modernes : impayés non suivis, biens vacants non détectés, charges non récupérées, opportunités commerciales manquées.
              </p>
            </div>

            <p>
              La digitalisation n&apos;est pas une option, c&apos;est une <strong>nécessité stratégique</strong> pour :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Structurer le secteur</strong> : passer d&apos;un marché informel à un écosystème professionnel, traçable et régulé</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Améliorer la rentabilité</strong> : réduire drastiquement les pertes liées aux impayés, erreurs de gestion et inefficiences opérationnelles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Faciliter l&apos;accès au financement</strong> : fournir aux banques et investisseurs des données fiables pour débloquer le crédit immobilier</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Protéger les parties prenantes</strong> : sécuriser propriétaires, locataires et gestionnaires grâce à la traçabilité et la transparence</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Attirer les investissements</strong> : rassurer les investisseurs institutionnels avec des processus conformes aux standards internationaux</span>
              </li>
            </ul>

            <p>
              L&apos;Afrique connaît une <strong>urbanisation accélérée</strong> : d&apos;ici 2050, 60% de la population africaine vivra en ville (contre 40% aujourd&apos;hui). Cette croissance urbaine exige une gestion immobilière moderne, capable de gérer des volumes croissants avec efficacité et transparence.
            </p>

            <p>
              La digitalisation n&apos;est pas qu&apos;une question d&apos;outils : c&apos;est un <strong>changement de paradigme</strong> qui transforme l&apos;immobilier d&apos;un secteur artisanal en une industrie structurée, créatrice de valeur et d&apos;emplois qualifiés.
            </p>
          </div>
        </section>

        {/* SECTION 2: LES LIMITES DES PRATIQUES ACTUELLES */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <AlertCircle className="h-8 w-8 text-orange-600" />
            Les limites des pratiques actuelles
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Aujourd&apos;hui, la majorité des professionnels de l&apos;immobilier en Afrique gèrent leur activité avec des <strong>outils inadaptés</strong> : Excel, WhatsApp, cahiers papier, et mémoire personnelle. Ces méthodes, héritées d&apos;une époque pré-digitale, montrent leurs limites face à la complexité croissante du secteur.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Excel : l&apos;illusion de la maîtrise</h3>

            <p>
              Excel est l&apos;outil le plus utilisé par les gestionnaires immobiliers africains. Pourtant, il génère des <strong>problèmes structurels majeurs</strong> :
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <h4 className="font-bold text-red-900">Erreurs humaines fréquentes</h4>
                </div>
                <p className="text-red-800 text-sm">
                  Saisies manuelles répétées, formules écrasées par erreur, versions multiples non synchronisées. Une seule erreur peut fausser toute la comptabilité.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <h4 className="font-bold text-red-900">Absence de traçabilité</h4>
                </div>
                <p className="text-red-800 text-sm">
                  Impossible de savoir qui a modifié quoi, quand et pourquoi. En cas de litige, aucune preuve fiable.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <h4 className="font-bold text-red-900">Pas d&apos;automatisation</h4>
                </div>
                <p className="text-red-800 text-sm">
                  Chaque relance, chaque quittance, chaque rapport doit être créé manuellement. Perte de temps massive et risque d&apos;oublis.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <h4 className="font-bold text-red-900">Données isolées</h4>
                </div>
                <p className="text-red-800 text-sm">
                  Fichiers Excel séparés pour les biens, les locataires, les paiements. Aucune vue d&apos;ensemble, impossible de croiser les données.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">WhatsApp : communication, pas gestion</h3>

            <p>
              WhatsApp est devenu l&apos;outil de communication privilégié en Afrique, y compris pour l&apos;immobilier. Mais <strong>communiquer n&apos;est pas gérer</strong> :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold flex-shrink-0">×</span>
                <span>Les messages se perdent dans le flux, impossible de retrouver une information clé</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold flex-shrink-0">×</span>
                <span>Aucune structure : pas de dossier locataire, pas d&apos;historique de paiement centralisé</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold flex-shrink-0">×</span>
                <span>Dépendance à une personne : si le gestionnaire part, toute la mémoire de l&apos;activité disparaît</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold flex-shrink-0">×</span>
                <span>Pas de reporting : impossible de générer des états financiers fiables pour les propriétaires ou les banques</span>
              </li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
              <p className="text-lg font-semibold text-orange-900 mb-2">
                Le coût caché de l&apos;informel
              </p>
              <p className="text-orange-800">
                Un gestionnaire qui gère 50 biens avec Excel et WhatsApp passe <strong>60 à 70% de son temps sur des tâches administratives</strong> (saisies, relances manuelles, recherche d&apos;informations) au lieu de se concentrer sur le développement commercial et la satisfaction client.
              </p>
            </div>

            <p>
              Ces pratiques ne sont pas viables à long terme. Elles <strong>limitent la croissance</strong>, augmentent les risques juridiques et financiers, et empêchent la professionnalisation du secteur.
            </p>
          </div>
        </section>

        {/* SECTION 3: SPÉCIFICITÉS AFRICAINES */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MapPin className="h-8 w-8 text-green-600" />
            Spécificités africaines : pourquoi les solutions occidentales ne suffisent pas
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              La digitalisation de l&apos;immobilier africain ne peut pas se contenter de <strong>copier-coller des solutions occidentales</strong>. Le contexte africain présente des spécificités uniques qui exigent des outils pensés pour le terrain.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Mobile Money : le système de paiement dominant</h3>

            <p>
              En Afrique, <strong>Mobile Money a révolutionné les paiements</strong>. Orange Money, MTN Mobile Money, Wave, Moov Money sont utilisés par des centaines de millions de personnes. Dans de nombreux pays, <strong>plus de 60% des paiements de loyers se font via Mobile Money</strong>.
            </p>

            <p>
              Un ERP immobilier africain doit donc :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <Smartphone className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Intégrer nativement Mobile Money</strong> : enregistrer automatiquement les paiements Orange Money, MTN, Wave, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Gérer les multi-devises</strong> : FCFA, Ariary, Franc Guinéen, etc., avec taux de change automatiques</span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Permettre les paiements fractionnés</strong> : beaucoup de locataires paient en plusieurs fois dans le mois</span>
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <p className="text-lg font-semibold text-green-900 mb-2">
                Mobile Money : un avantage compétitif africain
              </p>
              <p className="text-green-800">
                Contrairement à l&apos;Occident où les virements bancaires dominent, l&apos;Afrique a <strong>sauté l&apos;étape bancaire traditionnelle</strong> pour adopter massivement le mobile. Un ERP qui ignore Mobile Money est tout simplement inutilisable pour 70% des professionnels africains.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Gestion de l&apos;informel et de la flexibilité</h3>

            <p>
              L&apos;immobilier africain mélange <strong>formel et informel</strong>. Un même gestionnaire peut gérer des immeubles modernes avec bail notarié et des logements informels avec accord verbal. Un ERP africain doit être <strong>flexible sans sacrifier la rigueur</strong> :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Gérer des baux formels ET des accords verbaux (avec traçabilité)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Accepter des garants multiples (famille élargie, employeur, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Permettre des cautions en nature ou fractionnées</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>S&apos;adapter aux cycles de paiement irréguliers (salaires mensuels, revenus informels)</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Multi-acteurs et écosystème complexe</h3>

            <p>
              L&apos;immobilier africain implique de <strong>nombreux acteurs</strong> : propriétaires (souvent diaspora), gestionnaires locaux, locataires, sous-locataires, gardiens, artisans, autorités locales. Un ERP doit permettre :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Gestion multi-propriétaires</strong> : un gestionnaire gère souvent des biens pour plusieurs propriétaires différents</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Portails dédiés</strong> : propriétaires, locataires et copropriétaires doivent pouvoir consulter leurs données en temps réel</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Communication multicanale</strong> : SMS, WhatsApp, email, selon les préférences et l&apos;accès internet</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Connectivité et accessibilité</h3>

            <p>
              La connectivité internet en Afrique est <strong>inégale</strong>. Un ERP immobilier africain doit :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <span>Être <strong>léger et rapide</strong>, même avec une connexion 3G</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <span>Permettre un <strong>mode déconnecté partiel</strong> pour les consultations essentielles</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <span>Être <strong>accessible sur mobile</strong> (smartphone Android majoritaire)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <span>Proposer des <strong>tarifs adaptés</strong> au pouvoir d&apos;achat local</span>
              </li>
            </ul>

            <p>
              Ces spécificités ne sont pas des contraintes, ce sont des <strong>opportunités d&apos;innovation</strong>. L&apos;Afrique peut construire un écosystème immobilier digital <strong>plus moderne et plus inclusif</strong> que celui de l&apos;Occident, en s&apos;appuyant sur le mobile et en évitant les lourdeurs des systèmes legacy.
            </p>
          </div>
        </section>

        {/* SECTION 4: RÔLE DES ERP IMMOBILIERS AFRICAINS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Rocket className="h-8 w-8 text-purple-600" />
            Le rôle des ERP immobiliers africains
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Un <strong>ERP (Enterprise Resource Planning) immobilier</strong> est bien plus qu&apos;un simple logiciel de gestion locative. C&apos;est une <strong>plateforme intégrée</strong> qui centralise tous les processus métiers de l&apos;immobilier : CRM, gestion des biens, annonces, locatif, syndic, promotion, comptabilité, et reporting.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pourquoi un ERP plutôt qu&apos;un logiciel simple ?</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Building2 className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <h4 className="font-bold text-purple-900">Vision 360°</h4>
                </div>
                <p className="text-purple-800 text-sm">
                  Toutes les données sont centralisées : un locataire, un bien, un propriétaire = une seule source de vérité. Fini les doublons et incohérences.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <h4 className="font-bold text-purple-900">Automatisation totale</h4>
                </div>
                <p className="text-purple-800 text-sm">
                  Relances automatiques, génération de quittances, calcul des charges, reporting financier : tout se fait sans intervention manuelle.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <BarChart3 className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <h4 className="font-bold text-purple-900">Pilotage par la data</h4>
                </div>
                <p className="text-purple-800 text-sm">
                  Tableaux de bord en temps réel : taux d&apos;occupation, impayés, rentabilité par bien, performance commerciale. Décisions éclairées.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <h4 className="font-bold text-purple-900">Conformité et traçabilité</h4>
                </div>
                <p className="text-purple-800 text-sm">
                  Chaque action est tracée, chaque document archivé. En cas de contrôle ou de litige, toutes les preuves sont disponibles.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Les modules essentiels d&apos;un ERP immobilier africain</h3>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  CRM immobilier
                </h4>
                <p>
                  Gestion des contacts (prospects, clients, propriétaires), suivi des opportunités commerciales, historique des interactions, relances automatiques. Le CRM transforme chaque contact en opportunité de croissance.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Home className="h-5 w-5 text-green-600" />
                  Gestion des biens et annonces
                </h4>
                <p>
                  Catalogue complet des biens (vente, location), publication automatique sur portail web et réseaux sociaux, gestion des visites, suivi des mandats. Maximise la visibilité et accélère les transactions.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-orange-600" />
                  Gestion locative
                </h4>
                <p>
                  Baux, quittances automatiques, suivi des paiements (Mobile Money inclus), relances impayés, états des lieux, gestion des charges. Le cœur de la rentabilité locative.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-purple-600" />
                  Syndic de copropriété
                </h4>
                <p>
                  Gestion des copropriétaires, appels de charges, assemblées générales, votes, travaux, comptabilité de copropriété. Transparence totale pour les copropriétaires.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-red-600" />
                  Promotion immobilière
                </h4>
                <p>
                  Gestion de projets de construction, suivi des réservations, échéanciers de paiement, livraisons. Pilotage complet du cycle de vie d&apos;un projet immobilier.
                </p>
              </div>

              <div className="border-l-4 border-gray-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-gray-600" />
                  Comptabilité et reporting
                </h4>
                <p>
                  Comptabilité intégrée, rapports financiers automatiques pour propriétaires, tableaux de bord KPI, exports comptables. Vision financière claire et temps réel.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
              <p className="text-lg font-semibold text-purple-900 mb-2">
                L&apos;intégration : la vraie valeur d&apos;un ERP
              </p>
              <p className="text-purple-800">
                La puissance d&apos;un ERP ne vient pas de la somme de ses modules, mais de leur <strong>intégration</strong>. Un prospect CRM devient locataire, son bail génère automatiquement des quittances, ses paiements Mobile Money sont enregistrés en temps réel, le propriétaire reçoit son rapport mensuel automatiquement. <strong>Zéro ressaisie, zéro erreur, zéro perte de temps.</strong>
              </p>
            </div>

            <p>
              Un ERP immobilier africain bien conçu ne se contente pas de digitaliser l&apos;existant : il <strong>réinvente les processus</strong> pour les rendre plus efficients, plus transparents et plus rentables.
            </p>
          </div>
        </section>

        {/* SECTION 5: CAS D'USAGE CONCRETS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-blue-600" />
            Cas d&apos;usage concrets : la digitalisation en action
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              La digitalisation n&apos;est pas qu&apos;un concept théorique. Voici comment elle transforme concrètement le quotidien des professionnels de l&apos;immobilier africain.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cas 1 : Agence immobilière à Abidjan</h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-900 mb-3">Situation avant digitalisation :</p>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• 200 contacts prospects dans Excel, sans suivi structuré</li>
                <li>• Annonces publiées manuellement sur Facebook, WhatsApp et sites d&apos;annonces</li>
                <li>• Perte de 40% des leads par manque de relance</li>
                <li>• Impossible de mesurer la performance commerciale</li>
                <li>• 3 agents passent 50% de leur temps sur des tâches administratives</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-green-900 mb-3">Après digitalisation avec ERP :</p>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• <strong>CRM centralisé</strong> : tous les prospects tracés, relances automatiques, historique complet</li>
                <li>• <strong>Publication automatique</strong> : une annonce créée = diffusion sur portail web, Facebook, WhatsApp</li>
                <li>• <strong>Taux de conversion +60%</strong> grâce au suivi systématique des leads</li>
                <li>• <strong>Tableaux de bord</strong> : performance par agent, par source de leads, par type de bien</li>
                <li>• <strong>Gain de temps 70%</strong> : les agents se concentrent sur la vente et la relation client</li>
              </ul>
              <p className="mt-4 font-bold text-green-900">
                Résultat : chiffre d&apos;affaires +80% en 12 mois, sans embauche supplémentaire.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cas 2 : Gestionnaire locatif multi-propriétaires à Dakar</h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-900 mb-3">Situation avant digitalisation :</p>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• 120 biens gérés pour 45 propriétaires différents</li>
                <li>• Fichiers Excel séparés par propriétaire, risque d&apos;erreurs élevé</li>
                <li>• Quittances créées manuellement sous Word, envoyées par WhatsApp</li>
                <li>• Paiements Mobile Money notés à la main, rapprochement mensuel laborieux</li>
                <li>• Impayés : 25% des loyers avec retard &gt; 30 jours</li>
                <li>• Rapports propriétaires : 2 jours de travail par mois</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-green-900 mb-3">Après digitalisation avec ERP :</p>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• <strong>Base unique</strong> : tous les biens, locataires et propriétaires dans un seul système</li>
                <li>• <strong>Quittances automatiques</strong> : générées et envoyées par email/SMS le 1er de chaque mois</li>
                <li>• <strong>Intégration Mobile Money</strong> : paiements Orange Money et Wave enregistrés automatiquement</li>
                <li>• <strong>Relances automatiques</strong> : J+3, J+7, J+15 après échéance, par SMS et email</li>
                <li>• <strong>Impayés réduits à 8%</strong> grâce aux relances systématiques</li>
                <li>• <strong>Rapports propriétaires automatiques</strong> : envoyés le 5 de chaque mois, sans intervention</li>
              </ul>
              <p className="mt-4 font-bold text-green-900">
                Résultat : capacité de gestion passée de 120 à 250 biens avec la même équipe, rentabilité +120%.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cas 3 : Syndic de copropriété à Cotonou</h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-900 mb-3">Situation avant digitalisation :</p>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• 8 copropriétés gérées, 450 copropriétaires au total</li>
                <li>• Appels de charges envoyés par courrier papier, coût et délais importants</li>
                <li>• Suivi des paiements dans Excel, erreurs fréquentes</li>
                <li>• Assemblées générales : convocations papier, votes à main levée, PV manuscrits</li>
                <li>• Transparence limitée : copropriétaires mécontents, turnover élevé</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-green-900 mb-3">Après digitalisation avec ERP :</p>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• <strong>Portail copropriétaire</strong> : chacun accède à ses charges, paiements, documents</li>
                <li>• <strong>Appels de charges digitaux</strong> : envoyés par email/SMS, paiement Mobile Money possible</li>
                <li>• <strong>Comptabilité automatique</strong> : chaque paiement affecté au bon copropriétaire, au bon lot</li>
                <li>• <strong>AG digitales</strong> : convocations email, votes en ligne, PV générés automatiquement</li>
                <li>• <strong>Transparence totale</strong> : copropriétaires consultent comptes et décisions 24/7</li>
              </ul>
              <p className="mt-4 font-bold text-green-900">
                Résultat : satisfaction copropriétaires +90%, taux de recouvrement charges +35%, coûts administratifs -60%.
              </p>
            </div>

            <p className="text-lg font-semibold text-gray-900 mt-8">
              Ces cas ne sont pas des exceptions : ce sont les <strong>résultats standards</strong> de la digitalisation bien menée. La technologie ne remplace pas l&apos;humain, elle le <strong>libère des tâches répétitives</strong> pour qu&apos;il se concentre sur la valeur ajoutée : relation client, développement commercial, stratégie.
            </p>
          </div>
        </section>

        {/* SECTION 6: VISION IMMOTOPIA */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-yellow-600" />
            Vision ImmoTopia : un ERP immobilier pensé pour l&apos;Afrique
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              ImmoTopia n&apos;est pas un logiciel occidental adapté à l&apos;Afrique. C&apos;est un <strong>ERP immobilier conçu dès l&apos;origine pour le contexte africain</strong>, avec une ambition claire : devenir la référence de la gestion immobilière professionnelle en Afrique francophone.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Notre approche : africain par conception, international par qualité</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Smartphone className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <h4 className="font-bold text-yellow-900">Mobile Money natif</h4>
                </div>
                <p className="text-yellow-800 text-sm">
                  Intégration complète Orange Money, MTN, Wave, Moov. Les paiements Mobile Money sont des citoyens de première classe, pas une fonctionnalité ajoutée après coup.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Globe className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <h4 className="font-bold text-yellow-900">Multi-devises et multi-pays</h4>
                </div>
                <p className="text-yellow-800 text-sm">
                  FCFA, Ariary, Franc Guinéen, etc. Taux de change automatiques. Un gestionnaire peut gérer des biens dans plusieurs pays africains depuis une seule plateforme.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <h4 className="font-bold text-yellow-900">Performance optimisée</h4>
                </div>
                <p className="text-yellow-800 text-sm">
                  Interface légère, rapide même en 3G. Pas de fonctionnalités superflues qui ralentissent l&apos;expérience. Chaque milliseconde compte.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <h4 className="font-bold text-yellow-900">Sécurité et conformité</h4>
                </div>
                <p className="text-yellow-800 text-sm">
                  Hébergement sécurisé, sauvegardes automatiques, conformité RGPD. Vos données sont protégées avec les standards internationaux les plus stricts.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ce que nous ne promettons pas</h3>

            <p>
              ImmoTopia ne prétend pas <strong>révolutionner l&apos;immobilier africain du jour au lendemain</strong>. Nous ne promettons pas de miracles. Nous promettons :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Des <strong>outils fiables</strong> qui fonctionnent, tous les jours, sans interruption</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Un <strong>accompagnement</strong> dans la transition digitale, avec formation et support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Une <strong>amélioration mesurable</strong> de votre efficacité opérationnelle et de votre rentabilité</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Une <strong>évolution continue</strong> de la plateforme, en écoutant les besoins du terrain</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <p className="text-lg font-semibold text-yellow-900 mb-2">
                Notre engagement : la transparence
              </p>
              <p className="text-yellow-800">
                Nous ne cachons pas les défis de la digitalisation. Changer ses habitudes demande un effort. Mais cet effort est <strong>largement récompensé</strong> : gain de temps, réduction des erreurs, amélioration de la rentabilité, professionnalisation de l&apos;image. Nous sommes là pour vous accompagner à chaque étape.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Notre ambition : structurer l&apos;immobilier africain</h3>

            <p>
              Au-delà d&apos;ImmoTopia, notre ambition est de <strong>contribuer à la structuration du secteur immobilier africain</strong>. Cela passe par :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Partager les bonnes pratiques</strong> : guides, formations, contenus éducatifs pour professionnaliser le secteur</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Collaborer avec les institutions</strong> : travailler avec les régulateurs, associations professionnelles, banques</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Innover en continu</strong> : intégrer les nouvelles technologies (IA, blockchain) au service de l&apos;immobilier africain</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Rendre la technologie accessible</strong> : tarifs adaptés, support en français, formation incluse</span>
              </li>
            </ul>

            <p>
              ImmoTopia n&apos;est pas qu&apos;un logiciel : c&apos;est un <strong>partenaire de votre croissance</strong> et un acteur de la transformation digitale de l&apos;immobilier africain.
            </p>
          </div>
        </section>

        {/* SECTION 7: AFRIQUE AUJOURD'HUI VS DEMAIN */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-green-600" />
            L&apos;Afrique immobilière aujourd&apos;hui vs l&apos;Afrique structurée de demain
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              La transformation digitale de l&apos;immobilier africain n&apos;est pas qu&apos;une question d&apos;outils. C&apos;est un <strong>changement de paradigme</strong> qui redéfinit le secteur dans son ensemble.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Dimension</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-red-700">Afrique aujourd&apos;hui</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-green-700">Afrique structurée demain</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Gestion des données</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-800 bg-red-50">
                      Excel, papier, WhatsApp. Données dispersées, doublons, erreurs fréquentes. Perte d&apos;informations critiques.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-green-800 bg-green-50">
                      Base de données centralisée, unique source de vérité. Données structurées, traçables, accessibles en temps réel.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Paiements</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-800 bg-red-50">
                      Cash, Mobile Money non tracé. Rapprochements manuels, erreurs, litiges. Impayés élevés (25-40%).
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-green-800 bg-green-50">
                      Mobile Money intégré, traçabilité totale. Rapprochement automatique, relances systématiques. Impayés réduits (&lt;10%).
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Transparence</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-800 bg-red-50">
                      Opacité. Propriétaires et locataires dépendent du gestionnaire pour toute information. Méfiance, litiges.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-green-800 bg-green-50">
                      Portails dédiés. Propriétaires et locataires consultent leurs données 24/7. Confiance, satisfaction, fidélisation.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Productivité</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-800 bg-red-50">
                      60-70% du temps sur tâches administratives. Capacité limitée (50-100 biens max par gestionnaire).
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-green-800 bg-green-50">
                      Automatisation massive. 70% du temps sur valeur ajoutée. Capacité multipliée (200-300 biens par gestionnaire).
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Accès au financement</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-800 bg-red-50">
                      Difficile. Données non fiables, pas de reporting standardisé. Banques réticentes, taux élevés.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-green-800 bg-green-50">
                      Facilité. Données auditables, reporting conforme. Banques rassurées, accès au crédit, taux compétitifs.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Image professionnelle</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-800 bg-red-50">
                      Artisanale. Quittances Word, relances WhatsApp. Perçu comme informel, peu fiable.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-green-800 bg-green-50">
                      Professionnelle. Documents automatiques, portails web, communication structurée. Confiance, crédibilité.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Prise de décision</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-800 bg-red-50">
                      Intuitive, basée sur la mémoire. Pas de données fiables. Décisions à l&apos;aveugle, erreurs stratégiques.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-green-800 bg-green-50">
                      Data-driven. Tableaux de bord temps réel, KPI précis. Décisions éclairées, optimisation continue.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Scalabilité</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-800 bg-red-50">
                      Limitée. Croissance = embauche proportionnelle. Coûts fixes élevés, marges faibles.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-green-800 bg-green-50">
                      Illimitée. Croissance sans embauche proportionnelle. Économies d&apos;échelle, marges croissantes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <p className="text-lg font-semibold text-green-900 mb-2">
                Le futur est déjà là, il est juste inégalement distribué
              </p>
              <p className="text-green-800">
                Certains acteurs africains ont déjà franchi le pas de la digitalisation et récoltent les bénéfices : croissance accélérée, rentabilité améliorée, satisfaction client élevée. La question n&apos;est plus <em>&quot;faut-il digitaliser ?&quot;</em> mais <em>&quot;quand vais-je commencer ?&quot;</em>
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Les catalyseurs de la transformation</h3>

            <p>
              Plusieurs facteurs accélèrent la digitalisation de l&apos;immobilier africain :
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <Smartphone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Pénétration mobile massive</strong> : 80%+ de la population africaine a accès à un smartphone. Le mobile est le canal privilégié.</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Adoption de Mobile Money</strong> : 500+ millions d&apos;utilisateurs en Afrique. Le paiement digital est déjà la norme.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Nouvelle génération de professionnels</strong> : jeunes gestionnaires, formés au digital, exigent des outils modernes.</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Pression concurrentielle</strong> : les acteurs digitalisés gagnent des parts de marché. Les autres doivent s&apos;adapter ou disparaître.</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>Régulation croissante</strong> : les États africains exigent plus de transparence et de traçabilité dans l&apos;immobilier.</span>
              </li>
            </ul>

            <p className="text-lg font-semibold text-gray-900 mt-8">
              L&apos;Afrique immobilière de demain sera <strong>digitale, transparente, efficiente et inclusive</strong>. La seule question est : serez-vous acteur ou spectateur de cette transformation ?
            </p>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 flex-shrink-0">Q.</span>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONCLUSION & CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à digitaliser votre gestion immobilière ?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              ImmoTopia est l&apos;ERP immobilier conçu pour l&apos;Afrique : Mobile Money, multi-devises, workflows adaptés, et accompagnement complet. Rejoignez les professionnels qui ont choisi la performance et la transparence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/la-solution">
                  Découvrir ImmoTopia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Demander une démo gratuite</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* LIENS INTERNES */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Pour aller plus loin
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/logiciel-immobilier-cote-divoire" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">
                  Logiciel immobilier Côte d&apos;Ivoire
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                Découvrez l&apos;ERP complet pour professionnels de l&apos;immobilier en Côte d&apos;Ivoire.
              </p>
            </Link>

            <Link href="/gestion-locative-cote-divoire" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 mb-3">
                <Home className="h-6 w-6 text-green-600 flex-shrink-0" />
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">
                  Gestion locative digitale
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                Automatisez vos quittances, relances et rapports propriétaires avec Mobile Money.
              </p>
            </Link>

            <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 mb-3">
                <Smartphone className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">
                  Paiement Mobile Money
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                Intégration native Orange Money, MTN, Wave pour vos loyers et charges.
              </p>
            </Link>
          </div>
        </section>

        {/* BREADCRUMB FOOTER */}
        <nav className="text-sm text-gray-600 pt-8 border-t border-gray-200">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/logiciel-immobilier-cote-divoire" className="hover:text-blue-600">Logiciel immobilier</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Digitalisation immobilière en Afrique</span>
        </nav>
      </article>
    </>
  );
}

