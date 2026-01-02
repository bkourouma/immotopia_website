import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { hashPassword, verifyPassword } from '../../utils/password.js';
import { generateSessionToken, setSessionCookie, clearSessionCookie } from '../../utils/session.js';
import { createAuditLog } from '../../utils/audit-log.js';
import { createRateLimiter } from '../../middleware/rate-limit.js';
import { AdminLoginSchema } from '@monorepo/contracts';
import { requireAuth, AuthenticatedRequest } from '../../middleware/auth.js';

const prisma = new PrismaClient();
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-me-in-production';

// Rate limiter for login (5 attempts per 15 minutes)
const loginRateLimit = createRateLimiter(5, 15 * 60 * 1000);

export async function authRoutes(fastify: FastifyInstance) {
  // Cookie plugin is already registered in index.ts

  /**
   * POST /admin/login
   * Admin login
   */
  fastify.post('/admin/login', async (request, reply) => {
    // Rate limiting
    if (!loginRateLimit(request, reply)) {
      return;
    }

    // Validate input
    const body = AdminLoginSchema.safeParse(request.body);
    if (!body.success) {
      reply.code(400).send({ error: 'Invalid input', details: body.error.errors });
      return;
    }

    const { email, password } = body.data;

    // Find admin user
    const adminUser = await prisma.adminUser.findUnique({
      where: { email },
    });

    if (!adminUser) {
      // Don't reveal if user exists
      await new Promise((resolve) => setTimeout(resolve, 500)); // Delay to prevent timing attacks
      reply.code(401).send({ error: 'Invalid credentials' });
      return;
    }

    // Verify password
    const isValid = await verifyPassword(password, adminUser.passwordHash);
    if (!isValid) {
      await createAuditLog({
        action: 'login_failed',
        ip: request.ip,
        userAgent: request.headers['user-agent'] || undefined,
      });
      reply.code(401).send({ error: 'Invalid credentials' });
      return;
    }

    // Create session
    const token = generateSessionToken();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    await prisma.session.create({
      data: {
        adminUserId: adminUser.id,
        token,
        expiresAt,
        ip: request.ip || undefined,
        userAgent: request.headers['user-agent'] || undefined,
      },
    });

    // Set session cookie
    setSessionCookie(reply, token, SESSION_SECRET);

    // Audit log
    await createAuditLog({
      adminUserId: adminUser.id,
      action: 'login',
      ip: request.ip,
      userAgent: request.headers['user-agent'] || undefined,
    });

    reply.send({
      success: true,
      user: {
        id: adminUser.id,
        email: adminUser.email,
      },
    });
  });

  /**
   * POST /admin/logout
   * Admin logout
   */
  fastify.post('/admin/logout', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    const token = require('../../utils/session.js').getSessionToken(request, SESSION_SECRET);
    if (token) {
      // Delete session from database
      await prisma.session.deleteMany({
        where: { token },
      });

      // Audit log
      await createAuditLog({
        adminUserId: request.adminUser?.id,
        action: 'logout',
        ip: request.ip,
        userAgent: request.headers['user-agent'] || undefined,
      });
    }

    clearSessionCookie(reply);
    reply.send({ success: true });
  });

  /**
   * GET /admin/me
   * Get current admin user
   */
  fastify.get('/admin/me', { preHandler: requireAuth }, async (request: AuthenticatedRequest, reply) => {
    if (!request.adminUser) {
      reply.code(401).send({ error: 'Unauthorized' });
      return;
    }

    const adminUser = await prisma.adminUser.findUnique({
      where: { id: request.adminUser.id },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });

    reply.send(adminUser);
  });
}

