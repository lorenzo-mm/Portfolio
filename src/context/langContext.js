import React, { useState } from 'react'
import MensajesIngles from './../lang/en-EN.json'
import MensajesEspañol from './../lang/es-ES.json'
import { IntlProvider } from 'react-intl'

const langContext = React.createContext()

const LangProvider = ({ children }) => {
  const [mensajes, establecerMensajes] = useState(MensajesEspañol)
  const [locale, establecerLocale] = useState('es-ES')

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case 'es-ES':
        establecerMensajes(MensajesEspañol)
        establecerLocale('es-ES')
        break
      case 'en-EN':
        establecerMensajes(MensajesIngles)
        establecerLocale('en-EN')
        break
      default:
        establecerMensajes(MensajesEspañol)
        establecerLocale('es-ES')
    }
  }

  return (
    <langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  )
}

export { LangProvider, langContext }
