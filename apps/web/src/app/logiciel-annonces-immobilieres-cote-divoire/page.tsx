import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Logiciel d'annonces immobilières en Côte d'Ivoire | Module ERP ImmoTopia",
  description: "Gérez vos biens et publiez vos annonces en Côte d'Ivoire : stock centralisé, statuts (disponible/loué/vendu), portail public, génération de leads et intégration CRM, dans l'ERP ImmoTopia.",
  alternates: {
    canonical: '/logiciel-annonces-immobilieres-cote-divoire',
  },
  openGraph: {
    title: "Logiciel d'annonces immobilières en Côte d'Ivoire | Module ERP ImmoTopia",
    description: "Gérez vos biens et publiez vos annonces en Côte d'Ivoire : stock centralisé, statuts (disponible/loué/vendu), portail public, génération de leads et intégration CRM.",
    url: '/logiciel-annonces-immobilieres-cote-divoire',
    type: 'website',
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Peut-on gérer un grand nombre de biens avec ImmoTopia ?",
    answer: "Oui, le module Biens & Annonces d'ImmoTopia est conçu pour gérer des centaines voire des milliers de biens immobiliers. La base de données centralisée permet une recherche rapide, des filtres avancés et une gestion efficace du stock, que vous soyez une agence de taille moyenne ou un grand promoteur immobilier en Côte d'Ivoire.",
  },
  {
    question: "Peut-on suivre les statuts disponible/réservé/loué/vendu en temps réel ?",
    answer: "Absolument. Chaque bien dispose d'un statut unique qui se synchronise automatiquement dans tout l'ERP. Quand un bien passe de 'disponible' à 'réservé' puis 'loué' ou 'vendu', toutes les annonces associées sont mises à jour, les équipes sont notifiées, et les données restent cohérentes entre le CRM, la gestion locative et les modules de vente.",
  },
  {
    question: "Les leads du portail public arrivent-ils automatiquement dans le CRM ?",
    answer: "Oui, tous les contacts générés depuis le portail public (demandes de visite, questions sur un bien, demandes d'informations) sont automatiquement capturés dans le CRM ImmoTopia. Chaque lead est associé au bien concerné, ce qui permet un suivi immédiat et une qualification rapide par votre équipe commerciale.",
  },
  {
    question: "Peut-on créer des annonces à partir d'un bien existant dans ImmoTopia ?",
    answer: "Oui, c'est l'un des atouts du module. À partir d'une fiche bien complète, vous pouvez générer une ou plusieurs annonces en quelques clics. Les caractéristiques, photos, prix et localisation sont pré-remplis, vous n'avez plus qu'à adapter le texte de description selon le canal de publication. Cela garantit la cohérence des informations et accélère le processus de publication.",
  },
  {
    question: "Peut-on gérer plusieurs agences ou équipes avec le même module ?",
    answer: "Oui, ImmoTopia permet la gestion multi-agences et multi-équipes. Vous pouvez attribuer des biens à des équipes spécifiques, définir des droits d'accès différenciés, et centraliser tout le stock dans une seule base de données. Chaque équipe voit ses biens attribués tout en ayant une vue d'ensemble du stock disponible.",
  },
  {
    question: "Peut-on publier sur plusieurs canaux (portail public, sites externes, réseaux sociaux) ?",
    answer: "Le module Biens & Annonces permet la publication sur le portail public ImmoTopia et offre des fonctionnalités d'export et de partage pour diffuser vos annonces sur d'autres canaux. Les modèles d'annonces structurés facilitent l'adaptation du contenu selon le support, tout en maintenant la cohérence des données sources depuis votre base unique.",
  },
  {
    question: "Est-ce adapté aux promoteurs immobiliers et à la gestion de lots ?",
    answer: "Absolument. ImmoTopia dispose d'un module dédié à la promotion immobilière qui s'intègre parfaitement avec Biens & Annonces. Vous pouvez gérer des programmes immobiliers, des lots, leur commercialisation, les réservations et les ventes. Chaque lot est un bien suivi dans le système, avec son statut propre et ses annonces associées.",
  },
  {
    question: "Peut-on activer seulement le module Biens & Annonces sans les autres modules de l'ERP ?",
    answer: "Oui, ImmoTopia est modulaire. Vous pouvez commencer par activer uniquement le module Biens & Annonces et le portail public. Vous pourrez ensuite ajouter progressivement le CRM, la gestion locative, ou d'autres modules selon vos besoins. Cependant, l'intégration complète offre une valeur ajoutée significative en termes de suivi des leads et de cohérence des données.",
  },
];

export default function LogicielAnnoncesImmobilieresPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Logiciel d'annonces immobilières en Côte d'Ivoire : stock, publication et leads
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Le module <strong>Biens & Annonces</strong> intégré à l'ERP immobilier ImmoTopia : 
              gérez votre stock, publiez vos annonces et générez des leads qualifiés depuis un portail public professionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?demo=true"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
              >
                Demander une démo
              </Link>
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-4 rounded-lg border-2 border-blue-600 transition-colors duration-200 text-lg"
              >
                Découvrir l'ERP ImmoTopia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Les enjeux pour les agences et promoteurs en Côte d'Ivoire
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stock dispersé et non fiable</h3>
              <p className="text-gray-700 leading-relaxed">
                Les informations sur vos biens sont éparpillées : fichiers Excel non synchronisés, 
                dossiers papier, conversations WhatsApp, tableaux partagés obsolètes. Vous ne savez 
                jamais avec certitude quels biens sont réellement disponibles, réservés, loués ou vendus.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Annonces incohérentes et doublons</h3>
              <p className="text-gray-700 leading-relaxed">
                Vos annonces se retrouvent avec des prix différents, des photos non standard, des 
                descriptions incomplètes ou des informations contradictoires selon les canaux. 
                Cela nuit à votre crédibilité et peut créer des malentendus avec les clients.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Statuts non synchronisés</h3>
              <p className="text-gray-700 leading-relaxed">
                Un bien déjà loué ou vendu apparaît encore comme disponible sur certains canaux. 
                Vous perdez du temps à répondre à des demandes sur des biens indisponibles, 
                et vous risquez de décevoir des clients potentiels.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leads non suivis, perte de conversion</h3>
              <p className="text-gray-700 leading-relaxed">
                Les demandes de visite ou d'informations arrivent par email, téléphone, réseaux sociaux, 
                mais aucune centralisation. Les leads se perdent, les délais de réponse s'allongent, 
                et vous ratez des opportunités de vente ou de location.
              </p>
            </div>
          </div>
          <div className="mt-12 bg-blue-50 border-2 border-blue-200 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">La solution ImmoTopia</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Un module <strong>Biens & Annonces</strong> qui centralise votre stock immobilier, garantit 
              la cohérence des statuts, facilite la publication d'annonces de qualité et transforme votre 
              portail public en véritable générateur de leads qualifiés, intégré à votre CRM.
            </p>
            <Link
              href="/logiciel-immobilier-cote-divoire"
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              Découvrir l'ERP ImmoTopia complet →
            </Link>
          </div>
        </div>
      </section>

      {/* Module Biens Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Module "Biens" : la source de vérité de votre stock immobilier
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Chaque bien dans ImmoTopia devient la référence unique pour toute votre organisation. 
            Un changement de statut se répercute instantanément dans les annonces, le CRM, la gestion locative et les rapports.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fiche bien complète et structurée</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Caractéristiques détaillées</strong> : superficie, nombre de pièces, type de bien, standing, équipements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Prix et conditions</strong> : prix de vente, loyer, charges, modalités de paiement, disponibilité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Localisation précise</strong> : adresse, quartier, commune, coordonnées GPS, points d'intérêt à proximité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Médias professionnels</strong> : photos haute résolution, plans, visites virtuelles, documents PDF</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Informations légales</strong> : titre foncier, permis de construire, diagnostics techniques</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gestion des statuts en temps réel</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-900">Disponible</p>
                  <p className="text-gray-600 text-sm">Le bien peut être proposé à la vente ou à la location</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-gray-900">Réservé</p>
                  <p className="text-gray-600 text-sm">Une offre est en cours de traitement, le bien est temporairement indisponible</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-900">Loué</p>
                  <p className="text-gray-600 text-sm">Le bien est sous contrat de location, synchronisé avec le module gestion locative</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <p className="font-semibold text-gray-900">Vendu</p>
                  <p className="text-gray-600 text-sm">La vente est finalisée, le bien est retiré automatiquement des annonces disponibles</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 text-sm leading-relaxed">
                <strong>Impact systémique</strong> : quand un bien change de statut, toutes les annonces associées sont mises à jour, 
                les équipes commerciales sont notifiées, et les modules connexes (CRM, gestion locative, reporting) reflètent 
                instantanément cette information.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Attribution, historique et traçabilité</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Attribution aux équipes</h4>
                <p className="text-gray-700 text-sm">
                  Chaque bien peut être assigné à un agent commercial, une équipe ou une agence. 
                  Cela permet une meilleure organisation et un suivi des performances par responsable.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Historique complet</h4>
                <p className="text-gray-700 text-sm">
                  Toutes les modifications (changement de prix, de statut, ajout de photos, notes internes) 
                  sont enregistrées avec date, heure et auteur. Vous gardez une trace complète de la vie du bien.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Qualité des données</h4>
                <p className="text-gray-700 text-sm">
                  Le système vérifie la complétude des fiches biens : photos obligatoires, description minimale, 
                  prix renseigné, localisation précise. Un score de qualité guide les équipes pour améliorer 
                  la fiabilité des informations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Annonces Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Module "Annonces" : publiez rapidement et proprement
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Créez des annonces professionnelles en quelques clics depuis vos fiches biens. 
            Contrôlez la qualité du contenu, standardisez les informations et publiez sur votre portail public.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Création d'annonces depuis un bien</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Plus besoin de ressaisir les informations. À partir d'une fiche bien complète, 
                vous générez une annonce en quelques secondes :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Sélectionnez le bien dans votre base</li>
                <li>Choisissez le type d'annonce (vente, location, vente/location)</li>
                <li>Les caractéristiques, photos, prix et localisation sont pré-remplis</li>
                <li>Personnalisez la description selon le canal ou votre charte éditoriale</li>
                <li>Publiez sur le portail public ou exportez pour d'autres canaux</li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg border border-green-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modèles d'annonce et champs structurés</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Standardisez vos annonces pour garantir une qualité professionnelle constante :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Modèles prédéfinis</strong> : templates adaptés selon le type de bien (appartement, villa, terrain, local commercial)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Champs obligatoires</strong> : description minimale, nombre de photos requis, prix, superficie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Suggestions de contenu</strong> : formules d'accroche, descriptions par type de bien, points de vente clés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Mise en forme automatique</strong> : structure cohérente (caractéristiques, localisation, prix, contact)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg border-2 border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contrôle qualité : photos, description et informations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">📸</span>
                  Photos professionnelles
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Le système vérifie que chaque annonce dispose d'un nombre minimum de photos, 
                  suggère l'ordre optimal (façade, intérieur, extérieur) et permet l'ajout de légendes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">✍️</span>
                  Description complète
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Contrôle de la longueur minimale, vérification des informations clés (prix, superficie, 
                  localisation), suggestions d'amélioration pour rendre l'annonce plus attractive.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">✅</span>
                  Informations obligatoires
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Avant publication, le système vérifie que toutes les informations essentielles sont présentes : 
                  prix, superficie, nombre de pièces, localisation précise, contact.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Publication sur portail public</strong> : une fois validée, l'annonce apparaît sur votre 
                portail public ImmoTopia, visible par tous les visiteurs. Les annonces sont automatiquement 
                retirées ou mises à jour lorsque le statut du bien change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portail Public Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Portail public et recherche intelligente : génération de leads qualifiés
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Transformez votre portail public en véritable outil de génération de leads. 
            Offrez une expérience de recherche optimale et captez automatiquement toutes les demandes 
            dans votre CRM pour un suivi immédiat.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Recherche avancée avec filtres intelligents</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Les visiteurs peuvent rechercher des biens selon de nombreux critères :
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔍</span>
                  <span><strong>Type de bien</strong> : appartement, villa, terrain, local commercial, bureau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">💰</span>
                  <span><strong>Budget</strong> : fourchette de prix pour la vente ou le loyer mensuel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">📍</span>
                  <span><strong>Localisation</strong> : commune, quartier, zone géographique, proximité de points d'intérêt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">📐</span>
                  <span><strong>Caractéristiques</strong> : superficie, nombre de pièces, standing, équipements (piscine, parking, gardien)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🗺️</span>
                  <span><strong>Recherche sur carte</strong> : visualisation géographique des biens disponibles</span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                Les résultats s'actualisent en temps réel selon les statuts des biens. 
                Seuls les biens réellement disponibles sont affichés.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Formulaire de contact et réservation de visite</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sur chaque fiche bien du portail public, les visiteurs peuvent :
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="font-semibold text-gray-900 mb-2">Demander des informations</h4>
                  <p className="text-gray-700 text-sm">
                    Formulaire simple avec nom, téléphone, email et message. 
                    Le lead est créé automatiquement dans le CRM, associé au bien concerné.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-semibold text-gray-900 mb-2">Réserver une visite</h4>
                  <p className="text-gray-700 text-sm">
                    Sélection d'un créneau disponible (si calendrier intégré) ou demande de rendez-vous. 
                    La visite peut être planifiée directement depuis le CRM.
                  </p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <h4 className="font-semibold text-gray-900 mb-2">Recevoir des alertes</h4>
                  <p className="text-gray-700 text-sm">
                    Les visiteurs peuvent s'abonner aux alertes pour être notifiés quand un bien correspondant 
                    à leurs critères devient disponible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg border-2 border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Captation automatique des leads dans le CRM</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Création automatique</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Chaque interaction depuis le portail public (demande d'info, réservation de visite, 
                  question par email) génère un lead dans le CRM ImmoTopia, avec :
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Informations du prospect (nom, téléphone, email)</li>
                  <li>• Bien concerné pré-assigné</li>
                  <li>• Type de demande (info, visite, alerte)</li>
                  <li>• Date et heure de la demande</li>
                  <li>• Source (portail public)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Attribution et suivi</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Les leads peuvent être :
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Assignés automatiquement à un agent selon des règles définies</li>
                  <li>• Répartis équitablement entre les équipes</li>
                  <li>• Suivis dans le pipeline commercial</li>
                  <li>• Qualifiés selon des critères définis</li>
                  <li>• Transformés en dossiers de visite puis en contrats</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Gain de temps et conversion améliorée</strong> : plus aucun lead ne se perd. 
                Votre équipe commerciale reçoit une notification immédiate et peut contacter le prospect 
                dans les meilleurs délais, maximisant vos chances de conversion.
              </p>
            </div>
            <div className="mt-4 space-y-2">
                <Link
                  href="/crm-immobilier-cote-divoire"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline block"
                >
                  En savoir plus sur le CRM ImmoTopia →
                </Link>
                <Link
                  href="/fonctionnalites"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline block"
                >
                  Voir toutes les fonctionnalités →
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Workflow complet : du bien au lead à la transaction
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Découvrez comment ImmoTopia connecte tous les modules pour créer un flux de travail fluide, 
            de la création d'une fiche bien jusqu'à la finalisation de la vente ou de la location.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Création de la fiche bien</h3>
                  <p className="text-gray-700">
                    Un agent ou un gestionnaire crée une fiche bien complète dans ImmoTopia : caractéristiques, 
                    prix, localisation, photos. Le bien est assigné à une équipe et son statut initial est "Disponible".
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1 bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Génération et publication de l'annonce</h3>
                  <p className="text-gray-700">
                    Depuis la fiche bien, l'équipe génère une annonce professionnelle. Après contrôle qualité 
                    (photos, description, informations obligatoires), l'annonce est publiée sur le portail public.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Génération de lead depuis le portail</h3>
                  <p className="text-gray-700">
                    Un visiteur du portail public consulte l'annonce, effectue une recherche filtrée, 
                    et demande des informations ou réserve une visite. Le lead est automatiquement créé 
                    dans le CRM, associé au bien et assigné à un agent.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualification et suivi dans le CRM</h3>
                  <p className="text-gray-700">
                    L'agent commercial qualifie le lead, enregistre les besoins (budget, localisation, critères), 
                    et planifie une visite. Le lead progresse dans le pipeline : "Nouveau" → "Qualifié" → "Visite planifiée".
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="flex-1 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Organisation de la visite</h3>
                  <p className="text-gray-700">
                    La visite est planifiée dans le module visites, avec rappel automatique. 
                    Le bien concerné est mis en statut "Réservé" temporairement si nécessaire. 
                    Après la visite, l'agent enregistre les retours et l'intérêt du prospect.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <div className="flex-1 bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Réception et traitement de l'offre</h3>
                  <p className="text-gray-700">
                    Le prospect fait une offre (pour l'achat) ou une demande de réservation (pour la location). 
                    L'offre est enregistrée dans le CRM, des documents sont générés (compromis, bail), 
                    et le statut du bien passe à "Réservé".
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  7
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Finalisation du contrat</h3>
                  <p className="text-gray-700">
                    Une fois le contrat signé (vente ou location), le bien passe en statut "Vendu" ou "Loué". 
                    Le module gestion locative prend le relais pour les locations, le CRM archive le dossier, 
                    et toutes les annonces associées sont automatiquement mises à jour ou retirées.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Résultat : un processus fluide et traçable</h3>
              <p className="text-lg leading-relaxed mb-4">
                À chaque étape, toutes les informations sont centralisées, synchronisées et accessibles à l'équipe. 
                Vous savez exactement où en est chaque bien, chaque lead et chaque dossier. 
                La cohérence des données est garantie de bout en bout.
              </p>
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Découvrir tous les modules de l'ERP →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Pour qui ? Découvrez comment ImmoTopia répond aux besoins de chaque profil
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Que vous soyez une agence immobilière, un agent commercial, un promoteur ou un gestionnaire, 
            le module Biens & Annonces s'adapte à vos besoins spécifiques.
          </p>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🏢</span>
                Agence immobilière
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Problème</h4>
                  <p className="text-gray-700 text-sm">
                    Stock de biens dispersé entre plusieurs outils, annonces incohérentes, 
                    difficulté à suivre les leads générés, perte de temps à mettre à jour les statuts.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution ImmoTopia</h4>
                  <p className="text-gray-700 text-sm">
                    Base unique de biens avec statuts synchronisés, génération rapide d'annonces professionnelles, 
                    portail public qui génère des leads automatiquement captés dans le CRM, mise à jour 
                    automatique des annonces selon les statuts.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Résultat</h4>
                  <p className="text-gray-700 text-sm">
                    Gain de temps significatif, annonces toujours à jour, meilleure conversion des leads, 
                    image professionnelle renforcée, meilleure organisation des équipes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">👤</span>
                Agent commercial
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Problème</h4>
                  <p className="text-gray-700 text-sm">
                    Temps passé à créer des annonces depuis zéro, risque d'erreurs dans les informations, 
                    difficulté à suivre tous les leads, besoin de réactivité pour répondre aux demandes.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution ImmoTopia</h4>
                  <p className="text-gray-700 text-sm">
                    Génération d'annonces en quelques clics depuis les fiches biens, notifications immédiates 
                    des nouveaux leads, accès rapide aux informations du bien et historique des interactions, 
                    attribution automatique des leads selon les règles définies.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Résultat</h4>
                  <p className="text-gray-700 text-sm">
                    Plus de temps consacré à la vente et à la relation client, réactivité accrue, 
                    meilleure organisation du pipeline, augmentation du taux de conversion.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🏗️</span>
                Promoteur immobilier
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Problème</h4>
                  <p className="text-gray-700 text-sm">
                    Gestion complexe de lots dans un programme, suivi de la commercialisation, 
                    nécessité de mettre à jour rapidement les disponibilités, coordination entre plusieurs biens similaires.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution ImmoTopia</h4>
                  <p className="text-gray-700 text-sm">
                    Intégration avec le module Promotion immobilière pour gérer les programmes et lots, 
                    création groupée d'annonces, suivi de la commercialisation en temps réel, 
                    synchronisation automatique des disponibilités, reporting de performance.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Résultat</h4>
                  <p className="text-gray-700 text-sm">
                    Vision claire de la commercialisation, réactivité accrue sur les disponibilités, 
                    meilleure gestion des réservations et des ventes, pilotage optimisé des programmes.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/logiciel-promotion-immobiliere-foncier-cote-divoire"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  En savoir plus sur le module Promotion immobilière →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Gestionnaire / Responsable administratif
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Problème</h4>
                  <p className="text-gray-700 text-sm">
                    Nécessité de maintenir la cohérence des données, risque d'erreurs lors des mises à jour, 
                    difficulté à avoir une vision d'ensemble du stock, besoin de traçabilité.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution ImmoTopia</h4>
                  <p className="text-gray-700 text-sm">
                    Base de données centralisée unique, historique complet de toutes les modifications, 
                    contrôle qualité des fiches biens et annonces, synchronisation automatique des statuts, 
                    reporting et tableaux de bord pour le pilotage.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Résultat</h4>
                  <p className="text-gray-700 text-sm">
                    Données fiables et cohérentes, réduction des erreurs, meilleure traçabilité, 
                    gain de temps sur les mises à jour, pilotage facilité avec des indicateurs clairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intégration ERP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Intégration au sein de l'ERP ImmoTopia : un écosystème connecté
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Le module Biens & Annonces ne fonctionne pas de manière isolée. Il s'intègre parfaitement 
            avec tous les autres modules de l'ERP ImmoTopia pour créer un système unifié et cohérent.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                CRM immobilier
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Les leads générés depuis le portail public sont automatiquement captés dans le CRM. 
                Chaque lead est associé au bien concerné, permettant un suivi complet du parcours client.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Leads associés aux biens consultés</li>
                <li>• Pipeline de vente/location connecté</li>
                <li>• Planification des visites depuis le CRM</li>
                <li>• Historique complet des interactions</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/crm-immobilier-cote-divoire"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline text-sm"
                >
                  Découvrir le CRM →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🏗️</span>
                Promotion immobilière
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pour les promoteurs, les lots d'un programme immobiliers sont gérés comme des biens. 
                Chaque lot peut avoir ses propres annonces tout en étant suivi dans le contexte du programme.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Gestion des lots comme biens</li>
                <li>• Commercialisation intégrée</li>
                <li>• Suivi des réservations et ventes</li>
                <li>• Reporting de performance par programme</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/logiciel-promotion-immobiliere-foncier-cote-divoire"
                  className="text-green-600 hover:text-green-800 font-semibold underline text-sm"
                >
                  Découvrir la Promotion immobilière →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-lg border-2 border-purple-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🏠</span>
                Gestion locative
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Quand un bien passe en statut "Loué", le module gestion locative prend automatiquement le relais. 
                Le contrat, le locataire et les paiements sont gérés dans un module dédié.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Synchronisation automatique du statut "Loué"</li>
                <li>• Création automatique du contrat de location</li>
                <li>• Passage du bien du module Annonces au module Locatif</li>
                <li>• Gestion des paiements de loyer intégrée</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/gestion-locative-cote-divoire"
                  className="text-purple-600 hover:text-purple-800 font-semibold underline text-sm"
                >
                  Découvrir la Gestion locative →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg border-2 border-orange-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">💳</span>
                Paiements
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Les frais d'agence, acomptes et commissions peuvent être suivis et gérés via le module paiements, 
                directement lié aux biens et transactions.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Suivi des frais d'agence par bien</li>
                <li>• Gestion des acomptes et versements</li>
                <li>• Intégration Mobile Money pour les paiements</li>
                <li>• Rapports financiers par bien/transaction</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/paiement-loyer-charges-mobile-money-cote-divoire"
                  className="text-orange-600 hover:text-orange-800 font-semibold underline text-sm"
                >
                  Découvrir les Paiements →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Résultat : un ERP unifié et cohérent</h3>
            <p className="text-lg leading-relaxed mb-4">
              Tous les modules d'ImmoTopia partagent la même base de données et la même logique métier. 
              Un changement dans un module se répercute automatiquement dans les autres, garantissant 
              une cohérence totale des informations et une productivité maximale.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Le module Biens & Annonces est le point d'entrée vers tout l'écosystème ImmoTopia : 
              il alimente le CRM avec des leads, permet la gestion de la commercialisation, 
              et se connecte naturellement à la gestion locative et aux paiements une fois la transaction finalisée.
            </p>
            <Link
              href="/logiciel-immobilier-cote-divoire"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Découvrir l'ERP ImmoTopia complet →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparatif Avant/Après Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Comparatif avant / après ImmoTopia
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Découvrez comment le module Biens & Annonces transforme la gestion de votre stock immobilier 
            et la génération de leads.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-red-700 bg-red-50">Avant (sans ImmoTopia)</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-green-700 bg-green-50">Après (avec ImmoTopia)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Stock immobilier</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Dispersé (Excel, WhatsApp, dossiers papier), non synchronisé, risque d'erreurs</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Base unique centralisée, synchronisée en temps réel, source de vérité fiable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Statuts des biens</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Non synchronisés, incohérences entre canaux, bien déjà loué/vendu encore affiché comme disponible</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Statuts uniques synchronisés automatiquement, mise à jour en temps réel sur tous les canaux</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Création d'annonces</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Ressaisie manuelle, risque d'erreurs, temps perdu, informations incohérentes</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Génération en quelques clics depuis la fiche bien, données pré-remplies, cohérence garantie</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Qualité des annonces</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Hétérogène, photos non standard, descriptions incomplètes, informations contradictoires</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Contrôle qualité automatique, modèles standardisés, photos obligatoires, descriptions complètes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Génération de leads</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Leads dispersés (email, téléphone, réseaux sociaux), risque de perte, suivi manuel complexe</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Captation automatique depuis le portail public, intégration directe au CRM, attribution automatique</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Suivi des leads</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Dossiers non centralisés, délais de réponse longs, risque d'oubli, conversion faible</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Pipeline structuré dans le CRM, notifications immédiates, suivi complet, meilleure conversion</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Cohérence des données</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Informations contradictoires entre modules, risque d'erreurs, manque de traçabilité</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Intégration totale entre modules, synchronisation automatique, historique complet, traçabilité</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Gain de temps</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Temps perdu en ressaisie, mises à jour manuelles, recherche d'informations dispersées</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Automatisation des tâches répétitives, accès rapide aux informations, gain de productivité significatif</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Prêt à transformer votre gestion immobilière ?</h3>
            <p className="text-lg mb-6">
              Rejoignez les agences et promoteurs qui ont choisi ImmoTopia pour optimiser leur gestion 
              de stock et maximiser leurs conversions.
            </p>
            <Link
              href="/contact?demo=true"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Demander une démo gratuite
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Questions fréquentes
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12">
            Retrouvez les réponses aux questions les plus courantes sur le module Biens & Annonces d'ImmoTopia.
          </p>

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-200 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-gray-700 mb-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous présenter ImmoTopia en détail.
            </p>
            <Link
              href="/contact?demo=true"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à optimiser votre gestion de biens et annonces ?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Découvrez comment ImmoTopia peut transformer votre gestion immobilière et 
            maximiser votre génération de leads qualifiés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact?demo=true"
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              Demander une démo gratuite
            </Link>
            <Link
              href="/tarifs"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg"
            >
              Voir les tarifs
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-blue-100 mb-4">
              Découvrez aussi les autres modules de l'ERP ImmoTopia :
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="text-blue-100 hover:text-white underline"
              >
                ERP ImmoTopia complet
              </Link>
              <span className="text-blue-300">•</span>
              <Link
                href="/crm-immobilier-cote-divoire"
                className="text-blue-100 hover:text-white underline"
              >
                CRM immobilier
              </Link>
              <span className="text-blue-300">•</span>
              <Link
                href="/gestion-locative-cote-divoire"
                className="text-blue-100 hover:text-white underline"
              >
                Gestion locative
              </Link>
              <span className="text-blue-300">•</span>
              <Link
                href="/logiciel-promotion-immobiliere-foncier-cote-divoire"
                className="text-blue-100 hover:text-white underline"
              >
                Promotion immobilière
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
