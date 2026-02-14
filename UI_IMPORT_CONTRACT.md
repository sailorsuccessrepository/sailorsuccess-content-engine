# UI IMPORT CONTRACT
**Repository:** sailorsuccess-content-engine  
**Purpose:** Define immutable rules for UI integration  
**Status:** BINDING AGREEMENT

---

## CONTRACT TERMS (NON-NEGOTIABLE)

### ARTICLE 1: UI SOURCE AUTHORITY

**Golden Master Repository:** `sailorsuccessrepository/sailorsuccess-production`  
**Frozen Baseline Commit:** `698ba2c18c44e0b861b8cab9` (Netlify Deploy)  
**Canonical Commit:** `b5118ed` (GitHub Repository)

**UI Source Files (READ-ONLY):**
```
sailorsuccess-production/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          [FROZEN]
│   ├── components/
│   │   └── *.astro               [FROZEN]
│   ├── styles/
│   │   └── global.css            [FROZEN]
│   └── ui/
│       ├── layouts/              [FROZEN]
│       ├── components/           [FROZEN]
│       └── styles/               [FROZEN]
├── public/
│   └── *                         [FROZEN]
└── tailwind.config.cjs           [FROZEN]
```

---

## ARTICLE 2: IMPORT METHOD

### 2.1 COPY-ONCE PRINCIPLE

UI files will be **IMPORTED EXACTLY ONCE** from golden master.

**Permitted Action:**
```bash
# ONLY THIS - Copy files from production to content-engine
cp -r sailorsuccess-production/src/layouts/* sailorsuccess-content-engine/src/ui/layouts/
cp -r sailorsuccess-production/src/components/* sailorsuccess-content-engine/src/ui/components/
cp -r sailorsuccess-production/src/styles/* sailorsuccess-content-engine/src/ui/styles/
cp -r sailorsuccess-production/public/* sailorsuccess-content-engine/public/
cp sailorsuccess-production/tailwind.config.cjs sailorsuccess-content-engine/
```

**Prohibited Actions:**
```bash
# ❌ NEVER - Regenerate UI
npx create-astro@latest --template ...

# ❌ NEVER - Pull from git
git clone ... # to get UI

# ❌ NEVER - Rebuild from scratch
npm init ... # to recreate UI

# ❌ NEVER - Import from external sources
curl ... # to fetch UI from CDN
```

---

### 2.2 NO REGENERATION CLAUSE

**UI files are ARTIFACTS, not SOURCE CODE.**

- ❌ UI will NEVER be regenerated
- ❌ UI will NEVER be rebuilt
- ❌ UI will NEVER be recreated
- ❌ UI will NEVER be "freshly installed"

**Violation = Contract Breach**

---

### 2.3 NO INFERENCE CLAUSE

**UI structure will NEVER be inferred or assumed.**

If a UI file is missing:
- ✅ Copy from golden master
- ❌ Recreate from memory
- ❌ Infer from other files
- ❌ Generate programmatically

**Example Scenario:**
```
Problem: Navigation.astro is missing
❌ WRONG: Create new Navigation.astro based on common patterns
✅ RIGHT: cp production/src/components/Navigation.astro → content-engine/
```

---

### 2.4 NO OPTIMIZATION CLAUSE

**UI files will NEVER be optimized, refactored, or improved.**

Prohibited "improvements":
- ❌ Remove unused CSS
- ❌ Optimize images
- ❌ Refactor component structure
- ❌ Update Tailwind classes
- ❌ Modernize JavaScript
- ❌ Fix "linting errors"
- ❌ Apply "best practices"

**The UI is PERFECT AS-IS.**

---

## ARTICLE 3: FILE MODIFICATION RULES

### 3.1 ZERO-MODIFICATION GUARANTEE

**UI files are WRITE-ONCE, READ-MANY.**

```typescript
// Permitted
import Layout from '@/ui/layouts/Layout.astro';  // ✅ READ
<Layout><Content /></Layout>                     // ✅ USE

// Prohibited
// Edit Layout.astro                             // ❌ MODIFY
// Refactor Layout.astro                         // ❌ CHANGE
// Optimize Layout.astro                         // ❌ IMPROVE
```

---

### 3.2 FILE INTEGRITY VERIFICATION

All UI files must match golden master byte-for-byte (excluding comments/timestamps).

**Verification Method:**
```bash
# Compare file hashes
md5sum production/src/layouts/Layout.astro
md5sum content-engine/src/ui/layouts/Layout.astro
# → Must match
```

**If Mismatch Detected:**
1. Delete modified file
2. Re-copy from golden master
3. Investigate how modification occurred
4. Prevent future modifications

---

### 3.3 EXCEPTION: ROUTING INTEGRATION

**ONLY PERMITTED MODIFICATION:** Import paths in routing files.

**Example - Allowed Change:**
```diff
# src/pages/learn/[...slug].astro

- <!-- NO UI IMPLEMENTATION -->
- <h1>ROUTING ENGINE</h1>
+ import Layout from '@/ui/layouts/Layout.astro';
+ <Layout>
+   <h1>{entry.data.title}</h1>
+   <Content />
+ </Layout>
```

**Scope of Permission:**
- ✅ Add import statements
- ✅ Wrap content in Layout
- ✅ Pass props to Layout
- ❌ Modify Layout itself
- ❌ Modify components
- ❌ Change styling

---

## ARTICLE 4: UI AS BLACK BOX

### 4.1 NO INTERNAL KNOWLEDGE

**Developers must treat UI as opaque.**

Forbidden knowledge:
- ❌ How components are structured
- ❌ Why certain classes are used
- ❌ What the Tailwind config contains
- ❌ How styles cascade

**Required mindset:**
> "I don't know how it works. I don't care how it works. I just import and use."

---

### 4.2 NO DEBUGGING UI

**If UI breaks:**
- ❌ Don't fix the UI code
- ❌ Don't debug the UI code
- ✅ Check if golden master copy is intact
- ✅ Verify import paths are correct
- ✅ Ensure props are passed correctly

**If UI code itself has a bug:**
- ✅ Document the bug
- ✅ Report to repository owner
- ❌ Fix it yourself

---

### 4.3 NO UI ASSUMPTIONS

**Never assume UI capabilities.**

Wrong approach:
```typescript
// ❌ Assuming Layout accepts a 'theme' prop
<Layout theme="dark">
```

Right approach:
```typescript
// ✅ Only pass props that golden master expects
// Read Layout.astro from golden master to see what props it accepts
// Use only those props
```

---

## ARTICLE 5: VERSION CONTROL

### 5.1 UI COMMIT RULES

**UI files tracked differently from content.**

```bash
# Initial UI import - ONE TIME ONLY
git add src/ui/ public/ tailwind.config.cjs
git commit -m "Import frozen UI from golden master (commit b5118ed)"

# Subsequent commits - NEVER touch UI
git add src/content/
git add src/pages/
git commit -m "Add new content"

# ❌ NEVER
git commit -m "Update UI" # PROHIBITED
git commit -m "Fix Layout" # PROHIBITED
git commit -m "Optimize styles" # PROHIBITED
```

---

### 5.2 UI BRANCH PROTECTION

**UI directories are protected.**

`.gitignore` rules:
```
# DO NOT IGNORE UI
# ❌ src/ui/
# ❌ public/
# ❌ tailwind.config.cjs

# These must be tracked
```

**Branch protection:**
- Any commit touching `src/ui/*` requires review
- Any commit touching `tailwind.config.cjs` requires review
- Any commit touching `public/*` (except uploads) requires review

---

### 5.3 GOLDEN MASTER SYNC

**If golden master updates (rare):**

```bash
# ⚠️ Only if golden master is updated by authorized source
# 1. Verify new golden master commit hash
# 2. Delete current UI
rm -rf src/ui/ public/* tailwind.config.cjs

# 3. Import new golden master
cp -r production/src/ui/* content-engine/src/ui/
cp -r production/public/* content-engine/public/
cp production/tailwind.config.cjs content-engine/

# 4. Commit with reference
git commit -m "Update UI from new golden master (commit XXXXXXX)"
```

**Frequency:** Once per year maximum (ideally never)

---

## ARTICLE 6: INTEGRATION PATTERN

### 6.1 STANDARD INTEGRATION

**Every route file follows this pattern:**

```astro
---
// 1. Import content collection
import { getCollection } from 'astro:content';

// 2. Generate static paths
export async function getStaticPaths() {
  const entries = await getCollection('COLLECTION');
  return entries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

// 3. Get entry and render content
const { entry } = Astro.props;
const { Content } = await entry.render();

// 4. Import UI (FROZEN)
import Layout from '@/ui/layouts/Layout.astro';
---

<!-- 5. Use UI (NO MODIFICATIONS) -->
<Layout title={entry.data.title}>
  <article>
    <h1>{entry.data.title}</h1>
    <Content />
  </article>
</Layout>
```

**Key Points:**
- ✅ Import from `@/ui/*` path
- ✅ Pass only documented props
- ✅ Wrap content only
- ❌ Don't modify Layout
- ❌ Don't add classes to Layout

---

### 6.2 PROP VALIDATION

**Only pass props that Layout expects.**

**How to discover expected props:**
1. Open `production/src/layouts/Layout.astro`
2. Read the Astro.props interface
3. Pass only those props
4. Never invent new props

**Example:**
```astro
---
// ✅ Read Layout.astro to find this interface
interface Props {
  title: string;
  description?: string;
}
---

<!-- ✅ Use only documented props -->
<Layout 
  title={entry.data.title}
  description={entry.data.description}
>
```

---

## ARTICLE 7: TESTING & VALIDATION

### 7.1 UI INTEGRITY TESTS

**Before every deploy:**

```bash
# 1. Verify UI files unchanged
git diff --exit-code src/ui/
# → Must return 0 (no changes)

# 2. Verify public assets unchanged
git diff --exit-code public/
# → Must return 0 (no changes)

# 3. Verify Tailwind config unchanged
git diff --exit-code tailwind.config.cjs
# → Must return 0 (no changes)
```

---

### 7.2 BUILD VALIDATION

**UI integration must not break builds.**

```bash
# Test build
npm run build

# Expected output
✓ Generating static routes
✓ All layouts rendered
✓ No UI errors
```

**If build fails:**
1. Check import paths
2. Check prop passing
3. ❌ DO NOT modify UI to fix build
4. ✅ Fix content/routing to match UI expectations

---

### 7.3 VISUAL REGRESSION TESTING

**UI appearance must not change.**

**Method:**
1. Screenshot production site
2. Screenshot content-engine site
3. Compare pixel-by-pixel
4. Must be identical

**Tools:**
- Percy.io
- Chromatic
- BackstopJS

**Tolerance:** 0% difference allowed

---

## ARTICLE 8: EMERGENCY PROCEDURES

### 8.1 UI CORRUPTION RECOVERY

**If UI is accidentally modified:**

```bash
# IMMEDIATE ACTION
# 1. Stop all work
# 2. Rollback git
git checkout HEAD -- src/ui/ public/ tailwind.config.cjs

# 3. Verify restoration
git status
# → Should show "nothing to commit, working tree clean"

# 4. If rollback fails, re-import from golden master
rm -rf src/ui/ public/* tailwind.config.cjs
cp -r production/... content-engine/...

# 5. Document incident
echo "UI corruption at $(date)" >> UI_INCIDENTS.log
```

---

### 8.2 PRODUCTION ROLLBACK

**If UI integration breaks production:**

```bash
# EMERGENCY ROLLBACK
# 1. Revert to pre-UI commit
git log --oneline  # Find last good commit
git revert HEAD~1  # Or specific commit

# 2. Redeploy
npm run build
netlify deploy --prod

# 3. Root cause analysis
# - What broke?
# - How did UI get modified?
# - Update safeguards
```

---

## ARTICLE 9: ENFORCEMENT

### 9.1 AUTOMATED CHECKS

**Pre-commit hooks:**

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Check if UI files are modified
if git diff --cached --name-only | grep -E '^src/ui/|^public/|tailwind.config.cjs'; then
  echo "❌ ERROR: UI files cannot be modified"
  echo "UI Import Contract violation"
  exit 1
fi
```

---

### 9.2 CODE REVIEW REQUIREMENTS

**Any PR must:**
- [ ] Not touch `src/ui/*`
- [ ] Not touch `public/*` (except content uploads)
- [ ] Not touch `tailwind.config.cjs`
- [ ] Only import UI, never modify

**Reviewer checklist:**
```
[ ] No UI file modifications
[ ] Import paths correct
[ ] Props match Layout interface
[ ] No style overrides
```

---

### 9.3 VIOLATION CONSEQUENCES

**If UI Import Contract is violated:**

1. **Immediate:** Revert all changes
2. **Short-term:** Re-import from golden master
3. **Long-term:** Update safeguards to prevent recurrence

**No exceptions. No compromises.**

---

## ARTICLE 10: ACCEPTANCE

By proceeding with Phase-3, all parties agree to:

✅ Treat UI as immutable artifacts  
✅ Copy UI exactly once from golden master  
✅ Never regenerate, infer, or optimize UI  
✅ Never modify UI files  
✅ Import and use UI as black box  
✅ Verify UI integrity before every deploy  
✅ Follow emergency procedures if UI is corrupted  

---

## CONTRACT SIGNATURE

```
═══════════════════════════════════════════════════════════════════
UI IMPORT CONTRACT
Effective Date: 2026-02-14
Repository: sailorsuccess-content-engine
Golden Master: sailorsuccess-production (commit b5118ed)
═══════════════════════════════════════════════════════════════════

Terms: BINDING AND IMMUTABLE
Status: ACCEPTED AND ENFORCED

Agreed by: System Architect
Witnessed by: Content Engine Repository
Governed by: Phase-2 Authorization
```

---

**UI IMPORT CONTRACT: ACTIVE**  
**VIOLATIONS WILL RESULT IN IMMEDIATE ROLLBACK**
