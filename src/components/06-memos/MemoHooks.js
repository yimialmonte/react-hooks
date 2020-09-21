import React, { useState, useMemo } from 'react'
import { bigProcess } from '../../helpers/bigProcess';
import { useCounter } from '../../hooks/useCounter'
import '../05-useLayoutEffect/layoutEffect.css'

export const MemoHook = () => {
  const  { counter, increment } = useCounter(5000);
  const [show, setshow] = useState(true);
  const memoBigProcess  = useMemo(() => bigProcess(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>Counter: {counter} </h3>
      <hr/>
      <p>{ memoBigProcess }</p>
      <button className="btn btn-primary" onClick={increment}>+1</button>
      <button
        className="btn btn-primary ml-3"
        onClick={() => {setshow(!show)} }>
        Show/Hide
      </button>
    </div>
  )
}
