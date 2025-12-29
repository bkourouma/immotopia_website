'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DemoRequestSchema, type DemoRequest } from '@monorepo/contracts';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { FormMessage } from '@/components/ui/form-message';
import { cn } from '@/lib/utils';
import { trackFormSubmission } from '@/lib/analytics';

interface DemoRequestFormProps {
  defaultPersona?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function DemoRequestForm({
  defaultPersona,
  onSuccess,
  className,
}: DemoRequestFormProps) {
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const {
    control,
    handleSubmit,
    reset,
  } = useForm<DemoRequest>({
    resolver: zodResolver(DemoRequestSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      persona: defaultPersona as DemoRequest['persona'] | undefined,
    },
  });

  const onSubmit = async (data: DemoRequest) => {
    if (honeypot) {
      console.warn('Spam detected: honeypot field filled');
      toast.error('Erreur de sécurité. Veuillez réessayer.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi de la demande');
      }

      toast.success('Votre demande a été envoyée avec succès ! Nous vous contacterons sous peu.');

      trackFormSubmission('demo_request', data.persona);

      reset();
      setHoneypot('');
      onSuccess?.();
    } catch (error: any) {
      console.error('Error submitting demo request:', error);
      toast.error(error.message || 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setLoading(false);
    }
  };

  const personaLabels: Record<DemoRequest['persona'], string> = {
    'agences-immobilieres': 'Agence immobilière',
    'promoteurs': 'Promoteur immobilier',
    'syndics': 'Syndic de copropriété',
    'gestionnaires': 'Gestionnaire locatif',
    'proprietaires': 'Propriétaire bailleur',
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('mx-auto max-w-[600px] space-y-6', className)}
    >
      {/* Honeypot field - hidden from users but visible to bots */}
      <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
        <Label htmlFor="website">Ne pas remplir ce champ</Label>
        <Input
          id="website"
          name="website"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Nom complet */}
      <div className="space-y-2">
        <Label htmlFor="nom">
          Nom complet <span className="text-destructive" aria-label="requis">*</span>
        </Label>
        <Controller
          name="nom"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                id="nom"
                placeholder="Votre nom complet"
                disabled={loading}
                aria-invalid={fieldState.invalid}
                aria-describedby={fieldState.error ? 'nom-error' : undefined}
                className={cn(
                  fieldState.invalid && 'border-destructive focus-visible:ring-destructive'
                )}
              />
              <FormMessage
                id="nom-error"
                error={fieldState.error?.message}
              />
            </>
          )}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive" aria-label="requis">*</span>
        </Label>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="votre@email.com"
                disabled={loading}
                autoComplete="email"
                aria-invalid={fieldState.invalid}
                aria-describedby={fieldState.error ? 'email-error' : undefined}
                className={cn(
                  fieldState.invalid && 'border-destructive focus-visible:ring-destructive'
                )}
              />
              <FormMessage
                id="email-error"
                error={fieldState.error?.message}
                description={!fieldState.error ? 'Nous ne partagerons jamais votre email.' : undefined}
              />
            </>
          )}
        />
      </div>

      {/* Téléphone */}
      <div className="space-y-2">
        <Label htmlFor="telephone">
          Téléphone <span className="text-destructive" aria-label="requis">*</span>
        </Label>
        <Controller
          name="telephone"
          control={control}
          render={({ field, fieldState }) => {
            // Format phone number with +225 prefix
            const formatPhoneNumber = (value: string) => {
              // Remove all non-digit characters except +
              let cleaned = value.replace(/[^\d+]/g, '');

              // Ensure it starts with +225
              if (!cleaned.startsWith('+225')) {
                if (cleaned.startsWith('225')) {
                  cleaned = '+' + cleaned;
                } else if (cleaned.startsWith('+')) {
                  cleaned = '+225' + cleaned.substring(1);
                } else {
                  cleaned = '+225' + cleaned;
                }
              }

              // Extract digits after +225
              const digits = cleaned.substring(4).replace(/\D/g, '');

              // Limit to 10 digits (Ivory Coast numbers are 10 digits)
              const limitedDigits = digits.substring(0, 10);

              // Format: +225 XX XX XX XX XX
              if (limitedDigits.length === 0) {
                return '+225';
              } else if (limitedDigits.length <= 2) {
                return `+225 ${limitedDigits}`;
              } else if (limitedDigits.length <= 4) {
                return `+225 ${limitedDigits.substring(0, 2)} ${limitedDigits.substring(2)}`;
              } else if (limitedDigits.length <= 6) {
                return `+225 ${limitedDigits.substring(0, 2)} ${limitedDigits.substring(2, 4)} ${limitedDigits.substring(4)}`;
              } else if (limitedDigits.length <= 8) {
                return `+225 ${limitedDigits.substring(0, 2)} ${limitedDigits.substring(2, 4)} ${limitedDigits.substring(4, 6)} ${limitedDigits.substring(6)}`;
              } else {
                return `+225 ${limitedDigits.substring(0, 2)} ${limitedDigits.substring(2, 4)} ${limitedDigits.substring(4, 6)} ${limitedDigits.substring(6, 8)} ${limitedDigits.substring(8)}`;
              }
            };

            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const formatted = formatPhoneNumber(e.target.value);
              field.onChange(formatted);
            };

            return (
              <>
                <Input
                  {...field}
                  id="telephone"
                  type="tel"
                  placeholder="+225 01 01 51 01 30"
                  disabled={loading}
                  autoComplete="tel"
                  value={field.value || ''}
                  onChange={handleChange}
                  aria-invalid={fieldState.invalid}
                  aria-describedby={fieldState.error ? 'telephone-error' : undefined}
                  className={cn(
                    fieldState.invalid && 'border-destructive focus-visible:ring-destructive'
                  )}
                />
                <FormMessage
                  id="telephone-error"
                  error={fieldState.error?.message}
                />
              </>
            );
          }}
        />
      </div>

      {/* Entreprise */}
      <div className="space-y-2">
        <Label htmlFor="entreprise">Entreprise</Label>
        <Controller
          name="entreprise"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="entreprise"
              placeholder="Nom de votre entreprise (optionnel)"
              disabled={loading}
            />
          )}
        />
      </div>

      {/* Profil */}
      <div className="space-y-2">
        <Label htmlFor="persona">
          Profil <span className="text-destructive" aria-label="requis">*</span>
        </Label>
        <Controller
          name="persona"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={loading}
              >
                <SelectTrigger
                  id="persona"
                  aria-invalid={fieldState.invalid}
                  aria-describedby={fieldState.error ? 'persona-error' : undefined}
                  className={cn(
                    fieldState.invalid && 'border-destructive focus-visible:ring-destructive'
                  )}
                >
                  <SelectValue placeholder="Sélectionnez votre profil" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(personaLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage
                id="persona-error"
                error={fieldState.error?.message}
              />
            </>
          )}
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <>
              <Textarea
                {...field}
                id="message"
                placeholder="Décrivez vos besoins ou posez vos questions (optionnel)"
                rows={4}
                disabled={loading}
                aria-describedby="message-description"
              />
              <FormMessage
                id="message-description"
                description="Ce champ est optionnel mais nous aide à mieux comprendre vos besoins."
              />
            </>
          )}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        disabled={loading}
        className="w-full h-[50px] text-base font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
      </Button>
    </form>
  );
}
