export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'hi', 'pa', 'mr', 'ta', 'te', 'gu', 'kn']
} as const

export type Locale = (typeof i18n)['locales'][number]
