import React from 'react'
import classes from './scss/PopUp.module.css'

const PopUp = props => 
  <div className={classes.PopUp}>
    <h3>{props.message}</h3>
  </div>

export default PopUp