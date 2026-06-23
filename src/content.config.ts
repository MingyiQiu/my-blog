import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    date: z.string(),
    weather: z.string().optional(),
    temp: z.string().optional(),
    title: z.string().optional(),
    mood: z.string().optional(),
    lunch: z.string().optional(),
    water: z.number().int().min(0).max(10).default(0).optional(),
    thought: z.string().optional(),
  }),
});

export const collections = {
  journal,
};
