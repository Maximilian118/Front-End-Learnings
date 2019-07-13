import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './scss/Summary.module.css'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import * as actionCreators from '../../../store/actions/actionCreators'

const Summary = props => {
  useEffect(() => {props.onSetRedirect('/checkout')}, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.Summary}>
      {props.token ? <h1>Thank you!</h1> : <h1>Please Sign Up to Continue!</h1>}
      <div className={classes.burger}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <div>
        {props.token ?
        <>
          <Button btnType='Success' onClick={props.continueHandler}>Continue to Checkout!</Button>
          <Button btnType='Danger' onClick={props.cancelHandler}>Cancel</Button>
        </>
        : <Link to='/auth'><Button btnType='Success'>Continue to Login Page!</Button></Link>}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    token: state.authReducer.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetRedirect: path => dispatch(actionCreators.setRedirect(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)