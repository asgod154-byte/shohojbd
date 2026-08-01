import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://shohojbd.pages.dev',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
