import { getAllBlogPosts } from '@/lib/content/blog';
import { NextResponse } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://immotopia.com';

/**
 * Génère le RSS feed pour le blog
 * Format RSS 2.0 standard
 */
export async function GET() {
  const posts = await getAllBlogPosts();
  const baseUrl = siteUrl.replace(/\/$/, '');

  const rssItems = posts
    .filter((post) => post.published !== false)
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const link = `${baseUrl}/blog/${post.slug}`;
      const description = post.description || '';
      const imageUrl = post.coverImage
        ? `${baseUrl}${post.coverImage}`
        : `${baseUrl}/og-image.jpg`;

      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${description}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${post.author}</author>
      <category>${post.category}</category>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
      <enclosure url="${imageUrl}" type="image/jpeg" />
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>ImmoTopia Blog</title>
    <description>Articles, conseils et actualités sur la gestion immobilière professionnelle</description>
    <link>${baseUrl}/blog</link>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>ImmoTopia Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

