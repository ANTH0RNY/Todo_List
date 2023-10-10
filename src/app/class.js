class project {
  constructor(name) {
    this.name = name || "untitled";
    this.files = [];
  }
  get name() {
    return this._name;
  }
  set name(val) {
    if (val.length === 0) {
      console.log("too short");
      return;
    }
    this._name = val;
  }
  addTodo(todo) {
    this.files.push(todo);
  }
}


const priorities=['later', 'important','not important']

class toDo {
  constructor(title, body, priority, due) {
    this.title = title;
    this.body = body;
    this.priority = priority;
    this.done = false;
    this.dueDate = due? due: new Date().toLocaleDateString();
  }
  get done() {
    return this._done;
  }
  set done(value) {
    this._done = !!value;
  }
  // get priority(){
  //   return this._priority
  // }
  // set priority(value){
  //   if (priorities.includes(value.toLowerCase()))
  //   {
  //     this._priority=value
  //     return
  //   }
  //   console.log('Priorty not in options')
  //   return 'not important'
  // }

}

export {
  project,
  toDo,
  priorities
}
