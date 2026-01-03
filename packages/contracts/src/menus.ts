import { z } from 'zod';

/**
 * Menu Item Schemas
 */
export const MenuItemCreateSchema = z.object({
  label: z.string().min(1, 'Le label est requis').max(100),
  href: z.string().min(1, 'Le href est requis'),
  order: z.number().int().default(0),
  parentId: z.string().uuid().optional().nullable(),
  external: z.boolean().default(false),
});

export type MenuItemCreate = z.infer<typeof MenuItemCreateSchema>;

export const MenuItemUpdateSchema = MenuItemCreateSchema.partial().extend({
  id: z.string().uuid(),
});

export type MenuItemUpdate = z.infer<typeof MenuItemUpdateSchema>;

export const MenuItemResponseSchema = z.object({
  id: z.string().uuid(),
  menuId: z.string().uuid(),
  label: z.string(),
  href: z.string(),
  order: z.number().int(),
  parentId: z.string().uuid().nullable(),
  external: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  children: z.array(z.any()).optional(), // Recursive type
});

export type MenuItemResponse = z.infer<typeof MenuItemResponseSchema>;

/**
 * Menu Schemas
 */
export const MenuResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  locale: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  items: z.array(MenuItemResponseSchema),
});

export type MenuResponse = z.infer<typeof MenuResponseSchema>;

/**
 * Menu Reorder Schema
 */
export const MenuItemReorderSchema = z.object({
  items: z.array(z.object({
    id: z.string().uuid(),
    order: z.number().int(),
    parentId: z.string().uuid().optional().nullable(),
  })),
});

export type MenuItemReorder = z.infer<typeof MenuItemReorderSchema>;



