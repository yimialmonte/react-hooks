import React, {useLayoutEffect, useState} from 'react';
import { useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layoutEffect.css'

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];
  const pTag = useRef();
  const [boxSize, setboxSize] = useState({});
  useLayoutEffect(() => {
    setboxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}</p>
      </blockquote>
      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>
      <button onClick={increment} className="btn btn-primary">
        Next Quote
      </button>
    </div>
  );
};
