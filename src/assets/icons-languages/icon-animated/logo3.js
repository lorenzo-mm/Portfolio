import Js from './css.svg'
import './animated.css'

export function logo3 () {
  const logo3 = document.querySelectorAll('#logo3 path')

  for (let i = 0; i < logo3.length; i++) {
    console.log(`Letter ${i} is ${logo3[i].getTotalLenght()}`)
  }

  return (
    <Js />
  )
}
