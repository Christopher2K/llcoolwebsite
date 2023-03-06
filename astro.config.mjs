import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'
import sitemap from '@astrojs/sitemap'
import cloudinary from 'cloudinary'

const env = loadEnv('', process.cwd(), '')
const cloudinaryV2 = cloudinary.v2

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  site: 'https://christopher2k.dev',
  integrations: [
    {
      name: 'cloudinary',
      hooks: {
        'astro:config:setup': () => {
          cloudinaryV2.config({
            secure: true,
            cloud_name: env.CLOUDINARY_CLOUD_NAME,
            api_key: env.CLOUDINARY_API_KEY,
            api_secret: env.CLOUDINARY_API_SECRET,
          })
        },
      },
    },
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
          en: 'en_US',
          fr: 'fr_FR',
        },
      },
    }),
  ],
})
