import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

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
   * POST /demo-request
   * Submit contact/demo request form
   * Note: Nginx strips /api prefix, so this is registered as /demo-request
   */
  fastify.post('/demo-request', async (request, reply) => {
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

      // TODO: Send email notification
      // TODO: Integrate with CRM (HubSpot/Pipedrive)

      return reply.status(200).send({
        success: true,
        message: 'Contact request submitted successfully',
        id: contactRequest.id,
      });
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({
        message: 'Internal server error',
        error: 'Failed to process contact request',
      });
    }
  });
}

