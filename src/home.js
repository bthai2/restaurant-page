import './style.css'
import Icon from './latte.png'
import generateElement from './generateElement.js'
import makeHeader from './makeHeader.js'

function home () {
  const h = generateElement('div', 'home', '')
  h.id = 'main'

  const welcome = generateElement('p', '', 'Welcome')
  h.appendChild(welcome)

  const desc = generateElement('p', '', 'To the best coffee shop in town')
  h.appendChild(desc)

  const img = new Image()
  img.classList.add('round')
  img.src = Icon
  img.alt = 'latte'
  h.appendChild(img)

  const outro = generateElement('p', '', 'Order online or visit us today!')
  h.appendChild(outro)

  return h
}

export default function homePage () {
  const div = document.createElement('div')
  div.id = 'content'
  div.appendChild(makeHeader('home'))
  div.appendChild(home())
  return div
}
