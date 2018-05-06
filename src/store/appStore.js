import { observable } from 'mobx';
class AppStore {
  @observable today = today();
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