import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthenticatedRequest } from '../../middleware/auth.js';
import { verifyCsrfHeader } from '../../middleware/csrf.js';
import { createAuditLog } from '../../utils/audit-log.js';
import {
  MenuItemCreateSchema,
  MenuItemUpdateSchema,
  MenuItemReorderSchema,
} from '@monorepo/contracts';

const prisma = new PrismaClient();

export async function menusRoutes(fastify: FastifyInstance) {
  /**
   * GET /admin/menus
   * List all menus
   */
  fastify.get('/admin/menus', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const menus = await prisma.menu.findMany({
      include: {
        items: {
          where: { deletedAt: null },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { name: 'asc' },
    });

    reply.send(menus);
  });

  /**
   * GET /admin/menus/:id
   * Get single menu with items
   */
  fastify.get('/admin/menus/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const { id } = request.params as { id: string };

    const menu = await prisma.menu.findUnique({
      where: { id },
      include: {
        items: {
          where: { deletedAt: null },
          orderBy: { order: 'asc' },
          include: {
            children: {
              where: { deletedAt: null },
              orderBy: { order: 'asc' },
            },
          },
        },
      },
    });

    if (!menu) {
      reply.code(404).send({ error: 'Menu not found' });
      return;
    }

    reply.send(menu);
  });

  /**
   * POST /admin/menus/:id/items
   * Create menu item
   */
  fastify.post('/admin/menus/:id/items', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id: menuId } = request.params as { id: string };
    const body = MenuItemCreateSchema.safeParse(request.body);

    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Get max order for auto-increment
    const maxOrder = await prisma.menuItem.findFirst({
      where: { menuId, parentId: data.parentId || null },
      orderBy: { order: 'desc' },
      select: { order: true },
    });

    const order = data.order !== undefined ? data.order : (maxOrder?.order ?? 0) + 1;

    const item = await prisma.menuItem.create({
      data: {
        menuId,
        label: data.label,
        href: data.href,
        order,
        parentId: data.parentId || null,
        external: data.external,
      },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'create',
      entityType: 'MenuItem',
      entityId: item.id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.code(201).send(item);
  });

  /**
   * PUT /admin/menus/items/:id
   * Update menu item
   */
  fastify.put('/admin/menus/items/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };
    const body = MenuItemUpdateSchema.safeParse({ ...request.body, id });

    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Check if item exists
    const existing = await prisma.menuItem.findUnique({
      where: { id },
    });

    if (!existing) {
      reply.code(404).send({ error: 'Menu item not found' });
      return;
    }

    // Update item
    const item = await prisma.menuItem.update({
      where: { id },
      data: {
        label: data.label,
        href: data.href,
        order: data.order,
        parentId: data.parentId,
        external: data.external,
      },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'update',
      entityType: 'MenuItem',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
      diffJson: { before: existing, after: item },
    });

    reply.send(item);
  });

  /**
   * DELETE /admin/menus/items/:id
   * Soft delete menu item
   */
  fastify.delete('/admin/menus/items/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };

    const item = await prisma.menuItem.findUnique({
      where: { id },
    });

    if (!item) {
      reply.code(404).send({ error: 'Menu item not found' });
      return;
    }

    // Soft delete
    await prisma.menuItem.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'delete',
      entityType: 'MenuItem',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({ success: true });
  });

  /**
   * PUT /admin/menus/:id/reorder
   * Reorder menu items
   */
  fastify.put('/admin/menus/:id/reorder', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id: menuId } = request.params as { id: string };
    const body = MenuItemReorderSchema.safeParse(request.body);

    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    // Update all items in transaction
    await prisma.$transaction(
      body.data.items.map((item) =>
        prisma.menuItem.update({
          where: { id: item.id },
          data: {
            order: item.order,
            parentId: item.parentId || null,
          },
        })
      )
    );

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'reorder',
      entityType: 'Menu',
      entityId: menuId,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({ success: true });
  });
}

