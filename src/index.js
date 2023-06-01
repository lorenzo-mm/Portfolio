import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import es from './lang/es/global.json'
import en from './lang/en/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: en
    },
    es: {
      global: es
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
)
