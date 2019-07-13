import React from 'react'
import classes from './scss/Input.module.css'

const Input = props => {
  let inputElement = null
  const inputClasses = [classes.InputElement]

  let invalidMessage = null
  if (props.invalid && props.validation && props.touched) {
    inputClasses.push(classes.Invalid)
  }
  if (props.invalid && props.touched) {
    invalidMessage = <p>{props.invalidMessage}</p>
  }
  

  switch (props.elementType) {
    case ('input'): 
      inputElement = <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}/> 
      break
    case ('textarea'): 
      inputElement = <textarea 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}/> 
      break
    case ('select'): 
      inputElement = <select 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
      </select> 
      break
    default: 
      inputElement = <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}/>
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      <div className={classes.InvalidMessage}>
        {invalidMessage}
      </div>
    </div>
  )
}

export default Input
