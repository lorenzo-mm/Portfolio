import React from 'react'
import './portfolio.css'
import Apple from '../../assets/apple1.png'
import Burger from '../../assets/burger1.png'
import Admin from '../../assets/admin1.png'
import Calculadora from '../../assets/calculadora.png'
import Mapfre from '../../assets/mapfre.PNG'
import Spacex from '../../assets/spacex.PNG'
import ComingSoon from '../../assets/coming-soon.png'
import { Logo1, Logo2, Logo3 } from '../../assets/icons-languages/icon-animated/animated.js'
import ReactIcon from '../../assets/icons-languages/react_icon.gif'

const data = [
  {
    id: 1,
    image: Apple,
    title: 'Clon pagina principal de Apple',
    subtitle: 'Creada usando Html, Css y flexbox.',
    languages: [Logo1, Logo2],
    github: 'https://github.com/lorenzo-mm/Clon-Apple-2021',
    demo: 'https://lorenzo-mm.github.io/Clon-Apple-2021/'
  },
  {
    id: 2,
    image: Burger,
    title: 'Pagina web de Hamburguesas',
    subtitle: 'Creada usando Html, Css y flexbox.',
    languages: [Logo1, Logo2],
    github: 'https://github.com/lorenzo-mm/Burger-Website',
    demo: 'https://lorenzo-mm.github.io/Burger-Website/'
  },
  {
    id: 3,
    image: Admin,
    title: 'Admin Dashboard',
    subtitle: 'Creada usando React, Material UI, modo claro y oscuro, Nivo Charts, Formik, Yup, FullCalendar, y Data Grid.',
    languages: [Logo1, Logo2, ReactIcon],
    github: 'https://github.com/lorenzo-mm/Dashboard-Admin-with-React',
    demo: 'https://lorenzo-mm.github.io/Dashboard-Admin-with-React/'
  },
  {
    id: 4,
    image: Calculadora,
    title: 'Calculadora',
    subtitle: 'Creada usando Html, Css y JavaScript con modo claro y oscuro',
    languages: [Logo1, Logo2, Logo3],
    github: 'https://github.com/lorenzo-mm/Calculator',
    demo: 'https://lorenzo-mm.github.io/Calculator/'
  },
  {
    id: 5,
    image: Mapfre,
    title: 'Portal Interno Mapfre',
    subtitle: 'Creada usando Next 13, TailwindCSS, useState, useRouter, NextAuth, Google provider, Github provider, Credentials provider, Formik, MongoDB.',
    languages: [ReactIcon],
    github: 'https://github.com/lorenzo-mm/portal-mapfre',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 6,
    image: Spacex,
    title: 'SpaceX API',
    subtitle: 'Creado con react y una api de spacex',
    languages: [ReactIcon],
    github: 'https://github.com/lorenzo-mm/Space-X-API-with-React',
    demo: 'https://lorenzo-mm.github.io/Space-X-API-with-React/'
  },
  {
    id: 7,
    image: ComingSoon,
    title: 'Proximamente...',
    subtitle: 'Proximamente...',
    languages: [ReactIcon],
    github: 'https://github.com/lorenzo-mm',
    demo: 'https://github.com/lorenzo-mm'
  },
  {
    id: 8,
    image: ComingSoon,
    title: 'Proximamente...',
    subtitle: 'Proximamente...',
    languages: [ReactIcon],
    github: 'https://github.com/lorenzo-mm',
    demo: 'https://github.com/lorenzo-mm'
  },
  {
    id: 9,
    image: ComingSoon,
    title: 'Proximamente...',
    subtitle: 'Proximamente...',
    languages: [ReactIcon],
    github: 'https://github.com/lorenzo-mm',
    demo: 'https://github.com/lorenzo-mm'
  }
]

function Portfolio () {
  return (
    <section id='portfolio'>
      <h5>Mis Trabajos Recientes</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, subtitle, languages, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h2>
                  {title}
                </h2>
                <h4>
                  {subtitle}
                </h4>
                <div>
                  {
                    languages.map(data => <img src={data} alt='icon' className='animated_icon' key={' '} />)
                  }
                </div>
                <div className='portfolio__item-cta'>
                  <a
                    href={github}
                    className='btn'
                    target='_blank'
                    rel='noreferrer'
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Demo
                  </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
