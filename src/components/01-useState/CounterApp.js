import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counterOne: 10,
    counterTwo: 20,
  });

  const { counterOne, counterTwo } = state;
  return (
    <>
      <h1>Counter {counterOne}</h1>
      <h1>Counter {counterTwo}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter({ ...state, counterOne: counterOne + 1 });
        }}
      >
        {' '}
        +1
      </button>
    </>
  );
};
