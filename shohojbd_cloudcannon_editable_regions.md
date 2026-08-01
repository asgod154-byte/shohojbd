# 🧠 MASTER AI COMMAND — Add CloudCannon Editable Regions to Shohoj BD

## 📌 Project Context

Repository: `https://github.com/asgod154-byte/shohojbd`
Framework: Astro 7.1.5 + Tailwind CSS v4
CMS: CloudCannon
Goal: Enable Visual Editing (WYSIWYG) in CloudCannon

CloudCannon currently shows:
- ❌ No Source Editable Regions detected
- ❌ No Text Editable Regions detected
- ❌ No Image Editable Regions detected
- ❌ No Array Editable Regions detected
- ❌ No Component Editable Regions detected

We need to add ALL 5 types of Editable Regions.

---

## 🎯 STEP 1: Install CloudCannon Editable Regions Package

**File:** `package.json`

Add to dependencies:
```json
"@cloudcannon/editable-regions": "^1.0.0"
```

Then run:
```bash
npm install @cloudcannon/editable-regions
```

---

## 🎯 STEP 2: Add Astro Integration

**File:** `astro.config.mjs`

Import and add the integration:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import editableRegions from "@cloudcannon/editable-regions/astro-integration";

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
    editableRegions(), // ← ADD THIS
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

## 🎯 STEP 3: Create Component Registration Script

**File:** `src/scripts/register-components.js` (NEW)

```javascript
import { registerAstroComponent } from '@cloudcannon/editable-regions/astro';
import '@cloudcannon/editable-regions/astro-react-renderer';

// Import all components that should be visually editable
import GuideCard from '../components/GuideCard.astro';
import PostCard from '../components/PostCard.astro';
import Sidebar from '../components/Sidebar.astro';
import SearchBox from '../components/SearchBox.astro';
import ShareButtons from '../components/ShareButtons.astro';
import AuthorBox from '../components/AuthorBox.astro';
import RelatedPosts from '../components/RelatedPosts.astro';
import TableOfContents from '../components/TableOfContents.astro';
import ReadingProgress from '../components/ReadingProgress.astro';
import Breadcrumb from '../components/Breadcrumb.astro';
import Pagination from '../components/Pagination.astro';
import Newsletter from '../components/Newsletter.astro';

// Register each component with a unique name
registerAstroComponent('guide_card', GuideCard);
registerAstroComponent('post_card', PostCard);
registerAstroComponent('sidebar', Sidebar);
registerAstroComponent('search_box', SearchBox);
registerAstroComponent('share_buttons', ShareButtons);
registerAstroComponent('author_box', AuthorBox);
registerAstroComponent('related_posts', RelatedPosts);
registerAstroComponent('table_of_contents', TableOfContents);
registerAstroComponent('reading_progress', ReadingProgress);
registerAstroComponent('breadcrumb', Breadcrumb);
registerAstroComponent('pagination', Pagination);
registerAstroComponent('newsletter', Newsletter);
```

---

## 🎯 STEP 4: Add Registration Script to Layout

**File:** `src/layouts/Layout.astro`

Add the registration script inside `<body>`, immediately after opening tag:

```astro
<body>
  <!-- CloudCannon Component Registration -->
  <script>
    if (window.inEditorMode) {
      import("../scripts/register-components.js").catch((error) => {
        console.warn("Failed to load CloudCannon component registration:", error);
      });
    }
  </script>

  <a href="#main-content" class="sr-only focus:not-sr-only">মূল কন্টেন্টে যান</a>

  <Navbar />
  <main id="main-content">
    <slot />
  </main>
  <Footer />
</body>
```

---

## 🎯 STEP 5: Add Source Editable Regions (Hard-coded Text)

**File:** `src/pages/index.astro`

Add `data-editable="source"` to all hard-coded text elements:

```astro
<!-- Hero Section -->
<section class="...">
  <h1 
    data-editable="source" 
    data-path="/src/pages/index.astro" 
    data-key="hero_title"
    class="..."
  >
    বাংলাদেশের সব তথ্য সহজ ও দ্রুত
  </h1>
  <p 
    data-editable="source" 
    data-path="/src/pages/index.astro" 
    data-key="hero_subtitle"
    class="..."
  >
    সরকারি সেবা, শিক্ষা ও স্থানীয় তথ্যের জন্য আপনার বিশ্বস্ত বাংলা ব্লগ।
  </p>
</section>

<!-- Section Headings -->
<h2 
  data-editable="source" 
  data-path="/src/pages/index.astro" 
  data-key="featured_heading"
>
  ফিচার্ড পোস্ট
</h2>

<h2 
  data-editable="source" 
  data-path="/src/pages/index.astro" 
  data-key="latest_heading"
>
  সাম্প্রতিক পোস্ট
</h2>

<h2 
  data-editable="source" 
  data-path="/src/pages/index.astro" 
  data-key="categories_heading"
>
  ক্যাটাগরি অনুযায়ী ব্রাউজ করুন
</h2>

<!-- Category Card Text -->
<div data-editable="source" data-path="/src/pages/index.astro" data-key="cat_govt_title">
  <strong>সরকারি সেবা</strong>
</div>
<p data-editable="source" data-path="/src/pages/index.astro" data-key="cat_govt_desc">
  NID, জন্ম নিবন্ধন, চাকরি ও অন্যান্য সরকারি সেবার তথ্য।
</p>

<div data-editable="source" data-path="/src/pages/index.astro" data-key="cat_exam_title">
  <strong>পরীক্ষা ও ভর্তি</strong>
</div>
<p data-editable="source" data-path="/src/pages/index.astro" data-key="cat_exam_desc">
  বিসিএস, বিশ্ববিদ্যালয় ভর্তি ও শিক্ষা সংক্রান্ত সব তথ্য।
</p>

<div data-editable="source" data-path="/src/pages/index.astro" data-key="cat_local_title">
  <strong>স্থানীয় গাইড</strong>
</div>
<p data-editable="source" data-path="/src/pages/index.astro" data-key="cat_local_desc">
  পরিবহন, ভ্রমণ ও স্থানীয় সেবার তথ্য ও নির্দেশনা।
</p>
```

**File:** `src/pages/about.astro`

```astro
<h1 data-editable="source" data-path="/src/pages/about.astro" data-key="about_title">
  আমাদের সম্পর্কে
</h1>

<p data-editable="source" data-path="/src/pages/about.astro" data-key="about_desc">
  Shohoj BD বাংলাদেশের সরকারি সেবা...
</p>
```

**File:** `src/pages/contact.astro`

```astro
<h1 data-editable="source" data-path="/src/pages/contact.astro" data-key="contact_title">
  যোগাযোগ করুন
</h1>

<p data-editable="source" data-path="/src/pages/contact.astro" data-key="contact_desc">
  আমাদের সাথে যোগাযোগ করতে নিচের ফর্ম ব্যবহার করুন...
</p>
```

**File:** `src/pages/privacy.astro`

```astro
<h1 data-editable="source" data-path="/src/pages/privacy.astro" data-key="privacy_title">
  গোপনীয়তা নীতি
</h1>
```

**File:** `src/pages/404.astro`

```astro
<h1 data-editable="source" data-path="/src/pages/404.astro" data-key="404_title">404</h1>
<p data-editable="source" data-path="/src/pages/404.astro" data-key="404_message">
  দুঃখিত, আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি।
</p>
```

---

## 🎯 STEP 6: Add Text Editable Regions (Dynamic Content)

**File:** `src/layouts/Layout.astro`

```astro
<!-- Page Title -->
<title data-editable="text" data-prop="title">{pageTitle}</title>

<!-- Meta Description -->
<meta 
  data-editable="text" 
  data-prop="description" 
  name="description" 
  content={description} 
/>
```

**File:** `src/components/Meta.astro`

```astro
<!-- Title -->
<meta data-editable="text" data-prop="title" property="og:title" content={title} />
<meta data-editable="text" data-prop="title" name="twitter:title" content={title} />

<!-- Description -->
<meta data-editable="text" data-prop="description" property="og:description" content={description} />
<meta data-editable="text" data-prop="description" name="twitter:description" content={description} />
```

**File:** `src/components/GuideCard.astro` / `src/components/PostCard.astro`

```astro
<!-- Title -->
<h3 data-editable="text" data-prop="title">
  <a href={href}>{title}</a>
</h3>

<!-- Description -->
<p data-editable="text" data-prop="description">
  {description}
</p>

<!-- Author -->
<span data-editable="text" data-prop="author">
  {author}
</span>

<!-- Category -->
<span data-editable="text" data-prop="category">
  {category}
</span>
```

**File:** `src/components/AuthorBox.astro`

```astro
<div data-editable="text" data-prop="author">
  <h4>{author}</h4>
  <p>{bio}</p>
</div>
```

**File:** `src/components/Sidebar.astro`

```astro
<!-- Widget Titles -->
<h3 data-editable="source" data-path="/src/components/Sidebar.astro" data-key="featured_widget_title">
  ফিচার্ড পোস্ট
</h3>

<h3 data-editable="source" data-path="/src/components/Sidebar.astro" data-key="recent_widget_title">
  সাম্প্রতিক পোস্ট
</h3>

<h3 data-editable="source" data-path="/src/components/Sidebar.astro" data-key="categories_widget_title">
  ক্যাটাগরি
</h3>

<h3 data-editable="source" data-path="/src/components/Sidebar.astro" data-key="tags_widget_title">
  ট্যাগ
</h3>

<h3 data-editable="source" data-path="/src/components/Sidebar.astro" data-key="newsletter_widget_title">
  নিউজলেটার
</h3>

<!-- Newsletter Text -->
<p data-editable="source" data-path="/src/components/Sidebar.astro" data-key="newsletter_desc">
  নতুন পোস্টের আপডেট পেতে সাবস্ক্রাইব করুন।
</p>
```

**File:** `src/components/Footer.astro`

```astro
<!-- About Column -->
<h3 data-editable="source" data-path="/src/components/Footer.astro" data-key="footer_about_title">
  Shohoj BD
</h3>
<p data-editable="source" data-path="/src/components/Footer.astro" data-key="footer_about_desc">
  বাংলাদেশের সরকারি সেবা, শিক্ষা ও স্থানীয় তথ্যের জন্য একটি পেশাদার বাংলা ব্লগ।
</p>

<!-- Quick Links Title -->
<h3 data-editable="source" data-path="/src/components/Footer.astro" data-key="footer_links_title">
  দ্রুত লিংক
</h3>

<!-- Categories Title -->
<h3 data-editable="source" data-path="/src/components/Footer.astro" data-key="footer_categories_title">
  ক্যাটাগরি
</h3>

<!-- Newsletter Title -->
<h3 data-editable="source" data-path="/src/components/Footer.astro" data-key="footer_newsletter_title">
  নিউজলেটার
</h3>
<p data-editable="source" data-path="/src/components/Footer.astro" data-key="footer_newsletter_desc">
  নতুন পোস্ট ও গুরুত্বপূর্ণ আপডেট সরাসরি ইনবক্সে পেতে সাবস্ক্রাইব করুন।
</p>
```

**File:** `src/components/Navbar.astro`

```astro
<!-- Logo Text -->
<span data-editable="source" data-path="/src/components/Navbar.astro" data-key="logo_text">
  Shohoj BD
</span>

<!-- Nav Items (if any hardcoded) -->
```

---

## 🎯 STEP 7: Add Image Editable Regions

**File:** `src/components/GuideCard.astro` / `src/components/PostCard.astro`

```astro
<img
  data-editable="image"
  data-prop-src="coverImage"
  data-prop-alt="coverImageAlt"
  data-prop-title="title"
  src={coverImage}
  alt={coverImageAlt || title}
  loading="lazy"
  class="..."
/>
```

**File:** `src/components/AuthorBox.astro`

```astro
<img
  data-editable="image"
  data-prop-src="authorAvatar"
  data-prop-alt="authorName"
  src={avatar}
  alt={author}
  class="..."
/>
```

**File:** `src/pages/index.astro` (Hero/OG Image)

```astro
<img
  data-editable="image"
  data-prop-src="heroImage"
  data-prop-alt="heroAlt"
  src="/social-share-default.svg"
  alt="Shohoj BD"
  class="..."
/>
```

---

## 🎯 STEP 8: Add Array Editable Regions

**File:** `src/components/Sidebar.astro` (Categories List)

```astro
<ul data-editable="array" data-prop="categories">
  {sortedCategories.slice(0, 10).map(([slug, data]) => (
    <li data-editable="array-item">
      <a href={`/category/${slug}/`}>
        {data.label}
        <span>{data.entries.length}</span>
      </a>
    </li>
  ))}
</ul>
```

**File:** `src/components/Sidebar.astro` (Tags List)

```astro
<div data-editable="array" data-prop="tags">
  {sortedTags.slice(0, 10).map(([slug, data]) => (
    <span data-editable="array-item">
      <a href={`/tag/${slug}/`}>{data.label}</a>
    </span>
  ))}
</div>
```

**File:** `src/components/Sidebar.astro` (Recent Posts)

```astro
<ul data-editable="array" data-prop="recentPosts">
  {recentPosts.map((post) => (
    <li data-editable="array-item">
      <a href={post.href}>
        <strong>{post.data.title}</strong>
        <span>{new Date(post.data.pubDate).toLocaleDateString("bn-BD", {...})}</span>
      </a>
    </li>
  ))}
</ul>
```

**File:** `src/components/Footer.astro` (Quick Links)

```astro
<ul data-editable="array" data-prop="quickLinks">
  {quickLinks.map((link) => (
    <li data-editable="array-item">
      <a href={link.href}>{link.label}</a>
    </li>
  ))}
</ul>
```

**File:** `src/components/Footer.astro` (Categories)

```astro
<ul data-editable="array" data-prop="footerCategories">
  {categories.map((cat) => (
    <li data-editable="array-item">
      <a href={cat.href}>{cat.label}</a>
    </li>
  ))}
</ul>
```

**File:** `src/pages/index.astro` (Popular Tags)

```astro
<div data-editable="array" data-prop="popularTags">
  {popularTags.map(([slug, data]) => (
    <span data-editable="array-item">
      <a href={`/tag/${slug}/`}>{data.label}</a>
    </span>
  ))}
</div>
```

---

## 🎯 STEP 9: Add Component Editable Regions

**File:** `src/pages/index.astro`

```astro
<!-- Featured Posts Section -->
<editable-component data-prop="featured" data-component="post_card">
  {featured.map((post) => (
    <PostCard {...post} />
  ))}
</editable-component>

<!-- Latest Posts Section -->
<editable-component data-prop="latest" data-component="post_card">
  {recent.map((post) => (
    <PostCard {...post} />
  ))}
</editable-component>

<!-- Search Box -->
<editable-component data-prop="search" data-component="search_box">
  <SearchBox />
</editable-component>
```

**File:** `src/layouts/LayoutWithSidebar.astro` (or any layout using sidebar)

```astro
<!-- Sidebar -->
<editable-component data-prop="sidebar" data-component="sidebar">
  <Sidebar />
</editable-component>

<!-- Main Content -->
<editable-component data-prop="content" data-component="main_content">
  <slot />
</editable-component>
```

**File:** `src/pages/sorkari-seba/[slug].astro` (and similar for other collections)

```astro
<!-- Author Box -->
<editable-component data-prop="author" data-component="author_box">
  <AuthorBox author={post.data.author} />
</editable-component>

<!-- Share Buttons -->
<editable-component data-prop="share" data-component="share_buttons">
  <ShareButtons title={post.data.title} url={Astro.url} />
</editable-component>

<!-- Related Posts -->
<editable-component data-prop="related" data-component="related_posts">
  <RelatedPosts currentSlug={slug} tags={post.data.tags} category={post.data.category} />
</editable-component>

<!-- Table of Contents -->
<editable-component data-prop="toc" data-component="table_of_contents">
  <TableOfContents headings={headings} />
</editable-component>

<!-- Reading Progress -->
<editable-component data-prop="progress" data-component="reading_progress">
  <ReadingProgress />
</editable-component>

<!-- Breadcrumb -->
<editable-component data-prop="breadcrumb" data-component="breadcrumb">
  <Breadcrumb items={breadcrumbItems} />
</editable-component>
```

**File:** `src/components/Pagination.astro`

```astro
<editable-component data-prop="pagination" data-component="pagination">
  <nav class="...">
    <!-- pagination buttons -->
  </nav>
</editable-component>
```

---

## 🎯 STEP 10: Update CloudCannon Config for Visual Editing

**File:** `cloudcannon.json`

Add editor configuration:

```json
{
  "site": {
    "name": "Shohoj BD",
    "preview_url": "https://shohojbd.pages.dev"
  },

  "editor": {
    "default_path": "/sorkari-seba/",
    "source_editor": {
      "tab_size": 2,
      "theme": "default"
    },
    "visual_editor": {
      "enabled": true,
      "default_edit_mode": "visual"
    }
  },

  "paths": {
    "uploads": "src/assets/images",
    "static": "public"
  },

  "collections": [
    // ... existing collections ...
  ],

  "_comments": {
    "title": "The title of the post",
    "description": "SEO meta description (max 160 chars)",
    "coverImage": "Featured image for the post",
    "draft": "Set to true to hide from production",
    "featured": "Set to true to show on homepage"
  },

  "_options": {
    "image_size": "cover",
    "image_width": 800,
    "image_height": 450
  }
}
```

---

## 🎯 STEP 11: Ensure Dark Mode Works WITH Editable Regions

**IMPORTANT:** CloudCannon's visual editor may override styles. Add this to `global.css`:

```css
/* Ensure CloudCannon editor doesn't break dark mode */
[data-editable] {
  color: inherit;
  background-color: inherit;
}

/* Editable regions should respect theme */
[data-editable="source"],
[data-editable="text"] {
  color: var(--text);
}

[data-editable="image"] {
  border-radius: inherit;
}

/* Array items */
[data-editable="array-item"] {
  border-color: var(--border);
}
```

---

## 🧪 TESTING CHECKLIST

After all changes, verify in CloudCannon:

```
Editable Regions Detection:
  [ ] Source Editable Regions detected
  [ ] Text Editable Regions detected
  [ ] Image Editable Regions detected
  [ ] Array Editable Regions detected
  [ ] Component Editable Regions detected

Visual Editor Testing:
  [ ] Can edit hero title on homepage
  [ ] Can edit post titles in cards
  [ ] Can edit post descriptions
  [ ] Can swap cover images
  [ ] Can reorder sidebar widgets
  [ ] Can edit footer text
  [ ] Can edit navbar logo text
  [ ] Can edit about page content
  [ ] Can edit contact page content
  [ ] Can edit 404 page message

Dark Mode:
  [ ] Visual editor doesn't break dark mode
  [ ] Edited text keeps correct colors
  [ ] Edited images keep styling
  [ ] All components still adapt to theme

Build:
  [ ] npm run build succeeds
  [ ] No CloudCannon-related errors
  [ ] Site deploys correctly
```

---

## ⚠️ IMPORTANT NOTES

1. **The `@cloudcannon/editable-regions` package** adds client-side JS. Make sure it doesn't break your static build.

2. **Component Editable Regions** require the registration script. If a component isn't registered, CloudCannon won't show editing UI for it.

3. **Source Editable Regions** edit the ACTUAL source file. Changes are saved back to `.astro` files.

4. **Text Editable Regions** edit the rendered output. Changes update the data source (markdown frontmatter).

5. **Image Editable Regions** allow drag-and-drop image replacement. Images go to `src/assets/images/`.

6. **Array Editable Regions** allow reordering, adding, and deleting items in lists.

7. **Dark mode + Visual Editor:** Test thoroughly. CloudCannon's editor UI is light-themed and may clash with your dark mode.

8. **Performance:** The editable-regions package adds ~50KB JS. Consider lazy-loading it.

---

## 🏁 FINAL COMMIT

```bash
npm install @cloudcannon/editable-regions
# ... make all file changes ...
git add .
git commit -m "feat: add CloudCannon visual editing (all 5 editable region types)"
git push origin main
```

Then in CloudCannon dashboard:
1. Click "Sync"
2. Go to "Visual Editor"
3. Verify all editable regions are detected
4. Test editing a post title
