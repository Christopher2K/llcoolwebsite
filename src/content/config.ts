import { z, defineCollection } from 'astro:content'

const articleSchema = {
  title: z.string(),
  publishingDate: z.date(),
  tags: z.array(z.string()),
  heroImageUrl: z.string(), // Displayed as a hero section in the blog page
  thumbnailImageUrl: z.string(), // Displayed in the article list
}

const blogCollection = defineCollection({
  schema: articleSchema,
})

const indieStoriesCollection = defineCollection({
  schema: articleSchema,
})

export const collection = {
  blog: blogCollection,
  indieStories: indieStoriesCollection,
}
