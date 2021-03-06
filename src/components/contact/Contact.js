import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'

function Contact() {
  return (
    <section id='contact'>
      <h5>Ponte en contacto</h5>
      <h2>Mi Contacto</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>cepo_mm@hotmail.com</h5>
            <a 
              href='mailto:cepo_mm@hotmail.com' 
              target='_blank' 
              rel='noreferrer'>
              Enviar un mensaje
            </a>
          </article>
        </div>
        {/* FIN OPCION DE CONTACTO */}
      </div>
    </section>
  )
}

export default Contact