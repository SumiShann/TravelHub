import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { roboto } from './fonts'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)} className={roboto.className}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}