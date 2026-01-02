const createMDX = require('@next/mdx');
const remarkGfm = require('remark-gfm');
const rehypeSlug = require('rehype-slug');
const rehypeAutolinkHeadings = require('rehype-autolink-headings');
const rehypePrettyCode = require('rehype-pretty-code');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@monorepo/ui', '@monorepo/contracts', '@monorepo/utils'],
  
  // Configuration MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Optimisation du build
  // swcMinify removed: deprecated in Next.js 15 (SWC minification is default)
  compress: true,
  
  // Redirections (301 permanent redirects)
  async redirects() {
    return [
      {
        source: '/ressources/blog',
        destination: '/blog',
        permanent: true, // 301 redirect
      },
      {
        source: '/ressources/blog/:slug',
        destination: '/blog/:slug',
        permanent: true, // 301 redirect
      },
    ];
  },
  
  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
        },
      ],
    ],
  },
});

module.exports = withMDX(nextConfig);

