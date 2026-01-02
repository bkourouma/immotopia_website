/**
 * FAQ List Page
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFAQItems, deleteFAQItem } from '../../lib/api/admin';
import type { FAQItem } from '../../lib/api/admin';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

export default function FAQListPage() {
  const [items, setItems] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    loadItems();
  }, [statusFilter]);

  useEffect(() => {
    // Filter by search client-side
    if (search) {
      const filtered = items.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase())
      );
      setItems(filtered);
    } else {
      loadItems();
    }
  }, [search]);

  async function loadItems() {
    try {
      setIsLoading(true);
      const response = await getFAQItems({
        page: 1,
        limit: 100,
        status: statusFilter || undefined,
      });
      setItems(response.items);
    } catch (error) {
      console.error('Error loading FAQ items:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette question ?')) {
      return;
    }

    try {
      await deleteFAQItem(id);
      loadItems();
    } catch (error) {
      console.error('Error deleting FAQ item:', error);
      alert('Erreur lors de la suppression');
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">FAQ</h1>
          <p className="mt-2 text-sm text-gray-600">
            Gérez les questions fréquentes
          </p>
        </div>
        <Link
          to="/faq/new"
          className="flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-white font-semibold hover:bg-[#1D4ED8] transition-colors"
        >
          <Plus className="h-5 w-5" />
          Nouvelle question
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
        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
              <p className="text-gray-500">Aucune question trouvée</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        item.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status === 'published' ? 'Publié' : 'Brouillon'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.answer}</p>
                    {item.category && (
                      <span className="mt-2 inline-block text-xs text-gray-500">
                        Catégorie: {item.category}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link
                      to={`/faq/${item.id}/edit`}
                      className="text-[#2563EB] hover:text-[#1D4ED8]"
                      title="Modifier"
                    >
                      <Edit className="h-5 w-5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

