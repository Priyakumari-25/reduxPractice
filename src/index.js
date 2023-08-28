import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// redux
import  {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './services/reducer/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(rootReducer)
console.log("hii",store)
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
   <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
