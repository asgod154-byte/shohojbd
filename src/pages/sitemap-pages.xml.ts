import type { APIRoute } from "astro";

const SITE = "https://shohojbd.pages.dev";
const NOW = new Date().toISOString();

const pages = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/about/", priority: "0.6", changefreq: "monthly" },
  { path: "/contact/", priority: "0.6", changefreq: "monthly" },
  { path: "/privacy/", priority: "0.5", changefreq: "yearly" },
  { path: "/sorkari-seba/", priority: "0.7", changefreq: "weekly" },
  { path: "/exam-o-vorti/", priority: "0.7", changefreq: "weekly" },
  { path: "/local-guide/", priority: "0.7", changefreq: "weekly" },
  { path: "/all/", priority: "0.7", changefreq: "daily" },
  { path: "/category/", priority: "0.6", changefreq: "weekly" },
  { path: "/tag/", priority: "0.6", changefreq: "weekly" },
  { path: "/author/", priority: "0.5", changefreq: "weekly" },
  { path: "/search/", priority: "0.4", changefreq: "monthly" },
];

export const GET: APIRoute = async () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${NOW}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
