import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FiAward} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

function About() {
  return (
    <section id='about'>
      <h5>Algo más</h5>
      <h2>Sobre Mi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>1 Año trabajando</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ En todo el mundo</small>
            </article> */}

            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Proyectos</h5>
              <small>10+ completados</small>
            </article>
          </div>

          <p>
          Me llamo Lorenzo Muñoz, y soy programador Front-end,
          soy muy curioso y me gustan mucho los retos, y siempre con el objetivo de aprender y innovar dia tras dia y siempre organizado en mi trabajo.

          actualmente me enfoco en crear páginas web con el objetivo de hacer la mejor experencia para el usuario.

          Me encantaría tener ocasión de demostrar mis aptitudes en su empresa.
          </p>

          <a href='#contact' className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About