import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/lorenzo-mmu%C3%B1oz/' target='_black'>
        <FiLinkedin />
      </a>
      <a href='https://github.com/lorenzo-mm' target='_black'>
        <FiGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
