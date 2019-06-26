import React from 'react';
import classes from './scss/Toolbar.module.css';
import WithClass from '../../../hoc/WithClass';
import Logo from '../../../components/Logo/Logo';
import NavItems from '../Navitems/Navitems';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <WithClass classes={classes.Logo}>
      <Logo />
    </WithClass>
    <div></div>
    <nav className={classes.Desktop}>
      <NavItems />
    </nav>
  </header>
);
export default toolbar;