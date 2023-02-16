import './style.css'
import generateElement from './generateElement.js'
import makeHeader from './makeHeader.js'
import coffeeImage1 from './latteArt.jpg'

function addItem (imgSrc, imgClass, imgAlt, itemName, itemDesc) {
  const item = generateElement('div', 'item', '')

  const img = new Image()
  img.classList.add(imgClass)
  img.src = imgSrc
  img.alt = imgAlt
  item.appendChild(img)

  const name = generateElement('h2', '', itemName)
  item.appendChild(name)

  const desc = generateElement('p', '', itemDesc)
  item.appendChild(desc)

  return item
}

function menu () {
  const m = generateElement('div', 'menu', '')
  m.id = 'main'

  const item1 = addItem(coffeeImage1, 'round', 'latte art', 'Latte', 'Organic Coffee, Your choice of milk, sugar')

  m.appendChild(item1)

  return m
}

export default function menuPage () {
  const div = document.createElement('div')
  div.id = 'content'
  div.appendChild(makeHeader('menu'))
  div.appendChild(menu())
  return div
}
