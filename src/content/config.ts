import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['kitchen', 'bathroom', 'bedroom', 'decluttering', 'living-dining-room', 'gardening']),
    date: z.string(),
    featuredImage: z.string(),
    imageLeft: z.string(),
    imageRight: z.string(),
    amazonProduct: z.object({
      name: z.string(),
      image: z.string(),
      description: z.string(),
      link: z.string().url()
    })
  })
});

export const collections = { posts };
