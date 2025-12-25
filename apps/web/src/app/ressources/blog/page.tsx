import { getPublishedBlogPosts } from '@/lib/content/blog';
import ArticleList from '@/components/blog/ArticleList';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { ScrollReveal } from '@monorepo/ui';
import { Sparkles, BookOpen, TrendingUp, Users } from 'lucide-react';
import BlogHeroCTAs from '@/components/blog/BlogHeroCTAs';

export default async function BlogPage() {
  const articles = await getPublishedBlogPosts();

  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'Blog', href: '/ressources/blog' },
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
      <section className="relative overflow-hidden py-20 text-center md:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] animate-gradient-shift" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)] animate-gradient-shift" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)] animate-gradient-shift" style={{ animationDelay: '4s' }} />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-indigo-400/20 blur-2xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative mx-auto max-w-4xl px-6">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Ressources & Actualités</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl lg:text-6xl animate-gradient-shift">
              Blog ImmoTopia
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              Articles, conseils et actualités sur la gestion immobilière professionnelle.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <BlogHeroCTAs />
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      {articles.length > 0 && (
        <section className="border-y border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50/30 py-12">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <ScrollReveal direction="up" delay={0}>
                <div className="group text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900">{articles.length}</div>
                  <div className="mt-2 text-sm font-medium text-gray-600">Articles publiés</div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <div className="group text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900">
                    {articles.filter((a) => a.tags?.includes('actualités')).length}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-600">Actualités</div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div className="group text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Users className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900">
                    {new Set(articles.map((a) => a.author).filter(Boolean)).size}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-600">Auteurs</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Articles List */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <ArticleList articles={articles} showFeatured={articles.length > 0} />
        </div>
      </section>
    </div>
  );
}
