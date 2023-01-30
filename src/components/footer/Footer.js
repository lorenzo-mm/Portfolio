import React from 'react'
import './footer.css'
import { TbBrandFacebook, TbBrandInstagram, TbBrandTwitter } from 'react-icons/tb'

function Footer () {
  return (
    <footer>
      <a href='#footer' className='footer__logo'>Lorenzo Muñoz</a>

      <div className='footer__socials'>
        <a
          href='https://www.facebook.com/profile.php?id=100012029921842'
        >
          <TbBrandFacebook />
        </a>
        <a
          href='https://www.instagram.com/lorensiox/'
        >
          <TbBrandInstagram />
        </a>
        <a
          href='https://twitter.com/Donlorensio'
        >
          <TbBrandTwitter />
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
