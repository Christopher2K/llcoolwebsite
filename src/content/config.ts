import { defineCollection } from 'astro:content'

import { articleSchema } from '@app/model'

const blogCollection = defineCollection({
  schema: articleSchema,
})

const indieStoriesCollection = defineCollection({
  schema: articleSchema,
})

export const collections = {
  blog: blogCollection,
  indieStories: indieStoriesCollection,
}
