import React from 'react'
import './portfolio.css'
import Apple from '../../assets/apple1.png'
import Burger from '../../assets/burger1.png'
import Admin from '../../assets/admin1.png'
import ComingSoon from '../../assets/coming-soon.png'
import ReactIcon from '../../assets/React_icon.gif'
import CssIcon from '../../assets/Css.gif'
import HtmlIcon from '../../assets/Html.gif'

const data = [
  {
    id: 1,
    image: Apple,
    title: 'Clon pagina principal de Apple',
    subtitle: 'Creada usando Html, Css y flexbox.',
    languages: [HtmlIcon, CssIcon],
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/Pagina-apple'
  },
  {
    id: 2,
    image: Burger,
    title: 'Pagina web de Hamburguesas',
    subtitle: 'Creada usando Html, Css y flexbox.',
    languages: [HtmlIcon, CssIcon],
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/Burger-Website'
  },
  {
    id: 3,
    image: Admin,
    title: 'Admin Dashboard',
    subtitle: 'Creada usando React, Material UI, modo claro y oscuro, Nivo Charts, Formik, Yup, FullCalendar, y Data Grid.',
    languages: [HtmlIcon, CssIcon, ReactIcon],
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 4,
    image: ComingSoon,
    title: 'Proximamente.....',
    subtitle: 'usando puro Html y Css con flexbox',
    languages: [ReactIcon, CssIcon],
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 5,
    image: ComingSoon,
    title: 'Proximamente.....',
    subtitle: 'usando puro Html y Css con flexbox',
    languages: [ReactIcon],
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 6,
    image: ComingSoon,
    title: 'Proximamente.....',
    subtitle: 'usando puro Html y Css con flexbox',
    languages: [ReactIcon],
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
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
                <h3>
                  {title}
                </h3>
                <h5>
                  {subtitle}
                </h5>
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
