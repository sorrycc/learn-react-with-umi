import styles from './global-state.css';
import useGlobalState from "../hooks/useGlobalState";

export default function() {
  const { data, setData } = useGlobalState();

  return (
    <div className={styles.normal}>
      <h1>Global State</h1>
      <h2>name: { data ? data.name : '' }</h2>
      <button onClick={() => {
        setData({
          name: 'pigcan',
        });
      }}>set name to pigcan</button>
    </div>
  );
}
