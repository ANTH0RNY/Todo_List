import toDo from '../app/class';

function manageToDo () {
  function createToDo (title, body, priority, due) {
    const newToDo = new toDo(title, body, priority, due);
    return newToDo;
  }

  return {
    createToDo

  };
}
