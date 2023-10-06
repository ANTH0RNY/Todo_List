import { createSetElement, createFullElement, getElement } from "../util";
import manageProjects from "../stores/projects";


function createForm() {
    const projectManager = manageProjects()

    const form = createSetElement('div', {
        class: "form"
    })

    const input = createSetElement('input', {
        class: "project-input",
        placeholder:"Add project"
    })

    const btns = createSetElement('div', {
        class: "btn-container"
    })
    const add = createFullElement('button', {
        class: "add btn"
    }, 'Add')

    const cancel = createFullElement('button', {
        class: "btn cancel"
    }, 'cancel')

    btns.appendChild(add)
    btns.appendChild(cancel)

    add.addEventListener('click', (e) => {
        const content = input.value
        if (content.length == 0) {
            return
        }
        console.log(content)
        // const items=document.querySelectorAll('.project-item')
        const myProjects = getElement('.my-project');
        const title = myProjects.firstChild
        myProjects.innerHTML = ''
        myProjects.appendChild(title)
        console.log(title)

        projectManager.createAddProject(content)
        const projecLIst = projectManager.getProjectNames()
        projecLIst.forEach((val, index) => {
            const projectItem = createSetElement("div", {
                class: "project-item",
                id: `project-item-${index}`,
                'data-projectId':index
            });
            projectItem.innerText = val;
            myProjects.appendChild(projectItem);
        })
        input.value=''
        input.focus()
        myProjects.appendChild(form)

    })
    input.addEventListener('keydown',(e)=>{
        // console.log(e.key);
        if (e.key==='Enter'){
            add.click()
            input.focus()
        }
    })

    form.appendChild(input)
    form.appendChild(btns)

    return form
}
export default createForm