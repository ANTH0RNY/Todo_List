import { createFullElement, createSetElement, appendChildren, getElement} from "../util";
import { priorities } from "../app/class";
import manageProjects from "../stores/projects";
import projectDisplay from "./projectsDisplay";
// manageProjects

const projectManager=manageProjects()
function toDoForm(projectName){
    const theProject=projectManager.getProjectByName(projectName)

    const form = createSetElement('div',{
        class:"toDo-form not-visible"
    })

    const add=createFullElement('div',{
        class:'add-toDo'
    }, '&#43;')
    const title=createSetElement('input', {
        class:"title",
        type:"text",
        placeholder:'Title'
    })
    const body=createSetElement('input',{
        class:'body',
        type:'text',
        placeholder:'Description'
    })
    const priority=createSetElement('select',{
        class: 'priority',
        placeholder:'Priority'
    })
    priorities.forEach((val)=>{
        const option=createFullElement('option', {
            class:'select-option',
            value: val
        }, val)

        priority.appendChild(option)
    })
    // const done=createSetElement('input',{
    //     class:"done"
    // })
    const dueDate=createSetElement('input', {
        class:"due-date",
        type:'date'
    })

    // title.addEventListener('input',()=>{
    //     // console.log(new Date(dueDate.value).toLocaleDateString())
    //     console.log(priority.value);
    // })
    function addToDo(){
        if(title.value && body.value){
            const todo=projectManager.createToDo(title.value, body.value, priority.value, dueDate.value)
            if (theProject){
                theProject.addTodo(todo)
                const parent=getElement('.project-area')
                parent.innerHTML=''
                projectDisplay(theProject, parent)
            }
            console.log(todo);
        }
    }
    add.addEventListener('click', addToDo)
    appendChildren(form, [add,title, body, priority, dueDate])

    return form
}

export default toDoForm