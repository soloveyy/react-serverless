import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styled/GlobalStyle';

const root = document.getElementById('root')
const app =   
  <>
    <GlobalStyle/>
    <App />
  </>

ReactDOM.render(app,root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
