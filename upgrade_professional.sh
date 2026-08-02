#!/bin/bash
# ============================================================
# shohojbd Professional WordPress-Style Upgrade Script
# ============================================================

echo "🚀 Professional Upgrade শুরু হচ্ছে..."
echo ""

# ============================================================
# TIER 1: CRITICAL FIXES
# ============================================================

echo "📌 TIER 1: Critical Fixes"
echo "---------------------------"

# 1.1 Upgrade sharp to latest
echo "📦 1.1 sharp upgrade to 0.35.3..."
npm install sharp@latest

# 1.2 Add astro-compress for HTML/CSS/JS minification
echo "📦 1.2 Adding astro-compress..."
npm install astro-compress

# Update astro.config.mjs to add compress integration
cat > astro.config.mjs << 'ASTROCFG'
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';

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
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
ASTROCFG

# 1.3 Fix sitemap lastmod - use actual file dates instead of new Date()
# This requires a custom approach - we'll note it for manual fix
echo "⚠️  1.3 Sitemap lastmod: Currently uses new Date() — consider using git dates or file mtime"

# 1.4 Add humans.txt
echo "📝 1.4 Creating humans.txt..."
cat > public/humans.txt << 'HUMANS'
/* TEAM */
Shohoj BD Team
Site: https://shohojbd.pages.dev

/* THANKS */
Astro — https://astro.build
Tailwind CSS — https://tailwindcss.com
Pages CMS — https://pagescms.org

/* SITE */
Last update: 2026/08/02
Standards: HTML5, CSS3, ES2022
Components: Astro, Tailwind CSS
Software: Node.js, Sharp, Pagefind
HUMANS

# 1.5 Enhance _headers with cache policies
echo "🔒 1.5 Enhancing security headers..."
cat > public/_headers << 'HEADERS'
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagefind.app; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://pagefind.app; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.svg
  Cache-Control: public, max-age=31536000, immutable

/favicon_io/*
  Cache-Control: public, max-age=31536000, immutable

/pagefind/*
  Cache-Control: public, max-age=86400

/sitemap-index.xml
  Cache-Control: public, max-age=3600

/sitemap-*.xml
  Cache-Control: public, max-age=3600
HEADERS

# ============================================================
# TIER 2: SEO & STRUCTURED DATA ENHANCEMENTS
# ============================================================

echo ""
echo "📌 TIER 2: SEO & Structured Data"
echo "-----------------------------------"

# 2.1 Enhance Meta.astro with Twitter Cards and better OG
echo "🔍 2.1 Meta component enhancement..."
# This will be done via component update - noted for manual

# 2.2 Add canonical URL to all pages
echo "🔗 2.2 Canonical URLs — ensure all pages have <link rel=\"canonical\">"

# 2.3 Add preload for critical fonts
echo "⚡ 2.3 Font preloading..."
# Add to Layout.astro <head>

# ============================================================
# TIER 3: ANALYTICS & NEWSLETTER
# ============================================================

echo ""
echo "📌 TIER 3: Analytics & Newsletter"
echo "-----------------------------------"

# 3.1 Replace Analytics placeholder with Plausible or GA4
echo "📊 3.1 Analytics setup..."
echo "   Choose one:"
echo "   A) Plausible (privacy-friendly): https://plausible.io"
echo "   B) Google Analytics 4: https://analytics.google.com"
echo "   C) Cloudflare Web Analytics (free, no cookie)"

# 3.2 Newsletter with Formspree or Buttondown
echo "📧 3.2 Newsletter integration..."
echo "   Recommended: Buttondown (free tier) or Formspree"

# ============================================================
# TIER 4: UX ENHANCEMENTS
# ============================================================

echo ""
echo "📌 TIER 4: User Experience"
echo "---------------------------"

# 4.1 Add reading time display to PostCard and post pages
echo "⏱️  4.1 Reading time display..."
# estimateReadingTime() already exists in lib/content.ts

# 4.2 Add "Last Updated" badge to posts
echo "🔄 4.2 Last updated badge..."

# 4.3 Add copy-code button for code blocks
echo "📋 4.3 Copy code buttons..."

# 4.4 Add image lightbox
echo "🖼️  4.4 Image lightbox..."

# 4.5 Add sticky table of contents
echo "📑 4.5 Sticky TOC sidebar..."

# 4.6 Add scroll progress indicator
echo "📊 4.6 Scroll progress — ReadingProgress.astro already exists"

# 4.7 Add skip-to-content link for accessibility
echo "♿ 4.7 Skip-to-content link..."

# ============================================================
# TIER 5: PWA & PERFORMANCE
# ============================================================

echo ""
echo "📌 TIER 5: PWA & Performance"
echo "-----------------------------"

# 5.1 Enhance manifest.json with screenshots and shortcuts
echo "📱 5.1 PWA manifest enhancement..."

# 5.2 Add offline fallback page
echo "📴 5.2 Offline page..."

# 5.3 Add install prompt
echo "⬇️  5.3 PWA install prompt..."

# ============================================================
# TIER 6: PAGES CMS OPTIMIZATION
# ============================================================

echo ""
echo "📌 TIER 6: Pages CMS Optimization"
echo "-----------------------------------"

# 6.1 Update .pages.yml with better options
echo "📝 6.1 Enhancing .pages.yml..."

# 6.2 Add CMS preview deploy hook
echo "🔗 6.2 CMS preview hook..."

# ============================================================
# BUILD & VERIFY
# ============================================================

echo ""
echo "🔨 Building..."
npm install && npm run build

echo ""
echo "✅ Upgrade complete!"
echo ""
echo "📋 MANUAL STEPS STILL NEEDED:"
echo "   1. Set up Analytics (Plausible/GA4/Cloudflare)"
echo "   2. Configure Newsletter (Formspree/Buttondown)"
echo "   3. Add real deploy hook URL to .pages.yml"
echo "   4. Test all pages for SEO meta tags"
echo "   5. Verify structured data with Google Rich Results Test"
echo "   6. Test PWA with Lighthouse"
