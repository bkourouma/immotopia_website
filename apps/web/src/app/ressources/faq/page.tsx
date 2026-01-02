import { getFAQData } from '@/lib/content/faq';
import FAQPageContent from '@/components/faq/FAQPageContent';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateFAQSchema } from '@/lib/structured-data';
import StructuredData from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

/**
 * Génère les métadonnées SEO pour la page FAQ
 */
export const metadata: Metadata = generateSEOMetadata({
  title: 'FAQ ImmoTopia - Questions fréquentes gestion immobilière',
  description:
    'Trouvez rapidement les réponses à vos questions sur ImmoTopia : plateforme de gestion immobilière, fonctionnalités, tarifs, support.',
  keywords: ['FAQ', 'questions fréquentes', 'aide immotopia', 'support gestion immobilière'],
  canonicalUrl: '/ressources/faq',
});

export default async function FAQPage() {
  const faqData = await getFAQData();

  // Générer le structured data FAQPage uniquement s'il y a des questions
  const questions = faqData.sections?.flatMap((section) =>
    section.items?.map((item) => ({
      question: item.question,
      answer: item.answer,
    })) || []
  ) || [];

  const faqSchema = questions.length > 0 ? generateFAQSchema({ questions }) : null;

  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'FAQ', href: '/ressources/faq' },
  ];

  return (
    <>
      {faqSchema && <StructuredData data={faqSchema} />}
      <div className="bg-white">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 bg-gray-50 py-4">
          <div className="container mx-auto max-w-4xl px-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20 text-center md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Questions fréquentes
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Trouvez rapidement les réponses à vos questions sur ImmoTopia
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <FAQPageContent initialData={faqData} />
          </div>
        </section>
      </div>
    </>
  );
}

