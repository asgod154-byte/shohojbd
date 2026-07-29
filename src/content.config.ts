import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guideSchema = z.object({
  title: z.string(),
  description: z.string().max(160),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default("[Site Name] Team"),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  redirectFrom: z.array(z.string()).default([]),
  coverImage: z.string().optional(),
  coverImageAlt: z.string().optional(),
  officialLinks: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .default([]),
  faq: z
    .array(z.object({ question: z.string(), answer: z.string() }))
    .default([]),
  draft: z.boolean().default(false),
});

const govtGuides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/govt-guides" }),
  schema: guideSchema,
});

const examGuides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/exam-guides" }),
  schema: guideSchema,
});

const localGuides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/local-guides" }),
  schema: guideSchema.extend({
    placeType: z.enum(["tourist-spot", "business", "service"]),
    division: z.string(),
    district: z.string(),
    address: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  }),
});

export const collections = {
  "govt-guides": govtGuides,
  "exam-guides": examGuides,
  "local-guides": localGuides,
};

