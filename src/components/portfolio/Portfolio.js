import React from 'react'
import './portfolio.css'

import Apple from '../../assets/apple1.png'
import Burger from '../../assets/burger1.png'
import Admin from '../../assets/admin1.png'
import Calculadora from '../../assets/calculadora.png'
import Mapfre from '../../assets/mapfre.PNG'
import Spacex from '../../assets/spacex.PNG'
import Pptss from '../../assets/pptss.PNG'
import Todolist from '../../assets/todolist.PNG'
import ComingSoon from '../../assets/coming-soon.png'

import Html from '../../assets/icons-languages/icon-animated/html.svg'
import Css from '../../assets/icons-languages/icon-animated/css.svg'
import Js from '../../assets/icons-languages/icon-animated/js.svg'
import ReactIcon from '../../assets/icons-languages/icon-animated/react_icon.gif'
import Next13 from '../../assets/icons-languages/icon-animated/nextjs.svg'

const data = [
  {
    id: 1,
    image: Apple,
    title: 'Clon pagina principal de Apple',
    subtitle: 'Creada usando Html, Css y flexbox.',
    languages: [Html, Css],
    github: 'https://github.com/lorenzo-mm/Clon-Apple-2021',
    demo: 'https://lorenzo-mm.github.io/Clon-Apple-2021/'
  },
  {
    id: 2,
    image: Burger,
    title: 'Pagina web de Hamburguesas',
    subtitle: 'Creada usando Html, Css y flexbox.',
    languages: [Html, Css],
    github: 'https://github.com/lorenzo-mm/Burger-Website',
    demo: 'https://lorenzo-mm.github.io/Burger-Website/'
  },
  {
    id: 3,
    image: Calculadora,
    title: 'Calculadora',
    subtitle: 'Creada usando Html, Css y JavaScript con modo claro y oscuro',
    languages: [Html, Css, Js],
    github: 'https://github.com/lorenzo-mm/Calculator',
    demo: 'https://lorenzo-mm.github.io/Calculator/'
  },
  {
    id: 4,
    image: Spacex,
    title: 'SpaceX API',
    subtitle: 'Creado con react y una api de spacex',
    languages: [Html, Css, Js, ReactIcon],
    github: 'https://github.com/lorenzo-mm/Space-X-API-with-React',
    demo: 'https://lorenzo-mm.github.io/Space-X-API-with-React/'
  },
  {
    id: 5,
    image: Admin,
    title: 'Admin Dashboard',
    subtitle: 'Creada usando React, Material UI, modo claro y oscuro, Nivo Charts, Formik, Yup, FullCalendar, y Data Grid.',
    languages: [Html, Css, Js, ReactIcon],
    github: 'https://github.com/lorenzo-mm/Dashboard-Admin-with-React',
    demo: 'https://lorenzo-mm.github.io/Dashboard-Admin-with-React/'
  },
  {
    id: 6,
    image: Mapfre,
    title: 'Portal Interno Mapfre',
    subtitle: 'Creada usando Next 13, TailwindCSS, useState, useRouter, NextAuth, Google provider, Github provider, Credentials provider, Formik, MongoDB.',
    languages: [Html, Css, Js, ReactIcon, Next13],
    github: 'https://github.com/lorenzo-mm/portal-mapfre',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 7,
    image: Pptss,
    title: 'Piedra, Papel, Tijera, Serpiente, Spock',
    subtitle: 'Juego',
    languages: [Html, Css, Js, ReactIcon],
    github: 'https://github.com/lorenzo-mm/piedra-papel-tijera-serpiente-spock',
    demo: 'https://lorenzo-mm.github.io/piedra-papel-tijera-serpiente-spock/'
  },
  {
    id: 8,
    image: Todolist,
    title: 'Todo List',
    subtitle: 'Proximamente...',
    languages: [Html, Css, Js, ReactIcon, Next13],
    github: 'https://github.com/lorenzo-mm/Todo-List',
    demo: 'https://github.com/lorenzo-mm'
  },
  {
    id: 9,
    image: ComingSoon,
    title: 'Proximamente...',
    subtitle: 'Proximamente...',
    languages: [],
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
