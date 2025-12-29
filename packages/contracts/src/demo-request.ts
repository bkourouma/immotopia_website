import { z } from 'zod';

/**
 * SchÃ©ma Zod pour la validation du formulaire de demande de dÃ©mo
 */
export const DemoRequestSchema = z.object({
  nom: z
    .string({ required_error: 'Le nom est requis' })
    .min(2, 'Le nom doit contenir au moins 2 caractÃ¨res')
    .max(100, 'Le nom est trop long (maximum 100 caractÃ¨res)')
    .trim(),
  email: z
    .string({ required_error: 'L\'email est requis' })
    .email('Veuillez entrer une adresse email valide (exemple: nom@exemple.com)')
    .toLowerCase()
    .trim(),
  telephone: z
    .string({ required_error: 'Le tÃ©lÃ©phone est requis' })
    .trim()
    .refine(
      (val) => {
        // Remove spaces and dashes for validation
        const cleaned = val.replace(/[\s\-]/g, '');
        // Must start with +225
        return cleaned.startsWith('+225');
      },
      { message: 'Le numÃ©ro de tÃ©lÃ©phone doit commencer par +225' }
    )
    .refine(
      (val) => {
        // Remove spaces, dashes, and + for length check
        const cleaned = val.replace(/[\s\-\+]/g, '');
        // Should be 225 (country code) + 10 digits = 13 digits total
        return cleaned.length === 13 && /^\d+$/.test(cleaned);
      },
      { message: 'Le numÃ©ro de tÃ©lÃ©phone doit contenir 10 chiffres aprÃ¨s +225' }
    )
    .refine(
      (val) => {
        // Allow only +, digits, spaces, and dashes, must start with +225
        return /^\+225[\s\-]*[\d\s\-]+$/.test(val);
      },
      { message: 'Le numÃ©ro de tÃ©lÃ©phone contient des caractÃ¨res invalides' }
    ),
  entreprise: z
    .string()
    .max(200, 'Le nom de l\'entreprise est trop long (maximum 200 caractÃ¨res)')
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
  persona: z.enum(
    ['agences-immobilieres', 'promoteurs', 'syndics', 'gestionnaires', 'proprietaires'],
    {
      required_error: 'Veuillez sÃ©lectionner un profil',
      invalid_type_error: 'Veuillez sÃ©lectionner un profil valide',
    }
  ),
  message: z
    .string()
    .max(2000, 'Le message est trop long (maximum 2000 caractÃ¨res)')
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
});

export type DemoRequest = z.infer<typeof DemoRequestSchema>;

