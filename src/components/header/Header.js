import React from 'react'
import './header.css'
import Cta from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header () {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hola, me llamo</h5>
        <h1>Lorenzo Muñoz</h1>
        <h5 className='text-light'>Front-end developer</h5>
        <Cta />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll hacia abajo</a>
      </div>
    </header>
  )
}

export default Header
