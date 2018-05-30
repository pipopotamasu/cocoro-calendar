import { observable } from 'mobx';
import Store from 'react-native-store';

const INITIAL_TODOS = [{ id: 1, text: 'test1', done: false, created_at: null },
                       { id: 2, text: 'test2', done: false, created_at: null },
                       { id: 3, text: 'test3', done: false, created_at: null },
                       { id: 4, text: 'test4', done: false, created_at: null },
                       { id: 5, text: 'test5', done: false, created_at: null }]

const DB = {
  'todo': Store.model('todo')
}

class AppStore {
  @observable today = today();
  @observable todos = [];

  get todosProgress() {
    const doneCount = this.todos.filter((todo) => { return (todo.done) }).length
    progress = doneCount / 5
    return progress
  }
  toggleDone(id) {
    newTodos = []
    this.todos.forEach((todo, i) => {
      if (todo.id == id) {
        todo.done = !todo.done
        this.updateTodo(todo)
      }
      newTodos.push(todo)
    });
    this.todos.replace(newTodos)
  }

  async registerTodos() {
    const res = await this.fetchTodos(this.today)

    // exist today's todos?
    if (res === null) {
      await this.saveTodos(INITIAL_TODOS)
      this.todos = await this.fetchTodos(this.today)
    } else {
      // fetch today's todos if exists
      this.todos = res
    }
  }

  async fetchTodosGroupByDate() {
    const today = new Date()
    const year = today.getFullYear()
    const month = ( "0" + ( today.getMonth() + 1 )).slice(-2)
    let todos_group_by_day = {}
    for(let i = 1; i <= 31; i++) {
      const day = ( '0' + i ).slice(-2)
      const fullYMD = `${year}-${month}-${day}`
      const res = await this.fetchTodos(fullYMD)

      if (res) todos_group_by_day = Object.assign(todos_group_by_day, { [fullYMD]: res })
    }

    return todos_group_by_day
  }

  async fetchTodos(createdAt) {
    return await DB.todo.find({
        where: {
          created_at: createdAt
        },
        order: {
            id: 'ASC',
        }
    })
  }

  async saveTodos(todos) {
    for(let i in todos) {
      await DB.todo.add(Object.assign(todos[i], { created_at: this.today }))
    }
  }

  async updateTodo(todo) {
    await DB.todo.updateById(todo, todo._id)
  }
}

function today() {
  const today = new Date()
  const year = today.getFullYear()
  const month = ( "0" + ( today.getMonth() + 1 )).slice(-2)
  const day = ( "0" + today.getDate()).slice(-2)
  return `${year}-${month}-${day}`;
}

export default new AppStore();