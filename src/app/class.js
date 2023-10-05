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

class toDo {
  constructor(title, body, due, priority) {
    this.title = title;
    this.body = body;
    this.dueDate = due;
    this.priority = priority;
    this.done = false;
  }
  get done() {
    return this._done;
  }
  set done(value) {
    this._done = !!value;
  }
}

export {
  project,
  toDo
}