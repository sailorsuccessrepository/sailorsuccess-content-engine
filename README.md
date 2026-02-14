# Sailor Success - Content & Routing Engine

**STATUS:** Content + Routing Only | NO UI Implementation

---

## 🎯 Purpose

This repository is a **CONTENT AND ROUTING ENGINE ONLY**.

It contains:
- ✅ Content collections schema
- ✅ Dynamic routing logic
- ✅ Sample markdown content
- ❌ NO UI components
- ❌ NO CSS/styling
- ❌ NO visual implementation

**This is NOT a website. This is a routing engine.**

---

## 📁 Repository Structure

```
sailorsuccess-content-engine/
├── src/
│   ├── ui/                          🔒 EMPTY PLACEHOLDERS
│   │   ├── layouts/                 [Awaiting Red-Glass UI plugin]
│   │   ├── components/              [Awaiting Red-Glass UI plugin]
│   │   └── styles/                  [Awaiting Red-Glass UI plugin]
│   │
│   ├── content/                     ✅ CONTENT COLLECTIONS
│   │   ├── config.ts                [Schema definitions]
│   │   ├── learn/                   [Tutorials, guides, courses]
│   │   ├── career/                  [Pathways, roles, salaries]
│   │   ├── tools/                   [Calculators, checklists]
│   │   ├── rights/                  [Legal, regulations]
│   │   ├── money/                   [Finance, budgeting, taxes]
│   │   ├── blog/                    [News, articles, updates]
│   │   └── encyclopedia/            [Maritime terminology]
│   │
│   ├── pages/                       ✅ ROUTING LOGIC ONLY
│   │   ├── index.astro              [Collection index]
│   │   ├── learn/[...slug].astro    [Dynamic route]
│   │   ├── career/[...slug].astro   [Dynamic route]
│   │   ├── tools/[...slug].astro    [Dynamic route]
│   │   ├── rights/[...slug].astro   [Dynamic route]
│   │   ├── money/[...slug].astro    [Dynamic route]
│   │   ├── blog/[...slug].astro     [Dynamic route]
│   │   └── encyclopedia/[...slug].astro
│   │
│   └── lib/                         ✅ BUSINESS LOGIC (future)
│       └── [Payment verification, SEO, etc.]
│
├── public/                          🔒 EMPTY (assets awaiting)
├── astro.config.mjs                 ✅ Content collections enabled
├── package.json                     ✅ Minimal dependencies
└── tsconfig.json                    ✅ Strict TypeScript
```

---

## 📚 Content Collections

### 7 Collections Implemented

1. **Learn** - Tutorials, guides, exam prep
   - Schema: difficulty, prerequisites, learningPath, estimatedTime
   
2. **Career** - Pathways, roles, salaries, companies
   - Schema: experience, salaryRange, pathway, companies
   
3. **Tools** - Calculators, checklists, resources
   - Schema: toolType, downloadable, interactive
   
4. **Rights** - Legal, regulations, seafarer rights
   - Schema: legalArea, jurisdiction, lastUpdated
   
5. **Money** - Finance, budgeting, taxes, investments
   - Schema: financeType, targetAudience
   
6. **Blog** - News, articles, updates
   - Schema: author, readTime, updated
   
7. **Encyclopedia** - Maritime terminology, definitions
   - Schema: term, definition, relatedTerms, abbreviation

All collections share common fields:
- title, description, publishDate
- category, tags, featured
- metaTitle, metaDescription (SEO)

---

## 🛣️ Dynamic Routing

Each collection has a corresponding dynamic route:

```
/learn/[...slug].astro       → src/content/learn/*.md
/career/[...slug].astro      → src/content/career/*.md
/tools/[...slug].astro       → src/content/tools/*.md
/rights/[...slug].astro      → src/content/rights/*.md
/money/[...slug].astro       → src/content/money/*.md
/blog/[...slug].astro        → src/content/blog/*.md
/encyclopedia/[...slug].astro → src/content/encyclopedia/*.md
```

**Routing uses Astro's `getStaticPaths()` to generate pages from markdown content.**

Currently returns **UNSTYLED HTML** to demonstrate routing works.

---

## 🔌 How UI Will Be Plugged In Later

### Phase 1: Current State ✅
- Content collections schema defined
- Dynamic routing working
- Sample content created
- **NO UI implementation**

### Phase 2: UI Integration (Future)
When explicitly instructed:

1. **Copy frozen Red-Glass UI components** from golden master
2. **Import into `/src/ui/` directory**:
   - `/src/ui/layouts/Layout.astro` → Main layout wrapper
   - `/src/ui/components/*.astro` → Reusable UI components
   - `/src/ui/styles/*.css` → Frozen CSS files

3. **Update dynamic routes** to use frozen layouts:
   ```astro
   ---
   import Layout from '../../ui/layouts/Layout.astro';
   // ... existing routing logic
   ---
   
   <Layout title={entry.data.title}>
     <Content />
   </Layout>
   ```

4. **NO modifications** to frozen UI code
5. **ONLY apply** existing frozen patterns to content

---

## 🚫 What This Repo Does NOT Contain

- ❌ UI layouts
- ❌ UI components
- ❌ CSS/styling
- ❌ Tailwind configuration
- ❌ Visual design
- ❌ Red-Glass glassmorphism effects
- ❌ Navigation components
- ❌ Footer/header components

**These will be imported from the frozen golden master when instructed.**

---

## 🏗️ Development Commands

```bash
# Install dependencies
npm install

# Start dev server (will show unstyled HTML)
npm run dev

# Build for production (routing engine only)
npm run build

# Preview production build
npm run preview
```

**Note:** Current output will be unstyled HTML demonstrating routing works.

---

## 🔐 Critical Rules

### FROZEN ZONES (Do Not Touch)
- `/src/ui/` → Empty placeholders awaiting UI
- `/public/` → Empty awaiting assets

### SAFE ZONES (Extensible)
- `/src/content/` → Add markdown files freely
- `/src/pages/` → Add routing logic only (no UI)
- `/src/lib/` → Add business logic
- `astro.config.mjs` → Routing configuration only

### ABSOLUTE RULES
1. **NO UI code** until explicitly instructed
2. **NO CSS** or styling
3. **NO Tailwind** usage
4. **NO component creation** in `/src/ui/`
5. **ONLY** content and routing logic

---

## 📊 Current Status

**Repository:** https://github.com/sailorsuccessrepository/sailorsuccess-content-engine

**Content Collections:** 7 defined, 1 sample entry each  
**Dynamic Routes:** 7 implemented  
**UI Status:** Not implemented (placeholders only)  
**Deployment:** Not configured (routing engine only)

---

## 🎯 Next Steps (Awaiting Instruction)

**DO NOT proceed without explicit instruction:**

1. Import frozen Red-Glass UI from golden master
2. Apply frozen layouts to dynamic routes
3. Configure SEO metadata
4. Implement payment gating logic
5. Add funnel routing (/finance, /imucet, etc.)
6. Deploy to Netlify

**EXECUTION FREEZE IN EFFECT**

---

## 📧 Contact

**Project:** Sailor Success Education Services  
**Repository Type:** Content Engine (UI-Free)  
**Integration:** Pending frozen UI baseline import

**This is a routing engine, not a website.**
