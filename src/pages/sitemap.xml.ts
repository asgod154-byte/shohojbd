import type { APIRoute } from "astro";

const SITE = "https://shohojbd.pages.dev";
const NOW = new Date().toISOString();

export const GET: APIRoute = async () => {
  const sitemaps = [
    "sitemap-posts.xml",
    "sitemap-pages.xml",
    "sitemap-categories.xml",
    "sitemap-tags.xml",
    "sitemap-authors.xml",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map((sm) => `  <sitemap>
    <loc>${SITE}/${sm}</loc>
    <lastmod>${NOW}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
