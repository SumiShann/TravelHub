'use client'

import { useTranslation } from '../../../i18n/client'
import { LanguageSwitcherBase } from './LanguageSwitcherBase'

export const LanguageSwitcher = ({ lng }) => {
  const { t } = useTranslation(lng, 'language-switcher')
  return <LanguageSwitcherBase t={t} lng={lng} />
}