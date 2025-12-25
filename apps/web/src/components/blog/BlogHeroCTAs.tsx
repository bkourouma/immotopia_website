'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackCTAClick } from '@/lib/analytics';

export default function BlogHeroCTAs() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-xl transition-all duration-300"
        onClick={() => trackCTAClick('hero', 'blog', 'demander-demo')}
      >
        <Link href="/contact?demo=true">Demander une démo</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="border-2 hover:scale-105 transition-all duration-300"
      >
        <Link href="/ressources">Voir toutes les ressources</Link>
      </Button>
    </div>
  );
}

