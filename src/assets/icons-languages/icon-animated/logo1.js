import Html from './html.svg'
import './animated.css'

export default function logo1 () {
  const logo1 = document.querySelectorAll('#logo1 path')

  for (let i = 0; i < logo1.length; i++) {
    console.log(`Letter ${i} is ${logo1[i].getTotalLenght()}`)
  }

  return (
    <Html />
  )
}
