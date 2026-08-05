import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getEntrySlug } from "../lib/content";

const SITE = "https://shohojbd.pages.dev";

export const GET: APIRoute = async () => {
  const collections = ["sorkari-seba", "exam-o-vorti", "local-guide"] as const;
  const allPosts = [];

  for (const name of collections) {
    const posts = await getCollection(name);
    for (const post of posts) {
      if (post.data.draft) continue;
      const slug = getEntrySlug(post);
      const route = name === "sorkari-seba" ? "sorkari-seba" : name === "exam-o-vorti" ? "exam-o-vorti" : "local-guide";
      const url = `${SITE}/${route}/${slug}/`;
      const lastmod = post.data.updatedDate
        ? new Date(post.data.updatedDate).toISOString()
        : new Date(post.data.pubDate).toISOString();

      allPosts.push({ url, lastmod });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPosts.map((p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
