import './style.css'
import generateElement from './generateElement.js'
import makeHeader from './makeHeader.js'

function about () {
  const m = generateElement('div', 'about', '')
  m.id = 'main'

  const text = generateElement('p', '', 'This is a sample about section.')
  m.appendChild(text)

  return m
}

export default function aboutPage () {
  const div = document.createElement('div')
  div.id = 'content'
  div.appendChild(makeHeader('about'))
  div.appendChild(about())
  return div
}
