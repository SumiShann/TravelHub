import { useTranslation } from '../../../i18n'
import { LanguageSwitcherBase } from './LanguageSwitcherBase'

export const LanguageSwitcher = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'language-switcher')
  return <LanguageSwitcherBase t={t} lng={lng} />
}