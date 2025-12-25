import { z } from 'zod';

/**
 * Schéma Zod pour la validation du formulaire de demande de démo
 */
export const DemoRequestSchema = z.object({
  nom: z
    .string({ required_error: 'Le nom est requis' })
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long (maximum 100 caractères)')
    .trim(),
  email: z
    .string({ required_error: 'L\'email est requis' })
    .email('Veuillez entrer une adresse email valide (exemple: nom@exemple.com)')
    .toLowerCase()
    .trim(),
  telephone: z
    .string({ required_error: 'Le téléphone est requis' })
    .min(10, 'Le numéro de téléphone doit contenir au moins 10 caractères')
    .max(20, 'Le numéro de téléphone est trop long')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Le numéro de téléphone contient des caractères invalides')
    .trim(),
  entreprise: z
    .string()
    .max(200, 'Le nom de l\'entreprise est trop long (maximum 200 caractères)')
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
  persona: z.enum(
    ['agences-immobilieres', 'promoteurs', 'syndics', 'gestionnaires', 'proprietaires'],
    {
      required_error: 'Veuillez sélectionner un profil',
      invalid_type_error: 'Veuillez sélectionner un profil valide',
    }
  ),
  message: z
    .string()
    .max(2000, 'Le message est trop long (maximum 2000 caractères)')
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
});

export type DemoRequest = z.infer<typeof DemoRequestSchema>;
