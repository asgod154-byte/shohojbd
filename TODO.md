# SEO Automation + Dark Mode Fixes — Task List

## Phase 1: Core SEO Components
- [ ] 1. Rewrite `src/components/Meta.astro` — enhanced SEO (noindex, article, article OG tags, title suffix)
- [ ] 2. Update `src/layouts/Layout.astro` — pass through new SEO props
- [ ] 3. Update `src/layouts/LayoutWithSidebar.astro` — pass through new SEO props
- [ ] 4. Add `@custom-variant dark` to `src/styles/global.css` for Tailwind dark mode

## Phase 2: Post Detail Pages (3 files)
- [ ] 5. Update `src/pages/sorkari-seba/[slug].astro` — auto SEO, HowTo schema, FAQ dark fix, prev/next nav
- [ ] 6. Update `src/pages/exam-o-vorti/[slug].astro` — same as above
- [ ] 7. Update `src/pages/local-guide/[slug].astro` — same as above

## Phase 3: Archive/List Pages
- [ ] 8. Update `src/pages/index.astro` — Breadcrumb + Organization schema, image prop
- [ ] 9. Update 3 category index pages (sorkari-seba, exam-o-vorti, local-guide) — image prop
- [ ] 10. Update author/[slug].astro, category/[slug].astro, tag/[slug].astro — image prop
- [ ] 11. Update author/index.astro, category/index.astro, tag/index.astro — image prop

## Phase 4: Static Pages
- [ ] 12. Update `src/pages/about.astro`, `contact.astro`, `privacy.astro` — image prop
- [ ] 13. Update `src/pages/404.astro` — noindex, url, breadcrumb schema

## Phase 5: Analytics
- [ ] 14. Update `src/components/Analytics.astro` — Cloudflare Web Analytics with placeholder

## Phase 6: Build & Verify
- [ ] 15. Run `npm install && npm run build` — zero errors
- [ ] 16. Verify no CloudCannon traces
- [ ] 17. Commit: "feat: complete WordPress-style SEO automation + dark mode fixes"
- [ ] 18. Push to origin main
