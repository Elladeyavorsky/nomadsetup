import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nomadsetup.eu',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Customize priority and changefreq based on page type
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://nomadsetup.eu/') {
          return {
            ...item,
            priority: 1.0,
            changefreq: 'daily',
          };
        }
        
        // Section index pages get high priority
        const sectionPages = ['/setup/', '/tech/', '/one-bag/', '/focus-wifi/', '/kits/'];
        if (sectionPages.some(section => item.url.endsWith(section))) {
          return {
            ...item,
            priority: 0.9,
            changefreq: 'weekly',
          };
        }
        
        // Article pages get medium-high priority
        if (item.url.includes('/setup/') || item.url.includes('/tech/') || 
            item.url.includes('/one-bag/') || item.url.includes('/focus-wifi/')) {
          return {
            ...item,
            priority: 0.8,
            changefreq: 'monthly',
          };
        }
        
        // Money pages (product reviews) get high priority
        if (item.url.includes('/best-')) {
          return {
            ...item,
            priority: 0.9,
            changefreq: 'monthly',
          };
        }
        
        // Legal pages get lower priority
        if (item.url.includes('/confidentialite') || item.url.includes('/mentions-legales')) {
          return {
            ...item,
            priority: 0.3,
            changefreq: 'yearly',
          };
        }
        
        // Default
        return item;
      },
    }),
  ],
  server: { host: true }
});