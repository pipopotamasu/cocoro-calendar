import { observable } from 'mobx';

const INITIAL_TODOS = [{ id: 1, text: 'test1', done: false, created_at: null },
                       { id: 2, text: 'test2', done: false, created_at: null },
                       { id: 3, text: 'test3', done: true, created_at: null },
                       { id: 4, text: 'test4', done: false, created_at: null },
                       { id: 5, text: 'test5', done: false, created_at: null }]

class AppStore {
  @observable today = today();
  @observable todos = INITIAL_TODOS;
  // increment() {
  //   this.counter++;
  //   console.log("increment", this.counter);
  // }
  // decrement() {
  //   this.counter--;
  //   console.log("decrement", this.counter);
  // }
}

function today() {
  const today = new Date()
  const year = today.getFullYear()
  const month = ( "0" + ( today.getMonth() + 1 )).slice(-2)
  const day = ( "0" + today.getDate()).slice(-2)
  return `${year}-${month}-${day}`;
}

export default new AppStore();