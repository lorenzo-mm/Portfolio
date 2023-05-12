import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUserPlus, BiBook, BiMessageSquareDetail } from 'react-icons/bi'

import { BsFolder, BsSun, BsMoon } from 'react-icons/bs'

function Nav () {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <>
      <nav>
        <a
          href='#home'
          onClick={() => setActiveNav('#home')}
          className={activeNav === '#home' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href='#about'
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <BiUserPlus />
        </a>
        <a
          href='#experience'
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBook />
        </a>
        <a
          href='#portfolio'
          onClick={() => setActiveNav('#portfolio')}
          className={activeNav === '#portfolio' ? 'active' : ''}
        >
          <BsFolder />
        </a>
        <a
          href='#contact'
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
      <div className='utilities'>
        <a
          href='#language'
        >
          <BsSun />
        </a>
        <a
          href='#mode'
        >
          <BsMoon />
        </a>
      </div>
    </>
  )
}

export default Nav
