import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/books' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    series: z.string(),
    order: z.number(),
    cover: z.string(),
    blurb: z.string(),
    listingTagline: z.string().optional(),
    listingParagraph: z.string().optional(),
    tropes: z.array(z.string()).optional(),
    heatLevel: z.string().optional(),
    contentNotes: z.string().optional(),
    seriesPromise: z.string().optional(),
    buyLink: z.string().optional(),
    preorder: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const freebies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/freebies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tagline: z.string().optional(),
    blurb: z.string(),
    listingTagline: z.string().optional(),
    listingParagraph: z.string().optional(),
    tropes: z.array(z.string()).optional(),
    cover: z.string(),
    deliveryLink: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    source: z.string(),
    bookTitle: z.string(),
  }),
});

export const collections = { books, freebies, testimonials };
