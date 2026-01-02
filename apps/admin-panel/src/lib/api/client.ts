/**
 * API Client for Admin Panel
 * Centralized fetch wrapper with error handling
 */

// Use relative path in production, or VITE_API_URL if set (for dev)
const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:3002');

export interface ApiError {
  error: string;
  status?: number;
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Ensure endpoint starts with /api/ for admin routes
  const apiEndpoint = endpoint.startsWith('/api/') ? endpoint : `/api${endpoint}`;
  const response = await fetch(`${API_URL}${apiEndpoint}`, {
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

