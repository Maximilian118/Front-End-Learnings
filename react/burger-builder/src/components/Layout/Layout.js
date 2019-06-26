import React from 'react';
import classes from './scss/Layout.module.css'
import Toolbar from '../Nav/Toolbar/Toolbar';
import SideDrawer from '../Nav/Sidedrawer/Sidedrawer';

const layout = props => (
  <>
    <Toolbar />
    <SideDrawer />
    <main className={classes.content}>
      {props.children}
    </main>
  </>
);

export default layout;