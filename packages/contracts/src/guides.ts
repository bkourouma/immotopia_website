import { z } from 'zod';

/**
 * Guide Status
 */
export const GuideStatusSchema = z.enum(['draft', 'published', 'scheduled']);

export type GuideStatus = z.infer<typeof GuideStatusSchema>;

/**
 * Guide Schemas
 */
export const GuideCreateSchema = z.object({
  title: z.string().min(1, 'Le titre est requis').max(200),
  slug: z.string().min(1, 'Le slug est requis').regex(/^[a-z0-9-]+$/),
  description: z.string().min(1, 'La description est requise').max(500),
  content: z.string().min(1, 'Le contenu est requis'),
  status: GuideStatusSchema.default('draft'),
  publishedAt: z.string().datetime().optional().nullable(),
  category: z.string().max(100).optional().nullable(),
  downloadablePdfMediaId: z.string().uuid().optional().nullable(),
  gatedDownload: z.boolean().default(false),
  seoTitle: z.string().max(60).optional().nullable(),
  seoDescription: z.string().max(160).optional().nullable(),
  locale: z.string().default('fr'),
});

export type GuideCreate = z.infer<typeof GuideCreateSchema>;

export const GuideUpdateSchema = GuideCreateSchema.partial().extend({
  id: z.string().uuid(),
});

export type GuideUpdate = z.infer<typeof GuideUpdateSchema>;

export const GuideResponseSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  content: z.string(),
  status: GuideStatusSchema,
  publishedAt: z.date().nullable(),
  category: z.string().nullable(),
  downloadablePdfMediaId: z.string().uuid().nullable(),
  gatedDownload: z.boolean(),
  seoTitle: z.string().nullable(),
  seoDescription: z.string().nullable(),
  locale: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  pdfMedia: z.object({
    id: z.string().uuid(),
    url: z.string(),
    title: z.string().nullable(),
  }).nullable(),
});

export type GuideResponse = z.infer<typeof GuideResponseSchema>;

/**
 * Guide Lead Capture Schema
 */
export const GuideLeadCaptureSchema = z.object({
  guideId: z.string().uuid(),
  name: z.string().min(1, 'Le nom est requis').max(100),
  email: z.string().email('Email invalide'),
  phone: z.string().max(20).optional().nullable(),
  company: z.string().max(200).optional().nullable(),
  persona: z.enum(['agences-immobilieres', 'promoteurs', 'syndics', 'gestionnaires', 'proprietaires']).optional().nullable(),
});

export type GuideLeadCapture = z.infer<typeof GuideLeadCaptureSchema>;

export const GuideLeadResponseSchema = z.object({
  id: z.string().uuid(),
  guideId: z.string().uuid(),
  name: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  company: z.string().nullable(),
  persona: z.string().nullable(),
  createdAt: z.date(),
  guide: z.object({
    id: z.string().uuid(),
    title: z.string(),
    slug: z.string(),
  }),
});

export type GuideLeadResponse = z.infer<typeof GuideLeadResponseSchema>;

/**
 * Guide List Query
 */
export const GuideListQuerySchema = z.object({
  status: GuideStatusSchema.optional(),
  category: z.string().optional(),
  search: z.string().optional(),
  locale: z.string().default('fr'),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type GuideListQuery = z.infer<typeof GuideListQuerySchema>;



