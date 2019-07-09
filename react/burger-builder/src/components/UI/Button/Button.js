import React from 'react'
import classes from './scss/Button.module.css'

const button = props => <button
  disabled={props.disabled}
  className={[classes.Button, classes[props.btnType]].join(' ')} 
  onClick={props.onClick}>{props.children}</button>

export default button