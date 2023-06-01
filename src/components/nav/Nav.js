import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUserPlus, BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { BsFolder } from 'react-icons/bs'

import LanguageButton from '../../context/LanguageButton'
import BtnDarkMode from '../../context/btnDarkMode'

export default function Nav () {
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

      {/* Spanish/English button & Dark/Light button */}
      <label className='utilities'>
        <LanguageButton
          name='lang-mode'
          id='lang-mode'
          className='btn-lang'
        />
        <BtnDarkMode
          id='dark-mode'
        />
      </label>
    </>
  )
}
