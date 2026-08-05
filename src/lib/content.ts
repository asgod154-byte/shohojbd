import { getCollection } from "astro:content";

export const siteBase = "https://shohojbd.pages.dev";

const tagSlugOverrides: Record<string, string> = {
  "৩৭তম বিসিএস": "37th-bcs",
  "বিসিএস": "bcs-exam",
  "বিসিএস প্রস্তুতি": "bcs-preparation",
  "এনআইডি": "nid-card",
  "জাতীয় পরিচয়পত্র": "nid-card",
  "পাসপোর্ট": "passport",
  "ড্রাইভিং লাইসেন্স": "driving-license",
  "জন্ম নিবন্ধন": "birth-registration",
  "জন্ম সনদ": "birth-certificate",
  "চাকরি": "job-news",
  "নিয়োগ": "job-news",
  "পরীক্ষা": "exam",
  "ভর্তি": "admission",
  "এইচএসসি": "hsc",
  "প্রাথমিক শিক্ষক": "primary-teacher",
  "রাজশাহী বিশ্ববিদ্যালয়": "rajshahi-university",
  "ঢাকা বিশ্ববিদ্যালয়": "dhaka-university",
  "কক্সবাজার": "coxs-bazar",
  "পর্যটন": "tourism",
  "বিদ্যুৎ বিল": "electricity-bill",
  "সেনাবাহিনী নিয়োগ": "army-job",
  "সরকারি সেবা": "government-service",
  "বিশ্ববিদ্যালয়": "university",
  "অনলাইন সেবা": "online-service",
  "অনলাইন ডাউনলোড": "online-download",
  "গাড়ি লাইসেন্স": "driving-license",
  "ইউনিট": "unit",
  "পরীক্ষা প্রস্তুতি": "exam-preparation",
  "সরকারি চাকরি": "government-job",
  "ট্যুরিস্ট স্পট": "tourist-spot",
  "সমুদ্র সৈকত": "sea-beach",
  "চট্টগ্রাম বিভাগ": "chittagong-division",
  "বিশ্ববিদ্যালয় ভর্তি": "university-admission",
  "প্রিলিমিনারি": "preliminary",
  "HSC ভর্তি": "hsc-admission",
  "XI Class": "xi-class",
  "কলেজ বাছাই": "college-admission",
  "ভর্তি ২০২৬": "admission-2026",
  "Primary Assistant Teacher": "primary-assistant-teacher",
  "নিয়োগ পরীক্ষা": "recruitment-exam",
  "স্মার্টকার্ড": "smart-card",
  "সংশোধন": "correction",
  "অনলাইন আবেদন": "online-apply",
  "সেবা": "service",
  "ভিসা": "visa",
  "আবেদন": "application",
  "হারিয়ে যাওয়া": "lost",
  "ডুপ্লিকেট": "duplicate",
  "ভোটার আইডি": "voter-id",
  "ইসি": "ici",
  "বাংলাদেশ সেনা": "bangladesh-army",
  "ছুটি": "holiday",
  "বাংলাদেশ": "bangladesh",
  "রাজশাহী": "rajshahi",
  "ঢাকা": "dhaka",
  "বিমানবন্দর": "airport",
  "শিক্ষা": "education",
  "প্রস্তুতি": "preparation",
  "অনলাইন": "online",
  "সনদ": "certificate",
  "ইউনিয়ন": "union",
  "পরিবহন": "transport",
  "ভ্রমণ": "travel",
};

const categorySlugOverrides: Record<string, string> = {
  "সরকারি সেবা": "government-service",
  "পরীক্ষা ও ভর্তি": "exam-admission",
  "স্থানীয় গাইড": "local-guide",
  "চাকরি": "job-news",
  "শিক্ষা": "education",
  "পর্যটন": "tourism",
  "নিয়োগ": "recruitment",
  "ভ্রমণ": "travel",
  "বিশ্ববিদ্যালয় ভর্তি": "university-admission",
  "পরিবহন": "transport",
  "জন্ম নিবন্ধন": "birth-registration",
  "সরকারি চাকরি": "government-job",
  "বিসিএস": "bcs",
  "NID/জন্ম নিবন্ধন": "nid-birth-registration",
};

const bengaliTransliteration: Record<string, string> = {
  "অ": "a",
  "আ": "a",
  "ই": "i",
  "ঈ": "i",
  "উ": "u",
  "ঊ": "u",
  "ঋ": "ri",
  "এ": "e",
  "ঐ": "oi",
  "ও": "o",
  "ঔ": "ou",
  "ক": "k",
  "খ": "kh",
  "গ": "g",
  "ঘ": "gh",
  "ঙ": "ng",
  "চ": "c",
  "ছ": "ch",
  "জ": "j",
  "ঝ": "jh",
  "ঞ": "n",
  "ট": "t",
  "ঠ": "th",
  "ড": "d",
  "ঢ": "dh",
  "ণ": "n",
  "ত": "t",
  "থ": "th",
  "দ": "d",
  "ধ": "dh",
  "ন": "n",
  "প": "p",
  "ফ": "ph",
  "ব": "b",
  "ভ": "bh",
  "ম": "m",
  "য": "y",
  "র": "r",
  "ল": "l",
  "শ": "sh",
  "ষ": "sh",
  "স": "s",
  "হ": "h",
  "য়": "y",
  "ড়": "r",
  "ঢ়": "rh",
  "ং": "ng",
  "ঃ": "h",
  "ঁ": "n",
  "ৎ": "t",
  "া": "a",
  "ি": "i",
  "ী": "i",
  "ু": "u",
  "ূ": "u",
  "ৃ": "ri",
  "ে": "e",
  "ৈ": "oi",
  "ো": "o",
  "ৌ": "ou",
  "্": "",
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9",
};

export function slugify(text: string, type?: "tag" | "category" | "author"): string {
  const trimmed = text.toString().trim();

  if (type === "tag" && tagSlugOverrides[trimmed]) {
    return tagSlugOverrides[trimmed];
  }
  if (type === "category" && categorySlugOverrides[trimmed]) {
    return categorySlugOverrides[trimmed];
  }

  const transliterated = trimmed
    .split("")
    .map((char) => bengaliTransliteration[char] ?? char)
    .join("");

  return transliterated
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
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

export async function getTopPostsLastDay(limit = 5): Promise<any[]> {
  const posts = await getAllPosts();
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recent = posts.filter((p) => new Date(p.data.pubDate).getTime() >= oneDayAgo.getTime());
  return recent.length > 0 ? recent.slice(0, limit) : getRecentPosts(limit);
}

export async function getPostsByCollection(collectionName: string): Promise<any[]> {
  const posts = await getCollection(collectionName as any);
  return posts.filter((e) => !(e as { data: { draft: boolean } }).data.draft);
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncate(text: string, length = 120): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

function addTaxonomy(map: Map<string, { label: string; entries: any[] }>, label: string, entry: any, type: "tag" | "category" | "author"): void {
  const slug = slugify(label, type);
  const normalizedLabel = String(label).trim();
  const existing = map.get(slug);
  if (existing) {
    existing.entries.push(entry);
  } else {
    map.set(slug, { label: normalizedLabel, entries: [entry] });
  }
}

export function buildTaxonomyIndex(entries: any[]): { categories: Map<string, { label: string; entries: any[] }>; tags: Map<string, { label: string; entries: any[] }>; authors: Map<string, { label: string; entries: any[] }> } {
  const categories = new Map();
  const tags = new Map();
  const authors = new Map();

  for (const entry of entries) {
    addTaxonomy(categories, entry.data.category, entry, "category");
    addTaxonomy(authors, entry.data.author, entry, "author");
    if (Array.isArray(entry.data.tags)) {
      for (const tag of entry.data.tags) {
        addTaxonomy(tags, tag, entry, "tag");
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
