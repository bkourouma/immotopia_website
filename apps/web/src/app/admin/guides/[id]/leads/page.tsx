'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getGuideLeads, getGuide } from '@/lib/api/admin';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface GuideLead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  persona: string | null;
  createdAt: string;
}

export default function GuideLeadsPage() {
  const params = useParams();
  const id = params.id as string;
  const [leads, setLeads] = useState<GuideLead[]>([]);
  const [guide, setGuide] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    try {
      const [leadsData, guideData] = await Promise.all([
        getGuideLeads(id),
        getGuide(id),
      ]);
      setLeads(leadsData || []);
      setGuide(guideData);
    } catch (error) {
      console.error('Error loading leads:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function exportCSV() {
    const headers = ['Nom', 'Email', 'Téléphone', 'Entreprise', 'Persona', 'Date'];
    const rows = leads.map((lead) => [
      lead.name,
      lead.email,
      lead.phone || '',
      lead.company || '',
      lead.persona || '',
      new Date(lead.createdAt).toLocaleDateString('fr-FR'),
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads-${guide?.slug || id}.csv`;
    link.click();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/admin/guides">
            <Button variant="ghost" className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux guides
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Leads capturés
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {guide?.title || 'Guide'}
          </p>
        </div>
        {leads.length > 0 && (
          <Button onClick={exportCSV} variant="outline">
            Exporter CSV
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : leads.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500">Aucun lead capturé pour ce guide</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Téléphone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Entreprise
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Persona
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {lead.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {lead.phone || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {lead.company || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {lead.persona || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString('fr-FR')}
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



