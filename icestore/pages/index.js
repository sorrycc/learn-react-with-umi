import { useState, useEffect } from 'react';
import stores from '../stores';
import styles from './index.css';

export default function() {
  const {
    todos,
    addTodo,
    fetchTodos,
  } = stores.useStore('todos');
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <h1>todos</h1>
      <ul>
        {
          todos.map(({ name, done }) => {
            return <li key={name}>{ name } {done ? 'x' : ''}</li>
          })
        }
      </ul>
      <form onSubmit={async (e) => {
        e.preventDefault();
        await addTodo(value);
        setValue('');
        await fetchTodos();
      }}>
        <input type="text" placeholder="todo" value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>
  );
}
