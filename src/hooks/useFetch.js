import {useEffect, useState} from 'react';

export const useFetch = (url) => {
  const initialValue = { data: null, loading: true, error: null };
  const [state, setstate] = useState(initialValue)

  useEffect(() => {
    setstate(initialValue);
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setstate({
          loading: false,
          error: null,
          data
        })
      })

  }, [url])

  return state;
}
