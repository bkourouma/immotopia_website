/**
 * Markdown Editor Component
 * Split view: Editor + Preview
 */

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export default function MarkdownEditor({
  value,
  onChange,
  placeholder = 'Écrivez votre contenu en Markdown...',
  minHeight = '400px',
}: MarkdownEditorProps) {
  const [view, setView] = useState<'edit' | 'preview' | 'split'>('split');

  return (
    <div className="rounded-lg border border-gray-300 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setView('edit')}
            className={`px-3 py-1 text-sm font-medium rounded ${
              view === 'edit'
                ? 'bg-[#2563EB] text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Éditeur
          </button>
          <button
            type="button"
            onClick={() => setView('preview')}
            className={`px-3 py-1 text-sm font-medium rounded ${
              view === 'preview'
                ? 'bg-[#2563EB] text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Aperçu
          </button>
          <button
            type="button"
            onClick={() => setView('split')}
            className={`px-3 py-1 text-sm font-medium rounded ${
              view === 'split'
                ? 'bg-[#2563EB] text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Split
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Markdown supporté
        </div>
      </div>

      {/* Editor/Preview Area */}
      <div className="flex" style={{ minHeight }}>
        {/* Editor */}
        {(view === 'edit' || view === 'split') && (
          <div className={view === 'split' ? 'w-1/2 border-r border-gray-200' : 'w-full'}>
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none"
              style={{ minHeight }}
            />
          </div>
        )}

        {/* Preview */}
        {(view === 'preview' || view === 'split') && (
          <div className={`bg-white p-4 overflow-y-auto ${view === 'split' ? 'w-1/2' : 'w-full'}`} style={{ minHeight }}>
            {value ? (
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {value}
                </ReactMarkdown>
              </div>
            ) : (
              <p className="text-gray-400 italic">{placeholder}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

