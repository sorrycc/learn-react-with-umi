import styles from './index.css';
import createStore from "../hooks/store";

export default function() {
  const {
    count, increment, decrement,
  } = createStore();

  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <h2>count: { count }</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
