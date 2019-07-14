import authReducer from './authReducer'

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual(
      {
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
    )
  })
  // it('should store a token on Log In', () => {
  //   expect(authReducer({stateObj}, {
  //     type: actionTypes.LOG_IN_SUCCESS,
  //     userId: 'userId',
  //     token: 'token',
  //     userEmail: 'email',
  //     loading: false,
  //     error: null,
  //     popUp: null 
  //   })).toEqual(stateObj with changes)
  // })
})