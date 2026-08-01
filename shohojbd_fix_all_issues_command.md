# 🧠 MASTER AI COMMAND — Fix All Remaining Issues in Shohoj BD

## 📌 Project Context

Repository: `https://github.com/asgod154-byte/shohojbd`
Framework: Astro 7.1.5 + Tailwind CSS v4
Deployment: Cloudflare Pages (`shohojbd.pages.dev`)
CMS: CloudCannon
Language: Bengali (Bangla)
Dark Mode: Recently fixed (CSS variables working)

---

## 🎯 CRITICAL FIXES (Must Do First)

### Step 1: Fix GuideCard.astro — Rewrite Complete Component

**File:** `src/components/GuideCard.astro`

Current file is only 332 bytes — this is BROKEN/INCOMPLETE. Rewrite it to match PostCard.astro's quality (4,388 bytes).

The new GuideCard MUST include:
- Cover image with Astro `<Image />` component (lazy loading, WebP)
- Title with 2-line clamp
- Description with 3-line clamp
- Publication date in Bengali locale
- Author name
- Category badge
- Tags (first 3)
- "Read more" link
- Hover lift effect
- Dark mode support using CSS variables ONLY

DO NOT use hardcoded colors. Use ONLY:
- `bg-[var(--surface)]` for card background
- `text-[var(--text)]` for title
- `text-[var(--text-muted)]` for description, date, author
- `border-[var(--border)]` for borders
- `hover:shadow-lg` for hover effect

Props interface:
```typescript
interface Props {
  title: string;
  description: string;
  slug: string;
  collection: string;
  pubDate: Date;
  author: string;
  category: string;
  tags: string[];
  coverImage?: string;
  coverImageAlt?: string;
  featured?: boolean;
}
```

---

### Step 2: Delete Duplicate CloudCannon Config

**Action:** Delete `cloudcannon.config.yml` from repository root.

Keep ONLY `cloudcannon.json` (the correct one with 7,050 bytes).

Run: `git rm cloudcannon.config.yml`

---

### Step 3: Delete favicon_io.zip from Root

**Action:** Delete `favicon_io.zip` from repository root.

The extracted files already exist in `public/favicon_io/`.

Run: `git rm favicon_io.zip`

---

### Step 4: Create src/assets/images/ Folder

**Action:** Create the missing folder and add .gitkeep.

```bash
mkdir -p src/assets/images
touch src/assets/images/.gitkeep
```

This is REQUIRED for CloudCannon image uploads to work.

---

### Step 5: Add Sample Content Posts

**Action:** Create at least 2 sample posts in EACH collection.

**Collection 1: src/content/sorkari-seba/nid-card-guide.md**
```markdown
---
title: "জাতীয় পরিচয়পত্র (NID) কীভাবে করবেন"
description: "NID কার্ড করার সম্পূর্ণ প্রক্রিয়া, প্রয়োজনীয় কাগজপত্র এবং আবেদন পদ্ধতি"
author: "Shohoj BD"
category: "NID/জন্ম নিবন্ধন"
tags: ["NID", "জাতীয় পরিচয়পত্র", "সরকারি সেবা", "ভোটার আইডি"]
pubDate: 2026-08-01
updatedDate: 2026-08-01
draft: false
featured: true
coverImage: "/assets/images/nid-card.webp"
coverImageAlt: "বাংলাদেশের জাতীয় পরিচয়পত্র"
officialLinks:
  - label: "NID অনলাইন আবেদন"
    url: "https://services.nidw.gov.bd/"
  - label: "নির্বাচন কমিশন"
    url: "https://www.ecs.gov.bd/"
faq:
  - question: "NID করতে কত টাকা লাগে?"
    answer: "নতুন NID কার্ড করতে বিনামূল্যে। তবে হারিয়ে গেলে ডুপ্লিকেট করতে ৩৪০ টাকা।"
  - question: "কতদিনে NID পাওয়া যায়?"
    answer: "আবেদনের ১৫-৩০ কর্মদিবসের মধ্যে NID কার্ড পাওয়া যায়।"
---

# জাতীয় পরিচয়পত্র (NID) কীভাবে করবেন

বাংলাদেশের নাগরিক হিসেবে **জাতীয় পরিচয়পত্র (NID)** একটি অত্যন্ত গুরুত্বপূর্ণ দলিল।

## প্রয়োজনীয় কাগজপত্র

1. জন্ম নিবন্ধন সনদ
2. পাসপোর্ট সাইজ ছবি
3. পিতা-মাতার NID কপি
4. ব্যাংক চালান (যদি প্রযোজ্য)

## আবেদন পদ্ধতি

### ধাপ ১: অনলাইন আবেদন
- [services.nidw.gov.bd](https://services.nidw.gov.bd/) এ যান
- "নতুন ভোটার নিবন্ধন" এ ক্লিক করুন

### ধাপ ২: তথ্য পূরণ
- ব্যক্তিগত তথ্য দিন
- ঠিকানা বিবরণ দিন
- ছবি আপলোড করুন

### ধাপ ৩: বায়োমেট্রিক
- নির্ধারিত তারিখে উপজেলা/থানা নির্বাচন কমিশন অফিসে যান
- আঙুলের ছাপ ও চোখের আইরিশ স্ক্যান করুন

## সরকারি ফি

| সেবা | ফি |
|------|-----|
| নতুন NID | বিনামূল্যে |
| ডুপ্লিকেট | ৩৪০ টাকা |
| সংশোধন | ৩৪০ টাকা |

## যোগাযোগ

- **ওয়েবসাইট:** [services.nidw.gov.bd](https://services.nidw.gov.bd/)
- **হেল্পলাইন:** ১৬৫৪৩
```

**Collection 2: src/content/exam-o-vorti/bcs-preparation.md**
```markdown
---
title: "বিসিএস প্রিলিমিনারি প্রস্তুতি: সম্পূর্ণ গাইড"
description: "৪৪তম বিসিএস প্রিলিমিনারি পরীক্ষার জন্য কার্যকর প্রস্তুতি কৌশল ও সাজেশন"
author: "Shohoj BD"
category: "বিসিএস"
tags: ["বিসিএস", "BCS", "প্রিলিমিনারি", "সরকারি চাকরি", "পরীক্ষা প্রস্তুতি"]
pubDate: 2026-08-01
updatedDate: 2026-08-01
draft: false
featured: true
coverImage: "/assets/images/bcs-exam.webp"
coverImageAlt: "বিসিএস পরীক্ষার প্রস্তুতি"
officialLinks:
  - label: "বিপিএসসি"
    url: "https://bpsc.gov.bd/"
  - label: "বিসিএস পরীক্ষার তালিকা"
    url: "https://bpsc.gov.bd/exam_schedule"
faq:
  - question: "বিসিএস প্রিলিমিনারিতে কত নম্বর থাকে?"
    answer: "মোট ২০০ নম্বরের MCQ পরীক্ষা। পাস মার্ক ৫০%।"
  - question: "বিসিএসে কত বিষয় থাকে?"
    answer: "বাংলা, ইংরেজি, বাংলাদেশ বিষয়াবলী, আন্তর্জাতিক বিষয়াবলী, সাধারণ বিজ্ঞান, গাণিতিক যুক্তি, মানসিক দক্ষতা।"
---

# বিসিএস প্রিলিমিনারি প্রস্তুতি: সম্পূর্ণ গাইড

৪৪তম বিসিএস প্রিলিমিনারি পরীক্ষার জন্য সঠিক প্রস্তুতি নিন।

## পরীক্ষার গঠন

| বিষয় | নম্বর |
|--------|--------|
| বাংলা | ৩৫ |
| ইংরেজি | ৩৫ |
| সাধারণ বিজ্ঞান | ১৫ |
| বাংলাদেশ বিষয়াবলী | ৩০ |
| আন্তর্জাতিক বিষয়াবলী | ২০ |
| গাণিতিক যুক্তি | ১৫ |
| মানসিক দক্ষতা | ১৫ |
| মোট | ২০০ |

## প্রস্তুতির কৌশল

### ১. নিয়মিত পড়াশোনা
- প্রতিদিন ৬-৮ ঘণ্টা পড়ুন
- বিষয়ভিত্তিক রুটিন তৈরি করুন

### ২. মডেল টেস্ট
- সপ্তাহে ২-৩টি মডেল টেস্ট দিন
- ভুলগুলো নোট করুন

### ৩. পূর্ববর্তী প্রশ্ন বিশ্লেষণ
- গত ১০ বছরের প্রশ্ন সমাধান করুন
- প্যাটার্ন বুঝুন

## সাজেশন

- **বাংলা:** ব্যাকরণ ও সাহিত্য সমানভাবে পড়ুন
- **ইংরেজি:** ভোকাবুলারি ও গ্রামারে জোর দিন
- **জিকে:** দৈনিক পত্রিকা পড়ুন

## যোগাযোগ

- **ওয়েবসাইট:** [bpsc.gov.bd](https://bpsc.gov.bd/)
- **হেল্পলাইন:** ১৬৫৪৩
```

**Collection 3: src/content/local-guide/coxs-bazar-travel.md**
```markdown
---
title: "কক্সবাজার ভ্রমণ গাইড ২০২৬"
description: "কক্সবাজার ভ্রমণের সম্পূর্ণ তথ্য — কীভাবে যাবেন, কোথায় থাকবেন, কোথায় ঘুরবেন"
author: "Shohoj BD"
category: "ভ্রমণ"
tags: ["কক্সবাজার", "ভ্রমণ", "সমুদ্র সৈকত", "ট্যুরিস্ট স্পট", "চট্টগ্রাম বিভাগ"]
pubDate: 2026-08-01
updatedDate: 2026-08-01
draft: false
featured: true
coverImage: "/assets/images/coxs-bazar.webp"
coverImageAlt: "কক্সবাজার সমুদ্র সৈকত"
placeType: "tourist-spot"
division: "চট্টগ্রাম"
district: "কক্সবাজার"
address: "কক্সবাজার সদর, চট্টগ্রাম বিভাগ"
lat: 21.4272
lng: 92.0058
officialLinks:
  - label: "কক্সবাজার জেলা প্রশাসন"
    url: "https://coxsbazar.gov.bd/"
faq:
  - question: "কক্সবাজার যেতে কত খরচ হয়?"
    answer: "ঢাকা থেকে বাসে ৮০০-১৫০০ টাকা। হোটেল ১৫০০-৫০০০ টাকা/রাত।"
  - question: "কক্সবাজারে যাওয়ার সেরা সময় কবে?"
    answer: "নভেম্বর থেকে ফেব্রুয়ারি — আবহাওয়া সবচেয়ে আরামদায়ক।"
---

# কক্সবাজার ভ্রমণ গাইড ২০২৬

**কক্সবাজার** — বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত (১২০ কিমি)।

## কীভাবে যাবেন

### বাস (ঢাকা থেকে)
| কোম্পানি | ভাড়া | সময় |
|----------|-------|-------|
| হানিফ এন্টারপ্রাইজ | ৮০০-১২০০ টাকা | ১০-১২ ঘণ্টা |
| শ্যামলী পরিবহন | ১০০০-১৫০০ টাকা | ১০-১২ ঘণ্টা |
| সৌদিয়া | ১২০০-১৮০০ টাকা | ১০-১২ ঘণ্টা |

### ট্রেন + বাস
- ঢাকা → চট্টগ্রাম (ট্রেন)
- চট্টগ্রাম → কক্সবাজার (বাস/মাইক্রো)

## কোথায় থাকবেন

### বাজেট হোটেল (১৫০০-৩০০০ টাকা)
- Hotel Sea Crown
- Hotel The Cox Today

### মিড-রেঞ্জ (৩০০০-৬০০০ টাকা)
- Long Beach Hotel
- Sayeman Beach Resort

### লাক্সারি (৬০০০+ টাকা)
- Royal Tulip Sea Pearl Beach Resort
- Mermaid Beach Resort

## দর্শনীয় স্থান

1. **লাবণী পয়েন্ট** — মূল সৈকত, সবচেয়ে জনপ্রিয়
2. **হিমছড়ি** — পাহাড় ও ঝর্ণা
3. **ইনানী বিচ** — শান্ত পরিবেশ
4. **মহেশখালী** — দ্বীপ ভ্রমণ
5. **সেন্ট মার্টিন** — প্রবাল দ্বীপ (নভেম্বর-ফেব্রুয়ারি)

## ট্রাভেল টিপস

- সূর্যোদয় দেখুন লাবণী পয়েন্টে
- সেন্ট মার্টিন যেতে আগে থেকে শিপ টিকিট কাটুন
- স্থানীয় খাবার ট্রাই করুন — মাছ ভাজা, ঝাল মুড়ি

## যোগাযোগ

- **জেলা প্রশাসন:** [coxsbazar.gov.bd](https://coxsbazar.gov.bd/)
- **ট্যুরিস্ট হেল্পলাইন:** ০১৮১২-৩৪৫৬৭৮
```

---

### Step 6: Update .gitignore

**File:** `.gitignore`

Current file is only 39 bytes — TOO MINIMAL. Replace with:

```
# Dependencies
node_modules/

# Build output
dist/

# Environment
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*

# OS files
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo

# Temporary
*.tmp
*.temp

# CloudCannon
.cloudcannon/

# Generated
slug_refs.txt
```

---

### Step 7: Clean Up Root Directory

**Action:** Move or delete these files:

```bash
# Option A: Move to docs folder
mkdir -p docs
git mv "Site Fix and Upgrade" docs/

# Option B: Delete if no longer needed
git rm "Site Fix and Upgrade"

# Also delete if slug_refs.txt is temporary
git rm slug_refs.txt
```

---

### Step 8: Add Canonical URL to Meta.astro

**File:** `src/components/Meta.astro`

Add inside `<head>`:
```astro
<link rel="canonical" href={pageUrl} />
```

Also add OG image dimensions:
```astro
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

---

### Step 9: Add Homepage JSON-LD Schema

**File:** `src/pages/index.astro`

Add structured data in `<head>` via `<Meta>` component or inline:

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Shohoj BD",
  "url": "https://shohojbd.pages.dev",
  "description": "বাংলাদেশের সরকারি সেবা, শিক্ষা ও স্থানীয় তথ্যের জন্য একটি পেশাদার বাংলা ব্লগ।",
  "inLanguage": "bn",
  "publisher": {
    "@type": "Organization",
    "name": "Shohoj BD",
    "url": "https://shohojbd.pages.dev",
    "logo": {
      "@type": "ImageObject",
      "url": "https://shohojbd.pages.dev/favicon.svg"
    }
  }
})} />
```

---

### Step 10: Add Google Fonts Preconnect

**File:** `src/layouts/Layout.astro`

Add inside `<head>` BEFORE the Meta component:
```astro
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

---

### Step 11: Upgrade 404 Page

**File:** `src/pages/404.astro`

Add:
- Search box (reuse SearchBox component)
- Links to popular posts
- Better styling with CSS variables
- "Go Home" button with primary color

Example structure:
```astro
---
import Layout from "../layouts/Layout.astro";
import SearchBox from "../components/SearchBox.astro";
---

<Layout title="পেজ খুঁজে পাওয়া যায়নি | Shohoj BD">
  <div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-6xl font-bold text-[var(--primary)] mb-4">404</h1>
    <p class="text-xl text-[var(--text-muted)] mb-8">
      দুঃখিত, আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি।
    </p>
    <div class="w-full max-w-md mb-8">
      <SearchBox />
    </div>
    <a href="/" class="px-6 py-3 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition">
      হোমপেজে যান
    </a>
  </div>
</Layout>
```

---

### Step 12: Add Service Worker for PWA

**File:** `public/sw.js` (NEW)

```javascript
const CACHE_NAME = 'shohojbd-v1';
const urlsToCache = [
  '/',
  '/sorkari-seba/',
  '/exam-o-vorti/',
  '/local-guide/',
  '/about/',
  '/contact/',
  '/favicon.svg',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});
```

**File:** `src/layouts/Layout.astro`

Add registration script:
```astro
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
</script>
```

---

### Step 13: Verify All Components Use CSS Variables

**Check EVERY component for these patterns and replace:**

| ❌ Bad (Hardcoded) | ✅ Good (CSS Variable) |
|-------------------|------------------------|
| `bg-white` | `bg-[var(--surface)]` |
| `bg-slate-50` | `bg-[var(--surface-muted)]` |
| `bg-slate-100` | `bg-[var(--surface-muted)]` |
| `text-slate-900` | `text-[var(--text)]` |
| `text-slate-700` | `text-[var(--text)]` |
| `text-slate-600` | `text-[var(--text-muted)]` |
| `text-slate-500` | `text-[var(--text-muted)]` |
| `border-slate-200` | `border-[var(--border)]` |
| `border-slate-100` | `border-[var(--border)]` |
| `text-emerald-700` | `text-[var(--primary)]` |
| `bg-emerald-50` | `bg-[var(--primary)]/10` |
| `#ffffff` | `var(--surface)` |
| `#0f172a` | `var(--text)` |
| `#64748b` | `var(--text-muted)` |
| `#e2eceb` | `var(--border)` |

**Files to scan:**
- src/components/GuideCard.astro
- src/components/PostCard.astro
- src/components/SearchBox.astro
- src/components/ShareButtons.astro
- src/components/Pagination.astro
- src/components/Sidebar.astro
- src/components/Navbar.astro
- src/components/Footer.astro
- src/components/AuthorBox.astro
- src/components/Breadcrumb.astro
- src/components/TableOfContents.astro
- src/components/RelatedPosts.astro
- src/components/ReadingProgress.astro
- src/pages/index.astro
- src/pages/404.astro
- src/pages/about.astro
- src/pages/contact.astro
- src/pages/privacy.astro
- All [slug].astro pages
- All index.astro pages

---

## 🧪 TESTING CHECKLIST (After All Fixes)

```
Build & Deploy:
  [ ] npm run build completes with zero errors
  [ ] npm run preview works locally
  [ ] Cloudflare Pages deploy succeeds

Content:
  [ ] Homepage shows featured posts
  [ ] Homepage shows latest posts
  [ ] Category pages list posts
  [ ] Detail pages render full article
  [ ] Search finds content
  [ ] RSS /rss.xml validates
  [ ] Sitemap /sitemap-index.xml works

Dark Mode:
  [ ] Toggle works on all pages
  [ ] No white backgrounds in dark mode
  [ ] All text is readable
  [ ] Cards, sidebar, footer adapt
  [ ] Mobile menu adapts
  [ ] Code blocks look good
  [ ] Tables are readable

CMS:
  [ ] CloudCannon syncs correctly
  [ ] All 3 collections visible
  [ ] Can create new post
  [ ] Can upload image
  [ ] Preview shows correctly

SEO:
  [ ] Meta tags present on all pages
  [ ] Canonical URL on all pages
  [ ] OG tags with dimensions
  [ ] JSON-LD on homepage
  [ ] robots.txt accessible
  [ ] Lighthouse SEO > 95

Performance:
  [ ] Lighthouse Performance > 90
  [ ] Images are WebP
  [ ] No console errors
  [ ] Mobile responsive
  [ ] PWA manifest works
```

---

## ⚠️ IMPORTANT NOTES

1. **Content is CRITICAL** — Without posts, the site is empty. Add at least 2-3 per collection.
2. **GuideCard.astro** — The 332-byte file is almost certainly broken. Rewrite completely.
3. **CloudCannon** — After pushing changes, go to CloudCannon dashboard and click "Sync".
4. **Giscus Comments** — Go to giscus.app → Configure → Get repo-id and category-id → Fill in Comments.astro.
5. **Formspree Newsletter** — Go to formspree.io → Create form → Get form ID → Fill in Footer.astro.
6. **Plausible Analytics** — Sign up at plausible.io → Add domain → Or remove Analytics.astro if not using.
7. **Images** — For sample posts, use placeholder images from picsum.photos or unsplash until you have real ones.

---

## 🏁 FINAL COMMIT

After all fixes:
```bash
git add .
git commit -m "fix: rewrite GuideCard, add content, cleanup repo, add PWA, fix SEO"
git push origin main
```

Then check Cloudflare Pages deployment and CloudCannon sync.
