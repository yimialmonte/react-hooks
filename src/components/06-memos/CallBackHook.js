import React, { useState, useCallback } from 'react';
import '../05-useLayoutEffect/layoutEffect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
  const [counter, setcounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setcounter((c) => c + num);
    },
    [setcounter]
  );

  return (
    <div>
      <h1>Use Call Back Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
