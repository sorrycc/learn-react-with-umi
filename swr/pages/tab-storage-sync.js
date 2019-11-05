import useSWR, { mutate } from 'swr';
import storage from "../storage";
import styles from './tab-storage-sync.css';

export default function() {
  const { data = { name: '' } } = useSWR('user-name', storage);

  function handleChange(ev) {
    localStorage.setItem(
      'user-name',
      JSON.stringify({ name: ev.target.value }),
    );
    mutate('user-name', { name: ev.target.value });
  }

  return (
    <div className={styles.normal}>
      <h1>Page tab-storage-sync</h1>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={data.name} onChange={handleChange} />
    </div>
  );
}
