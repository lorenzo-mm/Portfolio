import React from 'react'
import './contact.css'
import Mensaje from '../../assets/icons-languages/icon-animated/mensaje1.gif'

import { useTranslation } from 'react-i18next'

function Contact () {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global')
  return (
    <section id='contact'>
      <h5>{t('portfolio.subtitulo_contacto')}</h5>
      <h2>{t('portfolio.titulo_contacto')}</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <img src={Mensaje} alt='mensaje' className='contact__option-icon' />
            <h4>Email</h4>
            <h5>cepo_mm@hotmail.com</h5>
            <a
              href='mailto:cepo_mm@hotmail.com'
              target='_blank'
              rel='noreferrer'
            >
              {t('portfolio.mensaje')}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
