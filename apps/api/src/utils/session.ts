import { randomBytes, createHash } from 'crypto';
import type { FastifyRequest, FastifyReply } from 'fastify';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Generate a secure random session token
 */
export function generateSessionToken(): string {
  return randomBytes(32).toString('hex');
}

/**
 * Create a signed session cookie value
 */
export function signSessionToken(token: string, secret: string): string {
  const hmac = createHash('sha256');
  hmac.update(token + secret);
  const signature = hmac.digest('hex');
  return `${token}.${signature}`;
}

/**
 * Verify and extract token from signed cookie value
 */
export function verifySessionToken(signedValue: string, secret: string): string | null {
  const [token, signature] = signedValue.split('.');
  if (!token || !signature) return null;

  const hmac = createHash('sha256');
  hmac.update(token + secret);
  const expectedSignature = hmac.digest('hex');

  if (signature !== expectedSignature) return null;
  return token;
}

/**
 * Set session cookie
 */
export function setSessionCookie(
  reply: FastifyReply,
  token: string,
  secret: string
): void {
  const signedValue = signSessionToken(token, secret);
  reply.setCookie(SESSION_COOKIE_NAME, signedValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: SESSION_DURATION_MS / 1000,
    path: '/',
  });
}

/**
 * Get session token from cookie
 */
export function getSessionToken(
  request: FastifyRequest,
  secret: string
): string | null {
  const cookie = request.cookies[SESSION_COOKIE_NAME];
  if (!cookie) return null;
  return verifySessionToken(cookie, secret);
}

/**
 * Clear session cookie
 */
export function clearSessionCookie(reply: FastifyReply): void {
  reply.clearCookie(SESSION_COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });
}

