import rss from '@astrojs/rss';
import siteData from '../content/site.json';
import articlesData from '../content/articles.json';

export function GET(context) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const today = new Date().toISOString().split('T')[0];
    const publishedArticles = [...articlesData]
        .filter(a => a.publishedDate <= today)
        .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

    return rss({
        title: siteData.siteName,
        description: siteData.description,
        site: context.site,
        items: publishedArticles.map((post) => ({
            title: post.title,
            pubDate: new Date(post.publishedDate),
            description: post.excerpt,
            // Compute link to article
            link: `${base}/${post.section}/${post.slug}/`,
        })),
        customData: `<language>${siteData.language}</language>`,
    });
}
