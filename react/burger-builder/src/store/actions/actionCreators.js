import * as actionTypes from './actionTypes'
import axios from 'axios'

export const init = () => {
  return {
    type: actionTypes.INIT,
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
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

export const postForm = (order, redirect) => {
  return dispatch => {
    if (order.ingredients) {
      dispatch(loadingTrue())
      axios.post('/orders.json', order)
        .then(res => {
          dispatch(postSuccess(res.data.name, order))
          return redirect
        })
        .catch(err => {
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

export const getOrders = () => {
  return dispatch => {
    dispatch(loadingTrue())
    axios.get('/orders.json')
      .then(res => {
        const fetched = []
        for (let key in res.data) {
          fetched.push({
            ...res.data[key],
            id: key
          })
        }
        dispatch(ordersSuccess(fetched))
      })
      .catch(err => {
        dispatch(requestFail(err))
      })
  }
}