import Html from './html.svg'
import Css from './css.svg'
import Js from './js.svg'
import './animated.css'

export function Logo1 () {
  const Logo1 = document.querySelectorAll('#icon1 path')

  for (let i = 0; i < Logo1.length; i++) {
    console.log(`Letter ${i} is ${Logo1[i].getTotalLenght()}`)
  }

  return (
    <Html className='HTML' />
  )
}

export function Logo2 () {
  return (
    <Css className='CSS' />
  )
}

export function Logo3 () {
  return (
    <Js className='JS' />
  )
}
