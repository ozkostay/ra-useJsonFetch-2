import React, { useEffect, useState } from 'react';
import './App.css';
import './hooks/useJsonFetch';
import useJsonFetch from './hooks/useJsonFetch';

// useJsonFetch
export default function App() {
    // const url = 'https:/asd.ru';
    // const opts = ['ops1', 'ops2'];
    const [loading, fnSetLoading] = useJsonFetch(true);
    // console.log('data', data);
    // console.log('loading', loading);
    // console.log('error', error);
    // fnSet('mistace');
    
    return (
        <div className='wrapper'>
            <button onClick={fnSetLoading}>Press</button>
            <h1>{(loading ? 'TRUE' : 'FALSE')}</h1>
        </div>
    );
}
