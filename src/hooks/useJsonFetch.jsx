import React, { useState } from 'react';

export default function useJsonFetch(url, opts) {
  // console.log('url', url, 'ops', opts);
  // const [data, setData] = setState({a: '111', b: '222'});
  const [loading, setLoading] = useState(true);
  // const [error, setError] = setState(null);
  
  function fnSet() {
    // console.log('props', props);
    setLoading(!loading);
  }

  return [loading, fnSet];
}