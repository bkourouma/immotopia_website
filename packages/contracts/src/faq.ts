import { z } from 'zod';

/**
 * FAQ Status
 */
export const FaqStatusSchema = z.enum(['draft', 'published']);

export type FaqStatus = z.infer<typeof FaqStatusSchema>;

/**
 * FAQ Item Schemas
 */
export const FaqItemCreateSchema = z.object({
  question: z.string().min(1, 'La question est requise').max(500),
  answer: z.string().min(1, 'La réponse est requise'),
  category: z.string().max(100).optional().nullable(),
  order: z.number().int().default(0),
  locale: z.string().default('fr'),
  status: FaqStatusSchema.default('draft'),
});

export type FaqItemCreate = z.infer<typeof FaqItemCreateSchema>;

export const FaqItemUpdateSchema = FaqItemCreateSchema.partial().extend({
  id: z.string().uuid(),
});

export type FaqItemUpdate = z.infer<typeof FaqItemUpdateSchema>;

export const FaqItemResponseSchema = z.object({
  id: z.string().uuid(),
  question: z.string(),
  answer: z.string(),
  category: z.string().nullable(),
  order: z.number().int(),
  locale: z.string(),
  status: FaqStatusSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

export type FaqItemResponse = z.infer<typeof FaqItemResponseSchema>;

/**
 * FAQ List Query
 */
export const FaqItemListQuerySchema = z.object({
  status: FaqStatusSchema.optional(),
  category: z.string().optional(),
  locale: z.string().default('fr'),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(50),
});

export type FaqItemListQuery = z.infer<typeof FaqItemListQuerySchema>;

/**
 * FAQ Reorder Schema
 */
export const FaqItemReorderSchema = z.object({
  items: z.array(z.object({
    id: z.string().uuid(),
    order: z.number().int(),
  })),
});

export type FaqItemReorder = z.infer<typeof FaqItemReorderSchema>;

