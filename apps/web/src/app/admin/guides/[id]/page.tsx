'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getGuide, updateGuide, getMedia } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function EditGuidePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [media, setMedia] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    status: 'draft',
    category: '',
    downloadablePdfMediaId: '',
    gatedDownload: false,
    seoTitle: '',
    seoDescription: '',
  });

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    try {
      const [guide, pdfs] = await Promise.all([
        getGuide(id),
        getMedia({ type: 'pdf', limit: 100 }),
      ]);

      if (guide) {
        setFormData({
          title: guide.title || '',
          slug: guide.slug || '',
          description: guide.description || '',
          content: guide.content || '',
          status: guide.status || 'draft',
          category: guide.category || '',
          downloadablePdfMediaId: guide.downloadablePdfMediaId || '',
          gatedDownload: guide.gatedDownload || false,
          seoTitle: guide.seoTitle || '',
          seoDescription: guide.seoDescription || '',
        });
      }

      setMedia(pdfs.media || []);
    } catch (error) {
      console.error('Error loading data:', error);
      alert('Erreur lors du chargement');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);

    try {
      await updateGuide(id, {
        ...formData,
        downloadablePdfMediaId: formData.downloadablePdfMediaId || null,
      });
      router.push('/admin/guides');
    } catch (error: any) {
      alert(error.message || 'Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Modifier le guide</h1>
        <p className="mt-2 text-sm text-gray-600">
          Modifiez les informations du guide
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Contenu</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Titre *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                    className="mt-1"
                    pattern="[a-z0-9-]+"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Contenu (Markdown) *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                    className="mt-1 font-mono"
                    rows={15}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Publication</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="status">Statut</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                    <option value="scheduled">Programmé</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="category">Catégorie</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="downloadablePdfMediaId">PDF Téléchargeable</Label>
                  <select
                    id="downloadablePdfMediaId"
                    value={formData.downloadablePdfMediaId}
                    onChange={(e) => setFormData({ ...formData, downloadablePdfMediaId: e.target.value })}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  >
                    <option value="">Aucun</option>
                    {media.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.title || m.url.split('/').pop()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="gatedDownload"
                    checked={formData.gatedDownload}
                    onChange={(e) => setFormData({ ...formData, gatedDownload: e.target.checked })}
                    className="mr-2"
                  />
                  <Label htmlFor="gatedDownload" className="cursor-pointer">
                    Capture de leads activée
                  </Label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">SEO</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="seoTitle">Titre SEO</Label>
                  <Input
                    id="seoTitle"
                    value={formData.seoTitle}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    className="mt-1"
                    maxLength={60}
                  />
                </div>

                <div>
                  <Label htmlFor="seoDescription">Description SEO</Label>
                  <Textarea
                    id="seoDescription"
                    value={formData.seoDescription}
                    onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                    className="mt-1"
                    rows={3}
                    maxLength={160}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            Annuler
          </Button>
          <Button type="submit" disabled={isSaving}>
            {isSaving ? 'Sauvegarde...' : 'Enregistrer'}
          </Button>
        </div>
      </form>
    </div>
  );
}



