import type { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { getSessionToken } from '../utils/session.js';

const prisma = new PrismaClient();
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-me-in-production';

export interface AuthenticatedRequest extends FastifyRequest {
  adminUser?: {
    id: string;
    email: string;
  };
}

/**
 * Auth middleware to protect admin routes
 */
export async function requireAuth(
  request: AuthenticatedRequest,
  reply: FastifyReply
): Promise<void> {
  const token = getSessionToken(request, SESSION_SECRET);
  if (!token) {
    reply.code(401).send({ error: 'Unauthorized' });
    return;
  }

  // Find session in database
  const session = await prisma.session.findFirst({
    where: {
      token,
      expiresAt: { gt: new Date() },
    },
    include: {
      adminUser: true,
    },
  });

  if (!session || !session.adminUser) {
    reply.code(401).send({ error: 'Unauthorized' });
    return;
  }

  // Attach admin user to request
  request.adminUser = {
    id: session.adminUser.id,
    email: session.adminUser.email,
  };
}

/**
 * Optional auth - attaches user if session exists, but doesn't require it
 */
export async function optionalAuth(
  request: AuthenticatedRequest,
  reply: FastifyReply
): Promise<void> {
  const token = getSessionToken(request, SESSION_SECRET);
  if (!token) return;

  const session = await prisma.session.findFirst({
    where: {
      token,
      expiresAt: { gt: new Date() },
    },
    include: {
      adminUser: true,
    },
  });

  if (session?.adminUser) {
    request.adminUser = {
      id: session.adminUser.id,
      email: session.adminUser.email,
    };
  }
}

