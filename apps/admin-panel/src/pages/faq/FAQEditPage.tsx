/**
 * FAQ Item Edit/Create Page
 */

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFAQItem, createFAQItem, updateFAQItem } from '../../lib/api/admin';
import type { FAQItem } from '../../lib/api/admin';
import { ArrowLeft, Save } from 'lucide-react';

export default function FAQEditPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isNew = !id;

  const [isLoading, setIsLoading] = useState(!isNew);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: '',
    order: 0,
    status: 'draft' as 'draft' | 'published',
  });

  useEffect(() => {
    if (!isNew) {
      loadItem();
    }
  }, [id]);

  async function loadItem() {
    if (!id) return;
    try {
      setIsLoading(true);
      const item = await getFAQItem(id);
      setFormData({
        question: item.question || '',
        answer: item.answer || '',
        category: item.category || '',
        order: item.order || 0,
        status: item.status || 'draft',
      });
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
      if (isNew) {
        await createFAQItem(formData);
      } else if (id) {
        await updateFAQItem(id, formData);
      }
      navigate('/faq');
    } catch (error: any) {
      alert(error.message || 'Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2563EB] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/faq')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isNew ? 'Nouvelle question' : 'Modifier la question'}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {isNew ? 'Créez une nouvelle question FAQ' : 'Modifiez les informations de la question'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Contenu</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                    Question *
                  </label>
                  <input
                    id="question"
                    type="text"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                <div>
                  <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
                    Réponse *
                  </label>
                  <textarea
                    id="answer"
                    value={formData.answer}
                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                    required
                    rows={10}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Catégorie
                  </label>
                  <input
                    id="category"
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Ex: Général, Tarifs, Fonctionnalités"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Publication</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Statut
                  </label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">
                    Ordre d'affichage
                  </label>
                  <input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    min="0"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-white font-semibold hover:bg-[#1D4ED8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="h-5 w-5" />
                  {isSaving ? 'Sauvegarde...' : 'Enregistrer'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

