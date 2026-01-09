// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: import.meta.env.PUBLIC_APP_URL || 'https://immotopia.cloud',
  trailingSlash: 'never', // CRITICAL: Enforce no trailing slash - matches sitemap canonical policy
  build: {
    format: 'file', // Generate /path.html instead of /path/index.html for cleaner URLs
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Custom sitemap will be generated via sitemap.xml.ts
      customPages: [],
    }),
  ],
});
