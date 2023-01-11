export function localizePath(path: string, lang: string) {
  if (lang === 'en') return path
  return `/${lang}${path}`
}
