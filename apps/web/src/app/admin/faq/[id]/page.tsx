'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getFAQItems, updateFAQItem } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function EditFAQPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: '',
    status: 'draft',
    order: 0,
  });

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    try {
      const data = await getFAQItems({ limit: 1000 });
      const item = data.items?.find((i: any) => i.id === id);
      
      if (item) {
        setFormData({
          question: item.question || '',
          answer: item.answer || '',
          category: item.category || '',
          status: item.status || 'draft',
          order: item.order || 0,
        });
      }
    } catch (error) {
      console.error('Error loading FAQ item:', error);
      alert('Erreur lors du chargement');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);

    try {
      await updateFAQItem(id, formData);
      
      // Revalider le cache Next.js pour la page FAQ publique si publié
      if (formData.status === 'published') {
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
      }
      
      router.push('/admin/faq');
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
        <h1 className="text-3xl font-bold text-gray-900">Modifier la question FAQ</h1>
        <p className="mt-2 text-sm text-gray-600">
          Modifiez les informations de la question
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 space-y-4">
          <div>
            <Label htmlFor="question">Question *</Label>
            <Input
              id="question"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="answer">Réponse *</Label>
            <Textarea
              id="answer"
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              required
              className="mt-1"
              rows={6}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
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
              <Label htmlFor="order">Ordre</Label>
              <Input
                id="order"
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                className="mt-1"
              />
            </div>

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
              </select>
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

