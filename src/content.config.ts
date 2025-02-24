import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    //isPublish: z.boolean(),
    //isDraft: z.boolean().default(false),
    author: z.string(),
  }),
});

//export const collections = { blog };

const recipe = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/recipe" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    //isPublish: z.boolean(),
    //isDraft: z.boolean().default(false),
    author: z.string(),
    cooking_time: z.string(),
  }),
});

export const collections = { blog, recipe };