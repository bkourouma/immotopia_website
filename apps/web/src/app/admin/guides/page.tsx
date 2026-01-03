'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getGuides, deleteGuide } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Eye, Users } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  slug: string;
  status: string;
  publishedAt: string | null;
  gatedDownload: boolean;
  createdAt: string;
}

export default function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');

  useEffect(() => {
    loadGuides();
  }, [statusFilter, search]);

  async function loadGuides() {
    setIsLoading(true);
    try {
      const data = await getGuides({
        status: statusFilter || undefined,
        search: search || undefined,
        limit: 50,
      });
      setGuides(data.guides || []);
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
    } catch (error: any) {
      alert(error.message || 'Erreur lors de la suppression');
    }
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: 'bg-gray-100 text-gray-800',
      published: 'bg-green-100 text-green-800',
      scheduled: 'bg-blue-100 text-blue-800',
    };
    const labels = {
      draft: 'Brouillon',
      published: 'Publié',
      scheduled: 'Programmé',
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
          <h1 className="text-3xl font-bold text-gray-900">Guides</h1>
          <p className="mt-2 text-sm text-gray-600">
            Gérez les guides téléchargeables
          </p>
        </div>
        <Link href="/admin/guides/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nouveau guide
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
      ) : guides.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500">Aucun guide trouvé</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Titre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Lead Capture
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {guides.map((guide) => (
                <tr key={guide.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{guide.title}</div>
                    <div className="text-sm text-gray-500">{guide.slug}</div>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(guide.status)}</td>
                  <td className="px-6 py-4">
                    {guide.gatedDownload ? (
                      <span className="inline-flex items-center gap-1 text-sm text-green-600">
                        <Users className="h-4 w-4" />
                        Activé
                      </span>
                    ) : (
                      <span className="text-sm text-gray-400">Désactivé</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {guide.publishedAt
                      ? new Date(guide.publishedAt).toLocaleDateString('fr-FR')
                      : new Date(guide.createdAt).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      {guide.gatedDownload && (
                        <Link href={`/admin/guides/${guide.id}/leads`}>
                          <Button variant="ghost" size="sm">
                            <Users className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      <Link href={`/ressources/guides/${guide.slug}`} target="_blank">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/guides/${guide.id}`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(guide.id)}
                        className="text-red-600 hover:text-red-700"
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



