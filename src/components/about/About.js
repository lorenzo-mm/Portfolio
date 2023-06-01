import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import Verificado from '../../assets/icons-languages/icon-animated/verificado1.gif'
import Carpeta from '../../assets/icons-languages/icon-animated/Carpeta.gif'

import { useTranslation } from 'react-i18next'

function About () {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global')
  return (
    <section id='about'>
      <h5>{t('about.subtitulo_about')}</h5>
      <h2>{t('about.titulo_about')}</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <img src={Verificado} alt='verificado' className='about__icon' />
              <h5>{t('about.titulo_años')}</h5>
              <small>{t('about.subtitulo_años')}</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ En todo el mundo</small>
            </article> */}

            <article className='about__card'>
              <img src={Carpeta} alt='carpeta' className='about__icon' />
              <h5>{t('about.titulo_proyectos')}</h5>
              <small>{t('about.subtitulo_proyectos')}</small>
            </article>
          </div>

          <p>
            {t('about.about_me1')}
            <hr />
            {t('about.about_me2')}
            <hr />
            {t('about.about_me3')}
          </p>

          <a href='#contact' className='btn btn-primary'>{t('about.boton_hablemos')}</a>
        </div>
      </div>
    </section>
  )
}

export default About
