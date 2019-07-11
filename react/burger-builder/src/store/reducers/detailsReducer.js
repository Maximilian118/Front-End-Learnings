import * as actionType from '../actions/actionTypes'
import { updateState } from '../utility'

const initialState = {
  orders: [],
  formIsValid: false,
  loading: false,
  orderForm: {
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      invalidMessage: 'Please enter your name.',
      touched: false
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Email'
      },
      value: '',
      validation: {
        emailRequired: true
      },
      valid: false,
      invalidMessage: 'Please enter a valid Email.',
      touched: false
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Street'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      invalidMessage: 'Please enter the first line of your address.',
      touched: false
    },
    postcode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Postcode'
      },
      value: '',
      validation: {
        postCodeRequired: true
      },
      valid: false,
      invalidMessage: 'Please enter a valid post code.',
      touched: false
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Country'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      invalidMessage: 'Please enter your country.',
      touched: false
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: '3 Minuets!', displayValue: '3 Minuets!' }, 
          { value: '1 Hour', displayValue: '1 Hour' }, 
          { value: '4 Hours', displayValue: '4 Hours' }, 
          { value: 'Sometime Today', displayValue: 'Sometime Today' }, 
          { value: 'By Ferry', displayValue: 'By Ferry' }
        ]
      },
      value: '3 Minuets!',
      validation: {},
      valid: true
    },
    Comments: {
      elementType: 'textarea',
      elementConfig: {
        type: 'text',
        placeholder: 'Tell us about your burger experience!'
      },
      value: '',
      validation: {},
      valid: true
    }
  }
}

const isValid = (val, rules, event) => {
  let valid = true
  if (rules.emailRequired) {
    valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event) && valid
  }
  if (rules.postCodeRequired) {
    valid = /\b((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})\b/ig.test(event) && valid
  }
  if (rules.required) {
    valid = val.trim() !== '' && valid // trim = doesn't become true with whitespace.
  }
  return valid
}

const inputChangedHandler = (orderForm, event, ident) => {
  const order = { ...orderForm }
  event.persist()
  order[ident].value = event.target.value
  order[ident].valid = isValid(order[ident].value, order[ident].validation, event.target.value)
  order[ident].touched = true

  return order
}

const isFormValid = orderForm => {
  let formValidation = true
  for (let i in orderForm) {
    formValidation = orderForm[i].valid && formValidation
  }
  return formValidation
}

const postSuccess = (orderArr, id, order) => {
  const newOrder = {
    id: id,
    ...order
  }
  return {
    orders: orderArr.concat(newOrder),
    loading: false
  }
}

const getSuccess = orders => {
  return {
    orders: orders,
    loading: false
  }
}

const details = (form, event, ident) => {
  return {
    formIsValid: isFormValid(form),
    orderForm: inputChangedHandler(form, event, ident)
  }
}

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DETAILS: return updateState(state, details(state.orderForm, action.event, action.ident))
    case actionType.POST_SUCCESS: return updateState(state, postSuccess(state.orders, action.id, action.order))
    case actionType.LOADING_TRUE: return updateState(state, {loading: true})
    case actionType.GET_ORDERS_SUCCESS: return updateState(state, getSuccess(action.orders))
    case actionType.REQUEST_FAIL: return updateState(state, {loading: false})
    default: return state
  }
}

export default detailsReducer
