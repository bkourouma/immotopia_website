import { z } from 'zod';

/**
 * Schéma Zod pour la validation du formulaire de demande de démo
 */
export const DemoRequestSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  telephone: z.string().min(10, 'Le numéro de téléphone doit contenir au moins 10 caractères'),
  entreprise: z.string().optional(),
  persona: z.enum(
    ['agences-immobilieres', 'promoteurs', 'syndics', 'gestionnaires', 'proprietaires'],
    {
      errorMap: () => ({ message: 'Veuillez sélectionner un profil' }),
    }
  ),
  message: z.string().optional(),
});

export type DemoRequest = z.infer<typeof DemoRequestSchema>;
