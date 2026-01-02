import { z } from 'zod';

/**
 * Admin Authentication Schemas
 */
export const AdminLoginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Le mot de passe est requis'),
});

export type AdminLogin = z.infer<typeof AdminLoginSchema>;

export const AdminChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Le mot de passe actuel est requis'),
  newPassword: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
  confirmPassword: z.string().min(1, 'La confirmation est requise'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword'],
});

export type AdminChangePassword = z.infer<typeof AdminChangePasswordSchema>;

export const AdminSessionSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
});

export type AdminSession = z.infer<typeof AdminSessionSchema>;

