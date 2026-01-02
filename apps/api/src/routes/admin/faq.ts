import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthenticatedRequest } from '../../middleware/auth.js';
import { verifyCsrfHeader } from '../../middleware/csrf.js';
import { createAuditLog } from '../../utils/audit-log.js';
import {
  FaqItemCreateSchema,
  FaqItemUpdateSchema,
  FaqItemListQuerySchema,
  FaqItemReorderSchema,
} from '@monorepo/contracts';

const prisma = new PrismaClient();

export async function faqRoutes(fastify: FastifyInstance) {
  /**
   * GET /admin/faq
   * List FAQ items with filters
   */
  fastify.get('/admin/faq', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const query = FaqItemListQuerySchema.safeParse(request.query);
    if (!query.success) {
      reply.code(400).send({ error: 'Invalid query', details: query.error.errors });
      return;
    }

    const { status, category, locale, page, limit } = query.data;
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

    const [items, total] = await Promise.all([
      prisma.faqItem.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.faqItem.count({ where }),
    ]);

    reply.send({
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  });

  /**
   * GET /admin/faq/:id
   * Get single FAQ item
   */
  fastify.get('/admin/faq/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const { id } = request.params as { id: string };

    const item = await prisma.faqItem.findUnique({
      where: { id },
    });

    if (!item) {
      reply.code(404).send({ error: 'FAQ item not found' });
      return;
    }

    reply.send(item);
  });

  /**
   * POST /admin/faq
   * Create FAQ item
   */
  fastify.post('/admin/faq', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const body = FaqItemCreateSchema.safeParse(request.body);
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Get max order for auto-increment
    const maxOrder = await prisma.faqItem.findFirst({
      where: { locale: data.locale, category: data.category || null },
      orderBy: { order: 'desc' },
      select: { order: true },
    });

    const order = data.order !== undefined ? data.order : (maxOrder?.order ?? 0) + 1;

    const item = await prisma.faqItem.create({
      data: {
        ...data,
        order,
      },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'create',
      entityType: 'FaqItem',
      entityId: item.id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.code(201).send(item);
  });

  /**
   * PUT /admin/faq/:id
   * Update FAQ item
   */
  fastify.put('/admin/faq/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };
    const body = FaqItemUpdateSchema.safeParse({ ...request.body, id });
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Check if item exists
    const existing = await prisma.faqItem.findUnique({
      where: { id },
    });

    if (!existing) {
      reply.code(404).send({ error: 'FAQ item not found' });
      return;
    }

    // Update item
    const item = await prisma.faqItem.update({
      where: { id },
      data: {
        question: data.question,
        answer: data.answer,
        category: data.category,
        order: data.order,
        status: data.status,
      },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'update',
      entityType: 'FaqItem',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
      diffJson: { before: existing, after: item },
    });

    reply.send(item);
  });

  /**
   * DELETE /admin/faq/:id
   * Soft delete FAQ item
   */
  fastify.delete('/admin/faq/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };

    const item = await prisma.faqItem.findUnique({
      where: { id },
    });

    if (!item) {
      reply.code(404).send({ error: 'FAQ item not found' });
      return;
    }

    // Soft delete
    await prisma.faqItem.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'delete',
      entityType: 'FaqItem',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({ success: true });
  });

  /**
   * PUT /admin/faq/reorder
   * Reorder FAQ items
   */
  fastify.put('/admin/faq/reorder', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const body = FaqItemReorderSchema.safeParse(request.body);
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    // Update all items in transaction
    await prisma.$transaction(
      body.data.items.map((item) =>
        prisma.faqItem.update({
          where: { id: item.id },
          data: { order: item.order },
        })
      )
    );

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'reorder',
      entityType: 'FaqItem',
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({ success: true });
  });
}

