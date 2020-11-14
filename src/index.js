import React from 'react';
import ReactDOM from 'react-dom';
import { Router, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import dotenv from 'dotenv';

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();
dotenv.config();

ReactDOM.render(
  <HashRouter history={history} basename="/">
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
