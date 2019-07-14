import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './scss/NavLink.module.css'

const navLink = props => 
  <li className={classes.NavLink}>
    <NavLink to={props.link} activeClassName={classes.active} onClick={props.onClick}>{props.children}</NavLink>
  </li>

export default navLink