import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './scss/Navlink.module.css'

const navLink = props => 
  <li className={classes.NavLink}>
    <NavLink to={props.link} activeClassName={classes.active}>{props.children}</NavLink>
  </li>

export default navLink