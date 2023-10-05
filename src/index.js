import { getElement, createSetElement } from "./util";
import  createMenu  from "./components/menu"
import  createMain  from "./components/mainbody";
import  navbar  from "./components/navbar";
import './sass/main.scss'

const body=getElement('body')
const nav=navbar()
const menu=createMenu()
const main=createMain()

body.appendChild(nav)
body.appendChild(menu)
body.appendChild(main)


console.log("Hello world")
