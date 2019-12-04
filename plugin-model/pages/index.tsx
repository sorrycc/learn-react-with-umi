import React, { useState } from 'react';
import { useModel } from 'umi';
import styles from './index.css';

export default function() {
  const [value, setValue] = useState('');
  const { todos, addTodo, fetchTodos } = useModel('todos');
  const { count } = useModel('count');
  const { initialState } = useModel('@@initialState');
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <h2>Test {initialState || ''}</h2>
      <h2>Todos ({count})</h2>
      {
        todos.map(({ name, done }) => {
          return <li key={name}>{ name }</li>;
        })
      }
      <form onSubmit={async (ev) => {
        ev.preventDefault();
        await addTodo(value);
        setValue('');
        await fetchTodos();
      }}>
        <input placeholder="add todo" value={value} onChange={ev => setValue(ev.target.value)} />
      </form>
    </div>
  );
}
