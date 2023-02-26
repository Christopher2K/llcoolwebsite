import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
  },
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
  ],
})
