import React from 'react'
import './experience.css'
import { BsCheck2Circle } from 'react-icons/bs'

function Experience () {
  return (
    <section id='experience'>
      <h5>Lenguajes que domino</h5>
      <h2>Mi Experiencia</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Desarollo Frontend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <div>
                <BsCheck2Circle className='experience__details-icon' />
              </div>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>CSS3/SCSS</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>NextJS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>
        </div>
        {/* FIN DEL FRONTEND */}

        <div className='experience__backend'>
          <h3>Desarollo Backend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
