import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
});

// Defined here (not in store.ts) so persist.ts can import it without a cycle
export type RootState = ReturnType<typeof rootReducer>;