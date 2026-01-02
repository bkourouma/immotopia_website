import { z } from 'zod';

/**
 * Blog Post Status
 */
export const BlogPostStatusSchema = z.enum(['draft', 'published', 'scheduled']);

export type BlogPostStatus = z.infer<typeof BlogPostStatusSchema>;

/**
 * Blog Post Schemas
 */
export const BlogPostCreateSchema = z.object({
  title: z.string().min(1, 'Le titre est requis').max(200, 'Le titre est trop long'),
  slug: z.string().min(1, 'Le slug est requis').regex(/^[a-z0-9-]+$/, 'Le slug ne peut contenir que des lettres minuscules, chiffres et tirets'),
  description: z.string().min(1, 'La description est requise').max(500, 'La description est trop longue'),
  content: z.string().min(1, 'Le contenu est requis'),
  status: BlogPostStatusSchema.default('draft'),
  publishedAt: z.string().datetime().optional().nullable(),
  categoryId: z.string().uuid().optional().nullable(),
  author: z.string().max(100).optional().nullable(),
  coverImageId: z.string().uuid().optional().nullable(),
  ogImageId: z.string().uuid().optional().nullable(),
  seoTitle: z.string().max(60).optional().nullable(),
  seoDescription: z.string().max(160).optional().nullable(),
  locale: z.string().default('fr'),
  tagIds: z.array(z.string().uuid()).default([]),
});

export type BlogPostCreate = z.infer<typeof BlogPostCreateSchema>;

export const BlogPostUpdateSchema = BlogPostCreateSchema.partial().extend({
  id: z.string().uuid(),
});

export type BlogPostUpdate = z.infer<typeof BlogPostUpdateSchema>;

export const BlogPostResponseSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  content: z.string(),
  status: BlogPostStatusSchema,
  publishedAt: z.date().nullable(),
  categoryId: z.string().uuid().nullable(),
  author: z.string().nullable(),
  coverImageId: z.string().uuid().nullable(),
  ogImageId: z.string().uuid().nullable(),
  seoTitle: z.string().nullable(),
  seoDescription: z.string().nullable(),
  locale: z.string(),
  readingTime: z.number().int().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  category: z.object({
    id: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
  }).nullable(),
  tags: z.array(z.object({
    id: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
  })),
  coverImage: z.object({
    id: z.string().uuid(),
    url: z.string(),
    altText: z.string().nullable(),
  }).nullable(),
});

export type BlogPostResponse = z.infer<typeof BlogPostResponseSchema>;

/**
 * Blog Category Schemas
 */
export const BlogCategoryCreateSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(100),
  slug: z.string().min(1, 'Le slug est requis').regex(/^[a-z0-9-]+$/),
  description: z.string().max(500).optional().nullable(),
  locale: z.string().default('fr'),
});

export type BlogCategoryCreate = z.infer<typeof BlogCategoryCreateSchema>;

export const BlogCategoryResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  locale: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type BlogCategoryResponse = z.infer<typeof BlogCategoryResponseSchema>;

/**
 * Blog Tag Schemas
 */
export const BlogTagCreateSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(50),
  slug: z.string().min(1, 'Le slug est requis').regex(/^[a-z0-9-]+$/),
  locale: z.string().default('fr'),
});

export type BlogTagCreate = z.infer<typeof BlogTagCreateSchema>;

export const BlogTagResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  locale: z.string(),
  createdAt: z.date(),
});

export type BlogTagResponse = z.infer<typeof BlogTagResponseSchema>;

/**
 * Blog List Query
 */
export const BlogPostListQuerySchema = z.object({
  status: BlogPostStatusSchema.optional(),
  categoryId: z.string().uuid().optional(),
  tagId: z.string().uuid().optional(),
  search: z.string().optional(),
  locale: z.string().default('fr'),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type BlogPostListQuery = z.infer<typeof BlogPostListQuerySchema>;

