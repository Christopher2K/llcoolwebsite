import { localizePath } from 'astro-i18next'

export function getCurrentLng() {
  const emptyPath = localizePath()
  const lng = emptyPath === '/' ? 'en' : emptyPath.substring(1)

  return lng
}
