import { z, defineCollection, reference } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
        x: z.number().optional(),
        y: z.number().optional(),
      })
      .optional(),
    publishDate: z.string().transform((str) => new Date(str)),
    relatedPosts: z.array(reference('blog')).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
