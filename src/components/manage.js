import { getElement } from "../util";

// getElement
function removeClass(e){
    const items=document.querySelectorAll('.item')
    items.forEach((val)=>{
        val.classList.remove('active')
    })
    e.target.classList.add('active')
}

export default removeClass