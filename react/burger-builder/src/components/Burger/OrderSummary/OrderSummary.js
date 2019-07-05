import React from 'react';
import { Link } from 'react-router-dom';
import classes from './scss/OrderSummary.module.css';
import WithClass from '../../../hoc/WithClass'
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientListItems = Object.keys(props.ingredients)
  .map(key => <li key={key}>{key}: {props.ingredients[key]}</li>);

  let ings = Object.entries(props.ingredients).map(([key, val]) => `${key}=${val}`).join('&');

  return (
    <WithClass classes={classes.OrderSummary}>
      <h3>Your Order:</h3>
      <p>You've created a burger with the following ingredients:</p>
      <ul>
        {ingredientListItems}
      </ul>
      <p><strong>Total Price: £{props.totalPrice.toFixed(2)}</strong></p>
      <p><strong>Checkout?</strong></p>
      <Link to='/'>
        <Button btnType="Danger" onClick={props.modalClose}>Cancel</Button>
      </Link>
      <Link to={`/checkout/${ings}`}>
        <Button btnType="Success">Continue</Button>
      </Link>
    </WithClass>
  );
};

export default orderSummary;