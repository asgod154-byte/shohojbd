# SEO Automation + Dark Mode Fixes — Task List

## Phase 1: Configuration & Foundation
- [x] 1.1 Fix `package.json` — move astro, tailwindcss, @tailwindcss/vite, sharp, typescript to devDependencies; set engines.node to >=20.0.0
- [x] 1.2 Fix `astro.config.mjs` — add astro-compress integration and prefetch config
- [x] 1.3 Fix `src/content.config.ts` — add steps field to postSchema
- [x] 1.4 Delete `.pages.yml` — remove CloudCannon trace
- [x] 1.5 Update TODO.md — mark Phase 1 items as complete

## Phase 2: Layout, Meta & Global Styles
- [x] 1. Fix `src/layouts/Layout.astro` — remove hardcoded `data-theme="light"`, FOUC script in place, meta charset/viewport kept here
- [x] 2. Fix `src/components/Meta.astro` — removed duplicate meta charset/viewport
- [x] 3. Fix `src/styles/global.css` — added `@custom-variant dark`, replaced hardcoded colors with CSS variables

## Phase 3: Core Components
- [x] 1. Fix `src/components/Analytics.astro` — removed Cloudflare placeholder, kept Plausible only
- [x] 2. Fix `src/components/Comments.astro` — added TODO comment for Giscus configuration
- [x] 3. Fix `src/components/SavePost.astro` — fixed View Transitions event listeners with DOMContentLoaded + MutationObserver
- [x] 4. Fix `src/components/Navbar.astro` — added aria-expanded, click-based dropdowns, click-outside-to-close mobile menu

## Phase 4: Utilities & Schema Fixes
- [x] 1. Fix `src/lib/content.ts` — removed `estimateReadingTime`, fixed `slugify()` for Bengali, fixed `getTopPostsLastDay()` fallback
- [x] 2. Fix `src/lib/utils.ts` — already has better `estimateReadingTime` with markdown stripping
- [x] 3. Fix `src/lib/schema.ts` — changed author type to Person, added `inLanguage: "bn-BD"` to all schemas

## Phase 5: DRY Refactor — Create Generic Components
- [x] 1. Create `src/components/shared/PostDetail.astro` — generic post detail layout
- [x] 2. Create `src/components/shared/PostList.astro` — generic list for index pages
- [x] 3. Refactor all [slug].astro files to use PostDetail
- [x] 4. Refactor all index.astro files to use PostList
- [x] 5. Fix tag links to use `slugify(tag)` instead of `toLowerCase().replace()`

## Phase 6: Core SEO Components
- [ ] 1. Rewrite `src/components/Meta.astro` — enhanced SEO (noindex, article, article OG tags, title suffix)
- [ ] 2. Update `src/layouts/Layout.astro` — pass through new SEO props
- [ ] 3. Update `src/layouts/LayoutWithSidebar.astro` — pass through new SEO props
- [ ] 4. Add `@custom-variant dark` to `src/styles/global.css` for Tailwind dark mode

## Phase 7: Post Detail Pages (3 files)
- [ ] 5. Update `src/pages/sorkari-seba/[slug].astro` — auto SEO, HowTo schema, FAQ dark fix, prev/next nav
- [ ] 6. Update `src/pages/exam-o-vorti/[slug].astro` — same as above
- [ ] 7. Update `src/pages/local-guide/[slug].astro` — same as above

## Phase 8: Archive/List Pages
- [ ] 8. Update `src/pages/index.astro` — Breadcrumb + Organization schema, image prop
- [ ] 9. Update 3 category index pages (sorkari-seba, exam-o-vorti, local-guide) — image prop
- [ ] 10. Update author/[slug].astro, category/[slug].astro, tag/[slug].astro — image prop
- [ ] 11. Update author/index.astro, category/index.astro, tag/index.astro — image prop

## Phase 9: Static Pages
- [ ] 12. Update `src/pages/about.astro`, `contact.astro`, `privacy.astro` — image prop
- [ ] 13. Update `src/pages/404.astro` — noindex, url, breadcrumb schema

## Phase 10: Analytics
- [ ] 14. Update `src/components/Analytics.astro` — Cloudflare Web Analytics with placeholder

## Phase 11: Build & Verify
- [ ] 15. Run `npm install && npm run build` — zero errors
- [ ] 16. Verify no CloudCannon traces
- [ ] 17. Commit: "feat: complete WordPress-style SEO automation + dark mode fixes"
- [ ] 18. Push to origin main
