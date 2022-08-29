import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//   </React.StrictMode>
// );

ReactDOM.render(
  <BrowserRouter>
          <App />
  </BrowserRouter>, document.getElementById('root'));
// reportWebVitals();
