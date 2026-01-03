import Fastify from 'fastify';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import { authRoutes } from './routes/admin/auth.js';
import { blogRoutes } from './routes/admin/blog.js';
import { guidesRoutes } from './routes/admin/guides.js';
import { faqRoutes } from './routes/admin/faq.js';
import { menusRoutes } from './routes/admin/menus.js';
import { mediaRoutes } from './routes/admin/media.js';
import { settingsRoutes } from './routes/admin/settings.js';
import { csrfRoutes } from './routes/admin/csrf.js';
import { publicBlogRoutes } from './routes/public/blog.js';
import { publicGuidesRoutes } from './routes/public/guides.js';
import { publicFaqRoutes } from './routes/public/faq.js';
import { publicContactRoutes } from './routes/public/contact.js';

const fastify = Fastify({
  logger: true,
});

// Start server
const start = async () => {
  try {
    // Register plugins
    await fastify.register(cookie);
    
    // CORS configuration - Support for multiple origins (Astro + Vite)
    const allowedOrigins = [
      process.env.PUBLIC_SITE_URL || 'http://localhost:4321', // Astro dev server
      process.env.ADMIN_PANEL_URL || 'http://localhost:5173', // Vite dev server
      process.env.FRONTEND_URL || 'http://localhost:3003', // Legacy Next.js (temporary)
    ].filter(Boolean);
    
    await fastify.register(cors, {
      origin: (origin, callback) => {
        // Allow requests with no origin (mobile apps, Postman, etc.)
        if (!origin) {
          return callback(null, true);
        }
        
        // Check if origin is in allowed list
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        
        // In development, allow all origins
        if (process.env.NODE_ENV === 'development') {
          return callback(null, true);
        }
        
        // Reject origin
        callback(new Error('Not allowed by CORS'), false);
      },
      credentials: true,
    });

    // Health check endpoint
    fastify.get('/health', async () => {
      return { status: 'ok', timestamp: new Date().toISOString() };
    });

    // Register admin routes
    await fastify.register(authRoutes);
    await fastify.register(blogRoutes);
    await fastify.register(guidesRoutes);
    await fastify.register(faqRoutes);
    await fastify.register(menusRoutes);
    await fastify.register(mediaRoutes);
    await fastify.register(settingsRoutes);
    await fastify.register(csrfRoutes);

    // Public routes (no auth required)
    await fastify.register(publicBlogRoutes);
    await fastify.register(publicGuidesRoutes);
    await fastify.register(publicFaqRoutes);
    await fastify.register(publicContactRoutes);

    const port = Number(process.env.PORT) || 3002;
    const host = process.env.HOST || '0.0.0.0';
    
    await fastify.listen({ port, host });
    console.log(`🚀 API server listening on http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

