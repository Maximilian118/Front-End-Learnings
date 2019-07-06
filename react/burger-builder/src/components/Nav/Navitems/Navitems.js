import React from 'react';
import classes from './scss/Navitems.module.css';
import NavLink from './Navlink/Navlink';

const navItems = props => (
  <ul className={classes.NavItems}>
      <NavLink link="/">Burger Builder</NavLink>
      <NavLink link="/orders">Orders</NavLink>
  </ul>
);

export default navItems;