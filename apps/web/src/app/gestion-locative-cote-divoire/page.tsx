import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Smartphone, FileText, DollarSign, AlertCircle } from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Gestion locative Côte d'Ivoire | Logiciel ImmoTopia",
    description:
      "Guide complet de la gestion locative en Côte d'Ivoire : loyers, contrats, quittances, Mobile Money et automatisation avec ImmoTopia.",
    canonicalUrl: '/gestion-locative-cote-divoire',
    keywords: [
      'gestion locative Côte d\'Ivoire',
      'gestion locative Abidjan',
      'logiciel gestion locative',
      'loyers Mobile Money',
      'contrat location Côte d\'Ivoire',
      'quittance loyer Abidjan',
      'gestionnaire immobilier Côte d\'Ivoire',
      'agence immobilière Abidjan',
      'paiement loyer Orange Money',
      'gestion locative professionnelle',
    ],
  },
  '/gestion-locative-cote-divoire'
);

const faqItems = [
  {
    question: "Comment gérer les loyers impayés en Côte d'Ivoire ?",
    answer:
      "La meilleure solution est de mettre en place des relances automatisées et un suivi centralisé des paiements. Avec ImmoTopia, vous recevez des alertes automatiques dès qu'un loyer est en retard, et le système génère des relances personnalisables. La traçabilité complète des paiements facilite également la résolution des conflits et la récupération des impayés.",
  },
  {
    question: 'Le paiement du loyer par Mobile Money est-il autorisé ?',
    answer:
      "Oui. Orange Money, MTN Money et Wave sont largement utilisés et acceptés en Côte d'Ivoire pour le paiement des loyers. ImmoTopia intègre nativement ces moyens de paiement, permettant un suivi automatique et la génération de quittances électroniques pour chaque transaction.",
  },
  {
    question: 'Faut-il obligatoirement fournir une quittance ?',
    answer:
      "Oui, une quittance est fortement recommandée pour chaque paiement. Elle sert de preuve de paiement, assure la transparence et peut être utilisée en cas de litige. ImmoTopia génère automatiquement des quittances conformes aux exigences légales ivoiriennes dès qu'un paiement est enregistré.",
  },
  {
    question: 'Quel logiciel utiliser pour une agence immobilière ?',
    answer:
      "Un logiciel spécialisé comme ImmoTopia permet d'automatiser toute la gestion locative. Conçu spécifiquement pour le marché ivoirien, il gère les loyers, les contrats, les quittances, les paiements Mobile Money, les relances et offre une visibilité complète sur votre portefeuille locatif.",
  },
];

export default function GestionLocativeCoteIvoirePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
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
      <StructuredData data={faqSchema} />
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section avec Image */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gestion locative en Côte d'Ivoire : guide complet pour les professionnels de l'immobilier
          </h1>
          
          {/* Image illustrative */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <OptimizedImage
              src="/Images/Logiciel Gestion Locative.png"
              alt="Logiciel de gestion locative ImmoTopia pour la Côte d'Ivoire"
              width={1200}
              height={600}
              priority
              sizes="100vw"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-4">
              La gestion locative en Côte d'Ivoire est devenue un véritable défi pour les agences immobilières, gestionnaires locatifs et propriétaires bailleurs. Entre le suivi des loyers, les impayés, la gestion des contrats, les quittances et l'évolution des moyens de paiement comme le Mobile Money, les méthodes traditionnelles montrent rapidement leurs limites.
            </p>
            <p className="text-lg">
              Ce guide complet vous explique comment gérer efficacement des biens locatifs en Côte d'Ivoire, en tenant compte des réalités locales, tout en présentant les meilleures pratiques de digitalisation avec un logiciel adapté comme ImmoTopia.
            </p>
          </div>
        </header>

        {/* Section 1: Contexte spécifique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            La gestion locative en Côte d'Ivoire : un contexte spécifique
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              À Abidjan et dans les grandes villes ivoiriennes, la demande locative est forte. Pourtant, la gestion quotidienne reste souvent artisanale :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>suivi manuel des loyers</li>
              <li>tableaux Excel non partagés</li>
              <li>paiements en espèces ou Mobile Money non tracés</li>
              <li>quittances rédigées à la main</li>
              <li>difficultés à gérer les impayés</li>
            </ul>
            <p>
              Ces pratiques exposent les professionnels à des pertes financières, des litiges et un manque de visibilité sur leur activité.
            </p>
          </div>
        </section>

        {/* Section 2: Obligations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Obligations du bailleur et du gestionnaire locatif
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              En Côte d'Ivoire, une gestion locative professionnelle implique :
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                Le contrat de bail
              </h3>
              <p className="mb-4">
                Chaque location doit être encadrée par un contrat précisant :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>le montant du loyer</li>
                <li>la durée</li>
                <li>les obligations des parties</li>
                <li>le dépôt de garantie</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                La quittance de loyer
              </h3>
              <p className="mb-4">
                Une quittance doit être remise pour chaque paiement effectué, notamment pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>assurer la transparence</li>
                <li>servir de preuve en cas de litige</li>
                <li>rassurer le locataire</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-amber-600" />
                Le dépôt de garantie et les pénalités
              </h3>
              <p>Le gestionnaire doit assurer un suivi précis des dépôts et des éventuelles pénalités de retard.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Gestion des loyers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment gérer efficacement les loyers et les paiements
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 text-xl font-semibold">
              La collecte des loyers est au cœur de la gestion locative.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Méthodes traditionnelles</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>paiements en espèces</li>
                <li>Mobile Money sans suivi structuré</li>
                <li>absence de rapprochement automatique</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Méthodes modernes</h3>
              <p className="mb-4">
                Aujourd'hui, la digitalisation permet :
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>le paiement des loyers via Orange Money, MTN Money ou Wave</li>
                <li>la génération automatique de quittances</li>
                <li>le suivi en temps réel des impayés</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <p className="mb-4 font-semibold text-gray-900">👉 Découvrir la fonctionnalité</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/fonctionnalites/gestion-locative"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 underline"
                >
                  ➡️ Gestion locative ImmoTopia
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/fonctionnalites/paiements-mobile-money"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 underline"
                >
                  ➡️ Paiements Mobile Money intégrés
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Milieu de page */}
        <div className="my-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Optimisez votre gestion locative dès aujourd'hui
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Découvrez comment ImmoTopia peut automatiser 80% de vos tâches de gestion
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/contact?demo=true">
              👉 Demander une démo d'ImmoTopia
            </Link>
          </Button>
        </div>

        {/* Section 4: Limites Excel/WhatsApp */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi Excel et WhatsApp ne suffisent plus
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Beaucoup d'agences utilisent encore :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Excel pour les loyers</li>
              <li>WhatsApp pour les relances</li>
              <li>des dossiers papier pour les contrats</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Ces outils ne sont pas conçus pour :
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>la collaboration</li>
                <li>l'automatisation</li>
                <li>la traçabilité</li>
                <li>la croissance</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Un logiciel de gestion locative permet :
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>un gain de temps considérable</li>
                <li>une réduction des impayés</li>
                <li>une meilleure relation client</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Pourquoi ImmoTopia */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi ImmoTopia est adapté à la Côte d'Ivoire
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              ImmoTopia est un ERP immobilier conçu pour l'Afrique de l'Ouest, avec :
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>gestion locative centralisée</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>quittances automatiques</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>intégration native du Mobile Money</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>suivi des paiements en temps réel</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>accès sécurisé pour les équipes</span>
              </li>
            </ul>
            <p className="mb-4">
              C'est une solution pensée pour les agences immobilières ivoiriennes, les gestionnaires et les promoteurs.
            </p>
            <div className="mt-6">
              <Link
                href="/tarifs"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 underline"
              >
                ➡️ Voir les tarifs ImmoTopia
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            FAQ sur la gestion locative en Côte d'Ivoire
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

        {/* CTA Final */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl text-center border-2 border-blue-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Prêt à révolutionner votre gestion locative ?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Rejoignez les agences immobilières d'Abidjan qui automatisent leur gestion avec ImmoTopia
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/contact?demo=true">
              👉 Demander une démo gratuite d'ImmoTopia
            </Link>
          </Button>
          <p className="mt-6 text-sm text-gray-600">
            ou{' '}
            <Link href="/tarifs" className="text-blue-600 font-semibold hover:underline">
              consultez nos tarifs
            </Link>
          </p>
        </div>

        {/* Liens internes stratégiques */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 text-gray-900">Ressources complémentaires :</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li>
              <Link
                href="/fonctionnalites/gestion-locative"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Découvrez toutes nos fonctionnalités gestion locative
              </Link>
            </li>
            <li>
              <Link
                href="/fonctionnalites/paiements-mobile-money"
                className="text-blue-600 hover:text-blue-800 hover:underline block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                → Paiements Mobile Money intégrés
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

