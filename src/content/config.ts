import { defineCollection, z } from "astro:content";

const shootSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  cover: z.string(),
  order: z.number().default(0),
  images: z.array(z.string()),
  date: z.coerce.date(),
  instagramUrls: z.array(z.string().url()).optional(),
  featuredImages: z.array(z.number()).optional(), // 0-based indexes of images to render large
  imageDims: z.record(z.object({ width: z.number(), height: z.number() })).optional(),
});

const shoots = defineCollection({ schema: shootSchema });
const equestrian = defineCollection({ schema: shootSchema });

export const collections = { shoots, equestrian };
