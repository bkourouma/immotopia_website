import { notFound } from 'next/navigation';
import { getGuideBySlug, getAllGuides } from '@/lib/content/guides';
import GuideDownloadForm from '@/components/guides/GuideDownloadForm';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { OptimizedImage } from '@/components/ui';
import { generateImageAlt } from '@/lib/image-utils';
import { Calendar, FileText } from 'lucide-react';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Génère les métadonnées SEO pour une page de guide
 */
export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return generateSEOMetadata({
    title: guide.title,
    description: guide.description,
    keywords: ['guide immobilier', guide.category || '', 'téléchargement'],
    canonicalUrl: `/ressources/guides/${slug}`,
    ogImage: guide.coverImage,
  });
}

/**
 * Génère les paramètres statiques pour les pages de guides
 */
export async function generateStaticParams() {
  const guides = await getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const pdfUrl = guide.pdfPath.startsWith('/') ? guide.pdfPath : `/${guide.pdfPath}`;

  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'Guides', href: '/ressources/guides' },
    { label: guide.title, href: `/ressources/guides/${slug}` },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatFileSize = (sizeMB?: number) => {
    if (!sizeMB) return null;
    if (sizeMB < 1) {
      return `${Math.round(sizeMB * 1024)} KB`;
    }
    return `${sizeMB.toFixed(1)} MB`;
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-gray-50 py-4">
        <div className="container mx-auto max-w-4xl px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Guide Content */}
      <div className="py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {guide.coverImage && (
                <div className="mb-8 overflow-hidden rounded-lg">
                  <OptimizedImage
                    src={guide.coverImage}
                    alt={generateImageAlt(guide.title, 'Guide')}
                    width={800}
                    height={400}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              )}

              <header className="mb-8">
                {guide.category && (
                  <div className="mb-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {guide.category}
                    </span>
                  </div>
                )}

                <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
                  {guide.title}
                </h1>

                <p className="mb-6 text-xl text-gray-600">{guide.description}</p>

                <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 pb-6 text-sm text-gray-600">
                  {guide.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(guide.date)}</span>
                    </div>
                  )}

                  {guide.pageCount && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>{guide.pageCount} pages</span>
                    </div>
                  )}

                  {guide.fileSize && (
                    <div className="text-sm text-gray-600">
                      {formatFileSize(guide.fileSize)}
                    </div>
                  )}

                  {guide.updatedAt && (
                    <div className="ml-auto text-xs text-gray-500">
                      Mis à jour le {formatDate(guide.updatedAt)}
                    </div>
                  )}
                </div>
              </header>

              {/* Preview Content */}
              {guide.previewContent && (
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: guide.previewContent }} />
                </div>
              )}
            </div>

            {/* Sidebar - Download Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <GuideDownloadForm
                  guideSlug={guide.slug}
                  guideTitle={guide.title}
                  pdfUrl={pdfUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

