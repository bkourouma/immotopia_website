import { z } from 'zod';

/**
 * Site Settings Schema
 */
export const SiteSettingUpdateSchema = z.object({
  siteTitleTemplate: z.string().max(200).optional().nullable(),
  defaultOgImageId: z.string().uuid().optional().nullable(),
  ga4Id: z.string().max(50).optional().nullable(),
  clarityId: z.string().max(50).optional().nullable(),
  canonicalBaseUrl: z.string().url().optional().nullable(),
});

export type SiteSettingUpdate = z.infer<typeof SiteSettingUpdateSchema>;

export const SiteSettingResponseSchema = z.object({
  siteTitleTemplate: z.string().nullable(),
  defaultOgImageId: z.string().uuid().nullable(),
  ga4Id: z.string().nullable(),
  clarityId: z.string().nullable(),
  canonicalBaseUrl: z.string().nullable(),
  defaultOgImage: z.object({
    id: z.string().uuid(),
    url: z.string(),
  }).nullable(),
});

export type SiteSettingResponse = z.infer<typeof SiteSettingResponseSchema>;

/**
 * Page SEO Schema
 */
export const PageSeoUpdateSchema = z.object({
  path: z.string(),
  seoTitle: z.string().max(60).optional().nullable(),
  seoDescription: z.string().max(160).optional().nullable(),
  ogImageId: z.string().uuid().optional().nullable(),
});

export type PageSeoUpdate = z.infer<typeof PageSeoUpdateSchema>;

export const PageSeoResponseSchema = z.object({
  path: z.string(),
  seoTitle: z.string().nullable(),
  seoDescription: z.string().nullable(),
  ogImageId: z.string().uuid().nullable(),
  ogImage: z.object({
    id: z.string().uuid(),
    url: z.string(),
  }).nullable(),
});

export type PageSeoResponse = z.infer<typeof PageSeoResponseSchema>;



