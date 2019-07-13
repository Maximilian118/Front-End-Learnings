import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import classes from './scss/Auth.module.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import PopUp from '../../components/UI/PopUp/PopUp'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionCreators from '../../store/actions/actionCreators'

const Auth = props => {
  if (props.token) {
    return <Redirect to={props.redirect}/>
  }

  const logInHandler = (event, boolean) => {
    event.preventDefault();
    props.onButtonClicked(props.controls.email.value, props.controls.password.value, boolean)
  }

  return props.loading ? <Spinner /> : 
    <div className={classes.Wrapper}>
      <div className={classes.Auth}>
        <h3>Please Log in or Sign up!</h3>
        <form onSubmit={event => logInHandler(event, true)}>
          {Object.entries(props.controls).map(Element => <Input 
            key={Element[0]} 
            invalid={!Element[1].valid} 
            validation={Element[1].validation} 
            invalidMessage={Element[1].invalidMessage}
            invalidPopUp={Element[1].invalidPopUp}
            touched={Element[1].touched} 
            elementType={Element[1].elementType} 
            elementConfig={Element[1].elementConfig} 
            value={Element[1].value}
            changed={event => props.onInputChange(event, Element[0])} /> )}
            <Button btnType='Success' disabled={!props.formIsValid}>Log In</Button>
        </form>
        <Button onClick={event => logInHandler(event, false)} btnType='Success' disabled={!props.formIsValid}>Sign Up</Button>
      </div>
      {props.popUp ? <PopUp message={props.popUp} /> : null}
    </div>
}

const mapStateToProps = state => {
  return {
    controls: state.authReducer.controls,
    formIsValid: state.authReducer.formIsValid,
    loading: state.authReducer.loading,
    popUp: state.authReducer.popUp,
    token: state.authReducer.token,
    redirect: state.authReducer.redirect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (event, ident) => dispatch(actionCreators.auth(event, ident)),
    onButtonClicked: (email, pass, isLogIn) => dispatch(actionCreators.authHandler(email, pass, isLogIn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);