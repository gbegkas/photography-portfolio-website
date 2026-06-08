import { defineCollection, z } from "astro:content";

const shootSchema = ({ image }: any) => z.object({
  title: z.string(),
  description: z.string().optional(),
  cover: image(),
  order: z.number().default(0),
  images: z.array(image()),
  date: z.coerce.date(),
  instagramUrls: z.array(z.string().url()).optional(),
});

const shoots = defineCollection({ schema: shootSchema });
const equestrian = defineCollection({ schema: shootSchema });

export const collections = { shoots, equestrian };