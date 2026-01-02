/**
 * Types TypeScript pour la gestion du contenu éditorial
 * Articles de blog, guides, FAQ
 */

/**
 * Métadonnées d'un article de blog
 */
export interface BlogPostMetadata {
  /** Titre de l'article */
  title: string;
  /** Description/sous-titre */
  description: string;
  /** Date de publication (format YYYY-MM-DD) */
  date: string;
  /** Date de mise à jour (optionnelle) */
  updatedAt?: string;
  /** Auteur de l'article */
  author: string;
  /** Catégorie de l'article */
  category: string;
  /** Tags/catégories */
  tags: string[];
  /** Image de couverture (optionnelle) */
  coverImage?: string;
  /** Image Open Graph pour SEO (optionnelle) */
  ogImage?: string;
  /** Titre SEO personnalisé pour les moteurs de recherche (optionnel) */
  seoTitle?: string;
  /** Description SEO personnalisée pour les moteurs de recherche (optionnelle) */
  seoDescription?: string;
  /** Slug URL (généré depuis le nom de fichier) */
  slug: string;
  /** Temps de lecture estimé (en minutes) */
  readingTime: number;
  /** Article publié ou brouillon (par défaut true pour MVP) */
  published?: boolean;
}

/**
 * Article de blog complet (métadonnées + contenu)
 */
export interface BlogPost extends BlogPostMetadata {
  /** Contenu markdown de l'article */
  content: string;
}

/**
 * Métadonnées d'un guide téléchargeable
 */
export interface GuideMetadata {
  /** Titre du guide */
  title: string;
  /** Description du guide */
  description: string;
  /** Chemin vers le fichier PDF */
  pdfPath: string;
  /** Image de couverture */
  coverImage?: string;
  /** Slug URL */
  slug: string;
  /** Catégorie du guide */
  category?: string;
  /** Date de création */
  date: string;
  /** Date de mise à jour */
  updatedAt?: string;
  /** Taille du fichier PDF (en MB) */
  fileSize?: number;
  /** Nombre de pages */
  pageCount?: number;
}

/**
 * Guide complet
 */
export interface Guide extends GuideMetadata {
  /** ID du guide (pour API) */
  id?: string;
  /** URL du PDF (alternative à pdfPath) */
  pdfUrl?: string;
  /** Capture de leads activée */
  gatedDownload?: boolean;
  /** Contenu HTML/markdown de la page de présentation (optionnel) */
  previewContent?: string;
  /** Contenu markdown du guide */
  content?: string;
}

/**
 * Question/Réponse FAQ
 */
export interface FAQItem {
  /** Question */
  question: string;
  /** Réponse */
  answer: string;
  /** Catégorie/thème (optionnel) */
  category?: string;
  /** Ordre d'affichage */
  order?: number;
}

/**
 * Section FAQ par persona
 */
export interface FAQSection {
  /** Identifiant de la persona */
  persona: 'agence' | 'syndic' | 'promoteur' | 'gestionnaire' | 'proprietaire';
  /** Titre de la section */
  title: string;
  /** Description de la section */
  description?: string;
  /** Liste des questions/réponses */
  items: FAQItem[];
}

/**
 * Données FAQ complètes
 */
export interface FAQData {
  /** Liste des sections FAQ par persona */
  sections: FAQSection[];
}

