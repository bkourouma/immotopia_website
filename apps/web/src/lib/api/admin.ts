/**
 * API Client for Admin CMS
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: 'include', // Include cookies for session
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

// Auth
export async function login(email: string, password: string) {
  return fetchAPI('/admin/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function logout() {
  clearCsrfToken();
  return fetchAPI('/admin/logout', {
    method: 'POST',
  });
}

export async function getCurrentUser() {
  return fetchAPI('/admin/me');
}

// Blog
export async function getBlogPosts(params?: {
  status?: string;
  categoryId?: string;
  tagId?: string;
  search?: string;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        query.append(key, String(value));
      }
    });
  }
  return fetchAPI(`/admin/blog/posts?${query.toString()}`);
}

export async function getBlogPost(id: string) {
  return fetchAPI(`/admin/blog/posts/${id}`);
}

export async function createBlogPost(data: any) {
  return fetchAPI('/admin/blog/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function updateBlogPost(id: string, data: any) {
  return fetchAPI(`/admin/blog/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function deleteBlogPost(id: string) {
  return fetchAPI(`/admin/blog/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function getBlogCategories() {
  return fetchAPI('/admin/blog/categories');
}

export async function createBlogCategory(data: any) {
  return fetchAPI('/admin/blog/categories', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function getBlogTags() {
  return fetchAPI('/admin/blog/tags');
}

export async function createBlogTag(data: any) {
  return fetchAPI('/admin/blog/tags', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

// Guides
export async function getGuides(params?: {
  status?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        query.append(key, String(value));
      }
    });
  }
  return fetchAPI(`/admin/guides?${query.toString()}`);
}

export async function getGuide(id: string) {
  return fetchAPI(`/admin/guides/${id}`);
}

export async function createGuide(data: any) {
  return fetchAPI('/admin/guides', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function updateGuide(id: string, data: any) {
  return fetchAPI(`/admin/guides/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function deleteGuide(id: string) {
  return fetchAPI(`/admin/guides/${id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function getGuideLeads(guideId: string) {
  return fetchAPI(`/admin/guides/${guideId}/leads`);
}

// FAQ
export async function getFAQItems(params?: {
  status?: string;
  category?: string;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        query.append(key, String(value));
      }
    });
  }
  return fetchAPI(`/admin/faq?${query.toString()}`);
}

export async function createFAQItem(data: any) {
  return fetchAPI('/admin/faq', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function updateFAQItem(id: string, data: any) {
  return fetchAPI(`/admin/faq/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function deleteFAQItem(id: string) {
  return fetchAPI(`/admin/faq/${id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function reorderFAQItems(items: Array<{ id: string; order: number }>) {
  return fetchAPI('/admin/faq/reorder', {
    method: 'PUT',
    body: JSON.stringify({ items }),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

// Media
export async function getMedia(params?: {
  type?: string;
  search?: string;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        query.append(key, String(value));
      }
    });
  }
  return fetchAPI(`/admin/media?${query.toString()}`);
}

export async function uploadMedia(file: File, altText?: string, title?: string) {
  const formData = new FormData();
  formData.append('file', file);
  if (altText) formData.append('altText', altText);
  if (title) formData.append('title', title);

  const response = await fetch(`${API_URL}/admin/media/upload`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Upload failed' }));
    throw new Error(error.error || 'Upload failed');
  }

  return response.json();
}

export async function deleteMedia(id: string) {
  return fetchAPI(`/admin/media/${id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

// Menus
export async function getMenus() {
  return fetchAPI('/admin/menus');
}

export async function getMenu(id: string) {
  return fetchAPI(`/admin/menus/${id}`);
}

export async function createMenuItem(menuId: string, data: any) {
  return fetchAPI(`/admin/menus/${menuId}/items`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function updateMenuItem(id: string, data: any) {
  return fetchAPI(`/admin/menus/items/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function deleteMenuItem(id: string) {
  return fetchAPI(`/admin/menus/items/${id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

export async function reorderMenuItems(menuId: string, items: Array<{ id: string; order: number; parentId?: string }>) {
  return fetchAPI(`/admin/menus/${menuId}/reorder`, {
    method: 'PUT',
    body: JSON.stringify({ items }),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

// Settings
export async function getSEOSettings() {
  return fetchAPI('/admin/settings/seo');
}

export async function updateSEOSettings(data: any) {
  return fetchAPI('/admin/settings/seo', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-Token': await getCsrfToken(),
    },
  });
}

// Helper to get CSRF token from server
let csrfTokenCache: string | null = null;

async function getCsrfToken(): Promise<string> {
  if (csrfTokenCache) {
    return csrfTokenCache;
  }

  try {
    const response = await fetch(`${API_URL}/admin/csrf-token`, {
      credentials: 'include',
    });
    const data = await response.json();
    csrfTokenCache = data.token;
    return csrfTokenCache;
  } catch (error) {
    console.error('Error getting CSRF token:', error);
    return '';
  }
}

// Clear CSRF token cache (call after logout)
export function clearCsrfToken() {
  csrfTokenCache = null;
}

