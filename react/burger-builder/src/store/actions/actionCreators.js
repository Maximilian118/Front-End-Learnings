import * as actionTypes from './actionTypes'
import axios from 'axios'

export const init = () => {
  return {
    type: actionTypes.INIT
  }
}

export const add = passed => {
  return {
    type: actionTypes.ADD,
    ingredient: passed
  }
}

export const remove = passed => {
  return {
    type: actionTypes.REMOVE,
    ingredient: passed
  }
}

export const details = (event, ident) => {
  return {
    type: actionTypes.DETAILS,
    event: event,
    ident: ident
  }
}

const loadingTrue = () => {
  return {
    type: actionTypes.LOADING_TRUE,
  }
}

const requestFail = err => {
  return {
    type: actionTypes.REQUEST_FAIL,
    error: err
  }
}

const postSuccess = (id, order) => {
  return {
    type: actionTypes.POST_SUCCESS,
    id: id,
    order: order
  }
}

export const postForm = (order, token) => {
  return dispatch => {
    if (order.ingredients) {
      dispatch(loadingTrue())
      axios.post(`/orders.json?auth=${token}`, order)
        .then(res => {
          console.log('[ActionCreators] PostForm Success...', res)
          dispatch(postSuccess(res.data.name, order))
        })
        .catch(err => {
          console.log('[ActionCreators] PostForm Fail...', err)
          dispatch(requestFail(err))
        })
    } else {
      dispatch(requestFail())
    }
  }
}

const ordersSuccess = orders => {
  return {
    type: actionTypes.GET_ORDERS_SUCCESS,
    orders: orders,
    loading: false
  }
}

export const getOrders = (token, userId) => {
  return dispatch => {
    dispatch(loadingTrue())
    axios.get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then(res => {
        const fetched = []
        for (let key in res.data) {
          fetched.push({
            ...res.data[key],
            id: key
          })
        }
        console.log('[ActionCreators] GetOrders Success...', res)
        dispatch(ordersSuccess(fetched))
      })
      .catch(err => {
        console.log('[ActionCreators] GetOrders Fail...', err)
        dispatch(requestFail(err))
      })
  }
}

export const auth = (event, ident) => {
  return {
    type: actionTypes.AUTH,
    event: event,
    ident: ident
  }
}

const logInStart = () => {
  return { 
    type: actionTypes.LOG_IN_START,
    loading: true
  }
}

const logInSuccess = data => {
  console.log(data)
  return {
    type: actionTypes.LOG_IN_SUCCESS,
    data: data,
    loading: false
  }
}

const logInFail = err => {
  return {
    type: actionTypes.LOG_IN_FAIL,
    error: err,
    loading: false
  }
}

export const logOut = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expirationTime')
  localStorage.removeItem('userId')
  localStorage.removeItem('email')
  return {
    type: actionTypes.LOG_OUT
  }
}

export const checkTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      console.log('[ActionCreators] Timed Out...')
      dispatch(logOut())
    }, expirationTime * 1000)
  }
}

export const authHandler = (email, pass, isLogIn) => {
  return dispatch => {
    dispatch(logInStart())
    const authData = {
      email: email,
      password: pass,
      returnSecureToken: true
    }
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCmkRyWPV8hS_Xw1Na_mLInHje-CwbEugo'
    if (!isLogIn) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCmkRyWPV8hS_Xw1Na_mLInHje-CwbEugo'
    }
    axios.post(url, authData)
      .then(res => {
        console.log('[ActionCreators] LogIn Success...', res)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('expirationTime', new Date(new Date().getTime() + res.data.expiresIn * 1000))
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('email', res.data.email)
        dispatch(logInSuccess(res.data))
        dispatch(checkTimeout(res.data.expiresIn))
      })
      .catch(err => {
        console.log('[ActionCreators] LogIn Fail...', err)
        dispatch(logInFail(err))
      })
  }
}

export const popUpTimeout = () => {
  return {
    type: actionTypes.POP_UP_TIMEOUT
  }
}

export const setRedirect = path => {
  return {
    type: actionTypes.SET_REDIRECT,
    path: path
  }
}

export const checkState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(logOut())
    } else {
      const expirationTime = new Date(localStorage.getItem('expirationTime'))
      if (expirationTime < new Date()) {
        dispatch(logOut())
      } else {
        const userId = localStorage.getItem('userId')
        const email = localStorage.getItem('email')
        const data = {
          idToken: token,
          localId: userId,
          email: email
        }
        dispatch(logInSuccess(data))
        dispatch(checkTimeout((expirationTime.getTime() - new Date().getTime()) / 1000))
      }
    }
  }
}