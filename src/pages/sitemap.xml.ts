import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://sailorsuccess.online';

const STATIC_PAGES = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about/', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact/', priority: '0.8', changefreq: 'monthly' },
  { url: '/imucet101/', priority: '0.9', changefreq: 'weekly' },
  { url: '/scamshield/', priority: '0.9', changefreq: 'weekly' },
  { url: '/finance/', priority: '0.8', changefreq: 'weekly' },
  { url: '/mn101/', priority: '0.8', changefreq: 'weekly' },
  { url: '/resume-interview/', priority: '0.8', changefreq: 'monthly' },
  { url: '/our-contributors/', priority: '0.7', changefreq: 'monthly' },
  { url: '/contributors/', priority: '0.7', changefreq: 'monthly' },
  { url: '/sailorgpt/', priority: '0.9', changefreq: 'weekly' },
  { url: '/careers/', priority: '0.9', changefreq: 'weekly' },
  { url: '/learn/', priority: '0.9', changefreq: 'weekly' },
  { url: '/money/', priority: '0.8', changefreq: 'weekly' },
  { url: '/rights/', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools/', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog/', priority: '0.8', changefreq: 'daily' },
  { url: '/encyclopedia/', priority: '0.8', changefreq: 'weekly' },
];

export const GET: APIRoute = async () => {
  const collections = ['careers', 'learn', 'money', 'rights', 'tools', 'blog', 'encyclopedia'] as const;
  const today = new Date().toISOString().split('T')[0];
  const urls: string[] = [];

  // Static pages
  for (const p of STATIC_PAGES) {
    urls.push(`  <url><loc>${SITE}${p.url}</loc><lastmod>${today}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`);
  }

  // Dynamic content pages
  for (const col of collections) {
    try {
      const entries = await getCollection(col as any, ({ data }: any) => !data.draft);
      const prefix = col === 'blog' ? '/blog/' : col === 'encyclopedia' ? '/encyclopedia/' : `/${col}/`;
      for (const entry of entries) {
        const lastmod = entry.data.pubDate ? String(entry.data.pubDate).split('T')[0] : today;
        urls.push(`  <url><loc>${SITE}${prefix}${entry.slug}/</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
      }
    } catch (e) {}
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
