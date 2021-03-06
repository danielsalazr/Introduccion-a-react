import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    //Aqui llamamos a App que proviene del archivo App.js
    <App />
  ,
  document.getElementById('root')
);

// ReactDOM.createPortal(<App />, document.getElementById('modal'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
