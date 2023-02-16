import generateElement from './generateElement.js'
import homePage from './home.js'
import menuPage from './menu.js'
import aboutPage from './about.js'

export default function header (activeBtn) {
  const h = generateElement('header', '', '')

  const name = generateElement('h1', 'name', 'Cafe Bean')
  h.appendChild(name)

  const nav = generateElement('nav', '', '')

  const homeBtn = generateElement('button', 'nav-btn', 'Home')
  homeBtn.id = 'nav-home'

  const menuBtn = generateElement('button', 'nav-btn', 'Menu')
  menuBtn.id = 'nav-menu'

  const aboutBtn = generateElement('button', 'nav-btn', 'About')
  aboutBtn.id = 'nav-about'

  if (activeBtn === 'home') {
    homeBtn.classList.add('active')
  } else if (activeBtn === 'menu') {
    menuBtn.classList.add('active')
  } else {
    aboutBtn.classList.add('active')
  }

  homeBtn.addEventListener('click', () => {
    document.body.removeChild(document.getElementById('content'))
    document.body.appendChild(homePage())
  })

  menuBtn.addEventListener('click', () => {
    document.body.removeChild(document.getElementById('content'))
    document.body.appendChild(menuPage())
  })

  aboutBtn.addEventListener('click', () => {
    document.body.removeChild(document.getElementById('content'))
    document.body.appendChild(aboutPage())
  })

  nav.appendChild(homeBtn)
  nav.appendChild(menuBtn)
  nav.appendChild(aboutBtn)
  h.appendChild(nav)

  return h
}
