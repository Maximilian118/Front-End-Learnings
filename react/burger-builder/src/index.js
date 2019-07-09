import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import './scss/index.module.css'

import * as serviceWorker from './serviceWorker'
import App from './containers/App'
import burgerReducer from './store/reducers/burgerReducer'
import detailsReducer from './store/reducers/detailsReducer'

const rootReducer = combineReducers({
  burgerReducer: burgerReducer,
  details: detailsReducer
})

const store = createStore(rootReducer)

axios.defaults.baseURL = 'https://burger-builder-703cc.firebaseio.com/'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
serviceWorker.unregister()