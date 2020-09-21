import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../05-useLayoutEffect/layoutEffect.css'
import { Small } from './Small';
export const Memorize = () => {
  const  { counter, increment } = useCounter(10);
  const [show, setshow] = useState(true);

  return (
    <div>
      <h1>Counter: <Small value={counter} /></h1>
      <hr/>
      <button className="btn btn-primary" onClick={increment}>+1</button>
      <button
        className="btn btn-primary ml-3"
        onClick={() => {setshow(!show)} }>
        Show/Hide
      </button>
    </div>
  )
}
