import { satisfy } from '../../fonts'
import { useTranslation } from '../../../i18n'
import Link from 'next/link'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'


export default async function Header({ lng }){
    const { t } = await useTranslation(lng, 'header')
    return (
        <header>
            <h1 className={satisfy.className}>TravelHub</h1>
            <Link href={`/${lng}/about`}>
            {t('about')}
            </Link>
            <LanguageSwitcher lng={lng}/>
        </header>
    )
}