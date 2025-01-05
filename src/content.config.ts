import { z, defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
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
    publishDate: z.string().transform((str: string) => new Date(str)),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    deployedLink: z.string().url().optional(),
    ghLink: z.string().url().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      x: z.number().optional(),
      y: z.number().optional(),
    }),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        x: z.number().optional(),
        y: z.number().optional(),
      }),
    ),
    description: z.string(),
    publishDate: z.string().transform((str: string) => new Date(str)),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
