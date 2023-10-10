import { createSetElement } from "../util";
import img1 from '../img/icons/plus.png'

function createAddForm(form){
    const addBtn=createSetElement('div',{
        class:"add-btn"
    })

    const span1=createSetElement('img',{
        class:"plus-sign",
        src:img1
    })
    // span1.innerHTML="&#43;"
    const span2=createSetElement('span',{
        class:"plus-content"
    })
    span2.innerText="Add Project"
    addBtn.appendChild(span1)
    addBtn.appendChild(span2)

    addBtn.addEventListener('click', (e)=>{
        form.classList.toggle('not-visible')
        addBtn.classList.toggle('not-visible')
    })
    return addBtn
}

export default createAddForm