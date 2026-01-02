/**
 * Media Manager Page
 */

import { useEffect, useState, useRef } from 'react';
import { getMedia } from '../../lib/api/admin';
import type { Media } from '../../lib/api/admin';
import { Upload, Image as ImageIcon, File, X } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';

export default function MediaPage() {
  const [media, setMedia] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadMedia();
  }, []);

  async function loadMedia() {
    try {
      setIsLoading(true);
      const response = await getMedia({ page: 1, limit: 100 });
      setMedia(response.media);
    } catch (error) {
      console.error('Error loading media:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await fetch(`${API_URL}/admin/media`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      await loadMedia();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error uploading media:', error);
      alert('Erreur lors de l\'upload');
    } finally {
      setIsUploading(false);
    }
  }

  function getFileIcon(mimeType: string) {
    if (mimeType.startsWith('image/')) {
      return <ImageIcon className="h-8 w-8 text-blue-500" />;
    }
    return <File className="h-8 w-8 text-gray-500" />;
  }

  function formatFileSize(bytes: number) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Médias</h1>
          <p className="mt-2 text-sm text-gray-600">
            Gérez vos fichiers et images
          </p>
        </div>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className={`flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-white font-semibold hover:bg-[#1D4ED8] transition-colors cursor-pointer ${
              isUploading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Upload className="h-5 w-5" />
            {isUploading ? 'Upload en cours...' : 'Upload fichiers'}
          </label>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2563EB] border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {media.length === 0 ? (
            <div className="col-span-full rounded-lg border border-gray-200 bg-white p-12 text-center">
              <p className="text-gray-500">Aucun média trouvé</p>
            </div>
          ) : (
            media.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow"
              >
                {item.mimeType.startsWith('image/') ? (
                  <img
                    src={item.url}
                    alt={item.filename}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                ) : (
                  <div className="w-full h-32 flex items-center justify-center bg-gray-100 rounded-lg mb-2">
                    {getFileIcon(item.mimeType)}
                  </div>
                )}
                <p className="text-xs font-medium text-gray-900 truncate" title={item.filename}>
                  {item.filename}
                </p>
                <p className="text-xs text-gray-500">{formatFileSize(item.size)}</p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => navigator.clipboard.writeText(item.url)}
                    className="rounded bg-black/50 p-1 text-white hover:bg-black/70"
                    title="Copier l'URL"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

