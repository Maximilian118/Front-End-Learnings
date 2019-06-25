import React, {Fragment} from 'react';
import classes from './scss/Layout.module.css'
import Toolbar from '../Nav/Toolbar/Toolbar';

const layout = props => (
  <Fragment>
    <Toolbar />
    <main className={classes.content}>
      {props.children}
    </main>
  </Fragment>
);

export default layout;