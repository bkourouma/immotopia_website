'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getFAQItems, deleteFAQItem } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  order: number;
  status: string;
}

export default function FAQPage() {
  const [items, setItems] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');

  useEffect(() => {
    loadItems();
  }, [statusFilter, search]);

  async function loadItems() {
    setIsLoading(true);
    try {
      const data = await getFAQItems({
        status: statusFilter || undefined,
        limit: 100,
      });
      // Filter by search client-side
      let filtered = data.items || [];
      if (search) {
        filtered = filtered.filter(
          (item: FAQItem) =>
            item.question.toLowerCase().includes(search.toLowerCase()) ||
            item.answer.toLowerCase().includes(search.toLowerCase())
        );
      }
      setItems(filtered);
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
      
      // Revalider le cache Next.js pour la page FAQ publique
      try {
        const revalidateSecret = process.env.NEXT_PUBLIC_REVALIDATE_SECRET || 'dev-secret';
        await fetch('/api/revalidate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ secret: revalidateSecret, type: 'faq' }),
        });
      } catch (revalidateError) {
        // Ne pas bloquer si la revalidation échoue
        console.warn('Failed to revalidate FAQ cache:', revalidateError);
      }
      
      loadItems();
    } catch (error: any) {
      alert(error.message || 'Erreur lors de la suppression');
    }
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: 'bg-gray-100 text-gray-800',
      published: 'bg-green-100 text-green-800',
    };
    const labels = {
      draft: 'Brouillon',
      published: 'Publié',
    };
    return (
      <span className={`rounded-full px-2 py-1 text-xs font-medium ${styles[status as keyof typeof styles] || styles.draft}`}>
        {labels[status as keyof typeof labels] || status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">FAQ</h1>
          <p className="mt-2 text-sm text-gray-600">
            Gérez les questions fréquentes
          </p>
        </div>
        <Link href="/admin/faq/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle question
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
        </select>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500">Aucune question trouvée</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500">
                      #{item.order}
                    </span>
                    {getStatusBadge(item.status)}
                    {item.category && (
                      <span className="text-sm text-gray-500">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {item.answer}
                  </p>
                </div>
                <div className="ml-4 flex gap-2">
                  <Link href={`/admin/faq/${item.id}`}>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

