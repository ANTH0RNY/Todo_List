import { createSetElement } from "../util";
import toDoElement from "./toDoElement";

function projectDisplay(project){

    const display=createSetElement('div',{
        class:"project-display"
    })
    const files=project.files
    files.forEach((value)=>{
        display.appendChild(toDoElement(valu))
    })
}