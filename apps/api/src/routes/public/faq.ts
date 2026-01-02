import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function publicFaqRoutes(fastify: FastifyInstance) {
  /**
   * GET /api/faq
   * Get published FAQ items (public)
   */
  fastify.get('/api/faq', async (request, reply) => {
    const query = request.query as { status?: string; limit?: string };
    const limit = parseInt(query.limit || '1000');

    const items = await prisma.faqItem.findMany({
      where: {
        status: 'published',
        deletedAt: null,
      },
      take: limit,
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });

    reply.send({ items });
  });
}

