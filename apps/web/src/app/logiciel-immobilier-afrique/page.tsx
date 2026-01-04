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
  Globe,
  MapPin,
  XCircle,
  Target,
  Layers,
  Clock,
  Database,
  Headphones,
  Wifi,
  WifiOff,
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Logiciel immobilier en Afrique : ERP local ou solution étrangère ?',
    description:
      'Comparer ERP immobiliers locaux et solutions étrangères : adaptation, Mobile Money, support, scalabilité. Guide complet pour choisir le bon logiciel immobilier en Afrique.',
    canonicalUrl: '/logiciel-immobilier-afrique',
    keywords: [
      'logiciel immobilier Afrique',
      'ERP immobilier Afrique',
      'logiciel gestion immobilière Afrique',
      'Mobile Money immobilier',
      'logiciel immobilier local',
      'solution immobilière africaine',
      'CRM immobilier Afrique',
      'gestion locative Afrique',
      'logiciel agence immobilière Afrique',
      'ERP local vs étranger',
    ],
  },
  '/logiciel-immobilier-afrique'
);

const faqItems = [
  {
    question: 'Pourquoi un ERP local est-il plus adapté au marché africain ?',
    answer:
      'Un ERP local comprend les spécificités du marché africain : intégration native du Mobile Money (Orange Money, MTN Money, Wave), conformité aux réglementations locales, support dans les fuseaux horaires africains, et adaptation aux pratiques commerciales locales. Les solutions étrangères nécessitent souvent des personnalisations coûteuses pour ces fonctionnalités.',
  },
  {
    question: 'Les solutions étrangères peuvent-elles intégrer le Mobile Money ?',
    answer:
      'Techniquement oui, mais cela nécessite généralement des développements sur mesure coûteux et des intégrations tierces. Les ERP locaux africains intègrent nativement Orange Money, MTN Money, Moov Money et Wave, avec rapprochement automatique des paiements et génération de quittances conformes aux normes locales.',
  },
  {
    question: 'Le support technique est-il vraiment différent ?',
    answer:
      'Oui, significativement. Les ERP locaux offrent un support dans les fuseaux horaires africains (GMT à GMT+3), en français et langues locales, avec une compréhension des contextes métiers africains. Les solutions étrangères ont souvent un support décalé (horaires européens/américains), des temps de réponse plus longs, et une méconnaissance des spécificités locales.',
  },
  {
    question: 'Les ERP locaux sont-ils aussi performants technologiquement ?',
    answer:
      'Oui. Les ERP africains modernes utilisent les mêmes technologies cloud (AWS, Azure, Google Cloud) et standards de sécurité que les solutions internationales. La différence réside dans l\'adaptation fonctionnelle au marché local, pas dans la qualité technique. Certains ERP locaux sont même plus innovants sur des aspects spécifiques comme le Mobile Money.',
  },
  {
    question: 'Peut-on migrer d\'une solution étrangère vers un ERP local ?',
    answer:
      'Oui, la migration est possible et souvent recommandée. Les ERP locaux proposent généralement un accompagnement pour l\'import de données depuis Excel, CSV ou API. La transition permet de bénéficier d\'une meilleure adaptation au marché local, d\'un support plus réactif et de coûts souvent plus compétitifs.',
  },
  {
    question: 'Les données sont-elles aussi sécurisées avec un ERP local ?',
    answer:
      'Oui. Les ERP locaux sérieux utilisent les mêmes standards de sécurité : chiffrement SSL/TLS, hébergement cloud sécurisé, sauvegardes automatiques, authentification multi-facteurs, et conformité RGPD. Certains offrent même l\'avantage d\'un hébergement de données sur le continent africain, réduisant la latence et respectant les réglementations locales sur la souveraineté des données.',
  },
  {
    question: 'Quel est le coût comparatif entre ERP local et solution étrangère ?',
    answer:
      'Les ERP locaux sont généralement 30 à 50% moins chers que les solutions étrangères équivalentes, avec des tarifs en monnaie locale (FCFA, etc.) évitant les fluctuations de change. De plus, ils n\'ont pas de coûts cachés de personnalisation pour l\'adaptation au marché local (Mobile Money, conformité, etc.), ce qui réduit le coût total de possession (TCO).',
  },
  {
    question: 'ImmoTopia fonctionne-t-il dans toute l\'Afrique ?',
    answer:
      'Oui, ImmoTopia est conçu pour l\'ensemble du marché africain. Il intègre les moyens de paiement mobiles de différents pays (Orange Money, MTN Money, Wave, Moov Money), supporte plusieurs devises (FCFA, CDF, etc.), et s\'adapte aux réglementations de chaque pays. Le support est disponible pour toute l\'Afrique francophone et anglophone.',
  },
];

export default function LogicielImmobilierAfriquePage() {
  const faqSchema = generateFAQSchema({ questions: faqItems });

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Globe className="h-4 w-4" />
                Guide Décision · Marché Africain
              </div>

              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Logiciel immobilier en Afrique :<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  ERP local ou solution étrangère ?
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 md:text-xl">
                Comparez les approches pour choisir le logiciel immobilier le plus adapté au marché africain :
                intégration Mobile Money, support local, conformité réglementaire et scalabilité. Découvrez{' '}
                <Link href="/logiciel-immobilier-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  notre ERP immobilier en Côte d'Ivoire
                </Link>
                {' '}et{' '}
                <Link href="/vision/digitalisation-immobilier-afrique" className="font-semibold text-[#2563EB] hover:underline">
                  notre vision pour l'Afrique
                </Link>
                .
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/contact?demo=true" className="flex items-center">
                    Découvrir ImmoTopia
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact?signup=true">Essai gratuit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Le marché africain immobilier - Spécificités */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Le marché immobilier africain : des spécificités uniques
              </h2>
              <p className="text-lg text-gray-600">
                Le secteur immobilier en Afrique présente des caractéristiques distinctes qui nécessitent
                des outils adaptés, bien au-delà d'une simple traduction de solutions occidentales.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Prédominance du Mobile Money</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  En Afrique, le Mobile Money (Orange Money, MTN Money, Wave, Moov Money) représente
                  plus de 60% des transactions financières dans certains pays. Les paiements de loyers,
                  charges et commissions se font majoritairement via ces canaux.
                </p>
                <p className="text-gray-600">
                  <strong>Implication :</strong> Un logiciel immobilier doit intégrer nativement ces moyens
                  de paiement pour automatiser le rapprochement bancaire et la génération de quittances,
                  sans quoi la saisie manuelle devient un cauchemar opérationnel.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-3">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Réglementations locales variées</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Chaque pays africain a ses propres exigences légales : formats de quittances,
                  déclarations fiscales, contrats de bail, règles de copropriété. La Côte d'Ivoire,
                  le Sénégal, le Cameroun ou le Congo-Kinshasa ont des cadres juridiques distincts.
                </p>
                <p className="text-gray-600">
                  <strong>Implication :</strong> Le logiciel doit proposer des modèles de documents
                  conformes aux normes locales de chaque pays, et non des templates européens ou américains
                  inadaptés.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pratiques commerciales spécifiques</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Le marché africain fonctionne avec des pratiques uniques : cautions multiples (3 à 6 mois),
                  paiements fractionnés, gestion de garants multiples, négociations tarifaires fréquentes,
                  et relations client basées sur la proximité et la confiance.
                </p>
                <p className="text-gray-600">
                  <strong>Implication :</strong> Le CRM et les workflows doivent refléter ces réalités
                  opérationnelles, pas les processus standardisés des marchés occidentaux.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-orange-100 p-3">
                    <Wifi className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Connectivité variable</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Bien que la couverture mobile soit excellente dans les grandes villes africaines,
                  certaines zones peuvent connaître des interruptions. Les professionnels ont besoin
                  d'outils qui fonctionnent de manière fluide même avec une connexion intermittente.
                </p>
                <p className="text-gray-600">
                  <strong>Implication :</strong> L'architecture du logiciel doit être optimisée pour
                  des performances élevées avec une bande passante limitée, et idéalement offrir des
                  fonctionnalités hors ligne pour les tâches critiques.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-blue-50 p-6 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">Conclusion clé</h4>
                  <p className="text-gray-700">
                    Ces spécificités ne sont pas de simples "options" à ajouter à un logiciel générique.
                    Elles doivent être au cœur de la conception du système pour garantir une adoption
                    réussie et une efficacité opérationnelle maximale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Limites des solutions importées */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Les limites des solutions étrangères sur le marché africain
              </h2>
              <p className="text-lg text-gray-600">
                Bien que technologiquement solides, les logiciels immobiliers conçus pour l'Europe ou
                l'Amérique du Nord rencontrent des obstacles structurels lorsqu'ils sont déployés en Afrique.
              </p>
            </div>

            <div className="space-y-6">
              {/* Limite 1 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-100 p-3">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      Absence d'intégration native du Mobile Money
                    </h3>
                    <p className="mb-3 text-gray-600">
                      Les solutions étrangères sont conçues pour les systèmes bancaires occidentaux (virements SEPA,
                      prélèvements automatiques, cartes bancaires). L'intégration du Mobile Money nécessite :
                    </p>
                    <ul className="mb-3 space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
                        <span>Des développements sur mesure coûteux (10 000 à 50 000 €)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
                        <span>Des intégrations tierces via API (frais mensuels supplémentaires)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
                        <span>Une maintenance continue pour chaque mise à jour de l'opérateur mobile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
                        <span>Pas de rapprochement automatique : saisie manuelle des paiements</span>
                      </li>
                    </ul>
                    <p className="text-sm font-semibold text-red-700">
                      Résultat : Perte de temps, erreurs de saisie, et coûts cachés importants.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limite 2 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-100 p-3">
                    <FileText className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      Documents non conformes aux normes locales
                    </h3>
                    <p className="mb-3 text-gray-600">
                      Les modèles de documents (quittances, contrats de bail, états des lieux, appels de charges)
                      sont conçus selon les normes européennes ou américaines. Problèmes rencontrés :
                    </p>
                    <ul className="mb-3 space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Quittances non conformes aux exigences fiscales ivoiriennes, sénégalaises, etc.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Contrats de bail manquant des clauses obligatoires locales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Terminologie juridique inadaptée (ex: "charges de copropriété" vs "charges communes")</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Nécessité de personnaliser chaque template manuellement</span>
                      </li>
                    </ul>
                    <p className="text-sm font-semibold text-red-700">
                      Résultat : Risques juridiques et perte de crédibilité professionnelle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limite 3 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-100 p-3">
                    <Headphones className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      Support technique inadapté
                    </h3>
                    <p className="mb-3 text-gray-600">
                      Le support des solutions étrangères est généralement basé en Europe ou en Amérique du Nord,
                      ce qui crée des frictions opérationnelles :
                    </p>
                    <ul className="mb-3 space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Décalage horaire : support disponible de 9h à 18h heure européenne (souvent fermé aux heures de pointe africaines)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Barrière linguistique : support en anglais uniquement, ou français avec accent étranger</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Méconnaissance du contexte local : incompréhension des problématiques spécifiques (Mobile Money, pratiques commerciales)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Temps de résolution longs : 48h à 7 jours pour des problèmes bloquants</span>
                      </li>
                    </ul>
                    <p className="text-sm font-semibold text-red-700">
                      Résultat : Frustration des équipes et perte de productivité.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limite 4 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-100 p-3">
                    <DollarSign className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      Coûts cachés et fluctuations de change
                    </h3>
                    <p className="mb-3 text-gray-600">
                      Les tarifs affichés en euros ou dollars cachent souvent des coûts supplémentaires :
                    </p>
                    <ul className="mb-3 space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <DollarSign className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Fluctuations de change : un abonnement à 100€/mois peut varier de 65 000 à 75 000 FCFA selon le taux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Frais de personnalisation : 5 000 à 50 000 € pour adapter le logiciel au marché local</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Frais de formation : déplacement de formateurs européens ou formation en ligne inadaptée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
                        <span>Coûts de maintenance : mises à jour payantes pour chaque nouvelle fonctionnalité locale</span>
                      </li>
                    </ul>
                    <p className="text-sm font-semibold text-red-700">
                      Résultat : Coût total de possession (TCO) 40 à 60% plus élevé que prévu.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-orange-50 p-6 border border-orange-200">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-orange-100 p-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">Important à retenir</h4>
                  <p className="text-gray-700">
                    Ces limites ne sont pas des défauts de conception, mais le résultat naturel d'un logiciel
                    conçu pour un marché différent. Adapter une solution étrangère au marché africain revient
                    souvent plus cher et plus complexe que d'adopter une solution locale dès le départ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Avantages d'un ERP local africain */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Les avantages décisifs d'un ERP immobilier local africain
              </h2>
              <p className="text-lg text-gray-600">
                Un ERP conçu spécifiquement pour le marché africain offre des bénéfices structurels
                qui vont bien au-delà de la simple traduction ou adaptation d'une solution étrangère.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Avantage 1 */}
              <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-3">
                    <Smartphone className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Intégration native du Mobile Money</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Les ERP locaux intègrent nativement Orange Money, MTN Money, Wave et Moov Money dès la conception :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Rapprochement automatique des paiements reçus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Génération instantanée de quittances conformes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Notifications automatiques aux locataires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Suivi en temps réel de l'état des paiements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Aucun développement supplémentaire requis</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-green-100 p-3">
                  <p className="text-sm font-semibold text-green-800">
                    ✓ Gain de temps : 80% de réduction du temps de traitement des paiements
                  </p>
                </div>
              </div>

              {/* Avantage 2 */}
              <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Conformité réglementaire locale</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Documents et processus conformes aux réglementations de chaque pays africain :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Quittances conformes aux normes fiscales locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Contrats de bail adaptés au droit local</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>États des lieux selon les pratiques locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Appels de charges pour copropriétés africaines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Mises à jour automatiques selon évolutions légales</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-blue-100 p-3">
                  <p className="text-sm font-semibold text-blue-800">
                    ✓ Sécurité juridique : 100% de conformité garantie
                  </p>
                </div>
              </div>

              {/* Avantage 3 */}
              <div className="rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-3">
                    <Headphones className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Support local réactif</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Équipe de support basée en Afrique, comprenant les réalités du terrain :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Disponibilité aux heures de bureau africaines (GMT à GMT+3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Support en français et langues locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Compréhension des contextes métiers locaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Temps de réponse : moins de 2h en moyenne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>Formation sur site possible dans toute l'Afrique</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-purple-100 p-3">
                  <p className="text-sm font-semibold text-purple-800">
                    ✓ Satisfaction client : 95% de taux de satisfaction support
                  </p>
                </div>
              </div>

              {/* Avantage 4 */}
              <div className="rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-orange-100 p-3">
                    <DollarSign className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Tarification transparente et locale</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Modèle tarifaire adapté aux réalités économiques africaines :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-600" />
                    <span>Tarifs en monnaie locale (FCFA, CDF, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-600" />
                    <span>Pas de fluctuations de change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-600" />
                    <span>Aucun coût caché de personnalisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-600" />
                    <span>Mises à jour incluses dans l'abonnement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-600" />
                    <span>30 à 50% moins cher que les solutions étrangères</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-orange-100 p-3">
                  <p className="text-sm font-semibold text-orange-800">
                    ✓ ROI : Retour sur investissement en moins de 6 mois
                  </p>
                </div>
              </div>

              {/* Avantage 5 */}
              <div className="rounded-xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-100 p-3">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Performance optimisée</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Architecture technique adaptée aux infrastructures africaines :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>Optimisation pour connexions à bande passante limitée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>Hébergement sur serveurs africains (latence réduite)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>Mode hors ligne pour tâches critiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>Interface responsive optimisée mobile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>Temps de chargement 3x plus rapides</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-indigo-100 p-3">
                  <p className="text-sm font-semibold text-indigo-800">
                    ✓ Productivité : Accès fluide même avec 3G
                  </p>
                </div>
              </div>

              {/* Avantage 6 */}
              <div className="rounded-xl border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-teal-100 p-3">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Évolution continue locale</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Roadmap produit guidée par les besoins du marché africain :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Nouvelles fonctionnalités basées sur retours clients africains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Intégration rapide de nouveaux opérateurs Mobile Money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Adaptation aux évolutions réglementaires locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Priorité aux fonctionnalités à fort impact local</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Mises à jour mensuelles avec améliorations continues</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-teal-100 p-3">
                  <p className="text-sm font-semibold text-teal-800">
                    ✓ Innovation : Toujours à la pointe du marché africain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Critères de choix spécifiques Afrique */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Critères de choix d'un logiciel immobilier en Afrique
              </h2>
              <p className="text-lg text-gray-600">
                Pour choisir le bon ERP immobilier sur le marché africain, évaluez ces critères essentiels
                qui détermineront votre succès opérationnel.
              </p>
            </div>

            <div className="space-y-6">
              {/* Critère 1 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Intégration Mobile Money native</h3>
                  </div>
                  <div className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                    Critique
                  </div>
                </div>
                <p className="mb-3 text-gray-600">
                  <strong>Questions à poser :</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Le Mobile Money est-il intégré nativement ou via une API tierce ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Quels opérateurs sont supportés ? (Orange Money, MTN Money, Wave, Moov Money)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Le rapprochement bancaire est-il automatique ou manuel ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Y a-t-il des frais supplémentaires pour cette intégration ?</span>
                  </li>
                </ul>
              </div>

              {/* Critère 2 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Conformité réglementaire locale</h3>
                  </div>
                  <div className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                    Critique
                  </div>
                </div>
                <p className="mb-3 text-gray-600">
                  <strong>Questions à poser :</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Les quittances sont-elles conformes aux normes fiscales de mon pays ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Les contrats de bail respectent-ils le droit local ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Les mises à jour réglementaires sont-elles automatiques ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Puis-je personnaliser les documents selon mes besoins ?</span>
                  </li>
                </ul>
              </div>

              {/* Critère 3 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Support technique local</h3>
                  </div>
                  <div className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                    Important
                  </div>
                </div>
                <p className="mb-3 text-gray-600">
                  <strong>Questions à poser :</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Le support est-il disponible aux heures de bureau africaines ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Dans quelles langues le support est-il disponible ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Quel est le temps de réponse moyen ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>La formation est-elle disponible sur site en Afrique ?</span>
                  </li>
                </ul>
              </div>

              {/* Critère 4 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Tarification transparente</h3>
                  </div>
                  <div className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                    Important
                  </div>
                </div>
                <p className="mb-3 text-gray-600">
                  <strong>Questions à poser :</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Les tarifs sont-ils en monnaie locale ou en devises étrangères ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Y a-t-il des frais cachés (personnalisation, formation, intégrations) ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Les mises à jour sont-elles incluses dans l'abonnement ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Quel est le coût total de possession (TCO) sur 3 ans ?</span>
                  </li>
                </ul>
              </div>

              {/* Critère 5 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                      5
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Performance et accessibilité</h3>
                  </div>
                  <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    Recommandé
                  </div>
                </div>
                <p className="mb-3 text-gray-600">
                  <strong>Questions à poser :</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Le logiciel fonctionne-t-il bien avec une connexion 3G/4G ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Y a-t-il un mode hors ligne pour les tâches critiques ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>L'interface est-elle optimisée pour mobile et tablette ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Où sont hébergées les données (latence) ?</span>
                  </li>
                </ul>
              </div>

              {/* Critère 6 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                      6
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Scalabilité et évolution</h3>
                  </div>
                  <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    Recommandé
                  </div>
                </div>
                <p className="mb-3 text-gray-600">
                  <strong>Questions à poser :</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Le logiciel peut-il grandir avec mon activité ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Puis-je activer de nouveaux modules selon mes besoins ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>La roadmap produit est-elle alignée sur le marché africain ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>À quelle fréquence les nouvelles fonctionnalités sont-elles ajoutées ?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Tableau comparatif */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Tableau comparatif : ERP local vs Solution étrangère
              </h2>
              <p className="text-lg text-gray-600">
                Comparaison objective des deux approches sur les critères essentiels du marché africain
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl border border-gray-200 bg-white shadow-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <th className="border-b border-gray-200 p-4 text-left font-bold text-gray-900">
                      Critère
                    </th>
                    <th className="border-b border-l border-gray-200 p-4 text-center font-bold text-green-700">
                      ERP Local Africain
                    </th>
                    <th className="border-b border-l border-gray-200 p-4 text-center font-bold text-red-700">
                      Solution Étrangère
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Mobile Money
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">Intégration native</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <XCircle className="h-6 w-6 text-red-600" />
                        <span className="text-sm text-gray-600">Développement sur mesure requis</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Conformité réglementaire
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">100% conforme par pays</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-orange-600" />
                        <span className="text-sm text-gray-600">Personnalisation nécessaire</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Support technique
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">Local, réactif (&lt;2h)</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <XCircle className="h-6 w-6 text-red-600" />
                        <span className="text-sm text-gray-600">Décalage horaire (24-72h)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Tarification
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">Monnaie locale, transparent</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-orange-600" />
                        <span className="text-sm text-gray-600">Devises, fluctuations</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Coût total (TCO 3 ans)
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">30-50% moins cher</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <XCircle className="h-6 w-6 text-red-600" />
                        <span className="text-sm text-gray-600">Coûts cachés élevés</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Performance réseau
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">Optimisé 3G/4G</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-orange-600" />
                        <span className="text-sm text-gray-600">Requiert haut débit</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Hébergement données
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">Serveurs africains</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-orange-600" />
                        <span className="text-sm text-gray-600">Europe/USA (latence)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Roadmap produit
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">Besoins marché africain</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <XCircle className="h-6 w-6 text-red-600" />
                        <span className="text-sm text-gray-600">Marché occidental prioritaire</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4 font-semibold text-gray-900">
                      Formation & onboarding
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">Sur site en Afrique</span>
                      </div>
                    </td>
                    <td className="border-b border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-orange-600" />
                        <span className="text-sm text-gray-600">En ligne uniquement</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">
                      Temps de déploiement
                    </td>
                    <td className="border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">1-2 semaines</span>
                      </div>
                    </td>
                    <td className="border-l border-gray-200 p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <XCircle className="h-6 w-6 text-red-600" />
                        <span className="text-sm text-gray-600">2-6 mois (personnalisation)</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-green-100 p-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">Verdict</h4>
                  <p className="text-gray-700">
                    Pour une activité immobilière en Afrique, un ERP local offre un avantage compétitif
                    significatif : déploiement plus rapide, coûts maîtrisés, conformité garantie, et support
                    réactif. Les solutions étrangères peuvent convenir à des groupes internationaux avec des
                    budgets IT importants, mais pour la majorité des professionnels africains, un ERP local
                    est le choix optimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Pourquoi ImmoTopia est conçu pour l'Afrique */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Building2 className="h-4 w-4" />
                ERP Immobilier Africain
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                ImmoTopia : l'ERP immobilier pensé pour l'Afrique
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                ImmoTopia n'est pas une adaptation d'un logiciel étranger, mais un ERP conçu dès l'origine
                pour répondre aux besoins spécifiques du marché immobilier africain.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Fonctionnalité 1 */}
              <div className="rounded-xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-lg bg-blue-100 p-3 w-fit">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  Mobile Money natif
                </h3>
                <p className="text-gray-600">
                  Intégration native d'Orange Money, MTN Money, Wave et Moov Money avec rapprochement
                  automatique et génération de quittances conformes.
                </p>
              </div>

              {/* Fonctionnalité 2 */}
              <div className="rounded-xl border border-green-200 bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-lg bg-green-100 p-3 w-fit">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  Documents conformes
                </h3>
                <p className="text-gray-600">
                  Quittances, contrats de bail, états des lieux et appels de charges conformes aux
                  réglementations de chaque pays africain.
                </p>
              </div>

              {/* Fonctionnalité 3 */}
              <div className="rounded-xl border border-purple-200 bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-lg bg-purple-100 p-3 w-fit">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  CRM adapté
                </h3>
                <p className="text-gray-600">
                  Gestion de garants multiples, cautions fractionnées, négociations tarifaires et
                  workflows adaptés aux pratiques commerciales africaines.
                </p>
              </div>

              {/* Fonctionnalité 4 */}
              <div className="rounded-xl border border-orange-200 bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-lg bg-orange-100 p-3 w-fit">
                  <Headphones className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  Support local
                </h3>
                <p className="text-gray-600">
                  Équipe de support basée en Afrique, disponible aux heures de bureau locales,
                  en français et langues locales, avec temps de réponse &lt;2h.
                </p>
              </div>

              {/* Fonctionnalité 5 */}
              <div className="rounded-xl border border-indigo-200 bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-lg bg-indigo-100 p-3 w-fit">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  Performance optimale
                </h3>
                <p className="text-gray-600">
                  Architecture optimisée pour connexions 3G/4G, hébergement sur serveurs africains,
                  et mode hors ligne pour tâches critiques.
                </p>
              </div>

              {/* Fonctionnalité 6 */}
              <div className="rounded-xl border border-teal-200 bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-lg bg-teal-100 p-3 w-fit">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  Modules complets
                </h3>
                <p className="text-gray-600">
                  CRM, gestion des biens, gestion locative, syndic de copropriété, promotion immobilière,
                  comptabilité et reporting dans un seul ERP.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl border-2 border-blue-200 bg-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Déploiement rapide
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Configuration initiale en 1-2 semaines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Import de vos données existantes (Excel, CSV)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Formation de vos équipes sur site ou en ligne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Accompagnement personnalisé pendant 3 mois</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Tarification transparente
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Tarifs en FCFA (ou monnaie locale)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Abonnement mensuel sans engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Toutes les mises à jour incluses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Support technique illimité</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: CTA Final */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Prêt à transformer votre gestion immobilière ?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Rejoignez les professionnels de l'immobilier qui ont choisi ImmoTopia pour digitaliser
              leur activité avec un ERP conçu pour l'Afrique.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white text-blue-600 hover:bg-blue-50 group">
                <Link href="/contact?demo=true" className="flex items-center">
                  Demander une démo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact?signup=true">Essai gratuit 14 jours</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-blue-100">
              Sans engagement · Configuration rapide · Support inclus
            </p>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Questions fréquentes
              </h2>
              <p className="text-lg text-gray-600">
                Réponses aux questions les plus courantes sur le choix d'un logiciel immobilier en Afrique
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl bg-blue-50 p-8 border border-blue-200 text-center">
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                D'autres questions ?
              </h3>
              <p className="mb-6 text-gray-600">
                Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner
                dans le choix de la meilleure solution pour votre activité.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
