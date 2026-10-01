import type { Reducer, UnknownAction } from "redux";
import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions";

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterReducer: Reducer<CounterState, UnknownAction> = (
  state = initialState,
  action
) => {
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