import {
  INCREMENT,
  DECREMENT,
  RESET,
  type CounterAction,
} from "../actions/counterActions";

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};