import { useState, useEffect } from 'react';
import * as todoService from '@/services/todos';

export default function () {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const todos = await todoService.fetchTodo();
    setTodos(todos);
  }

  async function addTodo(text: string) {
    await todoService.addTodo(text);
    await fetchTodos();
  }

  useEffect(() => {
    (async () => {
      await fetchTodos();
    })();
  }, []);

  return {
    todos,
    addTodo,
    fetchTodos,
  }
}
