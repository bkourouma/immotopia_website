import { randomBytes, createHash } from 'crypto';
import type { FastifyRequest, FastifyReply } from 'fastify';

const CSRF_COOKIE_NAME = 'csrf_token';
const CSRF_SECRET = process.env.CSRF_SECRET || 'change-me-in-production';

/**
 * Generate a CSRF token
 */
export function generateCsrfToken(): string {
  return randomBytes(32).toString('hex');
}

/**
 * Sign a CSRF token
 */
export function signCsrfToken(token: string): string {
  const hmac = createHash('sha256');
  hmac.update(token + CSRF_SECRET);
  const signature = hmac.digest('hex');
  return `${token}.${signature}`;
}

/**
 * Verify a CSRF token
 */
export function verifyCsrfToken(signedValue: string): string | null {
  const [token, signature] = signedValue.split('.');
  if (!token || !signature) return null;

  const hmac = createHash('sha256');
  hmac.update(token + CSRF_SECRET);
  const expectedSignature = hmac.digest('hex');

  if (signature !== expectedSignature) return null;
  return token;
}

/**
 * Set CSRF token cookie
 */
export function setCsrfCookie(reply: FastifyReply, token: string): void {
  const signedValue = signCsrfToken(token);
  reply.setCookie(CSRF_COOKIE_NAME, signedValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60, // 1 hour
    path: '/',
  });
}

/**
 * Get CSRF token from cookie
 */
export function getCsrfToken(request: FastifyRequest): string | null {
  const cookie = request.cookies[CSRF_COOKIE_NAME];
  if (!cookie) return null;
  return verifyCsrfToken(cookie);
}

/**
 * Verify CSRF token from header matches cookie
 */
export function verifyCsrfHeader(
  request: FastifyRequest,
  reply: FastifyReply
): boolean {
  const cookieToken = getCsrfToken(request);
  const headerToken = (request.headers['x-csrf-token'] as string) || '';

  if (!cookieToken || !headerToken) {
    reply.code(403).send({ error: 'CSRF token missing' });
    return false;
  }

  if (cookieToken !== headerToken) {
    reply.code(403).send({ error: 'CSRF token mismatch' });
    return false;
  }

  return true;
}



