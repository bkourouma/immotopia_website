import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthenticatedRequest } from '../../middleware/auth.js';
import { verifyCsrfHeader } from '../../middleware/csrf.js';
import { createAuditLog } from '../../utils/audit-log.js';
import {
  GuideCreateSchema,
  GuideUpdateSchema,
  GuideListQuerySchema,
  GuideLeadCaptureSchema,
} from '@monorepo/contracts';

const prisma = new PrismaClient();

export async function guidesRoutes(fastify: FastifyInstance) {
  /**
   * GET /admin/guides
   * List guides with filters
   */
  fastify.get('/admin/guides', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const query = GuideListQuerySchema.safeParse(request.query);
    if (!query.success) {
      reply.code(400).send({ error: 'Invalid query', details: query.error.errors });
      return;
    }

    const { status, category, search, locale, page, limit } = query.data;
    const skip = (page - 1) * limit;

    const where: any = {
      deletedAt: null,
      locale,
    };

    if (status) {
      where.status = status;
    }

    if (category) {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [guides, total] = await Promise.all([
      prisma.guide.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          pdfMedia: {
            select: {
              id: true,
              url: true,
              title: true,
            },
          },
        },
      }),
      prisma.guide.count({ where }),
    ]);

    reply.send({
      guides,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  });

  /**
   * GET /admin/guides/:id
   * Get single guide
   */
  fastify.get('/admin/guides/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const { id } = request.params as { id: string };

    const guide = await prisma.guide.findUnique({
      where: { id },
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

  /**
   * POST /admin/guides
   * Create guide
   */
  fastify.post('/admin/guides', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const body = GuideCreateSchema.safeParse(request.body);
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Check if slug exists
    const existing = await prisma.guide.findUnique({
      where: { slug: data.slug },
    });

    if (existing) {
      reply.code(409).send({ error: 'Slug already exists' });
      return;
    }

    // Create guide
    const guide = await prisma.guide.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        content: data.content,
        status: data.status,
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : null,
        category: data.category || null,
        downloadablePdfMediaId: data.downloadablePdfMediaId || null,
        gatedDownload: data.gatedDownload,
        seoTitle: data.seoTitle || null,
        seoDescription: data.seoDescription || null,
        locale: data.locale,
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

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'create',
      entityType: 'Guide',
      entityId: guide.id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.code(201).send(guide);
  });

  /**
   * PUT /admin/guides/:id
   * Update guide
   */
  fastify.put('/admin/guides/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };
    const body = GuideUpdateSchema.safeParse({ ...(request.body as any), id });
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Check if guide exists
    const existing = await prisma.guide.findUnique({
      where: { id },
    });

    if (!existing) {
      reply.code(404).send({ error: 'Guide not found' });
      return;
    }

    // Check slug uniqueness if changed
    if (data.slug && data.slug !== existing.slug) {
      const slugExists = await prisma.guide.findUnique({
        where: { slug: data.slug },
      });
      if (slugExists) {
        reply.code(409).send({ error: 'Slug already exists' });
        return;
      }
    }

    // Update guide
    const updateData: any = {};
    if (data.title !== undefined) updateData.title = data.title;
    if (data.slug !== undefined) updateData.slug = data.slug;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.content !== undefined) updateData.content = data.content;
    if (data.status !== undefined) updateData.status = data.status;
    if (data.publishedAt !== undefined) updateData.publishedAt = data.publishedAt ? new Date(data.publishedAt) : null;
    if (data.category !== undefined) updateData.category = data.category || null;
    if (data.downloadablePdfMediaId !== undefined) updateData.downloadablePdfMediaId = data.downloadablePdfMediaId || null;
    if (data.gatedDownload !== undefined) updateData.gatedDownload = data.gatedDownload;
    if (data.seoTitle !== undefined) updateData.seoTitle = data.seoTitle || null;
    if (data.seoDescription !== undefined) updateData.seoDescription = data.seoDescription || null;

    const guide = await prisma.guide.update({
      where: { id },
      data: updateData,
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

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'update',
      entityType: 'Guide',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
      diffJson: { before: existing, after: guide },
    });

    reply.send(guide);
  });

  /**
   * DELETE /admin/guides/:id
   * Soft delete guide
   */
  fastify.delete('/admin/guides/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };

    const guide = await prisma.guide.findUnique({
      where: { id },
    });

    if (!guide) {
      reply.code(404).send({ error: 'Guide not found' });
      return;
    }

    // Soft delete
    await prisma.guide.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'delete',
      entityType: 'Guide',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({ success: true });
  });

  /**
   * GET /admin/guides/:id/leads
   * Get leads captured for a guide
   */
  fastify.get('/admin/guides/:id/leads', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const { id } = request.params as { id: string };

    const leads = await prisma.guideLead.findMany({
      where: { guideId: id },
      orderBy: { createdAt: 'desc' },
      include: {
        guide: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

    reply.send(leads);
  });

  /**
   * POST /api/guides/:id/capture-lead
   * Public endpoint to capture lead for gated download
   */
  fastify.post('/api/guides/:id/capture-lead', async (request, reply) => {
    const { id } = request.params as { id: string };
    const body = GuideLeadCaptureSchema.safeParse({ ...(request.body as any), guideId: id });

    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    // Verify guide exists and is gated
    const guide = await prisma.guide.findUnique({
      where: { id },
    });

    if (!guide || !guide.gatedDownload) {
      reply.code(404).send({ error: 'Guide not found or not gated' });
      return;
    }

    // Create lead
    const lead = await prisma.guideLead.create({
      data: {
        guideId: id,
        name: body.data.name,
        email: body.data.email,
        phone: body.data.phone || null,
        company: body.data.company || null,
        persona: body.data.persona || null,
      },
    });

    // Return guide with PDF URL for download
    const guideWithPdf = await prisma.guide.findUnique({
      where: { id },
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

    reply.code(201).send({
      success: true,
      guide: guideWithPdf,
    });
  });
}

