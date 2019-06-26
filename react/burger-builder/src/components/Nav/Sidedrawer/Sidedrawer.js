import React from 'react';
import classes from './scss/Sidedrawer.module.css';
import WithClass from '../../../hoc/WithClass';
import Logo from '../../Logo/Logo';
import NavItems from '../Navitems/Navitems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {

  return (
    <>
      <Backdrop />
      <WithClass classes={classes.SideDrawer}>
        <WithClass classes={classes.Logo}>
          <Logo />
        </WithClass>
        <nav>
          <NavItems />
        </nav>
      </WithClass>
    </>
  );
};

export default sideDrawer;