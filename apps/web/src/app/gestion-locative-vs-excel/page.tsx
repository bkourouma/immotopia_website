import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  FileText, 
  DollarSign, 
  AlertCircle,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Link2,
  X,
  Clock,
  Database,
  Search
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Gestion locative : Excel vs logiciel | ImmoTopia Côte d'Ivoire",
    description:
      "Excel suffit pour débuter, mais devient risqué pour suivre loyers, impayés et quittances. Comparez Excel vs ImmoTopia : paiements Mobile Money, quittances automatiques et reporting.",
    canonicalUrl: '/gestion-locative-vs-excel',
    keywords: [
      'gestion locative Excel vs logiciel',
      'suivi loyers Excel',
      'logiciel quittance loyer',
      'impayés loyer Excel',
      'gestion locative Côte d\'Ivoire Excel',
      'alternative Excel gestion locative',
      'logiciel gestion locative Côte d\'Ivoire',
      'quittance automatique',
      'paiement loyer Mobile Money',
      'ERP immobilier vs Excel',
    ],
  },
  '/gestion-locative-vs-excel'
);

const faqItems = [
  {
    question: "Peut-on migrer depuis Excel vers ImmoTopia ?",
    answer:
      "Oui, la migration depuis Excel est simple et accompagnée. Vous pouvez importer vos données existantes (biens, locataires, contrats, historique de paiements) via un fichier Excel structuré. Notre équipe vous accompagne dans cette migration pour garantir l'intégrité de vos données. La plupart des migrations sont complétées en quelques heures, et vous conservez l'historique complet de votre gestion locative.",
  },
  {
    question: "Les quittances sont-elles automatiques dans ImmoTopia ?",
    answer:
      "Oui, contrairement à Excel où vous devez créer manuellement chaque quittance, ImmoTopia génère automatiquement une quittance conforme aux exigences légales ivoiriennes dès qu'un paiement est enregistré. La quittance peut être envoyée automatiquement par email au locataire ou téléchargée en PDF. Cette automatisation élimine les erreurs de saisie et garantit une traçabilité complète.",
  },
  {
    question: "Peut-on encaisser via Mobile Money avec ImmoTopia ?",
    answer:
      "Oui, ImmoTopia intègre nativement Orange Money, MTN Money et Wave. Lorsqu'un locataire paie via Mobile Money, le paiement est automatiquement rattaché à son contrat et à la période concernée. Avec Excel, vous devez comparer manuellement les relevés Mobile Money avec vos tableaux, ce qui est chronophage et source d'erreurs. ImmoTopia automatise ce rapprochement.",
  },
  {
    question: "Est-ce adapté aux petits portefeuilles locatifs ?",
    answer:
      "Absolument. Excel peut suffire pour 1 à 3 biens, mais dès que vous gérez 5 biens ou plus, les risques d'erreurs et le temps passé augmentent considérablement. ImmoTopia est conçu pour s'adapter à tous les portefeuilles, des petites structures aux grandes agences. L'interface est intuitive, et vous ne payez que pour ce que vous utilisez. Même avec un petit portefeuille, l'automatisation des quittances et des relances vous fait gagner un temps précieux.",
  },
  {
    question: "Peut-on suivre les impayés et relances avec ImmoTopia ?",
    answer:
      "Oui, ImmoTopia offre un suivi structuré des impayés. Le système détecte automatiquement les retards de paiement et peut envoyer des relances automatiques par email ou SMS selon des seuils configurables (par exemple, alerte à J+3, relance à J+7). Chaque relance est enregistrée dans l'historique, créant une traçabilité complète. Avec Excel, vous devez suivre manuellement les retards et envoyer des relances via WhatsApp ou SMS, sans historique centralisé.",
  },
  {
    question: "Peut-on activer seulement la gestion locative dans ImmoTopia ?",
    answer:
      "ImmoTopia est un ERP immobilier complet qui intègre la gestion locative avec le CRM, la gestion des biens, la comptabilité et le reporting. Bien que vous puissiez utiliser principalement le module de gestion locative, l'activation de l'ensemble de l'ERP vous offre une meilleure efficacité opérationnelle. Par exemple, le CRM vous permet de suivre vos locataires et prospects, tandis que la gestion des biens centralise toutes les informations sur vos propriétés. Nous recommandons d'utiliser l'ERP complet pour maximiser votre productivité.",
  },
];

export default function GestionLocativeVsExcelPage() {
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
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                <Search className="h-4 w-4" />
                Comparatif objectif
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Gestion locative : Excel vs logiciel — que choisir en Côte d'Ivoire ?
              </h1>
              
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Excel suffit pour débuter, mais devient risqué à l'échelle : sécurisez vos loyers, preuves et impayés avec un outil adapté
              </p>
              
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
                Comparaison neutre et factuelle entre Excel et un logiciel de gestion locative comme ImmoTopia. Découvrez quand Excel suffit, et quand il devient un frein à votre croissance. Consultez aussi{' '}
                <Link href="/gestion-locative-cote-divoire" className="font-semibold text-[#2563EB] hover:underline">
                  notre module de gestion locative
                </Link>
                {' '}et{' '}
                <Link href="/immotopia-vs-excel" className="font-semibold text-[#2563EB] hover:underline">
                  notre comparaison complète ImmoTopia vs Excel
                </Link>
                .
              </p>

              {/* CTAs Hero */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                >
                  <Link href="/contact?demo=true" className="flex items-center font-bold">
                    Demander une démo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 bg-white text-blue-600 transition-all hover:scale-105 hover:bg-blue-50"
                >
                  <Link href="/gestion-locative-cote-divoire" className="flex items-center font-semibold">
                    Voir le module gestion locative
                    <Link2 className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Quand Excel est suffisant */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Quand Excel est suffisant (au début)
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Soyons honnêtes : Excel n'est pas un mauvais outil. Pour de nombreux gestionnaires locatifs qui débutent, Excel est même une solution pragmatique et accessible. Il permet de structurer les informations de base sans investissement initial.
              </p>

              <div className="mb-8 rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Excel fonctionne bien dans ces situations :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Portefeuille limité :</strong> Vous gérez 1 à 3 biens locatifs maximum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Gestionnaire unique :</strong> Une seule personne gère l'ensemble du portefeuille</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Peu de mouvements :</strong> Les locataires restent longtemps, peu de rotations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Paiements simples :</strong> Tous les locataires paient à temps, par le même moyen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span><strong>Pas de reporting complexe :</strong> Vous n'avez pas besoin de produire des états détaillés pour des propriétaires tiers</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Dans ces conditions, Excel peut suffire. Vous pouvez créer un tableau simple avec les colonnes : Bien, Locataire, Loyer mensuel, Date de paiement, Statut. C'est rapide, gratuit, et vous gardez le contrôle total sur vos données.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Limites d'Excel */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Les limites d'Excel pour la gestion locative en Côte d'Ivoire
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Dès que votre portefeuille locatif grandit ou que votre activité se professionnalise, Excel montre rapidement ses limites. Ces limites ne sont pas des défauts d'Excel en soi, mais plutôt le résultat d'une utilisation d'un outil qui n'a pas été conçu pour la gestion locative professionnelle.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Versions multiples et erreurs de saisie</h3>
                  </div>
                  <p className="text-gray-700">
                    Avec Excel, chaque modification crée potentiellement une nouvelle version du fichier. Si plusieurs personnes travaillent sur le même portefeuille, vous vous retrouvez avec "Loyers_v1.xlsx", "Loyers_v2_final.xlsx", "Loyers_v2_final_VRAIMENT_FINAL.xlsx". Quelle est la bonne version ? Qui a la dernière mise à jour ? Les erreurs de saisie (mauvaise cellule, formule écrasée) sont fréquentes et difficiles à détecter.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-amber-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Retards et impayés détectés trop tard</h3>
                  </div>
                  <p className="text-gray-700">
                    Excel ne vous alerte pas automatiquement quand un loyer est en retard. Vous devez vérifier manuellement chaque ligne, chaque mois. Résultat : vous détectez les impayés avec plusieurs jours (voire semaines) de retard, ce qui complique le recouvrement. Les relances sont envoyées via WhatsApp ou SMS, sans historique centralisé ni preuve de l'envoi.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Quittances manuelles, pas d'historique fiable</h3>
                  </div>
                  <p className="text-gray-700">
                    Chaque quittance doit être rédigée manuellement dans Word ou Excel, puis envoyée par email ou WhatsApp. C'est chronophage, et les erreurs sont fréquentes (mauvais montant, mauvaise période, mauvais locataire). L'archivage des quittances est dispersé : certaines dans un dossier "Quittances 2024", d'autres dans les emails envoyés, d'autres perdues. En cas de litige, retrouver une quittance spécifique devient un casse-tête.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Paiements Mobile Money non rattachés</h3>
                  </div>
                  <p className="text-gray-700">
                    En Côte d'Ivoire, de nombreux locataires paient via Orange Money, MTN Money ou Wave. Avec Excel, vous devez comparer manuellement les relevés Mobile Money avec vos tableaux pour identifier qui a payé, pour quelle période, et quel montant. Ce rapprochement manuel est chronophage et source d'erreurs. Un paiement peut être enregistré deux fois, ou au contraire oublié.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Difficile de produire des états de compte</h3>
                  </div>
                  <p className="text-gray-700">
                    Si vous gérez des biens pour des propriétaires tiers, vous devez produire régulièrement des états de compte détaillés. Avec Excel, cela nécessite de créer manuellement des tableaux croisés dynamiques, de filtrer les données, de vérifier les formules. Chaque rapport prend du temps, et les erreurs sont fréquentes. Les propriétaires attendent des rapports professionnels, pas des tableaux Excel bruts.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Users className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Collaboration et audit impossibles</h3>
                  </div>
                  <p className="text-gray-700">
                    Excel n'est pas conçu pour le travail collaboratif en temps réel. Si plusieurs personnes doivent accéder aux données (gestionnaire, comptable, assistant), vous devez partager le fichier par email ou sur un drive, avec les risques de versions multiples. En cas d'audit (par un propriétaire ou un expert-comptable), il est difficile de prouver l'intégrité des données : qui a modifié quoi, quand, et pourquoi ?
                  </p>
                </div>
              </div>

              <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                  Le vrai coût d'Excel : le temps et les risques
                </h3>
                <p className="text-gray-700">
                  Excel n'est pas gratuit si on compte le temps passé à saisir, vérifier, corriger, rapprocher, et générer des rapports. Pour un portefeuille de 10 biens, un gestionnaire peut passer 5 à 10 heures par mois uniquement sur la gestion administrative des loyers. À cela s'ajoutent les risques : impayés non détectés, litiges avec les locataires faute de preuves, erreurs de comptabilité, perte de crédibilité auprès des propriétaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Ce que doit faire un logiciel de gestion locative */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Ce que doit faire un logiciel de gestion locative moderne
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Un logiciel de gestion locative professionnel ne se contente pas de remplacer Excel. Il doit automatiser les tâches répétitives, sécuriser les données, et offrir une traçabilité complète. Voici les fonctionnalités essentielles qu'un logiciel doit offrir pour la gestion locative en Côte d'Ivoire.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Contrats et échéances automatiques</h3>
                  </div>
                  <p className="text-gray-700">
                    Le logiciel doit gérer les contrats de location avec toutes leurs spécificités : durée, loyer, charges, dépôt de garantie, clauses particulières. Les échéances de loyer doivent être calculées automatiquement, et le système doit vous alerter avant chaque échéance (renouvellement de contrat, fin de préavis, révision de loyer).
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Paiements rattachés (période/contrat/bien)</h3>
                  </div>
                  <p className="text-gray-700">
                    Chaque paiement doit être automatiquement rattaché au bon locataire, au bon contrat, à la bonne période, et au bon bien. Cette traçabilité est essentielle pour éviter les litiges. Le système doit supporter tous les moyens de paiement (espèces, virement, chèque, Mobile Money) et permettre un rapprochement bancaire automatique.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Quittances automatiques conformes</h3>
                  </div>
                  <p className="text-gray-700">
                    Dès qu'un paiement est enregistré, le logiciel doit générer automatiquement une quittance conforme aux exigences légales ivoiriennes. La quittance doit pouvoir être envoyée automatiquement par email au locataire, ou téléchargée en PDF. L'archivage doit être centralisé et sécurisé.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <AlertCircle className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Suivi impayés et relances structurées</h3>
                  </div>
                  <p className="text-gray-700">
                    Le logiciel doit détecter automatiquement les retards de paiement et vous alerter en temps réel. Les relances doivent pouvoir être automatisées (email, SMS) selon des seuils configurables (par exemple, alerte à J+3, relance à J+7, relance urgente à J+15). Chaque relance doit être enregistrée dans l'historique pour créer une preuve en cas de litige.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                      <Shield className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Dépôt de garantie et pénalités</h3>
                  </div>
                  <p className="text-gray-700">
                    Le logiciel doit gérer les dépôts de garantie (encaissement, restitution, retenue) et calculer automatiquement les pénalités de retard selon les paramètres du contrat. Ces montants doivent être intégrés à la comptabilité pour une vision précise de votre trésorerie.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                      <TrendingUp className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Reporting propriétaires et dirigeants</h3>
                  </div>
                  <p className="text-gray-700">
                    Le logiciel doit permettre de générer automatiquement des rapports détaillés pour les propriétaires (état des loyers, impayés, charges, travaux) et pour les dirigeants (taux d'occupation, taux de recouvrement, rentabilité par bien). Ces rapports doivent être professionnels, personnalisables, et exportables en PDF ou Excel.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                <p className="mb-4 font-semibold text-gray-900">
                  💡 ImmoTopia : un ERP immobilier complet
                </p>
                <p className="mb-4 text-gray-700">
                  ImmoTopia ne se limite pas à la gestion locative. C'est un ERP immobilier complet qui intègre le CRM (suivi des locataires et prospects), la gestion des biens, la comptabilité, le reporting, et même le syndic de copropriété. Cette intégration crée une synergie qui multiplie l'efficacité de chaque module.
                </p>
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  Découvrir l'ERP immobilier ImmoTopia complet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Tableau comparatif */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Tableau comparatif : Excel vs ImmoTopia
            </h2>

            <p className="mb-10 text-center text-lg text-gray-600 max-w-3xl mx-auto">
              Comparaison objective des fonctionnalités essentielles pour la gestion locative professionnelle en Côte d'Ivoire
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Critère
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                      Excel
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                      ImmoTopia
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Contrats & échéances
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-sm text-gray-600">Saisie manuelle, pas d'alerte</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Automatique avec alertes</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Suivi loyers par période
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                        <span className="text-sm text-gray-600">Manuel, risque d'erreurs</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Automatique en temps réel</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Impayés & relances
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-sm text-gray-600">Détection manuelle, relances WhatsApp</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Détection auto + relances structurées</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Quittances automatiques
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-sm text-gray-600">Création manuelle (Word/Excel)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Génération automatique conforme</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Paiements Mobile Money rattachés
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-sm text-gray-600">Rapprochement manuel chronophage</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Intégration native Orange/MTN/Wave</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Dépôts & pénalités
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                        <span className="text-sm text-gray-600">Calcul manuel, risque d'oubli</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Calcul automatique intégré</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Historique & preuves
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-sm text-gray-600">Dispersé, difficile à auditer</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Traçabilité complète centralisée</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Multi-utilisateurs
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-sm text-gray-600">Versions multiples, conflits</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Collaboration temps réel sécurisée</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Reporting par bien/locataire/propriétaire
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                        <span className="text-sm text-gray-600">Tableaux croisés manuels</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Rapports automatiques professionnels</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Intégration maintenance
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-sm text-gray-600">Aucune intégration</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Module ticketing intégré</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
              <p className="text-sm text-gray-700">
                <strong>Note :</strong> Ce tableau compare Excel utilisé de manière standard avec ImmoTopia. Excel peut être amélioré avec des macros VBA ou des add-ins, mais cela nécessite des compétences techniques avancées et ne résout pas les problèmes de collaboration, de traçabilité et d'intégration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Cas concrets */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              2 cas concrets : Excel vs logiciel
            </h2>

            <div className="space-y-8">
              {/* Cas 1 */}
              <div className="rounded-lg border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Cas 1 : Paiement Mobile Money — comment éviter les litiges
                </h3>

                <div className="space-y-6">
                  <div className="rounded-lg bg-red-50 p-6">
                    <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <X className="h-5 w-5 text-red-600" />
                      Avec Excel
                    </h4>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Situation :</strong> Un locataire paie son loyer de 150 000 FCFA via Orange Money le 5 du mois. Vous recevez la notification sur votre téléphone.
                      </p>
                      <p>
                        <strong>Problème :</strong> Vous devez manuellement :
                      </p>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Identifier le locataire à partir du numéro de téléphone ou du nom (qui peut être différent du nom du contrat)</li>
                        <li>Vérifier dans votre tableau Excel quel bien correspond à ce locataire</li>
                        <li>Vérifier si le montant correspond au loyer prévu (loyer + charges ?)</li>
                        <li>Marquer manuellement le paiement dans Excel</li>
                        <li>Créer manuellement une quittance dans Word</li>
                        <li>Envoyer la quittance par WhatsApp ou email</li>
                      </ul>
                      <p>
                        <strong>Risque :</strong> Si vous oubliez une étape, ou si vous vous trompez de ligne dans Excel, le locataire peut contester. Vous n'avez pas de preuve automatique du rattachement du paiement au contrat et à la période.
                      </p>
                      <p className="font-semibold text-red-700">
                        Temps estimé : 10-15 minutes par paiement. Pour 20 paiements/mois : 3-5 heures.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-green-50 p-6">
                    <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Avec ImmoTopia
                    </h4>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Situation :</strong> Le même locataire paie 150 000 FCFA via Orange Money.
                      </p>
                      <p>
                        <strong>Solution automatique :</strong>
                      </p>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>ImmoTopia reçoit automatiquement la notification du paiement Orange Money</li>
                        <li>Le système identifie le locataire à partir du numéro de téléphone enregistré dans le contrat</li>
                        <li>Le paiement est automatiquement rattaché au contrat, au bien, et à la période (mois en cours)</li>
                        <li>Une quittance conforme est générée automatiquement</li>
                        <li>La quittance est envoyée automatiquement par email au locataire</li>
                        <li>Le paiement est enregistré en comptabilité</li>
                        <li>Le statut du locataire est mis à jour dans le CRM ("À jour")</li>
                      </ul>
                      <p>
                        <strong>Avantage :</strong> Traçabilité complète, aucune intervention manuelle, preuve automatique en cas de litige.
                      </p>
                      <p className="font-semibold text-green-700">
                        Temps estimé : 0 minute (automatique). Pour 20 paiements/mois : 0 heure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cas 2 */}
              <div className="rounded-lg border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Cas 2 : Impayé — de la relance WhatsApp à la relance structurée
                </h3>

                <div className="space-y-6">
                  <div className="rounded-lg bg-red-50 p-6">
                    <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <X className="h-5 w-5 text-red-600" />
                      Avec Excel
                    </h4>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Situation :</strong> Un locataire n'a pas payé son loyer au 5 du mois. Vous vous en rendez compte le 10 en vérifiant manuellement votre tableau Excel.
                      </p>
                      <p>
                        <strong>Problème :</strong>
                      </p>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Vous devez chercher le numéro de téléphone du locataire (dans un autre fichier ou dans vos contacts)</li>
                        <li>Vous envoyez un message WhatsApp : "Bonjour, je constate que le loyer du mois n'a pas été payé. Merci de régulariser."</li>
                        <li>Le locataire répond : "J'ai payé le 6 via MTN Money". Vous devez vérifier manuellement vos relevés MTN Money</li>
                        <li>Vous découvrez qu'effectivement, un paiement a été reçu, mais vous l'aviez attribué à un autre locataire par erreur</li>
                        <li>Vous devez corriger manuellement Excel, recréer la quittance, et vous excuser auprès du locataire</li>
                      </ul>
                      <p>
                        <strong>Risque :</strong> Perte de crédibilité, tension avec le locataire, temps perdu à corriger les erreurs. Aucune preuve de la relance en cas de litige ultérieur.
                      </p>
                      <p className="font-semibold text-red-700">
                        Temps estimé : 30-60 minutes par incident. Risque de litige élevé.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-green-50 p-6">
                    <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Avec ImmoTopia
                    </h4>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Situation :</strong> Le même locataire n'a pas payé au 5 du mois.
                      </p>
                      <p>
                        <strong>Solution automatique :</strong>
                      </p>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>ImmoTopia détecte automatiquement le retard dès le 6 du mois (J+1)</li>
                        <li>Le système envoie automatiquement une alerte par email au locataire : "Rappel : votre loyer du mois de [mois] n'a pas encore été enregistré"</li>
                        <li>Si le locataire paie le 6 via MTN Money, le paiement est automatiquement rattaché au bon contrat (pas d'erreur possible)</li>
                        <li>Si le locataire ne paie pas, une relance automatique est envoyée à J+7 : "Votre loyer est en retard de 7 jours. Merci de régulariser rapidement."</li>
                        <li>Chaque relance est enregistrée dans l'historique avec date, heure, et contenu</li>
                        <li>Vous pouvez consulter l'historique complet des relances en un clic</li>
                      </ul>
                      <p>
                        <strong>Avantage :</strong> Détection immédiate, relances structurées et tracées, aucune erreur de rapprochement, preuve complète en cas de litige.
                      </p>
                      <p className="font-semibold text-green-700">
                        Temps estimé : 0 minute (automatique). Traçabilité complète garantie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Méthode pour estimer le gain */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Méthode pour estimer votre gain de temps
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Plutôt que de vous donner des chiffres inventés, voici une méthode simple pour estimer le temps que vous pourriez gagner en passant d'Excel à un logiciel de gestion locative comme ImmoTopia.
              </p>

              <div className="mb-8 rounded-lg border-2 border-blue-200 bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Calculez votre temps mensuel actuel
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Encaissements et rapprochement</p>
                      <p className="text-sm text-gray-600">
                        Temps passé à vérifier les paiements Mobile Money, les rattacher aux contrats, et mettre à jour Excel.
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        Exemple : 10 minutes par paiement × 20 paiements = 3h20/mois
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Génération de quittances</p>
                      <p className="text-sm text-gray-600">
                        Temps passé à créer manuellement chaque quittance dans Word/Excel, puis à l'envoyer par email ou WhatsApp.
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        Exemple : 5 minutes par quittance × 20 quittances = 1h40/mois
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Relances pour impayés</p>
                      <p className="text-sm text-gray-600">
                        Temps passé à identifier les retards, chercher les contacts, envoyer des messages WhatsApp, et suivre les réponses.
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        Exemple : 15 minutes par relance × 5 relances = 1h15/mois
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Reporting pour propriétaires</p>
                      <p className="text-sm text-gray-600">
                        Temps passé à créer des tableaux croisés dynamiques, filtrer les données, et générer des rapports pour les propriétaires.
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        Exemple : 30 minutes par propriétaire × 5 propriétaires = 2h30/mois
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg bg-blue-50 p-4">
                    <p className="font-bold text-gray-900">
                      Total estimé dans cet exemple : 8h45/mois
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Avec ImmoTopia, ces tâches sont automatisées. Vous gagnez environ 8h45/mois, soit plus de 100 heures par an. Ce temps peut être réinvesti dans des activités à plus forte valeur ajoutée : prospection, relation client, développement de votre portefeuille.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                  Au-delà du temps : les risques évités
                </h3>
                <p className="mb-4 text-gray-700">
                  Le gain de temps n'est qu'une partie de l'équation. Avec Excel, vous êtes également exposé à des risques :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span><strong>Impayés non détectés :</strong> Un retard de détection de 2 semaines peut transformer un impayé récupérable en créance irrécouvrable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span><strong>Litiges avec locataires :</strong> Sans preuve de relance ou de paiement, vous êtes en position de faiblesse en cas de conflit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span><strong>Perte de crédibilité :</strong> Des erreurs répétées (quittances incorrectes, paiements mal attribués) nuisent à votre image professionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span><strong>Difficultés de croissance :</strong> Excel ne scale pas. Passer de 10 à 30 biens triple votre charge de travail administrative</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Place du locatif dans l'ERP */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              La place de la gestion locative dans un ERP immobilier
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                La différence fondamentale entre Excel et ImmoTopia ne se limite pas aux fonctionnalités de gestion locative. ImmoTopia est un ERP immobilier complet où la gestion locative s'intègre naturellement avec tous les autres aspects de votre activité immobilière.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    Lien avec le reporting
                  </h3>
                  <p>
                    Les données de gestion locative alimentent automatiquement vos tableaux de bord : taux d'occupation, taux de recouvrement, délais moyens de paiement, répartition des paiements par moyen (Mobile Money vs virement). Ces indicateurs vous permettent de piloter votre activité de manière data-driven.
                  </p>
                  <Link
                    href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                    className="mt-3 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                  >
                    Découvrir le module reporting
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Smartphone className="h-6 w-6 text-green-600" />
                    Lien avec les paiements
                  </h3>
                  <p>
                    L'intégration native du Mobile Money (Orange Money, MTN Money, Wave) transforme la gestion des paiements. Chaque transaction est automatiquement rattachée au bon contrat, créant une traçabilité complète. Le rapprochement bancaire devient instantané.
                  </p>
                  <Link
                    href="/paiement-loyer-charges-mobile-money-cote-divoire"
                    className="mt-3 inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 hover:underline"
                  >
                    Découvrir le module paiements Mobile Money
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Shield className="h-6 w-6 text-purple-600" />
                    Lien avec la maintenance
                  </h3>
                  <p>
                    Lorsqu'un locataire signale un problème (fuite, panne électrique), le ticket de maintenance est automatiquement rattaché au bien et au contrat de location. Vous pouvez suivre l'historique complet des interventions, et les coûts de maintenance sont intégrés à la comptabilité.
                  </p>
                  <Link
                    href="/maintenance-immobiliere-ticketing-cote-divoire"
                    className="mt-3 inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 hover:underline"
                  >
                    Découvrir le module maintenance
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                    <Users className="h-6 w-6 text-indigo-600" />
                    Lien avec le CRM (relocation)
                  </h3>
                  <p>
                    Lorsqu'un contrat arrive à échéance, le CRM vous permet de gérer la relocation : suivi des visites, qualification des prospects, signature du nouveau contrat. Les informations du locataire sortant et du locataire entrant sont centralisées, créant un historique complet du bien.
                  </p>
                  <Link
                    href="/crm-immobilier-cote-divoire"
                    className="mt-3 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline"
                  >
                    Découvrir le module CRM
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Découvrez l'ERP ImmoTopia complet
                </h3>
                <p className="mb-6 text-gray-700">
                  La gestion locative est un module essentiel de l'ERP ImmoTopia, mais elle n'est qu'une partie de la solution. Pour comprendre comment l'ensemble des modules (CRM, gestion des biens, syndic, comptabilité, reporting) fonctionnent ensemble pour transformer votre activité immobilière, consultez notre page dédiée :
                </p>
                <Link
                  href="/logiciel-immobilier-cote-divoire"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Découvrir l'ERP immobilier ImmoTopia
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions fréquentes : Excel vs logiciel de gestion locative
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-3 flex items-start gap-2 text-xl font-semibold text-gray-900">
                    <span className="text-blue-600 font-bold">Q{index + 1}.</span>
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Prêt à passer d'Excel à un logiciel professionnel ?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Découvrez comment ImmoTopia peut automatiser votre gestion locative, sécuriser vos données, et vous faire gagner des dizaines d'heures chaque mois.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 shadow-xl transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
              >
                <Link href="/contact?demo=true" className="flex items-center font-bold">
                  Demander une démo gratuite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white transition-all hover:scale-105 hover:bg-white/10"
              >
                <Link href="/tarifs" className="font-semibold">
                  Voir les tarifs
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-blue-100">
              Migration depuis Excel incluse · Formation complète · Support dédié
            </p>
          </div>
        </section>

        {/* Liens internes stratégiques */}
        <section className="bg-white py-12">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              Ressources complémentaires
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/gestion-locative-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Module gestion locative ImmoTopia
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Découvrez toutes les fonctionnalités du module de gestion locative
                </p>
              </Link>

              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  ERP immobilier ImmoTopia complet
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Découvrez tous les modules de l'ERP ImmoTopia
                </p>
              </Link>

              <Link
                href="/paiement-loyer-charges-mobile-money-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Paiements Mobile Money
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Intégration Orange Money, MTN Money, Wave
                </p>
              </Link>

              <Link
                href="/maintenance-immobiliere-ticketing-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Module maintenance
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Gestion des tickets de maintenance immobilière
                </p>
              </Link>

              <Link
                href="/tableaux-de-bord-kpi-immobilier-cote-divoire"
                className="group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Tableaux de bord et KPI
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Pilotez votre activité avec des indicateurs clés
                </p>
              </Link>

              <Link
                href="/tarifs"
                className="group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800">
                  <Link2 className="h-4 w-4" />
                  Tarifs ImmoTopia
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Découvrez nos offres et tarifs
                </p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
