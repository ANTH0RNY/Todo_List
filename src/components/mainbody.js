import manageProjects from "../stores/projects";
import { createSetElement, createFullElement } from "../util";
import projectDisplay from "./projectsDisplay";
import img1 from '../img/icons/toDo.png'
const projectManager=manageProjects()

function createMain() {
  const wrapper=createSetElement('div',{
    class:"main-body"
  })
  const title=createFullElement('div',{
    class:"main-title"
  }, `<img src=${img1} alt="to do"/><span>Lets Do This</span>`)
  wrapper.appendChild(title)
  wrapper.appendChild(projectDisplay(projectManager.getProjects()[0]))
  return wrapper
}

export default createMain
