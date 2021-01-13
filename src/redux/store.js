import { createStore } from "redux";

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "plus":
      return { value: state.value + 1 };
    case "minus":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
