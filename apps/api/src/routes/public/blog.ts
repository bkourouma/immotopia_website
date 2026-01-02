import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function publicBlogRoutes(fastify: FastifyInstance) {
  /**
   * GET /api/blog
   * Get published blog posts (public)
   */
  fastify.get('/api/blog', async (request, reply) => {
    const query = request.query as { status?: string; limit?: string };
    const limit = parseInt(query.limit || '100');

    const posts = await prisma.blogPost.findMany({
      where: {
        status: 'published',
        publishedAt: { lte: new Date() },
        deletedAt: null,
      },
      take: limit,
      orderBy: { publishedAt: 'desc' },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        tags: {
          include: {
            tag: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },
          },
        },
        coverImage: {
          select: {
            id: true,
            url: true,
            altText: true,
          },
        },
      },
    });

    reply.send({
      posts: posts.map((post) => ({
        ...post,
        tags: post.tags.map((pt) => pt.tag),
      })),
    });
  });

  /**
   * GET /api/blog/:slug
   * Get single published blog post (public)
   */
  fastify.get('/api/blog/:slug', async (request, reply) => {
    const { slug } = request.params as { slug: string };

    const post = await prisma.blogPost.findFirst({
      where: {
        slug,
        status: 'published',
        publishedAt: { lte: new Date() },
        deletedAt: null,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        tags: {
          include: {
            tag: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },
          },
        },
        coverImage: {
          select: {
            id: true,
            url: true,
            altText: true,
          },
        },
        ogImage: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    if (!post) {
      reply.code(404).send({ error: 'Post not found' });
      return;
    }

    reply.send({
      ...post,
      tags: post.tags.map((pt) => pt.tag),
    });
  });
}

