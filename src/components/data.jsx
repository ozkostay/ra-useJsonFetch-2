import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Data() {
  const URL = 'http://localhost:7070/data';

  const [data, loading, error] = useJsonFetch(URL);
  
  return <>
    <h1>Компонент Data</h1>
    <h1>{ data ? data.status : 'nullll' }</h1>
    <h1>{loading ? '...Loading': 'no loading'}</h1>
    <h1>{ error ? 'Есть ошибка' : 'no error'}</h1>
    <br></br>
  </>
  
}
