import React from 'react';
import classes from './scss/Navitems.module.css';
import NavLink from './Navlink/Navlink';

const navItems = props => (
  <ul className={classes.NavItems}>
      <NavLink link="/" active>Burger Builder</NavLink>
      <NavLink link="/">Checkout</NavLink>
  </ul>
);

export default navItems;