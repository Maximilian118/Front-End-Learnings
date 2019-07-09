import React from 'react'
import classes from './scss/BuildControls.module.css'
import WithClass from '../../../hoc/WithClass'
import Buttons from './Buttons/Buttons'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]

const buildControls = props => (
  <WithClass classes={classes.BuildControls}>
    <p>Current Price: <strong>£{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <Buttons 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.lessDisabled[ctrl.type]}/>
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.canPurchase}
      onClick={props.orderClicked}>Order</button>
  </WithClass>
)

export default buildControls