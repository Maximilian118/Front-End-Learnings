import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

// Every request URL using axios will now be appended with this URL leading to less
// clutter on every document:
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Every header of every request has a 'common' object. In this object are the general
// headers for all types of requests. We can edit it like this.
axios.defaults.headers.common['Auth'] = 'AUTH TOKEN';

// Every header of a post request will now have content type of application/json. 
axios.defaults.headers.post['Content-Type'] = 'application/json'

// Interceptors... intercept every request with the given parameters.
// For example here we are intercepting every outgoing request:  
axios.interceptors.request.use(req => {
  console.log(req)
  return req;
}, err => {
  console.log(err)
  return Promise.reject(err)
});

axios.interceptors.response.use(res => {
  console.log(res)
  return res;
}, err => {
  console.log(err)
  return Promise.reject(err)
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
