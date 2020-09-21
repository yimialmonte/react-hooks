import React, { useCallback } from 'react';
import { Son } from './Son';
import { useState } from 'react';
import '../02-useEffect/simpleForm.css';

export const Father = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(
    (num) => {
      setValor((c) => c + num);
    },
    [setValor]
  );

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Son key={n} number={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
