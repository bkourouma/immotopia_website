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
  guideId,
  guideSlug,
  guideTitle,
  pdfUrl,
  className,
  onSuccess,
}: GuideDownloadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    persona: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email) {
      setError('Le nom et l\'email sont requis');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
      
      // Capture lead via API
      const response = await fetch(`${API_URL}/api/guides/${guideId}/capture-lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guideId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          persona: formData.persona || null,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la capture du lead');
      }

      const data = await response.json();

      // Tracker le téléchargement dans analytics
      trackEvent('guide_download', {
        guide_slug: guideSlug,
        guide_title: guideTitle,
        email: formData.email,
      });

      // Télécharger le PDF
      if (data.guide?.pdfMedia?.url) {
        const link = document.createElement('a');
        link.href = data.guide.pdfMedia.url;
        link.download = `${guideSlug}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setIsSubmitted(true);
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
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
            <Label htmlFor="name">Nom *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={cn(error && 'border-red-500')}
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={cn('pl-10', error && 'border-red-500')}
                disabled={isLoading}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+225 XX XX XX XX XX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isLoading}
            />
          </div>

          <div>
            <Label htmlFor="company">Entreprise</Label>
            <Input
              id="company"
              type="text"
              placeholder="Votre entreprise"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              disabled={isLoading}
            />
          </div>

          <div>
            <Label htmlFor="persona">Profil</Label>
            <select
              id="persona"
              value={formData.persona}
              onChange={(e) => setFormData({ ...formData, persona: e.target.value })}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
              disabled={isLoading}
            >
              <option value="">Sélectionnez votre profil</option>
              <option value="agences-immobilieres">Agence immobilière</option>
              <option value="promoteurs">Promoteur immobilier</option>
              <option value="syndics">Syndic de copropriété</option>
              <option value="gestionnaires">Gestionnaire locatif</option>
              <option value="proprietaires">Propriétaire bailleur</option>
            </select>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

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

