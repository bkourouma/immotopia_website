import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getPublishedBlogPosts } from '@/lib/content/blog';
import ArticleContent from '@/components/blog/ArticleContent';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/structured-data';
import StructuredData from '@/components/seo/StructuredData';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Génère les métadonnées SEO pour une page d'article
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article || !article.published) {
    return {};
  }

  return generateSEOMetadata({
    title: article.title,
    description: article.description,
    keywords: article.tags || [],
    canonicalUrl: `/ressources/blog/${slug}`,
    ogImage: article.featuredImage,
  });
}

/**
 * Génère les paramètres statiques pour les pages d'articles publiés
 */
export async function generateStaticParams() {
  const articles = await getPublishedBlogPosts();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article || !article.published) {
    notFound();
  }

  // Générer le structured data Article
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';
  const articleSchema = generateArticleSchema({
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
    dateModified: article.updatedAt || article.date,
    image: article.coverImage ? `${siteUrl}${article.coverImage}` : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/ressources/blog/${slug}`,
    },
  });

  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'Blog', href: '/ressources/blog' },
    { label: article.title, href: `/ressources/blog/${slug}` },
  ];

  return (
    <>
      <StructuredData data={articleSchema} />
      <div className="bg-white">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 bg-gray-50 py-4">
          <div className="container mx-auto max-w-4xl px-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 md:py-20">
          <div className="container mx-auto max-w-4xl px-6">
            {/* Back to Blog */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/ressources/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour au blog
                </Link>
              </Button>
            </div>

            <ArticleContent article={article} />
          </div>
        </article>
      </div>
    </>
  );
}

