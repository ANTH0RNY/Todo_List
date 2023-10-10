import { createSetElement, createFullElement, appendChildren} from "../util";

function toDoElement(todo){
    const element=createSetElement('div',{
        class:`toDo-element ${todo.done? 'strike-through':''}`
    })

    const title=createFullElement('div', {
        class:'title'
    }, todo.title)
    const body=createFullElement('div',{
        class:"body"
    }, todo.body)
    const dueDate=createFullElement('div',{
        class:"due-date"
    }, todo.dueDate)
    const priority=createFullElement('div',{
        class:'priority'
    },todo.priority)
    const done=createFullElement('input',{
        class:'done',
        type: 'checkbox'
    }, todo.done)

    appendChildren(element, [done, title, body, dueDate, priority])

    return element
}

export default toDoElement