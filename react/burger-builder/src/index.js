import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/index.module.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://burger-builder-703cc.firebaseio.com/';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();