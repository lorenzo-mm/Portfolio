import React from 'react'
import UseAnimations from 'react-useanimations'
import Github from 'react-useanimations/lib/github'
import Linkedin from 'react-useanimations/lib/linkedin'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/lorenzo-mmu%C3%B1oz/' target='_black'>
        <UseAnimations animation={Github} size={32} />
      </a>
      <a href='https://github.com/lorenzo-mm' target='_black'>
        <UseAnimations animation={Linkedin} size={32} />
      </a>
    </div>
  )
}

export default HeaderSocials
