# Shohoj BD - বাংলাদেশের সহজ সেবা তথ্য ব্লগ

একটি পেশাদার বাংলা ভাষার ব্লগ যা বাংলাদেশের সরকারি সেবা, শিক্ষা এবং স্থানীয় তথ্য প্রদান করে।

**Live Site:** [https://shohojbd.pages.dev](https://shohojbd.pages.dev)  
**Repository:** [github.com/asgod154-byte/shohojbd](https://github.com/asgod154-byte/shohojbd)

---

## 📋 বৈশিষ্ট্য

✅ বাংলা সম্পূর্ণ সাপোর্ট (Noto Sans Bengali)  
✅ দ্রুত পারফরম্যান্স অপটিমাইজেশন  
✅ ডার্ক মোড টগল  
✅ মোবাইল রেসপন্সিভ ডিজাইন  
✅ SEO অপটিমাইজড  
✅ CloudCannon CMS ইন্টিগ্রেশন  
✅ ইমেজ অপটিমাইজেশন (WebP, Sharp)  
✅ PWA সাপোর্ট  
✅ RSS ফিড  
✅ সাইটম্যাপ  

---

## 🛠️ টেক স্ট্যাক

- **Framework:** [Astro 7.1.5](https://astro.build)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Image Optimization:** [Sharp](https://sharp.pixelplumbing.com/)
- **CMS:** [CloudCannon](https://cloudcannon.com)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com)
- **Analytics:** Plausible (Privacy-focused)

---

## 📁 প্রকল্প কাঠামো

```
shohojbd/
├── src/
│   ├── assets/           # ছবি এবং অন্যান্য মিডিয়া
│   ├── components/       # Astro কম্পোনেন্ট
│   ├── content/          # মার্কডাউন কন্টেন্ট (সংগ্রহ)
│   │   ├── sorkari-seba/    # সরকারি সেবা গাইড
│   │   ├── exam-o-vorti/    # পরীক্ষা গাইড
│   │   └── local-guide/     # স্থানীয় তথ্য গাইড
│   ├── layouts/          # পেজ লেআউট
│   ├── lib/              # ইউটিলিটি ফাংশন
│   ├── pages/            # রুট পেজ এবং ডাইনামিক রুট
│   └── styles/           # গ্লোবাল CSS
├── public/               # স্ট্যাটিক ফাইল
├── astro.config.mjs      # Astro কনফিগারেশন
├── cloudcannon.json      # CloudCannon CMS কনফিগারেশন
├── package.json          # নোড প্যাকেজ ম্যানেজার
└── README.md            # এই ফাইল
```

---

## 🚀 শুরু করা

### প্রয়োজনীয়তা
- **Node.js:** v22.12.0 বা তার উপরে
- **npm:** v10.0.0 বা তার উপরে

### ইনস্টলেশন

```bash
# রিপোজিটরি ক্লোন করুন
git clone https://github.com/asgod154-byte/shohojbd.git
cd shohojbd

# নির্ভরতা ইনস্টল করুন
npm install
```

### ডেভেলপমেন্ট

```bash
# ডেভেলপমেন্ট সার্ভার চালু করুন (localhost:3000)
npm run dev
```

ব্রাউজার খুলুন এবং [http://localhost:3000](http://localhost:3000) এ যান।

### প্রোডাকশন বিল্ড

```bash
# স্ট্যাটিক সাইট তৈরি করুন
npm run build

# বিল্ড করা সাইট প্রিভিউ করুন
npm run preview
```

---

## 📝 কন্টেন্ট যোগ করা

### ফ্রন্টম্যাটার ফরম্যাট

প্রতিটি মার্কডাউন ফাইলে YAML ফ্রন্টম্যাটার থাকে:

```yaml
---
title: "পোস্ট শিরোনাম"
description: "সংক্ষিপ্ত বর্ণনা (160 অক্ষরের কম)"
author: "লেখকের নাম"
category: "ক্যাটাগরি"
tags: ["ট্যাগ1", "ট্যাগ2"]
pubDate: 2026-01-15
updatedDate: 2026-01-20
draft: false
featured: false
coverImage: "/assets/images/cover.webp"
coverImageAlt: "কভার ইমেজের বর্ণনা"
---

# মূল কন্টেন্ট এখানে...
```

### সংগ্রহ (Collections)

**সরকারি সেবা:**  
📍 ফাইল পাথ: `src/content/sorkari-seba/`  
🔗 URL: `/sorkari-seba/{slug}/`

**পরীক্ষা গাইড:**  
📍 ফাইল পাথ: `src/content/exam-o-vorti/`  
🔗 URL: `/exam-o-vorti/{slug}/`

**স্থানীয় গাইড:**  
📍 ফাইল পাথ: `src/content/local-guide/`  
🔗 URL: `/local-guide/{slug}/`

---

## 🌐 ডিপ্লয়মেন্ট

এই সাইটটি **Cloudflare Pages** এ হোস্ট করা হয়েছে এবং স্বয়ংক্রিয় ডিপ্লয়মেন্টের জন্য GitHub Actions ব্যবহার করে।

### GitHub থেকে স্বয়ংক্রিয় ডিপ্লয়মেন্ট

`main` ব্র্যাঞ্চে প্রতিটি পুশ স্বয়ংক্রিয়ভাবে:
1. নির্ভরতা ইনস্টল করে
2. সাইট তৈরি করে
3. Cloudflare Pages এ ডিপ্লয় করে

---

## 🎨 ডার্ক মোড

ডার্ক মোড Navbar এর টগল বাটনের মাধ্যমে উপলব্ধ। এটি ব্যবহারকারীর পছন্দ `localStorage` এ সংরক্ষণ করে।

---

## 🔍 SEO অপটিমাইজেশন

✅ Meta ট্যাগ (Open Graph, Twitter)  
✅ Structured Data (JSON-LD)  
✅ Breadcrumb Navigation  
✅ XML Sitemap (`/sitemap-index.xml`)  
✅ RSS Feed (`/rss.xml`)  
✅ Robots.txt

---

## 📊 পারফরম্যান্স

- **Image Optimization:** WebP format, responsive sizes
- **Code Splitting:** Astro's automatic code splitting
- **Prefetching:** Intelligent hover-based prefetching
- **Minification:** Automatic CSS/JS minification

**Target Lighthouse Scores:**
- Performance: > 90
- SEO: > 95
- Accessibility: > 95

---

## 📚 CMS (CloudCannon)

এই প্রকল্প CloudCannon দ্বারা পরিচালিত হয়। সম্পাদকরা ওয়েব ইন্টারফেসের মাধ্যমে কন্টেন্ট যোগ, সম্পাদন এবং প্রকাশ করতে পারেন।

---

## 🤝 অবদান

বাগ রিপোর্ট এবং ফিচার রিকোয়েস্টের জন্য GitHub Issues খুলুন।

---

## 📄 লাইসেন্স

এই প্রকল্প **ISC License** এর অধীনে লাইসেন্সপ্রাপ্ত।  
বিস্তারিত জন্য [LICENSE](LICENSE) ফাইল দেখুন।

---

## 📧 যোগাযোগ

**ওয়েবসাইট:** [shohojbd.pages.dev](https://shohojbd.pages.dev)  
**GitHub:** [@asgod154-byte](https://github.com/asgod154-byte)  

---

**আপডেট:** 2026-08-01  
**সংস্করণ:** 1.0.0
