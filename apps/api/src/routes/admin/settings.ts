import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { requireAuth, AuthenticatedRequest } from '../../middleware/auth.js';
import { verifyCsrfHeader } from '../../middleware/csrf.js';
import { createAuditLog } from '../../utils/audit-log.js';
import { SiteSettingUpdateSchema, PageSeoUpdateSchema } from '@monorepo/contracts';

const prisma = new PrismaClient();

export async function settingsRoutes(fastify: FastifyInstance) {
  /**
   * GET /admin/settings/seo
   * Get global SEO settings
   */
  fastify.get('/admin/settings/seo', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const settings = await prisma.siteSetting.findMany({
      where: {
        key: {
          in: ['siteTitleTemplate', 'defaultOgImageId', 'ga4Id', 'clarityId', 'canonicalBaseUrl'],
        },
      },
      include: {
        ogImage: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    const result: any = {
      siteTitleTemplate: null,
      defaultOgImageId: null,
      ga4Id: null,
      clarityId: null,
      canonicalBaseUrl: null,
      defaultOgImage: null,
    };

    settings.forEach((setting) => {
      if (setting.key === 'defaultOgImageId' && setting.ogImage) {
        result.defaultOgImage = setting.ogImage;
      }
      result[setting.key] = setting.value;
    });

    reply.send(result);
  });

  /**
   * PUT /admin/settings/seo
   * Update global SEO settings
   */
  fastify.put('/admin/settings/seo', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const body = SiteSettingUpdateSchema.safeParse(request.body);
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Update or create each setting
    const updates = [];
    if (data.siteTitleTemplate !== undefined) {
      updates.push(
        prisma.siteSetting.upsert({
          where: { key: 'siteTitleTemplate' },
          update: { value: data.siteTitleTemplate || '' },
          create: { key: 'siteTitleTemplate', value: data.siteTitleTemplate || '' },
        })
      );
    }
    if (data.defaultOgImageId !== undefined) {
      updates.push(
        prisma.siteSetting.upsert({
          where: { key: 'defaultOgImageId' },
          update: { value: data.defaultOgImageId || '', ogImageId: data.defaultOgImageId || null },
          create: { key: 'defaultOgImageId', value: data.defaultOgImageId || '', ogImageId: data.defaultOgImageId || null },
        })
      );
    }
    if (data.ga4Id !== undefined) {
      updates.push(
        prisma.siteSetting.upsert({
          where: { key: 'ga4Id' },
          update: { value: data.ga4Id || '' },
          create: { key: 'ga4Id', value: data.ga4Id || '' },
        })
      );
    }
    if (data.clarityId !== undefined) {
      updates.push(
        prisma.siteSetting.upsert({
          where: { key: 'clarityId' },
          update: { value: data.clarityId || '' },
          create: { key: 'clarityId', value: data.clarityId || '' },
        })
      );
    }
    if (data.canonicalBaseUrl !== undefined) {
      updates.push(
        prisma.siteSetting.upsert({
          where: { key: 'canonicalBaseUrl' },
          update: { value: data.canonicalBaseUrl || '' },
          create: { key: 'canonicalBaseUrl', value: data.canonicalBaseUrl || '' },
        })
      );
    }

    await Promise.all(updates);

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'update',
      entityType: 'SiteSetting',
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({ success: true });
  });

  /**
   * GET /admin/pages/:path/seo
   * Get page SEO settings
   */
  fastify.get('/admin/pages/:path/seo', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const { path } = request.params as { path: string };

    const page = await prisma.page.findUnique({
      where: { path },
      include: {
        ogImage: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    if (!page) {
      reply.code(404).send({ error: 'Page not found' });
      return;
    }

    reply.send({
      path: page.path,
      seoTitle: page.seoTitle,
      seoDescription: page.seoDescription,
      ogImageId: page.ogImageId,
      ogImage: page.ogImage,
    });
  });

  /**
   * PUT /admin/pages/:path/seo
   * Update page SEO settings
   */
  fastify.put('/admin/pages/:path/seo', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!verifyCsrfHeader(request, reply)) return;

    const { path } = request.params as { path: string };
    const body = PageSeoUpdateSchema.safeParse({ ...(request.body as any), path });

    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const data = body.data;

    // Upsert page
    const page = await prisma.page.upsert({
      where: { path },
      update: {
        seoTitle: data.seoTitle || null,
        seoDescription: data.seoDescription || null,
        ogImageId: data.ogImageId || null,
      },
      create: {
        path,
        seoTitle: data.seoTitle || null,
        seoDescription: data.seoDescription || null,
        ogImageId: data.ogImageId || null,
        locale: 'fr',
      },
      include: {
        ogImage: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    // Audit log
    await createAuditLog({
      adminUserId: request.adminUser?.id,
      action: 'update',
      entityType: 'Page',
      entityId: page.id,
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({
      path: page.path,
      seoTitle: page.seoTitle,
      seoDescription: page.seoDescription,
      ogImageId: page.ogImageId,
      ogImage: page.ogImage,
    });
  });
}

