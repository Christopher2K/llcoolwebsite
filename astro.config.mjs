import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  site: 'https://christopher2k.dev',
  integrations: [
    astroI18next(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    svelte(),
    mdx({
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-CA',
          fr: 'fr-FR',
        },
      },
    }),
  ],
})
