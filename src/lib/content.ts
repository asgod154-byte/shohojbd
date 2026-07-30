import { getCollection } from "astro:content";

export const siteBase = "https://shohojbd.pages.dev";

export function slugify(value: any): string {
  return String(value)
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{M}\p{N}-]+/gu, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCollectionRoute(collectionName: string): string {
  switch (collectionName) {
    case "sorkari-seba":
      return "sorkari-seba";
    case "exam-o-vorti":
      return "exam-o-vorti";
    case "local-guide":
      return "local-guide";
    default:
      return collectionName;
  }
}

export function getCollectionLabel(collectionName: string): string {
  switch (collectionName) {
    case "sorkari-seba":
      return "সরকারি সেবা";
    case "exam-o-vorti":
      return "পরীক্ষা ও ভর্তি";
    case "local-guide":
      return "স্থানীয় গাইড";
    default:
      return collectionName;
  }
}

export function getEntrySlug(entry: any): string {
  return slugify(entry.id);
}

export function getEntryUrl(entry: any): string {
  return `${siteBase}/${getCollectionRoute(entry.collection)}/${getEntrySlug(entry)}/`;
}

export async function getAllPosts(): Promise<any[]> {
  const sorkari = await getCollection("sorkari-seba");
  const exam = await getCollection("exam-o-vorti");
  const local = await getCollection("local-guide");
  return [...sorkari, ...exam, ...local].filter((e) => !e.data.draft);
}

export async function getFeaturedPosts(limit = 6): Promise<any[]> {
  const all = await getAllPosts();
  const featured = all.filter((e) => e.data.featured);
  return featured.length > 0 ? featured.slice(0, limit) : all.slice(0, limit);
}

export async function getRecentPosts(limit = 5): Promise<any[]> {
  const all = await getAllPosts();
  return all
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime())
    .slice(0, limit);
}

export async function getTopPostsLastDay(limit = 3): Promise<any[]> {
  const all = await getAllPosts();
  const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
  return all
    .filter((p) => new Date(p.data.pubDate).getTime() >= oneDayAgo)
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime())
    .slice(0, limit);
}

export async function getPostsByCollection(collectionName: string): Promise<any[]> {
  const posts = await getCollection(collectionName as any);
  return posts.filter((e) => !e.data.draft);
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function truncate(text: string, length = 120): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

function addTaxonomy(map: Map<string, any>, label: string, entry: any): void {
  if (!label) return;
  const slug = slugify(label);
  const normalizedLabel = String(label).trim();
  const existing = map.get(slug);
  if (existing) {
    existing.entries.push(entry);
  } else {
    map.set(slug, { label: normalizedLabel, entries: [entry] });
  }
}

export function buildTaxonomyIndex(entries: any[]): { categories: Map<string, any>; tags: Map<string, any>; authors: Map<string, any> } {
  const categories = new Map();
  const tags = new Map();
  const authors = new Map();

  for (const entry of entries) {
    addTaxonomy(categories, entry.data.category, entry);
    addTaxonomy(authors, entry.data.author, entry);
    if (Array.isArray(entry.data.tags)) {
      for (const tag of entry.data.tags) {
        addTaxonomy(tags, tag, entry);
      }
    }
  }

  return { categories, tags, authors };
}

export function getTaxonomyUrl(type: string, slug: string): string {
  return `${siteBase}/${type}/${slug}/`;
}

export function paginate<T>(items: T[], pageSize: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += pageSize) {
    pages.push(items.slice(i, i + pageSize));
  }
  return pages;
}
