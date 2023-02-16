import './style.css'
import generateElement from './generateElement.js'
import makeHeader from './makeHeader.js'

function about () {
  const m = generateElement('div', 'about', '')
  m.id = 'main'

  //   const item1 = addItem(coffeeImage1, 'round', 'latte art', 'Latte', 'Organic Coffee, Your choice of milk, sugar')
  //   m.appendChild(item1)

  //   const item2 = addItem(coffeeImage2, 'round', 'iced coffee', 'Iced Coffee', 'Organic Coffee, Ice, Your choice of milk, sugar')
  //   m.appendChild(item2)

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
