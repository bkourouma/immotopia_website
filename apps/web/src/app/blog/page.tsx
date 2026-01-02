import { getAllBlogPosts, getCategories, getTags, searchPosts } from '@/lib/content/blog';
import ArticleCard from '@/components/blog/ArticleCard';
import BlogFilters from '@/components/blog/BlogFilters';
import Pagination from '@/components/blog/Pagination';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: 'Blog | ImmoTopia - Articles et Conseils Immobiliers',
    description:
      'Découvrez nos articles sur la gestion immobilière, le CRM immobilier, la gestion locative et les meilleures pratiques pour les professionnels de l\'immobilier.',
    canonicalUrl: '/blog',
    usePageKeywords: false,
  },
  '/blog'
);

interface BlogPageProps {
  searchParams: Promise<{ q?: string; category?: string; tags?: string; page?: string }>;
}

const POSTS_PER_PAGE = 9;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const allPosts = await getAllBlogPosts();
  const categories = await getCategories();
  const tags = await getTags();

  // Filtrer les articles selon les paramètres
  let filteredPosts = allPosts;

  // Recherche
  if (params.q) {
    filteredPosts = await searchPosts(params.q);
  }

  // Filtre par catégorie
  if (params.category) {
    filteredPosts = filteredPosts.filter((post) => post.category === params.category);
  }

  // Filtre par tags
  if (params.tags) {
    const selectedTags = params.tags.split(',');
    filteredPosts = filteredPosts.filter((post) =>
      selectedTags.some((tag) => post.tags.includes(tag))
    );
  }

  // Pagination
  const currentPage = parseInt(params.page || '1', 10);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Blog', href: '/blog' },
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
      <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h1 className="mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              Blog ImmoTopia
            </h1>
            <p className="text-lg text-gray-700 md:text-xl">
              Articles, conseils et actualités sur la gestion immobilière professionnelle
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b border-gray-200 bg-white py-8">
        <div className="container mx-auto max-w-7xl px-6">
          <Suspense fallback={<div>Chargement des filtres...</div>}>
            <BlogFilters categories={categories} tags={tags} />
          </Suspense>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-6">
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-gray-600">
                Aucun article trouvé. Essayez de modifier vos filtres.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} trouvé
                  {filteredPosts.length > 1 ? 's' : ''}
                  {totalPages > 1 && ` • Page ${currentPage} sur ${totalPages}`}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <ArticleCard key={post.slug} article={post} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    baseUrl="/blog"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
