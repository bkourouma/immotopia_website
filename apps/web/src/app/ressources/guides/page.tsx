import { getAllGuides } from '@/lib/content/guides';
import GuideList from '@/components/guides/GuideList';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export default async function GuidesPage() {
  const guides = await getAllGuides();

  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'Guides', href: '/ressources/guides' },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-gray-50 py-4">
        <div className="container mx-auto max-w-7xl px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20 text-center md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Guides pratiques
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Téléchargez nos guides gratuits pour améliorer votre gestion immobilière.
          </p>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <GuideList guides={guides} />
        </div>
      </section>
    </div>
  );
}
