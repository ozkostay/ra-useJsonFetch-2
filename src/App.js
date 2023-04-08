import React from 'react';
import './App.css';
import './hooks/useJsonFetch';
import Data from './components/data';
import Loading from './components/Loading';
import Error from './components/Error';

export default function App() {
    
    return (
        <div className='wrapper'>
            <Data />
            <Loading />
            <Error />
        </div>
    );
}
