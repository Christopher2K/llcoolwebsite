import config from '../astro-i18next.config'

export function localizePath(path: string, lang: string) {
  const [maybeLocale, ...rest] = path.slice(1).split('/')
  let fragment = path
  if (maybeLocale && config.locales.includes(maybeLocale)) {
    fragment = `/${rest.join('/')}`
  }

  if (lang === 'en') return fragment
  return `/${lang}${fragment}`
}
