import React, { useState } from 'react';
import { connect } from 'dva';
import { Todos, fetchTodos, addTodo } from '../models/todos';
import styles from './index.css';

function mapStateToProps(state: { todos: Todos }) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(function(props) {
  const [value, setValue] = useState('');
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <h2>Todos</h2>
      {
        (props.todos as Todos).data.map(({ name, done }) => {
          return <li key={name}>{ name }</li>;
        })
      }
      <form onSubmit={async (ev) => {
        ev.preventDefault();
        await props.dispatch(addTodo(value));
        setValue('');
        await props.dispatch(fetchTodos());
      }}>
        <input placeholder="add todo" value={value} onChange={ev => setValue(ev.target.value)} />
      </form>
    </div>
  );
})
