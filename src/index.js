import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);