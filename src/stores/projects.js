import { project, toDo } from "../app/class"

// const today= new project('Today')
// const week=new project('Week')
// const important=new project('Important')


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
    function createAddProject(name){
        const newProject=new project(name)
        myProjects.push(newProject)
        return newProject
    }
    function addToDo(projectName, todo) {
      const myProjectName=getProjectNames()
      if (myProjectName.includes(projectName) && todo instanceof toDo){
            const theProject=myProjects.filter((proj)=> proj.name === projectName)
            theProject[0].addTodo(todo)
            return
      }
      console.log('Failed to add toDo');
      return
    }
    function createToDo(title, body, priority, due) {
        const newToDo=new toDo(title,body, priority, due) 
        return newToDo
      }


    return {
        addProject,
        getProjects,
        getProjectNames,
        createProject,
        createAddProject,
        addToDo,
        createToDo
    }
}
const todo1=new toDo('title1', 'body1', 'priority1', 'due1')
const todo2=new toDo('title2', 'body2', 'priority2', 'due2')
const todo3=new toDo('title3', 'body3', 'priority3', 'due3')
defaultProject.addTodo(todo1)
defaultProject.addTodo(todo2)
defaultProject.addTodo(todo3)
console.log(defaultProject);

export default manageProjects
