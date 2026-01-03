import type { FastifyRequest, FastifyReply } from 'fastify';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetAt: number;
  };
}

const store: RateLimitStore = {};

/**
 * Simple in-memory rate limiter
 * For production, consider using Redis
 */
export function createRateLimiter(
  maxRequests: number,
  windowMs: number
) {
  return (request: FastifyRequest, reply: FastifyReply): boolean => {
    const key = request.ip || 'unknown';
    const now = Date.now();

    // Clean up expired entries
    Object.keys(store).forEach((k) => {
      if (store[k].resetAt < now) {
        delete store[k];
      }
    });

    const entry = store[key];

    if (!entry || entry.resetAt < now) {
      // New window
      store[key] = {
        count: 1,
        resetAt: now + windowMs,
      };
      return true;
    }

    if (entry.count >= maxRequests) {
      reply.code(429).send({
        error: 'Too many requests',
        retryAfter: Math.ceil((entry.resetAt - now) / 1000),
      });
      return false;
    }

    entry.count++;
    return true;
  };
}



