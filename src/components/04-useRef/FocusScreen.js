import React, { useRef } from 'react';
import '../02-useEffect/simpleForm.css';

export const FocusScreen = () => {

  const inputRef = useRef();

  const hanldeClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input
        className="form-control"
        placeholder="Enter Name"
        ref={inputRef}
      />

      <button
        className="btn btn-outline-primary"
        onClick={hanldeClick}>
        Focus
      </button>
    </div>
  )
}
