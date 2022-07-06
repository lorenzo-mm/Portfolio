import React from 'react'
import './portfolio.css'
import Apple from '../../assets/apple1.png'
import Burger from '../../assets/burger1.png'
import ComingSoon from '../../assets/coming-soon.png'


const data = [
  {
    id: 1,
    image: Apple,
    title: 'Clon de la pagina principal de Apple hecha con HTML y CSS',
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/Pagina-apple'
  },
  {
    id: 2,
    image: Burger,
    title: 'Burger: Pagina web hecha con HTML y CSS',
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/Burger-Website'
  },
  {
    id: 3,
    image: ComingSoon,
    title: 'Proximamente..',
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 4,
    image: ComingSoon,
    title: 'Proximamente.....',
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 5,
    image: ComingSoon,
    title: 'Proximamente.....',
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 6,
    image: ComingSoon,
    title: 'Proximamente.....',
    github: 'https://github.com/lorenzo-mm?tab=overview&from=2022-04-01&to=2022-04-30',
    demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
]



function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Mi Trabajos Recientes</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>
                  {title}
                </h3>
                <div className='portfolio__item-cta'>
                <a 
                  href={github} 
                  className='btn'
                  target='_blank'
                  rel='noreferrer'>
                  GitHub
                </a>
                <a 
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'>
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