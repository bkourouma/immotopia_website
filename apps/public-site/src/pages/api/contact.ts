/**
 * API endpoint for contact form submission
 * Proxies to Fastify API
 */

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3002';

    const response = await fetch(`${API_URL}/api/demo-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      return new Response(JSON.stringify({ success: false, error: error.error || 'Request failed' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[Contact API] Error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Network error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

