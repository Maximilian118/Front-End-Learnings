import * as actionType from '../actions/actionTypes'
import { updateState, authForm } from '../../shared/utility'

const initialState = {
  token: null,
  userId: null,
  userEmail: null,
  error: null,
  formIsValid: false,
  loading: false,
  popUp: null,
  redirect: '/',
  controls: {
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
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
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: {
        required: true,
        passwordRequired: true
        
      },
      valid: false,
      invalidMessage: 'Please enter a valid password',
      invalidPopUp: 'Password must be 6 to 13 characters, must include no spaces, at least one upper case letter and one number.',
      touched: false
    },
  }
}

const logInSuccess = (userId, token, email) => {
  return {
    userId: userId,
    token: token,
    userEmail: email,
    loading: false,
    error: null,
    popUp: null
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH: return updateState(state, authForm(state.controls, action.event, action.ident, state))
    case actionType.LOG_IN_START: return updateState(state, {error: null, loading: true})
    case actionType.LOG_IN_SUCCESS: return updateState(state, logInSuccess(action.data.localId, action.data.idToken, action.data.email))
    case actionType.LOG_IN_FAIL: return updateState(state, {error: action.error, loading: false, popUp: 'Whoops! Something went wrong!'})
    case actionType.LOG_OUT: return updateState(state, {token: null, userId: null, userEmail: null})
    case actionType.SET_REDIRECT: return updateState(state, {redirect: action.path})
    default: return state
  }
}

export default authReducer