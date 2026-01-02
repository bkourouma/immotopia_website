/**
 * Contact API Client for Astro
 * Handles contact form submissions
 */

// Use relative path in production, or PUBLIC_API_URL if set, or localhost for dev
const API_URL = import.meta.env.PUBLIC_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:3002');

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  persona?: string;
}

/**
 * Submit contact form
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`${API_URL}/api/demo-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      return { success: false, error: error.error || 'Request failed' };
    }

    return { success: true };
  } catch (error) {
    console.error('[Contact API] Request error:', error);
    return { success: false, error: 'Network error' };
  }
}

