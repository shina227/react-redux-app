import { useState, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment, decrement, reset, setValue } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = Number(input);
    if (input.trim() === "" || !Number.isFinite(parsed)) return;
    dispatch(setValue(parsed));
    setInput("");
  };

  return (
    <div className={styles.card}>
      <h2>Counter</h2>
      <p className={styles.value}>{count}</p>
      <div className={styles.actions}>
        <button onClick={() => dispatch(decrement())} aria-label="Decrement">-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button className={styles.primary} onClick={() => dispatch(increment())} aria-label="Increment">+</button>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Set value"
          aria-label="Set counter value"
        />
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default Counter;