import React from 'react'
import './footer.css'
import UseAnimations from 'react-useanimations'
import Github from 'react-useanimations/lib/github'
import Linkedin from 'react-useanimations/lib/linkedin'
import Twitter from 'react-useanimations/lib/twitter'

function Footer () {
  return (
    <footer>
      <a href='https://www.linkedin.com/in/lorenzo-mmuñoz/' className='footer__logo'>Lorenzo Muñoz</a>

      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/lorenzo-mmuñoz/'
        >
          <UseAnimations animation={Linkedin} strokeColor='#fff' />
        </a>
        <a
          href='https://github.com/lorenzo-mm'
        >
          <UseAnimations animation={Github} strokeColor='#fff' />
        </a>
        <a
          href='https://twitter.com/Lorendev_'
        >
          <UseAnimations animation={Twitter} strokeColor='#fff' />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>
          Diseñado con 💚 por <a href='https://github.com/lorenzo-mm' alt='' style={{ fontWeight: 'bold' }}>Lorenzo Muñoz</a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
