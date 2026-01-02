'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createBlogPost, getBlogCategories, getBlogTags } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';

export default function NewBlogPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    status: 'draft',
    categoryId: '',
    author: '',
    seoTitle: '',
    seoDescription: '',
  });

  useEffect(() => {
    loadData();
  }, []);

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

  async function loadData() {
    try {
      const [cats, tgs] = await Promise.all([
        getBlogCategories(),
        getBlogTags(),
      ]);
      setCategories(cats || []);
      setTags(tgs || []);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createBlogPost({
        ...formData,
        tagIds: selectedTags,
        locale: 'fr',
      });
      router.push('/admin/blog/posts');
    } catch (error: any) {
      alert(error.message || 'Erreur lors de la création');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Nouvel article</h1>
        <p className="mt-2 text-sm text-gray-600">
          Créez un nouvel article de blog
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
                  <p className="mt-1 text-xs text-gray-500">
                    URL-friendly version (ex: mon-article-super)
                  </p>
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
                  <p className="mt-1 text-xs text-gray-500">
                    Résumé de l'article (utilisé pour SEO et aperçu)
                  </p>
                </div>

                <div>
                  <Label htmlFor="content">Contenu (Markdown) *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                    className="mt-1 font-mono"
                    rows={20}
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
                  <Label htmlFor="categoryId">Catégorie</Label>
                  <select
                    id="categoryId"
                    value={formData.categoryId}
                    onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  >
                    <option value="">Aucune</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="author">Auteur</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Tags</Label>
                  <div className="mt-2 space-y-2">
                    {tags.map((tag) => (
                      <label key={tag.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedTags.includes(tag.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedTags([...selectedTags, tag.id]);
                            } else {
                              setSelectedTags(selectedTags.filter((id) => id !== tag.id));
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm">{tag.name}</span>
                      </label>
                    ))}
                  </div>
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
                  <p className="mt-1 text-xs text-gray-500">
                    {formData.seoTitle.length}/60 caractères
                  </p>
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
                  <p className="mt-1 text-xs text-gray-500">
                    {formData.seoDescription.length}/160 caractères
                  </p>
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Création...' : 'Créer l\'article'}
          </Button>
        </div>
      </form>
    </div>
  );
}

