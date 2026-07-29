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

export function getCollectionRoute(collectionName: any): string {
  switch (collectionName) {
    case "govt-guides":
      return "sorkari-seba";
    case "exam-guides":
      return "exam-o-vorti";
    case "local-guides":
      return "local-guide";
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

export async function getAllGuideEntries(): Promise<any[]> {
  const govt = await getCollection("govt-guides");
  const exam = await getCollection("exam-guides");
  const local = await getCollection("local-guides");
  return [...govt, ...exam, ...local];
}

function addTaxonomy(map: Map<any, any> | any, label: any, entry: any): void {
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

export function buildTaxonomyIndex(entries: any): { categories: Map<any, any>; tags: Map<any, any>; authors: Map<any, any> } {
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

  return {
    categories,
    tags,
    authors,
  };
}

export function getTaxonomyUrl(type: any, slug: any): string {
  return `${siteBase}/${type}/${slug}/`;
}