import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Logiciel syndic de copropriété en Côte d\'Ivoire | Module ERP ImmoTopia',
  description: 'Syndic de copropriété en Côte d\'Ivoire : gestion des lots et tantièmes, AG, appels de charges, impayés, paiements Mobile Money et espace copropriétaires, dans l\'ERP ImmoTopia.',
  alternates: {
    canonical: '/logiciel-syndic-copropriete-cote-divoire',
  },
};

// JSON-LD pour FAQ
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Peut-on gérer plusieurs résidences et immeubles dans ImmoTopia ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, ImmoTopia permet de gérer un portefeuille illimité de résidences et immeubles depuis une seule interface. Chaque résidence peut avoir ses propres lots, copropriétaires, budgets et règles de gestion, tout en bénéficiant d\'un reporting consolidé au niveau du syndic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment paramétrer les lots et tantièmes dans le module Syndic ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le paramétrage des lots et tantièmes se fait depuis l\'interface de gestion de l\'immeuble. Vous pouvez créer chaque lot, lui attribuer un ou plusieurs copropriétaires, définir ses tantièmes (millièmes de copropriété) et ses charges spécifiques. Le système calcule automatiquement les répartitions lors des appels de fonds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on faire des appels de charges mensuels et exceptionnels ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument. ImmoTopia permet de créer des appels de charges récurrents (mensuels, trimestriels, annuels) avec automatisation complète, ainsi que des appels exceptionnels pour travaux, charges spéciales ou provisions. Chaque appel peut être personnalisé par lot et génère automatiquement les notifications aux copropriétaires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les copropriétaires ont-ils un espace sécurisé pour consulter leurs documents ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, chaque copropriétaire dispose d\'un espace personnel sécurisé accessible par identifiants. Il peut y consulter ses appels de charges, ses soldes, ses reçus de paiement, les PV d\'assemblées générales, les documents de copropriété et recevoir des notifications personnalisées.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on payer les charges via Mobile Money (Orange Money, MTN Mobile Money) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, ImmoTopia intègre les paiements Mobile Money pour le règlement des charges de copropriété. Les copropriétaires peuvent payer via Orange Money, MTN Mobile Money, Moov Money ou Wave directement depuis leur espace, avec référencement automatique et génération immédiate du reçu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment se passe une Assemblée Générale (convocation, vote, PV) dans ImmoTopia ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le module Syndic permet de créer une AG, d\'envoyer automatiquement les convocations avec ordre du jour, de gérer les votes en ligne ou en présentiel, de rédiger le PV directement dans l\'interface et de l\'archiver avec tous les documents associés. Les copropriétaires peuvent voter à distance si configuré.',
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce adapté aux petits syndics gérant quelques immeubles ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, ImmoTopia est conçu pour s\'adapter à tous les types de syndics, des plus petits aux plus grands. L\'interface est intuitive et les fonctionnalités essentielles sont accessibles rapidement. Le module Syndic fait partie de l\'ERP ImmoTopia, permettant une montée en charge progressive selon vos besoins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on activer uniquement le module Syndic sans les autres modules de l\'ERP ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ImmoTopia est un ERP modulaire. Vous pouvez activer uniquement le module Syndic si c\'est votre besoin principal. Cependant, l\'intégration avec les autres modules (gestion locative, maintenance, comptabilité) apporte une valeur ajoutée significative en centralisant toutes vos données immobilières dans un seul système.',
      },
    },
  ],
};

export default function LogicielSyndicCoproprietePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Logiciel de syndic de copropriété en Côte d&apos;Ivoire
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Module copropriété intégré à un ERP immobilier complet pour gérer vos résidences, lots, charges et assemblées générales avec traçabilité et transparence. Découvrez{' '}
            <Link href="/pour-qui/syndics" className="font-semibold text-[#2563EB] hover:underline">
              notre solution pour les syndics
            </Link>
            {' '}et{' '}
            <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
              toutes nos fonctionnalités
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?demo=true"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Demander une démo
            </Link>
            <Link
              href="/logiciel-immobilier-cote-divoire"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Découvrir l&apos;ERP ImmoTopia
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEXTE & ENJEUX */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les défis de la gestion de copropriété en Côte d&apos;Ivoire
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              La gestion d&apos;une copropriété en Côte d&apos;Ivoire, particulièrement à Abidjan où les résidences se multiplient, présente des défis récurrents pour les syndics et administrateurs de biens.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-3">Gestion dispersée des lots et tantièmes</h3>
                <p className="text-gray-700">
                  Les informations sur les lots, copropriétaires et tantièmes sont souvent éparpillées entre Excel, documents papier et conversations WhatsApp, rendant difficile le suivi précis et la mise à jour en temps réel.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-3">Suivi manuel des appels de charges</h3>
                <p className="text-gray-700">
                  Les appels de charges sont généralement gérés manuellement, avec des risques d&apos;erreurs de calcul, d&apos;oublis de relances et de difficultés à tracer l&apos;historique des paiements et impayés.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-3">Impayés et relances non structurées</h3>
                <p className="text-gray-700">
                  Sans système centralisé, les relances d&apos;impayés se font de manière disparate, sans traçabilité claire des échéances, des montants dus et des actions entreprises, compliquant le recouvrement.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-3">Organisation complexe des Assemblées Générales</h3>
                <p className="text-gray-700">
                  L&apos;organisation des AG, de la convocation à la rédaction du PV en passant par la gestion des votes, reste chronophage et sujette à des erreurs, avec des difficultés à archiver et retrouver les documents.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Face à ces enjeux, les syndics professionnels et gestionnaires de résidences ont besoin d&apos;un outil qui apporte <strong>traçabilité, automatisation et transparence</strong>, tout en facilitant la communication avec les copropriétaires et en sécurisant les paiements, notamment via les solutions Mobile Money largement adoptées en Côte d&apos;Ivoire.
            </p>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UN MODULE SYNDIC MODERNE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Qu&apos;est-ce qu&apos;un module Syndic moderne ?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Un module Syndic moderne est un système intégré qui transforme la gestion de copropriété en centralisant toutes les opérations, en automatisant les tâches répétitives et en offrant une visibilité complète à tous les acteurs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">1</span>
                  Centraliser
                </h3>
                <p className="text-gray-700">
                  Toutes les données de la copropriété sont centralisées : immeubles, résidences, lots, copropriétaires, tantièmes, budgets, appels de fonds, historique des paiements. Une seule source de vérité accessible en temps réel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">2</span>
                  Automatiser
                </h3>
                <p className="text-gray-700">
                  Les appels de charges récurrents sont générés automatiquement, les relances d&apos;impayés sont programmées, les reçus et états de compte sont créés sans intervention manuelle, réduisant les erreurs et le temps administratif.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">3</span>
                  Outiller
                </h3>
                <p className="text-gray-700">
                  Les Assemblées Générales sont facilitées : convocations automatiques, gestion des votes en ligne ou en présentiel, rédaction assistée des PV, archivage sécurisé de tous les documents et historique complet.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">4</span>
                  Sécuriser
                </h3>
                <p className="text-gray-700">
                  Chaque action est tracée dans un journal d&apos;audit, les documents sont archivés de manière sécurisée, les accès sont contrôlés et l&apos;historique complet permet de répondre à toute question ou litige avec des preuves documentées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS CLÉS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Fonctionnalités clés du module Syndic ImmoTopia
          </h2>
          <div className="space-y-12">
            {/* Gestion immeubles */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Gestion immeubles, résidences, lots et tantièmes
              </h3>
              <p className="text-gray-700 mb-4">
                Créez et gérez un portefeuille illimité d&apos;immeubles et résidences. Pour chaque immeuble, définissez les lots avec leurs caractéristiques (surface, nombre de pièces, étage), attribuez les copropriétaires et paramétrez les tantièmes (millièmes de copropriété) pour le calcul automatique des charges.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Création et gestion multi-immeubles et multi-résidences</li>
                <li>Paramétrage détaillé des lots (surface, pièces, étage, orientation)</li>
                <li>Gestion des tantièmes et répartition automatique des charges</li>
                <li>Attribution de plusieurs copropriétaires par lot</li>
                <li>Historique des mutations et changements de propriétaires</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Bénéfice :</strong> Une vision centralisée et à jour de tous vos biens en copropriété, avec calculs automatiques et traçabilité complète.
                </p>
              </div>
            </div>

            {/* Comptabilité de syndic */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comptabilité de syndic : budgets, appels de charges et impayés
              </h3>
              <p className="text-gray-700 mb-4">
                Gérez la comptabilité complète de la copropriété avec des budgets prévisionnels, des appels de charges récurrents ou exceptionnels, le suivi des encaissements et la gestion proactive des impayés avec relances automatiques.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Budgets prévisionnels annuels par poste de charges</li>
                <li>Appels de charges récurrents (mensuels, trimestriels) automatisés</li>
                <li>Appels exceptionnels pour travaux ou charges spéciales</li>
                <li>Suivi en temps réel des encaissements et soldes par lot</li>
                <li>Gestion des impayés avec relances programmées et escalade</li>
                <li>Calcul automatique des provisions sur charges et régularisations</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Bénéfice :</strong> Réduction drastique du temps administratif, élimination des erreurs de calcul et amélioration du taux de recouvrement grâce à un suivi structuré.
                </p>
              </div>
            </div>

            {/* Assemblées Générales */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Assemblées Générales : convocations, votes en ligne et PV
              </h3>
              <p className="text-gray-700 mb-4">
                Organisez vos Assemblées Générales de A à Z : création de l&apos;ordre du jour, envoi automatique des convocations, gestion des votes (en ligne ou en présentiel), rédaction du PV et archivage sécurisé de tous les documents.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Création de l&apos;ordre du jour avec résolutions à voter</li>
                <li>Envoi automatique des convocations par email et notification</li>
                <li>Gestion des votes en ligne avec authentification sécurisée</li>
                <li>Votes en présentiel avec saisie directe dans l&apos;interface</li>
                <li>Rédaction assistée du PV avec modèles personnalisables</li>
                <li>Archivage automatique du PV et documents associés</li>
                <li>Historique complet de toutes les AG avec recherche</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Bénéfice :</strong> Organisation fluide des AG, participation facilitée des copropriétaires (y compris à distance), conformité légale et traçabilité totale.
                </p>
              </div>
            </div>

            {/* Espace copropriétaires */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Espace copropriétaires sécurisé : documents, soldes et notifications
              </h3>
              <p className="text-gray-700 mb-4">
                Chaque copropriétaire dispose d&apos;un espace personnel sécurisé où il peut consulter ses appels de charges, ses soldes, ses reçus, les PV d&apos;AG, les documents de copropriété et recevoir des notifications personnalisées.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Accès sécurisé par identifiants uniques</li>
                <li>Consultation des appels de charges en cours et historiques</li>
                <li>Visualisation des soldes et états de compte détaillés</li>
                <li>Téléchargement des reçus de paiement et justificatifs</li>
                <li>Accès aux PV d&apos;assemblées générales et documents de copropriété</li>
                <li>Notifications automatiques (nouveaux appels, relances, AG, annonces)</li>
                <li>Historique complet de tous les paiements et transactions</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Bénéfice :</strong> Transparence totale pour les copropriétaires, réduction des questions et réclamations, amélioration de la relation de confiance.
                </p>
              </div>
            </div>

            {/* Annonces */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Annonces collectives et individuelles
              </h3>
              <p className="text-gray-700 mb-4">
                Communiquez efficacement avec les copropriétaires via des annonces collectives (travaux, coupures, règles de copropriété) ou individuelles (relances personnalisées, notifications spécifiques).
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Annonces collectives à tous les copropriétaires d&apos;un immeuble</li>
                <li>Annonces individuelles ciblées par lot ou copropriétaire</li>
                <li>Notifications par email et dans l&apos;espace copropriétaire</li>
                <li>Historique des annonces avec preuve d&apos;envoi</li>
                <li>Templates personnalisables pour annonces récurrentes</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Bénéfice :</strong> Communication structurée et tracée, meilleure information des copropriétaires et réduction des malentendus.
                </p>
              </div>
            </div>

            {/* Liaison maintenance */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Liaison avec la maintenance : tickets parties communes, devis et interventions
              </h3>
              <p className="text-gray-700 mb-4">
                Le module Syndic s&apos;intègre avec le module Maintenance de l&apos;ERP ImmoTopia pour gérer les interventions sur les parties communes : création de tickets, suivi des devis, planification des interventions et facturation.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Création de tickets de maintenance pour parties communes</li>
                <li>Gestion des devis et validation par le syndic</li>
                <li>Planification et suivi des interventions</li>
                <li>Facturation automatique dans la comptabilité de syndic</li>
                <li>Historique complet des travaux et interventions</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Bénéfice :</strong> Traçabilité complète des travaux, meilleure maîtrise des coûts et intégration fluide avec la gestion technique.
                </p>
              </div>
            </div>

            {/* Reporting */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Reporting : taux d&apos;encaissement, impayés et historique
              </h3>
              <p className="text-gray-700 mb-4">
                Accédez à des tableaux de bord et rapports détaillés sur la santé financière de chaque copropriété : taux d&apos;encaissement, analyse des impayés, historique par lot et copropriétaire, prévisions de trésorerie.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Tableaux de bord en temps réel par immeuble et global</li>
                <li>Taux d&apos;encaissement et analyse des délais de paiement</li>
                <li>Rapports d&apos;impayés avec vieillissement</li>
                <li>Historique détaillé par lot et copropriétaire</li>
                <li>Prévisions de trésorerie et budgets réalisés</li>
                <li>Export Excel/PDF pour reporting externe</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Bénéfice :</strong> Vision stratégique de la performance, aide à la décision et reporting professionnel pour les conseils syndicaux et assemblées générales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIEMENTS MOBILE MONEY */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Paiement des charges en ligne via Mobile Money
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              En Côte d&apos;Ivoire, où les solutions Mobile Money sont largement adoptées, ImmoTopia intègre les paiements en ligne pour faciliter le règlement des charges de copropriété.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Paiements Orange Money, MTN Mobile Money, Moov Money et Wave
              </h3>
              <p className="text-gray-700 mb-4">
                Les copropriétaires peuvent régler leurs charges directement depuis leur espace personnel via les principales solutions Mobile Money disponibles en Côte d&apos;Ivoire : Orange Money, MTN Mobile Money, Moov Money et Wave. Le paiement est sécurisé et instantané.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Référencement automatique</h3>
                <p className="text-gray-700">
                  Chaque paiement est automatiquement référencé avec le lot concerné, la période et l&apos;appel de fonds correspondant. Plus besoin de rapprochement manuel : le système fait le lien immédiatement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reçus et états de compte automatiques</h3>
                <p className="text-gray-700">
                  Dès le paiement validé, un reçu est généré automatiquement et disponible dans l&apos;espace copropriétaire. L&apos;état de compte est mis à jour en temps réel, offrant une transparence totale.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Paiement partiel et fractionné</h3>
                <p className="text-gray-700">
                  Si configuré, les copropriétaires peuvent effectuer des paiements partiels ou fractionnés, le système gérant automatiquement les soldes et les relances pour les montants restants.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Rapprochement et reporting</h3>
                <p className="text-gray-700">
                  Tous les paiements sont intégrés dans la comptabilité de syndic avec rapprochement automatique. Les rapports de trésorerie et d&apos;encaissement reflètent en temps réel l&apos;état des paiements Mobile Money.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-gray-700">
                <strong>Avantage clé :</strong> La facilité de paiement via Mobile Money améliore significativement le taux d&apos;encaissement et réduit les délais de recouvrement, tout en offrant une expérience moderne aux copropriétaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Pour qui est conçu le module Syndic ImmoTopia ?
          </h2>
          <div className="space-y-8">
            {/* Syndic professionnel */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Syndic professionnel
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problème :</strong> Vous gérez plusieurs immeubles et résidences pour différents clients, avec des besoins de reporting différenciés, des processus standardisés et une traçabilité irréprochable pour répondre aux exigences de vos mandants.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Comment ImmoTopia aide :</strong> Le module Syndic centralise la gestion de tous vos mandats dans une seule interface, avec des tableaux de bord par client, des processus automatisés pour réduire le temps administratif et un reporting professionnel exportable pour vos assemblées générales.
              </p>
              <p className="text-gray-700">
                <strong>Résultat concret :</strong> Vous pouvez gérer plus de copropriétés avec la même équipe, réduire les erreurs, améliorer votre taux de recouvrement et offrir une transparence accrue à vos clients, renforçant votre position concurrentielle.
              </p>
            </div>

            {/* Gestionnaire de résidence */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Gestionnaire de résidence / Administrateur de biens
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problème :</strong> Vous gérez une ou plusieurs résidences avec des besoins quotidiens de communication avec les résidents, de suivi des charges, de gestion des travaux et de maintien de la qualité de vie dans la résidence.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Comment ImmoTopia aide :</strong> Le module Syndic s&apos;intègre avec les autres modules de l&apos;ERP (maintenance, communication, portail résidents) pour offrir une gestion complète. Les appels de charges sont automatisés, les paiements facilités via Mobile Money, et la communication structurée réduit les malentendus.
              </p>
              <p className="text-gray-700">
                <strong>Résultat concret :</strong> Une gestion plus fluide et professionnelle, une meilleure relation avec les résidents grâce à la transparence, et un gain de temps significatif sur les tâches administratives pour vous concentrer sur le service et la qualité.
              </p>
            </div>

            {/* Promoteur */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Promoteur (gestion post-livraison)
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problème :</strong> Après la livraison de votre programme immobilier, vous devez gérer la transition vers la copropriété, organiser la première AG, mettre en place la gestion des charges et assurer un suivi pendant la période de garantie, tout en maintenant votre image de marque.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Comment ImmoTopia aide :</strong> Le module Syndic permet de paramétrer rapidement tous les lots dès la livraison, d&apos;organiser efficacement la première AG avec votes en ligne si nécessaire, et de mettre en place une gestion transparente qui rassure les acquéreurs. L&apos;intégration avec le module Gestion locative permet aussi de gérer les lots encore en location.
              </p>
              <p className="text-gray-700">
                <strong>Résultat concret :</strong> Une transition fluide vers la copropriété, une première AG bien organisée, une gestion professionnelle dès le départ qui renforce la confiance des acquéreurs et facilite la commercialisation des lots restants.
              </p>
            </div>

            {/* Conseil syndical */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Conseil syndical / Représentants des copropriétaires
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Problème :</strong> En tant que représentant des copropriétaires, vous avez besoin de transparence sur la gestion, les comptes, les travaux et les décisions, pour pouvoir informer et défendre les intérêts des copropriétaires.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Comment ImmoTopia aide :</strong> Le module Syndic offre un accès sécurisé aux rapports, budgets, comptes et historique, permettant au conseil syndical de suivre la gestion en temps réel et de préparer les AG avec toutes les informations nécessaires.
              </p>
              <p className="text-gray-700">
                <strong>Résultat concret :</strong> Une meilleure compréhension de la situation financière et opérationnelle, une préparation plus efficace des AG, et une capacité renforcée à dialoguer avec le syndic sur des bases factuelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTÉGRATION ERP */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Intégration au sein de l&apos;ERP ImmoTopia
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8 text-lg">
              Le module Syndic n&apos;est pas un produit isolé : il fait partie intégrante de l&apos;ERP ImmoTopia, un système complet de gestion immobilière. Cette intégration apporte une valeur ajoutée significative en centralisant toutes vos données dans un seul système.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Modules interconnectés pour une gestion complète
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">CRM & Relation client</h4>
                  <p className="text-gray-700 mb-4">
                    Les demandes et réclamations des copropriétaires sont gérées dans le CRM, avec liaison automatique vers les lots et historique complet. Les tickets de maintenance parties communes sont créés depuis le module Syndic et suivis dans le module Maintenance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Gestion technique & Maintenance</h4>
                  <p className="text-gray-700 mb-4">
                    Les interventions sur les parties communes, les devis de travaux et les factures sont intégrés directement dans la comptabilité de syndic. Un ticket créé depuis le module Maintenance peut être facturé automatiquement dans les charges de copropriété.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Comptabilité & Trésorerie</h4>
                  <p className="text-gray-700 mb-4">
                    La comptabilité de syndic est intégrée avec la comptabilité générale de l&apos;ERP. Les paiements Mobile Money sont rapprochés automatiquement, les banques sont synchronisées et la trésorerie globale est visible en temps réel.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Annonces & Communication</h4>
                  <p className="text-gray-700 mb-4">
                    Les annonces collectives et individuelles s&apos;intègrent avec le module Communication de l&apos;ERP, permettant des campagnes multi-canal (email, SMS, notifications in-app) pour informer les copropriétaires.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Portail & Documents</h4>
                  <p className="text-gray-700 mb-4">
                    L&apos;espace copropriétaires fait partie du portail unifié de l&apos;ERP, où les copropriétaires peuvent aussi accéder à d&apos;autres services selon leur profil (locataire, propriétaire bailleur, etc.).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Gestion locative</h4>
                  <p className="text-gray-700 mb-4">
                    Pour les lots en location, le module Syndic s&apos;intègre avec le module Gestion locative : les charges peuvent être répercutées sur les loyers, et le propriétaire bailleur a une vision unifiée de son patrimoine.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded mb-8">
              <p className="text-gray-700 text-lg">
                <strong>Un seul système, une seule vérité des données :</strong> Toutes les informations sont centralisées, évitant les doublons, les incohérences et les pertes de temps liées aux transferts manuels entre systèmes. Un copropriétaire qui est aussi propriétaire bailleur voit toutes ses informations dans un seul espace.
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Découvrir l&apos;ERP ImmoTopia complet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIF AVANT/APRÈS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Avant et après ImmoTopia : la transformation de la gestion de copropriété
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900 bg-red-50">Avant (méthodes traditionnelles)</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900 bg-green-50">Après (ImmoTopia)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Gestion des données</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Excel, documents papier, WhatsApp dispersés</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Base de données centralisée, accessible en temps réel</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Appels de charges</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Calculs manuels, risques d&apos;erreurs, envoi manuel</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Génération automatique, envoi automatique, zéro erreur</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Relances d&apos;impayés</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Relances manuelles, oublis possibles, pas de traçabilité</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Relances automatiques programmées, traçabilité complète</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Paiements</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Espèces, virements manuels, rapprochement long</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Mobile Money intégré, référencement automatique, reçus instantanés</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Assemblées Générales</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Convocations manuelles, votes papier, PV à rédiger manuellement</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Convocations automatiques, votes en ligne, PV assisté et archivé</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Transparence copropriétaires</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Demandes par email/téléphone, documents à demander</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Espace sécurisé 24/7, documents en ligne, notifications automatiques</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Reporting</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Tableaux Excel à créer manuellement, risques d&apos;erreurs</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Tableaux de bord automatiques, rapports exportables, données en temps réel</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Litiges et traçabilité</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Documents éparpillés, historique difficile à reconstituer</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Journal d&apos;audit complet, historique accessible, preuves documentées</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Questions fréquentes sur le module Syndic ImmoTopia
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Peut-on gérer plusieurs résidences et immeubles dans ImmoTopia ?
              </h3>
              <p className="text-gray-700">
                Oui, ImmoTopia permet de gérer un portefeuille illimité de résidences et immeubles depuis une seule interface. Chaque résidence peut avoir ses propres lots, copropriétaires, budgets et règles de gestion, tout en bénéficiant d&apos;un reporting consolidé au niveau du syndic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comment paramétrer les lots et tantièmes dans le module Syndic ?
              </h3>
              <p className="text-gray-700">
                Le paramétrage des lots et tantièmes se fait depuis l&apos;interface de gestion de l&apos;immeuble. Vous pouvez créer chaque lot, lui attribuer un ou plusieurs copropriétaires, définir ses tantièmes (millièmes de copropriété) et ses charges spécifiques. Le système calcule automatiquement les répartitions lors des appels de fonds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Peut-on faire des appels de charges mensuels et exceptionnels ?
              </h3>
              <p className="text-gray-700">
                Absolument. ImmoTopia permet de créer des appels de charges récurrents (mensuels, trimestriels, annuels) avec automatisation complète, ainsi que des appels exceptionnels pour travaux, charges spéciales ou provisions. Chaque appel peut être personnalisé par lot et génère automatiquement les notifications aux copropriétaires.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Les copropriétaires ont-ils un espace sécurisé pour consulter leurs documents ?
              </h3>
              <p className="text-gray-700">
                Oui, chaque copropriétaire dispose d&apos;un espace personnel sécurisé accessible par identifiants. Il peut y consulter ses appels de charges, ses soldes, ses reçus de paiement, les PV d&apos;assemblées générales, les documents de copropriété et recevoir des notifications personnalisées.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Peut-on payer les charges via Mobile Money (Orange Money, MTN Mobile Money) ?
              </h3>
              <p className="text-gray-700">
                Oui, ImmoTopia intègre les paiements Mobile Money pour le règlement des charges de copropriété. Les copropriétaires peuvent payer via Orange Money, MTN Mobile Money, Moov Money ou Wave directement depuis leur espace, avec référencement automatique et génération immédiate du reçu.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comment se passe une Assemblée Générale (convocation, vote, PV) dans ImmoTopia ?
              </h3>
              <p className="text-gray-700">
                Le module Syndic permet de créer une AG, d&apos;envoyer automatiquement les convocations avec ordre du jour, de gérer les votes en ligne ou en présentiel, de rédiger le PV directement dans l&apos;interface et de l&apos;archiver avec tous les documents associés. Les copropriétaires peuvent voter à distance si configuré.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Est-ce adapté aux petits syndics gérant quelques immeubles ?
              </h3>
              <p className="text-gray-700">
                Oui, ImmoTopia est conçu pour s&apos;adapter à tous les types de syndics, des plus petits aux plus grands. L&apos;interface est intuitive et les fonctionnalités essentielles sont accessibles rapidement. Le module Syndic fait partie de l&apos;ERP ImmoTopia, permettant une montée en charge progressive selon vos besoins.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Peut-on activer uniquement le module Syndic sans les autres modules de l&apos;ERP ?
              </h3>
              <p className="text-gray-700">
                ImmoTopia est un ERP modulaire. Vous pouvez activer uniquement le module Syndic si c&apos;est votre besoin principal. Cependant, l&apos;intégration avec les autres modules (gestion locative, maintenance, comptabilité) apporte une valeur ajoutée significative en centralisant toutes vos données immobilières dans un seul système.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à moderniser la gestion de vos copropriétés ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Découvrez comment le module Syndic ImmoTopia peut transformer votre gestion de copropriété avec automatisation, transparence et paiements Mobile Money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?demo=true"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander une démo gratuite
            </Link>
            <Link
              href="/tarifs"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Voir les tarifs
            </Link>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="mb-2">
              Découvrez aussi l&apos;ERP ImmoTopia complet :
            </p>
            <Link
              href="/logiciel-immobilier-cote-divoire"
              className="text-white underline hover:text-blue-200"
            >
              Logiciel immobilier Côte d&apos;Ivoire
            </Link>
            {' • '}
            <Link
              href="/gestion-locative-cote-divoire"
              className="text-white underline hover:text-blue-200"
            >
              Gestion locative Côte d&apos;Ivoire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

