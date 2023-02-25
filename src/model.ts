import { z } from 'astro:content'

export const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  publishingDate: z.date(),
  heroImageUrl: z.string(), // Displayed as a hero section in the blog page
  heroImageCaption: z.string(),
  thumbnailImageUrl: z.string(), // Displayed in the article list
})

export type ArticleSchema = z.infer<typeof articleSchema>
