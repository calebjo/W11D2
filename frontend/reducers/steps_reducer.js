import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions.js"

const initialState = {
  1: {
    title: "buy banana",
    todo_id: 1,
    done: false
  },
  2: {
    title: "buy carrot",
    todo_id: 2,
    done: true
  }
};

const stepsReducer = (prevState = initialState, action) => {
    Object.freeze(prevState);
    const nextState = Object.assign({}, prevState);

    switch (action.type) {
      case RECEIVE_STEPS:
        return action.steps;
      case RECEIVE_STEP:
        nextState[action.step.todo_id] = action.step;
        return nextState; 
      case REMOVE_STEP:
        delete nextState[action.step.todo_id];
        return nextState;
      default:
        return prevState;
    }
};
  
export default stepsReducer;