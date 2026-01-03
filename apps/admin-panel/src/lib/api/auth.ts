/**
 * Authentication API Client
 */

import apiRequest from './client';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface LoginResponse {
  user: User;
  message?: string;
}

/**
 * Login user
 */
export async function login(email: string, password: string): Promise<LoginResponse> {
  return apiRequest<LoginResponse>('/admin/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

/**
 * Logout user
 */
export async function logout(): Promise<void> {
  try {
    await apiRequest('/admin/logout', {
      method: 'POST',
    });
    clearCsrfToken();
  } catch (error) {
    console.error('Logout error:', error);
  }
}

/**
 * Get current user
 */
export async function getCurrentUser(): Promise<User> {
  return apiRequest<User>('/admin/me');
}

/**
 * CSRF token cache
 */
let csrfTokenCache: string | null = null;

/**
 * Get CSRF token (with caching)
 */
export async function getCsrfToken(): Promise<string> {
  if (csrfTokenCache) {
    return csrfTokenCache;
  }

  try {
    const response = await apiRequest<{ token: string }>('/admin/csrf-token');
    csrfTokenCache = response.token;
    return csrfTokenCache;
  } catch (error) {
    console.error('Error getting CSRF token:', error);
    return '';
  }
}

/**
 * Clear CSRF token cache (call after logout)
 */
export function clearCsrfToken(): void {
  csrfTokenCache = null;
}



