
import styles from './users.css';
import { useLocalCount } from "../hooks/useCount";

export default function() {
  const { count, increment } = useLocalCount();
  return (
    <div className={styles.normal}>
      <h1>Users Page (Local Hook)</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
