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
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Logiciel pour agences immobilières en Côte d\'Ivoire | ImmoTopia',
    description:
      'ImmoTopia est un ERP immobilier conçu pour les agences immobilières en Côte d\'Ivoire : CRM, biens, annonces, gestion locative, paiements Mobile Money et reporting.',
    canonicalUrl: '/pour-qui/agences-immobilieres',
    keywords: [
      'logiciel agence immobilière Côte d\'Ivoire',
      'ERP agence immobilière',
      'logiciel immobilier pour agence',
      'gestion agence immobilière Abidjan',
      'logiciel immobilier professionnel',
      'CRM immobilier Côte d\'Ivoire',
      'logiciel gestion biens immobiliers',
      'logiciel annonces immobilières',
    ],
  },
  '/pour-qui/agences-immobilieres'
);

const faqItems = [
  {
    question: 'Est-ce adapté aux petites agences immobilières ?',
    answer:
      'Absolument. ImmoTopia est conçu pour s\'adapter à toutes les tailles d\'agences, des petites structures avec 5-20 biens aux agences moyennes et grandes. Vous pouvez commencer avec les modules essentiels (CRM, biens, annonces) et activer progressivement d\'autres fonctionnalités selon vos besoins. L\'abonnement est flexible et évolutif.',
  },
  {
    question: 'Peut-on gérer à la fois la vente et la location ?',
    answer:
      'Oui, ImmoTopia permet de gérer simultanément vos activités de vente et de location. Chaque bien peut avoir un statut (à vendre, à louer, vendu, loué) et vous pouvez suivre les mandats de vente, les visites, les offres d\'achat, ainsi que les contrats de location et les loyers dans un seul système centralisé.',
  },
  {
    question: 'Peut-on suivre plusieurs agents commerciaux ?',
    answer:
      'Oui, ImmoTopia est multi-utilisateurs. Vous pouvez créer des comptes pour tous vos agents commerciaux avec des rôles et permissions personnalisés. Chaque agent peut gérer son portefeuille de prospects, ses visites et ses mandats, tandis que le dirigeant a une vue d\'ensemble sur l\'activité de toute l\'équipe via le tableau de bord.',
  },
  {
    question: 'Les paiements Mobile Money sont-ils obligatoires ?',
    answer:
      'Non, les paiements Mobile Money ne sont pas obligatoires. Vous pouvez enregistrer les paiements par tout moyen (espèces, virement, chèque, Mobile Money). Cependant, l\'intégration Mobile Money est un atout majeur en Côte d\'Ivoire car elle permet de tracer automatiquement les paiements Orange Money, MTN Money, Moov Money et Wave, et de générer les quittances instantanément.',
  },
  {
    question: 'Combien de temps pour être opérationnel ?',
    answer:
      'Une agence peut être opérationnelle en quelques heures. Après votre inscription, vous accédez immédiatement à votre espace. Notre équipe vous accompagne dans la configuration initiale, l\'import de vos biens et clients existants, et la formation de vos équipes. La plupart des agences sont pleinement opérationnelles en 1 à 3 jours.',
  },
  {
    question: 'Peut-on démarrer avec un seul module ?',
    answer:
      'Oui, ImmoTopia est modulaire. Vous pouvez démarrer avec le module CRM et Biens/Annonces si c\'est votre priorité, puis activer progressivement la gestion locative, le reporting avancé ou d\'autres modules selon l\'évolution de vos besoins. Cette approche permet de maîtriser progressivement l\'outil et de limiter l\'investissement initial.',
  },
];

export default function AgencesImmobilieresPage() {
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
            <span className="text-gray-900 font-medium">Agences immobilières</span>
          </div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Building2 className="h-4 w-4" />
            Pour les agences immobilières
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Le logiciel immobilier pensé pour les agences immobilières en Côte d&apos;Ivoire
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Centralisez vos biens, vos clients et vos encaissements dans un seul ERP. Gagnez du temps, réduisez les erreurs et pilotez votre activité en temps réel. Découvrez{' '}
            <Link href="/fonctionnalites" className="font-semibold text-[#2563EB] hover:underline">
              toutes les fonctionnalités
            </Link>
            {' '}et notre{' '}
            <Link href="/la-solution/portail-annonces" className="font-semibold text-[#2563EB] hover:underline">
              portail d'annonces
            </Link>
            {' '}pour{' '}
            <Link href="/logiciel-annonces-immobilieres-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
              diffuser vos annonces immobilières en Côte d'Ivoire
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
                Voir comment fonctionne ImmoTopia
              </Link>
            </Button>
          </div>
        </header>

        {/* 2. LE CHAOS QUOTIDIEN DES AGENCES */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Le chaos quotidien des agences immobilières
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Vous dirigez une agence immobilière à Abidjan, Bouaké ou ailleurs en Côte d&apos;Ivoire. Votre quotidien ressemble probablement à ceci :
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Excel pour les biens, WhatsApp pour les clients
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vos biens sont éparpillés dans plusieurs fichiers Excel, souvent obsolètes</li>
                <li>Les photos sont dans des dossiers sur votre ordinateur, difficiles à retrouver</li>
                <li>Les échanges avec les clients se font sur WhatsApp, sans traçabilité</li>
                <li>Impossible de savoir rapidement quels biens sont disponibles, en visite ou loués</li>
                <li>Chaque agent a sa propre méthode, aucune standardisation</li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-amber-600" />
                Perte de leads et retards
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Un prospect vous contacte, mais vous oubliez de le relancer : opportunité perdue</li>
                <li>Vous ne savez pas qui a visité quel bien, ni quand</li>
                <li>Les mandats de vente et de location sont gérés manuellement, source d&apos;oublis</li>
                <li>Pas d&apos;alertes automatiques pour les relances ou les échéances</li>
                <li>Vous perdez du temps à chercher des informations au lieu de vendre</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                Aucune vision globale
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Impossible de savoir combien de visites ont été réalisées ce mois-ci</li>
                <li>Pas de tableau de bord pour suivre les performances de vos agents</li>
                <li>Difficile de mesurer votre taux de conversion prospects → clients</li>
                <li>Reporting manuel chronophage pour les dirigeants</li>
                <li>Décisions prises à l&apos;instinct, sans données fiables</li>
              </ul>
            </div>
            <p className="mt-6 text-lg font-semibold text-gray-900">
              Résultat : vous passez plus de temps à gérer l&apos;administratif qu&apos;à développer votre activité commerciale.
            </p>
          </div>
        </section>

        {/* 3. CE DONT UNE AGENCE A VRAIMENT BESOIN */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ce dont une agence immobilière a vraiment besoin
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              Pour être efficace et rentable, une agence immobilière a besoin de 6 piliers fondamentaux :
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Home className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Une base unique de biens</h3>
                </div>
                <p className="text-gray-700">
                  Tous vos biens (vente, location) centralisés avec photos, caractéristiques, statuts en temps réel et historique complet.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Un CRM immobilier adapté</h3>
                </div>
                <p className="text-gray-700">
                  Gestion des prospects, clients, propriétaires avec historique des interactions, relances automatiques et pipeline commercial.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Un suivi des visites et dossiers</h3>
                </div>
                <p className="text-gray-700">
                  Planification des visites, suivi des mandats, gestion des offres et des dossiers de location ou de vente.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <DollarSign className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Un encaissement structuré</h3>
                </div>
                <p className="text-gray-700">
                  Suivi des commissions, honoraires, loyers et charges avec génération automatique de quittances et factures.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Des tableaux de bord clairs</h3>
                </div>
                <p className="text-gray-700">
                  Visibilité en temps réel sur l&apos;activité commerciale, les performances des agents et la rentabilité de l&apos;agence.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Zap className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Une automatisation intelligente</h3>
                </div>
                <p className="text-gray-700">
                  Relances automatiques, génération de documents, alertes sur les échéances et synchronisation des annonces.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <p className="text-gray-900 font-semibold mb-2">
                C&apos;est exactement ce que propose ImmoTopia : un ERP immobilier complet, pensé pour les agences.
              </p>
              <p className="text-gray-700">
                Pas un simple logiciel de gestion locative, mais une plateforme complète qui couvre tous les aspects de votre activité. Consultez notre{' '}
                <Link href="/guides/gerer-agence-immobiliere-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  guide pour gérer efficacement une agence immobilière en Côte d'Ivoire
                </Link>
                {' '}et découvrez pourquoi{' '}
                <Link href="/immotopia-vs-excel" className="font-semibold text-[#2563EB] hover:underline">
                  ImmoTopia surpasse Excel
                </Link>
                {' '}pour la gestion immobilière.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Milieu */}
        <div className="my-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Découvrez comment ImmoTopia transforme votre agence
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Rejoignez les agences qui automatisent 80% de leurs tâches administratives
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

        {/* 4. COMMENT IMMOTOPIA RÉPOND AUX BESOINS DES AGENCES */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comment ImmoTopia répond aux besoins des agences immobilières
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            ImmoTopia n&apos;est pas un simple logiciel de gestion locative. C&apos;est un ERP complet qui couvre tous les aspects de votre activité d&apos;agence.
          </p>
          <div className="space-y-8">
            {/* CRM immobilier */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    <Link href="/crm-immobilier-cote-divoire" className="hover:underline">
                      CRM immobilier
                    </Link>
                    {' '}: prospects, visites, pipeline
                  </h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Vous perdez des prospects car vous oubliez de les relancer. Vous ne savez pas où en est chaque dossier.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> ImmoTopia centralise tous vos contacts (prospects, clients, propriétaires) avec historique complet des interactions, relances automatiques et pipeline commercial visuel. Découvrez les{' '}
                    <Link href="/guides/crm-immobilier-bonnes-pratiques" className="font-semibold text-[#2563EB] hover:underline">
                      bonnes pratiques CRM immobilier
                    </Link>
                    {' '}pour optimiser votre conversion.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice agence :</strong> Augmentation du taux de conversion de 30% grâce aux relances automatiques. Aucun prospect n&apos;est oublié. Visibilité complète sur l&apos;activité commerciale.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Fiche contact complète avec historique</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Relances automatiques par email/SMS</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Pipeline commercial visuel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biens & Annonces */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Home className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Biens & annonces : stock fiable, statuts temps réel</h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Vos biens sont éparpillés dans plusieurs fichiers Excel. Impossible de savoir rapidement ce qui est disponible.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> Base unique de biens avec photos, caractéristiques, statuts en temps réel (disponible, en visite, loué, vendu). Création d&apos;annonces en un clic.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice agence :</strong> Gain de temps de 70% sur la création d&apos;annonces. Aucune erreur de disponibilité. Synchronisation automatique avec votre site web.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Fiches biens standardisées</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Statuts en temps réel</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Publication automatique annonces</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gestion locative */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Gestion locative : loyers, quittances, impayés</h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Suivi manuel des loyers, quittances générées à la main, impayés difficiles à gérer.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> Gestion locative complète avec contrats, quittances automatiques, suivi des paiements, relances automatisées et tableau de bord locatif.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice agence :</strong> Réduction de 80% du temps de gestion locative. Moins d&apos;impayés grâce aux alertes. Satisfaction client améliorée.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Contrats et quittances automatiques</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Alertes impayés et relances</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Tableau de bord locatif</span>
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Paiements Mobile Money : encaissements rapides et tracés</h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Paiements Mobile Money non tracés automatiquement. Rapprochement bancaire chronophage.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> Intégration native avec Orange Money, MTN Money, Moov Money et Wave. Enregistrement automatique des paiements et génération de quittances.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice agence :</strong> Traçabilité complète des paiements. Gain de temps de 90% sur la génération de quittances. Moins de litiges.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Paiements tracés automatiquement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Quittances générées instantanément</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Rapprochement bancaire simplifié</span>
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Reporting : pilotage de l&apos;activité</h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2"><strong className="text-red-600">Problème :</strong> Impossible de générer des tableaux de bord en temps réel. Reporting manuel chronophage.</p>
                    <p className="text-gray-700 mb-2"><strong className="text-green-600">Solution :</strong> Tableaux de bord en temps réel avec KPIs clés : nombre de visites, taux de conversion, chiffre d&apos;affaires, performance par agent.</p>
                    <p className="text-gray-700"><strong className="text-blue-600">Bénéfice agence :</strong> Décisions basées sur des données fiables. Visibilité complète sur l&apos;activité. Pilotage stratégique facilité.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Tableaux de bord temps réel</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">KPIs commerciaux et financiers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Performance par agent</span>
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
            Cas d&apos;usage concret : du prospect au paiement
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Voici comment ImmoTopia transforme le quotidien d&apos;une agence immobilière, de A à Z :
          </p>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg border border-blue-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Un prospect contacte l&apos;agence</h3>
                  <p className="text-gray-700">
                    M. Kouassi cherche un appartement 3 pièces à Cocody. Il remplit le formulaire sur votre site web. Il est automatiquement enregistré dans votre CRM avec ses critères de recherche. Votre agent commercial reçoit une notification.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Le bien est proposé</h3>
                  <p className="text-gray-700">
                    Votre agent consulte la base de biens et trouve 3 appartements correspondants. Il envoie les fiches détaillées par email directement depuis ImmoTopia. M. Kouassi est intéressé par l&apos;appartement de la Riviera Golf.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">La visite est planifiée</h3>
                  <p className="text-gray-700">
                    L&apos;agent planifie une visite pour le lendemain à 15h directement dans ImmoTopia. M. Kouassi reçoit une confirmation par SMS. Le bien passe en statut &quot;En visite&quot;. L&apos;agent reçoit un rappel 1h avant.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Le contrat est signé</h3>
                  <p className="text-gray-700">
                    M. Kouassi valide l&apos;appartement. Le contrat de location est généré automatiquement depuis un modèle avec toutes les informations (loyer 250 000 FCFA, charges 25 000 FCFA, dépôt de garantie 500 000 FCFA). Le bien passe en statut &quot;Loué&quot;.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Le paiement est encaissé</h3>
                  <p className="text-gray-700">
                    M. Kouassi paie le premier loyer (275 000 FCFA) via Orange Money. Le paiement est enregistré dans ImmoTopia et rattaché automatiquement au contrat. Une quittance est générée et envoyée par email instantanément.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Le dirigeant voit tout sur son dashboard</h3>
                  <p className="text-gray-700">
                    Le dirigeant de l&apos;agence consulte son tableau de bord : il voit que l&apos;agent a réalisé 1 nouvelle location ce mois-ci, que le chiffre d&apos;affaires a augmenté de 275 000 FCFA, et que le taux d&apos;occupation est maintenant à 92%. Tout est automatisé, aucune saisie manuelle.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg border border-blue-200">
              <p className="text-gray-700 flex items-start gap-2">
                <Zap className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Résultat :</strong> Ce processus, qui prenait plusieurs heures avec Excel et WhatsApp, est maintenant automatisé à 80%. L&apos;agence gagne du temps, réduit les erreurs et améliore la satisfaction client.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* 6. POUR QUEL TYPE D'AGENCE ? */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pour quel type d&apos;agence immobilière ?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            ImmoTopia s&apos;adapte à tous les types d&apos;agences, quelle que soit leur taille ou leur spécialité.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                Petite agence (5–20 biens)
              </h3>
              <p className="text-gray-700 mb-3">
                Vous démarrez votre activité ou gérez un petit portefeuille. ImmoTopia vous permet de professionnaliser votre gestion dès le départ sans investissement lourd.
              </p>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Modules recommandés :</strong> CRM + Biens/Annonces + Gestion locative de base
                </span>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Bénéfice clé :</strong> Gestion professionnelle dès le départ, image de marque renforcée
                </span>
              </div>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Agence moyenne (portefeuille mixte)
              </h3>
              <p className="text-gray-700 mb-3">
                Vous gérez entre 20 et 100 biens, avec plusieurs agents commerciaux. Vous avez besoin de centraliser et de piloter l&apos;activité.
              </p>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Modules recommandés :</strong> CRM + Biens/Annonces + Gestion locative + Reporting + Mobile Money
                </span>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Bénéfice clé :</strong> Visibilité complète sur l&apos;activité, pilotage par les données, gain de temps massif
                </span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Target className="h-6 w-6 text-purple-600" />
                Agence multi-activités (vente + location + gestion)
              </h3>
              <p className="text-gray-700 mb-3">
                Vous gérez à la fois des mandats de vente, de la location et de la gestion locative pour le compte de propriétaires. Vous avez besoin d&apos;un ERP complet.
              </p>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Modules recommandés :</strong> Tous les modules (CRM, Biens, Gestion locative, Syndic, Reporting, Mobile Money)
                </span>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Bénéfice clé :</strong> Centralisation totale, automatisation maximale, scalabilité pour croître
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-900 font-semibold mb-2">
              ImmoTopia est modulaire et évolutif
            </p>
            <p className="text-gray-700">
              Vous pouvez démarrer avec les modules essentiels et activer progressivement d&apos;autres fonctionnalités au fur et à mesure que votre agence grandit. Pas besoin de changer de logiciel quand vous évoluez.
            </p>
          </div>
        </section>

        {/* 7. POURQUOI UN ERP IMMOBILIER */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Pourquoi un ERP immobilier (et pas un outil de plus)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-8 text-xl">
              Beaucoup d&apos;agences utilisent plusieurs outils dispersés. ImmoTopia propose une approche différente : un ERP centralisé.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Outils dispersés (approche traditionnelle)
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Excel pour les biens</li>
                  <li>WhatsApp pour les clients</li>
                  <li>Cahiers pour les loyers</li>
                  <li>Email pour les documents</li>
                  <li>Pas de vue d&apos;ensemble</li>
                  <li>Ressaisie manuelle des données</li>
                  <li>Risques d&apos;erreurs élevés</li>
                  <li>Temps perdu à chercher l&apos;information</li>
                </ul>
              </div>
              <div className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  ERP centralisé (ImmoTopia)
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Toutes les données dans un seul système</li>
                  <li>Modules intégrés qui communiquent</li>
                  <li>Automatisation des workflows</li>
                  <li>Tableaux de bord unifiés</li>
                  <li>Vue d&apos;ensemble en temps réel</li>
                  <li>Saisie unique, données partagées</li>
                  <li>Réduction drastique des erreurs</li>
                  <li>Gain de temps de 80% sur l&apos;administratif</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Avantage stratégique long terme pour une agence</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Scalabilité</h4>
                    <p className="text-gray-700">Votre agence peut grandir sans changer de logiciel. ImmoTopia évolue avec vous.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LineChart className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Compétitivité</h4>
                    <p className="text-gray-700">Vous êtes plus réactif, plus professionnel et plus efficace que vos concurrents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Rentabilité</h4>
                    <p className="text-gray-700">Moins de temps perdu, moins d&apos;erreurs, plus de conversions = plus de chiffre d&apos;affaires.</p>
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
            ImmoTopia n&apos;est pas qu&apos;un logiciel pour agences. C&apos;est un écosystème complet qui couvre tous les aspects de l&apos;immobilier professionnel.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link
              href="/gestion-locative-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <FileText className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  Gestion locative
                </h3>
              </div>
              <p className="text-gray-700 mb-3">
                Module complet pour gérer vos locations : contrats, quittances, loyers, impayés, états des lieux.
              </p>
              <span className="text-blue-600 font-medium flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/crm-immobilier-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Users className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  CRM immobilier
                </h3>
              </div>
              <p className="text-gray-700 mb-3">
                Centralisez vos contacts, prospects et clients. Suivez vos opportunités commerciales et automatisez vos relances.
              </p>
              <span className="text-blue-600 font-medium flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/logiciel-annonces-immobilieres-cote-divoire"
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Home className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  Biens & Annonces
                </h3>
              </div>
              <p className="text-gray-700 mb-3">
                Gérez votre portefeuille de biens et créez des annonces professionnelles en quelques clics.
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
                Intégration native avec Orange Money, MTN Money, Moov Money et Wave pour tracer vos paiements.
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

        {/* 9. FAQ AGENCES IMMOBILIÈRES */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes des agences immobilières
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
              Prêt à transformer votre agence immobilière ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les agences immobilières qui ont choisi ImmoTopia pour centraliser leur activité, automatiser leurs tâches et piloter leur croissance.
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
            <p className="mt-6 text-blue-100 text-sm">
              Aucune carte bancaire requise • Démo personnalisée • Support en français
            </p>
          </div>
        </section>

        {/* Liens internes supplémentaires */}
        <section className="mb-8">
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ressources complémentaires</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/fonctionnalites"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
              >
                Toutes les fonctionnalités
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/la-solution/portail-annonces"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
              >
                Portail d&apos;annonces
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/crm-immobilier-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
              >
                CRM immobilier
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/logiciel-annonces-immobilieres-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
              >
                Logiciel annonces immobilières
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/guides/gerer-agence-immobiliere-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
              >
                Guide gestion d&apos;agence
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/guides/crm-immobilier-bonnes-pratiques"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
              >
                Bonnes pratiques CRM
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/immotopia-vs-excel"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
              >
                ImmoTopia vs Excel
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
              >
                Logiciel immobilier Côte d&apos;Ivoire
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/crm-immobilier-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
              >
                CRM immobilier
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/gestion-locative-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
              >
                Gestion locative
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/logiciel-annonces-immobilieres-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
              >
                Annonces immobilières
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
              >
                Paiements Mobile Money
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/tarifs"
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
              >
                Tarifs
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
