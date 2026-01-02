import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthenticatedRequest } from '../../middleware/auth.js';
import { verifyCsrfHeader } from '../../middleware/csrf.js';
import { createAuditLog } from '../../utils/audit-log.js';
import readingTime from 'reading-time';
import {
  BlogPostCreateSchema,
  BlogPostUpdateSchema,
  BlogPostListQuerySchema,
  BlogCategoryCreateSchema,
  BlogTagCreateSchema,
} from '@monorepo/contracts';

const prisma = new PrismaClient();

export async function blogRoutes(fastify: FastifyInstance) {
  /**
   * GET /admin/blog/posts
   * List blog posts with filters
   */
  fastify.get('/admin/blog/posts', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const query = BlogPostListQuerySchema.safeParse(request.query);
    if (!query.success) {
      reply.code(400).send({ error: 'Invalid query', details: query.error.errors });
      return;
    }

    const { status, categoryId, tagId, search, locale, page, limit } = query.data;
    const skip = (page - 1) * limit;

    const where: any = {
      deletedAt: null,
      locale,
    };

    if (status) {
      where.status = status;
    }

    if (categoryId) {
      where.categoryId = categoryId;
    }

    if (tagId) {
      where.tags = {
        some: {
          tagId,
        },
      };
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          category: true,
          tags: {
            include: {
              tag: true,
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
      }),
      prisma.blogPost.count({ where }),
    ]);

    reply.send({
      posts: posts.map((post) => ({
        ...post,
        tags: post.tags.map((pt) => pt.tag),
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  });

  /**
   * GET /admin/blog/posts/:id
   * Get single blog post
   */
  fastify.get('/admin/blog/posts/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const { id } = request.params as { id: string };

    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        category: true,
        tags: {
          include: {
            tag: true,
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
      tagIds: post.tags.map((pt) => pt.tagId),
    });
  });

  /**
   * POST /admin/blog/posts
   * Create blog post
   */
  fastify.post('/admin/blog/posts', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const body = BlogPostCreateSchema.safeParse(request.body);
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Check if slug exists
    const existing = await prisma.blogPost.findUnique({
      where: { slug: data.slug },
    });

    if (existing) {
      reply.code(409).send({ error: 'Slug already exists' });
      return;
    }

    // Calculate reading time
    const readingTimeResult = readingTime(data.content);

    // Auto-set publishedAt if status is published and publishedAt is not set
    let publishedAt = data.publishedAt ? new Date(data.publishedAt) : null;
    if (data.status === 'published' && !publishedAt) {
      publishedAt = new Date();
    }

    // Create post
    const post = await prisma.blogPost.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        content: data.content,
        status: data.status,
        publishedAt,
        categoryId: data.categoryId || null,
        author: data.author || null,
        coverImageId: data.coverImageId || null,
        ogImageId: data.ogImageId || null,
        seoTitle: data.seoTitle || null,
        seoDescription: data.seoDescription || null,
        locale: data.locale,
        readingTime: Math.ceil(readingTimeResult.minutes),
        tags: {
          create: data.tagIds.map((tagId) => ({
            tagId,
          })),
        },
      },
      include: {
        category: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'create',
      entityType: 'BlogPost',
      entityId: post.id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.code(201).send({
      ...post,
      tags: post.tags.map((pt) => pt.tag),
    });
  });

  /**
   * PUT /admin/blog/posts/:id
   * Update blog post
   */
  fastify.put('/admin/blog/posts/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };
    const body = BlogPostUpdateSchema.safeParse({ ...request.body, id });
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Check if post exists
    const existing = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!existing) {
      reply.code(404).send({ error: 'Post not found' });
      return;
    }

    // Check slug uniqueness if changed
    if (data.slug && data.slug !== existing.slug) {
      const slugExists = await prisma.blogPost.findUnique({
        where: { slug: data.slug },
      });
      if (slugExists) {
        reply.code(409).send({ error: 'Slug already exists' });
        return;
      }
    }

    // Calculate reading time if content changed
    let readingTimeMinutes = existing.readingTime;
    if (data.content) {
      const readingTimeResult = readingTime(data.content);
      readingTimeMinutes = Math.ceil(readingTimeResult.minutes);
    }

    // Update post
    const updateData: any = {};
    if (data.title !== undefined) updateData.title = data.title;
    if (data.slug !== undefined) updateData.slug = data.slug;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.content !== undefined) updateData.content = data.content;
    if (data.status !== undefined) updateData.status = data.status;
    if (data.publishedAt !== undefined) updateData.publishedAt = data.publishedAt ? new Date(data.publishedAt) : null;
    if (data.categoryId !== undefined) updateData.categoryId = data.categoryId || null;
    if (data.author !== undefined) updateData.author = data.author || null;
    if (data.coverImageId !== undefined) updateData.coverImageId = data.coverImageId || null;
    if (data.ogImageId !== undefined) updateData.ogImageId = data.ogImageId || null;
    if (data.seoTitle !== undefined) updateData.seoTitle = data.seoTitle || null;
    if (data.seoDescription !== undefined) updateData.seoDescription = data.seoDescription || null;
    if (readingTimeMinutes !== undefined) updateData.readingTime = readingTimeMinutes;

    // Auto-set publishedAt if status is being changed to published and publishedAt is not set
    if (data.status === 'published' && !existing.publishedAt && !data.publishedAt) {
      updateData.publishedAt = new Date();
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: updateData,
      include: {
        category: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    // Update tags if provided
    if (data.tagIds !== undefined) {
      // Delete existing tags
      await prisma.blogPostTag.deleteMany({
        where: { blogPostId: id },
      });

      // Create new tags
      if (data.tagIds.length > 0) {
        await prisma.blogPostTag.createMany({
          data: data.tagIds.map((tagId) => ({
            blogPostId: id,
            tagId,
          })),
        });
      }

      // Reload with tags
      const updated = await prisma.blogPost.findUnique({
        where: { id },
        include: {
          category: true,
          tags: {
            include: {
              tag: true,
            },
          },
        },
      });

      // Audit log
      await createAuditLog({
        adminUserId: request.adminUser?.id,
        action: 'update',
        entityType: 'BlogPost',
        entityId: id,
        ip: request.ip,
        userAgent: request.headers['user-agent'] || undefined,
        diffJson: { before: existing, after: updated },
      });

      reply.send({
        ...updated!,
        tags: updated!.tags.map((pt) => pt.tag),
      });
      return;
    }

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'update',
      entityType: 'BlogPost',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
      diffJson: { before: existing, after: post },
    });

    reply.send({
      ...post,
      tags: post.tags.map((pt) => pt.tag),
    });
  });

  /**
   * DELETE /admin/blog/posts/:id
   * Soft delete blog post
   */
  fastify.delete('/admin/blog/posts/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };

    const post = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!post) {
      reply.code(404).send({ error: 'Post not found' });
      return;
    }

    // Soft delete
    await prisma.blogPost.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'delete',
      entityType: 'BlogPost',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({ success: true });
  });

  /**
   * GET /admin/blog/categories
   * List categories
   */
  fastify.get('/admin/blog/categories', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const categories = await prisma.blogCategory.findMany({
      orderBy: { name: 'asc' },
    });
    reply.send(categories);
  });

  /**
   * POST /admin/blog/categories
   * Create category
   */
  fastify.post('/admin/blog/categories', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const body = BlogCategoryCreateSchema.safeParse(request.body);
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const category = await prisma.blogCategory.create({
      data: body.data,
    });

    reply.code(201).send(category);
  });

  /**
   * GET /admin/blog/tags
   * List tags
   */
  fastify.get('/admin/blog/tags', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const tags = await prisma.blogTag.findMany({
      orderBy: { name: 'asc' },
    });
    reply.send(tags);
  });

  /**
   * POST /admin/blog/tags
   * Create tag
   */
  fastify.post('/admin/blog/tags', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const body = BlogTagCreateSchema.safeParse(request.body);
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const tag = await prisma.blogTag.create({
      data: body.data,
    });

    reply.code(201).send(tag);
  });
}

