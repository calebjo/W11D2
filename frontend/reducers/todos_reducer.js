import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions.js"

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (prevState = initialState, action) => {
    Object.freeze(prevState);
    const nextState = Object.assign({}, prevState);

    switch (action.type) {
      case RECEIVE_TODOS:
        action.todos.forEach( todo => {
          nextState[todo.id] = todo;
        });
        return nextState;
      case RECEIVE_TODO:
        debugger
        const newTodo = {[action.todo.id]: action.todo};
        return Object.assign({}, prevState, newTodo);
      case REMOVE_TODO:
        delete nextState[action.todo.id];
        return nextState;
      default:
        return prevState;
    }
};
  
export default todosReducer;