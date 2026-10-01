import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment, decrement, reset } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <h2>Counter</h2>
      <p className={styles.value}>{count}</p>
      <div className={styles.actions}>
        <button onClick={() => dispatch(decrement())} aria-label="Decrement">-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button className={styles.primary} onClick={() => dispatch(increment())} aria-label="Increment">+</button>
      </div>
    </div>
  );
};

export default Counter;