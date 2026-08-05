import type { APIRoute } from "astro";
import { getAllPosts, buildTaxonomyIndex } from "../lib/content";

const SITE = "https://shohojbd.pages.dev";

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();
  const { authors } = buildTaxonomyIndex(posts);

  const urls = Array.from(authors.entries()).map(([slug, data]) => ({
    loc: `${SITE}/author/${slug}/`,
    lastmod: new Date().toISOString(),
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
