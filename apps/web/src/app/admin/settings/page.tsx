'use client';

import { useEffect, useState } from 'react';
import { getSEOSettings, updateSEOSettings, getMedia } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [media, setMedia] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    siteTitleTemplate: '',
    defaultOgImageId: '',
    ga4Id: '',
    clarityId: '',
    canonicalBaseUrl: '',
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [settings, images] = await Promise.all([
        getSEOSettings(),
        getMedia({ type: 'image', limit: 50 }),
      ]);

      setFormData({
        siteTitleTemplate: settings.siteTitleTemplate || '',
        defaultOgImageId: settings.defaultOgImageId || '',
        ga4Id: settings.ga4Id || '',
        clarityId: settings.clarityId || '',
        canonicalBaseUrl: settings.canonicalBaseUrl || '',
      });

      setMedia(images.media || []);
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);

    try {
      await updateSEOSettings(formData);
      alert('Paramètres sauvegardés avec succès');
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
        <h1 className="text-3xl font-bold text-gray-900">Paramètres SEO</h1>
        <p className="mt-2 text-sm text-gray-600">
          Configurez les paramètres SEO globaux du site
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Paramètres généraux</h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="siteTitleTemplate">Template de titre</Label>
              <Input
                id="siteTitleTemplate"
                value={formData.siteTitleTemplate}
                onChange={(e) => setFormData({ ...formData, siteTitleTemplate: e.target.value })}
                className="mt-1"
                placeholder="%s | ImmoTopia"
              />
              <p className="mt-1 text-xs text-gray-500">
                %s sera remplacé par le titre de la page
              </p>
            </div>

            <div>
              <Label htmlFor="canonicalBaseUrl">URL canonique de base</Label>
              <Input
                id="canonicalBaseUrl"
                type="url"
                value={formData.canonicalBaseUrl}
                onChange={(e) => setFormData({ ...formData, canonicalBaseUrl: e.target.value })}
                className="mt-1"
                placeholder="https://immotopia.com"
              />
            </div>

            <div>
              <Label htmlFor="defaultOgImageId">Image OG par défaut</Label>
              <select
                id="defaultOgImageId"
                value={formData.defaultOgImageId}
                onChange={(e) => setFormData({ ...formData, defaultOgImageId: e.target.value })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="">Aucune</option>
                {media.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.title || m.url.split('/').pop()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Analytics</h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="ga4Id">Google Analytics 4 ID</Label>
              <Input
                id="ga4Id"
                value={formData.ga4Id}
                onChange={(e) => setFormData({ ...formData, ga4Id: e.target.value })}
                className="mt-1"
                placeholder="G-XXXXXXXXXX"
              />
            </div>

            <div>
              <Label htmlFor="clarityId">Microsoft Clarity ID</Label>
              <Input
                id="clarityId"
                value={formData.clarityId}
                onChange={(e) => setFormData({ ...formData, clarityId: e.target.value })}
                className="mt-1"
                placeholder="xxxxxxxxxx"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isSaving}>
            {isSaving ? 'Sauvegarde...' : 'Enregistrer les paramètres'}
          </Button>
        </div>
      </form>
    </div>
  );
}



