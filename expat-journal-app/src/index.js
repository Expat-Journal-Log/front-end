import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextObject } from './context/context';


ReactDOM.render(
  
  <React.StrictMode>
    <ContextObject.Provider> 
    <App />
    </ContextObject.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

