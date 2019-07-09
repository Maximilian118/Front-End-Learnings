import React from 'react'
import classes from './scss/Logo.module.css'
import WithClass from '../../hoc/WithClass'
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = () => (
  <WithClass classes={classes.Logo}>
    <img src={burgerLogo} alt='A Burger'/>
  </WithClass>
)

export default logo