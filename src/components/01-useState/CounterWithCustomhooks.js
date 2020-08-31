import React from 'react';
import './counter.css';
import { useCounter } from '../../hooks/useCounter';
export const CounterWithCustomhooks = () => {
  const { state, increment, descrement, reset } = useCounter();

  return (
    <>
      <h1>Counter custom hooks: {state}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}> +1</button>
      <button className="btn" onClick={reset}> Reset</button>
      <button className="btn btn-secondary" onClick={() => descrement(2)}>-1</button>
    </>
  );
};
