import { z, defineCollection } from "astro:content";

const games = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    status: z.enum(["released", "in-development", "abandoned"]),
  }),
});

export const collections = { games };