import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import Verificado from '../../assets/icons-languages/icon-animated/verificado1.gif'
import Carpeta from '../../assets/icons-languages/icon-animated/Carpeta.gif'

function About () {
  return (
    <section id='about'>
      <h5>Algo más</h5>
      <h2>Sobre Mi</h2>

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
              <h5>Experiencia</h5>
              <small>1 Año trabajando</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ En todo el mundo</small>
            </article> */}

            <article className='about__card'>
              <img src={Carpeta} alt='carpeta' className='about__icon' />
              <h5>Proyectos</h5>
              <small>10+ completados</small>
            </article>
          </div>

          <p>
            Apasionado por la tecnología, la programación y el diseño. Me encantan los retos y el trabajo en equipo.
            <hr />
            Con ganas de aportar mis conocimiento y aprender siempre en modo organizado.
            Especializándome en Desarrollo Web y Diseño Web, con el objetivo de hacer la mejor experencia para el usuario.
            <hr />
            Me encantaría tener ocasión de demostrar mis habilidades en su empresa.
          </p>

          <a href='#contact' className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About
