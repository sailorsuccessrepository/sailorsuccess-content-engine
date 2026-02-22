import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// ============================================================
// WOK DATA ENDPOINT — Auto-generated at build time
// Serves /wok-data.json with ALL articles from all collections
// wok.js fetches this on every page load — zero manual updates
// ============================================================

// Route map: collection name -> URL prefix
const COLLECTION_ROUTES: Record<string, string> = {
  learn:        '/learn/',
  careers:      '/careers/',
  encyclopedia: '/encyclopedia/',
  blog:         '/blog/',
  money:        '/money/',
  rights:       '/rights/',
  tools:        '/tools/',
};

// Human-readable category label
const COLLECTION_LABELS: Record<string, string> = {
  learn:        'Guide',
  careers:      'Career',
  encyclopedia: 'Encyclopedia',
  blog:         'Blog',
  money:        'Finance',
  rights:       'Rights',
  tools:        'Tool',
};

// Strip markdown for excerpts
function stripMarkdown(text: string): string {
  return text
    .replace(/^---[\s\S]*?---/, '')
    .replace(/#+\s/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\n+/g, ' ')
    .trim();
}

// Format read time
function formatReadTime(val: string | number | undefined): string {
  if (!val) return '5 min';
  const s = String(val);
  if (s.includes('min')) return s.replace(' read', '').trim();
  return s + ' min';
}

export const GET: APIRoute = async () => {
  const collections = ['learn', 'careers', 'encyclopedia', 'blog', 'money', 'rights', 'tools'] as const;
  const articles: object[] = [];
  const seenSlugs = new Set<string>();

  for (const col of collections) {
    try {
      const entries = await getCollection(col as any, ({ data }: any) => !data.draft);
      for (const entry of entries) {
        if (seenSlugs.has(entry.slug)) continue;
        seenSlugs.add(entry.slug);
        const data = entry.data as any;
        const prefix = COLLECTION_ROUTES[col] || '/' + col + '/';
        const url = prefix + entry.slug + '/';
        // Build excerpt from description or body
        const excerpt = data.description
          ? data.description.substring(0, 140)
          : stripMarkdown(entry.body || '').substring(0, 140);
        articles.push({
          id: entry.slug,
          title: data.title || entry.slug,
          url,
          collection: col,
          type: COLLECTION_LABELS[col] || col,
          tags: Array.isArray(data.tags) ? data.tags : [],
          category: data.category || col,
          subcategory: data.subcategory || '',
          excerpt: excerpt + (excerpt.length >= 140 ? '...' : ''),
          readTime: formatReadTime(data.readTime || data.estimatedTime),
          featured: data.featured || false,
          pubDate: data.pubDate ? String(data.pubDate).split('T')[0] : '',
          author: data.author || 'Sailor Success Team',
        });
      }
    } catch (e) {
      // Collection might not exist yet — skip gracefully
      console.warn('[WoK] Skipping collection:', col, (e as Error).message);
    }
  }

  // Also pull glossary terms from encyclopedia collection
  const glossary: object[] = [];
  try {
    const encyc = await getCollection('encyclopedia' as any, ({ data }: any) => !data.draft);
    for (const entry of encyc) {
      const data = entry.data as any;
      if (data.term || data.abbreviation) {
        glossary.push({
          term: data.abbreviation || data.term || entry.slug,
          full: data.term || entry.slug,
          definition: data.definition || data.description || '',
          tag: Array.isArray(data.tags) && data.tags[0] ? data.tags[0] : 'Encyclopedia',
          articleId: entry.slug,
          url: '/encyclopedia/' + entry.slug + '/',
        });
      }
    }
  } catch (e) {
    console.warn('[WoK] Encyclopedia collection error:', (e as Error).message);
  }

  // Sort: featured first, then by date desc
  articles.sort((a: any, b: any) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (b.pubDate || '').localeCompare(a.pubDate || '');
  });

  const payload = {
    generated: new Date().toISOString(),
    totalArticles: articles.length,
    totalGlossary: glossary.length,
    articles,
    glossary,
  };

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};