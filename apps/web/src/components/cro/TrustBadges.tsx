'use client';

/**
 * Composant Trust Badges - Affiche des badges de confiance pour améliorer la crédibilité
 */

import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@monorepo/ui';

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface TrustBadgesProps {
  /** Classes CSS additionnelles */
  className?: string;
  /** Variante d'affichage */
  variant?: 'horizontal' | 'grid';
}

const defaultBadges: TrustBadge[] = [
  {
    icon: <Shield className="h-6 w-6" />,
    label: 'Sécurité',
    value: 'Données sécurisées',
  },
  {
    icon: <Award className="h-6 w-6" />,
    label: 'Certifié',
    value: 'Qualité garantie',
  },
  {
    icon: <Users className="h-6 w-6" />,
    label: 'Clients',
    value: '500+ entreprises',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    label: 'Performance',
    value: '+40% productivité',
  },
];

export default function TrustBadges({ className, variant = 'horizontal' }: TrustBadgesProps) {
  if (variant === 'grid') {
    return (
      <div className={cn('grid grid-cols-2 gap-4 md:grid-cols-4', className)}>
        {defaultBadges.map((badge, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 50}>
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 text-center transition-shadow hover:shadow-md">
              <div className="mb-2 text-primary">{badge.icon}</div>
              <div className="text-sm font-semibold text-gray-900">{badge.label}</div>
              <div className="text-xs text-gray-600">{badge.value}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-6 py-4', className)}>
      {defaultBadges.map((badge, index) => (
        <ScrollReveal key={index} direction="fade" delay={index * 100}>
          <div className="flex items-center gap-3">
            <div className="text-primary">{badge.icon}</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">{badge.label}</div>
              <div className="text-xs text-gray-600">{badge.value}</div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

