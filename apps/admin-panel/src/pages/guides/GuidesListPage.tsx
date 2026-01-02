/**
 * Guides List Page
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGuides, deleteGuide } from '../../lib/api/admin';
import type { Guide } from '../../lib/api/admin';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

export default function GuidesListPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    loadGuides();
  }, [statusFilter, search]);

  async function loadGuides() {
    try {
      setIsLoading(true);
      const response = await getGuides({
        page: 1,
        limit: 50,
        status: statusFilter || undefined,
        search: search || undefined,
      });
      setGuides(response.guides);
    } catch (error) {
      console.error('Error loading guides:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce guide ?')) {
      return;
    }

    try {
      await deleteGuide(id);
      loadGuides();
    } catch (error) {
      console.error('Error deleting guide:', error);
      alert('Erreur lors de la suppression');
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Guides</h1>
          <p className="mt-2 text-sm text-gray-600">
            Gérez les guides téléchargeables
          </p>
        </div>
        <Link
          to="/guides/new"
          className="flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-white font-semibold hover:bg-[#1D4ED8] transition-colors"
        >
          <Plus className="h-5 w-5" />
          Nouveau guide
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
        >
          <option value="">Tous les statuts</option>
          <option value="draft">Brouillon</option>
          <option value="published">Publié</option>
        </select>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2563EB] border-t-transparent"></div>
        </div>
      ) : (
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
              {guides.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    Aucun guide trouvé
                  </td>
                </tr>
              ) : (
                guides.map((guide) => (
                  <tr key={guide.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{guide.title}</div>
                      {guide.slug && (
                        <div className="text-sm text-gray-500">/{guide.slug}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        guide.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {guide.status === 'published' ? 'Publié' : 'Brouillon'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {guide.publishedAt
                        ? new Date(guide.publishedAt).toLocaleDateString('fr-FR')
                        : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/guides/${guide.id}/edit`}
                          className="text-[#2563EB] hover:text-[#1D4ED8]"
                          title="Modifier"
                        >
                          <Edit className="h-5 w-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(guide.id)}
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
      )}
    </div>
  );
}

