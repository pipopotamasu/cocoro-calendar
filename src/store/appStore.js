import { toJS, observable } from 'mobx';
import Store from 'react-native-store';

const INITIAL_TODOS = [{ id: 1, text: 'test1', done: false, created_at: null },
                       { id: 2, text: 'test2', done: false, created_at: null },
                       { id: 3, text: 'test3', done: true, created_at: null },
                       { id: 4, text: 'test4', done: false, created_at: null },
                       { id: 5, text: 'test5', done: false, created_at: null }]

const DB = {
  'todo': Store.model('todo')
}

class AppStore {
  @observable today = today();
  @observable todos = INITIAL_TODOS;
  get todosProgress() {
    const doneCount = this.todos.filter((todo) => { return (todo.done) }).length
    progress = doneCount / 5
    return progress
  }
  toggleDone(id) {
    newTodos = []
    this.todos.forEach((todo, i) => {
      if (todo.id == id) todo.done = !todo.done
      newTodos.push(todo)
    });
    this.todos.replace(newTodos)
  }

  async registerTodos() {
    const res = await DB.todo.find({
        where: {
          created_at: this.today
        },
        order: {
            id: 'ASC',
        }
    })

    console.log(res)

    // exist today's todos?
    if (res === null) {
      // register today's todos if not exists
      // await saveTodos(this.todos.slice().toJS(this.todos))
      for(let i in this.todos.slice().toJS(this.todos)) {
        console.log(todos[i])
        await DB.todo.add(Object.assign(todos[i], { created_at: this.today }))
      }
    } else {
      // fetch today's todos if exists
      this.todos = res
    }
  }
}

function today() {
  const today = new Date()
  const year = today.getFullYear()
  const month = ( "0" + ( today.getMonth() + 1 )).slice(-2)
  const day = ( "0" + today.getDate()).slice(-2)
  return `${year}-${month}-${day}`;
}

function saveTodos(todos) {
  console.log(2)
  console.log(todos)
  for(let i in todos) {
    DB.todo.add(Object.assign(todos[i], { created_at: this.today }))
  }
}

export default new AppStore();