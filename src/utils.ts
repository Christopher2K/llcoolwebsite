import i18next from 'i18next'
import { localizePath } from 'astro-i18next'
import { fr, enCA } from 'date-fns/locale'

import i18nextConfig from '../astro-i18next.config'

export function getCurrentLng() {
  const emptyPath = localizePath()
  const lng = emptyPath === '/' ? 'en' : emptyPath.substring(1)

  return lng
}

export function getArticleSlug(slug: string) {
  return slug
    .split('/')
    .filter(fragment => fragment !== i18nextConfig.defaultLocale)
    .join('/')
}

const localDict = {
  en: enCA,
  fr,
}

export function getDateLocale(): Locale {
  const lang = i18next.language as keyof typeof localDict
  if (lang in localDict === false)
    throw new Error('Unknow local', { cause: `Loccal being ${lang}` })
  return localDict[lang]
}
