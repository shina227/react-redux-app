export const INCREMENT = "INCREMENT" as const;
export const DECREMENT = "DECREMENT" as const;
export const RESET = "RESET" as const;
export const SET_VALUE = "SET_VALUE" as const;

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const setValue = (value: number) => ({ type: SET_VALUE, payload: value });

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
  | ReturnType<typeof setValue>;