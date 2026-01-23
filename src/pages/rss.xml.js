import rss from '@astrojs/rss';
import siteData from '../content/site.json';
import articlesData from '../content/articles.json';

export function GET(context) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    return rss({
        title: siteData.siteName,
        description: siteData.description,
        site: context.site,
        items: articlesData.map((post) => ({
            title: post.title,
            pubDate: new Date(post.publishedDate),
            description: post.excerpt,
            // Compute link to article
            link: `${base}/${post.section}/${post.slug}/`,
        })),
        customData: `<language>${siteData.language}</language>`,
    });
}
