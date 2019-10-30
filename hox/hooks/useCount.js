import { createModel } from "hox";
import { useState } from 'react';

function useCount() {
  const [count, setState] = useState(0);

  function increment() {
    setState(count + 1);
  }

  return {
    count,
    increment,
  };
}

export default createModel(useCount);
