import { useState } from 'react';
import fetch from "../fetch";
import useTodos from "../hooks/useTodos";

export default function() {
  const { data, revalidate } = useTodos();
  const [value, setValue] = useState('');

  return data ? (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          data.map(todo => {
            return <li key={todo}>{ todo }</li>;
          })
        }
      </ul>
      <form onSubmit={async (e) => {
        e.preventDefault();
        setValue('');
        await fetch(`/api/todos/add?text=${value}`);
        revalidate();
      }}>
        <input placeholder='enter something' value={value} onChange={ev => setValue(ev.target.value)} />
      </form>
      <button onClick={async () => {
        await fetch(`/api/todos/clear`);
        revalidate();
      }}>Clear All</button>
    </div>
  ) : 'loading...';
}
