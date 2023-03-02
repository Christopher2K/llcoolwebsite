import type { AstroI18nextConfig } from 'astro-i18next/index'

const config: AstroI18nextConfig = {
  defaultLocale: 'en',
  locales: ['en', 'fr'],
  namespaces: ['common', 'home', 'footer'],
  load: ['server'],
  i18nextClient: {
    detection: {
      order: ['querystring', 'path'],
    },
  },
}

export default config
