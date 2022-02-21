export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  //   get state of the app
  get value() {
    return this.state;
  }

  //   handles actions dispatched to store
  dispatch(action) {
    this.state = {
      ...this.state,
      todos: [...this.state.todos, action.payload],
    };
    console.log(this.state);
  }
}
