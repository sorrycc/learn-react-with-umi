import useCount from "../hooks/useCount";
import styles from './index.css';

export default function() {
  const { count, increment } = useCount();
  return (
    <div className={styles.normal}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
