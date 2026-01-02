import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllSlugs, getAllBlogPosts } from '@/lib/content/blog';
import MarkdownContent from '@/components/blog/MarkdownContent';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogCTA from '@/components/blog/BlogCTA';
import StickyCTA from '@/components/blog/StickyCTA';
import SocialShare from '@/components/blog/SocialShare';
import ArticleCard from '@/components/blog/ArticleCard';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/structured-data';
import type { Metadata } from 'next';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { OptimizedImage } from '@/components/ui';
import { generateImageAlt } from '@/lib/image-utils';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Génère les métadonnées SEO pour une page d'article
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article) {
    return {};
  }

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';
  
  // Utiliser les champs SEO du backoffice si disponibles, sinon fallback sur les champs de base
  const seoTitle = (article as any).seoTitle || article.title;
  const seoDescription = (article as any).seoDescription || article.description;
  const ogImageUrl = (article as any).ogImage || article.coverImage;
  const imageUrl = ogImageUrl
    ? `${siteUrl}${ogImageUrl}`
    : article.coverImage
    ? `${siteUrl}${article.coverImage}`
    : `${siteUrl}/og-image.jpg`;

  const baseMetadata = generateSEOMetadata(
    {
      title: seoTitle.includes('|') ? seoTitle : `${seoTitle} | ImmoTopia Blog`,
      description: seoDescription,
      canonicalUrl: `/blog/${slug}`,
      ogImage: imageUrl,
      usePageKeywords: false,
    },
    `/blog/${slug}`
  );

  // Étendre avec OpenGraph et Twitter spécifiques pour les articles
  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [imageUrl],
    },
  };
}

/**
 * Génère les paramètres statiques pour tous les articles
 */
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article || article.published === false) {
    notFound();
  }

  // Générer le structured data Article
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';
  const ogImageUrl = (article as any).ogImage || article.coverImage;
  const articleSchema: any = generateArticleSchema({
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ImmoTopia',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: article.date,
    dateModified: (article as any).updatedAt || article.date,
    image: ogImageUrl ? `${siteUrl}${ogImageUrl}` : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}`,
    },
  });
  
  // Ajouter articleSection si disponible
  if (article.category) {
    articleSchema.articleSection = article.category;
  }

  // Articles recommandés (même catégorie ou tags similaires)
  const allPosts = await getAllBlogPosts();
  const recommendedPosts = allPosts
    .filter(
      (post) =>
        post.slug !== article.slug &&
        (post.category === article.category ||
          post.tags.some((tag) => article.tags.includes(tag)))
    )
    .slice(0, 3);

  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: article.title, href: `/blog/${slug}` },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <div className="bg-white">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 bg-gray-50 py-4">
          <div className="container mx-auto max-w-7xl px-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main Content */}
            <article>
              {/* Hero Article */}
              <header className="mb-8">
                {article.category && (
                  <div className="mb-4">
                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                      {article.category}
                    </span>
                  </div>
                )}

                <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
                  {article.title}
                </h1>

                {article.description && (
                  <p className="mb-6 text-xl text-gray-600">{article.description}</p>
                )}

                {/* Meta Information */}
                <div className="mb-6 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-6 text-sm text-gray-600">
                  {article.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                  )}

                  {article.readingTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{Math.round(article.readingTime)} min de lecture</span>
                    </div>
                  )}

                  {article.author && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mb-8 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-700"
                      >
                        <Tag className="h-3.5 w-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Cover Image */}
                {article.coverImage && (
                  <div className="mb-8 overflow-hidden rounded-lg">
                    <OptimizedImage
                      src={article.coverImage}
                      alt={generateImageAlt(article.title, 'Article')}
                      width={1200}
                      height={600}
                      sizes="100vw"
                      priority
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}
              </header>

              {/* Content */}
              <div className="prose-wrapper">
                <MarkdownContent content={article.content} />
              </div>

              {/* Social Share */}
              <div className="mt-12">
                <SocialShare
                  title={article.title}
                  url={`/blog/${slug}`}
                  description={article.description}
                  variant="default"
                />
              </div>

              {/* CTA */}
              <div className="mt-12">
                <BlogCTA />
              </div>

              {/* Recommended Articles */}
              {recommendedPosts.length > 0 && (
                <div className="mt-16 border-t border-gray-200 pt-12">
                  <h2 className="mb-8 text-2xl font-bold text-gray-900">
                    Articles recommandés
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {recommendedPosts.map((post) => (
                      <ArticleCard key={post.slug} article={post} />
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar with TOC */}
            <aside className="hidden lg:block">
              <TableOfContents sticky />
            </aside>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
