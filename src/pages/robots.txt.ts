import type { APIRoute } from 'astro';

export const GET: APIRoute = (context) => {
    const siteUrl = context.site ? context.site.toString().replace(/\/$/, '') : 'https://nomadsetup.com';
    const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`.trim();

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
