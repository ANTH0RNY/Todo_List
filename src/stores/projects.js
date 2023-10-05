import { project, toDo } from "../app/class"

const today= new project('Today')
const week=new project('Week')
const important=new project('Important')


// const defaultProjects=[today,week,important]
const defaultProject= new project('myProject')
const myProjects=[defaultProject]

function manageProjects(){
    function addProject(name){
        myProjects.push(newProject)
    }
    function getProjects(){
        return myProjects
    }
    function getProjectNames(){
        const names=[]
        myProjects.forEach((val)=>{
            names.push(val.name)
        })
        return names
    }
    function createProject(name){
        const newProject=new project(name)
        return newProject
    }

    return {
        addProject,
        getProjects,
        getProjectNames,
        createProject
    }
}

export default manageProjects