import Count from '../../hooks/useCount';

export default function() {
  let { count, decrement, increment } = Count.useContainer();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
