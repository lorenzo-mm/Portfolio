import React from 'react'
import { useTranslation } from 'react-i18next'

import spainFlag from '../assets/icons-languages/flags/spain-flag.png'
import ukFlag from '../assets/icons-languages/flags/uk-flag.png'

export default function LanguageButton () {
  const { t, i18n } = useTranslation('global')

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  return (
    <button className='btn-lang' onClick={handleClick}>
      {i18n.language === 'en'
        ? (
          <img className='rounded-full' src={spainFlag} alt='Español' />
          )
        : (
          <img className='rounded-full' src={ukFlag} alt='English' />
          )}
      {t()}
    </button>
  )
}
