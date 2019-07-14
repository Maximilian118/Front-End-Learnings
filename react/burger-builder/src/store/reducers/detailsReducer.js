import * as actionType from '../actions/actionTypes'
import { updateState, detailsForm } from '../../shared/utility'

const initialState = {
  orders: [],
  formIsValid: false,
  loading: false,
  popUp: null,
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
        required: true,
        emailRequired: true
      },
      valid: false,
      invalidMessage: 'Please enter a valid Email.',
      invalidPopUp: 'Email must be a in a valid Email address format',
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
        required: true,
        postCodeRequired: true
      },
      valid: false,
      invalidMessage: 'Please enter a valid post code.',
      invalidPopUp: 'Please enter a valid 6 or 7 digit post code',
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

const getSuccess = orders => {
  return {
    orders: orders,
    loading: false
  }
}

const postSuccess = (orderArr, id, order) => {
  const newOrder = {
    id: id,
    ...order
  }
  return {
    orders: orderArr.concat(newOrder),
    loading: false,
    popUp: 'Order Placed!'
  }
}

const postFail = () => {
  return {
    loading: false, 
    popUp: 'Order Failed. Are you logged in?'
  }
}

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DETAILS: return updateState(state, detailsForm(state.orderForm, action.event, action.ident, state))
    case actionType.POST_SUCCESS: return updateState(state, postSuccess(state.orders, action.id, action.order))
    case actionType.LOADING_TRUE: return updateState(state, {loading: true})
    case actionType.GET_ORDERS_SUCCESS: return updateState(state, getSuccess(action.orders))
    case actionType.REQUEST_FAIL: return updateState(state, postFail())
    case actionType.POP_UP_TIMEOUT: return updateState(state, {popUp: null})
    default: return state
  }
}

export default detailsReducer
