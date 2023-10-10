import toDo from '../app/class'

function manageToDo(){

  function createToDo(param) {
    const newToDo=new toDo(param.title,param.body, param.due, param.priority ) 

    return newToDo
  }
    
  }
  return {
  createToDo
}
}
