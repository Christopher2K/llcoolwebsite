import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'

// https://astro.build/config
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
    svelte(),
    mdx({
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
})
