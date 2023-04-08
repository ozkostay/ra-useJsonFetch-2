import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Error() {
  const URL = 'http://localhost:7070/error';

  const [data, loading, error] = useJsonFetch(URL);
  
  return <>
    <h1>===============================================</h1>
    <br></br>
    <h1>Компонент Error</h1>
    <h1>{ data ? data.status : 'nullll' }</h1>
    <h1>{loading ? '...Loading': 'no loading'}</h1>
    <h1>{ error ? `Есть ошибка: ${error}` : 'no error'}</h1>
    <br></br>
  </>
  
}
