'use client';

/**
 * Composant wrapper pour le rendu de contenu markdown dans les articles de blog
 * Inclut les styles Tailwind typography
 */

import ReactMarkdown from 'react-markdown';
import { getMarkdownPlugins } from '@/lib/markdown';

interface MarkdownContentProps {
  /** Contenu markdown à rendre */
  content: string;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  const { remarkPlugins, rehypePlugins } = getMarkdownPlugins({
    gfm: true,
    highlightCode: true,
    allowHtml: false,
  });

  const proseClassName =
    'prose prose-lg prose-blue max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900';

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        className={proseClassName}
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

