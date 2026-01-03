import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthenticatedRequest } from '../../middleware/auth.js';
import { verifyCsrfHeader } from '../../middleware/csrf.js';
import { createAuditLog } from '../../utils/audit-log.js';
import { uploadFile } from '../../utils/media.js';
import { MediaListQuerySchema } from '@monorepo/contracts';
import multipart from '@fastify/multipart';

const prisma = new PrismaClient();

export async function mediaRoutes(fastify: FastifyInstance) {
  // Register multipart plugin
  await fastify.register(multipart, {
    limits: {
      fileSize: 50 * 1024 * 1024, // 50MB
    },
  });

  /**
   * GET /admin/media
   * List media with filters
   */
  fastify.get('/admin/media', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const query = MediaListQuerySchema.safeParse(request.query);
    if (!query.success) {
      reply.code(400).send({ error: 'Invalid input', details: query.error.errors });
      return;
    }

    const { type, search, page, limit } = query.data;
    const skip = (page - 1) * limit;

    const where: any = {
      deletedAt: null,
    };

    if (type) {
      where.type = type;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { altText: { contains: search, mode: 'insensitive' } },
        { url: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [media, total] = await Promise.all([
      prisma.media.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.media.count({ where }),
    ]);

    reply.send({
      media,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  });

  /**
   * GET /admin/media/:id
   * Get single media
   */
  fastify.get('/admin/media/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const { id } = request.params as { id: string };

    const media = await prisma.media.findUnique({
      where: { id },
    });

    if (!media) {
      reply.code(404).send({ error: 'Media not found' });
      return;
    }

    reply.send(media);
  });

  /**
   * POST /admin/media/upload
   * Upload media file
   */
  fastify.post('/admin/media/upload', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    try {
      const data = await request.file();
      if (!data) {
        reply.code(400).send({ error: 'No file uploaded' });
        return;
      }

      const buffer = await data.toBuffer();
      const altText = (request.body as any)?.altText || null;
      const title = (request.body as any)?.title || null;

      // Upload file
      const uploadResult = await uploadFile({
        data: buffer,
        filename: data.filename,
        mimetype: data.mimetype,
      });

      // Save to database
      const media = await prisma.media.create({
        data: {
          url: uploadResult.url,
          storageKey: uploadResult.storageKey,
          type: uploadResult.type,
          mimeType: uploadResult.mimeType,
          size: uploadResult.size,
          width: uploadResult.width || null,
          height: uploadResult.height || null,
          altText: altText || null,
          title: title || null,
        },
      });

      // Audit log
      await createAuditLog({
        adminUserId: request.adminUser?.id,
        action: 'upload',
        entityType: 'Media',
        entityId: media.id,
        ip: request.ip,
        userAgent: request.headers['user-agent'] || undefined,
      });

      reply.code(201).send(media);
    } catch (error: any) {
      reply.code(400).send({ error: error.message || 'Upload failed' });
    }
  });

  /**
   * PUT /admin/media/:id
   * Update media metadata
   */
  fastify.put('/admin/media/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };
    const body = request.body as { altText?: string; title?: string };

    const existing = await prisma.media.findUnique({
      where: { id },
    });

    if (!existing) {
      reply.code(404).send({ error: 'Media not found' });
      return;
    }

    const media = await prisma.media.update({
      where: { id },
      data: {
        altText: body.altText !== undefined ? body.altText : existing.altText,
        title: body.title !== undefined ? body.title : existing.title,
      },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'update',
      entityType: 'Media',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send(media);
  });

  /**
   * DELETE /admin/media/:id
   * Soft delete media
   */
  fastify.delete('/admin/media/:id', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { id } = request.params as { id: string };

    const media = await prisma.media.findUnique({
      where: { id },
    });

    if (!media) {
      reply.code(404).send({ error: 'Media not found' });
      return;
    }

    // Soft delete
    await prisma.media.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'delete',
      entityType: 'Media',
      entityId: id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({ success: true });
  });
}



