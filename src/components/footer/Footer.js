import React from 'react'
import './footer.css'
import UseAnimations from 'react-useanimations'
import Facebook from 'react-useanimations/lib/facebook'
import Instagram from 'react-useanimations/lib/instagram'
import Twitter from 'react-useanimations/lib/twitter'
// import { TbBrandFacebook, TbBrandInstagram, TbBrandTwitter } from 'react-icons/tb'

function Footer () {
  return (
    <footer>
      <a href='#footer' className='footer__logo'>Lorenzo Muñoz</a>

      <div className='footer__socials'>
        <a
          href='https://www.facebook.com/profile.php?id=100012029921842'
        >
          <UseAnimations animation={Facebook} strokeColor='#4db5ff' />
        </a>
        <a
          href='https://www.instagram.com/lorensiox/'
        >
          <UseAnimations animation={Instagram} strokeColor='#4db5ff' />
        </a>
        <a
          href='https://twitter.com/Lorendev_'
        >
          <UseAnimations animation={Twitter} strokeColor='#4db5ff' />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>
          &copy; Lorenzo Muñoz. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer
