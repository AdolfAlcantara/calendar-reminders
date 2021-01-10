import * as $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import configStore from '../src/store/configStore'
import reportWebVitals from './reportWebVitals';
import "react-datepicker/dist/react-datepicker.css";

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
