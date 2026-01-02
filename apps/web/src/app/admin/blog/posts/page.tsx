'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogPosts, deleteBlogPost } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  publishedAt: string | null;
  createdAt: string;
  category: { name: string } | null;
}

export default function BlogPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');

  useEffect(() => {
    loadPosts();
  }, [statusFilter, search]);

  async function loadPosts() {
    setIsLoading(true);
    try {
      const data = await getBlogPosts({
        status: statusFilter || undefined,
        search: search || undefined,
        limit: 50,
      });
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      return;
    }

    try {
      await deleteBlogPost(id);
      loadPosts();
    } catch (error: any) {
      alert(error.message || 'Erreur lors de la suppression');
    }
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: 'bg-gray-200 text-gray-900 border border-gray-300',
      published: 'bg-green-100 text-green-900 border border-green-300',
      scheduled: 'bg-blue-100 text-blue-900 border border-blue-300',
    };
    const labels = {
      draft: 'Brouillon',
      published: 'Publié',
      scheduled: 'Programmé',
    };
    return (
      <span className={`rounded-full px-3 py-1 text-xs font-bold ${styles[status as keyof typeof styles] || styles.draft}`}>
        {labels[status as keyof typeof labels] || status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Articles de blog</h1>
          <p className="mt-2 text-sm text-gray-600">
            Gérez les articles de blog du site
          </p>
        </div>
        <Link href="/admin/blog/posts/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Nouvel article
          </Button>
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">Tous les statuts</option>
          <option value="draft">Brouillon</option>
          <option value="published">Publié</option>
          <option value="scheduled">Programmé</option>
        </select>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500">Aucun article trouvé</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-md">
          <table className="w-full">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-900">
                  Titre
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-900">
                  Catégorie
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-900">
                  Statut
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-900">
                  Date
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-gray-900">{post.title}</div>
                    <div className="text-sm font-medium text-gray-600">{post.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {post.category?.name || '-'}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(post.status)}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString('fr-FR')
                      : new Date(post.createdAt).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <Link href={`/blog/${post.slug}`} target="_blank">
                        <Button variant="outline" size="sm" className="hover:bg-blue-50">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/blog/posts/${post.id}`}>
                        <Button variant="outline" size="sm" className="hover:bg-green-50">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="border-red-300 text-red-700 hover:bg-red-50 hover:border-red-500 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

