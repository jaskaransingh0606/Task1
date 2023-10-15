import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // You may have additional CSS imports
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance, you can use the reportWebVitals function.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();