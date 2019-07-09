import * as actionType from '../actions'

const initialState = {
  formIsValid: false,
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
      touched: false,
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Email'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      invalidMessage: 'Please enter your Email.',
      touched: false,
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
      touched: false,
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
        minLength: 6,
        maxLength: 7
      },
      valid: false,
      invalidMessage: 'Please enter your post code.',
      touched: false,
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
      touched: false,
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          {value: '3 Minuets!', displayValue: '3 Minuets!'},
          {value: '1 Hour', displayValue: '1 Hour'},
          {value: '4 Hours', displayValue: '4 Hours'},
          {value: 'Sometime Today', displayValue: 'Sometime Today'},
          {value: 'By Ferry', displayValue: 'By Ferry'}
        ]
      },
      value: '3 Minuets!',
      validation: {},
      valid: true,
    },
    Comments: {
      elementType: 'textarea',
      elementConfig: {
        type: 'text',
        placeholder: 'Tell us about your burger experience!'
      },
      value: '',
      validation: {},
      valid: true,
    },
  }
}

const isValid = (val, rules) => {
  let valid = true
    if (rules.required) {
      valid = val.trim() !== '' && valid // trim = doesn't become true with whitespace.
    }
    if (rules.minLength) {
      valid = val.length >= rules.minLength && valid
    }
    if (rules.maxLength) {
      valid = val.length <= rules.maxLength && valid
    }
  return valid
}

const inputChangedHandler = (orderForm, event, ident) => {
  const order = {...orderForm}
  order[ident].value = event.target.value
  order[ident].valid = isValid(order[ident].value, order[ident].validation)
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

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DETAILS:
      return {
        formIsValid: isFormValid(state.orderForm),
        orderForm: inputChangedHandler(state.orderForm, action.event, action.ident)
      }
    default: return state
  }
}

export default burgerReducer