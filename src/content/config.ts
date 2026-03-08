import { defineCollection, z } from "astro:content";

const shoots = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    cover: image(),
    images: z.array(image()),
  }),
});

export const collections = { shoots };
