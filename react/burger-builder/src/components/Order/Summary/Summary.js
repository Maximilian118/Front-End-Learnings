import React from 'react'
import { connect } from 'react-redux'
import classes from './scss/Summary.module.css'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const Summary = props => 
  <div className={classes.Summary}>
    <h1>Thank you!</h1>
    <div className={classes.burger}>
      <Burger ingredients={props.ingredients}/>
    </div>
    <div>
      <Button btnType='Success' onClick={props.continueHandler}>Continue to Checkout!</Button>
      <Button btnType='Danger' onClick={props.cancelHandler}>Cancel</Button>
    </div>
  </div>

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients 
  }
}

export default connect(mapStateToProps)(Summary)