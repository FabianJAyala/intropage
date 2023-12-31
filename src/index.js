import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactGA from 'react-ga4'
import App from './App';

ReactGA.initialize("G-M94X5LYWTW");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);