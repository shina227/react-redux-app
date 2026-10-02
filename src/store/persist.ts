import type { RootState } from "./store";

const STORAGE_KEY = "redux-state";

export const loadState = (): RootState | undefined => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RootState) : undefined;
  } catch {
    return undefined;
  }
};

export const saveState = (state: RootState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
};