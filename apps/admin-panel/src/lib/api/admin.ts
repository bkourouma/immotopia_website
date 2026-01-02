/**
 * Admin API Client
 * CRUD operations for admin panel
 */

import apiRequest from './client';
import { getCsrfToken } from './auth';

// Blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description?: string;
  content: string;
  status: 'draft' | 'published';
  publishedAt?: string;
  author?: string;
  category?: { id: string; name: string };
  tags?: Array<{ id: string; name: string }>;
  coverImage?: { id: string; url: string };
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function getBlogPosts(params?: { page?: number; limit?: number }): Promise<BlogPostsResponse> {
  const query = new URLSearchParams();
  if (params?.page) query.append('page', params.page.toString());
  if (params?.limit) query.append('limit', params.limit.toString());

  return apiRequest(`/admin/blog/posts?${query.toString()}`);
}

export async function getBlogPost(id: string): Promise<BlogPost> {
  return apiRequest(`/admin/blog/posts/${id}`);
}

export async function createBlogPost(data: Partial<BlogPost>): Promise<BlogPost> {
  return apiRequest('/admin/blog/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>): Promise<BlogPost> {
  return apiRequest(`/admin/blog/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function deleteBlogPost(id: string): Promise<void> {
  return apiRequest(`/admin/blog/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

// Guides
export interface Guide {
  id: string;
  title: string;
  slug: string;
  description?: string;
  content: string;
  status: 'draft' | 'published';
  publishedAt?: string;
  downloadablePdfMediaId?: string;
  gatedDownload?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface GuidesResponse {
  guides: Guide[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function getGuides(params?: { page?: number; limit?: number; status?: string; search?: string }): Promise<GuidesResponse> {
  const query = new URLSearchParams();
  if (params?.page) query.append('page', params.page.toString());
  if (params?.limit) query.append('limit', params.limit.toString());
  if (params?.status) query.append('status', params.status);
  if (params?.search) query.append('search', params.search);
  
  return apiRequest(`/admin/guides?${query.toString()}`);
}

export async function getGuide(id: string): Promise<Guide> {
  return apiRequest(`/admin/guides/${id}`);
}

export async function createGuide(data: Partial<Guide>): Promise<Guide> {
  return apiRequest('/admin/guides', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function updateGuide(id: string, data: Partial<Guide>): Promise<Guide> {
  return apiRequest(`/admin/guides/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function deleteGuide(id: string): Promise<void> {
  return apiRequest(`/admin/guides/${id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

// FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
  status: 'draft' | 'published';
}

export interface FAQItemsResponse {
  items: FAQItem[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function getFAQItems(params?: { page?: number; limit?: number; status?: string }): Promise<FAQItemsResponse> {
  const query = new URLSearchParams();
  if (params?.page) query.append('page', params.page.toString());
  if (params?.limit) query.append('limit', params.limit.toString());
  if (params?.status) query.append('status', params.status);
  
  return apiRequest(`/admin/faq?${query.toString()}`);
}

export async function getFAQItem(id: string): Promise<FAQItem> {
  return apiRequest(`/admin/faq/${id}`);
}

export async function createFAQItem(data: Partial<FAQItem>): Promise<FAQItem> {
  return apiRequest('/admin/faq', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function updateFAQItem(id: string, data: Partial<FAQItem>): Promise<FAQItem> {
  return apiRequest(`/admin/faq/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function deleteFAQItem(id: string): Promise<void> {
  return apiRequest(`/admin/faq/${id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

// Media
export interface Media {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  createdAt: string;
}

export interface MediaResponse {
  media: Media[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function getMedia(params?: { page?: number; limit?: number }): Promise<MediaResponse> {
  const query = new URLSearchParams();
  if (params?.page) query.append('page', params.page.toString());
  if (params?.limit) query.append('limit', params.limit.toString());
  
  return apiRequest(`/admin/media?${query.toString()}`);
}

