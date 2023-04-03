import Css from './js.svg'
import './animated.css'

export default function logo2 () {
  const logo2 = document.querySelectorAll('#logo2 path')

  for (let i = 0; i < logo2.length; i++) {
    console.log(`Letter ${i} is ${logo2[i].getTotalLenght()}`)
  }

  return (
    <Css />
  )
}
