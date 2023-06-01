import React from 'react'
import CV from '../../assets/CV.pdf'

import { useTranslation } from 'react-i18next'

const CTA = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global')
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>{t('header.boton_cv')}</a>
      <a href='#contact' className='btn btn-primary'>{t('header.boton_contacto')}</a>
    </div>
  )
}

export default CTA
