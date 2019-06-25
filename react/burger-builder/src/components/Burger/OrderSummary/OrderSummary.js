import React from 'react';
import classes from './scss/OrderSummary.module.css';
import WithClass from '../../../hoc/WithClass'
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientListItems = Object.keys(props.ingredients)
  .map(key => <li key={key}>{key}: {props.ingredients[key]}</li>);

  return (
    <WithClass classes={classes.OrderSummary}>
      <h3>Your Order:</h3>
      <p>You've created a burger with the following ingredients:</p>
      <ul>
        {ingredientListItems}
      </ul>
      <p><strong>Total Price: £{props.totalPrice.toFixed(2)}</strong></p>
      <p><strong>Checkout?</strong></p>
      <Button btnType="Danger" onClick={props.modalClose}>Cancel</Button>
      <Button btnType="Success" onClick={props.continue}>Continue</Button>
    </WithClass>
  );
};

export default orderSummary;