export default function generateElement (element, className, text) {
  const e = document.createElement(element)
  if (className !== '') {
    for (const i of className.split(' ')) {
      e.classList.add(i)
    }
  }
  e.textContent = text
  return e
}
