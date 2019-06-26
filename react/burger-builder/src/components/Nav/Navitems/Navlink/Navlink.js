import React from 'react';
import classes from './scss/Navlink.module.css';

const navLink = props => 
  <li className={classes.NavLink}>
    <a 
      href={props.link}
      className={props.active ? classes.active : null}
    >{props.children}</a>
  </li>

export default navLink;