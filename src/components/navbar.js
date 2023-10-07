import { createSetElement, createFullElement, getElement } from "../util"
import img1 from '../img/icons/icons8-menu-50.png'
import img2 from '../img/icons/toDo.png'
import "../sass/navBar.scss"

function navBar() {
  const nav = createSetElement("nav", {
    class: "nav-bar"
  })
  const imgWrapper = createSetElement(
    'div',
    {
      class: "img-wrapper"
    }
  )
  const menuIcon = createSetElement('img', {
    class: "menu-toogle",
    src: img1
  })

  imgWrapper.appendChild(menuIcon)
  imgWrapper.addEventListener('click',()=>{
    const menu = getElement('.menu')
    menu.classList.toggle('not-visible')
  })

  const title = createFullElement('div', {
    class: "brand"
  }, `<img src=${img2} alt="brand"/> <span>Lets Do this<span>`)
  const search = createSetElement('div', {
    class: 'search'
  })
  const bar = createSetElement('input', {
    class: 'bar',
    placeholder: "Search"
  })
  search.appendChild(bar)

  nav.appendChild(imgWrapper)
  nav.appendChild(title)
  // nav.appendChild(search)
  return nav
}

export default navBar
