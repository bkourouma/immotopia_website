import { FastifyInstance } from 'fastify';
import { generateCsrfToken, setCsrfCookie } from '../../middleware/csrf.js';

export async function csrfRoutes(fastify: FastifyInstance) {
  /**
   * GET /admin/csrf-token
   * Get CSRF token for forms
   */
  fastify.get('/admin/csrf-token', async (request, reply) => {
    const token = generateCsrfToken();
    setCsrfCookie(reply, token);
    return { token };
  });
}



