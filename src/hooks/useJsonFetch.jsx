import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        setError(`Ошибка ${response.status} ${response.statusText} `);
      }
      return response.json()
    })
    .then((data) => setData(data))
    .catch((error) => {
      console.log('!!!', error);
      setError(error)
    })
    .finally(() => setLoading(false))
  },[]);

  return [data, loading, error];
}
