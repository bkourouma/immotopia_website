import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: string;
  description?: string;
}

/**
 * Composant pour afficher les messages d'erreur ou de description des champs de formulaire
 */
export function FormMessage({ error, description, className, ...props }: FormMessageProps) {
  if (!error && !description) return null;

  return (
    <p
      className={cn(
        'text-sm',
        error && 'text-destructive font-medium',
        description && 'text-muted-foreground',
        className
      )}
      role={error ? 'alert' : undefined}
      aria-live={error ? 'polite' : undefined}
      {...props}
    >
      {error || description}
    </p>
  );
}

