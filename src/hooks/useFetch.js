import { useEffect, useState, useRef } from 'react';

export const useFetch = (url) => {
  const initialValue = { data: null, loading: true, error: null };
  const [state, setstate] = useState(initialValue);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate(initialValue);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setstate({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};
