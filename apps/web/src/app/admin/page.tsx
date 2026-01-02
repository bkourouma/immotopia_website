'use client';

import { useEffect, useState } from 'react';
import { getBlogPosts, getGuides, getFAQItems, getMedia } from '@/lib/api/admin';
import { FileText, BookOpen, HelpCircle, Image } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    blogPosts: 0,
    guides: 0,
    faqItems: 0,
    media: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const [blog, guides, faq, media] = await Promise.all([
          getBlogPosts({ limit: 1 }),
          getGuides({ limit: 1 }),
          getFAQItems({ limit: 1 }),
          getMedia({ limit: 1 }),
        ]);

        setStats({
          blogPosts: blog.pagination?.total || 0,
          guides: guides.pagination?.total || 0,
          faqItems: faq.pagination?.total || 0,
          media: media.pagination?.total || 0,
        });
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadStats();
  }, []);

  const statCards = [
    {
      name: 'Articles de blog',
      value: stats.blogPosts,
      icon: FileText,
      href: '/admin/blog/posts',
      color: 'bg-blue-500',
    },
    {
      name: 'Guides',
      value: stats.guides,
      icon: BookOpen,
      href: '/admin/guides',
      color: 'bg-green-500',
    },
    {
      name: 'Questions FAQ',
      value: stats.faqItems,
      icon: HelpCircle,
      href: '/admin/faq',
      color: 'bg-purple-500',
    },
    {
      name: 'Médias',
      value: stats.media,
      icon: Image,
      href: '/admin/media',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Vue d'ensemble du contenu du site
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <a
              key={stat.name}
              href={stat.href}
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`rounded-full p-3 ${stat.color} bg-opacity-10`}>
                  <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Actions rapides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <a
            href="/admin/blog/posts/new"
            className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            <FileText className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">Nouvel article</p>
          </a>
          <a
            href="/admin/guides/new"
            className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            <BookOpen className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">Nouveau guide</p>
          </a>
          <a
            href="/admin/media"
            className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            <Image className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">Upload média</p>
          </a>
        </div>
      </div>
    </div>
  );
}

