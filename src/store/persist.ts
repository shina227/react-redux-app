import type { RootState } from "./reducers";

const STORAGE_KEY = "redux-state";

export const loadState = (): RootState | undefined => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RootState) : undefined;
  } catch {
    return undefined; // Corrupted or unavailable storage: fall back to initial state
  }
};

export const saveState = (state: RootState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore write failures (private mode, quota exceeded)
  }
};