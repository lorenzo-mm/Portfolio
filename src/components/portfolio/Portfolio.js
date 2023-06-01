import React from 'react'
import './portfolio.css'
import { useTranslation } from 'react-i18next'

import Apple from '../../assets/apple1.png'
import Burger from '../../assets/burger1.png'
import Admin from '../../assets/admin1.png'
import Calculadora from '../../assets/calculadora.png'
import Mapfre from '../../assets/mapfre.PNG'
import Spacex from '../../assets/spacex.PNG'
import Pptss from '../../assets/pptss.PNG'
import Todolist from '../../assets/todolist.PNG'
import AgeCalculator from '../../assets/agecalculator.PNG'
// import ComingSoon from '../../assets/coming-soon.png'

import Html from '../../assets/icons-languages/icon-animated/html.svg'
import Css from '../../assets/icons-languages/icon-animated/css.svg'
import Js from '../../assets/icons-languages/icon-animated/js.svg'
import ReactIcon from '../../assets/icons-languages/icon-animated/react_icon.gif'
import Next13 from '../../assets/icons-languages/icon-animated/nextjs.svg'

function Portfolio () {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global')

  const data = [
    {
      id: 1,
      image: Apple,
      title: t('portfolio.apple'),
      subtitle: t('portfolio.descripcion_apple'),
      languages: [Html, Css],
      github: 'https://github.com/lorenzo-mm/Clon-Apple-2021',
      demo: 'https://lorenzo-mm.github.io/apple-page-clon/Html/'
    },
    {
      id: 2,
      image: Burger,
      title: t('portfolio.burger'),
      subtitle: t('portfolio.descripcion_burger'),
      languages: [Html, Css],
      github: 'https://github.com/lorenzo-mm/Burger-Website',
      demo: 'https://lorenzo-mm.github.io/Burger-Website/'
    },
    {
      id: 3,
      image: Calculadora,
      title: t('portfolio.calculadora'),
      subtitle: t('portfolio.descripcion_calculadora'),
      languages: [Html, Css, Js],
      github: 'https://github.com/lorenzo-mm/Calculator',
      demo: 'https://lorenzo-mm.github.io/Calculator/'
    },
    {
      id: 4,
      image: Spacex,
      title: t('portfolio.spacex'),
      subtitle: t('portfolio.descripcion_spacex'),
      languages: [Html, Css, Js, ReactIcon],
      github: 'https://github.com/lorenzo-mm/Space-X-API-with-React',
      demo: 'https://lorenzo-mm.github.io/Space-X-API-with-React/'
    },
    {
      id: 5,
      image: Admin,
      title: t('portfolio.admin'),
      subtitle: t('portfolio.descripcion_admin'),
      languages: [Html, Css, Js, ReactIcon],
      github: 'https://github.com/lorenzo-mm/Dashboard-Admin-with-React',
      demo: 'https://lorenzo-mm.github.io/Dashboard-Admin-with-React/'
    },
    {
      id: 6,
      image: Mapfre,
      title: t('portfolio.mapfre'),
      subtitle: t('portfolio.descripcion_mapfre'),
      languages: [Html, Css, Js, ReactIcon, Next13],
      github: 'https://github.com/lorenzo-mm/portal-mapfre',
      demo: 'https://github.com/lorenzo-mm/TechNews.'
    },
    {
      id: 7,
      image: Pptss,
      title: t('portfolio.pptss'),
      subtitle: t('portfolio.descripcion_pptss'),
      languages: [Html, Css, Js, ReactIcon],
      github: 'https://github.com/lorenzo-mm/react-rpsls-main',
      demo: 'https://lorenzo-mm.github.io/react-rpsls-main/'
    },
    {
      id: 8,
      image: Todolist,
      title: t('portfolio.todo_list'),
      subtitle: t('portfolio.descripcion_todo_list'),
      languages: [Html, Css, Js, ReactIcon, Next13],
      github: 'https://github.com/lorenzo-mm/Todo-List',
      demo: 'https://lorenzo-mm.github.io/todo-list/'
    },
    {
      id: 9,
      image: AgeCalculator,
      title: t('portfolio.age_calc'),
      subtitle: t('portfolio.descripcion_age_calc'),
      languages: [Html, Css, Js, ReactIcon],
      github: 'https://github.com/lorenzo-mm',
      demo: 'https://lorenzo-mm.github.io/age-calculator-main/'
    }
  ]

  return (
    <section id='portfolio'>
      <h5>{t('portfolio.subtitulo_portfolio')}</h5>
      <h2>{t('portfolio.titulo_portfolio')}</h2>

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
                    languages.map(data => <img src={data} alt='icon' className='animated_icon' key={data} />)
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
