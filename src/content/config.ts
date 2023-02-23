import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: {
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    heroImage: z.string(), // Displayed as a hero section in the blog page
    itemImage: z.string(), // Displayed in the article list
  },
})

export const collection = {
  blog: blogCollection,
}
