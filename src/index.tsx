import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/lenses">
          <App />
  </BrowserRouter>, document.getElementById('root'));
