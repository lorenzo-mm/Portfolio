import React from 'react'
import './header.css'
import Cta from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

import { useTranslation } from 'react-i18next'

function Header () {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global')

  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>{t('header.app_bienvenido')}</h5>
        <h1>Lorenzo Muñoz</h1>
        <h4 className='text-light'>Frontend Developer</h4>
        <Cta />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>{t('header.text_scroll')}</a>
      </div>
    </header>
  )
}

export default Header
