'use client';

/**
 * Formulaire de capture email pour télécharger un guide
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Mail, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

interface GuideDownloadFormProps {
  /** Slug du guide */
  guideSlug: string;
  /** Titre du guide */
  guideTitle: string;
  /** URL du PDF à télécharger */
  pdfUrl: string;
  /** Classes CSS additionnelles */
  className?: string;
  /** Callback après soumission réussie */
  onSuccess?: () => void;
}

export default function GuideDownloadForm({
  guideSlug,
  guideTitle,
  pdfUrl,
  className,
  onSuccess,
}: GuideDownloadFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError('Veuillez entrer votre adresse email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Envoyer l'email au backend pour enregistrement
      // Pour l'instant, on simule juste le téléchargement
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Tracker le téléchargement dans analytics
      trackEvent('guide_download', {
        guide_slug: guideSlug,
        guide_title: guideTitle,
        email: email,
      });

      // Télécharger le PDF
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${guideSlug}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitted(true);
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error('Error downloading guide:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={className}>
        <CardContent className="p-6 text-center">
          <div className="mb-4 text-4xl">✅</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Téléchargement en cours...</h3>
          <p className="text-gray-600">
            Vérifiez votre boîte de réception, nous vous avons envoyé un email avec le guide.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5 text-primary" />
          Télécharger le guide gratuitement
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <div className="mt-2 flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn('pl-10', error && 'border-red-500')}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Téléchargement...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Télécharger le guide
              </>
            )}
          </Button>

          <p className="text-xs text-center text-gray-500">
            En téléchargeant ce guide, vous acceptez de recevoir nos actualités par email.
            Vous pourrez vous désinscrire à tout moment.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

