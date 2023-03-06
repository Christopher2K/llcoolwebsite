import i18next, { t } from 'i18next'
import { localizePath } from 'astro-i18next'
import { isBefore, isAfter } from 'date-fns'
import { enCA, fr } from 'date-fns/locale/index.js'
import { CollectionEntry, getCollection } from 'astro:content'
import cloudinary from 'cloudinary'

export function getCurrentLng() {
  const emptyPath = localizePath()
  const lng = emptyPath === '/' ? 'en' : emptyPath.substring(1)

  return lng
}

export function getArticleSlug(slug: string) {
  return slug
    .split('/')
    .filter((_, index) => index > 0)
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

type EntryWithPublishingDate = {
  id: string
  data: {
    publishingDate: Date
  }
}

function getOlderArticleFirst(a: EntryWithPublishingDate, b: EntryWithPublishingDate) {
  if (isAfter(a.data.publishingDate, b.data.publishingDate)) {
    return -1
  } else if (isBefore(a.data.publishingDate, b.data.publishingDate)) {
    return 1
  }
  return 0
}

// Super unsafe but I need to rework on .astro types
export async function getArticles<T extends 'blog' | 'indieStories'>(
  collection: T,
  lang: string,
): Promise<CollectionEntry<T>[]> {
  const collectionEntries = await getCollection(collection, data =>
    (data as unknown as EntryWithPublishingDate).id.startsWith(lang),
  )

  return (collectionEntries as unknown as EntryWithPublishingDate[]).sort(
    getOlderArticleFirst,
  ) as unknown as CollectionEntry<T>[]
}

// We don't want to generate url with /<locale>/article/<locale>/<slug>
// This function removes the locale prefix from every slug
export function cleanSlug(slug: string): string {
  const [_, result] = slug.split('/')
  if (!result) throw Error(`${slug} might be an invalid slug`)

  return result
}

export function getPageMetadataImage(title: string = t('seo:defaultOgImageTitle')) {
  return cloudinary.v2.url('christopher2k.dev/open-graph/template', {
    transformation: [
      {
        overlay: {
          font_family: 'Lato',
          font_size: 54,
          font_weight: '900',
          text: encodeURI(title),
        },
        color: '#FAFAFA',
        width: 640,
        height: 280,
        gravity: 'north_west',
        y: 92,
        x: 60,
        crop: 'fit',
      },
    ],
  })
}
