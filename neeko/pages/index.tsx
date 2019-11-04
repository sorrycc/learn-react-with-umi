import React, { useState } from 'react';
import { observer } from '@alipay/xmas-neeko/react';
import styles from './index.css';
import todos from '../models/todos';

export default observer(function() {
  const [value, setValue] = useState('');

  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <div>Totally {todos.length} todos.</div>
      {
        todos.todos.map(todo => <li key={todo.name}>{ todo.name }</li>)
      }
      <form onSubmit={async (ev) => {
        ev.preventDefault();
        await todos.addTodo(value);
        setValue('');
        await todos.fetchTodos();
      }}>
        <input placeholder="add todo" value={value} onChange={ev => setValue(ev.target.value)} />
      </form>
    </div>
  );
})
