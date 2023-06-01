import React from 'react'
import './experience.css'
import { BsCheck2Circle } from 'react-icons/bs'

import { useTranslation } from 'react-i18next'

function Experience () {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global')

  return (
    <section id='experience'>
      <h5>{t('experience.subtitulo_experiencia')}</h5>
      <h2>{t('experience.titulo_experiencia')}</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>{t('experience.titulo_frontend')}</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <div>
                <BsCheck2Circle className='experience__details-icon' />
              </div>
              <div>
                <h4>{t('experience.html')}</h4>
                <small className='text-light'>{t('experience.experimentado')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.css')}</h4>
                <small className='text-light'>{t('experience.experimentado')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.javascript')}</h4>
                <small className='text-light'>{t('experience.intermedio')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.reactjs')}</h4>
                <small className='text-light'>{t('experience.intermedio')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.nextjs')}</h4>
                <small className='text-light'>{t('experience.intermedio')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.mui')}</h4>
                <small className='text-light'>{t('experience.intermedio')}</small>
              </div>
            </article>
          </div>
        </div>
        {/* FIN DEL FRONTEND */}

        <div className='experience__backend'>
          <h3>{t('experience.titulo_backend')}</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.nodejs')}</h4>
                <small className='text-light'>{t('experience.experimentado')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.mongodb')}</h4>
                <small className='text-light'>{t('experience.basico')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.git')}</h4>
                <small className='text-light'>{t('experience.intermedio')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.sql')}</h4>
                <small className='text-light'>{t('experience.intermedio')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>{t('experience.github')}</h4>
                <small className='text-light'>{t('experience.experimentado')}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
