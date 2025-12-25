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
    mode: 'onBlur', // Validation en temps réel au blur (quand l'utilisateur quitte le champ)
    reValidateMode: 'onChange', // Re-validation au changement après une première erreur
    defaultValues: {
      persona: defaultPersona as DemoRequest['persona'] | undefined,
    },
  });

  const onSubmit = async (data: DemoRequest) => {
    // Protection anti-spam : si le champ honeypot est rempli, c'est un bot
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
      
      // Track form submission
      trackFormSubmission('demo_request', data.persona);
      
      reset();
      setHoneypot(''); // Reset honeypot
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
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                id="telephone"
                type="tel"
                placeholder="+33 X XX XX XX XX"
                disabled={loading}
                autoComplete="tel"
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
          )}
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
