import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { loadState, saveState } from "./persist";
import { rootReducer, type RootState } from "./reducers";

export const store = createStore(rootReducer, loadState(), applyMiddleware(logger));

// Persist state on every change
store.subscribe(() => saveState(store.getState()));

export type { RootState };
export type AppDispatch = typeof store.dispatch;