# 🧠 MASTER AI COMMAND — Shohoj BD Full Site Fix & Upgrade

## 📌 Project Context

Repository: `https://github.com/asgod154-byte/shohojbd`
Framework: Astro 7.1.5 + Tailwind CSS v4
Deployment: Cloudflare Pages (`shohojbd.pages.dev`)
CMS: CloudCannon
Language: Bengali (Bangla)

This is a professional Bangla blog site for Bangladesh government services, education, and local information.

---

## 🎯 CRITICAL FIXES (Must Do First)

### Step 1: Fix CloudCannon Configuration Mismatch
**File:** `cloudcannon.json`

Current collection `folder` paths and `preview_path` values are WRONG. They must match `content.config.ts`:

| Collection | Wrong Folder | Correct Folder | Wrong preview_path | Correct preview_path |
|---------|-----------|------------|----------------|-----------------|
| govt-guides | `src/content/govt-guides` | `src/content/sorkari-seba` | `/local-guide/{{slug}}/` | `/sorkari-seba/{{slug}}/` |
| exam-guides | `src/content/exam-guides` | `src/content/exam-o-vorti` | `/exam-o-vorti/{{slug}}/` | ✅ Already correct |
| local-guides | `src/content/local-guides` | `src/content/local-guide` | `/local-guide/{{slug}}/` | ✅ Already correct |

**IMPORTANT:** `govt-guides` preview_path MUST be `/sorkari-seba/{{slug}}/`.

Also fix the `media` section:
```json
"media": {
  "media_folder": "src/assets/images",
  "public_folder": "/assets/images"
}
```

---

### Step 2: Fix Duplicate GitHub Actions
**File:** `.github/workflows/`

Two workflows exist (`deploy.yml` and `pages.yml`). If using Cloudflare Pages Git Integration, delete the entire `.github/workflows/` folder. If using GitHub Actions, merge into one file and delete the other.

**Updated `deploy.yml`:**
```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: shohojbd
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

---

### Step 3: Create README.md
**File:** `README.md` (NEW)

No README exists. Create a professional one with:
- Bangla project description
- Tech stack (Astro 7, Tailwind v4, CloudCannon)
- Installation guide (`npm install && npm run dev`)
- Folder structure
- How to add content (frontmatter format)
- Deployment process
- License

---

### Step 4: Add LICENSE File
**File:** `LICENSE` (NEW)

`package.json` says `ISC`. Create matching LICENSE file:
```
ISC License

Copyright (c) 2026 Shohoj BD Team

Permission to use, copy, modify, and/or distribute this software...
```

---

### Step 5: Update GitHub Repo Description
Replace "Something Loading........." with:
> "A professional Bangla blog for Bangladesh government services, education, and local information — built with Astro + Tailwind CSS."

---

### Step 6: Add Essential public/ Files

**`public/robots.txt`** (NEW):
```
User-agent: *
Allow: /
Sitemap: https://shohojbd.pages.dev/sitemap-index.xml
```

**`public/favicon.svg`** (NEW) — Simple SVG favicon in Bangladesh green-red theme.

**`public/manifest.json`** (NEW) — PWA manifest:
```json
{
  "name": "Shohoj BD",
  "short_name": "ShohojBD",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f8fafc",
  "theme_color": "#006a4e",
  "icons": [
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" }
  ]
}
```

**`public/_headers`** (NEW) — Cloudflare security headers:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

---

### Step 7: Upgrade astro.config.mjs
**File:** `astro.config.mjs`

Add `prefetch` and `image` service:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://shohojbd.pages.dev',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
```

---

### Step 8: Update package.json
**File:** `package.json`

Add `sharp` for image optimization:

```json
{
  "dependencies": {
    "@astrojs/rss": "^4.0.11",
    "@astrojs/sitemap": "^3.7.3",
    "@tailwindcss/vite": "^4.3.3",
    "astro": "^7.1.5",
    "tailwindcss": "^4.3.3",
    "sharp": "^0.33.0"
  }
}
```

Then run `npm install`.

---

### Step 9: Add View Transitions to Layout.astro
**File:** `src/layouts/Layout.astro`

Add `<ViewTransitions />` inside `<head>`:

```astro
---
import { ViewTransitions } from 'astro:transitions';
// ... existing imports
---

<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <ViewTransitions />
  <Meta ... />
  <!-- rest of head -->
</head>
```

---

### Step 10: Add Dark Mode Toggle
**Files:** `src/styles/global.css` + `src/components/Navbar.astro`

Add dark mode CSS variables to `global.css`:

```css
:root {
  --font-bangla: 'Noto Sans Bengali', 'Noto Sans Bengali UI', system-ui, sans-serif;
  --surface: #ffffff;
  --surface-muted: #f8fafc;
  --text: #0f172a;
  --text-muted: #64748b;
  --border: #e2eceb;
  --primary: #006a4e;
  --ring: #d1fae5;
}

[data-theme="dark"] {
  --surface: #0f172a;
  --surface-muted: #1e293b;
  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --border: #334155;
  --primary: #10b981;
  --ring: #064e3b;
}
```

Add a dark mode toggle button in `Navbar.astro` using `localStorage` and `data-theme` attribute (vanilla JS, no framework needed).

---

### Step 11: Image Optimization — Update GuideCard & PostCard
**Files:** `src/components/GuideCard.astro`, `src/components/PostCard.astro`

Replace raw `<img>` with Astro's `<Image />` component:

```astro
---
import { Image } from 'astro:assets';
// ...
---

{coverImage && (
  <Image
    src={coverImage}
    alt={coverImageAlt || title}
    width={800}
    height={450}
    format="webp"
    quality={80}
    class="rounded-xl"
  />
)}
```

---

### Step 12: Upgrade SEO Meta Component
**File:** `src/components/Meta.astro`

Move `<meta charset>` and `<meta viewport>` from `Layout.astro` into `Meta.astro` and add missing tags:

```astro
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#006a4e" />
<meta name="color-scheme" content="light dark" />
<meta name="author" content="Shohoj BD" />
<meta name="robots" content="index, follow" />
<meta property="og:locale" content="bn_BD" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Shohoj BD" />
<meta name="twitter:card" content="summary_large_image" />
```

---

### Step 13: Strengthen Content Schema Validation
**File:** `src/content.config.ts`

Add Bangladesh division enum for `local-guide` collection (optional but recommended):

```ts
const divisions = z.enum([
  "ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল", "সিলেট", "রংপুর", "ময়মনসিংহ"
]);
```

---

### Step 14: Upgrade Search — Add Pagefind
**File:** `src/pages/search.astro`

Current client-side search is fine for small sites. For better performance with 50+ posts:

1. `npm install pagefind`
2. Add post-build step: `npx pagefind --site dist`
3. Update `search.astro` to use Pagefind UI

Alternative: Keep current search but add `fuse.js` for fuzzy search.

---

### Step 15: Add Comments (Giscus)
**File:** `src/components/Comments.astro` (NEW)

Add at the bottom of every `[slug].astro` page:

```astro
---
const { slug } = Astro.props;
---

<script src="https://giscus.app/client.js"
  data-repo="asgod154-byte/shohojbd"
  data-repo-id="YOUR_REPO_ID"
  data-category="Comments"
  data-category-id="YOUR_CATEGORY_ID"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="top"
  data-theme="preferred_color_scheme"
  data-lang="bn"
  data-loading="lazy"
  crossorigin="anonymous"
  async>
</script>
```

**NOTE:** User must configure Giscus at giscus.app and fill in `data-repo-id` and `data-category-id`.

---

### Step 16: Add Analytics
**File:** `src/components/Analytics.astro` (NEW)

Privacy-friendly Plausible Analytics:
```astro
<script defer data-domain="shohojbd.pages.dev" src="https://plausible.io/js/script.js"></script>
```

Alternative: Google Analytics 4 (`gtag.js`) — based on user preference.

---

### Step 17: Make Newsletter Form Functional
**File:** `src/components/Footer.astro`

Current newsletter is UI-only with no action. Wire it up with Formspree:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" placeholder="আপনার ইমেইল" required />
  <button type="submit">সাবস্ক্রাইব</button>
</form>
```

**NOTE:** User must create a form at formspree.io and replace `YOUR_FORM_ID`.

---

### Step 18: Upgrade 404 Page
**File:** `src/pages/404.astro`

Add popular post links and a search box so users who land on a wrong page can find other content.

---

### Step 19: Upgrade RSS Feed
**File:** `src/pages/rss.xml.js`

Current RSS is fine but add `<language>bn</language>` and `<copyright>` tags.

---

### Step 20: Add Breadcrumb JSON-LD Schema
**File:** `src/components/Breadcrumb.astro`

Current breadcrumb UI is fine. Add JSON-LD `BreadcrumbList` schema for Google rich snippets on every page.

---

## 🧪 TESTING CHECKLIST (After All Work)

- [ ] `npm run build` completes with zero errors
- [ ] `npm run preview` renders all pages correctly locally
- [ ] All navbar links work (About, Contact, Privacy, Category pages)
- [ ] All `[slug].astro` dynamic routes work
- [ ] Tag archive pages work
- [ ] Search page works
- [ ] RSS `/rss.xml` generates correctly
- [ ] Sitemap `/sitemap-index.xml` generates correctly
- [ ] Mobile responsive (Chrome DevTools)
- [ ] Dark mode toggle works
- [ ] Image optimization (WebP format) works
- [ ] Lighthouse score: Performance > 90, SEO > 95, Accessibility > 95
- [ ] CloudCannon preview paths are correct

---

## 📁 FINAL FOLDER STRUCTURE (Expected)

```
shohojbd/
├── .github/
│   └── workflows/
│       └── deploy.yml          (merged, single workflow)
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── manifest.json
│   └── _headers
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── AuthorBox.astro
│   │   ├── Breadcrumb.astro
│   │   ├── Comments.astro      (NEW)
│   │   ├── Footer.astro
│   │   ├── GuideCard.astro
│   │   ├── Meta.astro
│   │   ├── Navbar.astro
│   │   ├── Pagination.astro
│   │   ├── PostCard.astro
│   │   ├── ReadingProgress.astro
│   │   ├── RelatedPosts.astro
│   │   ├── SearchBox.astro
│   │   ├── ShareButtons.astro
│   │   ├── Sidebar.astro
│   │   └── TableOfContents.astro
│   ├── content/
│   │   ├── exam-o-vorti/
│   │   ├── local-guide/
│   │   └── sorkari-seba/
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── LayoutWithSidebar.astro
│   ├── lib/
│   │   ├── content.ts
│   │   ├── schema.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── 404.astro
│   │   ├── rss.xml.js
│   │   ├── search.astro
│   │   ├── sorkari-seba/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── exam-o-vorti/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── local-guide/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── tag/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── category/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── author/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── cloudcannon.json            (FIXED paths)
├── CLOUDCANNON_SETUP.md
├── package.json
├── tsconfig.json
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚠️ IMPORTANT NOTES

1. **Before deleting any file**, ensure backup exists.
2. **After fixing CloudCannon config**, sync in CloudCannon dashboard.
3. **Giscus and Formspree** require the user to create their own accounts and fill in IDs — AI will only provide placeholders.
4. **Plausible Analytics** has a free trial; alternative is Google Analytics script.
5. **Dark Mode** uses `localStorage` and `data-theme` attribute — vanilla JS, no framework needed.
6. **Image optimization** requires `sharp` to be installed (`npm install sharp`).
7. **If using Pagefind**, add `npx pagefind --site dist` as a post-build step in GitHub Actions.

---

## 🏁 FINAL STEP

After all work, commit:
```bash
git add .
git commit -m "fix: CloudCannon paths, add SEO, PWA, dark mode, security headers, README, LICENSE"
git push origin main
```

Then check new deployment on Cloudflare Pages.
