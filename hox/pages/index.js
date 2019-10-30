import useCount from "../hooks/useCount";
import styles from './index.css';

export default function() {
  const { count, increment } = useCount();
  return (
    <div className={styles.normal}>
      <h1>Index Page (Global Hook)</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
