import manageProjects from "../stores/projects";
import { createSetElement, createFullElement } from "../util";
import projectDisplay from "./projectsDisplay";
import img1 from '../img/icons/toDo.png'
import '../sass/mainBody.scss'

const projectManager=manageProjects()

function createMain() {
  const wrapper=createSetElement('div',{
    class:"main-body"
  })
  const title=createFullElement('div',{
    class:"main-title"
  }, `<img src=${img1} alt="to do"/><span>Lets Do This</span>`)
  wrapper.appendChild(title)
  const projectArea=createSetElement('div',{
    class: 'project-area'
  })
  wrapper.appendChild(projectArea)
  // wrapper.appendChild(projectDisplay(projectManager.getProjects()[0]))
  // projectDisplay(projectManager.getProjects()[0], wrapper)
  return wrapper
}

export default createMain
