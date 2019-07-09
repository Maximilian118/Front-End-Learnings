import React from 'react'
import classes from './scss/Menulink.module.css'

const MenuLink = props => 
  <li className={classes.MenuLink}>
    <a 
      href={props.link}
      onClick={props.click}
      className={props.active ? classes.active : null}
    >{props.children}</a>
  </li>

export default MenuLink