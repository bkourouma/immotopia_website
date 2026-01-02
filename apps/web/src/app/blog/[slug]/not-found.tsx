import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <FileQuestion className="mx-auto h-24 w-24 text-gray-400" />
        <h1 className="mt-6 text-4xl font-bold text-gray-900">Article non trouvé</h1>
        <p className="mt-4 text-lg text-gray-600">
          L'article que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
