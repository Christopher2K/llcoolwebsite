import type { AstroI18nextConfig } from 'astro-i18next/index'

const config: AstroI18nextConfig = {
  defaultLocale: 'en',
  locales: ['en', 'fr'],
  namespaces: ['common', 'home'],
}

export default config
