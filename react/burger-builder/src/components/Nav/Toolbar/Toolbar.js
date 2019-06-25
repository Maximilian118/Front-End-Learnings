import React from 'react';
import classes from './scss/Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavItems from '../Navitems/Navitems';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo />
    <div></div>
    <nav>
      <NavItems />
    </nav>
  </header>
);
export default toolbar;