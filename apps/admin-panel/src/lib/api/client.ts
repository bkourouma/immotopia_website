/**
 * API Client for Admin Panel
 * Centralized fetch wrapper with error handling
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';

export interface ApiError {
  error: string;
  status?: number;
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
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
    throw new Error((error as ApiError).error || 'Request failed');
  }

  return response.json();
}

export default apiRequest;

