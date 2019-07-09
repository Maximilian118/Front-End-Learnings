import React from 'react'
import classes from './scss/Order.module.css'

const Order = props => 
  <div className={classes.Order}>
    <p>Ingredients: {props.ingredients.map(([key, value], i) => i === 3 ? `${key}: ${value}` : `${key}: ${value}, `)}</p>
    <p>Price: <strong>£ {props.price}</strong></p>
  </div>

export default Order