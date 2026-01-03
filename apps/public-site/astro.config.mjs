// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: import.meta.env.PUBLIC_APP_URL || 'https://immotopia.immo-annonces.fr',
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
