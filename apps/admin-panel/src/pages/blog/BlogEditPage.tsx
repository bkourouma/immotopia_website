/**
 * Blog Post Edit/Create Page
 */

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogPost, createBlogPost, updateBlogPost } from '../../lib/api/admin';
import type { BlogPost } from '../../lib/api/admin';
import MarkdownEditor from '../../components/editor/MarkdownEditor';
import { ArrowLeft, Save } from 'lucide-react';

// Helper function to generate URL-friendly slug
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

export default function BlogEditPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isNew = !id;

  const [isLoading, setIsLoading] = useState(!isNew);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    status: 'draft' as 'draft' | 'published',
    author: '',
    seoTitle: '',
    seoDescription: '',
  });
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  useEffect(() => {
    if (!isNew) {
      loadPost();
    }
  }, [id]);

  // Auto-generate slug from title when creating new post
  useEffect(() => {
    if (isNew && formData.title && !slugManuallyEdited) {
      setFormData(prev => ({ ...prev, slug: generateSlug(prev.title) }));
    }
  }, [formData.title, isNew, slugManuallyEdited]);

  useEffect(() => {
    // Auto-generate slug from title
    if (formData.title && !formData.slug) {
      const slug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.title]);

  async function loadPost() {
    if (!id) return;
    try {
      setIsLoading(true);
      const post = await getBlogPost(id);
      setFormData({
        title: post.title || '',
        slug: post.slug || '',
        description: post.description || '',
        content: post.content || '',
        status: post.status || 'draft',
        author: post.author || '',
        seoTitle: post.seoTitle || '',
        seoDescription: post.seoDescription || '',
      });
    } catch (error) {
      console.error('Error loading post:', error);
      alert('Erreur lors du chargement');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Prepare data with required fields
      const submitData = {
        ...formData,
        locale: 'fr', // Default locale
        tagIds: [], // Empty tags array for now
      };

      if (isNew) {
        await createBlogPost(submitData);
      } else if (id) {
        await updateBlogPost(id, submitData);
      }
      navigate('/blog');
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
            onClick={() => navigate('/blog')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isNew ? 'Nouvel article' : 'Modifier l\'article'}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {isNew ? 'Créez un nouvel article de blog' : 'Modifiez les informations de l\'article'}
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
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Titre *
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                    Slug *
                  </label>
                  <input
                    id="slug"
                    type="text"
                    value={formData.slug}
                    onChange={(e) => {
                      setFormData({ ...formData, slug: e.target.value });
                      setSlugManuallyEdited(true);
                    }}
                    required
                    pattern="^[a-z0-9-]+$"
                    title="Seulement des lettres minuscules, chiffres et tirets"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    URL-friendly version (ex: mon-article-super). Auto-généré depuis le titre.
                  </p>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Résumé de l'article (utilisé pour SEO et aperçu)
                  </p>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    Contenu (Markdown) *
                  </label>
                  <MarkdownEditor
                    value={formData.content}
                    onChange={(value) => setFormData({ ...formData, content: value })}
                    placeholder="Écrivez votre contenu en Markdown..."
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

            {/* SEO */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">SEO</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="seoTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Titre SEO
                  </label>
                  <input
                    id="seoTitle"
                    type="text"
                    value={formData.seoTitle}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                <div>
                  <label htmlFor="seoDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Description SEO
                  </label>
                  <textarea
                    id="seoDescription"
                    value={formData.seoDescription}
                    onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                    Auteur
                  </label>
                  <input
                    id="author"
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

