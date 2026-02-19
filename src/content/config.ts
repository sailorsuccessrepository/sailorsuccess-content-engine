import { defineCollection, z } from 'astro:content';

// Common schema fields shared across all collections
const commonSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date().optional(), // Accept both publishDate and pubDate
  pubDate: z.coerce.date().optional(), // Alias for publishDate
  updatedDate: z.coerce.date().optional(), // Track content freshness
  category: z.string(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false), // Content staging workflow
  // SEO
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  seoTitle: z.string().optional(), // Alias for metaTitle
  seoDescription: z.string().optional(), // Alias for metaDescription
  canonicalUrl: z.string().optional(), // SEO canonical link control
  // Content interlinking
  relatedArticles: z.array(z.string()).default([]), // Cross-reference slugs
  author: z.string().optional(), // Article author
  subcategory: z.string().optional(), // Optional sub-category
  readTime: z.union([z.string(), z.number()]).optional(), // e.g. '8 min read' or 15
  image: z.string().optional(), // Featured image URL
  heroImage: z.string().optional(), // Hero image URL
});

// Learn collection - tutorials, guides, courses, exam prep
const learnCollection = defineCollection({
  type: 'content',
  schema: commonSchema.extend({
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    prerequisites: z.array(z.string()).default([]),
    learningPath: z.string().optional(),
    estimatedTime: z.string().optional(),
  }),
});

// Careers collection - pathways, roles, salaries, companies
const careersCollection = defineCollection({
  type: 'content',
  schema: commonSchema.extend({
    experience: z.enum(['entry', 'mid', 'senior', 'executive']).optional(),
    salaryRange: z.string().optional(),
    pathway: z.string().optional(),
    companies: z.array(z.string()).default([]),
  }),
});

// Tools collection - calculators, checklists, resources
const toolsCollection = defineCollection({
  type: 'content',
  schema: commonSchema.extend({
    toolType: z.enum(['calculator', 'checklist', 'guide', 'template']).optional(),
    downloadable: z.boolean().default(false),
    interactive: z.boolean().default(false),
  }),
});

// Rights collection - legal, regulations, seafarer rights
const rightsCollection = defineCollection({
  type: 'content',
  schema: commonSchema.extend({
    legalArea: z.enum(['contracts', 'wages', 'safety', 'repatriation', 'mental-health', 'general']).optional(),
    jurisdiction: z.string().optional(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

// Money collection - finance, budgeting, taxes, investments
const moneyCollection = defineCollection({
  type: 'content',
  schema: commonSchema.extend({
    financeType: z.enum(['banking', 'taxes', 'investment', 'salary', 'insurance', 'planning']).optional(),
    targetAudience: z.string().optional(),
  }),
});

// Blog collection - news, articles, updates
const blogCollection = defineCollection({
  type: 'content',
  schema: commonSchema.extend({
    updated: z.coerce.date().optional(),
  }),
});

// Encyclopedia collection - maritime terminology, definitions
const encyclopediaCollection = defineCollection({
  type: 'content',
  schema: commonSchema.extend({
    term: z.string().optional(),
    definition: z.string().optional(),
    relatedTerms: z.array(z.string()).default([]),
    abbreviation: z.string().optional(),
  }),
});

// Export all collections
export const collections = {
  'learn': learnCollection,
  'careers': careersCollection,
  'tools': toolsCollection,
  'rights': rightsCollection,
  'money': moneyCollection,
  'blog': blogCollection,
  'encyclopedia': encyclopediaCollection,
};
