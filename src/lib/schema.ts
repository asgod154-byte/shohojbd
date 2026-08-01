export function buildBreadcrumbJsonLd(items: Array<{ title: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
      item: it.href,
    })),
  };
}

export function buildArticleJsonLd({ title, description, url, pubDate, updatedDate, author, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description,
    image: image || "https://shohojbd.pages.dev/social-share-default.svg",
    author: {
      "@type": "Organization",
      name: author,
    },
    datePublished: new Date(pubDate).toISOString(),
    dateModified: updatedDate ? new Date(updatedDate).toISOString() : new Date(pubDate).toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Shohoj BD",
      logo: {
        "@type": "ImageObject",
        url: "https://shohojbd.pages.dev/favicon_io/favicon-32x32.png",
      },
    },
    url,
  };
}

export function buildFaqJsonLd(faq: Array<{ question: string; answer: string }> | undefined) {
  if (!faq || faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildHowToJsonLd({ title, description, url, steps }: { title: string; description: string; url: string; steps: Array<{ title?: string; description: string }> }) {
  if (!steps || steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    url,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title || `Step ${index + 1}`,
      text: step.description,
    })),
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shohoj BD",
    url: "https://shohojbd.pages.dev",
    logo: "https://shohojbd.pages.dev/favicon_io/favicon-32x32.png",
    sameAs: [],
    description: "বাংলাদেশের সরকারি সেবা, শিক্ষা ও স্থানীয় তথ্যের জন্য একটি পেশাদার বাংলা ব্লগ।",
  };
}
