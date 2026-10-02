import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { loadState, saveState } from "./persist";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, loadState(), applyMiddleware(logger));

store.subscribe(() => saveState(store.getState()));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;