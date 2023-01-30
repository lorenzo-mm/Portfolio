import React from 'react'
import './services.css'
import { VscCheckAll } from 'react-icons/vsc'

function Services () {
  return (
    <section id='services'>
      <h5>Que Ofrezco</h5>
      <h2>Mis Servicios</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
          </ul>
        </article>
        {/* FIN DEL UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
          </ul>
        </article>
        {/* FIN DEL WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Creacion de Contenido</h3>
          </div>

          <ul className='service__list'>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <VscCheckAll className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
          </ul>
        </article>
        {/* FIN DE CREACION DE CONTENIDO */}
      </div>
    </section>
  )
}

export default Services
