import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data'); // This will be proxied to your backend
      const jsonData = await response.json();
      setData(jsonData.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Frontend React</h1>
      <p>Response from the backend: {data}</p>
    </div>
  );
}

export default App;
