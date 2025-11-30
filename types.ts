export enum Category {
  INSURANCE = 'Insurance Claims',
  MAINTENANCE = 'Maintenance & Care',
  MATERIALS = 'Materials & Options',
  DAMAGE = 'Storm Damage',
  BASICS = 'Roofing Basics'
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML-like string or markdown
  author: string;
  date: string;
  category: Category;
  imageUrl: string;
  readTime: number; // in minutes
}

export type ViewState = 'HOME' | 'ARTICLE_DETAIL' | 'SEARCH_RESULTS';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}