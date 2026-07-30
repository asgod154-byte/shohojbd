import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postSchema = z.object({
  title: z.string(),
  description: z.string().max(160),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default("Shohoj BD"),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  redirectFrom: z.array(z.string()).default([]),
  coverImage: z.string().optional(),
  coverImageAlt: z.string().optional(),
  featured: z.boolean().default(false),
  officialLinks: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .default([]),
  faq: z
    .array(z.object({ question: z.string(), answer: z.string() }))
    .default([]),
  draft: z.boolean().default(false),
});

const sorkariSeba = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sorkari-seba" }),
  schema: postSchema,
});

const examOVorti = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/exam-o-vorti" }),
  schema: postSchema,
});

const localGuide = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/local-guide" }),
  schema: postSchema.extend({
    placeType: z.enum(["tourist-spot", "business", "service"]),
    division: z.string(),
    district: z.string(),
    address: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  }),
});

export const collections = {
  "sorkari-seba": sorkariSeba,
  "exam-o-vorti": examOVorti,
  "local-guide": localGuide,
};
