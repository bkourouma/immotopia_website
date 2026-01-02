import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function publicGuidesRoutes(fastify: FastifyInstance) {
  /**
   * GET /api/guides
   * Get published guides (public)
   */
  fastify.get('/api/guides', async (request, reply) => {
    const query = request.query as { status?: string; limit?: string };
    const limit = parseInt(query.limit || '100');

    const guides = await prisma.guide.findMany({
      where: {
        status: 'published',
        publishedAt: { lte: new Date() },
        deletedAt: null,
      },
      take: limit,
      orderBy: { publishedAt: 'desc' },
      include: {
        pdfMedia: {
          select: {
            id: true,
            url: true,
            title: true,
          },
        },
      },
    });

    reply.send({ guides });
  });

  /**
   * GET /api/guides/:slug
   * Get single published guide (public)
   */
  fastify.get('/api/guides/:slug', async (request, reply) => {
    const { slug } = request.params as { slug: string };

    const guide = await prisma.guide.findFirst({
      where: {
        slug,
        status: 'published',
        publishedAt: { lte: new Date() },
        deletedAt: null,
      },
      include: {
        pdfMedia: {
          select: {
            id: true,
            url: true,
            title: true,
          },
        },
      },
    });

    if (!guide) {
      reply.code(404).send({ error: 'Guide not found' });
      return;
    }

    reply.send(guide);
  });
}

