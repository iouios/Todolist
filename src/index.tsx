import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ensure that you are selecting the root element correctly
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: For measuring performance
reportWebVitals();
