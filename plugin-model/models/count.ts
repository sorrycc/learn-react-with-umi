import { useState, useEffect } from 'react';
import { useModel } from 'umi';

export default function () {
  const [ count, setCount ] = useState(0);
  const { todos } = useModel('todos');

  useEffect(() => {
    setCount(todos.length);
  }, [todos]);

  return {
    count,
  };
}
