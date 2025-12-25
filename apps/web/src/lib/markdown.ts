/**
 * Helper pour le parsing et le rendu de markdown
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import type { Components } from 'react-markdown';

/**
 * Options de configuration pour le rendu markdown
 */
export interface MarkdownOptions {
  /** Activer les extensions GitHub Flavored Markdown */
  gfm?: boolean;
  /** Activer le highlighting de code */
  highlightCode?: boolean;
  /** Permettre le HTML brut dans le markdown */
  allowHtml?: boolean;
  /** Classes CSS pour les composants */
  className?: string;
}

/**
 * Configuration des plugins markdown
 */
export function getMarkdownPlugins(options: MarkdownOptions = {}) {
  const { gfm = true, highlightCode = true, allowHtml = false } = options;

  const remarkPlugins = [];
  if (gfm) {
    remarkPlugins.push(remarkGfm);
  }

  const rehypePlugins = [];
  if (allowHtml) {
    rehypePlugins.push(rehypeRaw);
  }
  if (highlightCode) {
    rehypePlugins.push(rehypeHighlight);
  }

  return { remarkPlugins, rehypePlugins };
}

/**
 * Parse le frontmatter d'un fichier markdown
 * @param content Contenu markdown avec frontmatter
 * @returns Objet avec frontmatter et contenu
 */
export function parseFrontmatter(content: string): { frontmatter: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content };
  }

  const frontmatterText = match[1];
  const markdownContent = match[2];

  const frontmatter: Record<string, any> = {};
  const lines = frontmatterText.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Gérer les valeurs entre guillemets
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // Gérer les tableaux
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value
          .slice(1, -1)
          .split(',')
          .map((item) => item.trim().replace(/^["']|["']$/g, ''));
      }

      // Gérer les booléens
      if (value === 'true') value = true;
      if (value === 'false') value = false;

      frontmatter[key] = value;
    }
  }

  return { frontmatter, content: markdownContent };
}

