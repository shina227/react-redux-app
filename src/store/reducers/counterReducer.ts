import type { Reducer, UnknownAction } from "redux";
import { INCREMENT, DECREMENT, RESET, SET_VALUE } from "../actions/counterActions";

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
    case SET_VALUE:
      return typeof action.payload === "number"
        ? { ...state, value: action.payload }
        : state;
    default:
      return state;
  }
};