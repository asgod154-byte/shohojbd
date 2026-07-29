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

export function buildArticleJsonLd({ title, description, url, pubDate, updatedDate, author }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description,
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
        url: "https://shohojbd.pages.dev/social-share-default.svg",
      },
    },
    url,
  };
}

export function buildFaqJsonLd(faq) {
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

export function buildHowToJsonLd({ title, description, url, steps }) {
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
