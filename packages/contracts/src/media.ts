import { z } from 'zod';

/**
 * Media Type
 */
export const MediaTypeSchema = z.enum(['image', 'pdf']);

export type MediaType = z.infer<typeof MediaTypeSchema>;

/**
 * Media Upload Schema (multipart/form-data)
 */
export const MediaUploadSchema = z.object({
  file: z.any(), // File object from multipart
  altText: z.string().max(200).optional().nullable(),
  title: z.string().max(200).optional().nullable(),
});

export type MediaUpload = z.infer<typeof MediaUploadSchema>;

/**
 * Media Response Schema
 */
export const MediaResponseSchema = z.object({
  id: z.string().uuid(),
  url: z.string(),
  storageKey: z.string().nullable(),
  type: MediaTypeSchema,
  mimeType: z.string().nullable(),
  size: z.number().int(),
  width: z.number().int().nullable(),
  height: z.number().int().nullable(),
  altText: z.string().nullable(),
  title: z.string().nullable(),
  createdAt: z.date(),
  deletedAt: z.date().nullable(),
});

export type MediaResponse = z.infer<typeof MediaResponseSchema>;

/**
 * Media List Query
 */
export const MediaListQuerySchema = z.object({
  type: MediaTypeSchema.optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type MediaListQuery = z.infer<typeof MediaListQuerySchema>;

