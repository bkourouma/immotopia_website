'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createFAQItem } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function NewFAQPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: '',
    status: 'draft',
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createFAQItem({
        ...formData,
        locale: 'fr',
        order: 0, // Will be auto-incremented
      });
      
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
      alert(error.message || 'Erreur lors de la création');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Nouvelle question FAQ</h1>
        <p className="mt-2 text-sm text-gray-600">
          Ajoutez une nouvelle question fréquente
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
            <p className="mt-1 text-xs text-gray-500">
              Markdown supporté
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="category">Catégorie</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="mt-1"
                placeholder="ex: Compte, Tarifs, Sécurité"
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Création...' : 'Créer la question'}
          </Button>
        </div>
      </form>
    </div>
  );
}

