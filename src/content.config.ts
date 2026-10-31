import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('CIC Volunteers'),
    summary: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { news };
