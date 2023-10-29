import { satisfy } from './fonts'
import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from './components/Footer/Footer'
import Header from './components/Header/Header'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <>
    <Header lng={lng}/>
    <h2>{t('title')}</h2>
      <Link href={`/${lng}/about`}>
        {t('to-second-page')}
      </Link>
    </>
  )
}