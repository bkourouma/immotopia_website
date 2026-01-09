/**
 * RSS Feed Generation
 * Fetches blog posts from API
 */

import { getAllBlogPosts } from '../lib/api/blog';

export async function GET() {
  const siteUrl = import.meta.env.PUBLIC_APP_URL || 'https://immotopia.cloud';
  const siteName = import.meta.env.PUBLIC_SITE_NAME || 'ImmoTopia';
  
  // Fetch blog posts
  const posts = await getAllBlogPosts().catch(() => []);
  
  // Sort by date (newest first)
  const sortedPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20); // Latest 20 posts

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName} - Blog</title>
    <link>${siteUrl}</link>
    <description>Articles et actualités sur la gestion immobilière</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${sortedPosts
      .map(
        (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description || ''}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.author ? `<author>${post.author}</author>` : ''}
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}



