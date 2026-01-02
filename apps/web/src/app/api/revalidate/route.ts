import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * On-demand ISR revalidation endpoint
 * Call this when content is published/updated in the CMS
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, path, type } = body;

    // Verify secret (en développement, accepter 'dev-secret' ou le secret réel)
    const expectedSecret = process.env.REVALIDATE_SECRET || 'dev-secret';
    if (secret !== expectedSecret) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    // Revalidate specific path
    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path, now: Date.now() });
    }

    // Revalidate by type
    if (type === 'blog') {
      revalidatePath('/blog');
      revalidatePath('/blog/[slug]', 'page');
      try {
        revalidateTag('blog');
      } catch {
        // Ignore if tag doesn't exist
      }
    } else if (type === 'guide') {
      revalidatePath('/ressources/guides');
      revalidatePath('/ressources/guides/[slug]', 'page');
      try {
        revalidateTag('guides');
      } catch {
        // Ignore if tag doesn't exist
      }
    } else if (type === 'faq') {
      revalidatePath('/ressources/faq');
      try {
        revalidateTag('faq');
      } catch {
        // Ignore if tag doesn't exist
      }
    } else if (type === 'all') {
      revalidatePath('/', 'layout');
      try {
        revalidateTag('all');
      } catch {
        // Ignore if tag doesn't exist
      }
    }

    return NextResponse.json({ revalidated: true, type, now: Date.now() });
  } catch (error: any) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { error: 'Error revalidating', message: error?.message },
      { status: 500 }
    );
  }
}

