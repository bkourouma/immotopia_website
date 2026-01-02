'use client';

import { useEffect, useState, useRef } from 'react';
import { getMedia, uploadMedia, deleteMedia } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Search, Trash2, Image as ImageIcon, File } from 'lucide-react';

interface MediaItem {
  id: string;
  url: string;
  type: string;
  title: string | null;
  altText: string | null;
  size: number;
  createdAt: string;
}

export default function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadMedia();
  }, [typeFilter, search]);

  async function loadMedia() {
    setIsLoading(true);
    try {
      const data = await getMedia({
        type: typeFilter || undefined,
        search: search || undefined,
        limit: 100,
      });
      setMedia(data.media || []);
    } catch (error) {
      console.error('Error loading media:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      await uploadMedia(file);
      loadMedia();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: any) {
      alert(error.message || 'Erreur lors de l\'upload');
    } finally {
      setIsUploading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce média ?')) {
      return;
    }

    try {
      await deleteMedia(id);
      loadMedia();
    } catch (error: any) {
      alert(error.message || 'Erreur lors de la suppression');
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bibliothèque média</h1>
          <p className="mt-2 text-sm text-gray-600">
            Gérez vos images et fichiers PDF
          </p>
        </div>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.pdf"
            onChange={handleUpload}
            className="hidden"
            id="file-upload"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            <Upload className="mr-2 h-4 w-4" />
            {isUploading ? 'Upload...' : 'Upload média'}
          </Button>
        </div>
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
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">Tous les types</option>
          <option value="image">Images</option>
          <option value="pdf">PDF</option>
        </select>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : media.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500">Aucun média trouvé</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {media.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.altText || item.title || ''}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="flex h-48 items-center justify-center bg-gray-100">
                  <File className="h-12 w-12 text-gray-400" />
                </div>
              )}
              <div className="p-4">
                <p className="truncate text-sm font-medium text-gray-900">
                  {item.title || 'Sans titre'}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {formatFileSize(item.size)}
                </p>
                <div className="mt-2 flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(item.url);
                      alert('URL copiée !');
                    }}
                    className="flex-1"
                  >
                    Copier URL
                  </Button>
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

