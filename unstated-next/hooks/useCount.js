import { useState } from 'react';
import { createContainer } from 'unstated-next';

function useCount(initialState = 0) {
  const [count, setState] = useState(initialState);

  function increment() {
    setState(count + 1);
  }

  function decrement() {
    setState(count - 1);
  }

  return {
    count,
    increment,
    decrement,
  };
}

export default createContainer(useCount);
