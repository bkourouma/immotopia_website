import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { sendContactNotificationEmail, isEmailConfigured } from '../../utils/email.js';

const prisma = new PrismaClient();

// Schema for contact form submission
const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  persona: z.string().optional(),
});

export async function publicContactRoutes(fastify: FastifyInstance) {
  /**
   * POST /contact
   * Submit contact/demo request form (alias for /demo-request)
   * Note: Nginx strips /api prefix, so this is registered as /contact
   */
  fastify.post('/contact', async (request, reply) => {
    // Reuse the same handler logic
    return handleContactRequest(fastify, request, reply);
  });

  /**
   * POST /demo-request
   * Submit contact/demo request form
   * Note: Nginx strips /api prefix, so this is registered as /demo-request
   */
  fastify.post('/demo-request', async (request, reply) => {
    return handleContactRequest(fastify, request, reply);
  });
}

async function handleContactRequest(fastify: FastifyInstance, request: any, reply: any) {
    try {
      const body = request.body as any;
      
      // Validate input
      const validation = ContactFormSchema.safeParse(body);
      if (!validation.success) {
        return reply.status(400).send({
          message: 'Validation error',
          error: 'Invalid input',
          details: validation.error.errors,
        });
      }

      const data = validation.data;

      // Store in database
      const contactRequest = await prisma.contactRequest.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          message: data.message || null,
          persona: data.persona || null,
        },
      });

      // Send email notification (non-blocking)
      let emailSent = false;
      if (isEmailConfigured()) {
        try {
          await sendContactNotificationEmail(data);
          emailSent = true;
          fastify.log.info('✅ Contact notification email sent successfully');
        } catch (emailError) {
          // Log error but don't fail the request
          fastify.log.error('❌ Failed to send contact notification email:', emailError);
        }
      } else {
        fastify.log.warn('⚠️ Email not configured, skipping email notification');
      }

      // TODO: Integrate with CRM (HubSpot/Pipedrive)

      return reply.status(200).send({
        success: true,
        message: 'Contact request submitted successfully',
        id: contactRequest.id,
        emailSent,
      });
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({
        message: 'Internal server error',
        error: 'Failed to process contact request',
      });
    }
}

