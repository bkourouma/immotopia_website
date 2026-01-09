/**
 * Robots.txt Generation
 */

export function GET() {
  const siteUrl = import.meta.env.PUBLIC_APP_URL || 'https://immotopia.cloud';
  
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}



