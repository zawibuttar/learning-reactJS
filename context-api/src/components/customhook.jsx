import React from 'react';
import useFetch from '/src/customHooks/usefetch.jsx';


function customhook() {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default customhook;
