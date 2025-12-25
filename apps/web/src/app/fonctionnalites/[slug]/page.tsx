import { notFound } from 'next/navigation';
import { getFeatureById } from '@/lib/features';
import FeaturePageClient from './FeaturePageClient';

interface FeaturePageProps {
  params: {
    slug: string;
  };
}

export default function FeaturePage({ params }: FeaturePageProps) {
  // Trouver la fonctionnalité par slug (qui correspond à l'ID)
  const feature = getFeatureById(params.slug);

  if (!feature) {
    notFound();
  }

  return <FeaturePageClient feature={feature} />;
}
