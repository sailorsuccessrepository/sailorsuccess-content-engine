# STATIC → MARKDOWN MIGRATION PLAN
**Repository:** sailorsuccess-content-engine  
**Status:** PLAN ONLY - DO NOT EXECUTE  
**Purpose:** Convert 89 static .astro pages to .md content files  

---

## MIGRATION OVERVIEW

### Current State
- **120 markdown files** already in collections ✅
- **89 static .astro pages** need conversion ⚠️
- **Total pages:** 209

### Target State
- **All content** in markdown collections
- **Dynamic routing** handles all URLs
- **Zero static pages** (except core pages)

---

## MIGRATION BREAKDOWN BY COLLECTION

### 1. LEARN COLLECTION
**Static pages to convert:** 18

| Current Path | Target Markdown | Slug | Priority |
|-------------|----------------|------|----------|
| `/learn/cadet-starter/index.astro` | `src/content/learn/cadet-starter.md` | `cadet-starter` | High |
| `/learn/cadet-starter/first-day-on-ship/index.astro` | `src/content/learn/first-day-on-ship.md` | `first-day-on-ship` | High |
| `/learn/deck-operations/index.astro` | `src/content/learn/deck-operations.md` | `deck-operations` | Medium |
| `/learn/dg-shipping-approved-institutes/index.astro` | `src/content/learn/dg-shipping-approved-institutes.md` | `dg-shipping-approved-institutes` | High |
| `/learn/engine-room/index.astro` | `src/content/learn/engine-room.md` | `engine-room` | Medium |
| `/learn/engine-room/main-engine-working/index.astro` | `src/content/learn/main-engine-working.md` | `main-engine-working` | Medium |
| `/learn/exams/index.astro` | `src/content/learn/exams.md` | `exams` | High |
| `/learn/exams/dg-shipping-approved-institutes/index.astro` | Duplicate - merge with above | - | Skip |
| `/learn/exams/stcw-courses-list/index.astro` | `src/content/learn/stcw-courses-list.md` | `stcw-courses-list` | High |
| `/learn/imu-cet-preparation-guide/index.astro` | `src/content/learn/imu-cet-preparation-guide.md` | `imu-cet-preparation-guide` | **Critical** |
| `/learn/life-at-sea/index.astro` | `src/content/learn/life-at-sea.md` | `life-at-sea` | Medium |
| `/learn/life-at-sea-reality/index.astro` | `src/content/learn/life-at-sea-reality.md` | `life-at-sea-reality` | Medium |
| `/learn/maritime-english/index.astro` | `src/content/learn/maritime-english.md` | `maritime-english` | Medium |
| `/learn/safety/index.astro` | `src/content/learn/safety.md` | `safety` | High |
| `/learn/ship-systems/index.astro` | `src/content/learn/ship-systems.md` | `ship-systems` | Medium |
| `/learn/ship-systems/electrical-basics/index.astro` | `src/content/learn/electrical-basics.md` | `electrical-basics` | Low |

**URL Parity Guarantee:**
- `/learn/cadet-starter/index.astro` → `/learn/cadet-starter` (dynamic)
- `/learn/cadet-starter` → `/learn/cadet-starter` (same URL)

---

### 2. CAREERS COLLECTION
**Static pages to convert:** 22

| Current Path | Target Markdown | Slug | Priority |
|-------------|----------------|------|----------|
| `/careers/companies/index.astro` | `src/content/careers/companies-overview.md` | `companies-overview` | High |
| `/careers/companies/best-shipping-companies-india/index.astro` | `src/content/careers/best-shipping-companies-india.md` | `best-shipping-companies-india` | High |
| `/careers/courses/index.astro` | `src/content/careers/courses-overview.md` | `courses-overview` | High |
| `/careers/dg-shipping-approved-institutes/index.astro` | `src/content/careers/dg-shipping-approved-institutes.md` | `dg-shipping-approved-institutes` | High |
| `/careers/getting-started/index.astro` | `src/content/careers/getting-started.md` | `getting-started` | **Critical** |
| `/careers/getting-started/company-sponsorship-guide/index.astro` | `src/content/careers/company-sponsorship-guide.md` | `company-sponsorship-guide` | **Critical** |
| `/careers/how-to-join-merchant-navy-india/index.astro` | `src/content/careers/how-to-join-merchant-navy-india.md` | `how-to-join-merchant-navy-india` | **Critical** |
| `/careers/is-merchant-navy-worth-it/index.astro` | `src/content/careers/is-merchant-navy-worth-it.md` | `is-merchant-navy-worth-it` | High |
| `/careers/job-search/index.astro` | `src/content/careers/job-search.md` | `job-search` | High |
| `/careers/join-merchant-navy-after-12th/index.astro` | `src/content/careers/join-merchant-navy-after-12th.md` | `join-merchant-navy-after-12th` | **Critical** |
| `/careers/merchant-navy-salary-2026/index.astro` | `src/content/careers/merchant-navy-salary-2026.md` | `merchant-navy-salary-2026` | **Critical** |
| `/careers/ranks/index.astro` | `src/content/careers/ranks-overview.md` | `ranks-overview` | High |
| `/careers/roadmap-deck-officer-india/index.astro` | `src/content/careers/roadmap-deck-officer-india.md` | `roadmap-deck-officer-india` | **Critical** |
| `/careers/roadmap-marine-engineer-india/index.astro` | `src/content/careers/roadmap-marine-engineer-india.md` | `roadmap-marine-engineer-india` | **Critical** |
| `/careers/roadmap-ratings/index.astro` | `src/content/careers/roadmap-ratings.md` | `roadmap-ratings` | High |
| `/careers/roadmap-tme-eto/index.astro` | `src/content/careers/roadmap-tme-eto.md` | `roadmap-tme-eto` | High |
| `/careers/salary/index.astro` | `src/content/careers/salary-overview.md` | `salary-overview` | High |
| `/careers/salary/merchant-navy-salary-india/index.astro` | `src/content/careers/merchant-navy-salary-india.md` | `merchant-navy-salary-india` | High |
| `/careers/transitions/index.astro` | `src/content/careers/transitions.md` | `transitions` | Medium |

**URL Parity Guarantee:**
- `/careers/getting-started/index.astro` → `/careers/getting-started` (dynamic)
- `/careers/getting-started` → `/careers/getting-started` (same URL)

---

### 3. MONEY COLLECTION
**Static pages to convert:** 14

| Current Path | Target Markdown | Slug | Priority |
|-------------|----------------|------|----------|
| `/money/banking/index.astro` | `src/content/money/banking-overview.md` | `banking-overview` | High |
| `/money/banking/nre-vs-nro-account/index.astro` | `src/content/money/nre-vs-nro-account.md` | `nre-vs-nro-account` | **Critical** |
| `/money/credit/index.astro` | `src/content/money/credit-overview.md` | `credit-overview` | Medium |
| `/money/credit/best-credit-cards-seafarers/index.astro` | `src/content/money/best-credit-cards-seafarers.md` | `best-credit-cards-seafarers` | High |
| `/money/emergency-fund/index.astro` | `src/content/money/emergency-fund.md` | `emergency-fund` | High |
| `/money/emergency-fund/how-much-to-save/index.astro` | `src/content/money/how-much-to-save.md` | `how-much-to-save` | High |
| `/money/insurance/index.astro` | `src/content/money/insurance-overview.md` | `insurance-overview` | Medium |
| `/money/investments/index.astro` | `src/content/money/investments-overview.md` | `investments-overview` | Medium |
| `/money/investments/first-investment-guide/index.astro` | `src/content/money/first-investment-guide.md` | `first-investment-guide` | **Critical** |
| `/money/merchant-navy-salary-structure-india/index.astro` | `src/content/money/merchant-navy-salary-structure-india.md` | `merchant-navy-salary-structure-india` | **Critical** |
| `/money/salary/index.astro` | `src/content/money/salary-overview.md` | `salary-overview` | High |
| `/money/salary/merchant-navy-salary-structure/index.astro` | Duplicate - merge with above | - | Skip |
| `/money/salary/tax-planning-guide/index.astro` | `src/content/money/tax-planning-guide.md` | `tax-planning-guide` | **Critical** |

**URL Parity Guarantee:**
- `/money/banking/index.astro` → `/money/banking-overview` (new slug, needs redirect)
- Alternative: Use slug `banking` to preserve URL exactly

---

### 4. RIGHTS COLLECTION
**Static pages to convert:** 14

| Current Path | Target Markdown | Slug | Priority |
|-------------|----------------|------|----------|
| `/rights/contracts/index.astro` | `src/content/rights/contracts-overview.md` | `contracts-overview` | High |
| `/rights/contracts/contract-red-flags/index.astro` | `src/content/rights/contract-red-flags.md` | `contract-red-flags` | **Critical** |
| `/rights/harassment/index.astro` | `src/content/rights/harassment-overview.md` | `harassment-overview` | High |
| `/rights/harassment/what-to-do/index.astro` | `src/content/rights/harassment-what-to-do.md` | `harassment-what-to-do` | **Critical** |
| `/rights/know-your-rights/index.astro` | `src/content/rights/know-your-rights.md` | `know-your-rights` | **Critical** |
| `/rights/know-your-rights/mlc-2006-explained/index.astro` | `src/content/rights/mlc-2006-explained.md` | `mlc-2006-explained` | **Critical** |
| `/rights/legal-help/index.astro` | `src/content/rights/legal-help.md` | `legal-help` | High |
| `/rights/legal-help/report-to-itf/index.astro` | `src/content/rights/report-to-itf.md` | `report-to-itf` | **Critical** |
| `/rights/mental-health/index.astro` | `src/content/rights/mental-health.md` | `mental-health` | High |
| `/rights/mental-health/depression-at-sea/index.astro` | `src/content/rights/depression-at-sea.md` | `depression-at-sea` | **Critical** |
| `/rights/problems/index.astro` | `src/content/rights/problems-overview.md` | `problems-overview` | Medium |
| `/rights/problems/ship-abandonment/index.astro` | `src/content/rights/ship-abandonment.md` | `ship-abandonment` | **Critical** |

**URL Parity Guarantee:**
- `/rights/contracts/index.astro` → `/rights/contracts-overview` (new slug, needs redirect)
- Alternative: Use slug `contracts` to preserve URL exactly

---

### 5. TOOLS COLLECTION
**Static pages to convert:** 11

| Current Path | Target Markdown | Slug | Priority |
|-------------|----------------|------|----------|
| `/tools/career-assessment/index.astro` | `src/content/tools/career-assessment.md` | `career-assessment` | High |
| `/tools/guides/index.astro` | `src/content/tools/guides-overview.md` | `guides-overview` | Medium |
| `/tools/guides/calculate-sea-service/index.astro` | `src/content/tools/calculate-sea-service.md` | `calculate-sea-service` | High |
| `/tools/guides/interview-mistakes/index.astro` | `src/content/tools/interview-mistakes.md` | `interview-mistakes` | High |
| `/tools/guides/seafarer-resume-guide/index.astro` | `src/content/tools/seafarer-resume-guide.md` | `seafarer-resume-guide` | **Critical** |
| `/tools/interview-prep-pack/index.astro` | `src/content/tools/interview-prep-pack.md` | `interview-prep-pack` | High |
| `/tools/interview-readiness/index.astro` | `src/content/tools/interview-readiness.md` | `interview-readiness` | Medium |
| `/tools/resume-checklist/index.astro` | `src/content/tools/resume-checklist.md` | `resume-checklist` | High |
| `/tools/resume-kit/index.astro` | `src/content/tools/resume-kit.md` | `resume-kit` | High |
| `/tools/salary-calculator/index.astro` | `src/content/tools/salary-calculator.md` | `salary-calculator` | **Critical** |
| `/tools/sea-service-calculator/index.astro` | `src/content/tools/sea-service-calculator.md` | `sea-service-calculator` | **Critical** |

**URL Parity Guarantee:**
- `/tools/career-assessment/index.astro` → `/tools/career-assessment` (dynamic)
- `/tools/career-assessment` → `/tools/career-assessment` (same URL)

---

## SLUG PARITY GUARANTEE

### URL Preservation Strategy

**Option 1: Exact Match (Recommended)**
- Use original folder name as slug
- `/learn/cadet-starter/index.astro` → slug: `cadet-starter`
- Result: `/learn/cadet-starter` (exact match)

**Option 2: Descriptive Slug + Redirect**
- Use descriptive slug for better organization
- `/money/banking/index.astro` → slug: `banking-overview`
- Result: `/money/banking-overview`
- Add 301 redirect: `/money/banking` → `/money/banking-overview`

**Recommended Approach:**
Use **Option 1** for all migrations to guarantee zero URL changes.

---

## MIGRATION CHECKLIST (DO NOT EXECUTE)

### Pre-Migration Steps
- [ ] Backup production repository
- [ ] Create migration branch in content-engine repo
- [ ] Document all current URLs (sitemap export)
- [ ] Set up URL validation testing

### Migration Process (Per File)
1. **Extract Content**
   - [ ] Open static .astro file
   - [ ] Copy HTML content between `<Layout>` tags
   - [ ] Extract frontmatter data (title, description, etc.)
   - [ ] Convert HTML to Markdown
   - [ ] Preserve all links and images

2. **Create Markdown File**
   - [ ] Create new .md file in correct collection
   - [ ] Use exact folder name as slug (preserve URLs)
   - [ ] Add extended frontmatter schema
   ```yaml
   ---
   title: "..."
   description: "..."
   publishDate: 2024-XX-XX
   updatedDate: 2026-XX-XX  # NEW
   category: "..."
   tags: []
   featured: false
   draft: false  # NEW
   metaTitle: "..."
   metaDescription: "..."
   canonicalUrl: "..."  # NEW
   relatedArticles: []  # NEW
   # Collection-specific fields
   ---
   ```

3. **Content Conversion**
   - [ ] Convert HTML to Markdown
   - [ ] Preserve heading hierarchy
   - [ ] Convert links to relative paths
   - [ ] Update image paths
   - [ ] Add alt text to images
   - [ ] Convert tables to markdown
   - [ ] Preserve code blocks

4. **Validation**
   - [ ] Build site locally
   - [ ] Verify URL matches original
   - [ ] Check internal links work
   - [ ] Validate frontmatter schema
   - [ ] Test SEO metadata
   - [ ] Verify images load

### Post-Migration Steps
- [ ] Compare sitemap before/after
- [ ] Run broken link checker
- [ ] Validate all redirects (if any)
- [ ] Test search functionality
- [ ] Verify collection counts
- [ ] Update documentation

---

## AUTOMATED MIGRATION SCRIPT (TEMPLATE)

```bash
#!/bin/bash
# MIGRATION SCRIPT - DO NOT EXECUTE YET
# Purpose: Convert static .astro pages to .md content

# Configuration
SOURCE_REPO="/path/to/sailorsuccess-production"
TARGET_REPO="/path/to/sailorsuccess-content-engine"
COLLECTIONS=("learn" "careers" "money" "rights" "tools")

# Function: Convert single static page to markdown
convert_static_to_markdown() {
    local static_file=$1
    local collection=$2
    local slug=$3
    
    echo "Converting: $static_file → $collection/$slug.md"
    
    # Extract content (requires manual review)
    # - Parse .astro file
    # - Extract frontmatter
    # - Convert HTML to markdown
    # - Preserve links and images
    # - Add new schema fields
    
    # Create markdown file
    # cat > "$TARGET_REPO/src/content/$collection/$slug.md" << EOF
    # ---
    # title: "..."
    # publishDate: ...
    # # ... rest of frontmatter
    # ---
    # 
    # Content here...
    # EOF
}

# Loop through all static pages
# for collection in "${COLLECTIONS[@]}"; do
#     find "$SOURCE_REPO/src/pages/$collection" -name "*.astro" -type f | while read -r file; do
#         # Determine slug from file path
#         slug=$(basename $(dirname $file))
#         convert_static_to_markdown "$file" "$collection" "$slug"
#     done
# done

# Validation
# - Build content-engine
# - Compare URLs
# - Check for broken links

echo "Migration complete. Review all files before commit."
```

---

## VALIDATION CHECKLIST

### URL Validation
- [ ] All 209 pages generate successfully
- [ ] No 404 errors on existing URLs
- [ ] All internal links resolve
- [ ] Sitemap matches production

### Content Validation
- [ ] All images display correctly
- [ ] All links are functional
- [ ] Formatting preserved
- [ ] Code blocks render correctly
- [ ] Tables display properly

### SEO Validation
- [ ] All meta titles present
- [ ] All meta descriptions present
- [ ] Canonical URLs set correctly
- [ ] No duplicate content issues

### Schema Validation
- [ ] All frontmatter validates
- [ ] No missing required fields
- [ ] Collection-specific fields correct
- [ ] Dates in correct format

---

## RISK MITIGATION

### High-Risk Pages (SEO-Critical)
**Careers:**
- how-to-join-merchant-navy-india
- merchant-navy-salary-2026
- roadmap-deck-officer-india
- roadmap-marine-engineer-india

**Learn:**
- imu-cet-preparation-guide

**Money:**
- nre-vs-nro-account
- tax-planning-guide
- first-investment-guide

**Rights:**
- contract-red-flags
- mlc-2006-explained
- ship-abandonment

**Tools:**
- salary-calculator
- sea-service-calculator
- seafarer-resume-guide

**Migration Order:** Convert high-risk pages last after validating process on low-risk pages.

---

## ROLLBACK PLAN

If migration fails:
1. Keep production repository unchanged
2. Discard content-engine migration branch
3. Production continues on frozen UI baseline
4. No user impact

---

## EXECUTION AUTHORIZATION REQUIRED

**Status:** PLAN COMPLETE - AWAITING PHASE-3 AUTHORIZATION  
**DO NOT EXECUTE** until:
- Frozen UI is imported
- Routing is validated
- Schema is tested with sample content
- Migration script is reviewed and approved

**Next Phase:** PHASE-3 will execute this plan with proper validation gates.
