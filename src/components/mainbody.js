import { createSetElement, createFullElement } from "../util";

function createMain() {
  const wrapper=createSetElement('div',{
    class:"main-body"
  })
  const title=createFullElement('div',{
    class:"main-title"
  }, 'Lets Do This')
  wrapper.appendChild(title)
  return wrapper
}

export default createMain
