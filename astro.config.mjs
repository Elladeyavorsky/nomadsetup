import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://elladeyavorsky.github.io',
  base: '/nomadsetup',
  integrations: [sitemap()],
  server: {
    host: true
  }
});
