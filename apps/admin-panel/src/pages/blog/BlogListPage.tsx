/**
 * Blog Posts List Page
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts, deleteBlogPost } from '../../lib/api/admin';
import type { BlogPost } from '../../lib/api/admin';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  async function loadPosts() {
    try {
      setIsLoading(true);
      const response = await getBlogPosts({ page: currentPage, limit: 10 });
      setPosts(response.posts);
      setTotalPages(response.pagination.totalPages);
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
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Erreur lors de la suppression');
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Articles de blog</h1>
          <p className="mt-2 text-sm text-gray-600">
            Gérez vos articles de blog
          </p>
        </div>
        <Link
          to="/blog/new"
          className="flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-white font-semibold hover:bg-[#1D4ED8] transition-colors"
        >
          <Plus className="h-5 w-5" />
          Nouvel article
        </Link>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2563EB] border-t-transparent"></div>
        </div>
      ) : (
        <>
          <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Titre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      Aucun article trouvé
                    </td>
                  </tr>
                ) : (
                  posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        {post.slug && (
                          <div className="text-sm text-gray-500">/{post.slug}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {post.status === 'published' ? 'Publié' : 'Brouillon'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString('fr-FR')
                          : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/blog/${post.id}/edit`}
                            className="text-[#2563EB] hover:text-[#1D4ED8]"
                            title="Modifier"
                          >
                            <Edit className="h-5 w-5" />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédent
              </button>
              <span className="text-sm text-gray-700">
                Page {currentPage} sur {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

