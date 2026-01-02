/**
 * Admin Dashboard Page
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts, getGuides, getFAQItems, getMedia } from '../lib/api/admin';
import { FileText, BookOpen, HelpCircle, Image } from 'lucide-react';

interface Stats {
  blogPosts: number;
  guides: number;
  faqItems: number;
  media: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
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
      href: '/blog',
      color: 'bg-blue-500',
    },
    {
      name: 'Guides',
      value: stats.guides,
      icon: BookOpen,
      href: '/guides',
      color: 'bg-green-500',
    },
    {
      name: 'Questions FAQ',
      value: stats.faqItems,
      icon: HelpCircle,
      href: '/faq',
      color: 'bg-purple-500',
    },
    {
      name: 'Médias',
      value: stats.media,
      icon: Image,
      href: '/media',
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
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2563EB] border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link
                key={stat.name}
                to={stat.href}
                className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`rounded-full p-3 ${stat.color} bg-opacity-10`}>
                    <Icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Actions rapides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link
            to="/blog/new"
            className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            <FileText className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">Nouvel article</p>
          </Link>
          <Link
            to="/guides/new"
            className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            <BookOpen className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">Nouveau guide</p>
          </Link>
          <Link
            to="/media"
            className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            <Image className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">Upload média</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

