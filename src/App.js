import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Failed to fetch data:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message ? message : 'Loading data from server...'}</h1>
      </header>
    </div>
  );
}

export default App;
