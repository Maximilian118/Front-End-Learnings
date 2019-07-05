import React from 'react';
import classes from './scss/Summary.module.css';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const Summary = props => 
  <div className={classes.Summary}>
    <h1>Thank you!</h1>
    <div className={classes.burger}>
      <Burger ingredients={props.ingredients}/>
    </div>
    <Button btnType='Danger' onClick={props.cancelHandler}>Cancel</Button>
    <Button btnType='Success' onClick={props.continueHandler}>Continue</Button>
  </div>

export default Summary;